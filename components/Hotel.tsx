export default function Hotel() {
  return (
    <section
      id="travel"
      className="relative border-b border-gold-600/20 bg-ink-900 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-gold-400">
          Travel and stay
        </p>
        <h2 className="font-display text-4xl text-slate-50 sm:text-5xl">
          Crowne Plaza Albuquerque.
          <span className="block italic text-gold-400">Special rate. Breakfast included.</span>
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-slate-300">
            <p className="text-lg leading-relaxed">
              Conference rooms, vendor expo, evening socials, and complimentary buffet
              breakfast all under one roof. Book early. The special rate ends{' '}
              <strong className="text-slate-50">July 31, 2026</strong>.
            </p>

            <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-y border-slate-800 py-6">
              <div>
                <dt className="font-mono text-xs uppercase tracking-widest text-slate-500">
                  Rate
                </dt>
                <dd className="mt-1 font-display text-2xl text-slate-50">$129/night</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-widest text-slate-500">
                  Booking code
                </dt>
                <dd className="mt-1 font-display text-2xl text-gold-400">TTC</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-widest text-slate-500">
                  Phone
                </dt>
                <dd className="mt-1 text-lg text-slate-50">844-356-6178</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-widest text-slate-500">
                  Address
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-slate-300">
                  1901 University Blvd NE
                  <br />
                  Albuquerque, NM 87102
                </dd>
              </div>
            </dl>

            <a
              href="https://www.ihg.com/crowneplaza/hotels/us/en/albuquerque/abqcp/hoteldetail"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-gold-600/40 px-6 py-3 font-mono text-xs uppercase tracking-widest text-gold-400 transition hover:bg-gold-600/10"
            >
              Book your room
              <span aria-hidden>↗</span>
            </a>
          </div>

          <div className="space-y-6">
            <div className="border border-slate-800 bg-ink-950 p-6">
              <h3 className="font-display text-2xl text-slate-50">Evening socials</h3>
              <p className="mt-3 text-slate-300">
                8:30 PM each night. Cabana social under starry Albuquerque skies. Tapas bar
                complimentary. Beverages available for purchase.
              </p>
            </div>
            <div className="border border-slate-800 bg-ink-950 p-6">
              <h3 className="font-display text-2xl text-slate-50">On-site lunch</h3>
              <p className="mt-3 text-slate-300">
                Sandwich and soup bar provided by the hotel at around $10. So you don’t have
                to leave the venue.
              </p>
            </div>
            <div className="border border-slate-800 bg-ink-950 p-6">
              <h3 className="font-display text-2xl text-slate-50">
                Friday and Saturday night entertainment
              </h3>
              <p className="mt-3 text-slate-300">
                4 PM to 11 PM. Bar, food, music. Open to attendees and the public.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
