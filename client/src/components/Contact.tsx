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

export default function Contact() {
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
    <section id="contact" className="py-6 md:py-8 bg-stone-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 mb-8 md:mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
          
          <div>
            <span className="text-primary font-bold tracking-wider uppercase text-sm block text-center md:text-left">Kontakt</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mt-2 mb-6 text-center md:text-left">
              Sprechen Sie mit uns über Ihr Projekt
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Gerne beraten wir Sie unverbindlich vor Ort oder erstellen Ihnen ein individuelles Angebot. 
              Wir freuen uns auf Ihre Anfrage.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-secondary text-lg">Anschrift</h4>
                  <p className="text-muted-foreground">
                    089Dach GmbH<br/>
                    Thuillestr. 20<br/>
                    81247 München-Obermenzing
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-secondary text-lg">Telefon</h4>
                  <p className="text-muted-foreground">
                    <a href="tel:08912621964" className="hover:text-primary transition-colors" data-testid="link-phone">089 12621964</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-secondary text-lg">E-Mail</h4>
                  <p className="text-muted-foreground">
                    <a href="mailto:info@089dach.de" className="hover:text-primary transition-colors" data-testid="link-email">info@089dach.de</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-secondary text-lg">Öffnungszeiten</h4>
                  <p className="text-muted-foreground">
                    Mo - Fr: 08:00 - 16:30 Uhr<br/>
                    Wochenende geschlossen
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-xl border border-stone-200">
            <h3 className="text-2xl font-heading font-bold text-secondary mb-6 text-center md:text-left">Nachricht senden</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
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
                  <label htmlFor="phone" className="text-sm font-medium text-secondary">Telefon</label>
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
                  Ich habe die <Link href="/datenschutz" className="text-primary underline hover:no-underline">Datenschutzerklärung</Link> gelesen und stimme der Verarbeitung meiner Daten zu. *
                </label>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 rounded-xl text-lg"
                disabled={isSubmitting || !dsgvoAccepted}
                data-testid="button-contact-submit"
              >
                {isSubmitting ? "Wird gesendet..." : "Anfrage absenden"}
              </Button>
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
