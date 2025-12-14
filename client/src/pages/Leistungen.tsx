import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Warehouse, Wrench, Hammer, ShieldCheck, Ruler, CheckCircle2, Quote } from "lucide-react";
import heroImage from "@assets/generated_images/modern_house_with_anthracite_roof.png";
import LeadFunnel from "@/components/LeadFunnel";
import SEO, { BreadcrumbSchema } from "@/components/SEO";

export default function Leistungen() {
  const services = [
    {
      id: "dachsanierung",
      icon: <Home className="h-8 w-8 text-primary" />,
      title: "Dachsanierung & Energetik",
      problem: "Ihr Dach ist undicht, schlecht gedämmt oder die Heizkosten steigen Jahr für Jahr?",
      solution: "Wir sanieren Ihr Dach so, dass es nicht nur dicht ist – sondern auch Energie spart.",
      result: "Bis zu 30% weniger Heizkosten und ein Zuhause, das im Winter warm und im Sommer kühl bleibt.",
      story: "Familie Weber aus Dachau zahlte jeden Winter über 400€ für Gas. Nach unserer energetischen Sanierung mit Aufsparrendämmung sind es nur noch 280€ – und das Dachgeschoss ist endlich gemütlich.",
      details: [
        "Energetische Sanierung nach GEG",
        "Aufsparren- & Zwischensparrendämmung",
        "Asbestsanierung nach TRGS 519",
        "KfW-Fördermittelberatung inklusive"
      ]
    },
    {
      id: "steildach",
      icon: <Warehouse className="h-8 w-8 text-primary" />,
      title: "Steildach & Eindeckung",
      problem: "Die Ziegel sind brüchig, Moos überwuchert das Dach und bei jedem Sturm haben Sie Angst?",
      solution: "Wir decken Ihr Dach komplett neu ein – sturmsicher und mit Garantie auf die Ausführung.",
      result: "Ein Dach, das Generationen hält und Ihrem Haus das Aussehen gibt, das es verdient.",
      story: "Das Haus der Müllers in Pasing war 40 Jahre alt, das Dach sah müde aus. Nach der Neueindeckung mit Tondachziegeln sagen die Nachbarn: 'Euer Haus sieht aus wie neu!'",
      details: [
        "Tondachziegel & Biberschwanz",
        "Betondachsteine (haltbar & günstig)",
        "Schiefereindeckungen",
        "Sturmsichere Befestigung"
      ]
    },
    {
      id: "flachdach",
      icon: <Warehouse className="h-8 w-8 text-primary" />,
      title: "Flachdach & Abdichtung",
      problem: "Wasserflecken an der Decke? Der typische Alptraum bei schlecht abgedichteten Flachdächern.",
      solution: "Wir machen Ihr Flachdach 100% dicht – mit hochwertigen Materialien und Liebe zum Detail.",
      result: "Endlich Ruhe. Kein Tropfen mehr, auch nicht nach dem stärksten Regen.",
      story: "Herr Schneider aus Laim hatte jahrelang Pfützen in seiner Garage. Drei andere Firmen hatten 'repariert'. Wir haben die Ursache gefunden und das Problem dauerhaft gelöst.",
      details: [
        "Bitumen- & Kunststoffbahnen",
        "Flüssigkunststoff-Abdichtung",
        "Dachbegrünung (extensiv/intensiv)",
        "Terrassenbeläge & Balkone"
      ]
    },
    {
      id: "spenglerei",
      icon: <Wrench className="h-8 w-8 text-primary" />,
      title: "Spenglerei & Blecharbeiten",
      problem: "Die Dachrinne ist undicht, der Kamin rostet – und die Fassade zeigt schon erste Schäden?",
      solution: "Wir fertigen alle Bauteile maßgenau in unserer eigenen Werkstatt. Keine Kompromisse.",
      result: "Metall, das Jahrzehnte hält und dabei auch noch gut aussieht.",
      story: "Die Kupferrinne am Altbau in Bogenhausen hat unser Meister vor 20 Jahren gefertigt. Letzte Woche haben wir dort das Dach gewartet – die Rinne sieht besser aus als je zuvor.",
      details: [
        "Dachrinnen (Kupfer, Zink, Alu)",
        "Kamineinfassungen",
        "Gaubenverkleidungen",
        "Mauerabdeckungen"
      ]
    },
    {
      id: "dachfenster",
      icon: <Ruler className="h-8 w-8 text-primary" />,
      title: "Dachfenster & Lichtlösungen",
      problem: "Das Dachgeschoss ist dunkel, stickig im Sommer und die alten Fenster beschlagen ständig?",
      solution: "Wir tauschen alte Dachfenster oder bauen neue ein – sauber, schnell, ohne Dreck.",
      result: "Mehr Licht, bessere Luft und ein Fenster, das auch im Winter warm hält.",
      story: "Das Kinderzimmer unterm Dach war dunkel und ungemütlich. Nach dem Einbau von zwei großen Velux-Fenstern fragt der kleine Tim jeden Tag: 'Darf ich oben spielen?'",
      details: [
        "Velux & Roto Dachfenster",
        "Austausch ohne Dreck",
        "Sonnenschutz & Rollläden",
        "Lichtkuppeln für Flachdächer"
      ]
    },
    {
      id: "wartung",
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: "Wartung & Reparatur",
      problem: "Sie wissen nicht, ob Ihr Dach noch in Ordnung ist? Kleine Schäden werden schnell zu großen Problemen.",
      solution: "Wir prüfen Ihr Dach jährlich und reparieren kleine Schäden, bevor sie teuer werden.",
      result: "Sicherheit und Planbarkeit. Sie wissen immer, wie es um Ihr Dach steht.",
      story: "Frau Huber lässt ihr Dach seit 8 Jahren von uns warten. In dieser Zeit haben wir 3 kleine Schäden behoben, die unentdeckt jeweils mehrere Tausend Euro gekostet hätten.",
      details: [
        "Jährliche Dachinspektion",
        "Rinnenreinigung",
        "Sturmschaden-Soforthilfe",
        "4h-Notdienst"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title="Leistungen Dachdecker München | Steildach, Flachdach & Wartung"
        description="Komplette Dachlösungen: Dachneubau, Sanierung, Abdichtung, Wartung und Spenglerarbeiten für Privat und Gewerbe in München und Umgebung."
        canonical="https://089dach.de/leistungen"
        keywords="dachdecker leistungen münchen, flachdach reparatur münchen, dachwartung münchen, dachsanierung, steildach münchen"
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Leistungen", url: "/leistungen" }]} />
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] min-h-[350px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Unsere Leistungen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply" />
        
        {/* Hero Logo Overlay */}
        <div className="absolute right-0 bottom-0 h-full w-1/2 opacity-10 pointer-events-none hidden md:flex items-center justify-center overflow-hidden">
             <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 800 800" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full max-w-none transform rotate-12 scale-150"
          >
            <g fill="currentColor" className="text-white">
              <rect x="100" y="200" width="200" height="200" rx="20" fill="currentColor" />
              <text x="200" y="340" fontSize="120" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" fill="black">089</text>
              <text x="340" y="340" fontSize="120" fontWeight="bold" fontFamily="sans-serif" fill="currentColor">DACH</text>
              <text x="345" y="390" fontSize="30" fontWeight="medium" fontFamily="sans-serif" letterSpacing="5" fill="currentColor">GMBH MÜNCHEN</text>
            </g>
          </svg>
        </div>
        
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Unsere Dachdecker-Leistungen in München
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Wir kümmern uns um Ihr Dach, als wäre es unser eigenes. Von der kleinen Reparatur bis zur kompletten Sanierung – alles aus einer Hand.
          </p>
        </div>
      </div>

      {/* Services List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-start border-b border-gray-100 pb-16 last:border-0`}
              >
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-4 rounded-sm">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-secondary">{service.title}</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-red-50 border-l-4 border-primary p-4 rounded-r-sm">
                      <p className="text-secondary font-medium">
                        <span className="text-primary font-bold">Das Problem:</span> {service.problem}
                      </p>
                    </div>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-sm">
                      <p className="text-secondary font-medium">
                        <span className="text-blue-600 font-bold">Unsere Lösung:</span> {service.solution}
                      </p>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-sm">
                      <p className="text-secondary font-medium">
                        <span className="text-green-600 font-bold">Ihr Ergebnis:</span> {service.result}
                      </p>
                    </div>
                  </div>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-secondary font-medium">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <Button variant="outline" className="mt-4 border-secondary text-secondary hover:bg-secondary hover:text-white rounded-sm" data-testid={`button-beratung-${service.id}`}>
                    Kostenlose Beratung anfordern
                  </Button>
                </div>
                
                <div className="w-full lg:w-2/5 space-y-4">
                  <div className="bg-secondary/5 rounded-sm p-6 border border-secondary/10">
                    <div className="flex items-start gap-3 mb-4">
                      <Quote className="h-8 w-8 text-primary flex-shrink-0" />
                      <p className="text-secondary italic leading-relaxed">
                        {service.story}
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-sm p-6 border border-gray-100 text-center">
                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-sm">
                      {service.icon}
                    </div>
                    <h3 className="font-heading font-bold text-lg text-secondary">Haben Sie ein ähnliches Problem?</h3>
                    <p className="text-sm text-muted-foreground mt-2 mb-4">Wir finden gemeinsam die beste Lösung für Sie.</p>
                    <Button size="sm" className="bg-primary hover:bg-primary/90 text-white rounded-sm w-full" data-testid={`button-termin-${service.id}`}>
                      Jetzt Termin vereinbaren
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <LeadFunnel />

      {/* CTA Section - Removed as it's redundant with LeadFunnel, or keep as a secondary one? Removing for cleaner look since LeadFunnel is strong */}
      {/* 
      <section className="bg-secondary text-white py-16">
        ...
      </section>
      */}

      <Contact />
      <Footer />
    </div>
  );
}
