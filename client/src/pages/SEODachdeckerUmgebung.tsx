import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, CheckCircle2, Star, Shield, Award, ArrowRight, Calendar, Euro } from "lucide-react";
import LeadFunnel from "@/components/LeadFunnel";
import ImageGallery from "@/components/ImageGallery";
import SEO, { BreadcrumbSchema } from "@/components/SEO";
import heroImage from "@assets/generated_images/realistic_renovated_roof_obermenzing_after.png";
import roofWork from "@assets/generated_images/roofer_working_on_red_tile_roof_munich.png";
import villaRoof from "@assets/generated_images/gruenwald_villa_restored_slate_after.png";
import haidhausenRoof from "@assets/generated_images/haidhausen_altbau_restored_roof_after.png";
import modernRoof from "@assets/generated_images/modern_house_with_anthracite_roof.png";

function ServiceAreaSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://089dach.de/dachdecker-muenchen-umgebung/#service",
    "name": "Dachdecker München und Umgebung",
    "description": "Dachdecker-Meisterbetrieb für München und das gesamte Umland bis 30km. Dachsanierung, Dachreparatur, Flachdach, Spenglerarbeiten.",
    "provider": {
      "@type": "RoofingContractor",
      "name": "089Dach GmbH",
      "telephone": "+49-89-12621964",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Thuillestr. 20",
        "addressLocality": "München",
        "postalCode": "81247",
        "addressCountry": "DE"
      }
    },
    "areaServed": [
      { "@type": "City", "name": "München" },
      { "@type": "City", "name": "Gräfelfing" },
      { "@type": "City", "name": "Germering" },
      { "@type": "City", "name": "Puchheim" },
      { "@type": "City", "name": "Gröbenzell" },
      { "@type": "City", "name": "Olching" },
      { "@type": "City", "name": "Dachau" },
      { "@type": "City", "name": "Fürstenfeldbruck" },
      { "@type": "City", "name": "Starnberg" },
      { "@type": "City", "name": "Unterschleißheim" },
      { "@type": "City", "name": "Freising" },
      { "@type": "City", "name": "Erding" },
      { "@type": "City", "name": "Ottobrunn" },
      { "@type": "City", "name": "Eching" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Dachdeckerleistungen",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dachsanierung", "description": "Ab 195€/m²" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Flachdach", "description": "Ab 110€/m²" } }
      ]
    }
  };
  return (<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />);
}

const umlandOrte = [
  { name: "Gräfelfing", url: "/dachdecker-graefelfing", km: "5 km", zeit: "10 Min" },
  { name: "Germering", url: "/dachdecker-germering", km: "12 km", zeit: "20 Min" },
  { name: "Puchheim", url: "/dachdecker-puchheim", km: "10 km", zeit: "15 Min" },
  { name: "Gröbenzell", url: "/dachdecker-groebenzell", km: "8 km", zeit: "15 Min" },
  { name: "Olching", url: "/dachdecker-olching", km: "15 km", zeit: "20 Min" },
  { name: "Eching", url: "/dachdecker-eching", km: "20 km", zeit: "25 Min" },
  { name: "Dachau", url: "/dachdecker-dachau", km: "18 km", zeit: "25 Min" },
  { name: "Unterschleißheim", url: "/dachdecker-unterschleissheim", km: "15 km", zeit: "20 Min" },
  { name: "Fürstenfeldbruck", url: "/dachdecker-fuerstenfeldbruck", km: "25 km", zeit: "30 Min" },
  { name: "Starnberg", url: "/dachdecker-starnberg", km: "28 km", zeit: "35 Min" },
  { name: "Freising", url: "/dachdecker-freising", km: "35 km", zeit: "40 Min" },
  { name: "Erding", url: "/dachdecker-erding", km: "38 km", zeit: "45 Min" },
  { name: "Ottobrunn", url: "/dachdecker-ottobrunn", km: "18 km", zeit: "25 Min" }
];

