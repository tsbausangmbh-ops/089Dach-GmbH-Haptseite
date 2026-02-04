import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, CheckCircle2, Star, Shield, Award, ArrowRight } from "lucide-react";
import LeadFunnel from "@/components/LeadFunnel";
import { CostEscalationBanner, DecisionPressureBanner } from "@/components/UrgencyBanner";
import SEO, { BreadcrumbSchema } from "@/components/SEO";
import BackButton from "@/components/BackButton";
import { GeoLinks } from "@/components/GeoLinks";
import { TextWithKeywordLinks } from "@/components/KeywordLink";
import heroImage from "@assets/generated_images/realistic_row_house_roof_after.webp";
import { TestimonialSection } from "@/components/TestimonialSection";
import { getTestimonialsForLocation } from "@shared/testimonials";
import { LocalFAQSection } from "@/components/LocalFAQSection";
import { getLocationContent } from "@shared/local-faqs";

const stadtteilData = {
  name: "Trudering",
  fullName: "München-Trudering",
  plz: "81825, 81827, 81829",
  entfernung: "14 km",
  beschreibung: "Trudering-Riem ist eines der familienfreundlichsten Viertel Münchens. Die vielen Einfamilienhäuser und Reihenhäuser mit ihren Steildächern sind unser Spezialgebiet. Hier arbeiten wir besonders familienfreundlich und termingerecht.",
  besonderheiten: [
    "Viele Einfamilienhäuser und Reihenhäuser",
    "Familienfreundliches Wohngebiet",
    "Steildächer mit Ziegeleindeckung",
    "Moderne Neubauten und Bestandsbauten"
  ],
  typischeProjekte: [
    "Dachsanierung Reihenhaus",
    "Sturmschaden-Reparatur",
    "Dachdämmung Bestandsbau",
    "Solaranlage-Vorbereitung"
  ],
  nachbarStadtteile: ["Bogenhausen", "Ramersdorf", "Berg am Laim", "Haar"],
  referenzProjekt: {
    titel: "Reihenhauszeile Trudering",
    beschreibung: "Koordinierte Dachsanierung von 6 Reihenhäusern mit einheitlicher Ziegeleindeckung und individueller Dämmung.",
    jahr: "2023"
  }
};

function NearbyServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://089dach.de/dachdecker-${stadtteilData.name.toLowerCase()}/#service`,
    "name": `Dachdecker ${stadtteilData.fullName}`,
    "description": `Professionelle Dachdeckerarbeiten in ${stadtteilData.fullName}. Spezialist für Einfamilienhäuser und Reihenhäuser.`,
    "provider": {
      "@type": "RoofingContractor",
      "name": "089Dach GmbH",
      "telephone": "+49-89-12621964"
    },
    "areaServed": { "@type": "Place", "name": stadtteilData.fullName },
    "serviceType": ["Dachsanierung", "Dachreparatur", "Dachdämmung", "Sturmschaden", "Dachrinnenreinigung", "Sturmschaden-Reparatur", "Wasserschaden-Sanierung"]
  };
  return (<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />);
}

