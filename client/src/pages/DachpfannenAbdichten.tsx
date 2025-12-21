import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, Droplets, Shield, Wrench, Home, AlertTriangle } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, FAQPageSchema, ProductServiceSchema } from "@/components/SEO";
import RelatedServices from "@/components/RelatedServices";
import BackButton from "@/components/BackButton";
import { Link } from "wouter";
import heroImage from '@assets/stock_images/roofer_working_on_ro_cb52da00.jpg';

export default function DachpfannenAbdichten() {
  const methoden = [
    { 
      name: "Abdichtung von außen", 
      preis: "ab 25€/m²", 
      beschreibung: "Flüssigkunststoff oder Bitumenbahn auf die Dachpfannen aufgetragen. Dauerhaft und UV-beständig.",
      vorteile: ["Dauerhafter Schutz", "Kein Dachausbau nötig", "UV-beständig"]
    },
    { 
      name: "Abdichtung von innen", 
      preis: "ab 35€/m²", 
      beschreibung: "Unterspannbahn oder Unterdeckbahn unter den Dachpfannen. Ideale Lösung bei ausgebautem Dachboden.",
      vorteile: ["Zusätzliche Dämmung möglich", "Langlebig", "Keine Gerüstkosten"]
    },
    { 
      name: "Einzelne Stellen abdichten", 
      preis: "ab 80€ pauschal", 
      beschreibung: "Punktuelle Abdichtung an Rissen, Fugen oder defekten Anschlüssen mit Spezialmasse.",
      vorteile: ["Schnelle Lösung", "Kostengünstig", "Sofort dicht"]
    }
  ];

  const wannAbdichten = [
    "Feuchtigkeit oder Wasserflecken am Dachboden",
    "Schimmelbildung unter dem Dach",
    "Sichtbare Risse oder Beschädigungen an Dachpfannen",
    "Undichte Anschlüsse an Kamin oder Dachfenster",
    "Ältere Dächer mit porösen Ziegeln",
    "Vor dem Dachausbau zur Wohnraumnutzung"
  ];

  const faqs = [
    { question: "Was kostet es, Dachpfannen abzudichten?", answer: "Die Kosten variieren je nach Methode: Einzelne Stellen ab 80€, Flächenabdichtung von außen ab 25€/m², Abdichtung von innen ab 35€/m². Für ein 100m² Dach rechnen Sie mit 2.500-5.000€ je nach Verfahren." },
    { question: "Kann man Dachpfannen von innen abdichten?", answer: "Ja! Mit einer Unterspannbahn oder Unterdeckbahn unter den Dachpfannen. Diese Methode ist ideal bei ausgebautem oder zu ausbauenden Dachgeschossen und bietet zusätzlichen Dämmeffekt." },
    { question: "Wie lange hält eine Dachpfannen-Abdichtung?", answer: "Eine professionelle Abdichtung hält 15-25 Jahre. Flüssigkunststoff-Abdichtungen von außen erreichen bis zu 25 Jahre, Unterspannbahnen von innen 20+ Jahre bei korrekter Verlegung." },
    { question: "Ist eine Abdichtung besser als neue Dachpfannen?", answer: "Bei intakter Grundsubstanz ist Abdichten günstiger (50-70% Ersparnis). Sind die Pfannen stark beschädigt, porös oder über 50 Jahre alt, empfehlen wir oft die Neueindeckung." },
    { question: "Kann ich Dachpfannen selbst abdichten?", answer: "Kleine Stellen können mit Dachdichtmasse selbst repariert werden. Flächige Abdichtungen erfordern Fachkenntnisse und Sicherheitsausrüstung – wir raten zur professionellen Ausführung." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Dachpfannen abdichten München | Von innen & außen | Ab 25€/m² | 089Dach"
        description="Dachpfannen abdichten in München ✓ Abdichtung von innen & außen ✓ Ab 25€/m² ✓ Flüssigkunststoff, Unterspannbahn ✓ Meisterbetrieb ✓ Kostenlose Beratung!"
        canonical="/dachpfannen-abdichten"
        keywords="dachpfannen abdichten, dachziegel abdichten von innen, dachziegel abdichten von außen, dach abdichten kosten, undichte dachpfannen reparieren, dachpfannen versiegeln, dachziegel imprägnieren, dach wasserdicht machen, dachabdichtung münchen, dachpfannen reparieren"
        aiSummary="Dachpfannen abdichten in München durch 089Dach GmbH. Abdichtung von außen ab 25€/m², von innen ab 35€/m², einzelne Stellen ab 80€. Flüssigkunststoff, Unterspannbahnen. Meisterbetrieb seit 1998. Tel: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Dachpfannen abdichten", url: "/dachpfannen-abdichten" }]} />
      <ServiceSchema 
        pageName="Dachpfannen abdichten München"
        services={[
          { name: "Außenabdichtung", description: "Flächige Abdichtung mit Flüssigkunststoff oder Bitumen" },
          { name: "Innenabdichtung", description: "Unterspann- oder Unterdeckbahn unter den Dachpfannen" },
          { name: "Punktuelle Reparatur", description: "Abdichtung einzelner undichter Stellen" }
        ]}
      />
      <ProductServiceSchema 
        name="Dachpfannen abdichten München"
        description="Professionelle Abdichtung von Dachpfannen von innen und außen. Verschiedene Verfahren für dauerhafte Dichtigkeit."
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"><strong>Dachpfannen abdichten</strong> München</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-7xl mx-auto">
              Professionelle Abdichtung von innen und außen – 
              für ein dauerhaft dichtes Dach ohne teure Neueindeckung.
            </p>
            <p className="text-lg text-white/80 mb-8">
              Ab 25€/m² • Verschiedene Verfahren • 15-25 Jahre Haltbarkeit
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
              Methoden zur Dachpfannen-Abdichtung
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-4xl mx-auto">
              Wir wählen die optimale Methode für Ihr Dach – je nach Zustand, Budget und Nutzung
            </p>
            <div className="grid lg:grid-cols-3 gap-8">
              {methoden.map((methode, index) => (
                <div key={index} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{methode.name}</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-4">{methode.preis}</p>
                  <p className="text-slate-600 mb-4">{methode.beschreibung}</p>
                  <ul className="space-y-2">
                    {methode.vorteile.map((vorteil, vIndex) => (
                      <li key={vIndex} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {vorteil}
                      </li>
                    ))}
                  </ul>
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
              Wann sollten Dachpfannen abgedichtet werden?
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {wannAbdichten.map((grund, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{grund}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Abdichtung von innen vs. außen
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <Home className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Von außen abdichten</h3>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                    <span>Keine Arbeiten im Wohnraum</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                    <span>Ideal bei nicht ausgebautem Dach</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                    <span>Schutz gegen UV und Witterung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                    <span>Gerüst erforderlich</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Von innen abdichten</h3>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                    <span>Kein Gerüst notwendig</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                    <span>Kombinierbar mit Dämmung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                    <span>Ideal bei Dachausbau</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                    <span>Witterungsunabhängig durchführbar</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Häufige Fragen zur Dachpfannen-Abdichtung
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

      <section className="py-6 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Dachpfannen abdichten lassen?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Kostenlose Vor-Ort-Beratung mit Zustandsbewertung Ihres Dachs
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

      <LeadFunnel />
      <RelatedServices currentPage="abdichtung" />
      <Footer />
    </div>
  );
}
