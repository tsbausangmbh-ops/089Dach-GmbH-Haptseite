import { Link } from "wouter";
import { ReactNode } from "react";

// Geo-Mapping für Stadtteile und Umland
const geoKeywordMapping: Record<string, string> = {
  // München Stadtteile
  "Pasing": "/dachdecker-pasing",
  "München-Pasing": "/dachdecker-pasing",
  "Laim": "/dachdecker-laim",
  "München-Laim": "/dachdecker-laim",
  "Schwabing": "/dachdecker-schwabing",
  "München-Schwabing": "/dachdecker-schwabing",
  "Sendling": "/dachdecker-sendling",
  "München-Sendling": "/dachdecker-sendling",
  "Bogenhausen": "/dachdecker-bogenhausen",
  "München-Bogenhausen": "/dachdecker-bogenhausen",
  "Nymphenburg": "/dachdecker-nymphenburg",
  "München-Nymphenburg": "/dachdecker-nymphenburg",
  "Harlaching": "/dachdecker-harlaching",
  "München-Harlaching": "/dachdecker-harlaching",
  "Trudering": "/dachdecker-trudering",
  "München-Trudering": "/dachdecker-trudering",
  "Moosach": "/dachdecker-moosach",
  "München-Moosach": "/dachdecker-moosach",
  "Allach": "/dachdecker-allach",
  "München-Allach": "/dachdecker-allach",
  "Fasanerie": "/dachdecker-fasanerie",
  "München-Fasanerie": "/dachdecker-fasanerie",
  "Feldmoching": "/dachdecker-feldmoching",
  "München-Feldmoching": "/dachdecker-feldmoching",
  "Neuhausen": "/dachdecker-neuhausen",
  "München-Neuhausen": "/dachdecker-neuhausen",
  "Obermenzing": "/dachdecker-obermenzing",
  "München-Obermenzing": "/dachdecker-obermenzing",
  "Solln": "/dachdecker-solln",
  "München-Solln": "/dachdecker-solln",
  "Giesing": "/dachdecker-giesing",
  "München-Giesing": "/dachdecker-giesing",
  "Ramersdorf": "/dachdecker-ramersdorf-perlach",
  "Perlach": "/dachdecker-ramersdorf-perlach",
  "Ramersdorf-Perlach": "/dachdecker-ramersdorf-perlach",
  "Haidhausen": "/dachdecker-au-haidhausen",
  "Au-Haidhausen": "/dachdecker-au-haidhausen",
  "Milbertshofen": "/dachdecker-milbertshofen",
  "München-Milbertshofen": "/dachdecker-milbertshofen",
  "Maxvorstadt": "/dachdecker-maxvorstadt",
  "München-Maxvorstadt": "/dachdecker-maxvorstadt",
  "Lehel": "/dachdecker-lehel",
  "München-Lehel": "/dachdecker-lehel",
  "Thalkirchen": "/dachdecker-thalkirchen",
  "München-Thalkirchen": "/dachdecker-thalkirchen",
  "Hadern": "/dachdecker-hadern",
  "München-Hadern": "/dachdecker-hadern",
  "Westend": "/dachdecker-westend",
  "München-Westend": "/dachdecker-westend",
  "Berg am Laim": "/dachdecker-berg-am-laim",
  "München-Berg am Laim": "/dachdecker-berg-am-laim",
  "Altstadt": "/dachdecker-altstadt",
  "München-Altstadt": "/dachdecker-altstadt",
  "Isarvorstadt": "/dachdecker-ludwigsvorstadt-isarvorstadt",
  "Ludwigsvorstadt": "/dachdecker-ludwigsvorstadt-isarvorstadt",
  "Schwanthalerhöhe": "/dachdecker-schwanthalerhoehe",
  "München-Schwanthalerhöhe": "/dachdecker-schwanthalerhoehe",
  "Sendling-Westpark": "/dachdecker-sendling-westpark",
  "Freimann": "/dachdecker-freimann",
  "München-Freimann": "/dachdecker-freimann",
  "Hasenbergl": "/dachdecker-hasenbergl",
  "München-Hasenbergl": "/dachdecker-hasenbergl",
  "Oberföhring": "/dachdecker-oberfoehring",
  "München-Oberföhring": "/dachdecker-oberfoehring",
  "Aubing": "/dachdecker-aubing-lochhausen-langwied",
  "Lochhausen": "/dachdecker-aubing-lochhausen-langwied",
  "Langwied": "/dachdecker-aubing-lochhausen-langwied",
  
  // Münchner Umland
  "Gräfelfing": "/dachdecker-graefelfing",
  "Karlsfeld": "/dachdecker-karlsfeld",
  "Germering": "/dachdecker-germering",
  "Starnberg": "/dachdecker-starnberg",
  "Dachau": "/dachdecker-dachau",
  "Freising": "/dachdecker-freising",
  "Erding": "/dachdecker-erding",
  "Unterschleißheim": "/dachdecker-unterschleissheim",
  "Fürstenfeldbruck": "/dachdecker-fuerstenfeldbruck",
  "Ottobrunn": "/dachdecker-ottobrunn",
  "Gröbenzell": "/dachdecker-groebenzell",
  "Puchheim": "/dachdecker-puchheim",
  "Olching": "/dachdecker-olching",
  "Eching": "/dachdecker-eching",
};

