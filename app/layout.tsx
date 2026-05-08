import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TeslaTech 2026 — ExtraOrdinary Technology Conference',
  description:
    'Aug 12–16, 2026 · Albuquerque, NM. Free energy. Frequency healing. Field propulsion. The breakthroughs were real — meet the researchers who refused to stop digging.',
  metadataBase: new URL('https://teslatech2026.com'),
  openGraph: {
    title: 'TeslaTech 2026 — ExtraOrdinary Technology Conference',
    description:
      'Five days. Thirty researchers. The science the textbooks left out. Aug 12–16, Albuquerque.',
    url: 'https://teslatech2026.com',
    siteName: 'TeslaTech 2026',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="grain bg-ink-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
