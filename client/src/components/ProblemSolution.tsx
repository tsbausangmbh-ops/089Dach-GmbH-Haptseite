import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle, CheckCircle2, ThermometerSnowflake, Droplets, Euro, Clock, Users, Heart } from "lucide-react";

interface ProblemSolutionProps {
  onOpenFunnel?: () => void;
}

export default function ProblemSolution({ onOpenFunnel }: ProblemSolutionProps) {
  const problems = [
    {
      icon: <ThermometerSnowflake className="h-8 w-8" />,
      problem: "Im Winter kalt, im Sommer heiß?",
      pain: "Sie heizen und heizen – aber oben bleibt es kalt. Die Heizkosten explodieren, während Sie frieren.",
      solution: "Energetische Dachsanierung",
      result: "Bis zu 30% weniger Heizkosten und ein Zuhause, das endlich warm bleibt.",
      example: "Familie Huber aus Pasing zahlte 3.200€ Heizkosten im Jahr. Nach der Sanierung nur noch 2.100€. Die Investition hat sich in 5 Jahren amortisiert.",
      cta: "So sparen auch Sie"
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      problem: "Feuchte Flecken an der Decke?",
      pain: "Erst ein kleiner Fleck. Dann wird er größer. Jeder Regen wird zur Angst – was kostet das? Wie schlimm ist es wirklich?",
      solution: "Professionelle Leckortung & Reparatur",
      result: "Wir finden die Ursache, nicht nur das Symptom. Einmal richtig repariert – und Sie haben Ruhe.",
      example: "Herr Schmitt aus Moosach hatte 3 Handwerker, die das Leck nicht fanden. Wir haben es beim ersten Besuch lokalisiert und dauerhaft behoben.",
      cta: "Leck finden lassen"
    },
    {
      icon: <Euro className="h-8 w-8" />,
      problem: "Angst vor versteckten Kosten?",
      pain: "'Das wird teuer' – dieser Gedanke hält viele davon ab, überhaupt anzurufen. Die Unsicherheit ist oft schlimmer als das Problem selbst.",
      solution: "Transparente Festpreise",
      result: "Sie wissen vorher genau, was es kostet. Keine bösen Überraschungen, keine Nachforderungen.",
      example: "Familie Weber dachte, eine Sanierung kostet 50.000€. Nach unserer kostenlosen Beratung: 28.000€ – mit KfW-Förderung nur 22.000€.",
      cta: "Kostenloses Angebot"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">Kennen Sie das?</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mt-2 mb-4">
            Diese Sorgen haben viele unserer Kunden
          </h2>
          <p className="text-muted-foreground text-lg">
            Bevor sie uns angerufen haben. Heute schlafen sie wieder ruhig.
          </p>
        </div>

        <div className="space-y-16">
          {problems.map((item, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="bg-red-50 border border-red-100 rounded-sm p-8 mb-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-red-100 text-red-600 rounded-sm shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-secondary mb-2">
                        {item.problem}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.pain}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-red-600 font-medium">
                    <AlertTriangle className="h-5 w-5" />
                    Je länger Sie warten, desto teurer wird es.
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="bg-green-50 border border-green-100 rounded-sm p-8">
                  <div className="flex items-center gap-2 text-green-700 font-bold uppercase text-sm mb-4">
                    <CheckCircle2 className="h-5 w-5" />
                    Die Lösung
                  </div>
                  
                  <h4 className="text-xl font-heading font-bold text-secondary mb-3">
                    {item.solution}
                  </h4>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {item.result}
                  </p>

                  <div className="bg-white border border-green-200 rounded-sm p-4 mb-6">
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-secondary mb-1">Echtes Beispiel:</p>
                        <p className="text-sm text-muted-foreground italic">
                          {item.example}
                        </p>
                      </div>
                    </div>
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

        <div className="mt-20 bg-secondary rounded-sm p-8 md:p-12 text-white text-center">
          <Heart className="h-12 w-12 text-primary mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Wir verstehen Ihre Situation
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Ein Dachproblem ist stressig. Die Unsicherheit, die Kosten, die vielen Fragen. 
            Deshalb machen wir es Ihnen so einfach wie möglich: <strong className="text-white">Ein Anruf, klare Antworten, keine Verpflichtung.</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-10 py-7 rounded-sm"
              onClick={onOpenFunnel}
              data-testid="button-problem-main-cta"
            >
              Jetzt kostenlos beraten lassen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-400" />
              Kostenlose Erstberatung
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-400" />
              Antwort in 24 Stunden
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-400" />
              Unverbindliches Angebot
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
