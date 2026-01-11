import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, CheckCircle2, Star, Shield, Award, ArrowRight, Wrench, Home, Building2, Users, Calendar, Euro, FileCheck, Hammer } from "lucide-react";
import LeadFunnel from "@/components/LeadFunnel";
import { CostEscalationBanner, DecisionPressureBanner } from "@/components/UrgencyBanner";
import ImageGallery from "@/components/ImageGallery";
import SEO, { BreadcrumbSchema } from "@/components/SEO";
import BackButton from "@/components/BackButton";
import heroImage from "@assets/generated_images/realistic_villa_slate_roof_after.png";
import roofBefore from "@assets/generated_images/realistic_damaged_roof_obermenzing_before.png";
import roofAfter from "@assets/generated_images/realistic_renovated_roof_obermenzing_after.png";
import tileRoof from "@assets/generated_images/historic_biberschwanz_roof_with_patina.png";
import flatRoof from "@assets/generated_images/flat_green_roof_with_natural_variations.png";

function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": "https://089dach.de/#organization",
    "name": "089Dach GmbH",
    "alternateName": "Dachdecker München",
    "description": "Dachdecker-Meisterbetrieb in München. Dachsanierung, Dachreparatur, Flachdach, Steildach, Spenglerarbeiten, Dachfenster, Gaubenbau. 25+ Jahre Erfahrung, 10 Jahre Garantie.",
    "url": "https://089dach.de",
    "logo": "https://089dach.de/logo.png",
    "image": "https://089dach.de/dachdecker-muenchen.jpg",
    "telephone": "+49-89-12621964",
    "email": "info@089dach.de",
    "foundingDate": "1998",
    "priceRange": "€€",
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Thuillestr. 20",
      "addressLocality": "München",
      "addressRegion": "Bayern",
      "postalCode": "81247",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.1661,
      "longitude": 11.4728
    },
    "areaServed": [
      { "@type": "City", "name": "München", "sameAs": "https://de.wikipedia.org/wiki/M%C3%BCnchen" },
      { "@type": "State", "name": "Bayern" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Dachdeckerleistungen München",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dachsanierung", "description": "Komplettsanierung inkl. Dämmung ab 195€/m²" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dachreparatur", "description": "Schnelle Reparatur bei Sturmschäden und Undichtigkeiten" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Flachdach", "description": "Abdichtung und Sanierung ab 110€/m²" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Spenglerarbeiten", "description": "Dachrinnen, Fallrohre, Blechverkleidungen" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dachfenster", "description": "VELUX & Roto Einbau ab 1.560€" } }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "62",
      "bestRating": "5"
    },
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "07:00", "closes": "18:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "08:00", "closes": "14:00" }
    ],
    "sameAs": [
      "https://www.facebook.com/089dach",
      "https://www.instagram.com/089dach"
    ]
  };
  return (<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />);
}

function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Was kostet ein Dachdecker in München?",
        "acceptedAnswer": { "@type": "Answer", "text": "Bei 089Dach GmbH beginnt eine Dachsanierung ab 195€/m², Flachdach ab 110€/m², Dachfenster-Einbau ab 1.560€. Wir bieten kostenlose Vor-Ort-Beratung und Festpreisgarantie." }
      },
      {
        "@type": "Question",
        "name": "Wie finde ich einen guten Dachdecker in München?",
        "acceptedAnswer": { "@type": "Answer", "text": "Achten Sie auf: Meisterbetrieb, Innungsmitgliedschaft, Bewertungen (wir haben 4.9/5 Sterne), Festpreisgarantie, 10 Jahre Gewährleistung. 089Dach GmbH erfüllt alle Kriterien." }
      },
      {
        "@type": "Question",
        "name": "Gibt es einen Dachdecker-Notdienst in München?",
        "acceptedAnswer": { "@type": "Answer", "text": "Ja, 089Dach GmbH bietet 24/7 Notdienst für Sturmschäden und Wasserschäden in ganz München. Notruf: 089 12621964." }
      },
      {
        "@type": "Question",
        "name": "Wie lange dauert eine Dachsanierung in München?",
        "acceptedAnswer": { "@type": "Answer", "text": "Je nach Dachgröße und Umfang dauert eine Komplettsanierung 1-3 Wochen. Wir erstellen vorab einen verbindlichen Zeitplan." }
      },
      {
        "@type": "Question",
        "name": "Welche Förderungen gibt es für Dachsanierung in München?",
        "acceptedAnswer": { "@type": "Answer", "text": "KfW und BAFA fördern energetische Dachsanierungen mit bis zu 20%. Wir beraten Sie kostenlos zu allen Fördermöglichkeiten." }
      }
    ]
  };
  return (<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />);
}

