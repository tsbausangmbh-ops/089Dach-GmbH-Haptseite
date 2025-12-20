import Navbar from "@/components/Navbar";
import AIBeraterSection from "@/components/AIBeraterSection";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, Shield, Clock, Award, ArrowRight, Paintbrush, Sparkles, ThumbsUp, AlertTriangle } from "lucide-react";
import LeadFunnel from "@/components/LeadFunnel";
import SEO, { BreadcrumbSchema, FAQPageSchema } from "@/components/SEO";
import RelatedServices from "@/components/RelatedServices";

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
        { question: "Wie lange hält eine Dachbeschichtung?", answer: "Realistische Lebensdauer: 8-12 Jahre bei guter Verarbeitung. Hersteller-Versprechen von 20+ Jahren sind meist übertrieben. Zum Vergleich: Neue Dachziegel halten 40-100 Jahre." }
      ]} />
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
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-4">Dachbeschichtung: Was Sie wissen sollten</h2>
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

      <LeadFunnel />
      <RelatedServices currentPage="dachbeschichtung" relatedIds={["dachsanierung", "reparaturservice", "wartung", "energieberatung"]} />
      <Contact />
      <Footer />
    </div>
  );
}
