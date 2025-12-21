import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, CheckCircle2, AlertTriangle, Shield, Calendar, Zap, CloudRain, Wind } from "lucide-react";
import LeadFunnel from "@/components/LeadFunnel";
import ImageGallery from "@/components/ImageGallery";
import SEO, { BreadcrumbSchema } from "@/components/SEO";
import BackButton from "@/components/BackButton";
import heroImage from "@assets/generated_images/realistic_restored_historic_roof_after.png";
import stormDamage from "@assets/generated_images/damaged_red_tile_roof_before.png";
import repairedRoof from "@assets/generated_images/completed_roof_showcase_reference.png";
import flatDamage from "@assets/generated_images/realistic_damaged_flat_roof_before.png";
import flatRepaired from "@assets/generated_images/realistic_garage_epdm_roof_after.png";

function EmergencyServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EmergencyService",
    "@id": "https://089dach.de/dachdecker-notdienst-muenchen/#service",
    "name": "Dachdecker Notdienst München 24/7",
    "description": "24 Stunden Dachdecker-Notdienst in München. Schnelle Hilfe bei Sturmschäden, Wasserschäden und Dachlecks. Notruf: 089 12621964",
    "serviceType": "Dach-Notdienst",
    "provider": {
      "@type": "RoofingContractor",
      "name": "089Dach GmbH",
      "telephone": "+49-89-12621964"
    },
    "areaServed": { "@type": "City", "name": "München" },
    "availableChannel": {
      "@type": "ServiceChannel",
      "servicePhone": "+49-89-12621964",
      "availableLanguage": "German"
    },
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "offers": {
      "@type": "Offer",
      "name": "Notdienst-Anfahrt",
      "price": "89",
      "priceCurrency": "EUR"
    }
  };
  return (<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />);
}

const notfaelle = [
  { icon: Wind, title: "Sturmschaden", desc: "Abgedeckte Ziegel, lose Bleche, beschädigte Dachrinnen nach Sturm" },
  { icon: CloudRain, title: "Wasserschaden", desc: "Undichtes Dach, Wasser dringt ein, feuchte Decken und Wände" },
  { icon: AlertTriangle, title: "Dachziegel defekt", desc: "Gebrochene oder verrutschte Ziegel, offene Stellen im Dach" },
  { icon: Zap, title: "Blitzschaden", desc: "Beschädigungen durch Blitzeinschlag am Dach oder Schornstein" }
];

