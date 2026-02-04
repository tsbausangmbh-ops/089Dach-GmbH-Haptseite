import Navbar from "@/components/Navbar";
import AIBeraterSection from "@/components/AIBeraterSection";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import LeadFunnel from "@/components/LeadFunnel";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Home, Sun, Maximize, Euro, Phone, Quote, Award, Shield, Users } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, ProductServiceSchema, FAQPageSchema, LocalBusinessSchema } from "@/components/SEO";
import AIEnhancedFAQ from "@/components/AIEnhancedFAQ";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import CTACluster from "@/components/CTACluster";
import ProofStack from "@/components/ProofStack";
import ProcessSteps from "@/components/ProcessSteps";
import heroImage from "@assets/generated_images/renovated_dormer_window_after.webp";
import { TextWithKeywordLinks } from "@/components/KeywordLink";
import { ServiceGeoLinks } from "@/components/GeoLinks";
import ImageGallery from "@/components/ImageGallery";
import gaubeImg1 from "@assets/generated_images/altbau_damaged_dormer_before.webp";
import gaubeImg2 from "@assets/generated_images/altbau_renovated_dormer_after.webp";
import gaubeImg3 from "@assets/generated_images/realistic_damaged_dormer_before.webp";
import gaubeImg4 from "@assets/generated_images/realistic_renovated_dormer_after.webp";
import { CostEscalationBanner, DecisionPressureBanner } from "@/components/UrgencyBanner";

