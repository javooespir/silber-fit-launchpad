import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Routines } from "@/components/Routines";
import { Schedule } from "@/components/Schedule";
import { Contact, StickyCTA } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Routines />
        <Schedule />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
