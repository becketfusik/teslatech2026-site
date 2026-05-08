# TeslaTech 2026 — Landing Page

A Next.js 14 (App Router) + Tailwind landing page for the 2026 ExtraOrdinary Technology Conference, with a server-side Stripe Checkout integration that auto-applies the active early-bird discount.

## What's in here

```
teslatech2026-site/
├── app/
│   ├── layout.tsx, page.tsx, globals.css
│   ├── success/, cancel/                 # post-checkout pages
│   └── api/checkout/route.ts             # Stripe Checkout Session creator
├── components/                           # Hero, Pitch, Speakers, Agenda, Pricing, Hotel, Vendors, FAQ, Footer
├── data/
│   ├── speakers.ts                       # Source of truth — 30 speakers from the PDF
│   ├── agenda.ts                         # Day-by-day schedule grouped by track
│   └── pricing.ts                        # Tickets, early-bird tiers, refund policy
├── public/speakers/                      # Speaker poster images (rendered from the PDF)
├── .env.example                          # Copy to .env.local
└── README.md
```

## Local dev

```bash
cd teslatech2026-site
npm install
cp .env.example .env.local
# fill in STRIPE_SECRET_KEY (and optionally Price IDs)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stripe setup — step by step

1. **Create a Stripe account** at <https://dashboard.stripe.com>. Use a real business name; "TeslaTech" is fine. Apply for activation immediately — they may take 1–3 business days to approve, and they may ask for proof of business (EIN, voided check, articles of incorporation if you have them). **Don't list the conference until activation is complete.** Underwriting friction is the #1 reason to delay launch.
2. **Verify your bank account.** Stripe will not pay you out until this is done.
3. **Create six Products** in Stripe → Products. For each, create one Price at the **base** (non-discounted) amount in USD:
   - Basic Registration — $450
   - Spouse Registration — $400
   - Student (Under 21) — $250
   - Teenager (19 and Under) — $0 (skip — the API route handles free tickets without Stripe)
   - Wednesday Workshop — $50
   - Livestream Only — $99

   Copy each Price ID (looks like `price_1Pxxxxxx`) into `.env.local` under the matching `STRIPE_PRICE_*` variable.

4. **Create three Coupons** in Stripe → Coupons:
   - `FOUNDERS25` — 25% off
   - `EARLYBIRD20` — 20% off
   - `FINAL15` — 15% off

   These are applied automatically by the API route based on today's date.

5. **Get your API keys** from Stripe → Developers → API keys. Paste the secret key (`sk_live_...` for production, `sk_test_...` for test mode) into `STRIPE_SECRET_KEY` in `.env.local`.

6. **Test the flow** with Stripe test mode (`sk_test_...` key + test card `4242 4242 4242 4242`, any future expiry, any 3-digit CVC). Click each "Buy ticket" button on `/`, complete checkout, verify you land on `/success` and see a session in the Stripe dashboard.

7. **Switch to live mode** by replacing the test secret key with your live one. Re-create the Products + Prices + Coupons in live mode (Stripe keeps test and live data fully separate).

### A note on the checkout UX (read this — it matters for Stripe approval)

The API route deliberately keeps the Stripe-facing copy **neutral**: "Conference Registration · Aug 12–16, 2026 · Albuquerque, NM." No "frequency healing," no "MedBed," no "free energy." Stripe's underwriting team reads product names and descriptions when reviewing accounts, and aggressive medical/health language is a known trigger for account holds. The marketing copy on the landing page is unaffected — only what passes through Stripe is sanitized.

## Deploy to Vercel

1. **Buy the domain** `teslatech2026.com` (Namecheap, Cloudflare Registrar, Porkbun — all fine, ~$12/yr).
2. **Push this folder to a GitHub repo.** (Or use Vercel's CLI: `npx vercel`.)
3. **Import the repo at <https://vercel.com/new>.** Vercel auto-detects Next.js — no configuration needed.
4. **Add environment variables** in Vercel Project Settings → Environment Variables. Paste in everything from `.env.local` (use the **live** Stripe key for production, test for preview).
5. **Add the custom domain** in Project Settings → Domains. Vercel will give you DNS records. Add them at your registrar:
   - `A` record: `@` → `76.76.21.21`
   - `CNAME` record: `www` → `cname.vercel-dns.com`
   DNS propagation: 5 minutes to a few hours.
6. **Update Stripe success/cancel URLs.** Already handled — they use `req.nextUrl.origin` so they'll automatically use the Vercel URL.
7. **Test the live flow with a real card** for $1 (you can use a test ticket created with a $1 Stripe price), then refund yourself.

## Updating speaker info

Edit `data/speakers.ts`. The page rebuilds automatically when you redeploy. To add a speaker, add an object to the `SPEAKERS` array — the agenda and speaker grid both read from this single source.

## Updating speaker images

The current images are rendered from the PDF and bake in the conference's Canva-designed poster art. To replace any of them with a higher-resolution version or a different photo, drop a JPG into `public/speakers/{slug}.jpg` (overwriting the existing file). Recommended: 625×1025 or higher, same 5:8 aspect ratio.

## Adding a /speakers/[slug] detail page (optional)

Currently the speaker grid hover-reveals abstract on desktop. To build a dedicated speaker page:

```tsx
// app/speakers/[slug]/page.tsx
import { SPEAKERS } from '@/data/speakers';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return SPEAKERS.map((s) => ({ slug: s.slug }));
}

