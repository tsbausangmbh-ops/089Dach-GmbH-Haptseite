import Navbar from "@/components/Navbar";
import AIBeraterSection from "@/components/AIBeraterSection";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Home, Warehouse, ShieldCheck, Quote, AlertTriangle, Award, Shield, Users } from "lucide-react";
import heroImage from "@assets/generated_images/roofer_working_on_red_tile_roof_munich.png";
import tileImage from "@assets/generated_images/red_roof_tiles_texture_close_up.png";
import greenRoof from "@assets/generated_images/flat_green_roof_with_natural_variations.png";
import historicRoof from "@assets/generated_images/historic_biberschwanz_roof_with_patina.png";
import anthraciteRoof from "@assets/generated_images/modern_house_with_anthracite_roof.png";
import flatRoofDetail from "@assets/generated_images/flat_roof_bitumen_detail_with_texture.png";
import ImageGallery from "@/components/ImageGallery";
import LeadFunnel from "@/components/LeadFunnel";
import SEO, { BreadcrumbSchema, ServiceSchema, ProductServiceSchema, FAQPageSchema, LocalBusinessSchema } from "@/components/SEO";
import { TextWithKeywordLinks } from "@/components/KeywordLink";
import { FlachdachMuenchenContent } from "@/components/SEOContent";
import AIEnhancedFAQ from "@/components/AIEnhancedFAQ";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import CTACluster from "@/components/CTACluster";
import ProofStack from "@/components/ProofStack";
import ProcessSteps from "@/components/ProcessSteps";

