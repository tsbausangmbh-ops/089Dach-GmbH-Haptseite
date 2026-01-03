import Navbar from "@/components/Navbar";
import AIBeraterSection from "@/components/AIBeraterSection";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Phone, Clock, Shield, Droplets, CheckCircle2, ArrowRight, Camera, FileText, Wrench } from "lucide-react";
import { Link } from "wouter";
import SEO, { BreadcrumbSchema, ServiceSchema, FAQPageSchema, ProductServiceSchema } from "@/components/SEO";
import BackButton from "@/components/BackButton";
import heroImage from '@assets/stock_images/roofer_working_on_ro_cb52da00.jpg';
import { ServiceGeoLinks } from "@/components/GeoLinks";
import { TextWithKeywordLinks } from "@/components/KeywordLink";

export default function DachUndicht() {
  const sofortMassnahmen = [
    { icon: Droplets, titel: "Wasser auffangen", text: "Eimer, Schüsseln oder Wannen unter die Tropfstelle stellen" },
    { icon: Camera, titel: "Schaden dokumentieren", text: "Fotos von der Tropfstelle und Wasserflecken machen" },
    { icon: Phone, titel: "089Dach anrufen", text: "Wir kommen zur Notabdichtung – meist noch am selben Tag" },
    { icon: FileText, titel: "Versicherung informieren", text: "Bei Sturmschäden die Gebäudeversicherung benachrichtigen" }
  ];

  const ursachen = [
    { titel: "Sturmschaden", text: "Abgedeckte oder verschobene Ziegel nach Sturm", haeufigkeit: "Sehr häufig" },
    { titel: "Alterung", text: "Versprödete Dichtungen, gebrochene Ziegel nach 30+ Jahren", haeufigkeit: "Häufig" },
    { titel: "Verstopfte Rinne", text: "Überlaufendes Wasser dringt unter die Dachziegel", haeufigkeit: "Häufig" },
    { titel: "Undichte Anschlüsse", text: "Kamin, Dachfenster, Lüftungsrohre nicht richtig abgedichtet", haeufigkeit: "Mittel" },
    { titel: "Moos & Laub", text: "Verstopfte Entwässerung führt zu Rückstau", haeufigkeit: "Mittel" },
    { titel: "Eisbildung", text: "Eisstau an der Traufe drückt Wasser unter die Ziegel", haeufigkeit: "Im Winter" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Dach undicht München – Leckortung & Reparatur Sofort-Termin"
        description="Wassereintritt? Wir finden das Leck, dichten Ihr Dach dauerhaft ab & bieten transparente Festpreise. 24/7 Soforthilfe – heute noch Termin sichern!"
        canonical="https://089dach.de/dach-undicht"
        keywords="Dach undicht München, Dachleck finden München, Wasserschaden Dach reparieren München, Leckortung Dach München, Dach abdichten München, Notdienst Dach undicht München, Flachdach undicht München"
        aiSummary="Dach undicht in München? 089Dach GmbH hilft mit Notabdichtung innerhalb von 24 Stunden. Leckortung, Sofortreparatur und Versicherungsdokumentation. Meisterbetrieb seit 1998. Notfall-Telefon: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Dach undicht", url: "/dach-undicht" }]} />
      <ServiceSchema 
        pageName="Dach undicht Soforthilfe München"
        services={[
          { name: "Notabdichtung", description: "Provisorische Abdichtung um Folgeschäden zu verhindern" },
          { name: "Leckortung", description: "Professionelle Suche der undichten Stelle" },
          { name: "Dauerreparatur", description: "Fachgerechte Behebung der Ursache" }
        ]}
      />
      <ProductServiceSchema 
        name="Dach undicht Soforthilfe München"
        description="Notfall-Service bei undichtem Dach. Schnelle Leckortung und Abdichtung innerhalb von 24 Stunden."
        priceFrom={150}
        priceTo={500}
        category="Notdienst"
      />
      <FAQPageSchema faqs={[
        { question: "Dach undicht – was tun als Erstes?", answer: "1. Eimer unter die Tropfstelle. 2. Möbel und Wertgegenstände schützen. 3. Schaden fotografieren. 4. Uns anrufen unter 089 12621964. Wir kommen in der Regel innerhalb von 24 Stunden." },
        { question: "Wie schnell können Sie bei einem undichten Dach helfen?", answer: "Bei Notfällen versuchen wir, noch am selben Tag zur Notabdichtung zu kommen. Spätestens innerhalb von 24 Stunden sind wir vor Ort." },
        { question: "Was kostet die Reparatur eines undichten Dachs?", answer: "Kleine Reparaturen (1-2 Ziegel, Anschluss abdichten) ab 150€. Größere Schäden nach Begutachtung. Wir erstellen vorab einen Festpreis-Kostenvoranschlag." },
        { question: "Zahlt die Versicherung ein undichtes Dach?", answer: "Bei Sturmschäden (ab Windstärke 8) und Hagelschäden: ja, die Wohngebäudeversicherung zahlt. Bei Alterung und mangelnder Wartung: nein. Wir dokumentieren den Schaden für Sie." },
        { question: "Wie finde ich die undichte Stelle im Dach?", answer: "Von innen: Wasserflecken und feuchte Stellen am Dachboden. Von außen: Verschobene/gebrochene Ziegel, undichte Anschlüsse. Wir machen professionelle Leckortung mit Sichtkontrolle." }
      ]} />
      <Navbar />
      <main id="main-content" role="main" tabIndex={-1}>
      <AIBeraterSection 
        pageName="Dach undicht"
        description="Was tun bei einem undichten Dach? Unser KI-Berater erklärt Sofortmaßnahmen und Reparaturoptionen."
      />
      
      <section className="relative py-20 text-white overflow-hidden min-h-[60vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
          <div className="max-w-5xl text-white">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <AlertTriangle className="h-6 w-6 text-yellow-400 animate-pulse" />
              <span className="text-yellow-400 font-bold tracking-wider uppercase text-sm">Notfall-Service</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 md:mb-6">
              Dach undicht? Wir helfen sofort!
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-xl mb-4">
              Ein undichtes Dach kann schnell zu großen Schäden führen. 
              Wir kommen zur Notabdichtung – meist noch am selben Tag.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <Link href="/beratung"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online">24h Online Termin</Button></Link>
              <a href="/kontakt/">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-900" data-testid="button-contact-hero">
                  Kontakt aufnehmen
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-yellow-100 py-3 border-b border-yellow-300">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium">
            <span className="flex items-center gap-2 text-yellow-800"><Clock className="h-5 w-5" />In 24h vor Ort</span>
            <span className="flex items-center gap-2 text-yellow-800"><Shield className="h-5 w-5" />Versicherungshilfe</span>
            <span className="flex items-center gap-2 text-yellow-800"><Wrench className="h-5 w-5" />Sofort-Reparatur</span>
          </div>
        </div>
      </div>

      <BackButton />

      <section className="py-4 md:py-6">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-8 text-center">
            <strong>Dach undicht</strong> – Was Sie jetzt tun sollten
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {sofortMassnahmen.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border-2 border-primary/20 shadow-sm text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-secondary mb-2">{idx + 1}. {item.titel}</h3>
                <p className="text-muted-foreground text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-4 md:py-6 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-8 text-center">
            Häufige Ursachen für undichte Dächer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {ursachen.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-secondary">{item.titel}</h3>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{item.haeufigkeit}</span>
                </div>
                <p className="text-muted-foreground text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-4 md:py-6">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-6 text-center">
              So läuft unsere Soforthilfe ab
            </h2>
            <div className="space-y-4">
              {[
                { schritt: "1", titel: "Telefonische Erstberatung", text: "Sie schildern das Problem, wir geben erste Tipps zur Schadensbegrenzung und vereinbaren einen Termin." },
                { schritt: "2", titel: "Vor-Ort-Begutachtung", text: "Wir kommen in der Regel innerhalb von 24h, finden die undichte Stelle und erstellen einen Kostenvoranschlag." },
                { schritt: "3", titel: "Notabdichtung", text: "Bei akutem Wassereintritt dichten wir provisorisch ab, um Folgeschäden zu verhindern." },
                { schritt: "4", titel: "Dauerhafte Reparatur", text: "Nach Ihrer Freigabe beheben wir die Ursache fachgerecht und nachhaltig." },
                { schritt: "5", titel: "Dokumentation", text: "Sie erhalten Fotos und Rechnung für Ihre Versicherung." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start bg-stone-50 rounded-xl p-4">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                    {item.schritt}
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary">{item.titel}</h3>
                    <p className="text-muted-foreground text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 md:py-6 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-4">
              Nicht warten – handeln!
            </h2>
            <p className="text-muted-foreground mb-6">
              Je länger Wasser eindringt, desto größer der Schaden. Schimmel, faule Balken, 
              kaputte Dämmung – das wird schnell teuer. Rufen Sie jetzt an!
            </p>
            <Link href="/beratung"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online">24h Online Termin</Button></Link>
          </div>
        </div>
      </section>

      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <ServiceGeoLinks currentService="Dachreparatur" />
          </div>
        </div>
      </section>

      <LeadFunnel 
        headline="Dach undicht in München?"
        subheadline="Wir finden und beheben die Ursache."
        description="Schnelle Hilfe bei undichtem Dach – Notabdichtung in 24h vom Münchner Meisterbetrieb."
      />
      </main>
    </div>
  );
}
