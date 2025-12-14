import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ThermometerSnowflake, ArrowRight, ArrowLeft, Euro, Home, Phone, AlertTriangle, TrendingDown, Snowflake, Sun, Shield, Clock, Heart, Users, Award } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import SEO, { BreadcrumbSchema } from "@/components/SEO";
import heroImage from "@assets/generated_images/roof_insulation_installation_scene.png";

export default function DaemmungInfo() {
  const [funnelStep, setFunnelStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const funnelQuestions = [
    {
      question: "Was ist Ihr größtes Problem mit Ihrem Dach?",
      options: [
        { label: "Hohe Heizkosten", icon: Euro },
        { label: "Kälte im Obergeschoss", icon: Snowflake },
        { label: "Hitze im Sommer", icon: Sun },
        { label: "Zugluft & Undichtigkeit", icon: ThermometerSnowflake }
      ]
    },
    {
      question: "Wie alt ist Ihr Gebäude?",
      options: [
        { label: "Vor 1970", icon: Home },
        { label: "1970-1990", icon: Home },
        { label: "1990-2010", icon: Home },
        { label: "Nach 2010", icon: Home }
      ]
    },
    {
      question: "Wann möchten Sie das Problem lösen?",
      options: [
        { label: "So schnell wie möglich", icon: Clock },
        { label: "In den nächsten 3 Monaten", icon: Clock },
        { label: "Dieses Jahr noch", icon: Clock },
        { label: "Ich informiere mich erstmal", icon: Clock }
      ]
    }
  ];

  const handleAnswer = (answer: string) => {
    setAnswers([...answers, answer]);
    setFunnelStep(funnelStep + 1);
  };

  const getSolution = () => {
    const problem = answers[0];
    if (problem === "Hohe Heizkosten") {
      return {
        title: "Ihre Lösung: Bis zu 30% Heizkosten sparen",
        description: "Mit einer professionellen Dachdämmung reduzieren Sie Ihren Wärmeverlust drastisch. Das bedeutet weniger heizen, niedrigere Rechnungen – und mehr Geld in Ihrer Tasche.",
        savings: "800-1.500€ jährlich"
      };
    }
    if (problem === "Kälte im Obergeschoss") {
      return {
        title: "Ihre Lösung: Endlich wohlige Wärme überall",
        description: "Eine Aufsparrendämmung schließt die Kältebrücken in Ihrem Dach. Das Obergeschoss wird genauso warm wie der Rest des Hauses – auch bei -10°C draußen.",
        savings: "Wohnqualität wie neu"
      };
    }
    if (problem === "Hitze im Sommer") {
      return {
        title: "Ihre Lösung: Kühl im Sommer, warm im Winter",
        description: "Gute Dämmung wirkt in beide Richtungen. Im Sommer bleibt die Hitze draußen, im Winter die Wärme drinnen. Schluss mit tropischen Nächten im Dachgeschoss.",
        savings: "Keine Klimaanlage nötig"
      };
    }
    return {
      title: "Ihre Lösung: Dicht & energieeffizient",
      description: "Zugluft und undichte Stellen kosten Sie bares Geld. Eine fachgerechte Dämmung macht Ihr Dach wind- und wetterfest – für Jahrzehnte.",
      savings: "Bis zu 40% Förderung"
    };
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Dachdämmung verstehen | Vorteile & Lösungen - 089Dach"
        description="Erfahren Sie alles über Dachdämmung: Vorteile, Kosten, Förderung. Finden Sie die perfekte Lösung für Ihr Dach."
        canonical="https://089dach.de/daemmung-info"
        keywords="dachdämmung info, dämmung vorteile, heizkosten sparen, wärmedämmung dach"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" }, 
        { name: "Dachdämmung verstehen", url: "/daemmung-info" }
      ]} />
      <Navbar />
      
      <section className="relative min-h-[400px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/60"></div>
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10 py-16">
          <div className="max-w-3xl text-white">
            <div className="flex items-center gap-3 mb-4">
              <ThermometerSnowflake className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Dachdämmung verstehen
              <br />
              <span className="text-primary">Ihr Weg zu mehr Wohnkomfort</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Bis zu 30% der Heizwärme geht über ein ungedämmtes Dach verloren. 
              Erfahren Sie, wie Sie das ändern können – und warum es sich lohnt.
            </p>
          </div>
        </div>
      </section>

      <section className="py-3 bg-white border-b">
        <div className="container mx-auto px-6 lg:px-12">
          <Link href="/heizkostenrechner">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-secondary" data-testid="button-back">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zurück zum Heizkosten-Rechner
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-10 bg-stone-50 border-b">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-4">
                Wissen Sie, wohin Ihre Heizwärme wirklich geht?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
                Stellen Sie sich vor: Jeden Tag heizen Sie – und ein großer Teil dieser teuren Wärme 
                <strong className="text-secondary"> verschwindet einfach durch Ihr Dach</strong>. 
                Tag für Tag, Monat für Monat, Jahr für Jahr.
              </p>
              <div className="bg-white/80 border border-stone-200 rounded-xl p-6 max-w-2xl mx-auto mt-6">
                <p className="text-muted-foreground mb-3">
                  <strong className="text-secondary">Die Wahrheit:</strong> Ein ungedämmtes Dach ist wie ein Loch in Ihrem Geldbeutel. 
                  Warme Luft steigt nach oben – das ist Physik. Und wenn dort keine Barriere ist, entweicht sie einfach nach draußen.
                </p>
                <p className="text-muted-foreground mb-3">
                  <strong className="text-secondary">Was das bedeutet:</strong> Bei einem typischen Einfamilienhaus sprechen wir von 
                  <strong className="text-green-600"> 800 bis 1.500 Euro pro Jahr</strong>, die Sie unnötig verbrennen. 
                  Geld, das Sie für schönere Dinge ausgeben könnten.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-secondary">Die gute Nachricht:</strong> Eine professionelle Dachdämmung stoppt diesen Verlust. 
                  Und mit staatlicher Förderung von bis zu 40% ist die Investition schneller zurückgezahlt, als die meisten denken.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-50/50 border border-green-100 p-5 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="font-bold text-green-700 mb-2">25+ Jahre Erfahrung</h3>
                <p className="text-sm text-green-600">
                  Wir kennen jedes Dachproblem – und die beste Lösung dafür.
                </p>
              </div>
              <div className="bg-green-50/50 border border-green-100 p-5 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="font-bold text-green-700 mb-2">500+ zufriedene Kunden</h3>
                <p className="text-sm text-green-600">
                  Münchner Hausbesitzer vertrauen auf unsere Arbeit.
                </p>
              </div>
              <div className="bg-green-50/50 border border-green-100 p-5 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="font-bold text-green-700 mb-2">Ehrliche Beratung</h3>
                <p className="text-sm text-green-600">
                  Wir sagen Ihnen, was wirklich nötig ist – nicht mehr.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div>
                <h2 className="text-3xl font-heading font-bold text-secondary mb-6">
                  Warum Dachdämmung so wichtig ist
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0 mt-1" />
                    <div>
                      <strong className="text-secondary">Wärme steigt nach oben</strong>
                      <p className="text-muted-foreground">Physik lässt sich nicht austricksen: Die teuer erzeugte Wärme sammelt sich unter Ihrem Dach – und entweicht dort am schnellsten.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0 mt-1" />
                    <div>
                      <strong className="text-secondary">Größte Einsparmöglichkeit</strong>
                      <p className="text-muted-foreground">Das Dach ist die größte Schwachstelle bei Altbauten. Hier sparen Sie am meisten – oft mehr als bei Fenstern oder Fassade.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0 mt-1" />
                    <div>
                      <strong className="text-secondary">Werterhalt Ihrer Immobilie</strong>
                      <p className="text-muted-foreground">Ein gut gedämmtes Dach steigert den Wert Ihres Hauses um 10-15% und macht es attraktiver für Käufer.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                  Das kostet Sie ein ungedämmtes Dach:
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Euro className="h-5 w-5 text-red-500" />
                    <span><strong>800-1.500€</strong> mehr Heizkosten pro Jahr</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Snowflake className="h-5 w-5 text-red-500" />
                    <span>Kalte Räume im Obergeschoss</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Sun className="h-5 w-5 text-red-500" />
                    <span>Unerträgliche Hitze im Sommer</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <TrendingDown className="h-5 w-5 text-red-500" />
                    <span>Wertverlust der Immobilie</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-xl border border-primary/20 mb-16">
              <h2 className="text-2xl font-heading font-bold text-secondary mb-4 text-center">
                Finden Sie Ihre persönliche Lösung
              </h2>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-6">
                Jedes Dach ist anders – und jedes Problem braucht eine individuelle Lösung. 
                Beantworten Sie <strong className="text-secondary">3 kurze Fragen</strong> und wir zeigen Ihnen, 
                wie wir Ihnen konkret helfen können.
              </p>
              
              {funnelStep < funnelQuestions.length ? (
                <div className="max-w-2xl mx-auto">
                  <div className="flex justify-center gap-2 mb-6">
                    {funnelQuestions.map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-3 h-3 rounded-full ${i <= funnelStep ? 'bg-primary' : 'bg-gray-300'}`}
                      />
                    ))}
                  </div>
                  <p className="text-lg font-medium text-secondary text-center mb-6">
                    {funnelQuestions[funnelStep].question}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {funnelQuestions[funnelStep].options.map((option, i) => {
                      const Icon = option.icon;
                      return (
                        <button
                          key={i}
                          onClick={() => handleAnswer(option.label)}
                          className="bg-white p-4 rounded-lg border-2 border-transparent hover:border-primary transition-all text-left flex items-center gap-3 shadow-sm hover:shadow-md"
                          data-testid={`funnel-option-${i}`}
                        >
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <span className="font-medium text-secondary">{option.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="max-w-2xl mx-auto text-center">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                    <CheckCircle2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-800 mb-3">{getSolution().title}</h3>
                    <p className="text-green-700 mb-4">{getSolution().description}</p>
                    <div className="inline-block bg-green-100 px-4 py-2 rounded-full">
                      <span className="font-bold text-green-800">{getSolution().savings}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Basierend auf Ihren Angaben: <strong>{answers[1]}</strong> Gebäude, 
                    Zeitrahmen: <strong>{answers[2]}</strong>
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-6 rounded-xl"
                      asChild
                      data-testid="button-beratung-cta"
                    >
                      <Link href="/beratung">
                        <Phone className="mr-2 h-5 w-5" />
                        Kostenlose Beratung anfragen
                      </Link>
                    </Button>
                    <Button 
                      size="lg"
                      variant="outline"
                      className="font-bold px-8 py-6 rounded-xl"
                      onClick={() => { setFunnelStep(0); setAnswers([]); }}
                      data-testid="button-restart-funnel"
                    >
                      Nochmal starten
                    </Button>
                  </div>
                </div>
              )}
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="bg-stone-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingDown className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">30%</h3>
                <p className="font-medium text-secondary">weniger Heizkosten</p>
                <p className="text-sm text-muted-foreground">durchschnittlich nach Dämmung</p>
              </div>
              <div className="bg-stone-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Euro className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">40%</h3>
                <p className="font-medium text-secondary">staatliche Förderung</p>
                <p className="text-sm text-muted-foreground">wir kümmern uns darum</p>
              </div>
              <div className="bg-stone-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">50+</h3>
                <p className="font-medium text-secondary">Jahre Lebensdauer</p>
                <p className="text-sm text-muted-foreground">einmal richtig, dann Ruhe</p>
              </div>
            </div>

            <div className="bg-white border border-stone-200 rounded-xl p-8 mb-16">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-6 text-center">
                So läuft eine Dachdämmung bei uns ab
              </h2>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
                Viele Hausbesitzer scheuen sich vor einer Dämmung, weil sie nicht wissen, was auf sie zukommt. 
                Bei uns ist der Prozess <strong className="text-secondary">transparent, planbar und stressfrei</strong>.
              </p>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">1</div>
                  <h4 className="font-bold text-secondary mb-2">Kostenlose Beratung</h4>
                  <p className="text-sm text-muted-foreground">Wir kommen zu Ihnen, schauen uns Ihr Dach an und besprechen Ihre Wünsche.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">2</div>
                  <h4 className="font-bold text-secondary mb-2">Individuelles Angebot</h4>
                  <p className="text-sm text-muted-foreground">Sie erhalten ein detailliertes Angebot – inkl. Förderberatung. Ohne versteckte Kosten.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">3</div>
                  <h4 className="font-bold text-secondary mb-2">Professionelle Umsetzung</h4>
                  <p className="text-sm text-muted-foreground">Unser erfahrenes Team führt die Arbeiten sauber und termingerecht durch.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">4</div>
                  <h4 className="font-bold text-secondary mb-2">Langfristig sparen</h4>
                  <p className="text-sm text-muted-foreground">Ab sofort sparen Sie Heizkosten – Jahr für Jahr, Jahrzehnt für Jahrzehnt.</p>
                </div>
              </div>
            </div>

            <div className="bg-stone-50 rounded-xl p-8 mb-16">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-6 text-center">
                Häufige Fragen zur Dachdämmung
              </h2>
              <div className="max-w-3xl mx-auto space-y-4">
                <div className="bg-white p-5 rounded-lg border border-stone-200">
                  <h4 className="font-bold text-secondary mb-2">Lohnt sich eine Dachdämmung bei meinem Altbau überhaupt?</h4>
                  <p className="text-muted-foreground">Gerade bei Altbauten ist die Ersparnis am größten! Ältere Häuser haben oft gar keine oder nur sehr dünne Dämmung. Hier sparen Sie nach der Dämmung am meisten – oft 30% oder mehr Ihrer Heizkosten.</p>
                </div>
                <div className="bg-white p-5 rounded-lg border border-stone-200">
                  <h4 className="font-bold text-secondary mb-2">Wie lange dauert eine Dachdämmung?</h4>
                  <p className="text-muted-foreground">Bei einem typischen Einfamilienhaus dauert die Dämmung je nach Umfang 3-7 Werktage. Sie können während der Arbeiten normal in Ihrem Haus wohnen – wir arbeiten von außen oder auf dem Dachboden.</p>
                </div>
                <div className="bg-white p-5 rounded-lg border border-stone-200">
                  <h4 className="font-bold text-secondary mb-2">Muss ich mich selbst um die Förderung kümmern?</h4>
                  <p className="text-muted-foreground">Nein! Wir beraten Sie zu allen Fördermöglichkeiten (BAFA, KfW) und helfen Ihnen bei der Antragstellung. So bekommen Sie bis zu 40% der Kosten zurück – ohne Stress.</p>
                </div>
                <div className="bg-white p-5 rounded-lg border border-stone-200">
                  <h4 className="font-bold text-secondary mb-2">Hilft eine Dämmung auch gegen Hitze im Sommer?</h4>
                  <p className="text-muted-foreground">Absolut! Eine gute Dämmung wirkt in beide Richtungen: Im Winter bleibt die Wärme drinnen, im Sommer bleibt die Hitze draußen. Schluss mit tropischen Nächten im Dachgeschoss.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-8 mb-16">
              <h2 className="text-2xl font-heading font-bold text-secondary mb-6 text-center">
                Was unsere Kunden sagen
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-muted-foreground italic mb-4">
                    „Wir haben lange gezögert, aber jetzt ärgern wir uns, dass wir nicht früher gedämmt haben. 
                    Die erste Heizkostenabrechnung nach der Dämmung war ein echter Augenöffner – über 400 Euro weniger!"
                  </p>
                  <p className="font-medium text-secondary">– Familie Huber, München-Pasing</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-muted-foreground italic mb-4">
                    „Endlich können wir unser Dachgeschoss auch im Winter nutzen. Vorher war es dort so kalt, 
                    dass wir den Raum im Winter gemieden haben. Jetzt ist es unser Lieblingsraum."
                  </p>
                  <p className="font-medium text-secondary">– Herr Schneider, Grünwald</p>
                </div>
              </div>
            </div>

            <div className="bg-secondary text-white rounded-lg p-8 text-center">
              <h2 className="text-3xl font-heading font-bold mb-4">
                Bereit für weniger Heizkosten?
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Lassen Sie sich kostenlos beraten – unverbindlich und ohne Risiko.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-bold px-10 py-6 rounded-xl text-lg"
                  asChild
                  data-testid="button-final-cta"
                >
                  <Link href="/beratung">
                    <Phone className="mr-2 h-5 w-5" />
                    Jetzt kostenlos beraten lassen
                  </Link>
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-secondary font-bold px-8 py-6 rounded-xl"
                  asChild
                >
                  <Link href="/heizkostenrechner">
                    Heizkosten berechnen
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
