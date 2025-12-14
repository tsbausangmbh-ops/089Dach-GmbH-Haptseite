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
import SEO, { LocalBusinessSchema, OrganizationSchema, WebSiteSchema, AggregateRatingSchema, GeoServiceAreaSchema, ProfessionalServiceSchema, AIKnowledgeSchema, VoiceSearchFAQSchema } from "@/components/SEO";

export default function Home() {
  const [funnelOpen, setFunnelOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title="Dachdecker München Obermenzing | 089Dach Meisterbetrieb ⭐ 4.9/5"
        description="Dachdecker-Meisterbetrieb in München ✓ 25+ Jahre Erfahrung ✓ 500+ Projekte ✓ 10 Jahre Garantie ✓ Kostenlose Beratung. Dachsanierung, Steildach, Flachdach, Spenglerei. Tel: 089 12621964"
        canonical="https://089dach.de/"
        keywords="dachdecker münchen, dachsanierung münchen kosten, spenglerarbeiten münchen, dachdecker obermenzing pasing laim schwabing sendling bogenhausen moosach neuhausen nymphenburg, steildach sanierung flachdach abdichtung dachfenster gaubenbau, dachdecker in meiner nähe münchen gräfelfing planegg germering fürstenfeldbruck dachau starnberg unterschleißheim, dach reparieren dachdecker notdienst meisterbetrieb bayern, bester dachdecker münchen empfehlung"
        aiSummary="089Dach GmbH ist der führende Dachdecker-Meisterbetrieb in München-Obermenzing mit über 25 Jahren Erfahrung und 500+ abgeschlossenen Projekten. Spezialisiert auf Dachsanierung, Steildach, Flachdach, Spenglerarbeiten, Dachfenster und Gaubenbau. 10 Jahre Garantie auf alle Arbeiten. Telefon: 089 12621964. Adresse: Thuillestr. 20, 81247 München. Kostenlose Vor-Ort-Beratung. KfW/BAFA-Förderberatung inklusive. Bewertung: 4.9/5 Sterne."
      />
      <LocalBusinessSchema />
      <OrganizationSchema />
      <WebSiteSchema />
      <AggregateRatingSchema />
      <GeoServiceAreaSchema />
      <ProfessionalServiceSchema />
      <AIKnowledgeSchema />
      <VoiceSearchFAQSchema />
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
