import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, Droplets, Wrench, Euro, AlertTriangle } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, FAQPageSchema, ProductServiceSchema } from "@/components/SEO";
import RelatedServices from "@/components/RelatedServices";
import { Link } from "wouter";
import heroImage from '@assets/stock_images/roofer_working_on_ro_cb52da00.jpg';

export default function DachrinneReparieren() {
  const leistungen = [
    { name: "Rinne abdichten", preis: "ab 60€", beschreibung: "Undichte Stellen und Verbindungen reparieren" },
    { name: "Rinne richten", preis: "ab 80€", beschreibung: "Verbogene Rinnen wieder in Form bringen" },
    { name: "Halter ersetzen", preis: "ab 25€/Stück", beschreibung: "Gebrochene Rinnenhalter austauschen" },
    { name: "Fallrohr reparieren", preis: "ab 70€", beschreibung: "Undichte oder verstopfte Fallrohre instandsetzen" },
    { name: "Rinne ersetzen", preis: "ab 35€/lfm", beschreibung: "Teilstücke oder komplette Rinne erneuern" },
    { name: "Reinigung + Check", preis: "ab 89€", beschreibung: "Professionelle Rinnenreinigung mit Inspektion" }
  ];

  const probleme = [
    "Wasser läuft über – Rinne verstopft oder falsch geneigt",
    "Wasser tropft an Hauswand – undichte Verbindung",
    "Rinne hängt durch – Halter gebrochen oder lose",
    "Rost und Löcher – Altersbedingte Korrosion",
    "Fallrohr verstopft – Laub und Schmutz im Rohr"
  ];

  const faqs = [
    { question: "Was kostet eine Dachrinnen-Reparatur?", answer: "Kleine Reparaturen (Abdichten, einzelne Halter) ab 60€. Größere Reparaturen je nach Aufwand. Wir erstellen vorab einen Festpreis-Kostenvoranschlag." },
    { question: "Wie erkenne ich, dass meine Dachrinne repariert werden muss?", answer: "Typische Zeichen: Wasser läuft über, tropft an der Hauswand herunter, Rinne hängt durch, sichtbare Risse oder Rost. Bei diesen Anzeichen sollten Sie schnell handeln." },
    { question: "Kann ich die Dachrinne selbst reparieren?", answer: "Kleine Undichtigkeiten können mit Spezialkleber temporär behoben werden. Für dauerhafte Reparaturen und Arbeiten auf der Leiter empfehlen wir den Fachmann – Absturzgefahr!" },
    { question: "Welches Material ist für Dachrinnen am besten?", answer: "Zink ist langlebig (40-50 Jahre) und selbstreinigend. Kupfer hält noch länger (70+ Jahre), ist aber teurer. Kunststoff ist günstig, aber weniger haltbar (15-25 Jahre)." },
    { question: "Wie oft sollte die Dachrinne gereinigt werden?", answer: "Mindestens 1x jährlich im Herbst nach dem Laubfall. Bei Bäumen in der Nähe besser 2x pro Jahr. Regelmäßige Reinigung verhindert teure Schäden." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Dachrinne reparieren München | Ab 60€ | Meisterbetrieb | 089Dach"
        description="Dachrinne reparieren in München ✓ Abdichten ab 60€ ✓ Undichte Stellen, durchhängende Rinnen, Fallrohre ✓ Schnelle Hilfe ✓ Festpreise ✓ Jetzt anrufen!"
        canonical="/dachrinne-reparieren"
        keywords="dachrinne reparieren münchen, dachrinne undicht, dachrinne abdichten, dachrinne hängt durch, fallrohr verstopft, dachrinnenreparatur kosten, dachrinne erneuern, rinnenhalter austauschen, zinkrinne reparieren, regenrinne reparatur"
        aiSummary="Dachrinne reparieren in München durch 089Dach GmbH. Abdichten ab 60€, Rinne ersetzen ab 35€/lfm. Schnelle Hilfe bei undichten Stellen und durchhängenden Rinnen. Tel: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Dachrinne reparieren", url: "/dachrinne-reparieren" }]} />
      <ServiceSchema 
        pageName="Dachrinne reparieren München"
        services={[
          { name: "Rinnenreparatur", description: "Abdichten und Instandsetzen undichter Dachrinnen" },
          { name: "Rinnenerneuerung", description: "Austausch beschädigter Rinnenteile oder Kompletterneuerung" },
          { name: "Fallrohrreparatur", description: "Reparatur und Reinigung verstopfter Fallrohre" }
        ]}
      />
      <ProductServiceSchema 
        name="Dachrinne reparieren München"
        description="Professionelle Dachrinnenreparatur durch Meisterbetrieb. Abdichten, richten, ersetzen – alle Arbeiten aus einer Hand."
        priceFrom={60}
        priceTo={500}
        category="Spenglerarbeiten"
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
              <Droplets className="w-5 h-5" />
              <span className="font-medium">Meisterbetrieb seit 1998</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Dachrinne reparieren München
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Undichte Rinne? Verstopftes Fallrohr? Schnelle Reparatur ab 60€ – 
              damit das Wasser wieder richtig abfließt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-6" data-testid="button-hero-callback">
                  <Phone className="mr-2 h-5 w-5" />
                  Kostenlos beraten lassen
                </Button>
              </Link>
              <Link href="/beratung"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online">24h Online Termin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Typische Dachrinnen-Probleme
            </h2>
            <div className="space-y-4">
              {probleme.map((problem, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-red-50 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{problem}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-600 mt-8">
              Diese Probleme sollten schnell behoben werden – sonst drohen Wasserschäden an der Fassade!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-4">
              Unsere Leistungen & Preise
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Transparente Festpreise – keine versteckten Kosten
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {leistungen.map((leistung, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{leistung.name}</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-3">{leistung.preis}</p>
                  <p className="text-slate-600 text-sm">{leistung.beschreibung}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-500 text-sm mt-8">
              * Preise inkl. Material und Anfahrt in München. Festpreis-Angebot vor Arbeitsbeginn.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Häufige Fragen zur Dachrinnenreparatur
            </h2>
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
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Dachrinne reparieren lassen?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Schnelle Hilfe bei allen Rinnenproblemen – Festpreis vor Arbeitsbeginn!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8" data-testid="button-cta-callback">
                  Rückruf anfordern
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/beratung"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online">24h Online Termin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <LeadFunnel />
      <RelatedServices currentPage="dachrinne" />
      <Footer />
    </div>
  );
}
