import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { MessageSquare, ArrowRight, ArrowLeft, ShieldCheck, Award, Shield, Users, Lightbulb, Target, Heart, CalendarIcon, Loader2, AlertTriangle, ThermometerSun, Home, Sparkles, HardHat, ClipboardCheck, CheckCircle2 } from "lucide-react";
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
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
  const [isLoadingSlots, setIsLoadingSlots] = useState(true);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [formData, setFormData] = useState({
    problem: "",
    timing: "",
    details: "",
    name: "",
    phone: "",
    email: ""
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

  const handleProblemSelect = (problem: string) => {
    setFormData({ ...formData, problem });
    setStep(2);
  };

  const handleTimingSelect = (timing: string) => {
    setFormData({ ...formData, timing });
    setStep(3);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.problem || !formData.timing) {
      toast.error("Bitte füllen Sie alle Schritte aus", {
        description: "Gehen Sie zurück und wählen Sie Ihr Problem und die Dringlichkeit."
      });
      return;
    }
    
    if (!formData.name || !formData.phone || !formData.email) {
      toast.error("Bitte füllen Sie alle Pflichtfelder aus");
      return;
    }
    
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          problem: formData.problem,
          timing: formData.timing + (selectedSlot 
            ? ` | Gewünschter Termin: ${format(new Date(selectedSlot.start), "dd.MM.yyyy HH:mm", { locale: de })} Uhr`
            : ""),
          details: formData.details || "Keine Details angegeben",
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
          description: "Wir melden uns innerhalb von 4 Stunden bei Ihnen."
        });
        setFormData({ problem: "", timing: "", details: "", name: "", phone: "", email: "" });
        setSelectedSlot(null);
        setSelectedDate(undefined);
        setStep(1);
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

  const problemOptions = [
    { id: "leaking", label: "Es tropft oder ist feucht", icon: AlertTriangle, subtext: "Undichtes Dach" },
    { id: "insulation", label: "Es ist zu kalt/heiß", icon: ThermometerSun, subtext: "Dämmung fehlt" },
    { id: "new", label: "Dach sieht alt aus", icon: Home, subtext: "Neueindeckung nötig" },
    { id: "windows", label: "Zu wenig Licht oben", icon: Sparkles, subtext: "Dachfenster" },
    { id: "metal", label: "Rinne undicht/rostig", icon: HardHat, subtext: "Spenglerarbeit" },
    { id: "other", label: "Etwas anderes", icon: ClipboardCheck, subtext: "Beratung" },
  ];

  const timingOptions = [
    { text: "Dringend – bitte schnell!", emoji: "🚨", highlight: true },
    { text: "In den nächsten 1-3 Monaten", emoji: "📅", highlight: false },
    { text: "Dieses Jahr irgendwann", emoji: "🗓️", highlight: false },
    { text: "Ich informiere mich erstmal", emoji: "🤔", highlight: false }
  ];

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
      
      <section className="pt-10 pb-8 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-primary/20"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              <span className="text-primary">Klarheit für Ihr Dach.</span>
              <br />
              Kostenlos & ehrlich.
            </h1>
            <p className="text-lg text-gray-200 max-w-xl">
              Wir geben Ihnen die Sicherheit, die Sie verdienen – ohne Überraschungen, ohne versteckte Kosten.
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
          <div className="max-w-2xl mx-auto">
            <div className="bg-primary text-white p-6 rounded-t-xl">
              <h2 className="text-2xl font-heading font-bold text-center">
                {step === 1 && "Was bereitet Ihnen am meisten Sorgen?"}
                {step === 2 && "Wie dringend ist es für Sie?"}
                {step === 3 && "Wann dürfen wir Sie beraten?"}
                {step === 4 && "Wohin dürfen wir Ihre Lösung senden?"}
              </h2>
              <p className="text-white/80 mt-2 text-sm text-center">
                Schritt {step} von 4{step < 4 ? ` – Noch ${4 - step} ${4 - step === 1 ? "Schritt" : "Schritte"}` : " – Letzter Schritt!"}
              </p>
              <div className="w-full bg-white/20 h-1.5 mt-4 rounded-full overflow-hidden">
                <div 
                  className="bg-white h-full transition-all duration-500 ease-in-out" 
                  style={{ width: `${(step / 4) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-b-xl border border-t-0 border-gray-200">
              {step === 1 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {problemOptions.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleProblemSelect(item.label)}
                      className="flex flex-col items-center justify-center p-6 border-2 border-gray-100 rounded-lg hover:border-primary hover:bg-primary/5 transition-all group text-center h-full bg-white"
                      data-testid={`button-problem-${item.id}`}
                    >
                      <item.icon className="h-8 w-8 mb-3 text-gray-400 group-hover:text-primary transition-colors" />
                      <span className="font-medium text-secondary">{item.label}</span>
                      <span className="text-xs text-muted-foreground mt-1">{item.subtext}</span>
                    </button>
                  ))}
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  {timingOptions.map((timing) => (
                    <button
                      key={timing.text}
                      onClick={() => handleTimingSelect(timing.text)}
                      className={`w-full text-left p-4 border-2 rounded-lg hover:border-primary hover:bg-primary/5 transition-all font-medium text-secondary flex items-center justify-between group bg-white ${timing.highlight ? 'border-primary bg-primary/5' : 'border-gray-100'}`}
                      data-testid={`button-timing-${timing.text.slice(0, 10)}`}
                    >
                      <span>{timing.emoji} {timing.text}</span>
                      <ArrowRight className="h-5 w-5 text-gray-300 group-hover:text-primary" />
                    </button>
                  ))}
                  <div className="mt-6 pt-4 border-t">
                    <Label className="mb-2 block text-secondary">Möchten Sie uns noch etwas mitteilen?</Label>
                    <Textarea 
                      placeholder="Z.B. 'Beim letzten Sturm hat es reingeregnet...'" 
                      className="bg-white border-gray-200"
                      value={formData.details}
                      onChange={(e) => setFormData({...formData, details: e.target.value})}
                      data-testid="textarea-details"
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div className="bg-blue-50 p-4 rounded-md flex gap-3 items-start border border-blue-100">
                    <CalendarIcon className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-blue-800 font-medium">Wählen Sie Ihren Wunschtermin</p>
                      <p className="text-xs text-blue-700 mt-1">Wir rufen Sie zum gewünschten Zeitpunkt zurück.</p>
                    </div>
                  </div>

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
                    <div className="space-y-4">
                      <div>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-start text-left font-normal h-12 bg-white"
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
                          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                            {getSlotsForDate(selectedDate).map((slot, idx) => (
                              <Button
                                key={idx}
                                type="button"
                                variant={selectedSlot?.start === slot.start ? "default" : "outline"}
                                size="sm"
                                onClick={() => setSelectedSlot(slot)}
                                className="bg-white"
                                data-testid={`button-slot-${formatTime(slot.start)}`}
                              >
                                {formatTime(slot.start)} Uhr
                              </Button>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedSlot && (
                        <div className="bg-green-50 p-4 rounded-md border border-green-200">
                          <p className="text-sm font-medium text-green-800">
                            ✓ Gewählter Termin: {format(new Date(selectedSlot.start), "EEEE, dd. MMMM yyyy 'um' HH:mm", { locale: de })} Uhr
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  <Button 
                    onClick={() => setStep(4)} 
                    className="w-full bg-primary text-white hover:bg-primary/90"
                    data-testid="button-continue-step3"
                  >
                    {selectedSlot ? "Weiter zum letzten Schritt" : "Ohne Terminwunsch fortfahren"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  
                  {!selectedSlot && availableSlots.length > 0 && (
                    <p className="text-center text-xs text-muted-foreground">
                      Sie können auch ohne Terminwunsch fortfahren – wir melden uns schnellstmöglich.
                    </p>
                  )}
                </div>
              )}

              {step === 4 && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="bg-green-50 p-4 rounded-md flex gap-3 items-start border border-green-100">
                    <ShieldCheck className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-green-800 font-medium">
                        100% kostenlos & unverbindlich
                      </p>
                      <p className="text-xs text-green-700 mt-1">
                        Kein Risiko. Ihre Daten nutzen wir nur, um Ihnen zu helfen.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ihr Name</Label>
                      <Input 
                        id="name" 
                        placeholder="Max Mustermann"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-white"
                        data-testid="input-lead-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon (für Rückruf)</Label>
                      <Input 
                        id="phone" 
                        placeholder="089 ..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="bg-white"
                        data-testid="input-lead-phone"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="ihre@email.de"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-white"
                      data-testid="input-lead-email"
                    />
                  </div>

                  {selectedSlot && (
                    <div className="bg-primary/10 p-4 rounded-md">
                      <p className="text-sm font-medium text-primary">
                        ✓ Ihr Termin: {format(new Date(selectedSlot.start), "EEEE, dd. MMMM yyyy 'um' HH:mm", { locale: de })} Uhr
                      </p>
                    </div>
                  )}

                  <Button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 text-lg rounded-xl"
                    disabled={isSubmitting}
                    data-testid="button-lead-submit"
                  >
                    {isSubmitting ? "Wird gesendet..." : "Ja, ich will mein kostenloses Angebot!"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    <CheckCircle2 className="inline h-3 w-3 text-green-500 mr-1" />
                    Diese Woche bereits 7 Anfragen aus München bearbeitet
                  </p>
                </form>
              )}

              {step > 1 && (
                <div className="mt-6 pt-4 border-t flex justify-between items-center">
                  <button 
                    onClick={() => setStep(step - 1)}
                    className="text-sm text-muted-foreground hover:text-secondary flex items-center gap-1"
                    data-testid="button-back"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Zurück
                  </button>
                  <a href="tel:08912621964" className="text-sm text-primary font-medium flex items-center gap-1">
                    Lieber direkt anrufen?
                  </a>
                </div>
              )}
            </div>
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
