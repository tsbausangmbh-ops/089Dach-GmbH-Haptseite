import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Services from "@/components/Services";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import SEO, { LocalBusinessSchema } from "@/components/SEO";

export default function Home() {
  const [funnelOpen, setFunnelOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title="Dachdecker München Obermenzing | 089Dach Meisterbetrieb"
        description="Dachsanierung, Bedachungen & Spenglerarbeiten in München. Meisterbetrieb seit 1998 mit 10 Jahren Garantie. Jetzt kostenlose Beratung sichern!"
        canonical="https://089dach.de/"
        keywords="dachdecker münchen, dachsanierung münchen kosten, spenglerarbeiten münchen, dachdecker obermenzing pasing laim, steildach sanierung münchen, flachdach abdichtung münchen, dachdecker in meiner nähe münchen, dach reparieren lassen münchen, dachdecker notdienst münchen, meisterbetrieb dach bayern"
        aiSummary="089Dach GmbH ist ein Dachdecker- und Spengler-Meisterbetrieb in München-Obermenzing. Spezialisiert auf Dachsanierung, Steildach, Flachdach, Spenglerarbeiten und Dachfenster. Telefon: 089 12621964. Adresse: Thuillestr. 20, 81247 München. 10 Jahre Garantie, über 100 zufriedene Kunden."
      />
      <LocalBusinessSchema />
      <Navbar />
      <main>
        <Hero onOpenFunnel={() => setFunnelOpen(true)} />
        <ProblemSolution onOpenFunnel={() => setFunnelOpen(true)} />
        <Services />
        <LeadFunnel externalOpen={funnelOpen} onExternalOpenChange={setFunnelOpen} />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
