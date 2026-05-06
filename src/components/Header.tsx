import { useEffect, useState } from "react";
import logo from "@/assets/silber-fit-logo.png";

const sections = [
  { id: "inicio", label: "Inicio" },
  { id: "rutinas", label: "Rutinas" },
  { id: "horarios", label: "Horarios" },
  { id: "contacto", label: "Contacto" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-5 flex items-center justify-between">
        <a href="#inicio" className="font-display text-3xl md:text-4xl text-3d-red leading-none tracking-wide">
          SILBER<span className="text-foreground">FIT</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-sm font-semibold uppercase tracking-wider text-foreground/80 hover:text-primary transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary hover:after:w-full after:transition-all"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            className="hidden sm:inline-flex font-display tracking-widest text-sm px-5 py-2.5 bg-gradient-red text-primary-foreground rounded-md shadow-glow hover:scale-105 transition-transform"
          >
            ASOCIARSE
          </a>
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M4 7h16" strokeLinecap="round" />
                  <path d="M4 12h16" strokeLinecap="round" />
                  <path d="M4 17h16" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur">
          <nav className="container mx-auto px-5 py-4 flex flex-col gap-4">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="font-semibold uppercase tracking-wider text-foreground/90 hover:text-primary"
              >
                {s.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="font-display tracking-widest px-5 py-3 bg-gradient-red text-primary-foreground rounded-md text-center"
            >
              ASOCIARSE
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
