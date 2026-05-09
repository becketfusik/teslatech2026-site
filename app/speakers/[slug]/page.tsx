import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SPEAKERS, TRACK_COLORS } from '@/data/speakers';
import Footer from '@/components/Footer';

export function generateStaticParams() {
  return SPEAKERS.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const speaker = SPEAKERS.find((s) => s.slug === params.slug);
  if (!speaker) return { title: 'Speaker not found' };
  return {
    title: `${speaker.name}: ${speaker.talkTitle} — TeslaTech 2026`,
    description: speaker.teaser,
  };
}

export default function SpeakerPage({ params }: { params: { slug: string } }) {
  const speaker = SPEAKERS.find((s) => s.slug === params.slug);
  if (!speaker) return notFound();

  return (
    <main className="bg-ink-950">
      <div className="border-b border-gold-600/20">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <Link
            href="/#all-speakers"
            className="font-mono text-xs uppercase tracking-widest text-slate-400 transition hover:text-gold-400"
          >
            ← Back to all speakers
          </Link>
        </div>
      </div>

      <article className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div className="relative aspect-[5/8] overflow-hidden bg-ink-800">
            <Image
              src={speaker.image}
              alt={`${speaker.name}, ${speaker.talkTitle}`}
              fill
              sizes="(min-width: 1024px) 33vw, 90vw"
              className="object-cover"
              priority
            />
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold-400">
              {speaker.day} · {speaker.date} · {speaker.time}
            </p>
            <span
              className={`mt-3 inline-block border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest ${TRACK_COLORS[speaker.track]}`}
            >
              {speaker.trackLabel}
            </span>

            <h1 className="mt-6 font-display text-4xl leading-tight text-slate-50 sm:text-5xl">
              {speaker.name}
              {speaker.credentials && (
                <span className="ml-3 font-body text-xl text-slate-400">
                  {speaker.credentials}
                </span>
              )}
            </h1>

            <p className="mt-4 font-display text-2xl text-gold-400">{speaker.talkTitle}</p>

            <div className="mt-10">
              <h2 className="font-mono text-xs uppercase tracking-widest text-slate-500">
                Abstract
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-slate-200">
                {speaker.abstract}
              </p>
            </div>

            <div className="mt-10">
              <h2 className="font-mono text-xs uppercase tracking-widest text-slate-500">
                About
              </h2>
              <p className="mt-3 leading-relaxed text-slate-300">{speaker.bio}</p>
            </div>

            {speaker.links && speaker.links.length > 0 && (
              <div className="mt-10">
                <h2 className="font-mono text-xs uppercase tracking-widest text-slate-500">
                  Links
                </h2>
                <ul className="mt-3 flex flex-wrap gap-3">
                  {speaker.links.map((l) => (
                    <li key={l.url}>
                      <a
                        href={l.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 border border-slate-700 px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-slate-200 transition hover:border-gold-500 hover:text-gold-400"
                      >
                        {l.label}
                        <span aria-hidden>↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-12 border-t border-slate-800 pt-8">
              <Link
                href="/#tickets"
                className="inline-flex items-center gap-2 bg-gold-500 px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink-950 transition hover:bg-gold-400"
              >
                Reserve your seat
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
