import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, CheckCircle2, Star, Shield, Award, ArrowRight } from "lucide-react";
import LeadFunnel from "@/components/LeadFunnel";
import SEO, { BreadcrumbSchema } from "@/components/SEO";

const stadtteilData = {
  name: "Gräfelfing",
  fullName: "Gräfelfing",
  plz: "82166",
  entfernung: "5 km",
  beschreibung: "Gräfelfing ist eine wohlhabende Gemeinde westlich von München mit vielen Einfamilienhäusern und Villen. Die gehobene Wohnlage erfordert hochwertige Dacharbeiten mit erstklassigen Materialien.",
  besonderheiten: [
    "Exklusive Villen und Einfamilienhäuser",
    "Hohe Anforderungen an Ästhetik und Qualität",
    "Viele großflächige Steildächer"
  ],
  typischeProjekte: [
    "Premium-Dachsanierung Villa",
    "Kupferdachrinnen und Verkleidungen",
    "Schiefereindeckung",
    "Dachfenster mit Sonnenschutz"
  ],
  nachbarStadtteile: ["Planegg", "Obermenzing", "Pasing", "Krailling"],
  referenzProjekt: {
    titel: "Villendach Gräfelfing",
    beschreibung: "Komplettsanierung eines 350 m² Steildachs mit Naturschiefer und Kupferdachrinnen. Integration einer Photovoltaikanlage.",
    jahr: "2024"
  }
};

function NearbyServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://089dach.de/dachdecker-${stadtteilData.name.toLowerCase()}/#service`,
    "name": `Dachdecker ${stadtteilData.fullName}`,
    "description": `Premium-Dacharbeiten in ${stadtteilData.fullName}. Spezialist für Villen und Einfamilienhäuser.`,
    "provider": { "@type": "RoofingContractor", "name": "089Dach GmbH", "telephone": "+49-89-12621964" },
    "areaServed": { "@type": "Place", "name": stadtteilData.fullName },
    "serviceType": ["Dachsanierung", "Schiefereindeckung", "Kupferarbeiten", "Premium-Dächer"]
  };
  return (<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />);
}

export default function StadtteilGraefelfing() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title={`Dachdecker ${stadtteilData.fullName} | Premium Dachsanierung - 089Dach`}
        description={`Ihr Dachdecker in ${stadtteilData.fullName} ✓ Nur ${stadtteilData.entfernung} entfernt ✓ Premium-Dachsanierung für Villen ✓ Meisterbetrieb ✓ 10 Jahre Garantie. Tel: 089 12621964`}
        canonical={`https://089dach.de/dachdecker-${stadtteilData.name.toLowerCase()}`}
        keywords={`dachdecker ${stadtteilData.name.toLowerCase()}, dachsanierung ${stadtteilData.name.toLowerCase()}, dachdecker landkreis münchen, schieferdach ${stadtteilData.name.toLowerCase()}, kupferdach ${stadtteilData.name.toLowerCase()}, villa dach sanierung`}
        geoPlacename={`${stadtteilData.fullName}, Bayern, Deutschland`}
        aiSummary={`089Dach GmbH ist Ihr Dachdecker für ${stadtteilData.fullName}. Premium-Dachsanierung für Villen. Nur ${stadtteilData.entfernung} entfernt. Tel: 089 12621964.`}
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: `Dachdecker ${stadtteilData.name}`, url: `/dachdecker-${stadtteilData.name.toLowerCase()}` }]} />
      <NearbyServiceSchema />
      <Navbar />
      
      <section className="pt-10 pb-12 bg-secondary relative overflow-hidden min-h-[35vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/80"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl text-white">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Nur {stadtteilData.entfernung} entfernt</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Dachdecker {stadtteilData.fullName}</h1>
            <p className="text-xl text-gray-200 max-w-xl mb-6">Premium-Dacharbeiten für anspruchsvolle Villen und Einfamilienhäuser.</p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:08912621964"><Button size="lg" className="bg-primary hover:bg-primary/90 text-white" data-testid="button-anrufen-hero"><Phone className="h-5 w-5 mr-2" /> 089 12621964</Button></a>
              <a href="https://wa.me/498912621964" target="_blank" rel="noopener noreferrer"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary" data-testid="button-whatsapp-hero">WhatsApp Anfrage</Button></a>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-stone-100 py-3 border-b border-stone-200">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" />PLZ: {stadtteilData.plz}</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" />Anfahrt: ~10 Min</span>
            <span className="flex items-center gap-2"><Star className="h-4 w-4 text-primary" />4.9/5 Sterne</span>
            <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-primary" />10 Jahre Garantie</span>
          </div>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold text-secondary mb-4">Ihr Dachdecker für {stadtteilData.name}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">{stadtteilData.beschreibung}</p>
              </div>

              <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                <h3 className="text-xl font-heading font-bold text-secondary mb-4 flex items-center gap-2"><Award className="h-6 w-6 text-primary" />Besonderheiten in {stadtteilData.name}</h3>
                <ul className="space-y-3">
                  {stadtteilData.besonderheiten.map((item, idx) => (<li key={idx} className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold text-secondary mb-4">Unsere Leistungen in {stadtteilData.name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[{ title: "Schiefereindeckung", desc: "Naturschiefer für Villen" }, { title: "Kupferarbeiten", desc: "Dachrinnen und Verkleidungen" }, { title: "Dachsanierung", desc: "Premium-Qualität" }, { title: "Steildach", desc: "Tondachziegel und Schiefer" }, { title: "Dachfenster", desc: "Mit Sonnenschutz" }, { title: "Photovoltaik", desc: "Integration ins Dach" }].map((service, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm"><h4 className="font-bold text-secondary">{service.title}</h4><p className="text-sm text-muted-foreground">{service.desc}</p></div>
                  ))}
                </div>
              </div>

              <div className="bg-secondary/5 rounded-xl p-6">
                <h3 className="text-xl font-heading font-bold text-secondary mb-2">Referenzprojekt: {stadtteilData.referenzProjekt.titel}</h3>
                <p className="text-muted-foreground mb-2">{stadtteilData.referenzProjekt.beschreibung}</p>
                <p className="text-sm text-primary font-medium">Fertigstellung: {stadtteilData.referenzProjekt.jahr}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-primary text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Kostenlose Beratung</h3>
                <a href="/rueckruf" className="block"><Button size="lg" variant="secondary" className="w-full" data-testid="button-beratung-sidebar">Rückruf anfordern <ArrowRight className="h-4 w-4 ml-2" /></Button></a>
                <a href="tel:08912621964" className="block mt-3"><Button size="lg" variant="outline" className="w-full border-white text-white hover:bg-white hover:text-primary" data-testid="button-anrufen-sidebar"><Phone className="h-4 w-4 mr-2" /> Jetzt anrufen</Button></a>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h4 className="font-bold text-secondary mb-4">Auch in der Nähe:</h4>
                <ul className="space-y-2">{stadtteilData.nachbarStadtteile.map((s, i) => (<li key={i}><a href={`/dachdecker-${s.toLowerCase()}`} className="text-primary hover:underline flex items-center gap-2"><MapPin className="h-4 w-4" />Dachdecker {s}</a></li>))}</ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadFunnel />
      <Contact />
      <Footer />
    </div>
  );
}
