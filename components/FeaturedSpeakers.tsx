import Image from 'next/image';
import Link from 'next/link';
import { FEATURED_SPEAKERS } from '@/data/speakers';

export default function FeaturedSpeakers() {
  return (
    <section
      id="featured"
      className="relative border-b border-gold-600/20 bg-ink-950 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-4 border-b border-gold-600/20 pb-8 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-gold-400">
              Featured speakers
            </p>
            <h2 className="font-display text-4xl text-slate-50 sm:text-5xl">
              The names you came for.
            </h2>
          </div>
          <Link
            href="#all-speakers"
            className="self-start font-mono text-xs uppercase tracking-widest text-slate-400 transition hover:text-gold-400"
          >
            See the full lineup of 28 sessions →
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_SPEAKERS.map((s) => (
            <Link
              key={s.slug}
              href={`/speakers/${s.slug}`}
              className="group relative block aspect-[5/8] overflow-hidden bg-ink-800 transition hover:-translate-y-1"
            >
              <Image
                src={s.image}
                alt={`${s.name} — ${s.talkTitle}`}
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                className="object-cover transition group-hover:scale-105"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950 via-ink-950/85 to-transparent p-6">
                <p className="font-mono text-[10px] uppercase tracking-widest text-gold-400">
                  {s.day} · {s.time}
                </p>
                <h3 className="mt-2 font-display text-2xl leading-tight text-slate-50">
                  {s.name}
                  {s.credentials && (
                    <span className="ml-2 font-body text-sm text-slate-400">
                      {s.credentials}
                    </span>
                  )}
                </h3>
                {s.featuredHeadline && (
                  <p className="mt-2 font-display italic text-base text-gold-400">
                    “{s.featuredHeadline}”
                  </p>
                )}
                <p className="mt-3 line-clamp-2 text-sm text-slate-300">{s.teaser}</p>
                <p className="mt-3 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-slate-200 group-hover:text-gold-400">
                  Read full session
                  <span aria-hidden>→</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
