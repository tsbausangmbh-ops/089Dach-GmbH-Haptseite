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
import SEO, { LocalBusinessSchema, OrganizationSchema, WebSiteSchema, AggregateRatingSchema, GeoServiceAreaSchema, ProfessionalServiceSchema, AIKnowledgeSchema, VoiceSearchFAQSchema, GoogleBusinessProfileSchema, BingPlacesSchema, LocalSEO20kmSchema, NearbyServiceSchema } from "@/components/SEO";

export default function Home() {
  const [funnelOpen, setFunnelOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title="Dachdecker München | Meisterbetrieb ⭐ 4.9/5"
        description="Bester Dachdecker München ✓ 25 Jahre Erfahrung ✓ 10 Jahre Garantie ✓ Festpreis in 48h. Jetzt kostenlos beraten! ☎ 089 12621964"
        canonical="https://089dach.de/"
        keywords="was kostet dachsanierung münchen pro qm, dachdecker münchen empfehlung bewertung, bester dachdecker in meiner nähe obermenzing pasing laim, dachsanierung einfamilienhaus kosten erfahrungen, dach undicht was tun soforthilfe, dachdecker für altbau reihenhaus villa, kfw förderung dachsanierung 2024 2025 bayern, wann muss dach saniert werden altes dach, heizkosten senken durch dachdämmung, spengler dachrinne kupfer zink, dachdecker notdienst münchen wochenende, dachziegel austauschen einzeln kosten"
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
      <GoogleBusinessProfileSchema />
      <BingPlacesSchema />
      <LocalSEO20kmSchema />
      <NearbyServiceSchema />
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
