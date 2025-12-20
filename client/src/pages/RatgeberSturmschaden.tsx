import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, AlertTriangle, ArrowRight, Clock, Shield, FileText, Camera, Zap } from "lucide-react";
import LeadFunnel from "@/components/LeadFunnel";
import SEO, { BreadcrumbSchema, FAQPageSchema, ArticleSchema, HowToSchema } from "@/components/SEO";
import RelatedServices from "@/components/RelatedServices";

export default function RatgeberSturmschaden() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title={`Sturmschaden am Dach - Was tun? | Sofort-Ratgeber 2025`}
        description={`Sturmschaden am Dach? Schritt-für-Schritt Anleitung: Sicherung, Dokumentation, Versicherung, Reparatur. Kostenlose Soforthilfe. Tel: 089 12621964`}
        canonical={`https://089dach.de/ratgeber/sturmschaden`}
        keywords={`sturmschaden dach was tun, dach sturm beschädigt, sturmschaden versicherung melden, dach sturmschaden reparatur, notfall dach münchen, dachdecker notdienst münchen, sturm dachziegel weg, versicherung sturmschaden melden frist, was tun bei wassereinbruch dach, sturmschaden dokumentieren fotos, sturmschaden selbstbeteiligung gebäudeversicherung, wer zahlt sturmschaden mieter vermieter, dach notsicherung plane kosten, sturmschaden gutachter notwendig, nach sturm dach kontrollieren, sturmschaden first abgedeckt, hagel dach beschädigt erkennen`}
        aiSummary="089Dach GmbH München bietet 24/7 Notdienst bei Sturmschäden. Sofort-Absicherung mit Planen, professionelle Dokumentation für Versicherung, fachgerechte Reparatur. Telefon: 089 12621964. Schnelle Hilfe auch nachts und am Wochenende."
      />
      <FAQPageSchema faqs={[
        { question: "Was tun bei Sturmschaden am Dach?", answer: "1. Sicherheit: Beschädigte Bereiche meiden, bei Wassereintritt Strom abschalten. 2. Dokumentation: Fotos machen, Datum notieren, Wetterbericht sichern. 3. Versicherung: Innerhalb 3-7 Tagen melden. 4. Dachdecker: Professionelle Notsicherung und Reparatur beauftragen." },
        { question: "Zahlt die Versicherung bei Sturmschaden?", answer: "Bei nachgewiesenem Sturm ab Windstärke 8 zahlt die Gebäudeversicherung in der Regel. Wichtig: Schaden dokumentieren, schnell melden, Kostenvoranschlag vom Dachdecker einreichen. Wartungsmängel können zu Kürzungen führen." },
        { question: "Wie schnell muss ich einen Sturmschaden melden?", answer: "Die meisten Versicherungen haben eine Meldefrist von 3-7 Tagen. Je schneller Sie melden, desto besser. Rufen Sie sofort bei der Schadenshotline Ihrer Versicherung an und dokumentieren Sie alles mit Fotos." },
        { question: "Darf ich selbst Sturmschäden am Dach reparieren?", answer: "Kleine Notsicherungen wie das Abdecken mit Planen sind erlaubt und sogar empfohlen. Für die eigentliche Reparatur sollten Sie auf den Versicherungsbescheid warten und einen Fachbetrieb beauftragen." },
        { question: "Wie schnell kommt 089Dach bei einem Notfall?", answer: "Wir bieten 24/7 Notdienst in München und Umgebung. Bei Sturmschäden sind wir meist innerhalb von 2-4 Stunden vor Ort zur Notsicherung. Auch nachts und am Wochenende erreichbar unter 089 12621964." },
        { question: "Was kostet eine Sturmschaden-Reparatur?", answer: "Die Kosten hängen vom Schadensausmaß ab. Eine Notsicherung mit Plane kostet ca. 200-500€. Größere Reparaturen liegen bei 500-5.000€. Bei Versicherungsschäden erstellen wir einen detaillierten Kostenvoranschlag, den Sie direkt einreichen können." }
      ]} />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Ratgeber", url: "/ratgeber" }, { name: "Sturmschaden", url: "/ratgeber/sturmschaden" }]} />
      <ArticleSchema 
        headline="Sturmschaden am Dach - Was tun? Sofort-Ratgeber 2025"
        description="Schritt-für-Schritt Anleitung bei Sturmschäden: Sicherheit, Dokumentation, Versicherungsmeldung und professionelle Reparatur."
        datePublished="2025-01-10"
        dateModified="2025-12-19"
        keywords={["Sturmschaden Dach", "Notdienst München", "Versicherung melden", "Dach Reparatur", "24/7 Notdienst"]}
      />
      <HowToSchema 
        name="Sturmschaden am Dach richtig behandeln"
        description="Notfall-Anleitung: So handeln Sie richtig bei Sturmschäden am Dach - von der Erstsicherung bis zur Versicherungsabwicklung"
        totalTime="PT4H"
        estimatedCost="200-5000"
        steps={[
          { name: "Sicherheit gewährleisten", text: "Beschädigte Bereiche meiden. Bei Wassereintritt Strom abschalten. Bei Gefahr Haus verlassen." },
          { name: "Schaden dokumentieren", text: "Fotos und Videos machen. Datum notieren. Wetterbericht sichern. Beschädigte Teile aufbewahren." },
          { name: "Versicherung informieren", text: "Schaden innerhalb von 72 Stunden bei Ihrer Gebäudeversicherung melden." },
          { name: "Dachdecker rufen", text: "089Dach GmbH anrufen: 089 12621964. Wir kommen zur Notsicherung und erstellen einen Kostenvoranschlag." },
          { name: "Notsicherung durchführen", text: "Professionelle Abdeckung mit Planen oder provisorische Reparatur zur Schadensbegrenzung." },
          { name: "Reparatur beauftragen", text: "Nach Freigabe durch die Versicherung wird die endgültige Reparatur durchgeführt." }
        ]}
      />
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
          <div className="max-w-7xl mx-auto">
            
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
                  { frage: "Was tun bei Sturmschaden am Dach?", antwort: "1. Sicherheit: Beschädigte Bereiche meiden, bei Wassereintritt Strom abschalten. 2. Dokumentation: Fotos machen, Datum notieren. 3. Versicherung: Innerhalb 3-7 Tagen melden. 4. Dachdecker beauftragen." },
                  { frage: "Zahlt die Versicherung bei Sturmschaden?", antwort: "Bei nachgewiesenem Sturm ab Windstärke 8 zahlt die Gebäudeversicherung in der Regel. Wartungsmängel können zu Kürzungen führen." },
                  { frage: "Wie schnell muss ich einen Sturmschaden melden?", antwort: "Die meisten Versicherungen haben eine Meldefrist von 3-7 Tagen. Je schneller Sie melden, desto besser." },
                  { frage: "Darf ich selbst Sturmschäden am Dach reparieren?", antwort: "Kleine Notsicherungen wie Abdecken mit Planen sind erlaubt. Für die Reparatur auf Versicherungsbescheid warten." },
                  { frage: "Wie schnell kommt 089Dach bei einem Notfall?", antwort: "Wir bieten 24/7 Notdienst. Bei Sturmschäden sind wir meist innerhalb von 2-4 Stunden vor Ort." },
                  { frage: "Was kostet eine Sturmschaden-Reparatur?", antwort: "Notsicherung ca. 200-500€. Größere Reparaturen 500-5.000€. Wir erstellen Kostenvoranschläge für die Versicherung." }
                ].map((item, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold text-secondary">{item.frage}</h4>
                    <p className="text-muted-foreground text-sm">{item.antwort}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-stone-50 rounded-xl p-6 border border-stone-200 mb-8">
              <h2 className="text-xl font-heading font-bold text-secondary mb-3">Weitere hilfreiche Ratgeber</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="/ratgeber/kosten" className="flex items-center gap-2 p-3 bg-white rounded-lg border border-stone-200 hover:border-primary/30 transition-colors" data-testid="link-ratgeber-kosten">
                  <span className="text-primary font-bold">→</span>
                  <span className="text-muted-foreground text-sm">Was kostet Dachsanierung?</span>
                </a>
                <a href="/ratgeber/foerderung" className="flex items-center gap-2 p-3 bg-white rounded-lg border border-stone-200 hover:border-primary/30 transition-colors" data-testid="link-ratgeber-foerderung">
                  <span className="text-primary font-bold">→</span>
                  <span className="text-muted-foreground text-sm">KfW Förderung 2025</span>
                </a>
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
                <a href="/kontakt">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600" data-testid="button-contact-cta">
                    Kontakt aufnehmen
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
