import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import contactImage from "@assets/generated_images/friendly_woman_on_phone_in_office.png";
import SEO, { BreadcrumbSchema, LocalBusinessSchema } from "@/components/SEO";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title="Kontakt Dachdecker München | Beratung - 089Dach"
        description="Dachdecker kontaktieren: 089 12621964. Thuillestr. 20, München-Obermenzing. Kostenlose Vor-Ort-Beratung. Jetzt Termin sichern!"
        canonical="https://089dach.de/kontakt"
        keywords="dachdecker kontakt telefon münchen, kostenlos angebot dach münchen, dachberatung obermenzing pasing laim, dachdecker anrufen 089 12621964, kontaktformular dachdecker bayern, anfahrt 089dach münchen"
        aiSummary="089Dach GmbH Kontakt: Telefon 089 12621964, Thuillestr. 20, 81247 München-Obermenzing. Öffnungszeiten Mo-Fr 8-17 Uhr. Kostenlose Vor-Ort-Beratung. Schnelle Terminvergabe."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Kontakt", url: "/kontakt" }]} />
      <LocalBusinessSchema />
      <Navbar />
      
      {/* Contact Hero */}
      <section className="pt-10 pb-12 bg-secondary relative overflow-hidden min-h-[40vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={contactImage}
            alt="Kundenberatung"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/50"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-2xl text-white">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Kontakt & Beratung</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mt-4 mb-6">
              Wir sind persönlich für Sie da
            </h1>
            <p className="text-xl text-gray-200 max-w-xl mb-4">
              Ob dringende Reparatur, energetische Sanierung oder ein Neubauprojekt: Wir nehmen uns Zeit für Ihr Anliegen. 
            </p>
            <p className="text-lg text-gray-300 max-w-xl">
              Als Meisterbetrieb legen wir größten Wert auf eine transparente Beratung und eine fachgerechte Ausführung. 
              Schreiben Sie uns oder rufen Sie an – wir kümmern uns um den Rest.
            </p>
          </div>
        </div>
      </section>

      <Contact />
      
      <Footer />
    </div>
  );
}
