import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import LeadFunnel from "@/components/LeadFunnel";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, AlertTriangle, Clock, Shield, Euro, ThermometerSun, ArrowRight, Quote, Phone, Award, Users } from "lucide-react";
import { Link } from "wouter";
import SEO, { BreadcrumbSchema, ServiceSchema } from "@/components/SEO";
import heroImage from "@assets/generated_images/realistic_renovated_roof_obermenzing_after.png";
import RelatedServices from "@/components/RelatedServices";
import { TextWithKeywordLinks } from "@/components/KeywordLink";

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
        title="Was kostet Dachsanierung München? Preise & Förderung 2025"
        description="Was kostet Dachsanierung pro m²? Ab 150€/m² inkl. Dämmung. ✓ Bis 30% Heizkosten sparen ✓ 20% KfW-Förderung ✓ Festpreis-Garantie. Kostenlose Beratung ☎ 089 12621964"
        canonical="https://089dach.de/leistungen/dachsanierung"
        keywords="was kostet dachsanierung pro qm münchen, dachsanierung einfamilienhaus kosten 2024 2025, wie lange dauert dachsanierung, wann muss dach saniert werden anzeichen, lohnt sich dachsanierung bei altem haus, dachsanierung ohne auszug möglich, kfw förderung dachsanierung 2025 antrag, energetische sanierung dach pflicht geg, dachsanierung mit dämmung kosten erfahrungen, altes dach erneuern oder reparieren, dachsanierung altbau vor 1970 asbest, dachsanierung münchen obermenzing pasing laim schwabing sendling"
        aiSummary="089Dach GmbH bietet professionelle Dachsanierung in München-Obermenzing mit energetischer Beratung und KfW-Förderung. Kosten ab 150€/m². Bis zu 30% Heizkosten sparen. 10 Jahre Garantie. Telefon: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Dachsanierung", url: "/leistungen/dachsanierung" }]} />
      <ServiceSchema 
        pageName="Dachsanierung München"
        services={[
          { name: "Energetische Dachsanierung", description: "Wärmedämmung nach GEG mit bis zu 30% Heizkosten-Ersparnis" },
          { name: "Komplettsanierung", description: "Neue Eindeckung mit 25 Jahren Garantie" },
          { name: "KfW-Förderberatung", description: "Bis zu 20% Förderung durch BAFA und KfW" }
        ]}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-6 pb-8 md:pt-10 md:pb-12 bg-secondary relative overflow-hidden min-h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Saniertes Steildach Einfamilienhaus Obermenzing - energetische Dachsanierung München"
            className="w-full h-full object-cover"
            width={1792}
            height={1024}
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/50"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-2xl text-white">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Dachsanierung München</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mt-4 mb-6">
              Ihr Dach macht Ihnen Sorgen?
            </h1>
            <p className="text-xl text-gray-200 max-w-xl mb-4">
              Eine Dachsanierung muss kein Albtraum sein. Mit der richtigen Planung, transparenten Kosten und einem erfahrenen Team wird Ihr Zuhause wieder sicher.
            </p>
            <p className="text-lg text-gray-300 max-w-xl">
              Wir begleiten Sie vom ersten Anruf bis zur Abnahme – mit bis zu 30% weniger Heizkosten und Förderung durch KfW & BAFA.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <div className="bg-stone-100 py-2 border-b border-stone-200">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-4 text-xs">
            <span className="flex items-center gap-1.5">
              <Award className="h-4 w-4 text-primary" />
              <span>Meister für Dach- und Spenglerei seit 1998</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-primary" />
              <span>10 Jahre Garantie</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="h-4 w-4 text-primary" />
              <span>100+ zufriedene Kunden</span>
            </span>
          </div>
        </div>
      </div>
      <BackButton />

      {/* Kundengeschichte */}
      <section className="py-6 md:py-10 bg-secondary text-white">
        <div className="container mx-auto px-6 lg:px-12">
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
      <section id="warnsignale" className="py-6">
        <div className="container mx-auto px-6 lg:px-12">
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
                    <div className="p-2 bg-primary/10 rounded-xl text-primary shrink-0">
                      <signal.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary mb-1">{signal.title}</h3>
                      <p className="text-muted-foreground text-sm"><TextWithKeywordLinks currentPath="/leistungen/dachsanierung">{signal.desc}</TextWithKeywordLinks></p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-primary/10 p-8 rounded-xl text-center">
            <p className="text-lg text-secondary font-medium mb-4">
              Erkennen Sie eines oder mehrere dieser Warnsignale?
            </p>
            <p className="text-muted-foreground mb-6">
              Warten Sie nicht, bis es zu spät ist. Eine kostenlose Dachinspektion gibt Ihnen Klarheit.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-xl" data-testid="button-inspection">
              <a href="/beratung">Rückruf anfordern</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Vorteile einer Sanierung */}
      <section className="py-6 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-heading font-bold text-secondary mb-4">
              Was Sie von einer Sanierung haben
            </h2>
            <p className="text-muted-foreground">
              Eine Dachsanierung ist keine Ausgabe – sie ist eine Investition in Ihr Zuhause.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm" data-testid={`benefit-${index}`}>
                <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground"><TextWithKeywordLinks currentPath="/leistungen/dachsanierung">{benefit.desc}</TextWithKeywordLinks></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="py-6">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-heading font-bold text-secondary mb-4">
              So einfach geht's – in 4 Schritten zum neuen Dach
            </h2>
            <p className="text-muted-foreground">
              Kein Stress, keine Überraschungen. Wir begleiten Sie vom ersten Anruf bis zur Abnahme.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
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
                <p className="text-muted-foreground text-sm"><TextWithKeywordLinks currentPath="/leistungen/dachsanierung">{item.desc}</TextWithKeywordLinks></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zweite Kundengeschichte */}
      <section className="py-5 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4 items-center" data-testid="case-study-steinbach">
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
            <div className="bg-secondary p-8 rounded-xl text-white">
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
      <RelatedServices 
        currentPage="dachsanierung" 
        relatedIds={["energieberatung", "bedachungen", "wartung", "referenzen"]}
      />
      <Contact />
      <Footer />
    </div>
  );
}
