import Navbar from "@/components/Navbar";
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
import SEO, { BreadcrumbSchema, ServiceSchema } from "@/components/SEO";
import heroImage from "@assets/generated_images/roofer_tools_arranged_cleanly.png";

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
        title="Dachwartung München | Regelmäßige Dachinspektion & Pflege"
        description="Professionelle Dachwartung in München: Regelmäßige Inspektion, Dachrinnenreinigung, Moosentfernung und Kleinreparaturen. Verlängern Sie die Lebensdauer Ihres Daches."
        canonical="https://089dach.de/leistungen/wartung"
        keywords="dachwartung münchen, dachinspektion münchen, dachrinnenreinigung münchen, dachreinigung münchen, dachpflege münchen"
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
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-10 pb-12 bg-secondary relative overflow-hidden min-h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Dachwartung München"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/50"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-2xl text-white">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Dachwartung München</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mt-4 mb-6">
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

      {/* Trust Badges */}
      <div className="bg-stone-100 py-2 border-b border-stone-200">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-4 text-xs">
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
              <span>1.500+ zufriedene Kunden</span>
            </span>
          </div>
        </div>
      </div>

      {/* Kundengeschichte */}
      <section className="py-5 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-primary" data-testid="testimonial-wartung">
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
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-secondary mb-4">
                Wartungstermin vereinbaren
              </h2>
              <p className="text-muted-foreground">
                Beschreiben Sie Ihr Anliegen – wir melden uns mit einem Terminvorschlag.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-sm space-y-6">
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
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-heading font-bold text-secondary mb-4">
              Was wir bei der Wartung prüfen
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
                    <div className="p-3 bg-primary/10 rounded-sm text-primary shrink-0">
                      <leistung.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2">{leistung.title}</h3>
                      <p className="text-muted-foreground">{leistung.desc}</p>
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
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Warum regelmäßige Dachwartung?
            </h2>
            <p className="text-gray-300">
              Viele Hausbesitzer unterschätzen, wie wichtig regelmäßige Wartung für die Lebensdauer ihres Daches ist.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((adv, index) => (
              <div key={index} className="flex items-start gap-4" data-testid={`advantage-wartung-${index}`}>
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

      {/* Wartungsintervalle */}
      <section className="py-6">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-secondary mb-4">
              Wie oft sollte ein Dach gewartet werden?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Die Häufigkeit der Wartung hängt von verschiedenen Faktoren ab: Alter des Daches, Dachneigung, 
              Umgebung (Bäume, Laub) und Material. Als Faustregel empfehlen wir:
            </p>
            
            <div className="bg-gray-50 p-8 rounded-sm">
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
                      <span className="text-muted-foreground ml-2">{item.desc}</span>
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
                className="bg-primary hover:bg-primary/90 text-white font-bold rounded-sm" 
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
            Schützen Sie Ihr Dach – bevor es zu spät ist
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Regelmäßige Wartung spart langfristig Geld und Ärger. 
            Lassen Sie uns gemeinsam sicherstellen, dass Ihr Dach Sie noch viele Jahre schützt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => document.getElementById('anfrage-form')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 font-bold rounded-sm" 
              data-testid="button-cta-wartung"
            >
              <PhoneCall className="mr-2 h-5 w-5" />
              Termin vereinbaren
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary font-bold rounded-sm" data-testid="button-cta-email-wartung">
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
