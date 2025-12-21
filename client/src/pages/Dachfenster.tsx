import Navbar from "@/components/Navbar";
import AIBeraterSection from "@/components/AIBeraterSection";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import LeadFunnel from "@/components/LeadFunnel";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sun, Wind, ThermometerSun, Shield, ArrowRight, Quote, Phone, Check, Lightbulb, Award, Users } from "lucide-react";
import { Link } from "wouter";
import SEO, { BreadcrumbSchema, ServiceSchema, ProductServiceSchema, LocalBusinessSchema } from "@/components/SEO";
import heroImage from "@assets/generated_images/bright_attic_room_after_skylights.png";
import darkAttic from "@assets/generated_images/dark_attic_before_window_installation.png";
import brightAttic from "@assets/generated_images/bright_attic_room_after_skylights.png";
import roofWindow from "@assets/generated_images/modern_roof_window_installation.png";
import damagedDormer from "@assets/generated_images/damaged_dormer_window_before.png";
import ImageGallery from "@/components/ImageGallery";
import { TextWithKeywordLinks } from "@/components/KeywordLink";
import { DachfensterMuenchenContent } from "@/components/SEOContent";
import AIEnhancedFAQ from "@/components/AIEnhancedFAQ";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import CTACluster from "@/components/CTACluster";
import ProofStack from "@/components/ProofStack";
import ProcessSteps from "@/components/ProcessSteps";

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
        title="Dachfenster einbauen München | Velux Kosten 2025 ab 1.200€"
        description="Was kostet Dachfenster mit Einbau? Ab 1.200€ komplett. ✓ Velux & Roto ✓ Einbau in 1-2 Tagen ✓ Kein Dreck. Kostenlose Beratung ☎ 089 12621964"
        canonical="https://089dach.de/leistungen/dachfenster"
        keywords="was kostet dachfenster mit einbau münchen, dachfenster nachträglich einbauen altbau kosten, velux dachfenster austauschen lassen preis, dachfenster größe berechnen empfehlung, dachfenster undicht was tun reparatur, mehr licht im dachgeschoss lösung, dachfenster schwingfenster oder klappfenster, lichtkuppel flachdach kosten, dachbalkon velux cabrio erfahrungen kosten, dachfenster förderung kfw 2025, dachfenster obermenzing pasing laim schwabing sendling, dachfenster rollo nachrüsten kosten, sonnenschutz dachfenster außen, hitzeschutz dachfenster sommer, dachfenster elektrisch nachrüsten, roto dachfenster austauschen velux, dachfenster kondenswasser beschlagen, dachfenster einbau genehmigung münchen, dachfenster vergrößern möglich, zweites dachfenster einbauen kosten, dachfenster dreifachverglasung preis, dachfenster schallschutz verbessern, klappfenster vs schwingfenster vorteile"
        aiSummary="089Dach GmbH installiert Dachfenster in München ab 1.200€ komplett. Velux, Roto, Schwingfenster, Lichtkuppeln. Zertifizierter VELUX-Partner. Einbau in 1-2 Tagen ohne Dreck. Telefon: 089 12621964."
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
      <ProductServiceSchema 
        name="Dachfenster Einbau München"
        description="Velux und Roto Dachfenster-Einbau komplett. Einbau in 1-2 Tagen ohne Dreck."
        priceFrom={1200}
        priceTo={3500}
        category="Dachfenster"
      />
      <FAQPageSchema faqs={[
        { question: "Was kostet ein Dachfenster mit Einbau in München?", answer: "Ein Standard-Velux-Dachfenster (78x118cm) mit Einbau kostet ab 1.200€. Größere Fenster (114x140cm) ab 1.800€. Premium-Fenster mit Dreifachverglasung und Rollladen ab 2.500€ komplett." },
        { question: "Wie lange dauert der Einbau eines Dachfensters?", answer: "Der Einbau dauert 1-2 Tage pro Fenster. Bei Austausch eines vorhandenen Fensters oft nur einen halben Tag. Wir arbeiten sauber und hinterlassen keinen Schmutz im Haus." },
        { question: "Brauche ich eine Baugenehmigung für Dachfenster in München?", answer: "Meist nicht! Der Einbau von Dachfenstern ist in Bayern genehmigungsfrei, solange die Dachfläche nicht wesentlich verändert wird. Bei denkmalgeschützten Gebäuden ist eine Abstimmung nötig." },
        { question: "Velux oder Roto - welches Dachfenster ist besser?", answer: "Beide Marken sind hochwertig. Velux hat mehr Zubehör und größere Auswahl. Roto punktet bei Schwingfenstern mit tieferer Griff-Position. Wir beraten Sie neutral und verbauen beide Marken." },
        { question: "Kann man Dachfenster nachträglich in jeden Dachstuhl einbauen?", answer: "Fast immer ja! Die meisten Dachkonstruktionen erlauben den Einbau. Bei tragenden Sparren muss eventuell ein Wechsel eingebaut werden (ca. 200-400€ extra). Wir prüfen die Statik vor Ort." },
        { question: "Wie verhindere ich Hitze im Sommer durch Dachfenster?", answer: "Am effektivsten: Außenmarkisen oder Außenrollläden (ab 350€). Innenrollos helfen weniger. Dreifachverglasung mit Sonnenschutzglas reduziert Hitze um bis zu 70%. Wir beraten zu optimalen Lösungen." },
        { question: "Gibt es Förderung für neue Dachfenster?", answer: "Ja! Bei Dachfenstern mit sehr gutem Uw-Wert (unter 1,0) gibt es BAFA-Förderung von 15% der Kosten. Mit iSFP-Bonus sogar 20%. Ein Velux Integra mit Dreifachverglasung erfüllt die Anforderungen." }
      ]} />
      <LocalBusinessSchema />
      <Navbar />
      <AIBeraterSection />
      
      {/* Hero Section */}
      <section className="pt-6 pb-8 md:pt-10 md:pb-12 bg-secondary relative overflow-hidden min-h-[40vh] flex items-center">
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
          <div className="max-w-6xl text-white">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Dachfenster München</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mt-4 mb-6">
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
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-2 md:gap-4 text-xs">
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
      <section className="py-3 md:py-5 bg-secondary text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 items-center" data-testid="testimonial-berger">
              <div>
                <Lightbulb className="h-12 w-12 text-primary mb-6" />
                <h2 className="text-3xl font-heading font-bold mb-4">
                  Dachfenster einbauen München: Vorher dunkle Abstellkammer, nachher lichtdurchflutetes Traumzimmer
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
          <div className="max-w-6xl mb-12">
            <h2 className="text-3xl font-heading font-bold text-secondary text-center mb-4">
              Velux & Roto Dachfenster München: 4 Vorteile für Ihr Dachgeschoss
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
                  <p className="text-muted-foreground"><TextWithKeywordLinks currentPath="/leistungen/dachfenster">{benefit.desc}</TextWithKeywordLinks></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produkte */}
      <section className="py-6 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mb-12">
            <h2 className="text-3xl font-heading font-bold text-secondary text-center mb-4">
              Schwingfenster, Klappfenster oder Dachbalkon: Das richtige Dachfenster für Ihr Münchner Zuhause
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
                  <p className="text-muted-foreground mb-3"><TextWithKeywordLinks currentPath="/leistungen/dachfenster">{product.desc}</TextWithKeywordLinks></p>
                  <p className="text-sm text-primary font-medium">{product.ideal}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps 
        title="Dachfenster-Einbau: In 6 Schritten zu mehr Licht"
        subtitle="Planbar, transparent und stressfrei – von der ersten Beratung bis zur Garantie."
      />

      {/* FAQ Teaser */}
      <section className="py-5 bg-secondary text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Dachfenster Kosten, Einbau & Förderung: Häufige Fragen beantwortet
          </h2>
          <div className="max-w-6xl mx-auto space-y-4 text-left mt-8">
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

      <ImageGallery
        title="Dachfenster-Einbau vorher/nachher"
        images={[
          { src: darkAttic, alt: "Dunkler Dachboden vor Fenstereinbau", caption: "Vorher: Dunkler Dachboden" },
          { src: brightAttic, alt: "Heller Dachboden nach Fenstereinbau", caption: "Nachher: Lichtdurchflutet" },
          { src: roofWindow, alt: "Modernes Dachfenster wird eingebaut", caption: "Professioneller Einbau" },
          { src: damagedDormer, alt: "Beschädigte Gaube vor Renovierung", caption: "Gauben-Sanierung" }
        ]}
        columns={2}
      />

      <DachfensterMuenchenContent />

      <ProblemSolutionSection
        sectionTitle="Erkennen Sie Ihr Problem?"
        problemTitle="Typische Dachfenster-Probleme"
        solutionTitle="Unsere Lösung für Sie"
        problems={[
          { symptom: "Dunkler, ungemütlicher Dachboden", risk: "Ungenutzter Wohnraum und schlechte Lebensqualität" },
          { symptom: "Kondenswasser am Fenster", risk: "Schimmelgefahr und beschädigte Dichtungen" },
          { symptom: "Hitze im Sommer unerträglich", risk: "Räume unter dem Dach sind nicht nutzbar" },
          { symptom: "Altes Fenster schließt nicht richtig", risk: "Wärmeverlust und erhöhte Heizkosten" }
        ]}
        solutions={[
          { title: "Bis zu 40% mehr Tageslicht", description: "Dachfenster bringen deutlich mehr Licht als Fassadenfenster" },
          { title: "Einbau in 1-2 Tagen", description: "Schnelle, saubere Montage ohne große Baustelle" },
          { title: "Hitzeschutz inklusive", description: "Außenrollläden und Markisen halten die Hitze draußen" },
          { title: "Dreifachverglasung Standard", description: "Beste Wärmedämmung und Schallschutz" }
        ]}
        urgencyMessage="Ein neues Dachfenster verwandelt ungenutzten Dachboden in wertvollen Wohnraum!"
      />

      <CTACluster 
        variant="primary" 
        title="Lassen Sie endlich Licht in Ihr Leben" 
        subtitle="Velux & Roto Partner · Einbau in 1-2 Tagen · 10 Jahre Garantie"
      />

      <AIEnhancedFAQ
        title="Häufige Fragen zu Dachfenstern"
        faqs={[
          {
            question: "Was kostet ein Dachfenster mit Einbau in München?",
            shortAnswer: "Standard-Velux ab 1.200€, größere Fenster ab 1.800€ komplett.",
            details: "Ein Standard-Velux-Dachfenster (78x118cm) mit Einbau kostet ab 1.200€. Größere Fenster (114x140cm) ab 1.800€. Premium-Fenster mit Dreifachverglasung und Rollladen ab 2.500€ komplett. Wir erstellen Ihnen ein individuelles Festpreisangebot.",
            priceRange: "1.200–3.500€ komplett",
            localReference: "In München-Schwabing und Maxvorstadt bauen wir regelmäßig Dachfenster in Altbauten ein.",
            nextStep: "Kostenloses Angebot anfordern →"
          },
          {
            question: "Brauche ich eine Baugenehmigung für Dachfenster in München?",
            shortAnswer: "Meist nicht – der Einbau ist genehmigungsfrei.",
            details: "Der Einbau von Dachfenstern ist in Bayern genehmigungsfrei, solange die Dachfläche nicht wesentlich verändert wird. Bei denkmalgeschützten Gebäuden ist eine Abstimmung mit der Denkmalbehörde nötig. Wir prüfen das für Sie.",
            localReference: "In München beraten wir Sie zu lokalen Bauvorschriften und Bebauungsplänen.",
            nextStep: "Kostenlose Beratung anfordern →"
          },
          {
            question: "Velux oder Roto – welches Dachfenster ist besser?",
            shortAnswer: "Beide hochwertig – Velux hat mehr Zubehör, Roto tiefere Griffposition.",
            details: "Beide Marken sind hochwertig. Velux hat mehr Zubehör und größere Auswahl. Roto punktet bei Schwingfenstern mit tieferer Griff-Position. Als zertifizierter Partner beider Hersteller beraten wir Sie neutral und verbauen beide Marken.",
            localReference: "In München sind beide Marken etabliert – wir empfehlen je nach Einbausituation.",
            nextStep: "Herstellerunabhängige Beratung →"
          },
          {
            question: "Wie verhindere ich Hitze im Sommer durch Dachfenster?",
            shortAnswer: "Außenmarkisen reduzieren Hitze um bis zu 70%.",
            details: "Am effektivsten: Außenmarkisen oder Außenrollläden (ab 350€). Innenrollos helfen weniger. Dreifachverglasung mit Sonnenschutzglas reduziert Hitze um bis zu 70%. Bei Neueinbau empfehlen wir immer Hitzeschutz mitzuplanen.",
            priceRange: "Außenmarkise ab 350€",
            localReference: "Gerade in Münchner Dachgeschossen ist Hitzeschutz unverzichtbar.",
            nextStep: "Hitzeschutz-Beratung anfragen →"
          }
        ]}
      />

      <ProofStack title="Warum 089Dach für Ihre Dachfenster?" />

      <LeadFunnel 
        headline="Mehr Licht unterm Dach?"
        subheadline="Wir verbauen und tauschen Dachfenster."
        description="Ein neues Dachfenster verwandelt dunkle Dachgeschosse in lichtdurchflutete Wohnräume. Einbau in nur einem Tag."
      />
      <Contact 
        title="Mehr Licht unterm Dach gewünscht?"
        description="Wir beraten Sie zu Einbau, Austausch und Reparatur von Dachfenstern aller Marken. Jetzt kostenloses Beratungsgespräch vereinbaren."
      />
      <Footer />
    </div>
  );
}
