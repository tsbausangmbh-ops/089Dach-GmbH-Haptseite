import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, Layers, Shield, Clock, Award } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, FAQPageSchema, ProductServiceSchema } from "@/components/SEO";
import BackButton from "@/components/BackButton";
import EinzugsgebietSection from "@/components/EinzugsgebietSection";
import { Link } from "wouter";
import heroImage from '@assets/stock_images/roofer_working_on_ro_cb52da00.jpg';

export default function FlachdachAbdichten() {
  const methoden = [
    { name: "Bitumenbahnen", preis: "40-70€/m²", lebensdauer: "20-30 Jahre", vorteile: ["Bewährt", "Günstig", "Reparierbar"] },
    { name: "EPDM-Folie", preis: "50-80€/m²", lebensdauer: "40-50 Jahre", vorteile: ["Langlebig", "Elastisch", "UV-beständig"] },
    { name: "PVC-Folie", preis: "45-75€/m²", lebensdauer: "25-35 Jahre", vorteile: ["Verschweißbar", "Leicht", "Schnell verlegt"] },
    { name: "Flüssigkunststoff", preis: "60-100€/m²", lebensdauer: "20-25 Jahre", vorteile: ["Nahtlos", "Für Detailbereiche", "Flexibel"] }
  ];

  const vorteile = [
    "Fachgerechte Verlegung vom Meisterbetrieb",
    "Alle gängigen Abdichtungssysteme",
    "Langfristige Garantie (bis 10 Jahre)",
    "Inklusive Gefälle und Entwässerung",
    "Kombination mit Dämmung möglich",
    "Vorbereitung für Dachbegrünung oder Solar"
  ];

  const faqs = [
    { question: "Was kostet Flachdach abdichten pro m²?", answer: "Je nach Material: Bitumen 40-70€/m², EPDM 50-80€/m², PVC 45-75€/m², Flüssigkunststoff 60-100€/m². Inkl. Vorarbeiten und Anschlüsse." },
    { question: "Wie lange hält eine Flachdachabdichtung?", answer: "Bitumen: 20-30 Jahre, PVC: 25-35 Jahre, EPDM: 40-50 Jahre. Mit regelmäßiger Wartung und guter Verarbeitung oft länger." },
    { question: "Kann man Flachdach selbst abdichten?", answer: "Kleine Reparaturen ja, komplette Abdichtung nicht empfohlen. Fehler führen zu teuren Wasserschäden. Außerdem: keine Gewährleistung." },
    { question: "Was ist besser: Bitumen oder EPDM?", answer: "EPDM hält länger (40+ Jahre) und ist elastischer, kostet aber mehr. Bitumen ist günstiger und leichter reparierbar. Wir beraten Sie individuell." },
    { question: "Muss das alte Material runter?", answer: "Nicht immer. Wenn der Untergrund tragfähig ist, kann man oft drüber arbeiten. Das spart Kosten. Wir prüfen das vor Ort." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Flachdach abdichten München | Bitumen, EPDM, PVC | 40-100€/m²"
        description="Flachdachabdichtung vom Fachmann: ✓ Bitumen 40-70€/m² ✓ EPDM 50-80€/m² ✓ PVC 45-75€/m² ✓ Bis 10 Jahre Garantie ✓ Alle Systeme. Dachdecker München & Oberbayern!"
        canonical="/flachdach-abdichten"
        keywords="flachdach abdichten münchen, flachdachabdichtung kosten bayern, epdm flachdach preis, bitumenbahn flachdach, flachdach sanieren kosten"
        aiSummary="Flachdach abdichten München und Umgebung: Bitumen 40-70€/m², EPDM 50-80€/m², PVC 45-75€/m². 089Dach - Flachdach-Spezialist für München, Unterföhring, Ismaning. Tel: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Flachdach abdichten", url: "/flachdach-abdichten" }]} />
      <ServiceSchema pageName="Flachdach abdichten München" services={[{ name: "Flachdachabdichtung", description: "Professionelle Abdichtung mit allen Systemen" }]} />
      <ProductServiceSchema name="Flachdach abdichten München" description="Professionelle Flachdachabdichtung mit bis zu 10 Jahren Garantie" priceFrom={40} priceTo={100} category="Flachdachabdichtung" />
      <FAQPageSchema faqs={faqs} />
      
      <Navigation />
      
      <section className="relative py-20 text-white overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-cyan-500/30">
              <Layers className="w-5 h-5 text-cyan-400" />
              <span className="font-medium text-cyan-300">Alle Abdichtungssysteme</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"><strong>Flachdach abdichten</strong></h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-7xl mx-auto">Bitumen, EPDM, PVC oder Flüssigkunststoff – wir finden die beste Lösung für Ihr Flachdach.</p>
            <p className="text-lg text-white/70 mb-8">Ab 40€/m² • Bis 10 Jahre Garantie • Meisterbetrieb</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white text-lg px-8 py-6" data-testid="button-hero-callback"><Phone className="mr-2 h-5 w-5" />Kostenlose Beratung</Button></Link>
              <Link href="/beratung"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6" data-testid="button-hero-online">24h Online Termin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <BackButton />

      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-4">Abdichtungssysteme im Vergleich</h2>
            <p className="text-center text-slate-600 mb-12">Wir beraten Sie zur besten Lösung für Ihr Dach</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {methoden.map((m, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{m.name}</h3>
                  <p className="text-2xl font-bold text-cyan-600 mb-1">{m.preis}</p>
                  <p className="text-sm text-slate-500 mb-4">{m.lebensdauer} Lebensdauer</p>
                  <div className="flex flex-wrap gap-2">
                    {m.vorteile.map((v, i) => (
                      <span key={i} className="px-2 py-1 bg-white rounded text-xs text-slate-600">{v}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Ihre Vorteile bei 089Dach</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {vorteile.map((v, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
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
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Häufige Fragen zur Flachdachabdichtung</h2>
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

      <section className="py-6 bg-cyan-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Flachdach abdichten lassen?</h2>
            <p className="text-xl text-white/90 mb-8">Kostenlose Vor-Ort-Beratung mit Festpreis-Angebot</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-white text-cyan-700 hover:bg-cyan-50 text-lg px-8" data-testid="button-cta-callback">Beratung anfordern<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
              <Link href="/beratung"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online-cta">24h Online Termin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <EinzugsgebietSection />
      <LeadFunnel 
        headline="Flachdach abdichten in München?"
        subheadline="Wir dichten Ihr Flachdach dauerhaft ab."
        description="Professionelle Flachdachabdichtung mit Bitumen, EPDM oder PVC – Münchner Meisterbetrieb."
      />
    </div>
  );
}
