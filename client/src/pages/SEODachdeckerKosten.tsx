import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, CheckCircle2, Star, Shield, Calendar, Euro, Calculator, TrendingUp, Percent, FileText } from "lucide-react";
import LeadFunnel from "@/components/LeadFunnel";
import ImageGallery from "@/components/ImageGallery";
import SEO, { BreadcrumbSchema } from "@/components/SEO";
import BackButton from "@/components/BackButton";
import heroImage from "@assets/generated_images/modern_house_with_anthracite_roof.png";
import damageBefore from "@assets/generated_images/realistic_damaged_roof_obermenzing_before.png";
import repairedAfter from "@assets/generated_images/obermenzing_house_new_roof_after.png";
import flatRoof from "@assets/generated_images/new_epdm_flat_roof_garage.png";
import solarRoof from "@assets/generated_images/new_solar_panel_installation.png";

function PriceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Dachdeckerarbeiten München",
    "description": "Professionelle Dachdeckerarbeiten in München: Dachsanierung, Dachreparatur, Flachdach, Spenglerarbeiten",
    "brand": { "@type": "Brand", "name": "089Dach GmbH" },
    "offers": [
      { "@type": "Offer", "name": "Dachsanierung komplett", "price": "195", "priceCurrency": "EUR", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "195", "unitCode": "MTK" } },
      { "@type": "Offer", "name": "Flachdach-Sanierung", "price": "110", "priceCurrency": "EUR", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "110", "unitCode": "MTK" } },
      { "@type": "Offer", "name": "Dachfenster Einbau", "price": "1560", "priceCurrency": "EUR" },
      { "@type": "Offer", "name": "Dachgaube komplett", "price": "15600", "priceCurrency": "EUR" }
    ],
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "127" }
  };
  return (<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />);
}

const preise = [
  { leistung: "Dachsanierung komplett (inkl. Dämmung)", preis: "195€/m²", info: "Neue Ziegel, Dämmung, Unterspannbahn" },
  { leistung: "Dachsanierung ohne Dämmung", preis: "140€/m²", info: "Neue Eindeckung auf bestehender Lattung" },
  { leistung: "Flachdach-Sanierung", preis: "110€/m²", info: "Bitumen oder EPDM Abdichtung" },
  { leistung: "Dachdämmung Aufsparren", preis: "85€/m²", info: "Optimale Dämmwirkung, mehr Platz" },
  { leistung: "Dachdämmung Zwischensparren", preis: "45€/m²", info: "Günstigste Variante" },
  { leistung: "Dachfenster VELUX Einbau", preis: "1.560€", info: "Inkl. Fenster, Einbau, Anschluss" },
  { leistung: "Dachfenster Austausch", preis: "890€", info: "Bestehendes Fenster ersetzen" },
  { leistung: "Dachgaube Schleppgaube", preis: "15.600€", info: "Komplett inkl. Genehmigung" },
  { leistung: "Dachgaube Spitzgaube", preis: "18.500€", info: "Aufwendigere Konstruktion" },
  { leistung: "Dachrinne Zink", preis: "45€/lfm", info: "Inkl. Halter und Montage" },
  { leistung: "Dachrinne Kupfer", preis: "85€/lfm", info: "Premium-Material, 80+ Jahre" },
  { leistung: "Dachreparatur klein", preis: "89€", info: "Einzelne Ziegel, kleine Undichtigkeiten" },
  { leistung: "Sturmschaden Notdienst", preis: "89€ + Arbeit", info: "Anfahrt + Stundensatz" },
  { leistung: "Dachinspektion", preis: "Kostenlos", info: "Vor-Ort-Beratung unverbindlich" }
];

