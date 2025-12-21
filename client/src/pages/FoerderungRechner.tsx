import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, Calculator, Leaf, Euro, Clock, TrendingDown, CheckCircle2, ArrowRight, Home, Thermometer, Zap } from "lucide-react";
import SEO, { BreadcrumbSchema, LocalBusinessSchema } from "@/components/SEO";
import BackButton from "@/components/BackButton";
import LeadFunnel from "@/components/LeadFunnel";
import Contact from "@/components/Contact";
import heroImage from "@assets/generated_images/roof_insulation_installation_scene.png";

const GRADTAGZAHL_MUENCHEN = 3400;
const CO2_FACTOR_GAS = 0.2;
const CO2_FACTOR_OEL = 0.27;
const CO2_FACTOR_STROM = 0.05;
const CO2_FACTOR_WAERMEPUMPE = 0.02;

interface DaemmOption {
  name: string;
  uWert: number;
  kostenMin: number;
  kostenMax: number;
  beschreibung: string;
}

const daemmOptionen: DaemmOption[] = [
  {
    name: "Innendämmung (Zwischensparren)",
    uWert: 0.24,
    kostenMin: 80,
    kostenMax: 120,
    beschreibung: "Dämmung zwischen den Sparren von innen – ideal bei intaktem Dach"
  },
  {
    name: "Außendämmung (Aufsparren)",
    uWert: 0.18,
    kostenMin: 150,
    kostenMax: 200,
    beschreibung: "Dämmung auf den Sparren – beste Dämmwirkung, erfordert Neueindeckung"
  },
  {
    name: "Kombiniert (Innen + Außen)",
    uWert: 0.14,
    kostenMin: 200,
    kostenMax: 280,
    beschreibung: "Maximale Dämmung durch Kombination beider Methoden"
  }
];

type HeizTyp = "gas" | "oel" | "strom" | "waermepumpe";

function berechneErsparnis(
  flaeche: number,
  alterUWert: number,
  neuerUWert: number,
  energiePreis: number,
  heizTyp: HeizTyp
) {
  const deltaU = alterUWert - neuerUWert;
  const waermeVerlustKwh = (flaeche * deltaU * GRADTAGZAHL_MUENCHEN * 24) / 1000;
  const jaehrlicheErsparnis = waermeVerlustKwh * energiePreis;
  const co2Faktoren: Record<HeizTyp, number> = {
    gas: CO2_FACTOR_GAS,
    oel: CO2_FACTOR_OEL,
    strom: CO2_FACTOR_STROM,
    waermepumpe: CO2_FACTOR_WAERMEPUMPE
  };
  const co2Ersparnis = waermeVerlustKwh * co2Faktoren[heizTyp];
  return { waermeVerlustKwh, jaehrlicheErsparnis, co2Ersparnis };
}

const MONTH_NAMES = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];

