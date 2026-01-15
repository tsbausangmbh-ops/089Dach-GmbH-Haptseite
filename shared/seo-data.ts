export interface SEOPageData {
  title: string;
  description: string;
  keywords?: string;
}

export const routeSEOData: Record<string, SEOPageData> = {
  "/": {
    title: "Dachdeckerei und Spenglerei München – 089Dach | Bedachungen & Notdienst",
    description: "089Dach – Dachdecker in München: Dachsanierung, Reparatur, Spenglerarbeiten & Dachfenster. 24/7 Notdienst & 10 Jahre Garantie. Jetzt beraten lassen!",
    keywords: "Dachdecker München, Dachsanierung München, Dachreparatur München, Flachdach München, Spengler München, Dachfenster München, Notdienst Dach München, Dachdecker Obermenzing"
  },
  "/leistungen": {
    title: "Dachdeckerleistungen München | 089Dach Meisterbetrieb",
    description: "Alle Dachdeckerleistungen: Steildach, Flachdach, Spenglerei, Dachfenster & Reparatur. Meisterqualität aus München.",
    keywords: "Dachdeckerleistungen, Steildach, Flachdach, Spenglerei, Dachfenster, Dachreparatur München"
  },
  "/leistungen/bedachungen": {
    title: "Bedachungen München – Steildach & Flachdach | 089Dach",
    description: "Professionelle Bedachungen in München: Steildach, Flachdach, Neueindeckung. Meisterbetrieb mit 10 Jahren Garantie.",
    keywords: "Bedachungen München, Steildach München, Flachdach München, Dach eindecken"
  },
  "/leistungen/spenglerei": {
    title: "Spenglerei München – Blecharbeiten & Rinnen | 089Dach",
    description: "Spenglerarbeiten vom Meister: Dachrinnen, Blechverkleidung, Kaminverwahrung. Qualität aus München.",
    keywords: "Spenglerei München, Spenglerarbeiten, Dachrinnen, Blecharbeiten"
  },
  "/leistungen/dachsanierung": {
    title: "Dachsanierung München – Komplett mit Garantie | 089Dach",
    description: "Dachsanierung München: Altbau, Neubau, energetisch. Festpreis-Angebot & 10 Jahre Garantie. Jetzt beraten lassen!",
    keywords: "Dachsanierung München, Altbausanierung Dach, Komplettsanierung Dach"
  },
  "/leistungen/dachfenster": {
    title: "Dachfenster München – Einbau & Austausch | 089Dach",
    description: "Dachfenster einbauen München: VELUX, Roto, Fakro. Fachgerechter Einbau mit Garantie. Kostenlose Beratung!",
    keywords: "Dachfenster München, VELUX, Dachfenster einbauen, Dachfenster austauschen"
  },
  "/leistungen/reparaturservice": {
    title: "Dachreparatur München – Schnell & Zuverlässig | 089Dach",
    description: "Dachreparatur München: Undichte Stellen, Sturmschäden, Ziegel. 24/7 Notdienst. Schnelle Hilfe!",
    keywords: "Dachreparatur München, Dach reparieren, Sturmschaden Dach"
  },
  "/leistungen/energieberatung": {
    title: "Energieberatung Dach München | 089Dach Meisterbetrieb",
    description: "Energieberatung für Ihr Dach: Dämmung, Förderung, Einsparpotenzial. Unabhängig & qualifiziert.",
    keywords: "Energieberatung Dach, Dachdämmung, Förderung Dachsanierung"
  },
  "/leistungen/architektenleistungen": {
    title: "Architektenleistungen Dach München | 089Dach",
    description: "Architektenleistungen: Planung, Statik, Baubegleitung für Dachprojekte. Ihr Partner für anspruchsvolle Projekte.",
    keywords: "Architektenleistungen Dach, Dachplanung, Baubegleitung"
  },
  "/leistungen/gaubenbau": {
    title: "Gaubenbau München – Mehr Wohnraum | 089Dach",
    description: "Gaubenbau München: Schleppgaube, Spitzgaube, Flachdachgaube. Mehr Licht & Platz. Vom Meisterbetrieb.",
    keywords: "Gaubenbau München, Dachgaube, Schleppgaube, Spitzgaube"
  },
  "/leistungen/wartung": {
    title: "Dachwartung München – Werterhalt | 089Dach",
    description: "Dachwartung München: Inspektion, Reinigung, kleine Reparaturen. Schutz für Ihr Dach. Jetzt Termin!",
    keywords: "Dachwartung München, Dachinspektion, Dachreinigung"
  },
  "/leistungen/flachdach": {
    title: "Flachdach München – Abdichtung & Sanierung | 089Dach",
    description: "Flachdach München: Abdichtung, Sanierung, Begrünung. Bitumen & EPDM. Meisterqualität mit Garantie.",
    keywords: "Flachdach München, Flachdachabdichtung, Flachdachsanierung"
  },
  "/leistungen/sturmschaden": {
    title: "Sturmschaden Dach München – Soforthilfe | 089Dach",
    description: "Sturmschaden am Dach? 24/7 Notdienst München. Schnelle Sicherung & Reparatur. Versicherungsabwicklung.",
    keywords: "Sturmschaden Dach, Dach Notdienst München, Sturm Dachreparatur"
  },
  "/leistungen/dachbeschichtung": {
    title: "Dachbeschichtung München – Schutz & Optik | 089Dach",
    description: "Dachbeschichtung München: Langzeitschutz für Ziegel. Farbauffrischung ohne Neueindeckung. Beratung gratis!",
    keywords: "Dachbeschichtung München, Dachziegel beschichten, Dachrenovierung"
  },
  "/leistungen/dachrinnenreinigung": {
    title: "Dachrinnenreinigung München | 089Dach Service",
    description: "Dachrinnenreinigung München: Laub, Moos, Verstopfungen entfernen. Regelmäßiger Service für Ihr Dach.",
    keywords: "Dachrinnenreinigung München, Dachrinne reinigen, Fallrohr reinigen"
  },
  "/leistungen/notdienst": {
    title: "Dach Notdienst München – 24/7 Erreichbar | 089Dach",
    description: "Dach Notdienst München: Sturm, Wasser, Undichtigkeit. 24/7 Soforthilfe. Schnell vor Ort. Jetzt anrufen!",
    keywords: "Dach Notdienst München, Dachdecker Notfall, 24/7 Dachreparatur"
  },
  "/referenzen": {
    title: "Referenzen – Dachprojekte München | 089Dach",
    description: "Unsere Dach-Referenzen: Sanierungen, Neubauten, Reparaturen in München. Überzeugen Sie sich!",
    keywords: "Referenzen Dachdecker, Dachprojekte München, Kundenbewertungen"
  },
  "/ratgeber": {
    title: "Dach-Ratgeber München | Tipps vom Meister | 089Dach",
    description: "Dach-Ratgeber: Tipps zu Sanierung, Dämmung, Kosten, Förderung. Expertenwissen für Hausbesitzer.",
    keywords: "Dach Ratgeber, Dachsanierung Tipps, Dachdämmung Infos"
  },
  "/ratgeber/daemmung": {
    title: "Dachdämmung Ratgeber | Tipps & Kosten | 089Dach",
    description: "Dachdämmung: Arten, Kosten, Förderung. Welche Dämmung für Ihr Dach? Expertenratgeber.",
    keywords: "Dachdämmung Ratgeber, Dämmung Kosten, Einblasdämmung"
  },
  "/ratgeber/leckortung": {
    title: "Leckortung Dach München | Undichte Stellen finden",
    description: "Leckortung am Dach: Wo ist das Leck? Moderne Technik findet undichte Stellen. Schnell & zerstörungsfrei.",
    keywords: "Leckortung Dach, undichtes Dach finden, Wasserschaden Dach"
  },
  "/ratgeber/beratung": {
    title: "Dachberatung München – Kostenlos | 089Dach",
    description: "Kostenlose Dachberatung: Zustand, Sanierungsoptionen, Kosten. Unverbindlich & ehrlich. Termin vereinbaren!",
    keywords: "Dachberatung München, Dachcheck, kostenlose Beratung Dach"
  },
  "/ratgeber/sturmschaden": {
    title: "Sturmschaden Dach – Was tun? | Ratgeber 089Dach",
    description: "Sturmschaden am Dach: Erste Hilfe, Versicherung, Reparatur. Schritt-für-Schritt Anleitung für Hausbesitzer.",
    keywords: "Sturmschaden Dach Ratgeber, Dach Sturm Versicherung"
  },
  "/ratgeber/kosten": {
    title: "Dachsanierung Kosten | Preisübersicht | 089Dach",
    description: "Was kostet eine Dachsanierung? Preise für München: Eindeckung, Dämmung, Gerüst. Transparente Kalkulation.",
    keywords: "Dachsanierung Kosten, Dachdecker Preise München, Dacheindeckung Kosten"
  },
  "/ratgeber/foerderung": {
    title: "Förderung Dachsanierung | KfW & BAFA | 089Dach",
    description: "Förderung für Ihr Dach: KfW, BAFA, regionale Programme. Bis zu 20% sparen. Wir beraten Sie!",
    keywords: "Förderung Dachsanierung, KfW Dach, BAFA Dachdämmung"
  },
  "/ratgeber/materialien": {
    title: "Dachmaterialien – Vergleich & Tipps | 089Dach",
    description: "Dachmaterialien im Vergleich: Ziegel, Schiefer, Metall, Bitumen. Vor- & Nachteile für München.",
    keywords: "Dachmaterialien, Dachziegel, Schiefer Dach, Blechdach"
  },
  "/faq": {
    title: "FAQ – Häufige Fragen zum Dach | 089Dach München",
    description: "Häufige Fragen zu Dachsanierung, Reparatur, Kosten. Antworten vom Dachdeckermeister.",
    keywords: "FAQ Dachdecker, Dach Fragen, Dachsanierung FAQ"
  },
  "/kontakt": {
    title: "Kontakt – Dachdecker München | 089Dach",
    description: "Kontaktieren Sie uns: Telefon, E-Mail, Rückruf-Service. Ihr Dachdecker-Meisterbetrieb in München.",
    keywords: "Kontakt Dachdecker München, 089Dach Kontakt"
  },
  "/ueber-uns": {
    title: "Über uns – Meisterbetrieb seit 1998 | 089Dach",
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
    title: "Cookie-Einstellungen | 089Dach",
    description: "Cookie-Einstellungen für 089dach.de anpassen.",
    keywords: "Cookies, Cookie-Einstellungen"
  },
  "/cookie-richtlinie": {
    title: "Cookie-Richtlinie | 089Dach",
    description: "Cookie-Richtlinie der 089Dach GmbH. Welche Cookies wir verwenden.",
    keywords: "Cookie-Richtlinie, Cookies"
  },
  "/agb": {
    title: "AGB | 089Dach GmbH München",
    description: "Allgemeine Geschäftsbedingungen der 089Dach GmbH für Dachdeckerleistungen.",
    keywords: "AGB Dachdecker, Geschäftsbedingungen"
  },
  "/rueckruf": {
    title: "Rückruf anfordern | 089Dach München",
    description: "Rückruf-Service: Wir rufen Sie zurück. Termin wählen & Dachfrage klären. Kostenlos & unverbindlich.",
    keywords: "Rückruf Dachdecker, Termin vereinbaren"
  },
  "/beratung": {
    title: "Kostenlose Beratung | Dachdecker München | 089Dach",
    description: "Kostenlose Dachberatung vor Ort in München. Zustandsanalyse, Angebot, Fördercheck. Jetzt Termin!",
    keywords: "kostenlose Dachberatung, Beratungstermin Dach"
  },
  "/heizkostenrechner": {
    title: "Heizkostenrechner – Einsparpotenzial berechnen | 089Dach",
    description: "Heizkostenrechner: Berechnen Sie Ihr Einsparpotenzial durch Dachdämmung. Schnell & einfach.",
    keywords: "Heizkostenrechner, Dämmung sparen, Energiekosten senken"
  },
  "/foerderung-rechner": {
    title: "Förderrechner Dachsanierung | KfW & BAFA | 089Dach",
    description: "Förderrechner: Berechnen Sie Ihre Förderung für Dachsanierung. KfW, BAFA & mehr. Schnell & einfach.",
    keywords: "Förderrechner Dach, KfW Rechner, BAFA Förderung berechnen"
  },
  "/daemmung-info": {
    title: "Dachdämmung Info | Arten & Vorteile | 089Dach",
    description: "Alles über Dachdämmung: Aufsparren, Zwischensparren, Untersparren. Welche Dämmung für Ihr Dach?",
    keywords: "Dachdämmung Info, Dämmarten, Einblasdämmung"
  },
  "/stadtteile": {
    title: "Dachdecker in allen Münchner Stadtteilen | 089Dach",
    description: "089Dach – Ihr Dachdecker in allen Münchner Stadtteilen. Kurze Anfahrt, lokale Expertise.",
    keywords: "Dachdecker Stadtteile München, lokaler Dachdecker"
  },
  "/dachdecker-pasing": {
    title: "Dachdecker Pasing – Lokaler Meisterbetrieb | 089Dach",
    description: "Dachdecker in Pasing: Dachsanierung, Reparatur, Flachdach. Schnell vor Ort. Kostenlose Beratung!",
    keywords: "Dachdecker Pasing, Dach Pasing, Dachsanierung Pasing"
  },
  "/dachdecker-laim": {
    title: "Dachdecker Laim – Ihr Dachexperte | 089Dach",
    description: "Dachdecker in Laim: Dachsanierung, Reparatur, Notdienst. Kurze Anfahrt. Jetzt beraten lassen!",
    keywords: "Dachdecker Laim, Dach Laim, Dachsanierung Laim"
  },
  "/dachdecker-schwabing": {
    title: "Dachdecker Schwabing – Altbau-Experten | 089Dach",
    description: "Dachdecker in Schwabing: Altbausanierung, Denkmalschutz, Reparatur. Erfahrung mit Jugendstil-Dächern.",
    keywords: "Dachdecker Schwabing, Altbau Dach, Denkmalschutz Dach"
  },
  "/dachdecker-sendling": {
    title: "Dachdecker Sendling – Schnell vor Ort | 089Dach",
    description: "Dachdecker in Sendling: Dachsanierung, Steildach, Flachdach. Lokaler Meisterbetrieb. Kostenlos beraten!",
    keywords: "Dachdecker Sendling, Dach Sendling, Dachsanierung Sendling"
  },
  "/dachdecker-graefelfing": {
    title: "Dachdecker Gräfelfing – Schnell & Zuverlässig | 089Dach",
    description: "Dachdecker in Gräfelfing: Villen, Einfamilienhäuser, Reparatur. Kurze Anfahrt aus Obermenzing.",
    keywords: "Dachdecker Gräfelfing, Dach Gräfelfing"
  },
  "/dachdecker-bogenhausen": {
    title: "Dachdecker Bogenhausen – Premium-Service | 089Dach",
    description: "Dachdecker in Bogenhausen: Villen, Altbau, hochwertige Sanierung. Diskreter Service. Erstberatung gratis!",
    keywords: "Dachdecker Bogenhausen, Villa Dach, Altbau Bogenhausen"
  },
  "/dachdecker-nymphenburg": {
    title: "Dachdecker Nymphenburg – Nachbar-Betrieb | 089Dach",
    description: "Dachdecker in Nymphenburg: Altbau, Villen, Reparatur. Aus Obermenzing – schnell bei Ihnen!",
    keywords: "Dachdecker Nymphenburg, Dach Nymphenburg"
  },
  "/dachdecker-harlaching": {
    title: "Dachdecker Harlaching – Ihr Dachprofi | 089Dach",
    description: "Dachdecker in Harlaching: Dachsanierung, Reparatur, Wartung. Zuverlässig & fair. Beratung kostenlos!",
    keywords: "Dachdecker Harlaching, Dach Harlaching"
  },
  "/dachdecker-trudering": {
    title: "Dachdecker Trudering – Schnell vor Ort | 089Dach",
    description: "Dachdecker in Trudering: Einfamilienhäuser, Reihenhaus, Notdienst. Lokaler Service. Jetzt Termin!",
    keywords: "Dachdecker Trudering, Dach Trudering"
  },
  "/dachdecker-moosach": {
    title: "Dachdecker Moosach – Nachbar-Meisterbetrieb | 089Dach",
    description: "Dachdecker in Moosach: Sanierung, Reparatur, Neubau. Kurze Wege aus Obermenzing. Kostenlose Beratung!",
    keywords: "Dachdecker Moosach, Dach Moosach"
  },
  "/dachdecker-allach": {
    title: "Dachdecker Allach – Direkter Nachbar | 089Dach",
    description: "Dachdecker in Allach-Untermenzing: Schnellste Anfahrt! Dachsanierung, Reparatur, Wartung. Ihr Nachbar-Meister.",
    keywords: "Dachdecker Allach, Dach Allach, Untermenzing"
  },
  "/dachdecker-karlsfeld": {
    title: "Dachdecker Karlsfeld – Schneller Service | 089Dach",
    description: "Dachdecker in Karlsfeld: Nur 10 Min Anfahrt. Dachsanierung, Reparatur, Flachdach. Jetzt beraten!",
    keywords: "Dachdecker Karlsfeld, Dach Karlsfeld"
  },
  "/dachdecker-fasanerie": {
    title: "Dachdecker Fasanerie – Lokaler Experte | 089Dach",
    description: "Dachdecker in der Fasanerie: Dachsanierung, Steildach, Flachdach. Schnell vor Ort. Kostenlos beraten!",
    keywords: "Dachdecker Fasanerie, Dach Fasanerie"
  },
  "/dachdecker-feldmoching": {
    title: "Dachdecker Feldmoching – Zuverlässig | 089Dach",
    description: "Dachdecker in Feldmoching-Hasenbergl: Sanierung, Reparatur, Wartung. Faire Preise. Beratung gratis!",
    keywords: "Dachdecker Feldmoching, Dach Feldmoching"
  },
  "/dachdecker-neuhausen": {
    title: "Dachdecker Neuhausen – Schnell vor Ort | 089Dach",
    description: "Dachdecker in Neuhausen-Nymphenburg: Altbau, Reparatur, Sanierung. Kurze Anfahrt. Jetzt Termin!",
    keywords: "Dachdecker Neuhausen, Dach Neuhausen"
  },
  "/dachdecker-obermenzing": {
    title: "Dachdecker Obermenzing – Ihr Nachbar | 089Dach",
    description: "Dachdecker in Obermenzing: Unser Standort! Schnellste Reaktion, persönlicher Service. Ihr Nachbar-Meister.",
    keywords: "Dachdecker Obermenzing, Dach Obermenzing, lokaler Dachdecker"
  },
  "/dachdecker-solln": {
    title: "Dachdecker Solln – Villen-Experte | 089Dach",
    description: "Dachdecker in Solln: Villen, gehobene Ansprüche, Altbau. Premium-Service vom Meisterbetrieb.",
    keywords: "Dachdecker Solln, Villa Dach Solln"
  },
  "/dachdecker-giesing": {
    title: "Dachdecker Giesing – Schneller Service | 089Dach",
    description: "Dachdecker in Giesing: Altbau, Reihenhaus, Reparatur. Zuverlässig & fair. Kostenlose Erstberatung!",
    keywords: "Dachdecker Giesing, Dach Giesing"
  },
  "/dachdecker-germering": {
    title: "Dachdecker Germering – Schnell aus München | 089Dach",
    description: "Dachdecker in Germering: Sanierung, Reparatur, Neubau. Kurze Anfahrt aus München-Obermenzing.",
    keywords: "Dachdecker Germering, Dach Germering"
  },
  "/dachdecker-starnberg": {
    title: "Dachdecker Starnberg – Premium-Service | 089Dach",
    description: "Dachdecker in Starnberg: Villen, Seegrundstücke, gehobene Ansprüche. Qualität aus München.",
    keywords: "Dachdecker Starnberg, Villa Dach Starnberg"
  },
  "/dachdecker-dachau": {
    title: "Dachdecker Dachau – Ihr Partner | 089Dach",
    description: "Dachdecker in Dachau: Sanierung, Reparatur, Flachdach. Kurze Anfahrt. Beratung kostenlos!",
    keywords: "Dachdecker Dachau, Dach Dachau"
  },
  "/dachdecker-freising": {
    title: "Dachdecker Freising – Zuverlässig | 089Dach",
    description: "Dachdecker in Freising: Einfamilienhaus, Gewerbe, Sanierung. Qualität aus München-Obermenzing.",
    keywords: "Dachdecker Freising, Dach Freising"
  },
  "/dachdecker-erding": {
    title: "Dachdecker Erding – Ihr Dachexperte | 089Dach",
    description: "Dachdecker in Erding: Sanierung, Neubau, Reparatur. Meisterqualität aus München.",
    keywords: "Dachdecker Erding, Dach Erding"
  },
  "/dachdecker-unterschleissheim": {
    title: "Dachdecker Unterschleißheim – Schnell vor Ort | 089Dach",
    description: "Dachdecker in Unterschleißheim: Sanierung, Reparatur, Gewerbe. Kurze Anfahrt. Jetzt beraten!",
    keywords: "Dachdecker Unterschleißheim, Dach Unterschleißheim"
  },
  "/dachdecker-fuerstenfeldbruck": {
    title: "Dachdecker Fürstenfeldbruck – Partner | 089Dach",
    description: "Dachdecker in FFB: Sanierung, Reparatur, Wartung. Qualität aus München. Faire Preise!",
    keywords: "Dachdecker Fürstenfeldbruck, Dach FFB"
  },
  "/dachdecker-ottobrunn": {
    title: "Dachdecker Ottobrunn – Zuverlässig | 089Dach",
    description: "Dachdecker in Ottobrunn: Einfamilienhaus, Reihenhaus, Reparatur. Meisterqualität. Beratung gratis!",
    keywords: "Dachdecker Ottobrunn, Dach Ottobrunn"
  },
  "/dachdecker-groebenzell": {
    title: "Dachdecker Gröbenzell – Nachbar-Betrieb | 089Dach",
    description: "Dachdecker in Gröbenzell: Nur 15 Min Anfahrt! Sanierung, Reparatur, Wartung. Kostenlose Beratung!",
    keywords: "Dachdecker Gröbenzell, Dach Gröbenzell"
  },
  "/dachdecker-puchheim": {
    title: "Dachdecker Puchheim – Schneller Service | 089Dach",
    description: "Dachdecker in Puchheim: Sanierung, Reparatur, Flachdach. Kurze Wege aus München. Jetzt Termin!",
    keywords: "Dachdecker Puchheim, Dach Puchheim"
  },
  "/dachdecker-olching": {
    title: "Dachdecker Olching – Ihr Dachprofi | 089Dach",
    description: "Dachdecker in Olching: Sanierung, Neubau, Reparatur. Meisterqualität aus München. Beratung gratis!",
    keywords: "Dachdecker Olching, Dach Olching"
  },
  "/dachdecker-eching": {
    title: "Dachdecker Eching – Zuverlässig | 089Dach",
    description: "Dachdecker in Eching: Einfamilienhaus, Gewerbe, Wartung. Kurze Anfahrt. Kostenlose Erstberatung!",
    keywords: "Dachdecker Eching, Dach Eching"
  },
  "/dachdecker-ramersdorf-perlach": {
    title: "Dachdecker Ramersdorf-Perlach | 089Dach",
    description: "Dachdecker in Ramersdorf-Perlach: Sanierung, Reparatur, Wartung. Lokaler Service. Beratung gratis!",
    keywords: "Dachdecker Ramersdorf, Dachdecker Perlach"
  },
  "/dachdecker-au-haidhausen": {
    title: "Dachdecker Au-Haidhausen – Altbau-Experte | 089Dach",
    description: "Dachdecker in Au-Haidhausen: Gründerzeit, Altbau, Sanierung. Erfahrung mit historischen Dächern.",
    keywords: "Dachdecker Haidhausen, Dachdecker Au, Altbau Dach"
  },
  "/dachdecker-milbertshofen": {
    title: "Dachdecker Milbertshofen | 089Dach",
    description: "Dachdecker in Milbertshofen-Am Hart: Sanierung, Reparatur, Gewerbe. Schnell vor Ort. Jetzt beraten!",
    keywords: "Dachdecker Milbertshofen, Dach Am Hart"
  },
  "/dachdecker-maxvorstadt": {
    title: "Dachdecker Maxvorstadt – Altbau-Profi | 089Dach",
    description: "Dachdecker in Maxvorstadt: Altbau, Jugendstil, Sanierung. Innenstadtlage, kurze Wege. Beratung gratis!",
    keywords: "Dachdecker Maxvorstadt, Altbau Dach Maxvorstadt"
  },
  "/dachdecker-lehel": {
    title: "Dachdecker Lehel – Premium-Service | 089Dach",
    description: "Dachdecker im Lehel: Altbau, Denkmalschutz, gehobene Ansprüche. Diskreter Service. Erstberatung gratis!",
    keywords: "Dachdecker Lehel, Altbau Dach Lehel"
  },
  "/dachdecker-thalkirchen": {
    title: "Dachdecker Thalkirchen | 089Dach",
    description: "Dachdecker in Thalkirchen-Obersendling: Sanierung, Reparatur, Wartung. Lokaler Service. Beratung gratis!",
    keywords: "Dachdecker Thalkirchen, Dach Obersendling"
  },
  "/dachdecker-hadern": {
    title: "Dachdecker Hadern – Nachbar-Betrieb | 089Dach",
    description: "Dachdecker in Hadern: Kurze Anfahrt aus Obermenzing! Sanierung, Reparatur, Wartung. Jetzt beraten!",
    keywords: "Dachdecker Hadern, Dach Hadern"
  },
  "/dachdecker-westend": {
    title: "Dachdecker Westend | 089Dach",
    description: "Dachdecker im Westend: Altbau, Reparatur, Sanierung. Schnell vor Ort. Kostenlose Erstberatung!",
    keywords: "Dachdecker Westend, Dach Westend"
  },
  "/dachdecker-berg-am-laim": {
    title: "Dachdecker Berg am Laim | 089Dach",
    description: "Dachdecker in Berg am Laim: Sanierung, Reparatur, Wartung. Lokaler Service. Beratung kostenlos!",
    keywords: "Dachdecker Berg am Laim"
  },
  "/dachdecker-altstadt": {
    title: "Dachdecker Altstadt München – Denkmalschutz | 089Dach",
    description: "Dachdecker in der Altstadt: Denkmalschutz, historische Dächer, Sanierung. Erfahrung seit 1998.",
    keywords: "Dachdecker Altstadt München, Denkmalschutz Dach"
  },
  "/dachdecker-ludwigsvorstadt-isarvorstadt": {
    title: "Dachdecker Isarvorstadt | 089Dach",
    description: "Dachdecker in Ludwigsvorstadt-Isarvorstadt: Altbau, Reparatur, Sanierung. Innenstadtlage. Beratung gratis!",
    keywords: "Dachdecker Isarvorstadt, Dachdecker Ludwigsvorstadt"
  },
  "/dachdecker-schwanthalerhoehe": {
    title: "Dachdecker Schwanthalerhöhe | 089Dach",
    description: "Dachdecker an der Schwanthalerhöhe: Altbau, Reparatur, Sanierung. Schnell vor Ort. Beratung gratis!",
    keywords: "Dachdecker Schwanthalerhöhe"
  },
  "/dachdecker-sendling-westpark": {
    title: "Dachdecker Sendling-Westpark | 089Dach",
    description: "Dachdecker in Sendling-Westpark: Sanierung, Reparatur, Wartung. Lokaler Service. Kostenlose Beratung!",
    keywords: "Dachdecker Sendling-Westpark"
  },
  "/dachdecker-freimann": {
    title: "Dachdecker Freimann | 089Dach",
    description: "Dachdecker in Freimann: Sanierung, Reparatur, Gewerbe. Schnell vor Ort. Beratung kostenlos!",
    keywords: "Dachdecker Freimann"
  },
  "/dachdecker-hasenbergl": {
    title: "Dachdecker Hasenbergl | 089Dach",
    description: "Dachdecker im Hasenbergl: Sanierung, Reparatur, Wartung. Faire Preise. Kostenlose Erstberatung!",
    keywords: "Dachdecker Hasenbergl"
  },
  "/dachdecker-oberfoehring": {
    title: "Dachdecker Oberföhring | 089Dach",
    description: "Dachdecker in Oberföhring: Villen, Einfamilienhäuser, Sanierung. Premium-Service. Beratung gratis!",
    keywords: "Dachdecker Oberföhring"
  },
  "/dachdecker-aubing-lochhausen-langwied": {
    title: "Dachdecker Aubing | 089Dach",
    description: "Dachdecker in Aubing-Lochhausen-Langwied: Nachbar-Betrieb! Schnellste Anfahrt. Sanierung, Reparatur.",
    keywords: "Dachdecker Aubing, Dachdecker Lochhausen"
  },
  "/dachdecker-muenchen": {
    title: "Dachdecker München – Meisterbetrieb seit 1998 | 089Dach",
    description: "Ihr Dachdecker in München: Sanierung, Reparatur, Notdienst. 10 Jahre Garantie. Kostenlose Beratung!",
    keywords: "Dachdecker München, Dachdeckerei München, Dachdeckermeister"
  },
  "/dachdecker-muenchen-umgebung": {
    title: "Dachdecker München Umgebung – Regional | 089Dach",
    description: "Dachdecker in München und Umgebung: Landkreis München, FFB, Dachau, Starnberg. Kurze Anfahrt!",
    keywords: "Dachdecker München Umgebung, Dachdecker Landkreis München"
  },
  "/dachdecker-spengler-muenchen": {
    title: "Dachdecker & Spengler München | 089Dach",
    description: "Dachdecker und Spengler aus einer Hand: Dach + Blech. Doppelmeister-Betrieb in München.",
    keywords: "Dachdecker Spengler München, Spengler München"
  },
  "/dachdecker-muenchen-kosten": {
    title: "Dachdecker Kosten München – Preisübersicht | 089Dach",
    description: "Was kostet ein Dachdecker in München? Preise für Sanierung, Reparatur, Wartung. Transparent & fair.",
    keywords: "Dachdecker Kosten München, Dachdecker Preise"
  },
  "/dachdecker-notdienst-muenchen": {
    title: "Dachdecker Notdienst München – 24/7 | 089Dach",
    description: "Dach-Notdienst München: 24 Stunden, 7 Tage. Sturm, Wasser, Undichtigkeit. Sofort anrufen!",
    keywords: "Dachdecker Notdienst München, Dach Notfall"
  },
  "/dachreparatur-muenchen": {
    title: "Dachreparatur München – Schnelle Hilfe | 089Dach",
    description: "Dachreparatur München: Undichte Stellen, Ziegel, Rinnen. Schnell & zuverlässig. Kostenvoranschlag gratis!",
    keywords: "Dachreparatur München, Dach reparieren München"
  },
  "/flachdachsanierung-muenchen": {
    title: "Flachdachsanierung München | 089Dach",
    description: "Flachdachsanierung München: Abdichtung, Dämmung, Begrünung. Meisterqualität. Beratung kostenlos!",
    keywords: "Flachdachsanierung München, Flachdach sanieren"
  },
  "/dach-undicht-muenchen": {
    title: "Dach undicht München – Soforthilfe | 089Dach",
    description: "Dach undicht? Soforthilfe in München! Leckortung, Reparatur, Notdienst. Schnell vor Ort.",
    keywords: "Dach undicht München, undichtes Dach reparieren"
  },
  "/dachziegel-austauschen-muenchen": {
    title: "Dachziegel austauschen München | 089Dach",
    description: "Dachziegel austauschen München: Einzelne Ziegel oder Teilflächen. Schnell & fachgerecht. Kostenvoranschlag!",
    keywords: "Dachziegel austauschen, Ziegel ersetzen München"
  },
  "/dachdaemmung-muenchen": {
    title: "Dachdämmung München – Energiesparen | 089Dach",
    description: "Dachdämmung München: Aufsparren, Zwischensparren, Einblasdämmung. Förderung nutzen! Beratung gratis.",
    keywords: "Dachdämmung München, Dach dämmen"
  },
  "/dachinspektion-muenchen": {
    title: "Dachinspektion München – Zustandscheck | 089Dach",
    description: "Dachinspektion München: Professioneller Dachcheck mit Protokoll. Schäden früh erkennen. Termin vereinbaren!",
    keywords: "Dachinspektion München, Dachcheck"
  },
  "/sturmschaden-dach-muenchen": {
    title: "Sturmschaden Dach München – Notdienst | 089Dach",
    description: "Sturmschaden Dach München: Sofortsicherung, Reparatur, Versicherungsabwicklung. 24/7 Notdienst!",
    keywords: "Sturmschaden Dach München, Dach Sturm"
  },
  "/dachrinne-reparieren-muenchen": {
    title: "Dachrinne reparieren München | 089Dach",
    description: "Dachrinne reparieren München: Löcher, Verbindungen, Gefälle. Schnelle Hilfe vom Spengler-Meister.",
    keywords: "Dachrinne reparieren München, Regenrinne"
  },
  "/schimmel-dach-muenchen": {
    title: "Schimmel am Dach München – Ursachen & Hilfe | 089Dach",
    description: "Schimmel am Dach? Ursachen finden, Sanierung planen. Fachkundige Beratung in München.",
    keywords: "Schimmel Dach München, Dachschimmel"
  },
  "/eternit-dach-muenchen": {
    title: "Eternit-Dach sanieren München – Asbest | 089Dach",
    description: "Eternit-Dach sanieren München: Fachgerechte Asbest-Entsorgung, neues Dach. Zertifizierter Betrieb.",
    keywords: "Eternit Dach München, Asbest Dach sanieren"
  },
  "/dachpfannen-abdichten-muenchen": {
    title: "Dachpfannen abdichten München | 089Dach",
    description: "Dachpfannen abdichten München: Undichte Stellen reparieren, Beschichtung. Nachhaltige Lösung.",
    keywords: "Dachpfannen abdichten, Dachziegel abdichten"
  },
  "/dach-abdichten-muenchen": {
    title: "Dach abdichten München | 089Dach",
    description: "Dach abdichten München: Flachdach, Steildach, Dachfläche. Langfristiger Schutz. Beratung gratis!",
    keywords: "Dach abdichten München, Dachabdichtung"
  },
  "/dach-neu-eindecken-muenchen": {
    title: "Dach neu eindecken München | 089Dach",
    description: "Dach neu eindecken München: Ziegel, Schiefer, Metall. Komplettsanierung mit Garantie. Angebot anfordern!",
    keywords: "Dach eindecken München, Dach neu decken"
  },
  "/dachdecker": {
    title: "Dachdecker – Beruf & Leistungen | 089Dach",
    description: "Was macht ein Dachdecker? Leistungen, Ausbildung, Meisterbetrieb. Ihr Partner in München.",
    keywords: "Dachdecker Beruf, Dachdeckerleistungen"
  },
  "/dach-decken-muenchen": {
    title: "Dach decken München – Neueindeckung | 089Dach",
    description: "Dach decken in München: Neueindeckung, Umdeckung, alle Materialien. Meisterqualität & Festpreis.",
    keywords: "Dach decken München, Dacheindeckung"
  },
  "/dachsanierung-kosten-muenchen": {
    title: "Dachsanierung Kosten München | 089Dach",
    description: "Was kostet Dachsanierung in München? Preise pro m², Förderung, Finanzierung. Transparent kalkuliert.",
    keywords: "Dachsanierung Kosten München, Dach sanieren Preis"
  },
  "/dachdecker-preise-muenchen": {
    title: "Dachdecker Preise München – Übersicht | 089Dach",
    description: "Dachdecker Preise München: Stundenlohn, m²-Preise, Festpreis. Faire & transparente Kalkulation.",
    keywords: "Dachdecker Preise München, Dachdecker Stundenlohn"
  },
  "/dach-undicht-was-tun": {
    title: "Dach undicht – Was tun? | Sofort-Tipps | 089Dach",
    description: "Dach undicht – was tun? Erste Hilfe, Notdienst rufen, Versicherung. Schritt-für-Schritt Anleitung.",
    keywords: "Dach undicht was tun, undichtes Dach Hilfe"
  },
  "/flachdach-abdichten-muenchen": {
    title: "Flachdach abdichten München | 089Dach",
    description: "Flachdach abdichten München: EPDM, Bitumen, Flüssigkunststoff. Langfristiger Schutz. Beratung gratis!",
    keywords: "Flachdach abdichten München, Flachdachabdichtung"
  },
  "/dachgaube-kosten-muenchen": {
    title: "Dachgaube Kosten München | 089Dach",
    description: "Was kostet eine Dachgaube in München? Preise für Schleppgaube, Spitzgaube, Flachdachgaube.",
    keywords: "Dachgaube Kosten München, Gaube Preis"
  },
  "/dachfenster-einbauen-muenchen": {
    title: "Dachfenster einbauen München | 089Dach",
    description: "Dachfenster einbauen München: VELUX, Roto, Fakro. Fachgerechter Einbau mit Garantie. Beratung gratis!",
    keywords: "Dachfenster einbauen München, VELUX einbauen"
  },
  "/dachrinne-erneuern-muenchen": {
    title: "Dachrinne erneuern München | 089Dach",
    description: "Dachrinne erneuern München: Zink, Kupfer, Aluminium. Fachgerechte Montage. Kostenvoranschlag gratis!",
    keywords: "Dachrinne erneuern München, neue Dachrinne"
  },
  "/blechdach-kosten-muenchen": {
    title: "Blechdach Kosten München | 089Dach",
    description: "Was kostet ein Blechdach in München? Preise für Stehfalz, Trapez, Wellblech. Angebot anfordern!",
    keywords: "Blechdach Kosten München, Stehfalzdach Preis"
  },
  "/carport-dach-muenchen": {
    title: "Carport Dach München – Eindeckung | 089Dach",
    description: "Carport Dach München: Eindeckung, Sanierung, Abdichtung. Vom Dachdecker-Meister. Beratung gratis!",
    keywords: "Carport Dach München, Carport Dacheindeckung"
  },
  "/gartenhaus-dach-muenchen": {
    title: "Gartenhaus Dach München | 089Dach",
    description: "Gartenhaus Dach München: Eindeckung, Sanierung, Abdichtung. Fachgerecht & langlebig. Angebot anfordern!",
    keywords: "Gartenhaus Dach München, Gartenhaus Dacheindeckung"
  },
  "/terrassendach-muenchen": {
    title: "Terrassendach München – Überdachung | 089Dach",
    description: "Terrassendach München: Glas, Alu, Holz. Planung & Montage. Vom Dachdecker-Meister. Beratung gratis!",
    keywords: "Terrassendach München, Terrassenüberdachung"
  },
  "/vordach-montage-muenchen": {
    title: "Vordach Montage München | 089Dach",
    description: "Vordach Montage München: Glas, Metall, Holz. Fachgerechte Installation. Beratung kostenlos!",
    keywords: "Vordach Montage München, Vordach installieren"
  },
  "/dachboden-ausbauen-muenchen": {
    title: "Dachboden ausbauen München | 089Dach",
    description: "Dachboden ausbauen München: Dämmung, Fenster, Gauben. Mehr Wohnraum schaffen. Beratung gratis!",
    keywords: "Dachboden ausbauen München, Dachausbau"
  },
  "/schornstein-abdichten-muenchen": {
    title: "Schornstein abdichten München | 089Dach",
    description: "Schornstein abdichten München: Verwahrung, Einfassung, Reparatur. Fachgerecht vom Spengler. Angebot!",
    keywords: "Schornstein abdichten München, Kaminverwahrung"
  },
  "/dachentmoosung-muenchen": {
    title: "Dachentmoosung München | 089Dach",
    description: "Dachentmoosung München: Moos, Flechten, Algen entfernen. Schonend & gründlich. Angebot anfordern!",
    keywords: "Dachentmoosung München, Moos Dach entfernen"
  },
  "/schneefanggitter-montage-muenchen": {
    title: "Schneefanggitter Montage München | 089Dach",
    description: "Schneefanggitter Montage München: Sicherheit im Winter. Fachgerechte Installation. Beratung gratis!",
    keywords: "Schneefanggitter München, Schneestopper"
  },
  "/dachstuhl-erneuern-muenchen": {
    title: "Dachstuhl erneuern München | 089Dach",
    description: "Dachstuhl erneuern München: Kompletterneuerung, Verstärkung, Sanierung. Meisterqualität. Angebot!",
    keywords: "Dachstuhl erneuern München, neuer Dachstuhl"
  },
  "/firstziegel-austauschen-muenchen": {
    title: "Firstziegel austauschen München | 089Dach",
    description: "Firstziegel austauschen München: Einzelne Ziegel oder kompletter First. Schnell & fachgerecht.",
    keywords: "Firstziegel austauschen, First erneuern"
  },
  "/kehle-dach-reparieren-muenchen": {
    title: "Dachkehle reparieren München | 089Dach",
    description: "Dachkehle reparieren München: Undichte Kehle, Blechverwahrung. Fachgerechte Sanierung. Angebot!",
    keywords: "Dachkehle reparieren, Kehle abdichten"
  },
  "/dachueberstand-verkleiden-muenchen": {
    title: "Dachüberstand verkleiden München | 089Dach",
    description: "Dachüberstand verkleiden München: Holz, Aluminium, Kunststoff. Sauber & langlebig. Beratung gratis!",
    keywords: "Dachüberstand verkleiden, Untersicht"
  },
  "/ortgang-erneuern-muenchen": {
    title: "Ortgang erneuern München | 089Dach",
    description: "Ortgang erneuern München: Ortgangziegel, Blechverwahrung. Fachgerechte Sanierung. Angebot anfordern!",
    keywords: "Ortgang erneuern München, Ortgangziegel"
  },
  "/traufblech-montieren-muenchen": {
    title: "Traufblech montieren München | 089Dach",
    description: "Traufblech montieren München: Fachgerechte Montage für Wasserableitung. Spengler-Meister. Angebot!",
    keywords: "Traufblech montieren, Traufblech München"
  },
  "/solaranlage-dach-muenchen": {
    title: "Solaranlage auf Dach München | 089Dach",
    description: "Solaranlage auf Dach München: Dachdecker-Vorarbeiten, Abdichtung, Dachcheck. Beratung gratis!",
    keywords: "Solaranlage Dach München, PV-Anlage Dach"
  },
  "/dachbegruenung-kosten-muenchen": {
    title: "Dachbegrünung Kosten München | 089Dach",
    description: "Was kostet Dachbegrünung in München? Preise für extensiv & intensiv. Förderung nutzen! Beratung gratis.",
    keywords: "Dachbegrünung Kosten München, Gründach Preis"
  },
  "/asbest-dach-sanieren-muenchen": {
    title: "Asbest-Dach sanieren München | 089Dach",
    description: "Asbest-Dach sanieren München: Fachgerechte Entsorgung, neues Dach. Zertifizierter Betrieb. Beratung!",
    keywords: "Asbest Dach sanieren München, Eternit entsorgen"
  },
  "/dachgeschoss-daemmen-muenchen": {
    title: "Dachgeschoss dämmen München | 089Dach",
    description: "Dachgeschoss dämmen München: Wohnraum-Komfort & Energiesparen. Förderung nutzen! Beratung gratis.",
    keywords: "Dachgeschoss dämmen München, Dachausbau Dämmung"
  },
  "/walmdach-kosten-muenchen": {
    title: "Walmdach Kosten München | 089Dach",
    description: "Was kostet ein Walmdach in München? Preise für Eindeckung, Sanierung. Angebot anfordern!",
    keywords: "Walmdach Kosten München, Walmdach Preis"
  },
  "/satteldach-kosten-muenchen": {
    title: "Satteldach Kosten München | 089Dach",
    description: "Was kostet ein Satteldach in München? Preise für Eindeckung, Sanierung, Neubau. Angebot anfordern!",
    keywords: "Satteldach Kosten München, Satteldach Preis"
  },
  "/dachziegel-kaufen-muenchen": {
    title: "Dachziegel kaufen München – Beratung | 089Dach",
    description: "Dachziegel kaufen München: Welche Ziegel für Ihr Dach? Beratung vom Meister. Wir helfen!",
    keywords: "Dachziegel kaufen München, Dachziegel Beratung"
  },
  "/dachbeschichtung-kosten-muenchen": {
    title: "Dachbeschichtung Kosten München | 089Dach",
    description: "Was kostet Dachbeschichtung in München? Preise pro m², Vorteile, Nachteile. Ehrliche Beratung!",
    keywords: "Dachbeschichtung Kosten München, Dachbeschichtung Preis"
  }
};

export function getSEODataForRoute(route: string): SEOPageData {
  const data = routeSEOData[route];
  if (data) {
    return data;
  }
  
  return {
    title: "089Dach GmbH – Ihr Dachdecker in München",
    description: "Dachdecker-Meisterbetrieb in München: Dachsanierung, Reparatur, Flachdach, Spenglerarbeiten. 24/7 Notdienst.",
    keywords: "Dachdecker München, Dachsanierung, Dachreparatur"
  };
}
