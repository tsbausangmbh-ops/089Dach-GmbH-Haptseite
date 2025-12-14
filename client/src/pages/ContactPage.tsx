import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import contactImage from "@assets/generated_images/friendly_woman_on_phone_in_office.png";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      {/* Contact Hero */}
      <section className="pt-4 pb-8 bg-gray-50 relative overflow-hidden">
        {/* Hero Logo Overlay */}
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-10 pointer-events-none hidden md:flex items-center justify-center overflow-hidden z-0">
          <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 800 800" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full max-w-none transform rotate-12 scale-150"
          >
            <g fill="currentColor" className="text-secondary">
              <rect x="100" y="200" width="200" height="200" rx="20" fill="currentColor" />
              <text x="200" y="340" fontSize="120" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" fill="white">089</text>
              <text x="340" y="340" fontSize="120" fontWeight="bold" fontFamily="sans-serif" fill="currentColor">DACH</text>
              <text x="345" y="390" fontSize="30" fontWeight="medium" fontFamily="sans-serif" letterSpacing="5" fill="currentColor">GMBH MÜNCHEN</text>
            </g>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left z-10">
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Kontakt & Beratung</span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary mt-4 mb-6">
                Wir sind persönlich für Sie da
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl mb-4">
                Ob dringende Reparatur, energetische Sanierung oder ein Neubauprojekt: Wir nehmen uns Zeit für Ihr Anliegen. 
              </p>
              <p className="text-lg text-muted-foreground max-w-xl">
                Als Meisterbetrieb legen wir größten Wert auf eine transparente Beratung und eine fachgerechte Ausführung. 
                Schreiben Sie uns oder rufen Sie an – wir kümmern uns um den Rest, damit Sie sich sicher fühlen können.
              </p>
            </div>
            
            <div className="relative z-10 hidden lg:block">
              <div className="relative rounded-sm overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500">
                <img 
                  src={contactImage} 
                  alt="Unser Team freut sich auf Ihren Anruf" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 top-10 -right-10 w-full h-full border-4 border-primary/20 rounded-sm transform -rotate-2"></div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      
      <Footer />
    </div>
  );
}
