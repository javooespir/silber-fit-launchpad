export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-5 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <p className="font-display text-4xl text-3d-red leading-none">
            SILBER<span className="text-foreground">FIT</span>
          </p>
          <p className="mt-4 text-muted-foreground max-w-sm">
            Gimnasio en Castelar, Buenos Aires. Entrená con buena onda y resultados reales.
          </p>
          <div className="mt-5 flex gap-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="var(--primary)">
                <path d="M12 2l2.9 6.9 7.4.6-5.6 4.9 1.7 7.3L12 17.8 5.6 21.7l1.7-7.3L1.7 9.5l7.4-.6L12 2z" />
              </svg>
            ))}
            <span className="ml-2 text-sm text-muted-foreground">4.9 · 94 opiniones</span>
          </div>
        </div>

        <div>
          <p className="font-display uppercase tracking-widest text-sm mb-4">Navegación</p>
          <ul className="space-y-2 text-muted-foreground">
            <li><a href="#inicio" className="hover:text-primary">Inicio</a></li>
            <li><a href="#rutinas" className="hover:text-primary">Rutinas</a></li>
            <li><a href="#horarios" className="hover:text-primary">Horarios</a></li>
            <li><a href="#contacto" className="hover:text-primary">Contacto</a></li>
          </ul>
        </div>

        <div>
          <p className="font-display uppercase tracking-widest text-sm mb-4">Contacto</p>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>Av. Rivadavia 21226</li>
            <li>Castelar, Buenos Aires</li>
            <li><a href="tel:+541123183961" className="hover:text-primary">011 2318-3961</a></li>
            <li><a href="https://instagram.com/silberfit" target="_blank" rel="noreferrer" className="hover:text-primary">@silberfit</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Silber Fit · Todos los derechos reservados.
      </div>
    </footer>
  );
}
