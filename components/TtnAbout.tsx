import Image from 'next/image';
import { TTN } from '@/data/content';

export default function TtnAbout() {
  return (
    <section className="relative border-b border-gold-600/20 bg-ink-900 py-16">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col gap-6 border border-slate-800 bg-ink-950 p-8 sm:flex-row sm:items-center sm:gap-8">
          <a
            href={TTN.url}
            target="_blank"
            rel="noreferrer"
            className="flex-shrink-0"
            aria-label={`${TTN.name} — ${TTN.tagline}`}
          >
            <Image
              src={TTN.logo}
              alt={`${TTN.name} logo`}
              width={88}
              height={88}
              className="h-20 w-20 object-contain sm:h-24 sm:w-24"
            />
          </a>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold-400">
              {TTN.role}
            </p>
            <h3 className="ttn-wordmark mt-2 text-3xl font-medium tracking-wider text-slate-50 sm:text-4xl">
              {TTN.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{TTN.about}</p>
            <a
              href={TTN.url}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gold-400 transition hover:text-gold-500"
            >
              titannetwork.io
              <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
