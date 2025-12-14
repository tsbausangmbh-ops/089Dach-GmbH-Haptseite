import Navbar from "@/components/Navbar";
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
import SEO, { BreadcrumbSchema, ServiceSchema } from "@/components/SEO";

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
          description: "Wir melden uns innerhalb von 4 Stunden bei Ihnen."
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
    { title: "Schnelle Reaktion", desc: "In der Regel innerhalb von 4 Stunden vor Ort" },
    { title: "Faire Preise", desc: "Transparente Kosten, keine versteckten Aufschläge" },
    { title: "Versicherungshilfe", desc: "Wir dokumentieren den Schaden für Ihre Versicherung" },
    { title: "Rückruf-Service", desc: "Wir rufen Sie zurück – kein langes Warten in der Leitung" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Dachreparatur München | Schnelle Hilfe bei Sturmschäden"
        description="Schnelle Hilfe bei Dachschäden in München: Notfallabdichtung, Leckortung, Sturm- und Hagelschäden inkl. Versicherungsservice. Rückruf-Service."
        canonical="https://089dach.de/reparaturservice"
        keywords="dachreparatur münchen, notdienst dach münchen, sturmschaden dach münchen, dachnotdienst münchen, undichtes dach münchen"
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Reparaturservice", url: "/reparaturservice" }]} />
      <ServiceSchema 
        pageName="Dachreparatur München"
        services={[
          { name: "Schnelle Dachreparatur", description: "Hilfe bei Wasserschäden und Sturmschäden - Antwort innerhalb von 24 Stunden" },
          { name: "Leckortung", description: "Professionelle Suche und Behebung undichter Stellen" },
          { name: "Versicherungsservice", description: "Dokumentation und Abwicklung für Ihre Versicherung" }
        ]}
      />
      <Navbar />
      
      {/* Hero Section - Lead-Fokus */}
      <section className="pt-10 pb-12 bg-primary text-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="h-6 w-6" />
              <span className="font-bold tracking-wider uppercase text-sm">Schnelle Dachreparatur München</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mt-4 mb-6">
              Dach-Notfall? Wir helfen schnell.
            </h1>
            
            <p className="text-xl leading-relaxed mb-8 text-white/90">
              Sturm, Hagel oder plötzlich ein Wasserfleck an der Decke – wenn Ihr Dach 
              Probleme macht, zählt jede Stunde. <strong>Schreiben Sie uns, wir rufen Sie zurück.</strong>
            </p>

            <div className="bg-white text-secondary p-6 rounded-sm mb-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-lg font-bold mb-1">Rückruf anfordern</p>
                  <p className="text-muted-foreground">Wir melden uns schnellstmöglich bei Ihnen</p>
                </div>
                <Button 
                  onClick={() => document.getElementById('anfrage-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-primary hover:bg-primary/90 text-white font-bold px-8"
                  data-testid="button-hero-request"
                >
                  <PhoneCall className="mr-2 h-5 w-5" />
                  Rückruf anfordern
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <div className="bg-stone-100 py-2 border-b border-stone-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 text-xs">
            <span className="flex items-center gap-1.5">
              <Award className="h-4 w-4 text-primary" />
              <span>Meisterbetrieb seit 1998</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-primary" />
              <span>10 Jahre Garantie</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="h-4 w-4 text-primary" />
              <span>1.500+ zufriedene Kunden</span>
            </span>
          </div>
        </div>
      </div>

      {/* Kundengeschichte - Notfall */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-primary" data-testid="testimonial-keller">
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
      <section id="anfrage-form" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-secondary mb-4">
                Reparaturanfrage senden
              </h2>
              <p className="text-muted-foreground">
                Beschreiben Sie Ihr Problem – wir melden uns schnellstmöglich bei Ihnen.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-sm space-y-6">
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-heading font-bold text-secondary mb-4">
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
                    <div className="p-3 bg-primary/10 rounded-sm text-primary shrink-0">
                      <emergency.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2">{emergency.title}</h3>
                      <p className="text-muted-foreground">{emergency.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Warum wir */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
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
                <div className="p-2 bg-primary rounded-sm shrink-0">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{adv.title}</h3>
                  <p className="text-gray-300">{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kleine Reparaturen */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-secondary mb-4">
              Kein Notfall, aber auch kein gutes Gefühl?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Nicht jeder Schaden ist akut – aber ignorieren sollten Sie ihn trotzdem nicht. 
              Kleine Risse, lose Ziegel oder verstopfte Dachrinnen werden mit der Zeit zu großen Problemen.
            </p>
            
            <div className="bg-gray-50 p-8 rounded-sm">
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
                className="bg-primary hover:bg-primary/90 text-white font-bold rounded-sm" 
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
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
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
              className="bg-white text-primary hover:bg-gray-100 font-bold rounded-sm" 
              data-testid="button-cta-request"
            >
              <PhoneCall className="mr-2 h-5 w-5" />
              Rückruf anfordern
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary font-bold rounded-sm" data-testid="button-cta-email">
              <a href="mailto:info@089dach.de">
                <Mail className="mr-2 h-5 w-5" />
                E-Mail schreiben
              </a>
            </Button>
          </div>
        </div>
      </section>

      <LeadFunnel />
      <Footer />
    </div>
  );
}
