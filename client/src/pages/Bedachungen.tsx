import Navbar from "@/components/Navbar";
import AIBeraterSection from "@/components/AIBeraterSection";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Home, Warehouse, ShieldCheck, Quote, AlertTriangle, Award, Shield, Users } from "lucide-react";
import heroImage from "@assets/generated_images/roofer_working_on_red_tile_roof_munich.png";
import tileImage from "@assets/generated_images/red_roof_tiles_texture_close_up.png";
import LeadFunnel from "@/components/LeadFunnel";
import SEO, { BreadcrumbSchema, ServiceSchema } from "@/components/SEO";
import RelatedServices from "@/components/RelatedServices";
import { TextWithKeywordLinks } from "@/components/KeywordLink";
import { FlachdachMuenchenContent } from "@/components/SEOContent";

export default function Bedachungen() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title="Dach neu eindecken München | Kosten Ziegel & Dämmung 2025"
        description="Was kostet Dach neu eindecken? Ab 80€/m² ohne Dämmung. ✓ Steildach & Flachdach ✓ Meisterbetrieb ✓ 10 Jahre Garantie. Festpreis-Angebot ☎ 089 12621964"
        canonical="https://089dach.de/leistungen/bedachungen"
        keywords="was kostet dach neu eindecken pro qm münchen, dachziegel oder betonsteine was ist besser, flachdach abdichten kosten pro m2, dach undicht reparieren oder komplett erneuern, dacheindeckung altbau was beachten, biberschwanzziegel preis erfahrungen, schieferdach kosten lebensdauer, dachbegrünung kosten förderung münchen, steildach isolieren nachträglich kosten, welche dachziegel sind die besten, dacheindeckung obermenzing pasing laim schwabing sendling"
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
          <div className="max-w-2xl text-white">
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
      <section className="py-6 md:py-10 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-border">
              <div className="flex items-start gap-4 mb-6">
                <AlertTriangle className="h-10 w-10 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-heading font-bold text-center text-secondary mb-4">
                    Kennen Sie das auch?
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
                Vom ersten Blick bis zum letzten Ziegel: Wir kümmern uns um alles.
              </h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Ein Dach ist mehr als nur eine Abdeckung – es ist der <strong>Schutzschild Ihres Zuhauses</strong>. 
                  Wenn dieser Schutz bröckelt, leiden alle darunter: die Bausubstanz, Ihr Geldbeutel und 
                  letztlich Ihre Lebensqualität.
                </p>
                <p className="mt-4">
                  Wir bei 089Dach nehmen uns Zeit für eine ehrliche Bestandsaufnahme. Nicht jedes alte 
                  Dach muss komplett erneuert werden – manchmal reicht eine gezielte Reparatur. Das 
                  sagen wir Ihnen offen, denn unser Ruf ist uns wichtiger als ein schneller Auftrag.
                </p>
              </div>

              <div className="mt-10 space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl h-fit">
                    <Home className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">Steildach Sanierung & Neubau</h3>
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
                    <h3 className="text-xl font-bold text-secondary mb-2">Flachdach Abdichtung</h3>
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
                    <h3 className="text-xl font-bold text-secondary mb-2">Energetische Dachsanierung</h3>
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
          <div className="max-w-4xl mx-auto">
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

      <FlachdachMuenchenContent />
      <LeadFunnel />
      <RelatedServices 
        currentPage="bedachungen" 
        relatedIds={["dachsanierung", "spenglerei", "gaubenbau", "referenzen"]}
      />
      <Contact />
      <Footer />
    </div>
  );
}
