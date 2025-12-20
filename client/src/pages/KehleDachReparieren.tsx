import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, Droplets, Shield } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, FAQPageSchema, ProductServiceSchema } from "@/components/SEO";
import RelatedServices from "@/components/RelatedServices";
import EinzugsgebietSection from "@/components/EinzugsgebietSection";
import { Link } from "wouter";
import heroImage from '@assets/stock_images/roofer_working_on_ro_cb52da00.jpg';

export default function KehleDachReparieren() {
  const leistungen = [
    { name: "Kehlblech erneuern", preis: "80-150€/lfm", beschreibung: "Zink oder Kupfer" },
    { name: "Kehlabdichtung", preis: "50-100€/lfm", beschreibung: "Zusätzliche Abdichtbahn" },
    { name: "Kehle reparieren", preis: "200-400€", beschreibung: "Kleine Reparatur, Teilstück" },
    { name: "Kehle komplett neu", preis: "120-200€/lfm", beschreibung: "Mit Unterkonstruktion" }
  ];

  const faqs = [
    { question: "Was kostet Dachkehle reparieren?", answer: "Kleine Reparatur 200-400€, Kehlblech erneuern 80-150€/lfm, komplette Sanierung 120-200€/lfm." },
    { question: "Warum ist die Kehle undicht?", answer: "Kehlen sammeln viel Wasser und sind stark beansprucht. Rost, Risse oder gelöste Anschlüsse sind häufige Ursachen." },
    { question: "Welches Material für die Kehle?", answer: "Zink ist Standard und hält 40+ Jahre. Kupfer noch länger und edler. Wir passen Material ans restliche Dach an." },
    { question: "Wie erkenne ich eine defekte Kehle?", answer: "Wasserflecken im Dachboden entlang der Kehle, rostiges Blech sichtbar, Wasser läuft an falscher Stelle ab." },
    { question: "Muss für die Kehle das ganze Dach auf?", answer: "Nein, meist nur die Ziegel direkt neben der Kehle. Wir arbeiten so schonend wie möglich." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Dachkehle reparieren München | 80-150€/lfm | 089Dach"
        description="Dachkehle reparieren München: ✓ Kehlblech erneuern 80-150€/lfm ✓ Abdichtung ✓ Zink & Kupfer ✓ Meisterbetrieb. Jetzt anfragen!"
        canonical="/kehle-dach-reparieren"
        keywords="dachkehle reparieren, kehle undicht, kehlblech erneuern, dachkehle abdichten, kehle dach kosten, kehlrinne reparieren, dachkehle sanieren"
        aiSummary="Dachkehle reparieren München: Kehlblech erneuern 80-150€/lfm, kleine Reparatur 200-400€. 089Dach Meisterbetrieb. Tel: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Dachkehle reparieren", url: "/kehle-dach-reparieren" }]} />
      <ServiceSchema pageName="Dachkehle reparieren" services={[{ name: "Kehlensanierung", description: "Reparatur und Erneuerung" }]} />
      <ProductServiceSchema name="Dachkehle München" description="Kehlenreparatur" priceFrom={80} priceTo={200} category="Kehle" />
      <FAQPageSchema faqs={faqs} />
      
      <Navigation />
      
      <section className="relative py-20 text-white overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-blue-500/30">
              <Droplets className="w-5 h-5 text-blue-400" />
              <span className="font-medium text-blue-300">Kritische Stelle abdichten</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"><strong>Dachkehle reparieren</strong> München</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-7xl mx-auto">Kehlen sind Schwachstellen am Dach – wir reparieren und erneuern Kehlbleche fachgerecht.</p>
            <p className="text-lg text-white/70 mb-8">80-150€/lfm • Zink & Kupfer • Meisterbetrieb</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6" data-testid="button-hero-callback"><Phone className="mr-2 h-5 w-5" />Rückruf anfordern</Button></Link>
              <Link href="/beratung"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online">24h Online Termin</Button></Link>
            </div>
          </div>
        </div>
      </section>

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
                  <p className="text-xl font-bold text-blue-600 whitespace-nowrap ml-4">{l.preis}</p>
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

      <section className="py-6 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Kehle undicht?</h2>
            <p className="text-xl text-white/90 mb-8">Wir reparieren schnell und fachgerecht</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8" data-testid="button-cta-callback">Rückruf anfordern<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
              <Link href="/beratung"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online-cta">24h Online Termin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <EinzugsgebietSection />
      <LeadFunnel />
      <RelatedServices currentPage="reparatur" />
      <Footer />
    </div>
  );
}
