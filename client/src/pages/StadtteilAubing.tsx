import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, CheckCircle2, Star, Shield, Award, ArrowRight } from "lucide-react";
import LeadFunnel from "@/components/LeadFunnel";
import SEO, { BreadcrumbSchema } from "@/components/SEO";
import BackButton from "@/components/BackButton";
import heroImage from "@assets/generated_images/realistic_renovated_roof_obermenzing_after.png";
import imgDachrinnenreinigung from "@assets/stock_images/rain_gutter_full_lea_dbbf6bfe.jpg";
import imgSturmschaden from "@assets/generated_images/damaged_roof_with_missing_tiles.png";
import imgWasserschaden from "@assets/generated_images/leaking_roof_with_water_damage.png";
import imgDachUndicht from "@assets/generated_images/leaking_roof_gutter_dripping.png";
import imgDachsanierung from "@assets/generated_images/roofers_installing_battens_and_tiles.png";
import imgDachreparatur from "@assets/generated_images/roofer_doing_quick_repairs.png";
import imgReferenz2 from "@assets/generated_images/anthracite_roof_with_velux_cabrio.png";

const stadtteilData = {
  name: "Aubing-Lochhausen-Langwied",
  slug: "aubing-lochhausen-langwied",
  fullName: "München Aubing-Lochhausen-Langwied",
  plz: "81243, 81245, 81249",
  entfernung: "7 km",
  beschreibung: "Aubing-Lochhausen-Langwied im Münchner Westen ist geprägt von Einfamilienhäusern, Reihenhäusern und dörflichen Strukturen. Der Stadtteil bietet familienfreundliches Wohnen mit guter S-Bahn-Anbindung.",
  besonderheiten: [
    "Dörflicher Charakter mit Einfamilienhäusern",
    "Große Grundstücke und Gärten",
    "Gute Verkehrsanbindung (S-Bahn)"
  ],
  typischeProjekte: [
    "Steildach-Sanierung",
    "Dachgeschossausbau",
    "Solaranlage-Vorbereitung",
    "Gauben"
  ],
  nachbarStadtteile: ["Pasing", "Germering", "Puchheim", "Neuaubing"],
  referenzProjekte: [
    {
      titel: "Einfamilienhaus Aubing",
      beschreibung: "Komplettsanierung eines Steildachs mit Aufdachdämmung und Vorbereitung für Photovoltaik.",
      jahr: "2024"
    },
    {
      titel: "Reihenhaus Lochhausen",
      beschreibung: "Neueindeckung mit anthrazitfarbenen Frankfurter Pfannen inkl. Dachdämmung nach EnEV und neuen Dachfenstern.",
      jahr: "2023"
    }
  ]
};

function NearbyServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://089dach.de/dachdecker-${stadtteilData.slug}/#service`,
    "name": `Dachdecker ${stadtteilData.fullName}`,
    "description": `Professionelle Dachdeckerarbeiten in ${stadtteilData.fullName}. Spezialist für Einfamilienhäuser.`,
    "provider": {
      "@type": "RoofingContractor",
      "name": "089Dach GmbH",
      "telephone": "+49-89-12621964"
    },
    "areaServed": { "@type": "Place", "name": stadtteilData.fullName },
    "serviceType": ["Dachsanierung", "Dachgeschossausbau", "Solar-Vorbereitung", "Dachrinnenreinigung", "Sturmschaden-Reparatur", "Wasserschaden-Sanierung", "Dachreparatur"]
  };
  return (<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />);
}

