import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, Sun, Zap, Euro } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, FAQPageSchema, ProductServiceSchema } from "@/components/SEO";
import BackButton from "@/components/BackButton";
import EinzugsgebietSection from "@/components/EinzugsgebietSection";
import { Link } from "wouter";
import heroImage from '@assets/stock_images/roofer_working_on_ro_cb52da00.jpg';
import { CostEscalationBanner, DecisionPressureBanner } from "@/components/UrgencyBanner";

export default function SolaranlageDach() {
  const leistungen = [
    { name: "Dach-Check für Solar", preis: "149€", beschreibung: "Tragfähigkeit, Ausrichtung, Verschattung" },
    { name: "Dachdurchführungen", preis: "200-400€", beschreibung: "Für Kabel und Leitungen" },
    { name: "Dachsanierung vor Solar", preis: "60-180€/m²", beschreibung: "Falls Dach zu alt ist" },
    { name: "Ziegel für Montagesystem", preis: "nach Aufwand", beschreibung: "Anpassung für Befestigung" }
  ];

  const faqs = [
    { question: "Muss das Dach vor Solaranlage saniert werden?", answer: "Wenn das Dach älter als 15 Jahre ist, empfehlen wir eine Prüfung. Bei Sanierungsbedarf besser vorher machen – sonst muss die Anlage später wieder runter." },
    { question: "Hält mein Dach eine Solaranlage aus?", answer: "Die meisten Dächer ja. Wir prüfen Tragfähigkeit, Dachneigung und Zustand. Bei Bedarf verstärken wir die Konstruktion." },
    { question: "Was kostet Dachprüfung für Solar?", answer: "Unser Dach-Check kostet 149€ und prüft alle relevanten Faktoren für die Solarinstallation." },
    { question: "Wie alt darf das Dach für Solar sein?", answer: "Ideal unter 15 Jahre. Bei älteren Dächern: erst prüfen, ob Sanierung nötig. Sonst droht in 10 Jahren teurer Rückbau der Anlage." },
    { question: "Arbeiten Sie mit Solarfirmen zusammen?", answer: "Ja! Wir bereiten Dächer für Solar vor und koordinieren mit Ihrem Solarteur. Oder empfehlen bewährte Partner." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Dach für Solaranlage prüfen & vorbereiten | Dachdecker München"
        description="Photovoltaik geplant? ✓ Dach-Check für Solar nur 149€ ✓ Tragfähigkeitsprüfung ✓ Sanierung vor PV-Montage 60-180€/m² ✓ Meisterbetrieb München & Umgebung!"
        canonical="/solaranlage-dach"
        keywords="dach für solaranlage, solardach prüfen, photovoltaik dach vorbereiten, dach sanieren vor pv, tragfähigkeit dach solar, dachdecker solar münchen, pv anlage dach"
        aiSummary="Dach für Solaranlage vorbereiten München und Umgebung: Dach-Check 149€, Sanierung vor PV 60-180€/m². 089Dach - Ihr Partner für Solardach in München, Starnberg, Dachau. Tel: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Solaranlage Dach", url: "/solaranlage-dach" }]} />
      <ServiceSchema pageName="Dach für Solaranlage" services={[{ name: "Solar-Vorbereitung", description: "Dachprüfung und -sanierung für PV" }]} />
      <ProductServiceSchema name="Dach für Solar München" description="Dachvorbereitung für Solaranlagen" priceFrom={149} priceTo={500} category="Solar" />
      <FAQPageSchema faqs={faqs} />
      
      <Navigation />
      
      <section className="relative py-20 text-white overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/95 via-yellow-900/85 to-yellow-800/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-yellow-500/30">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="font-medium text-yellow-300">Bereit für die Energiewende</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Dach für <strong>Solaranlage</strong> vorbereiten</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-7xl mx-auto">Bevor die Panels drauf kommen: Wir prüfen und sanieren Ihr Dach für die optimale Solarnutzung.</p>
            <p className="text-lg text-white/70 mb-8">Dach-Check 149€ • Sanierung bei Bedarf • Meisterbetrieb</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white text-lg px-8 py-6" data-testid="button-hero-callback"><a href="/rueckruf/"><Phone className="mr-2 h-5 w-5" />Kostenlose Beratung</a></Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6" data-testid="button-hero-online"><a href="/beratung">24h Online Termin</a></Button>
            </div>
          </div>
        </div>
      </section>

      <BackButton />

      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Unsere Leistungen für Ihr Solardach</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {leistungen.map((l, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6 flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">{l.name}</h3>
                    <p className="text-slate-600 text-sm">{l.beschreibung}</p>
                  </div>
                  <p className="text-xl font-bold text-yellow-600 whitespace-nowrap ml-4">{l.preis}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Häufige Fragen</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">{faq.question}</h3>
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-yellow-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Dach-Check für Solar?</h2>
            <p className="text-xl text-white/90 mb-8">Wir prüfen, ob Ihr Dach bereit ist</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-yellow-700 hover:bg-yellow-50 text-lg px-8" data-testid="button-cta-callback">Beratung anfordern<ArrowRight className="ml-2 h-5 w-5" /></a></Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online-cta"><a href="/beratung">24h Online Termin</a></Button>
            </div>
          </div>
        </div>
      </section>

      <EinzugsgebietSection />
      <CostEscalationBanner />
      <LeadFunnel 
        headline="Solaranlage aufs Dach in München?"
        subheadline="Wir prüfen die Eignung."
        description="Vor Solaranlage aufs Dach – wir prüfen ob Ihr Münchner Dach bereit ist."
      />
      <DecisionPressureBanner />
    </div>
  );
}
