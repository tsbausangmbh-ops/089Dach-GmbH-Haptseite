import Navbar from "@/components/Navbar";
import AIBeraterSection from "@/components/AIBeraterSection";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Phone, Clock, CheckCircle2, Shield, AlertTriangle, Zap, ArrowRight, MessageCircle } from "lucide-react";
import LeadFunnel from "@/components/LeadFunnel";
import SEO, { BreadcrumbSchema, FAQPageSchema, LocalBusinessSchema } from "@/components/SEO";
import BackButton from "@/components/BackButton";
import ImageGallery from "@/components/ImageGallery";
import AIEnhancedFAQ from "@/components/AIEnhancedFAQ";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import CTACluster from "@/components/CTACluster";
import ProofStack from "@/components/ProofStack";
import ProcessSteps from "@/components/ProcessSteps";
import notdienstImg1 from "@assets/generated_images/damaged_red_tile_roof_before.webp";
import notdienstImg2 from "@assets/generated_images/completed_roof_showcase_reference.webp";
import notdienstImg3 from "@assets/generated_images/realistic_damaged_flat_roof_before.webp";
import notdienstImg4 from "@assets/generated_images/realistic_garage_epdm_roof_after.webp";
import { ServiceGeoLinks } from "@/components/GeoLinks";
import { TextWithKeywordLinks } from "@/components/KeywordLink";
import { CostEscalationBanner, DecisionPressureBanner } from "@/components/UrgencyBanner";

function EmergencyServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://089dach.de/leistungen/notdienst/#service",
    "name": "Dachdecker Notdienst München 24h",
    "description": "24 Stunden Dachdecker Notdienst in München. Schnelle Hilfe bei Sturmschaden, Wasserschaden und Dachnotfällen.",
    "provider": {
      "@type": "RoofingContractor",
      "name": "089Dach GmbH",
      "telephone": "+49-89-12621964",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Thuillestraße 20",
        "addressLocality": "München",
        "postalCode": "81247",
        "addressCountry": "DE"
      }
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 48.1351, "longitude": 11.5820 },
      "geoRadius": "30000"
    },
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "serviceType": ["Dach-Notdienst", "Sturmschaden-Reparatur", "Notsicherung", "Wasserschaden-Behebung"]
  };
  return (<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />);
}

