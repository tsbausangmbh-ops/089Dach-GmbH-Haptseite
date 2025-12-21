import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIBeraterSection from "@/components/AIBeraterSection";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, Euro, Clock, Shield, Award } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, FAQPageSchema, ProductServiceSchema } from "@/components/SEO";
import BackButton from "@/components/BackButton";
import EinzugsgebietSection from "@/components/EinzugsgebietSection";
import { Link } from "wouter";
import heroImage from '@assets/stock_images/roofer_working_on_ro_cb52da00.jpg';

export default function DachdeckerPreise() {
  const preisliste = [
    { leistung: "Dachziegel austauschen", preis: "ab 80€", einheit: "pauschal" },
    { leistung: "Dachreparatur klein", preis: "ab 150€", einheit: "pauschal" },
    { leistung: "Sturmschaden-Notsicherung", preis: "ab 200€", einheit: "pauschal" },
    { leistung: "Dachrinne reinigen", preis: "ab 8€", einheit: "pro lfm" },
    { leistung: "Dachrinne erneuern", preis: "30-80€", einheit: "pro lfm" },
    { leistung: "Dachinspektion", preis: "149€", einheit: "Festpreis" },
    { leistung: "Flachdach abdichten", preis: "40-80€", einheit: "pro m²" },
    { leistung: "Dach neu eindecken", preis: "60-180€", einheit: "pro m²" },
    { leistung: "Dachsanierung komplett", preis: "150-350€", einheit: "pro m²" },
    { leistung: "Dachdämmung", preis: "40-150€", einheit: "pro m²" }
  ];

  const faqs = [
    { question: "Was kostet ein Dachdecker pro Stunde?", answer: "Der Stundensatz liegt bei 55-75€ netto in München. Wir arbeiten jedoch bevorzugt mit Festpreisen, damit Sie vorab genau wissen, was die Arbeit kostet." },
    { question: "Wie teuer ist ein Kostenvoranschlag?", answer: "Bei uns ist die Erstbesichtigung und der Kostenvoranschlag kostenlos. Erst wenn Sie den Auftrag erteilen, fallen Kosten an." },
    { question: "Sind die Preise verhandelbar?", answer: "Unsere Preise sind fair kalkuliert. Bei größeren Projekten können wir oft einen Mengenrabatt anbieten." },
    { question: "Was ist im Preis enthalten?", answer: "Unsere Preise sind Komplettpreise inkl. Material, Arbeit und Anfahrt im Raum München. Gerüst wird separat ausgewiesen." },
    { question: "Gibt es versteckte Kosten?", answer: "Nein! Wir arbeiten mit Festpreisen. Unvorhergesehenes besprechen wir vorher mit Ihnen." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Dachdecker Preisliste München 2025 | Stundensatz & Festpreise"
        description="Was kostet ein Dachdecker in München? ✓ Stundensatz 55-75€ ✓ Reparaturen ab 80€ ✓ Neueindeckung 60-180€/m² ✓ Kostenloser Kostenvoranschlag. Meisterbetrieb mit Festpreisgarantie!"
        canonical="/dachdecker-preise"
        keywords="dachdecker preise münchen, dachdecker stundenlohn bayern, dachdecker kosten pro stunde, dachdeckerarbeiten preise, dachdecker preisliste 2025, was kostet dachdecker münchen, dachdecker angebot"
        aiSummary="Dachdecker Preise München 2025: Stundensatz 55-75€ netto, Reparaturen ab 80€, Dachsanierung 60-180€/m². 089Dach GmbH - Festpreise für München, Starnberg, Freising, Dachau. Kostenlose Beratung: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Dachdecker Preise", url: "/dachdecker-preise" }]} />
      <ServiceSchema pageName="Dachdecker Preise München" services={[{ name: "Transparente Preisgestaltung", description: "Festpreise für alle Dachdeckerarbeiten" }]} />
      <ProductServiceSchema name="Dachdeckerarbeiten München" description="Professionelle Dachdeckerarbeiten zu fairen Festpreisen" priceFrom={80} priceTo={350} category="Dachdeckerarbeiten" />
      <FAQPageSchema faqs={faqs} />
      
      <Navigation />
      
      <main id="main-content" role="main" tabIndex={-1}>
      <AIBeraterSection 
        pageName="Dachdecker Preise"
        description="Wie setzen sich Dachdecker-Preise zusammen? Unser KI-Berater erklärt die Kalkulation."
      />
      
      <section className="relative py-20 text-white overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-blue-500/30">
              <Euro className="w-5 h-5 text-blue-400" />
              <span className="font-medium text-blue-300">Preisliste 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"><strong>Dachdecker Preise</strong> München</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-7xl mx-auto">Transparente <strong>Preise</strong> für alle <strong>Dachdeckerarbeiten</strong> – von der kleinen <strong>Reparatur</strong> bis zur <strong>Komplettsanierung</strong>.</p>
            <p className="text-lg text-white/70 mb-8"><strong>Festpreisgarantie</strong> • Keine versteckten Kosten • Kostenlose Beratung</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6" data-testid="button-hero-callback"><Phone className="mr-2 h-5 w-5" />Kostenloses Angebot</Button></Link>
              <Link href="/beratung"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6" data-testid="button-hero-online">24h Online Termin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <BackButton />

      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-4">Unsere Preisliste</h2>
            <p className="text-center text-slate-600 mb-12">Alle Preise inkl. Material und Arbeit für München und Umgebung</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-4 font-semibold text-slate-800">Leistung</th>
                    <th className="text-right p-4 font-semibold text-slate-800">Preis</th>
                    <th className="text-right p-4 font-semibold text-slate-800">Einheit</th>
                  </tr>
                </thead>
                <tbody>
                  {preisliste.map((row, index) => (
                    <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="p-4 font-medium text-slate-700">{row.leistung}</td>
                      <td className="p-4 text-right text-blue-600 font-bold">{row.preis}</td>
                      <td className="p-4 text-right text-slate-500 text-sm">{row.einheit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-slate-500 text-sm mt-6">Stand: 2025 • Gerüstkosten separat • Festpreis nach Vor-Ort-Besichtigung</p>
          </div>
        </div>
      </section>

      <section className="py-6 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Unsere Festpreis-Garantie</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"><CheckCircle2 className="w-8 h-8" /></div>
                <h3 className="font-semibold mb-2">Kostenlose Beratung</h3>
                <p className="text-white/80 text-sm">Vor-Ort-Besichtigung und Angebot ohne Kosten</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"><Euro className="w-8 h-8" /></div>
                <h3 className="font-semibold mb-2">Festpreis</h3>
                <p className="text-white/80 text-sm">Der Preis im Angebot ist der Endpreis</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"><Shield className="w-8 h-8" /></div>
                <h3 className="font-semibold mb-2">Keine Überraschungen</h3>
                <p className="text-white/80 text-sm">Mehrkosten nur nach Absprache mit Ihnen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Häufige Fragen zu unseren Preisen</h2>
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
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Individuelles Angebot gewünscht?</h2>
            <p className="text-xl text-slate-600 mb-8">Wir erstellen Ihnen ein kostenloses Festpreis-Angebot für Ihr Projekt.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8" data-testid="button-cta-callback">Kostenloses Angebot<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
              <Link href="/beratung"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online-cta">24h Online Termin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <EinzugsgebietSection />
      <LeadFunnel 
        headline="Dachdecker Preise in München?"
        subheadline="Wir erstellen transparente Angebote."
        description="Faire Dachdecker Preise in München – transparente Angebote vom Meisterbetrieb."
      />
      </main>
    </div>
  );
}
