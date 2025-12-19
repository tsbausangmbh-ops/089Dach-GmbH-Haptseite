import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, Snowflake, Shield } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, FAQPageSchema, ProductServiceSchema } from "@/components/SEO";
import RelatedServices from "@/components/RelatedServices";
import EinzugsgebietSection from "@/components/EinzugsgebietSection";
import { Link } from "wouter";
import heroImage from '@assets/stock_images/roofer_working_on_ro_cb52da00.jpg';

export default function SchneefanggitterMontage() {
  const typen = [
    { name: "Schneefanggitter", preis: "30-50€/lfm", beschreibung: "Klassisch, für Steildächer" },
    { name: "Schneefangrohr", preis: "25-40€/lfm", beschreibung: "Rund, dezent, modern" },
    { name: "Schneefangbalken", preis: "40-60€/lfm", beschreibung: "Holz, für Alpenstil" },
    { name: "Schneestopper", preis: "5-10€/Stk", beschreibung: "Einzelne Haken, für leichte Dächer" }
  ];

  const faqs = [
    { question: "Was kostet Schneefanggitter montieren?", answer: "Schneefanggitter 30-50€/lfm, Schneefangrohr 25-40€/lfm inkl. Montage. Für ein Hausdach ca. 500-1.500€ gesamt." },
    { question: "Ist Schneefanggitter Pflicht in München?", answer: "Ja, in Bayern Pflicht bei öffentlichen Wegen/Eingängen unter dem Dach. Sonst haftet der Hausbesitzer für Dachlawinen." },
    { question: "Wie viel Schneefang brauche ich?", answer: "Mindestens über Eingängen, Wegen, Terrassen, Parkplätzen. Ideal: komplette Trauflinie für gleichmäßigen Schutz." },
    { question: "Kann man Schneefang nachträglich montieren?", answer: "Ja! Wir montieren Schneefang an allen Dachtypen nach. Bei manchen Ziegeln mit Spezialhaltern." },
    { question: "Schneefanggitter oder Schneefangrohr?", answer: "Gitter ist sicherer bei viel Schnee, Rohr dezenter. Für München reichen meist Rohre oder Gitter in Standardausführung." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Schneefang montieren München | Pflicht in Bayern | 25-60€/lfm"
        description="Schneefanggitter & Schneefangrohr: ✓ 25-50€/lfm inkl. Montage ✓ Pflicht in Bayern über Eingängen ✓ Nachträgliche Montage möglich. Dachdecker München & Oberbayern!"
        canonical="/schneefanggitter-montage"
        keywords="schneefanggitter montage münchen, schneefang pflicht bayern, schneefangrohr kosten, dachlawine verhindern, schneefang nachträglich montieren"
        aiSummary="Schneefanggitter Montage München und Umgebung: Gitter 30-50€/lfm, Rohr 25-40€/lfm. Pflicht in Bayern über Eingängen. 089Dach - für Schwabing, Trudering, Haar. Tel: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Schneefanggitter Montage", url: "/schneefanggitter-montage" }]} />
      <ServiceSchema pageName="Schneefanggitter Montage" services={[{ name: "Schneefang-Montage", description: "Alle Schneefangsysteme" }]} />
      <ProductServiceSchema name="Schneefang München" description="Schneefang-Montage" priceFrom={25} priceTo={60} category="Schneefang" />
      <FAQPageSchema faqs={faqs} />
      
      <Navigation />
      
      <section className="relative py-20 text-white overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-900/95 via-sky-900/85 to-sky-800/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-sky-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-sky-500/30">
              <Snowflake className="w-5 h-5 text-sky-400" />
              <span className="font-medium text-sky-300">Schutz vor Dachlawinen</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Schneefanggitter Montage</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto">Schneefang ist in Bayern Pflicht – wir montieren alle Systeme fachgerecht.</p>
            <p className="text-lg text-white/70 mb-8">Ab 25€/lfm • Pflicht in Bayern • Meisterbetrieb</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white text-lg px-8 py-6" data-testid="button-hero-callback"><Phone className="mr-2 h-5 w-5" />Kostenloses Angebot</Button></Link>
              <Link href="/rueckruf"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6" data-testid="button-hero-online">24h Onlinetermin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Schneefang-Systeme & Preise</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {typen.map((t, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6 flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">{t.name}</h3>
                    <p className="text-slate-600 text-sm">{t.beschreibung}</p>
                  </div>
                  <p className="text-xl font-bold text-sky-600 whitespace-nowrap ml-4">{t.preis}</p>
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

      <section className="py-16 bg-sky-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Schneefang montieren lassen?</h2>
            <p className="text-xl text-white/90 mb-8">Kostenlose Beratung und Angebot</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-white text-sky-700 hover:bg-sky-50 text-lg px-8" data-testid="button-cta-callback">Angebot anfordern<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
              <Link href="/rueckruf"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online-cta">24h Onlinetermin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <EinzugsgebietSection />
      <LeadFunnel />
      <RelatedServices currentPage="sicherheit" />
      <Footer />
    </div>
  );
}
