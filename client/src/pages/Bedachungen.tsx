import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Home, Warehouse, ShieldCheck } from "lucide-react";
import heroImage from "@assets/generated_images/roofer_working_on_red_tile_roof_munich.png";
import tileImage from "@assets/generated_images/red_roof_tiles_texture_close_up.png";
import LeadFunnel from "@/components/LeadFunnel";

export default function Bedachungen() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Dachdeckerarbeiten"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Bedachungen
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Ihr Fachbetrieb für Steil- und Flachdächer in München. Wir sorgen für dichte Dächer und energetische Sanierungen.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Unsere Leistungen</span>
              <h2 className="text-3xl font-heading font-bold text-secondary mt-2 mb-6">
                Alles rund ums Dach
              </h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Das Dach ist eines der am stärksten beanspruchten Bauteile Ihres Hauses. Es schützt vor Witterungseinflüssen 
                  und trägt maßgeblich zur Energiebilanz bei. Als Meisterbetrieb bieten wir Ihnen fachgerechte Lösungen 
                  für Neubau und Sanierung.
                </p>
                <p className="mt-4">
                  Ob klassisches Ziegeldach, modernes Flachdach oder energetische Dachsanierung – wir beraten Sie 
                  umfassend und führen alle Arbeiten mit höchster Sorgfalt aus.
                </p>
              </div>

              <div className="mt-10 space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-sm h-fit">
                    <Home className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">Steildach</h3>
                    <p className="text-muted-foreground">
                      Eindeckung mit Tondachziegeln oder Betondachsteinen. Wir achten auf optimale Hinterlüftung 
                      und fachgerechte Anschlüsse.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-sm h-fit">
                    <Warehouse className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">Flachdach</h3>
                    <p className="text-muted-foreground">
                      Abdichtung mit Bitumen- oder Kunststoffbahnen. Dauerhaft dicht und auf Wunsch mit Dachbegrünung 
                      für ein besseres Mikroklima.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-sm h-fit">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">Dachsanierung & Dämmung</h3>
                    <p className="text-muted-foreground">
                      Sparen Sie Energie durch eine moderne Aufsparrendämmung oder Zwischensparrendämmung nach GEG.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={tileImage} 
                alt="Dachziegel Detail" 
                className="rounded-sm shadow-xl w-full object-cover aspect-[4/5]"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-sm shadow-lg max-w-sm hidden md:block">
                <h4 className="font-bold text-secondary text-lg mb-4">Warum 089Dach?</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Verwendung von Markenprodukten</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Meisterliche Ausführung</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Termintreue Umsetzung</span>
                  </li>
                </ul>
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
