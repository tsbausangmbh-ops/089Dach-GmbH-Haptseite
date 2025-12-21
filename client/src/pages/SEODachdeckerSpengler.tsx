import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, CheckCircle2, Star, Shield, Award, ArrowRight, Calendar, Euro, Wrench, Droplets, Home } from "lucide-react";
import LeadFunnel from "@/components/LeadFunnel";
import ImageGallery from "@/components/ImageGallery";
import SEO, { BreadcrumbSchema } from "@/components/SEO";
import BackButton from "@/components/BackButton";
import heroImage from "@assets/generated_images/realistic_house_anthracite_roof.png";
import copperChimney from "@assets/generated_images/bogenhausen_chimney_new_copper.png";
import metalRoof from "@assets/generated_images/new_metal_standing_seam_roof.png";
import copperGutter from "@assets/generated_images/copper_roof_gutter_detail.png";
import metalDetail from "@assets/generated_images/metal_standing_seam_roof_detail.png";

function CombinedServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": "https://089dach.de/dachdecker-spengler-muenchen/#organization",
    "name": "089Dach GmbH - Dachdecker & Spengler München",
    "description": "Dachdecker- und Spengler-Meisterbetrieb in München. Dacharbeiten und Spenglerarbeiten aus einer Hand: Dacheindeckung, Dachrinnen, Fallrohre, Blechverkleidungen, Kamineinfassungen.",
    "url": "https://089dach.de/dachdecker-spengler-muenchen",
    "telephone": "+49-89-12621964",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Thuillestr. 20",
      "addressLocality": "München",
      "postalCode": "81247",
      "addressCountry": "DE"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Dachdecker & Spengler Leistungen",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dachrinnen Kupfer", "description": "Montage ab 85€/lfm" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dachrinnen Zink", "description": "Montage ab 45€/lfm" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fallrohre", "description": "Montage ab 35€/lfm" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kamineinfassung", "description": "Ab 850€" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Stehfalzblech", "description": "Ab 95€/m²" } }
      ]
    }
  };
  return (<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />);
}

const spenglerLeistungen = [
  { icon: Droplets, title: "Dachrinnen", desc: "Kupfer, Zink, Aluminium – Montage, Reparatur, Reinigung", preis: "ab 45€/lfm" },
  { icon: Wrench, title: "Fallrohre", desc: "Ableitung des Regenwassers, Anschluss an Kanalisation", preis: "ab 35€/lfm" },
  { icon: Home, title: "Kamineinfassungen", desc: "Abdichtung und Verkleidung aus Blech", preis: "ab 850€" },
  { icon: Shield, title: "Mauerabdeckungen", desc: "Schutz vor Witterung für Mauerkronen", preis: "ab 55€/lfm" },
  { icon: Award, title: "Stehfalzdach", desc: "Metalldach aus Kupfer, Zink oder Aluminium", preis: "ab 95€/m²" },
  { icon: Wrench, title: "Blechverkleidungen", desc: "Gauben, Ortgänge, Traufen, Kehlen", preis: "nach Aufwand" }
];

