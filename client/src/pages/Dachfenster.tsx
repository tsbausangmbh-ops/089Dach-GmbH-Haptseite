import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import LeadFunnel from "@/components/LeadFunnel";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sun, Wind, ThermometerSun, Shield, ArrowRight, Quote, Phone, Check, Lightbulb, Award, Users } from "lucide-react";
import { Link } from "wouter";
import SEO, { BreadcrumbSchema, ServiceSchema } from "@/components/SEO";
import heroImage from "@assets/generated_images/bright_attic_room_after_skylights.png";
import RelatedServices from "@/components/RelatedServices";

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
        title="Dachfenster München | Velux Einbau & Austausch - 089Dach"
        description="Dachfenster-Einbau vom Meister: Velux, Roto, Lichtkuppeln. 40% mehr Tageslicht, Einbau in 1-2 Tagen. Jetzt Beratung anfordern!"
        canonical="https://089dach.de/leistungen/dachfenster"
        keywords="dachfenster münchen, velux roto fakro schwingfenster klappfenster, dachbalkon cabrio-fenster lichtkuppel lichtband oberlicht, dachfenster obermenzing pasing laim schwabing sendling bogenhausen moosach, dachfenster gräfelfing planegg germering starnberg dachau, dachfenster einbau austausch montage nachträglich kosten"
        aiSummary="089Dach GmbH installiert Dachfenster in München: Velux, Roto, Schwingfenster, Lichtkuppeln. Zertifizierter VELUX-Partner. Einbau in 1-2 Tagen ohne Dreck. Telefon: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Dachfenster", url: "/leistungen/dachfenster" }]} />
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
      <section className="pt-10 pb-12 bg-secondary relative overflow-hidden min-h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Helles Dachgeschoss mit Velux-Dachfenstern - lichtdurchfluteter Wohnraum München"
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
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Dachfenster München</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mt-4 mb-6">
              Lassen Sie endlich Licht in Ihr Leben
            </h1>
            <p className="text-xl text-gray-200 max-w-xl mb-4">
              Mit dem richtigen Dachfenster verwandeln Sie dunkle Räume in lichtdurchflutete Wohlfühloasen – oft in nur einem Tag eingebaut.
            </p>
            <p className="text-lg text-gray-300 max-w-xl">
              Als zertifizierter VELUX-Partner beraten wir Sie herstellerunabhängig – damit Sie die beste Lösung bekommen.
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

      {/* Transformation Story */}
      <section className="py-5 bg-secondary text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 items-center" data-testid="testimonial-berger">
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
              <div className="bg-white/10 p-6 rounded-xl">
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
      <section className="py-6">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-heading font-bold text-secondary mb-4">
              Was ein neues Dachfenster für Sie tut
            </h2>
            <p className="text-muted-foreground">
              Mehr als nur ein Loch im Dach – ein Gewinn an Lebensqualität.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl" data-testid={`benefit-${index}`}>
                <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
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
      <section className="py-6 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
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
      <section className="py-6">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-heading font-bold text-secondary mb-4">
              Von der Idee zum Licht – so läuft's ab
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
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
      <section className="py-5 bg-secondary text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Häufige Fragen zu Dachfenstern
          </h2>
          <div className="max-w-2xl mx-auto space-y-4 text-left mt-8">
            <div className="bg-white/10 p-4 rounded-xl" data-testid="faq-item-0">
              <p className="font-bold mb-2">Brauche ich eine Baugenehmigung?</p>
              <p className="text-gray-300">In den meisten Fällen nicht – wir prüfen das für Sie.</p>
            </div>
            <div className="bg-white/10 p-4 rounded-xl" data-testid="faq-item-1">
              <p className="font-bold mb-2">Wird es im Sommer zu heiß?</p>
              <p className="text-gray-300">Mit Hitzeschutz-Markisen und Rollläden bleibt es angenehm.</p>
            </div>
            <div className="bg-white/10 p-4 rounded-xl" data-testid="faq-item-2">
              <p className="font-bold mb-2">Was kostet ein Dachfenster mit Einbau?</p>
              <p className="text-gray-300">Je nach Größe und Ausstattung ab ca. 1.500 € – wir erstellen Ihnen ein individuelles Angebot.</p>
            </div>
          </div>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-xl mt-8" data-testid="button-faq-contact">
            <a href="/beratung">Rückruf anfordern</a>
          </Button>
        </div>
      </section>

      <LeadFunnel />
      <RelatedServices 
        currentPage="dachfenster" 
        relatedIds={["gaubenbau", "dachsanierung", "energieberatung", "referenzen"]}
      />
      <Contact />
      <Footer />
    </div>
  );
}
