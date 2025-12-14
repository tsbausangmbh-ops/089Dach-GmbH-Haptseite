import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import LeadFunnel from "@/components/LeadFunnel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HeartHandshake, Lightbulb, ShieldCheck } from "lucide-react";
import heroImage from "@assets/generated_images/roofer_tools_arranged_cleanly.png";

export default function FAQ() {
  const faqs = [
    {
      question: "Ich habe einen akuten Dachschaden / Wassereintritt. Was soll ich tun?",
      answer: "Keine Panik. Rufen Sie uns sofort an. Wir verstehen, wie stressig so eine Situation ist und priorisieren Notfälle. Unser Team kommt schnellstmöglich vorbei, um den Schaden erstzuversorgen und Ihr Eigentum zu schützen. Wir lassen Sie nicht im Regen stehen."
    },
    {
      question: "Wie läuft eine Dachsanierung ab? Muss ich ausziehen?",
      answer: "Nein, in den allermeisten Fällen können Sie während der Arbeiten wohnen bleiben. Wir planen unsere Baustellen so rücksichtsvoll wie möglich. Wir wissen, dass eine Baustelle eine Belastung ist, und arbeiten daher extrem sauber, staubarm und zügig. Wir decken jeden Tag das Dach wetterfest ab."
    },
    {
      question: "Lohnt sich eine energetische Sanierung für mich?",
      answer: "Absolut. Eine Investition in Dämmung zahlt sich doppelt aus: Sie senken sofort Ihre Heizkosten und steigern den Wohnkomfort spürbar (im Winter warm, im Sommer kühl). Zudem steigert es den Wert Ihrer Immobilie massiv. Wir rechnen Ihnen gerne vor, ab wann sich die Investition amortisiert und welche Förderungen Sie nutzen können."
    },
    {
      question: "Wie setzen sich die Kosten zusammen? Gibt es versteckte Kosten?",
      answer: "Transparenz ist unser oberstes Gebot. Sie erhalten von uns ein detailliertes Festpreisangebot, in dem alle Positionen klar aufgeschlüsselt sind. Wir erklären Ihnen jeden Posten. Sollten während der Arbeiten unvorhersehbare Probleme am Gebälk auftauchen, sprechen wir *bevor* Mehrkosten entstehen mit Ihnen und suchen die wirtschaftlichste Lösung."
    },
    {
      question: "Warum sollte ich mich für 089Dach entscheiden?",
      answer: "Weil wir nicht nur Handwerker, sondern Problemlöser sind. Wir hören Ihnen zu und verstehen Ihre Wünsche. Wir liefern keine Standardlösung, sondern das Dach, das zu Ihnen und Ihrem Budget passt. Pünktlichkeit, Sauberkeit und ein höflicher Umgangston sind für unsere Mitarbeiter selbstverständlich."
    },
    {
      question: "Wie lange hält ein neues Dach?",
      answer: "Ein fachgerecht ausgeführtes Dach hält Generationen. Bei Ziegeldächern gehen wir von 40-60 Jahren aus, bei Metalldächern oft noch länger. Wir verwenden nur hochwertige Markenmaterialien, damit Sie langfristig Ruhe haben. Qualität ist die günstigste Investition in die Zukunft."
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative w-full h-[35vh] min-h-[300px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="FAQ - Häufige Fragen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply" />

        {/* Hero Logo Overlay */}
        <div className="absolute right-0 bottom-0 h-full w-1/2 opacity-10 pointer-events-none hidden md:flex items-center justify-center overflow-hidden">
             <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 800 800" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full max-w-none transform rotate-12 scale-150"
          >
            <g fill="currentColor" className="text-white">
              <rect x="100" y="200" width="200" height="200" rx="20" fill="currentColor" />
              <text x="200" y="340" fontSize="120" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" fill="black">089</text>
              <text x="340" y="340" fontSize="120" fontWeight="bold" fontFamily="sans-serif" fill="currentColor">DACH</text>
              <text x="345" y="390" fontSize="30" fontWeight="medium" fontFamily="sans-serif" letterSpacing="5" fill="currentColor">GMBH MÜNCHEN</text>
            </g>
          </svg>
        </div>

        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Häufige Fragen & Antworten
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Wir lassen keine Fragen offen. Hier finden Sie Antworten auf die wichtigsten Themen rund um Ihr Dachprojekt.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <HeartHandshake className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-secondary mb-3">Empatisch & Nah</h3>
              <p className="text-muted-foreground">
                Wir verstehen Ihre Anliegen und Sorgen. Ein Dachprojekt ist Vertrauenssache. Wir beraten Sie ehrlich und auf Augenhöhe.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-secondary mb-3">Echte Problemlöser</h3>
              <p className="text-muted-foreground">
                Geht nicht, gibt's nicht. Wir finden für jede bauliche Herausforderung eine intelligente und machbare Lösung.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-secondary mb-3">Mehrwert Garantie</h3>
              <p className="text-muted-foreground">
                Wir denken weiter. Unsere Lösungen sind nachhaltig, sparen Energie und steigern den Wert Ihres Hauses langfristig.
              </p>
            </div>
          </div>

          {/* Accordion */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-secondary text-center mb-8">
              Wissenswertes für Bauherren
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                  <AccordionTrigger className="text-lg font-heading font-semibold text-secondary hover:text-primary hover:no-underline text-left py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <LeadFunnel />
      <Contact />
      <Footer />
    </div>
  );
}
