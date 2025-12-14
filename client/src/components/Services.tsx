import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Home, Hammer, ShieldCheck, Ruler, Wrench, Warehouse } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Home className="h-10 w-10 text-primary" />,
      title: "Dachsanierung",
      description: "Komplette energetische Sanierung Ihres Daches nach neuesten GEG-Standards für mehr Wohnkomfort und Energieeffizienz."
    },
    {
      icon: <Warehouse className="h-10 w-10 text-primary" />,
      title: "Steil- & Flachdach",
      description: "Fachgerechte Eindeckung von Steildächern mit Ziegeln oder Schiefer sowie dauerhafte Abdichtung von Flachdächern."
    },
    {
      icon: <Wrench className="h-10 w-10 text-primary" />,
      title: "Spenglerei",
      description: "Maßgefertigte Blecharbeiten für Kamineinfassungen, Dachrinnen und Verkleidungen aus unserer eigenen Werkstatt."
    },
    {
      icon: <Hammer className="h-10 w-10 text-primary" />,
      title: "Reparaturen",
      description: "Schnelle Hilfe bei Sturmschäden, undichten Stellen oder kleineren Reparaturen. Wir sind für Sie da."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: "Wartung & Pflege",
      description: "Regelmäßige Dachinspektionen zur Werterhaltung Ihrer Immobilie und Vermeidung teurer Folgeschäden."
    },
    {
      icon: <Ruler className="h-10 w-10 text-primary" />,
      title: "Dachfenster",
      description: "Einbau und Austausch von hochwertigen Dachfenstern für mehr Licht und Luft in Ihrem Dachgeschoss."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">Unsere Expertise</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mt-2 mb-4">
            Handwerkskunst auf höchstem Niveau
          </h2>
          <p className="text-muted-foreground text-lg">
            Als Meisterbetrieb bieten wir Ihnen das gesamte Spektrum der Dach- und Spenglerarbeiten.
            Qualität und Langlebigkeit stehen dabei an erster Stelle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow duration-300 rounded-sm overflow-hidden group">
              <CardHeader className="pb-4">
                <div className="mb-4 p-3 bg-secondary/5 w-fit rounded-sm group-hover:bg-primary/10 transition-colors">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-heading font-bold text-secondary">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
