import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIBeraterSection from "@/components/AIBeraterSection";
import BackButton from "@/components/BackButton";
import LeadFunnel from "@/components/LeadFunnel";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, AlertTriangle, Clock, Shield, Euro, ThermometerSun, ArrowRight, Quote, Phone, Award, Users } from "lucide-react";
import { Link } from "wouter";
import SEO, { BreadcrumbSchema, ServiceSchema, ProductServiceSchema, FAQPageSchema, LocalBusinessSchema } from "@/components/SEO";
import heroImage from "@assets/generated_images/realistic_renovated_roof_obermenzing_after.webp";
import damagedRoof from "@assets/generated_images/realistic_damaged_roof_obermenzing_before.webp";
import newTileRoof from "@assets/generated_images/obermenzing_house_new_roof_after.webp";
import roofInsulation from "@assets/generated_images/roof_insulation_installation_scene.webp";
import completedRoof from "@assets/generated_images/completed_roof_showcase_reference.webp";
import ImageGallery from "@/components/ImageGallery";
import { TextWithKeywordLinks } from "@/components/KeywordLink";
import { ServiceGeoLinks } from "@/components/GeoLinks";
import AIEnhancedFAQ from "@/components/AIEnhancedFAQ";
import CTACluster from "@/components/CTACluster";
import ProofStack from "@/components/ProofStack";
import ProcessSteps from "@/components/ProcessSteps";
import FoerderungBox from "@/components/FoerderungBox";
import { CostEscalationBanner, DecisionPressureBanner } from "@/components/UrgencyBanner";

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
        title="Dachsanierung München – Energetisch modernisieren & sparen"
        description="Dachsanierung in München: Energetisch modernisieren, dämmen & sparen. Meisterbetrieb mit 25+ Jahren Erfahrung, Festpreis & Fördermittel-Beratung."
        canonical="https://089dach.de/leistungen/dachsanierung"
        keywords="Dachsanierung München, energetische Dachsanierung, Dach dämmen München, Dachmodernisierung, Sanierung Dach Kosten München, Fördermittel Dachsanierung"
        geoPlacename="München, Bayern, Deutschland"
        aiSummary="089Dach GmbH – Dachdecker-Meisterbetrieb in München-Obermenzing. Dachsanierung ab 85€/m² inkl. Dämmung. 30% Heizkosten sparen. 20% KfW/BAFA-Förderung. 10 Jahre Garantie. Festpreisgarantie. Servicegebiet: München und Umland. Tel: 089 12621964."
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
      <ProductServiceSchema 
        name="Dachsanierung München"
        description="Professionelle energetische Dachsanierung mit Dämmung, neuer Eindeckung und bis zu 20% KfW-Förderung. Meisterbetrieb seit 1998."
        priceFrom={195}
        priceTo={350}
        priceUnit="pro m²"
        category="Dachsanierung"
      />
      <FAQPageSchema faqs={[
        { question: "Was kostet eine Dachsanierung pro m² in München?", answer: "In München kostet eine Dachsanierung ab 195€/m² inkl. Dämmung. Ohne Dämmung ab 120€/m². Eine Komplettsanierung für 120m² Dachfläche liegt bei ca. 24.000-32.000€." },
        { question: "Wie lange dauert eine Dachsanierung?", answer: "Ein Einfamilienhaus (100-150m²) dauert 1-2 Wochen bei guter Witterung. Sie müssen in der Regel nicht ausziehen - wir arbeiten von außen." },
        { question: "Wann muss ein Dach saniert werden?", answer: "Typische Anzeichen: Wasserflecken an der Decke, verrutschte Ziegel, starker Moosbewuchs, hohe Heizkosten, Dach älter als 40 Jahre. Bei diesen Zeichen sollten Sie handeln." },
        { question: "Gibt es Förderung für Dachsanierung 2025?", answer: "Ja! BAFA fördert energetische Dachsanierung mit 15-20% Zuschuss (bis 6.000€). KfW bietet zinsgünstige Kredite bis 150.000€. Wir helfen beim Antrag." },
        { question: "Kann man eine Dachsanierung im Winter machen?", answer: "Ja, bei Temperaturen über 5°C ist eine Sanierung möglich. Wir schützen den Innenraum mit Planen. Einige Arbeiten wie Dämmung sind auch bei Kälte machbar." },
        { question: "Brauche ich eine Baugenehmigung für die Dachsanierung in München?", answer: "Bei reiner Sanierung (gleiche Form und Höhe) ist in München keine Genehmigung nötig. Bei Gauben, Dachaufstockung oder Nutzungsänderung ist ein Bauantrag beim Referat für Stadtplanung erforderlich." },
        { question: "Welche Dämmung ist bei Dachsanierung am besten?", answer: "Aufsparrendämmung ist am effektivsten (U-Wert bis 0,14 W/m²K), kostet aber mehr (ab 200€/m²). Zwischensparrendämmung ist günstiger (ab 80€/m²). Wir beraten Sie zur optimalen Lösung für Ihr Münchner Altbau oder Neubau." },
        { question: "Übernimmt die Versicherung Dachsanierungskosten?", answer: "Bei Sturmschäden (ab Windstärke 8) zahlt die Wohngebäudeversicherung. Alterungsbedingte Sanierung ist nicht versichert. Wir dokumentieren Sturmschäden für Ihre Versicherung kostenlos." }
      ]} />
      <LocalBusinessSchema />
      <Navbar />
      <main id="main-content" role="main" tabIndex={-1}>
      <AIBeraterSection 
        pageName="Dachsanierung"
        description="Was kostet eine Dachsanierung? Welche Förderung gibt es? Unser KI-Berater beantwortet Ihre Fragen zur Dachsanierung sofort."
      />
      
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
          <div className="max-w-6xl text-white">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Dachsanierung München</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mt-4 mb-6">
              <strong>Dachsanierung München</strong> – Kosten, Förderung & Ablauf
            </h1>
            <p className="text-xl text-gray-200 max-w-xl mb-4">
              Eine <strong>Dachsanierung</strong> muss kein Albtraum sein. Mit der richtigen Planung, transparenten Kosten und einem erfahrenen <strong>Meisterbetrieb</strong> wird Ihr Zuhause wieder sicher.
            </p>
            <p className="text-lg text-gray-300 max-w-xl">
              Wir begleiten Sie vom ersten Anruf bis zur Abnahme – mit bis zu 30% weniger <strong>Heizkosten</strong> und <strong>KfW-Förderung</strong> bis 20%.
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

      {/* Kundengeschichte */}
      <section className="py-3 md:py-5 bg-secondary text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-7xl mx-auto" data-testid="testimonial-kramer">
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
          <div className="max-w-6xl mb-12">
            <h2 className="text-3xl font-heading font-bold text-secondary text-center mb-4">
              <strong>Dach sanieren München</strong> – 089Dach GmbH zeigt 6 Warnsignale
            </h2>
            <p className="text-muted-foreground">
              Je früher Sie bei Ihrer <strong>Dachsanierung Einfamilienhaus</strong> handeln, desto günstiger wird es. Erkennen Sie diese Zeichen bei Ihrem <strong>Steildach</strong> oder <strong>Altbau</strong>?
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
              Warten Sie nicht, bis es zu spät ist. Eine kostenlose <strong>Dachinspektion</strong> durch unseren <strong>Dachdeckermeister</strong> gibt Ihnen Klarheit über <strong>Dachstuhl</strong>, <strong>Eindeckung</strong> und <strong>Bausubstanz</strong>.
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
          <div className="max-w-6xl mb-12">
            <h2 className="text-3xl font-heading font-bold text-secondary text-center mb-4">
              <strong>Dachsanierung</strong> mit 089Dach GmbH – Heizkosten sparen, Wert steigern
            </h2>
            <p className="text-muted-foreground">
              Eine <strong>Dachsanierung</strong> ist keine Ausgabe – sie ist eine Investition in Ihr <strong>Wohngebäude</strong>. Mit <strong>energetischer Sanierung</strong> und moderner <strong>Wärmedämmung</strong> sparen Sie langfristig.
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

      <ProcessSteps 
        title="Ablauf Dachsanierung München: In 6 Schritten zum neuen Dach"
        subtitle="Planbar, transparent und stressfrei – von der ersten Beratung bis zur 10-Jahres-Garantie."
      />

      <FoerderungBox />

      <ImageGallery
        title="Unsere Dachsanierungen in München"
        images={[
          { src: damagedRoof, alt: "Altes beschädigtes Dach vor der Sanierung", caption: "Vorher: Undichtes Dach mit Wasserschäden" },
          { src: newTileRoof, alt: "Neu eingedecktes Ziegeldach nach Sanierung", caption: "Nachher: Neues Ziegeldach mit Dämmung" },
          { src: roofInsulation, alt: "Dachdämmung wird eingebaut", caption: "Energetische Sanierung mit Aufsparrendämmung" },
          { src: completedRoof, alt: "Fertig saniertes Einfamilienhaus-Dach", caption: "Komplettsanierung mit 10 Jahren Garantie" }
        ]}
        columns={2}
      />

      <CTACluster 
        variant="primary"
        title="Bereit für Ihr neues Dach?"
        subtitle="Kostenlose Beratung · Festpreisangebot · Bis zu 20% Förderung"
      />

      <AIEnhancedFAQ
        title="Häufige Fragen zur Dachsanierung"
        subtitle="Klare Antworten für Ihre Entscheidung – von Münchner Dachdeckermeistern"
        faqs={[
          {
            question: "Was kostet eine Dachsanierung pro m² in München?",
            shortAnswer: "Ab 195€/m² für eine Komplettsanierung mit Dämmung, ab 120€/m² ohne Dämmung.",
            details: "Die Kosten hängen von Dachform, Materialgüte und Dämmstandard ab. Ein 120m²-Dach kostet je nach Ausstattung 24.000-42.000€. Wir erstellen Ihnen ein individuelles Festpreisangebot nach der kostenlosen Inspektion.",
            priceRange: "120-350€ pro m² je nach Umfang",
            localReference: "In München-Schwabing und Bogenhausen liegen die Kosten tendenziell am oberen Ende wegen Denkmalschutz-Auflagen.",
            nextStep: "Fordern Sie jetzt ein kostenloses Angebot für Ihr Dach an →"
          },
          {
            question: "Wie lange dauert eine komplette Dachsanierung?",
            shortAnswer: "Ein Einfamilienhaus (100-150m²) dauert 1-2 Wochen bei guter Witterung.",
            details: "Die Dauer hängt von Dachgröße, Komplexität und Wetter ab. Doppelhaushälften oft 5-7 Tage, größere Villen 2-3 Wochen. Wir arbeiten von außen – Sie müssen in der Regel nicht ausziehen.",
            localReference: "In München haben wir pro Jahr etwa 200 Sonnentage – ideale Bedingungen für Dacharbeiten von März bis November.",
            nextStep: "Vereinbaren Sie einen Beratungstermin für die Zeitplanung →"
          },
          {
            question: "Welche Förderung gibt es für Dachsanierung 2025?",
            shortAnswer: "BAFA fördert mit 15-20% Zuschuss (bis 6.000€), KfW bietet zinsgünstige Kredite.",
            details: "Für energetische Sanierung mit U-Wert unter 0,14 W/m²K gibt es 15% Basis-Förderung. Mit individuellem Sanierungsfahrplan (iSFP) erhöhen Sie auf 20%. Wir übernehmen die Antragsstellung und arbeiten mit zertifizierten Energieberatern zusammen.",
            priceRange: "Förderung von 3.000-12.000€ je nach Maßnahme",
            localReference: "München bietet zusätzlich das Förderprogramm 'Energieeinsparung' mit bis zu 40% auf Energieberatung.",
            nextStep: "Lassen Sie uns Ihre Fördermöglichkeiten berechnen →"
          },
          {
            question: "Kann man eine Dachsanierung im Winter durchführen?",
            shortAnswer: "Ja, bei Temperaturen über 5°C und trockener Witterung ist eine Sanierung möglich.",
            details: "Wir schützen den Innenraum mit wetterfesten Planen. Dämmarbeiten sind auch bei Kälte machbar. Bitumenbahnen und manche Klebstoffe benötigen allerdings Mindesttemperaturen. Winter-Termine sind oft kurzfristiger verfügbar.",
            localReference: "In München sind die Monate November bis Februar am herausforderndsten. Wir planen Puffertage ein für Witterungsunterbrechungen.",
            nextStep: "Fragen Sie nach einem Winter-Termin mit Witterungsgarantie →"
          },
          {
            question: "Brauche ich eine Baugenehmigung für die Dachsanierung?",
            shortAnswer: "Bei reiner Sanierung (gleiche Form und Höhe) ist in München keine Genehmigung nötig.",
            details: "Sobald Sie die Dachform ändern, Gauben hinzufügen oder das Dachgeschoss ausbauen, benötigen Sie einen Bauantrag beim Referat für Stadtplanung. In Erhaltungssatzungsgebieten gelten zusätzliche Regeln. Wir beraten Sie vorab, was genehmigungspflichtig ist.",
            localReference: "Besonders in Altschwabing, Lehel und Bogenhausen gelten strenge Auflagen für Dachänderungen.",
            nextStep: "Wir klären die Genehmigungsfragen für Sie →"
          },
          {
            question: "Welche Dämmung ist bei Dachsanierung am besten?",
            shortAnswer: "Aufsparrendämmung ist am effektivsten, Zwischensparrendämmung ist günstiger.",
            details: "Aufsparrendämmung erreicht U-Werte bis 0,14 W/m²K und kostet ab 200€/m². Sie wird bei Neueindeckung von außen angebracht. Zwischensparrendämmung (ab 80€/m²) ist ideal, wenn die Eindeckung intakt bleiben soll.",
            priceRange: "Zwischensparren ab 80€/m², Aufsparren ab 200€/m²",
            localReference: "Für Münchner Altbauten vor 1970 empfehlen wir meist die Aufsparrendämmung – sie vermeidet Wärmebrücken an den Sparren.",
            nextStep: "Welche Dämmung passt zu Ihrem Dach? Jetzt beraten lassen →"
          },
          {
            question: "Übernimmt die Versicherung Dachsanierungskosten?",
            shortAnswer: "Bei Sturmschäden (ab Windstärke 8) zahlt die Wohngebäudeversicherung.",
            details: "Alterungsbedingte Sanierung ist nicht versichert. Wichtig: Schäden sofort dokumentieren und melden. Wir erstellen Ihnen kostenlos einen Schadensbericht mit Fotos für Ihre Versicherung.",
            localReference: "Nach Sturm Friederike 2018 hatten viele Münchner Dächer Schäden – wir haben über 50 Versicherungsfälle erfolgreich abgewickelt.",
            nextStep: "Sturmschaden? Rufen Sie uns für die Schadensaufnahme an →"
          },
          {
            question: "Ist eine Dachsanierung steuerlich absetzbar?",
            shortAnswer: "Ja! Handwerkerkosten können Sie zu 20% (max. 1.200€/Jahr) absetzen.",
            details: "Alternativ: Bei Vermietung sind alle Kosten als Werbungskosten absetzbar. Energetische Sanierung am selbstgenutzten Wohneigentum kann über 3 Jahre mit 20% direkt von der Steuerschuld abgezogen werden (§35c EStG).",
            priceRange: "Steuerersparnis von 1.200 bis 40.000€ je nach Situation",
            localReference: "Wir stellen Rechnungen GoBD-konform aus – optimal für Ihre Steuererklärung.",
            nextStep: "Sprechen Sie mit Ihrem Steuerberater über Ihre Optionen →"
          }
        ]}
      />

      <ProofStack
        title="Warum Münchner uns vertrauen"
        reviews={[
          {
            name: "Familie Kramer",
            location: "München-Laim",
            rating: 5,
            text: "Drei Jahre hatten wir gewartet – ein Fehler. Die Sanierung durch 089Dach war dann aber reibungslos. Faire Preise und ein Team, das sauber arbeitet.",
            project: "Komplettsanierung Steildach",
            date: "März 2024"
          },
          {
            name: "Dr. M. Steinbach",
            location: "München-Sendling",
            rating: 5,
            text: "35 Jahre altes Dach, Schimmel im Dachgeschoss. Jetzt haben wir 40% weniger Heizkosten und ein neues Spielzimmer für die Enkelkinder unterm Dach.",
            project: "Energetische Sanierung mit KfW-Förderung",
            date: "Oktober 2023"
          },
          {
            name: "A. Weber",
            location: "München-Bogenhausen",
            rating: 5,
            text: "Denkmalgerechte Schieferdeckung an unserer Altbau-Villa. Handwerkskunst auf höchstem Niveau. Selbst das Denkmalamt war begeistert.",
            project: "Denkmalschutz-Dachsanierung",
            date: "November 2023"
          }
        ]}
      />

      <section className="py-6 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <ServiceGeoLinks currentService="Dachsanierung" />
          </div>
        </div>
      </section>

      <CostEscalationBanner />
      
      <LeadFunnel 
        headline="Dachsanierung in München?"
        subheadline="Wir machen Ihr Dach zukunftssicher."
        description="Ihre Dachsanierung vom Münchner Meisterbetrieb – wir sanieren schnell, fair und zuverlässig. Je länger Sie warten, desto teurer wird es."
      />
      
      <DecisionPressureBanner />
      
      <Contact 
        title="Ihr Dach braucht eine Sanierung?"
        description="Wir beraten Sie kostenlos vor Ort zu Dachsanierung, Dämmung und Fördermöglichkeiten. Fordern Sie jetzt Ihr unverbindliches Angebot an."
      />
      </main>
      <Footer />
    </div>
  );
}
