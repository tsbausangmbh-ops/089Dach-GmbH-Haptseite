import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Cookie, Shield, Settings } from "lucide-react";

export default function Cookies() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-10 pb-12 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Rechtliches</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary mt-4 mb-6">
              Cookie-Einstellungen
            </h1>
            <p className="text-muted-foreground">
              Informationen über die Verwendung von Cookies auf unserer Website
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl space-y-12">
            
            {/* Einfache Erklärung */}
            <div className="bg-primary/10 p-8 rounded-sm">
              <div className="flex items-start gap-4">
                <Cookie className="h-8 w-8 text-primary shrink-0" />
                <div>
                  <h2 className="text-xl font-heading font-bold text-secondary mb-3">Was sind Cookies?</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Cookies sind kleine Textdateien, die beim Besuch einer Website auf Ihrem Computer 
                    gespeichert werden. Sie helfen dabei, die Website funktionsfähig zu halten und 
                    Ihnen ein besseres Nutzungserlebnis zu bieten – zum Beispiel, damit Sie sich nicht 
                    bei jedem Besuch neu anmelden müssen.
                  </p>
                </div>
              </div>
            </div>

            {/* Welche Cookies wir verwenden */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-secondary mb-6">Welche Cookies verwenden wir?</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-sm">
                  <div className="flex items-start gap-4">
                    <Shield className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-secondary mb-2">Technisch notwendige Cookies</h3>
                      <p className="text-muted-foreground mb-3">
                        Diese Cookies sind für den Betrieb der Website unbedingt erforderlich. 
                        Sie ermöglichen grundlegende Funktionen wie die Navigation und den Zugriff 
                        auf sichere Bereiche der Website.
                      </p>
                      <p className="text-sm text-primary font-medium">✓ Immer aktiv</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-sm">
                  <div className="flex items-start gap-4">
                    <Settings className="h-6 w-6 text-muted-foreground shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-secondary mb-2">Analyse-Cookies (optional)</h3>
                      <p className="text-muted-foreground mb-3">
                        Diese Cookies helfen uns zu verstehen, wie Besucher unsere Website nutzen. 
                        Alle Daten werden anonymisiert erfasst.
                      </p>
                      <p className="text-sm text-muted-foreground">Derzeit nicht aktiv</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ihre Wahlmöglichkeiten */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-secondary mb-6">Ihre Wahlmöglichkeiten</h2>
              <p className="text-muted-foreground mb-6">
                Sie können Cookies jederzeit über Ihre Browsereinstellungen verwalten oder löschen. 
                Beachten Sie jedoch, dass das Deaktivieren bestimmter Cookies die Funktionalität 
                unserer Website einschränken kann.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-sm">
                <h3 className="font-bold text-secondary mb-4">So verwalten Sie Cookies in Ihrem Browser:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong>Chrome:</strong> Einstellungen → Datenschutz und Sicherheit → Cookies</li>
                  <li><strong>Firefox:</strong> Einstellungen → Datenschutz & Sicherheit → Cookies</li>
                  <li><strong>Safari:</strong> Einstellungen → Datenschutz → Cookies verwalten</li>
                  <li><strong>Edge:</strong> Einstellungen → Cookies und Websiteberechtigungen</li>
                </ul>
              </div>
            </div>

            {/* Kontakt */}
            <div className="bg-secondary text-white p-8 rounded-sm">
              <h2 className="text-xl font-heading font-bold mb-4">Fragen zu Cookies?</h2>
              <p className="text-gray-300 mb-6">
                Wenn Sie Fragen zur Verwendung von Cookies auf unserer Website haben, 
                können Sie uns jederzeit kontaktieren.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-white font-bold rounded-sm" data-testid="button-contact-cookies">
                <a href="mailto:info@089dach.de">info@089dach.de</a>
              </Button>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
