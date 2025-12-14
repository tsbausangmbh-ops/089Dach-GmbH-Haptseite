import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Euro, ArrowRight, Shield, FileText, Calculator, Phone, Users, Star, AlertTriangle, Heart, Lock, Clock } from "lucide-react";
import { Link } from "wouter";
import SEO, { BreadcrumbSchema } from "@/components/SEO";
import heroImage from "@assets/generated_images/roof_consultation_with_homeowner.png";

export default function RatgeberBeratung() {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Kostenlose Dachberatung München | Festpreis - 089Dach"
        description="Kostenlose Dach-Beratung vor Ort. Schriftliches Festpreis-Angebot ohne versteckte Kosten. Jetzt Termin vereinbaren!"
        canonical="https://089dach.de/ratgeber/beratung"
        keywords="dachdecker beratung münchen, festpreis dachdecker, kostenvoranschlag dach, transparente preise dach"
        aiSummary="089Dach GmbH: Kostenlose Dach-Beratung vor Ort in München. Schriftliches Festpreis-Angebot ohne versteckte Kosten. 100% Preissicherheit. Meisterbetrieb seit 1998. Telefon: 089 12621964."
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" }, 
        { name: "Tipps & Tricks", url: "/ratgeber" },
        { name: "Kostenlose Beratung + Festpreis", url: "/ratgeber/beratung" }
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
              <span className="text-gray-300">Kostenlose Beratung + Festpreis</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Euro className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              "Was wird das kosten?"<br/>
              <span className="text-primary">Bei uns wissen Sie es VORHER.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Keine bösen Überraschungen. Keine versteckten Kosten. 
              <strong className="text-white"> Der Preis, den wir Ihnen nennen, ist der Preis, den Sie zahlen.</strong>
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Und die Beratung? Komplett kostenlos. Ohne Haken.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-6 rounded-xl"
                asChild
                data-testid="button-hero-cta"
              >
                <Link href="/rueckruf">
                  <Phone className="mr-2 h-5 w-5" />
                  Kostenlose Beratung anfragen
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
              <Euro className="h-5 w-5" />
              <span>0€ für Beratung</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              <span>100% Festpreis-Garantie</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5" />
              <span>Meisterbetrieb seit 1998</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-12">
              <h2 className="text-2xl font-heading font-bold text-secondary mb-4 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-500" />
                Die Angst, die viele lähmt:
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sie wissen, dass am Dach etwas gemacht werden muss. Vielleicht sehen Sie schon erste Schäden. 
                Aber Sie zögern. <strong>Weil Sie Angst vor den Kosten haben.</strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                "Was, wenn es 50.000€ werden? Können wir uns das überhaupt leisten? 
                Werden wir über den Tisch gezogen?"
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                <strong className="text-red-600">Das Tragische:</strong> Diese Angst führt dazu, dass viele Menschen zu lange warten. 
                Aus einem kleinen Problem wird ein großes. Die Kosten steigen.
                <strong> Die Angst vor den Kosten macht die Sache am Ende teurer.</strong>
              </p>
            </div>

            <div className="bg-primary/10 border border-primary/30 rounded-lg p-8 mb-12 text-center">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-heading font-bold text-secondary mb-4">
                Wir verstehen das. Deshalb machen wir es anders.
              </h2>
              <p className="text-lg text-muted-foreground">
                Bei uns gibt es <strong>keine bösen Überraschungen</strong>. 
                Keine Rechnung, die plötzlich 30% höher ist als besprochen. 
                Keine "unvorhergesehenen Zusatzkosten".
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-12">
              <h2 className="text-2xl font-heading font-bold text-secondary mb-4">Unser Versprechen an Sie:</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0 mt-1" />
                  <div>
                    <strong className="text-secondary">Kostenlose Beratung vor Ort</strong>
                    <p className="text-muted-foreground">Wir kommen zu Ihnen, schauen uns alles an und beraten Sie – ohne dass Sie einen Cent bezahlen</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FileText className="h-6 w-6 text-green-600 shrink-0 mt-1" />
                  <div>
                    <strong className="text-secondary">Schriftliches Festpreis-Angebot</strong>
                    <p className="text-muted-foreground">Sie bekommen ein detailliertes Angebot mit allen Positionen – der Preis gilt</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Lock className="h-6 w-6 text-green-600 shrink-0 mt-1" />
                  <div>
                    <strong className="text-secondary">Keine versteckten Kosten – niemals</strong>
                    <p className="text-muted-foreground">Der Festpreis ist der Endpreis. Punkt. Das steht im Angebot und daran halten wir uns.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-green-600 shrink-0 mt-1" />
                  <div>
                    <strong className="text-secondary">Kein Zeitdruck, keine Verkaufstricks</strong>
                    <p className="text-muted-foreground">Nehmen Sie sich Zeit zum Überlegen. Vergleichen Sie. Entscheiden Sie in Ruhe.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-primary rounded-lg p-8 mb-12 shadow-lg">
              <h2 className="text-2xl font-heading font-bold text-secondary mb-6 text-center">
                <Calculator className="inline h-6 w-6 text-primary mr-2" />
                So funktioniert unser Festpreis:
              </h2>
              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-secondary">Sie kontaktieren uns (dauert 2 Minuten)</h3>
                    <p className="text-muted-foreground">Per Telefon oder Rückruf-Formular. Wir melden uns noch am selben Tag.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-secondary">Kostenloser Vor-Ort-Termin</h3>
                    <p className="text-muted-foreground">Wir schauen uns alles genau an, messen, fotografieren und besprechen mit Ihnen die Möglichkeiten.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-secondary">Schriftliches Festpreis-Angebot (innerhalb von 3 Werktagen)</h3>
                    <p className="text-muted-foreground">Detailliert aufgeschlüsselt. Sie verstehen jeden Posten. Der Preis ist verbindlich.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">4</div>
                  <div>
                    <h3 className="font-bold text-secondary">Sie entscheiden – ohne Druck</h3>
                    <p className="text-muted-foreground">Nehmen Sie sich Zeit. Holen Sie andere Angebote ein. Vergleichen Sie. Wir sind sicher, dass Sie zu uns zurückkommen.</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-6 rounded-xl"
                  asChild
                  data-testid="button-mid-cta"
                >
                  <Link href="/rueckruf">
                    <Phone className="mr-2 h-5 w-5" />
                    Jetzt kostenlosen Termin anfragen
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground mt-3">Kein Risiko. Keine Kosten. Keine Verpflichtung.</p>
              </div>
            </div>

            <div className="bg-secondary text-white rounded-lg p-8 mb-12">
              <h3 className="text-xl font-heading font-bold mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Familie Weber aus Schwabing – die Angst war unbegründet:
              </h3>
              <div className="bg-white/10 rounded-lg p-6 mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  <em>"Wir hatten Angst vor den Kosten. Jeder warnt einen ja vor teuren Handwerkern. 
                  Wir haben mit 50.000€ oder mehr gerechnet und deswegen 3 Jahre lang nichts gemacht."</em>
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  <em>"Dann kam 089Dach zur Beratung. Komplett kostenlos. Herr Blöckinger hat uns alles erklärt, 
                  was gemacht werden muss und was nicht. Ohne Verkaufsdruck."</em>
                </p>
                <p className="text-lg leading-relaxed">
                  <em>"Das Festpreis-Angebot: <strong className="text-primary">28.000€</strong>. 
                  Mit der Förderung, die sie uns beantragt haben: <strong className="text-primary">22.000€</strong>. 
                  Weniger als die Hälfte dessen, was wir befürchtet hatten. 
                  Und am Ende kam keine Nachforderung. Der Festpreis war der Endpreis."</em>
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  KW
                </div>
                <div>
                  <p className="font-bold">Familie Weber</p>
                  <p className="text-sm text-gray-400">Schwabing, München • Dachsanierung 2023</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white border-2 border-primary rounded-lg p-6 text-center">
                <p className="text-5xl font-bold text-primary mb-2">0€</p>
                <p className="font-bold text-secondary">Beratung vor Ort</p>
                <p className="text-sm text-muted-foreground mt-2">Komplett kostenlos und unverbindlich</p>
              </div>
              <div className="bg-white border-2 border-primary rounded-lg p-6 text-center">
                <p className="text-5xl font-bold text-primary mb-2">100%</p>
                <p className="font-bold text-secondary">Preissicherheit</p>
                <p className="text-sm text-muted-foreground mt-2">Festpreis = Endpreis, garantiert</p>
              </div>
              <div className="bg-white border-2 border-primary rounded-lg p-6 text-center">
                <p className="text-5xl font-bold text-primary mb-2">40%</p>
                <p className="font-bold text-secondary">Förderung möglich</p>
                <p className="text-sm text-muted-foreground mt-2">Wir kümmern uns um die Anträge</p>
              </div>
            </div>

            <div className="bg-blue-50 border-2 border-blue-400 rounded-lg p-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 text-white p-3 rounded-lg shrink-0">
                  <Euro className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-blue-900 mb-4">
                    Hinweis: BAFA-Förderung & Förderantragstellung
                  </h3>
                  <p className="text-lg text-blue-800 mb-4">
                    <strong>Bis zu 40% staatliche Förderung</strong> für Ihre Dachsanierung – und wir helfen Ihnen dabei, diese auch zu bekommen!
                  </p>
                  <div className="bg-white/70 rounded-lg p-4 mb-4">
                    <h4 className="font-bold text-blue-900 mb-3">So unterstützen wir Sie bei der Förderung:</h4>
                    <ul className="space-y-2 text-blue-800">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                        <span><strong>Fördercheck:</strong> Wir prüfen, welche Förderprogramme für Ihr Projekt infrage kommen (BAFA, KfW, regionale Förderungen)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                        <span><strong>Antragsstellung:</strong> Wir helfen Ihnen beim kompletten Förderantrag – von der Dokumentation bis zur Einreichung</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                        <span><strong>Energieberater-Netzwerk:</strong> Falls ein zertifizierter Energieberater benötigt wird, vermitteln wir Ihnen einen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                        <span><strong>Förderfähige Ausführung:</strong> Wir führen die Arbeiten so aus, dass alle Förderkriterien erfüllt werden</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-blue-700 text-sm">
                    <strong>Wichtig:</strong> Der Förderantrag muss VOR Beginn der Arbeiten gestellt werden. Deshalb ist es wichtig, früh mit uns zu sprechen – wir beraten Sie, welche Schritte in welcher Reihenfolge nötig sind.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-stone-100 rounded-lg p-8 mb-12">
              <h3 className="text-xl font-heading font-bold text-secondary mb-4 text-center">
                Warum kostenlos? Was ist der Haken?
              </h3>
              <p className="text-lg text-muted-foreground text-center mb-4">
                Es gibt keinen Haken. Wir machen das, weil wir wissen: 
                <strong> Wer uns kennenlernt, wird unser Kunde.</strong>
              </p>
              <p className="text-muted-foreground text-center">
                Unsere Arbeit spricht für sich. Unsere Ehrlichkeit überzeugt. 
                Die kostenlose Beratung ist unsere Möglichkeit, Ihnen zu zeigen, wer wir sind.
              </p>
            </div>

            <div className="bg-secondary text-white rounded-lg p-8 mb-12 text-center">
              <h2 className="text-3xl font-heading font-bold mb-4">
                Machen Sie den ersten Schritt – es kostet Sie nichts.
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Außer vielleicht die Angst vor den Kosten. Die nehmen wir Ihnen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-bold px-10 py-6 rounded-xl text-lg"
                  asChild
                  data-testid="button-bottom-cta"
                >
                  <Link href="/rueckruf">
                    <Phone className="mr-2 h-5 w-5" />
                    Jetzt kostenlos beraten lassen
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Keine Wartezeit • Termin oft schon diese Woche
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

      <Contact />
      <Footer />
    </div>
  );
}
