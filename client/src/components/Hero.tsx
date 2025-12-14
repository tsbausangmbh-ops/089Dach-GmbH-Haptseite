import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@assets/generated_images/roofer_working_on_red_tile_roof_munich.png";

export default function Hero() {
  return (
    <div className="relative w-full h-[80vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Dachdecker bei der Arbeit"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent" />
        
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

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white animate-in slide-in-from-left duration-700 fade-in">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm">
              Dachdecker Meisterbetrieb München
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold leading-tight mb-6">
            Sicherheit für Ihr Dach <br/>
            <span className="text-primary-foreground">in München & Umgebung</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl font-light">
            Wir lassen Sie nicht im Regen stehen. Ihr vertrauensvoller Partner für Dachsanierung, Reparaturen und Spenglerarbeiten. 
            Schnell, ehrlich und kompetent.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-6 rounded-sm">
              Kostenloses Angebot
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-secondary font-bold text-lg px-8 py-6 rounded-sm">
              Unsere Leistungen
            </Button>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 text-sm font-medium text-gray-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-primary h-5 w-5" />
              <span>Kostenlose Beratung</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-primary h-5 w-5" />
              <span>Faire Festpreise</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-primary h-5 w-5" />
              <span>Alles aus einer Hand</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
