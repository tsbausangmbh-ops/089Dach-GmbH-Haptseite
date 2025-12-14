import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadFunnel from "@/components/LeadFunnel";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Clock, Shield, Phone, Wrench, CloudRain, Wind, Check, Quote } from "lucide-react";
import { Link } from "wouter";

export default function Reparaturservice() {
  const emergencies = [
    { icon: CloudRain, title: "Wasserschaden", desc: "Es tropft durch die Decke? Wir sichern sofort ab und verhindern Folgeschäden." },
    { icon: Wind, title: "Sturmschaden", desc: "Ziegel abgedeckt? Wir kommen zur Notsicherung, bevor es reinregnet." },
    { icon: AlertTriangle, title: "Undichte Stelle", desc: "Feuchte Flecken im Dachboden? Wir finden und beheben die Ursache." },
    { icon: Wrench, title: "Defektes Dachfenster", desc: "Fenster schließt nicht mehr richtig? Schnelle Reparatur oder Austausch." }
  ];

  const advantages = [
    { title: "24h Notfall-Nummer", desc: "Auch am Wochenende erreichbar bei akuten Schäden" },
    { title: "Schnelle Reaktion", desc: "In der Regel innerhalb von 24 Stunden vor Ort" },
    { title: "Faire Preise", desc: "Transparente Kosten, keine versteckten Aufschläge" },
    { title: "Versicherungshilfe", desc: "Wir dokumentieren den Schaden für Ihre Versicherung" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section - Notfall-Fokus */}
      <section className="pt-24 pb-16 bg-primary text-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="h-6 w-6" />
              <span className="font-bold tracking-wider uppercase text-sm">Dach-Notdienst München</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mt-4 mb-6">
              Dach-Notfall? Wir sind sofort da.
            </h1>
            
            <p className="text-xl leading-relaxed mb-8 text-white/90">
              Sturm, Hagel oder plötzlich ein Wasserfleck an der Decke – wenn Ihr Dach 
              Probleme macht, zählt jede Stunde. <strong>Rufen Sie uns an, wir helfen schnell.</strong>
            </p>

            <div className="bg-white text-secondary p-6 rounded-sm mb-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-lg font-bold mb-1">Notfall-Hotline (24/7)</p>
                  <p className="text-muted-foreground">Auch abends und am Wochenende erreichbar</p>
                </div>
                <a href="tel:08912621964" className="text-3xl font-bold text-primary hover:underline" data-testid="link-emergency-phone">
                  089 12621964
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kundengeschichte - Notfall */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-primary" data-testid="testimonial-keller">
              <Quote className="h-10 w-10 text-primary/30 mb-4" />
              <h3 className="text-xl font-bold text-secondary mb-4">
                „Sonntagabend, 22 Uhr, Sturm Niklas"
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                „Der Wind hatte zwei Ziegel abgedeckt. Es regnete rein, direkt ins Kinderzimmer. 
                Panik pur. Ich habe gegoogelt, 089Dach angerufen – und eine halbe Stunde später 
                klingelte Herr Maier an der Tür. Um 23 Uhr war alles provisorisch abgedichtet. 
                Am Montag kam das Team zur richtigen Reparatur."
              </p>
              <div className="flex items-center gap-4 mt-6">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                  SK
                </div>
                <div>
                  <p className="font-bold text-secondary">Sabine Keller</p>
                  <p className="text-sm text-muted-foreground">Reihenhaus in Pasing, Notreparatur 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notfälle, die wir lösen */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-heading font-bold text-secondary mb-4">
              Diese Notfälle lösen wir für Sie
            </h2>
            <p className="text-muted-foreground">
              Egal was passiert ist – wir sichern ab, reparieren und dokumentieren für Ihre Versicherung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {emergencies.map((emergency, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow" data-testid={`card-emergency-${index}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-sm text-primary shrink-0">
                      <emergency.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2">{emergency.title}</h3>
                      <p className="text-muted-foreground">{emergency.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Warum wir */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Warum Sie bei uns richtig sind
            </h2>
            <p className="text-gray-300">
              Ein Dach-Notfall ist stressig genug. Bei uns bekommen Sie schnelle Hilfe ohne böse Überraschungen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((adv, index) => (
              <div key={index} className="flex items-start gap-4" data-testid={`advantage-${index}`}>
                <div className="p-2 bg-primary rounded-sm shrink-0">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{adv.title}</h3>
                  <p className="text-gray-300">{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kleine Reparaturen */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-secondary mb-4">
              Kein Notfall, aber auch kein gutes Gefühl?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Nicht jeder Schaden ist akut – aber ignorieren sollten Sie ihn trotzdem nicht. 
              Kleine Risse, lose Ziegel oder verstopfte Dachrinnen werden mit der Zeit zu großen Problemen.
            </p>
            
            <div className="bg-gray-50 p-8 rounded-sm">
              <h3 className="text-xl font-bold text-secondary mb-4">Wir reparieren auch die kleinen Dinge:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Einzelne Ziegel austauschen",
                  "Dachrinnen reinigen & reparieren",
                  "Moos entfernen",
                  "Anschlüsse an Kamin & Wänden abdichten",
                  "Dachfenster-Dichtungen erneuern",
                  "Schneefanggitter montieren"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2" data-testid={`repair-item-${index}`}>
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Lieber einmal zu viel anrufen als einmal zu wenig – wir beraten Sie ehrlich.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-sm" data-testid="button-contact-repair">
                <a href="tel:08912621964">Reparatur anfragen</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Schnelle Hilfe ist nur einen Anruf entfernt
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Ob akuter Notfall oder kleine Reparatur – wir sind für Sie da. Rufen Sie an, 
            schildern Sie das Problem, und wir finden gemeinsam die beste Lösung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold rounded-sm" data-testid="button-cta-call">
              <a href="tel:08912621964">
                <Phone className="mr-2 h-5 w-5" />
                Jetzt anrufen
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary font-bold rounded-sm" data-testid="button-cta-contact">
              <Link href="/#kontakt">Nachricht schreiben</Link>
            </Button>
          </div>
        </div>
      </section>

      <LeadFunnel />
      <Contact />
      <Footer />
    </div>
  );
}
