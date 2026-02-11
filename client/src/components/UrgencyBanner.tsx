import { AlertTriangle, Clock, TrendingUp, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface UrgencyBannerProps {
  variant?: "warning" | "info" | "action";
  title?: string;
  message?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function UrgencyBanner({
  variant = "warning",
  title = "Kleine Schäden werden schnell teuer",
  message = "Erfahrungswert: Unbehandelte Dachschäden verursachen durchschnittlich 3x höhere Folgekosten. Je früher wir prüfen, desto günstiger die Lösung.",
  ctaText = "Jetzt Schaden begutachten lassen",
  ctaHref = "/rueckruf/"
}: UrgencyBannerProps) {
  const styles = {
    warning: {
      bg: "bg-gradient-to-r from-amber-50 to-orange-50",
      border: "border-amber-300",
      icon: "text-amber-600",
      title: "text-amber-800"
    },
    info: {
      bg: "bg-gradient-to-r from-blue-50 to-indigo-50",
      border: "border-blue-300",
      icon: "text-blue-600",
      title: "text-blue-800"
    },
    action: {
      bg: "bg-gradient-to-r from-red-50 to-orange-50",
      border: "border-red-300",
      icon: "text-red-600",
      title: "text-red-800"
    }
  };

  const style = styles[variant];

  return (
    <section className={`py-6 ${style.bg} border-y ${style.border}`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
            <div className={`p-3 rounded-full ${style.bg} border ${style.border}`}>
              <AlertTriangle className={`h-8 w-8 ${style.icon}`} />
            </div>
            <div className="flex-1">
              <h3 className={`text-lg md:text-xl font-bold ${style.title} mb-1`}>
                {title}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                {message}
              </p>
            </div>
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-bold whitespace-nowrap"
            >
              <a href={ctaHref} className="flex items-center gap-2">
                {ctaText}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TimeUrgencyBanner() {
  return (
    <section className="py-4 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white text-center">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            <span className="font-medium">Heute noch erreichbar bis 16:30 Uhr</span>
          </div>
          <span className="hidden sm:inline text-white/50">|</span>
          <a 
            href="tel:08912621964" 
            className="flex items-center gap-2 bg-primary px-4 py-2 rounded-lg font-bold hover:bg-primary/90 transition-colors"
          >
            <Phone className="h-4 w-4" />
            089 12621964
          </a>
        </div>
      </div>
    </section>
  );
}

export function CostEscalationBanner() {
  return (
    <section className="py-8 bg-stone-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-secondary text-white p-4 text-center">
              <h3 className="text-xl font-bold">Warum schnelles Handeln wichtig ist</h3>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="p-4">
                  <div className="text-3xl font-bold text-green-600 mb-2">Woche 1</div>
                  <div className="text-sm text-muted-foreground">Kleiner Riss, einfache Reparatur</div>
                  <div className="text-lg font-semibold text-secondary mt-2">ab 150€</div>
                </div>
                <div className="p-4 bg-amber-50 rounded-lg">
                  <div className="text-3xl font-bold text-amber-600 mb-2">Monat 1</div>
                  <div className="text-sm text-muted-foreground">Feuchtigkeit dringt ein, Dämmung betroffen</div>
                  <div className="text-lg font-semibold text-secondary mt-2">ab 800€</div>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <div className="text-3xl font-bold text-red-600 mb-2">Monat 6+</div>
                  <div className="text-sm text-muted-foreground">Schimmelbildung, Sanierung nötig</div>
                  <div className="text-lg font-semibold text-secondary mt-2">ab 3.000€</div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-muted-foreground mb-4">
                  <TrendingUp className="inline h-4 w-4 text-red-500 mr-1" />
                  Erfahrungswert aus über 2.500 Projekten: Früherkennung spart bis zu 80% der Kosten
                </p>
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white font-bold"
                >
                  <a href="/rueckruf/" className="flex items-center gap-2">
                    Kostenlose Ersteinschätzung anfordern
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function DecisionPressureBanner() {
  return (
    <section className="py-6 bg-gradient-to-r from-primary to-primary/90">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Sie haben das Problem erkannt – jetzt fehlt nur noch die Lösung
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Unsere Kunden sagen: "Hätten wir früher angerufen, hätten wir viel Geld gespart." 
            Lassen Sie es nicht so weit kommen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 font-bold"
            >
              <a href="tel:08912621964" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Jetzt anrufen: 089 12621964
              </a>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-bold"
            >
              <a href="/rueckruf/" className="flex items-center gap-2">
                Rückruf zum Wunschtermin
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
