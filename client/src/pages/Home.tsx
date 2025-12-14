import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import SEO from "@/components/SEO";

export default function Home() {
  const [funnelOpen, setFunnelOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title="089Dach GmbH | Dachdecker-Meisterbetrieb in München Obermenzing"
        description="Dachsanierung, Bedachungen & Spenglerarbeiten in München – 089Dach Meisterbetrieb deckt, saniert und wartet Ihr Dach. Jetzt Beratung & Vor-Ort-Termin sichern."
        canonical="https://089dach.de/"
        keywords="dachdecker münchen, dachsanierung münchen, spenglerarbeiten münchen, dachdecker obermenzing, steildach münchen, flachdach münchen"
      />
      <Navbar />
      <main>
        <Hero onOpenFunnel={() => setFunnelOpen(true)} />
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
