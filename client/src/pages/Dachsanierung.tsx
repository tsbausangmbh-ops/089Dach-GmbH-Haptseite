import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, AlertTriangle, Clock, Shield, Euro, ThermometerSun, ArrowRight, Quote, Phone } from "lucide-react";
import { Link } from "wouter";
import SEO, { BreadcrumbSchema, ServiceSchema } from "@/components/SEO";

export default function Dachsanierung() {
  const warningSignals = [
    { icon: AlertTriangle, title: "Feuchte Stellen", desc: "Wasserflecken an der Decke oder im Dachboden" },
    { icon: AlertTriangle, title: "Verrutschte Ziegel", desc: "Sichtbare Lücken oder verschobene Dachsteine" },
    { icon: AlertTriangle, title: "Moos & Flechten", desc: "Starker Bewuchs, der die Substanz angreift" },
    { icon: AlertTriangle, title: "Hohe Heizkosten", desc: "Wärme entweicht durch schlechte Dämmung" },
    { icon: AlertTriangle, title: "Alter über 30 Jahre", desc: "Viele Materialien erreichen dann ihre Grenze" },
    { icon: AlertTriangle, title: "Zugluft im Dachgeschoss", desc: "Undichte Stellen lassen Wind durch" }
  ];

  const benefits = [
    { icon: ThermometerSun, title: "Bis zu 30% Heizkosten sparen", desc: "Moderne Dämmung hält die Wärme im Haus" },
    { icon: Shield, title: "25 Jahre Sicherheit", desc: "Neue Eindeckung mit langer Garantie" },
    { icon: Euro, title: "Bis zu 20% Förderung", desc: "KfW und BAFA unterstützen energetische Sanierung" },
    { icon: Clock, title: "Wertsteigerung", desc: "Saniertes Dach erhöht den Immobilienwert" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Dachsanierung München | Energetisch & förderfähig mit 089Dach"
        description="Ganzheitliche Dachsanierungen in München: Energieberatung, Fördermittel, Wärmedämmung & Neueindeckung aus einer Hand. Jetzt kostenlose Beratung."
        canonical="https://089dach.de/dachsanierung"
        keywords="dachsanierung münchen, energetische dachsanierung, kfw dachsanierung münchen, dachdämmung münchen, dach erneuern münchen"
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Dachsanierung", url: "/dachsanierung" }]} />
      <ServiceSchema 
        pageName="Dachsanierung München"
        services={[
          { name: "Energetische Dachsanierung", description: "Wärmedämmung nach GEG mit bis zu 30% Heizkosten-Ersparnis" },
          { name: "Komplettsanierung", description: "Neue Eindeckung mit 25 Jahren Garantie" },
          { name: "KfW-Förderberatung", description: "Bis zu 20% Förderung durch BAFA und KfW" }
        ]}
      />
      <Navbar />
      
      {/* Hero Section mit Problem-Agitation */}
      <section className="pt-24 pb-16 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Dachsanierung München</span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-secondary mt-4 mb-6">
              Ihr Dach macht Ihnen Sorgen?
            </h1>
            
            {/* Emotionale Problem-Agitation */}
            <div className="bg-white p-6 rounded-sm shadow-sm border-l-4 border-primary mb-8">
              <p className="text-lg text-secondary font-medium mb-3">
                Kennen Sie das?
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sie liegen nachts wach, wenn der Sturm ums Haus pfeift. Bei jedem starken Regen 
                schauen Sie nervös zur Decke. Im Winter heizen Sie und heizen – aber richtig warm 
                wird es nie. <strong className="text-secondary">Und jedes Jahr schieben Sie die Entscheidung vor sich her.</strong>
              </p>
              <p className="text-secondary font-medium">
                „Wird schon noch halten." – Bis es nicht mehr hält.
              </p>
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              <strong>Die gute Nachricht:</strong> Eine Dachsanierung muss kein Albtraum sein. 
              Mit der richtigen Planung, transparenten Kosten und einem erfahrenen Team wird Ihr 
              Zuhause wieder sicher – und Sie können endlich aufatmen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-sm" data-testid="button-hero-consultation">
                <a href="tel:08912621964">
                  <Phone className="mr-2 h-5 w-5" />
                  Kostenlose Erstberatung
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary hover:text-white font-bold rounded-sm" data-testid="button-hero-checklist">
                <Link href="#warnsignale">Warnsignale prüfen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Kundengeschichte */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto" data-testid="testimonial-kramer">
            <Quote className="h-12 w-12 text-primary mb-6" />
            <blockquote className="text-2xl font-heading italic mb-6 leading-relaxed">
              „Drei Jahre haben wir gewartet. Dann kam der Wasserschaden – 18.000 Euro Folgekosten. 
              Hätten wir nur früher angerufen. Die Sanierung durch 089Dach war am Ende günstiger 
              als die Reparatur des Schadens."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                KM
              </div>
              <div>
                <p className="font-bold">Familie Kramer</p>
                <p className="text-gray-300">Einfamilienhaus in München-Laim, saniert 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warnsignale */}
      <section id="warnsignale" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-heading font-bold text-secondary mb-4">
              6 Warnsignale, die Sie nicht ignorieren sollten
            </h2>
            <p className="text-muted-foreground">
              Je früher Sie handeln, desto günstiger wird es. Erkennen Sie diese Zeichen?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {warningSignals.map((signal, index) => (
              <Card key={index} className="border-l-4 border-l-primary hover:shadow-lg transition-shadow" data-testid={`card-warning-${index}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-sm text-primary shrink-0">
                      <signal.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary mb-1">{signal.title}</h3>
                      <p className="text-muted-foreground text-sm">{signal.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-primary/10 p-8 rounded-sm text-center">
            <p className="text-lg text-secondary font-medium mb-4">
              Erkennen Sie eines oder mehrere dieser Warnsignale?
            </p>
            <p className="text-muted-foreground mb-6">
              Warten Sie nicht, bis es zu spät ist. Eine kostenlose Dachinspektion gibt Ihnen Klarheit.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-sm" data-testid="button-inspection">
              <a href="tel:08912621964">Kostenlose Inspektion anfragen</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Vorteile einer Sanierung */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-heading font-bold text-secondary mb-4">
              Was Sie von einer Sanierung haben
            </h2>
            <p className="text-muted-foreground">
              Eine Dachsanierung ist keine Ausgabe – sie ist eine Investition in Ihr Zuhause.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-sm shadow-sm" data-testid={`benefit-${index}`}>
                <div className="p-3 bg-primary/10 rounded-sm text-primary shrink-0">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-heading font-bold text-secondary mb-4">
              So einfach geht's – in 4 Schritten zum neuen Dach
            </h2>
            <p className="text-muted-foreground">
              Kein Stress, keine Überraschungen. Wir begleiten Sie vom ersten Anruf bis zur Abnahme.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Kostenloser Dachcheck", desc: "Wir inspizieren Ihr Dach und dokumentieren den Zustand." },
              { step: "2", title: "Transparentes Angebot", desc: "Sie erhalten ein detailliertes Angebot ohne versteckte Kosten." },
              { step: "3", title: "Professionelle Ausführung", desc: "Unser Meisterbetrieb führt die Arbeiten zuverlässig durch." },
              { step: "4", title: "Saubere Übergabe", desc: "Wir räumen auf und übergeben Ihnen Ihr neues Dach." }
            ].map((item, index) => (
              <div key={index} className="text-center" data-testid={`step-${index}`}>
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-secondary mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zweite Kundengeschichte */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center" data-testid="case-study-steinbach">
            <div>
              <h3 className="text-2xl font-heading font-bold text-secondary mb-4">
                Aus der Praxis: Familie Steinbach aus Sendling
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-secondary">Das Problem:</strong> 35 Jahre altes Dach, 
                  undichte Stellen, Schimmel im Dachgeschoss. Die Heizkosten waren explodiert.
                </p>
                <p>
                  <strong className="text-secondary">Die Lösung:</strong> Komplettsanierung mit 
                  moderner Aufsparrendämmung und neuen Tonziegeln. KfW-Förderung: 15.000 Euro.
                </p>
                <p>
                  <strong className="text-secondary">Das Ergebnis:</strong> 40% weniger Heizkosten, 
                  ein trockenes Dachgeschoss – und endlich ruhiger Schlaf bei Sturm.
                </p>
              </div>
            </div>
            <div className="bg-secondary p-8 rounded-sm text-white">
              <Quote className="h-8 w-8 text-primary mb-4" />
              <p className="italic mb-4">
                „Wir dachten, wir müssten das Haus verkaufen. Jetzt bleiben wir – und unsere 
                Enkelkinder lieben das neue Spielzimmer unterm Dach."
              </p>
              <p className="font-bold">– Helga Steinbach</p>
            </div>
          </div>
        </div>
      </section>

      <LeadFunnel />
      <Contact />
      <Footer />
    </div>
  );
}
