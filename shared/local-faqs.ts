export interface LocalFAQ {
  question: string;
  answer: string;
}

export interface LocationContent {
  einwohner?: string;
  haustypen?: string[];
  bauperiode?: string;
  besondereDaecher?: string;
  foerderhinweis?: string;
  faqs: LocalFAQ[];
}

export const locationContent: Record<string, LocationContent> = {
  "allach": {
    einwohner: "ca. 33.000",
    haustypen: ["Einfamilienhäuser", "Reihenhäuser", "Siedlungshäuser 1920er"],
    bauperiode: "1920er-1970er Jahre",
    besondereDaecher: "Viele historische Siedlungshäuser mit Biberschwanzziegeln",
    foerderhinweis: "KfW-Förderung für Altbau-Dämmung besonders lohnend",
    faqs: [
      { question: "Was kostet eine Dachsanierung in Allach?", answer: "In Allach liegen die Kosten für eine Dachsanierung zwischen 15.000 und 35.000 Euro je nach Dachgröße und Zustand. Die typischen Siedlungshäuser haben Dachflächen von 80-120m². Mit KfW-Förderung können Sie bis zu 20% sparen." },
      { question: "Wie schnell sind Sie in Allach vor Ort?", answer: "Da unser Firmensitz in Obermenzing direkt neben Allach liegt, sind wir im Notfall in 5-10 Minuten bei Ihnen. Für reguläre Termine vereinbaren wir flexible Zeitfenster." },
      { question: "Welche Dachziegel passen zu Siedlungshäusern in Allach?", answer: "Für die historischen Siedlungshäuser empfehlen wir Biberschwanzziegel in Naturrot – sie passen zum Charakter der 1920er-Architektur und erfüllen moderne Anforderungen." }
    ]
  },
  "obermenzing": {
    einwohner: "ca. 27.000",
    haustypen: ["Villen", "Einfamilienhäuser", "Landhäuser"],
    bauperiode: "1900-1940, Nachkrieg",
    besondereDaecher: "Historische Villen mit Schiefer- und Kupferdächern",
    foerderhinweis: "Denkmalschutz-Förderung für historische Villen möglich",
    faqs: [
      { question: "Was kostet ein Schieferdach in Obermenzing?", answer: "Naturschiefer für Villen in Obermenzing kostet ca. 120-180€/m². Bei einer typischen Villendachfläche von 200-300m² rechnen Sie mit 35.000-70.000€. Die Investition lohnt sich: Schiefer hält 80-100 Jahre." },
      { question: "Gibt es Denkmalschutz-Auflagen in Obermenzing?", answer: "Viele Villen in Obermenzing stehen unter Denkmalschutz. Wir arbeiten eng mit dem Denkmalamt zusammen und verwenden originalgetreue Materialien wie Naturschiefer und handgeformte Ziegel." },
      { question: "Können Sie Kupferdächer und -rinnen in Obermenzing?", answer: "Ja, Kupferarbeiten sind unsere Spezialität. Kupferdächer und -rinnen passen perfekt zu den historischen Villen. Mit der Zeit entwickelt Kupfer eine edle Patina." }
    ]
  },
  "pasing": {
    einwohner: "ca. 30.000",
    haustypen: ["Stadthäuser", "Reihenhäuser", "Mehrfamilienhäuser"],
    bauperiode: "Gründerzeit bis Moderne",
    besondereDaecher: "Mischung aus historischen und modernen Dächern",
    foerderhinweis: "Gute Fördermöglichkeiten für energetische Sanierung",
    faqs: [
      { question: "Was kostet eine Dachsanierung in Pasing?", answer: "In Pasing variieren die Kosten stark: Reihenhäuser 18.000-28.000€, Mehrfamilienhäuser 40.000-80.000€. Wir erstellen kostenlose Vor-Ort-Angebote mit Festpreis-Garantie." },
      { question: "Lohnt sich ein Dachausbau in Pasing?", answer: "Definitiv! Die Grundstückspreise in Pasing machen Dachausbauten sehr rentabel. Eine 50m² Dachgeschosswohnung steigert den Immobilienwert um 150.000-250.000€." },
      { question: "Wie lange dauert eine Dachsanierung in Pasing?", answer: "Ein typisches Reihenhaus in Pasing ist in 1-2 Wochen fertig. Bei Mehrfamilienhäusern rechnen wir mit 3-4 Wochen. Wir minimieren die Belästigung für Bewohner." }
    ]
  },
  "schwabing": {
    einwohner: "ca. 70.000",
    haustypen: ["Altbauten", "Gründerzeithäuser", "Mehrfamilienhäuser"],
    bauperiode: "1880-1920, Gründerzeit",
    besondereDaecher: "Viele Mansarddächer und Stuckverzierungen",
    foerderhinweis: "Denkmalschutz und KfW-Förderung kombinierbar",
    faqs: [
      { question: "Was kostet eine Mansarddach-Sanierung in Schwabing?", answer: "Mansarddächer in Schwabing kosten 25.000-50.000€ je nach Komplexität. Die geschwungene Form erfordert mehr Handarbeit. Dafür gewinnen Sie wertvollen Wohnraum." },
      { question: "Gibt es spezielle Auflagen für Gründerzeithäuser in Schwabing?", answer: "Viele Gründerzeithäuser stehen unter Ensembleschutz. Wir verwenden passende Materialien und stimmen uns mit dem Denkmalamt ab. Förderung bis 30% möglich." },
      { question: "Können Sie Flachdächer in Schwabing begrünen?", answer: "Ja, Dachbegrünung ist in Schwabing sehr beliebt. Sie verbessert das Stadtklima, spart Heizkosten und wird von der Stadt München gefördert." }
    ]
  },
  "sendling": {
    einwohner: "ca. 40.000",
    haustypen: ["Altbauten", "Mehrfamilienhäuser", "Genossenschaftswohnungen"],
    bauperiode: "1900-1960",
    besondereDaecher: "Steildächer mit Dachausbau-Potenzial",
    foerderhinweis: "Hohe Förderquoten für energetische Dachsanierung",
    faqs: [
      { question: "Was kostet ein Dachausbau in Sendling?", answer: "Ein Dachausbau in Sendling kostet 1.500-2.500€/m². Bei 50m² Wohnfläche sind das 75.000-125.000€. Der Wertzuwachs liegt deutlich höher bei den Sendlinger Immobilienpreisen." },
      { question: "Lohnt sich Dachdämmung in Sendling?", answer: "Unbedingt! Die Altbauten in Sendling haben oft keine Dämmung. Mit 15-25cm Dämmung sparen Sie 30-40% Heizkosten. KfW fördert bis zu 20%." },
      { question: "Wie finde ich einen guten Dachdecker in Sendling?", answer: "Achten Sie auf: Meisterbetrieb, lokale Referenzen, schriftliche Garantie. Als Nachbarn aus Obermenzing sind wir in 15 Minuten bei Ihnen und kennen die Sendlinger Bausubstanz." }
    ]
  },
  "bogenhausen": {
    einwohner: "ca. 85.000",
    haustypen: ["Villen", "Stadthäuser", "Luxuswohnungen"],
    bauperiode: "Gründerzeit, 1920er-1960er",
    besondereDaecher: "Premium-Dächer mit Schiefer und Kupfer",
    foerderhinweis: "Denkmalschutz-Förderung für historische Villen",
    faqs: [
      { question: "Was kostet ein Premium-Dach in Bogenhausen?", answer: "In Bogenhausen erwarten unsere Kunden Top-Qualität: Naturschiefer ab 120€/m², Kupferarbeiten ab 150€/m². Eine Villa mit 250m² Dachfläche kostet 50.000-100.000€ – eine Investition für Generationen." },
      { question: "Welche Dachmaterialien passen zu Bogenhausener Villen?", answer: "Naturschiefer, Biberschwanz in Sonderfarben, oder Kupfer. Diese Materialien unterstreichen den exklusiven Charakter und halten 50-100 Jahre." },
      { question: "Bieten Sie diskrete Bauabwicklung in Bogenhausen?", answer: "Ja, wir verstehen die Ansprüche unserer Bogenhausener Kunden. Unauffällige Fahrzeuge, saubere Baustelle, termingerechte Fertigstellung – diskret und professionell." }
    ]
  },
  "nymphenburg": {
    einwohner: "ca. 25.000",
    haustypen: ["Historische Villen", "Landhäuser", "Schlossanwesen"],
    bauperiode: "1700-1950",
    besondereDaecher: "Historische Dächer nahe Schloss Nymphenburg",
    foerderhinweis: "Strenge Denkmalschutz-Auflagen, aber gute Förderung",
    faqs: [
      { question: "Gibt es besondere Vorschriften nahe Schloss Nymphenburg?", answer: "Im Umfeld des Schlosses gelten strenge Denkmalschutz-Auflagen. Wir stimmen uns vor jedem Projekt mit dem Landesamt für Denkmalpflege ab und verwenden nur zugelassene Materialien." },
      { question: "Welche Dachziegel sind in Nymphenburg erlaubt?", answer: "Nahe dem Schloss sind meist nur traditionelle Biberschwanzziegel in historischen Farbtönen erlaubt. Wir beraten Sie zu den genehmigungsfähigen Optionen." },
      { question: "Was kostet eine denkmalgerechte Sanierung in Nymphenburg?", answer: "Denkmalgerechte Sanierungen kosten 20-40% mehr als Standardsanierungen. Dafür gibt es Förderungen bis 30% und Steuervorteile. Insgesamt oft kostenneutral." }
    ]
  },
  "laim": {
    einwohner: "ca. 55.000",
    haustypen: ["Reihenhäuser", "Mehrfamilienhäuser", "Genossenschaftswohnungen"],
    bauperiode: "1920er-1970er",
    besondereDaecher: "Viele sanierungsbedürftige Nachkriegsbauten",
    foerderhinweis: "Hohe Förderquoten für Nachkriegsbauten",
    faqs: [
      { question: "Was kostet eine Dachsanierung in Laim?", answer: "Reihenhäuser in Laim: 15.000-25.000€. Mehrfamilienhäuser: 35.000-60.000€. Viele 1950er-Bauten brauchen dringend Sanierung – mit KfW-Förderung sparen Sie bis 20%." },
      { question: "Lohnt sich energetische Sanierung in Laim?", answer: "Sehr! Die Nachkriegsbauten in Laim sind oft schlecht gedämmt. Mit moderner Dachdämmung sparen Sie 30-40% Heizkosten. Die Investition amortisiert sich in 8-12 Jahren." },
      { question: "Wie lange hält ein saniertes Dach in Laim?", answer: "Nach unserer Sanierung mit 10 Jahren Garantie hält Ihr Dach mindestens 40-50 Jahre. Wir verwenden nur hochwertige Materialien – keine Kompromisse." }
    ]
  },
  "trudering": {
    einwohner: "ca. 70.000",
    haustypen: ["Einfamilienhäuser", "Doppelhaushälften", "Reihenhäuser"],
    bauperiode: "1950er-1990er",
    besondereDaecher: "Klassische Steildächer der Nachkriegszeit",
    foerderhinweis: "Sehr gute Fördermöglichkeiten für Bestandsbauten",
    faqs: [
      { question: "Was kostet Dachsanierung in Trudering?", answer: "Einfamilienhäuser in Trudering: 18.000-32.000€. Doppelhaushälften: 15.000-25.000€. Wir erstellen kostenlose Angebote mit Festpreis-Garantie." },
      { question: "Welche Dachziegel empfehlen Sie für Trudering?", answer: "Für Trudering empfehlen wir moderne Betondachsteine oder Tonziegel in Anthrazit oder Naturrot. Sie passen zum Charakter der Siedlungen und halten 50+ Jahre." },
      { question: "Können Sie auch Carport-Dächer in Trudering?", answer: "Ja, Carport-Dächer und Terrassenüberdachungen gehören zu unserem Service. Wir planen und bauen alles aus einer Hand – inklusive Baugenehmigung falls nötig." }
    ]
  },
  "moosach": {
    einwohner: "ca. 55.000",
    haustypen: ["Einfamilienhäuser", "Reihenhäuser", "Siedlungshäuser"],
    bauperiode: "1920er-1980er",
    besondereDaecher: "Gemischte Bausubstanz mit Sanierungsbedarf",
    foerderhinweis: "Gute Förderoptionen für alle Haustypen",
    faqs: [
      { question: "Was kostet ein Dachdecker in Moosach?", answer: "Stundenkosten: 45-65€/Std. Dachsanierung: 80-150€/m². Ein typisches Moosacher Einfamilienhaus mit 120m² Dachfläche kostet 18.000-28.000€ komplett." },
      { question: "Wie schnell sind Sie in Moosach?", answer: "Von unserem Firmensitz in Obermenzing sind wir in 10-15 Minuten in Moosach. Im Notfall sogar schneller – wir sind praktisch Ihre Nachbarn." },
      { question: "Machen Sie auch Dachrinnenreinigung in Moosach?", answer: "Ja, Dachrinnenreinigung in Moosach: 150-300€ je nach Hausgröße. Wir empfehlen jährliche Reinigung im Herbst nach dem Laubfall." }
    ]
  },
  "dachau": {
    einwohner: "ca. 48.000",
    haustypen: ["Einfamilienhäuser", "Reihenhäuser", "historische Altstadt"],
    bauperiode: "1900-heute",
    besondereDaecher: "Mischung aus historischer Altstadt und Neubaugebieten",
    foerderhinweis: "Kommunale Förderung zusätzlich zu KfW möglich",
    faqs: [
      { question: "Arbeiten Sie auch in Dachau?", answer: "Ja, Dachau gehört zu unserem regulären Einzugsgebiet. Die Anfahrt von Obermenzing dauert nur 20 Minuten. Wir betreuen viele Kunden im Landkreis Dachau." },
      { question: "Was kostet Dachsanierung in Dachau?", answer: "Die Preise in Dachau sind vergleichbar mit München: 80-150€/m² je nach Material. Ein Einfamilienhaus mit 100m² Dachfläche kostet 18.000-28.000€." },
      { question: "Gibt es Denkmalschutz in der Dachauer Altstadt?", answer: "Ja, die Dachauer Altstadt steht unter Ensembleschutz. Wir arbeiten mit historischen Materialien und stimmen uns mit der Denkmalbehörde ab." }
    ]
  },
  "starnberg": {
    einwohner: "ca. 23.000",
    haustypen: ["Villen", "Landhäuser", "Seeimmobilien"],
    bauperiode: "1850-heute",
    besondereDaecher: "Hochwertige Dächer für Premium-Immobilien am Starnberger See",
    foerderhinweis: "Hohe Qualitätsansprüche, Denkmalschutz bei historischen Villen",
    faqs: [
      { question: "Arbeiten Sie auch in Starnberg?", answer: "Ja, wir betreuen Premium-Kunden am Starnberger See. Die Anfahrt von München dauert 30-40 Minuten. Für Seevillen verwenden wir nur beste Materialien." },
      { question: "Was kostet ein Villendach in Starnberg?", answer: "Seevillen in Starnberg erfordern Premium-Ausführung: Naturschiefer, Kupfer, oder hochwertige Tonziegel. Rechnen Sie mit 60.000-150.000€ für eine komplette Villa." },
      { question: "Können Sie Seehütten-Dächer in Starnberg?", answer: "Ja, auch Bootshäuser und Seehütten gehören zu unserem Portfolio. Wir verwenden witterungsbeständige Materialien, die dem Seeklima standhalten." }
    ]
  },
  "freising": {
    einwohner: "ca. 50.000",
    haustypen: ["Altstadt-Gebäude", "Einfamilienhäuser", "Bauernhöfe"],
    bauperiode: "Mittelalter bis heute",
    besondereDaecher: "Historische Gebäude im Domberg-Bereich",
    foerderhinweis: "Starker Denkmalschutz in der Altstadt",
    faqs: [
      { question: "Arbeiten Sie auch in Freising?", answer: "Ja, Freising gehört zu unserem erweiterten Einzugsgebiet. Die Anfahrt dauert ca. 35 Minuten. Wir betreuen sowohl historische Gebäude als auch moderne Häuser." },
      { question: "Gibt es Denkmalschutz in Freising?", answer: "Die Freisinger Altstadt und der Domberg stehen unter strengem Denkmalschutz. Wir arbeiten mit historischen Ziegeln und traditionellen Techniken." },
      { question: "Können Sie auch Bauernhof-Dächer?", answer: "Ja, große Dächer von Bauernhöfen sind eine unserer Stärken. Wir sanieren traditionelle Steildächer und moderne Hallendächer im Landkreis Freising." }
    ]
  },
  "germering": {
    einwohner: "ca. 41.000",
    haustypen: ["Einfamilienhäuser", "Reihenhäuser", "Gewerbebauten"],
    bauperiode: "1960er-heute",
    besondereDaecher: "Moderne Siedlungsbauten mit Standarddächern",
    foerderhinweis: "Gute KfW-Förderung für 1960er-1980er Bauten",
    faqs: [
      { question: "Was kostet Dachreparatur in Germering?", answer: "Kleine Reparaturen in Germering: 200-800€. Größere Schäden: 1.000-5.000€. Wir fahren auch für kleine Aufträge nach Germering – faire Anfahrtskosten." },
      { question: "Lohnt sich Dachdämmung in Germering?", answer: "Unbedingt! Viele Germeringer Häuser aus den 1970ern haben keine oder schlechte Dämmung. Mit moderner Dämmung sparen Sie 30-40% Heizkosten." },
      { question: "Wie schnell sind Sie in Germering?", answer: "Von Obermenzing nach Germering dauert es ca. 20 Minuten. Für Notfälle kommen wir auch am Wochenende." }
    ]
  },
  "altstadt": {
    einwohner: "ca. 22.000",
    haustypen: ["Historische Gebäude", "Geschäftshäuser", "Luxuswohnungen"],
    bauperiode: "Mittelalter bis Gründerzeit",
    besondereDaecher: "Denkmalgeschützte Dächer im Stadtzentrum",
    foerderhinweis: "Strenger Denkmalschutz, aber hohe Förderquoten",
    faqs: [
      { question: "Gibt es besondere Auflagen in der Altstadt?", answer: "Die Münchner Altstadt steht unter strengem Denkmalschutz. Wir arbeiten mit dem Landesamt für Denkmalpflege zusammen und verwenden nur zugelassene historische Materialien." },
      { question: "Was kostet Dachsanierung in der Altstadt?", answer: "Aufgrund der Denkmalschutz-Auflagen kosten Sanierungen in der Altstadt 30-50% mehr. Dafür gibt es Förderungen bis 35% und steuerliche Vorteile." },
      { question: "Können Sie auch Flachdächer in der Altstadt?", answer: "Ja, viele Geschäftshäuser haben Flachdächer. Wir sanieren diese diskret und termingerecht – auch am Wochenende oder nachts." }
    ]
  },
  "aubinglochhausenlangwied": {
    einwohner: "ca. 48.000",
    haustypen: ["Einfamilienhäuser", "Reihenhäuser", "Neubaugebiete"],
    bauperiode: "1960er bis heute",
    besondereDaecher: "Mix aus Bestandsbauten und modernen Neubauten",
    foerderhinweis: "Gute Förderung für energetische Sanierung",
    faqs: [
      { question: "Was kostet Dachsanierung in Aubing?", answer: "In Aubing-Lochhausen-Langwied liegen die Kosten bei 80-140€/m². Ein typisches Einfamilienhaus mit 120m² kostet 15.000-28.000€ komplett." },
      { question: "Wie schnell sind Sie in Aubing?", answer: "Von unserem Standort in Obermenzing sind wir in 10-15 Minuten in Aubing. Im Notfall noch schneller." },
      { question: "Gibt es viele Sturmschäden in Aubing?", answer: "Die offene Lage am Stadtrand macht Aubing anfälliger für Sturmschäden. Wir bieten 24/7 Notdienst und helfen bei der Versicherungsabwicklung." }
    ]
  },
  "auhaidhausen": {
    einwohner: "ca. 60.000",
    haustypen: ["Altbauten", "Jugendstilhäuser", "Mehrfamilienhäuser"],
    bauperiode: "1880-1920, Gründerzeit",
    besondereDaecher: "Viele Mansarddächer und historische Ornamente",
    foerderhinweis: "Denkmalschutz und KfW kombinierbar",
    faqs: [
      { question: "Was kostet Mansarddach-Sanierung in Haidhausen?", answer: "Mansarddächer in Haidhausen kosten 25.000-55.000€. Die aufwendige Konstruktion erfordert Spezialwissen – das haben wir seit 25 Jahren." },
      { question: "Gibt es Denkmalschutz in Au-Haidhausen?", answer: "Große Teile stehen unter Ensemble- oder Einzeldenkmalschutz. Wir kennen die Auflagen und arbeiten mit historisch passenden Materialien." },
      { question: "Können Sie auch Dachterrassen in Haidhausen?", answer: "Ja, Dachterrassen sind in Haidhausen beliebt. Wir planen und bauen komplette Dachterrassen inklusive Abdichtung und Geländer." }
    ]
  },
  "bergamlaim": {
    einwohner: "ca. 45.000",
    haustypen: ["Mehrfamilienhäuser", "Reihenhäuser", "Gewerbebauten"],
    bauperiode: "1950er-1980er",
    besondereDaecher: "Nachkriegsbauten mit Sanierungsbedarf",
    foerderhinweis: "Hohe Förderung für 1950er-1970er Bauten",
    faqs: [
      { question: "Was kostet Dachsanierung in Berg am Laim?", answer: "In Berg am Laim: Reihenhäuser 15.000-22.000€, Mehrfamilienhäuser 30.000-60.000€. Viele 1960er-Bauten brauchen dringend Sanierung." },
      { question: "Lohnt sich Dachdämmung in Berg am Laim?", answer: "Unbedingt! Nachkriegsbauten haben oft keine Dämmung. Mit moderner Dämmung sparen Sie 35-45% Heizkosten." },
      { question: "Wie lange dauert Dachsanierung in Berg am Laim?", answer: "Reihenhäuser: 1-2 Wochen. Mehrfamilienhäuser: 3-5 Wochen. Wir koordinieren mit Hausverwaltungen für minimale Störung." }
    ]
  },
  "fasanerie": {
    einwohner: "ca. 12.000",
    haustypen: ["Einfamilienhäuser", "Doppelhaushälften"],
    bauperiode: "1920er-1970er",
    besondereDaecher: "Siedlungshäuser mit klassischen Steildächern",
    foerderhinweis: "KfW-Förderung für Altbau-Dämmung",
    faqs: [
      { question: "Was kostet Dachdecker in der Fasanerie?", answer: "In der Fasanerie: Dachsanierung 18.000-28.000€, Dachreparaturen ab 300€. Wir sind in 10 Minuten vor Ort." },
      { question: "Welche Ziegel passen zur Fasanerie?", answer: "Für die Siedlungshäuser empfehlen wir klassische Biberschwanz- oder Frankfurter Pfannen in Naturrot oder Braun." },
      { question: "Machen Sie auch Gauben in der Fasanerie?", answer: "Ja, Gauben schaffen mehr Wohnraum. In der Fasanerie sind Schleppgauben besonders beliebt – passend zum Siedlungscharakter." }
    ]
  },
  "feldmoching": {
    einwohner: "ca. 65.000",
    haustypen: ["Einfamilienhäuser", "Bauernhöfe", "Neubaugebiete"],
    bauperiode: "Historisch bis modern",
    besondereDaecher: "Mischung aus landwirtschaftlichen und Wohngebäuden",
    foerderhinweis: "Förderung für landwirtschaftliche Gebäude möglich",
    faqs: [
      { question: "Können Sie Bauernhof-Dächer in Feldmoching?", answer: "Ja, wir sanieren große landwirtschaftliche Dächer. Hallendächer, Scheunendächer und Stallgebäude gehören zu unserem Repertoire." },
      { question: "Was kostet Dachsanierung in Feldmoching?", answer: "Einfamilienhäuser: 18.000-30.000€. Große Hofgebäude: 40.000-100.000€. Wir erstellen individuelle Angebote vor Ort." },
      { question: "Wie schnell sind Sie in Feldmoching?", answer: "Von Obermenzing nach Feldmoching sind es nur 15 Minuten. Im Notfall sind wir sofort da." }
    ]
  },
  "freimann": {
    einwohner: "ca. 25.000",
    haustypen: ["Einfamilienhäuser", "Reihenhäuser", "Gewerbebauten"],
    bauperiode: "1950er-1990er",
    besondereDaecher: "Mix aus Wohn- und Gewerbebauten",
    foerderhinweis: "Gute Förderung für Nachkriegsbauten",
    faqs: [
      { question: "Arbeiten Sie auch in Freimann?", answer: "Ja, Freimann gehört zu unserem Einzugsgebiet. Die Anfahrt dauert ca. 20 Minuten. Wir betreuen Privat- und Gewerbekunden." },
      { question: "Was kostet Flachdach in Freimann?", answer: "Flachdächer für Gewerbe: 60-120€/m². Für eine 500m² Halle rechnen Sie mit 30.000-60.000€ je nach Ausführung." },
      { question: "Machen Sie auch Industriedächer?", answer: "Ja, wir sanieren Gewerbe- und Industriedächer. Trapezblech, EPDM, Bitumen – wir beherrschen alle Systeme." }
    ]
  },
  "giesing": {
    einwohner: "ca. 52.000",
    haustypen: ["Altbauten", "Mehrfamilienhäuser", "Genossenschaftswohnungen"],
    bauperiode: "1890-1960",
    besondereDaecher: "Steildächer mit Dachausbau-Potenzial",
    foerderhinweis: "Hohe Förderung für energetische Sanierung",
    faqs: [
      { question: "Was kostet Dachausbau in Giesing?", answer: "Dachausbau in Giesing: 1.800-2.800€/m². Bei 40m² Wohnfläche: 72.000-112.000€. Der Wertzuwachs ist bei Giesinger Preisen deutlich höher." },
      { question: "Lohnt sich Dachsanierung in Giesing?", answer: "Absolut! Die Immobilienpreise in Giesing steigen. Ein saniertes Dach erhöht den Wert und spart Heizkosten." },
      { question: "Gibt es Denkmalschutz in Giesing?", answer: "Teile von Obergiesing stehen unter Ensembleschutz. Wir beraten Sie zu den Auflagen und Fördermöglichkeiten." }
    ]
  },
  "graefelfing": {
    einwohner: "ca. 14.000",
    haustypen: ["Villen", "Einfamilienhäuser", "Landhäuser"],
    bauperiode: "1900-1970",
    besondereDaecher: "Hochwertige Villendächer",
    foerderhinweis: "Denkmalschutz bei älteren Villen",
    faqs: [
      { question: "Was kostet ein Villendach in Gräfelfing?", answer: "Villen in Gräfelfing: Premium-Ausführung mit Schiefer oder Kupfer 50.000-120.000€. Hochwertige Tonziegel: 35.000-70.000€." },
      { question: "Welche Materialien empfehlen Sie für Gräfelfing?", answer: "Für Gräfelfinger Villen: Naturschiefer, Kupfer oder hochwertige Tonziegel in edlen Farbtönen. Diese Materialien unterstreichen den exklusiven Charakter." },
      { question: "Arbeiten Sie diskret in Gräfelfing?", answer: "Ja, wir verstehen die Ansprüche. Unauffällige Fahrzeuge, saubere Baustelle, pünktliche Fertigstellung – professionell und diskret." }
    ]
  },
  "harlaching": {
    einwohner: "ca. 18.000",
    haustypen: ["Villen", "Einfamilienhäuser", "Wohnvillen"],
    bauperiode: "1900-1960",
    besondereDaecher: "Hochwertige Dächer in Premium-Wohnlage",
    foerderhinweis: "Denkmalschutz bei älteren Villen",
    faqs: [
      { question: "Was kostet Dachsanierung in Harlaching?", answer: "In Harlaching erwarten Kunden Top-Qualität: Sanierungen 25.000-60.000€ je nach Größe. Premium-Materialien lohnen sich bei den Immobilienwerten." },
      { question: "Welche Dachziegel passen zu Harlaching?", answer: "Für Harlaching: Hochwertige Tonziegel, Naturschiefer oder Kupfer. Diese Materialien passen zum gehobenen Villencharakter." },
      { question: "Gibt es Denkmalschutz in Harlaching?", answer: "Einige ältere Villen stehen unter Denkmalschutz. Wir arbeiten mit passenden historischen Materialien und stimmen uns ab." }
    ]
  },
  "hasenbergl": {
    einwohner: "ca. 25.000",
    haustypen: ["Mehrfamilienhäuser", "Hochhäuser", "Reihenhäuser"],
    bauperiode: "1960er-1970er",
    besondereDaecher: "Nachkriegs-Großsiedlung mit Flachdächern",
    foerderhinweis: "Sehr hohe Förderung für 1960er-Bauten",
    faqs: [
      { question: "Was kostet Flachdachsanierung im Hasenbergl?", answer: "Flachdächer im Hasenbergl: 50-90€/m². Ein typisches Mehrfamilienhaus mit 400m² kostet 20.000-36.000€. KfW fördert bis 20%." },
      { question: "Lohnt sich Dachdämmung im Hasenbergl?", answer: "Sehr! Die 1960er-Bauten haben kaum Dämmung. Mit Aufdachdämmung sparen Sie 40-50% Heizkosten – die beste Investition." },
      { question: "Arbeiten Sie mit Hausverwaltungen?", answer: "Ja, wir betreuen viele WEGs und Hausverwaltungen. Transparente Angebote, klare Kommunikation, termingerechte Ausführung." }
    ]
  },
  "isarvorstadt": {
    einwohner: "ca. 50.000",
    haustypen: ["Altbauten", "Gründerzeithäuser", "Geschäftshäuser"],
    bauperiode: "1880-1920",
    besondereDaecher: "Historische Dächer im Glockenbach- und Schlachthofviertel",
    foerderhinweis: "Denkmalschutz und KfW kombinierbar",
    faqs: [
      { question: "Was kostet Dachsanierung in der Isarvorstadt?", answer: "In der Isarvorstadt: Altbauten 30.000-70.000€ je nach Größe. Denkmalschutz erhöht die Kosten, aber auch die Förderung." },
      { question: "Gibt es Denkmalschutz in der Isarvorstadt?", answer: "Große Teile stehen unter Ensembleschutz. Wir kennen die Auflagen im Glockenbachviertel und arbeiten mit passenden Materialien." },
      { question: "Können Sie auch Gewerbegebäude?", answer: "Ja, wir sanieren auch Geschäftshäuser. Diskrete Ausführung am Wochenende oder nachts ist möglich." }
    ]
  },
  "karlsfeld": {
    einwohner: "ca. 22.000",
    haustypen: ["Einfamilienhäuser", "Reihenhäuser", "Mehrfamilienhäuser"],
    bauperiode: "1950er-1990er",
    besondereDaecher: "Typische Nachkriegs- und Neubausiedlungen",
    foerderhinweis: "Gute Förderung für Bestandsbauten",
    faqs: [
      { question: "Arbeiten Sie auch in Karlsfeld?", answer: "Ja, Karlsfeld ist praktisch unser Nachbar. Die Anfahrt dauert nur 10-15 Minuten. Wir betreuen viele Kunden dort." },
      { question: "Was kostet Dachsanierung in Karlsfeld?", answer: "In Karlsfeld: Einfamilienhäuser 18.000-28.000€, Reihenhäuser 14.000-22.000€. Faire Preise, Festpreis-Garantie." },
      { question: "Machen Sie auch kleine Reparaturen in Karlsfeld?", answer: "Ja, wir kommen auch für kleine Aufträge. Dachrinnenreinigung, Ziegel austauschen, Undichtigkeiten – alles im Service." }
    ]
  },
  "lehel": {
    einwohner: "ca. 12.000",
    haustypen: ["Gründerzeithäuser", "Luxuswohnungen", "Historische Palais"],
    bauperiode: "1850-1910",
    besondereDaecher: "Historische Premium-Dächer im noblen Lehel",
    foerderhinweis: "Strenger Denkmalschutz, hohe Förderung",
    faqs: [
      { question: "Was kostet Dachsanierung im Lehel?", answer: "Im Lehel: Premium-Sanierungen 40.000-100.000€. Die historischen Materialien und Denkmalschutz-Auflagen erhöhen die Kosten, aber auch den Werterhalt." },
      { question: "Welche Materialien sind im Lehel erlaubt?", answer: "Im Lehel gelten strenge Denkmalschutz-Auflagen. Oft nur historische Ziegel, Naturschiefer oder Kupfer erlaubt. Wir beraten Sie ausführlich." },
      { question: "Arbeiten Sie diskret im Lehel?", answer: "Selbstverständlich. Wir verstehen die Ansprüche im Lehel. Diskrete Fahrzeuge, saubere Baustelle, respektvoller Umgang." }
    ]
  },
  "maxvorstadt": {
    einwohner: "ca. 51.000",
    haustypen: ["Gründerzeithäuser", "Universitätsgebäude", "Altbauten"],
    bauperiode: "1880-1920",
    besondereDaecher: "Historische Dächer im Museumsviertel",
    foerderhinweis: "Denkmalschutz und KfW kombinierbar",
    faqs: [
      { question: "Was kostet Dachsanierung in der Maxvorstadt?", answer: "In der Maxvorstadt: Altbauten 25.000-60.000€ je nach Größe. Denkmalschutz erhöht die Kosten um ca. 20-30%." },
      { question: "Gibt es Denkmalschutz in der Maxvorstadt?", answer: "Weite Teile stehen unter Ensemble- oder Einzeldenkmalschutz. Wir kennen die Auflagen und arbeiten mit historischen Materialien." },
      { question: "Können Sie auch Flachdächer in der Maxvorstadt?", answer: "Ja, viele Geschäfts- und Universitätsgebäude haben Flachdächer. Wir sanieren diese termingerecht und diskret." }
    ]
  },
  "milbertshofenamhart": {
    einwohner: "ca. 75.000",
    haustypen: ["Mehrfamilienhäuser", "Gewerbebauten", "Hochhäuser"],
    bauperiode: "1950er-1980er",
    besondereDaecher: "Industriegebiet mit vielen Flachdächern",
    foerderhinweis: "Hohe Förderung für Nachkriegsbauten",
    faqs: [
      { question: "Was kostet Flachdachsanierung in Milbertshofen?", answer: "Flachdächer in Milbertshofen: Wohngebäude 50-90€/m², Gewerbe 40-80€/m². Wir arbeiten mit allen Systemen: EPDM, Bitumen, PVC." },
      { question: "Können Sie Industriedächer in Milbertshofen?", answer: "Ja, wir sind Spezialisten für Gewerbe- und Industriedächer. Trapezblech, Flachdach, Lichtkuppeln – alles aus einer Hand." },
      { question: "Arbeiten Sie auch am Wochenende?", answer: "Ja, für Gewerbekunden arbeiten wir oft am Wochenende oder nachts – kein Betriebsausfall, keine Störung." }
    ]
  },
  "neuhausen": {
    einwohner: "ca. 48.000",
    haustypen: ["Altbauten", "Gründerzeithäuser", "Mehrfamilienhäuser"],
    bauperiode: "1890-1930",
    besondereDaecher: "Historische Steildächer nahe Schloss Nymphenburg",
    foerderhinweis: "Denkmalschutz in Teilen, gute KfW-Förderung",
    faqs: [
      { question: "Was kostet Dachsanierung in Neuhausen?", answer: "In Neuhausen: Altbauten 25.000-50.000€ je nach Größe. Mehrfamilienhäuser 40.000-80.000€. Wir erstellen kostenlose Angebote." },
      { question: "Gibt es Denkmalschutz in Neuhausen?", answer: "Teile von Neuhausen nahe Schloss Nymphenburg stehen unter Ensembleschutz. Wir beraten Sie zu Auflagen und Förderung." },
      { question: "Wie schnell sind Sie in Neuhausen?", answer: "Von Obermenzing nach Neuhausen sind es nur 5-10 Minuten. Wir sind praktisch Ihre Nachbarn." }
    ]
  },
  "oberfoehring": {
    einwohner: "ca. 10.000",
    haustypen: ["Villen", "Einfamilienhäuser", "Wohnvillen"],
    bauperiode: "1900-1970",
    besondereDaecher: "Hochwertige Villendächer im grünen Stadtteil",
    foerderhinweis: "Denkmalschutz bei älteren Villen",
    faqs: [
      { question: "Was kostet Villendach in Oberföhring?", answer: "Villen in Oberföhring: Premium-Sanierung 40.000-90.000€. Hochwertige Materialien wie Schiefer oder Kupfer sind Standard." },
      { question: "Welche Materialien empfehlen Sie für Oberföhring?", answer: "Für Oberföhringer Villen: Naturschiefer, hochwertige Tonziegel oder Kupfer. Diese Materialien passen zum gehobenen Charakter." },
      { question: "Können Sie auch Dachbegrünung?", answer: "Ja, Dachbegrünung ist in Oberföhring beliebt. Wir planen und bauen extensive und intensive Gründächer." }
    ]
  },
  "ramersdorfperlach": {
    einwohner: "ca. 115.000",
    haustypen: ["Hochhäuser", "Reihenhäuser", "Einfamilienhäuser"],
    bauperiode: "1960er-1990er",
    besondereDaecher: "Großsiedlungen mit Flach- und Steildächern",
    foerderhinweis: "Sehr hohe Förderung für 1960er-1970er Bauten",
    faqs: [
      { question: "Was kostet Dachsanierung in Ramersdorf-Perlach?", answer: "In Ramersdorf-Perlach: Reihenhäuser 14.000-22.000€, Hochhäuser nach Aufwand. Wir betreuen viele WEGs und Hausverwaltungen." },
      { question: "Lohnt sich Dachdämmung in Perlach?", answer: "Sehr! Die 1960er-Bauten haben kaum Dämmung. Mit Aufdachdämmung sparen Sie 40-50% Heizkosten. KfW fördert bis 20%." },
      { question: "Arbeiten Sie mit WEGs in Perlach?", answer: "Ja, wir betreuen viele Wohnungseigentümergemeinschaften. Transparente Angebote, klare Kommunikation, termingerechte Ausführung." }
    ]
  },
  "schwanthalerhoehe": {
    einwohner: "ca. 30.000",
    haustypen: ["Altbauten", "Mehrfamilienhäuser", "Geschäftshäuser"],
    bauperiode: "1890-1960",
    besondereDaecher: "Steildächer nahe Theresienwiese",
    foerderhinweis: "Denkmalschutz in Teilen, gute KfW-Förderung",
    faqs: [
      { question: "Was kostet Dachsanierung auf der Schwanthalerhöhe?", answer: "Auf der Schwanthalerhöhe: Altbauten 20.000-45.000€ je nach Größe. Wir arbeiten auch während der Wiesn-Saison termingerecht." },
      { question: "Gibt es Denkmalschutz auf der Schwanthalerhöhe?", answer: "Einige ältere Gebäude stehen unter Ensembleschutz. Wir beraten Sie zu Auflagen und Fördermöglichkeiten." },
      { question: "Können Sie vor der Wiesn fertig werden?", answer: "Ja, wir planen Projekte so, dass vor dem Oktoberfest alles fertig ist. Termingarantie bei rechtzeitiger Beauftragung." }
    ]
  },
  "sendlingwestpark": {
    einwohner: "ca. 60.000",
    haustypen: ["Mehrfamilienhäuser", "Reihenhäuser", "Genossenschaftswohnungen"],
    bauperiode: "1950er-1980er",
    besondereDaecher: "Nachkriegsbauten mit Sanierungsbedarf",
    foerderhinweis: "Hohe Förderung für Nachkriegsbauten",
    faqs: [
      { question: "Was kostet Dachsanierung in Sendling-Westpark?", answer: "In Sendling-Westpark: Reihenhäuser 15.000-24.000€, Mehrfamilienhäuser 35.000-65.000€. KfW-Förderung bis 20% möglich." },
      { question: "Lohnt sich Dachdämmung in Sendling-Westpark?", answer: "Unbedingt! Die 1960er-Bauten profitieren stark von moderner Dämmung. 35-45% Heizkosten-Ersparnis sind realistisch." },
      { question: "Wie schnell sind Sie in Sendling-Westpark?", answer: "Von Obermenzing nach Sendling-Westpark dauert es ca. 15-20 Minuten. Für Notfälle sind wir schneller." }
    ]
  },
  "solln": {
    einwohner: "ca. 25.000",
    haustypen: ["Villen", "Einfamilienhäuser", "Wohnvillen"],
    bauperiode: "1900-1970",
    besondereDaecher: "Hochwertige Villendächer im grünen Solln",
    foerderhinweis: "Denkmalschutz bei älteren Villen",
    faqs: [
      { question: "Was kostet Villendach in Solln?", answer: "Villen in Solln: Premium-Sanierung 40.000-100.000€. Hochwertige Tonziegel, Schiefer oder Kupfer sind Standard." },
      { question: "Welche Ziegel passen zu Sollner Villen?", answer: "Für Sollner Villen empfehlen wir hochwertige Tonziegel in Naturrot, Engobe oder edlen Sonderfarben. Alternativ Naturschiefer." },
      { question: "Gibt es Denkmalschutz in Solln?", answer: "Einige ältere Villen stehen unter Denkmalschutz. Wir arbeiten mit passenden historischen Materialien." }
    ]
  },
  "thalkirchen": {
    einwohner: "ca. 18.000",
    haustypen: ["Villen", "Einfamilienhäuser", "Wohnvillen"],
    bauperiode: "1890-1960",
    besondereDaecher: "Gehobene Wohnlage an der Isar",
    foerderhinweis: "Denkmalschutz bei älteren Gebäuden",
    faqs: [
      { question: "Was kostet Dachsanierung in Thalkirchen?", answer: "In Thalkirchen: Villen 35.000-80.000€, Einfamilienhäuser 22.000-40.000€. Die gehobene Lage rechtfertigt hochwertige Materialien." },
      { question: "Welche Materialien passen zu Thalkirchen?", answer: "Für die Isarvillen empfehlen wir Tonziegel in edlen Farbtönen, Kupferrinnen oder Naturschiefer." },
      { question: "Können Sie Dachterrassen in Thalkirchen?", answer: "Ja, Dachterrassen mit Isarar-Blick sind sehr beliebt. Wir planen und bauen komplette Dachterrassen." }
    ]
  },
  "westend": {
    einwohner: "ca. 20.000",
    haustypen: ["Altbauten", "Mehrfamilienhäuser", "Geschäftshäuser"],
    bauperiode: "1890-1930",
    besondereDaecher: "Historische Steildächer nahe Theresienwiese",
    foerderhinweis: "Denkmalschutz in Teilen",
    faqs: [
      { question: "Was kostet Dachsanierung im Westend?", answer: "Im Westend: Altbauten 22.000-50.000€ je nach Größe. Mehrfamilienhäuser 40.000-75.000€." },
      { question: "Gibt es Denkmalschutz im Westend?", answer: "Teile des Westends stehen unter Ensembleschutz. Wir kennen die Auflagen und arbeiten mit passenden Materialien." },
      { question: "Können Sie vor der Wiesn fertig sein?", answer: "Ja, für Projekte nahe der Theresienwiese planen wir rechtzeitig. Termingarantie bei frühzeitiger Beauftragung." }
    ]
  },
  "eching": {
    einwohner: "ca. 15.000",
    haustypen: ["Einfamilienhäuser", "Reihenhäuser", "Gewerbebauten"],
    bauperiode: "1960er-heute",
    besondereDaecher: "Moderne Wohn- und Gewerbebauten",
    foerderhinweis: "Gute KfW-Förderung",
    faqs: [
      { question: "Arbeiten Sie auch in Eching?", answer: "Ja, Eching gehört zu unserem Einzugsgebiet. Die Anfahrt dauert ca. 25-30 Minuten. Wir betreuen dort Privat- und Gewerbekunden." },
      { question: "Was kostet Dachsanierung in Eching?", answer: "In Eching: Einfamilienhäuser 18.000-30.000€, Reihenhäuser 14.000-22.000€. Faire Preise mit Festpreis-Garantie." },
      { question: "Können Sie auch Gewerbedächer in Eching?", answer: "Ja, im Gewerbegebiet Eching haben wir schon viele Dächer saniert. Flachdach, Trapezblech, Lichtkuppeln – alles im Programm." }
    ]
  },
  "erding": {
    einwohner: "ca. 37.000",
    haustypen: ["Altstadt-Gebäude", "Einfamilienhäuser", "Bauernhöfe"],
    bauperiode: "Historisch bis modern",
    besondereDaecher: "Mix aus historischer Altstadt und Neubaugebieten",
    foerderhinweis: "Denkmalschutz in der Altstadt",
    faqs: [
      { question: "Arbeiten Sie auch in Erding?", answer: "Ja, Erding gehört zu unserem erweiterten Einzugsgebiet. Die Anfahrt dauert ca. 40 Minuten. Für größere Projekte lohnt sich das." },
      { question: "Was kostet Dachsanierung in Erding?", answer: "In Erding: Einfamilienhäuser 18.000-32.000€, Bauernhöfe nach individueller Kalkulation." },
      { question: "Gibt es Denkmalschutz in Erding?", answer: "Die Erdinger Altstadt steht unter Ensembleschutz. Wir arbeiten mit historisch passenden Materialien." }
    ]
  },
  "fuerstenfeldbruck": {
    einwohner: "ca. 38.000",
    haustypen: ["Altstadt-Gebäude", "Einfamilienhäuser", "Reihenhäuser"],
    bauperiode: "Historisch bis modern",
    besondereDaecher: "Mix aus Klosterstadt und modernen Siedlungen",
    foerderhinweis: "Kommunale Förderung zusätzlich zu KfW",
    faqs: [
      { question: "Arbeiten Sie auch in Fürstenfeldbruck?", answer: "Ja, FFB gehört zu unserem Einzugsgebiet. Die Anfahrt dauert ca. 25 Minuten. Wir haben dort viele zufriedene Kunden." },
      { question: "Was kostet Dachsanierung in Fürstenfeldbruck?", answer: "In FFB: Einfamilienhäuser 18.000-32.000€, Reihenhäuser 14.000-24.000€. Die Preise sind vergleichbar mit München." },
      { question: "Gibt es Denkmalschutz nahe dem Kloster?", answer: "Im Bereich des Klosters Fürstenfeld gelten Denkmalschutz-Auflagen. Wir beraten Sie zu den Anforderungen." }
    ]
  },
  "groebenzell": {
    einwohner: "ca. 21.000",
    haustypen: ["Einfamilienhäuser", "Reihenhäuser", "Doppelhaushälften"],
    bauperiode: "1960er-heute",
    besondereDaecher: "Typische Siedlungsbauten",
    foerderhinweis: "Gute KfW-Förderung für 1960er-1980er Bauten",
    faqs: [
      { question: "Arbeiten Sie auch in Gröbenzell?", answer: "Ja, Gröbenzell liegt nur 15 Minuten von uns entfernt. Wir sind praktisch Ihre Nachbarn und haben viele Kunden dort." },
      { question: "Was kostet Dachsanierung in Gröbenzell?", answer: "In Gröbenzell: Einfamilienhäuser 18.000-28.000€, Reihenhäuser 14.000-22.000€. Faire Preise mit Festpreis-Garantie." },
      { question: "Lohnt sich Dachdämmung in Gröbenzell?", answer: "Unbedingt! Viele Gröbenzeller Häuser aus den 1970ern haben keine Dämmung. Mit moderner Dämmung sparen Sie 35-40% Heizkosten." }
    ]
  },
  "olching": {
    einwohner: "ca. 29.000",
    haustypen: ["Einfamilienhäuser", "Reihenhäuser", "Mehrfamilienhäuser"],
    bauperiode: "1960er-heute",
    besondereDaecher: "Typische Siedlungsbauten mit Steildächern",
    foerderhinweis: "Gute KfW-Förderung",
    faqs: [
      { question: "Arbeiten Sie auch in Olching?", answer: "Ja, Olching gehört zu unserem Einzugsgebiet. Die Anfahrt dauert ca. 20 Minuten. Wir betreuen dort viele zufriedene Kunden." },
      { question: "Was kostet Dachsanierung in Olching?", answer: "In Olching: Einfamilienhäuser 18.000-30.000€, Reihenhäuser 14.000-22.000€. Wir erstellen kostenlose Vor-Ort-Angebote." },
      { question: "Machen Sie auch Sturmschaden-Reparaturen?", answer: "Ja, wir bieten 24/7 Notdienst. Nach Sturm sind wir schnell vor Ort und helfen bei der Versicherungsabwicklung." }
    ]
  },
  "puchheim": {
    einwohner: "ca. 22.000",
    haustypen: ["Einfamilienhäuser", "Reihenhäuser", "Mehrfamilienhäuser"],
    bauperiode: "1960er-heute",
    besondereDaecher: "Typische Nachkriegs- und Neubausiedlungen",
    foerderhinweis: "Gute KfW-Förderung für Bestandsbauten",
    faqs: [
      { question: "Arbeiten Sie auch in Puchheim?", answer: "Ja, Puchheim liegt nur 20 Minuten von uns entfernt. Wir betreuen dort viele Privat- und Gewerbekunden." },
      { question: "Was kostet Dachsanierung in Puchheim?", answer: "In Puchheim: Einfamilienhäuser 18.000-28.000€, Reihenhäuser 14.000-22.000€. Faire Preise mit Festpreis-Garantie." },
      { question: "Lohnt sich Dachdämmung in Puchheim?", answer: "Sehr! Viele Puchheimer Häuser aus den 1970ern profitieren stark von moderner Dämmung. 35-40% Heizkosten-Ersparnis sind möglich." }
    ]
  },
  "ottobrunn": {
    einwohner: "ca. 22.000",
    haustypen: ["Einfamilienhäuser", "Reihenhäuser", "Gewerbebauten"],
    bauperiode: "1950er-1990er",
    besondereDaecher: "Mix aus Wohn- und Gewerbebauten",
    foerderhinweis: "Gute KfW-Förderung für Nachkriegsbauten",
    faqs: [
      { question: "Arbeiten Sie auch in Ottobrunn?", answer: "Ja, Ottobrunn gehört zu unserem Einzugsgebiet. Die Anfahrt dauert ca. 30-35 Minuten. Für größere Projekte lohnt sich das." },
      { question: "Was kostet Dachsanierung in Ottobrunn?", answer: "In Ottobrunn: Einfamilienhäuser 18.000-32.000€, Reihenhäuser 14.000-24.000€. Die Preise entsprechen Münchner Niveau." },
      { question: "Können Sie auch Gewerbedächer in Ottobrunn?", answer: "Ja, im Gewerbegebiet Ottobrunn haben wir schon viele Dächer saniert. Flachdach, EPDM, Bitumen – alles im Programm." }
    ]
  },
  "unterschleissheim": {
    einwohner: "ca. 30.000",
    haustypen: ["Einfamilienhäuser", "Reihenhäuser", "Gewerbebauten"],
    bauperiode: "1960er-heute",
    besondereDaecher: "Mix aus Wohn- und Gewerbedächern",
    foerderhinweis: "Gute KfW-Förderung",
    faqs: [
      { question: "Arbeiten Sie auch in Unterschleißheim?", answer: "Ja, Unterschleißheim gehört zu unserem Einzugsgebiet. Die Anfahrt dauert ca. 20-25 Minuten." },
      { question: "Was kostet Dachsanierung in Unterschleißheim?", answer: "In Unterschleißheim: Einfamilienhäuser 18.000-30.000€, Reihenhäuser 14.000-22.000€. Wir erstellen kostenlose Vor-Ort-Angebote." },
      { question: "Können Sie auch Industriedächer?", answer: "Ja, im Gewerbegebiet Unterschleißheim sanieren wir regelmäßig Industrie- und Gewerbedächer. Trapezblech, Flachdach, Lichtkuppeln." }
    ]
  },
  "ludwigsvorstadtisarvorstadt": {
    einwohner: "ca. 52.000",
    haustypen: ["Altbauten", "Gründerzeithäuser", "Geschäftshäuser"],
    bauperiode: "1880-1920",
    besondereDaecher: "Historische Dächer nahe Hauptbahnhof und Glockenbach",
    foerderhinweis: "Denkmalschutz und KfW kombinierbar",
    faqs: [
      { question: "Was kostet Dachsanierung in der Ludwigsvorstadt?", answer: "In der Ludwigsvorstadt-Isarvorstadt: Altbauten 28.000-65.000€. Denkmalschutz erhöht die Kosten, aber auch die Förderung bis 35%." },
      { question: "Gibt es Denkmalschutz im Glockenbachviertel?", answer: "Ja, große Teile stehen unter Ensembleschutz. Wir kennen die Auflagen und arbeiten mit historisch passenden Materialien." },
      { question: "Können Sie auch Hotels und Geschäftshäuser?", answer: "Ja, wir sanieren auch Gewerbegebäude. Diskrete Ausführung am Wochenende oder nachts ohne Betriebsausfall." }
    ]
  },
  "aubinglochhausen": {
    einwohner: "ca. 44.000",
    haustypen: ["Einfamilienhäuser", "Reihenhäuser", "Neubaugebiete"],
    bauperiode: "1960er bis heute",
    besondereDaecher: "Mix aus Bestandsbauten und modernen Neubauten",
    foerderhinweis: "Gute Förderung für energetische Sanierung",
    faqs: [
      { question: "Was kostet Dachsanierung in Aubing-Lochhausen?", answer: "In Aubing-Lochhausen liegen die Kosten bei 80-140€/m². Ein typisches Einfamilienhaus mit 120m² kostet 15.000-28.000€ komplett." },
      { question: "Wie schnell sind Sie in Aubing-Lochhausen?", answer: "Von unserem Standort in Obermenzing sind wir in 10-15 Minuten in Aubing-Lochhausen. Im Notfall noch schneller." },
      { question: "Gibt es viele Sturmschäden in Aubing-Lochhausen?", answer: "Die offene Lage am Stadtrand macht das Gebiet anfälliger für Sturmschäden. Wir bieten 24/7 Notdienst." }
    ]
  },
  "milbertshofen": {
    einwohner: "ca. 40.000",
    haustypen: ["Mehrfamilienhäuser", "Gewerbebauten", "Reihenhäuser"],
    bauperiode: "1950er-1980er",
    besondereDaecher: "Nachkriegsbauten und Industriegebäude",
    foerderhinweis: "Hohe Förderung für Nachkriegsbauten",
    faqs: [
      { question: "Was kostet Dachsanierung in Milbertshofen?", answer: "In Milbertshofen: Wohngebäude 20.000-45.000€, Gewerbe nach Größe. Viele Nachkriegsbauten brauchen dringend Sanierung." },
      { question: "Können Sie auch Gewerbedächer in Milbertshofen?", answer: "Ja, wir sind Spezialisten für Gewerbe- und Industriedächer. Trapezblech, Flachdach, Lichtkuppeln – alles aus einer Hand." },
      { question: "Lohnt sich Dachdämmung in Milbertshofen?", answer: "Sehr! Die 1960er-Bauten haben oft keine Dämmung. Mit Aufdachdämmung sparen Sie 40-50% Heizkosten." }
    ]
  },
  "hadern": {
    einwohner: "ca. 50.000",
    haustypen: ["Einfamilienhäuser", "Reihenhäuser", "Mehrfamilienhäuser"],
    bauperiode: "1950er-1980er",
    besondereDaecher: "Typische Nachkriegs-Siedlungsbauten",
    foerderhinweis: "Gute KfW-Förderung für 1960er-1970er Bauten",
    faqs: [
      { question: "Was kostet Dachsanierung in Hadern?", answer: "In Hadern: Einfamilienhäuser 18.000-30.000€, Reihenhäuser 14.000-22.000€. Wir erstellen kostenlose Vor-Ort-Angebote." },
      { question: "Wie schnell sind Sie in Hadern?", answer: "Von Obermenzing nach Hadern sind es nur 10-15 Minuten. Für Notfälle sind wir schnell vor Ort." },
      { question: "Lohnt sich Dachdämmung in Hadern?", answer: "Unbedingt! Viele Haderner Häuser aus den 1960ern-1970ern haben schlechte Dämmung. 35-40% Heizkosten-Ersparnis sind realistisch." }
    ]
  }
};

export function getLocationContent(location: string): LocationContent | null {
  const key = location.toLowerCase()
    .replace(/ü/g, 'ue').replace(/ö/g, 'oe').replace(/ä/g, 'ae').replace(/ß/g, 'ss')
    .replace(/-/g, '').replace(/ /g, '');
  return locationContent[key] || null;
}
