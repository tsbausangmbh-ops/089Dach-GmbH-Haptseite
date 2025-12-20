import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, Euro, ArrowRight, FileText, AlertTriangle, Lightbulb, Award } from "lucide-react";
import LeadFunnel from "@/components/LeadFunnel";
import SEO, { BreadcrumbSchema, FAQPageSchema, ArticleSchema } from "@/components/SEO";
import RelatedServices from "@/components/RelatedServices";

export default function RatgeberFoerderung() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title={`Dach Förderung 2025 | KfW & BAFA bis 20% Zuschuss München`}
        description={`Dachsanierung Förderung 2025: KfW 261 bis 150.000€ Kredit, BAFA 15-20% Zuschuss für Dachdämmung. Welche Förderung für Sie? Kostenlose Beratung vom Meisterbetrieb. Tel: 089 12621964`}
        canonical={`https://089dach.de/ratgeber/foerderung`}
        keywords={`dachsanierung förderung 2025 bayern, kfw förderung dach 2025, bafa zuschuss dachdämmung münchen, förderung energetische sanierung dach, kfw 261 dach voraussetzungen, bafa einzelmaßnahme dach, kfw tilgungszuschuss dachsanierung, isfp individueller sanierungsfahrplan, förderantrag dachsanierung, energieberater dach münchen, kfw 261 antrag richtig stellen, bafa antrag vor auftrag, förderung abgelehnt was tun, isfp bonus 5 prozent sichern, energieberater kosten erstattung, förderung kombinieren kfw bafa, steuerbonus sanierung 35c, gemeinde förderung dachsanierung, landesförderung bayern dach, förderung reihenfolge beachten, fördernachweis einreichen frist, rückzahlung förderung vermeiden, förderung eigentümergemeinschaft dach`}
        aiSummary="Dachsanierung Förderung 2025: KfW 261 bietet bis 150.000€ Kredit mit Tilgungszuschuss bis 45% für Effizienzhaus-Sanierung. BAFA zahlt 15-20% Zuschuss für Einzelmaßnahme Dachdämmung (max. 6.000€). Voraussetzung: U-Wert ≤ 0,14 W/(m²K), dena-zertifizierter Energieberater, Antrag VOR Auftragserteilung. Durchschnittliche Förderung für 089Dach-Kunden: 12.000€. Kostenlose Förderberatung bei 089Dach GmbH München. Tel: 089 12621964."
      />
      <FAQPageSchema faqs={[
        { question: "Welche Förderung gibt es 2025 für Dachsanierung?", answer: "2025 gibt es KfW 261 (Kredit bis 150.000€ mit Tilgungszuschuss bis 45%) und BAFA Einzelmaßnahme (15-20% Zuschuss für Dachdämmung). Bei Heizungstausch kommt KfW 458 mit bis zu 30% Zuschuss hinzu." },
        { question: "Wie hoch ist der BAFA-Zuschuss für Dachdämmung?", answer: "BAFA zahlt 15% Zuschuss auf förderfähige Kosten. Mit individuellem Sanierungsfahrplan (iSFP) erhöht sich der Zuschuss auf 20%. Bei max. 30.000€ förderfähigen Kosten sind das bis zu 6.000€ Zuschuss." },
        { question: "Wann muss ich den Förderantrag stellen?", answer: "Der Förderantrag muss IMMER vor Auftragserteilung gestellt werden. Erst nach schriftlicher Bewilligung darf der Auftrag erteilt werden. Rückwirkende Förderung ist nicht möglich." },
        { question: "Brauche ich einen Energieberater für die Förderung?", answer: "Ja, für BAFA-Förderung ist ein dena-zertifizierter Energieberater Pflicht. Dieser erstellt den individuellen Sanierungsfahrplan (iSFP) und bestätigt, dass die technischen Anforderungen (U-Wert) eingehalten werden." },
        { question: "Welchen U-Wert muss mein Dach nach der Sanierung haben?", answer: "Für BAFA-Förderung muss das Dach einen U-Wert von max. 0,14 W/(m²K) erreichen. Das entspricht etwa 24-28 cm Dämmstoffdicke je nach Material. Wir beraten Sie zur optimalen Dämmstärke." },
        { question: "Kann ich KfW und BAFA kombinieren?", answer: "Für dieselbe Maßnahme nicht, aber verschiedene Maßnahmen können kombiniert werden. Beispiel: BAFA für Dachdämmung + KfW 458 für Heizungstausch. Wir optimieren Ihre Förderkombination." }
      ]} />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Ratgeber", url: "/ratgeber" }, { name: "Förderung", url: "/ratgeber/foerderung" }]} />
      <ArticleSchema 
        headline="Dachsanierung Förderung 2025: KfW & BAFA Zuschüsse München"
        description="Kompletter Überblick: KfW 261, BAFA Einzelmaßnahme, Tilgungszuschüsse und iSFP-Bonus für Ihre Dachsanierung."
        datePublished="2025-01-01"
        dateModified="2025-12-19"
        keywords={["KfW Förderung Dach", "BAFA Zuschuss Dachdämmung", "Förderung 2025", "Energetische Sanierung", "München"]}
      />
      <Navbar />
      
      <section className="pt-6 pb-8 md:pt-10 md:pb-12 bg-secondary relative overflow-hidden min-h-[35vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/80"></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl text-white">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <Euro className="h-5 w-5 text-primary" />
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Förder-Ratgeber 2025</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 md:mb-6">
              Förderung für Ihr Dach – bis zu 20% Zuschuss
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-xl mb-4 md:mb-6">
              KfW, BAFA & Co. – welche Förderung passt zu Ihnen? Wir klären auf.
            </p>
            <a href="/beratung">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" data-testid="button-beratung-hero">
                Förderberatung anfordern <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-3 md:py-4">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white rounded-lg p-2">
                    <FileText className="h-6 w-6" />
                  </div>
                  <h2 className="text-xl font-bold text-blue-800">KfW-Förderung</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-blue-800">KfW 261 – Kredit</h4>
                    <ul className="text-sm text-blue-700 space-y-1 mt-2">
                      <li>• Bis zu 150.000 € Kredit pro Wohneinheit</li>
                      <li>• Zinssatz ab 0,01 %</li>
                      <li>• Tilgungszuschuss bis 45 %</li>
                      <li>• Für Effizienzhaus-Standard</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-800">KfW 458 – Zuschuss (ab 2024)</h4>
                    <ul className="text-sm text-blue-700 space-y-1 mt-2">
                      <li>• Bis zu 30 % Zuschuss für Heizungstausch</li>
                      <li>• Kombinierbar mit Dachsanierung</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-600 text-white rounded-lg p-2">
                    <Euro className="h-6 w-6" />
                  </div>
                  <h2 className="text-xl font-bold text-green-800">BAFA-Förderung</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-green-800">Einzelmaßnahme Dämmung</h4>
                    <ul className="text-sm text-green-700 space-y-1 mt-2">
                      <li>• 15 % Zuschuss auf förderfähige Kosten</li>
                      <li>• +5 % mit individuellem Sanierungsfahrplan (iSFP)</li>
                      <li>• Max. 30.000 € förderfähige Kosten</li>
                      <li>• = bis zu 6.000 € Zuschuss</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-green-800">Voraussetzung</h4>
                    <ul className="text-sm text-green-700 space-y-1 mt-2">
                      <li>• U-Wert ≤ 0,14 W/(m²K) für Dach</li>
                      <li>• Energieberater erforderlich</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 rounded-xl p-6 border border-primary/20 mb-8">
              <h2 className="text-xl font-heading font-bold text-secondary mb-4 flex items-center gap-2">
                <Lightbulb className="h-6 w-6 text-primary" />Welche Förderung passt zu Ihnen?
              </h2>
              <div className="space-y-4">
                {[
                  { situation: "Nur Dachdämmung geplant", empfehlung: "BAFA Einzelmaßnahme (15-20% Zuschuss)", ideal: "Einfach, schnell, direkt" },
                  { situation: "Komplettsanierung zum Effizienzhaus", empfehlung: "KfW 261 Kredit mit Tilgungszuschuss", ideal: "Maximale Förderung bei großen Projekten" },
                  { situation: "Heizungstausch + Dachsanierung", empfehlung: "KfW 458 + BAFA kombinieren", ideal: "Synergieeffekte nutzen" },
                  { situation: "Denkmalschutz", empfehlung: "Sonderprogramme + erhöhter BAFA-Satz", ideal: "Spezielle Bedingungen beachten" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4 border border-gray-100">
                    <h4 className="font-bold text-secondary">{item.situation}</h4>
                    <p className="text-primary font-medium">{item.empfehlung}</p>
                    <p className="text-sm text-muted-foreground">{item.ideal}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 mb-8">
              <h2 className="text-xl font-heading font-bold text-amber-800 mb-4 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6" />Häufige Fehler vermeiden
              </h2>
              <ul className="space-y-3">
                {[
                  { fehler: "Antrag zu spät stellen", loesung: "Förderantrag MUSS vor Auftragserteilung gestellt werden!" },
                  { fehler: "Falschen Energieberater wählen", loesung: "Nur dena-zertifizierte Energieberater werden akzeptiert." },
                  { fehler: "U-Wert nicht einhalten", loesung: "Dämmstärke mit Energieberater abstimmen, sonst keine Förderung." },
                  { fehler: "Fristen verpassen", loesung: "Verwendungsnachweis innerhalb von 6 Monaten nach Abschluss einreichen." },
                  { fehler: "Eigenleistung ansetzen", loesung: "Nur Fachbetrieb-Leistungen sind förderfähig." }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-amber-800">{item.fehler}:</span>
                      <span className="text-amber-700 ml-1">{item.loesung}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-secondary/5 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-heading font-bold text-secondary mb-4 flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />So läuft die Förderung ab
              </h2>
              <ol className="space-y-4">
                {[
                  { schritt: "1", titel: "Beratung", desc: "Kostenlose Erstberatung bei uns – wir prüfen Ihre Fördermöglichkeiten." },
                  { schritt: "2", titel: "Energieberater", desc: "Unser Partner-Energieberater erstellt den iSFP (individueller Sanierungsfahrplan)." },
                  { schritt: "3", titel: "Antrag stellen", desc: "Förderantrag bei BAFA/KfW BEVOR der Auftrag erteilt wird." },
                  { schritt: "4", titel: "Bewilligung abwarten", desc: "Erst nach Zusage der Förderung Auftrag erteilen." },
                  { schritt: "5", titel: "Sanierung durchführen", desc: "Wir führen die Arbeiten fachgerecht durch." },
                  { schritt: "6", titel: "Nachweis einreichen", desc: "Verwendungsnachweis + Rechnung bei der Förderstelle einreichen." }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                      {item.schritt}
                    </span>
                    <div>
                      <h4 className="font-bold text-secondary">{item.titel}</h4>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-stone-50 rounded-xl p-6 border border-stone-200 mb-8">
              <h2 className="text-xl font-heading font-bold text-secondary mb-3">Was kostet die Sanierung überhaupt?</h2>
              <p className="text-muted-foreground mb-4">
                Bevor Sie Förderung beantragen, sollten Sie wissen, mit welchen Kosten zu rechnen ist. Unser Kostenratgeber zeigt aktuelle Preise für München.
              </p>
              <a href="/ratgeber/kosten" className="inline-flex items-center gap-2 text-primary font-bold hover:underline" data-testid="link-ratgeber-kosten">
                Zum Kostenratgeber <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="bg-primary text-white rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold mb-4">Förderberatung – kostenlos & unverbindlich</h3>
              <p className="text-white/90 mb-6">Wir prüfen Ihre Fördermöglichkeiten und helfen beim Antrag. Im Schnitt holen wir 12.000€ für unsere Kunden.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/beratung">
                  <Button size="lg" variant="secondary" data-testid="button-foerder-cta">
                    Förderberatung anfordern <ArrowRight className="h-5 w-5 ml-2" />
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
      <RelatedServices currentPage="ratgeber" relatedIds={["energieberatung", "dachsanierung", "daemmung", "referenzen"]} />
      <Contact />
      <Footer />
    </div>
  );
}
