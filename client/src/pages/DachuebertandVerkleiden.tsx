import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, Paintbrush, Shield } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, FAQPageSchema, ProductServiceSchema } from "@/components/SEO";
import RelatedServices from "@/components/RelatedServices";
import EinzugsgebietSection from "@/components/EinzugsgebietSection";
import { Link } from "wouter";
import heroImage from '@assets/stock_images/roofer_working_on_ro_cb52da00.jpg';

export default function DachuebertandVerkleiden() {
  const materialien = [
    { name: "Kunststoff (PVC)", preis: "40-70€/lfm", vorteile: "Pflegeleicht, günstig" },
    { name: "Holz gestrichen", preis: "50-90€/lfm", vorteile: "Klassisch, natürlich" },
    { name: "Aluminium", preis: "60-100€/lfm", vorteile: "Langlebig, modern" },
    { name: "HPL-Platten", preis: "70-120€/lfm", vorteile: "Hochwertig, wartungsfrei" }
  ];

  const faqs = [
    { question: "Was kostet Dachüberstand verkleiden?", answer: "Je nach Material: Kunststoff 40-70€/lfm, Holz 50-90€/lfm, Alu 60-100€/lfm. Für ein Einfamilienhaus ca. 2.000-5.000€." },
    { question: "Warum Dachüberstand verkleiden?", answer: "Schutz vor Witterung, bessere Optik, weniger Wartung (kein Streichen mehr bei Holz), Schutz vor Vögeln/Insekten." },
    { question: "Welches Material ist am besten?", answer: "Kunststoff ist günstig und pflegeleicht. Holz sieht natürlich aus, braucht aber Pflege. Alu ist langlebig und wartungsfrei." },
    { question: "Muss altes Holz entfernt werden?", answer: "Nicht immer. Wenn das Holz noch tragfähig ist, kann man direkt verkleiden. Bei Fäulnis muss es raus." },
    { question: "Wie lange dauert die Verkleidung?", answer: "Ein Einfamilienhaus: 2-4 Tage. Je nach Zugänglichkeit und Umfang." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Dachüberstand verkleiden München | 40-120€/lfm | 089Dach"
        description="Dachüberstand verkleiden München: ✓ Kunststoff 40-70€/lfm ✓ Holz ✓ Aluminium ✓ Wartungsfrei. Jetzt anfragen!"
        canonical="/dachueberstand-verkleiden"
        keywords="dachüberstand verkleiden, untersparrenverkleidung, dachkasten verkleiden, ortgang verkleiden, traufe verkleiden, dachüberstand kunststoff, dachüberstand kosten"
        aiSummary="Dachüberstand verkleiden München: Kunststoff 40-70€/lfm, Holz 50-90€/lfm, Alu 60-100€/lfm. 089Dach Meisterbetrieb. Tel: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Dachüberstand verkleiden", url: "/dachueberstand-verkleiden" }]} />
      <ServiceSchema pageName="Dachüberstand verkleiden" services={[{ name: "Dachkastenverkleidung", description: "Alle Materialien" }]} />
      <ProductServiceSchema name="Dachüberstand München" description="Dachkastenverkleidung" priceFrom={40} priceTo={120} category="Verkleidung" />
      <FAQPageSchema faqs={faqs} />
      
      <Navigation />
      
      <section className="relative py-20 text-white overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-purple-500/30">
              <Paintbrush className="w-5 h-5 text-purple-400" />
              <span className="font-medium text-purple-300">Nie wieder streichen</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"><strong>Dachüberstand verkleiden</strong> München</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto">Schluss mit verwittertem Holz – Verkleidung mit Kunststoff, Alu oder HPL.</p>
            <p className="text-lg text-white/70 mb-8">Ab 40€/lfm • Wartungsfrei • Meisterbetrieb</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-6" data-testid="button-hero-callback"><Phone className="mr-2 h-5 w-5" />Kostenloses Angebot</Button></Link>
              <Link href="/beratung"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online">24h Online Termin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Materialien & Preise</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {materialien.map((m, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6 flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">{m.name}</h3>
                    <p className="text-slate-600 text-sm">{m.vorteile}</p>
                  </div>
                  <p className="text-xl font-bold text-purple-600 whitespace-nowrap ml-4">{m.preis}</p>
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

      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Dachüberstand verkleiden lassen?</h2>
            <p className="text-xl text-white/90 mb-8">Kostenlose Beratung und Angebot</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50 text-lg px-8" data-testid="button-cta-callback">Angebot anfordern<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
              <Link href="/beratung"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online-cta">24h Online Termin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <EinzugsgebietSection />
      <LeadFunnel />
      <RelatedServices currentPage="spenglerei" />
      <Footer />
    </div>
  );
}
