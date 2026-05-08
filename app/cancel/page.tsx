import Link from 'next/link';

export const metadata = { title: 'Checkout cancelled — TeslaTech 2026' };

export default function CancelPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-ink-950 px-6 py-24">
      <div className="max-w-xl text-center">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-gold-400">
          No charge
        </p>
        <h1 className="font-display text-5xl text-slate-50">
          Checkout cancelled.
        </h1>
        <p className="mt-6 text-slate-300">
          You weren’t charged. The seats and the early-bird discount are still here when
          you’re ready.
        </p>
        <Link
          href="/#tickets"
          className="mt-10 inline-flex items-center gap-2 bg-gold-500 px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink-950 transition hover:bg-gold-400"
        >
          Try again
        </Link>
      </div>
    </main>
  );
}
