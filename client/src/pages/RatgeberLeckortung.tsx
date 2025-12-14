import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Droplets, ArrowRight, Search, Shield, Clock, Phone } from "lucide-react";
import { Link } from "wouter";
import SEO, { BreadcrumbSchema } from "@/components/SEO";
import heroImage from "@assets/generated_images/roof_leak_detection_scene.png";

export default function RatgeberLeckortung() {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Leckortung & Reparatur | Wasserflecken? Wir finden die Ursache | 089Dach"
        description="Professionelle Leckortung bei Wasserflecken. Wir finden die Ursache und beheben sie dauerhaft. Schnell, zuverlässig, mit Garantie."
        canonical="https://089dach.de/ratgeber/leckortung"
        keywords="leckortung münchen, wasserfleck decke, dachleck finden, dachreparatur münchen"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" }, 
        { name: "Tipps & Tricks", url: "/ratgeber" },
        { name: "Leckortung & Reparatur", url: "/ratgeber/leckortung" }
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
              <span className="text-gray-300">Leckortung & Reparatur</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Droplets className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Feuchte Flecken an der Decke?<br/>
              <span className="text-primary">Wir finden die Ursache – garantiert</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Ein Wasserfleck ist mehr als ein optisches Problem. Je länger Sie warten, desto größer wird der Schaden. 
              Wir finden das Leck und beheben es – einmal richtig, dann Ruhe.
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
                Ein Wasserfleck an der Decke. Er wird größer. Woher kommt das Wasser? 
                Sie haben schon einen Handwerker gehabt – aber der Fleck kommt wieder.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                <strong>Das Frustrierende:</strong> Wasser läuft oft meterweit, bevor es sichtbar wird. 
                Das Leck kann ganz woanders sein als der Fleck.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-12">
              <h2 className="text-2xl font-heading font-bold text-secondary mb-4">Unsere Lösung:</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Search className="h-6 w-6 text-green-600 shrink-0 mt-1" />
                  <div>
                    <strong className="text-secondary">Professionelle Leckortung</strong>
                    <p className="text-muted-foreground">Mit Thermografie und Feuchtemessung finden wir die exakte Stelle</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0 mt-1" />
                  <div>
                    <strong className="text-secondary">Ursachenbeseitigung</strong>
                    <p className="text-muted-foreground">Wir beheben nicht nur das Symptom, sondern die Ursache</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-green-600 shrink-0 mt-1" />
                  <div>
                    <strong className="text-secondary">10 Jahre Garantie</strong>
                    <p className="text-muted-foreground">Auf alle unsere Reparaturarbeiten</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-stone-200 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-heading font-bold text-secondary mb-6">
                <Clock className="inline h-6 w-6 text-primary mr-2" />
                So läuft die Leckortung ab:
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-secondary">Vor-Ort-Termin</h3>
                    <p className="text-muted-foreground">Wir kommen zu Ihnen und begutachten den Schaden</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-secondary">Leckortung mit Technik</h3>
                    <p className="text-muted-foreground">Thermografie und Feuchtemessung zeigen die exakte Stelle</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-secondary">Festpreis-Angebot</h3>
                    <p className="text-muted-foreground">Sie wissen vorher genau, was es kostet</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">4</div>
                  <div>
                    <h3 className="font-bold text-secondary">Dauerhafte Reparatur</h3>
                    <p className="text-muted-foreground">Mit 10 Jahren Garantie – einmal richtig, dann Ruhe</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary text-white rounded-lg p-8 mb-12">
              <h3 className="text-xl font-heading font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Echtes Kundenbeispiel:
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                <em>"Herr Schmitt aus Moosach hatte schon 3 Handwerker. Jeder hat etwas anderes repariert. 
                Der Fleck kam immer wieder. Wir haben mit Thermografie das echte Leck gefunden – 
                <strong className="text-primary">2 Meter entfernt vom Fleck.</strong> 
                Seit der Reparatur: trocken."</em>
              </p>
              <p className="text-gray-400">
                Manchmal braucht es eben den richtigen Blick und die richtige Technik.
              </p>
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Lassen Sie uns das Leck finden – bevor der Schaden größer wird.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-6 rounded-sm"
                  asChild
                >
                  <Link href="/rueckruf">
                    <Phone className="mr-2 h-5 w-5" />
                    Leckortung anfragen
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
