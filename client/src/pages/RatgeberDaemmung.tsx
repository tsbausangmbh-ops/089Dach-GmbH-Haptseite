import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ThermometerSnowflake, ArrowRight, Euro, Leaf, Home, Phone } from "lucide-react";
import { Link } from "wouter";
import SEO, { BreadcrumbSchema } from "@/components/SEO";
import heroImage from "@assets/generated_images/roof_insulation_installation_scene.png";

export default function RatgeberDaemmung() {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Dachsanierung mit Dämmung | Heizkosten senken | 089Dach München"
        description="Bis zu 30% Heizkosten sparen durch professionelle Dachdämmung. Förderung bis 40%. Kostenlose Beratung vom Meisterbetrieb."
        canonical="https://089dach.de/ratgeber/daemmung"
        keywords="dachdämmung münchen, dachsanierung dämmung, heizkosten senken, förderung dachdämmung"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" }, 
        { name: "Tipps & Tricks", url: "/ratgeber" },
        { name: "Dachsanierung mit Dämmung", url: "/ratgeber/daemmung" }
      ]} />
      <Navbar />
      
      <section className="relative min-h-[500px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/60"></div>
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10 py-16">
          <div className="max-w-3xl text-white">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/ratgeber">
                <span className="text-primary hover:underline cursor-pointer">Tipps & Tricks</span>
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-300">Dachsanierung mit Dämmung</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <ThermometerSnowflake className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Heizkosten explodieren?<br/>
              <span className="text-primary">So stoppt Ihr Dach den Wärmeverlust</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Bis zu 30% Ihrer Heizwärme entweicht durchs Dach. Mit moderner Dämmung stoppen Sie den Wärmeverlust – und der Staat bezahlt bis zu 40% der Kosten.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-12">
              <h2 className="text-2xl font-heading font-bold text-secondary mb-4">Das Problem kennen Sie:</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sie heizen und heizen – aber richtig warm wird es nie. Die Heizrechnung wird jedes Jahr höher. 
                Und Sie fragen sich: <strong>Wo geht die ganze Wärme eigentlich hin?</strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Die Antwort ist oft: durchs Dach. Ein ungedämmtes oder schlecht gedämmtes Dach ist wie ein 
                offenes Fenster – 24 Stunden am Tag, 7 Tage die Woche.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-12">
              <h2 className="text-2xl font-heading font-bold text-secondary mb-4">Die Lösung:</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0 mt-1" />
                  <div>
                    <strong className="text-secondary">Moderne Dachdämmung</strong>
                    <p className="text-muted-foreground">Reduziert den Wärmeverlust um bis zu 75%</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0 mt-1" />
                  <div>
                    <strong className="text-secondary">Im Winter warm, im Sommer kühl</strong>
                    <p className="text-muted-foreground">Angenehmes Raumklima das ganze Jahr</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0 mt-1" />
                  <div>
                    <strong className="text-secondary">Bis zu 40% Förderung</strong>
                    <p className="text-muted-foreground">Wir kümmern uns um die Anträge</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-stone-200 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-heading font-bold text-secondary mb-6">
                <Euro className="inline h-6 w-6 text-primary mr-2" />
                Was Sie konkret sparen können:
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-stone-50 rounded-lg">
                  <p className="text-4xl font-bold text-primary mb-2">30%</p>
                  <p className="text-muted-foreground">weniger Heizkosten</p>
                </div>
                <div className="text-center p-4 bg-stone-50 rounded-lg">
                  <p className="text-4xl font-bold text-primary mb-2">40%</p>
                  <p className="text-muted-foreground">staatliche Förderung</p>
                </div>
                <div className="text-center p-4 bg-stone-50 rounded-lg">
                  <p className="text-4xl font-bold text-primary mb-2">50+</p>
                  <p className="text-muted-foreground">Jahre Lebensdauer</p>
                </div>
              </div>
            </div>

            <div className="bg-secondary text-white rounded-lg p-8 mb-12">
              <h3 className="text-xl font-heading font-bold mb-4 flex items-center gap-2">
                <Home className="h-5 w-5 text-primary" />
                Echtes Kundenbeispiel:
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                <em>"Familie Huber aus Pasing kam zu uns mit Heizkosten von 3.200€ pro Jahr. 
                Nach der Dachsanierung mit Dämmung: nur noch 2.100€. 
                Das sind <strong className="text-primary">1.100€ Ersparnis – jedes Jahr.</strong>"</em>
              </p>
              <p className="text-gray-400">
                Dazu gab's 18.000€ Förderung vom Staat. Die Investition hat sich in 6 Jahren amortisiert.
              </p>
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Finden Sie heraus, wie viel Sie sparen können – kostenlos und unverbindlich.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-6 rounded-sm"
                  asChild
                >
                  <Link href="/rueckruf">
                    <Phone className="mr-2 h-5 w-5" />
                    Kostenlose Beratung anfragen
                  </Link>
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="font-bold px-8 py-6 rounded-sm"
                  asChild
                >
                  <Link href="/ratgeber">
                    Zurück zu Tipps & Tricks
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}
