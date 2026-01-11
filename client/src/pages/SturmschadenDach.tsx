import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIBeraterSection from "@/components/AIBeraterSection";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, Wind, AlertTriangle, FileText, Camera, Clock, Shield } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, FAQPageSchema, ProductServiceSchema } from "@/components/SEO";
import BackButton from "@/components/BackButton";
import { Link } from "wouter";
import heroImage from '@assets/stock_images/roofer_working_on_ro_cb52da00.jpg';
import { ServiceGeoLinks } from "@/components/GeoLinks";
import { TextWithKeywordLinks } from "@/components/KeywordLink";
import { CostEscalationBanner, DecisionPressureBanner } from "@/components/UrgencyBanner";

export default function SturmschadenDach() {
  const sofortMassnahmen = [
    { icon: Camera, title: "1. Schaden dokumentieren", text: "Fotos von allen Schäden machen – wichtig für die Versicherung" },
    { icon: AlertTriangle, title: "2. Gefahrenbereich sichern", text: "Lose Teile können herunterfallen – Abstand halten" },
    { icon: Phone, title: "3. Uns anrufen", text: "24h-Notdienst: 089 12621964 – wir sichern Ihr Dach" },
    { icon: FileText, title: "4. Versicherung melden", text: "Schaden innerhalb von 7 Tagen bei Ihrer Versicherung melden" }
  ];

  const leistungen = [
    "Sofort-Notsicherung des Dachs",
    "Provisorische Abdichtung mit Planen",
    "Entfernung loser Dachziegel",
    "Dokumentation für Versicherung",
    "Dauerhafte Reparatur nach Freigabe",
    "Direktabrechnung mit Versicherungen"
  ];

  const faqs = [
    { question: "Wer zahlt Sturmschäden am Dach?", answer: "Die Wohngebäudeversicherung übernimmt Sturmschäden ab Windstärke 8 (ca. 62 km/h). Wir dokumentieren den Schaden versicherungsgerecht und helfen bei der Schadenmeldung." },
    { question: "Wie schnell können Sie nach einem Sturm kommen?", answer: "Bei Notfällen kommen wir in der Regel am gleichen Tag zur Notsicherung. Nach großflächigen Stürmen kann es 1-2 Tage dauern, da viele Dächer betroffen sind." },
    { question: "Was kostet die Sturmschaden-Reparatur?", answer: "Die Notsicherung kostet ab 150€. Die Reparaturkosten hängen vom Schadensumfang ab. Bei versicherten Schäden rechnen wir direkt mit Ihrer Versicherung ab." },
    { question: "Muss ich den Sturm der Versicherung beweisen?", answer: "Nein, Versicherungen prüfen selbst die Wetterdaten. Wichtig ist die schnelle Meldung (innerhalb 7 Tage) und gute Dokumentation des Schadens." },
    { question: "Was tun, wenn noch ein Sturm kommt?", answer: "Bei unserer Notsicherung verwenden wir sturmsichere Planen und Verankerungen. Die provisorische Abdichtung hält auch weiteren Stürmen stand, bis die Reparatur erfolgt." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Sturmschaden Dach München | 24h Notdienst | Versicherung | 089Dach"
        description="Sturmschaden am Dach in München? ✓ 24h Notdienst ✓ Sofort-Notsicherung ✓ Direktabrechnung mit Versicherung ✓ Meisterbetrieb ✓ Jetzt anrufen: 089 12621964"
        canonical="/sturmschaden-dach"
        keywords="sturmschaden dach münchen, sturm dachziegel abgedeckt, dach sturm versicherung, notsicherung dach sturm, dachdecker notdienst sturm, sturmschaden reparatur, dach nach sturm, ziegel vom dach geweht, sturmschaden melden, sturmschaden gutachter, was kostet sturmschaden dach reparieren münchen, sturmschaden dach münchen erfahrungen, wie lange dauert sturmschaden reparatur, sturmschaden dach kosten pro qm, sturmschaden dach münchen günstig, sturmschaden dach festpreis münchen, sturmschaden dach preisvergleich, sturmschaden dach dringend münchen, sturmschaden dach schnell münchen, sturmschaden dach notfall, sturmschaden dach meisterbetrieb münchen, sturmschaden dach fachbetrieb münchen, sturmschaden dach handwerker münchen"
        aiSummary="Sturmschaden am Dach in München? 089Dach GmbH bietet 24h-Notdienst mit Sofort-Notsicherung. Direktabrechnung mit Versicherung möglich. Notsicherung ab 150€. Tel: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Sturmschaden Dach", url: "/sturmschaden-dach" }]} />
      <ServiceSchema 
        pageName="Sturmschaden Dach München"
        services={[
          { name: "Notsicherung", description: "Schnelle Sicherung des beschädigten Dachs gegen Witterung" },
          { name: "Dokumentation", description: "Versicherungsgerechte Fotodokumentation aller Schäden" },
          { name: "Dauerreparatur", description: "Fachgerechte Reparatur nach Versicherungsfreigabe" }
        ]}
      />
      <ProductServiceSchema 
        name="Sturmschaden Dach Reparatur München"
        description="Schnelle Hilfe bei Sturmschäden am Dach. 24h-Notdienst, Notsicherung und Direktabrechnung mit Versicherung."
        priceFrom={150}
        priceTo={2000}
        category="Notdienst"
      />
      <FAQPageSchema faqs={faqs} />
      
      <Navigation />
      <AIBeraterSection 
        pageName="Sturmschaden Dach"
        description="Wie melde ich einen Sturmschaden? Unser KI-Berater erklärt die Schritte."
      />
      
      <section className="relative py-20 text-white overflow-hidden min-h-[60vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-red-500/30">
              <Wind className="w-5 h-5 text-red-400" />
              <span className="font-medium text-red-300">24h Sturmschaden-Notdienst</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"><strong>Sturmschaden am Dach</strong>?</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-7xl mx-auto">
              Schnelle Notsicherung und professionelle Reparatur. 
              Wir rechnen direkt mit Ihrer Versicherung ab.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online"><a href="/beratung">24h Online Termin</a></Button>
              
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6" data-testid="button-hero-callback">
                  Rückruf anfordern
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BackButton />

      <section className="py-6 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              <strong>Sturmschaden</strong>? Das sollten Sie jetzt tun:
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sofortMassnahmen.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm text-center">
                  <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Unsere <strong>Sturmschaden</strong>-Leistungen in <strong>München</strong>
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {leistungen.map((leistung, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-slate-700">{leistung}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Versicherungsabwicklung – wir kümmern uns
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Dokumentation</h3>
                <p className="text-white/70">Professionelle Fotodokumentation aller Schäden</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Schadenbericht</h3>
                <p className="text-white/70">Detaillierter Bericht für Ihre Versicherung</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Direktabrechnung</h3>
                <p className="text-white/70">Wir rechnen direkt mit der Versicherung ab</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Häufige Fragen zu <strong>Sturmschäden</strong> am <strong>Dach</strong>
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">{faq.question}</h3>
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Sturmschaden? Jetzt Hilfe holen!
            </h2>
            <p className="text-xl text-white/90 mb-8">
              24h Notdienst für schnelle Notsicherung und Reparatur
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online"><a href="/beratung">24h Online Termin</a></Button>
              
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-cta-callback">
                  Rückruf anfordern
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ServiceGeoLinks currentService="Sturmschaden" />
      <CostEscalationBanner />
      <LeadFunnel 
        headline="Sturmschaden Dach in München?"
        subheadline="Wir reparieren und dokumentieren."
        description="24h Notdienst bei Sturmschäden am Dach – Notsicherung und Direktabrechnung mit Versicherung."
      />
      <DecisionPressureBanner />
      <Footer />
    </div>
  );
}
