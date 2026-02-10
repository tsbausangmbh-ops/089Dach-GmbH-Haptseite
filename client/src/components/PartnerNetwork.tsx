import { Handshake, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";

const partners = [
  {
    name: "089-Sanierer",
    description: "Innenausbau & Komplettsanierung",
    url: "https://089-sanierer.de/",
  },
  {
    name: "KSHW München",
    description: "Innenausbau & Komplettsanierung",
    url: "https://komplettsanierungen-haus-wohnung.de/",
  },
  {
    name: "089Dach GmbH",
    description: "Dachdecker- & Spenglerarbeiten",
    url: "https://089dach.de/",
  },
  {
    name: "Extrucon GmbH",
    description: "Webdesign & Digitalagentur",
    url: "https://extrucon.de/",
  },
  {
    name: "Sanitär München",
    description: "Sanitär & Badinstallation",
    url: "https://sanitaer-muenchen.de/",
  },
  {
    name: "Aquapro24",
    description: "Sanitär, Heizung & Klima",
    url: "https://aquapro24.de/",
  },
];

export default function PartnerNetwork() {
  return (
    <section className="py-16 bg-stone-50 border-t border-stone-100" data-testid="section-partner-network">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <Handshake className="h-6 w-6 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Starke Partner</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-3">
            Unser Partnernetzwerk in München
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Wir arbeiten mit geprüften Fachbetrieben aus Sanitär, Heizung, Klima und Elektro zusammen – für effiziente Abläufe aus einer Hand.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`link-partner-${partner.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <Card className="p-5 h-full hover-elevate transition-all group">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-heading font-semibold text-secondary group-hover:text-primary transition-colors">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {partner.description}
                    </p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
