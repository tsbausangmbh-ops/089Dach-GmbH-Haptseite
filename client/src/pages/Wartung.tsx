import Navbar from "@/components/Navbar";
import AIBeraterSection from "@/components/AIBeraterSection";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CalendarCheck, Shield, Clock, Mail, Search, Droplets, Leaf, Check, Quote, PhoneCall, ArrowRight, ShieldCheck, Award, Users, ClipboardCheck, Settings } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import SEO, { BreadcrumbSchema, ServiceSchema, HowToSchema, ProductServiceSchema, FAQPageSchema, LocalBusinessSchema } from "@/components/SEO";
import AIEnhancedFAQ from "@/components/AIEnhancedFAQ";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import CTACluster from "@/components/CTACluster";
import ProofStack from "@/components/ProofStack";
import ProcessSteps from "@/components/ProcessSteps";
import heroImage from "@assets/generated_images/roofer_tools_arranged_cleanly.png";
import BackButton from "@/components/BackButton";
import { TextWithKeywordLinks } from "@/components/KeywordLink";
import ImageGallery from "@/components/ImageGallery";
import wartungImg1 from "@assets/generated_images/roofer_working_on_red_tile_roof_munich.png";
import wartungImg2 from "@assets/generated_images/aged_red_roof_tiles_closeup.png";
import wartungImg3 from "@assets/generated_images/copper_roof_gutter_detail.png";
import wartungImg4 from "@assets/generated_images/realistic_renovated_roof_obermenzing_after.png";

