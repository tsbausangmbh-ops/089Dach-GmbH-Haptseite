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
      <section className="pt-24 pb-8 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left z-10">
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Kontakt</span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary mt-4 mb-6">
                Wir sind für Sie da
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                Haben Sie Fragen zu Ihrem Dach oder benötigen Sie ein Angebot? 
                Unser Team freut sich auf Ihre Nachricht.
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
