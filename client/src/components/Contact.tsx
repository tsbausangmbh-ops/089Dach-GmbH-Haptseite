import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

const serviceOptions = [
  "Steildach & Flachdach",
  "Spenglerarbeiten",
  "Reparaturservice",
  "Ratgeber & Tipps",
  "Dachsanierung",
  "Dachfenster",
  "Sonstiges"
];

interface ContactProps {
  title?: string;
  description?: string;
}

export default function Contact({ 
  title = "Lassen Sie uns über Ihr Dach sprechen",
  description = "Kleine Schäden wachsen schnell. Je früher wir prüfen, desto günstiger die Lösung. Kostenlose Erstberatung – wir melden uns zeitnah."
}: ContactProps = {}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dsgvoAccepted, setDsgvoAccepted] = useState(false);
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0 });
  const [captchaAnswer, setCaptchaAnswer] = useState("");

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    setCaptcha({
      num1: Math.floor(Math.random() * 10) + 1,
      num2: Math.floor(Math.random() * 10) + 1
    });
    setCaptchaAnswer("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (parseInt(captchaAnswer) !== captcha.num1 + captcha.num2) {
      toast.error("Sicherheitsfrage falsch", {
        description: "Bitte lösen Sie die Rechenaufgabe korrekt."
      });
      generateCaptcha();
      return;
    }
    
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success("Vielen Dank für Ihre Nachricht!", {
          description: "Wir melden uns schnellstmöglich bei Ihnen."
        });
        setFormData({ name: "", phone: "", email: "", address: "", subject: "", message: "" });
      } else {
        toast.error("Fehler beim Senden", {
          description: "Bitte versuchen Sie es erneut oder rufen Sie uns an."
        });
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error("Fehler beim Senden", {
        description: "Bitte versuchen Sie es erneut oder rufen Sie uns an."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-4 md:py-6 bg-stone-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 mb-8 md:mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-stretch">
          
          <div className="flex flex-col">
            <span className="text-primary font-bold tracking-wider uppercase text-sm block text-center md:text-left">Kontakt</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mt-2 mb-6 text-center md:text-left">
              {title}
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              {description}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Adresse</h4>
                  <p className="text-muted-foreground">
                    089Dach GmbH<br />
                    Thuillestraße 20<br />
                    81247 München-Obermenzing
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Telefon</h4>
                  <p className="text-muted-foreground">
                    089 12621964
                  </p>
                  <a href="/rueckruf/" className="text-primary text-sm font-medium hover:underline">
                    → Rückruf anfordern
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">E-Mail</h4>
                  <a href="mailto:info@089dach.de" className="text-muted-foreground hover:text-primary">
                    info@089dach.de
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Öffnungszeiten</h4>
                  <p className="text-muted-foreground">
                    Mo – Fr: 8:00 – 16:30 Uhr<br />
                    Sa – So: geschlossen<br />
                    <span className="text-sm">Notdienst 24/7 erreichbar</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-8">
              <div className="p-6 bg-primary rounded-xl text-white">
                <h4 className="font-bold text-lg mb-2">Schnell einen Termin bekommen</h4>
                <p className="text-white/90 text-sm mb-4">
                  Online Ihren Wunschtermin auswählen – wir melden uns zeitnah zurück.
                </p>
                <a href="/beratung">
                  <Button size="lg" variant="secondary" className="w-full font-bold" data-testid="button-24h-booking">
                    <Clock className="h-5 w-5 mr-2" />
                    Jetzt Termin buchen
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-xl border border-stone-200 flex flex-col">
            <h3 className="text-2xl font-heading font-bold text-secondary mb-6 text-center md:text-left">Nachricht senden</h3>
            <form className="space-y-6 flex flex-col flex-1" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-secondary">Name</label>
                  <Input 
                    id="name" 
                    placeholder="Max Mustermann" 
                    className="bg-white"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    data-testid="input-contact-name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-secondary">Telefon (optional)</label>
                  <Input 
                    id="phone" 
                    placeholder="Für Rückrufe" 
                    className="bg-white"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    data-testid="input-contact-phone"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-secondary">E-Mail Adresse</label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="name@beispiel.de" 
                  className="bg-white"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  data-testid="input-contact-email"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="address" className="text-sm font-medium text-secondary">Adresse des Objekts</label>
                <Input 
                  id="address" 
                  placeholder="Straße, PLZ Ort" 
                  className="bg-white"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  data-testid="input-contact-address"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-secondary">Betreff</label>
                <select
                  id="subject"
                  className="w-full h-12 px-3 rounded-md border border-input bg-white text-sm"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  data-testid="select-contact-subject"
                >
                  <option value="">Worum geht es?</option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-secondary">Ihre Nachricht</label>
                <Textarea 
                  id="message" 
                  placeholder="Wie können wir Ihnen helfen?" 
                  className="min-h-[120px] bg-white"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  data-testid="input-contact-message"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="captcha-contact" className="text-sm font-medium text-secondary">
                  Sicherheitsfrage: Was ist {captcha.num1} + {captcha.num2}? *
                </label>
                <Input 
                  id="captcha-contact"
                  type="number"
                  placeholder="Ihre Antwort"
                  className="bg-white w-32"
                  value={captchaAnswer}
                  onChange={(e) => setCaptchaAnswer(e.target.value)}
                  required
                  data-testid="input-contact-captcha"
                />
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="dsgvo-contact" 
                  checked={dsgvoAccepted}
                  onCheckedChange={(checked) => setDsgvoAccepted(checked === true)}
                  data-testid="checkbox-contact-dsgvo"
                />
                <label htmlFor="dsgvo-contact" className="text-sm text-muted-foreground leading-tight cursor-pointer">
                  Ich habe die <a href="/datenschutz/" className="text-primary underline hover:no-underline" onClick={(e) => e.stopPropagation()}>Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zu. *
                </label>
              </div>

              <div className="mt-auto pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 rounded-xl text-lg"
                  disabled={isSubmitting || !dsgvoAccepted}
                  data-testid="button-contact-submit"
                >
                  {isSubmitting ? "Wird gesendet..." : "Jetzt absenden – bevor es teurer wird"}
                </Button>
              </div>
            </form>
          </div>

        </div>
      </div>

      <div className="w-full h-[350px] bg-stone-200 grayscale hover:grayscale-0 transition-all duration-500">
        <iframe 
          src="https://www.google.com/maps?q=Thuillestraße+20,+81247+München&output=embed&hl=de" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="089Dach GmbH - Dachdecker München Obermenzing"
          aria-label="Google Maps Karte mit Standort der 089Dach GmbH in München-Obermenzing"
        ></iframe>
      </div>
    </section>
  );
}
