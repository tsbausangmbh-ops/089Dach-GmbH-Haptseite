import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, Flame, Home, Thermometer, TrendingDown, Euro, Leaf, ArrowRight, ThermometerSnowflake } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import SEO, { BreadcrumbSchema } from "@/components/SEO";
import heroImage from "@assets/generated_images/house_with_heat_loss_visualization.png";

interface CalculationResult {
  currentCost: number;
  potentialSavings: number;
  newCost: number;
  co2Savings: number;
  paybackYears: number;
}

export default function Heizkostenrechner() {
  const [formData, setFormData] = useState({
    wohnflaeche: "",
    heizungsart: "gas",
    baujahr: "",
    gedaemmt: "nein"
  });
  const [result, setResult] = useState<CalculationResult | null>(null);

  const heizungsarten = [
    { value: "gas", label: "Erdgas", preis: 0.12, co2: 0.201 },
    { value: "oel", label: "Heizöl", preis: 0.10, co2: 0.266 },
    { value: "fernwaerme", label: "Fernwärme", preis: 0.11, co2: 0.183 },
    { value: "waermepumpe", label: "Wärmepumpe", preis: 0.30, co2: 0.366 },
    { value: "pellets", label: "Holzpellets", preis: 0.08, co2: 0.023 }
  ];

  const getEnergiebedarf = (baujahr: number, gedaemmt: boolean): number => {
    if (baujahr < 1970) return gedaemmt ? 120 : 200;
    if (baujahr < 1980) return gedaemmt ? 100 : 170;
    if (baujahr < 1990) return gedaemmt ? 90 : 150;
    if (baujahr < 2000) return gedaemmt ? 75 : 120;
    if (baujahr < 2010) return gedaemmt ? 60 : 90;
    return gedaemmt ? 45 : 70;
  };

  const handleCalculate = () => {
    const wohnflaeche = parseFloat(formData.wohnflaeche);
    const baujahr = parseInt(formData.baujahr);
    const gedaemmt = formData.gedaemmt === "ja";
    
    if (!wohnflaeche || !baujahr) return;

    const heizung = heizungsarten.find(h => h.value === formData.heizungsart)!;
    const energiebedarf = getEnergiebedarf(baujahr, gedaemmt);
    const energiebedarfNachDaemmung = getEnergiebedarf(baujahr, true);
    
    const jahresverbrauch = wohnflaeche * energiebedarf;
    const jahresverbrauchNeu = wohnflaeche * energiebedarfNachDaemmung;
    
    const currentCost = jahresverbrauch * heizung.preis;
    const newCost = jahresverbrauchNeu * heizung.preis;
    const potentialSavings = currentCost - newCost;
    
    const co2Current = (jahresverbrauch * heizung.co2) / 1000;
    const co2New = (jahresverbrauchNeu * heizung.co2) / 1000;
    const co2Savings = co2Current - co2New;
    
    const daemmKosten = wohnflaeche * 150;
    const paybackYears = potentialSavings > 0 ? daemmKosten / potentialSavings : 0;

    setResult({
      currentCost: Math.round(currentCost),
      potentialSavings: Math.round(potentialSavings),
      newCost: Math.round(newCost),
      co2Savings: Math.round(co2Savings * 10) / 10,
      paybackYears: Math.round(paybackYears * 10) / 10
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Heizkosten-Rechner | Sparpotenzial berechnen - 089Dach"
        description="Berechnen Sie Ihre Heizkosten und erfahren Sie, wie viel Sie durch eine Dachdämmung sparen können. Kostenloser Online-Rechner."
        canonical="https://089dach.de/heizkostenrechner"
        keywords="heizkosten rechner, energiekosten berechnen, dachdämmung sparen, energieeinsparung dach, heizkosten senken"
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Heizkosten-Rechner", url: "/heizkostenrechner" }]} />
      <Navbar />
      
      <section className="relative min-h-[400px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/60"></div>
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10 py-16">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              <span className="text-primary">Heizkosten-Rechner</span>
              <br />
              Was kostet Ihr Dach Sie wirklich?
            </h1>
            <p className="text-xl text-gray-200 max-w-xl mb-4">
              Berechnen Sie Ihre aktuellen Heizkosten und erfahren Sie, wie viel Sie durch eine professionelle Dachdämmung sparen können.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Calculator className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-secondary">Ihre Daten eingeben</h2>
                </div>

                <div className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="wohnflaeche" className="flex items-center gap-2">
                      <Home className="h-4 w-4 text-primary" />
                      Wohnfläche (m²)
                    </Label>
                    <Input 
                      id="wohnflaeche"
                      type="number"
                      placeholder="z.B. 150"
                      value={formData.wohnflaeche}
                      onChange={(e) => setFormData({ ...formData, wohnflaeche: e.target.value })}
                      data-testid="input-wohnflaeche"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="baujahr" className="flex items-center gap-2">
                      <Home className="h-4 w-4 text-primary" />
                      Baujahr des Gebäudes
                    </Label>
                    <Input 
                      id="baujahr"
                      type="number"
                      placeholder="z.B. 1985"
                      value={formData.baujahr}
                      onChange={(e) => setFormData({ ...formData, baujahr: e.target.value })}
                      data-testid="input-baujahr"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="heizungsart" className="flex items-center gap-2">
                      <Flame className="h-4 w-4 text-primary" />
                      Heizungsart
                    </Label>
                    <select
                      id="heizungsart"
                      className="w-full h-12 px-3 rounded-md border border-input bg-background text-sm"
                      value={formData.heizungsart}
                      onChange={(e) => setFormData({ ...formData, heizungsart: e.target.value })}
                      data-testid="select-heizungsart"
                    >
                      {heizungsarten.map(h => (
                        <option key={h.value} value={h.value}>{h.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gedaemmt" className="flex items-center gap-2">
                      <Thermometer className="h-4 w-4 text-primary" />
                      Ist Ihr Dach bereits gedämmt?
                    </Label>
                    <select
                      id="gedaemmt"
                      className="w-full h-12 px-3 rounded-md border border-input bg-background text-sm"
                      value={formData.gedaemmt}
                      onChange={(e) => setFormData({ ...formData, gedaemmt: e.target.value })}
                      data-testid="select-gedaemmt"
                    >
                      <option value="nein">Nein / Nicht sicher</option>
                      <option value="ja">Ja, gut gedämmt</option>
                    </select>
                  </div>

                  <Button 
                    onClick={handleCalculate}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 text-lg"
                    disabled={!formData.wohnflaeche || !formData.baujahr}
                    data-testid="button-calculate"
                  >
                    Heizkosten berechnen
                    <Calculator className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div>
                {result ? (
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-xl border border-primary/20">
                    <h3 className="text-2xl font-heading font-bold text-secondary mb-6">Ihr Ergebnis</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Aktuelle Heizkosten/Jahr</span>
                          <span className="text-2xl font-bold text-secondary">{result.currentCost.toLocaleString('de-DE')} €</span>
                        </div>
                      </div>

                      {result.potentialSavings > 0 && (
                        <>
                          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <TrendingDown className="h-5 w-5 text-green-600" />
                                <span className="text-green-800 font-medium">Mögliche Ersparnis/Jahr</span>
                              </div>
                              <span className="text-2xl font-bold text-green-600">-{result.potentialSavings.toLocaleString('de-DE')} €</span>
                            </div>
                          </div>

                          <div className="bg-white p-4 rounded-lg">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Euro className="h-5 w-5 text-primary" />
                                <span className="text-muted-foreground">Neue Heizkosten/Jahr</span>
                              </div>
                              <span className="text-2xl font-bold text-primary">{result.newCost.toLocaleString('de-DE')} €</span>
                            </div>
                          </div>

                          <div className="bg-white p-4 rounded-lg">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Leaf className="h-5 w-5 text-green-600" />
                                <span className="text-muted-foreground">CO₂-Ersparnis/Jahr</span>
                              </div>
                              <span className="text-xl font-bold text-green-600">{result.co2Savings} Tonnen</span>
                            </div>
                          </div>

                          <div className="bg-secondary/10 p-4 rounded-lg">
                            <div className="flex items-center justify-between">
                              <span className="text-secondary font-medium">Amortisation ca.</span>
                              <span className="text-xl font-bold text-secondary">{result.paybackYears} Jahre</span>
                            </div>
                          </div>
                        </>
                      )}

                      {result.potentialSavings === 0 && (
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <p className="text-blue-800">
                            Ihr Dach ist bereits gut gedämmt. Dennoch lohnt sich eine regelmäßige Wartung.
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="mt-6 pt-6 border-t border-primary/20">
                      <p className="text-sm text-muted-foreground mb-4">
                        Diese Berechnung ist eine Schätzung. Für eine genaue Analyse empfehlen wir eine kostenlose Vor-Ort-Beratung.
                      </p>
                      <Link href="/beratung">
                        <Button className="w-full bg-primary hover:bg-primary/90" data-testid="link-beratung">
                          Kostenlose Beratung anfragen
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gray-50 p-8 rounded-xl h-full flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Thermometer className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary mb-2">Ihr Sparpotenzial</h3>
                    <p className="text-muted-foreground">
                      Geben Sie Ihre Daten ein und sehen Sie sofort, wie viel Sie durch eine Dachdämmung sparen können.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-12 bg-stone-50 p-8 rounded-xl">
              <h3 className="text-2xl font-heading font-bold text-secondary mb-6 text-center">
                Warum Dachdämmung sich lohnt
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingDown className="h-7 w-7 text-primary" />
                  </div>
                  <h4 className="font-bold text-secondary mb-2">Bis zu 30% sparen</h4>
                  <p className="text-sm text-muted-foreground">
                    Eine gute Dachdämmung kann Ihre Heizkosten um bis zu 30% reduzieren.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="h-7 w-7 text-primary" />
                  </div>
                  <h4 className="font-bold text-secondary mb-2">Umwelt schützen</h4>
                  <p className="text-sm text-muted-foreground">
                    Weniger Energieverbrauch bedeutet weniger CO₂-Ausstoß und aktiver Klimaschutz.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Euro className="h-7 w-7 text-primary" />
                  </div>
                  <h4 className="font-bold text-secondary mb-2">Förderung nutzen</h4>
                  <p className="text-sm text-muted-foreground">
                    Staatliche Förderungen von bis zu 40% machen die Investition noch attraktiver.
                  </p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Link href="/ratgeber/daemmung">
                  <Button variant="outline" className="font-bold px-8 py-6 rounded-xl border-secondary text-secondary hover:bg-secondary hover:text-white" data-testid="link-daemmung-ratgeber">
                    <ThermometerSnowflake className="mr-2 h-5 w-5" />
                    Mehr über Dachdämmung erfahren
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
