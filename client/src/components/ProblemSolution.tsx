import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ThermometerSnowflake, Droplets, Euro, Users } from "lucide-react";

interface ProblemSolutionProps {
  onOpenFunnel?: () => void;
}

export default function ProblemSolution({ onOpenFunnel }: ProblemSolutionProps) {
  const problems = [
    {
      icon: <ThermometerSnowflake className="h-6 w-6" />,
      problem: "Hohe Heizkosten?",
      pain: "Sie heizen und heizen – aber es bleibt kalt. Die Wärme verschwindet durchs Dach.",
      solution: "Dachsanierung mit Dämmung",
      result: "Bis zu 30% weniger Heizkosten. Im Winter warm, im Sommer kühl.",
      example: "Familie Huber, Pasing: Heizkosten von 3.200€ auf 2.100€ gesenkt.",
      cta: "Heizkosten senken"
    },
    {
      icon: <Droplets className="h-6 w-6" />,
      problem: "Feuchte Flecken?",
      pain: "Ein Wasserfleck an der Decke. Er wird größer. Woher kommt das Wasser?",
      solution: "Leckortung & Reparatur",
      result: "Wir finden die Ursache und beheben sie. Einmal richtig – dann Ruhe.",
      example: "Herr Schmitt, Moosach: 3 Handwerker scheiterten. Wir fanden das Leck.",
      cta: "Leck finden"
    },
    {
      icon: <Euro className="h-6 w-6" />,
      problem: "Was wird das kosten?",
      pain: "Die Angst vor hohen Kosten hält viele davon ab, überhaupt anzurufen.",
      solution: "Kostenlose Beratung + Festpreis",
      result: "Sie wissen vorher genau, was es kostet. Keine Überraschungen.",
      example: "Familie Weber: Befürchtete 50.000€. Tatsächlich 22.000€ mit Förderung.",
      cta: "Preis erfahren"
    }
  ];

  return (
    <section className="py-8 bg-stone-100">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">Das kennen Sie?</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mt-2 mb-4">
            Typische Probleme – und wie wir sie lösen
          </h2>
        </div>

        <div className="space-y-6">
          {problems.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-sm shadow-sm border border-stone-200 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[280px]">
                
                <div className="p-8 bg-stone-50 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-stone-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-red-100 text-red-600 rounded-sm">
                      {item.icon}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-600">Problem</span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-secondary mb-3">
                    {item.problem}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.pain}
                  </p>
                </div>

                <div className="p-8 bg-green-50/50 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-green-100 text-green-700 rounded-sm">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-green-700">Lösung</span>
                  </div>
                  <h4 className="text-2xl font-heading font-bold text-secondary mb-3">
                    {item.solution}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {item.result}
                  </p>
                  <div className="flex items-start gap-2 bg-white border border-green-200 rounded-sm p-3 mb-4">
                    <Users className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-secondary">Beispiel:</span> {item.example}
                    </p>
                  </div>
                  <Button 
                    className="bg-primary hover:bg-primary/90 text-white font-bold rounded-sm w-fit"
                    onClick={onOpenFunnel}
                    data-testid={`button-problem-cta-${index}`}
                  >
                    {item.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Anderes Anliegen? Wir beraten Sie gerne.
          </p>
          <Button 
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-white font-bold px-8 py-6 rounded-sm"
            onClick={onOpenFunnel}
            data-testid="button-problem-main-cta"
          >
            Jetzt Beratung anfragen
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

      </div>
    </section>
  );
}
