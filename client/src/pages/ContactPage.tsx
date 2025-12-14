import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      {/* Contact Hero */}
      <section className="pt-32 pb-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">Kontakt</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary mt-4 mb-6">
            Wir sind für Sie da
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Haben Sie Fragen zu Ihrem Dach oder benötigen Sie ein Angebot? 
            Unser Team freut sich auf Ihre Nachricht.
          </p>
        </div>
      </section>

      <Contact />
      
      <Footer />
    </div>
  );
}
