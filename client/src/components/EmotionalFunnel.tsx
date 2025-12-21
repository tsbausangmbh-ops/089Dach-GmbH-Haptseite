import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Phone, Shield, Clock, Star, AlertTriangle, Heart, ThermometerSnowflake, Droplets, Home, Users, MapPin, Award, Wrench } from "lucide-react";

interface EmotionalFunnelProps {
  onOpenFunnel?: () => void;
}

export default function EmotionalFunnel({ onOpenFunnel }: EmotionalFunnelProps) {
  return (
    <>
      {/* Sektion 1: Empathie - "Kennen Sie das?" */}
      <section className="py-4 md:py-6 bg-stone-100">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-4 md:mb-6">
            <span className="text-primary font-bold tracking-wider uppercase text-xs md:text-sm">Kommt Ihnen das bekannt vor?</span>
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-secondary mt-1 md:mt-2 mb-2 md:mb-4">
              Sorgen ums Dach?
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground">
              Diese Gedanken kennen viele Hausbesitzer in München.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 mb-4 md:mb-6">
            <div className="bg-white p-3 md:p-4 rounded-lg md:rounded-xl border-l-3 md:border-l-4 border-red-400 shadow-sm" data-testid="pain-heizkosten">
              <ThermometerSnowflake className="h-5 w-5 md:h-6 md:w-6 text-red-500 mb-1 md:mb-2" />
              <h3 className="font-bold text-secondary text-xs md:text-sm mb-1">"Hohe Heizkosten"</h3>
              <p className="text-xs md:text-sm text-muted-foreground hidden md:block">
                Die Wärme verschwindet durchs Dach.
              </p>
            </div>

            <div className="bg-white p-3 md:p-4 rounded-lg md:rounded-xl border-l-3 md:border-l-4 border-red-400 shadow-sm" data-testid="pain-flecken">
              <Droplets className="h-5 w-5 md:h-6 md:w-6 text-red-500 mb-1 md:mb-2" />
              <h3 className="font-bold text-secondary text-xs md:text-sm mb-1">"Feuchte Flecken"</h3>
              <p className="text-xs md:text-sm text-muted-foreground hidden md:block">
                Woher kommt das Wasser?
              </p>
            </div>

            <div className="bg-white p-3 md:p-4 rounded-lg md:rounded-xl border-l-3 md:border-l-4 border-red-400 shadow-sm" data-testid="pain-alter">
              <Home className="h-5 w-5 md:h-6 md:w-6 text-red-500 mb-1 md:mb-2" />
              <h3 className="font-bold text-secondary text-xs md:text-sm mb-1">"Altes Dach"</h3>
              <p className="text-xs md:text-sm text-muted-foreground hidden md:block">
                Die Angst vor den Kosten lähmt.
              </p>
            </div>

            <div className="bg-white p-3 md:p-4 rounded-lg md:rounded-xl border-l-3 md:border-l-4 border-red-400 shadow-sm" data-testid="pain-handwerker">
              <AlertTriangle className="h-5 w-5 md:h-6 md:w-6 text-red-500 mb-1 md:mb-2" />
              <h3 className="font-bold text-secondary text-xs md:text-sm mb-1">"Schlechte Handwerker"</h3>
              <p className="text-xs md:text-sm text-muted-foreground hidden md:block">
                Angst vor Enttäuschung.
              </p>
            </div>
          </div>

          <div className="bg-secondary text-white p-4 md:p-6 rounded-xl text-center max-w-3xl mx-auto">
            <Heart className="h-6 w-6 md:h-8 md:w-8 text-primary mx-auto mb-2" />
            <h3 className="text-lg md:text-xl font-bold mb-2">Sie sind nicht allein.</h3>
            <p className="text-sm md:text-base text-gray-200 mb-3 md:mb-4">
              Es gibt immer eine Lösung – oft günstiger als befürchtet.
            </p>
            <Button 
              size="default"
              className="bg-primary hover:bg-primary/90 text-white font-bold rounded-xl text-sm md:text-base px-4 md:px-6"
              onClick={onOpenFunnel}
              data-testid="button-empathy-cta"
            >
              Kostenlos beraten lassen
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Sektion 2: Vertrauen - Warum 089Dach */}
      <section className="py-4 md:py-6 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-4 md:mb-6">
            <span className="text-primary font-bold tracking-wider uppercase text-xs md:text-sm">Warum 089Dach?</span>
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-secondary mt-1 md:mt-2 mb-2 md:mb-4">
              Wir nehmen Ihnen die Sorgen ab
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-6 mb-4 md:mb-6">
            <div className="text-center" data-testid="trust-ehrlich">
              <div className="w-10 h-10 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4">
                <CheckCircle2 className="h-5 w-5 md:h-8 md:w-8 text-primary" />
              </div>
              <h3 className="text-sm md:text-xl font-bold text-secondary mb-1 md:mb-2">Ehrlich</h3>
              <p className="text-xs md:text-base text-muted-foreground hidden md:block">
                Wir sagen, was wirklich nötig ist.
              </p>
            </div>

            <div className="text-center" data-testid="trust-festpreis">
              <div className="w-10 h-10 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4">
                <Shield className="h-5 w-5 md:h-8 md:w-8 text-primary" />
              </div>
              <h3 className="text-sm md:text-xl font-bold text-secondary mb-1 md:mb-2">Festpreis</h3>
              <p className="text-xs md:text-base text-muted-foreground hidden md:block">
                Keine bösen Überraschungen.
              </p>
            </div>

            <div className="text-center" data-testid="trust-garantie">
              <div className="w-10 h-10 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4">
                <Clock className="h-5 w-5 md:h-8 md:w-8 text-primary" />
              </div>
              <h3 className="text-sm md:text-xl font-bold text-secondary mb-1 md:mb-2">10 J. Garantie</h3>
              <p className="text-xs md:text-base text-muted-foreground hidden md:block">
                Wenn was ist, kommen wir.
              </p>
            </div>
          </div>

          <div className="bg-stone-50 p-4 md:p-8 rounded-xl max-w-4xl mx-auto">
            <div className="grid grid-cols-4 gap-2 md:gap-6 text-center">
              <div data-testid="stat-years">
                <div className="text-2xl md:text-4xl font-bold text-primary mb-0.5 md:mb-1">25+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Jahre</div>
              </div>
              <div data-testid="stat-projects">
                <div className="text-2xl md:text-4xl font-bold text-primary mb-0.5 md:mb-1">200+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Projekte</div>
              </div>
              <div data-testid="stat-rating">
                <div className="text-2xl md:text-4xl font-bold text-primary mb-0.5 md:mb-1">4.9★</div>
                <div className="text-xs md:text-sm text-muted-foreground">Bewertung</div>
              </div>
              <div data-testid="stat-team">
                <div className="text-2xl md:text-4xl font-bold text-primary mb-0.5 md:mb-1">100%</div>
                <div className="text-xs md:text-sm text-muted-foreground">Meister</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sektion 4: Einfacher CTA */}
      <section className="py-3 md:py-5 bg-primary">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 text-center">
          <h2 className="text-xl md:text-4xl font-heading font-bold text-white mb-2 md:mb-4">
            Dachsorgen loswerden?
          </h2>
          <p className="text-sm md:text-xl text-white/90 mb-4 md:mb-8 max-w-2xl mx-auto">
            Rückruf in 2 Minuten anfordern.
          </p>
          
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center mb-4 md:mb-6">
            <Button 
              size="default"
              className="bg-white text-primary hover:bg-gray-100 font-bold text-sm md:text-lg px-6 md:px-10 py-4 md:py-7 rounded-xl shadow-xl w-full md:w-auto"
              onClick={onOpenFunnel}
              data-testid="button-final-cta"
            >
              Kostenlos beraten lassen
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
            <Button 
              size="default"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary font-bold text-sm md:text-lg px-6 md:px-10 py-4 md:py-7 rounded-xl w-full md:w-auto"
              asChild
              data-testid="button-final-call"
            >
              <a href="/rueckruf">
                <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Rückruf anfordern
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-white/80 text-xs md:text-sm">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-3 w-3 md:h-4 md:w-4" />
              Kostenlos
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-3 w-3 md:h-4 md:w-4" />
              24h Antwort
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-3 w-3 md:h-4 md:w-4" />
              Festpreis
            </span>
          </div>
        </div>
      </section>

      {/* Sektion 5: SEO Content Block */}
      <section className="py-4 bg-stone-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-secondary mb-8 text-center">
              Dachdecker München – Ihr Meisterbetrieb für alle Dacharbeiten
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
              <p className="text-lg mb-6">
                <strong className="text-secondary">Dachdecker in München</strong> gesucht? Die 089Dach GmbH ist Ihr zuverlässiger Partner für professionelle <strong>Dacharbeiten</strong> in München und Umgebung. 
                Als inhabergeführter <strong>Dachdecker-Meisterbetrieb</strong> mit über 25 Jahren Erfahrung bieten wir Ihnen das komplette Spektrum: 
                <strong> Dachsanierung München</strong>, <strong>Dachreparatur</strong>, <strong>Flachdach</strong>-Abdichtung, <strong>Steildach</strong>-Eindeckung und <strong>Spenglerarbeiten</strong>.
              </p>
              
              <p className="mb-6">
                Ob Ihr <strong>Dach undicht</strong> ist, Sie eine <strong>energetische Dachsanierung</strong> planen oder <strong>Dachziegel austauschen</strong> lassen möchten – 
                wir sind der <strong>Dachdecker in Ihrer Nähe</strong>, der schnell, sauber und zu fairen Festpreisen arbeitet. 
                Mit <strong>10 Jahren Garantie</strong> auf alle Arbeiten und kostenloser <strong>KfW-Förderberatung</strong>.
              </p>
            </div>


            <div className="bg-white p-8 rounded-xl border border-stone-200 mb-12">
              <h3 className="text-2xl font-bold text-secondary mb-6 text-center">
                Was kostet ein Dachdecker in München?
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-stone-200">
                      <th className="text-left py-3 text-secondary">Leistung</th>
                      <th className="text-right py-3 text-secondary">Kosten</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-stone-100">
                      <td className="py-3"><strong>Dachsanierung</strong> komplett (inkl. Dämmung)</td>
                      <td className="text-right py-3 font-bold text-primary">ab 235 €/m²</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="py-3"><strong>Dachreparatur</strong> (einzelne Ziegel)</td>
                      <td className="text-right py-3 font-bold text-primary">ab 195 €</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="py-3"><strong>Dachfenster</strong> einbauen (inkl. Fenster)</td>
                      <td className="text-right py-3 font-bold text-primary">ab 1.560 €</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="py-3"><strong>Dachrinne</strong> erneuern (Zink)</td>
                      <td className="text-right py-3 font-bold text-primary">ab 35 €/m</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="py-3"><strong>Flachdach</strong>-Abdichtung</td>
                      <td className="text-right py-3 font-bold text-primary">ab 60 €/m²</td>
                    </tr>
                    <tr>
                      <td className="py-3"><strong>Notdienst Dach</strong> (Sturmschaden, Notsicherung)</td>
                      <td className="text-right py-3 font-bold text-primary">ab 300 €</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                * Richtpreise für München 2025. Individuelle Angebote nach kostenloser Vor-Ort-Besichtigung.
              </p>
            </div>

            <div className="bg-zinc-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Förderung für Dachsanierung in München {new Date().getFullYear()}
              </h3>
              <p className="text-zinc-300 mb-6">
                Bei einer <strong className="text-white">energetischen Dachsanierung</strong> können Sie von attraktiven Förderprogrammen profitieren. 
                Als erfahrener <strong className="text-white">Dachdecker in München</strong> beraten wir Sie kostenlos zu allen Möglichkeiten:
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-zinc-700 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-primary mb-1">bis 20%</div>
                  <div className="text-sm text-zinc-300">KfW-Zuschuss</div>
                </div>
                <div className="bg-zinc-700 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-primary mb-1">15%</div>
                  <div className="text-sm text-zinc-300">BAFA-Förderung</div>
                </div>
                <div className="bg-zinc-700 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-primary mb-1">1.200 €</div>
                  <div className="text-sm text-zinc-300">Steuerbonus/Jahr</div>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground mt-8">
              <h3 className="text-2xl font-bold text-secondary mb-4">
                Warum 089Dach als Dachdecker wählen?
              </h3>
              <p className="mb-4">
                Als <strong>Dachdecker-Meisterbetrieb</strong> stehen wir für Qualität und Zuverlässigkeit. 
                Über <strong>200 Dachprojekte</strong> in München sprechen für sich. Unsere Kunden schätzen:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Meister-Qualität</strong> – Dachdecker- und Spenglermeister seit 1998</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Festpreis-Garantie</strong> – Keine versteckten Kosten, keine Nachforderungen</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>10 Jahre Garantie</strong> – Auf alle Dacharbeiten und Materialien</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Schnelle Reaktion</strong> – Bei Notfällen oft innerhalb von 24 Stunden</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Förderberatung</strong> – Kostenlose KfW/BAFA-Beratung inklusive</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary text-white p-8 rounded-xl text-center mt-8">
              <h3 className="text-2xl font-bold mb-4">Jetzt Dachdecker aus München kontaktieren</h3>
              <p className="text-gray-200 mb-6">
                Kostenlose Beratung, ehrliches Angebot, professionelle Ausführung. 
                Rufen Sie uns an oder fordern Sie einen Rückruf an.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white font-bold rounded-xl"
                  onClick={onOpenFunnel}
                  data-testid="button-seo-cta"
                >
                  Kostenlos beraten lassen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-secondary font-bold rounded-xl"
                  asChild
                  data-testid="button-seo-call"
                >
                  <a href="/rueckruf">
                    <Phone className="mr-2 h-5 w-5" />
                    Rückruf anfordern
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
