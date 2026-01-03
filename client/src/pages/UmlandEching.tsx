import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, CheckCircle2, Star, Shield, Award, ArrowRight } from "lucide-react";
import LeadFunnel from "@/components/LeadFunnel";
import SEO, { BreadcrumbSchema } from "@/components/SEO";
import BackButton from "@/components/BackButton";
import { GeoLinks } from "@/components/GeoLinks";
import { TextWithKeywordLinks } from "@/components/KeywordLink";
import heroImage from "@assets/generated_images/modern_house_with_anthracite_roof.png";

const stadtteilData = {
  name: "Eching",
  fullName: "Eching bei München",
  plz: "85386",
  entfernung: "20 km",
  beschreibung: "Eching ist eine wachsende Gemeinde im Norden Münchens mit guter Verkehrsanbindung über die A9 und A92. Die Mischung aus Wohn- und Gewerbegebieten bietet vielfältige Dachprojekte.",
  besonderheiten: [
    "Wachsende Gemeinde im Münchner Norden",
    "Gute Anbindung über A9 und A92",
    "Mix aus Wohn- und Gewerbegebieten",
    "Hollerner See als Naherholungsgebiet"
  ],
  typischeProjekte: [
    "Dachsanierung Einfamilienhaus",
    "Flachdach Gewerbe",
    "Dachdämmung",
    "Dachrinnen-Arbeiten"
  ],
  nachbarStadtteile: ["Neufahrn", "Garching", "Unterschleißheim", "Freising"]
};

function NearbyServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://089dach.de/dachdecker-eching/#service",
    "name": `Dachdecker ${stadtteilData.fullName}`,
    "description": `Professionelle Dachdeckerarbeiten in ${stadtteilData.fullName}. Meisterbetrieb aus München. Dachsanierung ab 195€/m².`,
    "provider": {
      "@type": "RoofingContractor",
      "name": "089Dach GmbH",
      "telephone": "+49-89-12621964",
      "address": { "@type": "PostalAddress", "streetAddress": "Thuillestr. 20", "addressLocality": "München", "postalCode": "81247", "addressCountry": "DE" }
    },
    "areaServed": {
      "@type": "Place",
      "name": stadtteilData.fullName,
      "geo": { "@type": "GeoCoordinates", "latitude": 48.2833, "longitude": 11.6167 },
      "address": { "@type": "PostalAddress", "postalCode": "85386", "addressLocality": "Eching", "addressCountry": "DE" }
    },
    "serviceType": ["Dachsanierung", "Flachdach", "Dachdämmung", "Dachrinnen"],
    "offers": { "@type": "Offer", "priceSpecification": { "@type": "PriceSpecification", "price": "195", "priceCurrency": "EUR", "unitText": "pro m²" } }
  };
  return (<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />);
}

export default function UmlandEching() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title="Dachdecker Eching – Sanierung, Reparatur & Notdienst"
        description="Ihr Dachdecker in Eching: Dachsanierung, Reparatur, Flachdach, Spengler, Dachfenster. 24/7 Notdienst, Festpreis & 10 Jahre Garantie. Jetzt anrufen!"
        canonical="https://089dach.de/dachdecker-eching"
        keywords="Dachdecker Eching, Dachsanierung Eching, Dachreparatur Eching, Flachdach Eching, Spengler Eching, Dach Notdienst Eching, Dachfenster Eching"
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Umland", url: "/umland" }, { name: "Dachdecker Eching", url: "/dachdecker-eching" }]} />
      <NearbyServiceSchema />
      <Navbar />
      
      <section className="pt-6 pb-8 md:pt-10 md:pb-12 bg-secondary relative overflow-hidden min-h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt={`Dachsanierung Einfamilienhaus ${stadtteilData.name} - Dachdecker Meisterbetrieb München`}
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
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Meisterbetrieb aus München</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 md:mb-6">
              <strong>Dachdecker {stadtteilData.fullName}</strong>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-xl mb-4 md:mb-6">
              Ihr <strong>Dachdecker-Meisterbetrieb</strong> für <strong>{stadtteilData.name}</strong> im <strong>Münchner Umland</strong> – <strong>Dachsanierung</strong>, <strong>Dachreparatur</strong> und <strong>Notdienst</strong>.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/beratung">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" data-testid="button-beratung-hero">
                  24h Online Termin
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
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" />Anfahrt: ~25 Min</span>
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
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-4">Ihr <strong>Dachdecker</strong> <strong>Meisterbetrieb</strong> für {stadtteilData.name}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4"><TextWithKeywordLinks currentPath={`/dachdecker-${stadtteilData.name.toLowerCase()}`}>{stadtteilData.beschreibung}</TextWithKeywordLinks></p>
              </div>
              <div className="bg-primary/5 rounded-xl p-4 md:p-6 border border-primary/20">
                <h3 className="text-xl font-heading font-bold text-secondary mb-4 flex items-center gap-2">
                  <Award className="h-6 w-6 text-primary" />Besonderheiten in <strong>{stadtteilData.name}</strong>
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
                <h3 className="text-xl md:text-2xl font-heading font-bold text-secondary mb-4">Unsere Leistungen in <strong>{stadtteilData.name}</strong></h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "Dachsanierung", desc: "Komplettsanierung mit Garantie" },
                    { title: "Flachdach", desc: "Abdichtung für Gewerbe" },
                    { title: "Dachdämmung", desc: "EnEV-konform und KfW-förderfähig" },
                    { title: "Dachfenster", desc: "Mehr Licht unterm Dach" },
                    { title: "Dachrinnen", desc: "Reinigung und Erneuerung" },
                    { title: "Notdienst", desc: "Schnelle Hilfe bei Sturmschäden" }
                  ].map((service, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                      <h4 className="font-bold text-secondary">{service.title}</h4>
                      <p className="text-sm text-muted-foreground">{service.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <GeoLinks 
                currentStadtteil={stadtteilData.name}
                nachbarStadtteile={stadtteilData.nachbarStadtteile || []}
              />
            </div>
            <div className="space-y-6">
              <div className="bg-primary text-white rounded-xl p-4 md:p-6">
                <h3 className="text-xl font-bold mb-4">Kostenlose Beratung</h3>
                <p className="text-white/90 mb-6">Wir beraten Sie unverbindlich vor Ort in {stadtteilData.name}.</p>
                <a href="/beratung" className="block">
                  <Button size="lg" variant="secondary" className="w-full" data-testid="button-beratung-sidebar">
                    Termin vereinbaren <ArrowRight className="h-4 w-4 ml-2" />
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
            </div>
          </div>
        </div>
      </section>
      <LeadFunnel 
        headline="Dachdecker in Eching gesucht?"
        subheadline="Wir sind Ihr Partner in Eching."
        description="Ihr Dachdecker für Eching – Meisterbetrieb mit schneller Hilfe."
      />
      <Contact 
        title="Dachdecker in Eching gesucht?"
        description="Wir sind Ihr lokaler Dachdecker-Meisterbetrieb in Eching."
      />
      <Footer />
    </div>
  );
}