export default function StadtteilTrudering() {
  const testimonials = getTestimonialsForLocation(stadtteilData.name);
  const localContent = getLocationContent(stadtteilData.name);
  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title="Dachdecker Trudering – Sanierung, Reparatur & Notdienst"
        description="Ihr Dachdecker in Trudering: Dachsanierung, Reparatur, Flachdach, Spengler, Dachfenster. 24/7 Notdienst, Festpreis & 10 Jahre Garantie. Jetzt anrufen!"
        canonical=""
        keywords="Dachdecker Trudering, Dachsanierung Trudering, Dachreparatur Trudering, Flachdach Trudering, Spengler Trudering, Dach Notdienst Trudering, Dachfenster Trudering"
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Stadtteile", url: "/stadtteile" }, { name: `Dachdecker ${stadtteilData.name}`, url: `/dachdecker-${stadtteilData.name.toLowerCase()}` }]} />
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
          <div className="max-w-5xl text-white">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Familienhaus-Experten</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 md:mb-6">
              <strong>Dachdecker {stadtteilData.fullName}</strong>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-xl mb-4 md:mb-6">
              Ihr <strong>Dachdecker-Meisterbetrieb</strong> – zuverlässige Dacharbeiten für Familienhäuser in <strong>{stadtteilData.name}</strong> und Umgebung.
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
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" />Anfahrt: ~30 Min</span>
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
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-4">089Dach GmbH – Ihr lokaler <strong>Dachdecker</strong> für {stadtteilData.name}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4"><TextWithKeywordLinks currentPath="/dachdecker-trudering">{stadtteilData.beschreibung}</TextWithKeywordLinks></p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Als <strong>Meisterbetrieb</strong> aus <strong>München</strong> verstehen wir die Bedürfnisse von Familien in <strong>Trudering</strong>. 
                  Ob <strong>Dachsanierung</strong>, <strong>Dachreparatur</strong> oder <strong>Notdienst</strong> – schnelle, saubere Arbeit mit minimalem Lärm.
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
                    { title: "Dachrinnenreinigung", desc: "Professionelle Rinnenreinigung in Trudering" },
                    { title: "Sturmschaden reparieren", desc: "24h Notdienst bei Sturmschäden" },
                    { title: "Wasserschaden Dach", desc: "Schnelle Hilfe bei Wasserschäden" },
                    { title: "Dach undicht", desc: "Leckortung & Abdichtung" },
                    { title: "Dachsanierung", desc: "Komplettsanierung mit Garantie" },
                    { title: "Dachreparatur", desc: "Schnelle Reparaturen aller Art" }
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
                <p className="text-muted-foreground mb-2"><TextWithKeywordLinks currentPath="/dachdecker-trudering">{stadtteilData.referenzProjekt.beschreibung}</TextWithKeywordLinks></p>
                <p className="text-sm text-primary font-medium">Fertigstellung: {stadtteilData.referenzProjekt.jahr}</p>
              </div>

              {localContent && <LocalFAQSection content={localContent} stadtteil={stadtteilData.name} />}

              <GeoLinks 
                currentStadtteil={stadtteilData.name}
                nachbarStadtteile={stadtteilData.nachbarStadtteile}
              />
            </div>

            <div className="space-y-6">
              <div className="bg-primary text-white rounded-xl p-4 md:p-6">
                <h3 className="text-xl font-bold mb-4">Kostenlose Beratung in {stadtteilData.name}</h3>
                <p className="text-white/90 mb-6">Wir kommen zu Ihnen und beraten Sie unverbindlich vor Ort.</p>
                <a href="/beratung" className="block">
                  <Button size="lg" variant="secondary" className="w-full" data-testid="button-beratung-sidebar">
                    Rückruf anfordern <ArrowRight className="h-4 w-4 ml-2" />
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

              <TestimonialSection testimonials={testimonials} stadtteil={stadtteilData.name} />

              <div className="bg-gray-50 rounded-xl p-4 md:p-6">
                <h4 className="font-bold text-secondary mb-4">Warum 089Dach?</h4>
                <ul className="space-y-3">
                  {["Meisterbetrieb seit 1998", "Über 200 Projekte in München", "10 Jahre Garantie", "Familienfreundlich", "Termintreue"].map((item, idx) => (
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

      <CostEscalationBanner />
      <LeadFunnel 
        headline="Dachdecker in Trudering gesucht?"
        subheadline="Wir sind Ihr Partner in Trudering."
        description="Ihr Dachdecker für Trudering – Meisterbetrieb mit schneller Hilfe."
      />
      <DecisionPressureBanner />
      <Contact 
        title="Dachdecker in Trudering gesucht?"
        description="Wir sind Ihr lokaler Dachdecker-Meisterbetrieb in Trudering."
      />
      <Footer />
    </div>
  );
}
