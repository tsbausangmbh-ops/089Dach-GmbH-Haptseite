import toolsImage from "@assets/generated_images/roofer_tools_arranged_cleanly.png";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-sm overflow-hidden shadow-xl">
              <img 
                src={toolsImage} 
                alt="Dachdecker Werkzeug" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-primary/20 rounded-sm -z-0 hidden md:block"></div>
            
            <div className="absolute -bottom-10 -left-10 bg-secondary p-8 rounded-sm shadow-lg text-white max-w-xs hidden md:block z-20">
              <p className="font-heading font-bold text-4xl text-primary mb-2">25+</p>
              <p className="font-medium text-lg">Jahre Erfahrung in München und Umgebung</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Über 089Dach GmbH München</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mt-2 mb-6">
              Handwerk mit Herz und Verstand – Wir kümmern uns um Ihr Zuhause
            </h2>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Ein Dachschaden kommt oft unerwartet und bringt Sorgen mit sich. "Hält das Dach beim nächsten Sturm?", "Wie teuer wird die Reparatur?". 
                Wir von der 089Dach GmbH verstehen diese Ängste. Als Ihr lokaler Dachdecker in München sind wir da, um Ihnen diese Sorgen zu nehmen.
              </p>
              <p>
                Wir beraten Sie ehrlich – wir verkaufen Ihnen kein neues Dach, wenn eine Reparatur ausreicht. 
                Aber wir sagen Ihnen auch klar, wann eine Sanierung langfristig die sicherere und kostengünstigere Lösung ist. 
                Vertrauen Sie auf über 25 Jahre Erfahrung und echte Münchner Handschlagqualität.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-8">
              <div>
                <h4 className="font-heading font-bold text-secondary text-lg mb-1">Meisterbetrieb</h4>
                <p className="text-muted-foreground">Eingetragen in der Handwerksrolle</p>
              </div>
              <div>
                <h4 className="font-heading font-bold text-secondary text-lg mb-1">Regional</h4>
                <p className="text-muted-foreground">Schnell vor Ort in ganz München</p>
              </div>
            </div>
            
            <div className="mt-10">
              <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-sm px-8 py-6 text-lg">
                Mehr erfahren
              </Button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