export default function Notdienst() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title="Dach Notdienst München 24/7 – Soforthilfe & Reparatur"
        description="24/7 Dach-Notdienst München: Wir sichern Ihr Dach nach Sturm, führen Notsanierungen durch & helfen bei der Versicherung. Soforthilfe – jetzt anrufen!"
        canonical="https://089dach.de/leistungen/notdienst"
        keywords="Dach Notdienst München, Dachreparatur Notdienst München, Sturmschaden Dach München, Dach undicht Notfall München, 24h Dachdecker München, Wasserschaden Dach München"
        geoPlacename="München, Bayern, Deutschland"
        aiSummary="089Dach GmbH bietet 24/7 Dachdecker-Notdienst in München und Umgebung. Schnelle Hilfe bei Sturmschäden, Wasserschäden und Dachnotfällen. Tel: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Leistungen", url: "/leistungen" }, { name: "Notdienst", url: "/leistungen/notdienst" }]} />
      <FAQPageSchema faqs={[
        { question: "Ist der Dachnotdienst wirklich 24 Stunden erreichbar?", answer: "Ja, wir sind 24/7 erreichbar - auch an Wochenenden und Feiertagen. Rufen Sie uns an: 089 12621964." },
        { question: "Was kostet der Notdienst außerhalb der Geschäftszeiten?", answer: "Es gibt einen Notdienstzuschlag von ca. 50€. Die eigentliche Reparatur wird zum normalen Preis abgerechnet. Keine versteckten Kosten." },
        { question: "Wie schnell sind Sie bei einem Dachnotfall vor Ort?", answer: "In München und direkter Umgebung in der Regel innerhalb von 1-2 Stunden. Bei extremen Wetterlagen kann es länger dauern." },
        { question: "Was kostet eine Notabdichtung bei Sturmschaden in München?", answer: "Anfahrt Notdienst ab 89€, Notsicherung mit Plane ab 150€, sofortige Notabdichtung ab 195€. Bei Sturmschäden zahlt meist die Gebäudeversicherung. Wir dokumentieren alles für Ihren Versicherungsantrag." },
        { question: "Wer zahlt bei Sturmschaden am Dach?", answer: "Die Wohngebäudeversicherung zahlt bei Sturmschäden ab Windstärke 8. Wir erstellen eine detaillierte Schadensdokumentation mit Fotos und Kostenvoranschlag für Ihre Versicherung - kostenlos." },
        { question: "Kann ich bei Dachschaden im Haus bleiben?", answer: "Meist ja. Wir sichern das Dach sofort mit Planen oder Notabdichtung ab. Nur bei Einsturzgefahr oder massivem Wassereintritt raten wir vorübergehend zum Auszug. Ihre Sicherheit hat oberste Priorität." }
      ]} />
      <EmergencyServiceSchema />
      <LocalBusinessSchema />
      <Navbar />
      <main id="main-content" role="main" tabIndex={-1}>
      <AIBeraterSection 
        pageName="Dach-Notdienst"
        description="Sturmschaden oder Wassereinbruch? Unser KI-Berater erklärt, was Sie tun können bis wir kommen."
      />
      
      <section className="pt-6 pb-8 md:pt-10 md:pb-12 bg-red-700 relative overflow-hidden min-h-[40vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-red-800 via-red-700 to-red-600"></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
          <div className="max-w-7xl text-white">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <AlertTriangle className="h-6 w-6 text-yellow-400 animate-pulse" />
              <span className="text-yellow-400 font-bold tracking-wider uppercase text-sm">24/7 Notdienst</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 md:mb-6">
              Dachdecker Notdienst München
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-xl mb-4 md:mb-6">
              Sturmschaden? Wasserschaden? Wir sind rund um die Uhr für Sie da – 
              schnelle Hilfe bei allen Dachnotfällen in München und Umgebung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/rueckruf/">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold" data-testid="button-notdienst-call">
                  <Phone className="h-5 w-5 mr-2" /> Sofort Rückruf anfordern
                </Button>
              </a>
              <a href="/kontakt/">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-700 font-bold" data-testid="button-contact-hero">
                  Kontakt aufnehmen
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-yellow-400 py-3 md:py-4">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base font-bold text-black">
            <span className="flex items-center gap-2"><Clock className="h-5 w-5" />24/7 erreichbar</span>
            <span className="flex items-center gap-2"><Zap className="h-5 w-5" />Schnelle Anfahrt</span>
            <span className="flex items-center gap-2"><Shield className="h-5 w-5" />Sofortige Notsicherung</span>
          </div>
        </div>
      </div>

      <BackButton />

      <section className="py-3 md:py-4">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-6 text-center">
              <strong>Dachdecker</strong> Notdienst <strong>München</strong> 24h: Wann Sie uns sofort anrufen sollten
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  icon: "🌪️",
                  title: "Sturmschaden am Dach",
                  desc: "Abgedeckte Ziegel, lose Dachteile oder Sturmschäden nach Unwetter – wir sichern Ihr Dach sofort.",
                  urgent: true
                },
                {
                  icon: "💧",
                  title: "Wasser kommt durchs Dach",
                  desc: "Undichte Stellen, Wasserflecken an der Decke oder Wasser im Dachboden – schnelle Abdichtung.",
                  urgent: true
                },
                {
                  icon: "🌳",
                  title: "Baum auf dem Dach",
                  desc: "Nach Sturm oder Unwetter: Wir entfernen Bäume und Äste und reparieren die Schäden.",
                  urgent: true
                },
                {
                  icon: "❄️",
                  title: "Hagel- und Schneeschäden",
                  desc: "Beschädigte Ziegel durch Hagel oder Schneebruch – professionelle Schadensbehebung.",
                  urgent: false
                },
                {
                  icon: "🔥",
                  title: "Brandschaden am Dach",
                  desc: "Nach Bränden: Notsicherung und Wiederaufbau des beschädigten Dachbereichs.",
                  urgent: true
                },
                {
                  icon: "🏚️",
                  title: "Einsturzgefahr",
                  desc: "Bei statischen Problemen oder durchhängenden Dachbereichen – sofortige Sicherung.",
                  urgent: true
                }
              ].map((item, idx) => (
                <div key={idx} className={`p-6 rounded-xl border-2 ${item.urgent ? 'border-red-200 bg-red-50' : 'border-gray-200 bg-white'}`}>
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-bold text-secondary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>

            <ProcessSteps 
              title="Dach-Notdienst: Schnelle Hilfe bei Dachschäden"
              subtitle="24/7 erreichbar – schnelle Anfahrt, sofortige Sicherung, faire Preise."
            />

            <div className="bg-stone-100 p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-bold text-secondary mb-6"><strong>Dachdecker</strong> Notdienst Kosten <strong>München</strong>: Transparente Preise ohne Überraschungen</h3>
              <p className="text-muted-foreground mb-6">
                Transparente Preise auch im Notfall. Keine versteckten Kosten – Sie wissen vorher, was es kostet.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-stone-200">
                  <span className="font-medium">Anfahrt Notdienst (München)</span>
                  <span className="font-bold text-primary">ab 89 €</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-stone-200">
                  <span className="font-medium">Notsicherung / Abdichtung</span>
                  <span className="font-bold text-primary">ab 195 €</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-stone-200">
                  <span className="font-medium">Sturmschaden-Reparatur</span>
                  <span className="font-bold text-primary">ab 300 €</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium">Notfall-Abdeckung (Plane)</span>
                  <span className="font-bold text-primary">ab 150 €</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                * Bei Sturmschäden übernimmt oft die Gebäudeversicherung die Kosten. 
                Wir dokumentieren den Schaden für Ihre Versicherung.
              </p>
            </div>

            <div className="bg-primary/5 p-8 rounded-xl border border-primary/20">
              <h3 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Sturmschaden Versicherung München: Professionelle Dokumentation für Ihren Versicherungsfall
              </h3>
              <ul className="space-y-3 mb-6">
                {[
                  "Professionelle Schadensdokumentation mit Fotos",
                  "Direkte Abrechnung mit vielen Versicherungen möglich",
                  "Unterstützung bei der Schadensregulierung",
                  "Kostenvoranschlag für Ihre Versicherung"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold text-secondary mb-4">Dach Notfall München: Jetzt 24/7 Notdienst anfordern – schnelle Hilfe garantiert</h3>
              <p className="text-muted-foreground mb-6">
                Rufen Sie uns an oder fordern Sie einen sofortigen Rückruf an – wir sind rund um die Uhr für Sie da.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/rueckruf/">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold" data-testid="button-notdienst-cta">
                    <Phone className="h-5 w-5 mr-2" /> Sofort Rückruf anfordern
                  </Button>
                </a>
                <a href="/kontakt/">
                  <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold" data-testid="button-contact-cta">
                    Kontakt aufnehmen
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImageGallery 
        title="Notdienst-Einsätze"
        columns={2}
        images={[
          { src: notdienstImg1, alt: "Sturmschaden an Ziegeldach München", caption: "Sturmschaden: Beschädigtes Dach" },
          { src: notdienstImg2, alt: "Fertig repariertes Dach nach Notdienst", caption: "Nachher: Vollständig repariert" },
          { src: notdienstImg3, alt: "Undichtes Flachdach vor Notreparatur", caption: "Wasserschaden: Flachdach undicht" },
          { src: notdienstImg4, alt: "Saniertes Dach nach Notdienst-Einsatz", caption: "Nachher: Dauerhaft abgedichtet" }
        ]}
      />

      <ProblemSolutionSection
        sectionTitle="Dach-Notfall? So helfen wir!"
        problemTitle="Typische Notfall-Situationen"
        solutionTitle="Unsere Sofort-Hilfe"
        problems={[
          { symptom: "Sturm hat Ziegel abgedeckt", risk: "Regen dringt ein und schädigt Dämmung, Dachstuhl und Innenräume" },
          { symptom: "Wasser tropft durch die Decke", risk: "Jede Minute Verzögerung vergrößert den Wasserschaden" },
          { symptom: "Baum oder Ast auf dem Dach", risk: "Gefahr weiterer Beschädigung und Einsturzgefahr" },
          { symptom: "Dachfenster eingeschlagen", risk: "Offene Stelle lässt Regen und Kälte ungehindert eindringen" }
        ]}
        solutions={[
          { title: "24/7 erreichbar", description: "Auch nachts, am Wochenende und an Feiertagen" },
          { title: "Schnelle Anfahrt", description: "In München meist innerhalb von 1-2 Stunden vor Ort" },
          { title: "Sofortige Notsicherung", description: "Plane, Notabdichtung oder provisorische Reparatur" },
          { title: "Versicherungsdoku", description: "Professionelle Schadensfotos für Ihre Versicherung" }
        ]}
        urgencyMessage="Bei Dach-Notfällen zählt jede Minute – rufen Sie jetzt an: 089 12621964!"
      />

      <CTACluster 
        variant="emergency" 
        title="Dach-Notfall? Sofort Hilfe!" 
        subtitle="24/7 erreichbar · Schnelle Anfahrt · Notsicherung sofort"
      />

      <AIEnhancedFAQ
        title="Häufige Fragen zum Dach-Notdienst"
        faqs={[
          {
            question: "Ist der Dachnotdienst wirklich 24 Stunden erreichbar?",
            shortAnswer: "Ja, wir sind 24/7 erreichbar – auch Wochenende und Feiertage.",
            details: "Ja, wir sind 24/7 erreichbar - auch an Wochenenden und Feiertagen. Unser Notdienst-Team ist speziell für Nacht- und Wochenendeinsätze ausgestattet. Rufen Sie einfach an: 089 12621964.",
            localReference: "Unser Einsatzgebiet umfasst ganz München und 30km Umkreis.",
            nextStep: "Jetzt Notdienst anrufen: 089 12621964 →"
          },
          {
            question: "Was kostet der Notdienst außerhalb der Geschäftszeiten?",
            shortAnswer: "Notdienstzuschlag ca. 50€, Reparatur zum normalen Preis.",
            details: "Es gibt einen Notdienstzuschlag von ca. 50€ für Einsätze außerhalb der Geschäftszeiten. Die eigentliche Reparatur wird zum normalen Preis abgerechnet. Keine versteckten Kosten – Sie wissen vorher, was es kostet.",
            priceRange: "Anfahrt ab 89€ + Reparatur",
            localReference: "In München sind wir meist innerhalb von 1-2 Stunden bei Ihnen.",
            nextStep: "Sofort Rückruf anfordern →"
          },
          {
            question: "Was kostet eine Notabdichtung bei Sturmschaden in München?",
            shortAnswer: "Anfahrt ab 89€, Notsicherung ab 150€, Notabdichtung ab 195€.",
            details: "Anfahrt Notdienst ab 89€, Notsicherung mit Plane ab 150€, sofortige Notabdichtung ab 195€. Bei Sturmschäden zahlt meist die Gebäudeversicherung. Wir dokumentieren alles für Ihren Versicherungsantrag – kostenlos.",
            priceRange: "Komplett ab 195€",
            localReference: "Wir arbeiten mit allen großen Versicherungen in München zusammen.",
            nextStep: "Notdienst anfordern →"
          },
          {
            question: "Wer zahlt bei Sturmschaden am Dach?",
            shortAnswer: "Die Wohngebäudeversicherung zahlt bei Sturm ab Windstärke 8.",
            details: "Die Wohngebäudeversicherung zahlt bei Sturmschäden ab Windstärke 8. Wir erstellen eine detaillierte Schadensdokumentation mit Fotos und Kostenvoranschlag für Ihre Versicherung – kostenlos. Direkte Abrechnung mit vielen Versicherungen möglich.",
            localReference: "Bei Sturmschäden in München unterstützen wir Sie bei der gesamten Schadensabwicklung.",
            nextStep: "Versicherungsfall melden →"
          }
        ]}
      />

      <ProofStack title="Warum 089Dach im Notfall?" />

      <ServiceGeoLinks currentService="Notdienst" />
      <CostEscalationBanner />
      <LeadFunnel 
        headline="Dach-Notfall?"
        subheadline="Wir sind in 1-2 Stunden vor Ort."
        description="Bei Sturmschäden, Wassereintritt oder akuten Problemen: Rufen Sie uns an."
      />
      <DecisionPressureBanner />
      <Contact 
        title="Dach-Notfall? Wir sind sofort für Sie da!"
        description="Bei Wasserschaden, Sturmschaden oder undichtem Dach: Rufen Sie uns jetzt an oder senden Sie Ihre Anfrage – wir melden uns schnellstmöglich."
      />
      </main>
      <Footer />
    </div>
  );
}
