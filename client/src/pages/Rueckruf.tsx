import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PhoneCall, ArrowRight, ShieldCheck, Award, Shield, Users, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import SEO, { BreadcrumbSchema } from "@/components/SEO";
import heroImage from "@assets/generated_images/friendly_woman_on_phone_in_office.png";

export default function Rueckruf() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
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
          problem: "Rückrufanfrage",
          timing: "Rückruf gewünscht",
          details: formData.message || "Keine Nachricht hinterlassen",
          name: formData.name,
          phone: formData.phone,
          email: ""
        })
      });

      if (response.ok) {
        toast.success("Rückruf angefordert!", {
          description: "Wir rufen Sie schnellstmöglich zurück."
        });
        setFormData({ name: "", phone: "", message: "" });
      } else {
        toast.error("Fehler beim Senden", {
          description: "Bitte versuchen Sie es erneut oder rufen Sie uns direkt an."
        });
      }
    } catch {
      toast.error("Verbindungsfehler", {
        description: "Bitte rufen Sie uns an: 089 12621964"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Rückruf anfordern | Dachdecker München - 089Dach"
        description="Kostenloser Rückruf vom Dachdecker-Meisterbetrieb. Wir rufen Sie schnellstmöglich zurück. Unverbindlich & persönlich!"
        canonical="https://089dach.de/rueckruf"
        keywords="rückruf dachdecker münchen, dachdecker kontakt münchen, dach beratung münchen, dachdecker anfrage"
        aiSummary="089Dach GmbH Rückruf-Service: Kostenloser Rückruf vom Dachdecker-Meisterbetrieb München. Persönliche Beratung, in der Regel Antwort am selben Tag. Telefon: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Rückruf anfordern", url: "/rueckruf" }]} />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-10 pb-12 bg-secondary relative overflow-hidden min-h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Rückruf anfordern"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/50"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              <span className="text-primary">Wir rufen Sie zurück.</span>
              <br />
              Versprochen.
            </h1>
            <p className="text-xl text-gray-200 max-w-xl mb-4">
              Schreiben Sie uns, wir rufen Sie zurück. In der Regel innerhalb von 24 Stunden vor Ort.
            </p>
            <p className="text-lg text-gray-300 max-w-xl">
              Kostenlos und unverbindlich.
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
              <span>100+ zufriedene Kunden</span>
            </span>
          </div>
        </div>
      </div>

      {/* Rückruf-Formular */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <PhoneCall className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-secondary mb-2">
                  Wir sind für Sie da.
                </h2>
              </div>
              <div className="bg-stone-50 p-6 rounded-xl border-l-4 border-primary">
                <p className="text-secondary font-medium mb-3">
                  Sie haben Fragen, Sorgen oder einfach ein ungutes Gefühl bei Ihrem Dach?
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Das verstehen wir. Ein tropfender Fleck an der Decke, lose Ziegel nach dem letzten Sturm oder einfach die Frage: „Ist bei mir noch alles in Ordnung?" – solche Gedanken können belasten. Genau dafür sind wir hier. Kein Callcenter, keine Warteschleife. Nur ein kurzes Formular – und wir melden uns persönlich bei Ihnen.
                </p>
                <p className="text-sm text-primary font-medium italic">
                  Lassen Sie uns gemeinsam eine Lösung finden. Wir freuen uns auf Ihren Kontakt.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-xl space-y-6">
              <div className="bg-green-50 p-4 rounded-md flex gap-3 items-start border border-green-100 mb-6">
                <ShieldCheck className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-green-800 font-medium">100% kostenlos & unverbindlich</p>
                  <p className="text-xs text-green-700 mt-1">Wir beraten Sie ehrlich und ohne Verkaufsdruck.</p>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Ihr Name *</Label>
                <Input 
                  id="name"
                  placeholder="Max Mustermann"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  data-testid="input-rueckruf-name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Ihre Telefonnummer *</Label>
                <Input 
                  id="phone"
                  type="tel"
                  placeholder="089 ..."
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  data-testid="input-rueckruf-phone"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Worum geht es? (optional)</Label>
                <Textarea 
                  id="message"
                  placeholder="z.B. Undichte Stelle am Dach, Frage zur Dachsanierung, Wartungstermin..."
                  className="min-h-[100px]"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  data-testid="textarea-rueckruf-message"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 text-lg"
                disabled={isSubmitting}
                data-testid="button-rueckruf-submit"
              >
                {isSubmitting ? "Wird gesendet..." : "Rückruf anfordern"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Oder rufen Sie uns direkt an: <a href="tel:08912621964" className="text-primary font-medium hover:underline" data-testid="link-phone-rueckruf">089 12621964</a>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-secondary mb-8 text-center">
              Warum einen Rückruf anfordern?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Clock, title: "Schnelle Antwort", desc: "Wir rufen Sie in der Regel noch am selben Tag zurück." },
                { icon: CheckCircle, title: "Kostenlos", desc: "Unser Rückrufservice ist komplett kostenlos für Sie." },
                { icon: ShieldCheck, title: "Unverbindlich", desc: "Kein Verkaufsdruck – nur ehrliche Beratung." }
              ].map((item, index) => (
                <div key={index} className="text-center p-6" data-testid={`advantage-rueckruf-${index}`}>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-secondary mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
