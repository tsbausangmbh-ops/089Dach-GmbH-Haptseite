import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Warehouse, Wrench, Hammer, ShieldCheck, Ruler, CheckCircle2 } from "lucide-react";
import heroImage from "@assets/generated_images/modern_house_with_anthracite_roof.png";

export default function Leistungen() {
  const services = [
    {
      id: "dachsanierung",
      icon: <Home className="h-8 w-8 text-primary" />,
      title: "Dachsanierung & Energetik",
      description: "Eine professionelle Dachsanierung steigert nicht nur den Wert Ihrer Immobilie, sondern senkt auch Ihre Energiekosten nachhaltig.",
      details: [
        "Energetische Sanierung nach GEG (Gebäudeenergiegesetz)",
        "Aufsparrendämmung, Zwischensparrendämmung",
        "Asbestsanierung nach TRGS 519",
        "Wertsteigerung Ihrer Immobilie"
      ]
    },
    {
      id: "steildach",
      icon: <Warehouse className="h-8 w-8 text-primary" />,
      title: "Steildach & Eindeckung",
      description: "Das Steildach ist die Krone Ihres Hauses. Wir bieten Ihnen eine Vielzahl an Gestaltungsmöglichkeiten mit hochwertigen Materialien.",
      details: [
        "Tondachziegel (Erkunder, Biberschwanz, etc.)",
        "Betondachsteine",
        "Schiefereindeckungen",
        "Sturmsichere Befestigungssysteme"
      ]
    },
    {
      id: "flachdach",
      icon: <Warehouse className="h-8 w-8 text-primary" />,
      title: "Flachdach & Abdichtung",
      description: "Moderne Flachdächer bieten vielfältige Nutzungsmöglichkeiten. Wir sorgen dafür, dass sie dauerhaft dicht bleiben.",
      details: [
        "Abdichtung mit Bitumen- oder Kunststoffbahnen",
        "Flüssigkunststoffabdichtungen",
        "Dachbegrünung (extensiv & intensiv)",
        "Nutzbeläge für Terrassen und Balkone"
      ]
    },
    {
      id: "spenglerei",
      icon: <Wrench className="h-8 w-8 text-primary" />,
      title: "Spenglerei & Blecharbeiten",
      description: "Metall am Dach ist langlebig und wartungsfrei. In unserer eigenen Werkstatt fertigen wir passgenaue Bauteile.",
      details: [
        "Dachrinnen und Fallrohre (Kupfer, Zink, Alu)",
        "Kamineinfassungen und -verkleidungen",
        "Gaubenverkleidungen",
        "Mauerabdeckungen und Fensterbleche"
      ]
    },
    {
      id: "dachfenster",
      icon: <Ruler className="h-8 w-8 text-primary" />,
      title: "Dachfenster & Lichtlösungen",
      description: "Bringen Sie Licht ins Dunkel. Wir bauen neue Dachfenster ein oder tauschen Ihre alten Fenster gegen moderne Energiesparfenster.",
      details: [
        "Einbau von Velux und Roto Dachfenstern",
        "Austauschfenster ohne Brecharbeiten",
        "Sonnenschutz und Rollläden",
        "Lichtkuppeln für Flachdächer"
      ]
    },
    {
      id: "wartung",
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: "Wartung & Reparatur",
      description: "Vorsorge ist besser als Nachsorge. Regelmäßige Wartung schützt vor teuren Folgeschäden und verlängert die Lebensdauer.",
      details: [
        "Jährliche Dachinspektion",
        "Reinigung von Dachrinnen",
        "Sturmschadenbeseitigung",
        "Notdienst bei akuten Schäden"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Unsere Leistungen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Unsere Leistungen
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Qualitätshandwerk aus München. Von der kleinen Reparatur bis zur kompletten Dachsanierung – wir sind Ihr Partner.
          </p>
        </div>
      </div>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-start border-b border-gray-100 pb-12 last:border-0`}
              >
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-4 rounded-sm">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-secondary">{service.title}</h2>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-secondary font-medium">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <Button variant="outline" className="mt-4 border-secondary text-secondary hover:bg-secondary hover:text-white rounded-sm">
                    Mehr dazu anfragen
                  </Button>
                </div>
                
                {/* Placeholder for specific service images if we had them, using generic styling for now */}
                <div className="w-full lg:w-1/3 bg-gray-50 rounded-sm p-8 flex items-center justify-center border border-gray-100 shadow-sm">
                   <div className="text-center">
                      <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-sm">
                        {service.icon}
                      </div>
                      <h3 className="font-heading font-bold text-lg text-secondary">Interesse an {service.title}?</h3>
                      <p className="text-sm text-muted-foreground mt-2 mb-4">Kontaktieren Sie uns für ein unverbindliches Angebot.</p>
                      <Button size="sm" className="bg-primary hover:bg-primary/90 text-white rounded-sm w-full">
                        Jetzt anfragen
                      </Button>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">
            Nicht das Passende gefunden?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Kein Problem. Als Meisterbetrieb finden wir für fast jede Herausforderung am Dach eine Lösung.
            Sprechen Sie uns einfach an.
          </p>
          <Button size="lg" className="bg-white text-secondary hover:bg-gray-100 px-8 py-6 text-lg rounded-sm font-bold">
            Individuelle Anfrage stellen
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}
