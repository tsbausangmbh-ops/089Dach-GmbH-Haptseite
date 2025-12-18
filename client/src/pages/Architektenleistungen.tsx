import Navbar from "@/components/Navbar";
import AIBeraterSection from "@/components/AIBeraterSection";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import BackButton from "@/components/BackButton";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, FileText, Ruler, Building2, Phone, Quote, Award, Shield, Users } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema } from "@/components/SEO";
import heroImage from "@assets/generated_images/homeowner_roof_consultation_scene.png";
import RelatedServices from "@/components/RelatedServices";
import { TextWithKeywordLinks } from "@/components/KeywordLink";

export default function Architektenleistungen() {
  const services = [
    { title: "Bauanträge", desc: "Komplette Erstellung und Einreichung von Bauanträgen für Dachausbauten, Gauben und Aufstockungen." },
    { title: "Genehmigungsplanung", desc: "Alle notwendigen Planungsunterlagen für Ihre Baugenehmigung – normgerecht und vollständig." },
    { title: "Statikprüfung", desc: "Prüfung der Tragfähigkeit und statische Nachweise durch unsere Partner-Ingenieure." },
    { title: "Entwurfsplanung", desc: "Kreative Lösungen für Ihren Dachausbau – von der ersten Skizze bis zum fertigen Plan." },
    { title: "Projektbegleitung", desc: "Koordination aller Gewerke und Begleitung Ihres Projekts bis zur Fertigstellung." }
  ];

  const projects = [
    { title: "Gaubenausbau", desc: "Mehr Wohnraum und Licht durch neue Gauben – von der Schleppgaube bis zur Flachdachgaube." },
    { title: "Dachgeschoss-Ausbau", desc: "Verwandeln Sie ungenutzten Dachraum in wertvollen Wohnraum." },
    { title: "Aufstockung", desc: "Ein zusätzliches Stockwerk auf Ihrem Haus – professionell geplant und genehmigt." },
    { title: "Dachterrasse", desc: "Planung und Genehmigung von Dachterrassen und begehbaren Flachdächern." }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Dachausbau Genehmigung München | Bauantrag & Statik"
        description="Braucht Dachausbau Baugenehmigung? Wir klären das! ✓ Bauantrag ✓ Statik ✓ Planung aus einer Hand. Partner-Architekten ☎ 089 12621964"
        canonical="https://089dach.de/leistungen/architektenleistungen"
        keywords="dachausbau baugenehmigung münchen erforderlich, bauantrag dachgeschoss kosten dauer, dachaufstockung genehmigung voraussetzungen, statiker für dachausbau münchen, gaube genehmigungspflichtig bayern, dachterrasse genehmigung münchen, architekt für dachausbau finden, wohnraumerweiterung dach planung, bauvoranfrage dachgeschoss sinnvoll, dachausbau obermenzing pasing laim schwabing sendling"
        aiSummary="089Dach GmbH bietet Architektenleistungen in München: Bauanträge, Genehmigungsplanung, Statikprüfung für Dachausbau, Gauben und Aufstockungen. Partner-Architekten übernehmen Planung. Telefon: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Architektenleistungen", url: "/leistungen/architektenleistungen" }]} />
      <ServiceSchema 
        pageName="Architektenleistungen München"
        services={[
          { name: "Bauanträge", description: "Erstellung und Einreichung von Bauanträgen für Dachprojekte" },
          { name: "Genehmigungsplanung", description: "Alle Unterlagen für Ihre Baugenehmigung" },
          { name: "Projektbegleitung", description: "Koordination und Begleitung bis zur Fertigstellung" }
        ]}
      />
      <Navbar />
      <AIBeraterSection />
      
      {/* Hero Section */}
      <section className="pt-6 pb-8 md:pt-10 md:pb-12 bg-secondary relative overflow-hidden min-h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Dachdecker berät Hausbesitzer vor Ort - Bauantrag und Planung Dachausbau München"
            className="w-full h-full object-cover"
            width={1792}
            height={1024}
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/50"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-2xl text-white">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Architektenleistungen & Bauanträge</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mt-4 mb-6">
              Ihr Dachprojekt – genehmigt und realisiert
            </h1>
            <p className="text-xl text-gray-200 max-w-xl mb-4">
              Sie möchten Ihr Dachgeschoss ausbauen, eine Gaube setzen oder aufstocken? Wir kümmern uns um Planung, Bauantrag und Genehmigung.
            </p>
            <p className="text-lg text-gray-300 max-w-xl">
              Unsere Partner-Architekten übernehmen den kompletten Papierkram – Sie können sich auf Ihr Projekt freuen.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <div className="bg-stone-100 py-2 border-b border-stone-200">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-2 md:gap-4 text-xs">
            <span className="flex items-center gap-1.5">
              <Award className="h-4 w-4 text-primary" />
              <span>Meister für Dach- und Spenglerei seit 1998</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-primary" />
              <span>Erfahrene Partner-Architekten</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="h-4 w-4 text-primary" />
              <span>100+ zufriedene Kunden</span>
            </span>
          </div>
        </div>
      </div>
      <BackButton />

      {/* Kundengeschichte */}
      <section className="py-6 md:py-10 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-primary" data-testid="testimonial-wagner">
              <Quote className="h-10 w-10 text-primary/30 mb-4" />
              <p className="text-xl text-secondary leading-relaxed italic mb-6">
                „Wir wollten unser Dachgeschoss ausbauen, aber der Papierkram hat uns überfordert. 
                Das Team von 089Dach hat den Bauantrag in 4 Wochen durchgebracht – schneller als erwartet. 
                Jetzt haben wir zwei neue Kinderzimmer unterm Dach!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                  HW
                </div>
                <div>
                  <p className="font-bold text-secondary">Herr Wagner</p>
                  <p className="text-sm text-muted-foreground">Dachgeschoss-Ausbau in München-Sendling, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section className="py-6">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-heading font-bold text-secondary text-center mb-4">
              Unsere Architektenleistungen
            </h2>
            <p className="text-muted-foreground">
              Von der Idee bis zur Genehmigung – wir begleiten Ihr Projekt.
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
                      <p className="text-muted-foreground text-sm"><TextWithKeywordLinks currentPath="/leistungen/architektenleistungen">{service.desc}</TextWithKeywordLinks></p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projektarten */}
      <section className="py-6 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-heading font-bold text-secondary text-center mb-4">
              Projekte, die wir realisieren
            </h2>
            <p className="text-muted-foreground">
              Egal ob Gaube, Ausbau oder Aufstockung – wir haben die Erfahrung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm" data-testid={`project-${index}`}>
                <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                  <Building2 className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">{project.title}</h3>
                  <p className="text-muted-foreground"><TextWithKeywordLinks currentPath="/leistungen/architektenleistungen">{project.desc}</TextWithKeywordLinks></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="py-6">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-heading font-bold text-secondary text-center mb-4">
              Von der Idee zur Genehmigung
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Erstberatung", desc: "Wir besprechen Ihr Vorhaben und prüfen die Machbarkeit." },
              { step: "2", title: "Entwurf & Planung", desc: "Unsere Architekten erstellen die Pläne für Ihr Projekt." },
              { step: "3", title: "Bauantrag", desc: "Wir reichen den Bauantrag bei der Behörde ein." },
              { step: "4", title: "Umsetzung", desc: "Nach Genehmigung führen wir die Arbeiten durch." }
            ].map((item, index) => (
              <div key={index} className="text-center" data-testid={`step-${index}`}>
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-secondary mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm"><TextWithKeywordLinks currentPath="/leistungen/architektenleistungen">{item.desc}</TextWithKeywordLinks></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hinweis Partnernetzwerk */}
      <section className="py-5 bg-secondary text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-2xl font-heading font-bold text-center mb-4">
            Architektenleistungen durch unser Partnernetzwerk
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Die Architektenleistungen und Bauanträge werden durch erfahrene Architekten aus unserem 
            Partnernetzwerk erstellt. So erhalten Sie alles aus einer Hand – von der Planung bis zum fertigen Dach.
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
      <RelatedServices 
        currentPage="architektenleistungen" 
        relatedIds={["gaubenbau", "energieberatung", "dachsanierung", "referenzen"]}
      />
      <Contact />
      <Footer />
    </div>
  );
}
