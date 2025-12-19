import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, CheckCircle2, Star, Shield, Award, ArrowRight } from "lucide-react";
import LeadFunnel from "@/components/LeadFunnel";
import SEO, { BreadcrumbSchema } from "@/components/SEO";
import RelatedServices from "@/components/RelatedServices";

const stadtteilData = {
  name: "Freising",
  fullName: "Freising bei München",
  plz: "85354",
  entfernung: "35 km",
  beschreibung: "Freising, die Domstadt im Münchner Norden, verbindet über 1.300 Jahre Geschichte mit modernem Wohnen. Die Nähe zum Münchner Flughafen macht Freising zu einem attraktiven Wohnstandort. Historische Altstadt, Einfamilienhäuser und Neubauprojekte bieten vielfältige Dachprojekte.",
  besonderheiten: [
    "Historische Domstadt mit Denkmalschutz",
    "Nähe zum Münchner Flughafen",
    "Universitätsstadt mit wachsender Bevölkerung",
    "Mix aus Altbau und Neubau"
  ],
  typischeProjekte: [
    "Dachsanierung Altbau",
    "Denkmalschutz-Arbeiten",
    "Dachdämmung nach EnEV",
    "Neubau-Eindeckung"
  ],
  nachbarStadtteile: ["Unterschleißheim", "Garching", "Moosburg", "Erding"],
  referenzProjekt: {
    titel: "Altstadthaus Freising",
    beschreibung: "Denkmalgerechte Sanierung eines historischen Bürgerhauses mit Biberschwanzziegeln und neuer Dämmung.",
    jahr: "2023"
  }
};

function NearbyServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://089dach.de/dachdecker-${stadtteilData.name.toLowerCase()}/#service`,
    "name": `Dachdecker ${stadtteilData.fullName}`,
    "description": `Professionelle Dachdeckerarbeiten in ${stadtteilData.fullName}. Meisterbetrieb aus München.`,
    "provider": { "@type": "RoofingContractor", "name": "089Dach GmbH", "telephone": "+49-89-12621964" },
    "areaServed": { "@type": "Place", "name": stadtteilData.fullName },
    "serviceType": ["Dachsanierung", "Denkmalschutz", "Dachdämmung", "Altbau"]
  };
  return (<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />);
}

export default function UmlandFreising() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title={`Dachdecker Freising | Meisterbetrieb München`}
        description={`Dachdecker in Freising bei München ✓ Altbau ✓ Denkmalschutz ✓ Dämmung ✓ 10 Jahre Garantie. Tel: 089 12621964`}
        canonical={`https://089dach.de/dachdecker-freising`}
        keywords={`dachdecker freising, dachsanierung freising, dachdecker landkreis freising, denkmalschutz freising, dachdämmung freising, dachdecker 85354, altstadt freising dach, sturmschaden dach freising, dachfenster freising, domstadt freising dach, biberschwanz freising`}
        geoPlacename={`Freising, Landkreis Freising, Bayern, Deutschland`}
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Umland", url: "/umland" }, { name: `Dachdecker ${stadtteilData.name}`, url: `/dachdecker-${stadtteilData.name.toLowerCase()}` }]} />
      <NearbyServiceSchema />
      <Navbar />
      
      <section className="pt-6 pb-8 md:pt-10 md:pb-12 bg-secondary relative overflow-hidden min-h-[35vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/80"></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl text-white">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Meisterbetrieb aus München</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 md:mb-6">
              Dachdecker {stadtteilData.fullName}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-xl mb-4 md:mb-6">
              Ihr Dachdecker-Meisterbetrieb für die Domstadt {stadtteilData.name}.
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
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" />Anfahrt: ~40 Min</span>
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
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-4">Ihr Dachdecker für {stadtteilData.name}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">{stadtteilData.beschreibung}</p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Als Münchner Meisterbetrieb sind wir regelmäßig in Freising tätig und bieten die gleiche Qualität wie in München.
                </p>
              </div>
              <div className="bg-primary/5 rounded-xl p-4 md:p-6 border border-primary/20">
                <h3 className="text-xl font-heading font-bold text-secondary mb-4 flex items-center gap-2">
                  <Award className="h-6 w-6 text-primary" />Besonderheiten in {stadtteilData.name}
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
                <h3 className="text-xl md:text-2xl font-heading font-bold text-secondary mb-4">Unsere Leistungen in {stadtteilData.name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "Dachsanierung", desc: "Komplettsanierung" },
                    { title: "Denkmalschutz", desc: "Originalgetreu" },
                    { title: "Dachdämmung", desc: "KfW-förderfähig" },
                    { title: "Dachfenster", desc: "Mehr Licht" },
                    { title: "Dachrinnen", desc: "Erneuerung" },
                    { title: "Notdienst", desc: "Schnelle Hilfe" }
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
                <h3 className="text-xl font-bold mb-4">Kostenlose Beratung</h3>
                <p className="text-white/90 mb-6">Wir beraten Sie vor Ort in {stadtteilData.name}.</p>
                <a href="/beratung" className="block">
                  <Button size="lg" variant="secondary" className="w-full" data-testid="button-beratung-sidebar">
                    Termin vereinbaren <ArrowRight className="h-4 w-4 ml-2" />
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
                  {["Meisterbetrieb seit 1998", "Regelmäßig in Freising", "10 Jahre Garantie", "Festpreisgarantie", "Über 200 Projekte"].map((item, idx) => (
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
      <RelatedServices currentPage="stadtteile" relatedIds={["stadtteile", "referenzen", "dachsanierung", "energieberatung"]} />
      <Contact />
      <Footer />
    </div>
  );
}
