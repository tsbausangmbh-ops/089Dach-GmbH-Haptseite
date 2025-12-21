import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, Droplets, Shield, Home, Layers, Wrench, AlertTriangle } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, FAQPageSchema, ProductServiceSchema } from "@/components/SEO";
import BackButton from "@/components/BackButton";
import { Link } from "wouter";
import heroImage from '@assets/stock_images/roofer_working_on_ro_cb52da00.jpg';

export default function DachAbdichten() {
  const dachtypen = [
    { 
      name: "Steildach abdichten", 
      preis: "ab 25€/m²", 
      beschreibung: "Flüssigkunststoff, Unterspannbahn oder neue Unterdeckung für Ziegel- und Betondächer"
    },
    { 
      name: "Flachdach abdichten", 
      preis: "ab 35€/m²", 
      beschreibung: "Bitumenbahnen, EPDM-Folien oder Flüssigkunststoff für dauerhaft dichte Flachdächer"
    },
    { 
      name: "Blechdach abdichten", 
      preis: "ab 30€/m²", 
      beschreibung: "Spezielle Abdichtungen für Stehfalz-, Trapez- und Wellblechdächer"
    },
    { 
      name: "Notabdichtung", 
      preis: "ab 150€", 
      beschreibung: "Schnelle provisorische Abdichtung bei akuter Undichtigkeit – 24h Service"
    }
  ];

  const verfahren = [
    { icon: Layers, title: "Flüssigkunststoff", text: "Nahtlose Abdichtung, ideal für komplexe Dachformen und Anschlüsse" },
    { icon: Shield, title: "Bitumenbahnen", text: "Bewährte Lösung für Flachdächer, mehrlagig für maximale Sicherheit" },
    { icon: Home, title: "EPDM-Folie", text: "Hochelastisch, UV-beständig, bis zu 50 Jahre Lebensdauer" },
    { icon: Wrench, title: "Unterspannbahn", text: "Zusätzliche Abdichtungsebene unter der Dacheindeckung" }
  ];

  const faqs = [
    { question: "Was kostet eine Dachabdichtung in München?", answer: "Je nach Dachtyp und Verfahren: Steildach ab 25€/m², Flachdach ab 35€/m², Blechdach ab 30€/m². Für ein 100m² Dach liegen die Kosten zwischen 2.500€ und 5.000€. Wir erstellen ein kostenloses Angebot." },
    { question: "Wie lange hält eine professionelle Dachabdichtung?", answer: "Mit hochwertigen Materialien und fachgerechter Verarbeitung: Bitumenbahnen 20-30 Jahre, EPDM-Folien bis 50 Jahre, Flüssigkunststoff 15-25 Jahre. Regelmäßige Wartung verlängert die Lebensdauer." },
    { question: "Kann man ein undichtes Dach von innen abdichten?", answer: "Ja, bei Steildächern ist eine Abdichtung von innen mit Unterspannbahn möglich. Diese Methode ist ideal beim Dachausbau und spart Gerüstkosten. Bei Flachdächern empfehlen wir immer die Außenabdichtung." },
    { question: "Welche Dachabdichtung ist die beste?", answer: "Das hängt vom Dachtyp ab: Flachdach → EPDM oder Bitumen, Steildach → Unterspannbahn oder Flüssigkunststoff, komplexe Formen → Flüssigkunststoff. Wir beraten Sie individuell." },
    { question: "Gibt es Förderung für Dachabdichtung?", answer: "Wenn die Abdichtung mit einer Dämmung kombiniert wird, ist KfW-Förderung bis 20% möglich. Wir unterstützen Sie bei der Antragstellung und erstellen die erforderlichen Nachweise." }
  ];

  const anzeichen = [
    "Wasserflecken an Decke oder Wänden",
    "Schimmelbildung im Dachbereich",
    "Feuchtigkeit auf dem Dachboden",
    "Sichtbare Risse in der Dachhaut",
    "Blasen oder Wellen bei Flachdächern",
    "Moos und Flechten auf Ziegeln"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Dach abdichten München | Alle Dachtypen | Ab 25€/m² | 089Dach"
        description="Dach abdichten in München ✓ Steildach, Flachdach, Blechdach ✓ Ab 25€/m² ✓ Flüssigkunststoff, Bitumen, EPDM ✓ 24h Notdienst ✓ Meisterbetrieb seit 1998!"
        canonical="/dach-abdichten"
        keywords="dach abdichten münchen, dachabdichtung kosten, dach abdichten flüssigkunststoff, flachdach abdichten, steildach abdichten, dach wasserdicht machen, dachabdichtung bitumen, dach abdichten von innen, undichtes dach reparieren, dachdichtung münchen"
        aiSummary="Dach abdichten in München durch 089Dach GmbH. Steildach ab 25€/m², Flachdach ab 35€/m². Flüssigkunststoff, Bitumen, EPDM. 24h Notdienst verfügbar. Meisterbetrieb seit 1998. Tel: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Dach abdichten", url: "/dach-abdichten" }]} />
      <ServiceSchema 
        pageName="Dach abdichten München"
        services={[
          { name: "Steildach-Abdichtung", description: "Professionelle Abdichtung von Ziegel- und Betondächern" },
          { name: "Flachdach-Abdichtung", description: "EPDM, Bitumen oder Flüssigkunststoff für Flachdächer" },
          { name: "Notabdichtung", description: "24h Service bei akuten Undichtigkeiten" }
        ]}
      />
      <ProductServiceSchema 
        name="Dachabdichtung München"
        description="Professionelle Dachabdichtung für alle Dachtypen. Verschiedene Verfahren für dauerhafte Dichtigkeit."
        priceFrom={25}
        priceTo={50}
        category="Dachabdichtung"
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
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Droplets className="w-5 h-5" />
              <span className="font-medium">Meisterbetrieb seit 1998</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"><strong>Dach abdichten</strong> München</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-7xl mx-auto">
              Professionelle Dachabdichtung für alle Dachtypen – 
              Steildach, Flachdach und Blechdach dauerhaft dicht.
            </p>
            <p className="text-lg text-white/80 mb-8">
              Ab 25€/m² • Alle Verfahren • 24h Notdienst
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

      <BackButton />

      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-4">
              Dachabdichtung nach Dachtyp
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-4xl mx-auto">
              Jeder Dachtyp erfordert die passende Abdichtungsmethode
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {dachtypen.map((typ, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-slate-800">{typ.name}</h3>
                    <span className="text-lg font-bold text-blue-600">{typ.preis}</span>
                  </div>
                  <p className="text-slate-600">{typ.beschreibung}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Unsere Abdichtungsverfahren
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {verfahren.map((v, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <v.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">{v.title}</h3>
                  <p className="text-slate-600 text-sm">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Woran erkennen Sie ein undichtes Dach?
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {anzeichen.map((anzeichen, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-red-50 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-slate-700">{anzeichen}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-600 mt-8">
              Bei diesen Anzeichen sollten Sie schnell handeln – Feuchteschäden werden mit der Zeit teurer!
            </p>
          </div>
        </div>
      </section>

      <section className="py-6 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Warum eine professionelle Dachabdichtung?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">15-50</div>
                <p className="text-white/80">Jahre Lebensdauer je nach Material</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50-70%</div>
                <p className="text-white/80">günstiger als Neueindeckung</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24h</div>
                <p className="text-white/80">Notdienst bei akuten Schäden</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Häufige Fragen zur Dachabdichtung
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

      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Dach abdichten lassen?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Kostenlose Vor-Ort-Beratung mit Zustandsbewertung und Festpreis-Angebot
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8" data-testid="button-cta-callback">
                  Beratungstermin vereinbaren
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/beratung"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online">24h Online Termin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <LeadFunnel 
        headline="Dach abdichten in München?"
        subheadline="Wir finden und beheben die Undichtigkeit."
        description="Professionelle Dachabdichtung ab 25€/m² – alle Dachtypen, 24h Notdienst in München."
      />
    </div>
  );
}