export default function Gaubenbau() {
  const benefits = [
    { icon: Maximize, title: "Mehr Wohnraum", desc: "Eine Gaube schafft wertvolle zusätzliche Quadratmeter unter Ihrem Dach" },
    { icon: Sun, title: "Mehr Tageslicht", desc: "Größere Fensterflächen bringen Helligkeit ins Dachgeschoss" },
    { icon: Home, title: "Wertsteigerung", desc: "Ein ausgebautes Dachgeschoss erhöht den Wert Ihrer Immobilie deutlich" },
    { icon: Euro, title: "Förderfähig", desc: "Kombiniert mit energetischer Sanierung oft durch KfW gefördert" }
  ];

  const gaubenarten = [
    { title: "Schleppgaube", desc: "Der Klassiker – einfache Konstruktion, großzügiger Raumgewinn, zeitloses Design." },
    { title: "Spitzgaube", desc: "Elegante Dreiecksform, ideal für traditionelle Häuser und steile Dächer." },
    { title: "Flachdachgaube", desc: "Moderne Optik, maximaler Raumgewinn, perfekt für zeitgenössische Architektur." },
    { title: "Trapezgaube", desc: "Kombination aus Schleppgaube und Spitzgaube, vielseitig einsetzbar." },
    { title: "Rundgaube", desc: "Geschwungene Form, architektonisches Highlight für besondere Ansprüche." }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Gaubenbau München – Licht & Raum für Ihr Dach"
        description="Gaubenbau München: Mehr Licht & Wohnraum unterm Dach durch Gauben. Planung, Genehmigung & Ausführung aus einer Hand, inkl. Dachsanierung."
        canonical="https://089dach.de/leistungen/gaubenbau"
        keywords="Gaubenbau München, Dachgaube München, Gaubenplanung, Gaubeneinbau München, Gauben Sanierung"
        aiSummary="089Dach GmbH baut Gauben in München ab 12.000€: Schleppgaube, Spitzgaube, Flachdachgaube. Komplettservice von Planung über Baugenehmigung bis Ausführung. Mehr Wohnraum und Licht unterm Dach. Telefon: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Gaubenbau", url: "/leistungen/gaubenbau" }]} />
      <ServiceSchema 
        pageName="Gaubenbau München"
        services={[
          { name: "Gaubenbau", description: "Neubau von Gauben aller Art – von der Schleppgaube bis zur Flachdachgaube" },
          { name: "Gaubensanierung", description: "Modernisierung und Reparatur bestehender Gauben" },
          { name: "Genehmigungsplanung", description: "Bauanträge und Statik durch unser Partnernetzwerk" }
        ]}
      />
      <ProductServiceSchema 
        name="Gaubenbau München"
        description="Schleppgaube, Spitzgaube, Flachdachgaube - Komplettservice von Planung bis Fertigstellung inkl. Baugenehmigung."
        priceFrom={12000}
        priceTo={35000}
        category="Gaubenbau"
      />
      <FAQPageSchema faqs={[
        { question: "Was kostet eine Gaube in München?", answer: "Eine Schleppgaube kostet ab 12.000€, eine Spitzgaube ab 15.000€, eine Flachdachgaube ab 18.000€. Große Gauben oder Sonderkonstruktionen 25.000-35.000€. Preis inkl. Planung, Genehmigung und Ausführung." },
        { question: "Brauche ich eine Baugenehmigung für eine Gaube in München?", answer: "Ja, Gauben sind in Bayern genehmigungspflichtig. Wir arbeiten mit Architekten zusammen und kümmern uns um Planung und Bauantrag. Genehmigungszeit beim Referat für Stadtplanung: ca. 8-12 Wochen." },
        { question: "Wie viel Wohnraum gewinne ich durch eine Gaube?", answer: "Eine Standard-Schleppgaube (2,5m breit) bringt ca. 5-8m² zusätzliche Nutzfläche mit Stehhöhe. Bei breiten Gauben oder mehreren Gauben sind 15-25m² möglich. Wir berechnen den genauen Raumgewinn für Ihr Dach." },
        { question: "Welche Gaubenart ist die beste für mein Haus?", answer: "Schleppgaube: klassisch, günstig, großer Raumgewinn. Spitzgaube: elegant für traditionelle Häuser. Flachdachgaube: modern, maximaler Raumgewinn. Wir beraten vor Ort, welche Gaube zu Ihrem Münchner Haus passt." },
        { question: "Wie lange dauert der Bau einer Gaube?", answer: "Der reine Bau dauert 1-2 Wochen. Mit Planung und Baugenehmigung rechnen Sie mit 3-4 Monaten Gesamtzeit. Tipp: Im Winter planen, im Frühjahr bauen - so nutzen Sie die optimale Bauzeit." },
        { question: "Gibt es Förderung für Gauben in München?", answer: "Gauben allein werden nicht gefördert. Aber: In Kombination mit energetischer Dämmung (U-Wert ≤ 0,14) gibt es 15-20% BAFA-Zuschuss auf die Dämmkosten. Wir beraten Sie zur optimalen Förderstrategie." },
        { question: "Kann man eine Gaube nachträglich in jeden Altbau einbauen?", answer: "Fast immer ja! Die Statik muss geprüft werden, meist sind Verstärkungen am Dachstuhl nötig (ca. 2.000-5.000€ extra). Bei denkmalgeschützten Gebäuden in München ist eine Abstimmung mit dem Denkmalschutz erforderlich." }
      ]} />
      <LocalBusinessSchema />
      <Navbar />
      <main id="main-content" role="main" tabIndex={-1}>
      <AIBeraterSection />
      
      {/* Hero Section */}
      <section className="pt-6 pb-8 md:pt-10 md:pb-12 bg-secondary relative overflow-hidden min-h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Renovierte Dachgaube mit neuem Fenster - Gaubenbau für mehr Wohnraum München"
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
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Gaubenbau & Sanierung</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mt-4 mb-6">
              <strong>Gaube bauen München</strong> – mehr Platz unterm Dach
            </h1>
            <p className="text-xl text-gray-200 max-w-xl mb-4">
              Mit einer Gaube verwandeln Sie ungenutzten Dachraum in wertvollen Wohnraum – mehr Platz, mehr Licht, mehr Lebensqualität.
            </p>
            <p className="text-lg text-gray-300 max-w-xl">
              Wir planen, genehmigen und bauen Ihre Gaube – alles aus einer Hand.
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
      <section className="py-3 md:py-5 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-primary" data-testid="testimonial-schmidt">
              <Quote className="h-10 w-10 text-primary/30 mb-4" />
              <p className="text-xl text-secondary leading-relaxed italic mb-6">
                „Unsere drei Kinder teilten sich ein Zimmer. Durch den Gaubenausbau haben wir jetzt 
                ein komplettes zusätzliches Kinderzimmer gewonnen. Endlich hat jedes Kind sein eigenes Reich – 
                und wir haben sogar noch einen kleinen Arbeitsbereich dazubekommen!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                  FS
                </div>
                <div>
                  <p className="font-bold text-secondary">Familie Schmidt</p>
                  <p className="text-sm text-muted-foreground">Schleppgaube in München-Sendling, 2023</p>
                </div>
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
              <strong>Dachgaube bauen München</strong> – Ihre Vorteile mit 089Dach GmbH
            </h2>
            <p className="text-muted-foreground">
              Eine Gaube ist mehr als nur ein Dachaufbau – sie ist eine Investition in Ihre Lebensqualität.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl" data-testid={`benefit-${index}`}>
                <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground"><TextWithKeywordLinks currentPath="/leistungen/gaubenbau">{benefit.desc}</TextWithKeywordLinks></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gaubenarten */}
      <section className="py-6 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mb-12">
            <h2 className="text-3xl font-heading font-bold text-secondary text-center mb-4">
              <strong>Schleppgaube, Spitzgaube oder Flachdachgaube</strong> – Die richtige Gaubenart
            </h2>
            <p className="text-muted-foreground">
              Jede Gaubenart hat ihre Stärken – wir beraten Sie, welche am besten zu Ihrem Haus passt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gaubenarten.map((gaube, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow" data-testid={`gaube-${index}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-secondary mb-2">{gaube.title}</h3>
                      <p className="text-muted-foreground text-sm"><TextWithKeywordLinks currentPath="/leistungen/gaubenbau">{gaube.desc}</TextWithKeywordLinks></p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gaubensanierung */}
      <section className="py-6">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-secondary text-center mb-4">
              <strong>Gaube sanieren München</strong> – 089Dach GmbH für Abdichtung, Dämmung & Bekleidung
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Ihre bestehende Gaube ist in die Jahre gekommen? Undichte Stellen, veraltete Dämmung oder 
              eine unschöne Optik? Wir sanieren Ihre Gaube fachgerecht – von der Abdichtung über neue 
              Bekleidungen bis zur kompletten Modernisierung.
            </p>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-secondary mb-4">Unsere Sanierungsleistungen:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Neueindeckung der Gaubenflächen",
                  "Erneuerung der Abdichtungen",
                  "Neue Bekleidungen (Zink, Kupfer, Schiefer)",
                  "Dämmung nach aktuellen Standards",
                  "Austausch der Gaubenfenster",
                  "Reparatur von Schäden"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2" data-testid={`sanierung-item-${index}`}>
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="py-6 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mb-12">
            <h2 className="text-3xl font-heading font-bold text-secondary text-center mb-4">
              Ablauf Gaubenbau München: Von der Planung über Baugenehmigung bis zur fertigen Gaube
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Beratung vor Ort", desc: "Wir besprechen Ihre Wünsche und prüfen die Machbarkeit." },
              { step: "2", title: "Planung & Antrag", desc: "Unsere Architekten erstellen Pläne und den Bauantrag." },
              { step: "3", title: "Bau der Gaube", desc: "Nach Genehmigung bauen wir Ihre Gaube fachgerecht." },
              { step: "4", title: "Innenausbau", desc: "Auf Wunsch übernehmen wir auch den Innenausbau." }
            ].map((item, index) => (
              <div key={index} className="text-center" data-testid={`step-${index}`}>
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-secondary mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm"><TextWithKeywordLinks currentPath="/leistungen/gaubenbau">{item.desc}</TextWithKeywordLinks></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 bg-secondary text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-2xl font-heading font-bold text-center mb-4">
            Gaube einbauen München: Jetzt kostenlose Beratung für mehr Wohnraum anfragen
          </h2>
          <p className="text-gray-300 max-w-6xl mx-auto mb-6">
            Lassen Sie sich unverbindlich beraten, wie eine Gaube Ihr Zuhause aufwerten kann. 
            Wir zeigen Ihnen die Möglichkeiten und erstellen ein transparentes Angebot.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-xl" data-testid="button-beratung">
            <a href="/beratung">
              <Phone className="mr-2 h-5 w-5" />
              Rückruf anfordern
            </a>
          </Button>
        </div>
      </section>

      <ImageGallery 
        title="Vorher-Nachher: Gaubenbau"
        columns={2}
        images={[
          { src: gaubeImg1, alt: "Altbau-Gaube vor der Sanierung", caption: "Vorher: Altbau-Gaube renovierungsbedürftig" },
          { src: gaubeImg2, alt: "Altbau-Gaube nach der Renovierung", caption: "Nachher: Gaube komplett saniert" },
          { src: gaubeImg3, alt: "Beschädigte Dachgaube vor Reparatur", caption: "Vorher: Gaube mit Schäden" },
          { src: gaubeImg4, alt: "Fertig renovierte Dachgaube", caption: "Nachher: Gaube wie neu" }
        ]}
      />

      <ProblemSolutionSection
        sectionTitle="Platzprobleme im Dachgeschoss?"
        problemTitle="Typische Dachgeschoss-Probleme"
        solutionTitle="Unsere Gauben-Lösungen"
        problems={[
          { symptom: "Zu wenig Stehhöhe im Dachgeschoss", risk: "Nutzbare Fläche stark eingeschränkt, Zimmer kaum möblierbar" },
          { symptom: "Dunkle Räume unterm Dach", risk: "Dachfenster allein bringen oft zu wenig Licht" },
          { symptom: "Kinder brauchen eigene Zimmer", risk: "Platz wird knapp, teurer Umzug droht" },
          { symptom: "Home-Office braucht Raum", risk: "Kein ruhiger Arbeitsplatz in der Wohnung" }
        ]}
        solutions={[
          { title: "Schleppgaube ab 12.000€", description: "Maximaler Raumgewinn, klassisches Design" },
          { title: "Komplettservice", description: "Von Planung über Baugenehmigung bis Fertigstellung" },
          { title: "5-25m² mehr Wohnfläche", description: "Je nach Gaubenart und Größe" },
          { title: "Mit KfW-Förderung kombinierbar", description: "Energetische Dämmung wird gefördert" }
        ]}
        urgencyMessage="Eine Gaube steigert den Immobilienwert um bis zu 15%!"
      />

      <CTACluster
        title="Mehr Wohnraum unterm Dach?"
        subtitle="Kostenlose Vor-Ort-Beratung · Festpreisangebot · Baugenehmigung inklusive"
      />

      <AIEnhancedFAQ
        title="Häufige Fragen zum Gaubenbau – 089Dach GmbH"
        faqs={[
          {
            question: "Was kostet eine Gaube in München?",
            shortAnswer: "Eine Schleppgaube kostet ab 12.000€, Flachdachgauben ab 18.000€.",
            details: "Die Kosten hängen von Gaubenart, Größe und Ausstattung ab. Schleppgaube (2,5m breit): 12.000-18.000€. Spitzgaube: 15.000-22.000€. Flachdachgaube: 18.000-28.000€. Große Sonderkonstruktionen: 25.000-35.000€. Alle Preise inkl. Planung, Genehmigung und Ausführung.",
            priceRange: "12.000-35.000€ je nach Größe und Typ",
            localReference: "Preise für München und Umgebung, inkl. Bauantrag beim Referat für Stadtplanung",
            nextStep: "Kostenloses Angebot anfordern →"
          },
          {
            question: "Brauche ich eine Baugenehmigung für eine Gaube?",
            shortAnswer: "Ja, Gauben sind in Bayern genehmigungspflichtig.",
            details: "Wir arbeiten mit erfahrenen Architekten zusammen und kümmern uns um Planung und Bauantrag. Genehmigungszeit beim Münchner Referat für Stadtplanung: ca. 8-12 Wochen. Bei denkmalgeschützten Gebäuden ist zusätzlich das Denkmalschutzamt einzubinden.",
            localReference: "Erfahrung mit Bauanträgen in allen Münchner Bezirken",
            nextStep: "Beratung zur Genehmigung vereinbaren →"
          },
          {
            question: "Wie viel Wohnraum gewinne ich durch eine Gaube?",
            shortAnswer: "Eine Standard-Schleppgaube bringt 5-8m² zusätzliche Nutzfläche mit Stehhöhe.",
            details: "Der tatsächliche Raumgewinn hängt von der Dachneigung und Gaubenbreite ab. Bei breiten Gauben oder mehreren Gauben sind 15-25m² möglich. Wir berechnen den genauen Raumgewinn bei der kostenlosen Vor-Ort-Beratung.",
            priceRange: "5-25m² zusätzlicher Wohnraum",
            nextStep: "Raumgewinn berechnen lassen →"
          },
          {
            question: "Welche Gaubenart ist die beste für mein Haus?",
            shortAnswer: "Das hängt von Architektur, Dachneigung und Ihren Wünschen ab.",
            details: "Schleppgaube: Klassisch, großer Raumgewinn, günstig. Spitzgaube: Elegant für traditionelle Häuser. Flachdachgaube: Modern, maximaler Raumgewinn. Trapezgaube: Vielseitig. Rundgaube: Architektonisches Highlight. Wir beraten vor Ort, welche Gaube zu Ihrem Münchner Haus passt.",
            localReference: "Erfahrung mit Altbauten in Schwabing, Haidhausen, Sendling und ganz München",
            nextStep: "Gaubenberatung vor Ort buchen →"
          },
          {
            question: "Wie lange dauert der Bau einer Gaube?",
            shortAnswer: "Der reine Bau dauert 1-2 Wochen, mit Planung und Genehmigung 3-4 Monate gesamt.",
            details: "Planungsphase: 2-4 Wochen. Genehmigungsverfahren: 8-12 Wochen. Bauphase: 1-2 Wochen. Tipp: Im Winter planen, im Frühjahr bauen – so nutzen Sie die optimale Bauzeit und haben im Sommer mehr Wohnraum.",
            nextStep: "Zeitplan erstellen lassen →"
          }
        ]}
      />

      <ProofStack title="Warum 089Dach für Ihren Gaubenbau?" />

      <ProcessSteps 
        title="Gaubenbau: In 6 Schritten zu mehr Wohnraum"
        subtitle="Planbar, transparent und stressfrei – von der ersten Beratung bis zur Garantie."
      />

      <ServiceGeoLinks currentService="Gaubenbau" />
      <CostEscalationBanner />
      <LeadFunnel 
        headline="Mehr Wohnraum durch eine Gaube?"
        subheadline="Wir planen und bauen Ihre Dachgaube."
        description="Eine Gaube bringt Licht, Stehhöhe und zusätzliche Wohnfläche. Die beste Investition für Ihr Dachgeschoss."
      />
      <DecisionPressureBanner />
      <Contact 
        title="Mehr Wohnraum durch eine Gaube?"
        description="Wir planen und bauen Ihre Gaube – von der ersten Skizze bis zur Fertigstellung. Jetzt unverbindliche Beratung anfordern."
      />
      </main>
      <Footer />
    </div>
  );
}
