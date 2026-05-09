import { AGENDA } from '@/data/agenda';
import { TRACK_COLORS } from '@/data/speakers';

export default function Agenda() {
  return (
    <section
      id="agenda"
      className="relative border-b border-gold-600/20 bg-ink-900 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-gold-400">
          The schedule
        </p>
        <h2 className="font-display text-4xl text-slate-50 sm:text-5xl">
          Five days, mapped to the
          <span className="italic text-gold-400"> wheelworks of nature.</span>
        </h2>
        <p className="mt-4 max-w-2xl text-slate-400">
          Each evening at 8:30 PM: casual social under the cabanas. Complimentary tapas.
          Beverages available for purchase. Vendor showcase Friday at 1:00 PM.
        </p>

        <div className="mt-16 space-y-16">
          {AGENDA.map((day) => (
            <div key={day.day} className="relative">
              <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <h3 className="font-display text-3xl text-slate-50">
                    <span className="text-gold-400">{day.day}</span>
                    <span className="ml-3 text-slate-500">·</span>
                    <span className="ml-3">{day.date}</span>
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">{day.themeTitle}</p>
                </div>
                <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                  {day.themeSubtitle}
                </p>
              </div>

              <ol className="mt-6 divide-y divide-slate-800/60">
                {day.sessions.map((s) => (
                  <li
                    key={s.slug}
                    className="grid grid-cols-[7rem_1fr] gap-6 py-5 sm:grid-cols-[8rem_1fr_auto]"
                  >
                    <div className="font-mono text-sm tracking-widest text-gold-400">
                      {s.time}
                    </div>
                    <div>
                      <p className="font-display text-xl text-slate-50">
                        {s.name}
                        {s.credentials && (
                          <span className="ml-2 text-sm text-slate-500">
                            {s.credentials}
                          </span>
                        )}
                      </p>
                      <p className="mt-1 text-slate-300">{s.talkTitle}</p>
                    </div>
                    <span
                      className={`hidden h-fit self-start whitespace-nowrap border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest sm:inline-block ${TRACK_COLORS[s.track]}`}
                    >
                      {s.trackLabel}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
