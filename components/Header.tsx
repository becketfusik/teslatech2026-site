import Link from 'next/link';
import { LIVESTREAM } from '@/data/content';

// Site-wide header. Sticky, sits above all content.
// Currently displays a wordmark for "Tesla Tech 2026". Swap for a logo image later
// by replacing the <span> with an <Image src="/brand/teslatech-logo.png" .../>.
export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gold-600/20 bg-ink-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        {/* Brand — wordmark for now, replace with <Image> when logo is ready */}
        <Link href="/" className="flex items-center gap-2 transition hover:opacity-90">
          <span className="font-display text-xl font-medium tracking-tight text-slate-50 sm:text-2xl">
            Tesla Tech <span className="text-gold-400">2026</span>
          </span>
        </Link>

        {/* Section anchor nav — desktop only */}
        <nav className="hidden items-center gap-6 font-mono text-xs uppercase tracking-widest text-slate-400 lg:flex">
          <Link href="/#featured" className="transition hover:text-gold-400">
            Speakers
          </Link>
          <Link href="/#agenda" className="transition hover:text-gold-400">
            Agenda
          </Link>
          <Link href="/#tickets" className="transition hover:text-gold-400">
            Tickets
          </Link>
          <Link href="/#travel" className="transition hover:text-gold-400">
            Travel
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          {/* HowTube livestream channel link */}
          <a
            href={LIVESTREAM.url}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-slate-300 transition hover:text-gold-400 sm:inline-flex"
          >
            <span
              aria-hidden
              className="inline-block h-1.5 w-1.5 rounded-full bg-ember-500"
            />
            Watch on {LIVESTREAM.platform}
            <span aria-hidden className="text-slate-500">↗</span>
          </a>

          {/* Compact Reserve CTA on the right */}
          <Link
            href="/#tickets"
            className="inline-flex items-center gap-2 bg-gold-500 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-ink-950 transition hover:bg-gold-400 sm:px-5 sm:text-xs"
          >
            Reserve
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