export default function Bedachungen() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title="Dach neu eindecken München | Kosten Ziegel & Dämmung 2025"
        description="Was kostet Dach neu eindecken? Ab 80€/m² ohne Dämmung. ✓ Steildach & Flachdach ✓ Meisterbetrieb ✓ 10 Jahre Garantie. Festpreis-Angebot ☎ 089 12621964"
        canonical="https://089dach.de/leistungen/bedachungen"
        keywords="was kostet dach neu eindecken pro qm münchen, dachziegel oder betonsteine was ist besser, flachdach abdichten kosten pro m2, dach undicht reparieren oder komplett erneuern, dacheindeckung altbau was beachten, biberschwanzziegel preis erfahrungen, schieferdach kosten lebensdauer, dachbegrünung kosten förderung münchen, steildach isolieren nachträglich kosten, welche dachziegel sind die besten, dacheindeckung obermenzing pasing laim schwabing sendling, dachneigung mindest grad vorschrift, dachlattenabstand norm maße, unterspannbahn oder unterdeckbahn, dachaufbau schichten erklärt, dampfbremse dach notwendig, traufe dach detail aufbau, first abdichten material, gratziegel verlegen kosten, kehle dach ausführung, dachüberstand verlängern kosten, pultdach eindecken material, satteldach vs walmdach, dachstuhl sichtbar lassen kosten"
        aiSummary="089Dach GmbH spezialisiert auf Steildach und Flachdach in München. Neueindeckung ab 80€/m². Tondachziegel, Betonsteine, Schiefer. Flachdach-Abdichtung und Dachbegrünung. Meisterbetrieb seit 1998. Telefon: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Bedachungen", url: "/leistungen/bedachungen" }]} />
      <ServiceSchema 
        pageName="Dachsanierung & Bedachungen München"
        services={[
          { name: "Steildach Sanierung & Neubau", description: "Tondachziegel, Betonsteine oder Schiefer - sturmsicher befestigt, fachmännisch verlegt" },
          { name: "Flachdach Abdichtung", description: "Premiummaterialien für Garagen, Anbauten und große Gewerbeobjekte" },
          { name: "Energetische Dachsanierung", description: "Moderne Dämmung mit bis zu 30% Heizkostenersparnis inkl. KfW/BAFA Förderberatung" }
        ]}
      />
      <ProductServiceSchema 
        name="Dacheindeckung München"
        description="Steildach neu eindecken mit Tondachziegeln, Betonsteinen oder Schiefer. 10 Jahre Garantie."
        priceFrom={80}
        priceTo={250}
        priceUnit="pro m²"
        category="Bedachungen"
      />
      <FAQPageSchema faqs={[
        { question: "Was kostet Dach neu eindecken ohne Dämmung?", answer: "Eine Neueindeckung ohne Dämmung kostet ab 80€/m² für Betondachsteine, ab 100€/m² für Tonziegel, ab 150€/m² für Schiefer. Bei 100m² Dachfläche: 8.000-15.000€." },
        { question: "Steildach oder Flachdach - was ist besser?", answer: "Steildächer halten länger (50+ Jahre), sind wartungsärmer und bieten Dachraum. Flachdächer sind günstiger im Bau, ermöglichen Begrünung und Terrassen. Die Wahl hängt von Ihrem Gebäude ab." },
        { question: "Welche Dachziegel sind die besten?", answer: "Tondachziegel sind langlebig (80+ Jahre), farbecht und natürlich. Betondachsteine sind günstiger, schwerer und halten 40-50 Jahre. Schiefer ist am hochwertigsten (100+ Jahre), aber auch teurer." },
        { question: "Wie oft muss ein Steildach gewartet werden?", answer: "Einmal jährlich sollten Sie Dachrinnen reinigen, Moos entfernen lassen und lockere Ziegel prüfen. Wir bieten Wartungsverträge ab 250€/Jahr an." },
        { question: "Kann man eine Dachbegrünung auf jedem Dach machen?", answer: "Extensive Begrünung (Sedum) geht auf Flachdächern bis 15° Neigung. Das Dach muss die zusätzliche Last (60-150 kg/m²) tragen können. Wir prüfen die Statik vorab." },
        { question: "Wie lange dauert eine komplette Dacheindeckung in München?", answer: "Für ein Einfamilienhaus (100-150m²) planen wir 5-10 Arbeitstage ein. Wetterabhängig. Wir decken Ihr Dach abschnittsweise neu ein, sodass immer ein Regenschutz besteht." },
        { question: "Welche Vorschriften gelten für Dacheindeckung in München?", answer: "In München gilt die Bayerische Bauordnung. Bebauungspläne können Dachform, Farbe und Material vorschreiben. In denkmalgeschützten Bereichen (z.B. Altstadt, Bogenhausen) sind Abstimmungen mit der Denkmalschutzbehörde nötig." },
        { question: "Lohnt sich eine Aufsparrendämmung beim Dachdecken?", answer: "Ja! Eine Aufsparrendämmung spart bis zu 30% Heizkosten, wird mit bis zu 20% BAFA-Zuschuss gefördert und steigert den Immobilienwert. Mehrkosten: ca. 80-120€/m² gegenüber reiner Eindeckung." }
      ]} />
      <LocalBusinessSchema />
      <Navbar />
      <AIBeraterSection />
      
      {/* Hero Section */}
      <section className="pt-6 pb-8 md:pt-10 md:pb-12 bg-secondary relative overflow-hidden min-h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Dachdecker bei Steildach-Eindeckung mit roten Tondachziegeln in München"
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
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Bedachungen München</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mt-4 mb-6">
              Dachsanierung & Bedachungen in München
            </h1>
            <p className="text-xl text-gray-200 max-w-xl mb-4">
              Schützen Sie, was Ihnen wichtig ist. Wir sorgen dafür, dass Sie und Ihre Familie unter einem sicheren Dach leben.
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

      {/* Story Section */}
      <section className="py-3 md:py-5 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-border">
              <div className="flex items-start gap-4 mb-6">
                <AlertTriangle className="h-10 w-10 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-heading font-bold text-center text-secondary mb-4">
                    Dach neu eindecken München: Kennen Sie diese Warnsignale bei Ihrem Dach?
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Es regnet, und Sie schauen nervös zur Decke. Ein leises Tropfen – war da was? 
                    Oder das schlechte Gefühl, dass die Heizkosten jedes Jahr höher werden, obwohl Sie 
                    eigentlich sparen wollten. Die Angst vor dem nächsten Sturm, weil die Ziegel schon 
                    so alt aussehen...
                  </p>
                </div>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-sm">
                <p className="text-secondary font-medium text-lg">
                  <strong className="text-green-600">Die gute Nachricht:</strong> Das muss nicht so bleiben. 
                  Ein professionell saniertes Dach gibt Ihnen Sicherheit zurück – und spart oft sogar Geld.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-4">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
            
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Unsere Expertise</span>
              <h2 className="text-3xl font-heading font-bold text-secondary text-center mt-2 mb-6">
                Dachziegel, Schiefer & Betonsteine: Komplette Dacheindeckung in München vom Meisterbetrieb
              </h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Ein <strong>Dach München</strong> ist mehr als nur eine Abdeckung – es ist der Schutzschild Ihres <strong>Zuhauses</strong>. 
                  Wenn dieser Schutz bröckelt, leiden alle darunter: die <strong>Bausubstanz</strong>, Ihr Geldbeutel und 
                  letztlich Ihre <strong>Lebensqualität</strong>. Als <strong>Meisterbetrieb</strong> mit <strong>25 Jahren Erfahrung</strong> sind wir Ihr <strong>Dachdecker in München</strong>.
                </p>
                <p className="mt-4">
                  Wir bei 089Dach nehmen uns Zeit für eine ehrliche <strong>Bestandsaufnahme</strong>. Nicht jedes alte 
                  Dach muss komplett <strong>neu eingedeckt</strong> werden – manchmal reicht eine gezielte <strong>Dachreparatur</strong>. Das 
                  sagen wir Ihnen offen, denn unser <strong>Ruf</strong> ist uns wichtiger als ein schneller Auftrag. <strong>10 Jahre Garantie</strong> und <strong>Festpreisgarantie</strong> geben Ihnen Sicherheit.
                </p>
              </div>

              <div className="mt-10 space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl h-fit">
                    <Home className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2"><strong>Steildach Sanierung München</strong> – Neubau & Eindeckung</h3>
                    <p className="text-muted-foreground">
                      <TextWithKeywordLinks currentPath="/leistungen/bedachungen">
                        Ob Tondachziegel, Betonsteine oder edles Schiefer – wir finden die perfekte Eindeckung für Ihr Haus. Sturmsicher befestigt, fachmännisch verlegt.
                      </TextWithKeywordLinks>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl h-fit">
                    <Warehouse className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2"><strong>Flachdach Abdichtung München</strong> – Bitumen & EPDM</h3>
                    <p className="text-muted-foreground">
                      <TextWithKeywordLinks currentPath="/leistungen/bedachungen">
                        Flachdächer verzeihen keine Fehler. Deshalb arbeiten wir nur mit Premiummaterialien und erfahrenen Fachkräften. Für Garagen, Anbauten und große Gewerbeobjekte.
                      </TextWithKeywordLinks>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl h-fit">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2"><strong>Energetische Dachsanierung</strong> – bis 30% Heizkosten sparen</h3>
                    <p className="text-muted-foreground">
                      <TextWithKeywordLinks currentPath="/leistungen/bedachungen">
                        Bis zu 30% weniger Heizkosten durch moderne Dämmung. Wir beraten Sie auch zu KfW-Förderung und BAFA-Zuschüssen – die können mehrere tausend Euro ausmachen!
                      </TextWithKeywordLinks>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={tileImage} 
                alt="Nahaufnahme roter Tondachziegel Textur - hochwertige Dacheindeckung München" 
                className="rounded-xl shadow-xl w-full object-cover aspect-[4/5]"
                width={1024}
                height={1280}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-xl shadow-lg max-w-sm hidden md:block">
                <h4 className="font-bold text-secondary text-lg mb-4">Warum 089Dach?</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Nur Markenprodukte mit Garantie</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Meister-Qualität seit 30+ Jahren</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Fester Preis, keine Überraschungen</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Customer Story */}
      <section className="py-4 bg-secondary/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-start gap-4">
              <Quote className="h-12 w-12 text-primary flex-shrink-0" />
              <div>
                <p className="text-xl text-secondary leading-relaxed italic mb-6">
                  "Unser Haus in Obermenzing ist von 1962. Das Dach hatte schon oft Probleme, aber die 
                  letzten Jahre wurde es schlimmer. Nach einem Sturm hatten wir plötzlich Wasser im 
                  Dachboden. 089Dach kam am nächsten Tag, hat alles gesichert und uns ehrlich gesagt, 
                  was gemacht werden muss. Keine Panikmache, keine überteuerten Angebote. Heute ist 
                  das Dach wie neu – und wir sparen 200€ im Jahr an Heizkosten. Das hätten wir früher 
                  machen sollen!"
                </p>
                <p className="font-bold text-secondary">Familie Hartmann, München-Obermenzing</p>
                <p className="text-muted-foreground text-sm">Komplettsanierung mit energetischer Ertüchtigung, 2022</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImageGallery
        title="Unsere Bedachungs-Projekte"
        images={[
          { src: historicRoof, alt: "Historisches Biberschwanz-Dach mit Patina", caption: "Traditionelle Biberschwanz-Eindeckung" },
          { src: greenRoof, alt: "Flachdach mit Begrünung", caption: "Extensive Dachbegrünung in München" },
          { src: anthraciteRoof, alt: "Modernes Haus mit anthrazitfarbenem Dach", caption: "Moderne Flachziegel in Anthrazit" },
          { src: flatRoofDetail, alt: "Flachdach Bitumenabdichtung", caption: "Professionelle Flachdachabdichtung" }
        ]}
        columns={2}
      />

      <FlachdachMuenchenContent />

      <ProblemSolutionSection
        sectionTitle="Erkennen Sie Ihr Problem?"
        problemTitle="Warnsignale bei Ihrem Dach"
        solutionTitle="Unsere Lösung für Sie"
        problems={[
          { symptom: "Ziegel sind verrutscht oder fehlen", risk: "Regenwasser dringt ein und schädigt Dämmung und Dachstuhl" },
          { symptom: "Moos und Flechten überwuchern das Dach", risk: "Feuchtigkeit wird gespeichert, Frost sprengt die Ziegel" },
          { symptom: "Hohe Heizkosten trotz moderner Heizung", risk: "Bis zu 30% der Wärme entweicht durch ein schlecht gedämmtes Dach" },
          { symptom: "Wasserflecken an der Decke oder im Dachboden", risk: "Schimmelbildung und Bauschäden sind die teure Folge" }
        ]}
        solutions={[
          { title: "Kostenlose Dachinspektion", description: "Wir prüfen Ihr Dach vor Ort und sagen Ihnen ehrlich, was gemacht werden muss" },
          { title: "Komplettsanierung mit Dämmung", description: "Neue Eindeckung plus moderne Wärmedämmung – spart bis zu 30% Heizkosten" },
          { title: "10 Jahre Garantie", description: "Auf alle Arbeiten geben wir schriftlich 10 Jahre Garantie" },
          { title: "Förderberatung inklusive", description: "Wir helfen bei KfW- und BAFA-Anträgen für bis zu 20% Zuschuss" }
        ]}
        urgencyMessage="Je früher Sie handeln, desto günstiger wird die Reparatur – kleine Schäden werden schnell teuer!"
      />

      <CTACluster 
        variant="primary" 
        title="Bereit für Ihr neues Dach?" 
        subtitle="Kostenlose Beratung · Festpreisangebot · 10 Jahre Garantie"
      />

      <AIEnhancedFAQ
        title="Häufige Fragen zur Dacheindeckung"
        faqs={[
          {
            question: "Was kostet Dach neu eindecken ohne Dämmung?",
            shortAnswer: "Ab 80€/m² für Betondachsteine, ab 100€/m² für Tonziegel.",
            details: "Eine Neueindeckung ohne Dämmung kostet ab 80€/m² für Betondachsteine, ab 100€/m² für Tonziegel und ab 150€/m² für Schiefer. Bei 100m² Dachfläche rechnen Sie mit 8.000-15.000€. Faktoren wie Dachneigung, Zugänglichkeit und Gerüst beeinflussen den Endpreis.",
            priceRange: "8.000–15.000€ bei 100m²",
            localReference: "In München-Obermenzing und Pasing führen wir wöchentlich Dachsanierungen durch.",
            nextStep: "Kostenloses Angebot anfordern →"
          },
          {
            question: "Steildach oder Flachdach – was ist besser?",
            shortAnswer: "Steildächer halten länger (50+ Jahre) und bieten Dachraum.",
            details: "Steildächer sind wartungsärmer und bieten zusätzlichen Wohnraum. Flachdächer sind im Bau günstiger und ermöglichen Begrünung oder Terrassen. Die Wahl hängt von Ihrem Gebäude und Nutzungswünschen ab.",
            localReference: "In Münchner Neubaugebieten wie Freiham sehen wir beide Varianten.",
            nextStep: "Beratungstermin vereinbaren →"
          },
          {
            question: "Welche Dachziegel sind die besten?",
            shortAnswer: "Tondachziegel halten 80+ Jahre und sind farbecht.",
            details: "Tondachziegel sind langlebig (80+ Jahre), farbecht und natürlich. Betondachsteine sind günstiger, schwerer und halten 40-50 Jahre. Schiefer ist am hochwertigsten (100+ Jahre), aber auch teurer. Für München empfehlen wir meist Tonziegel wegen der Witterungsbeständigkeit.",
            priceRange: "Tonziegel 5-15€/Stück",
            localReference: "Im denkmalgeschützten Bogenhausen verwenden wir oft Biberschwanzziegel.",
            nextStep: "Material-Beratung anfordern →"
          },
          {
            question: "Lohnt sich eine Aufsparrendämmung beim Dachdecken?",
            shortAnswer: "Ja! Bis zu 30% Heizkostenersparnis und 20% Förderung möglich.",
            details: "Eine Aufsparrendämmung spart bis zu 30% Heizkosten, wird mit bis zu 20% BAFA-Zuschuss gefördert und steigert den Immobilienwert. Mehrkosten: ca. 80-120€/m² gegenüber reiner Eindeckung. Die Investition amortisiert sich oft in 8-12 Jahren.",
            priceRange: "+80-120€/m² Mehrkosten",
            localReference: "Energetische Sanierungen sind in Münchner Altbauvierteln wie Schwabing sehr gefragt.",
            nextStep: "Förderberatung anfragen →"
          }
        ]}
      />

      <ProofStack title="Warum 089Dach für Ihre Bedachung?" />

      <ProcessSteps 
        title="Ablauf Dacheindeckung München: In 6 Schritten zum neuen Dach"
        subtitle="Planbar, transparent und stressfrei – von der ersten Beratung bis zur Garantie."
      />

      <LeadFunnel 
        headline="Neue Dacheindeckung geplant?"
        subheadline="Wir beraten Sie zu allen Materialien."
        description="Die richtige Dacheindeckung schützt Ihr Haus für Jahrzehnte. Wir zeigen Ihnen die beste Lösung für Ihr Münchner Objekt."
      />
      <Contact 
        title="Neue Dacheindeckung geplant?"
        description="Ob Ziegel, Schiefer oder Metalldach – wir beraten Sie zu allen Materialien und erstellen Ihnen ein maßgeschneidertes Angebot für Ihre Bedachung."
      />
      <Footer />
    </div>
  );
}
