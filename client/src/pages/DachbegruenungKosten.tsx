import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, Leaf, TreePine, Euro } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, FAQPageSchema, ProductServiceSchema } from "@/components/SEO";
import RelatedServices from "@/components/RelatedServices";
import EinzugsgebietSection from "@/components/EinzugsgebietSection";
import { Link } from "wouter";
import heroImage from '@assets/stock_images/roofer_working_on_ro_cb52da00.jpg';

export default function DachbegruenungKosten() {
  const typen = [
    { name: "Extensive Begrünung", preis: "40-80€/m²", beschreibung: "Sedum, Moos, 5-15cm Substrat" },
    { name: "Intensive Begrünung", preis: "80-150€/m²", beschreibung: "Rasen, Stauden, begehbar" },
    { name: "Dachgarten", preis: "150-300€/m²", beschreibung: "Mit Beeten, Wegen, Sitzplätzen" },
    { name: "Retentionsdach", preis: "60-100€/m²", beschreibung: "Regenwasserrückhaltung" }
  ];

  const vorteile = [
    "Verlängert die Lebensdauer der Dachabdichtung um 20-30 Jahre",
    "Dämmwirkung: kühler im Sommer, wärmer im Winter",
    "Regenwasserrückhaltung entlastet Kanalisation",
    "Fördermittel der Stadt München möglich",
    "Lebensraum für Insekten und Vögel",
    "Wertsteigerung der Immobilie"
  ];

  const faqs = [
    { question: "Was kostet Dachbegrünung pro m²?", answer: "Extensive Begrünung 40-80€/m², intensive 80-150€/m², Dachgarten 150-300€/m². Inkl. Abdichtungsprüfung und Pflanzen." },
    { question: "Kann jedes Dach begrünt werden?", answer: "Die meisten Flachdächer ja. Wichtig: Tragfähigkeit (min. 80kg/m²), funktionierende Abdichtung, leichte Neigung für Entwässerung." },
    { question: "Gibt es Förderung für Dachbegrünung?", answer: "Die Stadt München fördert Dachbegrünung! Außerdem oft niedrigere Abwassergebühren bei Regenwasserrückhaltung." },
    { question: "Wie viel Pflege braucht ein Gründach?", answer: "Extensive Begrünung: 1-2x jährlich Kontrolle. Intensive: wie normaler Garten. Wir bieten auch Wartungsverträge." },
    { question: "Muss die Abdichtung erneuert werden?", answer: "Wir prüfen die vorhandene Abdichtung. Wenn intakt, kann direkt begrünt werden. Sonst erneuern wir sie mit – das schützt dann 40+ Jahre." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Gründach & Dachbegrünung München | 40-150€/m² mit Förderung"
        description="Dachbegrünung vom Profi: ✓ Extensiv ab 40€/m² ✓ Intensiv 80-150€/m² ✓ Förderung Stadt München möglich ✓ Flachdach & Carport. Gratis Beratung mit Förder-Check!"
        canonical="/dachbegruenung-kosten"
        keywords="dachbegrünung kosten münchen, gründach förderung bayern, extensives gründach preis, intensive dachbegrünung kosten, sedumdach münchen, dachgarten anlegen lassen"
        aiSummary="Dachbegrünung München und Umgebung: Extensiv 40-80€/m², intensiv 80-150€/m². Förderung durch Stadt München möglich. 089Dach baut Gründächer in München, Starnberg, Gräfelfing. Tel: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Dachbegrünung Kosten", url: "/dachbegruenung-kosten" }]} />
      <ServiceSchema pageName="Dachbegrünung München" services={[{ name: "Gründach", description: "Extensive und intensive Begrünung" }]} />
      <ProductServiceSchema name="Dachbegrünung München" description="Professionelle Dachbegrünung" priceFrom={40} priceTo={300} category="Dachbegrünung" />
      <FAQPageSchema faqs={faqs} />
      
      <Navigation />
      
      <section className="relative py-20 text-white overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 via-green-900/85 to-green-800/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-green-500/30">
              <TreePine className="w-5 h-5 text-green-400" />
              <span className="font-medium text-green-300">Natur aufs Dach</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Dachbegrünung Kosten</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto">Grünes Dach für besseres Klima – extensive oder intensive Begrünung für Ihr Flachdach.</p>
            <p className="text-lg text-white/70 mb-8">Ab 40€/m² • Förderung möglich • Meisterbetrieb</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6" data-testid="button-hero-callback"><Phone className="mr-2 h-5 w-5" />Kostenlose Beratung</Button></Link>
              <Link href="/beratung"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6" data-testid="button-hero-online">24h Online Termin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Begrünungsarten & Preise</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {typen.map((t, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6 flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">{t.name}</h3>
                    <p className="text-slate-600 text-sm">{t.beschreibung}</p>
                  </div>
                  <p className="text-xl font-bold text-green-600 whitespace-nowrap ml-4">{t.preis}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Vorteile eines Gründachs</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {vorteile.map((v, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
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

      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Gründach planen?</h2>
            <p className="text-xl text-white/90 mb-8">Kostenlose Beratung mit Fördermittel-Check</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-white text-green-700 hover:bg-green-50 text-lg px-8" data-testid="button-cta-callback">Beratung anfordern<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
              <Link href="/beratung"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online-cta">24h Online Termin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <EinzugsgebietSection />
      <LeadFunnel />
      <RelatedServices currentPage="flachdach" />
      <Footer />
    </div>
  );
}
