import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import Contact from "@/components/Contact";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ThermometerSnowflake, ArrowRight, ArrowLeft, Euro, Home, Phone, AlertTriangle, TrendingDown, Clock, Shield, Users, Star, Calculator } from "lucide-react";
import { Link } from "wouter";
import SEO, { BreadcrumbSchema, FAQPageSchema, ArticleSchema, HowToSchema } from "@/components/SEO";
import heroImage from "@assets/generated_images/roof_insulation_installation_scene.png";
import { KeywordLink } from "@/components/KeywordLink";

export default function RatgeberDaemmung() {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Was kostet Dachdämmung München? Preise & 40% Förderung 2025"
        description="Dachdämmung Kosten ab 80€/m² ✓ Bis 40% KfW-Förderung ✓ 30% Heizkosten sparen ✓ Aufsparrendämmung vs Zwischensparrendämmung. Kostenlose Beratung!"
        canonical="https://089dach.de/ratgeber/daemmung"
        keywords="was kostet dachdämmung pro qm, dachdämmung kosten einfamilienhaus, aufsparrendämmung kosten münchen, zwischensparrendämmung preis, kfw förderung dachdämmung 2025, dachdämmung altbau kosten, wie viel spart dachdämmung heizkosten, untersparrendämmung kosten nachträglich, einblasdämmung dach erfahrungen, mineralwolle oder holzfaser dämmung, dämmstoff wlg vergleich, dampfbremse dachschräge anbringen, wärmebrücken dach vermeiden, dachdämmung u-wert berechnen, dachdämmung schimmel verhindern, dachdämmung sommer hitzeschutz, dachdämmung schallschutz verbessern, dachboden dämmen oberste geschossdecke, dachdämmung münchen erfahrungen empfehlung, nachrüstpflicht dämmung altbau geg"
        aiSummary="089Dach GmbH: Dachdämmung in München mit bis zu 30% Heizkosten-Ersparnis. Aufsparrendämmung und Zwischensparrendämmung. Bis zu 40% staatliche Förderung. Kostenlose Vor-Ort-Beratung. Telefon: 089 12621964."
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" }, 
        { name: "Tipps & Tricks", url: "/ratgeber" },
        { name: "Dachsanierung mit Dämmung", url: "/ratgeber/daemmung" }
      ]} />
      <FAQPageSchema faqs={[
        { question: "Was kostet Dachdämmung pro Quadratmeter?", answer: "Zwischensparrendämmung kostet 80-120€/m², Aufsparrendämmung 150-250€/m² (jeweils inkl. Einbau). Bei einem typischen Einfamilienhaus (100m² Dachfläche) liegen die Gesamtkosten zwischen 8.000€ und 25.000€." },
        { question: "Wie viel Heizkosten spart Dachdämmung?", answer: "Eine fachgerechte Dachdämmung spart durchschnittlich 20-30% der Heizkosten. Bei Heizkosten von 2.000€/Jahr sind das 400-600€ Ersparnis jährlich. Die Investition amortisiert sich in 10-15 Jahren." },
        { question: "Welche Förderung gibt es für Dachdämmung 2025?", answer: "Das BAFA fördert Dachdämmung mit 15% der Kosten. Mit individuellem Sanierungsfahrplan (iSFP) steigt der Zuschuss auf 20%. Bei 20.000€ Dämmkosten sind das bis zu 4.000€ Zuschuss." },
        { question: "Was ist besser: Aufsparren- oder Zwischensparrendämmung?", answer: "Aufsparrendämmung ist thermisch besser und vermeidet Wärmebrücken, kostet aber mehr und ist aufwendiger. Zwischensparrendämmung ist günstiger und schneller, benötigt aber ausreichend Sparrentiefe. Wir beraten individuell vor Ort." },
        { question: "Muss das Dach für die Dämmung neu eingedeckt werden?", answer: "Bei Aufsparrendämmung ja, da die Dämmung von außen auf die Sparren kommt. Bei Zwischensparrendämmung von innen bleibt die Eindeckung erhalten. Sinnvoll: Beides kombinieren bei ohnehin fälliger Neueindeckung." },
        { question: "Wie lange dauert eine Dachdämmung?", answer: "Eine Zwischensparrendämmung dauert bei einem Einfamilienhaus 3-5 Tage. Eine Aufsparrendämmung mit Neueindeckung dauert 1-2 Wochen, je nach Dachgröße und Wetterbedingungen." }
      ]} />
      <ArticleSchema 
        headline="Dachdämmung: Kosten, Förderung und Einsparpotenzial 2025"
        description="Kompletter Ratgeber zur Dachdämmung: Was kostet Aufsparren- vs. Zwischensparrendämmung? Wie viel Heizkosten sparen Sie? Welche KfW/BAFA-Förderung gibt es?"
        datePublished="2025-01-15"
        dateModified="2025-12-19"
        keywords={["Dachdämmung Kosten", "Aufsparrendämmung", "Zwischensparrendämmung", "KfW Förderung", "BAFA Förderung", "Heizkosten sparen", "München"]}
      />
      <HowToSchema 
        name="Dachdämmung planen und durchführen"
        description="Schritt-für-Schritt Anleitung zur Planung Ihrer Dachdämmung - von der Bestandsaufnahme bis zur Förderbeantragung"
        totalTime="P14D"
        estimatedCost="8000-25000"
        steps={[
          { name: "Bestandsaufnahme", text: "Lassen Sie den aktuellen Zustand Ihres Daches von einem Fachmann prüfen. Ein Energieberater kann den U-Wert messen." },
          { name: "Dämmvariante wählen", text: "Entscheiden Sie zwischen Aufsparrendämmung (besser, teurer) und Zwischensparrendämmung (günstiger, schneller)." },
          { name: "Förderung beantragen", text: "Beantragen Sie VOR Beginn der Arbeiten die BAFA-Förderung (15-20% Zuschuss). Wir unterstützen Sie dabei." },
          { name: "Angebote einholen", text: "Holen Sie mindestens 2-3 Angebote ein. Achten Sie auf Festpreise und 10 Jahre Garantie." },
          { name: "Dämmung durchführen", text: "Die Dämm-Arbeiten dauern 3-14 Tage je nach Variante und Dachgröße." },
          { name: "Abnahme und Dokumentation", text: "Nach Fertigstellung erhalten Sie alle Unterlagen für Förderung und Energieausweis." }
        ]}
      />
      <Navbar />
      
      <section className="relative min-h-[500px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/60"></div>
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10 py-6">
          <div className="max-w-5xl text-white">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/ratgeber">
                <span className="text-primary hover:underline cursor-pointer">Tipps & Tricks</span>
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-300">Dachsanierung mit Dämmung</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <ThermometerSnowflake className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Jeden Monat verbrennen Sie Geld<br/>
              <span className="text-primary">Das muss nicht sein.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Bis zu <strong className="text-white">30% Ihrer Heizwärme</strong> entweicht ungenutzt durchs Dach. 
              Mit jeder Gasrechnung zahlen Sie für Wärme, die Sie nie spüren.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Die gute Nachricht: Der Staat übernimmt bis zu <strong className="text-primary">40% der Kosten</strong> – 
              aber nur, wenn Sie jetzt handeln.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-6 rounded-xl"
                asChild
                data-testid="button-hero-cta"
              >
                <Link href="/beratung">
                  <Phone className="mr-2 h-5 w-5" />
                  Jetzt kostenlos beraten lassen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-primary text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span>10 Jahre Garantie</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>100+ zufriedene Kunden</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5" />
              <span>Meisterbetrieb seit 1998</span>
            </div>
          </div>
        </div>
      </section>
      <BackButton />

      <section className="py-2 md:py-4 bg-stone-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-12">
              <h2 className="text-2xl font-heading font-bold text-secondary mb-4 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-500" />
                Das passiert gerade in Ihrem Haus:
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sie heizen und heizen – aber richtig warm wird es nie. Die Heizung läuft auf Hochtouren, 
                trotzdem ist es im Obergeschoss kalt. Und dann kommt die Rechnung: <strong>Wieder 200€ mehr als letztes Jahr.</strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                <strong className="text-red-600">Die bittere Wahrheit:</strong> Ihr Dach ist wie ein offenes Fenster – 
                24 Stunden am Tag, 7 Tage die Woche. Die Wärme, für die Sie bezahlen, verschwindet einfach nach draußen.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Und mit jedem Winter, den Sie warten, werfen Sie mehr Geld zum Fenster raus. 
                <strong> Buchstäblich.</strong>
              </p>
            </div>

            <div className="bg-primary/10 border border-primary/30 rounded-lg p-8 mb-12 text-center">
              <p className="text-lg font-medium text-secondary mb-4">
                Sie fragen sich: "Kann ich mir eine Dämmung überhaupt leisten?"
              </p>
              <p className="text-2xl font-heading font-bold text-primary mb-2">
                Die bessere Frage ist: Können Sie es sich leisten, KEINE zu haben?
              </p>
              <p className="text-muted-foreground mb-6">
                Jedes Jahr ohne Dämmung kostet Sie 1.000€ oder mehr an unnötigen Heizkosten.
              </p>
              <Button 
                size="lg"
                variant="outline"
                className="font-bold px-8 py-6 rounded-xl border-primary text-primary hover:bg-primary hover:text-white"
                asChild
                data-testid="button-heizkosten-rechner"
              >
                <Link href="/heizkostenrechner">
                  <Calculator className="mr-2 h-5 w-5" />
                  Jetzt Ihre Heizkosten berechnen
                </Link>
              </Button>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-12">
              <h2 className="text-2xl font-heading font-bold text-secondary mb-4">So stoppen Sie den Wärmeverlust – dauerhaft:</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0 mt-1" />
                  <div>
                    <strong className="text-secondary">Professionelle Aufsparrendämmung</strong>
                    <p className="text-muted-foreground">Reduziert den Wärmeverlust um bis zu 75% – Sie spüren den Unterschied sofort</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0 mt-1" />
                  <div>
                    <strong className="text-secondary">Angenehmes Wohnklima das ganze Jahr</strong>
                    <p className="text-muted-foreground">Im Winter warm, im Sommer kühl – endlich nutzbar auch im Dachgeschoss</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0 mt-1" />
                  <div>
                    <strong className="text-secondary">Bis zu 40% Förderung vom Staat</strong>
                    <p className="text-muted-foreground">Wir kümmern uns um alle Anträge – Sie müssen sich um nichts kümmern</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0 mt-1" />
                  <div>
                    <strong className="text-secondary">Wertsteigerung Ihrer Immobilie</strong>
                    <p className="text-muted-foreground">Ein gedämmtes Dach macht Ihr Haus 10-15% mehr wert</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-primary rounded-lg p-8 mb-12 shadow-lg">
              <h2 className="text-2xl font-heading font-bold text-secondary mb-6 text-center">
                <TrendingDown className="inline h-6 w-6 text-primary mr-2" />
                Was Sie KONKRET sparen:
              </h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-stone-50 rounded-lg">
                  <p className="text-5xl font-bold text-primary mb-2">30%</p>
                  <p className="text-secondary font-medium">weniger Heizkosten</p>
                  <p className="text-sm text-muted-foreground">ab dem ersten Tag</p>
                </div>
                <div className="text-center p-4 bg-stone-50 rounded-lg">
                  <p className="text-5xl font-bold text-primary mb-2">40%</p>
                  <p className="text-secondary font-medium">staatliche Förderung</p>
                  <p className="text-sm text-muted-foreground">wir beantragen für Sie</p>
                </div>
                <div className="text-center p-4 bg-stone-50 rounded-lg">
                  <p className="text-5xl font-bold text-primary mb-2">50+</p>
                  <p className="text-secondary font-medium">Jahre Lebensdauer</p>
                  <p className="text-sm text-muted-foreground">einmal richtig, dann Ruhe</p>
                </div>
              </div>
              <div className="text-center">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-6 rounded-xl"
                  asChild
                  data-testid="button-mid-cta"
                >
                  <Link href="/beratung">
                    <Phone className="mr-2 h-5 w-5" />
                    Jetzt Ersparnis berechnen lassen
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground mt-3">Kostenlos und unverbindlich</p>
              </div>
            </div>

            <div className="bg-secondary text-white rounded-lg p-8 mb-12">
              <h3 className="text-xl font-heading font-bold mb-4 flex items-center gap-2">
                <Home className="h-5 w-5 text-primary" />
                Familie Huber aus Pasing – ein echtes Beispiel:
              </h3>
              <div className="bg-white/10 rounded-lg p-6 mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  <em>"Wir haben jahrelang gezögert. 'Das ist bestimmt zu teuer', dachten wir. 
                  Dann kam der Winter 2022 mit den explodierenden Gaspreisen. <strong className="text-primary">3.200€ Heizkosten</strong> – 
                  für ein Einfamilienhaus!"</em>
                </p>
                <p className="text-lg leading-relaxed">
                  <em>"Nach der Dachsanierung mit Dämmung: nur noch 2.100€. 
                  Das sind <strong className="text-primary">1.100€ Ersparnis – jedes Jahr.</strong> 
                  Dazu gab's 18.000€ Förderung. Hätten wir das mal früher gemacht!"</em>
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  FH
                </div>
                <div>
                  <p className="font-bold">Familie Huber</p>
                  <p className="text-sm text-gray-400">Pasing, München • <KeywordLink keyword="Dachsanierung" className="text-gray-400 hover:text-primary" /> 2023</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-12">
              <div className="flex items-start gap-4">
                <Clock className="h-8 w-8 text-amber-600 shrink-0" />
                <div>
                  <h3 className="text-xl font-heading font-bold text-secondary mb-2">
                    Wichtig: Die Fördertöpfe leeren sich schnell
                  </h3>
                  <p className="text-muted-foreground">
                    Die staatliche Förderung von bis zu 40% ist an Budgets gebunden. 
                    Wenn das Budget für 2025 aufgebraucht ist, müssen Sie auf nächstes Jahr warten – 
                    <strong> und zahlen ein weiteres Jahr volle Heizkosten.</strong>
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Wer jetzt handelt, sichert sich die maximale Förderung.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-stone-200 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-heading font-bold text-secondary mb-6 text-center">
                So einfach geht's – in 4 Schritten zur gedämmten Wohlfühloase:
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-secondary">Sie rufen uns an (2 Minuten)</h3>
                    <p className="text-muted-foreground">Oder fordern einen Rückruf an. Wir melden uns noch am selben Tag.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-secondary">Kostenlose Vor-Ort-Beratung</h3>
                    <p className="text-muted-foreground">Wir schauen uns Ihr Dach an und berechnen Ihr persönliches Einsparpotenzial.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-secondary">Festpreis-Angebot inkl. Förderberatung</h3>
                    <p className="text-muted-foreground">Sie wissen genau, was es kostet – und wie viel Sie vom Staat zurückbekommen.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">4</div>
                  <div>
                    <h3 className="font-bold text-secondary">Professionelle Umsetzung mit Garantie</h3>
                    <p className="text-muted-foreground">Wir kümmern uns um alles – von der Förderantragstellung bis zur sauberen Baustelle.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary text-white rounded-lg p-8 mb-12 text-center">
              <h2 className="text-3xl font-heading font-bold mb-4">
                Bereit, ab nächsten Winter weniger zu heizen?
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Lassen Sie uns gemeinsam ausrechnen, wie viel Sie sparen können.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-bold px-10 py-6 rounded-xl text-lg"
                  asChild
                  data-testid="button-bottom-cta"
                >
                  <Link href="/beratung">
                    <Phone className="mr-2 h-5 w-5" />
                    Jetzt kostenlos beraten lassen
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Keine Wartezeit • Noch diese Woche Termin möglich
              </p>
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                variant="outline"
                className="font-bold px-8 py-6 rounded-xl"
                asChild
              >
                <Link href="/ratgeber">
                  Zurück zu Tipps & Tricks
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

          </div>
        </div>
      </section>

      <LeadFunnel 
        headline="Dachdämmung – der Ratgeber für Hausbesitzer"
        subheadline="Wir beraten zu allen Möglichkeiten."
        description="Umfassender Ratgeber zur Dachdämmung – Materialien, Kosten und Fördermöglichkeiten."
      />
      <Contact 
        title="Dämmung für Ihr Dach planen?"
        description="Wir beraten Sie zu allen Dämm-Methoden und Fördermöglichkeiten – kostenlos und unverbindlich vor Ort."
      />
      <Footer />
    </div>
  );
}
