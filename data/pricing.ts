// Pricing pulled directly from the 2026 Tesla Tech Conference Guide.
// Stripe price IDs are placeholders, replace with real IDs from the Stripe dashboard.
// See README.md.

export type TicketTier = {
  id: string;
  name: string;
  basePriceUsd: number; // before any early-bird discount
  description: string;
  notes?: string;
  stripePriceIdEnvKey: string;
  popular?: boolean;
  features: string[]; // what's included
};

export const TICKETS: TicketTier[] = [
  {
    id: 'basic',
    name: 'Basic Registration',
    basePriceUsd: 450,
    description: 'Full conference access, August 12 to 16. Member or non-member.',
    stripePriceIdEnvKey: 'STRIPE_PRICE_BASIC',
    popular: true,
    features: [
      'All conference sessions Aug 12–16',
      'Vendor expo access',
      'Five evening socials with tapas bar',
      'Conference packet',
      'Bonus interviews with Karen Elkins',
    ],
  },
  {
    id: 'spouse',
    name: 'Spouse Registration',
    basePriceUsd: 400,
    description: 'Full access for the spouse of a registered attendee.',
    stripePriceIdEnvKey: 'STRIPE_PRICE_SPOUSE',
    features: [
      'All conference sessions Aug 12–16',
      'Vendor expo access',
      'Five evening socials with tapas bar',
      'Conference packet',
      'Bonus interviews with Karen Elkins',
    ],
  },
  {
    id: 'student',
    name: 'Student (Under 21)',
    basePriceUsd: 250,
    description: 'Full access for students under 21. Bring valid ID.',
    stripePriceIdEnvKey: 'STRIPE_PRICE_STUDENT',
    features: [
      'All conference sessions Aug 12–16',
      'Vendor expo access',
      'Five evening socials with tapas bar',
      'Conference packet',
      'Bonus interviews with Karen Elkins',
    ],
  },
  {
    id: 'teen',
    name: 'Teenager (19 and Under)',
    basePriceUsd: 0,
    description: 'Free admission. Registration required to receive a badge.',
    notes: 'Free, registration confirms badge issuance.',
    stripePriceIdEnvKey: 'STRIPE_PRICE_TEEN',
    features: [
      'All conference sessions Aug 12–16',
      'Vendor expo access',
      'Five evening socials with tapas bar',
    ],
  },
  {
    id: 'workshop',
    name: 'Wednesday Workshop',
    basePriceUsd: 50,
    description: 'Aug 12, 1:00 PM. Bernard Konkin, Hydrogen workshop and lecture.',
    stripePriceIdEnvKey: 'STRIPE_PRICE_WORKSHOP',
    features: [
      'Wednesday workshop only (Bernard Konkin, 1 PM)',
      'Vendor expo access (Wed)',
      'Wednesday evening social',
    ],
  },
  {
    id: 'livestream',
    name: 'Livestream Only',
    basePriceUsd: 99,
    description: 'Watch every session online. No travel required.',
    stripePriceIdEnvKey: 'STRIPE_PRICE_LIVESTREAM',
    features: [
      'All conference sessions Aug 12–16 online',
      'Bonus interviews with Karen Elkins online',
      'Session recordings access',
    ],
  },
];

export type EarlyBirdTier = {
  beforeISO: string;
  percentOff: number;
  label: string;
};

// From the PDF:
// 25% off members registered before Apr 30
// 20% off members registered before Jun 30
// 15% off members registered before Jul 31
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
  return getActiveEarlyBird(now);
}

export function applyDiscount(basePrice: number, tier: EarlyBirdTier | null): number {
  if (!tier || basePrice === 0) return basePrice;
  const discounted = basePrice * (1 - tier.percentOff / 100);
  return Math.round(discounted);
}

// Reframed as reassurance, not a legal disclaimer.
export const REFUND_POLICY_HEADLINE = 'Stress-free booking.';
export const REFUND_POLICY_BODY = `Life happens. Swap your registration up to July 14, 2026 for credit toward TeslaTech goods or services. A $25 service fee applies. We don't issue cash refunds, and after July 14 registrations become non-refundable.`;
