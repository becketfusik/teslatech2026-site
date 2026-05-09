import { AUDIENCE_SEGMENTS } from '@/data/content';

export default function AudienceSegments() {
  return (
    <section className="relative border-b border-gold-600/20 bg-ink-900 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-gold-400">
          Who this is for
        </p>
        <h2 className="font-display text-4xl text-slate-50 sm:text-5xl">
          Find yourself.
        </h2>
        <p className="mt-4 max-w-2xl text-slate-400">
          The conference isn’t for one kind of person. It is for four. Pick the closest match.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {AUDIENCE_SEGMENTS.map((seg) => (
            <div
              key={seg.label}
              className="border border-slate-800 bg-ink-950 p-6 transition hover:border-gold-600/40"
            >
              <h3 className="font-display text-xl text-slate-50">{seg.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{seg.pitch}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
