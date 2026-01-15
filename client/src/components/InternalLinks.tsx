import { MapPin, Wrench, BookOpen, ArrowRight } from "lucide-react";

interface InternalLinksProps {
  variant?: "services" | "locations" | "guides" | "all";
  title?: string;
  showTitle?: boolean;
}

const serviceLinks = [
  { text: "Dachsanierung München", href: "/leistungen/dachsanierung" },
  { text: "Flachdach Abdichtung", href: "/leistungen/flachdach" },
  { text: "Steildach Eindeckung", href: "/leistungen/bedachungen" },
  { text: "Dachrinnen & Spenglerei", href: "/leistungen/spenglerei" },
  { text: "Dachfenster Einbau", href: "/leistungen/dachfenster" },
  { text: "Sturmschaden Reparatur", href: "/leistungen/sturmschaden" },
  { text: "Dachbeschichtung", href: "/leistungen/dachbeschichtung" },
  { text: "Dach Notdienst 24/7", href: "/leistungen/notdienst" },
];

const locationLinks = [
  { text: "Dachdecker Pasing", href: "/dachdecker-pasing" },
  { text: "Dachdecker Schwabing", href: "/dachdecker-schwabing" },
  { text: "Dachdecker Sendling", href: "/dachdecker-sendling" },
  { text: "Dachdecker Bogenhausen", href: "/dachdecker-bogenhausen" },
  { text: "Dachdecker Nymphenburg", href: "/dachdecker-nymphenburg" },
  { text: "Dachdecker Harlaching", href: "/dachdecker-harlaching" },
  { text: "Dachdecker Trudering", href: "/dachdecker-trudering" },
  { text: "Dachdecker Moosach", href: "/dachdecker-moosach" },
];

const currentYear = new Date().getFullYear();
const guideLinks = [
  { text: "Was kostet Dachsanierung?", href: "/ratgeber/kosten" },
  { text: `KfW Förderung ${currentYear}`, href: "/ratgeber/foerderung" },
  { text: "Sturmschaden – Was tun?", href: "/ratgeber/sturmschaden" },
  { text: "Dachziegel Vergleich", href: "/ratgeber/materialien" },
  { text: "Dachdämmung Tipps", href: "/ratgeber/daemmung" },
  { text: "Leckortung & Schäden", href: "/ratgeber/leckortung" },
];

export default function InternalLinks({ variant = "all", title, showTitle = true }: InternalLinksProps) {
  const getLinks = () => {
    switch (variant) {
      case "services": return serviceLinks;
      case "locations": return locationLinks;
      case "guides": return guideLinks;
      default: return [...serviceLinks.slice(0, 4), ...locationLinks.slice(0, 4), ...guideLinks.slice(0, 4)];
    }
  };

  const getIcon = () => {
    switch (variant) {
      case "services": return <Wrench className="h-4 w-4 text-primary" />;
      case "locations": return <MapPin className="h-4 w-4 text-primary" />;
      case "guides": return <BookOpen className="h-4 w-4 text-primary" />;
      default: return null;
    }
  };

  const getDefaultTitle = () => {
    switch (variant) {
      case "services": return "Unsere Dachdecker-Leistungen";
      case "locations": return "Dachdecker in Ihrer Nähe";
      case "guides": return "Ratgeber & Tipps";
      default: return "Weitere Informationen";
    }
  };

  const links = getLinks();

  return (
    <section className="py-6 bg-stone-50 border-t border-stone-200">
      <div className="container mx-auto px-6 lg:px-12">
        {showTitle && (
          <div className="flex items-center gap-2 mb-4">
            {getIcon()}
            <h3 className="text-lg font-heading font-bold text-secondary">
              {title || getDefaultTitle()}
            </h3>
          </div>
        )}
        <div className="flex flex-wrap gap-3">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="inline-flex items-center gap-1 px-3 py-2 bg-white border border-stone-200 rounded-lg text-sm text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all"
              data-testid={`internal-link-${idx}`}
            >
              {link.text}
              <ArrowRight className="h-3 w-3 opacity-50" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function InlineKeywordLinks() {
  const topKeywords = [
    { text: "Dachsanierung München", href: "/leistungen/dachsanierung" },
    { text: "Dachdecker Kosten", href: "/ratgeber/kosten" },
    { text: "KfW Förderung", href: "/ratgeber/foerderung" },
    { text: "Flachdach", href: "/leistungen/flachdach" },
    { text: "Notdienst", href: "/leistungen/notdienst" },
  ];

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {topKeywords.map((kw, idx) => (
        <a
          key={idx}
          href={kw.href}
          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full hover:bg-primary/20 transition-colors"
        >
          {kw.text}
        </a>
      ))}
    </div>
  );
}
