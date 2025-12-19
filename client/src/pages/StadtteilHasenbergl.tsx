import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, CheckCircle2, Star, Shield, Award, ArrowRight } from "lucide-react";
import LeadFunnel from "@/components/LeadFunnel";
import SEO, { BreadcrumbSchema } from "@/components/SEO";
import RelatedServices from "@/components/RelatedServices";

const stadtteilData = {
  name: "Hasenbergl",
  slug: "hasenbergl",
  fullName: "München-Hasenbergl",
  plz: "80933, 80935",
  entfernung: "12 km",
  beschreibung: "Das Hasenbergl im Münchner Norden ist geprägt von Wohnsiedlungen der 1960er-70er Jahre. Viele Dächer benötigen inzwischen eine Sanierung mit moderner Wärmedämmung.",
  besonderheiten: [
    "Wohnsiedlungen der 1960er-70er Jahre",
    "Flachdächer und Steildächer",
    "Hoher Sanierungsbedarf"
  ],
  typischeProjekte: [
    "Flachdach-Sanierung",
    "Wärmedämmung",
    "Dachfenster-Einbau",
    "Dachrinnenreinigung"
  ],
  nachbarStadtteile: ["Feldmoching", "Milbertshofen", "Freimann", "Karlsfeld"],
  referenzProjekt: {
    titel: "Mehrfamilienhaus Hasenbergl",
    beschreibung: "Komplettsanierung eines Flachdachs aus den 1970er Jahren mit moderner Abdichtung und Dämmung.",
    jahr: "2023"
  }
};

function NearbyServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://089dach.de/dachdecker-${stadtteilData.slug}/#service`,
    "name": `Dachdecker ${stadtteilData.fullName}`,
    "description": `Professionelle Dachdeckerarbeiten in ${stadtteilData.fullName}. Spezialist für Sanierung.`,
    "provider": {
      "@type": "RoofingContractor",
      "name": "089Dach GmbH",
      "telephone": "+49-89-12621964"
    },
    "areaServed": { "@type": "Place", "name": stadtteilData.fullName },
    "serviceType": ["Dachsanierung", "Flachdach", "Wärmedämmung", "Spenglerarbeiten"]
  };
  return (<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />);
}

