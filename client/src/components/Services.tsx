import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Home, Hammer, ShieldCheck, Ruler, Wrench, Warehouse } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Home className="h-10 w-10 text-primary" />,
      title: "Dachsanierung",
      description: "Schluss mit kalten Füßen und hohen Heizkosten. Eine energetische Sanierung macht Ihr Zuhause behaglich – im Winter warm, im Sommer kühl. Und Ihr Geldbeutel freut sich auch."
    },
    {
      icon: <Warehouse className="h-10 w-10 text-primary" />,
      title: "Steil- & Flachdach",
      description: "Ob traditionelle Ziegel oder modernes Flachdach – wir geben Ihrem Haus die Krone, die es verdient. Dauerhaft dicht, optisch perfekt, gebaut für Generationen."
    },
    {
      icon: <Wrench className="h-10 w-10 text-primary" />,
      title: "Spenglerei",
      description: "Kupfer, Zink, Aluminium – in unserer Werkstatt entstehen Einzelstücke mit Charakter. Dachrinnen, die nicht nur funktionieren, sondern Ihr Haus verschönern."
    },
    {
      icon: <Hammer className="h-10 w-10 text-primary" />,
      title: "Reparaturen",
      description: "Sturm gehabt? Tropft es von der Decke? Rufen Sie an. Wir kommen schnell und lösen das Problem – oft am selben Tag. Damit Sie wieder ruhig schlafen können."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: "Wartung & Pflege",
      description: "Kleine Schäden werden teuer, wenn man sie ignoriert. Eine jährliche Inspektion kostet wenig, spart viel – und gibt Ihnen die Sicherheit, dass alles in Ordnung ist."
    },
    {
      icon: <Ruler className="h-10 w-10 text-primary" />,
      title: "Dachfenster",
      description: "Mehr Licht verändert alles. Ein neues Dachfenster macht aus dem dunklen Speicher einen hellen Lieblingsraum. Wir zeigen Ihnen die Möglichkeiten."
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
