import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Home, Hammer, ShieldCheck, Ruler, Wrench, Warehouse, AlertTriangle, ArrowRight } from "lucide-react";
import imgSanierung from "@assets/generated_images/realistic_renovated_roof_obermenzing_after.webp";
import imgBedachung from "@assets/generated_images/historic_biberschwanz_roof_with_patina.webp";
import imgSpenglerei from "@assets/generated_images/copper_roof_gutter_detail.webp";
import imgReparatur from "@assets/generated_images/roofer_working_on_red_tile_roof_munich.webp";
import imgNotdienst from "@assets/generated_images/damaged_red_tile_roof_before.webp";
import imgDachfenster from "@assets/generated_images/bright_attic_room_after_skylights.webp";

export default function Services() {
  const services = [
    {
      icon: <Home className="h-10 w-10 text-primary" />,
      title: "Dachsanierung München",
      link: "/leistungen/dachsanierung",
      image: imgSanierung,
      imageAlt: "Saniertes Dach in München-Obermenzing",
      keywords: ["Energetische Sanierung", "Wärmedämmung"],
      description: "Jeder Winter ohne Dämmung kostet Sie bares Geld. Eine Sanierung jetzt senkt Ihre Heizkosten sofort um bis zu 30% – und der Schaden wird nicht größer."
    },
    {
      icon: <Warehouse className="h-10 w-10 text-primary" />,
      title: "Steildach & Flachdach",
      link: "/leistungen/bedachungen",
      image: imgBedachung,
      imageAlt: "Traditionelles Biberschwanz-Ziegeldach",
      keywords: ["Neueindeckung", "Ziegel", "Abdichtung"],
      description: "Alte Ziegel halten nicht ewig. Je länger Sie warten, desto mehr Schäden entstehen darunter. Handeln Sie, bevor es teurer wird."
    },
    {
      icon: <Wrench className="h-10 w-10 text-primary" />,
      title: "Dachrinnen & Spenglerei",
      link: "/leistungen/spenglerei",
      image: imgSpenglerei,
      imageAlt: "Kupfer-Dachrinne und Spenglerarbeiten",
      keywords: ["Kupfer", "Zink", "Kamineinfassung"],
      description: "Verstopfte oder defekte Rinnen führen zu Wasserschäden an der Fassade. Lassen Sie es nicht so weit kommen – wir beheben das Problem schnell."
    },
    {
      icon: <Hammer className="h-10 w-10 text-primary" />,
      title: "Dachreparatur München",
      link: "/leistungen/reparaturservice",
      image: imgReparatur,
      imageAlt: "Dachdecker bei Reparaturarbeiten",
      keywords: ["Leckortung", "Ziegel tauschen", "Soforthilfe"],
      description: "Ein kleines Leck heute wird morgen zum großen Wasserschaden. Je schneller wir es finden, desto günstiger die Reparatur."
    },
    {
      icon: <AlertTriangle className="h-10 w-10 text-red-500" />,
      title: "Sturmschaden & Notdienst",
      link: "/leistungen/notdienst",
      image: imgNotdienst,
      imageAlt: "Sturmschaden an Ziegeldach",
      keywords: ["24/7 Notfall", "Versicherung", "Sofort-Reparatur"],
      description: "Nach einem Sturm zählt jede Stunde. Versicherungen verlangen schnelle Dokumentation – wir sind sofort da und sichern Ihre Ansprüche.",
      highlight: true
    },
    {
      icon: <Ruler className="h-10 w-10 text-primary" />,
      title: "Dachfenster Einbau",
      link: "/leistungen/dachfenster",
      image: imgDachfenster,
      imageAlt: "Heller Dachboden mit Dachfenstern",
      keywords: ["Velux", "Roto", "Austausch"],
      description: "Alte Dachfenster kosten Sie jeden Tag Energie. Neue Fenster machen sofort mehr Licht und senken die Heizrechnung."
    }
  ];

  return (
    <section id="services" className="py-4 md:py-6 bg-stone-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-6 md:mb-10">
          <span className="inline-block bg-primary/10 text-primary font-bold tracking-wider uppercase text-sm px-4 py-1 rounded-full mb-2">Unsere Leistungen</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mt-2 mb-4">
            <strong>Dach- und Spenglerarbeiten</strong> aus Meisterhand
          </h2>
          <p className="text-muted-foreground text-lg">
            Von der Reparatur bis zur Komplettsanierung – je früher wir prüfen, desto günstiger die Lösung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <a key={index} href={service.link} className="block" data-testid={`service-card-${index}`}>
              <Card className={`border shadow-sm hover:shadow-md transition-all duration-300 rounded-xl overflow-hidden group bg-white h-full cursor-pointer ${service.highlight ? 'border-red-200 hover:border-red-300 bg-red-50/30' : 'border-stone-200 hover:border-primary/20'}`}>
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className={`absolute top-3 left-3 p-2 rounded-lg ${service.highlight ? 'bg-red-100' : 'bg-white/90'}`}>
                    {service.icon}
                  </div>
                </div>
                <CardHeader className="pb-2 pt-4">
                  <CardTitle className={`text-xl font-heading font-bold transition-colors ${service.highlight ? 'text-red-700 group-hover:text-red-600' : 'text-secondary group-hover:text-primary'}`}>
                    {service.title}
                  </CardTitle>
                  {service.keywords && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {service.keywords.map((kw, i) => (
                        <span key={i} className="text-xs bg-stone-100 text-muted-foreground px-2 py-0.5 rounded-full">
                          {kw}
                        </span>
                      ))}
                    </div>
                  )}
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="flex items-center gap-1 mt-3 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    Mehr erfahren <ArrowRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        {/* Interne Keyword-Links */}
        <div className="mt-8 pt-6 border-t border-stone-200">
          <p className="text-sm text-muted-foreground mb-3">Weitere Leistungen:</p>
          <div className="flex flex-wrap gap-2">
            <a href="/leistungen/flachdach/" className="text-xs bg-white border border-stone-200 text-muted-foreground px-3 py-1.5 rounded-full hover:border-primary hover:text-primary transition-colors">Flachdach Abdichtung</a>
            <a href="/leistungen/dachbeschichtung/" className="text-xs bg-white border border-stone-200 text-muted-foreground px-3 py-1.5 rounded-full hover:border-primary hover:text-primary transition-colors">Dachbeschichtung</a>
            <a href="/leistungen/dachrinnenreinigung/" className="text-xs bg-white border border-stone-200 text-muted-foreground px-3 py-1.5 rounded-full hover:border-primary hover:text-primary transition-colors">Dachrinnen reinigen</a>
            <a href="/leistungen/energieberatung/" className="text-xs bg-white border border-stone-200 text-muted-foreground px-3 py-1.5 rounded-full hover:border-primary hover:text-primary transition-colors">Energieberatung</a>
            <a href="/leistungen/gaubenbau/" className="text-xs bg-white border border-stone-200 text-muted-foreground px-3 py-1.5 rounded-full hover:border-primary hover:text-primary transition-colors">Gaubenbau</a>
            <a href="/leistungen/wartung/" className="text-xs bg-white border border-stone-200 text-muted-foreground px-3 py-1.5 rounded-full hover:border-primary hover:text-primary transition-colors">Dachwartung</a>
            <a href="/leistungen" className="text-xs bg-primary text-white px-3 py-1.5 rounded-full hover:bg-primary/90 transition-colors font-medium">Alle Leistungen →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