export default function FoerderungRechner() {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = MONTH_NAMES[now.getMonth()];
  const [flaeche, setFlaeche] = useState<number>(120);
  const [alterUWert, setAlterUWert] = useState<number>(1.8);
  const [heizTyp, setHeizTyp] = useState<HeizTyp>("gas");
  const [energiePreis, setEnergiePreis] = useState<number>(0.12);

  const berechnungen = daemmOptionen.map(option => {
    const { waermeVerlustKwh, jaehrlicheErsparnis, co2Ersparnis } = berechneErsparnis(
      flaeche,
      alterUWert,
      option.uWert,
      energiePreis,
      heizTyp
    );
    const investitionMin = flaeche * option.kostenMin;
    const investitionMax = flaeche * option.kostenMax;
    const investitionMittel = (investitionMin + investitionMax) / 2;
    const kfwFoerderung = Math.min(investitionMittel * 0.2, 60000);
    const eigenanteil = investitionMittel - kfwFoerderung;
    const amortisation = jaehrlicheErsparnis > 0 ? eigenanteil / jaehrlicheErsparnis : 0;
    
    return {
      ...option,
      waermeVerlustKwh,
      jaehrlicheErsparnis,
      co2Ersparnis,
      investitionMin,
      investitionMax,
      investitionMittel,
      kfwFoerderung,
      eigenanteil,
      amortisation
    };
  });

  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title={`Was bringt Dachdämmung? Förderrechner München ${currentYear}`}
        description={`Wie viel spare ich mit Dachdämmung? ✓ Heizkosten-Ersparnis berechnen ✓ KfW-Förderung ${currentYear} bis 20% ✓ Amortisation in Jahren. Kostenloser Rechner für München.`}
        canonical="https://089dach.de/foerderung-rechner"
        keywords={`was bringt dachdämmung, wie viel spart man mit dachdämmung, lohnt sich dachdämmung rechner, kfw förderung dachdämmung ${currentYear} wie viel, dachdämmung heizkosten ersparnis berechnen, amortisation dachdämmung jahre, dachdämmung förderung münchen bayern, energetische dachsanierung rechner, co2 ersparnis dachdämmung, dachdämmung kosten nutzen rechner, aufsparrendämmung förderung ${currentYear}, zwischensparrendämmung kosten ersparnis`}
        aiSummary={`Interaktiver Förderrechner für Dachdämmung in München. Berechnet individuelle Heizkosten-Ersparnis basierend auf Dachfläche und Heizungsart, KfW-Förderung ${currentYear} (bis 20%), Amortisationszeit und CO2-Einsparung. Vergleich von Innendämmung, Außendämmung und kombinierter Dämmung.`}
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Leistungen", url: "/leistungen" },
        { name: "Dachsanierung", url: "/leistungen/dachsanierung" },
        { name: "Förderung Rechner", url: "/foerderung-rechner" }
      ]} />
      <LocalBusinessSchema />
      <Navbar />
      <main id="main-content" role="main" tabIndex={-1}>
      
      <section className="pt-6 pb-8 md:pt-10 md:pb-12 bg-secondary relative overflow-hidden min-h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Dachdämmung Installation - Förderrechner für energetische Dachsanierung München"
            className="w-full h-full object-cover"
            width={1792}
            height={1024}
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/50"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl text-white">
            <div className="flex items-center gap-2 mb-3">
              <Calculator className="h-5 w-5 text-primary" />
              <span className="text-primary font-bold tracking-wider uppercase text-sm">KfW-Förderung {currentYear}</span>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Förderrechner: Was bringt eine Dachdämmung?
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-4">
              Wie viel Heizkosten spare ich mit Dachdämmung? Welche KfW-Förderung bekomme ich {currentYear}? 
              Wann hat sich die Investition amortisiert? Unser Rechner zeigt es Ihnen – individuell für Ihr Dach in München.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="bg-white/10 px-3 py-1 rounded-full">✓ Bis 20% KfW-Zuschuss</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">✓ Bis 30% Heizkosten sparen</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">✓ CO₂-Ersparnis berechnen</span>
            </div>
          </div>
        </div>
      </section>

      <BackButton />

      <section className="py-8 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-stone-200 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Euro className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-secondary mb-2">Bis zu 20% Förderung</h3>
              <p className="text-sm text-muted-foreground">KfW und BAFA fördern energetische Dachdämmung mit attraktiven Zuschüssen</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-stone-200 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-secondary mb-2">30% Heizkosten sparen</h3>
              <p className="text-sm text-muted-foreground">Eine gute Dachdämmung senkt Ihre Energiekosten dauerhaft und spürbar</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-stone-200 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-secondary mb-2">Schnelle Amortisation</h3>
              <p className="text-sm text-muted-foreground">Ihre Investition rechnet sich oft schon nach 8-12 Jahren</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-stone-200 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-secondary mb-2">Klima schützen</h3>
              <p className="text-sm text-muted-foreground">Weniger Heizenergie bedeutet weniger CO₂-Ausstoß für eine bessere Zukunft</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 md:py-6">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-fit sticky top-4">
              <h2 className="text-xl font-heading font-bold text-secondary mb-4 flex items-center gap-2">
                <Home className="h-5 w-5 text-primary" />
                Ihre Daten
              </h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="flaeche" className="text-sm font-medium">Dachfläche (m²)</Label>
                  <Input
                    id="flaeche"
                    type="number"
                    value={flaeche}
                    onChange={(e) => setFlaeche(Number(e.target.value))}
                    min={20}
                    max={500}
                    className="mt-1"
                    data-testid="input-flaeche"
                  />
                  <p className="text-xs text-muted-foreground mt-1">Typisch: 80-150 m² für Einfamilienhaus</p>
                </div>

                <div>
                  <Label htmlFor="uwert" className="text-sm font-medium">Aktueller U-Wert (W/m²K)</Label>
                  <select
                    id="uwert"
                    value={alterUWert}
                    onChange={(e) => setAlterUWert(Number(e.target.value))}
                    className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-md text-sm"
                    data-testid="select-uwert"
                  >
                    <option value={2.0}>2.0 - Ungedämmt (vor 1980)</option>
                    <option value={1.8}>1.8 - Minimal gedämmt (1980-1995)</option>
                    <option value={1.4}>1.4 - Teilweise gedämmt (1995-2005)</option>
                    <option value={1.0}>1.0 - Mäßig gedämmt (2005-2015)</option>
                    <option value={0.5}>0.5 - Gut gedämmt (nach 2015)</option>
                  </select>
                </div>

                <div>
                  <Label className="text-sm font-medium">Heizungsart</Label>
                  <div className="grid grid-cols-2 gap-2 mt-1">
                    <button
                      onClick={() => { setHeizTyp("gas"); setEnergiePreis(0.12); }}
                      className={`py-2 px-3 rounded-md text-sm font-medium transition-colors ${heizTyp === "gas" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                      data-testid="button-gas"
                    >
                      Gas (12 ct)
                    </button>
                    <button
                      onClick={() => { setHeizTyp("oel"); setEnergiePreis(0.10); }}
                      className={`py-2 px-3 rounded-md text-sm font-medium transition-colors ${heizTyp === "oel" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                      data-testid="button-oel"
                    >
                      Öl (10 ct)
                    </button>
                    <button
                      onClick={() => { setHeizTyp("strom"); setEnergiePreis(0.35); }}
                      className={`py-2 px-3 rounded-md text-sm font-medium transition-colors ${heizTyp === "strom" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                      data-testid="button-strom"
                    >
                      Strom (35 ct)
                    </button>
                    <button
                      onClick={() => { setHeizTyp("waermepumpe"); setEnergiePreis(0.30); }}
                      className={`py-2 px-3 rounded-md text-sm font-medium transition-colors ${heizTyp === "waermepumpe" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                      data-testid="button-waermepumpe"
                    >
                      Wärmepumpe
                    </button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="preis" className="text-sm font-medium">Energiepreis (€/kWh)</Label>
                  <Input
                    id="preis"
                    type="number"
                    value={energiePreis}
                    onChange={(e) => setEnergiePreis(Number(e.target.value))}
                    step={0.01}
                    min={0.05}
                    max={1}
                    className="mt-1"
                    data-testid="input-preis"
                  />
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="text-sm font-medium text-green-800 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  KfW-Förderung {currentYear}: 20% Zuschuss
                </p>
                <p className="text-xs text-green-700 mt-1">Maximal 60.000 € pro Wohneinheit</p>
                <p className="text-xs text-green-600 mt-2">Stand: {currentMonth} {currentYear}</p>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-2xl font-heading font-bold text-secondary">
                Was Sie KONKRET sparen:
              </h2>

              {berechnungen.map((b, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-primary/30 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-secondary">{b.name}</h3>
                      <p className="text-sm text-muted-foreground">{b.beschreibung}</p>
                    </div>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      U-Wert: {b.uWert}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="bg-green-50 rounded-lg p-3">
                      <div className="flex items-center gap-1 text-green-700 text-xs font-medium mb-1">
                        <Euro className="h-3 w-3" />
                        Jährliche Ersparnis
                      </div>
                      <p className="text-xl font-bold text-green-800">
                        {b.jaehrlicheErsparnis.toLocaleString("de-DE", { maximumFractionDigits: 0 })} €
                      </p>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="flex items-center gap-1 text-blue-700 text-xs font-medium mb-1">
                        <Thermometer className="h-3 w-3" />
                        Investition
                      </div>
                      <p className="text-xl font-bold text-blue-800">
                        {b.investitionMin.toLocaleString("de-DE", { maximumFractionDigits: 0 })} - {b.investitionMax.toLocaleString("de-DE", { maximumFractionDigits: 0 })} €
                      </p>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-3">
                      <div className="flex items-center gap-1 text-purple-700 text-xs font-medium mb-1">
                        <Zap className="h-3 w-3" />
                        KfW-Förderung
                      </div>
                      <p className="text-xl font-bold text-purple-800">
                        -{b.kfwFoerderung.toLocaleString("de-DE", { maximumFractionDigits: 0 })} €
                      </p>
                    </div>

                    <div className="bg-orange-50 rounded-lg p-3">
                      <div className="flex items-center gap-1 text-orange-700 text-xs font-medium mb-1">
                        <Clock className="h-3 w-3" />
                        Amortisation
                      </div>
                      <p className="text-xl font-bold text-orange-800">
                        {b.amortisation.toFixed(1)} Jahre
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <TrendingDown className="h-4 w-4 text-green-600" />
                        {b.waermeVerlustKwh.toLocaleString("de-DE", { maximumFractionDigits: 0 })} kWh/Jahr weniger
                      </span>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Leaf className="h-4 w-4 text-green-600" />
                        {(b.co2Ersparnis / 1000).toFixed(1)} t CO₂/Jahr
                      </span>
                    </div>
                    <span className="text-sm font-medium text-secondary">
                      Eigenanteil: {b.eigenanteil.toLocaleString("de-DE", { maximumFractionDigits: 0 })} €
                    </span>
                  </div>
                </div>
              ))}

              <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                <h3 className="text-lg font-bold text-secondary mb-2">Nächster Schritt: Kostenlose Vor-Ort-Beratung</h3>
                <p className="text-muted-foreground mb-4">
                  Wir prüfen Ihr Dach, ermitteln den genauen U-Wert und erstellen ein verbindliches Angebot mit Förderberatung.
                </p>
                <a href="/beratung">
                  <Button className="bg-primary hover:bg-primary/90" data-testid="button-beratung">
                    <Phone className="h-4 w-4 mr-2" />
                    Kostenlose Beratung anfordern
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadFunnel 
        headline="Förderung für Ihre Dachsanierung sichern"
        subheadline="Wir helfen beim KfW-Antrag"
        description="Bis zu 20% Zuschuss für Ihre Dachdämmung – wir übernehmen die Förderberatung."
      />
      <Contact />
      </main>
      <Footer />
    </div>
  );
}
