import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, CheckCircle2, Star, Shield, Award, ArrowRight } from "lucide-react";
import LeadFunnel from "@/components/LeadFunnel";
import SEO, { BreadcrumbSchema } from "@/components/SEO";
import RelatedServices from "@/components/RelatedServices";
import heroImage from "@assets/generated_images/realistic_restored_historic_roof_after.png";

const stadtteilData = {
  name: "Au-Haidhausen",
  fullName: "München Au-Haidhausen",
  plz: "81667, 81669, 81671, 81675",
  entfernung: "5 km",
  beschreibung: "Au-Haidhausen ist eines der beliebtesten Wohnviertel Münchens. Der Charme der Gründerzeit-Altbauten, die Nähe zur Isar und das urbane Flair machen den Bezirk besonders attraktiv. Viele denkmalgeschützte Gebäude erfordern spezielle Expertise bei Dacharbeiten.",
  besonderheiten: [
    "Beliebtes Gründerzeit-Viertel",
    "Viele denkmalgeschützte Altbauten",
    "Nähe zur Isar",
    "Urbanes Flair mit historischem Charme"
  ],
  typischeProjekte: [
    "Dachsanierung Altbau",
    "Denkmalschutz-Arbeiten",
    "Dachgeschossausbau",
    "Zinkblechdach Reparatur"
  ],
  nachbarStadtteile: ["Giesing", "Bogenhausen", "Lehel", "Berg am Laim"],
  referenzProjekt: {
    titel: "Gründerzeithaus Haidhausen",
    beschreibung: "Denkmalgerechte Komplettsanierung eines 4-geschossigen Altbaus mit Schiefereindeckung.",
    jahr: "2023"
  }
};

function NearbyServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://089dach.de/dachdecker-au-haidhausen/#service`,
    "name": `Dachdecker ${stadtteilData.fullName}`,
    "description": `Professionelle Dachdeckerarbeiten in ${stadtteilData.fullName}. Altbau-Experten.`,
    "provider": { "@type": "RoofingContractor", "name": "089Dach GmbH", "telephone": "+49-89-12621964" },
    "areaServed": { "@type": "Place", "name": stadtteilData.fullName },
    "serviceType": ["Dachsanierung", "Denkmalschutz", "Altbau", "Dachgeschossausbau"]
  };
  return (<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />);
}

export default function StadtteilHaidhausen() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title="Dachdecker Au-Haidhausen | Gründerzeit & Denkmalschutz"
        description="Dachdecker für Altbau in Au-Haidhausen. ✓ Gründerzeit ✓ Denkmalschutz ✓ 10 Jahre Garantie. Kostenlose Beratung ☎ 089 12621964"
        canonical={`https://089dach.de/dachdecker-au-haidhausen`}
        keywords={`dachdecker haidhausen, dachdecker au, dachsanierung haidhausen, altbau dach münchen, denkmalschutz dachdecker, dachdecker 81667 81669, dachgeschossausbau haidhausen, schieferdach haidhausen, sturmschaden dach haidhausen, dachfenster haidhausen, zinkblechdach haidhausen`}
        geoPlacename={`München Au-Haidhausen, Bayern, Deutschland`}
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Stadtteile", url: "/stadtteile" }, { name: `Dachdecker ${stadtteilData.name}`, url: `/dachdecker-au-haidhausen` }]} />
      <NearbyServiceSchema />
      <Navbar />
      
      <section className="pt-6 pb-8 md:pt-10 md:pb-12 bg-secondary relative overflow-hidden min-h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt={`Dachsanierung ${stadtteilData.name} - Dachdecker Meisterbetrieb München`}
            className="w-full h-full object-cover"
            width={1792}
            height={1024}
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/50"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl text-white">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Altbau-Experten</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 md:mb-6">
              Dachdecker {stadtteilData.fullName}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-xl mb-4 md:mb-6">
              Ihr Spezialist für Gründerzeit-Altbauten und denkmalgeschützte Gebäude in Au-Haidhausen.
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
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" />Anfahrt: ~10 Min</span>
            <span className="flex items-center gap-2"><Star className="h-4 w-4 text-primary" />4.9/5 Sterne</span>
            <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-primary" />10 Jahre Garantie</span>
          </div>
        </div>
      </div>

      <section className="py-3 md:py-4">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-4">Ihr Dachdecker für {stadtteilData.name}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">{stadtteilData.beschreibung}</p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Wir verstehen die besonderen Anforderungen historischer Bausubstanz und arbeiten eng mit Denkmalschutzbehörden zusammen.
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
                <h3 className="text-xl md:text-2xl font-heading font-bold text-secondary mb-4">Unsere Leistungen</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "Altbausanierung", desc: "Fachgerecht" },
                    { title: "Denkmalschutz", desc: "Originalgetreu" },
                    { title: "Dachausbau", desc: "Mehr Wohnraum" },
                    { title: "Zinkblech", desc: "Reparatur" },
                    { title: "Dachfenster", desc: "Mehr Licht" },
                    { title: "Schiefer", desc: "Eindeckung" }
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
                <p className="text-white/90 mb-6">Wir beraten Sie vor Ort – auch bei Denkmalschutz-Fragen.</p>
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
                  {["Meisterbetrieb seit 1998", "Altbau-Experten", "10 Jahre Garantie", "Denkmalschutz-Erfahrung", "Über 200 Projekte"].map((item, idx) => (
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
      <RelatedServices currentPage="stadtteile" relatedIds={["stadtteile", "referenzen", "gaubenbau", "dachsanierung"]} />
      <Contact />
      <Footer />
    </div>
  );
}
