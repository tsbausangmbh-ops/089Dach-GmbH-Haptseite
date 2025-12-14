import { Link } from "wouter";
import { ReactNode } from "react";

const keywordMapping: Record<string, string> = {
  "Dachsanierung": "/leistungen/dachsanierung",
  "Dachsanierungen": "/leistungen/dachsanierung",
  "Spenglerei": "/leistungen/spenglerei",
  "Spenglerarbeiten": "/leistungen/spenglerei",
  "Dachfenster": "/leistungen/dachfenster",
  "Dachflächenfenster": "/leistungen/dachfenster",
  "Wartung": "/leistungen/wartung",
  "Dachwartung": "/leistungen/wartung",
  "Energieberatung": "/leistungen/energieberatung",
  "Energieberater": "/leistungen/energieberatung",
  "Gaubenbau": "/leistungen/gaubenbau",
  "Gauben": "/leistungen/gaubenbau",
  "Gaube": "/leistungen/gaubenbau",
  "Dachgaube": "/leistungen/gaubenbau",
  "Dachgauben": "/leistungen/gaubenbau",
  "Bedachungen": "/leistungen/bedachungen",
  "Steildach": "/leistungen/bedachungen",
  "Flachdach": "/leistungen/bedachungen",
  "Flachdächer": "/leistungen/bedachungen",
  "Reparaturservice": "/leistungen/reparaturservice",
  "Dachreparatur": "/leistungen/reparaturservice",
  "Dachreparaturen": "/leistungen/reparaturservice",
  "Architektenleistungen": "/leistungen/architektenleistungen",
  "Bauantrag": "/leistungen/architektenleistungen",
  "Bauanträge": "/leistungen/architektenleistungen",
  "Dämmung": "/ratgeber/daemmung",
  "Dachdämmung": "/ratgeber/daemmung",
  "Wärmedämmung": "/ratgeber/daemmung",
  "Förderung": "/ratgeber/beratung",
  "Förderungen": "/ratgeber/beratung",
  "KfW": "/ratgeber/beratung",
  "BAFA": "/ratgeber/beratung",
  "Leckortung": "/ratgeber/leckortung",
  "Wasserschaden": "/ratgeber/leckortung",
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
  const linkKeywords = Object.keys(keywordMapping).sort((a, b) => b.length - a.length);
  const allKeywords = [...linkKeywords, ...highlightKeywords].sort((a, b) => b.length - a.length);
  const pattern = new RegExp(`(${allKeywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
  
  const parts = children.split(pattern);
  const usedLinks = new Set<string>();
  
  const result: ReactNode[] = parts.map((part, index) => {
    const lowerPart = part.toLowerCase();
    
    const matchedLinkKeyword = linkKeywords.find(k => k.toLowerCase() === lowerPart);
    if (matchedLinkKeyword) {
      const href = keywordMapping[matchedLinkKeyword];
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

export { keywordMapping, highlightKeywords };
export default TextWithKeywordLinks;
