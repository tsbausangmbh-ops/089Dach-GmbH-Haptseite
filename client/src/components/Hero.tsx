import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle2, Shield, Clock, Star } from "lucide-react";
import heroImage from "@assets/generated_images/roofer_working_on_red_tile_roof_munich.png";

interface HeroProps {
  onOpenFunnel?: () => void;
}

export default function Hero({ onOpenFunnel }: HeroProps) {
  return (
    <>
      <div className="relative w-full min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Dachdecker bei der Arbeit"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
          
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
          <div className="max-w-3xl text-white animate-in slide-in-from-left duration-700 fade-in">
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-primary px-4 py-1.5 text-sm font-bold uppercase tracking-wider rounded-sm">
                Dachdecker Meisterbetrieb München
              </span>
            </div>
            
            {/* NLP: Problem-Spiegelung - Der Kunde fühlt sich verstanden */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight mb-6">
              Machen Sie sich Sorgen<br/>
              <span className="text-primary">um Ihr Dach?</span>
            </h1>
            
            {/* NLP: Emotionale Identifikation */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-sm p-5 mb-6">
              <p className="text-lg md:text-xl text-white font-medium italic">
                „Wird das Dach den nächsten Sturm überstehen?"<br/>
                „Warum ist es oben immer so kalt?"<br/>
                „Was wird das kosten – und wem kann ich vertrauen?"
              </p>
            </div>
            
            {/* NLP: Lösung & Autorität */}
            <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-xl leading-relaxed">
              <strong className="text-white">Diese Fragen kennen wir.</strong> Seit über 25 Jahren helfen wir Münchner Familien, 
              wieder ruhig zu schlafen. <span className="text-primary font-semibold">Ohne versteckte Kosten. Ohne böse Überraschungen.</span>
            </p>
            
            {/* NLP: Dringlichkeit + Handlungsaufforderung */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-7 rounded-sm shadow-xl hover:scale-105 transition-transform"
                onClick={onOpenFunnel}
                data-testid="button-hero-funnel"
              >
                Ja, ich will Klarheit!
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 border-white text-white hover:bg-white hover:text-secondary font-bold text-lg px-8 py-7 rounded-sm backdrop-blur-sm"
                asChild
                data-testid="button-hero-call"
              >
                <a href="tel:08912621964">
                  <Phone className="mr-2 h-5 w-5" />
                  Jetzt anrufen
                </a>
              </Button>
            </div>
            
            {/* NLP: Risiko-Umkehr */}
            <p className="text-sm text-gray-300 mb-8">
              <CheckCircle2 className="inline h-4 w-4 text-green-400 mr-1" />
              Kostenlose Erstberatung • Unverbindlich • Antwort innerhalb 24h
            </p>
          </div>
        </div>
      </div>

      {/* Trust Strip - Vertrauensanker direkt unter Hero */}
      <div className="bg-secondary border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Social Proof */}
            <div className="py-6 md:py-8 px-4 text-center text-white">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="font-bold text-lg">4.9 von 5 Sternen</p>
              <p className="text-sm text-gray-400">Über 500 zufriedene Kunden</p>
            </div>

            {/* Garantie */}
            <div className="py-6 md:py-8 px-4 text-center text-white">
              <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="font-bold text-lg">Meister-Garantie</p>
              <p className="text-sm text-gray-400">Geprüfte Qualität, schriftlich garantiert</p>
            </div>

            {/* Erfahrung */}
            <div className="py-6 md:py-8 px-4 text-center text-white">
              <p className="text-4xl font-bold text-primary mb-1">25+</p>
              <p className="font-bold text-lg">Jahre Erfahrung</p>
              <p className="text-sm text-gray-400">München & Umgebung</p>
            </div>

            {/* Reaktionszeit */}
            <div className="py-6 md:py-8 px-4 text-center text-white">
              <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="font-bold text-lg">Schnelle Hilfe</p>
              <p className="text-sm text-gray-400">Notdienst: Antwort in 2 Std.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Mini-Strip */}
      <div className="bg-gray-50 py-6 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <div className="flex -space-x-3">
              {/* Avatar placeholders */}
              <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center text-sm font-bold border-2 border-white">MK</div>
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold border-2 border-white">SW</div>
              <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center text-sm font-bold border-2 border-white">TH</div>
            </div>
            <p className="text-muted-foreground max-w-xl">
              <span className="font-semibold text-secondary">„Endlich ein Handwerker, dem man vertrauen kann."</span>
              {" "}– Familie Keller, Obermenzing
            </p>
            <Button variant="link" className="text-primary font-semibold p-0" asChild data-testid="link-more-reviews">
              <a href="/referenzen">Mehr Bewertungen →</a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
