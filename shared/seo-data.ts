export interface SEOPageData {
  title: string;
  description: string;
  keywords?: string;
}

export const routeSEOData: Record<string, SEOPageData> = {
  "/": {
    title: "Dachdecker und Spengler München | Bedachungen | 089Dach",
    description: "089Dach – Dachdecker in München: Dachsanierung, Reparatur, Spenglerarbeiten & Dachfenster. 24/7 Notdienst & 10 Jahre Garantie. Jetzt beraten lassen!",
    keywords: "Dachdecker München, Dachsanierung München, Dachreparatur München, Flachdach München, Spengler München, Dachfenster München, Notdienst Dach München, Dachdecker Obermenzing"
  },
  "/leistungen": {
    title: "Dachdeckerleistungen München | Meisterbetrieb 089Dach",
    description: "Alle Dachdeckerleistungen: Steildach, Flachdach, Spenglerei, Dachfenster & Reparatur. Meisterqualität aus München.",
    keywords: "Dachdeckerleistungen, Steildach, Flachdach, Spenglerei, Dachfenster, Dachreparatur München"
  },
  "/leistungen/bedachungen": {
    title: "Bedachungen München | Steildach Flachdach | 089Dach",
    description: "Professionelle Bedachungen in München: Steildach, Flachdach, Neueindeckung. Meisterbetrieb mit 10 Jahren Garantie.",
    keywords: "Bedachungen München, Steildach München, Flachdach München, Dach eindecken"
  },
  "/leistungen/spenglerei": {
    title: "Spenglerei München | Blecharbeiten Rinnen | 089Dach",
    description: "Spenglerarbeiten vom Meister: Dachrinnen, Blechverkleidung, Kaminverwahrung. Qualität aus München.",
    keywords: "Spenglerei München, Spenglerarbeiten, Dachrinnen, Blecharbeiten"
  },
  "/leistungen/dachsanierung": {
    title: "Dachsanierung München | Komplett Garantie | 089Dach",
    description: "Dachsanierung München: Altbau, Neubau, energetisch. Festpreis-Angebot & 10 Jahre Garantie. Jetzt beraten lassen!",
    keywords: "Dachsanierung München, Altbausanierung Dach, Komplettsanierung Dach"
  },
  "/leistungen/dachfenster": {
    title: "Dachfenster München | Einbau Austausch | 089Dach",
    description: "Dachfenster einbauen München: VELUX, Roto, Fakro. Fachgerechter Einbau mit Garantie. Kostenlose Beratung!",
    keywords: "Dachfenster München, VELUX, Dachfenster einbauen, Dachfenster austauschen"
  },
  "/leistungen/reparaturservice": {
    title: "Dachreparatur München | Schnell Zuverlässig | 089Dach",
    description: "Dachreparatur München: Undichte Stellen, Sturmschäden, Ziegel. 24/7 Notdienst. Schnelle Hilfe!",
    keywords: "Dachreparatur München, Dach reparieren, Sturmschaden Dach"
  },
  "/leistungen/energieberatung": {
    title: "Energieberatung Dach München | Dämmung | 089Dach",
    description: "Energieberatung für Ihr Dach: Dämmung, Förderung, Einsparpotenzial. Unabhängig & qualifiziert.",
    keywords: "Energieberatung Dach, Dachdämmung, Förderung Dachsanierung"
  },
  "/leistungen/architektenleistungen": {
    title: "Architektenleistungen Dach | Planung | 089Dach",
    description: "Architektenleistungen: Planung, Statik, Baubegleitung für Dachprojekte. Ihr Partner für anspruchsvolle Projekte.",
    keywords: "Architektenleistungen Dach, Dachplanung, Baubegleitung"
  },
  "/leistungen/gaubenbau": {
    title: "Gaubenbau München | Dachgaube Wohnraum | 089Dach",
    description: "Gaubenbau München: Schleppgaube, Spitzgaube, Flachdachgaube. Mehr Licht & Platz. Vom Meisterbetrieb.",
    keywords: "Gaubenbau München, Dachgaube, Schleppgaube, Spitzgaube"
  },
  "/leistungen/wartung": {
    title: "Dachwartung München | Inspektion Service | 089Dach",
    description: "Dachwartung München: Inspektion, Reinigung, kleine Reparaturen. Schutz für Ihr Dach. Jetzt Termin!",
    keywords: "Dachwartung München, Dachinspektion, Dachreinigung"
  },
  "/leistungen/flachdach": {
    title: "Flachdach München | Abdichtung Sanierung | 089Dach",
    description: "Flachdach München: Abdichtung, Sanierung, Begrünung. Bitumen & EPDM. Meisterqualität mit Garantie.",
    keywords: "Flachdach München, Flachdachabdichtung, Flachdachsanierung"
  },
  "/leistungen/sturmschaden": {
    title: "Sturmschaden Dach München | Soforthilfe | 089Dach",
    description: "Sturmschaden am Dach? 24/7 Notdienst München. Schnelle Sicherung & Reparatur. Versicherungsabwicklung.",
    keywords: "Sturmschaden Dach, Dach Notdienst München, Sturm Dachreparatur"
  },
  "/leistungen/dachbeschichtung": {
    title: "Dachbeschichtung München | Schutz Optik | 089Dach",
    description: "Dachbeschichtung München: Langzeitschutz für Ziegel. Farbauffrischung ohne Neueindeckung. Beratung gratis!",
    keywords: "Dachbeschichtung München, Dachziegel beschichten, Dachrenovierung"
  },
  "/leistungen/dachrinnenreinigung": {
    title: "Dachrinnenreinigung München | Service | 089Dach",
    description: "Dachrinnenreinigung München: Laub, Moos, Verstopfungen entfernen. Regelmäßiger Service für Ihr Dach.",
    keywords: "Dachrinnenreinigung München, Dachrinne reinigen, Fallrohr reinigen"
  },
  "/leistungen/notdienst": {
    title: "Dach Notdienst München | 24/7 Soforthilfe | 089Dach",
    description: "Dach Notdienst München: Sturm, Wasser, Undichtigkeit. 24/7 Soforthilfe. Schnell vor Ort. Jetzt anrufen!",
    keywords: "Dach Notdienst München, Dachdecker Notfall, 24/7 Dachreparatur"
  },
  "/referenzen": {
    title: "Referenzen Dachdecker München | Projekte | 089Dach",
    description: "Unsere Dach-Referenzen: Sanierungen, Neubauten, Reparaturen in München. Überzeugen Sie sich!",
    keywords: "Referenzen Dachdecker, Dachprojekte München, Kundenbewertungen"
  },
  "/ratgeber": {
    title: "Dach Ratgeber München | Tipps Kosten | 089Dach",
    description: "Dach-Ratgeber: Tipps zu Sanierung, Dämmung, Kosten, Förderung. Expertenwissen für Hausbesitzer.",
    keywords: "Dach Ratgeber, Dachsanierung Tipps, Dachdämmung Infos"
  },
  "/ratgeber/daemmung": {
    title: "Dachdämmung Ratgeber | Tipps Kosten | 089Dach",
    description: "Dachdämmung: Arten, Kosten, Förderung. Welche Dämmung für Ihr Dach? Expertenratgeber.",
    keywords: "Dachdämmung Ratgeber, Dämmung Kosten, Einblasdämmung"
  },
  "/ratgeber/leckortung": {
    title: "Leckortung Dach München | Undicht finden | 089Dach",
    description: "Leckortung am Dach: Wo ist das Leck? Moderne Technik findet undichte Stellen. Schnell & zerstörungsfrei.",
    keywords: "Leckortung Dach, undichtes Dach finden, Wasserschaden Dach"
  },
  "/ratgeber/beratung": {
    title: "Dachberatung München | Kostenlos | 089Dach",
    description: "Kostenlose Dachberatung: Zustand, Sanierungsoptionen, Kosten. Unverbindlich & ehrlich. Termin vereinbaren!",
    keywords: "Dachberatung München, Dachcheck, kostenlose Beratung Dach"
  },
  "/ratgeber/sturmschaden": {
    title: "Sturmschaden Dach Ratgeber | Was tun | 089Dach",
    description: "Sturmschaden am Dach: Erste Hilfe, Versicherung, Reparatur. Schritt-für-Schritt Anleitung für Hausbesitzer.",
    keywords: "Sturmschaden Dach Ratgeber, Dach Sturm Versicherung"
  },
  "/ratgeber/kosten": {
    title: "Dachsanierung Kosten | Preise München | 089Dach",
    description: "Was kostet eine Dachsanierung? Preise für München: Eindeckung, Dämmung, Gerüst. Transparente Kalkulation.",
    keywords: "Dachsanierung Kosten, Dachdecker Preise München, Dacheindeckung Kosten"
  },
  "/ratgeber/materialien": {
    title: "Dachmaterialien Vergleich | Ziegel Schiefer | 089Dach",
    description: "Dachmaterialien im Vergleich: Ziegel, Schiefer, Metall, Bitumen. Vor- & Nachteile für München.",
    keywords: "Dachmaterialien, Dachziegel, Schiefer Dach, Blechdach"
  },
  "/faq": {
    title: "FAQ Dachdecker München | Fragen Antworten | 089Dach",
    description: "Häufige Fragen zu Dachsanierung, Reparatur, Kosten. Antworten vom Dachdeckermeister.",
    keywords: "FAQ Dachdecker, Dach Fragen, Dachsanierung FAQ"
  },
  "/kontakt": {
    title: "Kontakt Dachdecker München | Anruf E-Mail | 089Dach",
    description: "Kontaktieren Sie uns: Telefon, E-Mail, Rückruf-Service. Ihr Dachdecker-Meisterbetrieb in München.",
    keywords: "Kontakt Dachdecker München, 089Dach Kontakt"
  },
  "/ueber-uns": {
    title: "Über uns | Meisterbetrieb München | 089Dach",
    description: "089Dach: Familiengeführter Meisterbetrieb in München. Über 25 Jahre Erfahrung. Lernen Sie uns kennen!",
    keywords: "089Dach Team, Dachdecker Meisterbetrieb, München Obermenzing"
  },
  "/impressum": {
    title: "Impressum | 089Dach GmbH München",
    description: "Impressum der 089Dach GmbH – Ihr Dachdecker-Meisterbetrieb in München.",
    keywords: "Impressum 089Dach"
  },
  "/datenschutz": {
    title: "Datenschutz | 089Dach GmbH München",
    description: "Datenschutzerklärung der 089Dach GmbH gemäß DSGVO.",
    keywords: "Datenschutz 089Dach, DSGVO"
  },
  "/cookies": {
    title: "Cookie Einstellungen | 089Dach München",
    description: "Cookie-Einstellungen für 089dach.de anpassen.",
    keywords: "Cookies, Cookie-Einstellungen"
  },
  "/cookie-richtlinie": {
    title: "Cookie Richtlinie | 089Dach München",
    description: "Cookie-Richtlinie der 089Dach GmbH. Welche Cookies wir verwenden.",
    keywords: "Cookie-Richtlinie, Cookies"
  },
  "/agb": {
    title: "AGB | 089Dach GmbH München Dachdecker",
    description: "Allgemeine Geschäftsbedingungen der 089Dach GmbH für Dachdeckerleistungen.",
    keywords: "AGB Dachdecker, Geschäftsbedingungen"
  },
  "/rueckruf": {
    title: "Rückruf Service Dachdecker | Termin | 089Dach",
    description: "Rückruf-Service: Wir rufen Sie zurück. Termin wählen & Dachfrage klären. Kostenlos & unverbindlich.",
    keywords: "Rückruf Dachdecker, Termin vereinbaren"
  },
  "/beratung": {
    title: "Kostenlose Dachberatung München | Termin | 089Dach",
    description: "Kostenlose Dachberatung vor Ort in München. Zustandsanalyse, Angebot, Fördercheck. Jetzt Termin!",
    keywords: "kostenlose Dachberatung, Beratungstermin Dach"
  },
  "/heizkostenrechner": {
    title: "Heizkostenrechner | Dämmung sparen | 089Dach",
    description: "Heizkostenrechner: Berechnen Sie Ihr Einsparpotenzial durch Dachdämmung. Schnell & einfach.",
    keywords: "Heizkostenrechner, Dämmung sparen, Energiekosten senken"
  },
  "/daemmung-info": {
    title: "Dachdämmung Info | Arten Vorteile | 089Dach",
    description: "Alles über Dachdämmung: Aufsparren, Zwischensparren, Untersparren. Welche Dämmung für Ihr Dach?",
    keywords: "Dachdämmung Info, Dämmarten, Einblasdämmung"
  },
  "/stadtteile": {
    title: "Dachdecker Münchner Stadtteile | Lokal | 089Dach",
    description: "089Dach – Ihr Dachdecker in allen Münchner Stadtteilen. Kurze Anfahrt, lokale Expertise.",
    keywords: "Dachdecker Stadtteile München, lokaler Dachdecker"
  },
  "/dachdecker-pasing": {
    title: "Dachdecker Pasing | Sanierung Reparatur | 089Dach",
    description: "Dachdecker in Pasing: Dachsanierung, Reparatur, Flachdach. Schnell vor Ort. Kostenlose Beratung!",
    keywords: "Dachdecker Pasing, Dach Pasing, Dachsanierung Pasing"
  },
  "/dachdecker-laim": {
    title: "Dachdecker Laim | Sanierung Notdienst | 089Dach",
    description: "Dachdecker in Laim: Dachsanierung, Reparatur, Notdienst. Kurze Anfahrt. Jetzt beraten lassen!",
    keywords: "Dachdecker Laim, Dach Laim, Dachsanierung Laim"
  },
  "/dachdecker-schwabing": {
    title: "Dachdecker Schwabing | Altbau Sanierung | 089Dach",
    description: "Dachdecker in Schwabing: Altbausanierung, Denkmalschutz, Reparatur. Erfahrung mit Jugendstil-Dächern.",
    keywords: "Dachdecker Schwabing, Altbau Dach, Denkmalschutz Dach"
  },
  "/dachdecker-sendling": {
    title: "Dachdecker Sendling | Steildach Flachdach | 089Dach",
    description: "Dachdecker in Sendling: Dachsanierung, Steildach, Flachdach. Lokaler Meisterbetrieb. Kostenlos beraten!",
    keywords: "Dachdecker Sendling, Dach Sendling, Dachsanierung Sendling"
  },
  "/dachdecker-graefelfing": {
    title: "Dachdecker Gräfelfing | Schnell Zuverlässig | 089Dach",
    description: "Dachdecker in Gräfelfing: Villen, Einfamilienhäuser, Reparatur. Kurze Anfahrt aus Obermenzing.",
    keywords: "Dachdecker Gräfelfing, Dach Gräfelfing"
  },
  "/dachdecker-bogenhausen": {
    title: "Dachdecker Bogenhausen | Villa Altbau | 089Dach",
    description: "Dachdecker in Bogenhausen: Villen, Altbau, hochwertige Sanierung. Diskreter Service. Erstberatung gratis!",
    keywords: "Dachdecker Bogenhausen, Villa Dach, Altbau Bogenhausen"
  },
  "/dachdecker-nymphenburg": {
    title: "Dachdecker Nymphenburg | Villen Altbau | 089Dach",
    description: "Dachdecker in Nymphenburg: Altbau, Villen, Reparatur. Aus Obermenzing – schnell bei Ihnen!",
    keywords: "Dachdecker Nymphenburg, Dach Nymphenburg"
  },
  "/dachdecker-harlaching": {
    title: "Dachdecker Harlaching | Sanierung Wartung | 089Dach",
    description: "Dachdecker in Harlaching: Dachsanierung, Reparatur, Wartung. Zuverlässig & fair. Beratung kostenlos!",
    keywords: "Dachdecker Harlaching, Dach Harlaching"
  },
  "/dachdecker-trudering": {
    title: "Dachdecker Trudering | Einfamilienhaus | 089Dach",
    description: "Dachdecker in Trudering: Einfamilienhäuser, Reihenhaus, Notdienst. Lokaler Service. Jetzt Termin!",
    keywords: "Dachdecker Trudering, Dach Trudering"
  },
  "/dachdecker-moosach": {
    title: "Dachdecker Moosach | Sanierung Neubau | 089Dach",
    description: "Dachdecker in Moosach: Sanierung, Reparatur, Neubau. Kurze Wege aus Obermenzing. Kostenlose Beratung!",
    keywords: "Dachdecker Moosach, Dach Moosach"
  },
  "/dachdecker-allach": {
    title: "Dachdecker Allach Untermenzing | Nachbar | 089Dach",
    description: "Dachdecker in Allach-Untermenzing: Schnellste Anfahrt! Dachsanierung, Reparatur, Wartung. Ihr Nachbar-Meister.",
    keywords: "Dachdecker Allach, Dach Allach, Untermenzing"
  },
  "/dachdecker-karlsfeld": {
    title: "Dachdecker Karlsfeld | Schnell Service | 089Dach",
    description: "Dachdecker in Karlsfeld: Nur 10 Min Anfahrt. Dachsanierung, Reparatur, Flachdach. Jetzt beraten!",
    keywords: "Dachdecker Karlsfeld, Dach Karlsfeld"
  },
  "/dachdecker-fasanerie": {
    title: "Dachdecker Fasanerie | Steildach Flachdach | 089Dach",
    description: "Dachdecker in der Fasanerie: Dachsanierung, Steildach, Flachdach. Schnell vor Ort. Kostenlos beraten!",
    keywords: "Dachdecker Fasanerie, Dach Fasanerie"
  },
  "/dachdecker-feldmoching": {
    title: "Dachdecker Feldmoching | Sanierung Wartung | 089Dach",
    description: "Dachdecker in Feldmoching-Hasenbergl: Sanierung, Reparatur, Wartung. Faire Preise. Beratung gratis!",
    keywords: "Dachdecker Feldmoching, Dach Feldmoching"
  },
  "/dachdecker-neuhausen": {
    title: "Dachdecker Neuhausen | Altbau Reparatur | 089Dach",
    description: "Dachdecker in Neuhausen-Nymphenburg: Altbau, Reparatur, Sanierung. Kurze Anfahrt. Jetzt Termin!",
    keywords: "Dachdecker Neuhausen, Dach Neuhausen"
  },
  "/dachdecker-obermenzing": {
    title: "Dachdecker Obermenzing | Ihr Nachbar | 089Dach",
    description: "Dachdecker in Obermenzing: Unser Standort! Schnellste Reaktion, persönlicher Service. Ihr Nachbar-Meister.",
    keywords: "Dachdecker Obermenzing, Dach Obermenzing, lokaler Dachdecker"
  },
  "/dachdecker-solln": {
    title: "Dachdecker Solln | Villen Premium | 089Dach",
    description: "Dachdecker in Solln: Villen, gehobene Ansprüche, Altbau. Premium-Service vom Meisterbetrieb.",
    keywords: "Dachdecker Solln, Villa Dach Solln"
  },
  "/dachdecker-giesing": {
    title: "Dachdecker Giesing | Altbau Reihenhaus | 089Dach",
    description: "Dachdecker in Giesing: Altbau, Reihenhaus, Reparatur. Zuverlässig & fair. Kostenlose Erstberatung!",
    keywords: "Dachdecker Giesing, Dach Giesing"
  },
  "/dachdecker-germering": {
    title: "Dachdecker Germering | Sanierung Neubau | 089Dach",
    description: "Dachdecker in Germering: Sanierung, Reparatur, Neubau. Kurze Anfahrt aus München-Obermenzing.",
    keywords: "Dachdecker Germering, Dach Germering"
  },
  "/dachdecker-starnberg": {
    title: "Dachdecker Starnberg | Villa Premium | 089Dach",
    description: "Dachdecker in Starnberg: Villen, Seegrundstücke, gehobene Ansprüche. Qualität aus München.",
    keywords: "Dachdecker Starnberg, Villa Dach Starnberg"
  },
  "/dachdecker-dachau": {
    title: "Dachdecker Dachau | Sanierung Flachdach | 089Dach",
    description: "Dachdecker in Dachau: Sanierung, Reparatur, Flachdach. Kurze Anfahrt. Beratung kostenlos!",
    keywords: "Dachdecker Dachau, Dach Dachau"
  },
  "/dachdecker-freising": {
    title: "Dachdecker Freising | Gewerbe Sanierung | 089Dach",
    description: "Dachdecker in Freising: Einfamilienhaus, Gewerbe, Sanierung. Qualität aus München-Obermenzing.",
    keywords: "Dachdecker Freising, Dach Freising"
  },
  "/dachdecker-erding": {
    title: "Dachdecker Erding | Sanierung Neubau | 089Dach",
    description: "Dachdecker in Erding: Sanierung, Neubau, Reparatur. Meisterqualität aus München.",
    keywords: "Dachdecker Erding, Dach Erding"
  },
  "/dachdecker-unterschleissheim": {
    title: "Dachdecker Unterschleißheim | Gewerbe | 089Dach",
    description: "Dachdecker in Unterschleißheim: Sanierung, Reparatur, Gewerbe. Kurze Anfahrt. Jetzt beraten!",
    keywords: "Dachdecker Unterschleißheim, Dach Unterschleißheim"
  },
  "/dachdecker-fuerstenfeldbruck": {
    title: "Dachdecker Fürstenfeldbruck FFB | Sanierung | 089Dach",
    description: "Dachdecker in FFB: Sanierung, Reparatur, Wartung. Qualität aus München. Faire Preise!",
    keywords: "Dachdecker Fürstenfeldbruck, Dach FFB"
  },
  "/dachdecker-ottobrunn": {
    title: "Dachdecker Ottobrunn | Einfamilienhaus | 089Dach",
    description: "Dachdecker in Ottobrunn: Einfamilienhaus, Reihenhaus, Reparatur. Meisterqualität. Beratung gratis!",
    keywords: "Dachdecker Ottobrunn, Dach Ottobrunn"
  },
  "/dachdecker-groebenzell": {
    title: "Dachdecker Gröbenzell | Sanierung Wartung | 089Dach",
    description: "Dachdecker in Gröbenzell: Nur 15 Min Anfahrt! Sanierung, Reparatur, Wartung. Kostenlose Beratung!",
    keywords: "Dachdecker Gröbenzell, Dach Gröbenzell"
  },
  "/dachdecker-puchheim": {
    title: "Dachdecker Puchheim | Sanierung Flachdach | 089Dach",
    description: "Dachdecker in Puchheim: Sanierung, Reparatur, Flachdach. Kurze Wege aus München. Jetzt Termin!",
    keywords: "Dachdecker Puchheim, Dach Puchheim"
  },
  "/dachdecker-olching": {
    title: "Dachdecker Olching | Sanierung Neubau | 089Dach",
    description: "Dachdecker in Olching: Sanierung, Neubau, Reparatur. Meisterqualität aus München. Beratung gratis!",
    keywords: "Dachdecker Olching, Dach Olching"
  },
  "/dachdecker-eching": {
    title: "Dachdecker Eching | Gewerbe Wartung | 089Dach",
    description: "Dachdecker in Eching: Einfamilienhaus, Gewerbe, Wartung. Kurze Anfahrt. Kostenlose Erstberatung!",
    keywords: "Dachdecker Eching, Dach Eching"
  },
  "/dachdecker-ramersdorf-perlach": {
    title: "Dachdecker Ramersdorf Perlach | Sanierung | 089Dach",
    description: "Dachdecker in Ramersdorf-Perlach: Sanierung, Reparatur, Wartung. Lokaler Service. Beratung gratis!",
    keywords: "Dachdecker Ramersdorf, Dachdecker Perlach"
  },
  "/dachdecker-au-haidhausen": {
    title: "Dachdecker Haidhausen Au | Altbau | 089Dach",
    description: "Dachdecker in Au-Haidhausen: Gründerzeit, Altbau, Sanierung. Erfahrung mit historischen Dächern.",
    keywords: "Dachdecker Haidhausen, Dachdecker Au, Altbau Dach"
  },
  "/dachdecker-milbertshofen": {
    title: "Dachdecker Milbertshofen | Gewerbe | 089Dach",
    description: "Dachdecker in Milbertshofen-Am Hart: Sanierung, Reparatur, Gewerbe. Schnell vor Ort. Jetzt beraten!",
    keywords: "Dachdecker Milbertshofen, Dach Am Hart"
  },
  "/dachdecker-maxvorstadt": {
    title: "Dachdecker Maxvorstadt | Altbau Jugendstil | 089Dach",
    description: "Dachdecker in Maxvorstadt: Altbau, Jugendstil, Sanierung. Innenstadtlage, kurze Wege. Beratung gratis!",
    keywords: "Dachdecker Maxvorstadt, Altbau Dach Maxvorstadt"
  },
  "/dachdecker-lehel": {
    title: "Dachdecker Lehel | Altbau Denkmalschutz | 089Dach",
    description: "Dachdecker im Lehel: Altbau, Denkmalschutz, gehobene Ansprüche. Diskreter Service. Erstberatung gratis!",
    keywords: "Dachdecker Lehel, Altbau Dach Lehel"
  },
  "/dachdecker-thalkirchen": {
    title: "Dachdecker Thalkirchen Obersendling | 089Dach",
    description: "Dachdecker in Thalkirchen-Obersendling: Sanierung, Reparatur, Wartung. Lokaler Service. Beratung gratis!",
    keywords: "Dachdecker Thalkirchen, Dach Obersendling"
  },
  "/dachdecker-hadern": {
    title: "Dachdecker Hadern | Sanierung Wartung | 089Dach",
    description: "Dachdecker in Hadern: Kurze Anfahrt aus Obermenzing! Sanierung, Reparatur, Wartung. Jetzt beraten!",
    keywords: "Dachdecker Hadern, Dach Hadern"
  },
  "/dachdecker-westend": {
    title: "Dachdecker Westend | Altbau Reparatur | 089Dach",
    description: "Dachdecker im Westend: Altbau, Reparatur, Sanierung. Schnell vor Ort. Kostenlose Erstberatung!",
    keywords: "Dachdecker Westend, Dach Westend"
  },
  "/dachdecker-berg-am-laim": {
    title: "Dachdecker Berg am Laim | Sanierung | 089Dach",
    description: "Dachdecker in Berg am Laim: Sanierung, Reparatur, Wartung. Lokaler Service. Beratung kostenlos!",
    keywords: "Dachdecker Berg am Laim"
  },
  "/dachdecker-altstadt": {
    title: "Dachdecker Altstadt München | Denkmalschutz | 089Dach",
    description: "Dachdecker in der Altstadt: Denkmalschutz, historische Dächer, Sanierung. Erfahrung seit 1998.",
    keywords: "Dachdecker Altstadt München, Denkmalschutz Dach"
  },
  "/dachdecker-ludwigsvorstadt-isarvorstadt": {
    title: "Dachdecker Isarvorstadt | Altbau Sanierung | 089Dach",
    description: "Dachdecker in Ludwigsvorstadt-Isarvorstadt: Altbau, Reparatur, Sanierung. Innenstadtlage. Beratung gratis!",
    keywords: "Dachdecker Isarvorstadt, Dachdecker Ludwigsvorstadt"
  },
  "/dachdecker-schwanthalerhoehe": {
    title: "Dachdecker Schwanthalerhöhe | Altbau | 089Dach",
    description: "Dachdecker an der Schwanthalerhöhe: Altbau, Reparatur, Sanierung. Schnell vor Ort. Beratung gratis!",
    keywords: "Dachdecker Schwanthalerhöhe"
  },
  "/dachdecker-sendling-westpark": {
    title: "Dachdecker Sendling Westpark | Sanierung | 089Dach",
    description: "Dachdecker in Sendling-Westpark: Sanierung, Reparatur, Wartung. Lokaler Service. Kostenlose Beratung!",
    keywords: "Dachdecker Sendling-Westpark"
  },
  "/dachdecker-freimann": {
    title: "Dachdecker Freimann | Gewerbe Sanierung | 089Dach",
    description: "Dachdecker in Freimann: Sanierung, Reparatur, Gewerbe. Schnell vor Ort. Beratung kostenlos!",
    keywords: "Dachdecker Freimann"
  },
  "/dachdecker-hasenbergl": {
    title: "Dachdecker Hasenbergl | Sanierung Wartung | 089Dach",
    description: "Dachdecker im Hasenbergl: Sanierung, Reparatur, Wartung. Faire Preise. Kostenlose Erstberatung!",
    keywords: "Dachdecker Hasenbergl"
  },
  "/dachdecker-oberfoehring": {
    title: "Dachdecker Oberföhring | Villen Sanierung | 089Dach",
    description: "Dachdecker in Oberföhring: Villen, Einfamilienhäuser, Sanierung. Premium-Service. Beratung gratis!",
    keywords: "Dachdecker Oberföhring"
  },
  "/dachdecker-aubing-lochhausen-langwied": {
    title: "Dachdecker Aubing Lochhausen | Nachbar | 089Dach",
    description: "Dachdecker in Aubing-Lochhausen-Langwied: Nachbar-Betrieb! Schnellste Anfahrt. Sanierung, Reparatur.",
    keywords: "Dachdecker Aubing, Dachdecker Lochhausen"
  },
  "/dachdecker-muenchen": {
    title: "Dachdecker München | Meisterbetrieb 1998 | 089Dach",
    description: "Ihr Dachdecker in München: Sanierung, Reparatur, Notdienst. 10 Jahre Garantie. Kostenlose Beratung!",
    keywords: "Dachdecker München, Dachdeckerei München, Dachdeckermeister"
  },
  "/dachdecker-muenchen-umgebung": {
    title: "Dachdecker München Umgebung | Landkreis | 089Dach",
    description: "Dachdecker rund um München: Starnberg, Dachau, Freising, FFB. Meisterqualität mit kurzer Anfahrt.",
    keywords: "Dachdecker München Umgebung, Dachdecker Landkreis München"
  },
  "/dachdecker-spengler-muenchen": {
    title: "Dachdecker Spengler München | Meister | 089Dach",
    description: "Dachdecker & Spengler in München: Dach, Blech, Rinnen. Alles aus einer Hand. Meisterbetrieb!",
    keywords: "Dachdecker Spengler, Dachdeckerei Spenglerei München"
  },
  "/dachdecker-dachdeckerei-muenchen": {
    title: "Dachdeckerei München | Meisterbetrieb | 089Dach",
    description: "Dachdeckerei München: Eindeckung, Sanierung, Reparatur. Familiengeführt seit 1998. Jetzt beraten!",
    keywords: "Dachdeckerei München, Dachdecker Betrieb München"
  },
  "/dachdecker-planegg": {
    title: "Dachdecker Planegg | Sanierung Reparatur | 089Dach",
    description: "Dachdecker in Planegg: Schnelle Anfahrt, faire Preise. Dachsanierung, Reparatur, Wartung.",
    keywords: "Dachdecker Planegg, Dach Planegg"
  },
  "/dachdecker-gauting": {
    title: "Dachdecker Gauting | Villen Sanierung | 089Dach",
    description: "Dachdecker in Gauting: Villen, Einfamilienhäuser, Sanierung. Premium-Service aus München.",
    keywords: "Dachdecker Gauting, Dach Gauting"
  },
  "/dachdecker-krailling": {
    title: "Dachdecker Krailling | Sanierung Service | 089Dach",
    description: "Dachdecker in Krailling: Dachsanierung, Reparatur, Wartung. Kurze Anfahrt. Beratung gratis!",
    keywords: "Dachdecker Krailling, Dach Krailling"
  },
  "/dachdecker-pullach": {
    title: "Dachdecker Pullach | Villen Premium | 089Dach",
    description: "Dachdecker in Pullach: Villen, gehobene Ansprüche, Sanierung. Qualität aus München.",
    keywords: "Dachdecker Pullach, Dach Pullach"
  },
  "/dachdecker-gruenwald": {
    title: "Dachdecker Grünwald | Villen Premium | 089Dach",
    description: "Dachdecker in Grünwald: Villen, Luxus-Immobilien, Sanierung. Premium-Service vom Meister.",
    keywords: "Dachdecker Grünwald, Dach Grünwald"
  },
  "/dachdecker-unterhaching": {
    title: "Dachdecker Unterhaching | Sanierung Service | 089Dach",
    description: "Dachdecker in Unterhaching: Einfamilienhaus, Reihenhaus, Reparatur. Faire Preise. Beratung gratis!",
    keywords: "Dachdecker Unterhaching, Dach Unterhaching"
  },
  "/dachdecker-taufkirchen": {
    title: "Dachdecker Taufkirchen | Sanierung Neubau | 089Dach",
    description: "Dachdecker in Taufkirchen: Sanierung, Neubau, Reparatur. Meisterqualität. Kostenlose Beratung!",
    keywords: "Dachdecker Taufkirchen, Dach Taufkirchen"
  },
  "/dachdecker-haar": {
    title: "Dachdecker Haar | Sanierung Reparatur | 089Dach",
    description: "Dachdecker in Haar: Dachsanierung, Reparatur, Wartung. Kurze Anfahrt. Beratung kostenlos!",
    keywords: "Dachdecker Haar, Dach Haar"
  },
  "/dachdecker-ismaning": {
    title: "Dachdecker Ismaning | Gewerbe Sanierung | 089Dach",
    description: "Dachdecker in Ismaning: Einfamilienhaus, Gewerbe, Sanierung. Qualität aus München. Jetzt beraten!",
    keywords: "Dachdecker Ismaning, Dach Ismaning"
  },
  "/dachdecker-unterfoehring": {
    title: "Dachdecker Unterföhring | Gewerbe Villen | 089Dach",
    description: "Dachdecker in Unterföhring: Gewerbe, Villen, Sanierung. Premium-Service. Beratung gratis!",
    keywords: "Dachdecker Unterföhring, Dach Unterföhring"
  },
  "/dachdecker-aschheim": {
    title: "Dachdecker Aschheim | Sanierung Gewerbe | 089Dach",
    description: "Dachdecker in Aschheim: Sanierung, Gewerbe, Reparatur. Kurze Anfahrt. Beratung kostenlos!",
    keywords: "Dachdecker Aschheim, Dach Aschheim"
  },
  "/dachdecker-garching": {
    title: "Dachdecker Garching | Gewerbe Sanierung | 089Dach",
    description: "Dachdecker in Garching: Gewerbe, Einfamilienhaus, Sanierung. Qualität aus München.",
    keywords: "Dachdecker Garching, Dach Garching"
  },
  "/dachdecker-oberschleissheim": {
    title: "Dachdecker Oberschleißheim | Sanierung | 089Dach",
    description: "Dachdecker in Oberschleißheim: Sanierung, Reparatur, Wartung. Kurze Anfahrt. Beratung gratis!",
    keywords: "Dachdecker Oberschleißheim, Dach Oberschleißheim"
  },
  "/dachdecker-neubiberg": {
    title: "Dachdecker Neubiberg | Sanierung Reparatur | 089Dach",
    description: "Dachdecker in Neubiberg: Einfamilienhaus, Sanierung, Reparatur. Faire Preise. Beratung gratis!",
    keywords: "Dachdecker Neubiberg, Dach Neubiberg"
  },
  "/dachdecker-putzbrunn": {
    title: "Dachdecker Putzbrunn | Sanierung Service | 089Dach",
    description: "Dachdecker in Putzbrunn: Sanierung, Reparatur, Wartung. Meisterqualität. Kostenlose Beratung!",
    keywords: "Dachdecker Putzbrunn, Dach Putzbrunn"
  },
  "/dachdecker-hohenbrunn": {
    title: "Dachdecker Hohenbrunn | Sanierung Reparatur | 089Dach",
    description: "Dachdecker in Hohenbrunn: Einfamilienhaus, Sanierung, Reparatur. Kurze Anfahrt. Beratung gratis!",
    keywords: "Dachdecker Hohenbrunn, Dach Hohenbrunn"
  },
  "/dachdecker-graefelfing-planegg": {
    title: "Dachdecker Gräfelfing Planegg | Service | 089Dach",
    description: "Dachdecker in Gräfelfing & Planegg: Villen, Einfamilienhäuser, Sanierung. Kurze Anfahrt.",
    keywords: "Dachdecker Gräfelfing, Dachdecker Planegg"
  },
  "/dach-kostenrechner": {
    title: "Dach Kostenrechner | Sanierung Preise | 089Dach",
    description: "Dach-Kostenrechner: Berechnen Sie Ihre Dachsanierungskosten. Schnell & einfach. Unverbindlich!",
    keywords: "Dach Kostenrechner, Dachsanierung Kosten berechnen"
  },
  "/flachdach-muenchen": {
    title: "Flachdach München | Abdichtung Sanierung | 089Dach",
    description: "Flachdach München: Abdichtung, Sanierung, Begrünung. Bitumen, EPDM, Folie. Meisterqualität!",
    keywords: "Flachdach München, Flachdachsanierung, Flachdachabdichtung"
  },
  "/steildach-muenchen": {
    title: "Steildach München | Eindeckung Sanierung | 089Dach",
    description: "Steildach München: Neueindeckung, Sanierung, Dämmung. Ziegel, Schiefer, Metall. Meisterbetrieb!",
    keywords: "Steildach München, Steildachsanierung, Dacheindeckung"
  },
  "/dachrinne-muenchen": {
    title: "Dachrinne München | Montage Reparatur | 089Dach",
    description: "Dachrinnen München: Montage, Reparatur, Reinigung. Kupfer, Zink, Aluminium. Vom Spenglermeister!",
    keywords: "Dachrinne München, Dachrinnen Montage, Dachrinne reparieren"
  },
  "/blechdach-muenchen": {
    title: "Blechdach München | Stehfalz Montage | 089Dach",
    description: "Blechdach München: Stehfalz, Klick-System, Trapez. Zink, Kupfer, Alu. Spenglermeister-Qualität!",
    keywords: "Blechdach München, Stehfalzdach, Metalldach"
  },
  "/ziegeldach-muenchen": {
    title: "Ziegeldach München | Eindeckung Sanierung | 089Dach",
    description: "Ziegeldach München: Neueindeckung, Sanierung, Reparatur. Ton, Beton, Schiefer. Meisterqualität!",
    keywords: "Ziegeldach München, Ziegeldach Sanierung, Dachziegel"
  },
  "/schieferdach-muenchen": {
    title: "Schieferdach München | Eindeckung Sanierung | 089Dach",
    description: "Schieferdach München: Eindeckung, Sanierung, Reparatur. Naturschiefer vom Dachdeckermeister!",
    keywords: "Schieferdach München, Schiefer Dach, Naturschiefer"
  },
  "/dachgaube-muenchen": {
    title: "Dachgaube München | Bau Sanierung | 089Dach",
    description: "Dachgauben München: Neubau, Sanierung, verschiedene Formen. Mehr Wohnraum & Licht. Meisterqualität!",
    keywords: "Dachgaube München, Gaube bauen, Dachgauben Sanierung"
  },
  "/dachdaemmung-muenchen": {
    title: "Dachdämmung München | Aufsparren Zwischen | 089Dach",
    description: "Dachdämmung München: Aufsparren, Zwischensparren, Untersparren. Energieeffizient & gefördert!",
    keywords: "Dachdämmung München, Aufsparrendämmung, Zwischensparrendämmung"
  },
  "/dachstuhl-muenchen": {
    title: "Dachstuhl München | Neubau Sanierung | 089Dach",
    description: "Dachstuhl München: Neubau, Sanierung, Reparatur. Holz, Stahl. Statik & Ausführung. Meisterbetrieb!",
    keywords: "Dachstuhl München, Dachstuhl Sanierung, Dachstuhl bauen"
  },
  "/schornstein-muenchen": {
    title: "Schornstein München | Sanierung Verwahrung | 089Dach",
    description: "Schornstein München: Sanierung, Verwahrung, Abdeckung. Kaminköpfe vom Spenglermeister!",
    keywords: "Schornstein München, Kamin Sanierung, Schornsteinverwahrung"
  },
  "/dachterrasse-muenchen": {
    title: "Dachterrasse München | Bau Abdichtung | 089Dach",
    description: "Dachterrasse München: Bau, Abdichtung, Belag. Vom Entwurf bis zur Fertigstellung. Meisterqualität!",
    keywords: "Dachterrasse München, Dachterrasse bauen, Dachterrasse abdichten"
  },
  "/lichtkuppel-muenchen": {
    title: "Lichtkuppel München | Einbau Austausch | 089Dach",
    description: "Lichtkuppeln München: Einbau, Austausch, Wartung. Flachdach-Belichtung vom Meisterbetrieb!",
    keywords: "Lichtkuppel München, Lichtkuppel Einbau, Flachdach Licht"
  },
  "/gruendach-muenchen": {
    title: "Gründach München | Begrünung Planung | 089Dach",
    description: "Gründach München: Extensive & intensive Begrünung. Planung, Ausführung, Pflege. Nachhaltig!",
    keywords: "Gründach München, Dachbegrünung, Extensivbegrünung"
  },
  "/schneefang-muenchen": {
    title: "Schneefang München | Montage Schutz | 089Dach",
    description: "Schneefang München: Montage, Nachrüstung, alle Dachtypen. Schutz vor Dachlawinen. Meisterbetrieb!",
    keywords: "Schneefang München, Schneefanggitter, Dachlawine Schutz"
  },
  "/dachentwaesserung-muenchen": {
    title: "Dachentwässerung München | Rinnen Rohre | 089Dach",
    description: "Dachentwässerung München: Rinnen, Fallrohre, Abläufe. Planung & Montage. Spenglermeister!",
    keywords: "Dachentwässerung München, Dachrinnen, Fallrohre"
  },
  "/dachsanierung-altbau-muenchen": {
    title: "Dachsanierung Altbau München | Meister | 089Dach",
    description: "Altbau-Dachsanierung München: Denkmalschutz, Jugendstil, historisch. Erfahrung seit 1998!",
    keywords: "Dachsanierung Altbau, Altbau Dach München, Denkmalschutz Dach"
  },
  "/dachsanierung-neubau-muenchen": {
    title: "Dach Neubau München | Eindeckung Planung | 089Dach",
    description: "Dach für Neubau München: Planung, Eindeckung, alle Dachformen. Meisterqualität vom Profi!",
    keywords: "Dach Neubau München, Neubau Dach, Dacheindeckung Neubau"
  },
  "/energetische-dachsanierung-muenchen": {
    title: "Energetische Dachsanierung München | Dämmung",
    description: "Energetische Dachsanierung München: Dämmung, Modernisierung, Energieeffizienz. Beratung gratis!",
    keywords: "Energetische Dachsanierung, Dachdämmung München"
  },
  "/dachausbau-muenchen": {
    title: "Dachausbau München | Wohnraum Planung | 089Dach",
    description: "Dachausbau München: Mehr Wohnraum unterm Dach. Planung, Ausführung, schlüsselfertig. Meisterbetrieb!",
    keywords: "Dachausbau München, Dachgeschoss ausbauen, Wohnraum Dach"
  },
  "/dachreinigung-muenchen": {
    title: "Dachreinigung München | Moos Algen | 089Dach",
    description: "Dachreinigung München: Moos, Algen, Schmutz entfernen. Schonend & gründlich. Jetzt Termin!",
    keywords: "Dachreinigung München, Dach reinigen, Moos entfernen"
  },
  "/leistungen/wasserschaden": {
    title: "Wasserschaden Dach München | Soforthilfe | 089Dach",
    description: "Wasserschaden am Dach? 24/7 Notdienst München. Leckortung, Trocknung, Reparatur. Schnelle Hilfe!",
    keywords: "Wasserschaden Dach, Dach undicht, Notdienst Wasserschaden"
  },
  "/notfall-dach": {
    title: "Notfall Dach München | 24/7 Notdienst | 089Dach",
    description: "Dach-Notfall? 24/7 Notdienst München. Sturm, Wasser, Brand. Sofortige Hilfe. Jetzt anrufen!",
    keywords: "Notfall Dach, Dach Notdienst, 24/7 Dachdecker"
  },
  "/versicherungsschaden-dach": {
    title: "Versicherungsschaden Dach | Abwicklung | 089Dach",
    description: "Versicherungsschaden am Dach? Wir helfen bei der Abwicklung. Gutachten, Reparatur, Abrechnung.",
    keywords: "Versicherungsschaden Dach, Sturmschaden Versicherung"
  },
  "/dachdecker-angebote-muenchen": {
    title: "Dachdecker Angebote München | Preise | 089Dach",
    description: "Dachdecker-Angebote München: Kostenlose Angebote für Sanierung, Reparatur, Neubau. Fair & transparent!",
    keywords: "Dachdecker Angebote, Dachdecker Preise München"
  },
  "/dachdecker-preise-muenchen": {
    title: "Dachdecker Preise München | Kosten | 089Dach",
    description: "Dachdecker-Preise München: Faire Kosten für alle Dacharbeiten. Transparente Kalkulation. Angebot gratis!",
    keywords: "Dachdecker Preise, Dachdecker Kosten München"
  },
  "/spengler-muenchen": {
    title: "Spengler München | Blecharbeiten Rinnen | 089Dach",
    description: "Spengler München: Blecharbeiten, Dachrinnen, Fassaden. Kupfer, Zink, Alu. Meisterqualität!",
    keywords: "Spengler München, Spenglerarbeiten, Blechner München"
  },
  "/dachcheck-muenchen": {
    title: "Dachcheck München | Inspektion Zustand | 089Dach",
    description: "Dachcheck München: Professionelle Inspektion Ihres Dachs. Zustandsbericht & Empfehlungen. Gratis!",
    keywords: "Dachcheck München, Dachinspektion, Dach prüfen"
  },
  "/dachinspektion-muenchen": {
    title: "Dachinspektion München | Check Wartung | 089Dach",
    description: "Dachinspektion München: Gründliche Prüfung, Protokoll, Handlungsempfehlung. Jetzt Termin!",
    keywords: "Dachinspektion München, Dach überprüfen, Dachwartung"
  },
  "/blitzschutz-muenchen": {
    title: "Blitzschutz Dach München | Montage | 089Dach",
    description: "Blitzschutz München: Planung, Montage, Wartung. Für alle Dachtypen. Sicherheit vom Meister!",
    keywords: "Blitzschutz München, Blitzableiter Dach, Blitzschutzmontage"
  },
  "/vogelschutz-dach-muenchen": {
    title: "Vogelschutz Dach München | Abwehr | 089Dach",
    description: "Vogelschutz Dach München: Taubenabwehr, Sperlingsschutz, Netze. Schonend & effektiv. Beratung gratis!",
    keywords: "Vogelschutz Dach, Taubenabwehr Dach, Vogelabwehr München"
  },
  "/marderschutz-dach-muenchen": {
    title: "Marderschutz Dach München | Abwehr | 089Dach",
    description: "Marderschutz Dach München: Marder vertreiben, Schäden verhindern. Effektive Lösungen vom Profi!",
    keywords: "Marderschutz Dach, Marderabwehr, Marder im Dach"
  },
  "/carport-dach-muenchen": {
    title: "Carport Dach München | Eindeckung Montage | 089Dach",
    description: "Carport-Dach München: Eindeckung, Reparatur, Montage. Verschiedene Materialien. Meisterqualität!",
    keywords: "Carport Dach, Carport Eindeckung München"
  },
  "/terrassendach-muenchen": {
    title: "Terrassendach München | Überdachung Bau | 089Dach",
    description: "Terrassendach München: Glas, Alu, Holz. Planung & Montage. Wetterschutz vom Meisterbetrieb!",
    keywords: "Terrassendach München, Terrassenüberdachung, Überdachung"
  },
  "/garagendach-muenchen": {
    title: "Garagendach München | Sanierung Abdichtung | 089Dach",
    description: "Garagendach München: Sanierung, Abdichtung, Neueindeckung. Flach & Schräg. Meisterqualität!",
    keywords: "Garagendach München, Garagendach sanieren, Garagendach abdichten"
  },
  "/metalldach-muenchen": {
    title: "Metalldach München | Stehfalz Montage | 089Dach",
    description: "Metalldach München: Stehfalz, Trapez, Wellblech. Zink, Kupfer, Alu, Stahl. Spenglermeister!",
    keywords: "Metalldach München, Metalldach Montage, Blechdach"
  },
  "/solardach-muenchen": {
    title: "Solardach München | Montage Eindeckung | 089Dach",
    description: "Solardach München: PV-Montage, Indach-Systeme, Aufdach. Dachsanierung mit Solar. Meisterbetrieb!",
    keywords: "Solardach München, Solar Dach, PV Montage Dach"
  },
  "/winterdienst-dach-muenchen": {
    title: "Winterdienst Dach München | Schnee Eis | 089Dach",
    description: "Winterdienst Dach München: Schneeräumung, Eiszapfen, Dachlawinen. Sicherheit im Winter!",
    keywords: "Winterdienst Dach, Schneeräumung Dach München"
  },
  "/denkmalschutz-dach-muenchen": {
    title: "Denkmalschutz Dach München | Sanierung | 089Dach",
    description: "Denkmalschutz-Dachsanierung München: Historische Dächer, Behördenabstimmung. Erfahrung seit 1998!",
    keywords: "Denkmalschutz Dach, historisches Dach sanieren"
  },
  "/brandschutz-dach-muenchen": {
    title: "Brandschutz Dach München | Sicherheit | 089Dach",
    description: "Brandschutz Dach München: Brandschutzdämmung, feuerhemmende Materialien. Sicherheit vom Profi!",
    keywords: "Brandschutz Dach, feuerfestes Dach München"
  },
  "/schallschutz-dach-muenchen": {
    title: "Schallschutz Dach München | Dämmung | 089Dach",
    description: "Schallschutz Dach München: Schalldämmung, Lärmschutz unterm Dach. Ruhe & Komfort. Meisterbetrieb!",
    keywords: "Schallschutz Dach, Schalldämmung Dach München"
  }
};

export function getSEODataForRoute(route: string): SEOPageData {
  if (routeSEOData[route]) {
    return routeSEOData[route];
  }

  if (route.startsWith("/dachdecker-")) {
    const locationSlug = route.replace("/dachdecker-", "");
    const location = locationSlug
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
      .replace("Oe", "ö")
      .replace("Ae", "ä")
      .replace("Ue", "ü");
    
    return {
      title: `Dachdecker ${location} | Sanierung Service | 089Dach`,
      description: `Dachdecker in ${location}: Dachsanierung, Reparatur, Wartung. Meisterbetrieb aus München. Kostenlose Beratung!`,
      keywords: `Dachdecker ${location}, Dach ${location}, Dachsanierung ${location}`
    };
  }

  return {
    title: "Dachdecker München | Spenglerei | 089Dach",
    description: "089Dach – Ihr Dachdecker-Meisterbetrieb in München. Dachsanierung, Reparatur, Spenglerei. 24/7 Notdienst.",
    keywords: "Dachdecker München, Dachsanierung München, Spengler München"
  };
}
