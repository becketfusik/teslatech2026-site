'use client';

import { useState } from 'react';

const FAQS = [
  {
    q: 'Where is the conference?',
    a: 'Crowne Plaza Albuquerque, 1901 University Blvd NE, Albuquerque, NM 87102. Booking code TTC for the discounted hotel rate of $129 per night.',
  },
  {
    q: 'Can I attend remotely?',
    a: 'Yes. The Livestream-Only ticket is $99 and gives you access to every session online plus the bonus Karen Elkins interviews.',
  },
  {
    q: 'Are individual sessions sold separately?',
    a: 'Individual session rates are available at the door only. They are not sold in advance.',
  },
  {
    q: 'What does the basic registration include?',
    a: 'Full access to all sessions Wednesday afternoon through Sunday morning, the vendor expo, and every evening social. Hotel and meals are separate. The Wednesday workshop with Bernard Konkin is a $50 add-on.',
  },
  {
    q: 'Are children welcome?',
    a: 'Teenagers 19 and under attend free with required registration. Students under 21 are $250.',
  },
  {
    q: 'Is there an on-site lunch option?',
    a: 'Yes. The hotel runs a lunch bar with sandwiches and soup at around $10. Buffet breakfast is included with hotel rooms booked under code TTC.',
  },
  {
    q: 'Are meals included with my registration?',
    a: 'Hotel breakfast is included if you book a room under code TTC. The complimentary tapas bar runs at every evening social. Lunch and dinner outside the social hours are on you, with the on-site hotel bar and surrounding Albuquerque options.',
  },
  {
    q: 'Will there be photography or video on-site?',
    a: 'Yes. The conference is recorded for the digital archive, and TTN Network’s news desk will be on-site filming interviews and segments. By attending you consent to being incidentally captured. If you have a specific concern about appearing on camera, talk to the front desk on Wednesday and we’ll route you accordingly.',
  },
  {
    q: 'Can I record the sessions?',
    a: 'Private taping is not allowed. Official recordings are available on DVD after the conference at a reasonable price. Conference fees do not include DVDs.',
  },
  {
    q: 'Is parking available?',
    a: 'Yes. The Crowne Plaza offers on-site parking for hotel guests and conference attendees. Self-parking is included with the discounted hotel rate.',
  },
  {
    q: 'Can I buy a ticket at the door?',
    a: 'Yes, but at full price with no early-bird discount. Online registration is faster and cheaper. The Wednesday workshop and full conference can both be purchased on arrival if seats remain.',
  },
  {
    q: 'How do refunds work?',
    a: 'Exchange only, no cash refunds. $25 service fee on all refunds, applied as credit toward future TeslaTech goods or services. After July 14, 2026, registrations are non-refundable.',
  },
  {
    q: 'Is the vendor expo open to non-attendees?',
    a: 'Yes. The exhibit hall is open to the public during conference hours. The vendor showcase on Friday afternoon is for paid attendees only.',
  },
  {
    q: 'Who runs this conference?',
    a: 'TeslaTech, in partnership with Science to Sage Magazine. Now in its 33rd year. TTN Network is the channel partner promoting the 2026 event and providing on-site press coverage.',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="relative border-b border-gold-600/20 bg-ink-900 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-gold-400">
          Frequently asked
        </p>
        <h2 className="font-display text-4xl text-slate-50 sm:text-5xl">Questions.</h2>

        <ul className="mt-12 divide-y divide-slate-800">
          {FAQS.map((f, i) => {
            const isOpen = openIdx === i;
            return (
              <li key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-6 py-5 text-left"
                >
                  <span className="font-display text-xl text-slate-50">{f.q}</span>
                  <span
                    aria-hidden
                    className={`flex-shrink-0 font-mono text-xl text-gold-400 transition-transform ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-6 pr-10 leading-relaxed text-slate-300">{f.a}</p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
