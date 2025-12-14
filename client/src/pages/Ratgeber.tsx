import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2, AlertTriangle, ThermometerSun, Droplets, Leaf, ArrowRight, BookOpen, Quote, Shield, Users, Award } from "lucide-react";
import { Link } from "wouter";
import SEO, { BreadcrumbSchema } from "@/components/SEO";
import gegArticleImage from "@assets/generated_images/homeowner_roof_consultation_scene.png";

export default function Ratgeber() {
  const guides = [
    {
      icon: AlertTriangle,
      title: "Dachcheck: Wann ist eine Sanierung fällig?",
      problem: "Viele Hausbesitzer bemerken Schäden erst, wenn es schon reinregnet – dann wird's teuer.",
      description: "Erfahren Sie, wie Sie Schäden frühzeitig erkennen und teure Folgeschäden vermeiden können. Mit unserer Experten-Checkliste prüfen Sie Ihr Dach selbst.",
      story: "So wie bei Herrn Meier aus Pasing: Ein kleiner Riss, den er früh erkannte, bewahrte ihn vor einem 15.000€ Wasserschaden.",
      category: "Wartung",
      readTime: "5 Min"
    },
    {
      icon: ThermometerSun,
      title: "Energetische Dachsanierung: Kosten & Förderung",
      problem: "Heizkosten explodieren – und ein Großteil der Wärme entweicht durch ein schlecht gedämmtes Dach.",
      description: "Wie Sie durch moderne Dämmung bis zu 30% Heizkosten sparen und welche staatlichen Förderungen (BAFA/KfW) Ihnen zustehen – einfach erklärt.",
      story: "Familie Schmidt aus Schwabing spart jetzt 2.400€ pro Jahr – und hat 40% der Kosten gefördert bekommen.",
      category: "Energie sparen",
      readTime: "8 Min"
    },
    {
      icon: Droplets,
      title: "Was tun bei einem Sturmschaden?",
      problem: "Ein Sturm hat Ihr Dach beschädigt – Panik macht sich breit. Was jetzt?",
      description: "Erste Hilfe für Ihr Dach: Sicherungsmaßnahmen, Versicherungsmeldung und Reparaturablauf – Schritt für Schritt erklärt.",
      story: "Nach Sturm Niklas waren wir innerhalb von 2 Stunden bei Familie Huber in Sendling zur Notsicherung.",
      category: "Notfall",
      readTime: "3 Min"
    },
    {
      icon: Leaf,
      title: "Dachbegrünung: Vorteile & Umsetzung",
      problem: "Heiße Sommer, Starkregen – Ihr Dach muss immer mehr aushalten. Gibt es eine Lösung?",
      description: "Warum ein Gründach nicht nur gut aussieht, sondern auch das Klima schützt, Regenwasser puffert und die Lebensdauer Ihrer Abdichtung verdoppelt.",
      story: "Das Architekturbüro Maier in Bogenhausen genießt jetzt eine natürliche Klimaanlage auf dem Dach.",
      category: "Nachhaltigkeit",
      readTime: "6 Min"
    },
    {
      icon: CheckCircle2,
      title: "Das richtige Material für Ihr Steildach",
      problem: "Ziegel, Betonstein, Schiefer – die Auswahl ist riesig. Welches Material passt zu Ihrem Haus?",
      description: "Vor- und Nachteile der beliebtesten Eindeckungen im Vergleich. Lebensdauer, Kosten und Optik – ehrlich und neutral erklärt.",
      story: "Wir haben Herrn Dr. Bauer geholfen, die perfekte Lösung für seine denkmalgeschützte Villa zu finden.",
      category: "Materialkunde",
      readTime: "7 Min"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Dachwissen München | Ratgeber für Eigentümer & Hausverwaltungen"
        description="Ratgeber-Artikel zu Dachsanierung, Wartung, Versicherung & Förderungen speziell für München und Oberbayern."
        canonical="https://089dach.de/ratgeber"
        keywords="dachratgeber münchen, dachwartung tipps, förderung dachsanierung münchen, dach wissen"
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Ratgeber", url: "/ratgeber" }]} />
      <Navbar />
      
      {/* Hero Section mit Storytelling */}
      <section className="pt-24 pb-12 bg-gray-50 relative overflow-hidden">
        
        {/* Hero Logo Overlay */}
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-10 pointer-events-none hidden md:flex items-center justify-center overflow-hidden">
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
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">089Dach Expertenwissen</span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-secondary mt-4 mb-6">
              Wissen, das Ihr Dach schützt
            </h1>
            
            {/* Emotionale Einleitung */}
            <div className="text-left bg-white p-6 rounded-sm shadow-sm border-l-4 border-primary mb-8">
              <p className="text-lg text-secondary font-medium mb-3">
                Kennen Sie das auch?
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Sie stehen vor einer Entscheidung rund ums Dach – und im Internet finden Sie tausend 
                widersprüchliche Meinungen. Werbeversprechen hier, Panikmache dort. 
                <strong className="text-secondary"> Wem können Sie noch vertrauen?</strong>
              </p>
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Deshalb teilen wir hier unser Wissen aus <strong>über 25 Jahren Erfahrung</strong> – 
              ehrlich, verständlich und ohne Verkaufsdruck. Damit Sie die richtigen Entscheidungen 
              für Ihr Zuhause treffen können.
            </p>
          </div>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span><strong className="text-secondary">1.500+</strong> Kunden beraten</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              <span><strong className="text-secondary">Meisterbetrieb</strong> seit 1998</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span><strong className="text-secondary">Unabhängige</strong> Beratung</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article mit Storytelling */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-secondary text-white rounded-sm overflow-hidden shadow-xl grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-primary font-medium mb-4">
                <BookOpen className="h-4 w-4" />
                <span>Aktuell wichtig für Hausbesitzer</span>
              </div>
              <h2 className="text-3xl font-heading font-bold mb-4">
                Die neue GEG-Novelle 2024: Das müssen Sie jetzt wissen
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                „Muss ich jetzt mein Dach dämmen? Was kostet das? Gibt es Förderung?" – Diese Fragen 
                hören wir täglich. Das Gebäudeenergiegesetz verunsichert viele Hausbesitzer. 
              </p>
              <p className="text-white font-medium mb-8">
                Wir erklären einfach und verständlich, was wirklich auf Sie zukommt – und was nicht.
              </p>
              <Button className="w-fit bg-primary hover:bg-primary/90 text-white font-bold rounded-sm" data-testid="button-read-geg-article">
                Artikel lesen <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="bg-gray-800 min-h-[300px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-transparent z-10"></div>
              <img 
                src={gegArticleImage}
                alt="Hausbesitzer bei Dachberatung" 
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expert Quote */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="h-12 w-12 text-primary/30 mx-auto mb-6" />
            <blockquote className="text-2xl font-heading text-secondary italic mb-6">
              „Ein gut informierter Kunde ist unser bester Kunde. Denn nur wer versteht, 
              was wir tun, kann den Wert unserer Arbeit schätzen."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                MH
              </div>
              <div className="text-left">
                <p className="font-bold text-secondary">Michael Haslbeck</p>
                <p className="text-sm text-muted-foreground">Dachdeckermeister & Geschäftsführer, 089Dach GmbH</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Guides mit Storytelling */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-heading font-bold text-secondary mb-4">Alle Ratgeber-Artikel</h2>
            <p className="text-muted-foreground">
              Jeder Artikel basiert auf echten Fragen unserer Kunden – und echten Lösungen aus unserer Praxis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border flex flex-col" data-testid={`card-guide-${index}`}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-primary/10 rounded-sm text-primary">
                      <guide.icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground bg-gray-100 px-2 py-1 rounded-full">
                      {guide.readTime} Lesezeit
                    </span>
                  </div>
                  <div className="text-sm font-medium text-primary mb-2">{guide.category}</div>
                  <CardTitle className="text-xl font-heading font-bold text-secondary group-hover:text-primary transition-colors">
                    {guide.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  {/* Problem-Framing */}
                  <p className="text-sm text-primary/80 italic mb-3">
                    {guide.problem}
                  </p>
                  <CardDescription className="text-base mb-4">
                    {guide.description}
                  </CardDescription>
                  {/* Mini-Story */}
                  <p className="text-sm text-muted-foreground bg-gray-50 p-3 rounded-sm mb-6 border-l-2 border-primary/30">
                    💡 {guide.story}
                  </p>
                  <div className="mt-auto">
                    <Button variant="link" className="p-0 h-auto text-secondary font-bold group-hover:text-primary transition-colors" data-testid={`button-read-guide-${index}`}>
                      Weiterlesen <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Sie haben eine Frage, die hier nicht beantwortet wird?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Rufen Sie uns an oder schreiben Sie uns. Wir nehmen uns Zeit für Ihre Fragen – 
            auch wenn Sie noch nicht wissen, ob Sie überhaupt etwas machen wollen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white font-bold rounded-sm" data-testid="button-cta-call">
              <a href="tel:+498912345678">Jetzt anrufen</a>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-secondary font-bold rounded-sm" data-testid="button-cta-contact">
              <Link href="/#kontakt">Nachricht schreiben</Link>
            </Button>
          </div>
        </div>
      </section>

      <LeadFunnel />
      <Contact />
      <Footer />
    </div>
  );
}
