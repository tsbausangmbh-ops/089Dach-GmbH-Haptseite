import { Euro, Percent, FileText, Gift, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextWithKeywordLinks } from "@/components/KeywordLink";

interface FoerderungBoxProps {
  title?: string;
  subtitle?: string;
}

export default function FoerderungBox({
  title = "Förderung für Dachsanierung in München 2025",
  subtitle = "Bei einer energetischen Dachsanierung können Sie von attraktiven Förderprogrammen profitieren:"
}: FoerderungBoxProps) {
  const foerderungen = [
    {
      icon: Euro,
      title: "KfW-Förderung",
      description: "Bis zu 20% Zuschuss für energetische Sanierungsmaßnahmen",
      highlight: "bis 20%"
    },
    {
      icon: Gift,
      title: "BAFA-Förderung",
      description: "Zuschüsse für Einzelmaßnahmen an der Gebäudehülle",
      highlight: "Zuschuss"
    },
    {
      icon: Percent,
      title: "Steuerbonus",
      description: "20% der Handwerkerkosten absetzbar (max. 1.200 €/Jahr)",
      highlight: "1.200 €"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="bg-white rounded-2xl shadow-xl border border-green-100 overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-green-500 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-white/20 p-2 rounded-lg">
                <Euro className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">
                {title}
              </h2>
            </div>
            <p className="text-green-100 text-lg">
              {subtitle}
            </p>
          </div>

          <div className="p-6 md:p-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {foerderungen.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-green-50 rounded-xl p-6 border border-green-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <item.icon className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                      {item.highlight}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-stone-50 rounded-xl p-6 border border-stone-200">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl flex-shrink-0">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-secondary mb-2">Unser Förder-Service</h3>
                  <p className="text-muted-foreground mb-4">
                    <TextWithKeywordLinks>
                      Wir beraten Sie kostenlos zu allen Fördermöglichkeiten und vermitteln Sie an zertifizierte Energieberater aus unserem Partnernetzwerk. So sichern Sie sich die maximale Förderung für Ihre Dachsanierung.
                    </TextWithKeywordLinks>
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href="/beratung">
                      <Button className="bg-primary hover:bg-primary/90" data-testid="foerderung-beratung-btn">
                        <ArrowRight className="h-4 w-4 mr-2" /> Förderberatung anfragen
                      </Button>
                    </a>
                    <a href="/rueckruf">
                      <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" data-testid="foerderung-rueckruf-btn">
                        <Phone className="h-4 w-4 mr-2" /> Rückruf vereinbaren
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
