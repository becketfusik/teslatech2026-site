// Pricing pulled directly from the 2026 Tesla Tech Conference Guide.
// Stripe price IDs are placeholders — replace with real IDs from the Stripe dashboard
// after creating the Products. See README.md.

export type TicketTier = {
  id: string;
  name: string;
  basePriceUsd: number; // before any early-bird discount
  description: string;
  notes?: string;
  stripePriceIdEnvKey: string; // env var name holding the Stripe price ID
};

export const TICKETS: TicketTier[] = [
  {
    id: 'basic',
    name: 'Basic Registration',
    basePriceUsd: 450,
    description: 'Full conference access, August 12–16. Member or non-member.',
    stripePriceIdEnvKey: 'STRIPE_PRICE_BASIC',
  },
  {
    id: 'spouse',
    name: 'Spouse Registration',
    basePriceUsd: 400,
    description: 'Full access for the spouse of a registered attendee.',
    stripePriceIdEnvKey: 'STRIPE_PRICE_SPOUSE',
  },
  {
    id: 'student',
    name: 'Student (Under 21)',
    basePriceUsd: 250,
    description: 'Full access for students under 21 — bring valid ID.',
    stripePriceIdEnvKey: 'STRIPE_PRICE_STUDENT',
  },
  {
    id: 'teen',
    name: 'Teenager (19 and Under)',
    basePriceUsd: 0,
    description: 'Free, but registration is required to receive a badge.',
    notes: 'Free admission — confirms badge issuance.',
    stripePriceIdEnvKey: 'STRIPE_PRICE_TEEN',
  },
  {
    id: 'workshop',
    name: 'Wednesday Workshop',
    basePriceUsd: 50,
    description: 'Aug 12, 1:00 PM. Bernard Konkin — Hydrogen workshop/lecture.',
    stripePriceIdEnvKey: 'STRIPE_PRICE_WORKSHOP',
  },
  {
    id: 'livestream',
    name: 'Livestream Only',
    basePriceUsd: 99,
    description: 'Watch every session online. No travel required.',
    stripePriceIdEnvKey: 'STRIPE_PRICE_LIVESTREAM',
  },
];

export type EarlyBirdTier = {
  // 'before' is exclusive — discount applies up to and including the day before
  beforeISO: string;
  percentOff: number;
  label: string;
};

// From the PDF:
// 25% — members registered before Apr 30
// 20% — members registered before Jun 30
// 15% — members registered before Jul 31
export const EARLY_BIRD_TIERS: EarlyBirdTier[] = [
  { beforeISO: '2026-04-30', percentOff: 25, label: 'Founders Rate' },
  { beforeISO: '2026-06-30', percentOff: 20, label: 'Early Bird' },
  { beforeISO: '2026-07-31', percentOff: 15, label: 'Final Discount' },
];

export function getActiveEarlyBird(now: Date = new Date()): EarlyBirdTier | null {
  for (const tier of EARLY_BIRD_TIERS) {
    if (now < new Date(tier.beforeISO + 'T00:00:00Z')) {
      return tier;
    }
  }
  return null;
}

export function getNextDeadline(now: Date = new Date()): EarlyBirdTier | null {
  const active = getActiveEarlyBird(now);
  return active;
}

export function applyDiscount(basePrice: number, tier: EarlyBirdTier | null): number {
  if (!tier || basePrice === 0) return basePrice;
  const discounted = basePrice * (1 - tier.percentOff / 100);
  // Round to whole dollar — conference convention.
  return Math.round(discounted);
}

// Refund policy verbatim from PDF.
export const REFUND_POLICY = `Exchange only — no cash refunds. Service fee of $25 on all refunds. Refund credit applies only to goods/services offered by TeslaTech. Cancellations after July 14, 2026 and "no shows" are non-refundable.`;