const keywordMapping: Record<string, string> = {
  "Dachsanierung": "/leistungen/dachsanierung",
  "Dachsanierungen": "/leistungen/dachsanierung",
  "Spenglerei": "/leistungen/spenglerei",
  "Spenglerarbeiten": "/leistungen/spenglerei",
  "Dachfenster": "/leistungen/dachfenster",
  "Dachflächenfenster": "/leistungen/dachfenster",
  "Wartung": "/leistungen/wartung",
  "Dachwartung": "/leistungen/wartung",
  "Dachinspektion": "/leistungen/wartung",
  "Energieberatung": "/leistungen/energieberatung",
  "Energieberater": "/leistungen/energieberatung",
  "energetische Sanierung": "/leistungen/energieberatung",
  "Gaubenbau": "/leistungen/gaubenbau",
  "Gauben": "/leistungen/gaubenbau",
  "Gaube": "/leistungen/gaubenbau",
  "Dachgaube": "/leistungen/gaubenbau",
  "Dachgauben": "/leistungen/gaubenbau",
  "Bedachungen": "/leistungen/bedachungen",
  "Steildach": "/leistungen/bedachungen",
  "Flachdach": "/leistungen/flachdach",
  "Flachdächer": "/leistungen/flachdach",
  "Flachdachsanierung": "/leistungen/flachdach",
  "Reparaturservice": "/leistungen/reparaturservice",
  "Dachreparatur": "/leistungen/reparaturservice",
  "Dachreparaturen": "/leistungen/reparaturservice",
  "Notdienst": "/leistungen/notdienst",
  "Dachnotdienst": "/leistungen/notdienst",
  "Notfall": "/leistungen/notdienst",
  "Sturmschaden": "/leistungen/notdienst",
  "Sturmschäden": "/leistungen/notdienst",
  "Dachrinnenreinigung": "/leistungen/dachrinnenreinigung",
  "Dachrinnen": "/leistungen/dachrinnenreinigung",
  "Rinnenreinigung": "/leistungen/dachrinnenreinigung",
  "Dachbeschichtung": "/leistungen/dachbeschichtung",
  "Beschichtung": "/leistungen/dachbeschichtung",
  "Architektenleistungen": "/leistungen/architektenleistungen",
  "Bauantrag": "/leistungen/architektenleistungen",
  "Bauanträge": "/leistungen/architektenleistungen",
  "Dämmung": "/ratgeber/daemmung",
  "Dachdämmung": "/ratgeber/daemmung",
  "Wärmedämmung": "/ratgeber/daemmung",
  "Aufsparrendämmung": "/ratgeber/daemmung",
  "Zwischensparrendämmung": "/ratgeber/daemmung",
  "Förderung": "/ratgeber/foerderung",
  "Förderungen": "/ratgeber/foerderung",
  "Förderprogramme": "/ratgeber/foerderung",
  "KfW": "/ratgeber/foerderung",
  "KfW-Förderung": "/ratgeber/foerderung",
  "BAFA": "/ratgeber/foerderung",
  "BAFA-Förderung": "/ratgeber/foerderung",
  "Steuerbonus": "/ratgeber/foerderung",
  "Leckortung": "/ratgeber/leckortung",
  "Wasserschaden": "/ratgeber/leckortung",
  "Referenzen": "/referenzen",
  "Projekte": "/referenzen",
  "kostenlose Beratung": "/beratung",
  "Beratungstermin": "/beratung",
  "Online-Termin": "/beratung",
  "Rückruf": "/rueckruf",
};

