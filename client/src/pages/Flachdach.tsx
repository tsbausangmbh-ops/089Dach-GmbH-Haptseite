import Navbar from "@/components/Navbar";
import AIBeraterSection from "@/components/AIBeraterSection";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, Shield, Clock, Award, ArrowRight, Droplets, Thermometer, Wrench, Layers } from "lucide-react";
import LeadFunnel from "@/components/LeadFunnel";
import SEO, { BreadcrumbSchema, ProductServiceSchema, FAQPageSchema, LocalBusinessSchema } from "@/components/SEO";
import RelatedServices from "@/components/RelatedServices";
import ImageGallery from "@/components/ImageGallery";
import AIEnhancedFAQ from "@/components/AIEnhancedFAQ";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import CTACluster from "@/components/CTACluster";
import ProofStack from "@/components/ProofStack";
import flachdachImg1 from "@assets/generated_images/flat_roof_bitumen_detail_with_texture.png";
import flachdachImg2 from "@assets/generated_images/flat_green_roof_with_natural_variations.png";
import flachdachImg3 from "@assets/generated_images/realistic_damaged_flat_roof_before.png";
import flachdachImg4 from "@assets/generated_images/realistic_garage_epdm_roof_after.png";

export default function Flachdach() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title="Flachdach abdichten München | EPDM & Bitumen ab 85€/m²"
        description="Flachdach undicht? Abdichtung ab 85€/m² mit 10 Jahren Garantie. ✓ EPDM ✓ Bitumen ✓ Begrünung. Meisterbetrieb München ☎ 089 12621964"
        canonical="https://089dach.de/leistungen/flachdach"
        keywords="flachdach abdichten münchen kosten, flachdach undicht was tun, flachdach sanierung preis pro qm, epdm abdichtung erfahrungen, bitumenbahn verlegen lassen, flachdach begrünung förderung münchen, flachdachdämmung aufdach, flachdach lebensdauer erwarten, flachdach obermenzing pasing laim, flachdach garage abdichten kosten, flachdach carport sanieren preis, flüssigkunststoff abdichtung flachdach, gefälle flachdach nachträglich erstellen, attika flachdach abdichten reparieren, flachdach tropft bei regen hilfe, wasserpfütze flachdach ursache, flachdach entwässerung verstopft, flachdach terrassenbelag verlegen, flachdach kies oder begrünung, extensive dachbegrünung kosten münchen, flachdach photovoltaik kombination, warmdach kaltdach unterschied, dampfsperre flachdach erneuern"
        aiSummary="089Dach GmbH saniert Flachdächer in München ab 85€/m². EPDM, Bitumen, Flüssigabdichtung und Begrünung. 10 Jahre Garantie. Meisterbetrieb seit 1998. Telefon: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Leistungen", url: "/leistungen" }, { name: "Flachdach", url: "/leistungen/flachdach" }]} />
      <ProductServiceSchema 
        name="Flachdach-Sanierung München"
        description="Professionelle Flachdach-Abdichtung mit EPDM, Bitumen oder Flüssigkunststoff. 10 Jahre Garantie."
        priceFrom={85}
        priceTo={180}
        priceUnit="pro m²"
        category="Flachdach"
      />
      <FAQPageSchema faqs={[
        { question: "Was kostet Flachdach abdichten pro m²?", answer: "Flachdach-Abdichtung kostet ab 85€/m² mit Bitumen, ab 95€/m² mit EPDM oder Kunststoff. Mit Dämmung ab 180€/m². Garage (20m²) ca. 2.000-2.500€." },
        { question: "Welche Abdichtung ist besser: EPDM oder Bitumen?", answer: "EPDM hält länger (40+ Jahre), ist elastischer und UV-beständiger. Bitumen ist günstiger und bewährt (25-30 Jahre). Für Garagen reicht Bitumen, für Wohngebäude empfehlen wir EPDM." },
        { question: "Wie lange hält ein Flachdach?", answer: "Mit guter Pflege: Bitumen 25-30 Jahre, EPDM/Kunststoff 40+ Jahre. Regelmäßige Wartung (Abflüsse reinigen, Kontrolle) verlängert die Lebensdauer erheblich." },
        { question: "Kann man ein Flachdach selbst abdichten?", answer: "Kleine Reparaturen mit Flüssigkunststoff sind möglich. Für komplette Abdichtungen empfehlen wir den Fachmann - Fehler führen zu teuren Wasserschäden." },
        { question: "Was tun wenn das Flachdach tropft?", answer: "Sofort Eimer unterstellen, Wasserquelle fotografieren und uns anrufen: 089 12621964. Wir kommen zur Notabdichtung und verhindern größere Schäden." },
        { question: "Was kostet Flachdach-Begrünung in München?", answer: "Extensive Begrünung (Sedum) kostet 40-80€/m², intensive Begrünung (begehbar) 100-200€/m². München fördert Dachbegrünung mit bis zu 50€/m² über das Klimaschutzprogramm. Wir unterstützen beim Antrag." },
        { question: "Kann ich auf mein Flachdach eine Photovoltaik-Anlage montieren?", answer: "Ja! Flachdächer eignen sich ideal für PV-Anlagen mit optimaler Südausrichtung. Die Abdichtung muss intakt sein. Bei Sanierung berücksichtigen wir Durchdringungen für Kabelführungen. Aufgeständerte Module schonen die Abdichtung." },
        { question: "Wie oft muss ein Flachdach in München gewartet werden?", answer: "Mindestens 2x jährlich: Im Frühjahr nach Frost und im Herbst vor dem Winter. Wichtig: Abläufe und Notüberläufe reinigen, Anschlüsse prüfen. Wir bieten Wartungsverträge ab 180€/Jahr an." }
      ]} />
      <LocalBusinessSchema />
      <Navbar />
      <AIBeraterSection />
      
      <section className="pt-6 pb-8 md:pt-10 md:pb-12 bg-secondary relative overflow-hidden min-h-[35vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/80"></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl text-white">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <Layers className="h-5 w-5 text-primary" />
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Flachdach-Experten</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 md:mb-6">
              Flachdach München
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-xl mb-4 md:mb-6">
              Professionelle Flachdach-Abdichtung, Sanierung und Dämmung – von Ihrem Meisterbetrieb.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/rueckruf">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" data-testid="button-anrufen-hero">
                  <Phone className="h-5 w-5 mr-2" /> Rückruf anfordern
                </Button>
              </a>
              <a href="/kontakt">
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
            <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-primary" />10 Jahre Garantie</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" />Schnelle Ausführung</span>
            <span className="flex items-center gap-2"><Award className="h-4 w-4 text-primary" />Meisterbetrieb</span>
          </div>
        </div>
      </div>

      <section className="py-3 md:py-4">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-4">Flachdach-Service aus einer Hand</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Flachdächer erfordern besondere Expertise. Ob Neubau, Sanierung oder Reparatur – wir bieten Ihnen 
                  professionelle Lösungen für alle Flachdach-Typen: Bitumenbahnen, Kunststoffbahnen (PVC, EPDM), 
                  Flüssigabdichtung und mehr.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Unser erfahrenes Team arbeitet mit modernsten Materialien und Techniken, um Ihr Flachdach 
                  langfristig vor Witterung zu schützen.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: Droplets, title: "Abdichtung", desc: "Bitumen, PVC, EPDM, Flüssigkunststoff" },
                  { icon: Thermometer, title: "Dämmung", desc: "Aufdachdämmung nach EnEV/GEG" },
                  { icon: Wrench, title: "Sanierung", desc: "Komplettsanierung oder Teilreparatur" },
                  { icon: Layers, title: "Begrünung", desc: "Extensiv- und Intensivbegrünung" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                    <item.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-secondary mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                <h3 className="text-xl font-heading font-bold text-secondary mb-4">Unsere Flachdach-Leistungen</h3>
                <ul className="space-y-3">
                  {[
                    "Bitumenbahnen-Verlegung (Kalt- und Heißverfahren)",
                    "Kunststoff-Dachbahnen (PVC, EPDM, TPO)",
                    "Flüssigabdichtung für komplexe Formen",
                    "Aufdachdämmung nach GEG 2024",
                    "Dachbegrünung (extensiv/intensiv)",
                    "Dachentwässerung und Notüberläufe",
                    "Lichtkuppeln und Oberlichter",
                    "Wartung und Inspektion"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-secondary/5 rounded-xl p-6">
                <h3 className="text-xl font-heading font-bold text-secondary mb-4">Preise Flachdach (Richtwerte)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { leistung: "Bitumenabdichtung", preis: "ab 85 €/m²" },
                    { leistung: "EPDM-Abdichtung", preis: "ab 95 €/m²" },
                    { leistung: "Flüssigabdichtung", preis: "ab 75 €/m²" },
                    { leistung: "Komplettsanierung inkl. Dämmung", preis: "ab 180 €/m²" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-white rounded-lg p-3">
                      <span className="text-muted-foreground">{item.leistung}</span>
                      <span className="font-bold text-primary">{item.preis}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">* Endpreise nach kostenloser Vor-Ort-Besichtigung</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-primary text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Kostenlose Beratung</h3>
                <p className="text-white/90 mb-6">Wir beraten Sie vor Ort und erstellen ein unverbindliches Angebot.</p>
                <a href="/beratung" className="block">
                  <Button size="lg" variant="secondary" className="w-full" data-testid="button-beratung-sidebar">
                    Termin vereinbaren <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </a>
                <a href="/rueckruf" className="block mt-3">
                  <Button size="lg" variant="outline" className="w-full border-white text-white hover:bg-white hover:text-primary" data-testid="button-anrufen-sidebar">
                    <Phone className="h-4 w-4 mr-2" /> Rückruf anfordern
                  </Button>
                </a>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-bold text-secondary mb-4">Warum 089Dach?</h4>
                <ul className="space-y-3">
                  {["Meisterbetrieb seit 1998", "10 Jahre Garantie", "Alle Abdichtungssysteme", "Fördermittelberatung", "Festpreisgarantie"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImageGallery 
        title="Unsere Flachdach-Projekte"
        columns={2}
        images={[
          { src: flachdachImg1, alt: "Bitumenabdichtung Flachdach Detailansicht", caption: "Professionelle Bitumenabdichtung" },
          { src: flachdachImg2, alt: "Begrüntes Flachdach mit natürlicher Vegetation", caption: "Extensive Dachbegrünung" },
          { src: flachdachImg3, alt: "Beschädigtes Flachdach vor der Sanierung", caption: "Vorher: Undichtes Flachdach" },
          { src: flachdachImg4, alt: "Saniertes Garagendach mit EPDM-Abdichtung", caption: "Nachher: EPDM-Abdichtung Garage" }
        ]}
      />

      <ProblemSolutionSection
        sectionTitle="Erkennen Sie Ihr Problem?"
        problemTitle="Typische Flachdach-Probleme"
        solutionTitle="Unsere Lösung für Sie"
        problems={[
          { symptom: "Wasserpfützen stehen auf dem Flachdach", risk: "Undichtigkeiten und beschleunigte Alterung der Abdichtung" },
          { symptom: "Blasen oder Wellen in der Abdichtung", risk: "Unter der Blase sammelt sich Feuchtigkeit und zerstört die Dämmung" },
          { symptom: "Wasser tropft bei Regen durch die Decke", risk: "Schimmelbildung und teure Schäden an der Bausubstanz" },
          { symptom: "Verstopfte Abläufe oder Notüberläufe", risk: "Bei Starkregen läuft Wasser über die Attika ins Mauerwerk" }
        ]}
        solutions={[
          { title: "Professionelle Leckortung", description: "Wir finden die undichte Stelle mit modernen Messgeräten" },
          { title: "EPDM oder Bitumen – je nach Bedarf", description: "Wir wählen das beste System für Ihr Dach" },
          { title: "Gefälle nachträglich erstellen", description: "Damit Wasser zukünftig richtig abläuft" },
          { title: "10 Jahre Garantie", description: "Auf alle Abdichtungsarbeiten geben wir schriftlich Garantie" }
        ]}
        urgencyMessage="Flachdach-Schäden werden schnell teuer – handeln Sie bevor der Winter kommt!"
      />

      <CTACluster 
        variant="primary" 
        title="Flachdach dicht – garantiert!" 
        subtitle="Kostenlose Beratung · Alle Abdichtungssysteme · 10 Jahre Garantie"
      />

      <AIEnhancedFAQ
        title="Häufige Fragen zum Flachdach"
        faqs={[
          {
            question: "Was kostet Flachdach abdichten pro m²?",
            shortAnswer: "Ab 85€/m² mit Bitumen, ab 95€/m² mit EPDM.",
            details: "Flachdach-Abdichtung kostet ab 85€/m² mit Bitumen, ab 95€/m² mit EPDM oder Kunststoff. Mit Dämmung ab 180€/m². Für eine Garage (20m²) rechnen Sie mit ca. 2.000-2.500€. Der genaue Preis hängt von Zustand und Zugänglichkeit ab.",
            priceRange: "Garage 2.000–2.500€",
            localReference: "In München und Umgebung führen wir wöchentlich Flachdachsanierungen durch.",
            nextStep: "Kostenloses Angebot anfordern →"
          },
          {
            question: "Welche Abdichtung ist besser: EPDM oder Bitumen?",
            shortAnswer: "EPDM hält länger (40+ Jahre), Bitumen ist günstiger.",
            details: "EPDM hält länger (40+ Jahre), ist elastischer und UV-beständiger. Bitumen ist günstiger und bewährt (25-30 Jahre). Für Garagen reicht Bitumen, für Wohngebäude empfehlen wir EPDM. Wir beraten Sie zur optimalen Lösung.",
            localReference: "Bei Münchner Flachdächern setzen wir meist auf EPDM wegen der extremen Temperaturschwankungen.",
            nextStep: "Material-Beratung anfordern →"
          },
          {
            question: "Was tun wenn das Flachdach tropft?",
            shortAnswer: "Sofort Eimer unterstellen und uns anrufen: 089 12621964.",
            details: "Sofort Eimer unterstellen, Wasserquelle fotografieren und uns anrufen. Wir kommen zur Notabdichtung und verhindern größere Schäden. Oft können wir eine provisorische Abdichtung am selben Tag durchführen.",
            priceRange: "Notabdichtung ab 195€",
            localReference: "Unser Notdienst ist in München in 1-2 Stunden vor Ort.",
            nextStep: "Notdienst anrufen: 089 12621964 →"
          },
          {
            question: "Was kostet Flachdach-Begrünung in München?",
            shortAnswer: "Extensive Begrünung 40-80€/m², bis zu 50€/m² Förderung möglich.",
            details: "Extensive Begrünung (Sedum) kostet 40-80€/m², intensive Begrünung (begehbar) 100-200€/m². München fördert Dachbegrünung mit bis zu 50€/m² über das Klimaschutzprogramm. Wir unterstützen Sie beim Förderantrag.",
            priceRange: "40–200€/m²",
            localReference: "Dachbegrünungen sind in München durch die Förderung sehr attraktiv geworden.",
            nextStep: "Begrünungs-Beratung anfragen →"
          }
        ]}
      />

      <ProofStack title="Warum 089Dach für Ihr Flachdach?" />

      <LeadFunnel />
      <RelatedServices currentPage="flachdach" relatedIds={["dachsanierung", "energieberatung", "spenglerei", "wartung"]} />
      <Contact />
      <Footer />
    </div>
  );
}
