import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ThermometerSnowflake, Droplets, Euro, Users } from "lucide-react";

interface ProblemSolutionProps {
  onOpenFunnel?: () => void;
}

export default function ProblemSolution({ onOpenFunnel }: ProblemSolutionProps) {
  const problems = [
    {
      icon: <ThermometerSnowflake className="h-6 w-6" />,
      problem: "Im Winter kalt, im Sommer heiß?",
      pain: "Sie heizen und heizen – aber oben bleibt es kalt. Die Heizkosten steigen jedes Jahr.",
      solution: "Energetische Dachsanierung",
      result: "Bis zu 30% weniger Heizkosten. Ein Zuhause, das endlich warm bleibt.",
      example: "Familie Huber, Pasing: Von 3.200€ auf 2.100€ Heizkosten pro Jahr.",
      cta: "Heizkosten senken"
    },
    {
      icon: <Droplets className="h-6 w-6" />,
      problem: "Feuchte Flecken an der Decke?",
      pain: "Erst ein kleiner Fleck, dann wird er größer. Jeder Regen wird zur Sorge.",
      solution: "Professionelle Leckortung",
      result: "Wir finden die Ursache und beheben sie dauerhaft. Einmal richtig – dann Ruhe.",
      example: "Herr Schmitt, Moosach: 3 Handwerker scheiterten. Wir fanden das Leck sofort.",
      cta: "Leck finden"
    },
    {
      icon: <Euro className="h-6 w-6" />,
      problem: "Angst vor hohen Kosten?",
      pain: "Der Gedanke 'Das wird teuer' hält viele davon ab, überhaupt anzurufen.",
      solution: "Transparente Festpreise",
      result: "Sie wissen vorher genau, was es kostet. Keine versteckten Nachforderungen.",
      example: "Familie Weber: Befürchtete 50.000€. Tatsächlich 22.000€ inkl. Förderung.",
      cta: "Preis erfahren"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">Kennen Sie das?</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mt-2 mb-4">
            Diese Sorgen hatten auch unsere Kunden
          </h2>
          <p className="text-muted-foreground text-lg">
            Bevor sie uns angerufen haben. Heute schlafen sie wieder ruhig.
          </p>
        </div>

        <div className="space-y-8">
          {problems.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-sm shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                
                <div className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-red-100 text-red-600 rounded-sm">
                      {item.icon}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-600">Das Problem</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-secondary mb-3">
                    {item.problem}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.pain}
                  </p>
                </div>

                <div className="p-8 lg:p-10 bg-green-50/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-green-100 text-green-700 rounded-sm">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-green-700">Unsere Lösung</span>
                  </div>
                  <h4 className="text-xl font-heading font-bold text-secondary mb-3">
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
                    className="bg-primary hover:bg-primary/90 text-white font-bold rounded-sm"
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

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Sie haben ein anderes Anliegen? Wir hören Ihnen zu.
          </p>
          <Button 
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-white font-bold text-lg px-10 py-6 rounded-sm"
            onClick={onOpenFunnel}
            data-testid="button-problem-main-cta"
          >
            Kostenlose Beratung anfragen
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Antwort innerhalb von 24 Stunden • Unverbindlich
          </p>
        </div>

      </div>
    </section>
  );
}
