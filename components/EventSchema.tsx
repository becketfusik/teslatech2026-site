import { SPEAKERS } from '@/data/speakers';
import { TICKETS, getActiveEarlyBird, applyDiscount } from '@/data/pricing';

// JSON-LD Event schema for Google search and Google Events.
// https://developers.google.com/search/docs/appearance/structured-data/event
export default function EventSchema() {
  const active = getActiveEarlyBird();

  const offers = TICKETS.filter((t) => t.basePriceUsd > 0).map((t) => ({
    '@type': 'Offer',
    name: t.name,
    price: applyDiscount(t.basePriceUsd, active),
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    url: 'https://teslatech2026.com/#tickets',
    validFrom: '2026-01-01T00:00:00-07:00',
  }));

  const performers = SPEAKERS.map((s) => ({
    '@type': 'Person',
    name: s.name + (s.credentials ? `, ${s.credentials}` : ''),
    url: `https://teslatech2026.com/speakers/${s.slug}`,
  }));

  const data = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'TeslaTech 2026: ExtraOrdinary Technology Conference',
    description:
      'Five days of suppressed-science research, working hardware, and direct contact with the inventors. 33rd annual conference.',
    startDate: '2026-08-12T13:00:00-06:00',
    endDate: '2026-08-16T18:00:00-06:00',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/MixedEventAttendanceMode',
    location: [
      {
        '@type': 'Place',
        name: 'Crowne Plaza Albuquerque',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '1901 University Blvd NE',
          addressLocality: 'Albuquerque',
          addressRegion: 'NM',
          postalCode: '87102',
          addressCountry: 'US',
        },
      },
      {
        '@type': 'VirtualLocation',
        url: 'https://teslatech2026.com/#tickets',
      },
    ],
    image: ['https://teslatech2026.com/og-image.png'],
    organizer: {
      '@type': 'Organization',
      name: 'TeslaTech',
      url: 'https://teslatech.info',
    },
    sponsor: {
      '@type': 'Organization',
      name: 'TTN Network',
      url: 'https://titannetwork.io',
    },
    performer: performers,
    offers,
    url: 'https://teslatech2026.com',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
