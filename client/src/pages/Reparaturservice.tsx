import Navbar from "@/components/Navbar";
import AIBeraterSection from "@/components/AIBeraterSection";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AlertTriangle, Clock, Shield, Mail, Wrench, CloudRain, Wind, Check, Quote, MapPin, PhoneCall, ArrowRight, ShieldCheck, Award, Users } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import SEO, { BreadcrumbSchema, ServiceSchema, HowToSchema, ProductServiceSchema, FAQPageSchema, LocalBusinessSchema } from "@/components/SEO";
import heroImage from "@assets/generated_images/damaged_red_tile_roof_before.png";
import RelatedServices from "@/components/RelatedServices";
import { TextWithKeywordLinks } from "@/components/KeywordLink";
import { DachreparaturMuenchenContent } from "@/components/SEOContent";
import ImageGallery from "@/components/ImageGallery";
import reparaturImg1 from "@assets/generated_images/damaged_red_tile_roof_before.png";
import reparaturImg2 from "@assets/generated_images/roofer_working_on_red_tile_roof_munich.png";
import reparaturImg3 from "@assets/generated_images/damaged_chimney_flashing_before.png";
import reparaturImg4 from "@assets/generated_images/new_copper_chimney_flashing.png";

export default function Reparaturservice() {
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
          problem: "Reparaturanfrage",
          timing: "Rückruf gewünscht",
          details: `Adresse: ${formData.address}\n\nNachricht: ${formData.message}`,
          name: formData.name,
          phone: formData.phone,
          email: formData.email
        })
      });

      if (response.ok) {
        toast.success("Anfrage gesendet!", {
          description: "Wir melden uns innerhalb von 24 Stunden bei Ihnen."
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

  const emergencies = [
    { icon: CloudRain, title: "Wasserschaden", desc: "Es tropft durch die Decke? Wir sichern sofort ab und verhindern Folgeschäden." },
    { icon: Wind, title: "Sturmschaden", desc: "Ziegel abgedeckt? Wir kommen zur Notsicherung, bevor es reinregnet." },
    { icon: AlertTriangle, title: "Undichte Stelle", desc: "Feuchte Flecken im Dachboden? Wir finden und beheben die Ursache." },
    { icon: Wrench, title: "Defektes Dachfenster", desc: "Fenster schließt nicht mehr richtig? Schnelle Reparatur oder Austausch." }
  ];

  const advantages = [
    { title: "Schnelle Reaktion", desc: "In der Regel innerhalb von 24 Stunden vor Ort" },
    { title: "Faire Preise", desc: "Transparente Kosten, keine versteckten Aufschläge" },
    { title: "Versicherungshilfe", desc: "Wir dokumentieren den Schaden für Ihre Versicherung" },
    { title: "Rückruf-Service", desc: "Wir rufen Sie zurück – kein langes Warten in der Leitung" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Dach undicht München | Soforthilfe & Notdienst 24h"
        description="Dach undicht nach Sturm? Wir kommen in 24h! ✓ Notabdichtung ✓ Versicherungsdoku ✓ Faire Preise. Jetzt Soforthilfe ☎ 089 12621964"
        canonical="https://089dach.de/leistungen/reparaturservice"
        keywords="dach undicht was tun soforthilfe münchen, dachdecker notdienst münchen wochenende, sturmschaden dach versicherung melden, dachziegel locker nach sturm reparieren, wasserschaden durch dach wer zahlt, einzelne dachziegel austauschen kosten, dach tropft notfall abdichten, dachreparatur kosten pro stunde münchen, first undicht was tun, dach nach hagel kontrollieren lassen, dachreparatur obermenzing pasing laim schwabing sendling, dachziegel gerissen austauschen, firsthaube locker befestigen, ortgang reparieren kosten, schornsteinanschluss undicht, dachfensterrahmen undicht reparieren, vogelnest unter dachziegel entfernen, marder im dach schaden reparieren, moos auf dach entfernen schäden, dachrinne loch reparieren, flachdach blase abdichten, dachluke klemmt reparatur, dachboden feucht ursache finden"
        aiSummary="089Dach GmbH bietet schnelle Dachreparatur in München. Notfallabdichtung bei Sturmschäden und Wasserschäden. In der Regel innerhalb von 24 Stunden vor Ort. Versicherungsservice inklusive. Telefon: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Reparaturservice", url: "/leistungen/reparaturservice" }]} />
      <ServiceSchema 
        pageName="Dachreparatur München"
        services={[
          { name: "Schnelle Dachreparatur", description: "Hilfe bei Wasserschäden und Sturmschäden - Antwort innerhalb von 24 Stunden" },
          { name: "Leckortung", description: "Professionelle Suche und Behebung undichter Stellen" },
          { name: "Versicherungsservice", description: "Dokumentation und Abwicklung für Ihre Versicherung" }
        ]}
      />
      <HowToSchema
        name="Dachschaden beheben lassen in München"
        description="So lassen Sie Ihr Dach nach einem Schaden professionell reparieren - von der Meldung bis zur fertigen Reparatur."
        steps={[
          { name: "Schaden dokumentieren", text: "Fotografieren Sie den Schaden von innen und außen. Notieren Sie wann der Schaden aufgetreten ist." },
          { name: "089Dach kontaktieren", text: "Rufen Sie uns an unter 089 12621964 oder nutzen Sie unser Kontaktformular. Wir melden uns innerhalb von 24 Stunden." },
          { name: "Vor-Ort-Termin", text: "Unser Meister begutachtet den Schaden vor Ort und erstellt einen Kostenvoranschlag." },
          { name: "Versicherung informieren", text: "Bei Sturmschäden: Melden Sie den Schaden Ihrer Versicherung. Wir helfen bei der Dokumentation." },
          { name: "Reparatur durchführen", text: "Nach Freigabe führen wir die Reparatur schnell und sauber durch - mit 10 Jahren Garantie." }
        ]}
        totalTime="P1D"
      />
      <ProductServiceSchema 
        name="Dachreparatur München"
        description="Schnelle Dachreparatur bei Wasserschäden, Sturmschäden und undichten Stellen. In der Regel innerhalb von 24h vor Ort."
        priceFrom={150}
        priceTo={2500}
        category="Dachreparatur"
      />
      <FAQPageSchema faqs={[
        { question: "Was tun wenn das Dach undicht ist?", answer: "Sofort handeln: Eimer unterstellen, Schaden fotografieren und uns anrufen (089 12621964). Wir kommen in der Regel innerhalb von 24 Stunden zur Notabdichtung." },
        { question: "Was kostet eine Dachreparatur?", answer: "Kleine Reparaturen (einzelne Ziegel) kosten 150-300€. Mittlere Schäden 300-1.000€. Größere Reparaturen 1.000-2.500€. Genauen Preis nennen wir nach Begutachtung." },
        { question: "Zahlt die Versicherung Dachreparaturen?", answer: "Bei Sturm-, Hagel- oder Wasserschäden durch höhere Gewalt zahlt die Wohngebäudeversicherung. Wir erstellen versicherungsgerechte Dokumentation und Kostenvoranschläge." },
        { question: "Wie finde ich die undichte Stelle im Dach?", answer: "Wasserflecken zeigen nicht immer die Leckstelle - Wasser läuft oft an Sparren entlang. Wir führen professionelle Leckortung durch: Sichtprüfung, Feuchtemessung und bei Bedarf Rauchtest. Kosten: ab 150€." },
        { question: "Kann man einzelne Dachziegel austauschen?", answer: "Ja! Einzelne Ziegel kosten 5-15€ pro Stück, Austausch ab 150€ inkl. Anfahrt. Wir haben gängige Ziegeltypen auf Lager. Bei seltenen Modellen beschaffen wir passende oder optisch ähnliche Ziegel." },
        { question: "Was kostet Schornsteinanschluss abdichten in München?", answer: "Eine neue Kamineinfassung aus Zink kostet 400-800€, aus Kupfer 800-1.500€. Reparatur bestehender Einfassungen ab 200€. Die Investition lohnt sich: Undichte Kaminanschlüsse verursachen oft teure Wasserschäden." },
        { question: "Reparieren Sie auch Dachfenster?", answer: "Ja! Wir reparieren Velux, Roto und andere Marken. Häufige Probleme: undichte Dichtungen (ab 150€), klemmende Fenster (ab 100€), defekte Rollläden (ab 200€). Bei älteren Fenstern lohnt oft ein Austausch." }
      ]} />
      <LocalBusinessSchema />
      <Navbar />
      <AIBeraterSection />
      
      {/* Hero Section */}
      <section className="pt-6 pb-8 md:pt-10 md:pb-12 bg-secondary relative overflow-hidden min-h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Beschädigtes Ziegeldach vor Reparatur - Sturmschaden Dachreparatur München"
            className="w-full h-full object-cover"
            width={1792}
            height={1024}
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/50"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-2xl text-white">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Schnelle Dachreparatur München</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mt-4 mb-6">
              <span className="text-primary">Dach-Notfall?</span>
              <br />
              Wir helfen schnell.
            </h1>
            <p className="text-xl text-gray-200 max-w-xl mb-4">
              Kein Warten in der Warteschleife. Kein Stress. Einfach Ihre Nummer hinterlassen – wir melden uns persönlich.
            </p>
            <p className="text-lg text-gray-300 max-w-xl">
              In der Regel innerhalb von 24 Stunden vor Ort.
            </p>
          </div>
        </div>
      </section>

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

      {/* Vertrauenstexte */}
      <section className="py-4 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Erster Vertrauenstext - Empathie & Verständnis */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border-l-4 border-primary">
              <p className="text-lg text-white font-medium mb-3">
                Sie machen sich Sorgen um Ihr Dach?
              </p>
              <p className="text-gray-200 leading-relaxed mb-4">
                Das verstehen wir. Ein undichtes Dach, ein Sturmschaden oder einfach die Unsicherheit, ob alles in Ordnung ist – das kann belasten. Genau deshalb sind wir für Sie da. Jede Anfrage wird persönlich von unserem Team bearbeitet. Kein Callcenter, keine automatischen Antworten – nur echte Menschen, die zuhören und helfen.
              </p>
              <p className="text-gray-300 text-sm italic">
                Schreiben Sie uns einfach – wir melden uns zeitnah und besprechen in Ruhe, wie wir Ihnen helfen können.
              </p>
            </div>

            {/* Zweiter Vertrauenstext - Sicherheit & Kompetenz */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border-l-4 border-primary">
              <p className="text-lg text-white font-medium mb-3">
                Stellen Sie sich vor...
              </p>
              <p className="text-gray-200 leading-relaxed mb-4">
                ...wie es sich anfühlt, wenn Sie wissen: Ihr Dach ist in den besten Händen. Keine schlaflosen Nächte mehr bei Sturm. Keine Sorgen mehr vor dem nächsten Regen. Seit über 25 Jahren geben wir unseren Kunden genau dieses Gefühl von Sicherheit zurück. Als Münchner Meisterbetrieb kennen wir jedes Dach, jedes Problem – und vor allem: die beste Lösung für Sie.
              </p>
              <p className="text-gray-300 text-sm italic">
                Vertrauen Sie auf Erfahrung, die sich bewährt hat. Wir sind für Sie da.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kundengeschichte - Notfall */}
      <section className="py-5 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-primary" data-testid="testimonial-keller">
              <Quote className="h-10 w-10 text-primary/30 mb-4" />
              <h3 className="text-xl font-bold text-secondary mb-4">
                „Sonntagabend, 22 Uhr, Sturm Niklas"
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                „Der Wind hatte zwei Ziegel abgedeckt. Es regnete rein, direkt ins Kinderzimmer. 
                Panik pur. Ich habe gegoogelt, 089Dach angerufen – und eine halbe Stunde später 
                klingelte Herr Maier an der Tür. Um 23 Uhr war alles provisorisch abgedichtet. 
                Am Montag kam das Team zur richtigen Reparatur."
              </p>
              <div className="flex items-center gap-4 mt-6">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                  SK
                </div>
                <div>
                  <p className="font-bold text-secondary">Sabine Keller</p>
                  <p className="text-sm text-muted-foreground">Reihenhaus in Pasing, Notreparatur 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anfrage-Formular */}
      <section id="anfrage-form" className="py-6 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-secondary text-center mb-4">
                Reparaturanfrage senden
              </h2>
              <p className="text-muted-foreground">
                Beschreiben Sie Ihr Problem – wir melden uns schnellstmöglich bei Ihnen.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-xl space-y-6">
              <div className="bg-green-50 p-4 rounded-md flex gap-3 items-start border border-green-100 mb-6">
                <ShieldCheck className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-green-800 font-medium">100% kostenlos & unverbindlich</p>
                  <p className="text-xs text-green-700 mt-1">Wir rufen Sie zurück – kein Verkaufsdruck, nur ehrliche Beratung.</p>
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
                    data-testid="input-repair-name"
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
                    data-testid="input-repair-email"
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
                    data-testid="input-repair-phone"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Adresse des Objekts</Label>
                  <Input 
                    id="address"
                    placeholder="Straße, PLZ Ort"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    data-testid="input-repair-address"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Was ist passiert? *</Label>
                <Textarea 
                  id="message"
                  placeholder="Beschreiben Sie Ihr Problem: Was ist passiert? Seit wann? Wie dringend ist es?"
                  className="min-h-[120px]"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  data-testid="textarea-repair-message"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 text-lg"
                disabled={isSubmitting}
                data-testid="button-repair-submit"
              >
                {isSubmitting ? "Wird gesendet..." : "Rückruf anfordern"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Oder schreiben Sie uns direkt: <a href="mailto:info@089dach.de" className="text-primary font-medium hover:underline" data-testid="link-email">info@089dach.de</a>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Notfälle, die wir lösen */}
      <section className="py-6 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-heading font-bold text-secondary text-center mb-4">
              Diese Notfälle lösen wir für Sie
            </h2>
            <p className="text-muted-foreground">
              Egal was passiert ist – wir sichern ab, reparieren und dokumentieren für Ihre Versicherung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {emergencies.map((emergency, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow" data-testid={`card-emergency-${index}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                      <emergency.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2">{emergency.title}</h3>
                      <p className="text-muted-foreground"><TextWithKeywordLinks currentPath="/leistungen/reparaturservice">{emergency.desc}</TextWithKeywordLinks></p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Warum wir */}
      <section className="py-6 bg-secondary text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Warum Sie bei uns richtig sind
            </h2>
            <p className="text-gray-300">
              Ein Dach-Notfall ist stressig genug. Bei uns bekommen Sie schnelle Hilfe ohne böse Überraschungen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((adv, index) => (
              <div key={index} className="flex items-start gap-4" data-testid={`advantage-${index}`}>
                <div className="p-2 bg-primary rounded-xl shrink-0">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{adv.title}</h3>
                  <p className="text-gray-300"><TextWithKeywordLinks currentPath="/leistungen/reparaturservice">{adv.desc}</TextWithKeywordLinks></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kleine Reparaturen */}
      <section className="py-6">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-secondary text-center mb-4">
              Kein Notfall, aber auch kein gutes Gefühl?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Nicht jeder Schaden ist akut – aber ignorieren sollten Sie ihn trotzdem nicht. 
              Kleine Risse, lose Ziegel oder verstopfte Dachrinnen werden mit der Zeit zu großen Problemen.
            </p>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-secondary mb-4">Wir reparieren auch die kleinen Dinge:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Einzelne Ziegel austauschen",
                  "Dachrinnen reinigen & reparieren",
                  "Moos entfernen",
                  "Anschlüsse an Kamin & Wänden abdichten",
                  "Dachfenster-Dichtungen erneuern",
                  "Schneefanggitter montieren"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2" data-testid={`repair-item-${index}`}>
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Lieber einmal zu viel nachfragen als einmal zu wenig – wir beraten Sie ehrlich.
              </p>
              <Button 
                onClick={() => document.getElementById('anfrage-form')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white font-bold rounded-xl" 
                data-testid="button-contact-repair"
              >
                <Mail className="mr-2 h-5 w-5" />
                Reparatur anfragen
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 bg-primary text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Schnelle Hilfe – wir rufen Sie zurück
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Ob akuter Notfall oder kleine Reparatur – wir sind für Sie da. Senden Sie uns eine Anfrage, 
            und wir melden uns schnellstmöglich bei Ihnen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => document.getElementById('anfrage-form')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 font-bold rounded-xl" 
              data-testid="button-cta-request"
            >
              <PhoneCall className="mr-2 h-5 w-5" />
              Rückruf anfordern
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary font-bold rounded-xl" data-testid="button-cta-email">
              <a href="mailto:info@089dach.de">
                <Mail className="mr-2 h-5 w-5" />
                E-Mail schreiben
              </a>
            </Button>
          </div>
        </div>
      </section>

      <DachreparaturMuenchenContent />
      <ImageGallery 
        title="Dachreparatur Vorher-Nachher"
        columns={2}
        images={[
          { src: reparaturImg1, alt: "Beschädigtes Ziegeldach vor Reparatur", caption: "Vorher: Sturmschaden am Dach" },
          { src: reparaturImg2, alt: "Dachdecker bei der Reparatur in München", caption: "Professionelle Dachreparatur" },
          { src: reparaturImg3, alt: "Undichter Schornsteinanschluss vor Reparatur", caption: "Vorher: Undichter Kaminanschluss" },
          { src: reparaturImg4, alt: "Neuer Kupfer-Schornsteinanschluss", caption: "Nachher: Neue Kupferverwahrung" }
        ]}
      />
      <LeadFunnel />
      <RelatedServices 
        currentPage="reparaturservice" 
        relatedIds={["wartung", "dachsanierung", "bedachungen", "faq"]}
      />
      <Footer />
    </div>
  );
}
