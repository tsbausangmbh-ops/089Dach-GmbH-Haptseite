import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ShieldCheck, HardHat, Sparkles, AlertTriangle, ThermometerSun, Home, ClipboardCheck, Phone, Users, Clock } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Link } from "wouter";

interface LeadFunnelProps {
  externalOpen?: boolean;
  onExternalOpenChange?: (open: boolean) => void;
}

export default function LeadFunnel({ externalOpen, onExternalOpenChange }: LeadFunnelProps) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dsgvoAccepted, setDsgvoAccepted] = useState(false);
  const [formData, setFormData] = useState({
    problem: "",
    timing: "",
    details: "",
    name: "",
    phone: "",
    email: ""
  });

  useEffect(() => {
    if (externalOpen !== undefined) {
      setOpen(externalOpen);
    }
  }, [externalOpen]);

  const handleOpenChange = (val: boolean) => {
    setOpen(val);
    onExternalOpenChange?.(val);
    if (!val) setTimeout(resetForm, 300);
  };

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
        toast.success("Geschafft! Wir melden uns bei Ihnen.", {
          description: "Innerhalb von 4 Stunden erhalten Sie eine Rückmeldung von uns."
        });
        handleOpenChange(false);
      } else {
        toast.error("Etwas ist schiefgelaufen", {
          description: "Bitte versuchen Sie es erneut oder schreiben Sie uns per E-Mail."
        });
      }
    } catch (error) {
      console.error("Error submitting lead:", error);
      toast.error("Verbindungsfehler", {
        description: "Bitte versuchen Sie es erneut oder schreiben Sie uns: info@089dach.de"
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

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* NLP: Problem-Agitation */}
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
            Sie wissen, dass etwas getan werden muss.<br/>
            <span className="text-white/90">Wir zeigen Ihnen wie.</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Ein Dachproblem verschwindet nicht von allein. Je länger Sie warten, desto teurer wird es.
            <strong className="text-white"> Holen Sie sich jetzt Klarheit – kostenlos und unverbindlich.</strong>
          </p>
          
          {/* Trust Badges mit Social Proof */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 text-sm md:text-base font-medium">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <Users className="h-5 w-5 text-green-400" />
              <span>62+ Kunden vertrauen uns</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <ShieldCheck className="h-5 w-5 text-green-400" />
              <span>Festpreis-Garantie</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <Clock className="h-5 w-5 text-green-400" />
              <span>Antwort in 4h</span>
            </div>
          </div>
        </div>

        {/* 3-Schritte-Prozess */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 relative group hover:bg-white/20 transition-all">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-primary font-bold w-12 h-12 flex items-center justify-center rounded-full text-xl shadow-lg group-hover:scale-110 transition-transform">
              1
            </div>
            <div className="mt-6 text-center">
              <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-xl font-bold mb-2">Sie schildern Ihr Problem</h3>
              <p className="text-white/80">
                Egal ob undicht, kalt oder unsicher – wir hören zu und verstehen sofort, was zu tun ist.
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 relative group hover:bg-white/20 transition-all">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-primary font-bold w-12 h-12 flex items-center justify-center rounded-full text-xl shadow-lg group-hover:scale-110 transition-transform">
              2
            </div>
            <div className="mt-6 text-center">
              <Sparkles className="w-12 h-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-xl font-bold mb-2">Wir entwickeln Ihre Lösung</h3>
              <p className="text-white/80">
                Transparent, fair und auf Ihr Budget abgestimmt. Ohne versteckte Kosten – garantiert.
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 relative group hover:bg-white/20 transition-all">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-primary font-bold w-12 h-12 flex items-center justify-center rounded-full text-xl shadow-lg group-hover:scale-110 transition-transform">
              3
            </div>
            <div className="mt-6 text-center">
              <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-green-400" />
              <h3 className="text-xl font-bold mb-2">Sie genießen Sicherheit</h3>
              <p className="text-white/80">
                Endlich Ruhe. Kein Tropfen, keine Zugluft, keine Sorgen mehr. Mit Meister-Garantie.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100 font-bold text-xl px-12 py-8 rounded-xl shadow-xl transition-transform hover:scale-105"
                data-testid="button-funnel-open"
              >
                Ja, ich will mein Problem lösen!
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] bg-white text-secondary p-0 overflow-hidden gap-0">
              <div className="bg-primary p-6 text-white text-center">
                <h3 className="text-2xl font-heading font-bold">
                  {step === 1 && "Was bereitet Ihnen am meisten Sorgen?"}
                  {step === 2 && "Wie dringend ist es für Sie?"}
                  {step === 3 && "Wohin dürfen wir Ihre persönliche Lösung senden?"}
                </h3>
                <p className="text-white/80 mt-2 text-sm">
                  Schritt {step} von 3 – Noch {3 - step + 1} {3 - step + 1 === 1 ? "Schritt" : "Schritte"}
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
                      { id: "leaking", label: "Es tropft oder ist feucht", icon: AlertTriangle, subtext: "Undichtes Dach" },
                      { id: "insulation", label: "Es ist zu kalt/heiß", icon: ThermometerSun, subtext: "Dämmung fehlt" },
                      { id: "new", label: "Dach sieht alt aus", icon: Home, subtext: "Neueindeckung nötig" },
                      { id: "windows", label: "Zu wenig Licht oben", icon: Sparkles, subtext: "Dachfenster" },
                      { id: "metal", label: "Rinne undicht/rostig", icon: HardHat, subtext: "Spenglerarbeit" },
                      { id: "other", label: "Etwas anderes", icon: ClipboardCheck, subtext: "Beratung" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleProblemSelect(item.label)}
                        className="flex flex-col items-center justify-center p-6 border-2 border-gray-100 rounded-lg hover:border-primary hover:bg-primary/5 transition-all group text-center h-full"
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
                    {[
                      { text: "Dringend – bitte schnell!", emoji: "🚨", highlight: true },
                      { text: "In den nächsten 1-3 Monaten", emoji: "📅", highlight: false },
                      { text: "Dieses Jahr irgendwann", emoji: "🗓️", highlight: false },
                      { text: "Ich informiere mich erstmal", emoji: "🤔", highlight: false }
                    ].map((timing) => (
                      <button
                        key={timing.text}
                        onClick={() => handleTimingSelect(timing.text)}
                        className={`w-full text-left p-4 border-2 rounded-lg hover:border-primary hover:bg-primary/5 transition-all font-medium text-secondary flex items-center justify-between group ${timing.highlight ? 'border-primary bg-primary/5' : 'border-gray-100'}`}
                        data-testid={`button-timing-${timing.text.slice(0, 10)}`}
                      >
                        <span>{timing.emoji} {timing.text}</span>
                        <ArrowRight className="h-5 w-5 text-gray-300 group-hover:text-primary" />
                      </button>
                    ))}
                    <div className="mt-8 pt-4 border-t">
                      <Label className="mb-2 block text-secondary">Möchten Sie uns noch etwas mitteilen?</Label>
                      <Textarea 
                        placeholder="Z.B. 'Beim letzten Sturm hat es reingeregnet...'" 
                        className="bg-white border-gray-200"
                        onChange={(e) => setFormData({...formData, details: e.target.value})}
                        data-testid="textarea-details"
                      />
                      <Button 
                        onClick={() => setStep(3)} 
                        className="w-full mt-4 bg-primary text-white hover:bg-primary/90"
                        data-testid="button-continue-step2"
                      >
                        Weiter zum letzten Schritt
                      </Button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <form onSubmit={handleFinalSubmit} className="space-y-6">
                    {/* Risiko-Umkehr Box */}
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
                          data-testid="input-lead-name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefon (für Rückfragen)</Label>
                        <Input 
                          id="phone" 
                          placeholder="089 ..."
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

                    <div className="flex items-start space-x-3">
                      <Checkbox 
                        id="dsgvo-lead" 
                        checked={dsgvoAccepted}
                        onCheckedChange={(checked) => setDsgvoAccepted(checked === true)}
                        data-testid="checkbox-lead-dsgvo"
                      />
                      <label htmlFor="dsgvo-lead" className="text-sm text-muted-foreground leading-tight cursor-pointer">
                        Ich habe die <Link href="/datenschutz" className="text-primary underline hover:no-underline">Datenschutzerklärung</Link> gelesen und akzeptiere diese. *
                      </label>
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 text-lg rounded-xl mt-4"
                      disabled={isSubmitting || !dsgvoAccepted}
                      data-testid="button-lead-submit"
                    >
                      {isSubmitting ? "Wird gesendet..." : "Ja, ich will mein kostenloses Angebot!"}
                    </Button>

                    {/* Urgency/Social Proof */}
                    <p className="text-center text-xs text-muted-foreground">
                      <CheckCircle2 className="inline h-3 w-3 text-green-500 mr-1" />
                      Diese Woche bereits 7 Anfragen aus München bearbeitet
                    </p>
                  </form>
                )}
              </div>
              
              {step > 1 && (
                <div className="bg-gray-50 px-8 py-4 border-t flex justify-between items-center">
                  <button 
                    onClick={() => setStep(step - 1)}
                    className="text-sm text-muted-foreground hover:text-secondary underline"
                    data-testid="button-back"
                  >
                    ← Zurück
                  </button>
                  <a href="mailto:info@089dach.de" className="text-sm text-primary font-medium flex items-center gap-1">
                    Lieber per E-Mail?
                  </a>
                </div>
              )}
            </DialogContent>
          </Dialog>
          
          <p className="mt-6 text-white/60 text-sm">
            Über 62 Münchner Familien vertrauen uns bereits ihr Dach an.
          </p>
        </div>
      </div>
    </section>
  );
}