const stadtteile = [
  { name: "Obermenzing", url: "/dachdecker-obermenzing", entfernung: "0 km" },
  { name: "Pasing", url: "/dachdecker-pasing", entfernung: "2 km" },
  { name: "Laim", url: "/dachdecker-laim", entfernung: "3 km" },
  { name: "Nymphenburg", url: "/dachdecker-nymphenburg", entfernung: "3 km" },
  { name: "Neuhausen", url: "/dachdecker-neuhausen", entfernung: "4 km" },
  { name: "Moosach", url: "/dachdecker-moosach", entfernung: "4 km" },
  { name: "Allach", url: "/dachdecker-allach", entfernung: "3 km" },
  { name: "Schwabing", url: "/dachdecker-schwabing", entfernung: "8 km" },
  { name: "Sendling", url: "/dachdecker-sendling", entfernung: "7 km" },
  { name: "Bogenhausen", url: "/dachdecker-bogenhausen", entfernung: "10 km" },
  { name: "Haidhausen", url: "/dachdecker-haidhausen", entfernung: "9 km" },
  { name: "Giesing", url: "/dachdecker-giesing", entfernung: "9 km" }
];

const leistungen = [
  { icon: Home, title: "Dachsanierung", desc: "Komplettsanierung inkl. Dämmung nach GEG", preis: "ab 195€/m²" },
  { icon: Wrench, title: "Dachreparatur", desc: "Schnelle Hilfe bei Sturmschäden & Undichtigkeiten", preis: "ab 89€" },
  { icon: Building2, title: "Flachdach", desc: "Abdichtung, Sanierung, Dachbegrünung", preis: "ab 110€/m²" },
  { icon: Hammer, title: "Spenglerarbeiten", desc: "Dachrinnen, Fallrohre, Blechverkleidungen", preis: "ab 45€/lfm" },
  { icon: FileCheck, title: "Dachfenster", desc: "VELUX & Roto Einbau und Austausch", preis: "ab 1.560€" },
  { icon: Award, title: "Gaubenbau", desc: "Mehr Wohnraum durch Dachgauben", preis: "ab 15.600€" }
];

