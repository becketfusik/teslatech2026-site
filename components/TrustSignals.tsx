import { TRUST_SIGNALS } from '@/data/content';

export default function TrustSignals() {
  return (
    <section className="relative border-b border-gold-600/20 bg-ink-900 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
          {TRUST_SIGNALS.map((t) => (
            <div key={t.label} className="text-center">
              <dt className="font-display text-4xl text-gold-400 sm:text-5xl">{t.stat}</dt>
              <dd className="mt-1 font-mono text-[10px] uppercase tracking-widest text-slate-400">
                {t.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
