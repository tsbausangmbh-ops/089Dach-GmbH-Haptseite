import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, Home, Shield, Leaf, Euro, Clock, Award } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, FAQPageSchema, ProductServiceSchema } from "@/components/SEO";
import BackButton from "@/components/BackButton";
import { Link } from "wouter";
import heroImage from '@assets/stock_images/roofer_working_on_ro_cb52da00.jpg';

export default function DachNeuEindecken() {
  const materialien = [
    { 
      name: "Tonziegel", 
      preis: "80-120€/m²", 
      lebensdauer: "60-100 Jahre",
      beschreibung: "Klassiker mit natürlicher Optik, sehr langlebig und farbecht"
    },
    { 
      name: "Betondachsteine", 
      preis: "60-90€/m²", 
      lebensdauer: "40-60 Jahre",
      beschreibung: "Robuste und günstige Alternative zu Tonziegeln"
    },
    { 
      name: "Schiefer", 
      preis: "120-180€/m²", 
      lebensdauer: "100+ Jahre",
      beschreibung: "Edle Naturstein-Optik, extrem langlebig"
    },
    { 
      name: "Metalldach", 
      preis: "90-150€/m²", 
      lebensdauer: "50-70 Jahre",
      beschreibung: "Modern, leicht und wartungsarm"
    }
  ];

  const ablauf = [
    { schritt: "1", title: "Beratung & Aufmaß", text: "Kostenlose Vor-Ort-Beratung mit Materialberatung und exaktem Aufmaß" },
    { schritt: "2", title: "Angebot", text: "Detailliertes Festpreis-Angebot innerhalb von 3 Werktagen" },
    { schritt: "3", title: "Gerüstaufbau", text: "Sicheres Arbeitsgerüst für reibungslosen Ablauf" },
    { schritt: "4", title: "Abriss Altdach", text: "Fachgerechte Entsorgung der alten Eindeckung" },
    { schritt: "5", title: "Neueindeckung", text: "Neue Lattung, Unterspannbahn und Dacheindeckung" },
    { schritt: "6", title: "Abnahme", text: "Gemeinsame Abnahme und Übergabe mit Garantie" }
  ];

  const vorteile = [
    { icon: Shield, title: "5 Jahre Gewährleistung", text: "Auf Material und Handwerksarbeit" },
    { icon: Euro, title: "Festpreisgarantie", text: "Keine versteckten Kosten" },
    { icon: Clock, title: "Termintreue", text: "Fester Fertigstellungstermin" },
    { icon: Leaf, title: "KfW-Förderung", text: "Bis 20% bei energetischer Sanierung" }
  ];

  const faqs = [
    { question: "Was kostet es, ein Dach neu eindecken zu lassen?", answer: "Die Kosten hängen vom Material und der Dachgröße ab: Betondachsteine 60-90€/m², Tonziegel 80-120€/m², Schiefer 120-180€/m². Für ein 100m² Dach inkl. Lattung, Unterspannbahn und Arbeit rechnen Sie mit 8.000-18.000€." },
    { question: "Wie lange dauert eine Dachneueindeckung?", answer: "Ein durchschnittliches Einfamilienhaus (100-150m²) ist in 3-5 Arbeitstagen neu eingedeckt. Größere oder komplexe Dächer können 1-2 Wochen dauern." },
    { question: "Wann sollte man ein Dach neu eindecken?", answer: "Typische Anzeichen: Alter über 40-50 Jahre, viele beschädigte Ziegel, wiederkehrende Undichtigkeiten, bröckelnde Dachsteine, sichtbare Durchfeuchtung der Lattung." },
    { question: "Muss ich während der Arbeiten ausziehen?", answer: "Nein, in der Regel können Sie im Haus wohnen bleiben. Wir arbeiten abschnittsweise und decken das Dach jeden Abend provisorisch ab, falls nötig." },
    { question: "Gibt es Förderung für eine Dachneueindeckung?", answer: "Ja! Wenn Sie gleichzeitig dämmen, fördert die KfW mit bis zu 20% (max. 12.000€). Wir beraten Sie zu den Fördermöglichkeiten und helfen beim Antrag." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Dach neu eindecken München 2025 | Kosten ab 60€/m² | Meisterbetrieb"
        description="Dach neu eindecken München: ✓ Kosten ab 60€/m² ✓ 10 Jahre Garantie ✓ Kostenlose Beratung ✓ Festpreisangebot. ☎ 089 12621964"
        canonical="/dach-neu-eindecken"
        keywords="dach neu eindecken kosten, dach neu decken münchen, dacheindeckung kosten, dach neu machen lassen, dachneueindeckung preise, dach erneuern kosten, neue dachziegel kosten, dach komplett erneuern, dachsanierung mit neueindeckung, dachdecker neueindeckung"
        aiSummary="Dach neu eindecken in München durch 089Dach GmbH. Betondachsteine 60-90€/m², Tonziegel 80-120€/m², Schiefer 120-180€/m². Festpreisgarantie, 5 Jahre Gewährleistung. Tel: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Dach neu eindecken", url: "/dach-neu-eindecken" }]} />
      <ServiceSchema 
        pageName="Dach neu eindecken München"
        services={[
          { name: "Dachneueindeckung", description: "Komplette Neueindeckung mit Material nach Wahl" },
          { name: "Dachsanierung", description: "Neueindeckung inkl. Lattung und Unterspannbahn" },
          { name: "Energetische Sanierung", description: "Neueindeckung mit Dämmung (KfW-förderfähig)" }
        ]}
      />
      <ProductServiceSchema 
        name="Dach neu eindecken München"
        description="Professionelle Dachneueindeckung mit verschiedenen Materialien. Festpreisgarantie und 5 Jahre Gewährleistung."
        priceFrom={60}
        priceTo={180}
        category="Dacheindeckung"
      />
      <FAQPageSchema faqs={faqs} />
      
      <Navigation />
      <main id="main-content" role="main" tabIndex={-1}>
      
      <section className="relative py-20 text-white overflow-hidden min-h-[60vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Award className="w-5 h-5" />
              <span className="font-medium">Meisterbetrieb seit 1998</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"><strong>Dach neu eindecken</strong> München</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-7xl mx-auto">
              Komplette Dachneueindeckung vom Meisterbetrieb – 
              hochwertige Materialien, saubere Arbeit, faire Preise.
            </p>
            <p className="text-lg text-white/80 mb-8">
              Ab 60€/m² • Festpreisgarantie • 5 Jahre Gewährleistung
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf/">
                <Button size="lg" className="bg-white text-orange-700 hover:bg-orange-50 text-lg px-8 py-6" data-testid="button-hero-callback">
                  <Phone className="mr-2 h-5 w-5" />
                  Kostenloses Angebot
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
              Dacheindeckungsmaterialien & Preise
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-4xl mx-auto">
              Wir verbauen alle gängigen Materialien – von klassisch bis modern
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {materialien.map((mat, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{mat.name}</h3>
                  <p className="text-2xl font-bold text-orange-600 mb-1">{mat.preis}</p>
                  <p className="text-sm text-slate-500 mb-3">Lebensdauer: {mat.lebensdauer}</p>
                  <p className="text-slate-600 text-sm">{mat.beschreibung}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-500 text-sm mt-8">
              * Preise inkl. Material, Lattung, Unterspannbahn und Montage. Gerüst separat.
            </p>
          </div>
        </div>
      </section>

      <section className="py-6 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Unser Ablauf – von Beratung bis Abnahme
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ablauf.map((step, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mb-4 text-orange-600 font-bold">
                    {step.schritt}
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Ihre Vorteile bei 089Dach
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {vorteile.map((v, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <v.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold mb-2">{v.title}</h3>
                  <p className="text-white/80 text-sm">{v.text}</p>
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
              Häufige Fragen zur Dachneueindeckung
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
              Dach neu eindecken lassen?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Kostenlose Vor-Ort-Beratung mit Aufmaß und Festpreis-Angebot
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf/">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8" data-testid="button-cta-callback">
                  Kostenloses Angebot anfordern
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/beratung"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online">24h Online Termin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <LeadFunnel 
        headline="Dach neu eindecken?"
        subheadline="Wir beraten zu Material und Kosten."
        description="Eine neue Dacheindeckung steigert den Wert Ihrer Immobilie und senkt Energiekosten."
      />
      </main>
    </div>
  );
}
