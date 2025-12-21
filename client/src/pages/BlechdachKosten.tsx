import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, Layers, Shield, Clock } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, FAQPageSchema, ProductServiceSchema } from "@/components/SEO";
import BackButton from "@/components/BackButton";
import EinzugsgebietSection from "@/components/EinzugsgebietSection";
import { Link } from "wouter";
import heroImage from '@assets/stock_images/roofer_working_on_ro_cb52da00.jpg';

export default function BlechdachKosten() {
  const blechTypen = [
    { name: "Trapezblech", preis: "25-45€/m²", vorteile: "Günstig, schnell verlegt, für Hallen" },
    { name: "Stehfalzblech", preis: "50-90€/m²", vorteile: "Edel, langlebig, für Wohnhäuser" },
    { name: "Wellblech", preis: "20-35€/m²", vorteile: "Einfach, günstig, Nebengebäude" },
    { name: "Dachpfannenprofil", preis: "35-60€/m²", vorteile: "Optik wie Ziegel, leichter" },
    { name: "Kupferblech", preis: "80-150€/m²", vorteile: "Premium, patiniert, 80+ Jahre" },
    { name: "Zinkblech", preis: "60-100€/m²", vorteile: "Klassisch, langlebig, edel" }
  ];

  const vorteile = [
    "Sehr leicht – oft ohne Dachstuhlverstärkung",
    "Lange Lebensdauer (40-80 Jahre)",
    "Wartungsarm und rostfrei (beschichtet)",
    "Schnelle Montage – geringere Lohnkosten",
    "Ideal für flache Dächer",
    "Moderne, zeitlose Optik"
  ];

  const faqs = [
    { question: "Was kostet ein Blechdach pro m²?", answer: "Wellblech 20-35€/m², Trapezblech 25-45€/m², Stehfalz 50-90€/m², Kupfer 80-150€/m². Preise inkl. Material und Montage." },
    { question: "Wie lange hält ein Blechdach?", answer: "Beschichtetes Stahlblech 40-50 Jahre, Aluminium 50-60 Jahre, Zink und Kupfer 60-80+ Jahre." },
    { question: "Ist ein Blechdach laut bei Regen?", answer: "Mit guter Dämmung kaum lauter als Ziegel. Wir bauen schalldämmende Unterlagen ein." },
    { question: "Für welche Gebäude eignet sich Blechdach?", answer: "Für alle! Carports, Garagen, Nebengebäude (Trapez/Wellblech), Wohnhäuser (Stehfalz), moderne Architektur." },
    { question: "Kann man Blechdach nachträglich dämmen?", answer: "Ja, durch Aufsparrendämmung oder von innen. Wir beraten Sie zur besten Lösung." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Metalldach & Blechdach Kosten München | Stehfalz, Trapez ab 20€/m²"
        description="Blechdach eindecken lassen: ✓ Trapezblech 25-45€/m² ✓ Stehfalz 50-90€/m² ✓ Kupfer 80-150€/m² ✓ 40-80 Jahre Lebensdauer. Dachdecker München & Oberbayern!"
        canonical="/blechdach-kosten"
        keywords="blechdach kosten münchen, metalldach preis bayern, stehfalzdach kosten, trapezblech dach eindecken, kupferdach preis"
        aiSummary="Blechdach Kosten München und Umgebung: Trapezblech 25-45€/m², Stehfalz 50-90€/m², Kupfer 80-150€/m². 089Dach - Blechdach-Spezialist für Pasing, Bogenhausen, Grünwald. Tel: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Blechdach Kosten", url: "/blechdach-kosten" }]} />
      <ServiceSchema pageName="Blechdach Kosten München" services={[{ name: "Blechdach", description: "Eindeckung mit allen Blecharten" }]} />
      <ProductServiceSchema name="Blechdach München" description="Professionelle Blechdach-Eindeckung" priceFrom={20} priceTo={150} category="Blechdach" />
      <FAQPageSchema faqs={faqs} />
      
      <Navigation />
      
      <section className="relative py-20 text-white overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-zinc-500/30 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-zinc-400/50">
              <Layers className="w-5 h-5 text-zinc-300" />
              <span className="font-medium text-zinc-200">Modern & langlebig</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"><strong>Blechdach Kosten</strong></h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-7xl mx-auto">Trapezblech, Stehfalz, Kupfer – alle Blechdach-Varianten und ihre Kosten im Überblick.</p>
            <p className="text-lg text-white/70 mb-8">Ab 20€/m² • Lange Lebensdauer • Meisterbetrieb</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-zinc-600 hover:bg-zinc-700 text-white text-lg px-8 py-6" data-testid="button-hero-callback"><Phone className="mr-2 h-5 w-5" />Kostenlose Beratung</Button></Link>
              <Link href="/beratung"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6" data-testid="button-hero-online">24h Online Termin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <BackButton />

      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-4">Blechdach Preise nach Material</h2>
            <p className="text-center text-slate-600 mb-12">Alle Preise pro m² inkl. Material und Montage</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blechTypen.map((b, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{b.name}</h3>
                  <p className="text-2xl font-bold text-zinc-600 mb-3">{b.preis}</p>
                  <p className="text-slate-600 text-sm">{b.vorteile}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Vorteile eines Blechdachs</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {vorteile.map((v, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-zinc-500 flex-shrink-0" />
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
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Häufige Fragen zu Blechdächern</h2>
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

      <section className="py-6 bg-zinc-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Blechdach planen?</h2>
            <p className="text-xl text-white/90 mb-8">Kostenlose Beratung zu Material, Optik und Kosten</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-white text-zinc-700 hover:bg-zinc-50 text-lg px-8" data-testid="button-cta-callback">Beratung anfordern<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
              <Link href="/beratung"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online-cta">24h Online Termin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <EinzugsgebietSection />
      <LeadFunnel />
    </div>
  );
}
