import Navbar from "@/components/Navbar";
import AIBeraterSection from "@/components/AIBeraterSection";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import LeadFunnel from "@/components/LeadFunnel";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Euro, Home, Leaf, FileText, Phone, Quote, Award, Shield, Users } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, FAQPageSchema, LocalBusinessSchema } from "@/components/SEO";
import AIEnhancedFAQ from "@/components/AIEnhancedFAQ";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import CTACluster from "@/components/CTACluster";
import ProofStack from "@/components/ProofStack";
import ProcessSteps from "@/components/ProcessSteps";
import heroImage from "@assets/generated_images/new_solar_panel_installation.png";
import RelatedServices from "@/components/RelatedServices";
import { TextWithKeywordLinks } from "@/components/KeywordLink";
import ImageGallery from "@/components/ImageGallery";
import energieImg1 from "@assets/generated_images/new_solar_panel_installation.png";
import energieImg2 from "@assets/generated_images/roof_insulation_installation_scene.png";
import energieImg3 from "@assets/generated_images/house_with_heat_loss_visualization.png";
import energieImg4 from "@assets/generated_images/modern_house_with_anthracite_roof.png";

export default function Energieberatung() {
  const benefits = [
    { icon: Euro, title: "Bis zu 20% Förderung", desc: "KfW und BAFA unterstützen energetische Sanierungen mit attraktiven Zuschüssen" },
    { icon: Leaf, title: "30% weniger Heizkosten", desc: "Moderne Dämmung senkt Ihren Energieverbrauch nachhaltig" },
    { icon: FileText, title: "Komplette Antragsabwicklung", desc: "Unsere Partner kümmern sich um den gesamten Papierkram" },
    { icon: Home, title: "Wertsteigerung", desc: "Ein energetisch saniertes Dach erhöht den Immobilienwert" }
  ];

  const services = [
    { title: "Energieberatung", desc: "Unsere zertifizierten Energieberater analysieren Ihr Gebäude und zeigen Einsparpotenziale auf." },
    { title: "Sanierungsfahrplan (iSFP)", desc: "Ein individueller Fahrplan für Ihre energetische Sanierung – Schritt für Schritt zur Förderung." },
    { title: "KfW-Förderanträge", desc: "Wir stellen die Anträge bei der KfW für Sie – inkl. BEG-Förderung für Einzelmaßnahmen." },
    { title: "BAFA-Zuschüsse", desc: "Beantragung von BAFA-Zuschüssen für Energieberatung und Heizungsoptimierung." },
    { title: "Energieausweis", desc: "Bedarfs- oder Verbrauchsausweis für Verkauf, Vermietung oder Sanierung." }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="KfW Förderung Dachsanierung 2025 | Bis 20% Zuschuss"
        description="Welche Förderung für Dachsanierung? Bis 20% KfW/BAFA-Zuschuss sichern. ✓ Antragsservice ✓ Energieberater ✓ iSFP. Kostenlose Beratung ☎ 089 12621964"
        canonical="https://089dach.de/leistungen/energieberatung"
        keywords="kfw förderung dachsanierung 2025 wie beantragen, bafa zuschuss dachdämmung voraussetzungen, energieberater für dach münchen kosten, sanierungsfahrplan isfp was ist das, welche förderung für dachdämmung gibt es, energieausweis beantragen kosten münchen, heizkosten senken durch dachsanierung, geg sanierungspflicht dach wann, förderantrag dachsanierung richtig stellen, energieberatung obermenzing pasing laim schwabing, kfw 261 dachsanierung tilgungszuschuss, beg einzelmaßnahme dach antrag, energieeffizienz experte dena münchen, isfp bonus 5 prozent erklärung, kfw zuschuss kombinieren bafa, förderung altbau sanierung dach 2025, steuerliche förderung dachsanierung paragraph 35c, energieberater kosten förderung bafa, u-wert dach anforderung geg, wärmedurchgangskoeffizient dach berechnen, energetische sanierung reihenfolge dach, hydraulischer abgleich förderung dach, effizienzhaus dena was ist das, nullenergiehaus dach anforderungen"
        aiSummary="089Dach GmbH bietet Energieberatung in München mit KfW- und BAFA-Förderberatung. Bis zu 20% Förderung für Dachsanierung. Sanierungsfahrplan und Energieausweis durch zertifizierte Partner. Telefon: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Energieberatung", url: "/leistungen/energieberatung" }]} />
      <ServiceSchema 
        pageName="Energieberatung München"
        services={[
          { name: "Energieberatung", description: "Zertifizierte Energieberatung durch unser Partnernetzwerk" },
          { name: "KfW-Förderanträge", description: "Beantragung von KfW-Förderungen für Ihre Dachsanierung" },
          { name: "Sanierungsfahrplan", description: "Individueller Fahrplan für Ihre energetische Sanierung" }
        ]}
      />
      <FAQPageSchema faqs={[
        { question: "Was kostet eine Energieberatung für das Dach?", answer: "Eine Vor-Ort-Energieberatung kostet ca. 300-500€. Das BAFA erstattet bis zu 80% der Kosten. Unsere Partner-Energieberater beraten Sie gerne." },
        { question: "Wie viel Förderung bekomme ich für Dachsanierung?", answer: "KfW und BAFA fördern energetische Dachsanierungen mit bis zu 20% Zuschuss. Bei 30.000€ Projektkosten sind das bis zu 6.000€ Förderung." },
        { question: "Brauche ich einen Energieberater für KfW-Förderung?", answer: "Ja, für BAFA-Einzelmaßnahmen und KfW-Effizienzhaus ist ein dena-zertifizierter Energieberater Pflicht. Wir vermitteln Sie an unsere Partner." },
        { question: "Was ist ein individueller Sanierungsfahrplan (iSFP)?", answer: "Der iSFP ist ein Schritt-für-Schritt-Plan für Ihre energetische Sanierung. Er zeigt sinnvolle Maßnahmen und deren Reihenfolge. Bonus: Mit iSFP gibt es 5% mehr Förderung auf alle Einzelmaßnahmen!" },
        { question: "Welchen U-Wert muss die Dachdämmung für Förderung erreichen?", answer: "Für BAFA-Förderung (BEG EM) muss das Dach einen U-Wert von max. 0,14 W/(m²K) erreichen. Das entspricht ca. 24cm Mineralwolle oder 18cm PU-Dämmung. Wir planen die optimale Dämmstärke für Ihr Münchner Objekt." },
        { question: "Kann ich KfW und BAFA kombinieren?", answer: "BAFA-Zuschuss und KfW-Kredit für dieselbe Maßnahme sind nicht kombinierbar - Sie müssen sich entscheiden. Aber: Verschiedene Maßnahmen (z.B. Dach über BAFA, Fenster über KfW) können parallel gefördert werden." },
        { question: "Wie lange dauert die Förderzusage?", answer: "BAFA-Anträge werden in 4-8 Wochen bearbeitet. Wichtig: Antrag VOR Auftragserteilung stellen! Wir unterstützen Sie beim Timing und der Antragstellung über unsere Energieberater-Partner in München." }
      ]} />
      <LocalBusinessSchema />
      <Navbar />
      <AIBeraterSection />
      
      {/* Hero Section */}
      <section className="pt-6 pb-8 md:pt-10 md:pb-12 bg-secondary relative overflow-hidden min-h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Photovoltaik-Anlage auf Hausdach - KfW-Förderung Energieberatung München"
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
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Energieberatung & Förderung</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mt-4 mb-6">
              Maximale Förderung für Ihre Dachsanierung
            </h1>
            <p className="text-xl text-gray-200 max-w-xl mb-4">
              Mit der richtigen Beratung und Antragstellung sichern Sie sich bis zu 20% Förderung für Ihre energetische Sanierung.
            </p>
            <p className="text-lg text-gray-300 max-w-xl">
              Unsere zertifizierten Energieberater aus dem Partnernetzwerk begleiten Sie von der Analyse bis zur Auszahlung.
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
              <span>Zertifizierte Energieberater</span>
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
      <section className="py-4 md:py-6 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-primary" data-testid="testimonial-mueller">
              <Quote className="h-10 w-10 text-primary/30 mb-4" />
              <p className="text-xl text-secondary leading-relaxed italic mb-6">
                „Wir dachten, die Förderung ist kompliziert. Aber die Energieberatung durch 089Dach hat uns 
                18.000€ KfW-Förderung gesichert – mehr als erwartet! Der Papierkram wurde komplett für uns erledigt."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                  FM
                </div>
                <div>
                  <p className="font-bold text-secondary">Familie Müller</p>
                  <p className="text-sm text-muted-foreground">Einfamilienhaus in München-Pasing, 2023</p>
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
              KfW-Förderung & BAFA-Zuschuss Dach München: 4 Vorteile der Energieberatung
            </h2>
            <p className="text-muted-foreground">
              Die richtige Beratung spart Ihnen bares Geld – bei der Sanierung und danach bei den Heizkosten.
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
                  <p className="text-muted-foreground"><TextWithKeywordLinks currentPath="/leistungen/energieberatung">{benefit.desc}</TextWithKeywordLinks></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section className="py-6 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mb-12">
            <h2 className="text-3xl font-heading font-bold text-secondary text-center mb-4">
              Energieberatung Dach München: iSFP, Förderanträge & Energieausweis vom Experten
            </h2>
            <p className="text-muted-foreground">
              Von der ersten Beratung bis zum bewilligten Antrag – wir begleiten Sie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow" data-testid={`service-${index}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-secondary mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm"><TextWithKeywordLinks currentPath="/leistungen/energieberatung">{service.desc}</TextWithKeywordLinks></p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps 
        title="Förderberatung: In 6 Schritten zur maximalen Förderung"
        subtitle="Planbar, transparent und stressfrei – von der ersten Beratung bis zur Garantie."
      />

      {/* Hinweis Partnernetzwerk */}
      <section className="py-5 bg-secondary text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-2xl font-heading font-bold text-center mb-4">
            Zertifizierte Energieberater München: DENA-gelistete Partner für Ihre Dachdämmung
          </h2>
          <p className="text-gray-300 max-w-6xl mx-auto mb-6">
            Die Energieberatung und Antragsstellung erfolgt durch zertifizierte Energieberater aus unserem 
            Partnernetzwerk. So erhalten Sie alles aus einer Hand – von der Beratung bis zur fertigen Dachsanierung.
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
        title="Energetische Sanierung"
        columns={2}
        images={[
          { src: energieImg1, alt: "Photovoltaikanlage auf Hausdach installiert", caption: "Solaranlage für nachhaltige Energie" },
          { src: energieImg2, alt: "Dachdämmung wird fachgerecht eingebaut", caption: "Professionelle Dachdämmung" },
          { src: energieImg3, alt: "Wärmebild zeigt Energieverlust am Dach", caption: "Wärmeverlust-Analyse" },
          { src: energieImg4, alt: "Modernes Haus mit energieeffizientem Dach", caption: "Energieeffizientes Zuhause" }
        ]}
      />

      <ProblemSolutionSection
        sectionTitle="Förderung nicht verpassen"
        problemTitle="Typische Förder-Fehler"
        solutionTitle="So machen wir es richtig"
        problems={[
          { symptom: "Antrag NACH Auftragserteilung gestellt", risk: "Förderung komplett verloren – das passiert leider oft" },
          { symptom: "Falscher U-Wert bei der Dämmung", risk: "Fördervoraussetzungen nicht erfüllt, Geld zurückzahlen" },
          { symptom: "Ohne Energieberater beantragt", risk: "BAFA/KfW lehnt ab – Pflicht bei vielen Maßnahmen" },
          { symptom: "Falsche Nachweise eingereicht", risk: "Auszahlung verzögert oder verweigert" }
        ]}
        solutions={[
          { title: "Antrag VOR Auftrag", description: "Wir koordinieren Timing mit unseren Energieberatern" },
          { title: "Zertifizierte Partner", description: "DENA-gelistete Energieberater aus unserem Netzwerk" },
          { title: "Komplette Abwicklung", description: "Von Antrag bis Auszahlung alles aus einer Hand" },
          { title: "Bis 20% Förderung", description: "Maximale Zuschüsse für Ihre Dachsanierung sichern" }
        ]}
        urgencyMessage="2025 gibt es noch attraktive Förderungen – aber die Budgets sind begrenzt!"
      />

      <CTACluster
        title="Förderung für Ihre Dachsanierung sichern"
        subtitle="Kostenlose Erstberatung · Energieberater-Netzwerk · Antragsservice"
      />

      <AIEnhancedFAQ
        title="Häufige Fragen zu Förderung & Energieberatung"
        faqs={[
          {
            question: "Was kostet eine Energieberatung für das Dach?",
            shortAnswer: "Eine Vor-Ort-Energieberatung kostet 300-500€, BAFA erstattet bis 80%.",
            details: "Unsere Partner-Energieberater analysieren Ihr Gebäude vor Ort. Die Kosten liegen bei 300-500€. Das BAFA erstattet davon bis zu 80% (max. 1.300€ für EFH). So zahlen Sie effektiv nur 60-100€ für eine professionelle Beratung.",
            priceRange: "300-500€ (abzgl. 80% BAFA-Zuschuss)",
            localReference: "Energieberater aus München und Umgebung aus unserem Partnernetzwerk",
            nextStep: "Kostenlose Erstberatung vereinbaren →"
          },
          {
            question: "Wie viel Förderung bekomme ich für Dachsanierung?",
            shortAnswer: "KfW und BAFA fördern mit bis zu 20% Zuschuss.",
            details: "Bei 30.000€ Projektkosten sind das bis zu 6.000€ Förderung. Mit iSFP-Bonus sogar 5% mehr. Die Förderung gilt für Dämmung, Dachfenster und energetische Verbesserungen. Wichtig: Antrag VOR Auftragserteilung stellen!",
            priceRange: "15-20% der förderfähigen Kosten",
            localReference: "Gilt für alle Münchner Stadtteile und Umlandgemeinden",
            nextStep: "Fördermöglichkeiten prüfen lassen →"
          },
          {
            question: "Brauche ich einen Energieberater für KfW-Förderung?",
            shortAnswer: "Ja, für BAFA-Einzelmaßnahmen und KfW-Effizienzhaus ist ein dena-zertifizierter Energieberater Pflicht.",
            details: "Der Energieberater erstellt den Sanierungsfahrplan, bestätigt die technischen Anforderungen und begleitet die Umsetzung. Wir vermitteln Sie direkt an unsere Partner-Energieberater – ohne Wartezeit.",
            localReference: "Unsere Partner sind in der DENA-Expertenliste für München gelistet",
            nextStep: "Energieberater-Kontakt anfordern →"
          },
          {
            question: "Was ist ein individueller Sanierungsfahrplan (iSFP)?",
            shortAnswer: "Ein Schritt-für-Schritt-Plan für Ihre energetische Sanierung mit 5% Förder-Bonus.",
            details: "Der iSFP zeigt sinnvolle Maßnahmen und deren optimale Reihenfolge. Großer Vorteil: Mit iSFP bekommen Sie 5% mehr Förderung auf alle Einzelmaßnahmen. Bei 20.000€ Dämmkosten sind das 1.000€ extra Zuschuss.",
            priceRange: "iSFP-Erstellung: 800-1.200€ (BAFA fördert 80%)",
            nextStep: "iSFP erstellen lassen →"
          },
          {
            question: "Welchen U-Wert muss die Dachdämmung erreichen?",
            shortAnswer: "Für BAFA-Förderung maximal 0,14 W/(m²K).",
            details: "Das entspricht ca. 24cm Mineralwolle oder 18cm PU-Dämmung. Bei Altbauten in München oft eine Herausforderung wegen Sparrenhöhe. Wir planen die optimale Lösung: Zwischensparren-, Aufsparren- oder Kombidämmung.",
            priceRange: "Dämmung: 50-120€/m² je nach Lösung",
            localReference: "Speziell für Münchner Altbauten mit niedriger Sparrenhöhe",
            nextStep: "Dämmkonzept erstellen lassen →"
          }
        ]}
      />

      <ProofStack title="Warum 089Dach für Ihre Förderprojekte?" />

      <LeadFunnel />
      <RelatedServices 
        currentPage="energieberatung" 
        relatedIds={["dachsanierung", "architektenleistungen", "ratgeber", "faq"]}
      />
      <Contact />
      <Footer />
    </div>
  );
}
