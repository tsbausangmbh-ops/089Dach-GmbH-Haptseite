import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, DoorOpen, Shield } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, FAQPageSchema, ProductServiceSchema } from "@/components/SEO";
import RelatedServices from "@/components/RelatedServices";
import EinzugsgebietSection from "@/components/EinzugsgebietSection";
import { Link } from "wouter";
import heroImage from '@assets/stock_images/roofer_working_on_ro_cb52da00.jpg';

export default function VordachMontage() {
  const vordachTypen = [
    { name: "Glasvordach", preis: "500-1.500€", beschreibung: "Modern, elegant, freier Blick" },
    { name: "Pultdach", preis: "300-800€", beschreibung: "Klassisch, guter Wasserablauf" },
    { name: "Rundbogen", preis: "600-1.200€", beschreibung: "Zeitlos, dekorativ" },
    { name: "Flachdach", preis: "400-900€", beschreibung: "Minimalistisch, modern" }
  ];

  const faqs = [
    { question: "Was kostet Vordach montieren?", answer: "Ein einfaches Glasvordach 500-1.500€, Pultdach 300-800€ inkl. Montage. Je nach Größe und Ausführung." },
    { question: "Braucht man Genehmigung für ein Vordach?", answer: "In der Regel nicht, da Vordächer meist verfahrensfrei sind. Bei sehr großen Vordächern kann das anders sein." },
    { question: "Wie wird ein Vordach befestigt?", answer: "An der Hauswand mit Edelstahlhaltern oder Zugstangen. Wir prüfen die Tragfähigkeit der Wand." },
    { question: "Wie lange dauert die Montage?", answer: "Ein Standard-Vordach ist in 2-4 Stunden montiert. Inklusive Anfahrt und Aufräumen." },
    { question: "Welches Material ist am besten?", answer: "VSG-Glas ist sicher und edel, Polycarbonat günstiger. Wir beraten nach Optik und Budget." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Haustür-Vordach & Glasvordach montieren München | Ab 300€"
        description="Vordach professionell montieren lassen: ✓ Glasvordach 500-1.500€ ✓ Pultdach ab 300€ ✓ Rundbogen ✓ Montage in 2-4 Stunden. Dachdecker München & Umgebung!"
        canonical="/vordach-montage"
        keywords="vordach montage münchen, glasvordach montieren kosten, haustür vordach, hauseingang überdachung, vordach glas münchen"
        aiSummary="Vordach Montage München und Umgebung: Glasvordach 500-1.500€, Pultdach 300-800€. 089Dach - schnelle Montage für Schwabing, Sendling, Laim. Tel: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Vordach Montage", url: "/vordach-montage" }]} />
      <ServiceSchema pageName="Vordach Montage München" services={[{ name: "Vordach-Montage", description: "Alle Vordachtypen" }]} />
      <ProductServiceSchema name="Vordach Montage München" description="Professionelle Vordach-Montage" priceFrom={300} priceTo={1500} category="Vordach" />
      <FAQPageSchema faqs={faqs} />
      
      <Navigation />
      
      <section className="relative py-20 text-white overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-teal-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-teal-500/30">
              <DoorOpen className="w-5 h-5 text-teal-400" />
              <span className="font-medium text-teal-300">Schutz für Ihren Eingang</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"><strong>Vordach Montage</strong></h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-7xl mx-auto">Glasvordach, Pultdach, Rundbogen – professionell montiert.</p>
            <p className="text-lg text-white/70 mb-8">Ab 300€ komplett • Schnelle Montage • Meisterbetrieb</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white text-lg px-8 py-6" data-testid="button-hero-callback"><Phone className="mr-2 h-5 w-5" />Kostenloses Angebot</Button></Link>
              <Link href="/beratung"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6" data-testid="button-hero-online">24h Online Termin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Vordach-Typen & Preise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {vordachTypen.map((v, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6 text-center">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{v.name}</h3>
                  <p className="text-2xl font-bold text-teal-600 mb-3">{v.preis}</p>
                  <p className="text-slate-600 text-sm">{v.beschreibung}</p>
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

      <section className="py-6 bg-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Vordach montieren lassen?</h2>
            <p className="text-xl text-white/90 mb-8">Kostenlose Beratung und Festpreis-Angebot</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-white text-teal-700 hover:bg-teal-50 text-lg px-8" data-testid="button-cta-callback">Angebot anfordern<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
              <Link href="/beratung"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online-cta">24h Online Termin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <EinzugsgebietSection />
      <LeadFunnel />
      <RelatedServices currentPage="eindeckung" />
      <Footer />
    </div>
  );
}
