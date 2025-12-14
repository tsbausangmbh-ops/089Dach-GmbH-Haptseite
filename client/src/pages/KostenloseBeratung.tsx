import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { MessageSquare, ArrowRight, ShieldCheck, Award, Shield, Users, Lightbulb, Target, Heart, CalendarIcon, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import SEO, { BreadcrumbSchema } from "@/components/SEO";
import { format, isSameDay } from "date-fns";
import { de } from "date-fns/locale";

interface TimeSlot {
  start: string;
  end: string;
}

export default function KostenloseBeratung() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
  const [isLoadingSlots, setIsLoadingSlots] = useState(true);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    problem: "",
    urgency: "",
    objectType: "",
    message: ""
  });

  useEffect(() => {
    fetchAvailability();
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
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          problem: formData.problem || "Kostenlose Beratung angefragt",
          timing: selectedSlot 
            ? `Gewünschter Termin: ${format(new Date(selectedSlot.start), "dd.MM.yyyy HH:mm", { locale: de })} Uhr`
            : "Beratungsanfrage",
          details: [
            formData.objectType && `Objektart: ${formData.objectType}`,
            formData.urgency && `Dringlichkeit: ${formData.urgency}`,
            formData.address && `Adresse: ${formData.address}`,
            formData.message
          ].filter(Boolean).join("\n") || "Keine Details angegeben",
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          callbackStart: selectedSlot?.start || null,
          callbackEnd: selectedSlot?.end || null
        })
      });

      if (response.ok) {
        const successMsg = selectedSlot 
          ? `Beratungstermin am ${format(new Date(selectedSlot.start), "dd.MM. 'um' HH:mm", { locale: de })} Uhr gebucht!`
          : "Beratungsanfrage gesendet!";
        toast.success(successMsg, {
          description: "Wir melden uns zum vereinbarten Termin bei Ihnen."
        });
        setFormData({ name: "", email: "", phone: "", address: "", problem: "", objectType: "", urgency: "", message: "" });
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
        title="Kostenlose Beratung | Dachdecker München - 089Dach"
        description="Kostenlose Dachberatung vom Meisterbetrieb. Ehrliche Einschätzung, keine versteckten Kosten. Jetzt unverbindlich anfragen!"
        canonical="https://089dach.de/beratung"
        keywords="kostenlose beratung dachdecker münchen, dachberatung gratis, expertenberatung dach, unverbindliche beratung, dachcheck kostenlos"
        aiSummary="089Dach GmbH: Kostenlose Dachberatung vom Meisterbetrieb in München. Ehrliche Einschätzung ohne Verkaufsdruck. Telefon: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Kostenlose Beratung", url: "/beratung" }]} />
      <Navbar />
      
      <section className="pt-10 pb-12 bg-secondary relative overflow-hidden min-h-[40vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-primary/20"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              <span className="text-primary">Klarheit für Ihr Dach.</span>
              <br />
              Kostenlos & ehrlich.
            </h1>
            <p className="text-xl text-gray-200 max-w-xl mb-4">
              Stellen Sie sich vor, Sie wüssten genau, was Ihr Dach braucht – ohne Überraschungen, ohne versteckte Kosten. Wir geben Ihnen diese Sicherheit.
            </p>
            <p className="text-lg text-gray-300 max-w-xl">
              Keine Verpflichtungen. Nur ehrliche Expertise.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-stone-100 py-2 border-b border-stone-200">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-4 text-xs">
            <span className="flex items-center gap-1.5">
              <Award className="h-4 w-4 text-primary" />
              <span>Meisterbetrieb seit 1998</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-primary" />
              <span>Unabhängige Beratung</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="h-4 w-4 text-primary" />
              <span>Über 100 zufriedene Kunden</span>
            </span>
          </div>
        </div>
      </div>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-secondary mb-2">
                  Ihre kostenlose Beratung anfordern
                </h2>
              </div>
              <div className="bg-stone-50 p-6 rounded-xl border-l-4 border-primary">
                <p className="text-secondary font-medium mb-3">
                  Wissen ist Macht – besonders beim Thema Dach.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Viele Hausbesitzer fühlen sich unsicher, wenn es um ihr Dach geht. Das muss nicht sein. Unsere kostenlose Beratung gibt Ihnen die Klarheit, die Sie verdienen – egal ob es um eine kleine Reparatur oder eine komplette Sanierung geht.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-xl space-y-6">
              <div className="bg-green-50 p-4 rounded-md flex gap-3 items-start border border-green-100 mb-6">
                <ShieldCheck className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-green-800 font-medium">100% kostenlos & unverbindlich</p>
                  <p className="text-xs text-green-700 mt-1">Wir beraten Sie ehrlich – auch wenn das bedeutet, dass Sie uns nicht brauchen.</p>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="problem">Was beschäftigt Sie?</Label>
                <select
                  id="problem"
                  className="w-full h-12 px-3 rounded-md border border-input bg-background text-sm"
                  value={formData.problem}
                  onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                  data-testid="select-beratung-problem"
                >
                  <option value="">Bitte wählen...</option>
                  <option value="Dach undicht">Mein Dach ist undicht</option>
                  <option value="Dachsanierung">Ich denke über eine Dachsanierung nach</option>
                  <option value="Dachfenster">Ich möchte ein Dachfenster einbauen</option>
                  <option value="Dämmung">Ich möchte mein Dach dämmen</option>
                  <option value="Wartung">Ich brauche eine Dachwartung</option>
                  <option value="Sturmschaden">Mein Dach hat einen Sturmschaden</option>
                  <option value="Rinne/Regenrinne">Rinne oder Regenrinne defekt</option>
                  <option value="Flachdach">Flachdach-Problem oder -Sanierung</option>
                  <option value="Gaube">Gaube einbauen oder sanieren</option>
                  <option value="Schimmel/Feuchtigkeit">Schimmel oder Feuchtigkeit im Dach</option>
                  <option value="Sonstiges">Etwas anderes</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="objectType">Art des Gebäudes</Label>
                <select
                  id="objectType"
                  className="w-full h-12 px-3 rounded-md border border-input bg-background text-sm"
                  value={formData.objectType}
                  onChange={(e) => setFormData({ ...formData, objectType: e.target.value })}
                  data-testid="select-beratung-objecttype"
                >
                  <option value="">Bitte wählen...</option>
                  <option value="Einfamilienhaus">Einfamilienhaus</option>
                  <option value="Mehrfamilienhaus">Mehrfamilienhaus</option>
                  <option value="Reihenhaus/Doppelhaushälfte">Reihenhaus / Doppelhaushälfte</option>
                  <option value="Gewerbe">Gewerbegebäude</option>
                  <option value="Sonstiges">Sonstiges</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="urgency">Wie dringend ist es?</Label>
                <select
                  id="urgency"
                  className="w-full h-12 px-3 rounded-md border border-input bg-background text-sm"
                  value={formData.urgency}
                  onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                  data-testid="select-beratung-urgency"
                >
                  <option value="">Bitte wählen...</option>
                  <option value="Sofort/Notfall">Sofort / Notfall</option>
                  <option value="In den nächsten Tagen">In den nächsten Tagen</option>
                  <option value="In den nächsten Wochen">In den nächsten Wochen</option>
                  <option value="Kein Zeitdruck">Kein Zeitdruck / nur informieren</option>
                </select>
              </div>

              <div className="space-y-4">
                <Label className="text-base font-semibold flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5 text-primary" />
                  Wunschtermin für Beratungsgespräch (optional)
                </Label>
                
                {isLoadingSlots ? (
                  <div className="flex items-center justify-center py-8">
                    <Loader2 className="h-6 w-6 animate-spin text-primary" />
                    <span className="ml-2 text-muted-foreground">Lade verfügbare Termine...</span>
                  </div>
                ) : availableSlots.length === 0 ? (
                  <div className="bg-yellow-50 p-4 rounded-md border border-yellow-200">
                    <p className="text-sm text-yellow-800">Keine freien Termine verfügbar. Wir melden uns schnellstmöglich bei Ihnen.</p>
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
                              if (dayOfWeek === 0) return true;
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
                              onClick={() => setSelectedSlot(slot)}
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
                  data-testid="input-beratung-name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Adresse des Objekts (optional)</Label>
                <Input 
                  id="address"
                  placeholder="Straße, PLZ Ort"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  data-testid="input-beratung-address"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Ihre Telefonnummer *</Label>
                  <Input 
                    id="phone"
                    type="tel"
                    placeholder="089 ..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    data-testid="input-beratung-phone"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Ihre E-Mail (optional)</Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="max@beispiel.de"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    data-testid="input-beratung-email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Erzählen Sie uns mehr (optional)</Label>
                <Textarea 
                  id="message"
                  placeholder="z.B. Welche Fragen haben Sie? Was möchten Sie in der Beratung besprechen? Gibt es besondere Wünsche?"
                  className="min-h-[100px]"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  data-testid="textarea-beratung-message"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 text-lg"
                disabled={isSubmitting}
                data-testid="button-beratung-submit"
              >
                {isSubmitting ? "Wird gesendet..." : selectedSlot ? "Beratungstermin buchen" : "Kostenlose Beratung anfordern"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Oder rufen Sie uns direkt an: <a href="tel:08912621964" className="text-primary font-medium hover:underline" data-testid="link-phone-beratung">089 12621964</a>
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="py-4 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-secondary mb-4 text-center">
              Was Sie von unserer Beratung erwarten können
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Target, title: "Klare Diagnose", desc: "Wir analysieren Ihr Dach und sagen Ihnen genau, was Sache ist – verständlich und ohne Fachjargon." },
                { icon: Lightbulb, title: "Echte Optionen", desc: "Sie erhalten verschiedene Lösungswege mit transparenten Vor- und Nachteilen. Die Entscheidung liegt bei Ihnen." },
                { icon: Heart, title: "Ehrliche Meinung", desc: "Wenn Ihr Dach in Ordnung ist, sagen wir das. Wir verkaufen nichts, was Sie nicht brauchen." }
              ].map((item, index) => (
                <div key={index} className="text-center p-6" data-testid={`advantage-beratung-${index}`}>
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
