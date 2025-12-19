import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, Flame, Shield, Droplets } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, FAQPageSchema, ProductServiceSchema } from "@/components/SEO";
import RelatedServices from "@/components/RelatedServices";
import EinzugsgebietSection from "@/components/EinzugsgebietSection";
import { Link } from "wouter";
import heroImage from '@assets/stock_images/roofer_working_on_ro_cb52da00.jpg';

export default function SchornsteinAbdichten() {
  const leistungen = [
    { name: "Kaminanschluss abdichten", preis: "250-500€", beschreibung: "Bleiverwahrung oder Flüssigabdichtung" },
    { name: "Kamineinfassung erneuern", preis: "400-800€", beschreibung: "Komplett neue Verwahrung" },
    { name: "Schornsteinkopf sanieren", preis: "300-600€", beschreibung: "Putz, Anstrich, Abdeckung" },
    { name: "Schornstein verkleiden", preis: "500-1.000€", beschreibung: "Mit Schiefer oder Metall" }
  ];

  const faqs = [
    { question: "Was kostet Schornstein abdichten?", answer: "Einfache Abdichtung 250-500€, neue Kamineinfassung 400-800€. Je nach Aufwand und Dachneigung." },
    { question: "Warum ist mein Schornstein undicht?", answer: "Häufige Ursachen: Alte/rissige Bleiverwahrung, kaputte Schornsteinabdeckung, Risse im Putz, fehlerhafte Anschlüsse." },
    { question: "Wie erkenne ich eine undichte Schornsteineinfassung?", answer: "Wasserflecken an der Decke/Wand neben dem Kamin, feuchte Stellen im Dachboden, Schimmel am Schornsteinschaft." },
    { question: "Wie lange dauert die Abdichtung?", answer: "Eine einfache Abdichtung: 2-4 Stunden. Komplette Erneuerung der Einfassung: 1 Arbeitstag." },
    { question: "Welches Material ist am besten?", answer: "Klassisch: Bleiverwahrung (40+ Jahre haltbar). Modern: Flüssigkunststoff (flexibler). Wir beraten je nach Situation." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Kamin & Schornstein abdichten München | Undicht? Schnelle Hilfe!"
        description="Schornsteineinfassung undicht? ✓ Kaminanschluss abdichten 250-500€ ✓ Einfassung erneuern 400-800€ ✓ Bleiverwahrung & Flüssigkunststoff. Dachdecker München & Umgebung!"
        canonical="/schornstein-abdichten"
        keywords="schornstein abdichten münchen, kamin undicht reparieren, schornsteineinfassung erneuern, bleiverwahrung schornstein kosten, kaminanschluss undicht"
        aiSummary="Schornstein abdichten München und Umgebung: Kaminanschluss 250-500€, Einfassung erneuern 400-800€. 089Dach - Ihr Spezialist in Bogenhausen, Harlaching, Sendling. Tel: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Schornstein abdichten", url: "/schornstein-abdichten" }]} />
      <ServiceSchema pageName="Schornstein abdichten München" services={[{ name: "Schornsteinabdichtung", description: "Professionelle Abdichtung von Kamineinfassungen" }]} />
      <ProductServiceSchema name="Schornstein abdichten München" description="Professionelle Schornstein-Abdichtung" priceFrom={250} priceTo={800} category="Schornstein" />
      <FAQPageSchema faqs={faqs} />
      
      <Navigation />
      
      <section className="relative py-20 text-white overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-red-500/30">
              <Flame className="w-5 h-5 text-red-400" />
              <span className="font-medium text-red-300">Kamin dicht – Wärme bleibt</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Schornstein abdichten München</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto">Undichte Kamineinfassung? Wir dichten Ihren Schornstein dauerhaft ab.</p>
            <p className="text-lg text-white/70 mb-8">Ab 250€ • Schnelle Hilfe • Meisterbetrieb</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6" data-testid="button-hero-callback"><Phone className="mr-2 h-5 w-5" />Rückruf anfordern</Button></Link>
              <Link href="/rueckruf"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6" data-testid="button-hero-online">24h Onlinetermin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Leistungen & Preise</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {leistungen.map((l, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6 flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">{l.name}</h3>
                    <p className="text-slate-600 text-sm">{l.beschreibung}</p>
                  </div>
                  <p className="text-xl font-bold text-red-600 whitespace-nowrap ml-4">{l.preis}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
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

      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Schornstein undicht?</h2>
            <p className="text-xl text-white/90 mb-8">Wir helfen schnell und zuverlässig</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-white text-red-700 hover:bg-red-50 text-lg px-8" data-testid="button-cta-callback">Rückruf anfordern<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
              <Link href="/rueckruf"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online-cta">24h Onlinetermin</Button></Link>
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
