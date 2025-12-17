import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, AlertTriangle, ArrowRight, Clock, Shield, FileText, Camera, Zap } from "lucide-react";
import LeadFunnel from "@/components/LeadFunnel";
import SEO, { BreadcrumbSchema } from "@/components/SEO";
import RelatedServices from "@/components/RelatedServices";

export default function RatgeberSturmschaden() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title={`Sturmschaden am Dach - Was tun? | Sofort-Ratgeber 2025`}
        description={`Sturmschaden am Dach? Schritt-für-Schritt Anleitung: Sicherung, Dokumentation, Versicherung, Reparatur. Kostenlose Soforthilfe. Tel: 089 12621964`}
        canonical={`https://089dach.de/ratgeber/sturmschaden`}
        keywords={`sturmschaden dach was tun, dach sturm beschädigt, sturmschaden versicherung melden, dach sturmschaden reparatur, notfall dach münchen`}
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Ratgeber", url: "/ratgeber" }, { name: "Sturmschaden", url: "/ratgeber/sturmschaden" }]} />
      <Navbar />
      
      <section className="pt-6 pb-8 md:pt-10 md:pb-12 bg-secondary relative overflow-hidden min-h-[35vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/80"></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl text-white">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <AlertTriangle className="h-5 w-5 text-primary" />
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Notfall-Ratgeber</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 md:mb-6">
              Sturmschaden am Dach – Was tun?
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-xl mb-4 md:mb-6">
              Schritt-für-Schritt Anleitung für den Ernstfall. So handeln Sie richtig.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/rueckruf">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white" data-testid="button-notfall-hero">
                  <Phone className="h-5 w-5 mr-2" /> Sofort-Rückruf
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            
            <div className="bg-red-50 rounded-xl p-6 border border-red-200 mb-8">
              <h2 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                <Zap className="h-6 w-6" />Sofort-Maßnahmen (erste 30 Minuten)
              </h2>
              <ol className="space-y-4">
                {[
                  { titel: "Sicherheit zuerst", desc: "Betreten Sie keine beschädigten Bereiche. Bei Gefahr: Haus verlassen und Feuerwehr rufen." },
                  { titel: "Strom abschalten", desc: "Bei Wassereintritt: Sicherung für betroffene Räume ausschalten." },
                  { titel: "Wertsachen sichern", desc: "Möbel und Elektronik aus dem Gefahrenbereich bringen." },
                  { titel: "Eimer aufstellen", desc: "Tropfendes Wasser auffangen, um weitere Schäden zu minimieren." }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                      {idx + 1}
                    </span>
                    <div>
                      <h4 className="font-bold text-red-800">{item.titel}</h4>
                      <p className="text-red-700 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 mb-8">
              <h2 className="text-xl font-bold text-amber-800 mb-4 flex items-center gap-2">
                <Camera className="h-6 w-6" />Dokumentation (erste 2 Stunden)
              </h2>
              <ul className="space-y-3">
                {[
                  "Fotos und Videos vom Schaden machen (Übersicht + Details)",
                  "Datum und Uhrzeit notieren",
                  "Wetterbericht/Unwetterwarnung sichern (Screenshot)",
                  "Beschädigte Teile NICHT wegwerfen (Beweismittel)",
                  "Notizen zu Schäden anfertigen"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-amber-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 mb-8">
              <h2 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                <FileText className="h-6 w-6" />Versicherung melden (innerhalb 24-48h)
              </h2>
              <div className="space-y-4">
                <p className="text-blue-800">
                  <strong>Wichtig:</strong> Melden Sie den Schaden sofort Ihrer Gebäudeversicherung. Die meisten Versicherungen haben eine Meldefrist von 3-7 Tagen.
                </p>
                <h4 className="font-bold text-blue-800">Was die Versicherung braucht:</h4>
                <ul className="space-y-2">
                  {[
                    "Versicherungsnummer",
                    "Datum und Uhrzeit des Schadens",
                    "Art des Schadens (Sturm, Hagel, etc.)",
                    "Fotos/Videos",
                    "Kostenvoranschlag vom Dachdecker"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-blue-700">
                      <CheckCircle2 className="h-4 w-4 text-blue-600" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border border-green-200 mb-8">
              <h2 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6" />Professionelle Hilfe holen
              </h2>
              <div className="space-y-4">
                <p className="text-green-800">
                  Rufen Sie einen Dachdecker-Fachbetrieb für die Notsicherung und Reparatur.
                </p>
                <h4 className="font-bold text-green-800">Was wir für Sie tun:</h4>
                <ul className="space-y-2">
                  {[
                    "Sofort-Absicherung mit Planen (auch nachts/am Wochenende)",
                    "Professionelle Schadensdokumentation für die Versicherung",
                    "Detaillierter Kostenvoranschlag",
                    "Direkte Kommunikation mit Sachverständigen",
                    "Fachgerechte Reparatur mit Garantie"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-green-700">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-primary/10 rounded-xl p-6 border border-primary/30 mb-8">
              <h3 className="text-xl font-bold text-secondary mb-4">Häufige Fragen</h3>
              <div className="space-y-4">
                {[
                  { frage: "Zahlt die Versicherung auch bei Selbstverschulden?", antwort: "Bei nachgewiesenem Sturm (ab Windstärke 8) zahlt die Gebäudeversicherung in der Regel. Wartungsmängel können jedoch zu Kürzungen führen." },
                  { frage: "Wie schnell muss ich den Schaden melden?", antwort: "Innerhalb von 3-7 Tagen, je nach Versicherung. Je schneller, desto besser." },
                  { frage: "Darf ich selbst reparieren?", antwort: "Kleine Notsicherungen (Plane) sind erlaubt. Für die eigentliche Reparatur sollten Sie auf den Versicherungsbescheid warten." }
                ].map((item, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold text-secondary">{item.frage}</h4>
                    <p className="text-muted-foreground text-sm">{item.antwort}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-red-600 text-white rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold mb-4">Sturmschaden? Wir helfen sofort!</h3>
              <p className="text-white/90 mb-6">24/7 Notdienst – Schnelle Absicherung – Versicherungsabwicklung</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/rueckruf">
                  <Button size="lg" variant="secondary" data-testid="button-notfall-cta">
                    <Phone className="h-5 w-5 mr-2" /> Sofort-Rückruf
                  </Button>
                </a>
                <a href="https://wa.me/498912621964" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                    WhatsApp Notfall
                  </Button>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <LeadFunnel />
      <RelatedServices currentPage="ratgeber" relatedIds={["notdienst", "sturmschaden", "reparaturservice", "referenzen"]} />
      <Contact />
      <Footer />
    </div>
  );
}
