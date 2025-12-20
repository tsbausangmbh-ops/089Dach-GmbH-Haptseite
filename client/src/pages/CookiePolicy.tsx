import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { Shield, Cookie, Bot, Scale, Lock, FileText, AlertTriangle, Globe, Server, Database, Users, Phone } from "lucide-react";
import heroImage from "@assets/generated_images/professional_office_legal_documents.png";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title="Cookie-Richtlinie, DSGVO & EU AI Act | 089Dach GmbH München"
        description="Vollständige Cookie-Richtlinie nach DSGVO, TDDDG, EU AI Act, Digital Services Act und Data Act. Stand Dezember 2025."
        canonical="https://089dach.de/cookies"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-6 pb-8 md:pt-10 md:pb-12 relative overflow-hidden min-h-[40vh] md:min-h-[50vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Cookie-Richtlinie 089Dach GmbH München"
            className="w-full h-full object-cover"
            width={1792}
            height={1024}
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/70"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl text-white">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">EU-Recht konform</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mt-4 mb-4 md:mb-6">
              Cookie-Richtlinie & Datenschutz
            </h1>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border-l-4 border-primary mb-8">
              <p className="text-lg text-white font-medium mb-3">
                Transparenz bei Cookies und Datenverarbeitung.
              </p>
              <p className="text-gray-200 leading-relaxed mb-4">
                Konform mit DSGVO, TDDDG, EU AI Act, Digital Services Act und Data Act. 
                <strong className="text-white"> Ihre Privatsphäre ist uns wichtig.</strong>
              </p>
              <p className="text-gray-200 leading-relaxed">
                <strong className="text-white">Stand: Dezember 2025</strong> | Gilt für den Europäischen Wirtschaftsraum
              </p>
            </div>
            
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              <strong className="text-white">Fragen zu Cookies?</strong> Wir helfen Ihnen gerne weiter.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-xl" data-testid="button-hero-call">
                <a href="/rueckruf">
                  <Phone className="mr-2 h-5 w-5" />
                  Rückruf anfordern
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-secondary font-bold rounded-xl" data-testid="button-hero-content">
                <a href="/beratung">24h Beratungstermin</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <BackButton />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-12 pt-2 md:pt-4 pb-8 md:pb-12 max-w-6xl">
        <div className="prose prose-lg text-muted-foreground">
          
          {/* Rechtsgrundlagen Box */}
          <div className="bg-secondary text-white p-8 rounded-xl mb-8 not-prose">
            <div className="flex items-start gap-4">
              <Scale className="h-8 w-8 text-primary shrink-0" />
              <div>
                <h2 className="text-xl font-heading font-bold mb-4">Anwendbare EU-Rechtsvorschriften (Stand 12/2025)</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/10 p-4 rounded-xl">
                    <h4 className="font-bold text-white text-sm">DSGVO</h4>
                    <p className="text-xs text-gray-300">Verordnung (EU) 2016/679</p>
                    <p className="text-xs text-gray-400 mt-1">Datenschutz-Grundverordnung</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl">
                    <h4 className="font-bold text-white text-sm">BDSG</h4>
                    <p className="text-xs text-gray-300">Bundesdatenschutzgesetz 2018</p>
                    <p className="text-xs text-gray-400 mt-1">Nationale Ergänzung zur DSGVO</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl">
                    <h4 className="font-bold text-white text-sm">TDDDG</h4>
                    <p className="text-xs text-gray-300">Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz</p>
                    <p className="text-xs text-gray-400 mt-1">Seit 14.05.2024 (ehem. TTDSG)</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl">
                    <h4 className="font-bold text-white text-sm">EU AI Act</h4>
                    <p className="text-xs text-gray-300">Verordnung (EU) 2024/1689</p>
                    <p className="text-xs text-gray-400 mt-1">KI-Verordnung, in Kraft seit 02/2025</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl">
                    <h4 className="font-bold text-white text-sm">DSA</h4>
                    <p className="text-xs text-gray-300">Verordnung (EU) 2022/2065</p>
                    <p className="text-xs text-gray-400 mt-1">Digital Services Act</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl">
                    <h4 className="font-bold text-white text-sm">Data Act</h4>
                    <p className="text-xs text-gray-300">Verordnung (EU) 2023/2854</p>
                    <p className="text-xs text-gray-400 mt-1">EU-Datenverordnung</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl">
                    <h4 className="font-bold text-white text-sm">EinwV</h4>
                    <p className="text-xs text-gray-300">Einwilligungsverordnung</p>
                    <p className="text-xs text-gray-400 mt-1">Seit 01.04.2025</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl">
                    <h4 className="font-bold text-white text-sm">NIS2</h4>
                    <p className="text-xs text-gray-300">Richtlinie (EU) 2022/2555</p>
                    <p className="text-xs text-gray-400 mt-1">Cybersicherheit, DE-Umsetzung 11/2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">1. Verantwortlicher (Art. 4 Nr. 7 DSGVO)</h2>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 my-4">
            <p className="font-bold text-secondary">089Dach GmbH</p>
            <p>Thuillestr. 20<br />81247 München-Obermenzing<br />Deutschland</p>
            <p className="mt-2">
              Telefon: 089 12621964<br />
              E-Mail: info@089dach.de<br />
              Website: https://089dach.de
            </p>
          </div>

          <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">2. Was sind Cookies? (§ 25 TDDDG)</h2>
          <p>
            Cookies sind kleine Textdateien, die beim Besuch einer Website auf Ihrem Endgerät gespeichert werden. 
            Gemäß <strong>§ 25 TDDDG</strong> (früher TTDSG) erfordert das Speichern von und der Zugriff auf 
            Informationen auf Ihrem Endgerät Ihre vorherige Einwilligung, sofern nicht eine gesetzliche Ausnahme greift.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">3. Rechtsgrundlagen der Verarbeitung</h2>
          
          <div className="space-y-4 not-prose">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <div className="flex items-start gap-3">
                <Lock className="h-5 w-5 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-secondary">§ 25 Abs. 1 TDDDG – Einwilligung für Cookies</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Das Speichern von und der Zugriff auf Informationen auf Ihrem Endgerät erfordert Ihre 
                    vorherige, informierte und freiwillige Einwilligung.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-green-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-secondary">§ 25 Abs. 2 TDDDG – Technisch notwendige Cookies</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Cookies, die unbedingt erforderlich sind, um einen von Ihnen ausdrücklich gewünschten 
                    Dienst bereitzustellen, benötigen keine Einwilligung.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-secondary">Art. 6 Abs. 1 lit. a DSGVO – Einwilligung</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Die Verarbeitung personenbezogener Daten ist rechtmäßig, wenn Sie Ihre Einwilligung 
                    zu einem oder mehreren bestimmten Zwecken gegeben haben.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-secondary">Art. 6 Abs. 1 lit. b DSGVO – Vertragserfüllung</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Die Verarbeitung ist für die Erfüllung eines Vertrags oder zur Durchführung 
                    vorvertraglicher Maßnahmen erforderlich.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-secondary">Art. 6 Abs. 1 lit. f DSGVO – Berechtigtes Interesse</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    In bestimmten Fällen kann die Verarbeitung auf Grundlage unserer berechtigten Interessen 
                    erfolgen, sofern Ihre Interessen oder Grundrechte nicht überwiegen.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">4. Cookie-Kategorien</h2>
          
          <h3 className="text-xl font-bold text-secondary mt-6 mb-2">4.1 Technisch notwendige Cookies</h3>
          <p>
            Diese Cookies sind für den Betrieb der Website unbedingt erforderlich und können nicht deaktiviert werden.
          </p>
          <div className="bg-green-50 p-4 rounded-xl border border-green-100 my-4">
            <p className="text-sm text-green-800"><strong>Rechtsgrundlage:</strong> § 25 Abs. 2 Nr. 2 TDDDG (keine Einwilligung erforderlich)</p>
          </div>

          <h3 className="text-xl font-bold text-secondary mt-6 mb-2">4.2 Funktionale Cookies</h3>
          <p>
            Ermöglichen erweiterte Funktionen und Personalisierung, wie Spracheinstellungen.
          </p>
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 my-4">
            <p className="text-sm text-blue-800"><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung erforderlich)</p>
          </div>

          <h3 className="text-xl font-bold text-secondary mt-6 mb-2">4.3 Analyse-Cookies</h3>
          <p>
            Ermöglichen uns, Besuche und Besucherquellen zu zählen, um die Leistung unserer Website zu messen.
          </p>
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 my-4">
            <p className="text-sm text-blue-800"><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung erforderlich)</p>
          </div>

          <h3 className="text-xl font-bold text-secondary mt-6 mb-2">4.4 Marketing-Cookies</h3>
          <p>
            Können von Werbepartnern gesetzt werden, um ein Profil Ihrer Interessen zu erstellen.
          </p>
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 my-4">
            <p className="text-sm text-blue-800"><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung erforderlich)</p>
          </div>

          {/* EU AI Act Section */}
          <div className="bg-primary text-white p-8 rounded-xl my-8 not-prose">
            <div className="flex items-start gap-4">
              <Bot className="h-8 w-8 text-white shrink-0" />
              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">5. Künstliche Intelligenz (EU AI Act)</h2>
                <p className="text-white/80 mb-4">
                  Gemäß der <strong className="text-white">Verordnung (EU) 2024/1689</strong> über Künstliche Intelligenz 
                  (EU AI Act), die seit dem 2. Februar 2025 schrittweise in Kraft tritt, informieren wir Sie:
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white/10 p-4 rounded-xl">
                    <h4 className="font-bold text-white mb-2">Art. 50 – Transparenzpflichten</h4>
                    <p className="text-sm text-white/80">
                      Betreiber von KI-Systemen mit begrenztem Risiko (z.B. Chatbots) müssen sicherstellen, 
                      dass Nutzer wissen, dass sie mit einem KI-System interagieren.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-xl">
                    <h4 className="font-bold text-white mb-2">Unser Status</h4>
                    <p className="text-sm text-white/80">
                      <strong>089Dach GmbH setzt derzeit keine KI-Systeme ein</strong>, die unter die 
                      Transparenzpflichten des EU AI Act fallen. Unsere Kontaktformulare werden von 
                      Mitarbeitern persönlich bearbeitet – ohne KI-gestützte automatisierte Entscheidungsfindung.
                    </p>
                  </div>

                  <div className="bg-white/10 p-4 rounded-xl">
                    <h4 className="font-bold text-white mb-2">Art. 5 – Verbotene Praktiken (seit 02.02.2025)</h4>
                    <p className="text-sm text-white/80">
                      Wir verwenden keine KI-Systeme für: unterschwellige Manipulation, Ausnutzung von 
                      Schwachstellen, Social Scoring oder biometrische Echtzeit-Identifizierung.
                    </p>
                  </div>

                  <div className="bg-white/10 p-4 rounded-xl">
                    <h4 className="font-bold text-white mb-2">Zeitplan EU AI Act</h4>
                    <ul className="text-sm text-white/80 space-y-1">
                      <li>• 02.02.2025: Verbotene Praktiken & KI-Kompetenz</li>
                      <li>• 02.08.2025: GPAI-Modellpflichten</li>
                      <li>• 02.08.2026: Vollständige Durchsetzung Hochrisiko-KI</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Digital Services Act Section */}
          <div className="bg-blue-900 text-white p-8 rounded-xl my-8 not-prose">
            <div className="flex items-start gap-4">
              <Globe className="h-8 w-8 text-blue-300 shrink-0" />
              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">6. Digital Services Act (DSA)</h2>
                <p className="text-white/80 mb-4">
                  Der <strong className="text-white">Digital Services Act (Verordnung (EU) 2022/2065)</strong> gilt 
                  seit dem 17. Februar 2024 für alle Online-Vermittlungsdienste. In Deutschland wird er durch das 
                  <strong className="text-white"> Digitale-Dienste-Gesetz (DDG)</strong> ergänzt.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white/10 p-4 rounded-xl">
                    <h4 className="font-bold text-white mb-2">Unser Status</h4>
                    <p className="text-sm text-white/80">
                      Als Website eines Handwerksbetriebs fallen wir nicht unter die Kategorie der 
                      Online-Plattformen oder Vermittlungsdienste. Der DSA findet auf unsere Website 
                      nur begrenzt Anwendung.
                    </p>
                  </div>

                  <div className="bg-white/10 p-4 rounded-xl">
                    <h4 className="font-bold text-white mb-2">Zuständige Behörde in Deutschland</h4>
                    <p className="text-sm text-white/80">
                      <strong>Bundesnetzagentur</strong> als Digital Services Coordinator (DSC)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Act Section */}
          <div className="bg-purple-900 text-white p-8 rounded-xl my-8 not-prose">
            <div className="flex items-start gap-4">
              <Database className="h-8 w-8 text-purple-300 shrink-0" />
              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">7. EU Data Act</h2>
                <p className="text-white/80 mb-4">
                  Der <strong className="text-white">Data Act (Verordnung (EU) 2023/2854)</strong> regelt den 
                  fairen Zugang zu und die Nutzung von Daten und tritt schrittweise in Kraft.
                </p>
                
                <div className="bg-white/10 p-4 rounded-xl">
                  <h4 className="font-bold text-white mb-2">Relevanz für unsere Website</h4>
                  <p className="text-sm text-white/80">
                    Der Data Act betrifft primär IoT-Geräte und industrielle Daten. Als 
                    Handwerksbetrieb ohne vernetzte Produkte fallen wir derzeit nicht unter 
                    die Hauptpflichten des Data Act.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* NIS2 Section */}
          <div className="bg-orange-900 text-white p-8 rounded-xl my-8 not-prose">
            <div className="flex items-start gap-4">
              <Server className="h-8 w-8 text-orange-300 shrink-0" />
              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">8. NIS2-Richtlinie (Cybersicherheit)</h2>
                <p className="text-white/80 mb-4">
                  Die <strong className="text-white">NIS2-Richtlinie (EU) 2022/2555</strong> wurde in Deutschland 
                  am 13. November 2025 durch den Bundestag verabschiedet.
                </p>
                
                <div className="bg-white/10 p-4 rounded-xl">
                  <h4 className="font-bold text-white mb-2">Unser Status</h4>
                  <p className="text-sm text-white/80">
                    Als kleines Handwerksunternehmen fallen wir nicht unter die Größenschwellen 
                    der NIS2-Richtlinie. Dennoch setzen wir angemessene technische und 
                    organisatorische Sicherheitsmaßnahmen zum Schutz Ihrer Daten ein.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* EinwV Section */}
          <div className="bg-teal-900 text-white p-8 rounded-xl my-8 not-prose">
            <div className="flex items-start gap-4">
              <Users className="h-8 w-8 text-teal-300 shrink-0" />
              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">9. Einwilligungsverordnung (EinwV)</h2>
                <p className="text-white/80 mb-4">
                  Die <strong className="text-white">Einwilligungsverordnung (EinwV)</strong> ist am 
                  1. April 2025 in Kraft getreten und ermöglicht zentrale Einwilligungsverwaltungsdienste.
                </p>
                
                <div className="bg-white/10 p-4 rounded-xl">
                  <h4 className="font-bold text-white mb-2">Status</h4>
                  <p className="text-sm text-white/80">
                    Sobald vom BfDI anerkannte Consent Management Dienste verfügbar sind, 
                    werden wir die Integration prüfen, um Ihnen die Verwaltung Ihrer 
                    Cookie-Einwilligungen zu erleichtern.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">10. Aktuell verwendete Cookies</h2>
          
          <div className="space-y-4 not-prose">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-secondary">cookie-consent</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Speichert Ihre Cookie-Einwilligung gemäß § 25 TDDDG
                  </p>
                </div>
                <div className="text-right text-sm">
                  <p className="text-green-600 font-medium">Notwendig</p>
                  <p className="text-muted-foreground">1 Jahr</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
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

          <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">11. Ihre Rechte nach DSGVO</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <h4 className="font-bold text-secondary text-sm">Art. 15 DSGVO</h4>
              <p className="text-sm text-muted-foreground">Auskunftsrecht</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <h4 className="font-bold text-secondary text-sm">Art. 16 DSGVO</h4>
              <p className="text-sm text-muted-foreground">Recht auf Berichtigung</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <h4 className="font-bold text-secondary text-sm">Art. 17 DSGVO</h4>
              <p className="text-sm text-muted-foreground">Recht auf Löschung („Recht auf Vergessenwerden")</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <h4 className="font-bold text-secondary text-sm">Art. 18 DSGVO</h4>
              <p className="text-sm text-muted-foreground">Recht auf Einschränkung der Verarbeitung</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <h4 className="font-bold text-secondary text-sm">Art. 20 DSGVO</h4>
              <p className="text-sm text-muted-foreground">Recht auf Datenübertragbarkeit</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <h4 className="font-bold text-secondary text-sm">Art. 21 DSGVO</h4>
              <p className="text-sm text-muted-foreground">Widerspruchsrecht</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <h4 className="font-bold text-secondary text-sm">Art. 22 DSGVO</h4>
              <p className="text-sm text-muted-foreground">Automatisierte Entscheidungen im Einzelfall</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <h4 className="font-bold text-secondary text-sm">Art. 77 DSGVO</h4>
              <p className="text-sm text-muted-foreground">Beschwerderecht bei Aufsichtsbehörde</p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-xl my-6 not-prose">
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

          <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">12. Beschwerderecht (Art. 77 DSGVO)</h2>
          <p>
            Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren, wenn Sie der 
            Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt.
          </p>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 my-4">
            <p className="font-bold text-secondary">Zuständige Aufsichtsbehörde für Bayern:</p>
            <p className="text-muted-foreground mt-2">
              <strong>Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)</strong><br />
              Promenade 18<br />
              91522 Ansbach<br />
              Tel.: 0981 180093-0<br />
              E-Mail: poststelle@lda.bayern.de<br />
              Website: www.lda.bayern.de
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 my-4">
            <p className="font-bold text-secondary">Bundesbeauftragte für den Datenschutz (BfDI):</p>
            <p className="text-muted-foreground mt-2">
              Die Bundesbeauftragte für den Datenschutz und die Informationsfreiheit<br />
              Graurheindorfer Str. 153<br />
              53117 Bonn<br />
              Website: www.bfdi.bund.de
            </p>
          </div>

          <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">13. Sanktionen bei Verstößen</h2>
          <div className="space-y-4 not-prose">
            <div className="bg-red-50 p-4 rounded-xl border border-red-100">
              <h4 className="font-bold text-red-800">DSGVO (Art. 83)</h4>
              <p className="text-sm text-red-700">Bis zu 20 Mio. € oder 4% des weltweiten Jahresumsatzes</p>
            </div>
            <div className="bg-red-50 p-4 rounded-xl border border-red-100">
              <h4 className="font-bold text-red-800">TDDDG (§ 25)</h4>
              <p className="text-sm text-red-700">Bis zu 300.000 € bei Cookie-Verstößen</p>
            </div>
            <div className="bg-red-50 p-4 rounded-xl border border-red-100">
              <h4 className="font-bold text-red-800">EU AI Act</h4>
              <p className="text-sm text-red-700">Bis zu 35 Mio. € oder 7% des weltweiten Jahresumsatzes</p>
            </div>
            <div className="bg-red-50 p-4 rounded-xl border border-red-100">
              <h4 className="font-bold text-red-800">DSA</h4>
              <p className="text-sm text-red-700">Bis zu 6% des weltweiten Jahresumsatzes</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">14. Cookies verwalten</h2>
          <p>
            Sie können Ihre Cookie-Einstellungen jederzeit über unser Cookie-Banner oder die 
            Browser-Einstellungen anpassen:
          </p>
          
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 my-4">
            <ul className="space-y-2 text-muted-foreground">
              <li><strong>Chrome:</strong> Einstellungen → Datenschutz und Sicherheit → Cookies</li>
              <li><strong>Firefox:</strong> Einstellungen → Datenschutz & Sicherheit → Cookies</li>
              <li><strong>Safari:</strong> Einstellungen → Datenschutz → Cookies verwalten</li>
              <li><strong>Edge:</strong> Einstellungen → Cookies und Websiteberechtigungen</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">15. Änderungen dieser Richtlinie</h2>
          <p>
            Wir behalten uns vor, diese Cookie-Richtlinie bei Bedarf zu aktualisieren, um rechtliche 
            Anforderungen zu erfüllen oder Änderungen unserer Dienste widerzuspiegeln. Das Datum der 
            letzten Aktualisierung finden Sie am Anfang dieser Seite.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">16. Kontakt</h2>
          <div className="bg-secondary text-white p-6 rounded-xl my-4">
            <p className="font-bold text-lg">089Dach GmbH</p>
            <p className="text-gray-300 mt-2">
              Thuillestr. 20, 81247 München-Obermenzing<br />
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
