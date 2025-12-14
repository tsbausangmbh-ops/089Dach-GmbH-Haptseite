import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Home, Hammer, ShieldCheck, Ruler, Wrench, Warehouse } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Home className="h-10 w-10 text-primary" />,
      title: "Dachsanierung",
      link: "/leistungen/dachsanierung",
      description: "Weniger heizen, mehr sparen. Eine neue Dämmung macht Ihr Zuhause warm im Winter und kühl im Sommer – und senkt Ihre Energiekosten um bis zu 30%."
    },
    {
      icon: <Warehouse className="h-10 w-10 text-primary" />,
      title: "Steil- & Flachdach",
      link: "/leistungen/bedachungen",
      description: "Ein Dach für Generationen. Ob klassische Ziegel oder modernes Flachdach – wir bauen dauerhaft dicht und optisch perfekt."
    },
    {
      icon: <Wrench className="h-10 w-10 text-primary" />,
      title: "Spenglerei",
      link: "/leistungen/spenglerei",
      description: "Handarbeit mit Präzision. Dachrinnen, Fallrohre und Verblendungen aus Kupfer, Zink oder Alu – passgenau gefertigt in unserer Werkstatt."
    },
    {
      icon: <Hammer className="h-10 w-10 text-primary" />,
      title: "Reparaturen",
      link: "/leistungen/reparaturservice",
      description: "Tropft es durch? Wir finden das Leck und beheben es – schnell und dauerhaft. Damit Sie wieder ruhig schlafen können."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: "Wartung",
      link: "/leistungen/wartung",
      description: "Vorbeugen statt reparieren. Eine jährliche Inspektion findet kleine Schäden, bevor sie teuer werden."
    },
    {
      icon: <Ruler className="h-10 w-10 text-primary" />,
      title: "Dachfenster",
      link: "/leistungen/dachfenster",
      description: "Mehr Licht, mehr Wohnqualität. Neue Dachfenster verwandeln dunkle Räume in helle Lieblingsorte."
    }
  ];

  return (
    <section id="services" className="py-4 md:py-6 bg-stone-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-6 md:mb-10">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">Was wir für Sie tun</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mt-2 mb-4">
            Alles rund ums Dach – aus einer Hand
          </h2>
          <p className="text-muted-foreground text-lg">
            Vom kleinen Leck bis zur kompletten Sanierung. Wir beraten ehrlich und arbeiten sauber.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <a key={index} href={service.link} className="block">
              <Card className="border border-stone-200 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 rounded-xl overflow-hidden group bg-white h-full cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="mb-4 p-3 bg-stone-100 w-fit rounded-xl group-hover:bg-primary/10 transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-heading font-bold text-secondary group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
