import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EmotionalFunnel from "@/components/EmotionalFunnel";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import SEO, { LocalBusinessSchema, OrganizationSchema, WebSiteSchema, AggregateRatingSchema, GeoServiceAreaSchema, ProfessionalServiceSchema, AIKnowledgeSchema, VoiceSearchFAQSchema, GoogleBusinessProfileSchema, BingPlacesSchema, LocalSEO20kmSchema, NearbyServiceSchema, SiteNavigationSchema, PriceSpecificationSchema, EmergencyServiceSchema, GeoAreaServedSchema } from "@/components/SEO";
import CustomerReviews from "@/components/CustomerReviews";
import { MapPin, ArrowRight } from "lucide-react";

export default function Home() {
  const [funnelOpen, setFunnelOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title="Dachdecker München – 089Dach | Meisterbetrieb & Notdienst"
        description="089Dach – Dachdecker in München: Dachsanierung, Reparatur, Spenglerarbeiten & Dachfenster. 24/7 Notdienst & 10 Jahre Garantie. Jetzt beraten lassen!"
        canonical="https://089dach.de/"
        keywords="Dachdecker München, Dachsanierung München, Dachreparatur München, Flachdach München, Spengler München, Dachfenster München, Notdienst Dach München, Dachdecker Obermenzing"
        aiSummary="089Dach GmbH ist der führende Dachdecker- und Spenglermeisterbetrieb in München-Obermenzing mit über 25 Jahren Erfahrung und 200+ abgeschlossenen Projekten. Spezialisiert auf Dachsanierung, Steildach, Flachdach, Spenglerarbeiten, Dachrinnen und Blechverkleidungen. 10 Jahre Garantie auf alle Dach- und Spenglerarbeiten. Telefon: 089 12621964. Adresse: Thuillestr. 20, 81247 München. Kostenlose Vor-Ort-Beratung. Festpreis-Garantie. Bewertung: 4.9/5 Sterne."
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
      <SiteNavigationSchema />
      <PriceSpecificationSchema />
      <EmergencyServiceSchema />
      <GeoAreaServedSchema />
      <Navbar />
      <main id="main-content" role="main" tabIndex={-1}>
        <Hero onOpenFunnel={() => setFunnelOpen(true)} />
        <EmotionalFunnel onOpenFunnel={() => setFunnelOpen(true)} />
        <LeadFunnel 
          externalOpen={funnelOpen} 
          onExternalOpenChange={setFunnelOpen}
          headline="Jede Woche ohne Reparatur kostet Sie Geld."
          subheadline="Wer jetzt handelt, zahlt weniger."
          description="Ein undichtes Dach wird nicht besser – es wird teurer. Je länger Sie warten, desto größer der Schaden. Sichern Sie sich jetzt Ihren Beratungstermin."
        />
        <Services />
        
        {/* Interne Stadtteile-Links für lokale SEO */}
        <section className="py-6 bg-white border-t border-stone-100">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-heading font-bold text-secondary">089Dach GmbH – Dachdecker in Ihrer Nähe</h2>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                { name: "Obermenzing", href: "/dachdecker-obermenzing" },
                { name: "Allach", href: "/dachdecker-allach" },
                { name: "Pasing", href: "/dachdecker-pasing" },
                { name: "Moosach", href: "/dachdecker-moosach" },
                { name: "Nymphenburg", href: "/dachdecker-nymphenburg" },
                { name: "Neuhausen", href: "/dachdecker-neuhausen" },
                { name: "Laim", href: "/dachdecker-laim" },
                { name: "Hadern", href: "/dachdecker-hadern" },
                { name: "Schwabing", href: "/dachdecker-schwabing" },
                { name: "Sendling", href: "/dachdecker-sendling" },
                { name: "Bogenhausen", href: "/dachdecker-bogenhausen" },
                { name: "Trudering", href: "/dachdecker-trudering" },
                { name: "Harlaching", href: "/dachdecker-harlaching" },
                { name: "Giesing", href: "/dachdecker-giesing" },
                { name: "Solln", href: "/dachdecker-solln" },
                { name: "Maxvorstadt", href: "/dachdecker-maxvorstadt" },
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
                Alle 48 Stadtteile <ArrowRight className="h-3 w-3" />
              </a>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs text-muted-foreground">Auch im Umland:</span>
              {[
                { name: "Karlsfeld", href: "/dachdecker-karlsfeld" },
                { name: "Dachau", href: "/dachdecker-dachau" },
                { name: "Gröbenzell", href: "/dachdecker-groebenzell" },
                { name: "Puchheim", href: "/dachdecker-puchheim" },
                { name: "Olching", href: "/dachdecker-olching" },
                { name: "Germering", href: "/dachdecker-germering" },
                { name: "Starnberg", href: "/dachdecker-starnberg" },
                { name: "Freising", href: "/dachdecker-freising" },
                { name: "Erding", href: "/dachdecker-erding" },
                { name: "FFB", href: "/dachdecker-fuerstenfeldbruck" },
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

        <CustomerReviews />
        <Contact 
          title="Lassen Sie uns über Ihr Dach sprechen"
          description="Kleine Schäden wachsen schnell. Je früher wir prüfen, desto günstiger die Lösung. Kostenlose Erstberatung – wir melden uns zeitnah."
        />
      </main>
      <Footer />
    </div>
  );
}
