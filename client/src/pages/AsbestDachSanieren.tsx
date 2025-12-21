import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, AlertTriangle, Shield } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, FAQPageSchema, ProductServiceSchema } from "@/components/SEO";
import BackButton from "@/components/BackButton";
import EinzugsgebietSection from "@/components/EinzugsgebietSection";
import { Link } from "wouter";
import heroImage from '@assets/stock_images/roofer_working_on_ro_cb52da00.jpg';

export default function AsbestDachSanieren() {
  const leistungen = [
    { name: "Asbest-Analyse", preis: "100-200€", beschreibung: "Labortest zur Bestätigung" },
    { name: "Demontage Asbestdach", preis: "30-50€/m²", beschreibung: "Fachgerechte Entsorgung" },
    { name: "Entsorgungskosten", preis: "150-300€/t", beschreibung: "Sondermüll-Deponie" },
    { name: "Neueindeckung", preis: "60-180€/m²", beschreibung: "Alle Materialien möglich" }
  ];

  const vorgehensweise = [
    "Begutachtung und ggf. Labortest",
    "Anmeldung beim Gewerbeaufsichtsamt",
    "Schutzmaßnahmen (Absperrung, Schutzkleidung)",
    "Schonende Demontage ohne Beschädigung",
    "Fachgerechte Verpackung und Entsorgung",
    "Neueindeckung nach Wunsch"
  ];

  const faqs = [
    { question: "Was kostet Asbestdach sanieren?", answer: "Demontage + Entsorgung: 40-70€/m². Mit Neueindeckung: 100-250€/m² gesamt. Für 100m² Dach ca. 10.000-25.000€." },
    { question: "Ist mein Eternitdach gefährlich?", answer: "Intaktes Asbest-Eternit (vor 1993) ist nicht direkt gefährlich. Bei Beschädigung, Bearbeitung oder Verwitterung werden aber Fasern freigesetzt." },
    { question: "Kann ich Asbestdach selbst entfernen?", answer: "Nein! Nur zugelassene Fachbetriebe dürfen das. Wir sind TRGS 519 zertifiziert und für Asbestarbeiten zugelassen." },
    { question: "Wie erkenne ich Asbest im Dach?", answer: "Graue Wellplatten vor 1993 sind meist Asbest-Eternit. Sicherheit gibt nur ein Labortest (ca. 100€)." },
    { question: "Gibt es Förderung für Asbestsanierung?", answer: "Ja, im Rahmen der KfW-Förderung für energetische Sanierung, wenn gleichzeitig gedämmt wird. Bis zu 20% Zuschuss." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Eternit & Asbest Dach sanieren München | TRGS 519 zertifiziert"
        description="Asbestdach fachgerecht entsorgen lassen: ✓ TRGS 519 zertifizierter Betrieb ✓ Demontage 30-50€/m² ✓ Sichere Entsorgung ✓ Neueindeckung. Dachdecker München & Oberbayern!"
        canonical="/asbest-dach-sanieren"
        keywords="asbest dach sanieren münchen, eternit dach entsorgen bayern, asbestdach erneuern kosten, eternit wellplatten entsorgen, asbest dachdecker oberbayern, asbestsanierung dach"
        aiSummary="Asbestdach sanieren München und Umgebung: Demontage 30-50€/m², fachgerechte Entsorgung. 089Dach - TRGS 519 zertifiziert für München, Freising, Erding, Starnberg. Kostenlose Beratung: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Asbestdach sanieren", url: "/asbest-dach-sanieren" }]} />
      <ServiceSchema pageName="Asbestdach sanieren" services={[{ name: "Asbestsanierung", description: "Fachgerechte Demontage und Entsorgung" }]} />
      <ProductServiceSchema name="Asbestdach sanieren München" description="Zertifizierte Asbestdach-Sanierung" priceFrom={40} priceTo={250} category="Asbestsanierung" />
      <FAQPageSchema faqs={faqs} />
      
      <Navigation />
      
      <section className="relative py-20 text-white overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/95 via-red-900/85 to-red-800/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-red-500/30 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-red-400/50">
              <AlertTriangle className="w-5 h-5 text-red-300" />
              <span className="font-medium text-red-200">Zertifizierter Fachbetrieb</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"><strong>Asbestdach sanieren</strong> München</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-7xl mx-auto">Fachgerechte Demontage und Entsorgung von Asbest-Eternit durch zertifizierten Betrieb.</p>
            <p className="text-lg text-white/70 mb-8">TRGS 519 zertifiziert • Sichere Entsorgung • Meisterbetrieb</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6" data-testid="button-hero-callback"><Phone className="mr-2 h-5 w-5" />Kostenlose Beratung</Button></Link>
              <Link href="/beratung"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6" data-testid="button-hero-online">24h Online Termin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <BackButton />

      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Kosten im Überblick</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {leistungen.map((l, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6 flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">{l.name}</h3>
                    <p className="text-slate-600 text-sm">{l.beschreibung}</p>
                  </div>
                  <p className="text-xl font-bold text-red-600 whitespace-nowrap ml-4">{l.preis}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Unsere Vorgehensweise</h2>
            <div className="space-y-4">
              {vorgehensweise.map((v, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">{index + 1}</div>
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

      <section className="py-6 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Asbestdach loswerden?</h2>
            <p className="text-xl text-white/90 mb-8">Kostenlose Erstberatung durch zertifizierten Fachbetrieb</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-white text-red-700 hover:bg-red-50 text-lg px-8" data-testid="button-cta-callback">Beratung anfordern<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
              <Link href="/beratung"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online-cta">24h Online Termin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <EinzugsgebietSection />
      <LeadFunnel 
        headline="Asbest Dach sanieren in München?"
        subheadline="Wir entsorgen sicher und fachgerecht."
        description="Asbest Dach sanieren in München – sichere Entsorgung nach Vorschrift."
      />
    </div>
  );
}
