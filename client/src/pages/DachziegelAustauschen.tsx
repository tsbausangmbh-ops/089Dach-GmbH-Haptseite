import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, Hammer, Shield, Clock, AlertTriangle } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, FAQPageSchema, ProductServiceSchema } from "@/components/SEO";
import RelatedServices from "@/components/RelatedServices";
import { Link } from "wouter";

export default function DachziegelAustauschen() {
  const ziegelArten = [
    { name: "Tonziegel", preis: "ab 25€/Stück", beschreibung: "Klassische Dachziegel, langlebig und farbecht" },
    { name: "Betondachsteine", preis: "ab 18€/Stück", beschreibung: "Robuste Alternative, günstiger als Ton" },
    { name: "Schiefer", preis: "ab 45€/Stück", beschreibung: "Edle Naturstein-Optik, sehr langlebig" },
    { name: "Biberschwanz", preis: "ab 30€/Stück", beschreibung: "Traditionelle Form für Altbauten" }
  ];

  const gruende = [
    "Ziegel nach Sturm gebrochen oder verschoben",
    "Frostschäden durch eingedrungenes Wasser",
    "Natürliche Alterung nach 40-60 Jahren",
    "Moos und Flechten haben Ziegel porös gemacht",
    "Dachundichtigkeit durch beschädigte Ziegel"
  ];

  const faqs = [
    { question: "Was kostet es, einzelne Dachziegel austauschen zu lassen?", answer: "Der Austausch einzelner Dachziegel kostet inklusive Material und Anfahrt ab 80€. Bei größeren Mengen (ab 10 Ziegel) sinkt der Stückpreis. Wir erstellen vorab einen Festpreis-Kostenvoranschlag." },
    { question: "Kann ich defekte Dachziegel selbst austauschen?", answer: "Grundsätzlich möglich, aber nicht empfohlen: Absturzgefahr ist hoch, und falsch verlegte Ziegel führen zu Undichtigkeiten. Als Meisterbetrieb übernehmen wir Gewährleistung für unsere Arbeit." },
    { question: "Wie lange dauert der Austausch von Dachziegeln?", answer: "Einzelne Ziegel werden in 30-60 Minuten getauscht. Größere Bereiche (10-50 Ziegel) dauern 2-4 Stunden. Komplette Umdeckungen je nach Dachgröße 2-5 Tage." },
    { question: "Woher bekomme ich passende Ersatzziegel für mein altes Dach?", answer: "Wir haben Zugang zu Herstellern, Baustoffhändlern und Abrisshändlern. In 90% der Fälle finden wir passende Ziegel – auch für historische Dächer. Alternativ bieten wir optisch passende Alternativen." },
    { question: "Wann sollte man das ganze Dach neu eindecken statt nur Ziegel zu tauschen?", answer: "Wenn mehr als 20% der Ziegel beschädigt sind oder die Unterkonstruktion Schäden zeigt, lohnt sich oft eine komplette Neueindeckung. Wir beraten Sie ehrlich, was wirtschaftlicher ist." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Dachziegel austauschen München | Ab 80€ | 089Dach Meisterbetrieb"
        description="Dachziegel austauschen in München ✓ Einzelne Ziegel ab 80€ ✓ Passende Ersatzziegel auch für Altbauten ✓ Meisterbetrieb seit 1998 ✓ Jetzt Termin vereinbaren!"
        canonical="/dachziegel-austauschen"
        keywords="dachziegel austauschen münchen, dachziegel ersetzen, dachziegel tauschen kosten, zerbrochene dachziegel ersetzen, dachziegel erneuern, einzelne dachziegel austauschen, dachziegel reparatur münchen, dachziegel kaufen münchen, alte dachziegel ersetzen, dachziegel beschädigt"
        aiSummary="Dachziegel austauschen in München durch 089Dach GmbH Meisterbetrieb. Einzelne Ziegel ab 80€, auch passende Ersatzziegel für Altbauten verfügbar. Kostenvoranschlag vor Arbeitsbeginn. Tel: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Dachziegel austauschen", url: "/dachziegel-austauschen" }]} />
      <ServiceSchema 
        pageName="Dachziegel austauschen München"
        services={[
          { name: "Einzelne Ziegel tauschen", description: "Schneller Austausch beschädigter Dachziegel" },
          { name: "Teilflächensanierung", description: "Erneuerung größerer Dachbereiche" },
          { name: "Komplett-Umdeckung", description: "Komplette Neueindeckung mit modernen Ziegeln" }
        ]}
      />
      <ProductServiceSchema 
        name="Dachziegel austauschen München"
        description="Professioneller Austausch von Dachziegeln durch Meisterbetrieb. Einzelne Ziegel oder komplette Flächen."
        priceFrom={80}
        priceTo={500}
        category="Dachreparatur"
      />
      <FAQPageSchema faqs={faqs} />
      
      <Navigation />
      
      <section className="relative py-20 bg-gradient-to-br from-amber-600 via-orange-600 to-red-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Hammer className="w-5 h-5" />
              <span className="font-medium">Meisterbetrieb seit 1998</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Dachziegel austauschen München
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Einzelne Ziegel ab 80€ – passende Ersatzziegel auch für alte Dächer. 
              Schnelle Reparatur durch Ihren Münchner Dachdeckermeister.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf">
                <Button size="lg" className="bg-white text-orange-700 hover:bg-orange-50 text-lg px-8 py-6" data-testid="button-hero-callback">
                  <Phone className="mr-2 h-5 w-5" />
                  Kostenlos beraten lassen
                </Button>
              </Link>
              <a href="tel:+498912621964">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6" data-testid="button-hero-call">
                  089 12621964
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Wann müssen Dachziegel ausgetauscht werden?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gruende.map((grund, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{grund}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-4">
              Dachziegel-Arten & Preise
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Wir verbauen alle gängigen Ziegelarten und finden auch Ersatz für historische Dächer
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ziegelArten.map((ziegel, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{ziegel.name}</h3>
                  <p className="text-2xl font-bold text-orange-600 mb-3">{ziegel.preis}</p>
                  <p className="text-slate-600 text-sm">{ziegel.beschreibung}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-500 text-sm mt-8">
              * Preise inkl. Material. Montagekosten abhängig von Zugänglichkeit und Menge.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Unsere Leistungen beim Ziegelaustausch
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Schnelle Reparatur</h3>
                <p className="text-slate-600">Termine oft innerhalb von 48 Stunden. Einzelne Ziegel in unter einer Stunde getauscht.</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hammer className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Passende Ziegel</h3>
                <p className="text-slate-600">Zugang zu Herstellern und Abrisshändlern. Auch für historische Dächer finden wir Ersatz.</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Festpreisgarantie</h3>
                <p className="text-slate-600">Kostenvoranschlag vor Arbeitsbeginn. Keine versteckten Kosten oder Nachforderungen.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Häufige Fragen zum Dachziegel austauschen
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">{faq.question}</h3>
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Dachziegel beschädigt? Wir helfen schnell!
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Kostenlose Erstberatung und Festpreis-Angebot vor Arbeitsbeginn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf">
                <Button size="lg" className="bg-white text-orange-700 hover:bg-orange-50 text-lg px-8" data-testid="button-cta-callback">
                  Rückruf anfordern
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+498912621964">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-cta-call">
                  <Phone className="mr-2 h-5 w-5" />
                  089 12621964
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <LeadFunnel />
      <RelatedServices currentPage="dachziegel" />
      <Footer />
    </div>
  );
}