export default function SpeakerPage({ params }: { params: { slug: string } }) {
  const speaker = SPEAKERS.find((s) => s.slug === params.slug);
  if (!speaker) return notFound();
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="font-display text-5xl">{speaker.name}</h1>
      <p className="mt-4 text-xl text-gold-400">{speaker.talkTitle}</p>
      <p className="mt-8 text-slate-300">{speaker.fullAbstract ?? speaker.abstract}</p>
      <p className="mt-6 text-sm text-slate-400">{speaker.bio}</p>
    </main>
  );
}
```

## What's intentionally NOT built (and why)

- **Webhooks for post-purchase fulfillment.** You'll want a `app/api/webhooks/stripe/route.ts` that listens for `checkout.session.completed` and (a) writes the attendee to a database, (b) emails their badge details. We didn't build it because there's no DB or email service connected yet. Add Resend or Postmark for email, Postgres or Supabase for DB, then wire up the webhook.
- **Tax handling.** New Mexico gross receipts tax is ~7.875% on conference admissions in Albuquerque. Stripe Tax can handle this automatically — enable it in Stripe → Tax and toggle `automatic_tax: { enabled: true }` in the checkout session.
- **Multi-quantity tickets.** A single buyer can currently only buy one ticket of one type per checkout. If you want "I need 1 basic + 1 spouse + 2 student" in a single transaction, refactor the form to collect quantities and pass multiple `line_items`.
- **Attendee data CSV export.** Use Stripe's API or the dashboard. Once you have webhooks + a DB, this becomes trivial.
- **Speaker detail pages.** Skeleton above. Build them when you want SEO juice on each speaker's name.

## Risks worth knowing about

- **Stripe account holds.** If Stripe ever requests information about your business or freezes funds, respond fast and provide everything they ask for. Hold-up patterns in this category usually involve descriptions like "free energy device sales" or "medical healing claims." Keep the conference framed as a conference, not a device marketplace.
- **Refund cliff.** Your policy says no refunds after July 14. Stripe's `customer-initiated chargeback` flow doesn't honor your policy — if a buyer disputes a charge with their bank, you'll need to fight it with documentation (their signed agreement to the refund policy). Consider adding a checkbox at checkout: "I have read and agree to the refund policy." (Use a Stripe Checkout `consent_collection` block.)