export default function SEODachdeckerUmgebung() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title="Dachdecker München und Umgebung | Meisterbetrieb bis 30km"
        description="Dachdecker für München und Umgebung ✓ Gräfelfing ✓ Germering ✓ Dachau ✓ Starnberg ✓ FFB. Meisterbetrieb mit 10 Jahren Garantie. Anfahrt kostenlos! ☎ 089 12621964"
        canonical="https://089dach.de/dachdecker-muenchen-umgebung"
        keywords="dachdecker münchen umgebung, dachdecker landkreis münchen, dachdecker fürstenfeldbruck, dachdecker dachau, dachdecker starnberg, dachdecker freising, dachdecker erding, dachdecker oberbayern, dachsanierung münchen umland, dachdecker in meiner nähe, dachdecker umkreis münchen, dachdecker 30 km münchen"
        geoPlacename="München und Umgebung, Bayern, Deutschland"
        aiSummary="089Dach GmbH bedient München und das gesamte Umland bis 30km: Gräfelfing, Germering, Puchheim, Gröbenzell, Olching, Dachau, Starnberg, Fürstenfeldbruck, Unterschleißheim, Freising, Erding, Ottobrunn. Meisterbetrieb mit 10 Jahren Garantie."
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Dachdecker München und Umgebung", url: "/dachdecker-muenchen-umgebung" }
      ]} />
      <ServiceAreaSchema />
      <Navbar />
      
      <section className="pt-6 pb-8 md:pt-10 md:pb-12 bg-secondary relative overflow-hidden min-h-[45vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Dachdecker München und Umgebung - Meisterbetrieb für die Region"
            className="w-full h-full object-cover"
            width={1792}
            height={1024}
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/60"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl text-white">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Servicegebiet bis 30km</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 md:mb-6">
              Dachdecker München und Umgebung
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-4 md:mb-6">
              Ihr <strong>Dachdecker-Meisterbetrieb</strong> für München und das gesamte Umland – von Gräfelfing bis Starnberg, von Dachau bis Erding. <strong>Anfahrt kostenlos</strong>, 10 Jahre Garantie.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <Star className="h-4 w-4" /> 4.9/5 Sterne
              </span>
              <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <MapPin className="h-4 w-4" /> Bis 30km Umkreis
              </span>
              <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <Euro className="h-4 w-4" /> Anfahrt kostenlos
              </span>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="/beratung">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8" data-testid="button-beratung-hero">
                  <Calendar className="h-5 w-5 mr-2" /> 24h Online Termin
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-primary py-3 md:py-4">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-white text-sm md:text-base">
            <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> 14 Städte im Umland</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> Kostenlose Anfahrt</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> Festpreisgarantie</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> 10 Jahre Garantie</span>
          </div>
        </div>
      </div>

      <section className="py-4 md:py-6 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-6">
              Dachdecker für <span className="text-primary">München und Umgebung</span>
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Sie suchen einen <strong>Dachdecker in München und Umgebung</strong>? Die 089Dach GmbH ist nicht nur in München, sondern auch im gesamten <strong>Münchner Umland bis 30 Kilometer</strong> für Sie da. Von unserem Standort in München-Obermenzing erreichen wir schnell alle Städte und Gemeinden der Region.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Ob <strong>Gräfelfing, Germering, Puchheim</strong> im Westen, <strong>Dachau, Unterschleißheim</strong> im Norden, <strong>Freising, Erding</strong> im Nordosten oder <strong>Starnberg, Fürstenfeldbruck</strong> – wir kommen zu Ihnen. Die <strong>Anfahrt ist kostenlos</strong>, und Sie erhalten wie alle unsere Kunden 10 Jahre Garantie und einen verbindlichen Festpreis.
              </p>

              <h3 className="text-xl font-heading font-bold text-secondary mt-8 mb-4">Warum Dachdecker aus München auch fürs Umland?</h3>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Erfahrung:</strong> 25+ Jahre Erfahrung mit allen Dachtypen in der Region</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Schnelle Anfahrt:</strong> Maximal 45 Minuten zu allen Orten im Umland</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Lokale Kenntnis:</strong> Wir kennen die Bauweisen und Anforderungen der Region</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Keine Aufpreise:</strong> Anfahrtskosten sind im Festpreis enthalten</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 md:py-6 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-8 text-center">
            Unser <span className="text-primary">Servicegebiet</span> im Münchner Umland
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {umlandOrte.map((ort, idx) => (
              <a 
                key={idx} 
                href={ort.url}
                className="bg-white rounded-xl p-5 shadow-sm border border-stone-200 hover:shadow-md hover:border-primary/30 transition-all flex justify-between items-center"
              >
                <div>
                  <h3 className="font-heading font-bold text-secondary">{ort.name}</h3>
                  <span className="text-muted-foreground text-sm">Entfernung: {ort.km}</span>
                </div>
                <div className="text-right">
                  <span className="text-primary font-semibold">{ort.zeit}</span>
                  <ArrowRight className="h-4 w-4 text-primary ml-2 inline" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-4 md:py-6 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto prose prose-lg text-muted-foreground">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-6">
              Dachdeckerleistungen im Münchner Umland
            </h2>
            
            <p>
              In allen Städten und Gemeinden rund um München bieten wir das <strong>komplette Spektrum an Dachdeckerleistungen</strong>: Dachsanierung, Dachreparatur, Flachdach-Abdichtung, Spenglerarbeiten, Dachfenster-Einbau und Gaubenbau. Besonders häufig werden wir gerufen für:
            </p>
            
            <h3 className="text-xl font-heading font-bold text-secondary mt-8 mb-4">Dachsanierung im Umland</h3>
            <p>
              Viele Einfamilienhäuser im <strong>Münchner Umland</strong> stammen aus den 1960er-1980er Jahren und benötigen eine energetische Sanierung. Wir modernisieren Ihr Dach mit neuer Dämmung, Eindeckung und ggf. Dachfenstern – alles aus einer Hand und mit <strong>KfW/BAFA-Förderberatung</strong>.
            </p>
            
            <h3 className="text-xl font-heading font-bold text-secondary mt-8 mb-4">Sturmschaden-Reparatur</h3>
            <p>
              Stürme treffen das <strong>Münchner Umland</strong> oft härter als die Innenstadt. Bei Sturmschäden sind wir schnell vor Ort – unser <strong>Notdienst ist 24/7</strong> erreichbar. Wir sichern Ihr Dach sofort und übernehmen die Kommunikation mit Ihrer Versicherung.
            </p>
            
            <h3 className="text-xl font-heading font-bold text-secondary mt-8 mb-4">Dacharbeiten für Neubauten</h3>
            <p>
              In wachsenden Gemeinden wie <strong>Gröbenzell, Puchheim, Olching</strong> oder <strong>Eching</strong> entstehen viele Neubauten. Wir arbeiten mit Bauträgern und Privatkunden zusammen und liefern termingerechte <strong>Dacheindeckung und Spenglerarbeiten</strong> für Ihren Neubau.
            </p>
          </div>
        </div>
      </section>

      <ImageGallery
        title="Referenzen aus München und Umgebung"
        images={[
          { src: roofWork, alt: "Dachdecker bei der Arbeit auf einem Ziegeldach", caption: "Dacharbeiten in Gräfelfing" },
          { src: villaRoof, alt: "Saniertes Schieferdach einer Villa", caption: "Villa-Sanierung in Grünwald" },
          { src: haidhausenRoof, alt: "Altbau-Dach nach der Sanierung", caption: "Altbau-Sanierung in Haidhausen" },
          { src: modernRoof, alt: "Modernes Haus mit anthrazitfarbenem Dach", caption: "Neubau in Unterschleißheim" }
        ]}
        columns={2}
      />

      <LeadFunnel />

      <section className="py-4 md:py-6 bg-primary">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
            Dachdecker für Ihr Zuhause im Münchner Umland
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Egal wo Sie im Umland von München wohnen – wir kommen zu Ihnen. 
            Kostenlose Beratung, Festpreisangebot, 10 Jahre Garantie.
          </p>
          <a href="/beratung">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
              <Calendar className="h-5 w-5 mr-2" /> 24h Online Termin
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
