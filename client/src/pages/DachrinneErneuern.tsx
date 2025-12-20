import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, Droplets, Shield, Euro } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, FAQPageSchema, ProductServiceSchema } from "@/components/SEO";
import RelatedServices from "@/components/RelatedServices";
import EinzugsgebietSection from "@/components/EinzugsgebietSection";
import { Link } from "wouter";
import heroImage from '@assets/stock_images/roofer_working_on_ro_cb52da00.jpg';

export default function DachrinneErneuern() {
  const materialien = [
    { name: "Zink (Titanzink)", preis: "35-55€/lfm", lebensdauer: "40-50 Jahre", vorteile: "Klassiker, patiniert schön, robust" },
    { name: "Kupfer", preis: "60-90€/lfm", lebensdauer: "50-80 Jahre", vorteile: "Premium-Optik, extrem langlebig" },
    { name: "Kunststoff (PVC)", preis: "20-35€/lfm", lebensdauer: "15-25 Jahre", vorteile: "Günstig, einfache Montage" },
    { name: "Aluminium", preis: "30-50€/lfm", lebensdauer: "30-40 Jahre", vorteile: "Leicht, rostfrei, viele Farben" },
    { name: "Edelstahl", preis: "70-100€/lfm", lebensdauer: "50+ Jahre", vorteile: "Höchste Qualität, wartungsfrei" }
  ];

  const leistungen = [
    "Demontage und Entsorgung alter Rinnen",
    "Prüfung der Rinnenhalter und Holz",
    "Neue Rinnenhalter falls nötig",
    "Montage neuer Dachrinne",
    "Anschluss an Fallrohre",
    "Dichtigkeitsprüfung"
  ];

  const faqs = [
    { question: "Was kostet Dachrinne erneuern pro Meter?", answer: "Kunststoff 20-35€/lfm, Zink 35-55€/lfm, Alu 30-50€/lfm, Kupfer 60-90€/lfm. Preise inkl. Material und Montage, ohne Gerüst." },
    { question: "Wie lange hält eine Dachrinne?", answer: "Kunststoff 15-25 Jahre, Zink 40-50 Jahre, Kupfer 50-80 Jahre. Mit Reinigung und Wartung oft deutlich länger." },
    { question: "Kann man Dachrinne selbst erneuern?", answer: "Bei niedrigen Häusern und Kunststoffrinnen möglich. Bei Metallinnen und größeren Höhen empfehlen wir den Fachmann – Sicherheit und Garantie." },
    { question: "Wann sollte die Dachrinne erneuert werden?", answer: "Bei Durchrostung, starken Verformungen, undichten Verbindungen oder wenn Reparaturen nicht mehr wirtschaftlich sind." },
    { question: "Brauche ich ein Gerüst für die Dachrinne?", answer: "Ab ca. 4m Höhe ja. Kosten ca. 8-15€/m² Fassadenfläche. Bei niedrigeren Höhen arbeiten wir von der Leiter." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Regenrinne & Dachrinne erneuern München | Zink, Kupfer, Alu"
        description="Dachrinne austauschen lassen: ✓ Kunststoff ab 20€/lfm ✓ Zink 35-55€/lfm ✓ Kupfer 60-90€/lfm ✓ Inkl. Fallrohr & Montage. Dachdecker München & Umgebung!"
        canonical="/dachrinne-erneuern"
        keywords="dachrinne erneuern münchen, regenrinne austauschen kosten, zinkrinne preis, kupfer dachrinne, dachrinne montieren lassen bayern"
        aiSummary="Dachrinne erneuern München und Umgebung: Kunststoff 20-35€/lfm, Zink 35-55€/lfm, Kupfer 60-90€/lfm. 089Dach - Ihr Spezialist für Starnberg, Dachau, Freising. Tel: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Dachrinne erneuern", url: "/dachrinne-erneuern" }]} />
      <ServiceSchema pageName="Dachrinne erneuern München" services={[{ name: "Dachrinnenerneuerung", description: "Austausch mit allen Materialien" }]} />
      <ProductServiceSchema name="Dachrinne erneuern München" description="Professioneller Austausch der Dachrinne" priceFrom={20} priceTo={100} category="Dachrinne" />
      <FAQPageSchema faqs={faqs} />
      
      <Navigation />
      
      <section className="relative py-20 text-white overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-blue-500/30">
              <Droplets className="w-5 h-5 text-blue-400" />
              <span className="font-medium text-blue-300">Regenwasser sicher ableiten</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"><strong>Dachrinne erneuern</strong></h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-6xl mx-auto">Zink, Kupfer, Alu oder Kunststoff – wir erneuern Ihre Dachrinne fachgerecht und schnell.</p>
            <p className="text-lg text-white/70 mb-8">Ab 20€/lfm • Inkl. Montage • Meisterbetrieb</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6" data-testid="button-hero-callback"><Phone className="mr-2 h-5 w-5" />Kostenloses Angebot</Button></Link>
              <Link href="/beratung"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6" data-testid="button-hero-online">24h Online Termin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-4">Materialien & Preise</h2>
            <p className="text-center text-slate-600 mb-12">Alle Preise pro laufendem Meter inkl. Montage</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-4 font-semibold text-slate-800">Material</th>
                    <th className="text-right p-4 font-semibold text-slate-800">Preis/lfm</th>
                    <th className="text-right p-4 font-semibold text-slate-800">Lebensdauer</th>
                    <th className="text-left p-4 font-semibold text-slate-800">Vorteile</th>
                  </tr>
                </thead>
                <tbody>
                  {materialien.map((m, index) => (
                    <tr key={index} className="border-b border-slate-100">
                      <td className="p-4 font-medium text-slate-700">{m.name}</td>
                      <td className="p-4 text-right text-blue-600 font-bold">{m.preis}</td>
                      <td className="p-4 text-right text-slate-600">{m.lebensdauer}</td>
                      <td className="p-4 text-slate-600 text-sm">{m.vorteile}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Was ist im Preis enthalten?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {leistungen.map((l, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="text-slate-700">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Häufige Fragen zur Dachrinnenerneuerung</h2>
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
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Dachrinne erneuern lassen?</h2>
            <p className="text-xl text-white/90 mb-8">Kostenlose Beratung und Festpreis-Angebot</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8" data-testid="button-cta-callback">Angebot anfordern<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
              <Link href="/beratung"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online-cta">24h Online Termin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <EinzugsgebietSection />
      <LeadFunnel />
      <RelatedServices currentPage="dachrinne" />
      <Footer />
    </div>
  );
}
