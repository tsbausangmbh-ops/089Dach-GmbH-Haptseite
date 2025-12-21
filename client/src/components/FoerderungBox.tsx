import { Euro, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FoerderungBoxProps {
  title?: string;
  subtitle?: string;
}

export default function FoerderungBox({
  title,
  subtitle = "Bei einer energetischen Dachsanierung können Sie von attraktiven Förderprogrammen profitieren. Als erfahrener Dachdecker in München beraten wir Sie kostenlos zu allen Möglichkeiten:"
}: FoerderungBoxProps) {
  const currentYear = new Date().getFullYear();
  const displayTitle = title || `Förderung für Dachsanierung in München ${currentYear}`;
  const foerderungen = [
    {
      highlight: "bis 20%",
      label: "KfW-Zuschuss"
    },
    {
      highlight: "15%",
      label: "BAFA-Förderung"
    },
    {
      highlight: "1.200 €",
      label: "Steuerbonus/Jahr"
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
                {displayTitle}
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
                  <span className="text-zinc-300 text-sm">{item.label}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <a href="/foerderung-rechner">
                <Button size="lg" className="bg-primary hover:bg-primary/90 font-bold" data-testid="foerderung-rechner-btn">
                  <Calculator className="h-5 w-5 mr-2" /> Förderrechner öffnen
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
