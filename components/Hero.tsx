import Image from 'next/image';
import Link from 'next/link';
import HeroCountdown from './HeroCountdown';
import { TTN } from '@/data/content';
import { getMinPaidPrice } from '@/data/pricing';

export default function Hero() {
  const minPrice = getMinPaidPrice();
  return (
    <section className="relative overflow-hidden border-b border-gold-600/20 bg-arc-gradient">
      {/* Decorative SVG arcs */}
      <svg
        aria-hidden
        className="electric-arc absolute -right-40 top-0 h-full w-[60%] opacity-30 mix-blend-screen"
        viewBox="0 0 800 800"
        fill="none"
      >
        <defs>
          <radialGradient id="arc-glow" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#7ab8ff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#7ab8ff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="600" cy="300" r="250" fill="url(#arc-glow)" />
        <path
          d="M 100 700 Q 300 400 500 500 T 800 200"
          stroke="#7ab8ff"
          strokeWidth="1"
          opacity="0.4"
        />
        <path
          d="M 50 600 Q 250 350 450 450 T 750 150"
          stroke="#3a8fff"
          strokeWidth="0.5"
          opacity="0.3"
        />
      </svg>

      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28 lg:py-36">
        <div className="max-w-3xl">
          {/* TTN PRESENTS kicker */}
          <a
            href={TTN.url}
            target="_blank"
            rel="noreferrer"
            className="mb-5 inline-flex items-center gap-2 transition hover:opacity-80"
          >
            <Image
              src={TTN.logo}
              alt={`${TTN.name} logo`}
              width={20}
              height={20}
              className="h-5 w-5 object-contain"
            />
            <span className="ttn-wordmark text-sm tracking-wider text-slate-300">
              {TTN.name}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">
              presents
            </span>
          </a>

          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-gold-400">
            33rd Annual ExtraOrdinary Technology Conference
          </p>

          <h1 className="font-display text-5xl font-medium leading-[1.05] text-slate-50 sm:text-6xl lg:text-7xl">
            Free energy. Anti-gravity. Field healing.
            <span className="mt-2 block italic text-gold-400">
              The conference for the technology that wasn’t supposed to survive.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            Five days. Thirty researchers. Working hardware on every panel. Albuquerque,
            August 12 to 16.
          </p>

          {/* Countdown */}
          <div className="mt-8">
            <HeroCountdown />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#tickets"
              className="group relative inline-flex items-center gap-2 bg-gold-500 px-7 py-4 font-mono text-sm uppercase tracking-widest text-ink-950 transition hover:bg-gold-400"
            >
              Reserve your seat from ${minPrice}
              <span aria-hidden className="transition group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="#featured"
              className="inline-flex items-center gap-2 border border-slate-700 px-7 py-4 font-mono text-sm uppercase tracking-widest text-slate-200 transition hover:border-gold-500 hover:text-gold-400"
            >
              See the lineup
            </Link>
            <a
              href="/teslatech-2026.ics"
              download
              className="inline-flex items-center gap-2 px-2 py-4 font-mono text-xs uppercase tracking-widest text-slate-400 transition hover:text-gold-400"
            >
              + Add to calendar
            </a>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-x-8 gap-y-6 text-sm sm:grid-cols-4">
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-slate-500">Dates</dt>
              <dd className="mt-1 font-display text-2xl text-slate-100">Aug 12–16</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-slate-500">Where</dt>
              <dd className="mt-1 font-display text-2xl text-slate-100">Albuquerque, NM</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-slate-500">Speakers</dt>
              <dd className="mt-1 font-display text-2xl text-slate-100">30+</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-slate-500">Format</dt>
              <dd className="mt-1 font-display text-2xl text-slate-100">In-person + Livestream</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
