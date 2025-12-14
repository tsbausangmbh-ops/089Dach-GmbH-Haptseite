import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ShieldCheck, HardHat, Sparkles, AlertTriangle, ThermometerSun, Home, ClipboardCheck } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export default function LeadFunnel() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    problem: "",
    timing: "",
    details: "",
    name: "",
    phone: "",
    email: ""
  });

  const handleProblemSelect = (problem: string) => {
    setFormData({ ...formData, problem });
    setStep(2);
  };

  const handleTimingSelect = (timing: string) => {
    setFormData({ ...formData, timing });
    setStep(3);
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success("Anfrage erfolgreich gesendet!", {
          description: "Wir melden uns innerhalb von 24 Stunden bei Ihnen."
        });
        setOpen(false);
        setTimeout(resetForm, 300);
      } else {
        toast.error("Fehler beim Senden", {
          description: "Bitte versuchen Sie es erneut oder rufen Sie uns an."
        });
      }
    } catch (error) {
      console.error("Error submitting lead:", error);
      toast.error("Fehler beim Senden", {
        description: "Bitte versuchen Sie es erneut oder rufen Sie uns an."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setStep(1);
    setFormData({
      problem: "",
      timing: "",
      details: "",
      name: "",
      phone: "",
      email: ""
    });
  };

  return (
    <section className="py-20 bg-primary text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
            Probleme mit dem Dach? <br/>
            <span className="text-white/90">Wir haben die Lösung.</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Egal ob undichte Stellen, fehlende Dämmung oder der Wunsch nach einem neuen Look. 
            Als Meisterbetrieb finden wir die optimale Lösung für Ihr Zuhause.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 text-sm md:text-base font-medium">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <ShieldCheck className="h-5 w-5 text-green-400" />
              <span>Meister-Garantie</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span>Kostenlose Erstberatung</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <HardHat className="h-5 w-5 text-green-400" />
              <span>25+ Jahre Erfahrung</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-sm border border-white/20 relative group hover:bg-white/20 transition-all">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-primary font-bold w-12 h-12 flex items-center justify-center rounded-full text-xl shadow-lg group-hover:scale-110 transition-transform">
              1
            </div>
            <div className="mt-6 text-center">
              <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-xl font-bold mb-2">Problem erkennen</h3>
              <p className="text-white/80">
                Schildern Sie uns kurz Ihr Anliegen. Wir verstehen Ihre Sorgen und wissen, worauf es ankommt.
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-sm border border-white/20 relative group hover:bg-white/20 transition-all">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-primary font-bold w-12 h-12 flex items-center justify-center rounded-full text-xl shadow-lg group-hover:scale-110 transition-transform">
              2
            </div>
            <div className="mt-6 text-center">
              <Sparkles className="w-12 h-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-xl font-bold mb-2">Lösung finden</h3>
              <p className="text-white/80">
                Wir entwickeln ein individuelles Konzept, das Ihr Problem dauerhaft und kosteneffizient löst.
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-sm border border-white/20 relative group hover:bg-white/20 transition-all">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-primary font-bold w-12 h-12 flex items-center justify-center rounded-full text-xl shadow-lg group-hover:scale-110 transition-transform">
              3
            </div>
            <div className="mt-6 text-center">
              <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-green-400" />
              <h3 className="text-xl font-bold mb-2">Sicherheit genießen</h3>
              <p className="text-white/80">
                Lehnen Sie sich zurück. Wir setzen alles fachgerecht um – sauber, pünktlich und garantiert dicht.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Dialog open={open} onOpenChange={(val) => {
            setOpen(val);
            if(!val) setTimeout(resetForm, 300);
          }}>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold text-xl px-12 py-8 rounded-sm shadow-xl transition-transform hover:scale-105">
                Lösung jetzt anfragen
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] bg-white text-secondary p-0 overflow-hidden gap-0">
              <div className="bg-primary p-6 text-white text-center">
                <h3 className="text-2xl font-heading font-bold">
                  {step === 1 && "Wobei können wir Ihnen helfen?"}
                  {step === 2 && "Wann soll das Projekt starten?"}
                  {step === 3 && "Fast geschafft! Wohin dürfen wir das Angebot senden?"}
                </h3>
                <p className="text-white/80 mt-2 text-sm">
                  Schritt {step} von 3
                </p>
                {/* Progress Bar */}
                <div className="w-full bg-white/20 h-1.5 mt-4 rounded-full overflow-hidden">
                  <div 
                    className="bg-white h-full transition-all duration-500 ease-in-out" 
                    style={{ width: `${(step / 3) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="p-8">
                {step === 1 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { id: "leaking", label: "Dach undicht / Reparatur", icon: AlertTriangle },
                      { id: "insulation", label: "Sanierung / Dämmung", icon: ThermometerSun },
                      { id: "new", label: "Neubau / Eindeckung", icon: Home },
                      { id: "windows", label: "Dachfenster", icon: Sparkles },
                      { id: "metal", label: "Spenglerarbeiten", icon: HardHat },
                      { id: "other", label: "Wartung / Sonstiges", icon: ClipboardCheck },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleProblemSelect(item.label)}
                        className="flex flex-col items-center justify-center p-6 border-2 border-gray-100 rounded-lg hover:border-primary hover:bg-primary/5 transition-all group text-center h-full"
                      >
                        <item.icon className="h-8 w-8 mb-3 text-gray-400 group-hover:text-primary transition-colors" />
                        <span className="font-medium text-secondary">{item.label}</span>
                      </button>
                    ))}
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    {[
                      "So schnell wie möglich (Notfall)",
                      "In den nächsten 1-3 Monaten",
                      "In den nächsten 6 Monaten",
                      "Ich bin noch in der Planungsphase"
                    ].map((timing) => (
                      <button
                        key={timing}
                        onClick={() => handleTimingSelect(timing)}
                        className="w-full text-left p-4 border-2 border-gray-100 rounded-lg hover:border-primary hover:bg-primary/5 transition-all font-medium text-secondary flex items-center justify-between group"
                      >
                        {timing}
                        <ArrowRight className="h-5 w-5 text-gray-300 group-hover:text-primary" />
                      </button>
                    ))}
                    <div className="mt-8 pt-4 border-t">
                       <Label className="mb-2 block text-secondary">Zusätzliche Informationen (Optional)</Label>
                       <Textarea 
                        placeholder="Beschreiben Sie Ihr Problem kurz..." 
                        className="bg-white border-gray-200"
                        onChange={(e) => setFormData({...formData, details: e.target.value})}
                       />
                       <Button 
                        onClick={() => setStep(3)} 
                        className="w-full mt-4 bg-primary text-white hover:bg-primary/90"
                      >
                        Weiter
                      </Button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <form onSubmit={handleFinalSubmit} className="space-y-6">
                    <div className="bg-green-50 p-4 rounded-md flex gap-3 items-start border border-green-100">
                      <ShieldCheck className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <p className="text-sm text-green-800">
                        <strong>Keine Sorge:</strong> Ihre Anfrage ist zu 100% unverbindlich und kostenlos. Wir nutzen Ihre Daten nur zur Kontaktaufnahme.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input 
                          id="name" 
                          placeholder="Ihr Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          data-testid="input-lead-name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefon</Label>
                        <Input 
                          id="phone" 
                          placeholder="Für Rückfragen"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
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
                        data-testid="input-lead-email"
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 text-lg rounded-sm mt-4"
                      disabled={isSubmitting}
                      data-testid="button-lead-submit"
                    >
                      {isSubmitting ? "Wird gesendet..." : "Jetzt kostenlose Beratung anfordern"}
                    </Button>
                  </form>
                )}
              </div>
              
              {step > 1 && (
                <div className="bg-gray-50 px-8 py-4 border-t flex justify-between items-center">
                  <button 
                    onClick={() => setStep(step - 1)}
                    className="text-sm text-muted-foreground hover:text-secondary underline"
                  >
                    Zurück
                  </button>
                </div>
              )}
            </DialogContent>
          </Dialog>
          
          <p className="mt-6 text-white/60 text-sm">
            Schließen Sie sich über 500 zufriedenen Kunden aus München an.
          </p>
        </div>
      </div>
    </section>
  );
}
