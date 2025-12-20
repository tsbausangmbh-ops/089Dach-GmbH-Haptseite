import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import contactImage from "@assets/generated_images/friendly_woman_on_phone_in_office.png";
import SEO, { BreadcrumbSchema, LocalBusinessSchema, FAQPageSchema } from "@/components/SEO";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title="Kontakt Dachdecker München | Beratung - 089Dach"
        description="Dachdecker kontaktieren: 089 12621964. Thuillestr. 20, München-Obermenzing. Kostenlose Vor-Ort-Beratung. Jetzt Termin sichern!"
        canonical="https://089dach.de/kontakt"
        keywords="dachdecker kontakt münchen, telefon 089 12621964 email anfahrt öffnungszeiten, kontakt obermenzing pasing laim schwabing sendling bogenhausen moosach neuhausen, kontakt gräfelfing planegg germering starnberg dachau fürstenfeldbruck, kostenlose beratung termin angebot anfrage"
        aiSummary="089Dach GmbH Kontakt: Telefon 089 12621964, Thuillestr. 20, 81247 München-Obermenzing. Öffnungszeiten Mo-Fr 8-17 Uhr. Kostenlose Vor-Ort-Beratung. Schnelle Terminvergabe."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Kontakt", url: "/kontakt" }]} />
      <LocalBusinessSchema />
      <FAQPageSchema faqs={[
        { question: "Wie kann ich 089Dach am besten erreichen?", answer: "Telefonisch unter 089 12621964 (Mo-Fr 8-17 Uhr), per E-Mail an info@089dach.de oder über unser Kontaktformular. Wir antworten innerhalb von 24 Stunden." },
        { question: "Wo ist 089Dach?", answer: "Thuillestraße 20, 81247 München-Obermenzing. Gut erreichbar aus ganz München und Umgebung." },
        { question: "Kostet die Erstberatung etwas?", answer: "Nein, die Vor-Ort-Beratung und der Kostenvoranschlag sind komplett kostenlos und unverbindlich." }
      ]} />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-6 pb-8 md:pt-10 md:pb-12 relative overflow-hidden min-h-[40vh] md:min-h-[50vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={contactImage}
            alt="Freundliche Mitarbeiterin am Telefon - Kundenberatung Dachdecker München 089Dach"
            className="w-full h-full object-cover"
            width={1792}
            height={1024}
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/70"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl text-white">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">089Dach Kontakt</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mt-4 mb-6">
              Wir sind persönlich für Sie da
            </h1>
            
            <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl border-l-4 border-primary mb-8">
              <p className="text-lg text-white font-medium mb-3">
                Ihr Anliegen ist bei uns in guten Händen.
              </p>
              <p className="text-gray-200 leading-relaxed mb-4">
                Ob dringende Reparatur, energetische Sanierung oder ein Neubauprojekt – 
                wir nehmen uns Zeit für Sie. <strong className="text-white">Persönlich und ehrlich.</strong>
              </p>
              <p className="text-gray-200 leading-relaxed">
                Als Meisterbetrieb legen wir größten Wert auf transparente Beratung. 
                <strong className="text-white"> Schreiben Sie uns oder rufen Sie an – wir kümmern uns um den Rest.</strong>
              </p>
            </div>
            
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              <strong className="text-white">Schnelle Antwort garantiert.</strong> Wir melden uns innerhalb von 24 Stunden bei Ihnen – 
              bei dringenden Fällen noch am selben Tag.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-xl" data-testid="button-hero-call">
                <a href="/rueckruf">
                  <Phone className="mr-2 h-5 w-5" />
                  Rückruf anfordern
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-secondary font-bold rounded-xl" data-testid="button-hero-form">
                <a href="/beratung">24h Beratungstermin</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <BackButton />

      <Contact />
      
      <Footer />
    </div>
  );
}
