import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, Building, Shield } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, FAQPageSchema, ProductServiceSchema } from "@/components/SEO";
import BackButton from "@/components/BackButton";
import EinzugsgebietSection from "@/components/EinzugsgebietSection";
import { Link } from "wouter";
import heroImage from '@assets/stock_images/roofer_working_on_ro_cb52da00.jpg';

export default function DachstuhlErneuern() {
  const kostenFaktoren = [
    { name: "Dachstuhl komplett neu", preis: "80-150€/m²", beschreibung: "Neues Holz, alle Sparren" },
    { name: "Teilsanierung", preis: "50-100€/m²", beschreibung: "Nur beschädigte Balken" },
    { name: "Holzschutzbehandlung", preis: "10-20€/m²", beschreibung: "Schutz vor Schädlingen" },
    { name: "Verstärkung", preis: "30-60€/m²", beschreibung: "Zusätzliche Stützen/Pfetten" }
  ];

  const faqs = [
    { question: "Was kostet Dachstuhl erneuern?", answer: "Komplett neu: 80-150€/m² nur für den Dachstuhl. Mit Eindeckung und Dämmung: 200-400€/m². Bei 100m² also 20.000-40.000€." },
    { question: "Wann muss der Dachstuhl erneuert werden?", answer: "Bei starkem Holzwurmbefall, Fäulnis, Schimmel, Rissen oder wenn Balken durchhängen. Wir prüfen das vor Ort." },
    { question: "Kann man im Haus wohnen während Dachstuhlarbeiten?", answer: "Bei kompletter Erneuerung meist nicht (Dach offen). Bei Teilsanierung oft möglich. Wir besprechen das vorher." },
    { question: "Wie lange dauert Dachstuhl erneuern?", answer: "Einfamilienhaus komplett: 2-4 Wochen inkl. neuer Eindeckung. Teilsanierung: wenige Tage." },
    { question: "Brauche ich eine Genehmigung?", answer: "Bei gleichbleibender Form meist nicht. Bei Änderung der Dachform (Aufstockung, Gaube) ja." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Dachstuhl sanieren & erneuern München | Zimmermeister-Qualität"
        description="Dachstuhl komplett erneuern: ✓ 80-150€/m² ✓ Teilsanierung ab 50€/m² ✓ Holzschutzbehandlung ✓ Verstärkung. Zimmermeister-Qualität für München & Bayern!"
        canonical="/dachstuhl-erneuern"
        keywords="dachstuhl erneuern münchen, dachstuhl sanieren kosten bayern, dachbalken erneuern preis, holzdachstuhl reparieren"
        aiSummary="Dachstuhl erneuern München und Umgebung: Komplett 80-150€/m², Teilsanierung 50-100€/m². 089Dach - Zimmermeister für Pasing, Solln, Grünwald. Tel: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Dachstuhl erneuern", url: "/dachstuhl-erneuern" }]} />
      <ServiceSchema pageName="Dachstuhl erneuern München" services={[{ name: "Dachstuhl-Sanierung", description: "Erneuerung und Reparatur" }]} />
      <ProductServiceSchema name="Dachstuhl erneuern" description="Professionelle Dachstuhl-Sanierung" priceFrom={50} priceTo={150} category="Dachstuhl" />
      <FAQPageSchema faqs={faqs} />
      
      <Navigation />
      
      <section className="relative py-20 text-white overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/95 via-amber-900/85 to-amber-800/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-amber-500/30">
              <Building className="w-5 h-5 text-amber-400" />
              <span className="font-medium text-amber-300">Tragwerk für Generationen</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"><strong>Dachstuhl erneuern</strong></h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-7xl mx-auto">Kompletterneuerung oder Teilsanierung – wir machen Ihren Dachstuhl wieder tragfähig.</p>
            <p className="text-lg text-white/70 mb-8">50-150€/m² • Zimmermeister-Qualität • Meisterbetrieb</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-8 py-6" data-testid="button-hero-callback"><Phone className="mr-2 h-5 w-5" />Kostenlose Beratung</Button></Link>
              <Link href="/beratung"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6" data-testid="button-hero-online">24h Online Termin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <BackButton />

      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Leistungen & Preise</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {kostenFaktoren.map((k, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6 flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">{k.name}</h3>
                    <p className="text-slate-600 text-sm">{k.beschreibung}</p>
                  </div>
                  <p className="text-xl font-bold text-amber-600 whitespace-nowrap ml-4">{k.preis}</p>
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

      <section className="py-6 bg-amber-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Dachstuhl prüfen lassen?</h2>
            <p className="text-xl text-white/90 mb-8">Kostenlose Begutachtung vor Ort</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-white text-amber-700 hover:bg-amber-50 text-lg px-8" data-testid="button-cta-callback">Beratung anfordern<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
              <Link href="/beratung"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online-cta">24h Online Termin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <EinzugsgebietSection />
      <LeadFunnel />
    </div>
  );
}
