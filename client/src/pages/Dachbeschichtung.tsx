import Navbar from "@/components/Navbar";
import AIBeraterSection from "@/components/AIBeraterSection";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, Shield, Clock, Award, ArrowRight, Paintbrush, Sparkles, ThumbsUp, AlertTriangle } from "lucide-react";
import LeadFunnel from "@/components/LeadFunnel";
import SEO, { BreadcrumbSchema, FAQPageSchema, LocalBusinessSchema } from "@/components/SEO";
import AIEnhancedFAQ from "@/components/AIEnhancedFAQ";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import CTACluster from "@/components/CTACluster";
import ProofStack from "@/components/ProofStack";
import ProcessSteps from "@/components/ProcessSteps";
import RelatedServices from "@/components/RelatedServices";
import ImageGallery from "@/components/ImageGallery";
import beschichtungImg1 from "@assets/generated_images/aged_red_roof_tiles_closeup.png";
import beschichtungImg2 from "@assets/generated_images/historic_biberschwanz_roof_with_patina.png";
import beschichtungImg3 from "@assets/generated_images/realistic_renovated_roof_obermenzing_after.png";
import beschichtungImg4 from "@assets/generated_images/modern_house_with_anthracite_roof.png";

export default function Dachbeschichtung() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title="Dachbeschichtung München | Sinnvoll? Ehrliche Beratung"
        description="Dachbeschichtung lohnt sich nicht immer! Ehrliche Beratung vom Meister ✓ Wann sinnvoll ✓ Alternativen. Kostenlos beraten ☎ 089 12621964"
        canonical="https://089dach.de/leistungen/dachbeschichtung"
        keywords="dachbeschichtung sinnvoll oder nicht, dachbeschichtung kosten pro qm münchen, dachziegel beschichten erfahrungen, dachreinigung münchen preise, dachbeschichtung haltbarkeit, dachbeschichtung nachteile, alternative dachbeschichtung sanierung, dachfarbe streichen kosten, dachziegel versiegeln vorteile, dachbeschichtung moos vorbeugen, dach streichen statt neu eindecken, nanobeschichtung dach erfahrungen, hydrophobierung dachziegel sinnvoll, dachbeschichtung garantie hersteller, druckwäsche dach schädlich, professionelle dachreinigung ablauf, dachbeschichtung risse bilden, wann dachbeschichtung wann neueindeckung"
        aiSummary="089Dach GmbH berät ehrlich zur Dachbeschichtung in München. Wann sinnvoll, wann nicht? Professionelle Alternativen zur Beschichtung. Meisterbetrieb mit 10 Jahren Garantie. Telefon: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Leistungen", url: "/leistungen" }, { name: "Dachbeschichtung", url: "/leistungen/dachbeschichtung" }]} />
      <FAQPageSchema faqs={[
        { question: "Ist Dachbeschichtung sinnvoll?", answer: "Nur bei intakten Ziegeln ohne Schäden und wenn das Dach noch 10-15 Jahre hält. Bei porösen, gerissenen oder verwitterten Ziegeln ist eine Neueindeckung die bessere Investition." },
        { question: "Was kostet Dachbeschichtung pro m²?", answer: "Eine professionelle Dachbeschichtung kostet 15-30€/m² inkl. Reinigung. Bei 100m² Dachfläche sind das 1.500-3.000€. Aber: Eine Neueindeckung hält 3-4x länger!" },
        { question: "Wie lange hält eine Dachbeschichtung?", answer: "Realistische Lebensdauer: 8-12 Jahre bei guter Verarbeitung. Hersteller-Versprechen von 20+ Jahren sind meist übertrieben. Zum Vergleich: Neue Dachziegel halten 40-100 Jahre." },
        { question: "Kann Dachbeschichtung mein Dach abdichten?", answer: "Nein! Eine Beschichtung ist nur Farbe/Versiegelung. Undichte Stellen, gerissene Ziegel oder defekte Unterspannbahn werden dadurch nicht repariert. Bei Undichtigkeiten ist eine echte Sanierung nötig." },
        { question: "Woran erkenne ich unseriöse Dachbeschichter?", answer: "Warnsignale: Haustürgeschäfte, extreme Preisnachlässe, unrealistische Garantieversprechen (20+ Jahre), Druckverkauf. Seriöse Betriebe wie wir prüfen erst das Dach und raten ehrlich - auch wenn das manchmal heißt, keine Beschichtung zu machen." },
        { question: "Was kostet professionelle Dachreinigung in München?", answer: "Dachreinigung ohne Beschichtung kostet ab 8€/m² (100m² = ab 800€). Inkl. Moos- und Algenentfernung, Hochdruckreinigung und Entsorgung. Wir prüfen dabei kostenlos den Ziegelzustand." },
        { question: "Dachbeschichtung oder Neueindeckung - was lohnt sich mehr?", answer: "Rechnung: Beschichtung 25€/m² hält 10 Jahre = 2,50€/m²/Jahr. Neueindeckung 120€/m² hält 50 Jahre = 2,40€/m²/Jahr. Langfristig ist die Neueindeckung günstiger und Sie haben ein komplett neues Dach mit Garantie." }
      ]} />
      <LocalBusinessSchema />
      <Navbar />
      <AIBeraterSection />
      
      <section className="pt-6 pb-8 md:pt-10 md:pb-12 bg-secondary relative overflow-hidden min-h-[35vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/80"></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl text-white">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <Paintbrush className="h-5 w-5 text-primary" />
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Ehrliche Beratung</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 md:mb-6">
              Dachbeschichtung München
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-xl mb-4 md:mb-6">
              Wir beraten Sie ehrlich: Wann eine Beschichtung sinnvoll ist – und wann nicht.
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
            <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-primary" />Ehrliche Beratung</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" />Meisterbetrieb</span>
            <span className="flex items-center gap-2"><Award className="h-4 w-4 text-primary" />Qualitätsprodukte</span>
          </div>
        </div>
      </div>

      <section className="py-3 md:py-4">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-4">Dachbeschichtung München: Wann sinnvoll, wann Neueindeckung besser ist – ehrliche Beratung</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Dachbeschichtungen werden oft als günstige Alternative zur Dachsanierung beworben. 
                  Als Meisterbetrieb beraten wir Sie ehrlich: Eine Beschichtung ist <strong>nur in bestimmten Fällen</strong> sinnvoll 
                  und ersetzt <strong>niemals</strong> eine notwendige Sanierung.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Wir prüfen Ihr Dach vor Ort und empfehlen Ihnen die wirtschaftlich beste Lösung – 
                  auch wenn das manchmal bedeutet, von einer Beschichtung abzuraten.
                </p>
              </div>

              <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                <h3 className="text-xl font-heading font-bold text-secondary mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6 text-amber-600" />Wichtig zu wissen
                </h3>
                <ul className="space-y-3">
                  {[
                    "Eine Beschichtung repariert keine kaputten Ziegel",
                    "Undichte Stellen werden durch Farbe nicht dicht",
                    "Bei porösen Ziegeln ist eine Beschichtung oft nur kurzzeitig wirksam",
                    "Manche Anbieter versprechen zu viel – seien Sie kritisch"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <ThumbsUp className="h-10 w-10 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Wann sinnvoll?</h3>
                  <ul className="space-y-2 text-sm">
                    {[
                      "Ziegel intakt, nur optisch verwittert",
                      "Moos- und Algenbefall ohne Substanzschaden",
                      "Farbauffrischung gewünscht",
                      "Betonziegel mit rauer Oberfläche"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                  <AlertTriangle className="h-10 w-10 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Wann nicht sinnvoll?</h3>
                  <ul className="space-y-2 text-sm">
                    {[
                      "Gebrochene oder poröse Ziegel",
                      "Undichtes Dach",
                      "Ziegel älter als 40 Jahre",
                      "Beschädigte Unterkonstruktion"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                <h3 className="text-xl font-heading font-bold text-secondary mb-4">Unsere Leistungen</h3>
                <ul className="space-y-3">
                  {[
                    "Kostenlose Vor-Ort-Prüfung und ehrliche Beratung",
                    "Professionelle Dachreinigung mit Hochdruck",
                    "Moos- und Algenentfernung",
                    "Beschichtung mit hochwertigen Acrylat-Farben",
                    "Alternative: Teil- oder Komplettsanierung"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-secondary/5 rounded-xl p-6">
                <h3 className="text-xl font-heading font-bold text-secondary mb-4">Preise (Richtwerte)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { leistung: "Dachreinigung", preis: "ab 8 €/m²" },
                    { leistung: "Reinigung + Beschichtung", preis: "ab 25 €/m²" },
                    { leistung: "Premium-Beschichtung", preis: "ab 35 €/m²" }
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
                <h3 className="text-xl font-bold mb-4">Ehrliche Beratung</h3>
                <p className="text-white/90 mb-6">Wir prüfen Ihr Dach und sagen Ihnen ehrlich, was sinnvoll ist.</p>
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
                  {["Ehrliche Beratung", "Meisterbetrieb", "Keine Drückerkolonne", "Qualitätsprodukte", "Festpreisgarantie"].map((item, idx) => (
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
        title="Dachoberflächen im Vergleich"
        columns={2}
        images={[
          { src: beschichtungImg1, alt: "Alte verwitterte Dachziegel Nahaufnahme", caption: "Verwitterte Dachziegel" },
          { src: beschichtungImg2, alt: "Historisches Biberschwanzdach mit Patina", caption: "Historische Biberschwanzziegel" },
          { src: beschichtungImg3, alt: "Saniertes Dach mit neuwertiger Optik", caption: "Nach professioneller Sanierung" },
          { src: beschichtungImg4, alt: "Modernes Haus mit anthrazitfarbenem Dach", caption: "Moderne Dachgestaltung" }
        ]}
      />

      <ProblemSolutionSection
        sectionTitle="Dachbeschichtung – wirklich sinnvoll?"
        problemTitle="Wann Beschichtung NICHT hilft"
        solutionTitle="Unsere ehrliche Empfehlung"
        problems={[
          { symptom: "Gebrochene oder poröse Ziegel", risk: "Beschichtung überdeckt nur, repariert nicht – Schaden schreitet fort" },
          { symptom: "Undichtes Dach", risk: "Farbe dichtet nicht ab! Wasser kommt weiterhin durch" },
          { symptom: "Ziegel älter als 40 Jahre", risk: "Substanz zu schwach, Beschichtung hält nicht lange" },
          { symptom: "Beschädigte Unterkonstruktion", risk: "Oberflächenbehandlung nützt nichts bei tieferliegendem Problem" }
        ]}
        solutions={[
          { title: "Ehrliche Vor-Ort-Prüfung", description: "Wir sagen Ihnen, ob Beschichtung sinnvoll ist – kostenlos" },
          { title: "Beschichtung nur bei intakten Ziegeln", description: "Optische Auffrischung, Moosschutz" },
          { title: "Alternative: Teilsanierung", description: "Defekte Ziegel tauschen, dann ggf. beschichten" },
          { title: "Langfristig denken", description: "Neueindeckung oft wirtschaftlicher als Beschichtung" }
        ]}
        urgencyMessage="Vorsicht vor unseriösen Haustürgeschäften! Wir beraten ehrlich."
      />

      <CTACluster
        title="Ehrliche Beratung zur Dachbeschichtung"
        subtitle="Kostenlose Vor-Ort-Prüfung · Keine Drückerkolonne · Meisterbetrieb"
      />

      <AIEnhancedFAQ
        title="Häufige Fragen zur Dachbeschichtung"
        faqs={[
          {
            question: "Ist Dachbeschichtung sinnvoll?",
            shortAnswer: "Nur bei intakten Ziegeln ohne Schäden – als optische Auffrischung und Moosschutz.",
            details: "Eine Beschichtung lohnt sich, wenn die Ziegel intakt sind und das Dach noch 10-15 Jahre halten soll. Bei porösen, gerissenen oder stark verwitterten Ziegeln ist eine Neueindeckung die bessere und langfristig günstigere Investition. Wir prüfen das kostenlos vor Ort.",
            localReference: "Kostenlose Vor-Ort-Beurteilung in ganz München",
            nextStep: "Kostenlose Prüfung vereinbaren →"
          },
          {
            question: "Was kostet Dachbeschichtung pro m²?",
            shortAnswer: "Professionelle Dachbeschichtung kostet 15-30€/m² inkl. Reinigung.",
            details: "Bei 100m² Dachfläche: 1.500-3.000€. Aber Achtung: Neue Ziegel kosten 80-120€/m² und halten 40-100 Jahre. Beschichtung hält realistisch 8-12 Jahre. Langfristig ist die Neueindeckung oft günstiger pro Jahr!",
            priceRange: "Reinigung + Beschichtung: 25-35€/m²",
            nextStep: "Preisvergleich Beschichtung vs. Neueindeckung →"
          },
          {
            question: "Wie lange hält eine Dachbeschichtung?",
            shortAnswer: "Realistisch 8-12 Jahre bei guter Verarbeitung.",
            details: "Hersteller-Versprechen von 20+ Jahren sind meist übertrieben. Wetterbedingungen in München (Frost, Schnee, Hagel) beanspruchen die Beschichtung stark. Zum Vergleich: Neue Tondachziegel halten 60-100 Jahre, Betonziegel 40-60 Jahre.",
            priceRange: "8-12 Jahre Lebensdauer realistisch",
            nextStep: "Lebensdauer Ihres Daches prüfen →"
          },
          {
            question: "Kann Dachbeschichtung mein Dach abdichten?",
            shortAnswer: "Nein! Eine Beschichtung ist Farbe/Versiegelung, keine Abdichtung.",
            details: "Undichte Stellen, gerissene Ziegel oder defekte Unterspannbahnen werden durch Beschichtung NICHT repariert. Das Wasser kommt weiterhin durch. Bei Undichtigkeiten brauchen Sie eine echte Sanierung mit Ziegeltausch oder Neueindeckung.",
            nextStep: "Undichtigkeit fachgerecht beheben lassen →"
          },
          {
            question: "Woran erkenne ich unseriöse Dachbeschichter?",
            shortAnswer: "Haustürgeschäfte, extreme Rabatte und unrealistische Garantieversprechen sind Warnsignale.",
            details: "Seriöse Betriebe prüfen erst das Dach und raten ehrlich – auch wenn das manchmal heißt, keine Beschichtung zu machen. Wir sind Meisterbetrieb seit 1998, kommen nicht unangekündigt und machen keinen Druckverkauf.",
            localReference: "Münchner Meisterbetrieb mit Innungsmitgliedschaft",
            nextStep: "Ehrliche Beratung vom Meister →"
          }
        ]}
      />

      <ProofStack title="Warum 089Dach für Ihr Dach?" />

      <ProcessSteps 
        title="Dachbeschichtung: Ehrliche Beratung in 6 Schritten"
        subtitle="Planbar, transparent und stressfrei – von der ersten Beratung bis zur Garantie."
      />

      <LeadFunnel />
      <RelatedServices currentPage="dachbeschichtung" relatedIds={["dachsanierung", "reparaturservice", "wartung", "energieberatung"]} />
      <Contact />
      <Footer />
    </div>
  );
}
