import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { PhoneCall, ArrowRight, ShieldCheck, Award, Shield, Users, Clock, CheckCircle, CalendarIcon, Loader2, Phone } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import SEO, { BreadcrumbSchema } from "@/components/SEO";
import BackButton from "@/components/BackButton";
import heroImage from "@assets/optimized/friendly_woman_on_phone_in_office.webp";
import { format, isSameDay } from "date-fns";
import { de } from "date-fns/locale";

interface TimeSlot {
  start: string;
  end: string;
  available: boolean;
}

export default function Rueckruf() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
  const [isLoadingSlots, setIsLoadingSlots] = useState(true);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [dsgvoAccepted, setDsgvoAccepted] = useState(false);
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0 });
  const [captchaAnswer, setCaptchaAnswer] = useState("");

  const generateCaptcha = () => {
    setCaptcha({
      num1: Math.floor(Math.random() * 10) + 1,
      num2: Math.floor(Math.random() * 10) + 1
    });
    setCaptchaAnswer("");
  };

  useEffect(() => {
    fetchAvailability();
    generateCaptcha();
  }, []);

  const fetchAvailability = async () => {
    try {
      const response = await fetch("/api/availability");
      if (response.ok) {
        const data = await response.json();
        setAvailableSlots(data.slots || []);
      }
    } catch (error) {
      console.error("Failed to fetch availability:", error);
    } finally {
      setIsLoadingSlots(false);
    }
  };

  const getAvailableDates = () => {
    const dates = new Set<string>();
    availableSlots.forEach(slot => {
      const date = new Date(slot.start);
      dates.add(date.toDateString());
    });
    return Array.from(dates).map(d => new Date(d));
  };

  const getSlotsForDate = (date: Date) => {
    return availableSlots.filter(slot => {
      const slotDate = new Date(slot.start);
      return isSameDay(slotDate, date);
    });
  };

  const formatTime = (isoString: string) => {
    return format(new Date(isoString), "HH:mm", { locale: de });
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
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          problem: "Rückrufanfrage",
          timing: selectedSlot 
            ? `Gewünschter Termin: ${format(new Date(selectedSlot.start), "dd.MM.yyyy HH:mm", { locale: de })} Uhr`
            : "Rückruf gewünscht",
          details: formData.message || "Keine Nachricht hinterlassen",
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          callbackStart: selectedSlot?.start || null,
          callbackEnd: selectedSlot?.end || null
        })
      });

      if (response.ok) {
        const successMsg = selectedSlot 
          ? `Termin am ${format(new Date(selectedSlot.start), "dd.MM. 'um' HH:mm", { locale: de })} Uhr gebucht!`
          : "Rückruf angefordert!";
        toast.success(successMsg, {
          description: "Wir rufen Sie zum vereinbarten Termin zurück."
        });
        setFormData({ name: "", phone: "", email: "", message: "" });
        setDsgvoAccepted(false);
        setSelectedSlot(null);
        setSelectedDate(undefined);
        fetchAvailability();
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

  const availableDates = getAvailableDates();

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Rückrufservice 089Dach – Ihr Dachdecker ruft Sie zurück"
        description="Rückrufservice 089Dach: Hinterlassen Sie Ihre Nummer und wir rufen Sie zeitnah zurück. Für Beratung, Notdienst & Angebote."
        canonical="https://089dach.de/rueckruf"
        keywords="Rückruf Dachdecker, Rückrufservice Dachdecker München, Dachdecker Beratung Rückruf, Notdienst Rückruf"
        aiSummary="089Dach GmbH Rückruf-Service: Kostenloser Rückruf vom Dachdecker-Meisterbetrieb München. Persönliche Beratung, in der Regel Antwort am selben Tag. Telefon: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Rückruf anfordern", url: "/rueckruf" }]} />
      <Navbar />
      <main id="main-content" role="main" tabIndex={-1}>
      
      <section className="pt-6 pb-8 md:pt-10 md:pb-12 relative overflow-hidden min-h-[40vh] md:min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Freundliche Mitarbeiterin am Telefon - kostenloser Rückruf-Service Dachdecker München"
            className="w-full h-full object-cover"
            width={1792}
            height={1024}
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/70"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl text-white">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">089Dach Rückruf-Service</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mt-4 mb-6">
              Sparen Sie Zeit & Nerven.
              <br />
              <span className="text-primary">Wir rufen Sie an.</span>
            </h1>
            
            <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl border-l-4 border-primary mb-8">
              <p className="text-lg text-white font-medium mb-3">
                Keine Lust auf Warteschleifen?
              </p>
              <p className="text-gray-200 leading-relaxed">
                Kein Warten in der Leitung, keine Warteschleife. Sie wählen den perfekten Zeitpunkt – 
                <strong className="text-white"> wir sind pünktlich für Sie da.</strong>
              </p>
            </div>
            
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              <strong className="text-white">100% kostenlos.</strong> 100% unverbindlich. 100% persönlich.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-xl" data-testid="button-hero-call">
                <a href="#formular">
                  <Phone className="mr-2 h-5 w-5" />
                  Rückruf anfordern
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-secondary font-bold rounded-xl" data-testid="button-hero-form">
                <a href="#formular">Beratungstermin wählen</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

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

      <BackButton />

      <section className="py-3 bg-white" id="formular">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <PhoneCall className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-secondary mb-2">
                  Wählen Sie Ihren Wunschtermin
                </h2>
              </div>
              <div className="bg-stone-50 p-4 md:p-6 rounded-xl border-l-4 border-primary">
                <p className="text-secondary font-medium mb-3">
                  Ihr Dach verdient die beste Beratung – und Sie den besten Service.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Stellen Sie sich vor: Sie entspannen sich, und genau zum gewünschten Zeitpunkt klingelt Ihr Telefon. Am anderen Ende: Ein erfahrener Dachdeckermeister, der Ihre Fragen persönlich beantwortet. Keine Warteschleife, kein Callcenter – nur echte Expertise.
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

              <div className="space-y-4">
                <Label className="text-base font-semibold flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5 text-primary" />
                  Wunschtermin auswählen
                </Label>
                
                {isLoadingSlots ? (
                  <div className="flex items-center justify-center py-3">
                    <Loader2 className="h-6 w-6 animate-spin text-primary" />
                    <span className="ml-2 text-muted-foreground">Lade verfügbare Termine...</span>
                  </div>
                ) : availableSlots.length === 0 ? (
                  <div className="bg-yellow-50 p-4 rounded-md border border-yellow-200">
                    <p className="text-sm text-yellow-800">Keine freien Termine verfügbar. Wir rufen Sie schnellstmöglich zurück.</p>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal h-12"
                            data-testid="button-date-picker"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {selectedDate ? format(selectedDate, "EEEE, dd. MMMM yyyy", { locale: de }) : "Datum auswählen"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={(date) => {
                              setSelectedDate(date);
                              setSelectedSlot(null);
                            }}
                            disabled={(date) => {
                              const dayOfWeek = date.getDay();
                              if (dayOfWeek === 0 || dayOfWeek === 6) return true;
                              return !availableDates.some(d => isSameDay(d, date));
                            }}
                            locale={de}
                            data-testid="calendar-date"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    {selectedDate && (
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Verfügbare Zeiten:</p>
                        <div className="grid grid-cols-3 gap-2">
                          {getSlotsForDate(selectedDate).map((slot, idx) => (
                            <Button
                              key={idx}
                              type="button"
                              variant={selectedSlot?.start === slot.start ? "default" : "outline"}
                              size="sm"
                              onClick={() => slot.available && setSelectedSlot(slot)}
                              disabled={!slot.available}
                              className={!slot.available ? "opacity-50 line-through cursor-not-allowed" : ""}
                              data-testid={`button-slot-${formatTime(slot.start)}`}
                            >
                              {formatTime(slot.start)} Uhr
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {selectedSlot && (
                  <div className="bg-primary/10 p-4 rounded-md">
                    <p className="text-sm font-medium text-primary">
                      ✓ Gewählter Termin: {format(new Date(selectedSlot.start), "EEEE, dd. MMMM yyyy 'um' HH:mm", { locale: de })} Uhr
                    </p>
                  </div>
                )}
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
                <Label htmlFor="phone">Ihre Telefonnummer (optional)</Label>
                <Input 
                  id="phone"
                  type="tel"
                  placeholder="089 ..."
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  data-testid="input-rueckruf-phone"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-Mail für Bestätigung (optional)</Label>
                <Input 
                  id="email"
                  type="email"
                  placeholder="ihre@email.de"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  data-testid="input-rueckruf-email"
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

              <div className="space-y-2">
                <Label htmlFor="captcha-rueckruf">
                  Sicherheitsfrage: Was ist {captcha.num1} + {captcha.num2}? *
                </Label>
                <Input 
                  id="captcha-rueckruf"
                  type="number"
                  placeholder="Ihre Antwort"
                  className="w-32"
                  value={captchaAnswer}
                  onChange={(e) => setCaptchaAnswer(e.target.value)}
                  required
                  data-testid="input-rueckruf-captcha"
                />
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="dsgvo-rueckruf" 
                  checked={dsgvoAccepted}
                  onCheckedChange={(checked) => setDsgvoAccepted(checked === true)}
                  className="mt-0.5"
                  data-testid="checkbox-rueckruf-dsgvo"
                />
                <span 
                  className="text-sm text-muted-foreground leading-tight cursor-pointer select-none"
                  onClick={() => setDsgvoAccepted(!dsgvoAccepted)}
                >
                  Ich habe die <a href="/datenschutz/" className="text-primary underline hover:no-underline" onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open('/datenschutz/', '_blank'); }}>Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zu. *
                </span>
              </div>

              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 text-lg"
                disabled={isSubmitting || !dsgvoAccepted}
                data-testid="button-rueckruf-submit"
              >
                {isSubmitting ? "Wird gesendet..." : selectedSlot ? "Termin buchen" : "Rückruf anfordern"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Oder schreiben Sie uns: <a href="mailto:info@089dach.de" className="text-primary font-medium hover:underline" data-testid="link-email-rueckruf">info@089dach.de</a>
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="py-4 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-secondary mb-4 text-center">
              Warum einen Rückruf anfordern?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Clock, title: "Ihre Zeit ist wertvoll", desc: "Wir passen uns Ihrem Zeitplan an – nicht umgekehrt. Wählen Sie, wann es Ihnen passt." },
                { icon: CheckCircle, title: "Null Risiko für Sie", desc: "Komplett kostenlos. Sie gewinnen wertvolle Informationen, ohne einen Cent zu zahlen." },
                { icon: ShieldCheck, title: "Ehrliche Beratung", desc: "Wir sagen Ihnen, was Ihr Dach wirklich braucht – auch wenn das bedeutet: nichts." }
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

      <section className="py-4 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <p className="text-[10px] text-muted-foreground/60 leading-relaxed">
            <strong>Hinweis zum Vertragsabschluss:</strong> Die auf dieser Website dargestellten Inhalte, Leistungen und Informationen stellen kein verbindliches Angebot im rechtlichen Sinne dar. Ein Vertragsabschluss über diese Website findet nicht statt. Anfragen über kontaktformulare, E-Mail oder Telefon dienen ausschließlich der unverbindlichen Kontaktaufnahme und der Vorbereitung einer individuellen Angebotserstellung. Ein Vertrag kommt erst nach persönlicher Abstimmung, Besichtigung vor Ort und ausdrücklicher Annahme eines schriftlichen Angebots zustande. Es erfolgt keine kostenpflichtige Bestellung, keine Buchung und keine Online-Zahlung über diese Website. <a href="/impressum/" className="underline hover:text-primary">Impressum</a> · <a href="/agb/" className="underline hover:text-primary">AGB</a>
          </p>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
}
