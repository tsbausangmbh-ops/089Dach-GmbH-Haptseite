import { Button } from "@/components/ui/button";
import { ArrowRight, ClipboardCheck, HardHat, Home } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export default function LeadFunnel() {
  const [step, setStep] = useState(1);

  return (
    <section className="py-20 bg-primary text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            In 3 Schritten zum neuen Dach
          </h2>
          <p className="text-xl text-white/90">
            Wir machen es Ihnen einfach. Starten Sie jetzt Ihre Anfrage und erhalten Sie ein unverbindliches Angebot vom Meisterbetrieb.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-sm border border-white/20 relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-primary font-bold w-12 h-12 flex items-center justify-center rounded-full text-xl shadow-lg">
              1
            </div>
            <div className="mt-6 text-center">
              <ClipboardCheck className="w-12 h-12 mx-auto mb-4 text-white/80" />
              <h3 className="text-xl font-bold mb-2">Anfrage senden</h3>
              <p className="text-white/80">
                Nutzen Sie unser Formular für eine erste unverbindliche Kontaktaufnahme.
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-sm border border-white/20 relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-primary font-bold w-12 h-12 flex items-center justify-center rounded-full text-xl shadow-lg">
              2
            </div>
            <div className="mt-6 text-center">
              <HardHat className="w-12 h-12 mx-auto mb-4 text-white/80" />
              <h3 className="text-xl font-bold mb-2">Vor-Ort Termin</h3>
              <p className="text-white/80">
                Wir besichtigen Ihr Objekt, beraten Sie umfassend und nehmen Aufmaß.
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-sm border border-white/20 relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-primary font-bold w-12 h-12 flex items-center justify-center rounded-full text-xl shadow-lg">
              3
            </div>
            <div className="mt-6 text-center">
              <Home className="w-12 h-12 mx-auto mb-4 text-white/80" />
              <h3 className="text-xl font-bold mb-2">Umsetzung</h3>
              <p className="text-white/80">
                Nach Auftragserteilung führen wir alle Arbeiten pünktlich und sauber aus.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold text-xl px-12 py-8 rounded-sm shadow-xl transition-transform hover:scale-105">
                Jetzt Projekt anfragen
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] bg-white text-secondary">
              <DialogHeader>
                <DialogTitle className="text-2xl font-heading font-bold text-center">Projektanfrage starten</DialogTitle>
                <DialogDescription className="text-center">
                  Füllen Sie das Formular aus. Wir melden uns innerhalb von 24h bei Ihnen.
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="interest">Woran haben Sie Interesse?</Label>
                  <Select>
                    <SelectTrigger id="interest">
                      <SelectValue placeholder="Bitte wählen" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="dachsanierung">Dachsanierung</SelectItem>
                      <SelectItem value="neubau">Neubau</SelectItem>
                      <SelectItem value="reparatur">Reparatur</SelectItem>
                      <SelectItem value="spengler">Spenglerarbeiten</SelectItem>
                      <SelectItem value="fenster">Dachfenster</SelectItem>
                      <SelectItem value="anderes">Sonstiges</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Max Mustermann" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input id="phone" placeholder="089 12345678" />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">E-Mail</Label>
                  <Input id="email" type="email" placeholder="max@beispiel.de" />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="address">Objektadresse (Optional)</Label>
                  <Input id="address" placeholder="Musterstraße 1, 80331 München" />
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 text-lg rounded-sm">
                Kostenlos anfragen
              </Button>
            </DialogContent>
          </Dialog>
          
          <p className="mt-4 text-white/60 text-sm">
            Unverbindlich & kostenlos. 100% Datenschutz.
          </p>
        </div>
      </div>
    </section>
  );
}
