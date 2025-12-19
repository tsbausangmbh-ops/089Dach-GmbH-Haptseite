import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Droplets, ArrowRight, Search, Shield, Clock, Phone, AlertTriangle, TrendingUp, Users, Star, XCircle } from "lucide-react";
import { Link } from "wouter";
import SEO, { BreadcrumbSchema } from "@/components/SEO";
import RelatedServices from "@/components/RelatedServices";
import heroImage from "@assets/generated_images/roof_leak_detection_scene.png";
import { KeywordLink } from "@/components/KeywordLink";

export default function RatgeberLeckortung() {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Dach undicht München | Leck finden & Soforthilfe 24h"
        description="Wasserfleck an der Decke? Wir finden das Dachleck mit Thermografie ✓ Soforthilfe ✓ Festpreis ✓ 10 Jahre Garantie. Jetzt anrufen: 089 12621964"
        canonical="https://089dach.de/ratgeber/leckortung"
        keywords="dach undicht was tun münchen, wasserfleck decke woher, dachleck finden thermografie, wasserschaden dach reparieren kosten, leckortung dach preis, schimmel durch dachleck, wasserfleck an decke trocknen, dachschaden erkennen anzeichen, lecksuche flachdach kosten, feuchtemessung dach durchführen, infrarotkamera leckortung, verstecktes leck im dach, kondenswasser oder leck unterscheiden, wasserschaden dach versicherung melden"
        aiSummary="089Dach GmbH: Leckortung mit Thermografie-Kamera in München. Wir finden Dachlecks präzise und reparieren sie dauerhaft. 10 Jahre Garantie. 100+ erfolgreiche Leckortungen. Telefon: 089 12621964."
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" }, 
        { name: "Tipps & Tricks", url: "/ratgeber" },
        { name: "Leckortung & Reparatur", url: "/ratgeber/leckortung" }
      ]} />
      <Navbar />
      
      <section className="relative min-h-[500px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/60"></div>
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10 py-16">
          <div className="max-w-3xl text-white">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/ratgeber">
                <span className="text-primary hover:underline cursor-pointer">Tipps & Tricks</span>
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-300">Leckortung & Reparatur</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Droplets className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Dieser Wasserfleck wird nicht von selbst verschwinden.<br/>
              <span className="text-primary">Er wird größer.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Jeder Tag, den Sie warten, ist ein Tag, an dem <strong className="text-white">Schimmel wächst</strong>, 
              <strong className="text-white">Holz fault</strong> und die <strong className="text-white">Reparaturkosten steigen</strong>.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Wir finden das Leck – auch wenn drei andere Handwerker es nicht geschafft haben.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-6 rounded-xl"
                asChild
                data-testid="button-hero-cta"
              >
                <Link href="/beratung">
                  <Phone className="mr-2 h-5 w-5" />
                  Jetzt Leckortung anfragen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-primary text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span>10 Jahre Garantie</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>100+ erfolgreiche Leckortungen</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5" />
              <span>Thermografie-Technik</span>
            </div>
          </div>
        </div>
      </section>
      <BackButton />

      <section className="py-2 md:py-4 bg-stone-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-12">
              <h2 className="text-2xl font-heading font-bold text-secondary mb-4 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-500" />
                Das kennen Sie wahrscheinlich:
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Da ist dieser Fleck an der Decke. Am Anfang klein, kaum sichtbar. 
                "Ach, das beobachte ich mal", denken Sie. Dann regnet es wieder. 
                <strong> Der Fleck wird größer.</strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Sie rufen einen Handwerker. Er repariert irgendwas am Dach. 200€ weg. 
                Nächster Regen: <strong>Der Fleck kommt wieder.</strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Das Problem: <strong className="text-red-600">Wasser läuft oft meterweit, bevor es sichtbar wird.</strong> 
                Das Leck kann 3 Meter entfernt vom Fleck sein. Wer nur am Fleck repariert, repariert am falschen Ort.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-12">
              <div className="flex items-start gap-4">
                <TrendingUp className="h-8 w-8 text-amber-600 shrink-0" />
                <div>
                  <h3 className="text-xl font-heading font-bold text-secondary mb-2">
                    Was passiert, wenn Sie noch länger warten:
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                      <span><strong>Schimmelbildung</strong> – gefährlich für Ihre Gesundheit und teuer zu entfernen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                      <span><strong>Holzfäule</strong> – kann tragende Balken beschädigen und Statikprobleme verursachen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                      <span><strong>Dämmung zerstört</strong> – nasse Dämmung isoliert nicht mehr und muss komplett getauscht werden</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                      <span><strong>Kosten vervielfachen sich</strong> – was heute 500€ kostet, kann in 6 Monaten 5.000€ kosten</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-primary rounded-lg p-8 mb-12 shadow-lg text-center">
              <h2 className="text-2xl font-heading font-bold text-secondary mb-4">
                Schluss mit Rätselraten. Schluss mit Geld verbrennen.
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Mit unserer Thermografie-Technik finden wir das Leck – <strong>auf den Zentimeter genau.</strong> 
                Kein Raten. Kein "Mal schauen". Garantiert.
              </p>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-6 rounded-xl"
                asChild
                data-testid="button-mid-cta-1"
              >
                <Link href="/beratung">
                  <Phone className="mr-2 h-5 w-5" />
                  Jetzt Leck finden lassen
                </Link>
              </Button>
              <p className="text-sm text-muted-foreground mt-3">Termin oft schon in 24-48 Stunden</p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-12">
              <h2 className="text-2xl font-heading font-bold text-secondary mb-4">So funktioniert unsere Leckortung:</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Search className="h-6 w-6 text-green-600 shrink-0 mt-1" />
                  <div>
                    <strong className="text-secondary">Thermografie-Kamera</strong>
                    <p className="text-muted-foreground">Zeigt uns exakt, wo Feuchtigkeit ist – auch hinter Wänden und unter der Dachhaut</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0 mt-1" />
                  <div>
                    <strong className="text-secondary">Feuchtemessung</strong>
                    <p className="text-muted-foreground">Wir messen den genauen Feuchtegrad und verfolgen den Weg des Wassers</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-green-600 shrink-0 mt-1" />
                  <div>
                    <strong className="text-secondary">Ursachenbeseitigung, nicht Symptombehandlung</strong>
                    <p className="text-muted-foreground">Wir reparieren die echte Ursache – nicht nur den sichtbaren Schaden</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-green-600 shrink-0 mt-1" />
                  <div>
                    <strong className="text-secondary">10 Jahre Garantie auf unsere Arbeit</strong>
                    <p className="text-muted-foreground">Wenn das Leck wiederkommt, kommen wir kostenlos wieder</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-secondary text-white rounded-lg p-8 mb-12">
              <h3 className="text-xl font-heading font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Herr Schmitt aus Moosach – nach 3 gescheiterten Versuchen:
              </h3>
              <div className="bg-white/10 rounded-lg p-6 mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  <em>"Ich hatte schon 3 Handwerker da. Jeder hat etwas anderes repariert. Jeder hat Geld gekostet. 
                  Der Fleck kam immer wieder. Ich war kurz davor aufzugeben."</em>
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  <em>"Dann kam 089Dach mit der Wärmekamera. In 20 Minuten hatten sie das Leck gefunden – 
                  <strong className="text-primary">2 Meter entfernt vom Fleck!</strong> Die anderen hatten alle am falschen Ort repariert."</em>
                </p>
                <p className="text-lg leading-relaxed">
                  <em>"Jetzt, 18 Monate später: <strong className="text-primary">immer noch trocken.</strong> 
                  Endlich Ruhe."</em>
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  MS
                </div>
                <div>
                  <p className="font-bold">Martin Schmitt</p>
                  <p className="text-sm text-gray-400">Moosach, München • <KeywordLink keyword="Leckortung" className="text-gray-400 hover:text-primary" /> 2023</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-stone-200 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-heading font-bold text-secondary mb-6">
                <Clock className="inline h-6 w-6 text-primary mr-2" />
                So läuft's ab – schnell und unkompliziert:
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-secondary">Sie rufen an oder fordern einen Rückruf an</h3>
                    <p className="text-muted-foreground">Wir melden uns noch am selben Tag. Schildern Sie kurz das Problem.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-secondary">Vor-Ort-Termin mit Technik (oft in 24-48h)</h3>
                    <p className="text-muted-foreground">Wir kommen mit Thermografie-Kamera und Feuchtemessgeräten.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-secondary">Leckortung und Festpreis-Angebot</h3>
                    <p className="text-muted-foreground">Sie erfahren, wo das Leck ist und was die Reparatur kostet – bevor wir anfangen.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">4</div>
                  <div>
                    <h3 className="font-bold text-secondary">Dauerhafte Reparatur mit 10 Jahren Garantie</h3>
                    <p className="text-muted-foreground">Wir beheben die Ursache – nicht nur das Symptom. Und garantieren dafür.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary text-white rounded-lg p-8 mb-12 text-center">
              <h2 className="text-3xl font-heading font-bold mb-4">
                Lassen Sie nicht zu, dass aus einem kleinen Problem ein großes wird.
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Je früher wir das Leck finden, desto günstiger die Reparatur.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-bold px-10 py-6 rounded-xl text-lg"
                  asChild
                  data-testid="button-bottom-cta"
                >
                  <Link href="/beratung">
                    <Phone className="mr-2 h-5 w-5" />
                    Jetzt Leckortung anfragen
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Schnelle Termine • Professionelle Technik • 10 Jahre Garantie
              </p>
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                variant="outline"
                className="font-bold px-8 py-6 rounded-xl"
                asChild
              >
                <Link href="/ratgeber">
                  Zurück zu Tipps & Tricks
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

          </div>
        </div>
      </section>

      <RelatedServices 
        currentPage="ratgeber" 
        relatedIds={["reparaturservice", "wartung", "bedachungen", "faq"]}
      />
      <Contact />
      <Footer />
    </div>
  );
}
