import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2, AlertTriangle, ThermometerSun, Droplets, Leaf, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "wouter";

export default function Ratgeber() {
  const guides = [
    {
      icon: AlertTriangle,
      title: "Dachcheck: Wann ist eine Sanierung fällig?",
      description: "Erfahren Sie, wie Sie Schäden frühzeitig erkennen und teure Folgeschäden vermeiden können. Checkliste inklusive.",
      category: "Wartung",
      readTime: "5 Min"
    },
    {
      icon: ThermometerSun,
      title: "Energetische Dachsanierung: Kosten & Förderung",
      description: "Wie Sie durch moderne Dämmung bis zu 30% Heizkosten sparen und welche staatlichen Förderungen (BAFA/KfW) Ihnen zustehen.",
      category: "Energie sparen",
      readTime: "8 Min"
    },
    {
      icon: Droplets,
      title: "Was tun bei einem Sturmschaden?",
      description: "Erste Hilfe für Ihr Dach: Sicherungsmaßnahmen, Versicherungsmeldung und Reparaturablauf im Überblick.",
      category: "Notfall",
      readTime: "3 Min"
    },
    {
      icon: Leaf,
      title: "Dachbegrünung: Vorteile & Umsetzung",
      description: "Warum ein Gründach nicht nur gut aussieht, sondern auch das Klima schützt und die Lebensdauer Ihrer Abdichtung verlängert.",
      category: "Nachhaltigkeit",
      readTime: "6 Min"
    },
    {
      icon: CheckCircle2,
      title: "Das richtige Material für Ihr Steildach",
      description: "Ziegel, Betonstein oder Schiefer? Vor- und Nachteile der beliebtesten Eindeckungen im Vergleich.",
      category: "Materialkunde",
      readTime: "7 Min"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">089Dach Ratgeber</span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-secondary mt-4 mb-6">
              Expertenwissen für Ihr Dach
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Hier teilen wir unser Wissen aus über 25 Jahren Erfahrung. Tipps zur Pflege, Informationen zu Förderungen und Entscheidungshilfen für Ihr Bauprojekt.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-secondary text-white rounded-sm overflow-hidden shadow-xl grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-primary font-medium mb-4">
                <BookOpen className="h-4 w-4" />
                <span>Aktueller Top-Artikel</span>
              </div>
              <h2 className="text-3xl font-heading font-bold mb-4">
                Die neue GEG-Novelle 2024: Das müssen Hausbesitzer jetzt wissen
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Das Gebäudeenergiegesetz (GEG) bringt neue Pflichten für Eigentümer mit sich, insbesondere bei der Dachdämmung. Wir erklären einfach und verständlich, was auf Sie zukommt und welche Ausnahmen gelten.
              </p>
              <Button className="w-fit bg-primary hover:bg-primary/90 text-white font-bold rounded-sm">
                Artikel lesen <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="bg-gray-800 min-h-[300px] relative">
              {/* Placeholder for an image */}
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1621508653603-5147817eb482?q=80&w=2670&auto=format&fit=crop" 
                alt="Dacharbeiten" 
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Guides */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-heading font-bold text-secondary mb-2">Alle Ratgeber-Artikel</h2>
              <p className="text-muted-foreground">Wählen Sie ein Thema, das Sie interessiert.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
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
                <CardContent>
                  <CardDescription className="text-base mb-6">
                    {guide.description}
                  </CardDescription>
                  <Button variant="link" className="p-0 h-auto text-secondary font-bold group-hover:text-primary transition-colors">
                    Weiterlesen <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <LeadFunnel />
      <Contact />
      <Footer />
    </div>
  );
}
