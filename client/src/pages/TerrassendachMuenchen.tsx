import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, Sun, Shield } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, FAQPageSchema, ProductServiceSchema } from "@/components/SEO";
import BackButton from "@/components/BackButton";
import EinzugsgebietSection from "@/components/EinzugsgebietSection";
import { Link } from "wouter";
import heroImage from '@assets/stock_images/roofer_working_on_ro_cb52da00.jpg';

export default function TerrassendachMuenchen() {
  const dachTypen = [
    { name: "Glasdach", preis: "300-500€/m²", vorteile: "Maximales Licht, hochwertig" },
    { name: "Polycarbonat", preis: "150-250€/m²", vorteile: "Leicht, bruchsicher, günstig" },
    { name: "Alu-Lamellen", preis: "400-700€/m²", vorteile: "Variabel, wetterfest, modern" },
    { name: "Textil/Markise", preis: "100-200€/m²", vorteile: "Flexibel, einfahrbar" }
  ];

  const faqs = [
    { question: "Was kostet eine Terrassenüberdachung?", answer: "Je nach Material: Polycarbonat 150-250€/m², Glas 300-500€/m², Lamellendach 400-700€/m². Für 15m² Terrasse: 2.250-10.500€." },
    { question: "Braucht man Baugenehmigung für Terrassendach?", answer: "In Bayern oft ab einer bestimmten Größe (meist >30m²) oder wenn ans Haus angebaut. Wir klären das für Sie." },
    { question: "Glas oder Polycarbonat?", answer: "Glas ist edler und kratzfester, Polycarbonat günstiger und bruchsicher. Für Wohnhäuser empfehlen wir Glas." },
    { question: "Wie lange dauert der Aufbau?", answer: "Ein Standard-Terrassendach ist in 1-2 Tagen montiert. Komplexere Konstruktionen 3-5 Tage." },
    { question: "Ist ein Terrassendach winterfest?", answer: "Ja! Unsere Konstruktionen tragen Schneelasten nach DIN. Wir berechnen die Statik für Münchner Winter." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Terrassenüberdachung München | Glasdach, Lamellen ab 150€/m²"
        description="Terrasse überdachen lassen: ✓ Polycarbonat ab 150€/m² ✓ Glasdach 300-500€/m² ✓ Alu-Lamellen 400-700€/m² ✓ Winterfest nach DIN. Planung & Montage München!"
        canonical="/terrassendach-muenchen"
        keywords="terrassendach münchen, terrassenüberdachung kosten, glasdach terrasse preis, lamellendach terrasse, alu terrassendach bayern"
        aiSummary="Terrassendach München und Umgebung: Polycarbonat 150-250€/m², Glas 300-500€/m², Lamellen 400-700€/m². 089Dach - Ihr Partner für Solln, Grünwald, Pullach. Tel: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Terrassendach", url: "/terrassendach-muenchen" }]} />
      <ServiceSchema pageName="Terrassendach München" services={[{ name: "Terrassenüberdachung", description: "Glas, Alu, Polycarbonat" }]} />
      <ProductServiceSchema name="Terrassendach München" description="Professionelle Terrassenüberdachung" priceFrom={150} priceTo={700} category="Terrassendach" />
      <FAQPageSchema faqs={faqs} />
      
      <Navigation />
      
      <section className="relative py-20 text-white overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-orange-500/30">
              <Sun className="w-5 h-5 text-orange-400" />
              <span className="font-medium text-orange-300">Ganzjährig draußen genießen</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"><strong>Terrassendach</strong></h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-7xl mx-auto">Glasdach, Polycarbonat oder Lamellen – Ihre Terrasse, perfekt überdacht.</p>
            <p className="text-lg text-white/70 mb-8">Ab 150€/m² • Mit Statik • Meisterbetrieb</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-6" data-testid="button-hero-callback"><Phone className="mr-2 h-5 w-5" />Kostenlose Beratung</Button></Link>
              <Link href="/beratung"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6" data-testid="button-hero-online">24h Online Termin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <BackButton />

      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Terrassendach-Typen & Preise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dachTypen.map((d, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6 text-center">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{d.name}</h3>
                  <p className="text-2xl font-bold text-orange-600 mb-3">{d.preis}</p>
                  <p className="text-slate-600 text-sm">{d.vorteile}</p>
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

      <section className="py-6 bg-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Terrassendach planen?</h2>
            <p className="text-xl text-white/90 mb-8">Kostenlose Beratung vor Ort mit 3D-Planung</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-white text-orange-700 hover:bg-orange-50 text-lg px-8" data-testid="button-cta-callback">Beratung anfordern<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
              <Link href="/beratung"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online-cta">24h Online Termin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <EinzugsgebietSection />
      <LeadFunnel 
        headline="Terrassendach für München?"
        subheadline="Wir bauen Ihr Terrassendach."
        description="Ganzjährig geschützt – hochwertige Terrassendächer vom Fachmann."
      />
    </div>
  );
}
