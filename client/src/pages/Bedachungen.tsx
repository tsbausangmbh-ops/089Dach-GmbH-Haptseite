import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Home, Warehouse, ShieldCheck, Quote, AlertTriangle } from "lucide-react";
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

        {/* Hero Logo Overlay */}
        <div className="absolute right-0 bottom-0 h-full w-1/2 opacity-10 pointer-events-none hidden md:flex items-center justify-center overflow-hidden">
             <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 800 800" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full max-w-none transform rotate-12 scale-150"
          >
            <g fill="currentColor" className="text-white">
              <rect x="100" y="200" width="200" height="200" rx="20" fill="currentColor" />
              <text x="200" y="340" fontSize="120" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" fill="black">089</text>
              <text x="340" y="340" fontSize="120" fontWeight="bold" fontFamily="sans-serif" fill="currentColor">DACH</text>
              <text x="345" y="390" fontSize="30" fontWeight="medium" fontFamily="sans-serif" letterSpacing="5" fill="currentColor">GMBH MÜNCHEN</text>
            </g>
          </svg>
        </div>

        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Dachsanierung & Bedachungen in München
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Schützen Sie, was Ihnen wichtig ist. Wir sorgen dafür, dass Sie und Ihre Familie unter einem sicheren Dach leben.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-sm p-8 md:p-12 shadow-sm border border-border">
              <div className="flex items-start gap-4 mb-6">
                <AlertTriangle className="h-10 w-10 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-heading font-bold text-secondary mb-4">
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
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Unsere Expertise</span>
              <h2 className="text-3xl font-heading font-bold text-secondary mt-2 mb-6">
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
                  <div className="bg-primary/10 p-3 rounded-sm h-fit">
                    <Home className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">Steildach Sanierung & Neubau</h3>
                    <p className="text-muted-foreground">
                      Ob Tondachziegel, Betonsteine oder edles Schiefer – wir finden die perfekte Eindeckung 
                      für Ihr Haus. Sturmsicher befestigt, fachmännisch verlegt.
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
                      Flachdächer verzeihen keine Fehler. Deshalb arbeiten wir nur mit Premiummaterialien 
                      und erfahrenen Fachkräften. Für Garagen, Anbauten und große Gewerbeobjekte.
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
                      Bis zu 30% weniger Heizkosten durch moderne Dämmung. Wir beraten Sie auch zu 
                      KfW-Förderung und BAFA-Zuschüssen – die können mehrere tausend Euro ausmachen!
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
      <section className="py-12 bg-secondary/5">
        <div className="container mx-auto px-4">
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

      <LeadFunnel />
      
      <Contact />
      <Footer />
    </div>
  );
}
