import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Shield, Cookie, Bot, Scale, Lock, FileText, AlertTriangle } from "lucide-react";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title="Cookie-Richtlinie & DSGVO | 089Dach GmbH München"
        description="Cookie-Richtlinie der 089Dach GmbH nach DSGVO, TTDSG und EU AI Act. Aktuelle Datenschutzbestimmungen Stand Dezember 2025."
        canonical="https://089dach.de/cookies"
      />
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12 max-w-4xl">
        <div className="flex items-center gap-3 mb-4">
          <Cookie className="h-8 w-8 text-primary" />
          <span className="text-primary font-bold tracking-wider uppercase text-sm">DSGVO & EU AI Act konform</span>
        </div>
        <h1 className="text-4xl font-heading font-bold mb-4 text-secondary">Cookie-Richtlinie (EU)</h1>
        <p className="text-muted-foreground mb-8">
          Stand: Dezember 2025 | Gilt für Bürger und Einwohner des Europäischen Wirtschaftsraums
        </p>

        <div className="prose prose-lg text-muted-foreground">
          
          {/* Wichtiger Hinweis Box */}
          <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-sm mb-8 not-prose">
            <div className="flex items-start gap-3">
              <Scale className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-secondary mb-2">Rechtsgrundlagen dieser Richtlinie</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <strong>DSGVO</strong> – Datenschutz-Grundverordnung (EU) 2016/679</li>
                  <li>• <strong>TTDSG</strong> – Telekommunikation-Telemedien-Datenschutz-Gesetz (seit 01.12.2021)</li>
                  <li>• <strong>EU AI Act</strong> – Verordnung über Künstliche Intelligenz (EU) 2024/1689</li>
                  <li>• <strong>EinwV</strong> – Einwilligungsverordnung (seit 01.04.2025)</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">1. Einführung</h2>
          <p>
            Unsere Website, https://089dach.de (im Folgenden: "die Website") verwendet Cookies und ähnliche Technologien 
            (der Einfachheit halber werden all diese unter dem Begriff "Cookies" zusammengefasst). Diese Cookie-Richtlinie 
            informiert Sie gemäß <strong>Art. 13 DSGVO</strong> und <strong>§ 25 TTDSG</strong> über die Verwendung von 
            Cookies auf unserer Website.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">2. Verantwortlicher</h2>
          <p>
            Verantwortlich für die Datenverarbeitung im Sinne der DSGVO ist:
          </p>
          <div className="bg-gray-50 p-6 rounded-sm border border-gray-100 my-4">
            <p className="font-bold text-secondary">089Dach GmbH</p>
            <p>Thuillestr. 20<br />81247 München-Obermenzing<br />Deutschland</p>
            <p className="mt-2">
              Telefon: 089 12621964<br />
              E-Mail: info@089dach.de<br />
              Website: https://089dach.de
            </p>
          </div>

          <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">3. Was sind Cookies?</h2>
          <p>
            Ein Cookie ist eine kleine Textdatei, die beim Besuch einer Website auf Ihrem Endgerät (Computer, Smartphone, 
            Tablet) gespeichert wird. Cookies ermöglichen es der Website, Ihr Gerät bei einem erneuten Besuch wiederzuerkennen 
            und bestimmte Informationen zu speichern.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">4. Rechtsgrundlagen der Verarbeitung</h2>
          
          <div className="space-y-4 not-prose">
            <div className="bg-gray-50 p-6 rounded-sm border border-gray-100">
              <div className="flex items-start gap-3">
                <Lock className="h-5 w-5 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-secondary">§ 25 Abs. 1 TTDSG – Einwilligung</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Das Speichern von und der Zugriff auf Informationen auf Ihrem Endgerät erfordert Ihre vorherige 
                    Einwilligung, sofern nicht eine der gesetzlichen Ausnahmen greift.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-sm border border-gray-100">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-green-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-secondary">§ 25 Abs. 2 TTDSG – Technisch notwendige Cookies</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Cookies, die unbedingt erforderlich sind, damit wir Ihnen einen von Ihnen ausdrücklich gewünschten 
                    Dienst zur Verfügung stellen können, benötigen keine Einwilligung.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-sm border border-gray-100">
              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-secondary">Art. 6 Abs. 1 lit. a DSGVO – Einwilligung</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Die Verarbeitung personenbezogener Daten ist rechtmäßig, wenn Sie Ihre Einwilligung zu einem oder 
                    mehreren bestimmten Zwecken gegeben haben.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-sm border border-gray-100">
              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-secondary">Art. 6 Abs. 1 lit. f DSGVO – Berechtigtes Interesse</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    In bestimmten Fällen kann die Verarbeitung auf Grundlage unserer berechtigten Interessen erfolgen, 
                    sofern Ihre Interessen oder Grundrechte nicht überwiegen.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">5. Kategorien von Cookies</h2>
          
          <h3 className="text-xl font-bold text-secondary mt-6 mb-2">5.1 Technisch notwendige Cookies</h3>
          <p>
            Diese Cookies sind für den Betrieb der Website unbedingt erforderlich und können nicht deaktiviert werden. 
            Sie werden in der Regel nur als Reaktion auf von Ihnen getätigte Aktionen gesetzt, die einer Dienstanforderung 
            entsprechen, wie etwa das Festlegen Ihrer Datenschutzeinstellungen oder das Ausfüllen von Formularen.
          </p>
          <div className="bg-green-50 p-4 rounded-sm border border-green-100 my-4">
            <p className="text-sm text-green-800"><strong>Rechtsgrundlage:</strong> § 25 Abs. 2 Nr. 2 TTDSG (keine Einwilligung erforderlich)</p>
          </div>

          <h3 className="text-xl font-bold text-secondary mt-6 mb-2">5.2 Funktionale Cookies</h3>
          <p>
            Diese Cookies ermöglichen erweiterte Funktionen und Personalisierung, wie z.B. die Speicherung Ihrer 
            Spracheinstellungen oder die Anzeige regionaler Informationen.
          </p>
          <div className="bg-blue-50 p-4 rounded-sm border border-blue-100 my-4">
            <p className="text-sm text-blue-800"><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung erforderlich)</p>
          </div>

          <h3 className="text-xl font-bold text-secondary mt-6 mb-2">5.3 Analyse-Cookies</h3>
          <p>
            Diese Cookies ermöglichen uns, Besuche und Besucherquellen zu zählen, damit wir die Leistung unserer 
            Website messen und verbessern können. Sie helfen uns zu verstehen, welche Seiten am beliebtesten 
            und welche am wenigsten beliebt sind, und zu erfahren, wie sich Besucher auf der Website bewegen.
          </p>
          <div className="bg-blue-50 p-4 rounded-sm border border-blue-100 my-4">
            <p className="text-sm text-blue-800"><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung erforderlich)</p>
          </div>

          <h3 className="text-xl font-bold text-secondary mt-6 mb-2">5.4 Marketing-Cookies</h3>
          <p>
            Diese Cookies können über unsere Website von unseren Werbepartnern gesetzt werden. Sie können von 
            diesen Unternehmen verwendet werden, um ein Profil Ihrer Interessen zu erstellen und Ihnen relevante 
            Werbung auf anderen Websites anzuzeigen.
          </p>
          <div className="bg-blue-50 p-4 rounded-sm border border-blue-100 my-4">
            <p className="text-sm text-blue-800"><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung erforderlich)</p>
          </div>

          {/* EU AI Act Section */}
          <div className="bg-secondary text-white p-8 rounded-sm my-8 not-prose">
            <div className="flex items-start gap-4">
              <Bot className="h-8 w-8 text-primary shrink-0" />
              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">6. Künstliche Intelligenz (EU AI Act)</h2>
                <p className="text-gray-300 mb-4">
                  Gemäß der <strong className="text-white">Verordnung (EU) 2024/1689</strong> (EU AI Act), die seit 
                  Februar 2025 schrittweise in Kraft tritt, informieren wir Sie über den Einsatz von KI-Systemen:
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white/10 p-4 rounded-sm">
                    <h4 className="font-bold text-white mb-2">🤖 Kontaktformular & Lead-Funnel</h4>
                    <p className="text-sm text-gray-300">
                      Unsere Kontaktformulare verwenden keine KI-gestützte automatisierte Entscheidungsfindung. 
                      Alle Anfragen werden von unseren Mitarbeitern persönlich bearbeitet.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-sm">
                    <h4 className="font-bold text-white mb-2">📊 Keine KI-Profilierung</h4>
                    <p className="text-sm text-gray-300">
                      Wir setzen keine KI-Systeme ein, die Ihr Verhalten analysieren, Profile erstellen oder 
                      automatisierte Entscheidungen treffen, die Sie betreffen.
                    </p>
                  </div>

                  <div className="bg-white/10 p-4 rounded-sm">
                    <h4 className="font-bold text-white mb-2">✅ Art. 50 EU AI Act – Transparenzpflichten</h4>
                    <p className="text-sm text-gray-300">
                      Sollten wir in Zukunft KI-Systeme einsetzen (z.B. Chatbots), werden wir Sie gemäß 
                      Art. 50 EU AI Act klar und deutlich darüber informieren, dass Sie mit einem KI-System interagieren.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">7. Aktuell verwendete Cookies</h2>
          
          <div className="space-y-4 not-prose">
            <div className="bg-gray-50 p-6 rounded-sm border border-gray-100">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-secondary">cookie-consent</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Speichert Ihre Cookie-Einwilligung
                  </p>
                </div>
                <div className="text-right text-sm">
                  <p className="text-green-600 font-medium">Notwendig</p>
                  <p className="text-muted-foreground">1 Jahr</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-sm border border-gray-100">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-secondary">Session-Cookie</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Ermöglicht die Grundfunktionen der Website
                  </p>
                </div>
                <div className="text-right text-sm">
                  <p className="text-green-600 font-medium">Notwendig</p>
                  <p className="text-muted-foreground">Sitzung</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">8. Ihre Rechte nach DSGVO</h2>
          <p>
            Sie haben gemäß DSGVO folgende Rechte bezüglich Ihrer personenbezogenen Daten:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
            <div className="bg-gray-50 p-4 rounded-sm border border-gray-100">
              <h4 className="font-bold text-secondary text-sm">Art. 15 DSGVO</h4>
              <p className="text-sm text-muted-foreground">Auskunftsrecht</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-sm border border-gray-100">
              <h4 className="font-bold text-secondary text-sm">Art. 16 DSGVO</h4>
              <p className="text-sm text-muted-foreground">Recht auf Berichtigung</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-sm border border-gray-100">
              <h4 className="font-bold text-secondary text-sm">Art. 17 DSGVO</h4>
              <p className="text-sm text-muted-foreground">Recht auf Löschung</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-sm border border-gray-100">
              <h4 className="font-bold text-secondary text-sm">Art. 18 DSGVO</h4>
              <p className="text-sm text-muted-foreground">Recht auf Einschränkung</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-sm border border-gray-100">
              <h4 className="font-bold text-secondary text-sm">Art. 20 DSGVO</h4>
              <p className="text-sm text-muted-foreground">Recht auf Datenübertragbarkeit</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-sm border border-gray-100">
              <h4 className="font-bold text-secondary text-sm">Art. 21 DSGVO</h4>
              <p className="text-sm text-muted-foreground">Widerspruchsrecht</p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-sm my-6 not-prose">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-yellow-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-secondary">Art. 7 Abs. 3 DSGVO – Widerruf der Einwilligung</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Sie haben das Recht, Ihre Einwilligung jederzeit zu widerrufen. Der Widerruf berührt nicht die 
                  Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">9. Einwilligungsverordnung (EinwV)</h2>
          <p>
            Mit der <strong>Einwilligungsverordnung (EinwV)</strong>, die am 01.04.2025 in Kraft getreten ist, 
            wurde ein rechtlicher Rahmen für anerkannte Dienste zur Einwilligungsverwaltung geschaffen. Diese 
            ermöglichen es Nutzern, ihre Cookie-Präferenzen zentral zu verwalten.
          </p>
          <p>
            Sobald anerkannte Dienste verfügbar sind, werden wir die Möglichkeit prüfen, diese zu integrieren, 
            um Ihnen die Verwaltung Ihrer Einwilligungen zu erleichtern.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">10. Cookies verwalten</h2>
          <p>
            Sie können Ihre Cookie-Einstellungen jederzeit über unser Cookie-Banner oder die folgenden 
            Browser-Einstellungen anpassen:
          </p>
          
          <div className="bg-gray-50 p-6 rounded-sm border border-gray-100 my-4">
            <ul className="space-y-2 text-muted-foreground">
              <li><strong>Chrome:</strong> Einstellungen → Datenschutz und Sicherheit → Cookies</li>
              <li><strong>Firefox:</strong> Einstellungen → Datenschutz & Sicherheit → Cookies</li>
              <li><strong>Safari:</strong> Einstellungen → Datenschutz → Cookies verwalten</li>
              <li><strong>Edge:</strong> Einstellungen → Cookies und Websiteberechtigungen</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">11. Beschwerderecht</h2>
          <p>
            Gemäß <strong>Art. 77 DSGVO</strong> haben Sie das Recht, sich bei einer Aufsichtsbehörde zu beschweren, 
            wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt.
          </p>
          <div className="bg-gray-50 p-6 rounded-sm border border-gray-100 my-4">
            <p className="font-bold text-secondary">Zuständige Aufsichtsbehörde:</p>
            <p className="text-muted-foreground mt-2">
              Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)<br />
              Promenade 18<br />
              91522 Ansbach<br />
              Website: www.lda.bayern.de
            </p>
          </div>

          <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">12. Änderungen dieser Richtlinie</h2>
          <p>
            Wir behalten uns vor, diese Cookie-Richtlinie bei Bedarf zu aktualisieren, um rechtliche Anforderungen 
            zu erfüllen oder Änderungen unserer Dienste widerzuspiegeln. Das Datum der letzten Aktualisierung finden 
            Sie am Anfang dieser Seite.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">13. Kontakt</h2>
          <p>
            Bei Fragen zu dieser Cookie-Richtlinie oder zur Ausübung Ihrer Rechte kontaktieren Sie uns bitte:
          </p>
          <div className="bg-secondary text-white p-6 rounded-sm my-4">
            <p className="font-bold">089Dach GmbH</p>
            <p className="text-gray-300 mt-2">
              E-Mail: info@089dach.de<br />
              Telefon: 089 12621964
            </p>
          </div>

        </div>
      </div>
      
      <Footer />
    </div>
  );
}
