import Navbar from "@/components/Navbar";
import AIBeraterSection from "@/components/AIBeraterSection";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Clock, Shield, Wrench, CloudRain, Wind, Check, Phone, Award, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, ProductServiceSchema, FAQPageSchema } from "@/components/SEO";
import BackButton from "@/components/BackButton";
import heroImage from '@assets/optimized/roofer_working.webp';
import { ServiceGeoLinks } from "@/components/GeoLinks";
import { TextWithKeywordLinks } from "@/components/KeywordLink";
import { CostEscalationBanner, DecisionPressureBanner } from "@/components/UrgencyBanner";

export default function Dachreparatur() {
  const reparaturArten = [
    { icon: CloudRain, title: "Wasserschaden reparieren", desc: "Undichte Stellen finden und abdichten - bevor größere Schäden entstehen", preis: "ab 150€" },
    { icon: Wind, title: "Sturmschaden beheben", desc: "Abgedeckte oder verschobene Ziegel wieder befestigen", preis: "ab 200€" },
    { icon: Wrench, title: "Einzelne Ziegel tauschen", desc: "Gebrochene oder gerissene Dachziegel ersetzen", preis: "ab 80€" },
    { icon: AlertTriangle, title: "First & Grat reparieren", desc: "Undichte Firsthauben und Gratziegel neu abdichten", preis: "ab 250€" }
  ];

  const ablauf = [
    { schritt: "1", titel: "Anruf oder Anfrage", text: "Sie schildern uns Ihr Problem - telefonisch oder per Formular" },
    { schritt: "2", titel: "Termin in 24-48h", text: "Wir kommen zur Begutachtung und erstellen einen Kostenvoranschlag" },
    { schritt: "3", titel: "Schnelle Reparatur", text: "Nach Ihrer Freigabe reparieren wir - meist am selben oder nächsten Tag" },
    { schritt: "4", titel: "Dokumentation", text: "Sie erhalten Fotos und Rechnung - für Ihre Versicherung falls nötig" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Dachreparatur München 2025 | Kosten ab 150€ | Meisterbetrieb"
        description="Dachreparatur München: ✓ Kosten ab 150€ ✓ 10 Jahre Garantie ✓ Kostenlose Beratung ✓ Festpreisangebot. ☎ 089 12621964"
        canonical="https://089dach.de/dachreparatur"
        keywords="dachreparatur münchen, dach reparieren münchen kosten, dachziegel austauschen münchen, sturmschaden reparatur münchen, dachreparatur festpreis münchen, dachreparatur meisterbetrieb münchen, first reparieren münchen, dachrinne reparieren münchen, wasserschaden dach münchen, dachreparatur einfamilienhaus münchen, schnelle dachreparatur münchen, dachdecker reparatur münchen, dachschaden beheben münchen, kleine dachreparatur münchen, dachreparatur versicherung münchen, dachreparatur notdienst münchen, undichtes dach reparieren münchen, was kostet dachreparatur münchen, dachreparatur münchen erfahrungen, wie lange dauert dachreparatur, dachreparatur selber machen oder profi, dachreparatur kosten pro qm, dachreparatur münchen günstig, dachreparatur preisvergleich, dachreparatur dringend münchen, dachreparatur schnell münchen, dachreparatur notfall, dachreparatur fachbetrieb münchen, dachreparatur handwerker münchen"
        geoPlacename="München, Bayern, Deutschland"
        aiSummary="089Dach GmbH – Dachreparatur-Service in München. Ab 80€ für einzelne Ziegel, ab 200€ für Sturmschäden. In 24-48h vor Ort. Festpreisgarantie. Versicherungshilfe inklusive. Meisterbetrieb seit 1998. Tel: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Leistungen", url: "/leistungen" }, { name: "Dachreparatur", url: "/dachreparatur" }]} />
      <ServiceSchema 
        pageName="Dachreparatur München"
        services={[
          { name: "Schnelle Dachreparatur", description: "Kleine und mittlere Reparaturen - in 24-48 Stunden vor Ort" },
          { name: "Ziegelreparatur", description: "Einzelne oder mehrere Dachziegel austauschen" },
          { name: "Sturmschaden-Service", description: "Notsicherung und Reparatur nach Sturm inkl. Versicherungsdoku" }
        ]}
      />
      <ProductServiceSchema 
        name="Dachreparatur München"
        description="Professionelle Dachreparatur vom Meisterbetrieb. Einzelne Ziegel ab 80€, Sturmschäden ab 200€."
        priceFrom={80}
        priceTo={500}
        category="Dachreparatur"
      />
      <FAQPageSchema faqs={[
        { question: "Was kostet eine Dachreparatur in München?", answer: "Kleine Reparaturen wie einzelne Ziegel tauschen kosten ab 80€. Sturmschäden ab 200€, Leckortung und Abdichtung ab 150€. Wir erstellen vorab einen Festpreis." },
        { question: "Wie schnell können Sie zur Dachreparatur kommen?", answer: "In der Regel sind wir innerhalb von 24-48 Stunden bei Ihnen. Bei Notfällen (Wassereintritt) versuchen wir, noch am selben Tag zu kommen." },
        { question: "Lohnt sich eine Reparatur oder sollte ich das ganze Dach sanieren?", answer: "Faustregel: Wenn weniger als 20% der Dachfläche betroffen ist und der Dachstuhl intakt, lohnt sich Reparatur. Wir beraten Sie ehrlich vor Ort." },
        { question: "Zahlt die Versicherung die Dachreparatur?", answer: "Bei Sturmschäden (ab Windstärke 8) und Hagelschäden zahlt in der Regel die Wohngebäudeversicherung. Wir dokumentieren den Schaden für Sie." },
        { question: "Kann ich einzelne Dachziegel selbst austauschen?", answer: "Bei niedrigen Dächern und Erfahrung möglich. Wir empfehlen aber den Fachmann - Unfallgefahr und oft ist die Ursache tiefer als nur der Ziegel." }
      ]} />
      <Navbar />
      <main id="main-content" role="main" tabIndex={-1}>
      <AIBeraterSection />
      
      <section className="relative py-20 text-white overflow-hidden min-h-[60vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
          <div className="max-w-5xl text-white">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <Wrench className="h-5 w-5 text-primary" />
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Dachreparatur München</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 md:mb-6">
              <strong>Dachreparatur München</strong> – schnell, fair & transparent
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-xl mb-4">
              Ein paar kaputte <strong>Dachziegel</strong>? Eine undichte Stelle? Nicht jedes Problem braucht gleich eine Komplettsanierung. 
              Wir bieten schnelle <strong>Dachreparatur München</strong> mit <strong>Festpreis</strong> – auch bei <strong>Sturmschäden</strong>.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <a href="/rueckruf/">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" data-testid="button-rueckruf-hero">
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
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" />In 24-48h vor Ort</span>
            <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-primary" />Festpreis-Garantie</span>
            <span className="flex items-center gap-2"><Award className="h-4 w-4 text-primary" />Meisterbetrieb</span>
          </div>
        </div>
      </div>

      <BackButton />

      <section className="py-4 md:py-6">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-8 text-center">
            <strong>Dachreparatur Kosten München</strong> – Typische Reparaturen & Preise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reparaturArten.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <item.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-bold text-secondary mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{item.desc}</p>
                <span className="text-primary font-bold text-lg">{item.preis}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-6 text-sm">
            Alle <strong>Dachreparatur Preise</strong> sind Richtwerte inkl. <strong>Material</strong> und <strong>Anfahrt</strong> im Raum <strong>München</strong>. Genauen <strong>Festpreis</strong> erhalten Sie nach <strong>Begutachtung</strong> durch unseren <strong>Dachdeckermeister</strong>.
          </p>
        </div>
      </section>

      <section className="py-4 md:py-6 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-8 text-center">
            <strong>Dachreparatur Ablauf</strong> – So läuft Ihre Reparatur ab
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {ablauf.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.schritt}
                </div>
                <h3 className="font-bold text-secondary mb-2">{step.titel}</h3>
                <p className="text-muted-foreground text-sm">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-4 md:py-6">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-6">
              <strong>Dachreparatur oder Dachsanierung?</strong> Wann was sinnvoll ist
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" /> <strong>Dachreparatur</strong> reicht meist bei:
                </h3>
                <ul className="space-y-2 text-green-700 text-sm">
                  <li>• Weniger als 10-20% der Fläche betroffen</li>
                  <li>• Einzelne oder wenige kaputte Ziegel</li>
                  <li>• Punktuelle Undichtigkeiten</li>
                  <li>• Dach jünger als 30 Jahre</li>
                  <li>• Dachstuhl in gutem Zustand</li>
                </ul>
              </div>
              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                <h3 className="font-bold text-orange-800 mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" /> <strong>Dachsanierung</strong> sinnvoll bei:
                </h3>
                <ul className="space-y-2 text-orange-700 text-sm">
                  <li>• Mehr als 30% der Fläche schadhaft</li>
                  <li>• Wiederkehrende Undichtigkeiten</li>
                  <li>• Dach älter als 40-50 Jahre</li>
                  <li>• Schlechte oder keine Dämmung</li>
                  <li>• Schäden am Dachstuhl</li>
                </ul>
              </div>
            </div>
            <p className="text-muted-foreground mt-6 text-center">
              Nicht sicher, ob <strong>Reparatur</strong> oder <strong>Sanierung</strong>? Wir beraten Sie ehrlich <strong>vor Ort</strong> – ohne Verkaufsdruck. Als <strong>Meisterbetrieb</strong> mit <strong>25 Jahren Erfahrung</strong> finden wir die beste Lösung für Ihr <strong>Dachproblem</strong>.
            </p>
          </div>
        </div>
      </section>

      <ServiceGeoLinks currentService="Dachreparatur" />
      <CostEscalationBanner />
      
      <LeadFunnel 
        headline="Dachreparatur in München?"
        subheadline="Wir reparieren alle Dachschäden."
        description="Ob undichte Stelle, gebrochene Ziegel oder lockere Bleche – wir beheben das Problem dauerhaft."
      />
      
      <DecisionPressureBanner />
      
      </main>
    </div>
  );
}
