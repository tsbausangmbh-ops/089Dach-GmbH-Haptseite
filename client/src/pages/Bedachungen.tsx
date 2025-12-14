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
      <div className="relative w-full h-[40vh] min-h-[350px] flex items-center overflow-hidden">
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
            Dachsanierung & Bedachungen in München
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Ihr Fachbetrieb für sichere Steil- und Flachdächer. Wir schützen Ihre Immobilie vor Wind und Wetter – langlebig und energieeffizient.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Unsere Expertise</span>
              <h2 className="text-3xl font-heading font-bold text-secondary mt-2 mb-6">
                Ist Ihr Dach noch sicher? Wir prüfen und sanieren fachgerecht.
              </h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Ein undichtes oder schlecht gedämmtes Dach kann schnell zu teuren Folgeschäden an der Bausubstanz führen. 
                  Feuchtigkeit, Schimmel und Energieverlust sind die Folgen. Warten Sie nicht, bis es durchtropft.
                </p>
                <p className="mt-4">
                  Wir als 089Dach GmbH prüfen Ihr Dach auf Herz und Nieren. Ob komplette <strong>Dachsanierung</strong>, 
                  <strong>Neueindeckung</strong> oder <strong>Flachdachabdichtung</strong> – wir finden die Lösung, 
                  die zu Ihrem Budget und Ihrem Haus passt. Damit Sie wieder ruhig schlafen können.
                </p>
              </div>

              <div className="mt-10 space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-sm h-fit">
                    <Home className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">Steildach Sanierung & Neubau</h3>
                    <p className="text-muted-foreground">
                      Klassische Ziegel, Betonstein oder Schiefer. Wir decken Ihr Dach neu ein – sturmsicher und optisch ansprechend.
                      Inklusive Prüfung des Dachstuhls.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-sm h-fit">
                    <Warehouse className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">Flachdach Abdichtung</h3>
                    <p className="text-muted-foreground">
                      Flachdächer sind sensibel. Wir nutzen hochwertige Bitumen- oder Kunststoffbahnen für 100% Dichtigkeit.
                      Ideal auch für Garagen und Anbauten.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-sm h-fit">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">Energetische Dachsanierung</h3>
                    <p className="text-muted-foreground">
                      Heizkosten sparen und Wohnklima verbessern. Wir dämmen Ihr Dach nach den aktuellen GEG-Richtlinien.
                      Fragen Sie uns nach Fördermöglichkeiten!
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
