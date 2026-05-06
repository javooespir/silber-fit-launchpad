const benefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 7v10M18 7v10M3 9v6M21 9v6M9 5v14M15 5v14" strokeLinecap="round" />
      </svg>
    ),
    title: "Equipamiento Premium",
    desc: "Aparatos de última generación, mantenidos en óptimas condiciones todos los días.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 4-7 8-7s8 3 8 7" strokeLinecap="round" />
      </svg>
    ),
    title: "Profesores que te miran",
    desc: "No te dejamos solo. Sandra, Lucas, Solange y todo el equipo te corrigen y te motivan.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" strokeLinecap="round" />
      </svg>
    ),
    title: "Ambiente real",
    desc: "Buena onda, comunidad y un clima donde da gusto entrenar. Sin postureo.",
  },
];

const testimonials = [
  {
    name: "Luciano Valenzuela",
    text: "Un hermoso lugar para muscular y pasar un buen momento, excelente ambiente y los mejores profes. Te dan bola y no te dejan solo.",
    badge: "Hace 8 meses",
  },
  {
    name: "Cynthia Rosciano",
    text: "Me encanta el lugar, la profe Solange excelente, Lucas y Sandra también. Siempre con buena predisposición.",
    badge: "Hace 8 meses",
  },
  {
    name: "Cliente verificado",
    text: "Muy bueno, excelente atención de los profes y aparatos en muy buen estado 👏👏",
    badge: "Google Reviews",
  },
];

export function About() {
  return (
    <section id="nosotros" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <p className="text-primary font-semibold uppercase tracking-[0.3em] text-sm mb-4">
              Sobre nosotros
            </p>
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-none">
              Más que un<br />
              <span className="text-3d-red">gimnasio</span>
            </h2>
          </div>
          <div className="flex md:justify-end">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-card flex items-center gap-5">
              <div className="text-6xl font-display text-gradient-red leading-none">4.9</div>
              <div>
                <div className="flex gap-0.5 mb-1">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="var(--primary)">
                      <path d="M12 2l2.9 6.9 7.4.6-5.6 4.9 1.7 7.3L12 17.8 5.6 21.7l1.7-7.3L1.7 9.5l7.4-.6L12 2z" />
                    </svg>
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">94 opiniones en Google</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/60 transition-all hover:-translate-y-1 shadow-card overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-colors" />
              <div className="relative w-14 h-14 rounded-xl bg-gradient-red flex items-center justify-center text-primary-foreground mb-6">
                <div className="w-7 h-7">{b.icon}</div>
              </div>
              <h3 className="font-display text-2xl uppercase mb-3">{b.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative bg-gradient-to-br from-card to-background border border-border rounded-2xl p-8"
            >
              <svg
                className="absolute top-6 right-6 text-primary/30"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7 7h4v4H7v3a4 4 0 004 4v2a6 6 0 01-6-6V7zm9 0h4v4h-4v3a4 4 0 004 4v2a6 6 0 01-6-6V7z" />
              </svg>
              <blockquote className="text-foreground/90 leading-relaxed mb-5">
                {t.text}
              </blockquote>
              <figcaption>
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{t.badge}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
