import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, Thermometer, Euro, Shield } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, FAQPageSchema, ProductServiceSchema } from "@/components/SEO";
import RelatedServices from "@/components/RelatedServices";
import EinzugsgebietSection from "@/components/EinzugsgebietSection";
import { Link } from "wouter";
import heroImage from '@assets/stock_images/roofer_working_on_ro_cb52da00.jpg';

export default function DachgeschossDaemmen() {
  const daemmarten = [
    { name: "Zwischensparrendämmung", preis: "40-70€/m²", beschreibung: "Zwischen den Sparren, Standard" },
    { name: "Aufsparrendämmung", preis: "80-150€/m²", beschreibung: "Auf den Sparren, beste Dämmung" },
    { name: "Untersparrendämmung", preis: "25-50€/m²", beschreibung: "Zusätzlich unter den Sparren" },
    { name: "Geschossdeckendämmung", preis: "20-40€/m²", beschreibung: "Bei unbeheiztem Dachboden" }
  ];

  const vorteile = [
    "Bis zu 30% Heizkosten sparen",
    "Behagliches Raumklima – auch im Sommer",
    "KfW-Förderung bis 20% möglich",
    "Wertsteigerung der Immobilie",
    "Schallschutz als Bonus",
    "Klimaschutz durch weniger CO₂"
  ];

  const faqs = [
    { question: "Was kostet Dachgeschoss dämmen?", answer: "Zwischensparren 40-70€/m², Aufsparren 80-150€/m², Untersparren 25-50€/m². Für 80m² Dachfläche ca. 4.000-12.000€." },
    { question: "Welche Dämmung ist am besten?", answer: "Aufsparrendämmung ist energetisch am besten (keine Wärmebrücken), aber teurer. Zwischensparren ist der Klassiker mit gutem Preis-Leistungs-Verhältnis." },
    { question: "Gibt es Förderung für Dachdämmung?", answer: "Ja! KfW fördert mit bis zu 20% Zuschuss (max. 12.000€) bei U-Wert ≤ 0,14 W/m²K. BAFA-Förderung für Energieberatung." },
    { question: "Wie lange dauert die Dämmung?", answer: "Ein durchschnittliches Dachgeschoss: 2-5 Tage. Bei Aufsparrendämmung länger, da das Dach geöffnet wird." },
    { question: "Kann man von innen dämmen?", answer: "Ja, mit Zwischensparren- oder Untersparrendämmung. Vorteil: Dacheindeckung bleibt erhalten. Nachteil: Wärmebrücken an Sparren." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Dachdämmung München | 40-150€/m² | Bis 30% Heizkosten sparen"
        description="Dachgeschoss dämmen lassen: ✓ Zwischensparrendämmung 40-70€/m² ✓ Aufsparrendämmung 80-150€/m² ✓ Bis 20% KfW-Förderung ✓ Energieberater im Team. München & Oberbayern!"
        canonical="/dachgeschoss-daemmen"
        keywords="dachgeschoss dämmen münchen, dachdämmung kosten bayern, zwischensparrendämmung preis, aufsparrendämmung kosten, dachboden isolieren lassen, kfw förderung dachdämmung"
        aiSummary="Dachgeschoss dämmen München: Zwischensparren 40-70€/m², Aufsparren 80-150€/m². Bis 20% KfW-Förderung. 089Dach - Ihr Dachdecker für München, Pasing, Bogenhausen, Schwabing. Tel: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Dachgeschoss dämmen", url: "/dachgeschoss-daemmen" }]} />
      <ServiceSchema pageName="Dachgeschoss dämmen" services={[{ name: "Dachdämmung", description: "Alle Dämm-Methoden" }]} />
      <ProductServiceSchema name="Dachgeschoss dämmen München" description="Professionelle Dachdämmung" priceFrom={40} priceTo={150} category="Dämmung" />
      <FAQPageSchema faqs={faqs} />
      
      <Navigation />
      
      <section className="relative py-20 text-white overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/85 to-blue-800/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-blue-500/30">
              <Thermometer className="w-5 h-5 text-blue-400" />
              <span className="font-medium text-blue-300">Bis 30% Heizkosten sparen</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Dachgeschoss dämmen</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto">Wohnkomfort steigern, Heizkosten senken – professionelle Dämmung mit KfW-Förderung.</p>
            <p className="text-lg text-white/70 mb-8">Ab 40€/m² • Bis 20% Förderung • Meisterbetrieb</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6" data-testid="button-hero-callback"><Phone className="mr-2 h-5 w-5" />Kostenlose Beratung</Button></Link>
              <Link href="/rueckruf"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6" data-testid="button-hero-online">24h Onlinetermin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Dämm-Methoden & Preise</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {daemmarten.map((d, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6 flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">{d.name}</h3>
                    <p className="text-slate-600 text-sm">{d.beschreibung}</p>
                  </div>
                  <p className="text-xl font-bold text-blue-600 whitespace-nowrap ml-4">{d.preis}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Ihre Vorteile</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {vorteile.map((v, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="text-slate-700">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
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

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Dachgeschoss dämmen lassen?</h2>
            <p className="text-xl text-white/90 mb-8">Kostenlose Beratung mit Förder-Check</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8" data-testid="button-cta-callback">Beratung anfordern<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
              <Link href="/rueckruf"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online-cta">24h Onlinetermin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <EinzugsgebietSection />
      <LeadFunnel />
      <RelatedServices currentPage="daemmung" />
      <Footer />
    </div>
  );
}