export default function SEODachdeckerSpengler() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title="Dachdecker & Spengler München | Meisterbetrieb ✓ Alles aus einer Hand"
        description="Dachdecker und Spengler München ✓ Dachrinnen ✓ Fallrohre ✓ Blecharbeiten ✓ Kamineinfassungen. Meisterbetrieb mit eigener Spenglerei. ☎ 089 12621964"
        canonical="https://089dach.de/dachdecker-spengler-muenchen"
        keywords="dachdecker spengler münchen, spengler münchen, spenglerarbeiten münchen, dachrinnen münchen, fallrohre münchen, blechdach münchen, kupferdach münchen, zinkblech dach, kamineinfassung münchen, dachdecker und spengler, dachspengler münchen, blechner münchen"
        geoPlacename="München, Bayern, Deutschland"
        aiSummary="089Dach GmbH ist Dachdecker- und Spengler-Meisterbetrieb in München. Eigene Spenglerei für Dachrinnen, Fallrohre, Kamineinfassungen, Blechverkleidungen. Kupfer, Zink, Aluminium. Tel: 089 12621964."
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Dachdecker & Spengler München", url: "/dachdecker-spengler-muenchen" }
      ]} />
      <CombinedServiceSchema />
      <Navbar />
      
      <section className="pt-6 pb-8 md:pt-10 md:pb-12 bg-secondary relative overflow-hidden min-h-[45vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Dachdecker und Spengler München - Alles aus einer Hand"
            className="w-full h-full object-cover"
            width={1792}
            height={1024}
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/60"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
          <div className="max-w-6xl text-white">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <Wrench className="h-5 w-5 text-primary" />
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Eigene Spenglerei im Haus</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 md:mb-6">
              Dachdecker & Spengler München
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-4xl mb-4 md:mb-6">
              <strong>Spengler München</strong> und <strong>Dachdecker München</strong> aus einer Hand – von der <strong>Dacheindeckung</strong> bis zur <strong>Dachrinne</strong>. Unser Meisterbetrieb vereint beide Gewerke unter einem Dach.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <Award className="h-4 w-4" /> Spengler-Meister
              </span>
              <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <Award className="h-4 w-4" /> Dachdecker-Meister
              </span>
              <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <Shield className="h-4 w-4" /> 10 Jahre Garantie
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
            <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> Kupfer, Zink, Alu</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> Eigene Werkstatt</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> Maßanfertigung</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> Schnelle Lieferung</span>
          </div>
        </div>
      </div>

      <BackButton />

      <section className="py-4 md:py-6 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-6">
              Dachdecker und Spengler <span className="text-primary">unter einem Dach</span>
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Bei vielen Dachprojekten brauchen Sie sowohl einen <strong>Dachdecker als auch einen Spengler</strong>: Die Dacheindeckung erfordert Dachdecker-Know-how, die Dachrinnen und Blecharbeiten Spengler-Kompetenz. Bei 089Dach bekommen Sie <strong>beides aus einer Hand</strong> – ohne Koordinationsaufwand und mit klarer Verantwortung.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Unser Inhaber <strong>Falko Georg Blöckinger</strong> ist sowohl Dachdecker- als auch Spengler-Meister. In unserer eigenen Werkstatt fertigen wir <strong>Dachrinnen, Fallrohre, Kamineinfassungen und Blechverkleidungen</strong> maßgenau an – aus Kupfer, Zink oder Aluminium.
              </p>

              <h3 className="text-xl font-heading font-bold text-secondary mt-8 mb-4"><strong>Dachdecker & Spengler München</strong> – Vorteile aus einer Hand</h3>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Ein Ansprechpartner:</strong> Keine Abstimmung zwischen verschiedenen Firmen</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Perfekte Passform:</strong> Blech wird vor Ort exakt angepasst</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Schneller:</strong> Keine Wartezeiten auf den anderen Handwerker</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Günstiger:</strong> Keine doppelten Anfahrten und Gerüstkosten</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Eine Garantie:</strong> 10 Jahre auf alle Dach- und Spenglerarbeiten</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 md:py-6 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-8 text-center">
            Unsere <span className="text-primary">Spenglerleistungen</span> in München
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {spenglerLeistungen.map((leistung, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-stone-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <leistung.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-secondary">{leistung.title}</h3>
                    <span className="text-primary font-semibold text-sm">{leistung.preis}</span>
                  </div>
                </div>
                <p className="text-muted-foreground">{leistung.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-4 md:py-6 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-6">
              Preise Spenglerarbeiten München 2025
            </h2>

            <div className="bg-stone-50 rounded-xl p-6 md:p-8 mb-8">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-stone-200">
                      <th className="py-3 pr-4 font-heading font-bold text-secondary">Leistung</th>
                      <th className="py-3 font-heading font-bold text-secondary">Preis ab</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-stone-100">
                      <td className="py-3 pr-4">Dachrinne Zink (halbrund)</td>
                      <td className="py-3 font-semibold text-primary">45€/lfm</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="py-3 pr-4">Dachrinne Kupfer</td>
                      <td className="py-3 font-semibold text-primary">85€/lfm</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="py-3 pr-4">Fallrohr Zink</td>
                      <td className="py-3 font-semibold text-primary">35€/lfm</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="py-3 pr-4">Fallrohr Kupfer</td>
                      <td className="py-3 font-semibold text-primary">65€/lfm</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="py-3 pr-4">Kamineinfassung</td>
                      <td className="py-3 font-semibold text-primary">850€</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="py-3 pr-4">Mauerabdeckung</td>
                      <td className="py-3 font-semibold text-primary">55€/lfm</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="py-3 pr-4">Stehfalzdach Zink</td>
                      <td className="py-3 font-semibold text-primary">95€/m²</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Dachrinnenreinigung</td>
                      <td className="py-3 font-semibold text-primary">85€</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                * Alle Preise inkl. MwSt. und Material. Endpreis nach Aufmaß.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 md:py-6 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto prose prose-lg text-muted-foreground">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-6">
              Materialien für Spenglerarbeiten
            </h2>
            
            <h3 className="text-xl font-heading font-bold text-secondary mt-8 mb-4"><strong>Kupfer Dachrinne München</strong> – Der Klassiker</h3>
            <p>
              <strong>Kupfer-Dachrinnen und -verkleidungen</strong> sind die Königsklasse der Spenglerarbeit. Das Material entwickelt eine edle Patina, ist extrem langlebig (80-100 Jahre) und wertet jedes Gebäude optisch auf. Besonders beliebt bei historischen Villen und denkmalgeschützten Gebäuden in München.
            </p>
            
            <h3 className="text-xl font-heading font-bold text-secondary mt-8 mb-4"><strong>Titanzink Dachrinne</strong> – Preis-Leistungs-Sieger</h3>
            <p>
              <strong>Titanzink</strong> bietet hervorragende Eigenschaften zu moderatem Preis: Korrosionsbeständig, langlebig (50-70 Jahre), selbstheilend bei kleinen Kratzern. Die graue Patina passt zu modernen wie traditionellen Gebäuden.
            </p>
            
            <h3 className="text-xl font-heading font-bold text-secondary mt-8 mb-4"><strong>Aluminium Dachrinne</strong> – Leicht und vielseitig</h3>
            <p>
              <strong>Aluminium-Spenglerarbeiten</strong> sind leicht, rostfrei und in vielen Farben erhältlich. Ideal für moderne Gebäude und wenn Gewicht eine Rolle spielt. Lebensdauer: 40-50 Jahre.
            </p>
          </div>
        </div>
      </section>

      <ImageGallery
        title="Unsere Spenglerarbeiten in München"
        images={[
          { src: copperChimney, alt: "Neuer Kamin mit Kupfereinfassung", caption: "Kupfer-Kamineinfassung in Bogenhausen" },
          { src: metalRoof, alt: "Stehfalzdach aus Metall", caption: "Titanzink-Stehfalzdach" },
          { src: copperGutter, alt: "Kupfer-Dachrinne Detail", caption: "Handgefertigte Kupferrinne" },
          { src: metalDetail, alt: "Stehfalz-Detail", caption: "Präzise Falzarbeit" }
        ]}
        columns={2}
      />

      <LeadFunnel 
        headline="Dachdecker und Spengler München"
        subheadline="Alles aus einer Hand."
        description="Dachdecker und Spengler in einem Betrieb in München – alles aus einer Hand."
      />

      <section className="py-4 md:py-6 bg-primary">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
            Dachdecker & Spengler: Jetzt beraten lassen
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-4xl mx-auto">
            Ob Dachsanierung mit neuen Rinnen oder nur Spenglerarbeiten – 
            wir beraten Sie kostenlos und erstellen ein Festpreisangebot.
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