export default function StadtteilHasenbergl() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title="Dachdecker Hasenbergl | Dachsanierung München Nord"
        description="Dachdecker für Dachsanierung im Hasenbergl. ✓ Flachdach ✓ Wärmedämmung ✓ 10 Jahre Garantie. Beratung ☎ 089 12621964"
        canonical="https://089dach.de/dachdecker-hasenbergl"
        keywords="dachdecker hasenbergl, dachsanierung hasenbergl, flachdach münchen nord, wärmedämmung hasenbergl, dachdecker 80933 80935, sturmschaden dach hasenbergl, dachfenster hasenbergl, steildach hasenbergl, mehrfamilienhaus dach hasenbergl, dachrinne hasenbergl"
        geoPlacename="München-Hasenbergl, Bayern, Deutschland"
        aiSummary={`089Dach GmbH ist Ihr Dachdecker-Meisterbetrieb für das Hasenbergl. Spezialist für Sanierung. Tel: 089 12621964.`}
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: `Dachdecker ${stadtteilData.name}`, url: `/dachdecker-${stadtteilData.slug}` }]} />
      <NearbyServiceSchema />
      <Navbar />
      
      <section className="pt-6 pb-8 md:pt-10 md:pb-12 bg-secondary relative overflow-hidden min-h-[35vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/80"></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl text-white">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Sanierungs-Experten</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 md:mb-6">
              Dachdecker {stadtteilData.fullName}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-xl mb-4 md:mb-6">
              Ihr Dachdeckermeister für Sanierungsprojekte im Hasenbergl.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/rueckruf">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" data-testid="button-anrufen-hero">
                  <Phone className="h-5 w-5 mr-2" /> Rückruf anfordern
                </Button>
              </a>
              <a href="/kontakt">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary" data-testid="button-contact-hero">
                  Kontakt aufnehmen
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-stone-100 py-2 md:py-3 border-b border-stone-200">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-xs md:text-sm">
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" />PLZ: {stadtteilData.plz}</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" />Anfahrt: ~30 Min</span>
            <span className="flex items-center gap-2"><Star className="h-4 w-4 text-primary" />4.9/5 Sterne</span>
            <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-primary" />10 Jahre Garantie</span>
          </div>
        </div>
      </div>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-4">Ihr Dachdecker für das {stadtteilData.name}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">{stadtteilData.beschreibung}</p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Wir haben jahrelange Erfahrung mit der Sanierung von Gebäuden aus dieser Bauperiode und 
                  bieten wirtschaftliche Lösungen für nachhaltige Dacherneuerung.
                </p>
              </div>

              <div className="bg-primary/5 rounded-xl p-4 md:p-6 border border-primary/20">
                <h3 className="text-xl font-heading font-bold text-secondary mb-4 flex items-center gap-2">
                  <Award className="h-6 w-6 text-primary" />Besonderheiten im {stadtteilData.name}
                </h3>
                <ul className="space-y-3">
                  {stadtteilData.besonderheiten.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-secondary mb-4">Unsere Leistungen im {stadtteilData.name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "Flachdach-Sanierung", desc: "Moderne Abdichtung" },
                    { title: "Wärmedämmung", desc: "Energetische Optimierung" },
                    { title: "Steildach-Sanierung", desc: "Komplett oder Teilsanierung" },
                    { title: "Dachfenster", desc: "Einbau und Austausch" },
                    { title: "Dachrinnen", desc: "Reinigung und Erneuerung" },
                    { title: "Wartung", desc: "Regelmäßige Dachwartung" }
                  ].map((service, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                      <h4 className="font-bold text-secondary">{service.title}</h4>
                      <p className="text-sm text-muted-foreground">{service.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-secondary/5 rounded-xl p-4 md:p-6">
                <h3 className="text-xl font-heading font-bold text-secondary mb-2">Referenzprojekt: {stadtteilData.referenzProjekt.titel}</h3>
                <p className="text-muted-foreground mb-2">{stadtteilData.referenzProjekt.beschreibung}</p>
                <p className="text-sm text-primary font-medium">Fertigstellung: {stadtteilData.referenzProjekt.jahr}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-primary text-white rounded-xl p-4 md:p-6">
                <h3 className="text-xl font-bold mb-4">Kostenlose Beratung im {stadtteilData.name}</h3>
                <p className="text-white/90 mb-6">Unverbindliche Beratung zur Dachsanierung.</p>
                <a href="/beratung" className="block">
                  <Button size="lg" variant="secondary" className="w-full" data-testid="button-beratung-sidebar">
                    Beratung anfordern <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </a>
                <a href="/rueckruf" className="block mt-3">
                  <Button size="lg" variant="outline" className="w-full border-white text-white hover:bg-white hover:text-primary" data-testid="button-anrufen-sidebar">
                    <Phone className="h-4 w-4 mr-2" /> Rückruf anfordern
                  </Button>
                </a>
              </div>

              <div className="bg-white rounded-xl p-4 md:p-6 border border-gray-100">
                <h4 className="font-bold text-secondary mb-4">Auch in der Nähe tätig:</h4>
                <ul className="space-y-2">
                  {stadtteilData.nachbarStadtteile.map((stadtteil, idx) => (
                    <li key={idx}>
                      <a href={`/dachdecker-${stadtteil.toLowerCase().replace(/ /g, '-')}`} className="text-primary hover:underline flex items-center gap-2">
                        <MapPin className="h-4 w-4" />Dachdecker {stadtteil}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 md:p-6">
                <h4 className="font-bold text-secondary mb-4">Warum 089Dach?</h4>
                <ul className="space-y-3">
                  {["Meisterbetrieb seit 1998", "Sanierungs-Erfahrung", "10 Jahre Garantie", "Eigene Spenglerwerkstatt", "Faire Preise"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadFunnel />
      <RelatedServices 
        currentPage="stadtteile" 
        relatedIds={["stadtteile", "referenzen", "spenglerei", "faq"]}
      />
      <Contact />
      <Footer />
    </div>
  );
}
