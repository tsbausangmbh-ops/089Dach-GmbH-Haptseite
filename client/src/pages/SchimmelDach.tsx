import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIBeraterSection from "@/components/AIBeraterSection";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, AlertTriangle, Wind, Thermometer, Home, Shield } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, FAQPageSchema, ProductServiceSchema } from "@/components/SEO";
import BackButton from "@/components/BackButton";
import { Link } from "wouter";
import heroImage from '@assets/stock_images/roofer_working_on_ro_cb52da00.jpg';
import { CostEscalationBanner, DecisionPressureBanner } from "@/components/UrgencyBanner";

export default function SchimmelDach() {
  const ursachen = [
    { icon: Wind, title: "Fehlende Dämmung", text: "Kältebrücken führen zu Kondenswasser im Dachbereich" },
    { icon: Thermometer, title: "Defekte Dampfsperre", text: "Feuchtigkeit aus dem Wohnraum dringt in die Konstruktion" },
    { icon: Home, title: "Undichtes Dach", text: "Regenwasser dringt ein und durchfeuchtet die Bausubstanz" },
    { icon: AlertTriangle, title: "Mangelnde Belüftung", text: "Fehlende Hinterlüftung lässt Feuchtigkeit nicht entweichen" }
  ];

  const leistungen = [
    "Ursachenanalyse mit Feuchtemessung",
    "Leckortung mit Thermografie",
    "Beseitigung der Feuchtigkeitsquelle",
    "Dämmung und Dampfsperre erneuern",
    "Belüftung optimieren",
    "Schimmelbekämpfung durch Partnerbetrieb"
  ];

  const faqs = [
    { question: "Woher kommt Schimmel unterm Dach?", answer: "Hauptursachen sind: mangelnde Dämmung (Kondensation), defekte Dampfsperre (Feuchtigkeit aus Wohnraum), undichtes Dach (Regenwasser) oder fehlende Hinterlüftung. Wir finden die Ursache und beheben sie." },
    { question: "Ist Schimmel im Dachstuhl gefährlich?", answer: "Ja! Schimmelsporen können Atemwegserkrankungen und Allergien auslösen. Zudem schädigt die Feuchtigkeit langfristig die Holzkonstruktion. Schnelles Handeln ist wichtig." },
    { question: "Was kostet die Schimmelbeseitigung im Dachbereich?", answer: "Die Ursachenanalyse kostet ab 150€. Die Sanierungskosten hängen von der Ursache ab: Dämmung erneuern ab 50€/m², Dampfsperre ab 30€/m², Dachsanierung individuell nach Umfang." },
    { question: "Wer ist für Schimmel im Dachstuhl zuständig?", answer: "Als Dachdecker beheben wir die baulichen Ursachen (Undichtigkeit, Dämmung, Dampfsperre). Für die Schimmelentfernung empfehlen wir spezialisierte Partner. Wir koordinieren gerne alles aus einer Hand." },
    { question: "Kann ich Schimmel im Dach selbst entfernen?", answer: "Oberflächlichen Schimmel können Sie mit Spezialreiniger behandeln. Bei großflächigem Befall oder Schimmel in der Dämmung ist professionelle Hilfe zwingend erforderlich – auch aus Gesundheitsgründen." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Schimmel unterm Dach München | Ursachenanalyse | 089Dach Meisterbetrieb"
        description="Schimmel unterm Dach in München? ✓ Ursachenanalyse mit Thermografie ✓ Dämmung & Dampfsperre erneuern ✓ Meisterbetrieb ✓ Kostenlose Erstberatung!"
        canonical="/schimmel-dach"
        keywords="schimmel unterm dach, schimmel dachboden, schimmel dachstuhl, schimmel dachschräge, feuchtigkeit dachboden, kondenswasser dach, schimmel dampfsperre, dach schimmelbildung, dachboden feucht, schimmel dachdämmung"
        aiSummary="Schimmel unterm Dach in München? 089Dach GmbH findet die Ursache (Dämmung, Dampfsperre, Undichtigkeit) und behebt sie fachgerecht. Ursachenanalyse ab 150€. Tel: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Schimmel unterm Dach", url: "/schimmel-dach" }]} />
      <ServiceSchema 
        pageName="Schimmel unterm Dach München"
        services={[
          { name: "Ursachenanalyse", description: "Feuchtemessung und Thermografie zur Ursachenfindung" },
          { name: "Dämmungssanierung", description: "Erneuerung von Dämmung und Dampfsperre" },
          { name: "Belüftungsoptimierung", description: "Verbesserung der Dach-Hinterlüftung" }
        ]}
      />
      <ProductServiceSchema 
        name="Schimmel unterm Dach Sanierung München"
        description="Professionelle Ursachenanalyse und Behebung von Schimmelproblemen im Dachbereich. Dämmung, Dampfsperre und Belüftung."
        priceFrom={150}
        priceTo={5000}
        category="Dachsanierung"
      />
      <FAQPageSchema faqs={faqs} />
      
      <Navigation />
      <AIBeraterSection 
        pageName="Schimmel im Dachbereich"
        description="Woher kommt Schimmel am Dach? Unser KI-Berater erklärt Ursachen und Lösungen."
      />
      
      <section className="relative py-20 text-white overflow-hidden min-h-[60vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-yellow-500/30">
              <AlertTriangle className="w-5 h-5 text-yellow-400" />
              <span className="font-medium text-yellow-300">Gesundheitsrisiko – schnell handeln!</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"><strong>Schimmel unterm Dach</strong>?</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-7xl mx-auto">
              Wir finden die Ursache und beheben sie dauerhaft – 
              damit Ihr Dachstuhl wieder trocken und gesund wird.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
                <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50 text-lg px-8 py-6" data-testid="button-hero-callback">
                  <Phone className="mr-2 h-5 w-5" />
                  Kostenlose Erstberatung
                </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online"><a href="/beratung">24h Online Termin</a></Button>
            </div>
          </div>
        </div>
      </section>

      <BackButton />

      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Häufige Ursachen für Schimmel im Dachbereich
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ursachen.map((ursache, index) => (
                <div key={index} className="text-center p-6 bg-purple-50 rounded-xl">
                  <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ursache.icon className="w-7 h-7 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">{ursache.title}</h3>
                  <p className="text-slate-600 text-sm">{ursache.text}</p>
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
              Unsere Leistungen bei Schimmelproblemen
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {leistungen.map((leistung, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span className="text-slate-700">{leistung}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Unser Vorgehen bei Schimmelbefall
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="font-semibold mb-2">Analyse</h3>
                <p className="text-white/70 text-sm">Feuchtemessung und Thermografie zur Ursachenfindung</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="font-semibold mb-2">Diagnose</h3>
                <p className="text-white/70 text-sm">Bericht mit klarer Ursache und Lösungsvorschlägen</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="font-semibold mb-2">Sanierung</h3>
                <p className="text-white/70 text-sm">Fachgerechte Behebung der baulichen Ursache</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <h3 className="font-semibold mb-2">Kontrolle</h3>
                <p className="text-white/70 text-sm">Nachkontrolle zur Sicherstellung des Erfolgs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Häufige Fragen zu Schimmel im Dachbereich
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
              Schimmel im Dach? Lassen Sie die Ursache prüfen!
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Kostenlose Erstberatung – wir klären, wie wir Ihnen helfen können
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8" data-testid="button-cta-callback">
                  Beratungstermin vereinbaren
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online"><a href="/beratung">24h Online Termin</a></Button>
            </div>
          </div>
        </div>
      </section>

      <CostEscalationBanner />
      <LeadFunnel 
        headline="Schimmel Dach in München?"
        subheadline="Wir finden die Ursache."
        description="Professionelle Ursachenanalyse bei Schimmel unterm Dach – Ihr Münchner Meisterbetrieb hilft."
      />
      <DecisionPressureBanner />
    </div>
  );
}