export default function SEODachdeckerNotdienst() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title="Dachdecker Notdienst München 24/7 | Sturmschaden ☎ 089 12621964"
        description="Dachdecker Notdienst München 24 Stunden ✓ Sturmschaden ✓ Wasserschaden ✓ Schnelle Hilfe. Notruf: 089 12621964. Anfahrt 89€, sofortige Absicherung."
        canonical="https://089dach.de/dachdecker-notdienst-muenchen"
        keywords="dachdecker notdienst münchen, dachdecker 24 stunden münchen, dach notfall münchen, sturmschaden dach münchen, dach undicht notdienst, dachdecker notfall, dach reparatur sofort, dachdecker wochenende münchen, dachdecker sofort münchen, dach wasserschaden"
        geoPlacename="München, Bayern, Deutschland"
        aiSummary="089Dach GmbH bietet 24/7 Dachdecker-Notdienst in München. Schnelle Hilfe bei Sturmschäden und Wasserschäden. Anfahrt 89€. Notruf: 089 12621964."
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Dachdecker Notdienst München", url: "/dachdecker-notdienst-muenchen" }
      ]} />
      <EmergencyServiceSchema />
      <Navbar />
      
      <section className="pt-6 pb-8 md:pt-10 md:pb-12 bg-red-900 relative overflow-hidden min-h-[45vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Dachdecker Notdienst München - 24/7 Soforthilfe bei Sturmschäden"
            className="w-full h-full object-cover"
            width={1792}
            height={1024}
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/95 via-red-900/80 to-red-900/60"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
          <div className="max-w-6xl text-white">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <AlertTriangle className="h-5 w-5 text-yellow-400 animate-pulse" />
              <span className="text-yellow-400 font-bold tracking-wider uppercase text-sm">24/7 Notdienst</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 md:mb-6">
              Dachdecker Notdienst München
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-4xl mb-4 md:mb-6">
              <strong>Sturmschaden? Wasserschaden? Dach undicht?</strong><br />
              Wir sind rund um die Uhr für Sie da – auch nachts, am Wochenende und an Feiertagen.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <Clock className="h-4 w-4" /> 24/7 erreichbar
              </span>
              <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <Zap className="h-4 w-4" /> Schnell vor Ort
              </span>
              <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <Shield className="h-4 w-4" /> Versicherungsabwicklung
              </span>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+498912621964">
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black text-lg px-8 font-bold" data-testid="button-notfall-anrufen">
                  <Phone className="h-5 w-5 mr-2" /> 089 12621964
                </Button>
              </a>
              <a href="/beratung">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-900">
                  <Calendar className="h-5 w-5 mr-2" /> Termin vereinbaren
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-yellow-400 py-3 md:py-4">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-black text-sm md:text-base font-medium">
            <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> Anfahrt: 89€</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> Sofortige Absicherung</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> Versicherung wird übernommen</span>
          </div>
        </div>
      </div>

      <BackButton />

      <section className="py-4 md:py-6 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-4">
              Wann brauchen Sie unseren <span className="text-primary">Dach-Notdienst</span>?
            </h2>
            <p className="text-lg text-muted-foreground">
              Bei diesen Notfällen sind wir schnell für Sie da – 24 Stunden am Tag, 7 Tage die Woche.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {notfaelle.map((notfall, idx) => (
              <div key={idx} className="bg-stone-50 rounded-xl p-6 border border-stone-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <notfall.icon className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="font-heading font-bold text-secondary text-lg">{notfall.title}</h3>
                </div>
                <p className="text-muted-foreground">{notfall.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-4 md:py-6 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-8 text-center">
              So funktioniert unser <span className="text-primary">Notdienst</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="font-heading font-bold text-secondary mb-2">Anrufen</h3>
                <p className="text-muted-foreground">Rufen Sie uns an unter <strong>089 12621964</strong>. Wir sind 24/7 erreichbar.</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="font-heading font-bold text-secondary mb-2">Schnelle Anfahrt</h3>
                <p className="text-muted-foreground">Wir sind in der Regel <strong>innerhalb von 60 Minuten</strong> bei Ihnen in München.</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="font-heading font-bold text-secondary mb-2">Sofort-Absicherung</h3>
                <p className="text-muted-foreground">Wir sichern Ihr Dach sofort ab und <strong>verhindern weitere Schäden</strong>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 md:py-6 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto prose prose-lg text-muted-foreground">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-6">
              Sturmschaden am Dach: Was tun?
            </h2>
            
            <h3 className="text-xl font-heading font-bold text-secondary mt-8 mb-4">Erste Schritte bei Sturmschaden</h3>
            <ol className="space-y-2">
              <li><strong>Sicherheit zuerst:</strong> Betreten Sie das Dach nicht selbst!</li>
              <li><strong>Dokumentieren:</strong> Fotografieren Sie die Schäden von unten oder aus dem Fenster</li>
              <li><strong>Notdienst rufen:</strong> 089 12621964 – wir sind 24/7 erreichbar</li>
              <li><strong>Versicherung informieren:</strong> Melden Sie den Schaden Ihrer Gebäudeversicherung</li>
            </ol>
            
            <h3 className="text-xl font-heading font-bold text-secondary mt-8 mb-4">Kosten bei Sturmschäden</h3>
            <p>
              Die <strong>Gebäudeversicherung</strong> übernimmt in der Regel die Kosten für Sturmschäden ab Windstärke 8. Wir helfen Ihnen bei der Dokumentation und Kommunikation mit der Versicherung.
            </p>
            <ul>
              <li><strong>Notdienst-Anfahrt:</strong> 89€</li>
              <li><strong>Sofort-Absicherung:</strong> Nach Aufwand, meist 150-350€</li>
              <li><strong>Dauerhafte Reparatur:</strong> Individuelles Angebot nach Schadensaufnahme</li>
            </ul>

            <h3 className="text-xl font-heading font-bold text-secondary mt-8 mb-4">Unsere Notdienst-Garantie</h3>
            <ul>
              <li><strong>Schnelle Reaktion:</strong> In der Regel innerhalb von 60 Minuten vor Ort</li>
              <li><strong>Professionelle Absicherung:</strong> Keine provisorischen Lösungen</li>
              <li><strong>Transparente Kosten:</strong> Sie wissen vorher, was es kostet</li>
              <li><strong>Versicherungsabwicklung:</strong> Wir unterstützen bei der Dokumentation</li>
            </ul>
          </div>
        </div>
      </section>

      <ImageGallery
        title="Notfall-Reparaturen vorher/nachher"
        images={[
          { src: stormDamage, alt: "Sturmschaden am Ziegeldach", caption: "Vorher: Sturmschaden an Steildach" },
          { src: repairedRoof, alt: "Repariertes Dach nach Notdienst-Einsatz", caption: "Nachher: Fachgerechte Reparatur" },
          { src: flatDamage, alt: "Undichtes Flachdach mit Wasserschaden", caption: "Vorher: Undichtes Flachdach" },
          { src: flatRepaired, alt: "Saniertes EPDM-Flachdach", caption: "Nachher: Neue EPDM-Abdichtung" }
        ]}
        columns={2}
      />

      <section className="py-4 md:py-6 bg-red-900 text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 text-center">
          <AlertTriangle className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Dach-Notfall? Jetzt anrufen!
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-4xl mx-auto">
            Unser Notdienst-Team ist rund um die Uhr für Sie da. 
            Wir sichern Ihr Dach schnell und professionell ab.
          </p>
          <a href="tel:+498912621964">
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black text-xl px-10 py-6 font-bold">
              <Phone className="h-6 w-6 mr-3" /> 089 12621964
            </Button>
          </a>
          <p className="text-white/70 mt-4 text-sm">24 Stunden • 7 Tage • Auch an Feiertagen</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
