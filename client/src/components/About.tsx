import toolsImage from "@assets/generated_images/roofer_tools_arranged_cleanly.png";
import { Button } from "@/components/ui/button";
import { Award, MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-8 bg-stone-50">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-xl overflow-hidden shadow-sm border border-stone-200">
          
          <div className="relative h-64 lg:h-auto lg:min-h-[500px]">
            <img 
              src={toolsImage} 
              alt="Professionelles Dachdecker-Werkzeug für Spenglerarbeiten und Dachsanierung in München" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary/90 to-transparent p-6 lg:p-8">
              <p className="font-heading font-bold text-4xl text-primary mb-1">25+</p>
              <p className="font-medium text-white text-lg">Jahre Erfahrung in München</p>
            </div>
          </div>

          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Über 089Dach GmbH</span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mt-2 mb-6">
              Handwerk mit Herz und Verstand
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-secondary">Menschen in schwierigen Momenten helfen</strong> – das treibt uns an. 
                Ein Dachschaden kommt immer unerwartet. Die Angst vor hohen Kosten, die Unsicherheit – wir verstehen das.
              </p>
              <p>
                Deshalb beraten wir ehrlich: Wir verkaufen Ihnen kein neues Dach, wenn eine Reparatur reicht. 
                Aber wir sagen auch klar, wann eine Sanierung langfristig die bessere Wahl ist.
              </p>
              <div className="bg-white border border-gray-200 rounded-xl p-4 italic">
                „Die haben uns nicht nur das Dach repariert – sie haben uns die Sorgen genommen."
                <span className="block text-sm text-primary font-medium mt-2 not-italic">– Familie Schneider, München-Schwabing</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Award className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold text-secondary">Meisterbetrieb</h4>
                  <p className="text-sm text-muted-foreground">Handwerksrolle</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold text-secondary">Regional</h4>
                  <p className="text-sm text-muted-foreground">Ganz München</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-xl px-6 py-5" asChild>
                <a href="/ueber-uns">Mehr über uns</a>
              </Button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
