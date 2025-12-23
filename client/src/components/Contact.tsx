import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Link } from "wouter";

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
  title = "Sprechen Sie mit uns über Ihr Projekt",
  description = "Gerne beraten wir Sie unverbindlich vor Ort oder erstellen Ihnen ein individuelles Angebot. Wir freuen uns auf Ihre Anfrage."
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
                    Mo – Fr: 8:00 – 17:00 Uhr<br />
                    Sa: 10:00 – 14:00 Uhr<br />
                    <span className="text-sm">Notdienst 24/7 erreichbar</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-8">
              <div className="p-6 bg-primary rounded-xl text-white">
                <h4 className="font-bold text-lg mb-2">24h Online Termine buchen</h4>
                <p className="text-white/90 text-sm mb-4">
                  Jederzeit online Ihren Wunschtermin auswählen – auch außerhalb unserer Öffnungszeiten.
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
                  <label htmlFor="phone" className="text-sm font-medium text-secondary">Telefon *</label>
                  <Input 
                    id="phone" 
                    placeholder="Für Rückrufe" 
                    className="bg-white"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
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
                <Select
                  value={formData.subject}
                  onValueChange={(value) => setFormData({ ...formData, subject: value })}
                >
                  <SelectTrigger className="bg-white" data-testid="select-contact-subject">
                    <SelectValue placeholder="Worum geht es?" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceOptions.map((option) => (
                      <SelectItem key={option} value={option} data-testid={`option-subject-${option}`}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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

              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="dsgvo-contact" 
                  checked={dsgvoAccepted}
                  onCheckedChange={(checked) => setDsgvoAccepted(checked === true)}
                  data-testid="checkbox-contact-dsgvo"
                />
                <label htmlFor="dsgvo-contact" className="text-sm text-muted-foreground leading-tight cursor-pointer">
                  Ich habe die <Link href="/datenschutz/" className="text-primary underline hover:no-underline">Datenschutzerklärung</Link> gelesen und stimme der Verarbeitung meiner Daten zu. *
                </label>
              </div>

              <div className="mt-auto pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 rounded-xl text-lg"
                  disabled={isSubmitting || !dsgvoAccepted}
                  data-testid="button-contact-submit"
                >
                  {isSubmitting ? "Wird gesendet..." : "Anfrage absenden"}
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
