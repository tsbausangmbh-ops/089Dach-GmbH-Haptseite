import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Warehouse, Wrench, Hammer, ShieldCheck, Ruler, CheckCircle2, Quote, Award, Shield, Users, Phone } from "lucide-react";
import heroImage from "@assets/generated_images/modern_house_with_anthracite_roof.png";
import LeadFunnel from "@/components/LeadFunnel";
import SEO, { BreadcrumbSchema, ServiceSchema } from "@/components/SEO";
import RelatedServices from "@/components/RelatedServices";

export default function Leistungen() {
  const services = [
    {
      id: "dachsanierung",
      icon: <Home className="h-8 w-8 text-primary" />,
      title: "Dachsanierung & Energetik",
      link: "/leistungen/dachsanierung",
      problem: "Ihr Dach ist undicht, schlecht gedämmt oder die Heizkosten steigen Jahr für Jahr?",
      solution: "Wir sanieren Ihr Dach so, dass es nicht nur dicht ist – sondern auch Energie spart.",
      result: "Bis zu 30% weniger Heizkosten und ein Zuhause, das im Winter warm und im Sommer kühl bleibt.",
      story: "Familie Weber aus Dachau zahlte jeden Winter über 400€ für Gas. Nach unserer energetischen Sanierung mit Aufsparrendämmung sind es nur noch 280€ – und das Dachgeschoss ist endlich gemütlich.",
      details: [
        "Energetische Sanierung nach GEG",
        "Aufsparren- & Zwischensparrendämmung",
        "Asbestsanierung nach TRGS 519",
        "KfW-Fördermittelberatung inklusive",
        "Förderanträge & Energieberatung durch unser Partnernetzwerk"
      ]
    },
    {
      id: "steildach",
      icon: <Warehouse className="h-8 w-8 text-primary" />,
      title: "Steildach & Eindeckung",
      link: "/leistungen/bedachungen",
      problem: "Die Ziegel sind brüchig, Moos überwuchert das Dach und bei jedem Sturm haben Sie Angst?",
      solution: "Wir decken Ihr Dach komplett neu ein – sturmsicher und mit Garantie auf die Ausführung.",
      result: "Ein Dach, das Generationen hält und Ihrem Haus das Aussehen gibt, das es verdient.",
      story: "Das Haus der Müllers in Pasing war 40 Jahre alt, das Dach sah müde aus. Nach der Neueindeckung mit Tondachziegeln sagen die Nachbarn: 'Euer Haus sieht aus wie neu!'",
      details: [
        "Tondachziegel & Biberschwanz",
        "Betondachsteine (haltbar & günstig)",
        "Schiefereindeckungen",
        "Sturmsichere Befestigung"
      ]
    },
    {
      id: "flachdach",
      icon: <Warehouse className="h-8 w-8 text-primary" />,
      title: "Flachdach & Abdichtung",
      link: "/leistungen/bedachungen",
      problem: "Wasserflecken an der Decke? Der typische Alptraum bei schlecht abgedichteten Flachdächern.",
      solution: "Wir machen Ihr Flachdach 100% dicht – mit hochwertigen Materialien und Liebe zum Detail.",
      result: "Endlich Ruhe. Kein Tropfen mehr, auch nicht nach dem stärksten Regen.",
      story: "Herr Schneider aus Laim hatte jahrelang Pfützen in seiner Garage. Drei andere Firmen hatten 'repariert'. Wir haben die Ursache gefunden und das Problem dauerhaft gelöst.",
      details: [
        "Bitumen- & Kunststoffbahnen",
        "Flüssigkunststoff-Abdichtung",
        "Dachbegrünung (extensiv/intensiv)",
        "Terrassenbeläge & Balkone"
      ]
    },
    {
      id: "spenglerei",
      icon: <Wrench className="h-8 w-8 text-primary" />,
      title: "Spenglerei & Blecharbeiten",
      link: "/leistungen/spenglerei",
      problem: "Die Dachrinne ist undicht, der Kamin rostet – und die Fassade zeigt schon erste Schäden?",
      solution: "Wir fertigen alle Bauteile maßgenau in unserer eigenen Werkstatt. Keine Kompromisse.",
      result: "Metall, das Jahrzehnte hält und dabei auch noch gut aussieht.",
      story: "Die Kupferrinne am Altbau in Bogenhausen hat unser Meister vor 20 Jahren gefertigt. Letzte Woche haben wir dort das Dach gewartet – die Rinne sieht besser aus als je zuvor.",
      details: [
        "Dachrinnen (Kupfer, Zink, Alu)",
        "Kamineinfassungen",
        "Gaubenverkleidungen",
        "Mauerabdeckungen"
      ]
    },
    {
      id: "dachfenster",
      icon: <Ruler className="h-8 w-8 text-primary" />,
      title: "Dachfenster & Lichtlösungen",
      link: "/leistungen/dachfenster",
      problem: "Das Dachgeschoss ist dunkel, stickig im Sommer und die alten Fenster beschlagen ständig?",
      solution: "Wir tauschen alte Dachfenster oder bauen neue ein – sauber, schnell, ohne Dreck.",
      result: "Mehr Licht, bessere Luft und ein Fenster, das auch im Winter warm hält.",
      story: "Das Kinderzimmer unterm Dach war dunkel und ungemütlich. Nach dem Einbau von zwei großen Velux-Fenstern fragt der kleine Tim jeden Tag: 'Darf ich oben spielen?'",
      details: [
        "Velux & Roto Dachfenster",
        "Austausch ohne Dreck",
        "Sonnenschutz & Rollläden",
        "Lichtkuppeln für Flachdächer"
      ]
    },
    {
      id: "wartung",
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: "Wartung & Reparatur",
      link: "/leistungen/reparaturservice",
      problem: "Sie wissen nicht, ob Ihr Dach noch in Ordnung ist? Kleine Schäden werden schnell zu großen Problemen.",
      solution: "Wir prüfen Ihr Dach jährlich und reparieren kleine Schäden, bevor sie teuer werden.",
      result: "Sicherheit und Planbarkeit. Sie wissen immer, wie es um Ihr Dach steht.",
      story: "Frau Huber lässt ihr Dach seit 8 Jahren von uns warten. In dieser Zeit haben wir 3 kleine Schäden behoben, die unentdeckt jeweils mehrere Tausend Euro gekostet hätten.",
      details: [
        "Jährliche Dachinspektion",
        "Rinnenreinigung",
        "Sturmschaden-Soforthilfe",
        "Schnelle Hilfe bei Schäden"
      ]
    },
    {
      id: "energieberatung",
      icon: <Home className="h-8 w-8 text-primary" />,
      title: "Energieberatung & Förderanträge",
      link: "/leistungen/energieberatung",
      problem: "Sie möchten Ihr Dach energetisch sanieren, wissen aber nicht, welche Förderungen Ihnen zustehen?",
      solution: "Unsere zertifizierten Energieberater aus unserem Partnernetzwerk beraten Sie und stellen die Förderanträge für Sie.",
      result: "Sie erhalten die maximale Förderung und sparen bares Geld bei Ihrer Dachsanierung.",
      story: "Familie Müller aus Pasing hat durch unsere Energieberatung 18.000€ KfW-Förderung erhalten – mehr als erwartet. Die Beratung hat sich um ein Vielfaches bezahlt gemacht.",
      details: [
        "Zertifizierte Energieberater (Partnernetzwerk)",
        "KfW- & BAFA-Förderanträge",
        "Energieausweis & Sanierungsfahrplan",
        "Maximale Fördersummen sichern"
      ]
    },
    {
      id: "gaubenausbau",
      icon: <Warehouse className="h-8 w-8 text-primary" />,
      title: "Gaubenausbau & Sanierung",
      link: "/leistungen/gaubenbau",
      problem: "Sie möchten mehr Wohnraum unterm Dach schaffen oder eine alte Gaube modernisieren?",
      solution: "Wir planen und bauen Gauben, die perfekt zu Ihrem Haus passen – von der Schleppgaube bis zur Flachdachgaube.",
      result: "Mehr Platz, mehr Licht und ein aufgewertetes Zuhause mit gesteigertem Wohnwert.",
      story: "Familie Schmidt aus Sendling hat durch den Gaubenausbau ein komplettes Kinderzimmer gewonnen. 'Endlich hat jedes Kind sein eigenes Reich', sagt Frau Schmidt stolz.",
      details: [
        "Schleppgauben & Spitzgauben",
        "Flachdachgauben",
        "Gaubensanierung & Modernisierung",
        "Genehmigungsplanung inklusive"
      ]
    },
    {
      id: "bauantraege",
      icon: <Ruler className="h-8 w-8 text-primary" />,
      title: "Bauanträge & Architektenleistungen",
      link: "/leistungen/architektenleistungen",
      problem: "Sie benötigen eine Baugenehmigung für Ihr Dachprojekt, aber der Papierkram überfordert Sie?",
      solution: "Unsere Partner-Architekten übernehmen Planung, Zeichnungen und Bauanträge – alles aus einer Hand.",
      result: "Sie bekommen die Genehmigung ohne Stress und können sich auf Ihr Projekt freuen.",
      story: "Herr Wagner wollte sein Dachgeschoss ausbauen. Unser Partnernetzwerk hat den Bauantrag in 4 Wochen durchgebracht – schneller als erwartet.",
      details: [
        "Bauanträge & Genehmigungen",
        "Architektenleistungen (Partnernetzwerk)",
        "Statikprüfung & Planung",
        "Komplette Projektbegleitung"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title="Dachdecker Leistungen München | Sanierung & Wartung - 089Dach"
        description="Komplette Dacharbeiten vom Meisterbetrieb: Sanierung, Flachdach, Steildach, Spenglerarbeiten & Wartung. 10 Jahre Garantie. Jetzt beraten lassen!"
        canonical="https://089dach.de/leistungen"
        keywords="dachdecker leistungen münchen, dachsanierung steildach flachdach spenglerei dachfenster gaubenbau energieberatung reparatur wartung architektenleistungen, dachdecker obermenzing pasing laim schwabing sendling bogenhausen moosach neuhausen nymphenburg, dachdecker gräfelfing planegg germering fürstenfeldbruck dachau starnberg unterschleißheim, alle dacharbeiten aus einer hand vollservice meisterbetrieb"
        aiSummary="089Dach GmbH bietet umfassende Dachdeckerleistungen in München: Dachsanierung, Steildach, Flachdach, Spenglerarbeiten, Dachfenster, Gaubenbau, Wartung und Energieberatung. Meisterbetrieb seit 1998. Telefon: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Leistungen", url: "/leistungen" }]} />
      <ServiceSchema 
        pageName="Dachdecker Leistungen München"
        services={[
          { name: "Dachsanierung", description: "Energetische Sanierung nach GEG mit Förderberatung" },
          { name: "Steildach & Flachdach", description: "Neueindeckung und Abdichtung für alle Dachtypen" },
          { name: "Spenglerarbeiten", description: "Dachrinnen, Kamineinfassungen und Metallverarbeitung" },
          { name: "Dachfenster", description: "Velux und Roto Einbau und Austausch" },
          { name: "Wartung & Reparatur", description: "Jährliche Inspektion und schnelle Hilfe bei Schäden" }
        ]}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-6 pb-8 md:pt-10 md:pb-12 relative overflow-hidden min-h-[40vh] md:min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Modernes Einfamilienhaus mit anthrazitfarbenem Steildach nach Dachsanierung in München"
            className="w-full h-full object-cover"
            width={1792}
            height={1024}
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/70"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-2xl text-white">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Dachdecker München</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mt-4 mb-6">
              Unsere Dachdecker-Leistungen
            </h1>
            
            <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl border-l-4 border-primary mb-8">
              <p className="text-lg text-white font-medium mb-3">
                Von der kleinen Reparatur bis zur kompletten Sanierung
              </p>
              <p className="text-gray-200 leading-relaxed">
                Wir kümmern uns um Ihr Dach, als wäre es unser eigenes. Als Meisterbetrieb seit 1998 
                bieten wir Ihnen das <strong className="text-white">volle Spektrum professioneller Dacharbeiten</strong> – 
                alles aus einer Hand, mit 10 Jahren Garantie.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-xl" data-testid="button-hero-call">
                <a href="/rueckruf">
                  <Phone className="mr-2 h-5 w-5" />
                  Rückruf anfordern
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-secondary font-bold rounded-xl" data-testid="button-hero-beratung">
                <a href="/beratung">24h Beratungstermin</a>
              </Button>
            </div>
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

      {/* Services List */}
      <section className="pt-2 md:pt-4">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-5">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-3 lg:gap-4 items-start border-b border-gray-100 pb-5 last:border-0`}
              >
                <div className="flex-1 space-y-6">
                  <a href={service.link} className="flex items-center gap-4 group">
                    <div className="bg-primary/10 p-4 rounded-xl">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-secondary group-hover:text-primary transition-colors">{service.title}</h2>
                  </a>
                  
                  <div className="space-y-4">
                    <div className="bg-red-50 border-l-4 border-primary p-4 rounded-r-sm">
                      <p className="text-secondary font-medium">
                        <span className="text-primary font-bold">Das Problem:</span> {service.problem}
                      </p>
                    </div>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-sm">
                      <p className="text-secondary font-medium">
                        <span className="text-blue-600 font-bold">Unsere Lösung:</span> {service.solution}
                      </p>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-sm">
                      <p className="text-secondary font-medium">
                        <span className="text-green-600 font-bold">Ihr Ergebnis:</span> {service.result}
                      </p>
                    </div>
                  </div>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-secondary font-medium">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="/beratung">
                    <Button variant="outline" className="mt-4 border-secondary text-secondary hover:bg-secondary hover:text-white rounded-xl" data-testid={`button-beratung-${service.id}`}>
                      Rückruf anfordern
                    </Button>
                  </a>
                </div>
                
                <div className="w-full lg:w-2/5 space-y-4">
                  <div className="bg-secondary/5 rounded-xl p-6 border border-secondary/10">
                    <div className="flex items-start gap-3 mb-4">
                      <Quote className="h-8 w-8 text-primary flex-shrink-0" />
                      <p className="text-secondary italic leading-relaxed">
                        {service.story}
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 text-center">
                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-sm">
                      {service.icon}
                    </div>
                    <h3 className="font-heading font-bold text-lg text-secondary">Haben Sie ein ähnliches Problem?</h3>
                    <p className="text-sm text-muted-foreground mt-2 mb-4">Wir finden gemeinsam die beste Lösung für Sie.</p>
                    <a href={service.link} className="w-full">
                      <Button size="sm" className="bg-primary hover:bg-primary/90 text-white rounded-xl w-full" data-testid={`button-termin-${service.id}`}>
                        Mehr erfahren <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <LeadFunnel />

      {/* CTA Section - Removed as it's redundant with LeadFunnel, or keep as a secondary one? Removing for cleaner look since LeadFunnel is strong */}
      {/* 
      <section className="bg-secondary text-white py-5">
        ...
      </section>
      */}

      <RelatedServices 
        currentPage="leistungen" 
        relatedIds={["referenzen", "faq", "ratgeber", "stadtteile"]}
      />
      <Contact />
      <Footer />
    </div>
  );
}
