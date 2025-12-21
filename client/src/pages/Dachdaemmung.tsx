import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, Thermometer, Euro, Leaf, Home } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, FAQPageSchema, ProductServiceSchema } from "@/components/SEO";
import RelatedServices from "@/components/RelatedServices";
import BackButton from "@/components/BackButton";
import { Link } from "wouter";
import heroImage from '@assets/stock_images/roofer_working_on_ro_cb52da00.jpg';

export default function Dachdaemmung() {
  const daemmarten = [
    { name: "Aufsparrendämmung", preis: "120-180€/m²", beschreibung: "Beste Dämmwirkung, ideal bei Neueindeckung", uWert: "0,14-0,20" },
    { name: "Zwischensparrendämmung", preis: "50-80€/m²", beschreibung: "Kostengünstig, von innen montierbar", uWert: "0,18-0,24" },
    { name: "Untersparrendämmung", preis: "40-60€/m²", beschreibung: "Ergänzung zur Zwischensparrendämmung", uWert: "0,16-0,22" },
    { name: "Einblasdämmung", preis: "25-45€/m²", beschreibung: "Schnell, günstig, für Hohlräume", uWert: "0,20-0,28" }
  ];

  const vorteile = [
    { icon: Euro, title: "Bis 40% Heizkosten sparen", text: "Ungedämmte Dächer verlieren bis zu 30% der Heizenergie" },
    { icon: Thermometer, title: "Sommer kühl, Winter warm", text: "Angenehmes Raumklima das ganze Jahr" },
    { icon: Leaf, title: "KfW-Förderung möglich", text: "Bis zu 20% Zuschuss durch staatliche Förderung" },
    { icon: Home, title: "Wertsteigerung", text: "Bessere Energieeffizienzklasse erhöht Immobilienwert" }
  ];

  const faqs = [
    { question: "Was kostet eine Dachdämmung in München?", answer: "Je nach Dämmverfahren: Einblasdämmung ab 25€/m², Zwischensparrendämmung 50-80€/m², Aufsparrendämmung 120-180€/m². Für ein 100m² Dach liegen die Kosten zwischen 2.500€ und 18.000€." },
    { question: "Welche Dachdämmung ist die beste?", answer: "Die Aufsparrendämmung bietet die beste Dämmleistung ohne Wärmebrücken. Bei bestehenden Dächern ist die Zwischensparrendämmung oft wirtschaftlicher. Wir beraten, welche Lösung für Ihr Dach optimal ist." },
    { question: "Gibt es Förderung für Dachdämmung?", answer: "Ja! Die KfW fördert Dachdämmung mit bis zu 20% Zuschuss (max. 12.000€ pro Wohneinheit). Voraussetzung: U-Wert unter 0,14 W/m²K. Wir helfen beim Förderantrag." },
    { question: "Wie lange dauert eine Dachdämmung?", answer: "Einblasdämmung: 1 Tag. Zwischensparrendämmung von innen: 2-5 Tage. Aufsparrendämmung mit Neueindeckung: 1-2 Wochen je nach Dachgröße." },
    { question: "Muss ich während der Dämmung ausziehen?", answer: "Bei Einblasdämmung und Zwischensparrendämmung von innen: Nein. Bei Aufsparrendämmung: Ebenfalls nicht, aber es kann laut werden. Wir arbeiten zügig und sauber." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Dachdämmung München | 25-180€/m² | KfW-Förderung | 089Dach"
        description="Dachdämmung in München ✓ Aufsparren-, Zwischensparren- & Einblasdämmung ✓ Bis 40% Heizkosten sparen ✓ KfW-Förderung ✓ Meisterbetrieb ✓ Jetzt beraten lassen!"
        canonical="/dachdaemmung"
        keywords="dachdämmung münchen, dach dämmen kosten, aufsparrendämmung münchen, zwischensparrendämmung kosten, einblasdämmung dach, dachisolierung münchen, dachboden dämmen, wärmedämmung dach, energetische sanierung dach, kfw förderung dachdämmung"
        aiSummary="Dachdämmung in München durch 089Dach GmbH. Einblasdämmung ab 25€/m², Zwischensparrendämmung 50-80€/m², Aufsparrendämmung 120-180€/m². KfW-Förderung bis 20% möglich. Meisterbetrieb seit 1998. Tel: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Dachdämmung", url: "/dachdaemmung" }]} />
      <ServiceSchema 
        pageName="Dachdämmung München"
        services={[
          { name: "Aufsparrendämmung", description: "Hochleistungsdämmung von außen bei Neueindeckung" },
          { name: "Zwischensparrendämmung", description: "Dämmung zwischen den Sparren von innen" },
          { name: "Einblasdämmung", description: "Schnelle Dämmung durch Einblasen in Hohlräume" }
        ]}
      />
      <ProductServiceSchema 
        name="Dachdämmung München"
        description="Professionelle Dachdämmung für energieeffizientes Wohnen. Verschiedene Dämmverfahren, KfW-förderfähig."
        priceFrom={25}
        priceTo={180}
        category="Energetische Sanierung"
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
              <Leaf className="w-5 h-5" />
              <span className="font-medium">KfW-Förderung bis 20%</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"><strong>Dachdämmung</strong> München</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-7xl mx-auto">
              Bis zu 40% Heizkosten sparen mit professioneller Dachdämmung. 
              Alle Verfahren – von Einblasdämmung bis Aufsparrendämmung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf">
                <Button size="lg" className="bg-white text-green-700 hover:bg-green-50 text-lg px-8 py-6" data-testid="button-hero-callback">
                  <Phone className="mr-2 h-5 w-5" />
                  Kostenlose Energieberatung
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
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Warum Dachdämmung sich lohnt
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {vorteile.map((vorteil, index) => (
                <div key={index} className="text-center p-6 bg-green-50 rounded-xl">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <vorteil.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{vorteil.title}</h3>
                  <p className="text-slate-600 text-sm">{vorteil.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-4">
              Dämmverfahren & Preise
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-4xl mx-auto">
              Wir beraten Sie, welches Verfahren für Ihr Dach am besten geeignet ist
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {daemmarten.map((art, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-slate-800">{art.name}</h3>
                    <span className="text-lg font-bold text-green-600">{art.preis}</span>
                  </div>
                  <p className="text-slate-600 mb-3">{art.beschreibung}</p>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Thermometer className="w-4 h-4" />
                    <span>U-Wert: {art.uWert} W/m²K</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-center mb-8">
                KfW-Förderung für Ihre Dachdämmung
              </h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-4xl font-bold mb-2">20%</p>
                  <p className="text-white/80">Zuschuss möglich</p>
                </div>
                <div>
                  <p className="text-4xl font-bold mb-2">12.000€</p>
                  <p className="text-white/80">Max. pro Wohneinheit</p>
                </div>
                <div>
                  <p className="text-4xl font-bold mb-2">0,14</p>
                  <p className="text-white/80">U-Wert Anforderung</p>
                </div>
              </div>
              <p className="text-center text-white/80 mt-8">
                Wir unterstützen Sie bei der Antragstellung und erstellen die erforderlichen Nachweise.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Häufige Fragen zur Dachdämmung
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
              Jetzt Energiekosten senken
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Kostenlose Vor-Ort-Beratung mit Wärmebildkamera-Analyse
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8" data-testid="button-cta-callback">
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
      <RelatedServices currentPage="daemmung" />
      <Footer />
    </div>
  );
}