export default function SEODachdeckerMuenchen() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title="Dachdecker München | Meisterbetrieb 10 Jahre Garantie"
        description="Dachdecker München gesucht? 089Dach GmbH: Meisterbetrieb seit 1998 ✓ 4.9/5 Sterne ✓ 10 Jahre Garantie ✓ Festpreisgarantie. Jetzt kostenlos beraten ☎ 089 12621964"
        canonical="https://089dach.de/dachdecker-muenchen"
        keywords="dachdecker münchen, dachdecker münchen empfehlung, bester dachdecker münchen, dachdecker meisterbetrieb münchen, dachdeckerfirma münchen, dachdecker obermenzing, dachdecker pasing, dachdecker laim, dachdecker schwabing, dachdecker sendling, dachsanierung münchen, dachreparatur münchen, flachdach münchen, spengler münchen, dachfenster münchen, dachgaube münchen, dachdecker notdienst münchen, sturmschaden dach münchen, dachdecker bewertung münchen"
        geoPlacename="München, Bayern, Deutschland"
        aiSummary="089Dach GmbH – Dachdecker-Meisterbetrieb in München-Obermenzing seit 1998. Dachsanierung, Dachreparatur, Flachdach, Spenglerarbeiten, Dachfenster, Dachgauben. 4.9/5 Sterne (62 Bewertungen). 10 Jahre Garantie. Festpreisgarantie. Tel: 089 12621964."
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Dachdecker München", url: "/dachdecker-muenchen" }
      ]} />
      <LocalBusinessSchema />
      <FAQSchema />
      <Navbar />
      
      <main id="main-content" role="main" tabIndex={-1}>
      <section className="pt-6 pb-8 md:pt-10 md:pb-12 bg-secondary relative overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Dachdecker München - Professionelle Dachsanierung vom Meisterbetrieb"
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
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Meisterbetrieb seit 1998 in München</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-heading font-bold text-white mb-4 md:mb-6">
              Dachdecker München
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-4xl mb-4 md:mb-6">
              Ihr <strong>Dachdecker München</strong> – <strong>Meisterbetrieb</strong> in Obermenzing. <strong>Dachsanierung</strong>, <strong>Dachreparatur</strong>, Flachdach, Spenglerarbeiten – mit 10 Jahren Garantie und Festpreisversprechen.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <Star className="h-4 w-4" /> 4.9/5 Sterne (62 Bewertungen)
              </span>
              <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <Shield className="h-4 w-4" /> 10 Jahre Garantie
              </span>
              <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <Euro className="h-4 w-4" /> Festpreisgarantie
              </span>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="/beratung">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8" data-testid="button-beratung-hero">
                  <Calendar className="h-5 w-5 mr-2" /> 24h Online Termin
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

      <div className="bg-primary py-3 md:py-4">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-white text-sm md:text-base">
            <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> Kostenlose Beratung</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> 24h Antwortgarantie</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> Notdienst 24/7</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> KfW/BAFA Förderberatung</span>
          </div>
        </div>
      </div>

      <BackButton />

      <section className="py-4 md:py-6 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-secondary mb-6 text-center">
              Ihr zuverlässiger <span className="text-primary">Dachdecker in München</span>
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Sie suchen einen <strong>Dachdecker in München</strong>, dem Sie vertrauen können? Die <strong>089Dach GmbH</strong> ist Ihr <strong>Dachdecker-Meisterbetrieb</strong> in <strong>München-Obermenzing</strong> – seit 1998 für <strong>Qualität</strong>, <strong>Zuverlässigkeit</strong> und faire Preise bekannt. Mit über <strong>25 Jahren Erfahrung</strong> und mehr als 500 erfolgreich abgeschlossenen <strong>Dachprojekten</strong> gehören wir zu den führenden <strong>Dachdeckerbetrieben</strong> in München und <strong>Umgebung</strong>.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Als <strong>familiengeführter Meisterbetrieb</strong> legen wir besonderen Wert auf <strong>handwerkliche Qualität</strong> und <strong>persönlichen Service</strong>. Unser Team aus erfahrenen <strong>Dachdeckern</strong> und <strong>Spenglern</strong> arbeitet nach höchsten <strong>Standards</strong> – mit <strong>10 Jahren Garantie</strong> auf alle ausgeführten <strong>Dacharbeiten</strong> und einer transparenten <strong>Festpreisgarantie</strong> ohne versteckte Kosten.
              </p>

              <h3 className="text-xl font-heading font-bold text-secondary mt-8 mb-4">Warum 089Dach als Ihr Dachdecker in München?</h3>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Meisterbetrieb:</strong> Qualifizierter Dachdecker- und Spenglermeister Falko Georg Blöckinger</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Innungsmitglied:</strong> Mitglied der Dachdecker-Innung München</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Beste Bewertungen:</strong> 4.9 von 5 Sternen bei 62 Google-Bewertungen</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Festpreisgarantie:</strong> Verbindliches Angebot ohne Nachträge</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>10 Jahre Garantie:</strong> Auf Material und Ausführung</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Notdienst 24/7:</strong> Schnelle Hilfe bei Sturmschäden</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 md:py-6 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-8 text-center">
            Unsere <span className="text-primary">Dachdeckerleistungen</span> in München
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leistungen.map((leistung, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
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
          
          <div className="text-center mt-8">
            <a href="/leistungen">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Alle Leistungen ansehen <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-4 md:py-6 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-6">
              Dachdecker München: Was kostet es?
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
              <p>
                Eine der häufigsten Fragen ist: <strong>Was kostet ein Dachdecker in München?</strong> Die <strong>Preise</strong> variieren je nach <strong>Dachgröße</strong>, <strong>Zustand</strong> und gewünschten Arbeiten. Bei 089Dach erhalten Sie immer ein <strong>transparentes Festpreisangebot</strong> nach kostenloser <strong>Vor-Ort-Besichtigung</strong>. Wir beraten Sie auch zur <strong>KfW-Förderung</strong> und <strong>BAFA-Zuschüssen</strong>.
              </p>
            </div>

            <div className="bg-stone-50 rounded-xl p-6 md:p-8 mb-8">
              <h3 className="text-xl font-heading font-bold text-secondary mb-4">Preisübersicht Dachdecker München 2025</h3>
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
                      <td className="py-3 pr-4">Dachsanierung komplett (inkl. Dämmung)</td>
                      <td className="py-3 font-semibold text-primary">195€/m²</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="py-3 pr-4">Flachdach-Sanierung</td>
                      <td className="py-3 font-semibold text-primary">110€/m²</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="py-3 pr-4">Dachfenster VELUX Einbau</td>
                      <td className="py-3 font-semibold text-primary">1.560€</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="py-3 pr-4">Dachgaube komplett</td>
                      <td className="py-3 font-semibold text-primary">15.600€</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="py-3 pr-4">Dachbeschichtung</td>
                      <td className="py-3 font-semibold text-primary">35€/m²</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="py-3 pr-4">Dachrinnenreinigung</td>
                      <td className="py-3 font-semibold text-primary">85€</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="py-3 pr-4">Notdienst-Anfahrt</td>
                      <td className="py-3 font-semibold text-primary">89€</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Dachinspektion & Beratung</td>
                      <td className="py-3 font-semibold text-green-600">Kostenlos</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                * Alle Preise inkl. MwSt. Endpreise nach kostenloser Vor-Ort-Besichtigung. Förderungen (KfW/BAFA) können die Kosten um bis zu 20% reduzieren.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 md:py-6 bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">
            Dachdecker in <span className="text-primary">allen Münchner Stadtteilen</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {stadtteile.map((stadtteil, idx) => (
              <a 
                key={idx} 
                href={stadtteil.url}
                className="bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-colors flex justify-between items-center"
              >
                <span className="font-medium">{stadtteil.name}</span>
                <span className="text-primary text-sm">{stadtteil.entfernung}</span>
              </a>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a href="/stadtteile">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Alle 35 Stadtteile <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-4 md:py-6 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-6">
              Häufige Fragen zum <span className="text-primary">Dachdecker München</span>
            </h2>
            
            <div className="space-y-6">
              <div className="bg-stone-50 rounded-xl p-6">
                <h3 className="font-heading font-bold text-secondary mb-2">Was kostet ein Dachdecker in München?</h3>
                <p className="text-muted-foreground">Bei 089Dach GmbH beginnt eine Dachsanierung ab 195€/m², Flachdach ab 110€/m², Dachfenster-Einbau ab 1.560€. Wir bieten kostenlose Vor-Ort-Beratung und Festpreisgarantie ohne versteckte Kosten.</p>
              </div>
              
              <div className="bg-stone-50 rounded-xl p-6">
                <h3 className="font-heading font-bold text-secondary mb-2">Wie finde ich einen guten Dachdecker in München?</h3>
                <p className="text-muted-foreground">Achten Sie auf: Meisterbetrieb, Innungsmitgliedschaft, Bewertungen (wir haben 4.9/5 Sterne), Festpreisgarantie und mindestens 10 Jahre Gewährleistung. 089Dach GmbH erfüllt alle diese Kriterien.</p>
              </div>
              
              <div className="bg-stone-50 rounded-xl p-6">
                <h3 className="font-heading font-bold text-secondary mb-2">Gibt es einen Dachdecker-Notdienst in München?</h3>
                <p className="text-muted-foreground">Ja, 089Dach GmbH bietet 24/7 Notdienst für Sturmschäden und Wasserschäden in ganz München. Rufen Sie uns an: 089 12621964 – wir sind schnell vor Ort.</p>
              </div>
              
              <div className="bg-stone-50 rounded-xl p-6">
                <h3 className="font-heading font-bold text-secondary mb-2">Wie lange dauert eine Dachsanierung in München?</h3>
                <p className="text-muted-foreground">Je nach Dachgröße und Umfang dauert eine Komplettsanierung 1-3 Wochen. Wir erstellen vorab einen verbindlichen Zeitplan und halten diesen ein. Sie können in den meisten Fällen im Haus wohnen bleiben.</p>
              </div>
              
              <div className="bg-stone-50 rounded-xl p-6">
                <h3 className="font-heading font-bold text-secondary mb-2">Welche Förderungen gibt es für Dachsanierung in München?</h3>
                <p className="text-muted-foreground">KfW und BAFA fördern energetische Dachsanierungen mit bis zu 20%. Wir beraten Sie kostenlos zu allen Fördermöglichkeiten und unterstützen bei der Antragsstellung.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 md:py-6 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto prose prose-lg text-muted-foreground">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-6">
              Dachdecker München: Ihr Experte für alle Dacharbeiten
            </h2>
            
            <p>
              München stellt besondere Anforderungen an <strong>Dachdeckerarbeiten</strong>: Von den denkmalgeschützten Altbauten in Schwabing und der Maxvorstadt über die Villen in Bogenhausen und Harlaching bis zu den Einfamilienhäusern in den Außenbezirken – jedes Dach braucht einen erfahrenen <strong>Dachdecker in München</strong>, der die lokalen Gegebenheiten kennt.
            </p>
            
            <h3 className="text-xl font-heading font-bold text-secondary mt-8 mb-4">Dachsanierung München: Wann ist sie nötig?</h3>
            
            <p>
              Eine <strong>Dachsanierung in München</strong> ist fällig, wenn Ihr Dach älter als 40-50 Jahre ist, Ziegel beschädigt sind, sich Feuchtigkeit zeigt oder die Energiekosten steigen. Wir prüfen Ihr Dach kostenlos und erstellen ein transparentes Angebot für die <strong>energetische Dachsanierung</strong> – inklusive Beratung zu KfW- und BAFA-Förderungen.
            </p>
            
            <h3 className="text-xl font-heading font-bold text-secondary mt-8 mb-4">Flachdach München: Abdichtung und Sanierung</h3>
            
            <p>
              <strong>Flachdächer in München</strong> sind besonders beansprucht: Starkregen, Hagel und UV-Strahlung setzen der Abdichtung zu. Wir sanieren Ihr Flachdach mit modernen Materialien (Bitumen, EPDM, PVC) und bieten auch <strong>Dachbegrünung in München</strong> an – für bessere Dämmung und ein grünes Stadtbild.
            </p>
            
            <h3 className="text-xl font-heading font-bold text-secondary mt-8 mb-4">Dachreparatur München: Schnelle Hilfe bei Schäden</h3>
            
            <p>
              Sturmschäden, undichte Stellen oder beschädigte Ziegel? Unser <strong>Dachdecker-Notdienst in München</strong> ist 24/7 erreichbar. Wir kommen schnell zu Ihnen – in Obermenzing, Pasing, Laim und allen anderen Münchner Stadtteilen. Für akute Schäden rufen Sie uns direkt an: <strong>089 12621964</strong>.
            </p>
            
            <h3 className="text-xl font-heading font-bold text-secondary mt-8 mb-4">Spenglerarbeiten München: Dachrinnen und mehr</h3>
            
            <p>
              Als <strong>Spengler-Meisterbetrieb in München</strong> fertigen und montieren wir Dachrinnen, Fallrohre, Kamineinfassungen und Blechverkleidungen aus Kupfer, Zink und Aluminium. Hochwertige <strong>Spenglerarbeiten</strong> schützen Ihr Dach und Ihre Fassade vor Wasserschäden.
            </p>
          </div>
        </div>
      </section>

      <ImageGallery
        title="Unsere Dachprojekte in München"
        images={[
          { src: roofBefore, alt: "Beschädigtes Dach vor der Sanierung in Obermenzing", caption: "Vorher: Altes Dach mit Wasserschäden" },
          { src: roofAfter, alt: "Saniertes Dach in Obermenzing nach der Renovierung", caption: "Nachher: Neues Ziegeldach mit Dämmung" },
          { src: tileRoof, alt: "Historisches Biberschwanz-Dach in München", caption: "Traditionelle Dacheindeckung in Schwabing" },
          { src: flatRoof, alt: "Grünes Flachdach in München", caption: "Dachbegrünung in der Maxvorstadt" }
        ]}
        columns={2}
      />

      <CostEscalationBanner />
      <LeadFunnel 
        headline="Dachdecker München – Ihr Meisterbetrieb"
        subheadline="Wir sind Ihr Partner."
        description="Ihr Dachdecker in München seit 1998 – Erfahrung, Qualität und faire Preise."
      />
      <DecisionPressureBanner />

      <section className="py-4 md:py-6 bg-primary">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
            Jetzt kostenlosen Beratungstermin vereinbaren
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-4xl mx-auto">
            Lassen Sie sich unverbindlich von unserem Dachdeckermeister beraten – kostenlos und vor Ort. 
            Wir erstellen Ihnen ein Festpreisangebot für Ihr Dachprojekt in München.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/beratung">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8" data-testid="button-beratung-cta">
                <Calendar className="h-5 w-5 mr-2" /> 24h Online Termin
              </Button>
            </a>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
}
