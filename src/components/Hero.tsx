import heroImg from "@/assets/hero-gym.jpg";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover grayscale"
        style={{ backgroundImage: `url(${heroImg})` }}
        aria-hidden
      />
      {/* Red overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-background/85 to-secondary/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

      {/* Diagonal decorative lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        aria-hidden
      >
        <line x1="-100" y1="200" x2="900" y2="-50" stroke="var(--primary)" strokeWidth="3" opacity="0.55" />
        <line x1="-50" y1="350" x2="700" y2="100" stroke="var(--primary)" strokeWidth="1.2" opacity="0.4" />
        <line x1="700" y1="950" x2="1500" y2="500" stroke="var(--secondary)" strokeWidth="3" opacity="0.6" />
        <line x1="850" y1="950" x2="1550" y2="600" stroke="var(--secondary)" strokeWidth="1.2" opacity="0.4" />
      </svg>

      <div className="container mx-auto px-5 relative z-10 grid md:grid-cols-12 gap-10 items-center pb-20">
        <div className="md:col-span-8 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-primary/40 bg-background/50 backdrop-blur text-xs uppercase tracking-[0.25em] text-primary font-semibold">
            <span className="h-2 w-2 rounded-full bg-primary pulse-red" />
            Castelar · Buenos Aires
          </div>

          <h1 className="font-display text-6xl sm:text-7xl md:text-[8.5rem] leading-[0.85] uppercase">
            <span className="block text-foreground">Cambia</span>
            <span className="block text-3d-red">Tu Cuerpo</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg md:text-xl text-foreground/85">
            Te ayudo a lograrlo. Entrená con profes que te miran, te corrigen y te empujan.
            Resultados reales, no excusas.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="font-display tracking-widest text-lg px-8 py-4 bg-gradient-red text-primary-foreground rounded-md shadow-glow hover:scale-105 transition-transform"
            >
              ASOCIARSE AHORA
            </a>
            <a
              href="#rutinas"
              className="font-display tracking-widest text-lg px-8 py-4 border-2 border-foreground/30 text-foreground rounded-md hover:border-primary hover:text-primary transition-colors"
            >
              VER RUTINAS GRATIS
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Stars />
              <span className="font-semibold">4.9</span>
              <span className="text-muted-foreground">· 94 opiniones en Google</span>
            </div>
            <div className="text-muted-foreground">Abierto · Cierra a las 23 hs</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-foreground/60 text-xs uppercase tracking-widest flex flex-col items-center gap-2">
        Scroll
        <span className="h-10 w-px bg-foreground/40" />
      </div>
    </section>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="var(--primary)">
          <path d="M12 2l2.9 6.9 7.4.6-5.6 4.9 1.7 7.3L12 17.8 5.6 21.7l1.7-7.3L1.7 9.5l7.4-.6L12 2z" />
        </svg>
      ))}
    </div>
  );
}
