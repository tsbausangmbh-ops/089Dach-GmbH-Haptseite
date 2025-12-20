import { Phone, Calendar, Mail, MessageCircle, ArrowRight, Clock, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTAClusterProps {
  variant?: "primary" | "secondary" | "emergency";
  title?: string;
  subtitle?: string;
  showTrustBadges?: boolean;
}

export default function CTACluster({
  variant = "primary",
  title = "Bereit für Ihr neues Dach?",
  subtitle = "Kostenlose Beratung · Festpreisangebot · 10 Jahre Garantie",
  showTrustBadges = true
}: CTAClusterProps) {
  const bgColors = {
    primary: "bg-gradient-to-r from-secondary to-secondary/90",
    secondary: "bg-gradient-to-r from-primary to-primary/90",
    emergency: "bg-gradient-to-r from-red-600 to-red-700"
  };

  const textColors = {
    primary: "text-white",
    secondary: "text-white",
    emergency: "text-white"
  };

  return (
    <section className={`py-8 md:py-12 ${bgColors[variant]}`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-2xl md:text-3xl font-heading font-bold ${textColors[variant]} mb-3`}>
            {title}
          </h2>
          <p className={`${textColors[variant]} opacity-90 mb-8`}>{subtitle}</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <a href="tel:08912621964" className="block">
              <Button 
                size="lg" 
                className="w-full bg-white text-secondary hover:bg-gray-100"
                data-testid="cta-phone"
              >
                <Phone className="h-5 w-5 mr-2" /> Anrufen
              </Button>
              <span className={`text-xs ${textColors[variant]} opacity-75 mt-1 block`}>
                089 12621964
              </span>
            </a>

            <a href="/rueckruf" className="block">
              <Button 
                size="lg" 
                className="w-full bg-primary text-white hover:bg-primary/90"
                data-testid="cta-callback"
              >
                <Calendar className="h-5 w-5 mr-2" /> Rückruf
              </Button>
              <span className={`text-xs ${textColors[variant]} opacity-75 mt-1 block`}>
                Wunschtermin wählen
              </span>
            </a>

            <a href="/beratung" className="block">
              <Button 
                size="lg" 
                variant="outline"
                className="w-full border-white text-white hover:bg-white hover:text-secondary"
                data-testid="cta-consultation"
              >
                <MessageCircle className="h-5 w-5 mr-2" /> Beratung
              </Button>
              <span className={`text-xs ${textColors[variant]} opacity-75 mt-1 block`}>
                Online Termin
              </span>
            </a>

            <a href="/kontakt" className="block">
              <Button 
                size="lg" 
                variant="outline"
                className="w-full border-white text-white hover:bg-white hover:text-secondary"
                data-testid="cta-contact"
              >
                <Mail className="h-5 w-5 mr-2" /> E-Mail
              </Button>
              <span className={`text-xs ${textColors[variant]} opacity-75 mt-1 block`}>
                info@089dach.de
              </span>
            </a>
          </div>

          {showTrustBadges && (
            <div className="flex flex-wrap justify-center gap-6 pt-6 border-t border-white/20">
              <div className={`flex items-center gap-2 ${textColors[variant]}`}>
                <Clock className="h-5 w-5" />
                <span className="text-sm">Antwort in 24h</span>
              </div>
              <div className={`flex items-center gap-2 ${textColors[variant]}`}>
                <Shield className="h-5 w-5" />
                <span className="text-sm">10 Jahre Garantie</span>
              </div>
              <div className={`flex items-center gap-2 ${textColors[variant]}`}>
                <Award className="h-5 w-5" />
                <span className="text-sm">Meisterbetrieb seit 1998</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function InlineCTA({ 
  text = "Jetzt kostenlos beraten lassen",
  href = "/rueckruf" 
}: { text?: string; href?: string }) {
  return (
    <div className="my-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
      <a href={href} className="flex items-center justify-between group">
        <span className="font-medium text-secondary">{text}</span>
        <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
}

export function EmergencyCTA() {
  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
      <a href="tel:08912621964">
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 shadow-lg rounded-full h-14 w-14 p-0"
          data-testid="emergency-cta"
        >
          <Phone className="h-6 w-6" />
        </Button>
      </a>
    </div>
  );
}
