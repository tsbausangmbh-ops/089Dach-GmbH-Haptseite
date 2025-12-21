import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle2, Shield, Clock, Star } from "lucide-react";
import heroImage from "@assets/generated_images/roofer_working_on_red_tile_roof_munich.png";

interface HeroProps {
  onOpenFunnel?: () => void;
}

export default function Hero({ onOpenFunnel }: HeroProps) {
  return (
    <>
      <div className="relative w-full min-h-[40vh] md:min-h-[60vh] flex items-center overflow-hidden pt-6 pb-8 md:pt-12 md:pb-16">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Dachdecker München bei Ziegeldach-Arbeiten auf rotem Steildach - 089Dach Meisterbetrieb"
            className="w-full h-full object-cover"
            width={1792}
            height={1024}
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
          
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

        <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl text-white animate-in slide-in-from-left duration-700 fade-in">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-primary px-4 py-1.5 text-sm font-bold uppercase tracking-wider rounded-xl">
                089Dach GmbH München
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1.5 text-sm font-medium rounded-xl flex items-center gap-1.5">
                <span className="text-yellow-400">★</span> Meister seit 1998
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1.5 text-sm font-medium rounded-xl flex items-center gap-1.5">
                <span className="text-green-400">✓</span> 10 Jahre Garantie
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight mb-4 md:mb-6">
              <strong>Dachdecker München</strong> –<br/>
              <span className="text-primary">Ihr Meisterbetrieb</span>
            </h1>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 md:p-5 mb-4 md:mb-6">
              <p className="text-lg md:text-xl text-white font-medium">
                <span className="text-primary">✓</span> Undichte Stellen finden und beheben<br/>
                <span className="text-primary">✓</span> Heizkosten senken durch bessere Dämmung<br/>
                <span className="text-primary">✓</span> Sturmschäden schnell reparieren
              </p>
            </div>
            
            <p className="text-base md:text-xl text-gray-100 mb-6 md:mb-8 max-w-xl leading-relaxed">
              <strong className="text-white">Über 100+ zufriedene Kunden</strong> vertrauen 089Dach GmbH München. 
              <span className="text-primary font-semibold"> Faire Festpreise. Ehrliche Beratung. Saubere Arbeit.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-4 md:mb-6">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-7 rounded-xl shadow-xl hover:scale-105 transition-transform"
                asChild
                data-testid="button-hero-foerderrechner"
              >
                <a href="/foerderung-rechner">
                  Förderrechner
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 border-white text-white hover:bg-white hover:text-secondary font-bold text-lg px-8 py-7 rounded-xl backdrop-blur-sm"
                asChild
                data-testid="button-hero-call"
              >
                <a href="/rueckruf">
                  <Phone className="mr-2 h-5 w-5" />
                  Rückruf anfordern
                </a>
              </Button>
            </div>
            
            <p className="text-sm text-gray-300 mb-8">
              <CheckCircle2 className="inline h-4 w-4 text-green-400 mr-1" />
              Kostenlose Beratung • Festpreisangebot • Antwort in 24h
            </p>
          </div>
        </div>
      </div>

      <div className="bg-secondary border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="py-4 md:py-6 px-4 text-center text-white">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="font-bold text-lg">4.9 von 5 Sternen</p>
              <p className="text-sm text-gray-400">62+ zufriedene Kunden</p>
            </div>

            <div className="py-4 md:py-6 px-4 text-center text-white">
              <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="font-bold text-lg">Meister-Qualität</p>
              <p className="text-sm text-gray-400">Schriftliche Garantie</p>
            </div>

            <div className="py-4 md:py-6 px-4 text-center text-white">
              <p className="text-4xl font-bold text-primary mb-1">25+</p>
              <p className="font-bold text-lg">Jahre Erfahrung</p>
              <p className="text-sm text-gray-400">in München</p>
            </div>

            <div className="py-4 md:py-6 px-4 text-center text-white">
              <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="font-bold text-lg">Schnell vor Ort</p>
              <p className="text-sm text-gray-400">Termin in 48h möglich</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-stone-100 py-4 border-b border-stone-200">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center text-sm font-bold border-2 border-white">MK</div>
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold border-2 border-white">SW</div>
              <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center text-sm font-bold border-2 border-white">TH</div>
            </div>
            <p className="text-muted-foreground max-w-xl">
              <span className="font-semibold text-secondary">"Pünktlich, sauber, fairer Preis – genau wie versprochen."</span>
              {" "}– M. Keller, Obermenzing
            </p>
            <Button variant="link" className="text-primary font-semibold p-0" asChild data-testid="link-all-services">
              <a href="/leistungen">Alle Leistungen im Überblick →</a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
