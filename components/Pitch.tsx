export default function Pitch() {
  return (
    <section className="relative border-b border-gold-600/20 bg-ink-900 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-gold-400">
          The premise
        </p>
        <h2 className="font-display text-4xl leading-tight text-slate-50 sm:text-5xl">
          The science was proven.
          <span className="block italic text-gold-400">The patents were buried.</span>
        </h2>

        <div className="mt-12 grid gap-12 text-lg leading-relaxed text-slate-300 lg:grid-cols-2">
          <div>
            <p>
              Free energy. Frequency healing. Field propulsion. The breakthroughs were real,
              documented, and replicated. Then the labs were raided, the files were seized,
              and the inventors died broke, discredited, or disappeared.
            </p>
            <p className="mt-6">
              We are not interested in conspiracy. We are interested in engineering. The
              science is documented. The patents are public. The replications are repeatable.
              What was missing was a place where the researchers, the engineers, and the
              people building the next generation of devices could compare notes without
              apology.
            </p>
          </div>
          <div>
            <p>
              For five days every August, that place is Albuquerque. Thirty researchers
              present what they have built, what they have measured, and what is still open.
              Sessions span six tracks: Health, AntiGravity, Water, Energy, Concepts, and
              Physics. Plus the Wednesday workshop and Sunday closing on consciousness and
              Tesla’s deeper vision.
            </p>
            <p className="mt-6">
              Bring your meter. Bring your prototype. Bring your questions.
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap gap-3 font-mono text-xs uppercase tracking-widest">
          {[
            'Tesla coils',
            'Scalar fields',
            'Cold fusion',
            'Brown’s gas',
            'Plasmoids',
            'Zero-point energy',
            'Electrogravitics',
            'Far-infrared',
            'Remote viewing',
            'Vortex math',
            'Dendera light',
            'Casimir effect',
          ].map((tag) => (
            <span
              key={tag}
              className="border border-slate-700 bg-ink-800 px-3 py-1.5 text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
