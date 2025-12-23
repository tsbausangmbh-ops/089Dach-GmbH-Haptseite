import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIBeraterSection from "@/components/AIBeraterSection";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, Home, Shield } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, FAQPageSchema, ProductServiceSchema } from "@/components/SEO";
import BackButton from "@/components/BackButton";
import EinzugsgebietSection from "@/components/EinzugsgebietSection";
import { Link } from "wouter";
import heroImage from '@assets/stock_images/roofer_working_on_ro_cb52da00.jpg';

export default function WalmdachKosten() {
  const leistungen = [
    { name: "Walmdach Neueindeckung", preis: "80-200€/m²", beschreibung: "Inkl. Material und Arbeit" },
    { name: "Walmdach Sanierung", preis: "150-400€/m²", beschreibung: "Mit Dämmung und Ausbau" },
    { name: "Walm-Teilsanierung", preis: "60-120€/m²", beschreibung: "Nur Walmflächen" },
    { name: "Grate/Kehlen erneuern", preis: "80-150€/lfm", beschreibung: "Kritische Bereiche" }
  ];

  const besonderheiten = [
    "Mehr Aufwand durch 4 Dachflächen statt 2",
    "Grate und Kehlen als Schwachstellen",
    "Komplexere Statik bei Sanierung",
    "Höhere Materialkosten durch Verschnitt",
    "Besserer Windschutz als Satteldach"
  ];

  const faqs = [
    { question: "Was kostet Walmdach sanieren pro m²?", answer: "Nur Neueindeckung 80-200€/m², mit Dämmung 150-400€/m². Walmdächer sind ca. 15-25% teurer als Satteldächer durch mehr Aufwand." },
    { question: "Warum ist Walmdach teurer als Satteldach?", answer: "Mehr Flächen, mehr Grate/Kehlen, mehr Verschnitt beim Material, komplexere Arbeit. Aber: Stabilität und Optik sind oft besser." },
    { question: "Was sind die Schwachstellen beim Walmdach?", answer: "Grate (Außenkanten) und Kehlen (Innenkanten) sind anfällig für Undichtigkeit. Regelmäßige Kontrolle empfohlen." },
    { question: "Kann man Walmdach in Satteldach umbauen?", answer: "Technisch möglich, aber aufwändig und teuer. Meist lohnt es sich, das Walmdach zu sanieren." },
    { question: "Wie lange dauert Walmdach-Sanierung?", answer: "Einfamilienhaus: 2-4 Wochen je nach Umfang. Mit Dachstuhlarbeiten länger." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Walmdach sanieren München | Was kostet ein Walmdach? | Preise 2025"
        description="Walmdach Kosten in München & Oberbayern: ✓ Neueindeckung 80-200€/m² ✓ Komplettsanierung 150-400€/m² ✓ Grate & Kehlen als Spezialität. Meisterbetrieb mit Festpreisen!"
        canonical="/walmdach-kosten"
        keywords="walmdach kosten münchen, walmdach sanieren preis, walmdach neu eindecken bayern, walmdach reparatur, grat kehle dach kosten"
        aiSummary="Walmdach Kosten München und Umgebung: Neueindeckung 80-200€/m², Sanierung 150-400€/m². 089Dach - Spezialist für Walmdächer in Bogenhausen, Solln, Grünwald. Tel: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Walmdach Kosten", url: "/walmdach-kosten" }]} />
      <ServiceSchema pageName="Walmdach Kosten" services={[{ name: "Walmdach-Sanierung", description: "Eindeckung und Sanierung" }]} />
      <ProductServiceSchema name="Walmdach München" description="Walmdach-Sanierung" priceFrom={80} priceTo={400} category="Walmdach" />
      <FAQPageSchema faqs={faqs} />
      
      <Navigation />
      <AIBeraterSection 
        pageName="Walmdach Kosten"
        description="Was kostet ein Walmdach? Unser KI-Berater vergleicht mit anderen Dachformen."
      />
      
      <section className="relative py-20 text-white overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-amber-500/30">
              <Home className="w-5 h-5 text-amber-400" />
              <span className="font-medium text-amber-300">Die edle Dachform</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"><strong>Walmdach Kosten</strong></h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-7xl mx-auto">Das anspruchsvolle Walmdach – wir sanieren und decken alle vier Seiten fachgerecht.</p>
            <p className="text-lg text-white/70 mb-8">80-200€/m² • Alle Materialien • Meisterbetrieb</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf/"><Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-8 py-6" data-testid="button-hero-callback"><Phone className="mr-2 h-5 w-5" />Kostenlose Beratung</Button></Link>
              <Link href="/beratung"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6" data-testid="button-hero-online">24h Online Termin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <BackButton />

      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Leistungen & Preise</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {leistungen.map((l, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6 flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">{l.name}</h3>
                    <p className="text-slate-600 text-sm">{l.beschreibung}</p>
                  </div>
                  <p className="text-xl font-bold text-amber-600 whitespace-nowrap ml-4">{l.preis}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Besonderheiten beim Walmdach</h2>
            <div className="space-y-4">
              {besonderheiten.map((b, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <span className="text-slate-700">{b}</span>
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

      <section className="py-6 bg-amber-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Walmdach sanieren lassen?</h2>
            <p className="text-xl text-white/90 mb-8">Kostenlose Erstberatung vom Meisterbetrieb</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf/"><Button size="lg" className="bg-white text-amber-700 hover:bg-amber-50 text-lg px-8" data-testid="button-cta-callback">Beratung anfordern<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
              <Link href="/beratung"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online-cta">24h Online Termin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <EinzugsgebietSection />
      <LeadFunnel 
        headline="Walmdach Kosten berechnen?"
        subheadline="Wir erstellen Ihr Angebot."
        description="Faire Walmdach Kosten – langlebig und wertsteigernd vom Meisterbetrieb."
      />
    </div>
  );
}
