import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIBeraterSection from "@/components/AIBeraterSection";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, Paintbrush, Shield } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, FAQPageSchema, ProductServiceSchema } from "@/components/SEO";
import BackButton from "@/components/BackButton";
import EinzugsgebietSection from "@/components/EinzugsgebietSection";
import { Link } from "wouter";
import heroImage from '@assets/stock_images/roofer_working_on_ro_cb52da00.jpg';
import { ServiceGeoLinks } from "@/components/GeoLinks";
import { TextWithKeywordLinks } from "@/components/KeywordLink";
import { CostEscalationBanner, DecisionPressureBanner } from "@/components/UrgencyBanner";

export default function DachbeschichtungKosten() {
  const leistungen = [
    { name: "Reinigung + Beschichtung", preis: "30-50€/m²", beschreibung: "Komplett inkl. Vorarbeiten" },
    { name: "Nur Beschichtung", preis: "20-35€/m²", beschreibung: "Bei sauberem Dach" },
    { name: "Premium-Beschichtung", preis: "40-60€/m²", beschreibung: "Nano-Versiegelung, 15+ Jahre" },
    { name: "Reparatur + Beschichtung", preis: "45-70€/m²", beschreibung: "Mit Ziegel-Austausch" }
  ];

  const vorteile = [
    "Dach sieht wieder wie neu aus",
    "Versiegelt poröse Ziegel",
    "Schützt vor Moos und Algen",
    "Verlängert die Lebensdauer um 10-15 Jahre",
    "Günstiger als Neueindeckung",
    "Viele Farboptionen möglich"
  ];

  const faqs = [
    { question: "Was kostet Dachbeschichtung pro m²?", answer: "Reinigung + Beschichtung: 30-50€/m², nur Beschichtung: 20-35€/m², Premium: 40-60€/m². Für 100m² also 3.000-6.000€." },
    { question: "Lohnt sich Dachbeschichtung?", answer: "Ja, wenn das Dach grundsätzlich intakt ist, aber optisch alt aussieht oder porös ist. Günstiger als Neueindeckung und verlängert die Lebensdauer." },
    { question: "Wie lange hält eine Dachbeschichtung?", answer: "Standard: 8-12 Jahre, Premium: 12-15+ Jahre. Danach kann erneut beschichtet werden." },
    { question: "Ist Dachbeschichtung bei jedem Dach möglich?", answer: "Nein! Nur bei intakten Ziegeln. Bei Rissen, Frostschäden oder sehr alten Ziegeln ist Beschichtung nicht sinnvoll. Wir prüfen das." },
    { question: "Welche Farben gibt es?", answer: "Anthrazit, Rot, Braun, Grau und viele mehr. Wir beraten Sie zur passenden Farbe für Ihr Haus." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Dachbeschichtung Kosten München 2025 | ab 25€/m² | Meisterbetrieb"
        description="Dachbeschichtung Kosten München: ✓ Preise ab 25€/m² ✓ 10 Jahre Garantie ✓ Kostenlose Beratung ✓ Festpreisangebot. ☎ 089 12621964"
        canonical="/dachbeschichtung-kosten"
        keywords="dachbeschichtung kosten münchen, dach beschichten preis, dachfarbe kosten bayern, dachziegel beschichten lassen, dachversiegelung münchen, was kostet dachbeschichtung münchen, dachbeschichtung münchen erfahrungen, wie lange dauert dachbeschichtung, dachbeschichtung selber machen oder profi, dachbeschichtung kosten pro qm, dachbeschichtung münchen günstig, dachbeschichtung festpreis münchen, dachbeschichtung preisvergleich, dachbeschichtung meisterbetrieb münchen, dachbeschichtung fachbetrieb münchen, dachbeschichtung handwerker münchen"
        aiSummary="Dachbeschichtung München: Komplett 30-50€/m², Premium 40-60€/m². Verlängert Lebensdauer um 10-15 Jahre. 089Dach beschichtet Dächer in München, Gräfelfing, Germering. Tel: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Dachbeschichtung Kosten", url: "/dachbeschichtung-kosten" }]} />
      <ServiceSchema pageName="Dachbeschichtung Kosten" services={[{ name: "Dachbeschichtung", description: "Reinigung und Beschichtung" }]} />
      <ProductServiceSchema name="Dachbeschichtung München" description="Professionelle Dachbeschichtung" priceFrom={30} priceTo={60} category="Dachbeschichtung" />
      <FAQPageSchema faqs={faqs} />
      
      <Navigation />
      <AIBeraterSection 
        pageName="Dachbeschichtung"
        description="Lohnt sich eine Dachbeschichtung? Unser KI-Berater erklärt ehrlich Vor- und Nachteile."
      />
      
      <section className="relative py-20 text-white overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-pink-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-pink-500/30">
              <Paintbrush className="w-5 h-5 text-pink-400" />
              <span className="font-medium text-pink-300">Wie ein neues Dach</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"><strong>Dachbeschichtung</strong></h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-7xl mx-auto">Ihr Dach sieht alt aus? Mit professioneller Beschichtung strahlt es wieder wie neu.</p>
            <p className="text-lg text-white/70 mb-8">30-50€/m² komplett • Viele Farben • Meisterbetrieb</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-pink-600 hover:bg-pink-700 text-white text-lg px-8 py-6" data-testid="button-hero-callback"><a href="/rueckruf/"><Phone className="mr-2 h-5 w-5" />Kostenlose Beratung</a></Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6" data-testid="button-hero-online"><a href="/beratung">24h Online Termin</a></Button>
            </div>
          </div>
        </div>
      </section>

      <BackButton />

      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12"><strong>Dachbeschichtung</strong> – Leistungen & Preise</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {leistungen.map((l, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6 flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">{l.name}</h3>
                    <p className="text-slate-600 text-sm">{l.beschreibung}</p>
                  </div>
                  <p className="text-xl font-bold text-pink-600 whitespace-nowrap ml-4">{l.preis}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Vorteile der Dachbeschichtung</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {vorteile.map((v, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-pink-500 flex-shrink-0" />
                  <span className="text-slate-700">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Häufige Fragen</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">{faq.question}</h3>
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Dach beschichten lassen?</h2>
            <p className="text-xl text-white/90 mb-8">Kostenlose Prüfung, ob Ihr Dach geeignet ist</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-pink-700 hover:bg-pink-50 text-lg px-8" data-testid="button-cta-callback"><a href="/rueckruf/">Beratung anfordern<ArrowRight className="ml-2 h-5 w-5" /></a></Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online-cta"><a href="/beratung">24h Online Termin</a></Button>
            </div>
          </div>
        </div>
      </section>

      <EinzugsgebietSection />
      <ServiceGeoLinks currentService="Dachreparatur" />
      <CostEscalationBanner />
      <LeadFunnel 
        headline="Dachbeschichtung Kosten – lohnt sich das?"
        subheadline="Wir beraten ehrlich."
        description="Ehrliche Beratung zu Dachbeschichtung Kosten – wir prüfen kostenlos, ob es sich lohnt."
      />
      <DecisionPressureBanner />
      <Footer />
    </div>
  );
}
