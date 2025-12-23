import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, Award, Shield, Clock, Users, Wrench, Home, Star, MapPin } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, FAQPageSchema, ProductServiceSchema } from "@/components/SEO";
import BackButton from "@/components/BackButton";
import { Link } from "wouter";
import heroImage from '@assets/stock_images/roofer_working_on_ro_cb52da00.jpg';

export default function Dachdecker() {
  const leistungen = [
    { icon: Home, title: "Dacheindeckung", text: "Neueindeckung und Umdeckung mit allen Materialien", link: "/dach-neu-eindecken" },
    { icon: Wrench, title: "Dachreparatur", text: "Schnelle Reparatur von Schäden aller Art", link: "/dachreparatur" },
    { icon: Shield, title: "Dachabdichtung", text: "Professionelle Abdichtung von innen und außen", link: "/dach-abdichten" },
    { icon: Star, title: "Dachsanierung", text: "Komplettsanierung inkl. Dämmung", link: "/leistungen/dachsanierung" }
  ];

  const vorteile = [
    "Meisterbetrieb mit über 25 Jahren Erfahrung",
    "Festpreisgarantie – keine versteckten Kosten",
    "5 Jahre Gewährleistung auf alle Arbeiten",
    "Kostenlose Vor-Ort-Beratung",
    "Termintreue und saubere Arbeit",
    "24h Notdienst bei Sturmschäden"
  ];

  const stadtteile = [
    "Schwabing", "Bogenhausen", "Pasing", "Sendling", "Trudering", "Moosach",
    "Nymphenburg", "Harlaching", "Laim", "Neuhausen", "Solln", "Giesing"
  ];

  const faqs = [
    { question: "Wie finde ich einen guten Dachdecker in München?", answer: "Achten Sie auf: Meistertitel, langjährige Erfahrung, lokale Präsenz, transparente Preise und positive Bewertungen. 089Dach ist ein eingetragener Meisterbetrieb seit 1998 mit hunderten zufriedener Kunden in München." },
    { question: "Was kostet ein Dachdecker pro Stunde in München?", answer: "Der Stundensatz liegt zwischen 55-75€ netto. Wir arbeiten jedoch meist mit Festpreisen pro m² oder Pauschalen – so wissen Sie vorher genau, was die Arbeit kostet." },
    { question: "Wie schnell kann ein Dachdecker kommen?", answer: "Für normale Aufträge vereinbaren wir Termine innerhalb von 1-2 Wochen. Bei Notfällen (undichtes Dach, Sturmschaden) sind wir oft noch am selben Tag vor Ort." },
    { question: "Was macht ein Dachdecker alles?", answer: "Dacheindeckung, Dachreparatur, Dachsanierung, Dachabdichtung, Dachwartung, Dachfenstereinbau, Gauben, Schornsteineinfassung, Dachrinnenarbeiten, Flachdachabdichtung und vieles mehr." },
    { question: "Brauche ich eine Genehmigung für Dacharbeiten?", answer: "Für normale Reparaturen und Neueindeckungen nicht. Bei Dachaufstockungen, Gauben oder Änderungen der Dachform ist eine Baugenehmigung erforderlich. Wir beraten Sie dazu." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Dachdecker München | Meisterbetrieb seit 1998 | 089Dach GmbH"
        description="Dachdecker in München gesucht? ✓ Meisterbetrieb seit 1998 ✓ Dacheindeckung, Reparatur, Sanierung ✓ Festpreise ✓ 5 Jahre Garantie ✓ Kostenlose Beratung!"
        canonical="/dachdecker-muenchen"
        keywords="dachdecker münchen, dachdecker in meiner nähe, dachdecker meisterbetrieb münchen, dachdeckerfirma münchen, dachdecker notdienst münchen, dachdecker preise münchen, guter dachdecker münchen, dachdecker empfehlung münchen, zuverlässiger dachdecker"
        aiSummary="089Dach GmbH ist ein Dachdecker-Meisterbetrieb in München seit 1998. Leistungen: Dacheindeckung, Dachreparatur, Dachsanierung, Dachabdichtung, Notdienst. Festpreisgarantie und 5 Jahre Gewährleistung. Kostenlose Beratung unter 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Dachdecker München", url: "/dachdecker-muenchen" }]} />
      <ServiceSchema 
        pageName="Dachdecker München"
        services={[
          { name: "Dacheindeckung", description: "Neueindeckung und Umdeckung mit allen Materialien" },
          { name: "Dachreparatur", description: "Schnelle Reparatur von Dachschäden" },
          { name: "Dachsanierung", description: "Komplettsanierung inkl. Dämmung" },
          { name: "Notdienst", description: "24h Hilfe bei Sturmschäden und Undichtigkeiten" }
        ]}
      />
      <ProductServiceSchema 
        name="Dachdecker Meisterbetrieb München"
        description="Professionelle Dachdeckerarbeiten in München. Eindeckung, Reparatur, Sanierung und Notdienst."
        priceFrom={55}
        priceTo={180}
        category="Dachdeckerarbeiten"
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
            <div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-orange-500/30">
              <Award className="w-5 h-5 text-orange-400" />
              <span className="font-medium text-orange-300">Meisterbetrieb seit 1998</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"><strong>Dachdecker</strong> München</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-7xl mx-auto">
              Ihr zuverlässiger Dachdeckermeister für München und Umgebung – 
              von der kleinen Reparatur bis zur Komplettsanierung.
            </p>
            <p className="text-lg text-white/70 mb-8">
              Festpreisgarantie • 5 Jahre Gewährleistung • 24h Notdienst
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf/">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6" data-testid="button-hero-callback">
                  <Phone className="mr-2 h-5 w-5" />
                  Kostenlose Beratung
                </Button>
              </Link>
              <Link href="/beratung"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online">24h Online Termin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <BackButton />

      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-4">
              Unsere Dachdeckerleistungen
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-4xl mx-auto">
              Alles rund ums Dach aus einer Hand – fachgerecht und zuverlässig
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {leistungen.map((l, index) => (
                <Link key={index} href={l.link}>
                  <div className="bg-slate-50 rounded-xl p-6 text-center hover:bg-orange-50 hover:border-orange-200 border border-transparent transition-all cursor-pointer h-full">
                    <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <l.icon className="w-7 h-7 text-orange-600" />
                    </div>
                    <h3 className="font-semibold text-slate-800 mb-2">{l.title}</h3>
                    <p className="text-slate-600 text-sm">{l.text}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/leistungen//">
                <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                  Alle Leistungen ansehen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Warum 089Dach Ihr Dachdecker in München sein sollte
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {vorteile.map((vorteil, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">{vorteil}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              089Dach in Zahlen
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-5xl font-bold mb-2">25+</div>
                <p className="text-white/80">Jahre Erfahrung</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">2.500+</div>
                <p className="text-white/80">Projekte in München</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">4,9</div>
                <p className="text-white/80">Google Bewertung</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">24h</div>
                <p className="text-white/80">Notdienst</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 justify-center mb-8">
              <MapPin className="w-6 h-6 text-orange-600" />
              <h2 className="text-3xl font-bold text-slate-800">
                Dachdecker für ganz München
              </h2>
            </div>
            <p className="text-center text-slate-600 mb-8">
              Wir sind in allen Münchner Stadtteilen und im Umland für Sie da:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {stadtteile.map((stadtteil, index) => (
                <Link key={index} href={`/dachdecker-${stadtteil.toLowerCase()}`}>
                  <span className="px-4 py-2 bg-slate-100 rounded-full text-slate-700 hover:bg-orange-100 hover:text-orange-700 transition-colors cursor-pointer">
                    {stadtteil}
                  </span>
                </Link>
              ))}
              <Link href="/stadtteile">
                <span className="px-4 py-2 bg-orange-100 rounded-full text-orange-700 font-medium cursor-pointer hover:bg-orange-200">
                  Alle Stadtteile →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Häufige Fragen an unseren Dachdeckerbetrieb
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

      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Dachdecker gesucht? Wir sind für Sie da!
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Kostenlose Beratung und Festpreis-Angebot – unverbindlich und schnell
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf/">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8" data-testid="button-cta-callback">
                  Rückruf anfordern
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/beratung"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online">24h Online Termin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <LeadFunnel 
        headline="Dachdecker in München gesucht?"
        subheadline="Wir sind Ihr Meisterbetrieb."
        description="Ihr Dachdecker in München seit 1998 – Kompetenz, Erfahrung und faire Preise."
      />
      </main>
    </div>
  );
}
