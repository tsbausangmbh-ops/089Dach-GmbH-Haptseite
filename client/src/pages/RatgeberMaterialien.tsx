import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, X, Home, Warehouse, Award, ThumbsUp, ThumbsDown } from "lucide-react";
import LeadFunnel from "@/components/LeadFunnel";
import SEO, { BreadcrumbSchema, FAQPageSchema, ArticleSchema } from "@/components/SEO";
import RelatedServices from "@/components/RelatedServices";
import BackButton from "@/components/BackButton";

export default function RatgeberMaterialien() {
  const materialien = [
    {
      name: "Tondachziegel",
      bild: "🏠",
      lebensdauer: "60-100 Jahre",
      preisKlasse: "Mittel-Hoch",
      preisRange: "35-80 €/m²",
      vorteile: ["Natürlich & nachhaltig", "Exzellente Haltbarkeit", "Schöne Patina", "Gute Wärmedämmung"],
      nachteile: ["Schwer (Statik prüfen)", "Höhere Kosten", "Bruchgefahr bei Begehung"],
      ideal: "Klassische Einfamilienhäuser, Altbau, Denkmalschutz"
    },
    {
      name: "Betondachstein",
      bild: "🏘️",
      lebensdauer: "40-60 Jahre",
      preisKlasse: "Günstig",
      preisRange: "20-40 €/m²",
      vorteile: ["Preisgünstig", "Robust", "Viele Farben", "Leichter als Ton"],
      nachteile: ["Weniger langlebig als Ton", "Kann verblassen", "Weniger edel"],
      ideal: "Budget-orientierte Projekte, Reihenhäuser"
    },
    {
      name: "Schiefer",
      bild: "🏰",
      lebensdauer: "100+ Jahre",
      preisKlasse: "Premium",
      preisRange: "80-150 €/m²",
      vorteile: ["Extrem langlebig", "Edel & zeitlos", "Denkmalschutz-geeignet", "Naturprodukt"],
      nachteile: ["Sehr teuer", "Aufwändige Verlegung", "Spezialisten erforderlich"],
      ideal: "Villen, Denkmalschutz, Altbauten, repräsentative Gebäude"
    },
    {
      name: "Metalleindeckung",
      bild: "🏭",
      lebensdauer: "50-80 Jahre",
      preisKlasse: "Mittel-Hoch",
      preisRange: "40-100 €/m²",
      vorteile: ["Sehr leicht", "Sturmsicher", "Wartungsarm", "Recycelbar"],
      nachteile: ["Kann bei Regen laut sein", "Optik nicht für jeden", "Kondensation beachten"],
      ideal: "Flachdächer, Modernisierung, Gewerbe, zeitgenössische Architektur"
    },
    {
      name: "Biberschwanz",
      bild: "🏡",
      lebensdauer: "80-100 Jahre",
      preisKlasse: "Hoch",
      preisRange: "50-90 €/m²",
      vorteile: ["Traditionelles Aussehen", "Sehr langlebig", "Passend zu Altbauten", "Denkmalschutz"],
      nachteile: ["Teuer", "Schwer", "Nur für Steildach"],
      ideal: "Historische Gebäude, Bayern-typische Architektur"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title={`Dachziegel Vergleich 2025 | Ton, Beton, Schiefer, Metall`}
        description={`Welche Dachziegel sind die besten? Vergleich: Tondachziegel, Betondachstein, Schiefer, Metall. Lebensdauer, Kosten, Vor-/Nachteile. Tel: 089 12621964`}
        canonical={`https://089dach.de/ratgeber/materialien`}
        keywords={`dachziegel vergleich, tondachziegel vs betondachstein, schiefer dach kosten, metalldach vorteile, welche dachziegel sind die besten, biberschwanz ziegel preis, dacheindeckung material wahl, welcher dachziegel für altbau, denkmalschutz dachziegel münchen, engobierte dachziegel vorteile, glasierte dachziegel preis erfahrungen, dachziegel farbe wählen, dachziegel lebensdauer faktoren, dachziegel gewicht pro qm, dachziegel sturmsicher befestigen, dachziegel frostsicher kaufen, dachziegel marken vergleich, braas dachziegel erfahrungen, creaton dachziegel qualität, erlus dachziegel münchen, dachziegel recyceln möglich, ökologische dachziegel nachhaltig`}
        aiSummary="089Dach GmbH: Ehrlicher Dachziegel-Vergleich ohne Verkaufsdruck. Tondachziegel (35-80€/m², 60-100 Jahre), Betondachstein (20-40€/m², 40-60 Jahre), Schiefer (80-150€/m², 100+ Jahre), Metalleindeckung (40-100€/m², 50-80 Jahre). Kostenlose Materialberatung in München."
      />
      <ArticleSchema 
        headline="Dachziegel Vergleich 2025: Ton, Beton, Schiefer, Metall"
        description="Ehrlicher Vergleich aller Dacheindeckungsmaterialien: Lebensdauer, Kosten, Vor- und Nachteile."
        datePublished="2025-01-01"
        dateModified="2025-12-19"
        keywords={["Dachziegel Vergleich", "Tondachziegel", "Betondachstein", "Schiefer", "Metalldach"]}
      />
      <FAQPageSchema faqs={[
        { question: "Welche Dachziegel sind die besten?", answer: "Es gibt keine universell 'besten' Dachziegel. Tondachziegel bieten die beste Langzeitinvestition (60-100 Jahre). Betondachsteine sind am günstigsten. Schiefer ist ideal für Denkmalschutz. Metalleindeckung eignet sich für Flachdächer und moderne Architektur." },
        { question: "Was kostet eine Dacheindeckung pro Quadratmeter?", answer: "Die Materialkosten variieren stark: Betondachstein 20-40€/m², Tondachziegel 35-80€/m², Metalleindeckung 40-100€/m², Biberschwanz 50-90€/m², Schiefer 80-150€/m². Hinzu kommen Arbeitskosten von ca. 30-50€/m²." },
        { question: "Wie lange halten Dachziegel?", answer: "Die Lebensdauer variiert: Betondachsteine 40-60 Jahre, Tondachziegel 60-100 Jahre, Biberschwanz 80-100 Jahre, Metalleindeckung 50-80 Jahre, Schiefer 100+ Jahre. Regelmäßige Wartung verlängert die Lebensdauer erheblich." },
        { question: "Welche Dachziegel für Altbau und Denkmalschutz?", answer: "Für Altbauten und denkmalgeschützte Gebäude eignen sich Tondachziegel, Biberschwanz oder Schiefer am besten. Diese traditionellen Materialien sind von Denkmalschutzbehörden akzeptiert und fügen sich harmonisch ins Stadtbild ein." },
        { question: "Sind Metalldächer laut bei Regen?", answer: "Moderne Metalldächer mit ordnungsgemäßer Dämmung sind nicht lauter als andere Eindeckungen. Die Geräuschentwicklung hängt von der Unterkonstruktion und Dämmung ab. Bei Altbau-Modernisierung sollte die Akustik aber berücksichtigt werden." },
        { question: "Welcher Dachziegel spart am meisten Energie?", answer: "Die Energieeffizienz hängt weniger vom Ziegel als von der Dämmung ab. Tondachziegel bieten natürliche Wärmedämmung. Wichtiger ist eine fachgerechte Aufsparren- oder Zwischensparrendämmung, die wir gerne mitplanen." }
      ]} />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Ratgeber", url: "/ratgeber" }, { name: "Materialien", url: "/ratgeber/materialien" }]} />
      <Navbar />
      
      <section className="pt-6 pb-8 md:pt-10 md:pb-12 bg-secondary relative overflow-hidden min-h-[35vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/80"></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
          <div className="max-w-5xl text-white">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <Home className="h-5 w-5 text-primary" />
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Material-Ratgeber</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 md:mb-6">
              Welches Dachmaterial passt zu Ihnen?
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-xl mb-4 md:mb-6">
              Ton, Beton, Schiefer oder Metall? Ein ehrlicher Vergleich ohne Verkaufsdruck.
            </p>
            <a href="/beratung">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" data-testid="button-beratung-hero">
                Materialberatung anfordern <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <BackButton />

      <section className="py-3 md:py-4">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-4">Materialvergleich auf einen Blick</h2>
              <p className="text-muted-foreground">
                Jedes Material hat seine Stärken. Die richtige Wahl hängt von Ihrem Budget, dem Gebäudetyp und Ihren persönlichen Vorlieben ab.
              </p>
            </div>

            <div className="space-y-6 mb-12">
              {materialien.map((material, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                  <div className="bg-secondary/5 p-4 md:p-6 border-b border-gray-100">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="flex items-center gap-4">
                        <span className="text-4xl">{material.bild}</span>
                        <div>
                          <h3 className="text-xl font-bold text-secondary">{material.name}</h3>
                          <p className="text-sm text-muted-foreground">{material.ideal}</p>
                        </div>
                      </div>
                      <div className="flex gap-4 text-sm">
                        <div className="text-center">
                          <p className="text-muted-foreground">Lebensdauer</p>
                          <p className="font-bold text-primary">{material.lebensdauer}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-muted-foreground">Preis/m²</p>
                          <p className="font-bold text-primary">{material.preisRange}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                        <ThumbsUp className="h-5 w-5" />Vorteile
                      </h4>
                      <ul className="space-y-2">
                        {material.vorteile.map((v, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />{v}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-700 mb-3 flex items-center gap-2">
                        <ThumbsDown className="h-5 w-5" />Nachteile
                      </h4>
                      <ul className="space-y-2">
                        {material.nachteile.map((n, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <X className="h-4 w-4 text-amber-600" />{n}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-primary/5 rounded-xl p-6 border border-primary/20 mb-8">
              <h2 className="text-xl font-heading font-bold text-secondary mb-4 flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />Unsere Empfehlung
              </h2>
              <div className="space-y-4">
                {[
                  { situation: "Best Preis-Leistung", empfehlung: "Betondachstein – günstig, robust, 40+ Jahre Lebensdauer" },
                  { situation: "Langzeit-Investment", empfehlung: "Tondachziegel – 60-100 Jahre, natürliche Patina, wertsteigernd" },
                  { situation: "Denkmalschutz / Luxus", empfehlung: "Schiefer oder Biberschwanz – 100+ Jahre, zeitlose Eleganz" },
                  { situation: "Flachdach / Modern", empfehlung: "Metalleindeckung – leicht, sturmsicher, wartungsarm" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-secondary">{item.situation}:</span>
                      <span className="text-muted-foreground ml-1">{item.empfehlung}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-stone-50 rounded-xl p-6 border border-stone-200 mb-8">
              <h2 className="text-xl font-heading font-bold text-secondary mb-3">Weitere hilfreiche Ratgeber</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="/ratgeber/kosten" className="flex items-center gap-2 p-3 bg-white rounded-lg border border-stone-200 hover:border-primary/30 transition-colors" data-testid="link-ratgeber-kosten">
                  <span className="text-primary font-bold">→</span>
                  <span className="text-muted-foreground text-sm">Was kostet Dachsanierung?</span>
                </a>
                <a href="/ratgeber/daemmung" className="flex items-center gap-2 p-3 bg-white rounded-lg border border-stone-200 hover:border-primary/30 transition-colors" data-testid="link-ratgeber-daemmung">
                  <span className="text-primary font-bold">→</span>
                  <span className="text-muted-foreground text-sm">Dachdämmung: Kosten & Förderung</span>
                </a>
              </div>
            </div>

            <div className="bg-primary text-white rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold mb-4">Welches Material passt zu Ihrem Haus?</h3>
              <p className="text-white/90 mb-6">Wir beraten Sie vor Ort – kostenlos und unverbindlich. Gemeinsam finden wir die perfekte Lösung.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/beratung">
                  <Button size="lg" variant="secondary" data-testid="button-material-cta">
                    Beratung anfordern <ArrowRight className="h-5 w-5 ml-2" />
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
      <RelatedServices currentPage="ratgeber" relatedIds={["bedachungen", "dachsanierung", "referenzen", "beratung"]} />
      <Contact 
        title="Welches Dachmaterial passt zu Ihrem Haus?"
        description="Wir beraten Sie zu allen Materialien – von Tonziegel über Schiefer bis Metall. Kostenlos und unverbindlich."
      />
      <Footer />
    </div>
  );
}
