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

interface TextWithKeywordLinksProps {
  children: string;
  currentPath?: string;
  className?: string;
}

export function TextWithKeywordLinks({ children, currentPath, className }: TextWithKeywordLinksProps) {
  const sortedKeywords = Object.keys(keywordMapping).sort((a, b) => b.length - a.length);
  const pattern = new RegExp(`(${sortedKeywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
  
  const parts = children.split(pattern);
  const usedLinks = new Set<string>();
  
  const result: ReactNode[] = parts.map((part, index) => {
    const lowerPart = part.toLowerCase();
    const matchedKeyword = sortedKeywords.find(k => k.toLowerCase() === lowerPart);
    
    if (matchedKeyword) {
      const href = keywordMapping[matchedKeyword];
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

export { keywordMapping };
export default TextWithKeywordLinks;
