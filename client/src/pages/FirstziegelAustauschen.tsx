import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, ArrowUpToLine, Shield } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, FAQPageSchema, ProductServiceSchema } from "@/components/SEO";
import RelatedServices from "@/components/RelatedServices";
import EinzugsgebietSection from "@/components/EinzugsgebietSection";
import { Link } from "wouter";
import heroImage from '@assets/stock_images/roofer_working_on_ro_cb52da00.jpg';

export default function FirstziegelAustauschen() {
  const leistungen = [
    { name: "Einzelne Firstziegel", preis: "50-100€", beschreibung: "Pro Ziegel inkl. Mörtel" },
    { name: "First komplett neu", preis: "30-50€/lfm", beschreibung: "Alle Ziegel + Trockenfirst" },
    { name: "Gratziegel erneuern", preis: "35-55€/lfm", beschreibung: "Seitliche Dachkanten" },
    { name: "Firstentlüftung", preis: "40-60€/lfm", beschreibung: "Belüfteter First" }
  ];

  const faqs = [
    { question: "Was kostet Firstziegel austauschen?", answer: "Einzelne Ziegel 50-100€ je nach Zugänglichkeit. Kompletter First neu: 30-50€/lfm. Bei 10m First also 300-500€." },
    { question: "Warum sind Firstziegel undicht?", answer: "Alter Mörtel bröckelt, Ziegel verschieben sich durch Temperaturschwankungen, oder Sturm hat sie gelockert." },
    { question: "Mörtel oder Trockenfirst?", answer: "Trockenfirst ist moderner, flexibler und hält länger. Mörtel ist günstiger, aber anfälliger für Risse. Wir empfehlen Trockenfirst." },
    { question: "Kann ich Firstziegel selbst austauschen?", answer: "Gefährlich! First ist am höchsten Punkt des Dachs. Bitte nur mit Sicherung und Erfahrung." },
    { question: "Wie erkenne ich defekte Firstziegel?", answer: "Risse im Mörtel, verschobene oder fehlende Ziegel, Wasserflecken im Dachboden direkt unter dem First." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Firstziegel austauschen München | 30-50€/lfm | 089Dach"
        description="Firstziegel austauschen München: ✓ Einzelne Ziegel ab 50€ ✓ First komplett 30-50€/lfm ✓ Trockenfirst ✓ Schnelle Reparatur. Jetzt anfragen!"
        canonical="/firstziegel-austauschen"
        keywords="firstziegel austauschen, first undicht, firstziegel reparieren, gratziegel erneuern, dachfirst sanieren, firstziegel kosten, first neu machen"
        aiSummary="Firstziegel austauschen München: Einzelne Ziegel 50-100€, First komplett 30-50€/lfm. 089Dach Meisterbetrieb. Tel: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Firstziegel austauschen", url: "/firstziegel-austauschen" }]} />
      <ServiceSchema pageName="Firstziegel austauschen" services={[{ name: "Firstsanierung", description: "Reparatur und Erneuerung" }]} />
      <ProductServiceSchema name="Firstziegel München" description="Firstreparatur und -erneuerung" priceFrom={30} priceTo={100} category="Firstreparatur" />
      <FAQPageSchema faqs={faqs} />
      
      <Navigation />
      
      <section className="relative py-20 text-white overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-rose-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-rose-500/30">
              <ArrowUpToLine className="w-5 h-5 text-rose-400" />
              <span className="font-medium text-rose-300">Dachspitze dicht</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"><strong>Firstziegel austauschen</strong> München</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-7xl mx-auto">Undichter First? Wir tauschen defekte Firstziegel und dichten Ihren Dachfirst ab.</p>
            <p className="text-lg text-white/70 mb-8">Ab 50€ pro Ziegel • Schnelle Reparatur • Meisterbetrieb</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white text-lg px-8 py-6" data-testid="button-hero-callback"><Phone className="mr-2 h-5 w-5" />Rückruf anfordern</Button></Link>
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
                  <p className="text-xl font-bold text-rose-600 whitespace-nowrap ml-4">{l.preis}</p>
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

      <section className="py-6 bg-rose-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">First undicht?</h2>
            <p className="text-xl text-white/90 mb-8">Schnelle Reparatur durch Meisterbetrieb</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-white text-rose-700 hover:bg-rose-50 text-lg px-8" data-testid="button-cta-callback">Rückruf anfordern<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
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
