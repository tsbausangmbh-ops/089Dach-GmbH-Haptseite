import { Link } from "wouter";
import { MapPin, Wrench, ArrowRight } from "lucide-react";

interface GeoLinksProps {
  currentStadtteil: string;
  nachbarStadtteile: string[];
  className?: string;
}

export const stadtteilToUrl: Record<string, string> = {
  "Pasing": "/dachdecker-pasing",
  "Laim": "/dachdecker-laim",
  "Schwabing": "/dachdecker-schwabing",
  "Sendling": "/dachdecker-sendling",
  "Bogenhausen": "/dachdecker-bogenhausen",
  "Nymphenburg": "/dachdecker-nymphenburg",
  "Harlaching": "/dachdecker-harlaching",
  "Trudering": "/dachdecker-trudering",
  "Moosach": "/dachdecker-moosach",
  "Allach": "/dachdecker-allach",
  "Fasanerie": "/dachdecker-fasanerie",
  "Feldmoching": "/dachdecker-feldmoching",
  "Neuhausen": "/dachdecker-neuhausen",
  "Obermenzing": "/dachdecker-obermenzing",
  "Solln": "/dachdecker-solln",
  "Giesing": "/dachdecker-giesing",
  "Ramersdorf-Perlach": "/dachdecker-ramersdorf-perlach",
  "Au-Haidhausen": "/dachdecker-au-haidhausen",
  "Haidhausen": "/dachdecker-au-haidhausen",
  "Milbertshofen": "/dachdecker-milbertshofen",
  "Maxvorstadt": "/dachdecker-maxvorstadt",
  "Lehel": "/dachdecker-lehel",
  "Thalkirchen": "/dachdecker-thalkirchen",
  "Hadern": "/dachdecker-hadern",
  "Westend": "/dachdecker-westend",
  "Berg am Laim": "/dachdecker-berg-am-laim",
  "Altstadt": "/dachdecker-altstadt",
  "Isarvorstadt": "/dachdecker-ludwigsvorstadt-isarvorstadt",
  "Ludwigsvorstadt": "/dachdecker-ludwigsvorstadt-isarvorstadt",
  "Schwanthalerhöhe": "/dachdecker-schwanthalerhoehe",
  "Sendling-Westpark": "/dachdecker-sendling-westpark",
  "Freimann": "/dachdecker-freimann",
  "Hasenbergl": "/dachdecker-hasenbergl",
  "Oberföhring": "/dachdecker-oberfoehring",
  "Aubing": "/dachdecker-aubing-lochhausen-langwied",
  "Aubing-Lochhausen-Langwied": "/dachdecker-aubing-lochhausen-langwied",
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

const leistungen = [
  { name: "Dachsanierung", url: "/leistungen/dachsanierung" },
  { name: "Dachreparatur", url: "/leistungen/reparaturservice" },
  { name: "Dachfenster", url: "/leistungen/dachfenster" },
  { name: "Flachdach", url: "/leistungen/flachdach" },
  { name: "Spenglerei", url: "/leistungen/spenglerei" },
  { name: "Notdienst", url: "/leistungen/notdienst" },
];

export function GeoLinks({ currentStadtteil, nachbarStadtteile, className }: GeoLinksProps) {
  return (
    <div className={`bg-gradient-to-br from-stone-50 to-stone-100 rounded-xl p-6 border border-stone-200 ${className || ""}`}>
      <h3 className="text-xl font-heading font-bold text-secondary mb-6">
        <strong>Dachdecker</strong> in Ihrer Nähe
      </h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-bold text-secondary mb-3 flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            Nachbar-Stadtteile
          </h4>
          <ul className="space-y-2">
            {nachbarStadtteile.map((stadtteil) => {
              const url = stadtteilToUrl[stadtteil];
              if (!url) return null;
              return (
                <li key={stadtteil}>
                  <Link 
                    href={url}
                    className="text-primary hover:underline flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <strong>Dachdecker {stadtteil}</strong>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-secondary mb-3 flex items-center gap-2">
            <Wrench className="h-4 w-4 text-primary" />
            Unsere Leistungen in {currentStadtteil}
          </h4>
          <ul className="space-y-2">
            {leistungen.map((leistung) => (
              <li key={leistung.name}>
                <Link 
                  href={leistung.url}
                  className="text-primary hover:underline flex items-center gap-2 group"
                >
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <strong>{leistung.name}</strong> {currentStadtteil}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-stone-200">
        <p className="text-sm text-muted-foreground">
          <strong>089Dach GmbH</strong> – Ihr <strong>Meisterbetrieb</strong> für <strong>Dacharbeiten</strong> in {currentStadtteil} und ganz München. 
          Wir sind schnell vor Ort: <strong>Dachreparatur</strong>, <strong>Dachsanierung</strong>, <strong>Sturmschaden</strong>-Hilfe.
        </p>
      </div>
    </div>
  );
}

interface ServiceLinksProps {
  currentService: string;
  className?: string;
}

const relatedServices: Record<string, { name: string; url: string }[]> = {
  "Dachsanierung": [
    { name: "Dachdämmung", url: "/ratgeber/daemmung" },
    { name: "Förderung", url: "/ratgeber/foerderung" },
    { name: "Dachfenster", url: "/leistungen/dachfenster" },
    { name: "Gaubenbau", url: "/leistungen/gaubenbau" },
  ],
  "Dachreparatur": [
    { name: "Notdienst", url: "/leistungen/notdienst" },
    { name: "Sturmschaden", url: "/leistungen/sturmschaden" },
    { name: "Dachrinnen", url: "/leistungen/dachrinnenreinigung" },
    { name: "Wartung", url: "/leistungen/wartung" },
  ],
  "Flachdach": [
    { name: "Dachbegrünung", url: "/dachbegruenung-kosten-muenchen" },
    { name: "Dachabdichtung", url: "/dach-abdichten-muenchen" },
    { name: "Dachsanierung", url: "/leistungen/dachsanierung" },
  ],
  "Dachfenster": [
    { name: "Dachsanierung", url: "/leistungen/dachsanierung" },
    { name: "Gaubenbau", url: "/leistungen/gaubenbau" },
    { name: "Dämmung", url: "/ratgeber/daemmung" },
  ],
  "default": [
    { name: "Dachsanierung", url: "/leistungen/dachsanierung" },
    { name: "Dachreparatur", url: "/leistungen/reparaturservice" },
    { name: "Notdienst", url: "/leistungen/notdienst" },
    { name: "Kontakt", url: "/kontakt" },
  ],
};

const stadtteile = [
  { name: "Pasing", url: "/dachdecker-pasing" },
  { name: "Schwabing", url: "/dachdecker-schwabing" },
  { name: "Sendling", url: "/dachdecker-sendling" },
  { name: "Bogenhausen", url: "/dachdecker-bogenhausen" },
  { name: "Laim", url: "/dachdecker-laim" },
  { name: "Nymphenburg", url: "/dachdecker-nymphenburg" },
];

export function ServiceGeoLinks({ currentService, className }: ServiceLinksProps) {
  const services = relatedServices[currentService] || relatedServices["default"];
  
  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className={`max-w-5xl mx-auto bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20 ${className || ""}`}>
          <h3 className="text-xl font-heading font-bold text-secondary mb-6">
            <strong>{currentService}</strong> in München – alle Stadtteile
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-secondary mb-3 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Beliebte Stadtteile
              </h4>
              <ul className="space-y-2">
                {stadtteile.map((stadtteil) => (
                  <li key={stadtteil.name}>
                    <Link 
                      href={stadtteil.url}
                      className="text-primary hover:underline flex items-center gap-2 group"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <strong>{currentService} {stadtteil.name}</strong>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-secondary mb-3 flex items-center gap-2">
                <Wrench className="h-4 w-4 text-primary" />
                Verwandte Leistungen
              </h4>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link 
                      href={service.url}
                      className="text-primary hover:underline flex items-center gap-2 group"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <strong>{service.name}</strong> München
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
      
          <div className="mt-6 pt-4 border-t border-primary/20">
            <p className="text-sm text-muted-foreground">
              <strong>089Dach GmbH</strong> – Ihr <strong>Dachdecker-Meisterbetrieb</strong> für <strong>{currentService}</strong> in ganz München und Umgebung. 
              Kostenlose Beratung: <strong>089 12621964</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GeoLinks;
