import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Phone, Shield, Clock, Star, AlertTriangle, Heart, ThermometerSnowflake, Droplets, Home, Users } from "lucide-react";

interface EmotionalFunnelProps {
  onOpenFunnel?: () => void;
}

export default function EmotionalFunnel({ onOpenFunnel }: EmotionalFunnelProps) {
  return (
    <>
      {/* Sektion 1: Empathie - "Kennen Sie das?" */}
      <section className="py-12 bg-stone-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Kommt Ihnen das bekannt vor?</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mt-2 mb-4">
              Sie liegen nachts wach und machen sich Sorgen ums Dach?
            </h2>
            <p className="text-lg text-muted-foreground">
              Wir verstehen Sie. Diese Gedanken kennen viele Hausbesitzer in München.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="bg-white p-6 rounded-xl border-l-4 border-red-400 shadow-sm" data-testid="pain-heizkosten">
              <ThermometerSnowflake className="h-8 w-8 text-red-500 mb-4" />
              <h3 className="font-bold text-secondary mb-2">"Die Heizkosten fressen uns auf"</h3>
              <p className="text-sm text-muted-foreground">
                Sie drehen die Heizung hoch, aber es bleibt kalt. Die Wärme verschwindet einfach durchs Dach.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-l-4 border-red-400 shadow-sm" data-testid="pain-flecken">
              <Droplets className="h-8 w-8 text-red-500 mb-4" />
              <h3 className="font-bold text-secondary mb-2">"Der Fleck an der Decke wird größer"</h3>
              <p className="text-sm text-muted-foreground">
                Erst war er klein. Jetzt wächst er. Woher kommt das Wasser? Was kostet das?
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-l-4 border-red-400 shadow-sm" data-testid="pain-alter">
              <Home className="h-8 w-8 text-red-500 mb-4" />
              <h3 className="font-bold text-secondary mb-2">"Unser Dach ist 30 Jahre alt"</h3>
              <p className="text-sm text-muted-foreground">
                Sie wissen, dass was getan werden muss. Aber die Angst vor den Kosten lähmt.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-l-4 border-red-400 shadow-sm" data-testid="pain-handwerker">
              <AlertTriangle className="h-8 w-8 text-red-500 mb-4" />
              <h3 className="font-bold text-secondary mb-2">"Schlechte Erfahrungen mit Handwerkern"</h3>
              <p className="text-sm text-muted-foreground">
                Unzuverlässig, teuer, Pfusch. Sie haben Angst, wieder enttäuscht zu werden.
              </p>
            </div>
          </div>

          <div className="bg-secondary text-white p-8 rounded-xl text-center max-w-3xl mx-auto">
            <Heart className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Sie sind nicht allein.</h3>
            <p className="text-gray-200 mb-6">
              Jede Woche helfen wir Familien in München, die genau diese Sorgen haben. 
              <strong className="text-white"> Und es gibt immer eine Lösung</strong> – oft günstiger als befürchtet.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-bold rounded-xl"
              onClick={onOpenFunnel}
              data-testid="button-empathy-cta"
            >
              Kostenlos beraten lassen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Sektion 2: Vertrauen - Warum 089Dach */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Warum 089Dach?</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mt-2 mb-4">
              Wir nehmen Ihnen die Sorgen ab
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="text-center" data-testid="trust-ehrlich">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">Ehrliche Beratung</h3>
              <p className="text-muted-foreground">
                Wir sagen Ihnen, was wirklich nötig ist – nicht mehr, nicht weniger. 
                Manchmal reicht eine Reparatur statt Komplettsanierung.
              </p>
            </div>

            <div className="text-center" data-testid="trust-festpreis">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">Festpreis-Garantie</h3>
              <p className="text-muted-foreground">
                Sie wissen vorher genau, was es kostet. Keine bösen Überraschungen. 
                Kein Nachfordern. Versprochen.
              </p>
            </div>

            <div className="text-center" data-testid="trust-garantie">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">10 Jahre Garantie</h3>
              <p className="text-muted-foreground">
                Wenn was ist, kommen wir. Ohne Diskussion. 
                Weil wir wissen, dass unsere Arbeit hält.
              </p>
            </div>
          </div>

          <div className="bg-stone-50 p-8 rounded-xl max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div data-testid="stat-years">
                <div className="text-4xl font-bold text-primary mb-1">25+</div>
                <div className="text-sm text-muted-foreground">Jahre Erfahrung</div>
              </div>
              <div data-testid="stat-projects">
                <div className="text-4xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Projekte in München</div>
              </div>
              <div data-testid="stat-rating">
                <div className="text-4xl font-bold text-primary mb-1">4.9</div>
                <div className="text-sm text-muted-foreground">Sterne Bewertung</div>
              </div>
              <div data-testid="stat-team">
                <div className="text-4xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Meister-Qualität</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sektion 3: Social Proof */}
      <section className="py-12 bg-secondary text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-1 mb-3">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <h2 className="text-3xl font-heading font-bold mb-2">
              Das sagen Münchner über uns
            </h2>
            <p className="text-gray-300">Echte Bewertungen von echten Kunden</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/10 p-6 rounded-xl" data-testid="testimonial-0">
              <div className="flex gap-1 mb-3">
                {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />)}
              </div>
              <p className="text-gray-200 mb-4 italic">
                "Ich hatte solche Angst vor den Kosten. Am Ende war es halb so schlimm – und die Arbeit perfekt. 
                Endlich wieder ruhig schlafen!"
              </p>
              <div>
                <p className="font-bold">Martina S.</p>
                <p className="text-sm text-gray-400">München-Pasing • Dachsanierung</p>
              </div>
            </div>

            <div className="bg-white/10 p-6 rounded-xl" data-testid="testimonial-1">
              <div className="flex gap-1 mb-3">
                {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />)}
              </div>
              <p className="text-gray-200 mb-4 italic">
                "Nach 3 erfolglosen Handwerkern hat 089Dach das Leck in 2 Stunden gefunden. 
                Profis, die wissen was sie tun."
              </p>
              <div>
                <p className="font-bold">Thomas K.</p>
                <p className="text-sm text-gray-400">München-Moosach • Leckortung</p>
              </div>
            </div>

            <div className="bg-white/10 p-6 rounded-xl" data-testid="testimonial-2">
              <div className="flex gap-1 mb-3">
                {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />)}
              </div>
              <p className="text-gray-200 mb-4 italic">
                "Die haben uns sogar bei der KfW-Förderung geholfen. 8.000€ gespart! 
                So einen Service erlebt man selten."
              </p>
              <div>
                <p className="font-bold">Familie Weber</p>
                <p className="text-sm text-gray-400">Germering • Energetische Sanierung</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sektion 4: Einfacher CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Bereit, Ihre Dachsorgen loszuwerden?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            In 2 Minuten Rückruf anfordern. Wir melden uns innerhalb von 24 Stunden.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 font-bold text-lg px-10 py-7 rounded-xl shadow-xl"
              onClick={onOpenFunnel}
              data-testid="button-final-cta"
            >
              Jetzt kostenlos beraten lassen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary font-bold text-lg px-10 py-7 rounded-xl"
              asChild
              data-testid="button-final-call"
            >
              <a href="tel:08912621964">
                <Phone className="mr-2 h-5 w-5" />
                089 12621964
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              Kostenlos & unverbindlich
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              Antwort in 24h
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              Festpreis-Angebot
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
