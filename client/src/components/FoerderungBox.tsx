import { Euro, ArrowRight, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <section className="py-6 md:py-8 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="bg-zinc-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-white/20 p-2 rounded-lg">
                <Euro className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">
                {title}
              </h2>
            </div>
            <p className="text-zinc-300 text-lg mb-6">
              {subtitle}
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {foerderungen.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-zinc-700 rounded-xl p-4 text-center"
                >
                  <span className="text-2xl font-bold text-primary block mb-1">
                    {item.highlight}
                  </span>
                  <span className="text-zinc-300 text-sm">{item.title}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="/foerderung-rechner">
                <Button className="bg-primary hover:bg-primary/90" data-testid="foerderung-rechner-btn">
                  <Calculator className="h-4 w-4 mr-2" /> Ersparnis berechnen
                </Button>
              </a>
              <a href="/beratung">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-zinc-800" data-testid="foerderung-beratung-btn">
                  <ArrowRight className="h-4 w-4 mr-2" /> Förderberatung anfragen
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
