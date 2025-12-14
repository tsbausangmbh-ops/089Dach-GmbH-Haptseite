import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { CheckCircle2, Award, Users, Heart, Quote, Clock, Handshake, Phone, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import portraitGF from "@assets/generated_images/german_businessman_portrait_gf.png";
import portraitMeister from "@assets/generated_images/german_master_roofer_portrait.png";
import heroImage from "@assets/generated_images/roofing_team_partnership_handshake.png";
import SEO, { BreadcrumbSchema, AboutPageSchema } from "@/components/SEO";

export default function UeberUns() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title="Über uns | Dachdecker-Meisterbetrieb München - 089Dach"
        description="Familiengeführter Meisterbetrieb seit 1998 in München-Obermenzing. 100+ zufriedene Kunden, persönliche Beratung. Lernen Sie uns kennen!"
        canonical="https://089dach.de/ueber-uns"
        keywords="dachdecker team münchen, meisterbetrieb 1998 familiengeführt tradition erfahrung, dachdeckermeister spenglermeister handwerksrolle innung, team obermenzing pasing laim schwabing sendling bogenhausen, team gräfelfing planegg germering starnberg dachau, über uns wer wir sind qualifikation zertifizierung"
        aiSummary="089Dach GmbH: Dachdecker- und Spengler-Meisterbetrieb in München-Obermenzing. Gegründet 1998, über 100 zufriedene Kunden. Familiengeführt mit 60+ Jahren Erfahrung. Thuillestr. 20, 81247 München. Telefon: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Über uns", url: "/ueber-uns" }]} />
      <AboutPageSchema />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-10 pb-12 relative overflow-hidden min-h-[50vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="089Dach GmbH Team München - Dachdecker- und Spenglermeister Handschlag Partnerschaft"
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/70"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-2xl text-white">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Wer wir sind</span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mt-4 mb-6">
              Wir machen das aus Leidenschaft
            </h1>
            
            {/* Emotionale Problem-Agitation */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border-l-4 border-primary mb-8">
              <p className="text-lg text-white font-medium mb-3">
                Warum tun wir, was wir tun?
              </p>
              <p className="text-gray-200 leading-relaxed mb-4">
                Weil wir es satt hatten. Satt, dass Hausbesitzer Angst vor Handwerkern haben. 
                Satt, dass Menschen mit überhöhten Rechnungen und schlechter Arbeit allein gelassen werden. 
                <strong className="text-white"> Satt, dass „Dachdecker" für viele ein Schimpfwort geworden ist.</strong>
              </p>
              <p className="text-gray-200 leading-relaxed">
                Wir wollten beweisen: <strong className="text-white">Es geht auch anders.</strong> Mit Ehrlichkeit. 
                Mit Respekt. Mit Handwerkskunst, auf die man stolz sein kann.
              </p>
            </div>
            
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Unser Antrieb? <strong className="text-white">Ihre Sorgen zu lösen.</strong> Ihr Zuhause zu schützen. 
              Ihnen das Gefühl zu geben, dass Sie endlich jemandem vertrauen können.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-xl" data-testid="button-hero-call">
                <a href="/beratung">
                  <Phone className="mr-2 h-5 w-5" />
                  Rückruf anfordern
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-secondary font-bold rounded-xl" data-testid="button-hero-story">
                <a href="#geschichte">Unsere Geschichte lesen</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trust Badges */}
      <section className="py-8 border-b border-border bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span><strong className="text-secondary">100+</strong> glückliche Kunden</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              <span><strong className="text-secondary">Meister für Dach- und Spenglerei</strong> seit 1998</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              <span><strong className="text-secondary">100%</strong> Herzblut</span>
            </div>
          </div>
        </div>
      </section>

      {/* Unsere Mission */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <Sparkles className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Unsere Mission: Ihre Sorgen beenden
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Wir wissen, wie sich das anfühlt: Die Angst vor dem nächsten Sturm. 
              Die schlaflosen Nächte, wenn es regnet. Die Unsicherheit, ob das Angebot fair ist.
            </p>
            <p className="text-xl text-white font-medium leading-relaxed">
              <strong>Genau diese Leiden wollen wir Ihnen nehmen.</strong> Nicht mit leeren Versprechen – 
              sondern mit ehrlicher Arbeit, fairen Preisen und der Gewissheit, dass Ihr Zuhause 
              in den besten Händen ist.
            </p>
          </div>
        </div>
      </section>

      <section id="geschichte" className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Unsere Geschichte</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mt-2 mb-6">
              Aus Frust wurde Leidenschaft
            </h2>
            <div className="text-lg text-muted-foreground leading-relaxed space-y-4 text-left">
              <p>
                Es war ein stürmischer Herbsttag 2018. Ein Hausbesitzer aus Pasing stand vor den Trümmern 
                seines Daches – verzweifelt, überfordert, allein. Drei Dachdecker hatten ihm Angebote gemacht. 
                Keines konnte er verstehen. Keinem konnte er vertrauen.
              </p>
              <p>
                <strong className="text-secondary">Das war der Moment, in dem alles begann.</strong>
              </p>
              <p>
                Der erfahrene Meister sah, was er schon hundertmal gesehen hatte: Ein Mensch in Not, 
                der Angst hat, über den Tisch gezogen zu werden. Der kaufmännische Experte erkannte: 
                <em>„Gutes Handwerk allein reicht nicht. Menschen brauchen jemanden, der ihnen zuhört. 
                Der erklärt statt verkauft. Der Probleme löst statt neue schafft."</em>
              </p>
              <p>
                An diesem Tag beschlossen sie: <strong className="text-secondary">Wir machen es anders.</strong> 
                Nicht besser reden – besser handeln. Nicht mehr versprechen – mehr halten.
              </p>
              <p className="text-xl font-medium text-secondary text-center pt-4">
                So entstand 089Dach: Ein Unternehmen, das <strong>Ihre Probleme löst</strong> – 
                nicht neue schafft.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="bg-gray-50 rounded-xl p-8 border border-border">
              <div className="flex flex-col items-center text-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-primary/20">
                  <img 
                    src={portraitMeister} 
                    alt="Dachdeckermeister und Spenglermeister München - 089Dach GmbH seit 1998" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    data-testid="img-portrait-meister"
                  />
                </div>
                <h3 className="text-2xl font-heading font-bold text-secondary mb-2">Der Meister</h3>
                <p className="text-primary font-medium mb-4">Dachdecker- & Spenglermeister</p>
                <div className="text-muted-foreground leading-relaxed space-y-3">
                  <p>
                    Schon als Teenager half er seinem Onkel auf dem Dach. Mit 16 begann die Lehre, mit 23 der 
                    Meisterbrief – und seither hat er über <strong className="text-secondary">100 Dächer</strong> in 
                    München und Umgebung saniert, repariert oder neu gedeckt.
                  </p>
                  <p>
                    Was ihn antreibt? <em>"Wenn eine Familie mir ihr Haus anvertraut, dann ist das eine Verantwortung. 
                    Ich denke bei jedem Nagel daran, dass unter diesem Dach Kinder schlafen."</em>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-border">
              <div className="flex flex-col items-center text-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-primary/20">
                  <img 
                    src={portraitGF} 
                    alt="Geschäftsführer 089Dach GmbH München - Kaufmännische Leitung" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    data-testid="img-portrait-gf"
                  />
                </div>
                <h3 className="text-2xl font-heading font-bold text-secondary mb-2">Der Geschäftsführer</h3>
                <p className="text-primary font-medium mb-4">Kaufmännische Leitung</p>
                <div className="text-muted-foreground leading-relaxed space-y-3">
                  <p>
                    Nach 30 Jahren in der Unternehmensführung weiß er: <strong className="text-secondary">Gutes Handwerk 
                    verdient gute Betreuung.</strong> Vom ersten Anruf bis zur letzten Rechnung sorgt er dafür, dass 
                    Sie sich verstanden und gut aufgehoben fühlen.
                  </p>
                  <p>
                    Sein Versprechen: <em>"Bei uns gibt es keine versteckten Kosten, keine Überraschungen. 
                    Was wir anbieten, das halten wir – pünktlich und zum vereinbarten Preis."</em>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white p-6 rounded-xl border border-border text-center">
              <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
              <span className="text-4xl font-heading font-bold text-primary">60+</span>
              <p className="text-muted-foreground mt-2">Jahre gemeinsame Erfahrung</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-border text-center">
              <Award className="h-8 w-8 text-primary mx-auto mb-3" />
              <span className="text-4xl font-heading font-bold text-primary">100+</span>
              <p className="text-muted-foreground mt-2">Zufriedene Kunden in München</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-border text-center">
              <Handshake className="h-8 w-8 text-primary mx-auto mb-3" />
              <span className="text-4xl font-heading font-bold text-primary">100%</span>
              <p className="text-muted-foreground mt-2">Fokus auf Kundenzufriedenheit</p>
            </div>
          </div>

          <div className="bg-secondary/5 rounded-xl p-8 md:p-12 border border-secondary/10 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <Quote className="h-12 w-12 text-primary flex-shrink-0" />
              <div>
                <p className="text-lg text-secondary leading-relaxed italic mb-4">
                  "Nach dem Sturmschaden waren wir verzweifelt. Drei andere Firmen gaben uns Angebote, die wir nicht 
                  verstanden haben. Dann kam 089Dach. Der Geschäftsführer nahm sich eine Stunde Zeit, alles zu erklären. 
                  Der Meister zeigte uns genau, was gemacht werden muss. Keine Überraschungen, keine Nachforderungen. 
                  Heute empfehlen wir 089Dach jedem in unserer Nachbarschaft weiter."
                </p>
                <p className="font-bold text-secondary">Familie Bergmann, München-Pasing</p>
                <p className="text-muted-foreground text-sm">Komplettsanierung nach Sturmschaden, 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geschichten aus unserem Alltag */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Aus unserem Alltag</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mt-2 mb-6">
              Geschichten, die zeigen, wer wir sind
            </h2>
            <p className="text-lg text-muted-foreground">
              Jedes Dach hat seine Geschichte. Hier sind einige, die uns besonders am Herzen liegen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Geschichte 1: Notfall */}
            <div className="bg-stone-50 rounded-xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-secondary">Der Sturm um Mitternacht</h3>
                  <p className="text-sm text-muted-foreground">Notfall-Einsatz, Dezember 2023</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Es war kurz vor Weihnachten, als der Sturm über München fegte. Familie Huber aus Sendling rief uns um 22:30 Uhr an – 
                der Wind hatte Ziegel vom Dach gerissen und Wasser tropfte bereits ins Kinderzimmer.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Unser Meister war um 23:15 Uhr vor Ort. Mit Planen und provisorischen Befestigungen sicherten wir das Dach, 
                damit die Familie die Nacht trocken überstehen konnte. Am nächsten Tag dann die komplette Reparatur.
              </p>
              <p className="text-secondary font-medium italic border-l-2 border-primary pl-4">
                "Die haben uns in der schlimmsten Nacht nicht allein gelassen. Das vergessen wir nie." – Herr Huber
              </p>
            </div>

            {/* Geschichte 2: Spenglerei */}
            <div className="bg-stone-50 rounded-xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-secondary">Die Kupfer-Dachrinne</h3>
                  <p className="text-sm text-muted-foreground">Spenglerarbeit, Oktober 2024</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dr. Maier hatte eine denkmalgeschützte Villa in Bogenhausen. Die originale Kupfer-Dachrinne von 1920 
                war an mehreren Stellen durchgerostet. Drei Spengler sagten ihm: "Das muss komplett neu."
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Unser Meister sah das anders. In tagelanger Handarbeit restaurierte er die historischen Elemente, 
                ergänzte fehlende Teile mit passendem Material und bewahrte so ein Stück Münchner Baugeschichte.
              </p>
              <p className="text-secondary font-medium italic border-l-2 border-primary pl-4">
                "Handwerkskunst, wie sie heute selten geworden ist. Diese Dachrinne hält jetzt wieder 50 Jahre." – Dr. Maier
              </p>
            </div>

            {/* Geschichte 3: Problemlöser */}
            <div className="bg-stone-50 rounded-xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-secondary">Das mysteriöse Leck</h3>
                  <p className="text-sm text-muted-foreground">Leckortung, März 2024</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Herr Schmitt aus Moosach war am Verzweifeln. Seit zwei Jahren ein Wasserfleck im Schlafzimmer. 
                Drei verschiedene Dachdecker hatten dreimal verschiedene Stellen repariert. Der Fleck kam immer wieder.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Wir brachten unsere Thermografie-Kamera mit. Das Ergebnis: Das Leck war 3 Meter entfernt vom Fleck – 
                an einer Stelle, die noch niemand untersucht hatte. Eine versteckte Undichtigkeit am Schornstein.
              </p>
              <p className="text-secondary font-medium italic border-l-2 border-primary pl-4">
                "Endlich trocken! Nach zwei Jahren. Ich hätte früher bei 089Dach anrufen sollen." – Herr Schmitt
              </p>
            </div>

            {/* Geschichte 4: Energiesparen */}
            <div className="bg-stone-50 rounded-xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-secondary">Die warme Wohnung</h3>
                  <p className="text-sm text-muted-foreground">Dachsanierung mit Dämmung, Januar 2024</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Die Rentnerin Frau Weber aus Schwabing lebte seit 40 Jahren in ihrer Dachgeschosswohnung. 
                Jeden Winter fror sie, trotz maximaler Heizung. "Ich dachte, das gehört eben dazu", sagte sie uns.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nach der Dämmung konnte sie es kaum glauben. Die Heizkosten sanken von 2.800€ auf 1.600€ im Jahr. 
                Zum ersten Mal seit Jahrzehnten war ihr im Winter wirklich warm. Und 18.000€ Förderung gab's obendrauf.
              </p>
              <p className="text-secondary font-medium italic border-l-2 border-primary pl-4">
                "Ich hätte nie gedacht, dass sich das in meinem Alter noch lohnt. Danke!" – Frau Weber, 78 Jahre
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Unsere Werte</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mt-2 mb-6">
              Wofür wir stehen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl border border-border text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-secondary mb-3">Qualität</h3>
              <p className="text-muted-foreground">
                Wir verwenden nur hochwertige Materialien und arbeiten nach den höchsten Standards des Handwerks.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-border text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-secondary mb-3">Vertrauen</h3>
              <p className="text-muted-foreground">
                Transparente Kommunikation, faire Preise und verlässliche Termine – darauf können Sie sich verlassen.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-border text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-secondary mb-3">Leidenschaft</h3>
              <p className="text-muted-foreground">
                Jedes Dach ist für uns mehr als nur ein Projekt – es ist der Schutz für Ihr Zuhause und Ihre Familie.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}
