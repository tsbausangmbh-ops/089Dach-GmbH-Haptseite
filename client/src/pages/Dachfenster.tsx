import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sun, Wind, ThermometerSun, Shield, ArrowRight, Quote, Phone, Check, Lightbulb } from "lucide-react";
import { Link } from "wouter";
import SEO, { BreadcrumbSchema, ServiceSchema } from "@/components/SEO";

export default function Dachfenster() {
  const benefits = [
    { icon: Sun, title: "40% mehr Tageslicht", desc: "Dachfenster bringen deutlich mehr Licht als Fassadenfenster gleicher Größe" },
    { icon: Wind, title: "Bessere Belüftung", desc: "Frische Luft und angenehmes Raumklima im Dachgeschoss" },
    { icon: ThermometerSun, title: "Moderne Wärmedämmung", desc: "Dreifachverglasung hält Wärme drin und Hitze draußen" },
    { icon: Shield, title: "Einbruchschutz", desc: "Verstärkte Rahmen und Sicherheitsglas auf Wunsch" }
  ];

  const products = [
    { name: "Schwingfenster", desc: "Der Klassiker – einfache Bedienung, bewährt seit Jahrzehnten", ideal: "Ideal für normale Dachneigungen" },
    { name: "Klapp-Schwingfenster", desc: "Öffnet nach außen – maximale Kopffreiheit am Fenster", ideal: "Ideal für Räume mit Ausblick" },
    { name: "Dachbalkon", desc: "Verwandelt Ihr Dach in eine Terrasse mit Geländer", ideal: "Ideal für Dachgeschoss-Wohnungen" },
    { name: "Flachdach-Fenster", desc: "Lichtlösungen für flache oder gering geneigte Dächer", ideal: "Ideal für moderne Architektur" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Dachfenster München | Tageslichtlösungen & Velux Einbau"
        description="Neue Dachfenster, Lichtkuppeln und Velux-Lösungen inklusive Planung, Montage und Innenausbau in München. Mehr Licht für Ihr Zuhause."
        canonical="https://089dach.de/dachfenster"
        keywords="dachfenster münchen, velux einbau münchen, tageslicht dach münchen, dachfenster austausch münchen"
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Dachfenster", url: "/dachfenster" }]} />
      <ServiceSchema 
        pageName="Dachfenster München"
        services={[
          { name: "Velux & Roto Einbau", description: "Professionelle Montage von Marken-Dachfenstern" },
          { name: "Dachfenster-Austausch", description: "Schneller Wechsel ohne Dreck und Staub" },
          { name: "Lichtkuppeln", description: "Tageslichtlösungen für Flachdächer" }
        ]}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Dachfenster München</span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-secondary mt-4 mb-6">
              Lassen Sie endlich Licht in Ihr Leben
            </h1>
            
            {/* Emotionale Einleitung */}
            <div className="bg-white p-6 rounded-sm shadow-sm border-l-4 border-primary mb-8">
              <p className="text-lg text-secondary font-medium mb-3">
                Kennen Sie das Gefühl?
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Oben unterm Dach ist es dunkel und stickig. Der Raum hat so viel Potenzial – 
                aber er fühlt sich an wie ein Keller. <strong className="text-secondary">Dabei könnte 
                genau hier Ihr Lieblingsplatz sein.</strong> Ein Arbeitszimmer mit Blick in den Himmel. 
                Ein Kinderzimmer, in dem es nie düster wird. Ein Schlafzimmer, das Sie mit Sonnenlicht weckt.
              </p>
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Mit dem richtigen Dachfenster verwandeln Sie dunkle Räume in lichtdurchflutete 
              Wohlfühloasen – <strong>oft in nur einem Tag eingebaut.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-sm" data-testid="button-hero-consultation">
                <a href="tel:08912621964">
                  <Phone className="mr-2 h-5 w-5" />
                  Beratung anfragen
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Story */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center" data-testid="testimonial-berger">
              <div>
                <Lightbulb className="h-12 w-12 text-primary mb-6" />
                <h2 className="text-3xl font-heading font-bold mb-4">
                  Vorher: Abstellkammer. Nachher: Traumzimmer.
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Familie Berger aus Bogenhausen nutzte ihr Dachgeschoss 20 Jahre lang als Lager. 
                  „Da oben geht man nicht hin, da ist es dunkel und muffig", sagten sie.
                </p>
                <p className="text-white font-medium">
                  Heute? Ein helles Home-Office mit zwei VELUX-Fenstern – und der beste Platz im ganzen Haus.
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-sm">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="italic mb-4">
                  „Ich verbringe jetzt jeden Tag dort oben. Morgens die erste Sonne, abends 
                  die Sterne. Warum haben wir das nicht schon vor 20 Jahren gemacht?"
                </p>
                <p className="font-bold">– Thomas Berger, Bogenhausen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-heading font-bold text-secondary mb-4">
              Was ein neues Dachfenster für Sie tut
            </h2>
            <p className="text-muted-foreground">
              Mehr als nur ein Loch im Dach – ein Gewinn an Lebensqualität.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 bg-gray-50 p-6 rounded-sm" data-testid={`benefit-${index}`}>
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

      {/* Produkte */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-heading font-bold text-secondary mb-4">
              Das richtige Fenster für Ihre Situation
            </h2>
            <p className="text-muted-foreground">
              Als zertifizierter VELUX-Partner beraten wir Sie herstellerunabhängig – 
              damit Sie die beste Lösung bekommen, nicht die teuerste.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow" data-testid={`product-${index}`}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-3">{product.desc}</p>
                  <p className="text-sm text-primary font-medium">{product.ideal}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-heading font-bold text-secondary mb-4">
              Von der Idee zum Licht – so läuft's ab
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Beratung vor Ort", desc: "Wir schauen uns Ihr Dach an und besprechen Ihre Wünsche." },
              { step: "2", title: "Maßgeschneidertes Angebot", desc: "Sie erhalten ein Festpreisangebot ohne versteckte Kosten." },
              { step: "3", title: "Einbau in 1-2 Tagen", desc: "Sauber, schnell und ohne große Baustelle im Haus." },
              { step: "4", title: "Freude am Licht", desc: "Genießen Sie Ihr neues, helles Zuhause." }
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

      {/* FAQ Teaser */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Häufige Fragen zu Dachfenstern
          </h2>
          <div className="max-w-2xl mx-auto space-y-4 text-left mt-8">
            <div className="bg-white/10 p-4 rounded-sm" data-testid="faq-item-0">
              <p className="font-bold mb-2">Brauche ich eine Baugenehmigung?</p>
              <p className="text-gray-300">In den meisten Fällen nicht – wir prüfen das für Sie.</p>
            </div>
            <div className="bg-white/10 p-4 rounded-sm" data-testid="faq-item-1">
              <p className="font-bold mb-2">Wird es im Sommer zu heiß?</p>
              <p className="text-gray-300">Mit Hitzeschutz-Markisen und Rollläden bleibt es angenehm.</p>
            </div>
            <div className="bg-white/10 p-4 rounded-sm" data-testid="faq-item-2">
              <p className="font-bold mb-2">Was kostet ein Dachfenster mit Einbau?</p>
              <p className="text-gray-300">Je nach Größe und Ausstattung ab ca. 1.500 € – wir erstellen Ihnen ein individuelles Angebot.</p>
            </div>
          </div>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-sm mt-8" data-testid="button-faq-contact">
            <a href="tel:08912621964">Ihre Frage stellen</a>
          </Button>
        </div>
      </section>

      <LeadFunnel />
      <Contact />
      <Footer />
    </div>
  );
}
