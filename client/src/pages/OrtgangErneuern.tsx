import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIBeraterSection from "@/components/AIBeraterSection";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, ArrowLeftRight, Shield } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, FAQPageSchema, ProductServiceSchema } from "@/components/SEO";
import BackButton from "@/components/BackButton";
import EinzugsgebietSection from "@/components/EinzugsgebietSection";
import { Link } from "wouter";
import heroImage from '@assets/stock_images/roofer_working_on_ro_cb52da00.jpg';
import { CostEscalationBanner, DecisionPressureBanner } from "@/components/UrgencyBanner";

export default function OrtgangErneuern() {
  const leistungen = [
    { name: "Ortgangziegel erneuern", preis: "25-45€/lfm", beschreibung: "Seitliche Abschlussziegel" },
    { name: "Ortgangblech", preis: "30-50€/lfm", beschreibung: "Metall-Abschluss" },
    { name: "Holzverkleidung Ortgang", preis: "40-70€/lfm", beschreibung: "Mit Schalung" },
    { name: "Ortgang komplett", preis: "60-100€/lfm", beschreibung: "Holz + Blech + Ziegel" }
  ];

  const faqs = [
    { question: "Was kostet Ortgang erneuern?", answer: "Nur Ortgangziegel 25-45€/lfm, mit Blech 30-50€/lfm, komplett mit Holz 60-100€/lfm. Bei 10m Giebel: 250-1.000€." },
    { question: "Was ist der Ortgang?", answer: "Der seitliche Abschluss des Dachs am Giebel. Er schützt die Dachkante vor Wind und Regen." },
    { question: "Warum ist mein Ortgang kaputt?", answer: "Sturm, Alterung, Feuchtigkeit im Holz, lose Ziegel. Der Ortgang ist stark der Witterung ausgesetzt." },
    { question: "Muss ich den ganzen Ortgang machen?", answer: "Nicht unbedingt. Oft reicht Teilreparatur. Wir schauen uns das an und beraten ehrlich." },
    { question: "Kann der Wind unter den Ortgang greifen?", answer: "Bei schadhaftem Ortgang ja – und dann drohen größere Sturmschäden. Deshalb rechtzeitig reparieren." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Ortgang erneuern München | 25-100€/lfm | 089Dach"
        description="Ortgang erneuern München: ✓ Ortgangziegel 25-45€/lfm ✓ Ortgangblech ✓ Holzverkleidung ✓ Meisterbetrieb. Jetzt anfragen!"
        canonical="/ortgang-erneuern"
        keywords="ortgang erneuern, ortgang reparieren, ortgangziegel austauschen, ortgangblech, giebelabschluss, ortgang dach, ortgang kosten"
        aiSummary="Ortgang erneuern München: Ortgangziegel 25-45€/lfm, mit Blech 30-50€/lfm. 089Dach Meisterbetrieb. Tel: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Ortgang erneuern", url: "/ortgang-erneuern" }]} />
      <ServiceSchema pageName="Ortgang erneuern" services={[{ name: "Ortgangsanierung", description: "Erneuerung und Reparatur" }]} />
      <ProductServiceSchema name="Ortgang München" description="Ortgangerneuerung" priceFrom={25} priceTo={100} category="Ortgang" />
      <FAQPageSchema faqs={faqs} />
      
      <Navigation />
      <AIBeraterSection 
        pageName="Ortgang erneuern"
        description="Was ist ein Ortgang und warum ist er wichtig? Unser KI-Berater erklärt es."
      />
      
      <section className="relative py-20 text-white overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-orange-500/30">
              <ArrowLeftRight className="w-5 h-5 text-orange-400" />
              <span className="font-medium text-orange-300">Dachkante schützen</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"><strong>Ortgang erneuern</strong> München</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-7xl mx-auto">Seitlicher Dachabschluss kaputt? Wir erneuern Ortgangziegel, Blech und Holz.</p>
            <p className="text-lg text-white/70 mb-8">Ab 25€/lfm • Schnelle Reparatur • Meisterbetrieb</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-6" data-testid="button-hero-callback"><a href="/rueckruf/"><Phone className="mr-2 h-5 w-5" />Rückruf anfordern</a></Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online"><a href="/beratung">24h Online Termin</a></Button>
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
              {leistungen.map((l, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6 flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">{l.name}</h3>
                    <p className="text-slate-600 text-sm">{l.beschreibung}</p>
                  </div>
                  <p className="text-xl font-bold text-orange-600 whitespace-nowrap ml-4">{l.preis}</p>
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
            <h2 className="text-3xl font-bold mb-6">Ortgang beschädigt?</h2>
            <p className="text-xl text-white/90 mb-8">Schnelle Reparatur durch Meisterbetrieb</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-orange-700 hover:bg-orange-50 text-lg px-8" data-testid="button-cta-callback"><a href="/rueckruf/">Rückruf anfordern<ArrowRight className="ml-2 h-5 w-5" /></a></Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online-cta"><a href="/beratung">24h Online Termin</a></Button>
            </div>
          </div>
        </div>
      </section>

      <EinzugsgebietSection />
      <CostEscalationBanner />
      <LeadFunnel 
        headline="Ortgang erneuern in München?"
        subheadline="Wir reparieren den Dachrand."
        description="Ortgang erneuern vom Münchner Dachdecker – Schutz für die Giebelwand."
      />
      <DecisionPressureBanner />
    </div>
  );
}
