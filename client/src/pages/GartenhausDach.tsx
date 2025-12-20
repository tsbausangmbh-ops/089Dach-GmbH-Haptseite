import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, Home, Trees, Euro } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, FAQPageSchema, ProductServiceSchema } from "@/components/SEO";
import RelatedServices from "@/components/RelatedServices";
import EinzugsgebietSection from "@/components/EinzugsgebietSection";
import { Link } from "wouter";
import heroImage from '@assets/stock_images/roofer_working_on_ro_cb52da00.jpg';

export default function GartenhausDach() {
  const dachMaterialien = [
    { name: "Dachpappe", preis: "15-25€/m²", lebensdauer: "10-15 Jahre", ideal: "Kleine Häuschen, Budget" },
    { name: "Bitumenschindeln", preis: "25-40€/m²", lebensdauer: "20-30 Jahre", ideal: "Optisch ansprechend" },
    { name: "EPDM-Folie", preis: "35-50€/m²", lebensdauer: "30-40 Jahre", ideal: "Flachdach, langlebig" },
    { name: "Trapezblech", preis: "20-35€/m²", lebensdauer: "30-40 Jahre", ideal: "Robust, pflegeleicht" },
    { name: "Dachziegel", preis: "45-70€/m²", lebensdauer: "40-60 Jahre", ideal: "Passend zum Haupthaus" }
  ];

  const faqs = [
    { question: "Was kostet Gartenhaus Dach erneuern?", answer: "Für ein typisches Gartenhaus (10-15m²): Dachpappe 150-375€, Bitumenschindeln 250-600€, Blech 200-525€ inkl. Montage." },
    { question: "Welches Dachmaterial für Gartenhaus?", answer: "Dachpappe für Budget, Bitumenschindeln für Optik, EPDM für Langlebigkeit bei Flachdach, Blech für Robustheit." },
    { question: "Kann ich Gartenhaus-Dach selbst machen?", answer: "Dachpappe und Bitumenschindeln sind DIY-geeignet. Für perfekte Dichtigkeit und Garantie empfehlen wir den Fachmann." },
    { question: "Wie oft muss man Gartenhaus-Dach erneuern?", answer: "Dachpappe alle 10-15 Jahre, Bitumenschindeln 20-30 Jahre, EPDM und Blech 30-40 Jahre." },
    { question: "Reparieren Sie auch Gartenhaus-Dächer?", answer: "Ja! Kleine Reparaturen ab 80€. Oft reicht Flicken statt Kompletterneuerung." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Gartenhaus-Dach decken & reparieren München | Ab 15€/m²"
        description="Gartenhaus Dach erneuern lassen: ✓ Dachpappe ab 15€/m² ✓ Bitumenschindeln 25-40€/m² ✓ EPDM-Folie ✓ Kleine Reparaturen ab 80€. Dachdecker München & Umgebung!"
        canonical="/gartenhaus-dach"
        keywords="gartenhaus dach münchen, gartenhaus dach erneuern kosten, gartenhausdach abdichten, bitumenschindeln gartenhaus, dachpappe gartenhaus"
        aiSummary="Gartenhaus Dach München: Dachpappe 15-25€/m², Bitumenschindeln 25-40€/m², EPDM 35-50€/m². 089Dach - auch für Gartenhäuser in Germering, Gräfelfing, Unterhaching. Tel: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Gartenhaus Dach", url: "/gartenhaus-dach" }]} />
      <ServiceSchema pageName="Gartenhaus Dach München" services={[{ name: "Gartenhaus-Dacheindeckung", description: "Alle Materialien für Ihr Gartenhaus" }]} />
      <ProductServiceSchema name="Gartenhaus Dach München" description="Dacheindeckung für Gartenhäuser" priceFrom={15} priceTo={70} category="Gartenhaus" />
      <FAQPageSchema faqs={faqs} />
      
      <Navigation />
      
      <section className="relative py-20 text-white overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 via-green-900/85 to-green-800/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-green-500/30">
              <Trees className="w-5 h-5 text-green-400" />
              <span className="font-medium text-green-300">Für Ihren Garten</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"><strong>Gartenhaus Dach</strong></h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-7xl mx-auto">Neues Dach für Ihr Gartenhaus – von einfacher Dachpappe bis edlen Schindeln.</p>
            <p className="text-lg text-white/70 mb-8">Ab 15€/m² • Auch Reparatur • Meisterbetrieb</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6" data-testid="button-hero-callback"><Phone className="mr-2 h-5 w-5" />Kostenloses Angebot</Button></Link>
              <Link href="/beratung"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6" data-testid="button-hero-online">24h Online Termin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-4">Dachmaterialien für Gartenhäuser</h2>
            <p className="text-center text-slate-600 mb-12">Von günstig bis langlebig – für jeden Bedarf</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-4 font-semibold text-slate-800">Material</th>
                    <th className="text-right p-4 font-semibold text-slate-800">Preis/m²</th>
                    <th className="text-right p-4 font-semibold text-slate-800">Lebensdauer</th>
                    <th className="text-left p-4 font-semibold text-slate-800">Ideal für</th>
                  </tr>
                </thead>
                <tbody>
                  {dachMaterialien.map((m, index) => (
                    <tr key={index} className="border-b border-slate-100">
                      <td className="p-4 font-medium text-slate-700">{m.name}</td>
                      <td className="p-4 text-right text-green-600 font-bold">{m.preis}</td>
                      <td className="p-4 text-right text-slate-600">{m.lebensdauer}</td>
                      <td className="p-4 text-slate-600 text-sm">{m.ideal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Häufige Fragen zum Gartenhaus-Dach</h2>
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

      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Gartenhaus-Dach erneuern?</h2>
            <p className="text-xl text-white/90 mb-8">Wir kommen vorbei und erstellen ein kostenloses Angebot</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-white text-green-700 hover:bg-green-50 text-lg px-8" data-testid="button-cta-callback">Angebot anfordern<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
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
