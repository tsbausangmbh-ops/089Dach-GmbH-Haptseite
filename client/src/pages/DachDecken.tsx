import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, Home, Shield, Clock, Award, Layers } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, FAQPageSchema, ProductServiceSchema } from "@/components/SEO";
import BackButton from "@/components/BackButton";
import { Link } from "wouter";
import heroImage from '@assets/stock_images/roofer_working_on_ro_cb52da00.jpg';
import { ServiceGeoLinks } from "@/components/GeoLinks";
import { TextWithKeywordLinks } from "@/components/KeywordLink";
import { CostEscalationBanner, DecisionPressureBanner } from "@/components/UrgencyBanner";

export default function DachDecken() {
  const materialien = [
    { name: "Tonziegel", preis: "80-120€/m²", vorteile: ["Langlebig", "Farbecht", "Natürlich"] },
    { name: "Betondachsteine", preis: "60-90€/m²", vorteile: ["Robust", "Günstig", "Vielfältig"] },
    { name: "Schiefer", preis: "120-180€/m²", vorteile: ["Edel", "100+ Jahre", "Naturstein"] },
    { name: "Metalldach", preis: "90-150€/m²", vorteile: ["Modern", "Leicht", "Wartungsarm"] },
    { name: "Bitumenschindeln", preis: "40-60€/m²", vorteile: ["Flexibel", "Günstig", "DIY-geeignet"] },
    { name: "Dachpappe", preis: "25-40€/m²", vorteile: ["Einfach", "Schnell", "Für Nebengebäude"] }
  ];

  const leistungsumfang = [
    "Kostenlose Vor-Ort-Beratung und Aufmaß",
    "Gerüstaufbau und Absicherung",
    "Entfernung der alten Dacheindeckung",
    "Kontrolle und ggf. Erneuerung der Lattung",
    "Verlegung der Unterspannbahn",
    "Fachgerechte Dacheindeckung nach Wahl",
    "Anschlüsse an Kamin, Dachfenster etc.",
    "Dachrinnen und Fallrohre",
    "Endreinigung und Abnahme"
  ];

  const faqs = [
    { question: "Was kostet Dach decken pro m²?", answer: "Je nach Material: Dachpappe 25-40€/m², Bitumenschindeln 40-60€/m², Betondachsteine 60-90€/m², Tonziegel 80-120€/m², Metall 90-150€/m², Schiefer 120-180€/m². Preise inkl. Material und Montage." },
    { question: "Wie lange dauert es, ein Dach zu decken?", answer: "Ein Einfamilienhaus (100-150m²) ist in 3-5 Arbeitstagen gedeckt. Komplexe Dächer mit vielen Gauben oder Kehlen können 1-2 Wochen dauern." },
    { question: "Kann ich mein Dach selbst decken?", answer: "Bei einfachen Nebengebäuden mit Bitumenschindeln ist das möglich. Wohnhäuser sollten vom Fachmann gedeckt werden – wegen Absturzgefahr, Gewährleistung und korrekter Ausführung." },
    { question: "Welches Dachmaterial ist am besten?", answer: "Das hängt von Budget, Optik und Dachneigung ab. Tonziegel sind der Klassiker mit bester Langlebigkeit. Betondachsteine bieten gutes Preis-Leistungs-Verhältnis. Metall ist modern und wartungsarm." },
    { question: "Wann ist die beste Zeit zum Dach decken?", answer: "Frühling bis Herbst (März-Oktober) bei trockenem Wetter. Im Winter ist es möglich, aber aufwändiger. Wir planen Ihre Dachdeckung wetterabhängig und sichern das Dach bei Unterbrechungen ab." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Dach decken München 2025 | Kosten ab 60€/m² | Meisterbetrieb"
        description="Dach decken München: ✓ Kosten ab 60€/m² ✓ 10 Jahre Garantie ✓ Kostenlose Beratung ✓ Festpreisangebot. ☎ 089 12621964"
        canonical="/dach-decken"
        keywords="dach decken kosten, dach decken lassen, dach decken material, dach decken preis pro qm, dachdecken münchen, dach neu decken, dach selbst decken, dach decken anleitung, was kostet dach decken, dach decken firma, was kostet dach decken münchen, dach decken münchen erfahrungen, wie lange dauert dach decken, dach decken selber machen oder profi, dach decken münchen günstig, dach decken festpreis münchen, dach decken preisvergleich, dach decken dringend münchen, dach decken schnell münchen, dach decken meisterbetrieb münchen, dach decken fachbetrieb münchen, dach decken handwerker münchen"
        aiSummary="Dach decken in München durch 089Dach GmbH. Alle Materialien von Dachpappe (25€/m²) bis Schiefer (180€/m²). Festpreisgarantie, 5 Jahre Gewährleistung. Meisterbetrieb seit 1998. Tel: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Dach decken", url: "/dach-decken" }]} />
      <ServiceSchema 
        pageName="Dach decken München"
        services={[
          { name: "Dacheindeckung", description: "Komplette Neueindeckung mit Material nach Wahl" },
          { name: "Umdeckung", description: "Austausch der Dacheindeckung bei intakter Unterkonstruktion" },
          { name: "Teildeckung", description: "Erneuerung einzelner Dachbereiche" }
        ]}
      />
      <ProductServiceSchema 
        name="Dach decken München"
        description="Professionelle Dacheindeckung mit verschiedenen Materialien. Festpreisgarantie und 5 Jahre Gewährleistung."
        priceFrom={25}
        priceTo={180}
        category="Dacheindeckung"
      />
      <FAQPageSchema faqs={faqs} />
      
      <Navigation />
      
      <main id="main-content" role="main" tabIndex={-1}>
      <section className="relative py-20 text-white overflow-hidden min-h-[60vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Award className="w-5 h-5" />
              <span className="font-medium">Meisterbetrieb seit 1998</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"><strong>Dach decken</strong> München</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-7xl mx-auto">
              Professionelle Dacheindeckung mit allen Materialien – 
              von klassischen Ziegeln bis zum modernen Metalldach.
            </p>
            <p className="text-lg text-white/80 mb-8">
              Ab 25€/m² • Festpreisgarantie • 5 Jahre Gewährleistung
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
                <Button size="lg" className="bg-white text-red-700 hover:bg-red-50 text-lg px-8 py-6" data-testid="button-hero-callback">
                  <Phone className="mr-2 h-5 w-5" />
                  Kostenloses Angebot
                </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online"><a href="/beratung">24h Online Termin</a></Button>
            </div>
          </div>
        </div>
      </section>

      <BackButton />

      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-4">
              <strong>Dach decken</strong> – Dachmaterialien & Preise
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-4xl mx-auto">
              Wir decken Ihr Dach mit dem Material Ihrer Wahl – fachgerecht und dauerhaft
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {materialien.map((mat, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{mat.name}</h3>
                  <p className="text-2xl font-bold text-red-600 mb-4">{mat.preis}</p>
                  <div className="flex flex-wrap gap-2">
                    {mat.vorteile.map((v, vIndex) => (
                      <span key={vIndex} className="px-2 py-1 bg-white rounded text-xs text-slate-600">
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-500 text-sm mt-8">
              * Preise inkl. Material, Unterspannbahn und Montage. Gerüst und Lattung je nach Zustand.
            </p>
          </div>
        </div>
      </section>

      <section className="py-6 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Was ist im Preis enthalten?
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {leistungsumfang.map((leistung, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">{leistung}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Unser Ablauf beim Dach decken
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="font-semibold mb-2">Beratung</h3>
                <p className="text-white/80 text-sm">Kostenlose Vor-Ort-Besichtigung mit Materialberatung</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="font-semibold mb-2">Angebot</h3>
                <p className="text-white/80 text-sm">Detailliertes Festpreis-Angebot in 3 Tagen</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="font-semibold mb-2">Ausführung</h3>
                <p className="text-white/80 text-sm">Fachgerechte Dachdeckung zum Festtermin</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <h3 className="font-semibold mb-2">Abnahme</h3>
                <p className="text-white/80 text-sm">Gemeinsame Prüfung mit 5 Jahren Garantie</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Häufige Fragen zum Dach decken
            </h2>
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

      <section className="py-6 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Dach decken lassen?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Kostenlose Beratung mit Materialmustern und Festpreis-Angebot
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8" data-testid="button-cta-callback">
                  Kostenloses Angebot anfordern
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online"><a href="/beratung">24h Online Termin</a></Button>
            </div>
          </div>
        </div>
      </section>

      <ServiceGeoLinks currentService="Dachsanierung" />
      <CostEscalationBanner />
      <LeadFunnel 
        headline="Dach decken in München?"
        subheadline="Wir beraten zu Material und Kosten."
        description="Professionell Dach decken in München – wir beraten zu Material und Kosten."
      />
      <DecisionPressureBanner />
      </main>
      <Footer />
    </div>
  );
}
