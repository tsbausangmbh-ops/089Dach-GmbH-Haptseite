import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, CheckCircle2, Star, Shield, Award, ArrowRight } from "lucide-react";
import LeadFunnel from "@/components/LeadFunnel";
import SEO, { BreadcrumbSchema } from "@/components/SEO";
import RelatedServices from "@/components/RelatedServices";

const stadtteilData = {
  name: "Ludwigsvorstadt-Isarvorstadt",
  slug: "ludwigsvorstadt-isarvorstadt",
  fullName: "München Ludwigsvorstadt-Isarvorstadt",
  plz: "80337, 80469, 80336, 80538",
  entfernung: "7 km",
  beschreibung: "Das Glockenbachviertel und die Isarvorstadt sind geprägt von gründerzeitlichen Altbauten mit aufwendigen Dachlandschaften. Das lebendige Viertel erfordert Dachdecker mit Erfahrung in Altbausanierung.",
  besonderheiten: [
    "Gründerzeitliche Altbauten im Glockenbachviertel",
    "Aufwendige Mansarddächer und Gauben",
    "Enge Bebauung erfordert Speziallogistik"
  ],
  typischeProjekte: [
    "Mansarddach-Sanierung",
    "Gaubenreparatur",
    "Dachterrassen",
    "Zinkarbeiten"
  ],
  nachbarStadtteile: ["Altstadt", "Sendling", "Au-Haidhausen", "Maxvorstadt"],
  referenzProjekt: {
    titel: "Gründerzeithaus Glockenbach",
    beschreibung: "Komplettsanierung eines vierstöckigen Gründerzeithauses mit neuen Zinkrinnen und Gaubenreparatur.",
    jahr: "2024"
  }
};

function NearbyServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://089dach.de/dachdecker-${stadtteilData.slug}/#service`,
    "name": `Dachdecker ${stadtteilData.fullName}`,
    "description": `Professionelle Dachdeckerarbeiten in ${stadtteilData.fullName}. Spezialist für Altbausanierung.`,
    "provider": {
      "@type": "RoofingContractor",
      "name": "089Dach GmbH",
      "telephone": "+49-89-12621964"
    },
    "areaServed": { "@type": "Place", "name": stadtteilData.fullName },
    "serviceType": ["Dachsanierung", "Mansarddach", "Gaubenreparatur", "Zinkarbeiten"]
  };
  return (<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />);
}

export default function StadtteilIsarvorstadt() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title="Dachdecker Glockenbachviertel & Isarvorstadt München"
        description="Dachdecker für Altbauten im Glockenbachviertel. ✓ Mansarddächer ✓ Gaubenreparatur ✓ 10 Jahre Garantie. Beratung ☎ 089 12621964"
        canonical="https://089dach.de/dachdecker-ludwigsvorstadt-isarvorstadt"
        keywords="dachdecker glockenbachviertel, dachdecker isarvorstadt, dachsanierung altbau münchen, mansarddach sanierung, gaubenreparatur münchen, dachdecker 80337 80469, zinkarbeiten isarvorstadt, sturmschaden dach glockenbachviertel, dachterrasse münchen, denkmalschutz isarvorstadt"
        geoPlacename="München Ludwigsvorstadt-Isarvorstadt, Bayern, Deutschland"
        aiSummary={`089Dach GmbH ist Ihr Dachdecker-Meisterbetrieb für Ludwigsvorstadt-Isarvorstadt. Spezialist für gründerzeitliche Altbauten. Tel: 089 12621964.`}
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: `Dachdecker Isarvorstadt`, url: `/dachdecker-${stadtteilData.slug}` }]} />
      <NearbyServiceSchema />
      <Navbar />
      
      <section className="pt-6 pb-8 md:pt-10 md:pb-12 bg-secondary relative overflow-hidden min-h-[35vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/80"></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl text-white">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Altbau-Experten</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 md:mb-6">
              Dachdecker Glockenbachviertel & Isarvorstadt
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-xl mb-4 md:mb-6">
              Spezialisiert auf gründerzeitliche Mansarddächer und aufwendige Dachlandschaften im Szeneviertel.
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
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" />Anfahrt: ~20 Min</span>
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
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-4">Altbau-Experten für das Glockenbachviertel</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">{stadtteilData.beschreibung}</p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Die enge Bebauung im Viertel erfordert spezielle Logistik. Wir sind darauf spezialisiert und 
                  arbeiten effizient auch unter beengten Verhältnissen.
                </p>
              </div>

              <div className="bg-primary/5 rounded-xl p-4 md:p-6 border border-primary/20">
                <h3 className="text-xl font-heading font-bold text-secondary mb-4 flex items-center gap-2">
                  <Award className="h-6 w-6 text-primary" />Besonderheiten in der Isarvorstadt
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
                <h3 className="text-xl md:text-2xl font-heading font-bold text-secondary mb-4">Unsere Leistungen im Glockenbachviertel</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "Mansarddach", desc: "Typisch für Gründerzeitbauten" },
                    { title: "Gaubenreparatur", desc: "Originalgetreue Wiederherstellung" },
                    { title: "Zinkarbeiten", desc: "Rinnen, Fallrohre, Einfassungen" },
                    { title: "Dachterrassen", desc: "Planung und Umsetzung" },
                    { title: "Flachdach", desc: "Anbau und Hinterhofgebäude" },
                    { title: "Dachsanierung", desc: "Behutsame Komplettsanierung" }
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
                <h3 className="text-xl font-bold mb-4">Kostenlose Beratung im Glockenbachviertel</h3>
                <p className="text-white/90 mb-6">Spezialisierte Beratung für Altbau-Projekte.</p>
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
                  {["Meisterbetrieb seit 1998", "Altbau-Erfahrung", "10 Jahre Garantie", "Eigene Spenglerwerkstatt", "Hochwertige Materialien"].map((item, idx) => (
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
