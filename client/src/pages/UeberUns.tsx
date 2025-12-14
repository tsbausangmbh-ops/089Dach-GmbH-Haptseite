import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { CheckCircle2, Award, Users, Heart, Quote, Clock, Handshake } from "lucide-react";
import portraitGF from "@assets/generated_images/german_businessman_portrait_gf.png";
import portraitMeister from "@assets/generated_images/german_master_roofer_portrait.png";

export default function UeberUns() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <div className="relative w-full h-[40vh] min-h-[350px] flex items-center overflow-hidden bg-secondary">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/80" />
          <div className="absolute right-0 bottom-0 h-full w-1/2 opacity-10 pointer-events-none hidden md:flex items-center justify-center overflow-hidden">
            <svg 
              width="100%" 
              height="100%" 
              viewBox="0 0 800 800" 
              preserveAspectRatio="xMidYMid slice"
              className="text-white"
            >
              <text 
                x="50%" 
                y="50%" 
                dominantBaseline="middle" 
                textAnchor="middle"
                fill="currentColor"
                style={{ fontSize: '280px', fontWeight: 900, fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '-0.02em' }}
              >
                089DACH
              </text>
            </svg>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">Wer wir sind</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mt-2 max-w-3xl">
            Über uns
          </h1>
          <p className="text-lg text-white/80 mt-4 max-w-2xl">
            Zwei Experten, eine Vision: Ihr Dach in den besten Händen.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Unsere Geschichte</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mt-2 mb-6">
              Wie alles begann
            </h2>
            <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
              <p>
                Es war ein stürmischer Herbsttag 2018, als sich ihre Wege kreuzten. Ein Hausbesitzer aus Pasing 
                stand vor den Trümmern seines Daches – der Sturm hatte gewütet, und er wusste nicht weiter. 
                Der eine kam als Handwerker, der andere als Freund des Hausbesitzers.
              </p>
              <p>
                Was folgte, war mehr als eine Reparatur. Es war der Beginn einer außergewöhnlichen Partnerschaft. 
                Der erfahrene Dachdecker- und Spenglermeister sah, wie oft Hausbesitzer mit schlechter Beratung, 
                überhöhten Preisen und mangelhafter Arbeit konfrontiert wurden. Der kaufmännische Experte erkannte, 
                dass gutes Handwerk allein nicht reicht – es braucht auch faire Kommunikation und verlässliche Organisation.
              </p>
              <p className="font-medium text-secondary">
                So entstand 089Dach GmbH: Ein Unternehmen, das <strong>handwerkliche Perfektion mit menschlicher Wärme</strong> verbindet.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="bg-gray-50 rounded-sm p-8 border border-border">
              <div className="flex flex-col items-center text-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-primary/20">
                  <img 
                    src={portraitMeister} 
                    alt="Dachdecker- und Spenglermeister" 
                    className="w-full h-full object-cover"
                    data-testid="img-portrait-meister"
                  />
                </div>
                <h3 className="text-2xl font-heading font-bold text-secondary mb-2">Der Meister</h3>
                <p className="text-primary font-medium mb-4">Dachdecker- & Spenglermeister</p>
                <div className="text-muted-foreground leading-relaxed space-y-3">
                  <p>
                    Schon als Teenager half er seinem Onkel auf dem Dach. Mit 16 begann die Lehre, mit 23 der 
                    Meisterbrief – und seither hat er über <strong className="text-secondary">1.500 Dächer</strong> in 
                    München und Umgebung saniert, repariert oder neu gedeckt.
                  </p>
                  <p>
                    Was ihn antreibt? <em>"Wenn eine Familie mir ihr Haus anvertraut, dann ist das eine Verantwortung. 
                    Ich denke bei jedem Nagel daran, dass unter diesem Dach Kinder schlafen."</em>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-sm p-8 border border-border">
              <div className="flex flex-col items-center text-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-primary/20">
                  <img 
                    src={portraitGF} 
                    alt="Geschäftsführer" 
                    className="w-full h-full object-cover"
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
            <div className="bg-white p-6 rounded-sm border border-border text-center">
              <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
              <span className="text-4xl font-heading font-bold text-primary">60+</span>
              <p className="text-muted-foreground mt-2">Jahre gemeinsame Erfahrung</p>
            </div>
            <div className="bg-white p-6 rounded-sm border border-border text-center">
              <Award className="h-8 w-8 text-primary mx-auto mb-3" />
              <span className="text-4xl font-heading font-bold text-primary">1.500+</span>
              <p className="text-muted-foreground mt-2">Zufriedene Kunden in München</p>
            </div>
            <div className="bg-white p-6 rounded-sm border border-border text-center">
              <Handshake className="h-8 w-8 text-primary mx-auto mb-3" />
              <span className="text-4xl font-heading font-bold text-primary">100%</span>
              <p className="text-muted-foreground mt-2">Fokus auf Kundenzufriedenheit</p>
            </div>
          </div>

          <div className="bg-secondary/5 rounded-sm p-8 md:p-12 border border-secondary/10 max-w-4xl mx-auto">
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

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Unsere Werte</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mt-2 mb-6">
              Wofür wir stehen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-sm border border-border text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-secondary mb-3">Qualität</h3>
              <p className="text-muted-foreground">
                Wir verwenden nur hochwertige Materialien und arbeiten nach den höchsten Standards des Handwerks.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm border border-border text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-secondary mb-3">Vertrauen</h3>
              <p className="text-muted-foreground">
                Transparente Kommunikation, faire Preise und verlässliche Termine – darauf können Sie sich verlassen.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm border border-border text-center">
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
