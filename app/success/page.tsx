import Link from 'next/link';

export const metadata = { title: 'Registration confirmed — TeslaTech 2026' };

export default function SuccessPage({
  searchParams,
}: {
  searchParams: { session_id?: string };
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-ink-950 px-6 py-24">
      <div className="max-w-xl text-center">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-gold-400">
          Confirmed
        </p>
        <h1 className="font-display text-5xl text-slate-50">
          You’re in.
          <span className="block italic text-gold-400">See you in Albuquerque.</span>
        </h1>
        <p className="mt-6 text-slate-300">
          Your registration is complete and a receipt is on its way to your inbox. Within
          24 hours you’ll get a separate email with your badge details, the hotel booking
          code (TTC), and the conference packet.
        </p>
        {searchParams.session_id && (
          <p className="mt-4 font-mono text-xs text-slate-500">
            Reference: {searchParams.session_id}
          </p>
        )}
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 border border-gold-600/40 px-6 py-3 font-mono text-xs uppercase tracking-widest text-gold-400 transition hover:bg-gold-600/10"
        >
          ← Back to the conference
        </Link>
      </div>
    </main>
  );
}
