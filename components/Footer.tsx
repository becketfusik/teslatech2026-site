import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-ink-950 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 border-b border-slate-800 pb-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-3xl text-slate-50">TeslaTech 2026</p>
            <p className="mt-2 text-sm text-slate-400">
              ExtraOrdinary Technology Conference · 33rd annual · Aug 12–16, Albuquerque
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-gold-400">
              Conference
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>
                <Link href="#agenda" className="hover:text-gold-400">
                  Agenda
                </Link>
              </li>
              <li>
                <Link href="#speakers" className="hover:text-gold-400">
                  Speakers
                </Link>
              </li>
              <li>
                <Link href="#tickets" className="hover:text-gold-400">
                  Tickets
                </Link>
              </li>
              <li>
                <Link href="#travel" className="hover:text-gold-400">
                  Travel
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-gold-400">
              Partners
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>
                <a
                  href="https://www.sciencetosagemagazine.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold-400"
                >
                  Science to Sage Magazine
                </a>
              </li>
              <li>
                <a
                  href="https://teslatech.info"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold-400"
                >
                  teslatech.info
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 TeslaTech. All rights reserved.</p>
          <p className="font-mono uppercase tracking-widest">
            Engage with experts, visionaries & pioneers — from inner to outer tech.
          </p>
        </div>
      </div>
    </footer>
  );
}
