import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, AlertTriangle, Shield, FileText, Truck, Euro, Award } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, FAQPageSchema, ProductServiceSchema } from "@/components/SEO";
import RelatedServices from "@/components/RelatedServices";
import { Link } from "wouter";
import heroImage from '@assets/stock_images/roofer_working_on_ro_cb52da00.jpg';

export default function EternitDach() {
  const ablauf = [
    { icon: FileText, title: "1. Begutachtung", text: "Kostenlose Vor-Ort-Besichtigung und Asbesttest" },
    { icon: Shield, title: "2. Genehmigung", text: "Anmeldung beim Gewerbeaufsichtsamt" },
    { icon: Award, title: "3. Fachgerechte Demontage", text: "Nach TRGS 519 durch zertifizierte Mitarbeiter" },
    { icon: Truck, title: "4. Entsorgung", text: "Sachgemäße Entsorgung mit Entsorgungsnachweis" }
  ];

  const leistungen = [
    "Asbest-Probenahme und Laboranalyse",
    "Anmeldung beim Gewerbeaufsichtsamt",
    "Fachgerechte Demontage nach TRGS 519",
    "Sachgemäße Verpackung und Entsorgung",
    "Neueindeckung mit modernen Materialien",
    "Komplett-Service aus einer Hand"
  ];

  const faqs = [
    { question: "Wie erkenne ich, ob mein Dach Asbest enthält?", answer: "Eternit-Dächer vor 1993 enthalten oft Asbest. Typisch sind wellige Faserzementplatten in grau. Sicherheit bringt nur eine Laboranalyse – wir entnehmen Proben und lassen sie testen." },
    { question: "Was kostet die Eternit-Dachsanierung?", answer: "Die Kosten setzen sich zusammen aus: Demontage (15-25€/m²), Entsorgung (30-50€/m²), Neueindeckung (80-150€/m²). Für ein 100m²-Dach rechnen Sie mit 12.500-22.500€ komplett." },
    { question: "Ist ein Eternit-Dach gefährlich?", answer: "Solange das Material intakt ist und nicht bearbeitet wird, besteht keine akute Gefahr. Problematisch wird es bei Verwitterung, Bruch oder Bearbeitung – dann werden Fasern freigesetzt." },
    { question: "Muss ich mein Eternit-Dach sanieren?", answer: "Eine Sanierungspflicht gibt es nur bei öffentlichen Gebäuden. Bei Privatgebäuden empfehlen wir die Sanierung bei starker Verwitterung, vor Verkauf oder wenn Arbeiten am Dach nötig sind." },
    { question: "Gibt es Förderung für Asbestsanierung?", answer: "Die KfW fördert die energetische Sanierung inkl. Neueindeckung. Manche Kommunen haben zusätzliche Förderprogramme für Asbestsanierung. Wir beraten Sie zu den Möglichkeiten." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Eternit Dach sanieren München | Asbest Entsorgung | 089Dach Meisterbetrieb"
        description="Eternit Dach sanieren in München ✓ Zertifizierte Asbestentsorgung nach TRGS 519 ✓ Komplett-Service mit Neueindeckung ✓ Meisterbetrieb ✓ Kostenlose Beratung!"
        canonical="/eternit-dach"
        keywords="eternit dach sanieren münchen, asbest dach entsorgen, asbestsanierung dach kosten, eternit dach erneuern, faserzement dach sanierung, asbest dachplatten entsorgen, eternit austauschen, asbest dachsanierung förderung, wellplatten asbest entsorgen"
        aiSummary="Eternit Dach sanieren in München durch 089Dach GmbH. Zertifizierte Asbestentsorgung nach TRGS 519, Komplett-Service mit Neueindeckung. Demontage 15-25€/m², Entsorgung 30-50€/m². Tel: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Eternit Dach sanieren", url: "/eternit-dach" }]} />
      <ServiceSchema 
        pageName="Eternit Dach sanieren München"
        services={[
          { name: "Asbesttest", description: "Probenahme und Laboranalyse auf Asbestgehalt" },
          { name: "Fachgerechte Demontage", description: "Zertifizierte Entfernung nach TRGS 519" },
          { name: "Neueindeckung", description: "Moderne, asbestfreie Dacheindeckung" }
        ]}
      />
      <ProductServiceSchema 
        name="Eternit Dach Sanierung München"
        description="Professionelle Eternit/Asbest-Dachsanierung mit zertifizierter Entsorgung und Neueindeckung. Komplett-Service aus einer Hand."
        priceFrom={125}
        priceTo={225}
        category="Dachsanierung"
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
              <Shield className="w-5 h-5" />
              <span className="font-medium">Zertifiziert nach TRGS 519</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"><strong>Eternit Dach sanieren</strong> München</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-7xl mx-auto">
              Fachgerechte Asbestsanierung mit zertifizierter Entsorgung – 
              sicher für Sie und die Umwelt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf">
                <Button size="lg" className="bg-white text-orange-700 hover:bg-orange-50 text-lg px-8 py-6" data-testid="button-hero-callback">
                  <Phone className="mr-2 h-5 w-5" />
                  Kostenlose Beratung
                </Button>
              </Link>
              <Link href="/beratung"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online">24h Online Termin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-3 bg-yellow-50 border-b border-yellow-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 text-yellow-800">
            <AlertTriangle className="w-5 h-5" />
            <p className="font-medium">
              Asbest ist gesundheitsgefährdend! Niemals selbst bearbeiten oder entsorgen.
            </p>
          </div>
        </div>
      </section>

      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Unser Ablauf bei der Eternit-Sanierung
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ablauf.map((schritt, index) => (
                <div key={index} className="text-center p-6 bg-orange-50 rounded-xl">
                  <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <schritt.icon className="w-7 h-7 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">{schritt.title}</h3>
                  <p className="text-slate-600 text-sm">{schritt.text}</p>
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
              Kosten Eternit-Dachsanierung
            </h2>
            <p className="text-center text-slate-600 mb-12">
              Alle Kosten im Überblick – transparent und nachvollziehbar
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <p className="text-sm text-slate-500 mb-1">Demontage</p>
                  <p className="text-2xl font-bold text-orange-600">15-25€/m²</p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <p className="text-sm text-slate-500 mb-1">Entsorgung</p>
                  <p className="text-2xl font-bold text-orange-600">30-50€/m²</p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <p className="text-sm text-slate-500 mb-1">Neueindeckung</p>
                  <p className="text-2xl font-bold text-orange-600">80-150€/m²</p>
                </div>
              </div>
              <div className="bg-orange-50 rounded-xl p-6 text-center">
                <p className="text-lg font-semibold text-slate-800 mb-2">Beispiel: 100m² Dach komplett</p>
                <p className="text-3xl font-bold text-orange-600">12.500 - 22.500€</p>
                <p className="text-slate-600 text-sm mt-2">inkl. Demontage, Entsorgung und Neueindeckung</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Unsere Leistungen
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {leistungen.map((leistung, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-slate-700">{leistung}</span>
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
              Häufige Fragen zur Eternit-Sanierung
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

      <section className="py-6 bg-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Eternit-Dach sanieren lassen?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Kostenlose Vor-Ort-Besichtigung und unverbindliches Angebot
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf">
                <Button size="lg" className="bg-white text-orange-700 hover:bg-orange-50 text-lg px-8" data-testid="button-cta-callback">
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
      <RelatedServices currentPage="eternit" />
      <Footer />
    </div>
  );
}
