import Image from 'next/image';
import Link from 'next/link';
import { TTN } from '@/data/content';

export default function Footer() {
  return (
    <footer className="relative bg-ink-950 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 border-b border-slate-800 pb-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-3xl text-slate-50">TeslaTech 2026</p>
            <p className="mt-2 text-sm text-slate-400">
              ExtraOrdinary Technology Conference. 33rd annual. August 12 to 16, Albuquerque.
            </p>
            <a
              href={TTN.url}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-3 transition hover:opacity-80"
            >
              <Image
                src={TTN.logo}
                alt={`${TTN.name} logo`}
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
              <div>
                <p className="ttn-wordmark text-base text-slate-200">{TTN.name}</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                  {TTN.role}
                </p>
              </div>
            </a>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-gold-400">
              Conference
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>
                <Link href="#featured" className="hover:text-gold-400">
                  Featured speakers
                </Link>
              </li>
              <li>
                <Link href="#agenda" className="hover:text-gold-400">
                  Agenda
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
              <li>
                <Link href="#all-speakers" className="hover:text-gold-400">
                  Full lineup
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
                  href={TTN.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold-400"
                >
                  TTN Network
                </a>
              </li>
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
            Engage with experts, visionaries, and pioneers from inner to outer tech.
          </p>
        </div>
      </div>
    </footer>
  );
}
