import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, Droplets, Shield } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, FAQPageSchema, ProductServiceSchema } from "@/components/SEO";
import BackButton from "@/components/BackButton";
import EinzugsgebietSection from "@/components/EinzugsgebietSection";
import { Link } from "wouter";
import heroImage from '@assets/stock_images/roofer_working_on_ro_cb52da00.jpg';

export default function TraufblechMontieren() {
  const leistungen = [
    { name: "Traufblech montieren", preis: "20-35€/lfm", beschreibung: "Zink oder Alu, inkl. Montage" },
    { name: "Traufblech erneuern", preis: "25-40€/lfm", beschreibung: "Altes entfernen + Neu" },
    { name: "Tropfkante", preis: "15-25€/lfm", beschreibung: "Einfache Abschlusskante" },
    { name: "Sonderanfertigung", preis: "30-50€/lfm", beschreibung: "Nach Maß gefertigt" }
  ];

  const faqs = [
    { question: "Was kostet Traufblech montieren?", answer: "Standard-Traufblech 20-35€/lfm inkl. Montage. Erneuerung (alt raus, neu rein) 25-40€/lfm." },
    { question: "Warum braucht man ein Traufblech?", answer: "Das Traufblech leitet Wasser von der Dachkante in die Rinne und schützt die Holzkonstruktion vor Feuchtigkeit." },
    { question: "Welches Material für Traufblech?", answer: "Standard ist Titanzink, alternativ Aluminium (beschichtet in Fassadenfarbe) oder Kupfer (hochwertig)." },
    { question: "Kann ich Traufblech selbst montieren?", answer: "Möglich, aber die richtige Neigung und Überlappung sind wichtig. Falsche Montage führt zu Wasserschäden." },
    { question: "Wie erkenne ich defektes Traufblech?", answer: "Rost, Verformung, Wasser tropft hinter die Rinne, Wasserflecken an der Traufe." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Traufblech montieren München | 20-35€/lfm | 089Dach"
        description="Traufblech montieren München: ✓ Zink 20-35€/lfm ✓ Tropfkante ✓ Sonderanfertigung ✓ Meisterbetrieb. Jetzt anfragen!"
        canonical="/traufblech-montieren"
        keywords="traufblech montieren, traufblech erneuern, tropfkante dach, traufblech kosten, traufabschluss, dachtraufe blech, traufblech zink"
        aiSummary="Traufblech montieren München: Zink/Alu 20-35€/lfm, Erneuerung 25-40€/lfm. 089Dach Meisterbetrieb. Tel: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Traufblech montieren", url: "/traufblech-montieren" }]} />
      <ServiceSchema pageName="Traufblech montieren" services={[{ name: "Traufblechmontage", description: "Montage und Erneuerung" }]} />
      <ProductServiceSchema name="Traufblech München" description="Traufblech-Montage" priceFrom={20} priceTo={50} category="Traufblech" />
      <FAQPageSchema faqs={faqs} />
      
      <Navigation />
      
      <section className="relative py-20 text-white overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-cyan-500/30">
              <Droplets className="w-5 h-5 text-cyan-400" />
              <span className="font-medium text-cyan-300">Wasser sicher ableiten</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"><strong>Traufblech montieren</strong> München</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-7xl mx-auto">Das Traufblech schützt Ihre Dachkante – wir montieren und erneuern fachgerecht.</p>
            <p className="text-lg text-white/70 mb-8">Ab 20€/lfm • Zink & Alu • Meisterbetrieb</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white text-lg px-8 py-6" data-testid="button-hero-callback"><Phone className="mr-2 h-5 w-5" />Kostenloses Angebot</Button></Link>
              <Link href="/beratung"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online">24h Online Termin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <BackButton />

      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Leistungen & Preise</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {leistungen.map((l, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6 flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">{l.name}</h3>
                    <p className="text-slate-600 text-sm">{l.beschreibung}</p>
                  </div>
                  <p className="text-xl font-bold text-cyan-600 whitespace-nowrap ml-4">{l.preis}</p>
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

      <section className="py-6 bg-cyan-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Traufblech montieren lassen?</h2>
            <p className="text-xl text-white/90 mb-8">Kostenlose Beratung und Angebot</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-white text-cyan-700 hover:bg-cyan-50 text-lg px-8" data-testid="button-cta-callback">Angebot anfordern<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
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
