const FAQS = [
  {
    q: 'Where is the conference?',
    a: 'Crowne Plaza Albuquerque, 1901 University Blvd NE, Albuquerque, NM 87102. Booking code TTC for the discounted hotel rate.',
  },
  {
    q: 'Can I attend remotely?',
    a: 'Yes. The Livestream-Only ticket is $99 and gives you access to every session online.',
  },
  {
    q: 'Are individual sessions sold separately?',
    a: 'Individual session rates are available at the door only. They are not sold in advance.',
  },
  {
    q: 'What does the basic registration include?',
    a: 'Full access to all sessions Wednesday afternoon through Sunday morning, the vendor expo, and every evening social. Hotel and meals are separate.',
  },
  {
    q: 'Are children welcome?',
    a: 'Teenagers 19 and under attend free with required registration. Students under 21 are $250.',
  },
  {
    q: 'Can I record the sessions?',
    a: 'Private taping is not allowed. Official recordings are available on DVD after the conference at a reasonable price; conference fees do not include DVDs.',
  },
  {
    q: 'How do refunds work?',
    a: 'Exchange only — no cash refunds. $25 service fee on all refunds, applied as credit toward future TeslaTech goods or services. After July 14, 2026, registrations are non-refundable.',
  },
  {
    q: 'Is the vendor expo open to non-attendees?',
    a: 'Yes. The exhibit hall is open to the public during conference hours.',
  },
  {
    q: 'Who runs this conference?',
    a: 'TeslaTech, in partnership with Science to Sage Magazine. Now in its 33rd year, with bonus interviews recorded on-site by Karen Elkins.',
  },
];

export default function FAQ() {
  return (
    <section className="relative border-b border-gold-600/20 bg-ink-900 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-gold-400">
          Frequently Asked
        </p>
        <h2 className="font-display text-4xl text-slate-50 sm:text-5xl">Questions.</h2>
        <dl className="mt-12 divide-y divide-slate-800">
          {FAQS.map((f) => (
            <div key={f.q} className="py-6">
              <dt className="font-display text-xl text-slate-50">{f.q}</dt>
              <dd className="mt-2 leading-relaxed text-slate-300">{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
