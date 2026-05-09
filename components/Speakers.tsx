'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { REGULAR_SPEAKERS } from '@/data/speakers';

export default function Speakers() {
  // Track which card is "tapped open" on mobile (one at a time).
  const [revealed, setRevealed] = useState<string | null>(null);

  return (
    <section
      id="all-speakers"
      className="relative border-b border-gold-600/20 bg-ink-950 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-4 border-b border-gold-600/20 pb-8 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-gold-400">
              The full lineup
            </p>
            <h2 className="font-display text-4xl text-slate-50 sm:text-5xl">
              Twenty-three more sessions.
            </h2>
          </div>
          <p className="max-w-xs text-sm text-slate-400 sm:text-right">
            Tap any card to read the abstract. Click through for the full session details.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {REGULAR_SPEAKERS.map((s) => {
            const isRevealed = revealed === s.slug;
            return (
              <article
                key={s.slug}
                className="speaker-card aspect-[5/8] bg-ink-800"
                data-revealed={isRevealed ? 'true' : 'false'}
                onClick={() => setRevealed(isRevealed ? null : s.slug)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setRevealed(isRevealed ? null : s.slug);
                  }
                }}
              >
                <Image
                  src={s.image}
                  alt={`${s.name} — ${s.talkTitle}`}
                  fill
                  sizes="(min-width: 1280px) 18vw, (min-width: 1024px) 22vw, (min-width: 768px) 30vw, 45vw"
                  className="object-cover"
                />
                <div className="overlay">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-gold-400">
                    {s.day} · {s.time}
                  </p>
                  <h3 className="mt-1 font-display text-lg leading-tight text-slate-50">
                    {s.name}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-xs leading-snug text-slate-300">
                    {s.teaser}
                  </p>
                  <Link
                    href={`/speakers/${s.slug}`}
                    onClick={(e) => e.stopPropagation()}
                    className="mt-3 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-gold-400 hover:text-gold-500"
                  >
                    Full session
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
