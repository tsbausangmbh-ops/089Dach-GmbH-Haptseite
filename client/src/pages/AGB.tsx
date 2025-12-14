import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import SEO, { BreadcrumbSchema } from "@/components/SEO";
import { Scale, FileText, Shield, AlertTriangle, Clock, Hammer, CheckCircle2, Phone } from "lucide-react";
import heroImage from "@assets/generated_images/professional_office_legal_documents.png";

export default function AGB() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title="AGB - Allgemeine Geschäftsbedingungen | 089Dach GmbH München"
        description="Allgemeine Geschäftsbedingungen der 089Dach GmbH für Dachdeckerarbeiten nach BGB §650a-c Bauvertragsrecht. Stand Dezember 2025."
        canonical="https://089dach.de/agb"
        keywords="agb allgemeine geschäftsbedingungen 089dach, bauvertragsrecht bgb 650a 650b 650c dachdeckerarbeiten, werkvertrag abnahme gewährleistung 5 jahre mängelansprüche, zahlungsbedingungen abschlagszahlung bauhandwerkersicherung, widerrufsrecht verbraucher 14 tage"
        aiSummary="089Dach GmbH AGB: Allgemeine Geschäftsbedingungen für Dachdeckerarbeiten nach BGB §650a-650v Bauvertragsrecht. 5 Jahre Gewährleistung, 14 Tage Widerrufsrecht für Verbraucher. Stand Dezember 2025. Gerichtsstand München."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "AGB", url: "/agb" }]} />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-6 pb-8 md:pt-10 md:pb-12 relative overflow-hidden min-h-[40vh] md:min-h-[50vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="AGB 089Dach GmbH München"
            className="w-full h-full object-cover"
            width={1792}
            height={1024}
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/70"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
          <div className="max-w-2xl text-white">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Rechtliches</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mt-4 mb-4 md:mb-6">
              Allgemeine Geschäftsbedingungen
            </h1>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border-l-4 border-primary mb-8">
              <p className="text-lg text-white font-medium mb-3">
                Klare Regeln für eine faire Zusammenarbeit.
              </p>
              <p className="text-gray-200 leading-relaxed mb-4">
                Unsere AGB nach BGB §650a-v Bauvertragsrecht. <strong className="text-white">Transparent und rechtssicher.</strong>
              </p>
              <p className="text-gray-200 leading-relaxed">
                <strong className="text-white">Stand: Dezember 2025</strong> | 5 Jahre Gewährleistung | 14 Tage Widerrufsrecht
              </p>
            </div>
            
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              <strong className="text-white">Fragen zu unseren AGB?</strong> Wir erklären Ihnen gerne alles persönlich.
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
      
      <div className="container mx-auto px-4 md:px-6 lg:px-12 pt-2 md:pt-4 pb-8 md:pb-12 max-w-4xl">
        <div className="prose prose-lg text-muted-foreground">
          
          {/* Rechtsgrundlagen Box */}
          <div className="bg-secondary text-white p-8 rounded-xl mb-8 not-prose">
            <div className="flex items-start gap-4">
              <Scale className="h-8 w-8 text-primary shrink-0" />
              <div>
                <h2 className="text-xl font-heading font-bold mb-4">Anwendbare Rechtsvorschriften</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/10 p-4 rounded-xl">
                    <h4 className="font-bold text-white text-sm">BGB §§ 650a-650v</h4>
                    <p className="text-xs text-gray-300">Bauvertragsrecht</p>
                    <p className="text-xs text-gray-400 mt-1">Seit 01.01.2018</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl">
                    <h4 className="font-bold text-white text-sm">BGB §§ 631-651</h4>
                    <p className="text-xs text-gray-300">Werkvertragsrecht</p>
                    <p className="text-xs text-gray-400 mt-1">Allgemeine Regelungen</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl">
                    <h4 className="font-bold text-white text-sm">BGB §§ 305-310</h4>
                    <p className="text-xs text-gray-300">AGB-Recht</p>
                    <p className="text-xs text-gray-400 mt-1">Inhaltskontrolle</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl">
                    <h4 className="font-bold text-white text-sm">VOB/B</h4>
                    <p className="text-xs text-gray-300">Vergabe- und Vertragsordnung für Bauleistungen</p>
                    <p className="text-xs text-gray-400 mt-1">Bei Vereinbarung</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">§ 1 Geltungsbereich</h2>
          <p>
            (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB") gelten für alle Verträge zwischen der
          </p>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 my-4">
            <p className="font-bold text-secondary">089Dach GmbH</p>
            <p>Geschäftsführer: Falko Georg Blöckinger<br />
            Thuillestr. 20<br />
            81247 München-Obermenzing<br />
            Deutschland</p>
            <p className="mt-2">
              Telefon: +49 89 12621964<br />
              E-Mail: info@089dach.de
            </p>
          </div>
          <p>
            – nachfolgend „Auftragnehmer" genannt – und ihren Vertragspartnern – nachfolgend „Auftraggeber" genannt – 
            über die Erbringung von Dachdeckerarbeiten, Spenglerarbeiten und verwandten Bauleistungen.
          </p>
          <p>
            (2) Es gelten ausschließlich diese AGB. Abweichende, entgegenstehende oder ergänzende Allgemeine 
            Geschäftsbedingungen des Auftraggebers werden nur dann Vertragsbestandteil, wenn der Auftragnehmer 
            ihrer Geltung ausdrücklich schriftlich zugestimmt hat.
          </p>
          <p>
            (3) Diese AGB gelten auch für alle künftigen Geschäfte mit dem Auftraggeber.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">§ 2 Vertragsgegenstand (§ 650a BGB)</h2>
          <p>
            (1) Der Auftragnehmer erbringt Bauleistungen im Sinne des <strong>§ 650a BGB</strong> (Bauvertrag). 
            Der Auftragnehmer verpflichtet sich zur Herstellung, Wiederherstellung, Beseitigung oder zum 
            Umbau eines Bauwerks, einer Außenanlage oder eines Teils davon.
          </p>
          <p>
            (2) Der genaue Leistungsumfang ergibt sich aus dem individuellen Angebot bzw. der 
            Auftragsbestätigung des Auftragnehmers.
          </p>
          <p>
            (3) Die Leistungen umfassen insbesondere:
          </p>
          <ul className="list-disc list-inside space-y-2 my-4">
            <li>Dacheindeckungen (Steildach und Flachdach)</li>
            <li>Dachsanierungen und Dachreparaturen</li>
            <li>Wärmedämmung und Dachdämmung</li>
            <li>Dachfenstereinbau und -austausch</li>
            <li>Spenglerarbeiten (Dachrinnen, Fallrohre, Blecharbeiten)</li>
            <li>Fassadenverkleidungen</li>
            <li>Schnelle Reparaturen und Sturmschadenbeseitigung</li>
          </ul>

          {/* Anordnungsrecht Box */}
          <div className="bg-primary text-white p-8 rounded-xl my-8 not-prose">
            <div className="flex items-start gap-4">
              <Hammer className="h-8 w-8 text-white shrink-0" />
              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">§ 3 Änderung des Vertrags (§ 650b BGB)</h2>
                <div className="space-y-4">
                  <div className="bg-white/10 p-4 rounded-xl">
                    <h4 className="font-bold text-white mb-2">Anordnungsrecht des Auftraggebers</h4>
                    <p className="text-sm text-white/80">
                      (1) Der Auftraggeber kann gemäß <strong>§ 650b Abs. 1 BGB</strong> eine Änderung des 
                      vereinbarten Werkerfolgs oder eine Änderung, die zur Erreichung des vereinbarten 
                      Werkerfolgs notwendig ist, verlangen.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-xl">
                    <h4 className="font-bold text-white mb-2">Angebotspflicht des Auftragnehmers</h4>
                    <p className="text-sm text-white/80">
                      (2) Auf Verlangen des Auftraggebers ist der Auftragnehmer verpflichtet, ein Angebot 
                      über die Mehr- oder Mindervergütung zu erstellen, es sei denn, die Ausführung der 
                      Änderung ist für ihn unzumutbar.
                    </p>
                  </div>

                  <div className="bg-white/10 p-4 rounded-xl">
                    <h4 className="font-bold text-white mb-2">30-Tage-Frist</h4>
                    <p className="text-sm text-white/80">
                      (3) Erzielen die Parteien innerhalb von <strong>30 Tagen</strong> nach Zugang des 
                      Änderungsbegehrens keine Einigung, kann der Auftraggeber die Änderung in 
                      Textform anordnen (§ 650b Abs. 2 BGB).
                    </p>
                  </div>

                  <div className="bg-white/10 p-4 rounded-xl">
                    <h4 className="font-bold text-white mb-2">Ausführungspflicht</h4>
                    <p className="text-sm text-white/80">
                      (4) Der Auftragnehmer ist verpflichtet, einer Anordnung nach Abs. 3 nachzukommen, 
                      sofern ihm die Ausführung zumutbar ist.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vergütungsanpassung Box */}
          <div className="bg-blue-900 text-white p-8 rounded-xl my-8 not-prose">
            <div className="flex items-start gap-4">
              <FileText className="h-8 w-8 text-blue-300 shrink-0" />
              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">§ 4 Vergütungsanpassung (§ 650c BGB)</h2>
                <div className="space-y-4">
                  <div className="bg-white/10 p-4 rounded-xl">
                    <h4 className="font-bold text-white mb-2">Berechnung der Mehr- oder Mindervergütung</h4>
                    <p className="text-sm text-white/80">
                      (1) Die Höhe der Vergütung für den infolge einer Anordnung nach § 650b Abs. 2 BGB 
                      vermehrten oder verminderten Aufwand ist nach den <strong>tatsächlich erforderlichen Kosten</strong> 
                      mit angemessenen Zuschlägen für allgemeine Geschäftskosten, Wagnis und Gewinn zu ermitteln.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-xl">
                    <h4 className="font-bold text-white mb-2">Alternativ: Urkalkulation</h4>
                    <p className="text-sm text-white/80">
                      (2) Der Auftragnehmer kann zur Berechnung der Vergütung auch auf die Ansätze in 
                      einer vereinbarungsgemäß hinterlegten Urkalkulation zurückgreifen.
                    </p>
                  </div>

                  <div className="bg-white/10 p-4 rounded-xl">
                    <h4 className="font-bold text-white mb-2">Abschlagszahlung (§ 650c Abs. 3 BGB)</h4>
                    <p className="text-sm text-white/80">
                      (3) Bei einer Anordnung nach § 650b Abs. 2 BGB kann der Auftragnehmer 
                      <strong> 80 % der in einem Angebot genannten Mehrvergütung</strong> als 
                      Abschlagszahlung verlangen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">§ 5 Preise und Zahlungsbedingungen</h2>
          <p>
            (1) Es gelten die im Angebot des Auftragnehmers genannten Preise. Alle Preise verstehen sich 
            zuzüglich der gesetzlichen Umsatzsteuer, sofern nicht anders angegeben.
          </p>
          <p>
            (2) Der Auftragnehmer kann <strong>Abschlagszahlungen</strong> gemäß § 632a BGB für die 
            vertragsgemäß erbrachten Leistungen verlangen.
          </p>
          <p>
            (3) Die Schlussrechnung ist innerhalb von <strong>14 Tagen</strong> nach Rechnungsstellung 
            ohne Abzug zur Zahlung fällig.
          </p>
          <p>
            (4) Bei Zahlungsverzug ist der Auftragnehmer berechtigt, Verzugszinsen in Höhe von 
            <strong> 9 Prozentpunkten über dem Basiszinssatz</strong> (§ 288 Abs. 2 BGB) bei 
            Verträgen mit Unternehmern bzw. 5 Prozentpunkten über dem Basiszinssatz bei 
            Verträgen mit Verbrauchern zu berechnen.
          </p>

          {/* Bauhandwerkersicherung */}
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-xl my-6 not-prose">
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-secondary">§ 6 Bauhandwerkersicherung (§ 650f BGB)</h4>
                <p className="text-sm text-muted-foreground mt-2">
                  (1) Der Auftragnehmer kann vom Auftraggeber Sicherheit für die auch in Zusatzaufträgen 
                  vereinbarte und noch nicht gezahlte Vergütung einschließlich dazugehöriger 
                  Nebenforderungen verlangen.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  (2) Die Sicherheit kann durch eine <strong>Garantie oder Bürgschaft</strong> eines 
                  in der EU zugelassenen Kreditinstituts oder Kreditversicherers erbracht werden.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  (3) Wird die Sicherheit nicht innerhalb einer angemessenen Frist geleistet, kann 
                  der Auftragnehmer die Arbeiten bis zur Sicherheitsleistung verweigern oder den 
                  Vertrag kündigen.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">§ 7 Ausführungsfristen</h2>
          <p>
            (1) Vereinbarte Ausführungsfristen sind verbindlich, sofern sie schriftlich bestätigt wurden.
          </p>
          <p>
            (2) Verzögerungen, die auf höherer Gewalt, unvorhersehbaren Witterungsverhältnissen oder 
            Umständen beruhen, die der Auftragnehmer nicht zu vertreten hat, verlängern die 
            Ausführungsfristen entsprechend.
          </p>
          <p>
            (3) Der Auftragnehmer wird den Auftraggeber unverzüglich über absehbare Verzögerungen informieren.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">§ 8 Abnahme (§ 640 BGB)</h2>
          <p>
            (1) Der Auftraggeber ist verpflichtet, das vertragsgemäß hergestellte Werk abzunehmen, 
            sofern nicht wesentliche Mängel bestehen.
          </p>
          <p>
            (2) Der Auftragnehmer kann dem Auftraggeber nach Fertigstellung der Leistung eine 
            angemessene Frist zur Abnahme setzen. Mit Ablauf dieser Frist gilt das Werk als 
            abgenommen, wenn der Auftraggeber die Abnahme nicht unter Angabe mindestens eines 
            Mangels verweigert (<strong>fiktive Abnahme, § 640 Abs. 2 BGB</strong>).
          </p>
          <p>
            (3) Bei Verbrauchern ist diese Regelung nur wirksam, wenn der Auftragnehmer den 
            Auftraggeber zusammen mit der Fristsetzung auf die Folgen einer Nichtreaktion 
            hingewiesen hat.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">§ 9 Mängelansprüche und Gewährleistung</h2>
          <p>
            (1) Die Gewährleistungsrechte des Auftraggebers richten sich nach den gesetzlichen Vorschriften 
            (§§ 633 ff. BGB).
          </p>
          <p>
            (2) Die <strong>Verjährungsfrist für Mängelansprüche</strong> beträgt bei Bauwerken 
            <strong> 5 Jahre</strong> (§ 634a Abs. 1 Nr. 2 BGB), beginnend mit der Abnahme.
          </p>
          <p>
            (3) Der Auftraggeber hat erkannte Mängel unverzüglich schriftlich anzuzeigen.
          </p>
          <p>
            (4) Bei berechtigten Mängelrügen hat der Auftragnehmer das Recht zur Nacherfüllung 
            (§ 635 BGB). Der Auftragnehmer kann nach seiner Wahl den Mangel beseitigen oder 
            ein neues Werk herstellen.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">§ 10 Kündigung (§ 650h BGB)</h2>
          <p>
            (1) Die Kündigung eines Bauvertrags bedarf der <strong>Schriftform</strong> (§ 650h BGB).
          </p>
          <p>
            (2) Kündigt der Auftraggeber ohne wichtigen Grund, kann der Auftragnehmer die vereinbarte 
            Vergütung verlangen, muss sich jedoch ersparte Aufwendungen sowie anderweitigen Erwerb 
            anrechnen lassen (§ 648 BGB). Es wird widerlegbar vermutet, dass dem Auftragnehmer 
            5 % der auf den noch nicht erbrachten Teil der Werkleistung entfallenden Vergütung zustehen.
          </p>
          <p>
            (3) Beide Parteien können den Vertrag aus wichtigem Grund ohne Einhaltung einer Frist 
            kündigen (§ 648a BGB).
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">§ 11 Haftung</h2>
          <p>
            (1) Der Auftragnehmer haftet unbeschränkt für Schäden aus der Verletzung des Lebens, 
            des Körpers oder der Gesundheit sowie für vorsätzlich oder grob fahrlässig verursachte 
            Schäden.
          </p>
          <p>
            (2) Bei leichter Fahrlässigkeit haftet der Auftragnehmer nur bei Verletzung wesentlicher 
            Vertragspflichten (Kardinalpflichten), beschränkt auf den vertragstypisch vorhersehbaren Schaden.
          </p>
          <p>
            (3) Die Haftung nach dem Produkthaftungsgesetz bleibt unberührt.
          </p>

          {/* Widerrufsrecht für Verbraucher */}
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-xl my-6 not-prose">
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-secondary">§ 12 Widerrufsrecht für Verbraucher</h4>
                <p className="text-sm text-muted-foreground mt-2">
                  (1) Verbraucher haben bei außerhalb von Geschäftsräumen geschlossenen Verträgen 
                  (§ 312b BGB) ein <strong>14-tägiges Widerrufsrecht</strong>.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  (2) Das Widerrufsrecht erlischt vorzeitig, wenn der Auftragnehmer die Dienstleistung 
                  vollständig erbracht hat und mit der Ausführung der Dienstleistung erst begonnen hat, 
                  nachdem der Verbraucher seine ausdrückliche Zustimmung gegeben und gleichzeitig seine 
                  Kenntnis davon bestätigt hat, dass er sein Widerrufsrecht bei vollständiger 
                  Vertragserfüllung verliert.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  (3) Eine gesonderte <strong>Widerrufsbelehrung</strong> wird dem Verbraucher vor 
                  Vertragsschluss in Textform zur Verfügung gestellt.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">§ 13 Eigentumsvorbehalt</h2>
          <p>
            (1) Gelieferte Materialien und Bauteile bleiben bis zur vollständigen Bezahlung 
            Eigentum des Auftragnehmers.
          </p>
          <p>
            (2) Mit Einbau gehen die Materialien in das Eigentum des Grundstückseigentümers über. 
            Bis zur vollständigen Bezahlung besteht ein Werkunternehmerpfandrecht gemäß § 647 BGB.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">§ 14 Einstweilige Verfügung (§ 650d BGB)</h2>
          <p>
            (1) Bei Streitigkeiten über die Berechtigung einer Anordnung nach § 650b Abs. 2 BGB oder 
            über die Höhe der Vergütung für den Mehrvergütungsanspruch nach § 650c BGB ist der 
            Verfügungsgrund nicht mehr gesondert nachzuweisen, wenn der Auftraggeber bereits mit 
            der Bauausführung begonnen hat.
          </p>
          <p>
            (2) Dies ermöglicht eine schnellere gerichtliche Klärung im einstweiligen Rechtsschutz.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">§ 15 Datenschutz</h2>
          <p>
            Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer Datenschutzerklärung, 
            die unter <a href="/datenschutz" className="text-primary hover:underline">089dach.de/datenschutz</a> 
            {" "}abrufbar ist.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">§ 16 Schlussbestimmungen</h2>
          <p>
            (1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des 
            UN-Kaufrechts (CISG).
          </p>
          <p>
            (2) Erfüllungsort für alle Leistungen ist der Sitz des Auftragnehmers in München.
          </p>
          <p>
            (3) Für Streitigkeiten mit Kaufleuten, juristischen Personen des öffentlichen Rechts 
            oder öffentlich-rechtlichen Sondervermögen ist ausschließlicher Gerichtsstand München.
          </p>
          <p>
            (4) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die 
            Wirksamkeit der übrigen Bestimmungen unberührt. Die unwirksame Bestimmung ist durch 
            eine wirksame zu ersetzen, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung 
            am nächsten kommt.
          </p>

          {/* Kontakt */}
          <div className="bg-secondary text-white p-6 rounded-xl my-8">
            <p className="font-bold text-lg">089Dach GmbH</p>
            <p className="text-gray-300 mt-2">
              Geschäftsführer: Falko Georg Blöckinger<br />
              Thuillestr. 20, 81247 München-Obermenzing<br />
              E-Mail: info@089dach.de<br />
              Telefon: +49 89 12621964
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
