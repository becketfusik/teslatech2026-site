export default function Vendors() {
  const vendors = [
    { name: 'Joe Blanton', product: 'ReVitaLazer' },
    { name: 'Phil Wilson', product: 'Infrared Technology' },
    { name: 'George Wiseman', product: 'AquaCure Machines' },
    { name: 'Paul Harris', product: 'Theraphi & Quantaphi' },
    { name: 'Jeffery Hayes', product: 'TeslaGo!MWO' },
    { name: 'SilverWater Company', product: 'Colloidal Silver' },
    { name: 'Uri Lee', product: 'Vortex Breathwork™' },
    { name: 'SoundLiving LLC', product: 'Frequency Therapy' },
    { name: 'Larry Davenport', product: 'Independent Research' },
    { name: 'ShiftPod', product: 'Off-grid Shelter' },
  ];

  return (
    <section className="relative border-b border-gold-600/20 bg-ink-950 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-gold-400">
          Vendor Showcase
        </p>
        <h2 className="font-display text-4xl text-slate-50 sm:text-5xl">
          The expo floor —
          <span className="italic text-gold-400"> open to the public.</span>
        </h2>
        <p className="mt-4 max-w-3xl text-slate-400">
          Friday, August 14 at 1:00 PM: vendors who aren’t presenting on stage get the floor
          for a 5–10 minute showcase of what they brought. The exhibit hall stays open all
          weekend.
        </p>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {vendors.map((v) => (
            <div
              key={v.name}
              className="border border-slate-800 bg-ink-900 p-5 transition hover:border-gold-600/40"
            >
              <p className="font-display text-xl text-slate-50">{v.name}</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-gold-400">
                {v.product}
              </p>
            </div>
          ))}
          <div className="flex items-center justify-center border border-dashed border-slate-700 p-5 text-sm text-slate-500">
            More to come — confirm your booth at vendors@teslatech.info
          </div>
        </div>
      </div>
    </section>
  );
}
