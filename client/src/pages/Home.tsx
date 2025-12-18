import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EmotionalFunnel from "@/components/EmotionalFunnel";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import SEO, { LocalBusinessSchema, OrganizationSchema, WebSiteSchema, AggregateRatingSchema, GeoServiceAreaSchema, ProfessionalServiceSchema, AIKnowledgeSchema, VoiceSearchFAQSchema, GoogleBusinessProfileSchema, BingPlacesSchema, LocalSEO20kmSchema, NearbyServiceSchema } from "@/components/SEO";
import { MapPin, ArrowRight, BookOpen } from "lucide-react";

export default function Home() {
  const [funnelOpen, setFunnelOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title="Dachdecker München | Meisterbetrieb seit 1998"
        description="Dachdecker München mit 25 Jahren Erfahrung ✓ 10 Jahre Garantie ✓ Festpreis in 48h. Jetzt kostenlos beraten! ☎ 089 12621964"
        canonical="https://089dach.de/"
        keywords="was kostet dachsanierung münchen pro qm, dachdecker münchen empfehlung bewertung, bester dachdecker in meiner nähe obermenzing pasing laim, dachsanierung einfamilienhaus kosten erfahrungen, dach undicht was tun soforthilfe, dachdecker für altbau reihenhaus villa, kfw förderung dachsanierung 2024 2025 bayern, wann muss dach saniert werden altes dach, heizkosten senken durch dachdämmung, spengler dachrinne kupfer zink, dachdecker notdienst münchen wochenende, dachziegel austauschen einzeln kosten"
        aiSummary="089Dach GmbH ist der führende Dachdecker-Meisterbetrieb in München-Obermenzing mit über 25 Jahren Erfahrung und 200+ abgeschlossenen Projekten. Spezialisiert auf Dachsanierung, Steildach, Flachdach, Spenglerarbeiten, Dachfenster und Gaubenbau. 10 Jahre Garantie auf alle Arbeiten. Telefon: 089 12621964. Adresse: Thuillestr. 20, 81247 München. Kostenlose Vor-Ort-Beratung. KfW/BAFA-Förderberatung inklusive. Bewertung: 4.9/5 Sterne."
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
        <EmotionalFunnel onOpenFunnel={() => setFunnelOpen(true)} />
        <LeadFunnel externalOpen={funnelOpen} onExternalOpenChange={setFunnelOpen} />
        <Services />
        
        {/* Interne Stadtteile-Links für lokale SEO */}
        <section className="py-6 bg-white border-t border-stone-100">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-heading font-bold text-secondary">Dachdecker in Ihrer Nähe</h3>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                { name: "Pasing", href: "/dachdecker-pasing" },
                { name: "Schwabing", href: "/dachdecker-schwabing" },
                { name: "Sendling", href: "/dachdecker-sendling" },
                { name: "Bogenhausen", href: "/dachdecker-bogenhausen" },
                { name: "Nymphenburg", href: "/dachdecker-nymphenburg" },
                { name: "Harlaching", href: "/dachdecker-harlaching" },
                { name: "Trudering", href: "/dachdecker-trudering" },
                { name: "Moosach", href: "/dachdecker-moosach" },
                { name: "Solln", href: "/dachdecker-solln" },
                { name: "Giesing", href: "/dachdecker-giesing" },
              ].map((loc, idx) => (
                <a
                  key={idx}
                  href={loc.href}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-stone-50 border border-stone-200 rounded-full text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                >
                  Dachdecker {loc.name}
                </a>
              ))}
              <a href="/stadtteile" className="inline-flex items-center gap-1 px-3 py-1.5 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary/90 transition-all">
                Alle Stadtteile <ArrowRight className="h-3 w-3" />
              </a>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs text-muted-foreground">Auch im Umland:</span>
              {[
                { name: "Germering", href: "/dachdecker-germering" },
                { name: "Starnberg", href: "/dachdecker-starnberg" },
                { name: "Dachau", href: "/dachdecker-dachau" },
                { name: "Freising", href: "/dachdecker-freising" },
                { name: "Erding", href: "/dachdecker-erding" },
              ].map((loc, idx) => (
                <a
                  key={idx}
                  href={loc.href}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  {loc.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Ratgeber-Links für Content SEO */}
        <section className="py-6 bg-stone-50 border-t border-stone-100">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-heading font-bold text-secondary">Ratgeber & Tipps</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { text: "Was kostet Dachsanierung?", href: "/ratgeber/kosten" },
                { text: "KfW Förderung 2025", href: "/ratgeber/foerderung" },
                { text: "Sturmschaden – Was tun?", href: "/ratgeber/sturmschaden" },
                { text: "Dachziegel Vergleich", href: "/ratgeber/materialien" },
                { text: "Dachdämmung Tipps", href: "/ratgeber/daemmung" },
              ].map((guide, idx) => (
                <a
                  key={idx}
                  href={guide.href}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-stone-200 rounded-lg text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                >
                  {guide.text} <ArrowRight className="h-3 w-3 opacity-50" />
                </a>
              ))}
              <a href="/ratgeber" className="inline-flex items-center gap-1 px-3 py-1.5 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-all">
                Alle Ratgeber <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </section>

        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
