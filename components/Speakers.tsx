import Image from 'next/image';
import { SPEAKERS } from '@/data/speakers';

export default function Speakers() {
  return (
    <section
      id="speakers"
      className="relative border-b border-gold-600/20 bg-ink-950 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 border-b border-gold-600/20 pb-8">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-gold-400">
              The lineup
            </p>
            <h2 className="font-display text-4xl text-slate-50 sm:text-5xl">
              Thirty researchers.
              <span className="italic text-gold-400"> Five days.</span>
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm text-slate-400 sm:block">
            Hover any card for the abstract. Times listed are local Mountain Time.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {SPEAKERS.map((speaker) => (
            <article key={speaker.slug} className="speaker-card aspect-[5/8] bg-ink-800">
              <Image
                src={speaker.image}
                alt={`${speaker.name} — ${speaker.talkTitle}`}
                fill
                sizes="(min-width: 1280px) 18vw, (min-width: 1024px) 22vw, (min-width: 768px) 30vw, 45vw"
                className="object-cover"
              />
              <div className="overlay">
                <p className="font-mono text-[10px] uppercase tracking-widest text-gold-400">
                  {speaker.day} · {speaker.time}
                </p>
                <h3 className="mt-1 font-display text-xl leading-tight text-slate-50">
                  {speaker.name}
                </h3>
                <p className="mt-2 line-clamp-3 text-xs leading-snug text-slate-300">
                  {speaker.talkTitle}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
