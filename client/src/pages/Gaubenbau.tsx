import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import LeadFunnel from "@/components/LeadFunnel";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Home, Sun, Maximize, Euro, Phone, Quote, Award, Shield, Users } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema } from "@/components/SEO";
import heroImage from "@assets/generated_images/renovated_dormer_window_after.png";
import RelatedServices from "@/components/RelatedServices";
import { TextWithKeywordLinks } from "@/components/KeywordLink";

export default function Gaubenbau() {
  const benefits = [
    { icon: Maximize, title: "Mehr Wohnraum", desc: "Eine Gaube schafft wertvolle zusätzliche Quadratmeter unter Ihrem Dach" },
    { icon: Sun, title: "Mehr Tageslicht", desc: "Größere Fensterflächen bringen Helligkeit ins Dachgeschoss" },
    { icon: Home, title: "Wertsteigerung", desc: "Ein ausgebautes Dachgeschoss erhöht den Wert Ihrer Immobilie deutlich" },
    { icon: Euro, title: "Förderfähig", desc: "Kombiniert mit energetischer Sanierung oft durch KfW gefördert" }
  ];

  const gaubenarten = [
    { title: "Schleppgaube", desc: "Der Klassiker – einfache Konstruktion, großzügiger Raumgewinn, zeitloses Design." },
    { title: "Spitzgaube", desc: "Elegante Dreiecksform, ideal für traditionelle Häuser und steile Dächer." },
    { title: "Flachdachgaube", desc: "Moderne Optik, maximaler Raumgewinn, perfekt für zeitgenössische Architektur." },
    { title: "Trapezgaube", desc: "Kombination aus Schleppgaube und Spitzgaube, vielseitig einsetzbar." },
    { title: "Rundgaube", desc: "Geschwungene Form, architektonisches Highlight für besondere Ansprüche." }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Gaube bauen München | Kosten Schleppgaube ab 12.000€"
        description="Was kostet eine Gaube? Schleppgaube ab 12.000€. ✓ Planung ✓ Baugenehmigung ✓ Bau aus einer Hand. Mehr Wohnraum unterm Dach ☎ 089 12621964"
        canonical="https://089dach.de/leistungen/gaubenbau"
        keywords="was kostet gaube bauen münchen, schleppgaube kosten pro m2 erfahrungen, gaube baugenehmigung münchen erforderlich, dachgaube nachträglich einbauen altbau, mehr stehhöhe im dachgeschoss lösung, welche gaubenart ist die beste, flachdachgaube modern kosten, gaube wohnraum gewinnen quadratmeter, dachausbau mit gaube förderung, gaube oder dachfenster was ist besser, gaube obermenzing pasing laim schwabing sendling"
        aiSummary="089Dach GmbH baut Gauben in München ab 12.000€: Schleppgaube, Spitzgaube, Flachdachgaube. Komplettservice von Planung über Baugenehmigung bis Ausführung. Mehr Wohnraum und Licht unterm Dach. Telefon: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Gaubenbau", url: "/leistungen/gaubenbau" }]} />
      <ServiceSchema 
        pageName="Gaubenbau München"
        services={[
          { name: "Gaubenbau", description: "Neubau von Gauben aller Art – von der Schleppgaube bis zur Flachdachgaube" },
          { name: "Gaubensanierung", description: "Modernisierung und Reparatur bestehender Gauben" },
          { name: "Genehmigungsplanung", description: "Bauanträge und Statik durch unser Partnernetzwerk" }
        ]}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-6 pb-8 md:pt-10 md:pb-12 bg-secondary relative overflow-hidden min-h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Renovierte Dachgaube mit neuem Fenster - Gaubenbau für mehr Wohnraum München"
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
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Gaubenbau & Sanierung</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mt-4 mb-6">
              Mehr Platz und Licht unterm Dach
            </h1>
            <p className="text-xl text-gray-200 max-w-xl mb-4">
              Mit einer Gaube verwandeln Sie ungenutzten Dachraum in wertvollen Wohnraum – mehr Platz, mehr Licht, mehr Lebensqualität.
            </p>
            <p className="text-lg text-gray-300 max-w-xl">
              Wir planen, genehmigen und bauen Ihre Gaube – alles aus einer Hand.
            </p>
          </div>
        </div>
      </section>

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
              <span>10 Jahre Garantie</span>
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
            <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-primary" data-testid="testimonial-schmidt">
              <Quote className="h-10 w-10 text-primary/30 mb-4" />
              <p className="text-xl text-secondary leading-relaxed italic mb-6">
                „Unsere drei Kinder teilten sich ein Zimmer. Durch den Gaubenausbau haben wir jetzt 
                ein komplettes zusätzliches Kinderzimmer gewonnen. Endlich hat jedes Kind sein eigenes Reich – 
                und wir haben sogar noch einen kleinen Arbeitsbereich dazubekommen!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                  FS
                </div>
                <div>
                  <p className="font-bold text-secondary">Familie Schmidt</p>
                  <p className="text-sm text-muted-foreground">Schleppgaube in München-Sendling, 2023</p>
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
              Warum eine Gaube?
            </h2>
            <p className="text-muted-foreground">
              Eine Gaube ist mehr als nur ein Dachaufbau – sie ist eine Investition in Ihre Lebensqualität.
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
                  <p className="text-muted-foreground"><TextWithKeywordLinks currentPath="/leistungen/gaubenbau">{benefit.desc}</TextWithKeywordLinks></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gaubenarten */}
      <section className="py-6 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-heading font-bold text-secondary mb-4">
              Die richtige Gaube für Ihr Haus
            </h2>
            <p className="text-muted-foreground">
              Jede Gaubenart hat ihre Stärken – wir beraten Sie, welche am besten zu Ihrem Haus passt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gaubenarten.map((gaube, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow" data-testid={`gaube-${index}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-secondary mb-2">{gaube.title}</h3>
                      <p className="text-muted-foreground text-sm"><TextWithKeywordLinks currentPath="/leistungen/gaubenbau">{gaube.desc}</TextWithKeywordLinks></p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gaubensanierung */}
      <section className="py-6">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-secondary mb-4">
              Gaubensanierung
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Ihre bestehende Gaube ist in die Jahre gekommen? Undichte Stellen, veraltete Dämmung oder 
              eine unschöne Optik? Wir sanieren Ihre Gaube fachgerecht – von der Abdichtung über neue 
              Bekleidungen bis zur kompletten Modernisierung.
            </p>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-secondary mb-4">Unsere Sanierungsleistungen:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Neueindeckung der Gaubenflächen",
                  "Erneuerung der Abdichtungen",
                  "Neue Bekleidungen (Zink, Kupfer, Schiefer)",
                  "Dämmung nach aktuellen Standards",
                  "Austausch der Gaubenfenster",
                  "Reparatur von Schäden"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2" data-testid={`sanierung-item-${index}`}>
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="py-6 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-heading font-bold text-secondary mb-4">
              So entsteht Ihre Gaube
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Beratung vor Ort", desc: "Wir besprechen Ihre Wünsche und prüfen die Machbarkeit." },
              { step: "2", title: "Planung & Antrag", desc: "Unsere Architekten erstellen Pläne und den Bauantrag." },
              { step: "3", title: "Bau der Gaube", desc: "Nach Genehmigung bauen wir Ihre Gaube fachgerecht." },
              { step: "4", title: "Innenausbau", desc: "Auf Wunsch übernehmen wir auch den Innenausbau." }
            ].map((item, index) => (
              <div key={index} className="text-center" data-testid={`step-${index}`}>
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-secondary mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm"><TextWithKeywordLinks currentPath="/leistungen/gaubenbau">{item.desc}</TextWithKeywordLinks></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 bg-secondary text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-2xl font-heading font-bold mb-4">
            Mehr Wohnraum unterm Dach?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Lassen Sie sich unverbindlich beraten, wie eine Gaube Ihr Zuhause aufwerten kann. 
            Wir zeigen Ihnen die Möglichkeiten und erstellen ein transparentes Angebot.
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
        currentPage="gaubenbau" 
        relatedIds={["dachfenster", "bedachungen", "architektenleistungen", "referenzen"]}
      />
      <Contact />
      <Footer />
    </div>
  );
}
