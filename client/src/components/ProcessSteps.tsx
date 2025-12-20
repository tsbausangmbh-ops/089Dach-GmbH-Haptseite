import { Phone, ClipboardCheck, FileText, Calendar, Hammer, CheckCircle2, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProcessStep {
  step: string;
  title: string;
  desc: string;
  highlight?: string;
}

interface ProcessStepsProps {
  title?: string;
  subtitle?: string;
  steps?: ProcessStep[];
  variant?: "default" | "compact";
}

const defaultSteps: ProcessStep[] = [
  { 
    step: "1", 
    title: "Kostenlose Erstberatung", 
    desc: "Rufen Sie uns an oder fordern Sie einen Rückruf an. Wir besprechen Ihr Anliegen und klären erste Fragen.",
    highlight: "Unverbindlich & kostenlos"
  },
  { 
    step: "2", 
    title: "Vor-Ort-Inspektion", 
    desc: "Unser Meister kommt zu Ihnen und dokumentiert den Zustand Ihres Dachs mit Fotos und Messungen.",
    highlight: "Termin innerhalb von 5 Werktagen"
  },
  { 
    step: "3", 
    title: "Detailliertes Festpreis-Angebot", 
    desc: "Sie erhalten ein transparentes Angebot mit allen Positionen aufgeschlüsselt. Keine versteckten Kosten.",
    highlight: "Festpreis-Garantie"
  },
  { 
    step: "4", 
    title: "Förderberatung & Planung", 
    desc: "Wir prüfen KfW/BAFA-Fördermöglichkeiten und planen den optimalen Zeitraum für Ihr Projekt.",
    highlight: "Bis zu 20% Förderung sichern"
  },
  { 
    step: "5", 
    title: "Professionelle Ausführung", 
    desc: "Unser erfahrenes Team führt die Arbeiten termingerecht und sauber durch. Tägliche Updates auf Wunsch.",
    highlight: "Meisterbetrieb seit 1998"
  },
  { 
    step: "6", 
    title: "Abnahme & Garantie", 
    desc: "Gemeinsame Endabnahme, Dokumentation und Übergabe. Sie erhalten 10 Jahre Garantie auf alle Arbeiten.",
    highlight: "10 Jahre Garantie"
  }
];

export default function ProcessSteps({
  title = "So läuft Ihr Projekt ab – transparent und planbar",
  subtitle = "Von der ersten Beratung bis zur Abnahme: Klare Schritte, feste Termine, keine Überraschungen.",
  steps = defaultSteps,
  variant = "default"
}: ProcessStepsProps) {
  return (
    <section className="py-8 md:py-12 bg-stone-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-4">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
          
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <div className="flex items-center gap-2 text-sm">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-secondary font-medium">Festpreis-Garantie</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-secondary font-medium">Verbindliche Termine</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Award className="h-5 w-5 text-primary" />
              <span className="text-secondary font-medium">10 Jahre Garantie</span>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative"
                data-testid={`process-step-${index}`}
              >
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold shadow-md">
                  {item.step}
                </div>
                
                <div className="pt-4">
                  <h3 className="font-bold text-secondary text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                  
                  {item.highlight && (
                    <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-medium px-3 py-1.5 rounded-full">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      {item.highlight}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <div className="bg-secondary rounded-xl p-6 md:p-8 max-w-3xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              Bereit für den ersten Schritt?
            </h3>
            <p className="text-gray-300 mb-6">
              Kostenlose Beratung ohne Verpflichtung. Wir melden uns innerhalb von 24 Stunden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/rueckruf">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto" data-testid="process-cta-callback">
                  <Phone className="h-5 w-5 mr-2" /> Rückruf anfordern
                </Button>
              </a>
              <a href="/beratung">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary w-full sm:w-auto" data-testid="process-cta-consultation">
                  <Calendar className="h-5 w-5 mr-2" /> Beratungstermin
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