const highlightKeywords: string[] = [
  // Berufe & Qualifikation
  "Dachdecker",
  "Dachdeckermeister",
  "Spengler",
  "Spenglermeister",
  "Meisterbetrieb",
  "Meister",
  "Handwerk",
  "Fachbetrieb",
  "Innungsbetrieb",
  
  // Dachkonstruktion
  "Dachstuhl",
  "Sparren",
  "Lattung",
  "Dachlatten",
  "Schalung",
  "Unterspannbahn",
  "Konterlattung",
  
  // Dachelemente
  "First",
  "Firstziegel",
  "Ortgang",
  "Traufe",
  "Kehle",
  "Grat",
  "Dachneigung",
  "Dachfläche",
  
  // Dacheindeckung
  "Ziegel",
  "Dachziegel",
  "Tonziegel",
  "Dachstein",
  "Betondachstein",
  "Schiefer",
  "Naturschiefer",
  "Eternit",
  "Wellplatten",
  "Trapezblech",
  "Stehfalz",
  "Dachpappe",
  "Schweißbahn",
  "EPDM",
  
  // Metalle (Spenglerei)
  "Kupfer",
  "Zink",
  "Titanzink",
  "Aluminium",
  "Edelstahl",
  "Metall",
  "Metalldach",
  "Blech",
  "Blechverkleidung",
  "Verblechung",
  
  // Entwässerung (Spenglerei)
  "Dachrinne",
  "Dachrinnen",
  "Regenrinne",
  "Fallrohr",
  "Fallrohre",
  "Rinnenkessel",
  "Einhangstutzen",
  "Wasserablauf",
  "Entwässerung",
  
  // Anschlüsse
  "Kamin",
  "Kamineinfassung",
  "Schornstein",
  "Wandanschluss",
  "Maueranschluss",
  
  // Abdichtung
  "Abdichtung",
  "Dachabdichtung",
  "Bitumen",
  "Folie",
  "Dichtung",
  
  // Dachfenster
  "Velux",
  "Roto",
  "Lichtkuppel",
  "Lichtband",
  "Oberlicht",
  "Schwingfenster",
  
  // Schäden & Probleme
  "Notdienst",
  "Notfall",
  "Notsicherung",
  "Reparatur",
  "Sturm",
  "Sturmschaden",
  "Sturmschäden",
  "Hagel",
  "Hagelschaden",
  "Leck",
  "undicht",
  "Undichtigkeit",
  "Feuchtigkeit",
  "Schimmel",
  "Moos",
  "Algen",
  "Flechten",
  "Riss",
  "Bruch",
  "morsch",
  
  // Energie & Wärme
  "Wärme",
  "Heizkosten",
  "Energie",
  "Energiesparen",
  "Solar",
  "Photovoltaik",
  "PV-Anlage",
  "Gründach",
  "Dachbegrünung",
  
  // Wohnraum
  "Wohnraum",
  "Dachgeschoss",
  "Dachboden",
  "Spitzboden",
  "Tageslicht",
  "Belüftung",
  "Lüftung",
  "Stehhöhe",
  
  // Arbeitsarten
  "Sanierung",
  "Renovierung",
  "Modernisierung",
  "Austausch",
  "Erneuerung",
  "Montage",
  "Einbau",
  
  // Qualität & Service
  "Qualität",
  "Garantie",
  "Inspektion",
  "Dachcheck",
  "Festpreis",
  "Gewährleistung",
];

interface TextWithKeywordLinksProps {
  children: string;
  currentPath?: string;
  className?: string;
}

export function TextWithKeywordLinks({ children, currentPath, className }: TextWithKeywordLinksProps) {
  const allMappings = { ...keywordMapping, ...geoKeywordMapping };
  const linkKeywords = Object.keys(allMappings).sort((a, b) => b.length - a.length);
  const allKeywords = [...linkKeywords, ...highlightKeywords].sort((a, b) => b.length - a.length);
  const pattern = new RegExp(`(${allKeywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
  
  const parts = children.split(pattern);
  const usedLinks = new Set<string>();
  
  const result: ReactNode[] = parts.map((part, index) => {
    const lowerPart = part.toLowerCase();
    
    const matchedLinkKeyword = linkKeywords.find(k => k.toLowerCase() === lowerPart);
    if (matchedLinkKeyword) {
      const href = allMappings[matchedLinkKeyword];
      if (href && href !== currentPath && !usedLinks.has(href)) {
        usedLinks.add(href);
        return (
          <Link 
            key={index} 
            href={href}
            className="text-primary hover:underline font-medium"
          >
            {part}
          </Link>
        );
      }
    }
    
    const matchedHighlight = highlightKeywords.find(k => k.toLowerCase() === lowerPart);
    if (matchedHighlight) {
      return (
        <strong key={index} className="text-secondary font-semibold">
          {part}
        </strong>
      );
    }
    
    return part;
  });
  
  return <span className={className}>{result}</span>;
}

interface KeywordLinkProps {
  keyword: string;
  className?: string;
}

export function KeywordLink({ keyword, className }: KeywordLinkProps) {
  const href = Object.entries(keywordMapping).find(
    ([k]) => k.toLowerCase() === keyword.toLowerCase()
  )?.[1];
  
  if (!href) {
    return <span className={className}>{keyword}</span>;
  }
  
  return (
    <Link href={href} className={className || "text-primary hover:underline font-medium"}>
      {keyword}
    </Link>
  );
}

interface HighlightedKeywordProps {
  keyword: string;
  className?: string;
}

export function HighlightedKeyword({ keyword, className }: HighlightedKeywordProps) {
  return (
    <strong className={className || "text-secondary font-semibold"}>
      {keyword}
    </strong>
  );
}

export { keywordMapping, geoKeywordMapping, highlightKeywords };
export default TextWithKeywordLinks;
