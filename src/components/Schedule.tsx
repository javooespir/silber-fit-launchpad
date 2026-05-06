const schedule = [
  { day: "Lunes a Viernes", hours: "06:00 — 23:00" },
  { day: "Sábados", hours: "09:00 — 20:00" },
  { day: "Domingos", hours: "10:00 — 14:00" },
];

export function Schedule() {
  return (
    <section id="horarios" className="relative py-24 md:py-32">
      <div className="container mx-auto px-5">
        <div className="mb-14 max-w-3xl">
          <p className="text-primary font-semibold uppercase tracking-[0.3em] text-sm mb-4">
            Vení cuando quieras
          </p>
          <h2 className="font-display text-5xl md:text-7xl uppercase leading-none">
            Horarios y <span className="text-3d-red">ubicación</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 bg-card border border-border rounded-2xl p-8 shadow-card">
            <h3 className="font-display text-2xl uppercase mb-6">Horarios</h3>
            <ul className="divide-y divide-border">
              {schedule.map((s) => (
                <li key={s.day} className="flex items-center justify-between py-4">
                  <span className="font-semibold">{s.day}</span>
                  <span className="font-display text-xl text-primary">{s.hours}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/30 text-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-primary pulse-red mr-2 align-middle" />
              <span className="font-semibold">Abierto ahora</span> · Cierra a las 23 hs
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Dirección</p>
              <p className="font-semibold leading-snug">
                Avenida Rivadavia 21226<br />
                Castelar, Buenos Aires
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Avenida+Rivadavia+21226+Castelar"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-primary font-semibold hover:underline"
              >
                Cómo llegar →
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-border shadow-card min-h-[420px] bg-card">
            <iframe
              title="Silber Fit · Mapa"
              src="https://www.google.com/maps?q=Avenida+Rivadavia+21226,+Castelar,+Buenos+Aires&output=embed"
              className="w-full h-full min-h-[420px] border-0 grayscale-[40%] contrast-110"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
