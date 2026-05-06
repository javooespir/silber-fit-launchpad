const phone = "01123183961";
const phoneDisplay = "011 2318-3961";
const whatsapp = "5491123183961";

export function Contact() {
  return (
    <section id="contacto" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background to-secondary/30" />
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1440 700" preserveAspectRatio="none" aria-hidden>
        <line x1="-50" y1="100" x2="900" y2="-100" stroke="var(--primary)" strokeWidth="2" opacity="0.6" />
        <line x1="700" y1="800" x2="1500" y2="350" stroke="var(--secondary)" strokeWidth="2" opacity="0.6" />
      </svg>

      <div className="container mx-auto px-5 relative">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary font-semibold uppercase tracking-[0.3em] text-sm mb-4">
            Tu próximo paso
          </p>
          <h2 className="font-display text-6xl md:text-8xl uppercase leading-[0.9]">
            Iniciá tu<br />
            <span className="text-3d-red">transformación</span>
          </h2>
          <p className="mt-6 text-lg text-foreground/85">
            Asociate hoy. Primer entrenamiento + plan personalizado para que arranques con todo.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${whatsapp}?text=Hola!%20Quiero%20asociarme%20a%20Silber%20Fit`}
              target="_blank"
              rel="noreferrer"
              className="font-display tracking-widest text-lg px-8 py-4 bg-gradient-red text-primary-foreground rounded-md shadow-glow hover:scale-105 transition-transform"
            >
              INICIAR MI TRANSFORMACIÓN
            </a>
          </div>

          <div className="mt-14 grid sm:grid-cols-3 gap-4">
            <ContactCard
              href={`tel:+54${phone}`}
              label="Llamar"
              value={phoneDisplay}
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1L8 9.6a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c.8.3 1.7.5 2.6.6a2 2 0 011.7 2.1z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
            />
            <ContactCard
              href={`https://wa.me/${whatsapp}`}
              label="WhatsApp"
              value="Escribinos ya"
              icon={
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4A11.4 11.4 0 003.5 19.5L2 22l2.6-1.4A11.4 11.4 0 1020 4zm-8 18.1a9.6 9.6 0 01-4.9-1.3l-.4-.2-2.7.8.8-2.6-.2-.4A9.6 9.6 0 1112 22.1zm5.3-7c-.3-.2-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1a7.7 7.7 0 01-3.8-3.3c-.3-.5.3-.5.8-1.5l-.1-.5L9.5 9c-.2-.4-.3-.4-.5-.4h-.5a1 1 0 00-.7.4 3 3 0 00-1 2.2c0 1.3.9 2.5 1.1 2.7.1.2 2 3 4.7 4.2 1.6.7 2.3.7 3.1.6.5-.1 1.7-.7 1.9-1.4.3-.7.3-1.3.2-1.4z" />
                </svg>
              }
            />
            <ContactCard
              href="https://instagram.com/silberfit"
              label="Instagram"
              value="@silberfit"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  href,
  label,
  value,
  icon,
}: {
  href: string;
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group bg-card border border-border rounded-2xl p-6 flex items-center gap-4 hover:border-primary/60 hover:-translate-y-1 transition-all shadow-card"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-red text-primary-foreground flex items-center justify-center shrink-0">
        <div className="w-6 h-6">{icon}</div>
      </div>
      <div className="text-left">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
        <p className="font-semibold group-hover:text-primary transition-colors">{value}</p>
      </div>
    </a>
  );
}

export function StickyCTA() {
  return (
    <a
      href="#contacto"
      className="fixed bottom-5 right-5 z-40 sm:hidden font-display tracking-widest text-sm px-5 py-3 bg-gradient-red text-primary-foreground rounded-full shadow-glow"
    >
      ASOCIARSE
    </a>
  );
}
