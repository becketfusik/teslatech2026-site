import type { Metadata } from 'next';
import EventSchema from '@/components/EventSchema';
import './globals.css';

export const metadata: Metadata = {
  title: 'TeslaTech 2026: ExtraOrdinary Technology Conference',
  description:
    'August 12 to 16, 2026. Albuquerque, NM. Free energy. Anti-gravity. Field healing. Five days. Thirty researchers. The conference for the technology that wasn’t supposed to survive.',
  metadataBase: new URL('https://teslatech2026.com'),
  openGraph: {
    title: 'TeslaTech 2026: ExtraOrdinary Technology Conference',
    description:
      'Five days. Thirty researchers. Working hardware. August 12 to 16, Albuquerque.',
    url: 'https://teslatech2026.com',
    siteName: 'TeslaTech 2026',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TeslaTech 2026',
    description:
      'Free energy. Anti-gravity. Field healing. The conference for the technology that wasn’t supposed to survive.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <EventSchema />
      </head>
      <body className="grain bg-ink-950 text-slate-100 antialiased">{children}</body>
    </html>
  );
}
