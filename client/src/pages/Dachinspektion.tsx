import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, Search, Camera, FileText, Shield, Calendar } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, FAQPageSchema, ProductServiceSchema } from "@/components/SEO";
import RelatedServices from "@/components/RelatedServices";
import { Link } from "wouter";
import heroImage from '@assets/stock_images/roofer_working_on_ro_cb52da00.jpg';

export default function Dachinspektion() {
  const leistungen = [
    { title: "Sichtprüfung", text: "Kontrolle aller Dachziegel, Anschlüsse und Durchdringungen" },
    { title: "Dachrinnen-Check", text: "Prüfung auf Verstopfungen, Beschädigungen und Gefälle" },
    { title: "Unterkonstruktion", text: "Begutachtung von Lattung und Sparren (wenn zugänglich)" },
    { title: "Fotodokumentation", text: "Detaillierte Bilder aller Befunde für Ihre Unterlagen" },
    { title: "Protokoll", text: "Schriftlicher Bericht mit Handlungsempfehlungen" },
    { title: "Kostenvoranschlag", text: "Falls Reparaturen nötig: Sofort Festpreis-Angebot" }
  ];

  const wann = [
    "Nach dem Winter (Frostschäden erkennen)",
    "Nach Sturm oder Hagel",
    "Vor dem Hauskauf",
    "Alle 5 Jahre zur Vorsorge",
    "Bei Verdacht auf Undichtigkeit",
    "Vor Ablauf der Gewährleistung"
  ];

  const faqs = [
    { question: "Was kostet eine Dachinspektion in München?", answer: "Eine professionelle Dachinspektion mit Protokoll kostet bei uns 149€ pauschal (Anfahrt in München inklusive). Bei anschließender Beauftragung von Reparaturen wird die Inspektion kostenlos." },
    { question: "Wie oft sollte man das Dach inspizieren lassen?", answer: "Wir empfehlen alle 5 Jahre eine professionelle Inspektion. Nach Stürmen oder bei einem Dach älter als 30 Jahre besser alle 2-3 Jahre. Regelmäßige Kontrolle verhindert teure Folgeschäden." },
    { question: "Was wird bei einer Dachinspektion geprüft?", answer: "Wir prüfen: Dachziegel und Eindeckung, alle Anschlüsse und Durchdringungen (Kamin, Dachfenster), Dachrinnen und Fallrohre, sichtbare Teile der Unterkonstruktion, Dämmung und Dampfsperre (wenn zugänglich)." },
    { question: "Muss ich auf dem Dach dabei sein?", answer: "Nein, wir arbeiten selbstständig. Sie erhalten anschließend das Protokoll mit Fotos. Auf Wunsch erklären wir Ihnen vor Ort alle Befunde." },
    { question: "Kann ich die Inspektion von der Steuer absetzen?", answer: "Ja! Handwerkerleistungen sind zu 20% absetzbar (max. 1.200€/Jahr). Wir weisen die Arbeitskosten getrennt aus." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Dachinspektion München | 149€ pauschal | Protokoll & Fotos | 089Dach"
        description="Professionelle Dachinspektion in München ✓ 149€ pauschal inkl. Anfahrt ✓ Fotodokumentation ✓ Schriftliches Protokoll ✓ Meisterbetrieb ✓ Jetzt Termin buchen!"
        canonical="/dachinspektion"
        keywords="dachinspektion münchen, dachcheck münchen, dach überprüfen lassen, dachkontrolle kosten, dach gutachten münchen, dachdecker inspektion, dach prüfen vor hauskauf, dach zustand prüfen, dachzustandsbericht, jährliche dachinspektion"
        aiSummary="Professionelle Dachinspektion in München durch 089Dach GmbH. 149€ pauschal inklusive Anfahrt, Fotodokumentation und schriftlichem Protokoll. Kostenlos bei Folgeauftrag. Tel: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Dachinspektion", url: "/dachinspektion" }]} />
      <ServiceSchema 
        pageName="Dachinspektion München"
        services={[
          { name: "Dachinspektion", description: "Vollständige Prüfung des Dachzustands mit Protokoll" },
          { name: "Hauskauf-Gutachten", description: "Detaillierte Zustandsbewertung für Immobilienkäufer" },
          { name: "Wartungsinspektion", description: "Regelmäßige Kontrolltermine alle 2-5 Jahre" }
        ]}
      />
      <ProductServiceSchema 
        name="Dachinspektion München"
        description="Professionelle Dachinspektion mit Fotodokumentation und schriftlichem Protokoll. Pauschalpreis inklusive Anfahrt."
        priceFrom={149}
        priceTo={249}
        category="Dachservice"
      />
      <FAQPageSchema faqs={faqs} />
      
      <Navigation />
      
      <section className="relative py-20 text-white overflow-hidden min-h-[60vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Search className="w-5 h-5" />
              <span className="font-medium">Meisterbetrieb seit 1998</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Dachinspektion München
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto">
              Professionelle Dachprüfung für 149€ pauschal – inklusive Fotodokumentation 
              und schriftlichem Protokoll.
            </p>
            <p className="text-lg text-white/80 mb-8">
              Kostenlos bei anschließender Beauftragung von Reparaturen!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-6" data-testid="button-hero-callback">
                  <Calendar className="mr-2 h-5 w-5" />
                  Termin vereinbaren
                </Button>
              </Link>
              <Link href="/rueckruf"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online">24h Online Termin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Was wir bei der Dachinspektion prüfen
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {leistungen.map((leistung, index) => (
                <div key={index} className="flex items-start gap-4 p-5 bg-blue-50 rounded-xl">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">{leistung.title}</h3>
                    <p className="text-slate-600 text-sm">{leistung.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-slate-100">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">Unser Inspektions-Paket</h2>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-5xl font-bold text-blue-600">149€</span>
                  <span className="text-slate-500">pauschal</span>
                </div>
                <p className="text-slate-600 mt-2">Anfahrt in München inklusive</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Komplette Dachbegehung</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Fotodokumentation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Schriftliches Protokoll</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Handlungsempfehlungen</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Kostenvoranschlag für Reparaturen</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Telefonische Nachbesprechung</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-4 bg-green-50 rounded-lg text-center">
                <p className="text-green-700 font-medium">
                  Bei Beauftragung von Reparaturen: Inspektion wird kostenlos!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Wann ist eine Dachinspektion sinnvoll?
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {wann.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Häufige Fragen zur Dachinspektion
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
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
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Jetzt Dachinspektion buchen
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Wissen, wie es um Ihr Dach steht – bevor kleine Schäden teuer werden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8" data-testid="button-cta-callback">
                  Termin vereinbaren
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/rueckruf"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online">24h Online Termin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <LeadFunnel />
      <RelatedServices currentPage="inspektion" />
      <Footer />
    </div>
  );
}
