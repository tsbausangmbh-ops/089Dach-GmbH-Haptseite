import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import LeadFunnel from "@/components/LeadFunnel";
import heroImage from "@assets/generated_images/roofer_explaining_to_homeowner.png";
import SEO, { BreadcrumbSchema, FAQPageSchema } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Phone, Shield, Users, Award, CheckCircle2, Clock, Euro, Heart, Quote } from "lucide-react";
import { Link } from "wouter";

export default function FAQ() {
  const faqs = [
    {
      question: "Ich habe einen akuten Dachschaden. Was tun?",
      answer: "Rufen Sie uns sofort an. Wir priorisieren Notfälle und kommen schnellstmöglich vorbei, um den Schaden zu versorgen.",
      color: "bg-primary/10 border-primary/20"
    },
    {
      question: "Muss ich bei einer Sanierung ausziehen?",
      answer: "Nein, in den meisten Fällen können Sie wohnen bleiben. Wir arbeiten sauber und decken jeden Tag wetterfest ab.",
      color: "bg-secondary/5 border-secondary/20"
    },
    {
      question: "Lohnt sich eine energetische Sanierung?",
      answer: "Absolut. Sie senken Heizkosten, steigern den Wohnkomfort und den Immobilienwert. Wir beraten Sie zu Förderungen.",
      color: "bg-primary/10 border-primary/20"
    },
    {
      question: "Gibt es versteckte Kosten?",
      answer: "Nein. Sie erhalten ein detailliertes Festpreisangebot. Bei unvorhersehbaren Problemen sprechen wir vorher mit Ihnen.",
      color: "bg-secondary/5 border-secondary/20"
    },
    {
      question: "Warum 089Dach wählen?",
      answer: "Wir sind Problemlöser, nicht nur Handwerker. Pünktlichkeit, Sauberkeit und faire Preise sind selbstverständlich.",
      color: "bg-primary/10 border-primary/20"
    },
    {
      question: "Wie lange hält ein neues Dach?",
      answer: "Ein Ziegeldach hält 40-60 Jahre, Metalldächer oft noch länger. Wir verwenden nur hochwertige Markenmaterialien.",
      color: "bg-secondary/5 border-secondary/20"
    },
    {
      question: "Wie schnell erhalte ich eine Antwort?",
      answer: "Wir antworten auf alle Anfragen innerhalb von 24 Stunden. Bei dringenden Fällen rufen Sie uns direkt an.",
      color: "bg-primary/10 border-primary/20"
    },
    {
      question: "Welche Dacharten decken Sie ab?",
      answer: "Steildächer, Flachdächer, Metalldächer, Gründächer – wir beherrschen alle Dachformen und Materialien.",
      color: "bg-secondary/5 border-secondary/20"
    },
    {
      question: "Wie lange dauert eine Dachsanierung?",
      answer: "Je nach Größe 1-3 Wochen. Wir erstellen vorab einen verbindlichen Zeitplan und halten diesen ein.",
      color: "bg-primary/10 border-primary/20"
    },
    {
      question: "Helfen Sie bei Förderanträgen?",
      answer: "Ja, wir unterstützen Sie bei KfW- und BAFA-Förderungen und empfehlen passende Energieberater.",
      color: "bg-secondary/5 border-secondary/20"
    },
    {
      question: "Was kostet eine Dachinspektion?",
      answer: "Die Erstberatung vor Ort ist kostenlos und unverbindlich. Wir schauen uns Ihr Dach genau an.",
      color: "bg-primary/10 border-primary/20"
    },
    {
      question: "Arbeiten Sie auch im Winter?",
      answer: "Ja, viele Arbeiten sind ganzjährig möglich. Bei Frost planen wir die Arbeiten entsprechend.",
      color: "bg-secondary/5 border-secondary/20"
    },
    {
      question: "Übernehmen Sie Spenglerarbeiten?",
      answer: "Ja, wir haben eine eigene Spenglerei für Dachrinnen, Fallrohre, Kamineinfassungen und Verkleidungen.",
      color: "bg-primary/10 border-primary/20"
    },
    {
      question: "Können Sie Dachfenster einbauen?",
      answer: "Ja, wir sind Velux- und Roto-Partner und bauen Dachfenster fachgerecht ein oder tauschen sie aus.",
      color: "bg-secondary/5 border-secondary/20"
    },
    {
      question: "Gibt es Garantie auf Ihre Arbeit?",
      answer: "Selbstverständlich. Wir geben Ihnen eine Gewährleistung auf Material und Ausführung.",
      color: "bg-primary/10 border-primary/20"
    },
    {
      question: "Wie weit fahren Sie?",
      answer: "Wir bedienen München und einen Umkreis von ca. 50 km. Fragen Sie gerne an!",
      color: "bg-secondary/5 border-secondary/20"
    },
    {
      question: "Was ist bei Asbest zu beachten?",
      answer: "Wir sind nach TRGS 519 zertifiziert und entsorgen Asbest fachgerecht und sicher.",
      color: "bg-primary/10 border-primary/20"
    },
    {
      question: "Kann ich mein Dach begrünen lassen?",
      answer: "Ja, wir bieten extensive und intensive Dachbegrünung an – gut für Klima und Optik.",
      color: "bg-secondary/5 border-secondary/20"
    },
    {
      question: "Wie oft sollte man das Dach warten?",
      answer: "Eine jährliche Inspektion ist ideal. So erkennen wir kleine Schäden, bevor sie teuer werden.",
      color: "bg-primary/10 border-primary/20"
    },
    {
      question: "Kann ich bei Ihnen finanzieren?",
      answer: "Wir arbeiten mit Finanzierungspartnern zusammen. Sprechen Sie uns an, wir finden eine Lösung.",
      color: "bg-secondary/5 border-secondary/20"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title="FAQ Dachdecker München | Antworten zu Kosten, Ablauf & Wartung"
        description="Häufige Fragen zu Dachkosten, Förderungen, Wartung und Sicherheit beantwortet von 089Dach München."
        canonical="https://089dach.de/faq"
        keywords="dachdecker faq münchen, dachkosten münchen, dachwartung fragen"
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "FAQ", url: "/faq" }]} />
      <FAQPageSchema faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-10 pb-12 relative overflow-hidden min-h-[50vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Dachexperte beantwortet Fragen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/70"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-2xl text-white">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">089Dach FAQ</span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mt-4 mb-6">
              Die Antworten, die Sie wirklich brauchen
            </h1>
            
            {/* Problem-Agitation */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-sm border-l-4 border-primary mb-8">
              <p className="text-lg text-white font-medium mb-3">
                Kennen Sie das Gefühl?
              </p>
              <p className="text-gray-200 leading-relaxed mb-4">
                Sie haben Fragen zum Dach – aber im Internet finden Sie nur Werbeversprechen oder 
                Fachchinesisch. Jeder Dachdecker erzählt etwas anderes. Und Sie fragen sich: 
                <strong className="text-white"> Wem kann ich hier noch vertrauen?</strong>
              </p>
              <p className="text-gray-200 leading-relaxed">
                Sie wollen keine Verkaufsgespräche. Sie wollen <strong className="text-white">ehrliche Antworten</strong> – 
                damit Sie selbst entscheiden können, was das Richtige für Ihr Zuhause ist.
              </p>
            </div>
            
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              <strong className="text-white">Genau dafür sind wir hier.</strong> 20 echte Fragen. 20 ehrliche Antworten. 
              Kein Kleingedrucktes. Kein Verkaufsdruck. Nur die Wahrheit – aus 25 Jahren Erfahrung 
              auf Münchner Dächern.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-sm" data-testid="button-hero-call">
                <a href="/rueckruf">
                  <Phone className="mr-2 h-5 w-5" />
                  Rückruf anfordern
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-secondary font-bold rounded-sm" data-testid="button-hero-faq">
                <a href="#fragen">Alle 20 Fragen ansehen</a>
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
              <span><strong className="text-secondary">100+</strong> Kunden beraten</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              <span><strong className="text-secondary">Meister für Dach- und Spenglerei</strong> seit 1998</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span><strong className="text-secondary">Kostenlose</strong> Erstberatung</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ihre Vorteile */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-secondary mb-4">
              Warum unsere Kunden uns vertrauen
            </h2>
            <p className="text-lg text-muted-foreground">
              Wir wissen: Ein Dachprojekt ist eine große Entscheidung. Deshalb machen wir es Ihnen so leicht wie möglich.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-sm shadow-sm border-l-4 border-primary">
              <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-heading font-bold text-secondary mb-2">Keine bösen Überraschungen</h3>
              <p className="text-sm text-muted-foreground">
                Sie bekommen ein Festpreisangebot. Was drinsteht, gilt. Punkt.
              </p>
            </div>
            <div className="bg-white p-6 rounded-sm shadow-sm border-l-4 border-primary">
              <Clock className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-heading font-bold text-secondary mb-2">Pünktlich wie versprochen</h3>
              <p className="text-sm text-muted-foreground">
                Wir halten Termine ein. Und wenn's mal eng wird, sagen wir's Ihnen vorher.
              </p>
            </div>
            <div className="bg-white p-6 rounded-sm shadow-sm border-l-4 border-primary">
              <Euro className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-heading font-bold text-secondary mb-2">Faire Preise, ehrlich kalkuliert</h3>
              <p className="text-sm text-muted-foreground">
                Kein Lockvogelangebot. Kein Nachverhandeln. Was fair ist, ist fair.
              </p>
            </div>
            <div className="bg-white p-6 rounded-sm shadow-sm border-l-4 border-primary">
              <Heart className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-heading font-bold text-secondary mb-2">Wir hören Ihnen zu</h3>
              <p className="text-sm text-muted-foreground">
                Ihre Wünsche stehen an erster Stelle. Wir beraten – Sie entscheiden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problemlöser-Sektion */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <Quote className="h-12 w-12 text-primary mb-6" />
            <blockquote className="text-2xl font-heading italic mb-6 leading-relaxed">
              „Die meisten Hausbesitzer haben Angst, über den Tisch gezogen zu werden. 
              Deshalb beantworten wir jede Frage – auch die unbequemen. Denn nur wenn 
              Sie verstehen, können Sie vertrauen."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                FB
              </div>
              <div>
                <p className="font-bold">Falko Georg Blöckinger</p>
                <p className="text-gray-300">Dachdecker- und Spenglermeister, Geschäftsführer 089Dach GmbH</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="fragen" className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
              20 Antworten auf Ihre wichtigsten Fragen
            </h2>
            <p className="text-muted-foreground text-lg">
              Diese Fragen hören wir täglich. Die Antworten kommen direkt aus 25 Jahren Erfahrung auf Münchner Dächern.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`${faq.color} p-5 rounded-sm border transition-all hover:shadow-md hover:-translate-y-1`}
                data-testid={`faq-box-${index}`}
              >
                <h3 className="font-heading font-bold text-secondary text-base mb-2 leading-tight">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadFunnel />
      <Contact />
      <Footer />
    </div>
  );
}
