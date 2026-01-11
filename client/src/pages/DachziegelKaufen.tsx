import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, Package, Euro } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, FAQPageSchema, ProductServiceSchema } from "@/components/SEO";
import BackButton from "@/components/BackButton";
import EinzugsgebietSection from "@/components/EinzugsgebietSection";
import { Link } from "wouter";
import heroImage from '@assets/stock_images/roofer_working_on_ro_cb52da00.jpg';
import { ServiceGeoLinks } from "@/components/GeoLinks";
import { TextWithKeywordLinks } from "@/components/KeywordLink";
import { CostEscalationBanner, DecisionPressureBanner } from "@/components/UrgencyBanner";

export default function DachziegelKaufen() {
  const ziegelTypen = [
    { name: "Betonziegel", preis: "0,60-1,20€/Stk", proQm: "30-50€/m²", lebensdauer: "40-60 Jahre" },
    { name: "Tonziegel (Biberschwanz)", preis: "0,80-2,00€/Stk", proQm: "40-80€/m²", lebensdauer: "60-100 Jahre" },
    { name: "Tonziegel (Flachdach)", preis: "1,00-2,50€/Stk", proQm: "40-70€/m²", lebensdauer: "60-100 Jahre" },
    { name: "Engobe/Glasur", preis: "1,50-3,00€/Stk", proQm: "50-100€/m²", lebensdauer: "70-100+ Jahre" },
    { name: "Schiefer", preis: "3,00-8,00€/Stk", proQm: "80-150€/m²", lebensdauer: "100+ Jahre" }
  ];

  const tipps = [
    "Immer 5-10% mehr kaufen als berechnet (Verschnitt, Ersatz)",
    "Herstellergarantie beachten (30-50 Jahre üblich)",
    "Auf Frostbeständigkeit achten (wichtig in München!)",
    "Passende First-/Ortgangziegel gleich mitbestellen",
    "Bei Altbau: Passende Ziegel oft schwer zu finden – wir helfen"
  ];

  const faqs = [
    { question: "Was kosten Dachziegel pro m²?", answer: "Betonziegel 30-50€/m², Tonziegel 40-80€/m², Engobe/Glasur 50-100€/m², Schiefer 80-150€/m². Nur Material ohne Verlegung." },
    { question: "Wie viele Ziegel brauche ich pro m²?", answer: "Je nach Ziegelart: Biberschwanz ca. 30-40 Stk/m², Flachziegel ca. 10-15 Stk/m², Betonziegel ca. 10-12 Stk/m²." },
    { question: "Wo kann ich Dachziegel kaufen?", answer: "Baustoffhandel, Dachdecker-Fachhandel, Online. Wir beschaffen alle Ziegelarten und Farben direkt vom Hersteller." },
    { question: "Gibt es Ersatzziegel für alte Dächer?", answer: "Oft ja, aber nicht immer passend. Wir haben Kontakte zu Spezialisten und finden passende Ziegel auch für historische Dächer." },
    { question: "Soll ich selbst kaufen oder über den Dachdecker?", answer: "Über uns: Bessere Preise (Handwerkerrabatt), passende Mengen, Garantie auf Komplettsystem. Eigenbesorgung nur bei Spezialwünschen empfohlen." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Dachziegel Preise 2025 München | Ton, Beton & Schiefer kaufen"
        description="Dachziegel kaufen in München: ✓ Betonziegel 30-50€/m² ✓ Tonziegel 40-80€/m² ✓ Schiefer 80-150€/m² ✓ Lieferung & Verlegung vom Dachdecker. Alle Farben & Hersteller!"
        canonical="/dachziegel-kaufen"
        keywords="dachziegel kaufen münchen, dachpfannen preis bayern, tonziegel kosten, betonziegel preis pro m2, schiefer dachziegel, dachziegel lieferung, was kosten dachziegel münchen, dachziegel kaufen münchen erfahrungen, dachziegel kosten pro qm, dachziegel münchen günstig, dachziegel festpreis münchen, dachziegel preisvergleich, dachziegel meisterbetrieb münchen, dachziegel fachbetrieb münchen, dachziegel handwerker münchen"
        aiSummary="Dachziegel Preise München 2025: Beton 30-50€/m², Ton 40-80€/m², Schiefer 80-150€/m². 089Dach beschafft alle Ziegelarten für München, Starnberg, Dachau, Erding. Tel: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Dachziegel kaufen", url: "/dachziegel-kaufen" }]} />
      <ServiceSchema pageName="Dachziegel kaufen" services={[{ name: "Ziegelbeschaffung", description: "Alle Ziegelarten" }]} />
      <ProductServiceSchema name="Dachziegel München" description="Dachziegel beschaffen und verlegen" priceFrom={30} priceTo={150} category="Dachziegel" />
      <FAQPageSchema faqs={faqs} />
      
      <Navigation />
      
      <section className="relative py-20 text-white overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/95 via-orange-900/85 to-orange-800/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-orange-500/30">
              <Package className="w-5 h-5 text-orange-400" />
              <span className="font-medium text-orange-300">Alle Ziegelarten verfügbar</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"><strong>Dachziegel kaufen</strong></h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-7xl mx-auto">Beton, Ton, Schiefer – wir beschaffen und verlegen alle Dachziegelarten.</p>
            <p className="text-lg text-white/70 mb-8">Ab 30€/m² Material • Alle Farben • Meisterbetrieb</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-6" data-testid="button-hero-callback"><a href="/rueckruf/"><Phone className="mr-2 h-5 w-5" />Kostenlose Beratung</a></Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6" data-testid="button-hero-online"><a href="/beratung">24h Online Termin</a></Button>
            </div>
          </div>
        </div>
      </section>

      <BackButton />

      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12"><strong>Dachziegel</strong> Preise 2025 <strong>München</strong></h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-4 font-semibold text-slate-800">Ziegelart</th>
                    <th className="text-right p-4 font-semibold text-slate-800">Pro Stück</th>
                    <th className="text-right p-4 font-semibold text-slate-800">Pro m²</th>
                    <th className="text-right p-4 font-semibold text-slate-800">Lebensdauer</th>
                  </tr>
                </thead>
                <tbody>
                  {ziegelTypen.map((z, index) => (
                    <tr key={index} className="border-b border-slate-100">
                      <td className="p-4 font-medium text-slate-700">{z.name}</td>
                      <td className="p-4 text-right text-slate-600">{z.preis}</td>
                      <td className="p-4 text-right text-orange-600 font-bold">{z.proQm}</td>
                      <td className="p-4 text-right text-slate-600">{z.lebensdauer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Tipps zum <strong>Dachziegel</strong>-Kauf vom <strong>Meisterbetrieb</strong></h2>
            <div className="space-y-4">
              {tipps.map((t, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-700">{t}</span>
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

      <section className="py-6 bg-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Dachziegel-Beratung gewünscht?</h2>
            <p className="text-xl text-white/90 mb-8">Wir finden die passenden Ziegel für Ihr Dach</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-700 hover:bg-orange-50 text-lg px-8" data-testid="button-cta-callback">Beratung anfordern<ArrowRight className="ml-2 h-5 w-5" /></a></Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online-cta"><a href="/beratung">24h Online Termin</a></Button>
            </div>
          </div>
        </div>
      </section>

      <EinzugsgebietSection />
      <ServiceGeoLinks currentService="Dachziegel" />
      <CostEscalationBanner />
      <LeadFunnel 
        headline="Dachziegel kaufen in München?"
        subheadline="Wir beraten zu allen Materialien."
        description="Dachziegel kaufen in München – wir beraten zu Ton, Beton und Schiefer."
      />
      <DecisionPressureBanner />
    </div>
  );
}
