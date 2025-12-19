import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, Sun, Shield, Euro, Award } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, FAQPageSchema, ProductServiceSchema } from "@/components/SEO";
import RelatedServices from "@/components/RelatedServices";
import EinzugsgebietSection from "@/components/EinzugsgebietSection";
import { Link } from "wouter";
import heroImage from '@assets/stock_images/roofer_working_on_ro_cb52da00.jpg';

export default function DachfensterEinbauen() {
  const fensterTypen = [
    { name: "Schwingfenster", preis: "800-1.500€", einbau: "400-600€", gesamt: "1.200-2.100€" },
    { name: "Klapp-Schwingfenster", preis: "1.000-2.000€", einbau: "450-650€", gesamt: "1.450-2.650€" },
    { name: "Ausstiegsfenster", preis: "600-1.200€", einbau: "350-500€", gesamt: "950-1.700€" },
    { name: "Panoramafenster", preis: "2.000-4.000€", einbau: "600-900€", gesamt: "2.600-4.900€" },
    { name: "Flachdachfenster", preis: "1.500-3.500€", einbau: "500-800€", gesamt: "2.000-4.300€" }
  ];

  const vorteile = [
    "Fachgerechter Einbau vom Meisterbetrieb",
    "Dichte Anschlüsse – garantiert regendicht",
    "Alle Marken: VELUX, Roto, Fakro",
    "Inkl. Innenverkleidung auf Wunsch",
    "Austausch alter Fenster möglich",
    "Förderung bei 3-fach Verglasung"
  ];

  const faqs = [
    { question: "Was kostet Dachfenster einbauen?", answer: "Ein Standard-Schwingfenster inkl. Einbau kostet 1.200-2.100€. Panoramafenster oder Flachdachfenster 2.000-5.000€. Alte Fenster tauschen ist oft günstiger." },
    { question: "Kann man Dachfenster nachträglich einbauen?", answer: "Ja, fast immer! Wir schneiden die Öffnung fachgerecht aus und verstärken die Sparren wenn nötig. Einbauzeit: 1 Tag pro Fenster." },
    { question: "Welche Marke ist die beste?", answer: "VELUX ist Marktführer mit bester Ersatzteilversorgung. Roto ist günstiger bei gleicher Qualität. Fakro bietet gutes Preis-Leistungs-Verhältnis." },
    { question: "Gibt es Förderung für Dachfenster?", answer: "Bei 3-fach Verglasung (Uw ≤ 0,95) fördert die KfW mit 15% Zuschuss im Rahmen der Einzelmaßnahmen-Förderung." },
    { question: "Wie lange dauert der Einbau?", answer: "Ein einzelnes Fenster: ca. 4-6 Stunden. Mehrere Fenster am selben Tag möglich. Inkl. sauberer Abdichtung innen und außen." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Dachfenster einbauen lassen München | Velux, Roto ab 1.200€"
        description="Dachfenster nachträglich einbauen: ✓ VELUX, Roto, Fakro ✓ Komplett ab 1.200€ ✓ Auch Austausch alter Fenster ✓ Meisterbetrieb München & Oberbayern. Mehr Licht unterm Dach!"
        canonical="/dachfenster-einbauen"
        keywords="dachfenster einbauen münchen, velux fenster montage kosten, dachfenster nachträglich einbauen preis, dachflächenfenster einbauen lassen"
        aiSummary="Dachfenster einbauen München: Schwingfenster inkl. Einbau 1.200-2.100€, Panoramafenster 2.600-4.900€. 089Dach - Spezialist für München, Schwabing, Harlaching, Trudering. Tel: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Dachfenster einbauen", url: "/dachfenster-einbauen" }]} />
      <ServiceSchema pageName="Dachfenster einbauen München" services={[{ name: "Dachfenster-Einbau", description: "Fachgerechter Einbau aller Marken" }]} />
      <ProductServiceSchema name="Dachfenster einbauen München" description="Professioneller Dachfenster-Einbau" priceFrom={1200} priceTo={5000} category="Dachfenster" />
      <FAQPageSchema faqs={faqs} />
      
      <Navigation />
      
      <section className="relative py-20 text-white overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-yellow-500/30">
              <Sun className="w-5 h-5 text-yellow-400" />
              <span className="font-medium text-yellow-300">Mehr Licht unterm Dach</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Dachfenster einbauen München</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto">VELUX, Roto, Fakro – wir bauen alle Marken fachgerecht ein. Auch nachträglich.</p>
            <p className="text-lg text-white/70 mb-8">Ab 1.200€ komplett • 1 Tag Einbauzeit • Meisterbetrieb</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white text-lg px-8 py-6" data-testid="button-hero-callback"><Phone className="mr-2 h-5 w-5" />Kostenlose Beratung</Button></Link>
              <Link href="/rueckruf"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6" data-testid="button-hero-online">24h Onlinetermin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-4">Dachfenster Preise inkl. Einbau</h2>
            <p className="text-center text-slate-600 mb-12">Komplettpreise für München und Umgebung</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-4 font-semibold text-slate-800">Fenstertyp</th>
                    <th className="text-right p-4 font-semibold text-slate-800">Fenster</th>
                    <th className="text-right p-4 font-semibold text-slate-800">Einbau</th>
                    <th className="text-right p-4 font-semibold text-slate-800">Gesamt</th>
                  </tr>
                </thead>
                <tbody>
                  {fensterTypen.map((f, index) => (
                    <tr key={index} className="border-b border-slate-100">
                      <td className="p-4 font-medium text-slate-700">{f.name}</td>
                      <td className="p-4 text-right text-slate-600">{f.preis}</td>
                      <td className="p-4 text-right text-slate-600">{f.einbau}</td>
                      <td className="p-4 text-right text-yellow-600 font-bold">{f.gesamt}</td>
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Ihre Vorteile bei 089Dach</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {vorteile.map((v, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <span className="text-slate-700">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Häufige Fragen zu Dachfenstern</h2>
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

      <section className="py-16 bg-yellow-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Dachfenster einbauen lassen?</h2>
            <p className="text-xl text-white/90 mb-8">Kostenlose Beratung vor Ort – wir finden das richtige Fenster für Sie.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-white text-yellow-700 hover:bg-yellow-50 text-lg px-8" data-testid="button-cta-callback">Beratung anfordern<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
              <Link href="/rueckruf"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online-cta">24h Onlinetermin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <EinzugsgebietSection />
      <LeadFunnel />
      <RelatedServices currentPage="dachfenster" />
      <Footer />
    </div>
  );
}
