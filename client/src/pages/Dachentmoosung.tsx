import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, Leaf, Sparkles, Shield } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, FAQPageSchema, ProductServiceSchema } from "@/components/SEO";
import RelatedServices from "@/components/RelatedServices";
import EinzugsgebietSection from "@/components/EinzugsgebietSection";
import { Link } from "wouter";
import heroImage from '@assets/stock_images/roofer_working_on_ro_cb52da00.jpg';

export default function Dachentmoosung() {
  const leistungen = [
    { name: "Dachreinigung", preis: "8-15€/m²", beschreibung: "Hochdruckreinigung oder manuell" },
    { name: "Entmoosung", preis: "10-18€/m²", beschreibung: "Moos und Algen entfernen" },
    { name: "Reinigung + Beschichtung", preis: "25-40€/m²", beschreibung: "Komplett inkl. Dachfarbe" },
    { name: "Dachrinnenreinigung", preis: "3-6€/lfm", beschreibung: "Laub und Moos entfernen" }
  ];

  const vorteile = [
    "Längere Lebensdauer der Dachziegel",
    "Bessere Optik – Haus wirkt gepflegt",
    "Vermeidung von Wasserschäden",
    "Wertsteigerung der Immobilie",
    "Höherer Wirkungsgrad bei Solaranlagen"
  ];

  const faqs = [
    { question: "Was kostet Dachentmoosung pro m²?", answer: "Nur Reinigung 8-15€/m², mit Entmoosung 10-18€/m², mit anschließender Beschichtung 25-40€/m²." },
    { question: "Wie oft sollte man das Dach entmoosen?", answer: "Je nach Lage alle 5-10 Jahre. Bei Norddächern oder unter Bäumen öfter. Wir schauen uns Ihr Dach an und beraten." },
    { question: "Ist Dachreinigung schädlich für die Ziegel?", answer: "Bei zu hohem Druck ja! Wir arbeiten mit angepasstem Druck und schonenden Methoden – ohne Beschädigung der Oberfläche." },
    { question: "Kann ich Dach selbst entmoosen?", answer: "Gefährlich (Absturzrisiko!) und ohne Erfahrung oft zu hoher Druck. Wir empfehlen den Fachmann." },
    { question: "Lohnt sich eine Dachbeschichtung nach der Reinigung?", answer: "Ja! Schützt vor neuem Bewuchs, versiegelt poröse Stellen und sieht aus wie neu. Hält 10-15 Jahre." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Dachentmoosung München | 10-18€/m² | Moos & Algen entfernen"
        description="Dachentmoosung München: ✓ Moos entfernen 10-18€/m² ✓ Dachreinigung 8-15€/m² ✓ Optional Beschichtung ✓ Schonende Methoden. Jetzt anfragen!"
        canonical="/dachentmoosung"
        keywords="dachentmoosung kosten, dach moos entfernen, dachreinigung münchen, dach entmoosen lassen, moos auf dach entfernen, dachziegel reinigen, dachentmoosung preis"
        aiSummary="Dachentmoosung in München: Reinigung 8-15€/m², Entmoosung 10-18€/m², mit Beschichtung 25-40€/m². Schonende Methoden. 089Dach. Tel: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Dachentmoosung", url: "/dachentmoosung" }]} />
      <ServiceSchema pageName="Dachentmoosung München" services={[{ name: "Dachreinigung", description: "Moos und Algen schonend entfernen" }]} />
      <ProductServiceSchema name="Dachentmoosung München" description="Professionelle Dachentmoosung" priceFrom={10} priceTo={40} category="Dachreinigung" />
      <FAQPageSchema faqs={faqs} />
      
      <Navigation />
      
      <section className="relative py-20 text-white overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 via-green-900/85 to-green-800/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-green-500/30">
              <Sparkles className="w-5 h-5 text-green-400" />
              <span className="font-medium text-green-300">Dach wie neu</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"><strong>Dachentmoosung</strong></h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-7xl mx-auto">Moos, Algen, Flechten – wir reinigen Ihr Dach schonend und gründlich.</p>
            <p className="text-lg text-white/70 mb-8">Ab 10€/m² • Schonende Methoden • Meisterbetrieb</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6" data-testid="button-hero-callback"><Phone className="mr-2 h-5 w-5" />Kostenloses Angebot</Button></Link>
              <Link href="/beratung"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online">24h Online Termin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
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
                  <p className="text-xl font-bold text-green-600 whitespace-nowrap ml-4">{l.preis}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Vorteile der Dachentmoosung</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {vorteile.map((v, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
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

      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Dach entmoosen lassen?</h2>
            <p className="text-xl text-white/90 mb-8">Kostenlose Beratung und Angebot</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-white text-green-700 hover:bg-green-50 text-lg px-8" data-testid="button-cta-callback">Angebot anfordern<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
              <Link href="/beratung"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online-cta">24h Online Termin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <EinzugsgebietSection />
      <LeadFunnel />
      <RelatedServices currentPage="wartung" />
      <Footer />
    </div>
  );
}
