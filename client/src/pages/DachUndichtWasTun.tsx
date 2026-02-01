import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Phone, AlertTriangle, ArrowRight, Droplets, Shield, Clock, CheckCircle2 } from "lucide-react";
import SEO, { BreadcrumbSchema, ServiceSchema, FAQPageSchema, ProductServiceSchema } from "@/components/SEO";
import BackButton from "@/components/BackButton";
import EinzugsgebietSection from "@/components/EinzugsgebietSection";
import { Link } from "wouter";
import heroImage from '@assets/optimized/roofer_working.webp';
import { ServiceGeoLinks } from "@/components/GeoLinks";
import { TextWithKeywordLinks } from "@/components/KeywordLink";
import { CostEscalationBanner, DecisionPressureBanner } from "@/components/UrgencyBanner";

export default function DachUndichtWasTun() {
  const sofortmassnahmen = [
    { nr: "1", title: "Wasser auffangen", text: "Eimer oder Wannen unter die Tropfstelle stellen, Handtücher auslegen" },
    { nr: "2", title: "Möbel schützen", text: "Wertvolle Möbel und Elektronik aus dem Bereich entfernen oder abdecken" },
    { nr: "3", title: "Strom abstellen", text: "Bei Wasser in der Nähe von Steckdosen: Sicherung raus!" },
    { nr: "4", title: "Dachdecker rufen", text: "Je schneller die Ursache behoben wird, desto weniger Folgeschäden" },
    { nr: "5", title: "Dokumentieren", text: "Fotos machen für die Versicherung" }
  ];

  const ursachen = [
    { title: "Beschädigte Ziegel", text: "Gebrochene, verschobene oder fehlende Dachziegel", loesung: "Ziegel austauschen ab 80€" },
    { title: "Undichte Anschlüsse", text: "Kamin, Dachfenster, Lüftungsrohre schlecht abgedichtet", loesung: "Anschluss erneuern ab 150€" },
    { title: "Verstopfte Dachrinne", text: "Wasser staut sich und drückt unter die Ziegel", loesung: "Rinnenreinigung ab 80€" },
    { title: "Alterung", text: "Nach 40-50 Jahren werden Dachziegel porös", loesung: "Neueindeckung ab 60€/m²" },
    { title: "Sturmschaden", text: "Lose oder abgedeckte Ziegel nach Sturm", loesung: "Notsicherung ab 200€" },
    { title: "Moos & Algen", text: "Bewuchs hebt die Ziegel an und hält Feuchtigkeit", loesung: "Dachreinigung ab 15€/m²" }
  ];

  const faqs = [
    { question: "Was tun wenn Wasser durch die Decke tropft?", answer: "Sofort Wasser auffangen, Möbel schützen, bei Stromgefahr Sicherung raus, dann Dachdecker rufen. Bei starkem Wassereinbruch: Feuerwehr kann helfen." },
    { question: "Zahlt die Versicherung bei undichtem Dach?", answer: "Bei Sturmschäden (ab Windstärke 8) und Hagelschäden ja. Bei Alterung oder mangelnder Wartung nicht. Wir dokumentieren für Sie." },
    { question: "Wie schnell können Sie kommen?", answer: "Bei Notfällen versuchen wir, noch am selben Tag zu kommen. Normale Termine innerhalb von 24-48 Stunden." },
    { question: "Kann ich das Dach provisorisch selbst abdichten?", answer: "Für kurze Zeit: Plane oder Folie auflegen und beschweren. Aber Vorsicht: Unfallgefahr! Besser den Fachmann rufen." },
    { question: "Wie finde ich die undichte Stelle?", answer: "Das ist oft schwierig, da Wasser innen an anderer Stelle austritt als außen eindringt. Wir machen professionelle Leckortung." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Dach undicht – was tun? | Notfall-Ratgeber | Soforthilfe München"
        description="Wasser tropft durch die Decke? ✓ 5 Sofortmaßnahmen ✓ Häufige Ursachen ✓ Notdienst am selben Tag ✓ Reparatur ab 150€. Dachdecker München 24h erreichbar!"
        canonical="/dach-undicht-was-tun"
        keywords="dach undicht was tun münchen, wasser tropft durch decke hilfe, dach notdienst münchen, undichtes dach reparieren, dach leckt was tun, was kostet dach undicht reparieren münchen, dach undicht münchen erfahrungen, wie lange dauert dach undicht reparatur, dach undicht reparieren selber machen oder profi, dach undicht kosten pro qm, dach undicht münchen günstig, dach undicht festpreis münchen, dach undicht preisvergleich, dach undicht dringend münchen, dach undicht schnell münchen, dach undicht notfall, dach undicht meisterbetrieb münchen, dach undicht fachbetrieb münchen, dach undicht handwerker münchen"
        aiSummary="Dach undicht Soforthilfe München: Wasser auffangen, Möbel schützen, Strom abstellen, Dachdecker rufen. 089Dach Notdienst in München, Schwabing, Bogenhausen - oft am selben Tag. Tel: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Dach undicht - was tun?", url: "/dach-undicht-was-tun" }]} />
      <ServiceSchema pageName="Dach undicht Soforthilfe" services={[{ name: "Notdienst", description: "Schnelle Hilfe bei undichtem Dach" }]} />
      <ProductServiceSchema name="Dach-Notdienst München" description="Schnelle Hilfe bei undichtem Dach" priceFrom={150} priceTo={500} category="Notdienst" />
      <FAQPageSchema faqs={faqs} />
      
      <Navigation />
      
      <main id="main-content" role="main" tabIndex={-1}>
      <section className="relative py-20 text-white overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/95 via-red-900/85 to-red-800/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-red-500/30 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-red-400/50">
              <AlertTriangle className="w-5 h-5 text-red-300" />
              <span className="font-medium text-red-200">Notfall-Ratgeber</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"><strong>Dach undicht</strong> – was tun?</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-7xl mx-auto">Ihr Dach ist undicht? Keine Panik! Hier erfahren Sie, was Sie sofort tun können und wie wir Ihnen schnell helfen.</p>
            <p className="text-lg text-white/80 mb-8">Notdienst München • Oft am selben Tag • 24h erreichbar</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online-cta"><a href="/beratung">24h Online Termin</a></Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6" data-testid="button-hero-callback"><a href="/rueckruf/">Rückruf anfordern</a></Button>
            </div>
          </div>
        </div>
      </section>

      <BackButton />

      <section className="py-6 bg-red-50 border-b-4 border-red-500">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-4 flex items-center justify-center gap-3">
              <AlertTriangle className="w-8 h-8 text-red-600" />
              Sofortmaßnahmen bei undichtem Dach
            </h2>
            <p className="text-center text-slate-600 mb-10">Das sollten Sie jetzt tun:</p>
            <div className="space-y-4">
              {sofortmassnahmen.map((m, index) => (
                <div key={index} className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">{m.nr}</div>
                  <div>
                    <h3 className="font-semibold text-slate-800">{m.title}</h3>
                    <p className="text-slate-600">{m.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-4"><strong>Dach undicht</strong> – Warum und was tun?</h2>
            <p className="text-center text-slate-600 mb-12">Häufige Ursachen und was die Reparatur kostet</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ursachen.map((u, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6">
                  <h3 className="font-semibold text-slate-800 mb-2">{u.title}</h3>
                  <p className="text-slate-600 text-sm mb-3">{u.text}</p>
                  <p className="text-blue-600 font-medium text-sm">{u.loesung}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Schnelle Hilfe bei undichtem Dach</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-5xl font-bold text-red-400 mb-2">24h</div>
                <p className="text-white/80">Notfall-Hotline erreichbar</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-red-400 mb-2">&lt;4h</div>
                <p className="text-white/80">Vor Ort bei Notfällen</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-red-400 mb-2">ab 150€</div>
                <p className="text-white/80">Sofort-Reparatur</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Häufige Fragen bei undichtem Dach</h2>
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

      <section className="py-6 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Dach undicht? Wir helfen sofort!</h2>
            <p className="text-xl text-white/90 mb-8">Rufen Sie uns jetzt an – wir sind schnellstmöglich bei Ihnen.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-online-cta"><a href="/beratung">24h Online Termin</a></Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" data-testid="button-cta-callback"><a href="/rueckruf/">Rückruf anfordern<ArrowRight className="ml-2 h-5 w-5" /></a></Button>
            </div>
          </div>
        </div>
      </section>

      <EinzugsgebietSection />
      
      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <ServiceGeoLinks currentService="Dachreparatur" />
          </div>
        </div>
      </section>

      <CostEscalationBanner />
      <LeadFunnel 
        headline="Dach undicht – was tun?"
        subheadline="Wir zeigen Ihnen die Lösung."
        description="Dach undicht? Was tun? Schnelle Hilfe vom Münchner Dachdecker in 24h."
      />
      <DecisionPressureBanner />
      </main>
    </div>
  );
}
