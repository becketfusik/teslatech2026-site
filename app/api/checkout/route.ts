import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { TICKETS, getActiveEarlyBird, getTicketPrice } from '@/data/pricing';

// Vercel Edge would be faster but Stripe SDK needs Node.
export const runtime = 'nodejs';

function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error('STRIPE_SECRET_KEY is not set');
  }
  return new Stripe(key, { apiVersion: '2024-06-20' });
}

export async function POST(req: NextRequest) {
  try {
    // Accept either form-encoded or JSON.
    let ticketId: string | null = null;
    const contentType = req.headers.get('content-type') || '';
    if (contentType.includes('application/x-www-form-urlencoded')) {
      const form = await req.formData();
      ticketId = String(form.get('ticketId') || '');
    } else {
      const body = await req.json().catch(() => ({}));
      ticketId = body.ticketId || null;
    }

    const ticket = TICKETS.find((t) => t.id === ticketId);
    if (!ticket) {
      return NextResponse.json({ error: 'Unknown ticket type' }, { status: 400 });
    }

    // Free ticket — skip Stripe entirely; mark as registered and forward to success.
    // (Production: write to a database / send a confirmation email here.)
    if (ticket.basePriceUsd === 0) {
      const url = new URL('/success', req.nextUrl.origin);
      url.searchParams.set('free', ticket.id);
      return NextResponse.redirect(url, { status: 303 });
    }

    const stripe = getStripe();

    // Resolve the Stripe price. We support two modes:
    //   1) STRIPE_PRICE_<TICKET> env var pointing at a pre-created Price ID (preferred)
    //   2) Inline price_data using the active early-bird discount applied here.
    // Mode 2 is convenient but the Price isn't reusable in the dashboard. Mode 1 is
    // recommended for production.
    const priceIdEnv = process.env[ticket.stripePriceIdEnvKey];

    const active = getActiveEarlyBird();
    // getTicketPrice returns base price for ticket.excludeFromEarlyBird, otherwise
    // the discounted amount. This is what we charge when using inline price_data.
    const finalPriceUsd = getTicketPrice(ticket);

    // Decide how to handle discounts. Stripe forbids using `discounts` and
    // `allow_promotion_codes` on the same session — they're mutually exclusive.
    //   - If we have a pre-created Price ID AND an active early-bird tier AND a
    //     matching coupon ID is configured AND the ticket isn't exempt, auto-apply.
    //   - Otherwise, allow the customer to enter a promotion code manually.
    // Tickets with excludeFromEarlyBird (e.g. Livestream) never receive auto-coupon
    // so their displayed price always matches what Stripe charges.
    const couponId = active
      ? process.env[`STRIPE_COUPON_${active.percentOff}`]
      : undefined;
    const shouldAutoApplyCoupon = Boolean(
      priceIdEnv && couponId && !ticket.excludeFromEarlyBird,
    );

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        priceIdEnv
          ? {
              // When using a pre-created Stripe Price, discounts must be passed via
              // promotion codes / coupons rather than ad-hoc price overrides.
              price: priceIdEnv,
              quantity: 1,
            }
          : {
              price_data: {
                currency: 'usd',
                product_data: {
                  // Keep checkout copy NEUTRAL — no medical claims, no marketing language.
                  // This is what Stripe's underwriting team will see.
                  name: `TeslaTech 2026 — ${ticket.name}`,
                  description: `Conference Registration · Aug 12–16, 2026 · Albuquerque, NM`,
                  metadata: { ticket_id: ticket.id },
                },
                unit_amount: finalPriceUsd * 100,
              },
              quantity: 1,
            },
      ],
      ...(shouldAutoApplyCoupon
        ? { discounts: [{ coupon: couponId! }] }
        : { allow_promotion_codes: true }),
      metadata: {
        ticket_id: ticket.id,
        early_bird_tier: active?.label ?? 'standard',
        early_bird_percent: String(active?.percentOff ?? 0),
      },
      success_url: `${req.nextUrl.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.nextUrl.origin}/cancel`,
      // Collect attendee identity. Conferences need this for badges.
      customer_creation: 'if_required',
      phone_number_collection: { enabled: true },
      custom_fields: [
        {
          key: 'attendee_name',
          label: { type: 'custom', custom: 'Attendee full name (for badge)' },
          type: 'text',
        },
      ],
    });

    if (!session.url) {
      return NextResponse.json({ error: 'Stripe did not return a session URL' }, { status: 500 });
    }
    return NextResponse.redirect(session.url, { status: 303 });
  } catch (err) {
    console.error('Checkout error:', err);
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
