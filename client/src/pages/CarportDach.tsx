import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, Car, Shield, Euro } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, FAQPageSchema, ProductServiceSchema } from "@/components/SEO";
import RelatedServices from "@/components/RelatedServices";
import EinzugsgebietSection from "@/components/EinzugsgebietSection";
import { Link } from "wouter";
import heroImage from '@assets/stock_images/roofer_working_on_ro_cb52da00.jpg';

export default function CarportDach() {
  const dachTypen = [
    { name: "Trapezblech", preis: "25-40€/m²", vorteile: "Günstig, robust, schnell verlegt" },
    { name: "Wellblech", preis: "20-30€/m²", vorteile: "Preiswert, einfache Montage" },
    { name: "Stegplatten (Polycarbonat)", preis: "30-50€/m²", vorteile: "Lichtdurchlässig, leicht" },
    { name: "EPDM-Folie", preis: "40-60€/m²", vorteile: "Für Flachdach, langlebig" },
    { name: "Bitumenschindeln", preis: "35-50€/m²", vorteile: "Optisch ansprechend, leise" },
    { name: "Dachziegel", preis: "50-80€/m²", vorteile: "Passend zum Haus, hochwertig" }
  ];

  const leistungen = [
    "Beratung zur optimalen Dachlösung",
    "Demontage altes Dach falls nötig",
    "Unterkonstruktion prüfen/erneuern",
    "Fachgerechte Dacheindeckung",
    "Dachrinne und Fallrohr",
    "Endreinigung"
  ];

  const faqs = [
    { question: "Was kostet ein Carport-Dach?", answer: "Je nach Material und Größe: Wellblech ab 400€, Trapezblech 500-800€, Stegplatten 600-1.000€ für einen Standard-Carport (15-20m²)." },
    { question: "Welches Material ist am besten für Carport?", answer: "Trapezblech ist robust und günstig. Stegplatten bringen Licht. Für optische Anpassung ans Haus: Bitumenschindeln oder Ziegel." },
    { question: "Kann ich Carport-Dach selbst machen?", answer: "Bei einfachen Materialien (Wellblech, Stegplatten) und niedrigem Carport möglich. Für Langlebigkeit empfehlen wir Fachmann." },
    { question: "Braucht ein Carport eine Baugenehmigung?", answer: "In Bayern meist ab 50m³ umbauter Raum. Wir beraten Sie zu den Vorschriften in Ihrer Gemeinde." },
    { question: "Wie lange dauert die Dachsanierung am Carport?", answer: "Ein Standard-Carport ist in 1 Tag fertig. Mit Unterkonstruktion 1-2 Tage." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Carport Dach erneuern München | Trapezblech, Stegplatten ab 400€"
        description="Carport-Überdachung vom Profi: ✓ Trapezblech ab 25€/m² ✓ Stegplatten 30-50€/m² ✓ Bitumenschindeln ✓ Schnelle Montage in 1 Tag. Dachdecker München & Umgebung!"
        canonical="/carport-dach"
        keywords="carport dach münchen, carport eindecken kosten, carport überdachung preis, trapezblech carport, stegplatten carport bayern"
        aiSummary="Carport Dach München: Trapezblech 25-40€/m², Stegplatten 30-50€/m². 089Dach - Carport-Spezialist für München, Gräfelfing, Germering, Fürstenfeldbruck. Tel: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Carport Dach", url: "/carport-dach" }]} />
      <ServiceSchema pageName="Carport Dach München" services={[{ name: "Carport-Dacheindeckung", description: "Alle Materialien für Ihr Carport" }]} />
      <ProductServiceSchema name="Carport Dach München" description="Professionelle Carport-Überdachung" priceFrom={20} priceTo={80} category="Carport" />
      <FAQPageSchema faqs={faqs} />
      
      <Navigation />
      
      <section className="relative py-20 text-white overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-indigo-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-indigo-500/30">
              <Car className="w-5 h-5 text-indigo-400" />
              <span className="font-medium text-indigo-300">Schutz für Ihr Fahrzeug</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Carport Dach München</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto">Neues Dach für Ihren Carport – von Trapezblech bis Stegplatten.</p>
            <p className="text-lg text-white/70 mb-8">Ab 20€/m² • Schnelle Montage • Meisterbetrieb</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg px-8 py-6" data-testid="button-hero-callback"><Phone className="mr-2 h-5 w-5" />Kostenloses Angebot</Button></Link>
              <a href="tel:+498912621964"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6" data-testid="button-hero-call">089 12621964</Button></a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-4">Carport-Dachmaterialien & Preise</h2>
            <p className="text-center text-slate-600 mb-12">Alle Optionen für Ihr Carport</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dachTypen.map((d, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{d.name}</h3>
                  <p className="text-2xl font-bold text-indigo-600 mb-3">{d.preis}</p>
                  <p className="text-slate-600 text-sm">{d.vorteile}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Unser Service für Ihr Carport</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {leistungen.map((l, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                  <span className="text-slate-700">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Häufige Fragen zum Carport-Dach</h2>
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

      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Carport-Dach erneuern?</h2>
            <p className="text-xl text-white/90 mb-8">Kostenlose Beratung und Festpreis-Angebot</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-white text-indigo-700 hover:bg-indigo-50 text-lg px-8" data-testid="button-cta-callback">Angebot anfordern<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
              <a href="tel:+498912621964"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-cta-call"><Phone className="mr-2 h-5 w-5" />089 12621964</Button></a>
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
