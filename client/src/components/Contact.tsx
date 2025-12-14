import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          <div>
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Kontakt</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mt-2 mb-6">
              Sprechen Sie mit uns über Ihr Projekt
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Gerne beraten wir Sie unverbindlich vor Ort oder erstellen Ihnen ein individuelles Angebot. 
              Wir freuen uns auf Ihre Anfrage.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-sm">
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
                <div className="bg-primary/10 p-3 rounded-sm">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-secondary text-lg">Telefon</h4>
                  <p className="text-muted-foreground">
                    <a href="tel:08912621964" className="hover:text-primary transition-colors">089 12621964</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-sm">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-secondary text-lg">E-Mail</h4>
                  <p className="text-muted-foreground">
                    <a href="mailto:info@089dach.de" className="hover:text-primary transition-colors">info@089dach.de</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-sm">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-secondary text-lg">Öffnungszeiten</h4>
                  <p className="text-muted-foreground">
                    Mo - Fr: 08:00 - 16:00 Uhr<br/>
                    Wochenende geschlossen
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 md:p-10 rounded-sm border border-border">
            <h3 className="text-2xl font-heading font-bold text-secondary mb-6">Nachricht senden</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-secondary">Name</label>
                  <Input id="name" placeholder="Max Mustermann" className="bg-white" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-secondary">Telefon</label>
                  <Input id="phone" placeholder="Für Rückrufe" className="bg-white" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-secondary">E-Mail Adresse</label>
                <Input id="email" type="email" placeholder="name@beispiel.de" className="bg-white" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-secondary">Ihre Nachricht</label>
                <Textarea id="message" placeholder="Wie können wir Ihnen helfen?" className="min-h-[120px] bg-white" />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 rounded-sm text-lg">
                Anfrage absenden
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Mit dem Absenden erklären Sie sich mit der Verarbeitung Ihrer Daten einverstanden.
              </p>
            </form>
          </div>

        </div>

        <div className="mt-16 w-full h-[400px] bg-gray-100 rounded-sm overflow-hidden shadow-sm border border-border">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2660.569852277457!2d11.455648976922557!3d48.1764669712478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e7710a3099999%3A0x6b801a0808080808!2sThuillestra%C3%9Fe%2020%2C%2081247%20M%C3%BCnchen!5e0!3m2!1sde!2sde!4v1709825484897!5m2!1sde!2sde" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Standort 089Dach GmbH"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
