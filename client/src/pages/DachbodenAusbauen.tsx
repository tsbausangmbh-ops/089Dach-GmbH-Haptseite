import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, Home, Euro, Shield } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, FAQPageSchema, ProductServiceSchema } from "@/components/SEO";
import RelatedServices from "@/components/RelatedServices";
import EinzugsgebietSection from "@/components/EinzugsgebietSection";
import { Link } from "wouter";
import heroImage from '@assets/stock_images/roofer_working_on_ro_cb52da00.jpg';

export default function DachbodenAusbauen() {
  const leistungen = [
    { name: "Dämmung", preis: "40-100€/m²", beschreibung: "Zwischensparren + Aufsparren" },
    { name: "Trockenbau", preis: "30-50€/m²", beschreibung: "Rigips, Decke, Wände" },
    { name: "Dachfenster", preis: "1.200-3.000€", beschreibung: "Pro Fenster inkl. Einbau" },
    { name: "Elektrik", preis: "50-100€/m²", beschreibung: "Leitungen, Steckdosen, Licht" },
    { name: "Fußboden", preis: "40-80€/m²", beschreibung: "Aufbau, Dämmung, Belag" },
    { name: "Gaube", preis: "5.000-15.000€", beschreibung: "Mehr Kopfhöhe und Licht" }
  ];

  const faqs = [
    { question: "Was kostet Dachboden ausbauen pro m²?", answer: "Komplett ausgebaut: 800-1.500€/m². Nur Dämmung und Trockenbau: 400-600€/m². Je nach Ausstattung und Ausgangszustand." },
    { question: "Braucht man Baugenehmigung für Dachausbau?", answer: "In Bayern: Wenn neuer Wohnraum entsteht (Aufenthaltsraum), meist ja. Bei reinem Ausbau als Lager nicht. Wir klären das mit Ihnen." },
    { question: "Wie viel Wohnfläche gewinnt man?", answer: "Typisch 30-50% der Grundfläche als vollwertige Wohnfläche (>2,30m Höhe), dazu Abseiten als Stauraum." },
    { question: "Wie lange dauert ein Dachausbau?", answer: "Ein kompletter Dachausbau (50m²): 4-8 Wochen. Nur Dämmung und Trockenbau: 1-2 Wochen." },
    { question: "Lohnt sich ein Dachausbau finanziell?", answer: "Ja! Kosten oft nur 50-70% eines Anbaus, Wertsteigerung aber ähnlich. Plus: niedrigere Heizkosten durch Dämmung." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Dachausbau München | Dachboden zu Wohnraum | 800-1.500€/m²"
        description="Dachgeschoss ausbauen lassen: ✓ Dämmung 40-100€/m² ✓ Trockenbau ✓ Dachfenster ✓ Gaube ✓ Komplett-Service 800-1.500€/m². KfW-förderfähig! München & Oberbayern"
        canonical="/dachboden-ausbauen"
        keywords="dachboden ausbauen münchen, dachausbau kosten bayern, dachgeschoss ausbauen preis, spitzboden ausbauen lassen, dachgeschoss wohnraum"
        aiSummary="Dachboden ausbauen München: Komplett 800-1.500€/m², nur Dämmung+Trockenbau 400-600€/m². 089Dach - Ihr Ausbau-Partner für München, Schwabing, Harlaching. Tel: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Dachboden ausbauen", url: "/dachboden-ausbauen" }]} />
      <ServiceSchema pageName="Dachboden ausbauen München" services={[{ name: "Dachausbau", description: "Komplett-Service für Ihren Dachboden" }]} />
      <ProductServiceSchema name="Dachboden ausbauen München" description="Professioneller Dachausbau" priceFrom={800} priceTo={1500} category="Dachausbau" />
      <FAQPageSchema faqs={faqs} />
      
      <Navigation />
      
      <section className="relative py-20 text-white overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/95 via-violet-900/85 to-violet-800/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-violet-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-violet-500/30">
              <Home className="w-5 h-5 text-violet-400" />
              <span className="font-medium text-violet-300">Mehr Wohnraum schaffen</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Dachboden ausbauen München</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto">Aus ungenutztem Dachboden wird wertvoller Wohnraum – Dämmung, Fenster, Ausbau.</p>
            <p className="text-lg text-white/70 mb-8">800-1.500€/m² komplett • KfW-förderfähig • Meisterbetrieb</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-white text-lg px-8 py-6" data-testid="button-hero-callback"><Phone className="mr-2 h-5 w-5" />Kostenlose Beratung</Button></Link>
              <Link href="/rueckruf"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6" data-testid="button-hero-online">24h Onlinetermin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Leistungen & Preise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {leistungen.map((l, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{l.name}</h3>
                  <p className="text-2xl font-bold text-violet-600 mb-3">{l.preis}</p>
                  <p className="text-slate-600 text-sm">{l.beschreibung}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Häufige Fragen zum Dachausbau</h2>
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

      <section className="py-16 bg-violet-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Dachboden ausbauen lassen?</h2>
            <p className="text-xl text-white/90 mb-8">Kostenlose Erstberatung mit Potenzialanalyse</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-white text-violet-700 hover:bg-violet-50 text-lg px-8" data-testid="button-cta-callback">Beratung anfordern<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
              <Link href="/rueckruf"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online-cta">24h Onlinetermin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <EinzugsgebietSection />
      <LeadFunnel />
      <RelatedServices currentPage="ausbau" />
      <Footer />
    </div>
  );
}
