import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, ShieldCheck, PenTool, CheckCircle2, Quote, Hammer, Award, Shield, Users } from "lucide-react";
import heroImage from "@assets/generated_images/copper_roof_gutter_detail.png";
import detailImage from "@assets/generated_images/metal_standing_seam_roof_detail.png";
import LeadFunnel from "@/components/LeadFunnel";
import SEO, { BreadcrumbSchema, ServiceSchema } from "@/components/SEO";

export default function Spenglerei() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title="Spenglerarbeiten München | Dachentwässerung & Metallverarbeitung"
        description="Präzise Spenglerarbeiten: Dachrinnen, Stehfalz, Gauben-Bekleidung & Kupferlösungen für München und Umland. Handgefertigt in eigener Werkstatt."
        canonical="https://089dach.de/leistungen/spenglerei"
        keywords="spengler münchen, dachrinne münchen, stehfalz dach münchen, kupferdach münchen, blecharbeiten münchen"
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Spenglerei", url: "/leistungen/spenglerei" }]} />
      <ServiceSchema 
        pageName="Spenglerarbeiten München"
        services={[
          { name: "Dachrinnen & Fallrohre", description: "Kupfer, Zink und Aluminium - handgefertigt in eigener Werkstatt" },
          { name: "Kamineinfassungen", description: "Maßgefertigte Verkleidungen für Schornsteine" },
          { name: "Stehfalzdach", description: "Hochwertige Metalldächer mit langer Lebensdauer" }
        ]}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-10 pb-12 bg-secondary relative overflow-hidden min-h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Spenglerarbeiten Kupfer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Spenglerarbeiten München</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mt-4 mb-6">
              Spenglerei München – Handwerkskunst in Metall
            </h1>
            <p className="text-xl text-gray-200 max-w-xl mb-4">
              Wenn Metall auf Meisterhand trifft, entstehen Bauteile, die Generationen überdauern. Maßgefertigt in unserer eigenen Werkstatt.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <div className="bg-stone-100 py-2 border-b border-stone-200">
        <div className="container mx-auto px-4">
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
              <span>1.500+ zufriedene Kunden</span>
            </span>
          </div>
        </div>
      </div>

      {/* Craftmanship Story */}
      <section className="py-4 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-sm p-8 md:p-12 shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <Hammer className="h-10 w-10 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-heading font-bold text-secondary mb-4">
                    Warum eine eigene Werkstatt den Unterschied macht
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    In einer Zeit, in der vieles von der Stange kommt, halten wir an der Tradition fest: 
                    <strong className="text-secondary"> Jedes Bauteil wird von Hand gefertigt</strong> – genau 
                    passend für Ihr Objekt.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Unser Meister arbeitet seit über 30 Jahren mit Kupfer, Zink und Aluminium. Er kennt 
                    die Eigenschaften jedes Materials, weiß wie es sich im Laufe der Jahre verändert, 
                    und fertigt Bauteile, die nicht nur funktionieren – sondern auch schön altern.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
            
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Spenglerhandwerk München</span>
              <h2 className="text-3xl font-heading font-bold text-secondary mt-2 mb-6">
                Metall, das schützt und begeistert
              </h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Eine undichte Dachrinne sieht man nicht – bis der Schaden an der Fassade sichtbar wird. 
                  Dann ist es oft zu spät, und die Reparaturkosten vervielfachen sich. Gute Spenglerarbeit 
                  verhindert genau das.
                </p>
                <p className="mt-4">
                  Wir bei 089Dach verbinden <strong>traditionelles Handwerk mit modernster Technik</strong>. 
                  Jede Rinne, jede Kamineinfassung, jede Gaubenverkleidung wird millimetergenau gefertigt – 
                  damit das Wasser immer dorthin fließt, wo es hin soll: weg von Ihrem Haus.
                </p>
              </div>

              <div className="mt-10 space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-sm h-fit">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">Dachrinnen & Entwässerung</h3>
                    <p className="text-muted-foreground">
                      Die unsichtbaren Helden Ihres Hauses. Eine gut geplante Dachentwässerung schützt 
                      Fassade, Fundament und Keller. Wir bieten Kupfer, Titanzink und Aluminium – 
                      mit optionalem Laubschutz.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-sm h-fit">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">Kamin- & Gaubenverkleidung</h3>
                    <p className="text-muted-foreground">
                      Hier zeigt sich wahre Handwerkskunst. Komplexe Formen, präzise Anschlüsse – und 
                      eine Optik, die Ihr Haus aufwertet. Einmal gut gemacht, hält es ein Leben lang.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-sm h-fit">
                    <PenTool className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">Metalldächer (Stehfalz)</h3>
                    <p className="text-muted-foreground">
                      Die Königsklasse für architektonisch anspruchsvolle Projekte. Extrem langlebig, 
                      sturmsicher und absolut regenfest – auch bei flachen Neigungen.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={detailImage} 
                alt="Stehfalzdach Detail" 
                className="rounded-sm shadow-xl w-full object-cover aspect-[4/5]"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-sm shadow-lg max-w-sm hidden md:block">
                <h4 className="font-bold text-secondary text-lg mb-4">Unsere Materialien</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Kupfer – patiniert zeitlos schön</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Titanzink – modern & wartungsfrei</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Aluminium – leicht & farbvielfältig</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Customer Story */}
      <section className="py-4 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <Quote className="h-12 w-12 text-primary flex-shrink-0" />
              <div>
                <p className="text-xl text-secondary leading-relaxed italic mb-6">
                  "Unser Altbau in Bogenhausen hat einen wunderschönen Erker mit komplizierter Dachform. 
                  Drei Betriebe hatten abgesagt – zu aufwändig, zu schwierig. Der Meister von 089Dach 
                  hat sich die Sache angeschaut, Maß genommen und gesagt: 'Das kriegen wir hin.' 
                  Heute glänzt dort eine handgefertigte Kupferverkleidung, die jeder Besucher bewundert. 
                  Das ist kein Blech von der Stange – das ist Kunst."
                </p>
                <p className="font-bold text-secondary">Dr. Friedrich Weber, München-Bogenhausen</p>
                <p className="text-muted-foreground text-sm">Kupfer-Erkerverkleidung, handgefertigt 2021</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadFunnel />

      <Contact />
      <Footer />
    </div>
  );
}
