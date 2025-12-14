import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import LeadFunnel from "@/components/LeadFunnel";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Euro, Home, Leaf, FileText, Phone, Quote, Award, Shield, Users } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema } from "@/components/SEO";
import heroImage from "@assets/generated_images/new_solar_panel_installation.png";

export default function Energieberatung() {
  const benefits = [
    { icon: Euro, title: "Bis zu 20% Förderung", desc: "KfW und BAFA unterstützen energetische Sanierungen mit attraktiven Zuschüssen" },
    { icon: Leaf, title: "30% weniger Heizkosten", desc: "Moderne Dämmung senkt Ihren Energieverbrauch nachhaltig" },
    { icon: FileText, title: "Komplette Antragsabwicklung", desc: "Unsere Partner kümmern sich um den gesamten Papierkram" },
    { icon: Home, title: "Wertsteigerung", desc: "Ein energetisch saniertes Dach erhöht den Immobilienwert" }
  ];

  const services = [
    { title: "Energieberatung", desc: "Unsere zertifizierten Energieberater analysieren Ihr Gebäude und zeigen Einsparpotenziale auf." },
    { title: "Sanierungsfahrplan (iSFP)", desc: "Ein individueller Fahrplan für Ihre energetische Sanierung – Schritt für Schritt zur Förderung." },
    { title: "KfW-Förderanträge", desc: "Wir stellen die Anträge bei der KfW für Sie – inkl. BEG-Förderung für Einzelmaßnahmen." },
    { title: "BAFA-Zuschüsse", desc: "Beantragung von BAFA-Zuschüssen für Energieberatung und Heizungsoptimierung." },
    { title: "Energieausweis", desc: "Bedarfs- oder Verbrauchsausweis für Verkauf, Vermietung oder Sanierung." }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Energieberatung München | KfW & BAFA Förderung - 089Dach"
        description="Bis zu 20% KfW-Förderung für Ihre Dachsanierung. Zertifizierte Energieberatung & Antragsabwicklung. Jetzt maximale Förderung sichern!"
        canonical="https://089dach.de/leistungen/energieberatung"
        keywords="energieberatung münchen, kfw förderung bafa zuschuss sanierungsfahrplan energieausweis, heizkosten senken wärmedämmung energetische sanierung geg, energieberatung obermenzing pasing laim schwabing sendling bogenhausen, energieberatung gräfelfing planegg germering starnberg dachau, förderung dachsanierung dachdämmung 2024 2025 bayern"
        aiSummary="089Dach GmbH bietet Energieberatung in München mit KfW- und BAFA-Förderberatung. Bis zu 20% Förderung für Dachsanierung. Sanierungsfahrplan und Energieausweis durch zertifizierte Partner. Telefon: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Energieberatung", url: "/leistungen/energieberatung" }]} />
      <ServiceSchema 
        pageName="Energieberatung München"
        services={[
          { name: "Energieberatung", description: "Zertifizierte Energieberatung durch unser Partnernetzwerk" },
          { name: "KfW-Förderanträge", description: "Beantragung von KfW-Förderungen für Ihre Dachsanierung" },
          { name: "Sanierungsfahrplan", description: "Individueller Fahrplan für Ihre energetische Sanierung" }
        ]}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-10 pb-12 bg-secondary relative overflow-hidden min-h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Photovoltaik-Anlage auf Hausdach - KfW-Förderung Energieberatung München"
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/50"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-2xl text-white">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Energieberatung & Förderung</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mt-4 mb-6">
              Maximale Förderung für Ihre Dachsanierung
            </h1>
            <p className="text-xl text-gray-200 max-w-xl mb-4">
              Mit der richtigen Beratung und Antragstellung sichern Sie sich bis zu 20% Förderung für Ihre energetische Sanierung.
            </p>
            <p className="text-lg text-gray-300 max-w-xl">
              Unsere zertifizierten Energieberater aus dem Partnernetzwerk begleiten Sie von der Analyse bis zur Auszahlung.
            </p>
          </div>
        </div>
      </section>
      <BackButton />

      {/* Trust Badges */}
      <div className="bg-stone-100 py-2 border-b border-stone-200">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-4 text-xs">
            <span className="flex items-center gap-1.5">
              <Award className="h-4 w-4 text-primary" />
              <span>Meister für Dach- und Spenglerei seit 1998</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-primary" />
              <span>Zertifizierte Energieberater</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="h-4 w-4 text-primary" />
              <span>100+ zufriedene Kunden</span>
            </span>
          </div>
        </div>
      </div>

      {/* Kundengeschichte */}
      <section className="py-5 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-primary" data-testid="testimonial-mueller">
              <Quote className="h-10 w-10 text-primary/30 mb-4" />
              <p className="text-xl text-secondary leading-relaxed italic mb-6">
                „Wir dachten, die Förderung ist kompliziert. Aber die Energieberatung durch 089Dach hat uns 
                18.000€ KfW-Förderung gesichert – mehr als erwartet! Der Papierkram wurde komplett für uns erledigt."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                  FM
                </div>
                <div>
                  <p className="font-bold text-secondary">Familie Müller</p>
                  <p className="text-sm text-muted-foreground">Einfamilienhaus in München-Pasing, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="py-6">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-heading font-bold text-secondary mb-4">
              Warum sich Energieberatung lohnt
            </h2>
            <p className="text-muted-foreground">
              Die richtige Beratung spart Ihnen bares Geld – bei der Sanierung und danach bei den Heizkosten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl" data-testid={`benefit-${index}`}>
                <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section className="py-6 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-heading font-bold text-secondary mb-4">
              Unsere Leistungen im Überblick
            </h2>
            <p className="text-muted-foreground">
              Von der ersten Beratung bis zum bewilligten Antrag – wir begleiten Sie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow" data-testid={`service-${index}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-secondary mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm">{service.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="py-6">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-heading font-bold text-secondary mb-4">
              So kommen Sie zur Förderung
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Erstgespräch", desc: "Wir besprechen Ihr Vorhaben und klären die Fördermöglichkeiten." },
              { step: "2", title: "Energieberatung", desc: "Unser Energieberater analysiert Ihr Gebäude vor Ort." },
              { step: "3", title: "Antragstellung", desc: "Wir stellen die Förderanträge bei KfW oder BAFA für Sie." },
              { step: "4", title: "Sanierung", desc: "Nach Bewilligung führen wir die Dachsanierung durch." }
            ].map((item, index) => (
              <div key={index} className="text-center" data-testid={`step-${index}`}>
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-secondary mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hinweis Partnernetzwerk */}
      <section className="py-5 bg-secondary text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-2xl font-heading font-bold mb-4">
            Energieberatung durch unser Partnernetzwerk
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Die Energieberatung und Antragsstellung erfolgt durch zertifizierte Energieberater aus unserem 
            Partnernetzwerk. So erhalten Sie alles aus einer Hand – von der Beratung bis zur fertigen Dachsanierung.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-xl" data-testid="button-beratung">
            <a href="/beratung">
              <Phone className="mr-2 h-5 w-5" />
              Rückruf anfordern
            </a>
          </Button>
        </div>
      </section>

      <LeadFunnel />
      <Contact />
      <Footer />
    </div>
  );
}
