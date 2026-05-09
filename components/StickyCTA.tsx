'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getActiveEarlyBird, getMinPaidPrice } from '@/data/pricing';

function useCountdown(targetISO: string | null) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    if (!targetISO) return;
    const i = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(i);
  }, [targetISO]);
  if (!targetISO) return null;
  const ms = Math.max(0, new Date(targetISO + 'T00:00:00Z').getTime() - now);
  const d = Math.floor(ms / 86_400_000);
  const h = Math.floor((ms % 86_400_000) / 3_600_000);
  const m = Math.floor((ms % 3_600_000) / 60_000);
  return { d, h, m };
}

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const active = getActiveEarlyBird();
  const countdown = useCountdown(active?.beforeISO ?? null);
  const minPrice = getMinPaidPrice();

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling past hero (~600px)
      setVisible(window.scrollY > 600);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sticky-cta-enter">
      <div className="border-t border-gold-600/40 bg-ink-900/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <div className="hidden flex-col gap-0.5 sm:flex">
            <p className="font-mono text-[10px] uppercase tracking-widest text-gold-400">
              {active ? `${active.label} · ${active.percentOff}% off ends in` : 'Standard pricing'}
            </p>
            {countdown && (
              <p className="font-mono text-sm text-slate-200">
                <span className="font-display text-base text-slate-50">{countdown.d}d</span>{' '}
                <span className="font-display text-base text-slate-50">{countdown.h}h</span>{' '}
                <span className="font-display text-base text-slate-50">{countdown.m}m</span>
              </p>
            )}
          </div>

          <div className="flex flex-1 items-center justify-end gap-3 sm:flex-none">
            <p className="hidden text-xs text-slate-300 md:block">From ${minPrice} · Aug 12–16, Albuquerque</p>
            <Link
              href="#tickets"
              className="inline-flex items-center gap-2 bg-gold-500 px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-ink-950 transition hover:bg-gold-400"
            >
              Reserve seat
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
