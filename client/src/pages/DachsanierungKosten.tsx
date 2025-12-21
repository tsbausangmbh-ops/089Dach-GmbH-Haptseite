import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIBeraterSection from "@/components/AIBeraterSection";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, Euro, Calculator, Shield, Clock, Award } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, FAQPageSchema, ProductServiceSchema } from "@/components/SEO";
import BackButton from "@/components/BackButton";
import EinzugsgebietSection from "@/components/EinzugsgebietSection";
import { Link } from "wouter";
import heroImage from '@assets/stock_images/roofer_working_on_ro_cb52da00.jpg';

export default function DachsanierungKosten() {
  const kostenTabelle = [
    { leistung: "Dacheindeckung erneuern", preis: "60-180€/m²", details: "Je nach Material (Beton, Ton, Schiefer)" },
    { leistung: "Dachdämmung", preis: "40-150€/m²", details: "Aufsparren-, Zwischensparren- oder Untersparrendämmung" },
    { leistung: "Dachstuhl sanieren", preis: "50-120€/m²", details: "Bei Schäden am Holz" },
    { leistung: "Dachrinnen erneuern", preis: "30-80€/lfm", details: "Zink, Kupfer oder Kunststoff" },
    { leistung: "Komplettsanierung", preis: "150-350€/m²", details: "Alles inkl. Dämmung und Eindeckung" }
  ];

  const faktoren = [
    { title: "Dachgröße", text: "Größere Dächer = niedrigerer m²-Preis durch Skaleneffekte" },
    { title: "Dachform", text: "Komplexe Dächer (Walm, Mansard) kosten mehr als Satteldächer" },
    { title: "Material", text: "Schiefer teurer als Ton, Ton teurer als Beton" },
    { title: "Dämmung", text: "Energetische Sanierung erhöht Kosten, bringt aber Förderung" },
    { title: "Zustand Dachstuhl", text: "Holzschäden erhöhen die Kosten erheblich" },
    { title: "Gerüst", text: "Ca. 8-15€/m² Fassadenfläche zusätzlich" }
  ];

  const faqs = [
    { question: "Was kostet eine komplette Dachsanierung?", answer: "Für ein 100m² Dach rechnen Sie mit 15.000-35.000€ je nach Umfang. Nur neue Ziegel: 8.000-18.000€. Mit Dämmung und Dachstuhlarbeiten: 25.000-45.000€." },
    { question: "Lohnt sich eine Dachsanierung?", answer: "Ja! Ein neues Dach hält 40-60 Jahre, steigert den Immobilienwert um 10-15% und senkt Heizkosten um bis zu 30% bei guter Dämmung." },
    { question: "Welche Förderung gibt es für Dachsanierung?", answer: "Die KfW fördert energetische Sanierung mit bis zu 20% Zuschuss (max. 12.000€). Voraussetzung: U-Wert von 0,14 W/m²K erreichen." },
    { question: "Wie lange dauert eine Dachsanierung?", answer: "Ein Einfamilienhaus: 1-3 Wochen. Mit Dachstuhlarbeiten oder Gauben: 3-6 Wochen." },
    { question: "Kann ich während der Dachsanierung im Haus wohnen?", answer: "Ja, in der Regel schon. Wir arbeiten abschnittsweise und schützen das Haus vor Witterung." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Was kostet Dachsanierung? | 150-350€/m² München | Preise 2025"
        description="Dachsanierung Kosten München & Umgebung: ✓ Komplettsanierung 150-350€/m² ✓ Nur Neueindeckung 60-180€/m² ✓ Bis 20% KfW-Förderung ✓ Festpreisgarantie vom Meisterbetrieb!"
        canonical="/dachsanierung-kosten"
        keywords="dachsanierung kosten, dachsanierung kosten pro qm, was kostet dachsanierung, dachsanierung preis münchen, dach sanieren kosten oberbayern, dachsanierung einfamilienhaus, dachsanierung förderung bayern, dachdecker münchen preise"
        aiSummary="Dachsanierung Kosten München und Umgebung 2025: Komplettsanierung 150-350€/m², nur Eindeckung 60-180€/m². 089Dach GmbH - Ihr Dachdecker in München, Starnberg, Dachau, Freising. KfW-Förderung bis 20%. Kostenlose Beratung: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Dachsanierung Kosten", url: "/dachsanierung-kosten" }]} />
      <ServiceSchema pageName="Dachsanierung Kosten München" services={[{ name: "Dachsanierung Kostenberatung", description: "Transparente Preisberatung für Ihre Dachsanierung" }]} />
      <ProductServiceSchema name="Dachsanierung München" description="Komplette Dachsanierung mit Festpreisgarantie" priceFrom={150} priceTo={350} category="Dachsanierung" />
      <FAQPageSchema faqs={faqs} />
      
      <Navigation />
      
      <main id="main-content" role="main" tabIndex={-1}>
      <AIBeraterSection 
        pageName="Dachsanierung Kosten"
        description="Was kostet eine Dachsanierung pro qm? Unser KI-Berater nennt realistische Preise."
      />
      
      <section className="relative py-20 text-white overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-green-500/30">
              <Calculator className="w-5 h-5 text-green-400" />
              <span className="font-medium text-green-300">Transparente Preise 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"><strong>Dachsanierung Kosten</strong> München</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-7xl mx-auto">Was kostet eine <strong>Dachsanierung</strong> wirklich? Alle Preise transparent – von der einfachen <strong>Neueindeckung</strong> bis zur <strong>Komplettsanierung</strong>.</p>
            <p className="text-lg text-white/70 mb-8"><strong>150-350€/m²</strong> Komplett • Bis 20% <strong>KfW-Förderung</strong> • Festpreisgarantie</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6" data-testid="button-hero-callback"><Phone className="mr-2 h-5 w-5" />Kostenlose Beratung</Button></Link>
              <Link href="/beratung"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6" data-testid="button-hero-online">24h Online Termin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <BackButton />

      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-4">Dachsanierung Kosten im Überblick</h2>
            <p className="text-center text-slate-600 mb-12">Richtwerte für München und Umgebung – inkl. Material und Arbeit</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-4 font-semibold text-slate-800">Leistung</th>
                    <th className="text-left p-4 font-semibold text-slate-800">Preis</th>
                    <th className="text-left p-4 font-semibold text-slate-800">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {kostenTabelle.map((row, index) => (
                    <tr key={index} className="border-b border-slate-100">
                      <td className="p-4 font-medium text-slate-700">{row.leistung}</td>
                      <td className="p-4 text-green-600 font-bold">{row.preis}</td>
                      <td className="p-4 text-slate-600 text-sm">{row.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Was beeinflusst die Kosten?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {faktoren.map((f, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-semibold text-slate-800 mb-2">{f.title}</h3>
                  <p className="text-slate-600 text-sm">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Beispielrechnung: 100m² Satteldach</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white/10 rounded-xl p-6">
                <p className="text-lg mb-2">Nur neue Ziegel</p>
                <p className="text-4xl font-bold">8.000-12.000€</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <p className="text-lg mb-2">Mit Dämmung</p>
                <p className="text-4xl font-bold">18.000-28.000€</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <p className="text-lg mb-2">Komplettsanierung</p>
                <p className="text-4xl font-bold">25.000-40.000€</p>
              </div>
            </div>
            <p className="text-white/80">Abzüglich bis zu 20% KfW-Förderung bei energetischer Sanierung</p>
          </div>
        </div>
      </section>

      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Häufige Fragen zu Dachsanierung Kosten</h2>
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

      <section className="py-6 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Kostenloses Angebot für Ihre Dachsanierung</h2>
            <p className="text-xl text-slate-600 mb-8">Wir kommen vorbei, begutachten Ihr Dach und erstellen ein Festpreis-Angebot – kostenlos und unverbindlich.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8" data-testid="button-cta-callback">Kostenlose Beratung<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
              <Link href="/beratung"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online-cta">24h Online Termin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <EinzugsgebietSection />
      <LeadFunnel 
        headline="Dachsanierung Kosten in München?"
        subheadline="Wir erstellen ein individuelles Angebot."
        description="Transparente Dachsanierung Kosten vom Münchner Meisterbetrieb – Festpreise ohne versteckte Kosten."
      />
      </main>
    </div>
  );
}
