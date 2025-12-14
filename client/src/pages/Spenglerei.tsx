import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, ShieldCheck, PenTool, CheckCircle2 } from "lucide-react";
import heroImage from "@assets/generated_images/copper_roof_gutter_detail.png";
import detailImage from "@assets/generated_images/metal_standing_seam_roof_detail.png";

export default function Spenglerei() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Spenglerarbeiten Kupfer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary/70 mix-blend-multiply" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Spenglerei & Blecharbeiten
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Präzisionsarbeit aus Metall. Wir fertigen langlebige Lösungen für Dach und Fassade in unserer eigenen Werkstatt.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Handwerkskunst</span>
              <h2 className="text-3xl font-heading font-bold text-secondary mt-2 mb-6">
                Langlebige Ästhetik aus Metall
              </h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Spenglerarbeiten sind die perfekte Ergänzung zu jedem Dach. Metall bietet nicht nur hervorragenden 
                  Schutz vor Witterungseinflüssen, sondern setzt auch architektonische Akzente. 
                </p>
                <p className="mt-4">
                  Wir verarbeiten hochwertige Materialien wie Kupfer, Titanzink, Aluminium und Edelstahl. 
                  Jedes Bauteil wird individuell für Ihr Objekt gefertigt und fachgerecht montiert.
                </p>
              </div>

              <div className="mt-10 space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-sm h-fit">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">Dachentwässerung</h3>
                    <p className="text-muted-foreground">
                      Dachrinnen, Fallrohre und Zubehör in verschiedenen Dimensionen und Materialien. 
                      Damit Regenwasser sicher abgeleitet wird.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-sm h-fit">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">Anschlüsse & Einfassungen</h3>
                    <p className="text-muted-foreground">
                      Kamineinfassungen, Wandanschlüsse, Gaubenverkleidungen und Mauerabdeckungen. 
                      Dauerhafter Schutz für empfindliche Übergänge.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-sm h-fit">
                    <PenTool className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">Metalldächer & Fassaden</h3>
                    <p className="text-muted-foreground">
                      Komplette Dacheindeckungen in Stehfalztechnik oder moderne Metallfassaden 
                      für einen zeitlosen Look.
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
                <h4 className="font-bold text-secondary text-lg mb-4">Materialvielfalt</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Kupfer - Der Klassiker</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Titanzink - Modern & puristisch</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Aluminium - Farbig & leicht</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-secondary mb-6">
            Individuelle Blecharbeiten benötigt?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Wir fertigen auch Sonderlösungen nach Maß. Kontaktieren Sie uns für eine Beratung.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-sm">
            Jetzt Angebot anfordern
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}
