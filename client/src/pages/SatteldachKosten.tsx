import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, Home, Shield } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, FAQPageSchema, ProductServiceSchema } from "@/components/SEO";
import RelatedServices from "@/components/RelatedServices";
import BackButton from "@/components/BackButton";
import EinzugsgebietSection from "@/components/EinzugsgebietSection";
import { Link } from "wouter";
import heroImage from '@assets/stock_images/roofer_working_on_ro_cb52da00.jpg';

export default function SatteldachKosten() {
  const materialien = [
    { name: "Betonziegel", preis: "60-90€/m²", beschreibung: "Günstig, langlebig, viele Farben" },
    { name: "Tonziegel", preis: "80-120€/m²", beschreibung: "Klassisch, natürlich, hochwertig" },
    { name: "Schiefer", preis: "120-200€/m²", beschreibung: "Edel, langlebig, traditionell" },
    { name: "Metalldach", preis: "80-150€/m²", beschreibung: "Modern, leicht, wartungsarm" }
  ];

  const vorteile = [
    "Einfachste und günstigste Dachform",
    "Gute Regenwasserableitung",
    "Viel Stauraum/Ausbaumöglichkeit",
    "Einfache Montage von Solar/Dachfenster",
    "Bewährte Konstruktion seit Jahrhunderten"
  ];

  const faqs = [
    { question: "Was kostet Satteldach neu eindecken?", answer: "Nur Eindeckung: Beton 60-90€/m², Ton 80-120€/m², Schiefer 120-200€/m². Mit Dämmung und Lattung: 150-300€/m²." },
    { question: "Wie lange hält ein Satteldach?", answer: "Bei guter Pflege 50-100 Jahre. Betonziegel: 50-60 Jahre, Tonziegel: 70-100 Jahre, Schiefer: 100+ Jahre." },
    { question: "Was ist günstiger: Sattel- oder Flachdach?", answer: "Bei Neubau: Flachdach günstiger. Bei Sanierung: Satteldach oft günstiger und langlebiger." },
    { question: "Welche Neigung braucht ein Satteldach?", answer: "Mindestens 22° für Standardziegel, empfohlen 35-45° für gute Entwässerung und optische Wirkung." },
    { question: "Kann man Satteldach ohne Gerüst sanieren?", answer: "Bei niedrigen Häusern mit Leiter möglich. Ab ca. 6m Traufhöhe Gerüstpflicht." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Satteldach neu eindecken München | 60-200€/m² | Alle Materialien"
        description="Satteldach Kosten München & Bayern: ✓ Betonziegel 60-90€/m² ✓ Tonziegel 80-120€/m² ✓ Schiefer 120-200€/m² ✓ Alle Farben verfügbar. Der Klassiker vom Meisterbetrieb!"
        canonical="/satteldach-kosten"
        keywords="satteldach kosten münchen, satteldach neu eindecken preis, satteldach sanieren bayern, dachziegel satteldach, dacheindeckung kosten"
        aiSummary="Satteldach Kosten München: Betonziegel 60-90€/m², Tonziegel 80-120€/m², Schiefer 120-200€/m². 089Dach - Satteldach-Experte für München, Pasing, Schwabing. Tel: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Satteldach Kosten", url: "/satteldach-kosten" }]} />
      <ServiceSchema pageName="Satteldach Kosten" services={[{ name: "Satteldach-Sanierung", description: "Alle Materialien" }]} />
      <ProductServiceSchema name="Satteldach München" description="Satteldach-Sanierung" priceFrom={60} priceTo={200} category="Satteldach" />
      <FAQPageSchema faqs={faqs} />
      
      <Navigation />
      
      <section className="relative py-20 text-white overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-emerald-500/30">
              <Home className="w-5 h-5 text-emerald-400" />
              <span className="font-medium text-emerald-300">Der Klassiker</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"><strong>Satteldach Kosten</strong></h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-7xl mx-auto">Das beliebteste Dach Deutschlands – wir sanieren und decken Ihr Satteldach professionell.</p>
            <p className="text-lg text-white/70 mb-8">Ab 60€/m² • Alle Materialien • Meisterbetrieb</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-8 py-6" data-testid="button-hero-callback"><Phone className="mr-2 h-5 w-5" />Kostenlose Beratung</Button></Link>
              <Link href="/beratung"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6" data-testid="button-hero-online">24h Online Termin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <BackButton />

      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Materialien & Preise</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {materialien.map((m, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6 flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">{m.name}</h3>
                    <p className="text-slate-600 text-sm">{m.beschreibung}</p>
                  </div>
                  <p className="text-xl font-bold text-emerald-600 whitespace-nowrap ml-4">{m.preis}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Vorteile des Satteldachs</h2>
            <div className="space-y-4">
              {vorteile.map((v, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
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

      <section className="py-6 bg-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Satteldach sanieren lassen?</h2>
            <p className="text-xl text-white/90 mb-8">Kostenlose Beratung vom Meisterbetrieb</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 text-lg px-8" data-testid="button-cta-callback">Beratung anfordern<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
              <Link href="/beratung"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online-cta">24h Online Termin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <EinzugsgebietSection />
      <LeadFunnel />
      <RelatedServices currentPage="eindeckung" />
      <Footer />
    </div>
  );
}