export default function StadtteilAubing() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title="Dachdecker Aubing 2025 | Preise ab 85€/m² | Meisterbetrieb"
        description="Dachdecker Aubing: ✓ Dachsanierung ab 85€/m² ✓ 10 Jahre Garantie ✓ München West ✓ Kostenlose Beratung. ☎ 089 12621964"
        canonical="https://089dach.de/dachdecker-aubing-lochhausen-langwied"
        keywords="dachdecker aubing, dachdecker lochhausen, dachsanierung aubing münchen, dachdecker 81243 81245 81249, dachrinnenreinigung aubing, sturmschaden dach aubing, wasserschaden dach münchen aubing, dach undicht aubing reparieren, dachschaden aubing, was kostet dachdecker aubing, dachdecker aubing bewertung, guter dachdecker aubing, bester dachdecker aubing, dach undicht aubing, dach reparieren lassen aubing, dachschaden aubing beheben, wasserschaden dach aubing, dachdecker aubing günstig, dachdecker aubing festpreis, dachdecker aubing angebot, dachdecker aubing kostenvoranschlag, dachdecker aubing schnell, dachdecker aubing notdienst, dachdecker aubing sofort, dachdecker in meiner nähe aubing, dachdecker 81243"
        geoPlacename="München Aubing-Lochhausen-Langwied, Bayern, Deutschland"
        aiSummary={`089Dach GmbH ist Ihr Dachdecker-Meisterbetrieb für Aubing-Lochhausen-Langwied. Spezialist für Einfamilienhäuser. Tel: 089 12621964.`}
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Stadtteile", url: "/stadtteile" }, { name: `Dachdecker Aubing`, url: `/dachdecker-${stadtteilData.slug}` }]} />
      <NearbyServiceSchema />
      <Navbar />
      
      <section className="pt-6 pb-4 md:pt-5 md:pb-6 bg-secondary relative overflow-hidden min-h-[40vh] flex items-center">
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
          <div className="max-w-5xl text-white">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-primary font-bold tracking-wider uppercase text-sm">München West</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 md:mb-6">
              Dachdecker Aubing, Lochhausen & Langwied
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-xl mb-4 md:mb-6">
              Ihr Dachdeckermeister für Einfamilienhäuser und Reihenhäuser im Münchner Westen.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/rueckruf/">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" data-testid="button-anrufen-hero">
                  <Phone className="h-5 w-5 mr-2" /> Rückruf anfordern
                </Button>
              </a>
              <a href="/kontakt/">
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
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" />Anfahrt: ~15 Min</span>
            <span className="flex items-center gap-2"><Star className="h-4 w-4 text-primary" />4.9/5 Sterne</span>
            <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-primary" />10 Jahre Garantie</span>
          </div>
        </div>
      </div>

      <BackButton />

      <section className="py-3 md:py-4">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-4">Ihr Dachdecker für Aubing, Lochhausen & Langwied</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">{stadtteilData.beschreibung}</p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Als Meisterbetrieb aus der Nachbarschaft kennen wir die typischen Dachformen im Viertel 
                  und bieten passgenaue Lösungen für Ihr Eigenheim.
                </p>
              </div>

              <div className="bg-primary/5 rounded-xl p-4 md:p-6 border border-primary/20">
                <h3 className="text-xl font-heading font-bold text-secondary mb-4 flex items-center gap-2">
                  <Award className="h-6 w-6 text-primary" />Besonderheiten in Aubing
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
                <h3 className="text-xl md:text-2xl font-heading font-bold text-secondary mb-4">Unsere Leistungen in Aubing & Umgebung</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: "Dachrinnenreinigung", desc: "Professionelle Rinnenreinigung in Aubing", img: imgDachrinnenreinigung },
                    { title: "Sturmschaden reparieren", desc: "24h Notdienst bei Sturmschäden", img: imgSturmschaden },
                    { title: "Wasserschaden Dach", desc: "Schnelle Hilfe bei Wasserschäden", img: imgWasserschaden },
                    { title: "Dach undicht", desc: "Leckortung & Abdichtung", img: imgDachUndicht },
                    { title: "Dachsanierung", desc: "Komplettsanierung mit Garantie", img: imgDachsanierung },
                    { title: "Dachreparatur", desc: "Schnelle Reparaturen aller Art", img: imgDachreparatur }
                  ].map((service, idx) => (
                    <div key={idx} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img 
                          src={service.img} 
                          alt={`${service.title} in Aubing`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-secondary text-lg mb-1">{service.title}</h4>
                        <p className="text-sm text-muted-foreground">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              </div>

            <div className="space-y-6">
              <div className="bg-primary text-white rounded-xl p-4 md:p-6">
                <h3 className="text-xl font-bold mb-4">Kostenlose Beratung in Aubing</h3>
                <p className="text-white/90 mb-6">Unverbindliche Beratung für Ihr Eigenheim.</p>
                <a href="/beratung" className="block">
                  <Button size="lg" variant="secondary" className="w-full" data-testid="button-beratung-sidebar">
                    Termin vereinbaren <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </a>
                <a href="/rueckruf/" className="block mt-3">
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
                  {["Meisterbetrieb seit 1998", "Direkter Nachbar – kürzeste Anfahrt", "10 Jahre Garantie auf alle Arbeiten", "Schnellster Service in München", "Über 200 abgeschlossene Projekte", "Starkes Partnernetzwerk (Gerüstbau, Elektrik, Sanitär)", "Festpreisgarantie – keine versteckten Kosten", "Persönliche Beratung vor Ort", "Energieberatung & Fördermittel-Hilfe"].map((item, idx) => (
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

      <section className="py-4 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-6">Referenzprojekte in Aubing</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stadtteilData.referenzProjekte.map((projekt, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h4 className="font-bold text-secondary text-lg mb-2">{projekt.titel}</h4>
                <p className="text-muted-foreground mb-3">{projekt.beschreibung}</p>
                <p className="text-sm text-primary font-medium">Fertigstellung: {projekt.jahr}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadFunnel 
        headline="Dachdecker in Aubing gesucht?"
        subheadline="Wir sind Ihr Partner in Aubing."
        description="Ihr Dachdecker Aubing – für Einfamilienhäuser und Reihenhäuser im Münchner Westen."
      />
      <Contact 
        title="Dachdecker für Aubing gesucht?"
        description="Wir sind Ihr lokaler Dachdecker-Meisterbetrieb in Aubing – mit kurzer Anfahrt und Erfahrung seit 1998."
      />
      <Footer />
    </div>
  );
}
