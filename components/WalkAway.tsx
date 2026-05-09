import { WALK_AWAY } from '@/data/content';

export default function WalkAway() {
  return (
    <section className="relative border-b border-gold-600/20 bg-ink-950 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-gold-400">
          What you walk away with
        </p>
        <h2 className="font-display text-4xl text-slate-50 sm:text-5xl">
          Not slides.{' '}
          <span className="italic text-gold-400">Hardware, contacts, and a year of follow-up.</span>
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WALK_AWAY.map((item, i) => (
            <div key={item.title} className="border-l border-gold-600/40 pl-5">
              <p className="font-mono text-xs text-gold-400">0{i + 1}</p>
              <h3 className="mt-2 font-display text-xl text-slate-50">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
