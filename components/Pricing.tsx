'use client';

import { useEffect, useState } from 'react';
import {
  TICKETS,
  EARLY_BIRD_TIERS,
  getActiveEarlyBird,
  applyDiscount,
  REFUND_POLICY,
} from '@/data/pricing';

function useCountdown(targetISO: string | null) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    if (!targetISO) return;
    const i = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(i);
  }, [targetISO]);

  if (!targetISO) return null;
  const target = new Date(targetISO + 'T00:00:00Z').getTime();
  const ms = Math.max(0, target - now);
  const days = Math.floor(ms / 86_400_000);
  const hours = Math.floor((ms % 86_400_000) / 3_600_000);
  const minutes = Math.floor((ms % 3_600_000) / 60_000);
  const seconds = Math.floor((ms % 60_000) / 1000);
  return { days, hours, minutes, seconds };
}

export default function Pricing() {
  const active = getActiveEarlyBird();
  const countdown = useCountdown(active ? active.beforeISO : null);

  return (
    <section
      id="tickets"
      className="relative border-b border-gold-600/20 bg-ink-950 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-gold-400">
          Reserve your seat
        </p>
        <h2 className="font-display text-4xl text-slate-50 sm:text-5xl">
          Pricing
        </h2>

        {active ? (
          <div className="mt-8 flex flex-col items-start gap-3 border border-gold-600/40 bg-gold-600/10 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-gold-400">
                {active.label} active — {active.percentOff}% off
              </p>
              <p className="mt-1 text-sm text-slate-300">
                Discount applies automatically at checkout. Ends{' '}
                <strong>{new Date(active.beforeISO).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}</strong>.
              </p>
            </div>
            {countdown && (
              <div className="grid grid-cols-4 gap-3 font-mono text-xs uppercase tracking-widest text-gold-400">
                {[
                  ['days', countdown.days],
                  ['hrs', countdown.hours],
                  ['min', countdown.minutes],
                  ['sec', countdown.seconds],
                ].map(([label, value]) => (
                  <div key={label} className="text-center">
                    <div className="font-display text-3xl text-slate-50">
                      {String(value).padStart(2, '0')}
                    </div>
                    <div>{label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <p className="mt-8 border border-slate-700 bg-ink-800 p-5 text-sm text-slate-300">
            Early-bird discounts have ended. Standard pricing applies.
          </p>
        )}

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {TICKETS.map((ticket) => {
            const finalPrice = applyDiscount(ticket.basePriceUsd, active);
            const showStrike = active && ticket.basePriceUsd > 0;
            return (
              <div
                key={ticket.id}
                className="flex flex-col border border-slate-800 bg-ink-900 p-6 transition hover:border-gold-600/60"
              >
                <h3 className="font-display text-2xl text-slate-50">{ticket.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                  {ticket.description}
                </p>
                <div className="mt-6 flex items-baseline gap-3">
                  {ticket.basePriceUsd === 0 ? (
                    <span className="font-display text-4xl text-slate-50">Free</span>
                  ) : (
                    <>
                      <span className="font-display text-4xl text-slate-50">
                        ${finalPrice}
                      </span>
                      {showStrike && (
                        <span className="font-mono text-sm text-slate-500 line-through">
                          ${ticket.basePriceUsd}
                        </span>
                      )}
                    </>
                  )}
                </div>
                <form action="/api/checkout" method="POST" className="mt-6">
                  <input type="hidden" name="ticketId" value={ticket.id} />
                  <button
                    type="submit"
                    className="w-full bg-gold-500 px-4 py-3 font-mono text-xs uppercase tracking-widest text-ink-950 transition hover:bg-gold-400"
                  >
                    {ticket.basePriceUsd === 0 ? 'Register free' : 'Buy ticket'}
                  </button>
                </form>
              </div>
            );
          })}
        </div>

        <div className="mt-12 grid gap-8 border-t border-slate-800 pt-8 lg:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-gold-400">
              Discount schedule
            </p>
            <ul className="mt-3 space-y-1 text-sm text-slate-300">
              {EARLY_BIRD_TIERS.map((t) => (
                <li key={t.beforeISO}>
                  <strong className="text-slate-50">{t.percentOff}% off</strong> — register
                  before{' '}
                  {new Date(t.beforeISO).toLocaleDateString(undefined, {
                    month: 'short',
                    day: 'numeric',
                  })}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-gold-400">
              Refund policy
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">{REFUND_POLICY}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
