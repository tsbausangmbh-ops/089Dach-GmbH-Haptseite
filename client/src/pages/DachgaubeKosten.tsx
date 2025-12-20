import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, Home, Shield, Sun, Euro } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, FAQPageSchema, ProductServiceSchema } from "@/components/SEO";
import RelatedServices from "@/components/RelatedServices";
import EinzugsgebietSection from "@/components/EinzugsgebietSection";
import { Link } from "wouter";
import heroImage from '@assets/stock_images/roofer_working_on_ro_cb52da00.jpg';

export default function DachgaubeKosten() {
  const gaubenTypen = [
    { name: "Schleppgaube", preis: "4.000-8.000€", beschreibung: "Einfachste Form, schräges Dach, günstig" },
    { name: "Satteldachgaube", preis: "6.000-12.000€", beschreibung: "Klassiker mit eigenem Giebel, viel Licht" },
    { name: "Flachdachgaube", preis: "5.000-10.000€", beschreibung: "Modern, maximaler Raumgewinn" },
    { name: "Spitzgaube", preis: "7.000-15.000€", beschreibung: "Dekorativ, für historische Häuser" },
    { name: "Trapezgaube", preis: "8.000-16.000€", beschreibung: "Viel Platz, moderne Optik" },
    { name: "Rundgaube", preis: "10.000-20.000€", beschreibung: "Exklusiv, handwerklich anspruchsvoll" }
  ];

  const kostenFaktoren = [
    { title: "Größe", text: "Breitere und höhere Gauben kosten mehr" },
    { title: "Bauart", text: "Komplexe Formen (Rund, Trapez) sind teurer" },
    { title: "Verglasung", text: "Große Fenster erhöhen den Preis" },
    { title: "Statik", text: "Manchmal muss der Dachstuhl verstärkt werden" },
    { title: "Genehmigung", text: "Architekt und Bauantrag kosten ca. 500-1.500€" },
    { title: "Dämmung", text: "Nach EnEV gedämmt: ca. 20-30% Aufpreis" }
  ];

  const faqs = [
    { question: "Was kostet eine Dachgaube komplett?", answer: "Eine einfache Schleppgaube ab 4.000€, eine Satteldachgaube 6.000-12.000€, Trapez- oder Rundgauben 8.000-20.000€. Inkl. Einbau, Dämmung und Verkleidung." },
    { question: "Brauche ich eine Baugenehmigung für eine Gaube?", answer: "In Bayern ja, fast immer. Gauben verändern die Dachfläche und Kubatur. Wir helfen beim Bauantrag und arbeiten mit Architekten zusammen." },
    { question: "Wie lange dauert der Einbau einer Gaube?", answer: "Eine vorgefertigte Gaube ist in 2-3 Tagen eingebaut. Bei Sonderanfertigung vor Ort 1-2 Wochen. Vorbereitungen (Statik, Genehmigung) dauern länger." },
    { question: "Lohnt sich eine Gaube finanziell?", answer: "Ja! Eine Gaube schafft ca. 5-15m² zusätzlichen Wohnraum und steigert den Immobilienwert oft um mehr als die Investition." },
    { question: "Kann jedes Dach eine Gaube bekommen?", answer: "Die meisten schon, wenn die Dachneigung mind. 30° beträgt. Bei Flachdächern oder sehr alten Dachstühlen muss man prüfen." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Was kostet eine Dachgaube? | 4.000-20.000€ München | Alle Typen"
        description="Dachgaube einbauen lassen München: ✓ Schleppgaube ab 4.000€ ✓ Satteldachgaube 6.000-12.000€ ✓ Inkl. Baugenehmigung ✓ Mehr Wohnraum vom Meisterbetrieb!"
        canonical="/dachgaube-kosten"
        keywords="dachgaube kosten münchen, gaube einbauen preis, schleppgaube kosten bayern, satteldachgaube preis, dachgaube nachträglich einbauen"
        aiSummary="Dachgaube Kosten München: Schleppgaube 4.000-8.000€, Satteldachgaube 6.000-12.000€, Trapezgaube 8.000-16.000€. 089Dach baut Gauben in München, Pasing, Solln inkl. Genehmigung. Tel: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Dachgaube Kosten", url: "/dachgaube-kosten" }]} />
      <ServiceSchema pageName="Dachgaube Kosten München" services={[{ name: "Gaubeneinbau", description: "Alle Gaubentypen vom Meisterbetrieb" }]} />
      <ProductServiceSchema name="Dachgaube München" description="Professioneller Gaubeneinbau inkl. Genehmigung" priceFrom={4000} priceTo={20000} category="Gaubenbau" />
      <FAQPageSchema faqs={faqs} />
      
      <Navigation />
      
      <section className="relative py-20 text-white overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-amber-500/30">
              <Home className="w-5 h-5 text-amber-400" />
              <span className="font-medium text-amber-300">Mehr Wohnraum schaffen</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"><strong>Dachgaube Kosten</strong></h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-6xl mx-auto">Mehr Platz, mehr Licht, mehr Wert – alle Gaubentypen und Preise im Überblick.</p>
            <p className="text-lg text-white/70 mb-8">Ab 4.000€ • Inkl. Genehmigung • Meisterbetrieb</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-8 py-6" data-testid="button-hero-callback"><Phone className="mr-2 h-5 w-5" />Kostenlose Beratung</Button></Link>
              <Link href="/beratung"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6" data-testid="button-hero-online">24h Online Termin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-4">Gaubentypen & Preise</h2>
            <p className="text-center text-slate-600 mb-12">Alle Preise inkl. Einbau, Dämmung und Innenverkleidung</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gaubenTypen.map((g, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{g.name}</h3>
                  <p className="text-2xl font-bold text-amber-600 mb-3">{g.preis}</p>
                  <p className="text-slate-600 text-sm">{g.beschreibung}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Was beeinflusst den Preis?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {kostenFaktoren.map((f, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-semibold text-slate-800 mb-2">{f.title}</h3>
                  <p className="text-slate-600 text-sm">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Beispielrechnung: Satteldachgaube 1,5m breit</h2>
            <div className="grid md:grid-cols-4 gap-4 text-left max-w-6xl mx-auto mb-8">
              <div className="bg-white/10 rounded-lg p-4"><p className="text-sm text-white/80">Gaube fertig</p><p className="font-bold">6.500€</p></div>
              <div className="bg-white/10 rounded-lg p-4"><p className="text-sm text-white/80">Einbau</p><p className="font-bold">2.500€</p></div>
              <div className="bg-white/10 rounded-lg p-4"><p className="text-sm text-white/80">Innenausbau</p><p className="font-bold">1.500€</p></div>
              <div className="bg-white/10 rounded-lg p-4"><p className="text-sm text-white/80">Genehmigung</p><p className="font-bold">800€</p></div>
            </div>
            <p className="text-3xl font-bold">Gesamt: ca. 11.300€</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Häufige Fragen zu Dachgauben</h2>
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

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Gaube planen lassen?</h2>
            <p className="text-xl text-slate-600 mb-8">Kostenlose Erstberatung – wir prüfen die Machbarkeit und erstellen ein Angebot.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rueckruf"><Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-8" data-testid="button-cta-callback">Beratung anfordern<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
              <Link href="/beratung"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online-cta">24h Online Termin</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <EinzugsgebietSection />
      <LeadFunnel />
      <RelatedServices currentPage="gaube" />
      <Footer />
    </div>
  );
}
