import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import SEO, { BreadcrumbSchema } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Shield, Lock, FileText, Globe, Bot, AlertTriangle, Database, Server, Phone } from "lucide-react";
import heroImage from "@assets/generated_images/friendly_woman_on_phone_in_office.png";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title="Datenschutzerklärung | 089Dach GmbH München"
        description="Datenschutzerklärung der 089Dach GmbH gemäß DSGVO, BDSG, TDDDG und EU AI Act. Stand Dezember 2025."
        canonical="https://089dach.de/datenschutz"
        keywords="datenschutz 089dach gmbh, dsgvo datenschutzerklärung münchen, cookies webhosting ki chatbot openai, betroffenenrechte auskunft löschung widerspruch, bayerisches landesamt datenschutzaufsicht"
        aiSummary="089Dach GmbH Datenschutzerklärung: DSGVO-konform, Stand Dezember 2025. Verantwortlicher: Falko Georg Blöckinger, Thuillestr. 20, 81247 München. Aufsichtsbehörde: BayLDA Ansbach. KI-Chatbot mit OpenAI. Kontakt: info@089dach.de."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Datenschutz", url: "/datenschutz" }]} />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-10 pb-12 relative overflow-hidden min-h-[50vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Datenschutz bei 089Dach GmbH München"
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
            <span className="text-primary font-bold tracking-wider uppercase text-sm">DSGVO konform</span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mt-4 mb-6">
              Datenschutzerklärung
            </h1>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border-l-4 border-primary mb-8">
              <p className="text-lg text-white font-medium mb-3">
                Ihre Daten sind bei uns sicher.
              </p>
              <p className="text-gray-200 leading-relaxed mb-4">
                Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
                <strong className="text-white"> Transparent, verständlich und DSGVO-konform.</strong>
              </p>
              <p className="text-gray-200 leading-relaxed">
                <strong className="text-white">Stand: Dezember 2025</strong> | Gemäß DSGVO, BDSG, TDDDG und EU AI Act
              </p>
            </div>
            
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              <strong className="text-white">Fragen zum Datenschutz?</strong> Wir helfen Ihnen gerne weiter – 
              schnell und unkompliziert.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-xl" data-testid="button-hero-call">
                <a href="/rueckruf">
                  <Phone className="mr-2 h-5 w-5" />
                  Rückruf anfordern
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-secondary font-bold rounded-xl" data-testid="button-hero-content">
                <a href="#praeambel">24h Beratungstermin</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <BackButton />

      <div className="container mx-auto px-6 lg:px-12 pt-8 pb-12 max-w-4xl">
        <div className="prose prose-lg text-muted-foreground">
          
          {/* Inhaltsübersicht */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-8 not-prose">
            <h3 className="font-bold text-secondary mb-4">Inhaltsübersicht</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <li><a href="#praeambel" className="text-primary hover:underline">Präambel</a></li>
              <li><a href="#verantwortlicher" className="text-primary hover:underline">Verantwortlicher</a></li>
              <li><a href="#verarbeitungen" className="text-primary hover:underline">Übersicht der Verarbeitungen</a></li>
              <li><a href="#rechtsgrundlagen" className="text-primary hover:underline">Maßgebliche Rechtsgrundlagen</a></li>
              <li><a href="#sicherheit" className="text-primary hover:underline">Sicherheitsmaßnahmen</a></li>
              <li><a href="#uebermittlung" className="text-primary hover:underline">Übermittlung von Daten</a></li>
              <li><a href="#drittlaender" className="text-primary hover:underline">Internationale Datentransfers</a></li>
              <li><a href="#speicherung" className="text-primary hover:underline">Datenspeicherung und Löschung</a></li>
              <li><a href="#rechte" className="text-primary hover:underline">Rechte der betroffenen Personen</a></li>
              <li><a href="#webhosting" className="text-primary hover:underline">Webhosting</a></li>
              <li><a href="#cookies" className="text-primary hover:underline">Einsatz von Cookies</a></li>
              <li><a href="#ki" className="text-primary hover:underline">KI-Chatbot (OpenAI)</a></li>
              <li><a href="#kontakt" className="text-primary hover:underline">Kontakt- und Anfrageverwaltung</a></li>
            </ul>
          </div>

          <h2 id="praeambel" className="text-2xl font-bold text-secondary mt-8 mb-4">Präambel</h2>
          <p>
            Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer 
            personenbezogenen Daten (nachfolgend auch kurz als "Daten" bezeichnet) wir zu welchen Zwecken 
            und in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von uns durchgeführten 
            Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung unserer Leistungen als 
            auch insbesondere auf unseren Webseiten, in mobilen Applikationen sowie innerhalb externer 
            Onlinepräsenzen, wie z.B. unserer Social-Media-Profile (nachfolgend zusammenfassend bezeichnet 
            als "Onlineangebot").
          </p>
          <p>Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</p>

          <h2 id="verantwortlicher" className="text-2xl font-bold text-secondary mt-8 mb-4">Verantwortlicher</h2>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 my-4">
            <p className="font-bold text-secondary">089Dach GmbH</p>
            <p>Falko Georg Blöckinger<br />
            Thuillestr. 20<br />
            81247 München<br />
            Deutschland</p>
            <p className="mt-2">
              Telefon: +49 89 12621964<br />
              E-Mail: info@089dach.de
            </p>
          </div>

          <h2 id="verarbeitungen" className="text-2xl font-bold text-secondary mt-8 mb-4">Übersicht der Verarbeitungen</h2>
          <p>
            Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer 
            Verarbeitung zusammen und verweist auf die betroffenen Personen.
          </p>
          
          <h3 className="text-xl font-bold text-secondary mt-6 mb-3">Arten der verarbeiteten Daten</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Bestandsdaten</li>
            <li>Kontaktdaten</li>
            <li>Inhaltsdaten</li>
            <li>Nutzungsdaten</li>
            <li>Meta-, Kommunikations- und Verfahrensdaten</li>
            <li>Protokolldaten</li>
          </ul>

          <h3 className="text-xl font-bold text-secondary mt-6 mb-3">Kategorien betroffener Personen</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Kommunikationspartner</li>
            <li>Nutzer</li>
          </ul>

          <h3 className="text-xl font-bold text-secondary mt-6 mb-3">Zwecke der Verarbeitung</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Kommunikation</li>
            <li>Sicherheitsmaßnahmen</li>
            <li>Organisations- und Verwaltungsverfahren</li>
            <li>Feedback</li>
            <li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit</li>
            <li>Informationstechnische Infrastruktur</li>
          </ul>

          <h2 id="rechtsgrundlagen" className="text-2xl font-bold text-secondary mt-8 mb-4">Maßgebliche Rechtsgrundlagen</h2>
          <p>
            <strong>Maßgebliche Rechtsgrundlagen nach der DSGVO:</strong> Im Folgenden erhalten Sie eine 
            Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten.
          </p>
          
          <div className="space-y-4 not-prose my-6">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <div className="flex items-start gap-3">
                <Lock className="h-5 w-5 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-secondary">Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO)</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Die betroffene Person hat ihre Einwilligung in die Verarbeitung der sie betreffenden 
                    personenbezogenen Daten für einen spezifischen Zweck oder mehrere bestimmte Zwecke gegeben.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-secondary">Vertragserfüllung (Art. 6 Abs. 1 S. 1 lit. b) DSGVO)</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die 
                    betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, 
                    die auf Anfrage der betroffenen Person erfolgen.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-green-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-secondary">Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder 
                    eines Dritten notwendig, vorausgesetzt, dass die Interessen, Grundrechte und 
                    Grundfreiheiten der betroffenen Person nicht überwiegen.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 id="sicherheit" className="text-2xl font-bold text-secondary mt-8 mb-4">Sicherheitsmaßnahmen</h2>
          <p>
            Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik, 
            der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung 
            sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der Rechte 
            und Freiheiten natürlicher Personen geeignete technische und organisatorische Maßnahmen, um ein 
            dem Risiko angemessenes Schutzniveau zu gewährleisten.
          </p>
          <p>
            Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und 
            Verfügbarkeit von Daten durch Kontrolle des physischen und elektronischen Zugangs zu den Daten 
            als auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der Sicherung der 
            Verfügbarkeit und ihrer Trennung.
          </p>
          
          <div className="bg-green-50 p-4 rounded-xl border border-green-100 my-4">
            <p className="text-sm text-green-800">
              <strong>TLS-/SSL-Verschlüsselung (HTTPS):</strong> Um die Daten der Nutzer, die über unsere 
              Online-Dienste übertragen werden, vor unerlaubten Zugriffen zu schützen, setzen wir auf die 
              TLS-/SSL-Verschlüsselungstechnologie.
            </p>
          </div>

          <h2 id="uebermittlung" className="text-2xl font-bold text-secondary mt-8 mb-4">Übermittlung von personenbezogenen Daten</h2>
          <p>
            Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es vor, dass diese an andere 
            Stellen, Unternehmen, rechtlich selbstständige Organisationseinheiten oder Personen übermittelt 
            beziehungsweise ihnen gegenüber offengelegt werden. Zu den Empfängern dieser Daten können z.B. 
            mit IT-Aufgaben beauftragte Dienstleister gehören oder Anbieter von Diensten und Inhalten, die 
            in eine Website eingebunden sind. In solchen Fällen beachten wir die gesetzlichen Vorgaben und 
            schließen insbesondere entsprechende Verträge bzw. Vereinbarungen, die dem Schutz Ihrer Daten 
            dienen, mit den Empfängern Ihrer Daten ab.
          </p>

          <h2 id="drittlaender" className="text-2xl font-bold text-secondary mt-8 mb-4">Internationale Datentransfers</h2>
          <p>
            <strong>Datenverarbeitung in Drittländern:</strong> Sofern wir Daten in ein Drittland (d. h. 
            außerhalb der Europäischen Union (EU) oder des Europäischen Wirtschaftsraums (EWR)) übermitteln 
            oder dies im Rahmen der Nutzung von Diensten Dritter geschieht, erfolgt dies nur im Einklang 
            mit den gesetzlichen Vorgaben.
          </p>
          
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-4">
            <h4 className="font-bold text-secondary mb-2">Data Privacy Framework (DPF)</h4>
            <p className="text-sm text-muted-foreground">
              Für Datenübermittlungen in die USA stützen wir uns vorrangig auf das <strong>Data Privacy 
              Framework (DPF)</strong>, welches durch einen Angemessenheitsbeschluss der EU-Kommission vom 
              10.07.2023 als sicherer Rechtsrahmen anerkannt wurde. Zusätzlich haben wir mit den jeweiligen 
              Anbietern Standardvertragsklauseln abgeschlossen.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Weitere Informationen: <a href="https://www.dataprivacyframework.gov/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">dataprivacyframework.gov</a>
            </p>
          </div>

          <h2 id="speicherung" className="text-2xl font-bold text-secondary mt-8 mb-4">Allgemeine Informationen zur Datenspeicherung und Löschung</h2>
          <p>
            Wir löschen personenbezogene Daten, die wir verarbeiten, gemäß den gesetzlichen Bestimmungen, 
            sobald die zugrundeliegenden Einwilligungen widerrufen werden oder keine weiteren rechtlichen 
            Grundlagen für die Verarbeitung bestehen.
          </p>
          
          <h3 className="text-xl font-bold text-secondary mt-6 mb-3">Aufbewahrungsfristen nach deutschem Recht</h3>
          <div className="space-y-3 not-prose">
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <p className="font-bold text-secondary">10 Jahre</p>
              <p className="text-sm text-muted-foreground">
                Bücher, Jahresabschlüsse, Inventare, Lageberichte, Eröffnungsbilanz 
                (§ 147 Abs. 1 Nr. 1 i.V.m. Abs. 3 AO, § 14b Abs. 1 UStG, § 257 Abs. 1 Nr. 1 i.V.m. Abs. 4 HGB)
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <p className="font-bold text-secondary">6 Jahre</p>
              <p className="text-sm text-muted-foreground">
                Übrige Geschäftsunterlagen: Handels- oder Geschäftsbriefe, Kalkulationsunterlagen 
                (§ 147 Abs. 1 Nr. 2, 3, 5 i.V.m. Abs. 3 AO, § 257 Abs. 1 Nr. 2, 3 i.V.m. Abs. 4 HGB)
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <p className="font-bold text-secondary">3 Jahre</p>
              <p className="text-sm text-muted-foreground">
                Daten für Gewährleistungs- und Schadensersatzansprüche (§§ 195, 199 BGB)
              </p>
            </div>
          </div>

          <h2 id="rechte" className="text-2xl font-bold text-secondary mt-8 mb-4">Rechte der betroffenen Personen</h2>
          <p>
            Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die sich insbesondere aus 
            Art. 15 bis 21 DSGVO ergeben:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <h4 className="font-bold text-secondary text-sm">Widerspruchsrecht</h4>
              <p className="text-xs text-muted-foreground">Art. 21 DSGVO</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <h4 className="font-bold text-secondary text-sm">Widerrufsrecht bei Einwilligungen</h4>
              <p className="text-xs text-muted-foreground">Art. 7 Abs. 3 DSGVO</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <h4 className="font-bold text-secondary text-sm">Auskunftsrecht</h4>
              <p className="text-xs text-muted-foreground">Art. 15 DSGVO</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <h4 className="font-bold text-secondary text-sm">Recht auf Berichtigung</h4>
              <p className="text-xs text-muted-foreground">Art. 16 DSGVO</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <h4 className="font-bold text-secondary text-sm">Recht auf Löschung</h4>
              <p className="text-xs text-muted-foreground">Art. 17 DSGVO</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <h4 className="font-bold text-secondary text-sm">Recht auf Einschränkung</h4>
              <p className="text-xs text-muted-foreground">Art. 18 DSGVO</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <h4 className="font-bold text-secondary text-sm">Recht auf Datenübertragbarkeit</h4>
              <p className="text-xs text-muted-foreground">Art. 20 DSGVO</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <h4 className="font-bold text-secondary text-sm">Beschwerderecht</h4>
              <p className="text-xs text-muted-foreground">Art. 77 DSGVO</p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 my-4">
            <p className="font-bold text-secondary">Zuständige Aufsichtsbehörde:</p>
            <p className="text-muted-foreground mt-2">
              Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)<br />
              Promenade 27<br />
              91522 Ansbach<br />
              www.lda.bayern.de
            </p>
          </div>

          <h2 id="webhosting" className="text-2xl font-bold text-secondary mt-8 mb-4">Bereitstellung des Onlineangebots und Webhosting</h2>
          <p>
            Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste zur Verfügung stellen zu 
            können. Zu diesem Zweck verarbeiten wir die IP-Adresse des Nutzers, die notwendig ist, um die 
            Inhalte und Funktionen unserer Online-Dienste an den Browser oder das Endgerät der Nutzer zu 
            übermitteln.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 my-4">
            <h4 className="font-bold text-secondary mb-2">Erhebung von Zugriffsdaten und Logfiles</h4>
            <p className="text-sm text-muted-foreground">
              Der Zugriff auf unser Onlineangebot wird in Form von "Server-Logfiles" protokolliert. 
              Zu den Serverlogfiles können gehören: Adresse und Name der abgerufenen Webseiten, Datum 
              und Uhrzeit des Abrufs, übertragene Datenmengen, Browsertyp, Betriebssystem, Referrer URL 
              und IP-Adressen.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              <strong>Rechtsgrundlage:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)<br />
              <strong>Löschung:</strong> Logfile-Informationen werden für maximal 30 Tage gespeichert.
            </p>
          </div>

          <h2 id="cookies" className="text-2xl font-bold text-secondary mt-8 mb-4">Einsatz von Cookies</h2>
          <p>
            Unter dem Begriff "Cookies" werden Funktionen verstanden, die Informationen auf Endgeräten der 
            Nutzer speichern und aus ihnen auslesen. Cookies können zu unterschiedlichen Zwecken eingesetzt 
            werden, etwa für Funktionsfähigkeit, Sicherheit, Komfort und Analysen.
          </p>
          <p>
            Wir verwenden Cookies gemäß den gesetzlichen Vorschriften. Dazu holen wir, wenn erforderlich, 
            vorab die Zustimmung der Nutzer ein.
          </p>
          
          <div className="space-y-3 not-prose my-4">
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <p className="font-bold text-secondary">Temporäre Cookies (Session-Cookies)</p>
              <p className="text-sm text-muted-foreground">
                Werden gelöscht, nachdem der Nutzer das Onlineangebot verlassen und den Browser geschlossen hat.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <p className="font-bold text-secondary">Permanente Cookies</p>
              <p className="text-sm text-muted-foreground">
                Bleiben auch nach dem Schließen des Browsers gespeichert (z.B. für Anmeldestatus).
              </p>
            </div>
          </div>
          
          <p>
            Weitere Informationen finden Sie in unserer <a href="/cookies" className="text-primary hover:underline">Cookie-Richtlinie</a>.
          </p>

          {/* KI-Chatbot Section */}
          <div className="bg-primary text-white p-8 rounded-xl my-8 not-prose">
            <div className="flex items-start gap-4">
              <Bot className="h-8 w-8 text-white shrink-0" />
              <div>
                <h2 id="ki" className="text-2xl font-heading font-bold mb-4">KI-Chatbot (OpenAI)</h2>
                
                <div className="bg-white/10 p-4 rounded-xl mb-4">
                  <h4 className="font-bold text-white mb-2">Hinweis gemäß Art. 50 EU AI Act</h4>
                  <p className="text-sm text-white/80">
                    Auf unserer Website setzen wir einen KI-gestützten Chatbot ein, um Ihnen rund um die Uhr 
                    Informationen zu unseren Dienstleistungen bereitzustellen und Anfragen entgegenzunehmen. 
                    Der Chatbot wird deutlich als KI-System gekennzeichnet.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/10 p-4 rounded-xl">
                    <h4 className="font-bold text-white mb-2">Anbieter</h4>
                    <p className="text-sm text-white/80">
                      OpenAI, L.L.C., 3180 18th Street, San Francisco, CA 94110, USA<br />
                      OpenAI ist nach dem EU-US Data Privacy Framework zertifiziert. Zusätzlich haben wir 
                      Standardvertragsklauseln mit OpenAI abgeschlossen.
                    </p>
                  </div>

                  <div className="bg-white/10 p-4 rounded-xl">
                    <h4 className="font-bold text-white mb-2">Verarbeitete Datenarten</h4>
                    <p className="text-sm text-white/80">
                      Inhaltsdaten (Ihre Chatnachrichten und Anfragen); Meta-, Kommunikations- und 
                      Verfahrensdaten (IP-Adresse, Zeitstempel).
                    </p>
                  </div>

                  <div className="bg-white/10 p-4 rounded-xl">
                    <h4 className="font-bold text-white mb-2">Zwecke der Verarbeitung</h4>
                    <p className="text-sm text-white/80">
                      Beantwortung von Anfragen zu unseren Dienstleistungen; Terminvereinbarung; 
                      Erstberatung; Weiterleitung von Rückrufwünschen.
                    </p>
                  </div>

                  <div className="bg-white/10 p-4 rounded-xl">
                    <h4 className="font-bold text-white mb-2">Rechtsgrundlagen</h4>
                    <p className="text-sm text-white/80">
                      Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO); Vertragserfüllung und 
                      vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).
                    </p>
                  </div>

                  <div className="bg-white/10 p-4 rounded-xl">
                    <h4 className="font-bold text-white mb-2">Speicherdauer</h4>
                    <p className="text-sm text-white/80">
                      Chatnachrichten werden nur für die Dauer der Sitzung verarbeitet und nicht dauerhaft 
                      gespeichert. Bei Terminanfragen werden die relevanten Daten zur Bearbeitung an unser 
                      Team weitergeleitet.
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-500/20 border border-yellow-500/40 p-4 rounded-xl mt-4">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-white">
                      <strong>Wichtiger Hinweis:</strong> Bitte geben Sie im Chat keine sensiblen 
                      personenbezogenen Daten ein (z.B. Gesundheitsdaten, religiöse Überzeugungen gem. 
                      Art. 9 DSGVO). Für vertrauliche Anfragen nutzen Sie bitte unser Kontaktformular oder 
                      rufen Sie uns direkt an.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 id="kontakt" className="text-2xl font-bold text-secondary mt-8 mb-4">Kontakt- und Anfrageverwaltung</h2>
          <p>
            Bei der Kontaktaufnahme mit uns (z.B. per Post, Kontaktformular, E-Mail, Telefon oder via 
            soziale Medien) sowie im Rahmen bestehender Nutzer- und Geschäftsbeziehungen werden die 
            Angaben der anfragenden Personen verarbeitet, soweit dies zur Beantwortung der Kontaktanfragen 
            und etwaiger angefragter Maßnahmen erforderlich ist.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 my-4">
            <h4 className="font-bold text-secondary mb-2">Verarbeitete Datenarten</h4>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
              <li>Bestandsdaten (Name, Adresse, Kundennummer)</li>
              <li>Kontaktdaten (E-Mail-Adressen, Telefonnummern)</li>
              <li>Inhaltsdaten (Nachrichten und Anfragen)</li>
              <li>Nutzungsdaten (Seitenaufrufe, Klickpfade)</li>
              <li>Meta-, Kommunikations- und Verfahrensdaten (IP-Adressen, Zeitangaben)</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-4">
              <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO); 
              Vertragserfüllung (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).
            </p>
          </div>

          <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">Fragen zum Datenschutz?</h2>
          <div className="bg-secondary text-white p-6 rounded-xl my-4">
            <p className="text-gray-300">
              Kontaktieren Sie uns unter <strong className="text-white">info@089dach.de</strong> oder 
              telefonisch unter <strong className="text-white">+49 89 12621964</strong>.
            </p>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            <strong>Stand:</strong> Dezember 2025
          </p>

        </div>
      </div>
      
      <Footer />
    </div>
  );
}