export default function SEODachdeckerKosten() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title="Was kostet ein Dachdecker in München? Preise 2025 | 089Dach"
        description="Dachdecker München Kosten 2025: Dachsanierung ab 195€/m², Flachdach ab 110€/m², Dachfenster ab 1.560€. ✓ Festpreisgarantie ✓ Kostenlose Beratung. ☎ 089 12621964"
        canonical="https://089dach.de/dachdecker-muenchen-kosten"
        keywords="dachdecker münchen kosten, was kostet dachdecker münchen, dachdecker preise münchen, dachsanierung kosten münchen, dachdecker stundenlohn münchen, dachdecker m2 preis, dachdeckerkosten, dachdecker preise 2025, dachsanierung preis pro m2, was kostet ein neues dach"
        geoPlacename="München, Bayern, Deutschland"
        aiSummary="Dachdecker-Kosten in München 2025 bei 089Dach GmbH: Dachsanierung ab 195€/m², Flachdach ab 110€/m², Dachfenster ab 1.560€, Dachgaube ab 15.600€. Festpreisgarantie, kostenlose Beratung. Tel: 089 12621964."
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Dachdecker München Kosten", url: "/dachdecker-muenchen-kosten" }
      ]} />
      <PriceSchema />
      <Navbar />
      
      <section className="pt-6 pb-8 md:pt-10 md:pb-12 bg-secondary relative overflow-hidden min-h-[45vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Dachdecker München Kosten - Transparente Preise vom Meisterbetrieb"
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
              <Euro className="h-5 w-5 text-primary" />
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Transparente Preise 2025</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 md:mb-6">
              Was kostet ein Dachdecker in München?
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-4xl mb-4 md:mb-6">
              <strong>Aktuelle Dachdecker-Preise 2025</strong> für München: Dachsanierung ab 195€/m², Flachdach ab 110€/m². Transparente Festpreise ohne versteckte Kosten.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <Euro className="h-4 w-4" /> Festpreisgarantie
              </span>
              <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <Calculator className="h-4 w-4" /> Kostenlose Beratung
              </span>
              <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <Percent className="h-4 w-4" /> KfW-Förderung
              </span>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="/beratung">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8" data-testid="button-beratung-hero">
                  <Calendar className="h-5 w-5 mr-2" /> Kostenloses Angebot
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-primary py-3 md:py-4">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-white text-sm md:text-base">
            <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> Keine versteckten Kosten</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> Verbindliches Angebot</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> Förderberatung inklusive</span>
          </div>
        </div>
      </div>

      <BackButton />

      <section className="py-4 md:py-6 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-8 text-center">
              Dachdecker-Preise München 2025 <span className="text-primary">auf einen Blick</span>
            </h2>

            <div className="bg-stone-50 rounded-xl p-4 md:p-8 mb-8 overflow-x-auto">
              <table className="w-full text-left min-w-[600px]">
                <thead>
                  <tr className="border-b-2 border-stone-300">
                    <th className="py-4 pr-4 font-heading font-bold text-secondary">Leistung</th>
                    <th className="py-4 pr-4 font-heading font-bold text-secondary">Preis ab</th>
                    <th className="py-4 font-heading font-bold text-secondary">Details</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {preise.map((item, idx) => (
                    <tr key={idx} className="border-b border-stone-100 hover:bg-white">
                      <td className="py-4 pr-4 font-medium">{item.leistung}</td>
                      <td className="py-4 pr-4 font-bold text-primary whitespace-nowrap">{item.preis}</td>
                      <td className="py-4 text-sm">{item.info}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-center text-muted-foreground">
              * Alle Preise inkl. MwSt., Material und Arbeitsleistung. Endpreise nach kostenloser Vor-Ort-Besichtigung. Stand: Dezember 2025.
            </p>
          </div>
        </div>
      </section>

      <section className="py-4 md:py-6 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto prose prose-lg text-muted-foreground">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-6">
              Was beeinflusst die Dachdecker-Kosten?
            </h2>
            
            <h3 className="text-xl font-heading font-bold text-secondary mt-8 mb-4">1. Dachgröße und Dachform</h3>
            <p>
              Die <strong>Quadratmeterzahl</strong> ist der wichtigste Kostenfaktor. Ein einfaches Satteldach ist günstiger als ein Walmdach mit vielen Kehlen und Graten. Gauben und Dachfenster erhöhen den Aufwand.
            </p>
            
            <h3 className="text-xl font-heading font-bold text-secondary mt-8 mb-4">2. Materialwahl</h3>
            <p>
              <strong>Betondachsteine</strong> (ab 25€/m²) sind günstiger als <strong>Tondachziegel</strong> (ab 35€/m²). <strong>Naturschiefer</strong> (ab 80€/m²) ist am teuersten, aber auch am langlebigsten.
            </p>
            
            <h3 className="text-xl font-heading font-bold text-secondary mt-8 mb-4">3. Dämmung</h3>
            <p>
              Eine <strong>energetische Dachsanierung</strong> mit Aufsparrendämmung kostet mehr, spart aber langfristig Heizkosten und wird mit bis zu 20% durch <strong>KfW und BAFA</strong> gefördert.
            </p>
            
            <h3 className="text-xl font-heading font-bold text-secondary mt-8 mb-4">4. Zustand des Dachstuhls</h3>
            <p>
              Müssen <strong>Sparren oder Balken</strong> erneuert werden, steigen die Kosten. Bei unserer kostenlosen Dachinspektion prüfen wir den Zustand genau.
            </p>
            
            <h3 className="text-xl font-heading font-bold text-secondary mt-8 mb-4">5. Gerüstkosten</h3>
            <p>
              <strong>Gerüstkosten</strong> (ca. 8-12€/m² Fassadenfläche) sind in unseren Festpreisen bereits enthalten – keine bösen Überraschungen.
            </p>
          </div>
        </div>
      </section>

      <section className="py-4 md:py-6 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-6">
              Rechenbeispiel: <span className="text-primary">Dachsanierung Einfamilienhaus</span>
            </h2>

            <div className="bg-primary/5 rounded-xl p-6 md:p-8 border border-primary/20">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-heading font-bold text-secondary mb-4">Beispiel: 120m² Steildach</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex justify-between">
                      <span>Dachsanierung komplett</span>
                      <span className="font-semibold">120m² × 195€</span>
                    </li>
                    <li className="flex justify-between border-t pt-2">
                      <span>Brutto-Kosten</span>
                      <span className="font-bold text-secondary">23.400€</span>
                    </li>
                    <li className="flex justify-between text-green-600">
                      <span>KfW-Förderung (15%)</span>
                      <span className="font-semibold">-3.510€</span>
                    </li>
                    <li className="flex justify-between border-t pt-2">
                      <span className="font-bold">Ihre Kosten</span>
                      <span className="font-bold text-primary text-xl">19.890€</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-secondary mb-4">Inklusive:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-primary" /> Gerüst komplett</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-primary" /> Abbruch Alteindeckung</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-primary" /> Neue Lattung</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-primary" /> Dämmung nach GEG</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-primary" /> Tondachziegel Qualität</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-primary" /> 10 Jahre Garantie</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 md:py-6 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-6">
              Förderungen für Dachsanierung 2025
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-stone-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-heading font-bold text-secondary">KfW-Förderung</h3>
                </div>
                <p className="text-muted-foreground mb-4">Bis zu <strong>15% Zuschuss</strong> für energetische Dachsanierung. Zusätzlich 5% bei iSFP.</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• U-Wert ≤ 0,14 W/m²K erforderlich</li>
                  <li>• Antrag vor Baubeginn</li>
                  <li>• Energieberater empfohlen</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border border-stone-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-heading font-bold text-secondary">BAFA-Förderung</h3>
                </div>
                <p className="text-muted-foreground mb-4">Bis zu <strong>20% Zuschuss</strong> für Einzelmaßnahmen mit iSFP-Bonus.</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Für bestehende Gebäude &gt;5 Jahre</li>
                  <li>• Mit Sanierungsfahrplan (iSFP)</li>
                  <li>• Wir beraten kostenlos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImageGallery
        title="Beispiele unserer Dacharbeiten"
        images={[
          { src: damageBefore, alt: "Beschädigtes Dach vor der Sanierung", caption: "Vorher: Undichtes Steildach" },
          { src: repairedAfter, alt: "Saniertes Dach nach der Renovierung", caption: "Nachher: Komplettsanierung" },
          { src: flatRoof, alt: "Neues EPDM-Flachdach auf Garage", caption: "Flachdach-Sanierung für 110€/m²" },
          { src: solarRoof, alt: "Dach mit Solaranlage", caption: "Energetische Modernisierung" }
        ]}
        columns={2}
      />

      <LeadFunnel 
        headline="Dachdecker-Kosten in München?"
        subheadline="Wir erstellen transparente Angebote."
        description="Faire Festpreise ohne versteckte Kosten – darauf können Sie sich verlassen."
      />

      <section className="py-4 md:py-6 bg-primary">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
            Jetzt kostenloses Angebot anfordern
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-4xl mx-auto">
            Wir besichtigen Ihr Dach kostenlos und erstellen ein verbindliches Festpreisangebot – 
            inklusive Förderberatung.
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