export default function Wartung() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          problem: "Wartungsanfrage",
          timing: "Rückruf gewünscht",
          details: `Adresse: ${formData.address}\n\nNachricht: ${formData.message}`,
          name: formData.name,
          phone: formData.phone,
          email: formData.email
        })
      });

      if (response.ok) {
        toast.success("Anfrage gesendet!", {
          description: "Wir melden uns zeitnah bei Ihnen."
        });
        setFormData({ name: "", email: "", phone: "", address: "", message: "" });
      } else {
        toast.error("Fehler beim Senden", {
          description: "Bitte versuchen Sie es erneut oder schreiben Sie uns direkt per E-Mail."
        });
      }
    } catch {
      toast.error("Verbindungsfehler", {
        description: "Bitte schreiben Sie uns an info@089dach.de"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const wartungsLeistungen = [
    { icon: Search, title: "Dachinspektion", desc: "Gründliche Sichtprüfung aller Dachelemente, Dokumentation und Zustandsbericht." },
    { icon: Droplets, title: "Dachrinnenreinigung", desc: "Säuberung von Rinnen und Fallrohren, damit Regenwasser immer gut abfließen kann." },
    { icon: Leaf, title: "Moos- & Laubentfernung", desc: "Entfernung von Moos, Laub und Ablagerungen – für ein sauberes, langlebiges Dach." },
    { icon: Settings, title: "Kleinreparaturen", desc: "Sofortige Behebung kleiner Mängel wie lose Ziegel, undichte Anschlüsse oder defekte Dichtungen." }
  ];

  const advantages = [
    { title: "Schäden früh erkennen", desc: "Regelmäßige Kontrolle verhindert teure Folgeschäden" },
    { title: "Lebensdauer verlängern", desc: "Gepflegtes Dach hält deutlich länger" },
    { title: "Garantie erhalten", desc: "Viele Hersteller verlangen regelmäßige Wartung" },
    { title: "Werterhalt", desc: "Ein gepflegtes Dach steigert den Immobilienwert" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Dachwartung München – Inspektion, Reinigung & Prävention"
        description="Dachwartung München: Regelmäßige Inspektion, Reinigung & Prävention. Schäden früh erkennen, Kosten sparen, Lebensdauer verlängern."
        canonical="https://089dach.de/leistungen/wartung"
        keywords="Dachwartung München, Dachinspektion München, Dach Reinigung München, Dachpflege, Dachprüfung"
        aiSummary="089Dach GmbH bietet Dachwartung in München ab 250€: Jährliche Dachinspektion, Dachrinnenreinigung, Moosentfernung und Kleinreparaturen. Schäden früh erkennen und teure Folgeschäden vermeiden. Telefon: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Leistungen", url: "/leistungen" }, { name: "Wartung", url: "/leistungen/wartung" }]} />
      <ServiceSchema 
        pageName="Dachwartung München"
        services={[
          { name: "Dachinspektion", description: "Gründliche Sichtprüfung aller Dachelemente mit Dokumentation" },
          { name: "Dachrinnenreinigung", description: "Professionelle Säuberung von Rinnen und Fallrohren" },
          { name: "Moos- & Laubentfernung", description: "Entfernung von Ablagerungen für ein langlebiges Dach" }
        ]}
      />
      <HowToSchema
        name="Dach richtig warten - Anleitung vom Meister"
        description="Regelmäßige Dachwartung verlängert die Lebensdauer Ihres Daches erheblich. So läuft eine professionelle Wartung ab."
        steps={[
          { name: "Sichtprüfung durchführen", text: "Überprüfen Sie vom Boden aus auf offensichtliche Schäden wie fehlende oder verschobene Ziegel." },
          { name: "Dachrinnen reinigen", text: "Entfernen Sie Laub und Ablagerungen aus Rinnen und Fallrohren - idealerweise im Frühjahr und Herbst." },
          { name: "Moos entfernen", text: "Moosbewuchs kann Ziegel beschädigen. Professionelle Entfernung schützt Ihr Dach." },
          { name: "Anschlüsse prüfen", text: "Kontrollieren Sie Dachfenster, Kamine und Wandanschlüsse auf Dichtheit." },
          { name: "Profi-Inspektion buchen", text: "Lassen Sie einmal jährlich einen Dachdecker-Meister Ihr Dach prüfen. Rufen Sie 089 12621964 für einen Termin." }
        ]}
        totalTime="PT2H"
      />
      <ProductServiceSchema 
        name="Dachwartung München"
        description="Jährliche Dachinspektion, Dachrinnenreinigung und Moosentfernung. Schäden früh erkennen."
        priceFrom={250}
        priceTo={450}
        category="Dachwartung"
      />
      <FAQPageSchema faqs={[
        { question: "Wie oft sollte ich mein Dach warten lassen?", answer: "Wir empfehlen eine jährliche Dachinspektion - am besten im Frühjahr nach dem Winter oder im Herbst vor dem Winter. Bei älteren Dächern (40+ Jahre) halbjährlich." },
        { question: "Was kostet eine Dachwartung?", answer: "Unsere Dachwartung kostet ab 250€ für ein Einfamilienhaus. Inklusive Inspektion, Dachrinnenreinigung und Kleinreparaturen." },
        { question: "Kann ich mein Dach selbst warten?", answer: "Einfache Kontrollen vom Boden aus sind möglich. Für alles auf dem Dach (Moosentfernung, Rinnenreinigung in der Höhe) empfehlen wir den Profi - zu gefährlich und ohne Versicherung." },
        { question: "Was ist in einer Dachinspektion enthalten?", answer: "Komplette Sichtprüfung: Ziegel, First, Ortgang, Kehlen, Dachfenster, Kaminanschlüsse, Dachrinnen. Dokumentation mit Fotos und schriftlichem Zustandsbericht. Auf Wunsch: Drohneninspektion für schwer zugängliche Bereiche." },
        { question: "Wann ist der beste Zeitpunkt für Dachwartung in München?", answer: "Ideal: März-April (nach Frost, vor Frühjahrsregen) oder Oktober-November (vor Winter). Nach Stürmen empfehlen wir immer eine Kontrolle. Wir terminieren flexibel, auch kurzfristig." },
        { question: "Lohnt sich ein Dachwartungsvertrag?", answer: "Ja! Sie sparen 15% gegenüber Einzelaufträgen, bekommen bevorzugte Termine und vergessen nie die Wartung. Ab 220€/Jahr für jährliche Komplettinspektion inkl. Dachrinnenreinigung." },
        { question: "Was passiert wenn bei der Wartung Schäden gefunden werden?", answer: "Wir dokumentieren alle Mängel mit Fotos und erstellen ein Angebot für die Reparatur. Kleinreparaturen (bis 100€) erledigen wir oft direkt vor Ort. Bei größeren Schäden entscheiden Sie in Ruhe." }
      ]} />
      <LocalBusinessSchema />
      <Navbar />
      <main id="main-content" role="main" tabIndex={-1}>
      <AIBeraterSection />
      
      {/* Hero Section */}
      <section className="pt-6 pb-8 md:pt-10 md:pb-12 bg-secondary relative overflow-hidden min-h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Professionelles Dachdecker-Werkzeug für Dachwartung und Inspektion München"
            className="w-full h-full object-cover"
            width={1792}
            height={1024}
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/50"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-6xl text-white">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Dachwartung München</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mt-4 mb-6">
              Vorsorge ist besser als Reparatur
            </h1>
            <p className="text-xl text-gray-200 max-w-xl mb-4">
              Ein Dach braucht regelmäßige Pflege – wie Ihr Auto den Ölwechsel. Mit unserer Dachwartung erkennen wir Probleme, bevor sie teuer werden.
            </p>
            <p className="text-lg text-gray-300 max-w-xl">
              Vereinbaren Sie jetzt Ihren Wartungstermin und schützen Sie Ihre Investition.
            </p>
          </div>
        </div>
      </section>

      <BackButton />

      {/* Trust Badges */}
      <div className="bg-stone-100 py-2 border-b border-stone-200">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-2 md:gap-4 text-xs">
            <span className="flex items-center gap-1.5">
              <Award className="h-4 w-4 text-primary" />
              <span>Meister für Dach- und Spenglerei seit 1998</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-primary" />
              <span>10 Jahre Garantie</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="h-4 w-4 text-primary" />
              <span>100+ zufriedene Kunden</span>
            </span>
          </div>
        </div>
      </div>

      {/* Kundengeschichte */}
      <section className="py-5 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-primary" data-testid="testimonial-wartung">
              <Quote className="h-10 w-10 text-primary/30 mb-4" />
              <h3 className="text-xl font-bold text-secondary mb-4">
                „Jährliche Wartung – und seit 15 Jahren kein Problem"
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                „Als wir unser Haus gekauft haben, hat Herr Maier uns zur regelmäßigen Wartung geraten. 
                Seitdem kommt sein Team einmal im Jahr, reinigt die Rinnen, prüft die Ziegel und behebt 
                kleine Mängel sofort. Unsere Nachbarn hatten schon zweimal Wasserschäden – wir noch nie. 
                Das ist für mich unbezahlbar."
              </p>
              <div className="flex items-center gap-4 mt-6">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                  TH
                </div>
                <div>
                  <p className="font-bold text-secondary">Thomas Huber</p>
                  <p className="text-sm text-muted-foreground">Einfamilienhaus in Laim, Wartungskunde seit 2009</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anfrage-Formular */}
      <section id="anfrage-form" className="py-6 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-secondary text-center mb-4">
                Dachwartung München: Jetzt Termin für Inspektion und Dachrinnenreinigung vereinbaren
              </h2>
              <p className="text-muted-foreground">
                Beschreiben Sie Ihr Anliegen – wir melden uns mit einem Terminvorschlag.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-xl space-y-6">
              <div className="bg-green-50 p-4 rounded-md flex gap-3 items-start border border-green-100 mb-6">
                <ShieldCheck className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-green-800 font-medium">100% kostenlos & unverbindlich</p>
                  <p className="text-xs text-green-700 mt-1">Wir beraten Sie ehrlich und ohne Verkaufsdruck.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ihr Name *</Label>
                  <Input 
                    id="name"
                    placeholder="Max Mustermann"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    data-testid="input-wartung-name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-Mail *</Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="ihre@email.de"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    data-testid="input-wartung-email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon für Rückruf *</Label>
                  <Input 
                    id="phone"
                    placeholder="089 ..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    data-testid="input-wartung-phone"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Adresse des Objekts</Label>
                  <Input 
                    id="address"
                    placeholder="Straße, PLZ Ort"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    data-testid="input-wartung-address"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Was können wir für Sie tun?</Label>
                <Textarea 
                  id="message"
                  placeholder="z.B. Ich möchte eine jährliche Dachwartung vereinbaren / Die Dachrinnen sind verstopft / Ich möchte mein Dach prüfen lassen..."
                  className="min-h-[120px]"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  data-testid="textarea-wartung-message"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 text-lg"
                disabled={isSubmitting}
                data-testid="button-wartung-submit"
              >
                {isSubmitting ? "Wird gesendet..." : "Wartungstermin anfragen"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Oder schreiben Sie uns direkt: <a href="mailto:info@089dach.de" className="text-primary font-medium hover:underline" data-testid="link-email-wartung">info@089dach.de</a>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Unsere Wartungsleistungen */}
      <section className="py-6 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mb-12">
            <h2 className="text-3xl font-heading font-bold text-secondary text-center mb-4">
              Dachinspektion München: Ziegel, Rinnen, Moos & Anschlüsse gründlich prüfen
            </h2>
            <p className="text-muted-foreground">
              Eine gründliche Dachwartung umfasst weit mehr als nur einen kurzen Blick aufs Dach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wartungsLeistungen.map((leistung, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow" data-testid={`card-wartung-${index}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                      <leistung.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2">{leistung.title}</h3>
                      <p className="text-muted-foreground"><TextWithKeywordLinks currentPath="/leistungen/wartung">{leistung.desc}</TextWithKeywordLinks></p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Warum Wartung wichtig ist */}
      <section className="py-6 bg-secondary text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Dachwartung spart Geld: 4 Gründe warum regelmäßige Dachkontrolle in München wichtig ist
            </h2>
            <p className="text-gray-300">
              Viele Hausbesitzer unterschätzen, wie wichtig regelmäßige Wartung für die Lebensdauer ihres Daches ist.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((adv, index) => (
              <div key={index} className="flex items-start gap-4" data-testid={`advantage-wartung-${index}`}>
                <div className="p-2 bg-primary rounded-xl shrink-0">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{adv.title}</h3>
                  <p className="text-gray-300"><TextWithKeywordLinks currentPath="/leistungen/wartung">{adv.desc}</TextWithKeywordLinks></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wartungsintervalle */}
      <section className="py-6">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-secondary text-center mb-4">
              Dach kontrollieren lassen München: Wie oft ist eine Wartung wirklich nötig?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Die Häufigkeit der Wartung hängt von verschiedenen Faktoren ab: Alter des Daches, Dachneigung, 
              Umgebung (Bäume, Laub) und Material. Als Faustregel empfehlen wir:
            </p>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-secondary mb-4">Unsere Empfehlung:</h3>
              <ul className="space-y-4">
                {[
                  { interval: "Jährlich", desc: "Für ältere Dächer (über 20 Jahre) oder bei vielen Bäumen in der Umgebung" },
                  { interval: "Alle 2 Jahre", desc: "Für neuere Dächer ohne besondere Belastung" },
                  { interval: "Nach jedem Sturm", desc: "Kurze Sichtkontrolle auf offensichtliche Schäden" },
                  { interval: "Im Herbst", desc: "Dachrinnenreinigung vor dem Winter empfohlen" }
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3" data-testid={`interval-${index}`}>
                    <CalendarCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-secondary">{item.interval}:</span>
                      <span className="text-muted-foreground ml-2"><TextWithKeywordLinks currentPath="/leistungen/wartung">{item.desc}</TextWithKeywordLinks></span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Wir beraten Sie gerne, welches Wartungsintervall für Ihr Dach sinnvoll ist.
              </p>
              <Button 
                onClick={() => document.getElementById('anfrage-form')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white font-bold rounded-xl" 
                data-testid="button-contact-wartung"
              >
                <ClipboardCheck className="mr-2 h-5 w-5" />
                Wartungstermin vereinbaren
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 bg-primary text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Dach Wartungsvertrag München: Regelmäßige Pflege schützt vor teuren Folgeschäden
          </h2>
          <p className="text-white/90 mb-8 max-w-6xl mx-auto">
            Regelmäßige Wartung spart langfristig Geld und Ärger. 
            Lassen Sie uns gemeinsam sicherstellen, dass Ihr Dach Sie noch viele Jahre schützt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => document.getElementById('anfrage-form')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 font-bold rounded-xl" 
              data-testid="button-cta-wartung"
            >
              <PhoneCall className="mr-2 h-5 w-5" />
              Termin vereinbaren
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary font-bold rounded-xl" data-testid="button-cta-email-wartung">
              <a href="mailto:info@089dach.de">
                <Mail className="mr-2 h-5 w-5" />
                E-Mail schreiben
              </a>
            </Button>
          </div>
        </div>
      </section>

      <ImageGallery 
        title="Dachwartung in Aktion"
        columns={2}
        images={[
          { src: wartungImg1, alt: "Dachdecker bei der Inspektion in München", caption: "Professionelle Dachinspektion" },
          { src: wartungImg2, alt: "Dachziegel Nahaufnahme bei der Kontrolle", caption: "Gründliche Ziegelprüfung" },
          { src: wartungImg3, alt: "Kupferdachrinne nach Reinigung", caption: "Gepflegte Dachrinne" },
          { src: wartungImg4, alt: "Gepflegtes Dach nach regelmäßiger Wartung", caption: "Ergebnis regelmäßiger Wartung" }
        ]}
      />

      <ProblemSolutionSection
        sectionTitle="Kleine Schäden, große Folgen"
        problemTitle="Was bei fehlender Wartung passiert"
        solutionTitle="So schützen wir Ihr Dach"
        problems={[
          { symptom: "Verstopfte Dachrinnen", risk: "Wasser läuft über, Feuchtigkeit an Fassade und im Mauerwerk" },
          { symptom: "Verschobene oder gebrochene Ziegel", risk: "Undichtigkeit, Wasserschäden in der Dämmung" },
          { symptom: "Moos und Flechten auf dem Dach", risk: "Ziegel werden porös, Frost sprengt sie auf" },
          { symptom: "Undichte Anschlüsse (Kamin, Fenster)", risk: "Schimmel im Dachgeschoss, teure Folgeschäden" }
        ]}
        solutions={[
          { title: "Jährliche Dachinspektion", description: "Schäden erkennen, bevor sie teuer werden" },
          { title: "Dachrinnenreinigung", description: "Laub entfernen, Fallrohre spülen, Überlauf verhindern" },
          { title: "Moosentfernung", description: "Belag schonend entfernen, Ziegel schützen" },
          { title: "Sofort-Reparatur", description: "Kleine Mängel direkt beim Wartungstermin beheben" }
        ]}
        urgencyMessage="1€ Wartung heute spart 10€ Reparatur morgen!"
      />

      <CTACluster
        title="Wartungstermin vereinbaren"
        subtitle="Ab 250€ · Jährliche Inspektion · Protokoll mit Fotos"
      />

      <AIEnhancedFAQ
        title="Häufige Fragen zur Dachwartung"
        faqs={[
          {
            question: "Wie oft sollte ich mein Dach warten lassen?",
            shortAnswer: "Wir empfehlen eine jährliche Dachinspektion – am besten im Frühjahr oder Herbst.",
            details: "Bei älteren Dächern (40+ Jahre) empfehlen wir halbjährliche Kontrollen. Nach starken Stürmen ist eine zusätzliche Sichtkontrolle sinnvoll. Mit unserem Wartungsvertrag vergessen Sie keinen Termin und sparen 15%.",
            priceRange: "Jährliche Wartung: ab 250€, Wartungsvertrag: ab 220€/Jahr",
            localReference: "Flexible Terminierung in ganz München und Umgebung",
            nextStep: "Wartungsvertrag anfragen →"
          },
          {
            question: "Was kostet eine Dachwartung?",
            shortAnswer: "Unsere Dachwartung kostet ab 250€ für ein Einfamilienhaus.",
            details: "Inklusive: Komplette Sichtprüfung aller Dachelemente, Dachrinnenreinigung, Dokumentation mit Fotos und schriftlicher Zustandsbericht. Kleinreparaturen (bis 100€) erledigen wir oft direkt vor Ort.",
            priceRange: "250-450€ je nach Dachgröße und Aufwand",
            localReference: "Inkl. Anfahrt im gesamten Münchner Raum",
            nextStep: "Angebot für Wartung anfordern →"
          },
          {
            question: "Was ist in einer Dachinspektion enthalten?",
            shortAnswer: "Komplette Sichtprüfung aller Dachelemente mit Fotodokumentation.",
            details: "Wir prüfen: Ziegel/Eindeckung, First, Ortgang, Kehlen, Dachfenster, Kaminanschlüsse, Dachrinnen, Fallrohre, Lüftungselemente. Sie erhalten einen schriftlichen Zustandsbericht mit Handlungsempfehlungen und Fotos.",
            nextStep: "Inspektion terminieren →"
          },
          {
            question: "Wann ist der beste Zeitpunkt für Dachwartung?",
            shortAnswer: "März-April (nach Frost) oder Oktober-November (vor Winter).",
            details: "Im Frühjahr prüfen wir, ob der Winter Schäden hinterlassen hat. Im Herbst bereiten wir das Dach auf den Winter vor und reinigen die Rinnen vom Laub. Nach Stürmen bieten wir kurzfristige Kontrollen an.",
            localReference: "Termine auch kurzfristig in München und Umland verfügbar",
            nextStep: "Termin zum Wunschzeitpunkt buchen →"
          },
          {
            question: "Lohnt sich ein Dachwartungsvertrag?",
            shortAnswer: "Ja! Sie sparen 15% und bekommen bevorzugte Termine.",
            details: "Mit unserem Wartungsvertrag (ab 220€/Jahr) erhalten Sie: Jährliche Komplettinspektion inkl. Dachrinnenreinigung, 15% Rabatt gegenüber Einzelaufträgen, bevorzugte Terminvergabe und automatische Erinnerung.",
            priceRange: "Wartungsvertrag: ab 220€/Jahr (inkl. Rinnenreinigung)",
            nextStep: "Wartungsvertrag abschließen →"
          }
        ]}
      />

      <ProofStack title="Warum 089Dach für Ihre Dachwartung?" />

      <ProcessSteps 
        title="Dachwartung: In 6 Schritten zum geschützten Dach"
        subtitle="Planbar, transparent und stressfrei – von der ersten Beratung bis zur Garantie."
      />

      <LeadFunnel 
        headline="Regelmäßige Dachwartung?"
        subheadline="Wir halten Ihr Dach in Schuss."
        description="Professionelle Wartung verlängert die Lebensdauer Ihres Daches um Jahre."
      />
      </main>
      <Footer />
    </div>
  );
}
