export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
  project: string;
  date: string;
}

export const testimonialsByLocation: Record<string, Testimonial[]> = {
  "allach": [
    { name: "Familie Huber", location: "Allach", text: "Schneller und professioneller Service! Die Dachrinnenreinigung war in 2 Stunden erledigt. Klare Empfehlung für Nachbarn in Allach.", rating: 5, project: "Dachrinnenreinigung", date: "2024" },
    { name: "Herr Müller", location: "Untermenzing", text: "Unser Siedlungshaus aus den 20er Jahren wurde perfekt saniert. Die Biberschwanzziegel sehen original aus, aber mit moderner Dämmung darunter.", rating: 5, project: "Dachsanierung", date: "2024" }
  ],
  "obermenzing": [
    { name: "Dr. Schmidt", location: "Obermenzing", text: "Unsere denkmalgeschützte Villa wurde mit Naturschiefer neu eingedeckt. Die Handwerkskunst ist beeindruckend – jedes Detail stimmt.", rating: 5, project: "Schiefereindeckung", date: "2023" },
    { name: "Familie Weber", location: "Obermenzing", text: "Nach dem Sturm waren die Dachdecker innerhalb einer Stunde da. Professionell und freundlich – genau das braucht man im Notfall.", rating: 5, project: "Sturmschaden", date: "2024" }
  ],
  "pasing": [
    { name: "Frau Becker", location: "Pasing", text: "Die neue Gaube hat unser Dachgeschoss in einen lichtdurchfluteten Wohnraum verwandelt. Planung und Ausführung waren perfekt.", rating: 5, project: "Gaubenbau", date: "2024" },
    { name: "Herr Hoffmann", location: "Pasing-Obermenzing", text: "Komplettsanierung mit KfW-Förderung – 089Dach hat uns bei allen Anträgen unterstützt. Rundum zufrieden!", rating: 5, project: "Energetische Sanierung", date: "2023" }
  ],
  "schwabing": [
    { name: "Frau Dr. Lehmann", location: "Schwabing-West", text: "Die Flachdachsanierung unseres Mehrfamilienhauses wurde termingerecht und im Budget abgeschlossen. Sehr professionell.", rating: 5, project: "Flachdach", date: "2024" },
    { name: "Herr Fischer", location: "Schwabing", text: "Drei neue Velux-Fenster mit Sonnenschutz – endlich genug Licht im Dachgeschoss! Installation war sauber und schnell.", rating: 5, project: "Dachfenster", date: "2024" }
  ],
  "sendling": [
    { name: "Familie Braun", location: "Sendling", text: "Der Dachausbau hat uns zusätzliche 45m² Wohnfläche gebracht. Die Schleppgauben sind ein echter Hingucker!", rating: 5, project: "Dachausbau", date: "2024" },
    { name: "Herr Wagner", location: "Sendling", text: "Nach Jahren mit undichtem Dach endlich eine dauerhafte Lösung. Die Handwerker waren sehr gründlich bei der Ursachensuche.", rating: 5, project: "Dachabdichtung", date: "2024" }
  ],
  "bogenhausen": [
    { name: "Dr. von Stein", location: "Bogenhausen", text: "Die Kupferrinnen und das Mansarddach unserer Villa wurden meisterhaft restauriert. Museum-Qualität!", rating: 5, project: "Kupferarbeiten", date: "2023" },
    { name: "Familie Richter", location: "Oberföhring", text: "Professionelle Beratung zur Dachbegrünung – jetzt haben wir eine grüne Oase auf dem Flachdach.", rating: 5, project: "Dachbegrünung", date: "2024" }
  ],
  "nymphenburg": [
    { name: "Graf von Nymphenburg", location: "Nymphenburg", text: "Die denkmalgerechte Sanierung unseres historischen Anwesens wurde mit größter Sorgfalt durchgeführt. Höchste Empfehlung.", rating: 5, project: "Denkmalsanierung", date: "2023" },
    { name: "Frau Schneider", location: "Neuhausen", text: "Termin eingehalten, sauber gearbeitet, faire Rechnung. So sollte Handwerk sein!", rating: 5, project: "Dachreparatur", date: "2024" }
  ],
  "laim": [
    { name: "Herr Baumann", location: "Laim", text: "Die energetische Sanierung unseres Reihenhauses spart jetzt 40% Heizkosten. Hat sich gelohnt!", rating: 5, project: "Dachdämmung", date: "2024" },
    { name: "WEG Friedrichstraße", location: "Laim", text: "Professionelle Sanierung des Flachdachs unserer Wohnanlage. Kommunikation und Ausführung waren vorbildlich.", rating: 5, project: "Flachdachsanierung", date: "2023" }
  ],
  "trudering": [
    { name: "Familie Klein", location: "Trudering-Riem", text: "Endlich ein dichtes Dach! Nach 3 Jahren Ärger mit anderen Firmen hat 089Dach das Problem in einer Woche gelöst.", rating: 5, project: "Dachabdichtung", date: "2024" },
    { name: "Herr Schulze", location: "Trudering", text: "Die neuen Dachfenster mit Rollläden sind super. Montage war an einem Tag erledigt.", rating: 5, project: "Dachfenster", date: "2024" }
  ],
  "moosach": [
    { name: "Familie Krause", location: "Moosach", text: "Schneller Notdienst nach dem Hagelschaden. Die Versicherungsabwicklung wurde uns komplett abgenommen.", rating: 5, project: "Hagelschaden", date: "2024" },
    { name: "Herr Lange", location: "Moosach", text: "Faire Beratung ohne Upselling. Wir brauchten nur eine Reparatur, kein neues Dach. Ehrliche Firma!", rating: 5, project: "Dachreparatur", date: "2024" }
  ],
  "giesing": [
    { name: "Frau Meyer", location: "Obergiesing", text: "Die Balkonüberdachung wurde perfekt an unser Altbau-Haus angepasst. Handwerklich top!", rating: 5, project: "Balkonüberdachung", date: "2024" },
    { name: "WEG Tegernseer Landstraße", location: "Giesing", text: "Zuverlässige Dachrinnenreinigung für unser Mehrfamilienhaus. Jährlicher Wartungsvertrag läuft problemlos.", rating: 5, project: "Dachrinnenreinigung", date: "2024" }
  ],
  "haidhausen": [
    { name: "Herr Bauer", location: "Haidhausen", text: "Die Mansarddach-Sanierung unseres Jugendstilhauses wurde mit viel Liebe zum Detail ausgeführt.", rating: 5, project: "Mansarddach", date: "2023" },
    { name: "Frau Werner", location: "Au-Haidhausen", text: "Schnelle Hilfe bei undichtem Dachfenster. Am gleichen Tag repariert – super Service!", rating: 5, project: "Dachfenster-Reparatur", date: "2024" }
  ],
  "maxvorstadt": [
    { name: "WEG Königinstraße", location: "Maxvorstadt", text: "Professionelle Flachdachabdichtung für unser Gründerzeithaus. Alle Mieter sind zufrieden.", rating: 5, project: "Flachdachabdichtung", date: "2024" },
    { name: "Dr. Hartmann", location: "Maxvorstadt", text: "Stilvolle Blecharbeiten für unser historisches Gebäude. Die Handwerker verstehen ihr Fach!", rating: 5, project: "Spengler", date: "2023" }
  ],
  "neuhausen": [
    { name: "Familie Fuchs", location: "Neuhausen", text: "Die Komplettrestauration unseres Gründerzeitdachs wurde perfekt umgesetzt. Ein Schmuckstück!", rating: 5, project: "Restaurierung", date: "2023" },
    { name: "Herr Koch", location: "Neuhausen", text: "Schnelle und saubere Arbeit bei der Dachrinnenreparatur. Preis-Leistung stimmt.", rating: 5, project: "Dachrinnenreparatur", date: "2024" }
  ],
  "solln": [
    { name: "Familie von Solln", location: "Solln", text: "Unsere Villa hat ein wunderschönes neues Ziegeldach bekommen. Die Nachbarn sind neidisch!", rating: 5, project: "Ziegeleindeckung", date: "2024" },
    { name: "Dr. Schwarz", location: "Solln", text: "Hochwertige Arbeit an unserem historischen Landhaus. Tradition und Moderne perfekt verbunden.", rating: 5, project: "Dachsanierung", date: "2023" }
  ],
  "thalkirchen": [
    { name: "Frau König", location: "Thalkirchen", text: "Die Dachterrasse ist unser neues Highlight! Planung und Umsetzung waren exzellent.", rating: 5, project: "Dachterrasse", date: "2024" },
    { name: "Herr Richter", location: "Thalkirchen", text: "Professionelle Dachdämmung mit spürbarem Effekt. Im Winter warm, im Sommer kühl.", rating: 5, project: "Dämmung", date: "2024" }
  ],
  "freimann": [
    { name: "BMW-Mitarbeiter", location: "Freimann", text: "Schneller Notdienst am Wochenende nach Sturmschaden. Sehr zuverlässig!", rating: 5, project: "Sturmschaden", date: "2024" },
    { name: "Familie Stein", location: "Freimann", text: "Die neue Gaube passt perfekt zum Haus. Mehr Licht und mehr Wohnraum – beides erreicht.", rating: 5, project: "Gaubenbau", date: "2024" }
  ],
  "milbertshofen": [
    { name: "Herr Roth", location: "Milbertshofen", text: "Zuverlässige Flachdachsanierung für unsere Werkshalle. Termingerecht und professionell.", rating: 5, project: "Flachdach", date: "2024" },
    { name: "Familie Müller", location: "Am Hart", text: "Die Dachdämmung hat unseren Energieverbrauch deutlich gesenkt. Gute Investition!", rating: 5, project: "Dämmung", date: "2024" }
  ],
  "feldmoching": [
    { name: "Landwirt Meier", location: "Feldmoching", text: "Die Scheunendach-Sanierung wurde fachgerecht durchgeführt. Gute Zusammenarbeit!", rating: 5, project: "Scheunendach", date: "2024" },
    { name: "Familie Wolf", location: "Hasenbergl", text: "Faire Preise und gute Arbeit. Die Dachrinnenreinigung ist jetzt jährlich bei uns im Plan.", rating: 5, project: "Wartung", date: "2024" }
  ],
  "dachau": [
    { name: "Familie Gruber", location: "Dachau", text: "Trotz der Entfernung von München waren die Dachdecker pünktlich und professionell. Top!", rating: 5, project: "Dachsanierung", date: "2024" },
    { name: "Herr Maier", location: "Dachau-Süd", text: "Die Flachdachabdichtung hält jetzt seit 2 Jahren perfekt. Keine Probleme mehr!", rating: 5, project: "Flachdach", date: "2022" }
  ],
  "starnberg": [
    { name: "Dr. von Starnberg", location: "Starnberg", text: "Unsere Seevilla hat ein neues Kupferdach bekommen. Handwerklich auf höchstem Niveau!", rating: 5, project: "Kupferdach", date: "2023" },
    { name: "Familie Berger", location: "Starnberg", text: "Schneller Notdienst nach Sturmschaden. Innerhalb von 2 Stunden war jemand da.", rating: 5, project: "Notdienst", date: "2024" }
  ],
  "freising": [
    { name: "Familie Huber", location: "Freising", text: "Profesionelle Dachsanierung am historischen Bauernhaus. Die Handwerker haben Erfahrung!", rating: 5, project: "Altbausanierung", date: "2024" },
    { name: "Herr Schmid", location: "Freising", text: "Gute Beratung und faire Preise. Das Angebot war transparent und ohne versteckte Kosten.", rating: 5, project: "Dachsanierung", date: "2024" }
  ],
  "erding": [
    { name: "Familie Winkler", location: "Erding", text: "Unsere neue Photovoltaik-Anlage wurde perfekt ins Dach integriert. Beratung war top!", rating: 5, project: "PV-Integration", date: "2024" },
    { name: "Landwirt Hofer", location: "Erding-Land", text: "Große Hallendach-Sanierung termingerecht abgeschlossen. Professionelles Team!", rating: 5, project: "Hallendach", date: "2024" }
  ],
  "fuerstenfeldbruck": [
    { name: "Familie Stadler", location: "Fürstenfeldbruck", text: "Kompetente Beratung zur energetischen Sanierung. Die Förderungsanträge wurden für uns erledigt.", rating: 5, project: "Energetische Sanierung", date: "2024" },
    { name: "Herr Kern", location: "FFB", text: "Zuverlässiger Service bei Dachrinnenreinigung und kleinen Reparaturen. Jahrelange Zusammenarbeit!", rating: 5, project: "Wartung", date: "2024" }
  ],
  "germering": [
    { name: "Familie Egger", location: "Germering", text: "Die Dachsanierung unseres Reihenhauses wurde schnell und sauber durchgeführt. Sehr zufrieden!", rating: 5, project: "Dachsanierung", date: "2024" },
    { name: "WEG Untere Bahnhofstraße", location: "Germering", text: "Professionelle Betreuung bei der Flachdachsanierung. Gute Kommunikation mit der Hausverwaltung.", rating: 5, project: "Flachdach", date: "2024" }
  ],
  "muenchen": [
    { name: "Hausverwaltung München", location: "München", text: "Seit Jahren zuverlässiger Partner für unsere Immobilien. Schnell, professionell, fair.", rating: 5, project: "Verschiedene", date: "2024" },
    { name: "Gewerbetreibender", location: "München-Zentrum", text: "Die Flachdachsanierung wurde am Wochenende durchgeführt – kein Betriebsausfall. Super!", rating: 5, project: "Flachdach", date: "2024" }
  ],
  "altstadt": [
    { name: "Hotel Altstadt", location: "Altstadt-Lehel", text: "Diskrete Dacharbeiten während des laufenden Hotelbetriebs. Professionelle Koordination!", rating: 5, project: "Flachdachsanierung", date: "2024" },
    { name: "Frau Keller", location: "Altstadt", text: "Unser denkmalgeschütztes Haus wurde mit originalen Materialien saniert. Erstklassige Arbeit!", rating: 5, project: "Denkmalsanierung", date: "2023" }
  ],
  "aubinglochhausenlangwied": [
    { name: "Familie Seitz", location: "Aubing", text: "Unser 80er-Jahre Dach wurde komplett saniert. Neue Dämmung und Ziegel – wie neu!", rating: 5, project: "Dachsanierung", date: "2024" },
    { name: "Herr Vogt", location: "Langwied", text: "Nach dem Sturm war innerhalb von 2 Stunden jemand da. Schneller Notdienst!", rating: 5, project: "Sturmschaden", date: "2024" }
  ],
  "auhaidhausen": [
    { name: "Herr Bauer", location: "Au", text: "Die Mansarddach-Sanierung unseres Jugendstilhauses wurde mit viel Liebe zum Detail ausgeführt.", rating: 5, project: "Mansarddach", date: "2023" },
    { name: "Frau Werner", location: "Au-Haidhausen", text: "Schnelle Hilfe bei undichtem Dachfenster. Am gleichen Tag repariert – super Service!", rating: 5, project: "Dachfenster-Reparatur", date: "2024" }
  ],
  "bergamlaim": [
    { name: "Familie Engel", location: "Berg am Laim", text: "Die Gaube hat unser Wohnzimmer komplett verändert. Mehr Licht und mehr Platz!", rating: 5, project: "Gaubenbau", date: "2024" },
    { name: "Herr Zimmermann", location: "Berg am Laim", text: "Professionelle Dachdämmung – unsere Heizkosten sind deutlich gesunken.", rating: 5, project: "Dämmung", date: "2024" }
  ],
  "hadern": [
    { name: "Familie Maurer", location: "Hadern", text: "Die Komplettdachsanierung wurde termingerecht fertig. Sehr saubere Arbeit!", rating: 5, project: "Dachsanierung", date: "2024" },
    { name: "Dr. Lehner", location: "Hadern", text: "Professionelle Beratung zur Solaranlage auf dem Dach. Alles aus einer Hand.", rating: 5, project: "PV-Integration", date: "2024" }
  ],
  "harlaching": [
    { name: "Familie von Harlaching", location: "Harlaching", text: "Unsere Villa wurde mit Kupferrinnen und Schieferdach ausgestattet. Erstklassig!", rating: 5, project: "Premium-Sanierung", date: "2023" },
    { name: "Herr Brandl", location: "Harlaching", text: "Die Dachterrasse ist jetzt unser Lieblingsplatz. Perfekte Umsetzung!", rating: 5, project: "Dachterrasse", date: "2024" }
  ],
  "hasenbergl": [
    { name: "Familie Schmidt", location: "Hasenbergl", text: "Faire Preise und gute Arbeit. Dachrinnenreinigung war schnell erledigt.", rating: 5, project: "Dachrinnenreinigung", date: "2024" },
    { name: "WEG Feldmochinger Str.", location: "Hasenbergl", text: "Professionelle Flachdachsanierung für unser Wohnhaus. Gute Kommunikation!", rating: 5, project: "Flachdach", date: "2024" }
  ],
  "isarvorstadt": [
    { name: "Gastronom Glockenbachviertel", location: "Isarvorstadt", text: "Die Dachsanierung wurde nachts durchgeführt – kein Umsatzausfall. Perfekt organisiert!", rating: 5, project: "Dachsanierung", date: "2024" },
    { name: "Frau Riedl", location: "Glockenbach", text: "Stilvolle Blechverkleidung für unser Altbau-Haus. Die Nachbarn sind begeistert!", rating: 5, project: "Spengler", date: "2024" }
  ],
  "ludwigsvorstadtisarvorstadt": [
    { name: "Hotel Ludwigsvorstadt", location: "Ludwigsvorstadt", text: "Diskrete Dacharbeiten im laufenden Betrieb. Professionell abgewickelt!", rating: 5, project: "Flachdach", date: "2024" },
    { name: "Frau Riedl", location: "Isarvorstadt", text: "Stilvolle Blechverkleidung für unser Altbau-Haus. Die Nachbarn sind begeistert!", rating: 5, project: "Spengler", date: "2024" }
  ],
  "karlsfeld": [
    { name: "Familie Huber", location: "Karlsfeld", text: "Die Dachsanierung unseres Reihenhauses war in einer Woche fertig. Saubere Arbeit!", rating: 5, project: "Dachsanierung", date: "2024" },
    { name: "Herr Bichler", location: "Karlsfeld", text: "Nach dem Hagelschaden wurde uns bei der Versicherung geholfen. Rundum-Service!", rating: 5, project: "Hagelschaden", date: "2024" }
  ],
  "lehel": [
    { name: "Kanzlei am Lehel", location: "Lehel", text: "Die historische Dachkonstruktion wurde stilecht restauriert. Höchste Qualität!", rating: 5, project: "Restaurierung", date: "2023" },
    { name: "Frau Dr. Auer", location: "Lehel", text: "Professionelle Flachdachsanierung mit minimaler Belästigung. Sehr zufrieden!", rating: 5, project: "Flachdach", date: "2024" }
  ],
  "fasanerie": [
    { name: "Familie Hofer", location: "Fasanerie", text: "Unsere Dachgaube wurde perfekt in das bestehende Dach integriert. Mehr Platz im DG!", rating: 5, project: "Gaubenbau", date: "2024" },
    { name: "Herr Kellner", location: "Fasanerie", text: "Schneller Notdienst nach Sturmschaden. Am gleichen Tag repariert!", rating: 5, project: "Sturmschaden", date: "2024" }
  ],
  "ramersdorfperlach": [
    { name: "Familie Pöschl", location: "Ramersdorf", text: "Die Dachdämmung bringt uns jeden Winter Einsparungen. Gute Investition!", rating: 5, project: "Dämmung", date: "2024" },
    { name: "WEG Perlach", location: "Perlach", text: "Professionelle Flachdachsanierung für unser Mehrfamilienhaus. Alles bestens!", rating: 5, project: "Flachdach", date: "2024" }
  ],
  "schwanthalerhoehe": [
    { name: "Gastronom Theresienwiese", location: "Schwanthalerhöhe", text: "Die Dachsanierung war rechtzeitig vor der Wiesn fertig. Perfekte Planung!", rating: 5, project: "Dachsanierung", date: "2024" },
    { name: "Frau Wimmer", location: "Westend", text: "Neue Dachfenster mit Sonnenschutz – endlich angenehme Temperaturen im Sommer!", rating: 5, project: "Dachfenster", date: "2024" }
  ],
  "sendlingwestpark": [
    { name: "Familie Müller", location: "Westpark", text: "Der Dachausbau hat uns 60m² zusätzlichen Wohnraum gebracht. Tolle Arbeit!", rating: 5, project: "Dachausbau", date: "2024" },
    { name: "Herr Steiner", location: "Sendling-Westpark", text: "Professionelle Dachdämmung mit KfW-Förderung. Alles aus einer Hand!", rating: 5, project: "Energetische Sanierung", date: "2024" }
  ],
  "westend": [
    { name: "Familie Kaiser", location: "Westend", text: "Die Mansarddach-Sanierung wurde termingerecht fertig. Handwerklich top!", rating: 5, project: "Mansarddach", date: "2023" },
    { name: "WEG Theresienhöhe", location: "Westend", text: "Zuverlässige Dachrinnenreinigung und Wartung. Langjährige Zusammenarbeit!", rating: 5, project: "Wartung", date: "2024" }
  ],
  "oberfoehring": [
    { name: "Familie Richter", location: "Oberföhring", text: "Professionelle Beratung zur Dachbegrünung – jetzt haben wir eine grüne Oase auf dem Flachdach.", rating: 5, project: "Dachbegrünung", date: "2024" },
    { name: "Dr. Förster", location: "Oberföhring", text: "Die Villensanierung wurde mit größter Sorgfalt durchgeführt. Höchste Empfehlung.", rating: 5, project: "Villensanierung", date: "2023" }
  ],
  "graefelfing": [
    { name: "Familie von Gräfelfing", location: "Gräfelfing", text: "Unsere Villa hat ein Premium-Schieferdach bekommen. Handwerklich perfekt!", rating: 5, project: "Schiefereindeckung", date: "2023" },
    { name: "Herr Lindner", location: "Gräfelfing", text: "Die Kupferrinnen passen perfekt zum historischen Stil des Hauses. Sehr zufrieden!", rating: 5, project: "Kupferarbeiten", date: "2024" }
  ],
  "ottobrunn": [
    { name: "Familie Gruber", location: "Ottobrunn", text: "Die Dachsanierung wurde termingerecht und im Budget abgeschlossen. Sehr professionell!", rating: 5, project: "Dachsanierung", date: "2024" },
    { name: "Herr Bachmann", location: "Ottobrunn", text: "Schneller Notdienst nach Sturmschaden – am gleichen Tag repariert!", rating: 5, project: "Sturmschaden", date: "2024" }
  ],
  "unterschleissheim": [
    { name: "Familie Weber", location: "Unterschleißheim", text: "Komplette Dachsanierung unseres Einfamilienhauses. Saubere und schnelle Arbeit!", rating: 5, project: "Dachsanierung", date: "2024" },
    { name: "Gewerbetreibender", location: "Unterschleißheim", text: "Flachdach unserer Lagerhalle wurde professionell saniert. Keine Probleme mehr!", rating: 5, project: "Flachdach", date: "2024" }
  ],
  "eching": [
    { name: "Familie Huber", location: "Eching", text: "Die Dachsanierung war in einer Woche fertig. Sehr zufrieden mit der Arbeit!", rating: 5, project: "Dachsanierung", date: "2024" },
    { name: "Herr Müller", location: "Eching", text: "Professioneller Service bei der Dachrinnenreinigung. Jährlich bei uns im Plan.", rating: 5, project: "Wartung", date: "2024" }
  ],
  "groebenzell": [
    { name: "Familie Stadler", location: "Gröbenzell", text: "Die energetische Sanierung hat unsere Heizkosten halbiert. Super Beratung!", rating: 5, project: "Energetische Sanierung", date: "2024" },
    { name: "Herr Weiß", location: "Gröbenzell", text: "Neue Dachfenster mit Rollläden – perfekte Montage an einem Tag!", rating: 5, project: "Dachfenster", date: "2024" }
  ],
  "olching": [
    { name: "Familie Kern", location: "Olching", text: "Die Dachreparatur wurde schnell und sauber durchgeführt. Faire Preise!", rating: 5, project: "Dachreparatur", date: "2024" },
    { name: "Herr Bauer", location: "Olching", text: "Nach dem Hagelschaden wurde uns komplett geholfen. Versicherung lief reibungslos.", rating: 5, project: "Hagelschaden", date: "2024" }
  ],
  "puchheim": [
    { name: "Familie Egger", location: "Puchheim", text: "Die Dachsanierung unseres Reihenhauses war top. Termintreu und sauber!", rating: 5, project: "Dachsanierung", date: "2024" },
    { name: "Herr Lang", location: "Puchheim", text: "Gute Beratung zur Dachdämmung. Die Förderungsanträge wurden für uns erledigt.", rating: 5, project: "Dämmung", date: "2024" }
  ],
  "milbertshofenamhart": [
    { name: "Herr Roth", location: "Milbertshofen", text: "Zuverlässige Flachdachsanierung für unsere Werkshalle. Termingerecht und professionell.", rating: 5, project: "Flachdach", date: "2024" },
    { name: "Familie Müller", location: "Am Hart", text: "Die Dachdämmung hat unseren Energieverbrauch deutlich gesenkt. Gute Investition!", rating: 5, project: "Dämmung", date: "2024" }
  ]
};

export function getTestimonialsForLocation(location: string): Testimonial[] {
  const key = location.toLowerCase().replace(/ü/g, 'ue').replace(/ö/g, 'oe').replace(/ä/g, 'ae').replace(/ß/g, 'ss').replace(/-/g, '').replace(/ /g, '');
  return testimonialsByLocation[key] || testimonialsByLocation["muenchen"] || [];
}
