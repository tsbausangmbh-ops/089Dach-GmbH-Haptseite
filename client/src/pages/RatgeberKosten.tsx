import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, Euro, ArrowRight, Calculator, Home, Warehouse, Info } from "lucide-react";
import LeadFunnel from "@/components/LeadFunnel";
import SEO, { BreadcrumbSchema, FAQPageSchema } from "@/components/SEO";
import RelatedServices from "@/components/RelatedServices";

export default function RatgeberKosten() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title={`Dachsanierung Kosten 2025 | Preise pro m² + Beispiele München`}
        description={`Was kostet eine Dachsanierung 2025 in München? Aktuelle Preise pro m²: Steildach ab 120€, Flachdach ab 85€. Kostenbeispiele, Preisfaktoren & Spartipps vom Meisterbetrieb. Tel: 089 12621964`}
        canonical={`https://089dach.de/ratgeber/kosten`}
        keywords={`dachsanierung kosten münchen, dach erneuern kosten pro qm, dachdecker preise münchen 2025, dachsanierung preis pro qm bayern, dach neu eindecken kosten einfamilienhaus, was kostet neue dacheindeckung, dachziegel austauschen kosten, dachreparatur kosten münchen, komplettsanierung dach preis, dachsanierung förderung kosten`}
        aiSummary="Dachsanierung Kosten 2025 in München: Steildach Neueindeckung ab 120€/m², Komplettsanierung mit Dämmung ab 235€/m². Flachdach Abdichtung ab 85€/m². Einfamilienhaus 120m² kostet ca. 24.000-32.000€ inkl. Dämmung. KfW/BAFA-Förderung bis 20% möglich. Preisfaktoren: Dachgröße, Neigung, Material, Dämmung, Altbestand. Spartipps: Förderung nutzen, Frühjahr/Herbst planen, Dämmung kombinieren. Kostenlose Beratung bei 089Dach GmbH München. Tel: 089 12621964."
      />
      <FAQPageSchema faqs={[
        { question: "Was kostet eine Dachsanierung pro Quadratmeter?", answer: "In München kostet eine Steildach-Neueindeckung ohne Dämmung ab 120€/m². Mit Komplettsanierung inklusive Dämmung rechnen Sie mit ab 235€/m². Flachdach-Abdichtung beginnt bei 85€/m²." },
        { question: "Was kostet eine komplette Dachsanierung Einfamilienhaus?", answer: "Ein Einfamilienhaus mit 120m² Dachfläche kostet bei Komplettsanierung mit Aufsparrendämmung ca. 32.000€. Mit KfW-Förderung reduziert sich der Preis auf ca. 24.000€ netto." },
        { question: "Wie viel kostet eine neue Dacheindeckung ohne Dämmung?", answer: "Eine reine Neueindeckung ohne Dämmung kostet ab 120€/m² für Steildach. Bei 100m² Dachfläche sind das ca. 12.000€ inklusive Gerüst und Entsorgung." },
        { question: "Welche Faktoren beeinflussen den Preis einer Dachsanierung?", answer: "Die Hauptfaktoren sind: Dachfläche (größer = günstiger pro m²), Dachneigung, Zugänglichkeit (Gerüstkosten), Materialwahl (Schiefer teurer als Betondachstein), Dämmungsart und Altbestand (Asbest-Entsorgung als Mehrkosten)." },
        { question: "Kann ich bei einer Dachsanierung Förderung erhalten?", answer: "Ja, KfW und BAFA fördern energetische Dachsanierungen mit bis zu 20% Zuschuss. Bei einem Projekt von 30.000€ können Sie bis zu 6.000€ Förderung erhalten. Wir helfen beim Antrag." },
        { question: "Wann ist eine Dachsanierung am günstigsten?", answer: "Im Frühjahr (März-Mai) und Herbst (September-Oktober) sind die Preise oft günstiger als in der Hochsaison. Außerdem empfiehlt sich, Dämmung und Eindeckung zusammen zu machen statt getrennt." }
      ]} />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Ratgeber", url: "/ratgeber" }, { name: "Kosten", url: "/ratgeber/kosten" }]} />
      <Navbar />
      
      <section className="pt-6 pb-8 md:pt-10 md:pb-12 bg-secondary relative overflow-hidden min-h-[35vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/80"></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl text-white">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <Euro className="h-5 w-5 text-primary" />
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Kosten-Ratgeber 2025</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 md:mb-6">
              Was kostet eine Dachsanierung?
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-xl mb-4 md:mb-6">
              Aktuelle Preise, Kostenbeispiele und Spartipps – transparent erklärt.
            </p>
            <a href="/beratung">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" data-testid="button-beratung-hero">
                Kostenloses Angebot <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-6">Preisübersicht Dachsanierung 2025</h2>
              <p className="text-muted-foreground mb-4">
                Die folgenden Preise sind Richtwerte für den Großraum München und basieren auf unseren aktuellen Projekten im Jahr 2025. Der tatsächliche Preis hängt von Dachgröße, Zustand, Material und Zugänglichkeit ab.
              </p>
              <p className="text-muted-foreground mb-6">
                Eine Dachsanierung ist eine der wichtigsten Investitionen in Ihre Immobilie. Ein intaktes Dach schützt nicht nur vor Witterung, sondern spart durch moderne Dämmung auch erheblich Heizkosten. In München betragen die durchschnittlichen Energieeinsparungen nach einer energetischen Dachsanierung 15-25% der jährlichen Heizkosten. Bei aktuellen Energiepreisen amortisiert sich die Investition oft innerhalb von 8-12 Jahren.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Home className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-bold text-secondary">Steildach</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      { leistung: "Neueindeckung (ohne Dämmung)", preis: "ab 120 €/m²" },
                      { leistung: "Komplettsanierung inkl. Dämmung", preis: "ab 235 €/m²" },
                      { leistung: "Nur Dämmung (Zwischensparren)", preis: "ab 80 €/m²" },
                      { leistung: "Aufsparrendämmung", preis: "ab 120 €/m²" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-muted-foreground text-sm">{item.leistung}</span>
                        <span className="font-bold text-primary">{item.preis}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Warehouse className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-bold text-secondary">Flachdach</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      { leistung: "Abdichtung (Bitumen)", preis: "ab 85 €/m²" },
                      { leistung: "Abdichtung (EPDM/Kunststoff)", preis: "ab 95 €/m²" },
                      { leistung: "Komplettsanierung inkl. Dämmung", preis: "ab 180 €/m²" },
                      { leistung: "Dachbegrünung (extensiv)", preis: "ab 60 €/m²" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-muted-foreground text-sm">{item.leistung}</span>
                        <span className="font-bold text-primary">{item.preis}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 rounded-xl p-6 border border-primary/20 mb-8">
              <h2 className="text-xl font-heading font-bold text-secondary mb-4 flex items-center gap-2">
                <Calculator className="h-6 w-6 text-primary" />Kostenbeispiele aus der Praxis
              </h2>
              <div className="space-y-6">
                {[
                  { 
                    titel: "Einfamilienhaus Pasing (120 m² Dachfläche)", 
                    leistung: "Komplettsanierung mit Aufsparrendämmung, Tonziegel, neue Dachrinnen",
                    kosten: "ca. 32.000 €",
                    foerderung: "- 8.000 € KfW-Förderung",
                    endpreis: "= 24.000 € netto"
                  },
                  { 
                    titel: "Doppelhaushälfte Sendling (80 m² Dachfläche)", 
                    leistung: "Neueindeckung mit Betondachsteinen, Dämmung zwischen den Sparren",
                    kosten: "ca. 18.500 €",
                    foerderung: "- 4.500 € BAFA-Förderung",
                    endpreis: "= 14.000 € netto"
                  },
                  { 
                    titel: "Flachdach Gewerbe Moosach (200 m²)", 
                    leistung: "EPDM-Abdichtung mit Gefälledämmung",
                    kosten: "ca. 28.000 €",
                    foerderung: "keine Förderung",
                    endpreis: "= 28.000 € netto"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4 border border-gray-100">
                    <h4 className="font-bold text-secondary mb-2">{item.titel}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{item.leistung}</p>
                    <div className="text-sm space-y-1">
                      <div className="flex justify-between"><span>Gesamtkosten:</span><span className="font-medium">{item.kosten}</span></div>
                      <div className="flex justify-between text-green-600"><span>Förderung:</span><span>{item.foerderung}</span></div>
                      <div className="flex justify-between font-bold text-primary border-t pt-1"><span>Ihr Preis:</span><span>{item.endpreis}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border border-green-200 mb-8">
              <h2 className="text-xl font-heading font-bold text-green-800 mb-4">So sparen Sie bei der Dachsanierung</h2>
              <ul className="space-y-3">
                {[
                  { tipp: "Förderung nutzen", desc: "KfW und BAFA zahlen bis zu 20% der Kosten. Wir helfen beim Antrag." },
                  { tipp: "Richtig planen", desc: "Sanierung im Frühjahr/Herbst ist günstiger als in der Hochsaison." },
                  { tipp: "Kombinieren", desc: "Dämmung + Eindeckung zusammen ist günstiger als getrennt." },
                  { tipp: "Wartung", desc: "Regelmäßige Wartung verhindert teure Notfall-Reparaturen." },
                  { tipp: "Festpreis", desc: "Bestehen Sie auf einem Festpreis-Angebot ohne versteckte Kosten." }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-green-800">{item.tipp}:</span>
                      <span className="text-green-700 ml-1">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 mb-8">
              <h2 className="text-xl font-heading font-bold text-amber-800 mb-4 flex items-center gap-2">
                <Info className="h-6 w-6" />Was beeinflusst den Preis?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { faktor: "Dachfläche", einfluss: "Größere Flächen = günstigerer m²-Preis" },
                  { faktor: "Dachneigung", einfluss: "Steile Dächer = mehr Aufwand" },
                  { faktor: "Zugänglichkeit", einfluss: "Schwer erreichbar = Gerüstkosten" },
                  { faktor: "Material", einfluss: "Schiefer teurer als Betondachstein" },
                  { faktor: "Dämmung", einfluss: "Aufsparren teurer als Zwischensparren" },
                  { faktor: "Altbestand", einfluss: "Asbest-Entsorgung = Mehrkosten" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-3 border border-amber-100">
                    <span className="font-bold text-amber-800">{item.faktor}:</span>
                    <span className="text-amber-700 ml-1 text-sm">{item.einfluss}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 mb-8">
              <h2 className="text-xl font-heading font-bold text-blue-800 mb-3">Förderung nicht vergessen!</h2>
              <p className="text-blue-700 mb-4">
                Mit KfW und BAFA können Sie bis zu 20% der Kosten sparen. Bei einem 30.000€ Projekt sind das bis zu 6.000€!
              </p>
              <a href="/ratgeber/foerderung" className="inline-flex items-center gap-2 text-blue-800 font-bold hover:underline">
                Zum Förderungsratgeber <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="bg-primary text-white rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold mb-4">Kostenloses Angebot in 24 Stunden</h3>
              <p className="text-white/90 mb-6">Wir erstellen Ihnen ein unverbindliches Festpreis-Angebot – ohne versteckte Kosten.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/beratung">
                  <Button size="lg" variant="secondary" data-testid="button-angebot-cta">
                    Angebot anfordern <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </a>
                <a href="/rueckruf">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    <Phone className="h-5 w-5 mr-2" /> Rückruf anfordern
                  </Button>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <LeadFunnel />
      <RelatedServices currentPage="ratgeber" relatedIds={["dachsanierung", "energieberatung", "referenzen", "beratung"]} />
      <Contact />
      <Footer />
    </div>
  );
}
