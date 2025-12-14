import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Euro, ArrowRight, Shield, FileText, Calculator, Phone, Users } from "lucide-react";
import { Link } from "wouter";
import SEO, { BreadcrumbSchema } from "@/components/SEO";

export default function RatgeberBeratung() {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Kostenlose Beratung + Festpreis | Keine Überraschungen | 089Dach München"
        description="Kostenlose Dach-Beratung vor Ort. Festpreis-Angebot ohne versteckte Kosten. Transparenz und Ehrlichkeit seit 1998."
        canonical="https://089dach.de/ratgeber/beratung"
        keywords="dachdecker beratung münchen, festpreis dachdecker, kostenvoranschlag dach, transparente preise"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" }, 
        { name: "Ratgeber", url: "/ratgeber" },
        { name: "Kostenlose Beratung + Festpreis", url: "/ratgeber/beratung" }
      ]} />
      <Navbar />
      
      <section className="pt-10 pb-12 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl text-white">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/ratgeber">
                <span className="text-primary hover:underline cursor-pointer">Ratgeber</span>
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-300">Kostenlose Beratung + Festpreis</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Euro className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Was wird das kosten?<br/>
              <span className="text-primary">Bei uns wissen Sie es vorher</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Die Angst vor hohen Kosten hält viele davon ab, überhaupt anzurufen. 
              Bei uns bekommen Sie eine kostenlose Beratung und einen verbindlichen Festpreis – ohne böse Überraschungen.
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
                Sie wissen, dass am Dach etwas gemacht werden muss. Aber die Angst vor den Kosten ist groß. 
                <strong> Was, wenn es 50.000€ werden? Können Sie sich das leisten?</strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Diese Unsicherheit führt dazu, dass viele Menschen zu lange warten. 
                Und aus einem kleinen Problem wird ein großes – und teures.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-12">
              <h2 className="text-2xl font-heading font-bold text-secondary mb-4">Unser Versprechen:</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0 mt-1" />
                  <div>
                    <strong className="text-secondary">Kostenlose Beratung vor Ort</strong>
                    <p className="text-muted-foreground">Wir schauen uns Ihr Dach an – ohne Kosten für Sie</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FileText className="h-6 w-6 text-green-600 shrink-0 mt-1" />
                  <div>
                    <strong className="text-secondary">Schriftliches Festpreis-Angebot</strong>
                    <p className="text-muted-foreground">Sie wissen genau, was es kostet – bevor wir anfangen</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-green-600 shrink-0 mt-1" />
                  <div>
                    <strong className="text-secondary">Keine versteckten Kosten</strong>
                    <p className="text-muted-foreground">Der Preis, den wir nennen, ist der Preis, den Sie zahlen</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-stone-200 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-heading font-bold text-secondary mb-6">
                <Calculator className="inline h-6 w-6 text-primary mr-2" />
                So funktioniert unser Festpreis:
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-secondary">Sie rufen uns an oder schreiben uns</h3>
                    <p className="text-muted-foreground">Völlig unverbindlich – wir hören zu und stellen Fragen</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-secondary">Kostenloser Vor-Ort-Termin</h3>
                    <p className="text-muted-foreground">Wir schauen uns alles genau an und besprechen die Möglichkeiten</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-secondary">Schriftliches Festpreis-Angebot</h3>
                    <p className="text-muted-foreground">Detailliert aufgeschlüsselt – Sie verstehen jeden Posten</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">4</div>
                  <div>
                    <h3 className="font-bold text-secondary">Sie entscheiden in Ruhe</h3>
                    <p className="text-muted-foreground">Kein Druck, keine Verkaufstricks – nehmen Sie sich Zeit</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary text-white rounded-lg p-8 mb-12">
              <h3 className="text-xl font-heading font-bold mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Echtes Kundenbeispiel:
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                <em>"Familie Weber aus Schwabing hatte Angst vor den Kosten. Sie befürchteten 50.000€ oder mehr. 
                Nach unserer Beratung und Prüfung der Fördermöglichkeiten: 
                <strong className="text-primary">22.000€ mit Förderung.</strong> 
                Weniger als die Hälfte dessen, was sie befürchtet hatten."</em>
              </p>
              <p className="text-gray-400">
                Manchmal ist die Angst vor den Kosten schlimmer als die Kosten selbst.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white border border-stone-200 rounded-lg p-6 text-center">
                <p className="text-4xl font-bold text-primary mb-2">0€</p>
                <p className="font-bold text-secondary">Beratung vor Ort</p>
                <p className="text-sm text-muted-foreground mt-2">Komplett kostenlos</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-6 text-center">
                <p className="text-4xl font-bold text-primary mb-2">100%</p>
                <p className="font-bold text-secondary">Preissicherheit</p>
                <p className="text-sm text-muted-foreground mt-2">Festpreis = Endpreis</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-6 text-center">
                <p className="text-4xl font-bold text-primary mb-2">40%</p>
                <p className="font-bold text-secondary">Förderung möglich</p>
                <p className="text-sm text-muted-foreground mt-2">Wir helfen beim Antrag</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Rufen Sie uns an – und wissen Sie endlich, woran Sie sind.
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
                    Zurück zum Ratgeber
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
