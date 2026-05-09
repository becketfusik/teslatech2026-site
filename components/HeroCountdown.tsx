'use client';

import { useEffect, useState } from 'react';
import { getActiveEarlyBird } from '@/data/pricing';

export default function HeroCountdown() {
  const [now, setNow] = useState<number | null>(null);
  const active = getActiveEarlyBird();

  useEffect(() => {
    setNow(Date.now());
    const i = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(i);
  }, []);

  if (!active) {
    return (
      <p className="font-mono text-xs uppercase tracking-widest text-slate-400">
        Standard pricing in effect
      </p>
    );
  }

  // Avoid hydration flicker — render placeholder server-side, real values once mounted.
  if (now === null) {
    return (
      <div className="inline-flex items-center gap-3 border border-gold-600/40 bg-gold-600/10 px-4 py-2.5">
        <span className="font-mono text-[10px] uppercase tracking-widest text-gold-400">
          {active.label} · {active.percentOff}% off
        </span>
      </div>
    );
  }

  const ms = Math.max(0, new Date(active.beforeISO + 'T00:00:00Z').getTime() - now);
  const d = Math.floor(ms / 86_400_000);
  const h = Math.floor((ms % 86_400_000) / 3_600_000);
  const m = Math.floor((ms % 3_600_000) / 60_000);
  const s = Math.floor((ms % 60_000) / 1000);

  return (
    <div className="inline-flex flex-wrap items-center gap-x-4 gap-y-2 border border-gold-600/40 bg-gold-600/10 px-4 py-2.5">
      <span className="font-mono text-[10px] uppercase tracking-widest text-gold-400">
        {active.label} · {active.percentOff}% off ends in
      </span>
      <span className="font-mono text-sm text-slate-100">
        <strong className="font-display text-base">{d}</strong>
        <span className="text-slate-400">d</span>{' '}
        <strong className="font-display text-base">{String(h).padStart(2, '0')}</strong>
        <span className="text-slate-400">h</span>{' '}
        <strong className="font-display text-base">{String(m).padStart(2, '0')}</strong>
        <span className="text-slate-400">m</span>{' '}
        <strong className="font-display text-base">{String(s).padStart(2, '0')}</strong>
        <span className="text-slate-400">s</span>
      </span>
    </div>
  );
}
