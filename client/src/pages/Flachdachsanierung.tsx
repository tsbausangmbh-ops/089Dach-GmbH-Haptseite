import Navbar from "@/components/Navbar";
import AIBeraterSection from "@/components/AIBeraterSection";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Layers, Droplets, Thermometer, Shield, Clock, Award, Phone, CheckCircle2, ArrowRight, Leaf } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, ProductServiceSchema, FAQPageSchema } from "@/components/SEO";
import BackButton from "@/components/BackButton";
import heroImage from '@assets/stock_images/roofer_working_on_ro_cb52da00.jpg';

export default function Flachdachsanierung() {
  const sanierungsArten = [
    { 
      titel: "Bitumen-Sanierung", 
      preis: "ab 85€/m²", 
      vorteile: ["Bewährt seit Jahrzehnten", "Preisgünstig", "Schnelle Verarbeitung"],
      ideal: "Garagen, Carports, kleinere Flächen"
    },
    { 
      titel: "EPDM-Sanierung", 
      preis: "ab 95€/m²", 
      vorteile: ["40+ Jahre Lebensdauer", "UV-beständig", "Elastisch bei Temperaturschwankungen"],
      ideal: "Wohngebäude, große Flächen"
    },
    { 
      titel: "Flüssigkunststoff", 
      preis: "ab 75€/m²", 
      vorteile: ["Nahtlose Abdichtung", "Ideal für Details", "Schnelle Aushärtung"],
      ideal: "Balkone, Terrassen, Anschlüsse"
    },
    { 
      titel: "Komplett mit Dämmung", 
      preis: "ab 180€/m²", 
      vorteile: ["Neue Dämmung nach GEG", "Förderfähig", "Energieersparnis"],
      ideal: "Energetische Sanierung, KfW-Förderung"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Flachdachsanierung München | EPDM & Bitumen ab 85€/m²"
        description="Flachdachsanierung München: Bitumen ab 85€/m², EPDM ab 95€/m², mit Dämmung ab 180€/m². ✓ 10 Jahre Garantie ✓ Förderberatung ✓ Meisterbetrieb. Jetzt anfragen ☎ 089 12621964"
        canonical="https://089dach.de/flachdachsanierung"
        keywords="flachdachsanierung münchen kosten, flachdach sanieren lassen preis, flachdach komplett erneuern kosten, flachdach sanierung epdm münchen, bitumen flachdach sanieren, flachdachsanierung mit dämmung kosten, flachdach abdichtung erneuern, alte flachdach sanieren, flachdachsanierung garage kosten, flachdachsanierung bungalow, flachdachsanierung förderung 2025, flachdachsanierung geg pflicht, warmdach sanieren kosten, umkehrdach sanieren, flachdachsanierung aufbau schichten"
        aiSummary="089Dach GmbH führt Flachdachsanierungen in München durch. Bitumen ab 85€/m², EPDM ab 95€/m², mit Dämmung ab 180€/m². 10 Jahre Garantie. Meisterbetrieb seit 1998. KfW/BAFA Förderberatung. Tel: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Leistungen", url: "/leistungen" }, { name: "Flachdachsanierung", url: "/flachdachsanierung" }]} />
      <ServiceSchema 
        pageName="Flachdachsanierung München"
        services={[
          { name: "Flachdach-Komplettsanierung", description: "Neue Abdichtung mit Bitumen, EPDM oder Kunststoff" },
          { name: "Energetische Flachdachsanierung", description: "Neue Dämmung nach GEG mit bis zu 20% Förderung" },
          { name: "Flachdach-Begrünung", description: "Extensive Dachbegrünung mit Sedum-Pflanzen" }
        ]}
      />
      <ProductServiceSchema 
        name="Flachdachsanierung München"
        description="Professionelle Flachdachsanierung mit EPDM, Bitumen oder Flüssigkunststoff. Optional mit Dämmung und Begrünung."
        priceFrom={85}
        priceTo={220}
        priceUnit="pro m²"
        category="Flachdachsanierung"
      />
      <FAQPageSchema faqs={[
        { question: "Was kostet eine komplette Flachdachsanierung?", answer: "Reine Abdichtung ab 85€/m² (Bitumen) oder 95€/m² (EPDM). Mit neuer Dämmung ab 180€/m². Ein 50m² Flachdach kostet komplett ca. 4.500-10.000€ je nach Aufbau." },
        { question: "Wie lange hält ein saniertes Flachdach?", answer: "Bitumen hält 25-30 Jahre, EPDM und Kunststoff 40+ Jahre. Entscheidend ist die fachgerechte Ausführung der Anschlüsse und regelmäßige Wartung." },
        { question: "Muss ich bei Flachdachsanierung auch dämmen?", answer: "Nicht immer. Bei reiner Abdichtung (keine energetische Maßnahme) gibt es keine Dämmpflicht. Bei Komplettsanierung mit Abriss der alten Schichten greift oft das GEG und Dämmung wird Pflicht." },
        { question: "Kann man ein Flachdach im Winter sanieren?", answer: "Bitumen und Flüssigkunststoff brauchen Temperaturen über 5°C. EPDM kann auch bei Kälte verlegt werden. Wir beraten, welches Material für Ihren Zeitplan passt." },
        { question: "Gibt es Förderung für Flachdachsanierung?", answer: "Ja, wenn Sie gleichzeitig dämmen! BAFA fördert mit 15-20% Zuschuss (bis 6.000€). Voraussetzung: U-Wert ≤ 0,14 W/(m²K) und Energieberater. Wir helfen beim Antrag." }
      ]} />
      <Navbar />
      <AIBeraterSection />
      
      <section className="relative py-20 text-white overflow-hidden min-h-[60vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
          <div className="max-w-5xl text-white">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <Layers className="h-5 w-5 text-primary" />
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Flachdachsanierung München</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 md:mb-6">
              Flachdach sanieren – dauerhaft dicht
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-xl mb-4">
              Ihr Flachdach macht Probleme? Wir sanieren mit hochwertigen Materialien – 
              für ein dichtes Dach, das Jahrzehnte hält.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <a href="/rueckruf">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" data-testid="button-rueckruf-hero">
                  <Phone className="h-5 w-5 mr-2" /> Kostenlose Beratung
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-stone-100 py-2 md:py-3 border-b border-stone-200">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-xs md:text-sm">
            <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-primary" />10 Jahre Garantie</span>
            <span className="flex items-center gap-2"><Award className="h-4 w-4 text-primary" />Meisterbetrieb</span>
            <span className="flex items-center gap-2"><Leaf className="h-4 w-4 text-primary" />Begrünung möglich</span>
          </div>
        </div>
      </div>

      <BackButton />

      <section className="py-4 md:py-6">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-8 text-center">
            Sanierungsarten & Preise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sanierungsArten.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-secondary mb-2">{item.titel}</h3>
                <span className="text-primary font-bold text-xl block mb-4">{item.preis}</span>
                <ul className="space-y-2 mb-4">
                  {item.vorteile.map((v, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                      {v}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground border-t pt-3">
                  <strong>Ideal für:</strong> {item.ideal}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-4 md:py-6 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-6 text-center">
              Wann ist eine Flachdachsanierung nötig?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-bold text-secondary">Typische Anzeichen:</h3>
                <ul className="space-y-3">
                  {[
                    "Wasserpfützen, die nicht ablaufen",
                    "Blasenbildung in der Abdichtung",
                    "Risse in der Oberfläche",
                    "Feuchte Stellen an der Decke darunter",
                    "Abdichtung älter als 25-30 Jahre"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Droplets className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-secondary">Unsere Empfehlung:</h3>
                <div className="bg-primary/10 rounded-xl p-6">
                  <p className="text-muted-foreground mb-4">
                    Bei einer Sanierung lohnt es sich oft, gleich die Dämmung zu erneuern:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      Bis zu 20% Heizkosten sparen
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      Bis zu 6.000€ BAFA-Förderung
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      Wertsteigerung der Immobilie
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 md:py-6">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-6">
              Dachbegrünung – die grüne Alternative
            </h2>
            <p className="text-muted-foreground mb-6">
              Nutzen Sie die Sanierung, um Ihr Flachdach zu begrünen. Extensive Begrünung mit Sedum-Pflanzen ist 
              pflegeleicht, verlängert die Lebensdauer der Abdichtung und wird in München gefördert.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: Leaf, text: "Natürliche Kühlung im Sommer" },
                { icon: Droplets, text: "Regenwasser-Rückhaltung" },
                { icon: Thermometer, text: "Bessere Wärmedämmung" }
              ].map((item, idx) => (
                <div key={idx} className="bg-green-50 rounded-xl p-4 border border-green-200">
                  <item.icon className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <p className="text-green-800 text-sm font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <LeadFunnel />
    </div>
  );
}
