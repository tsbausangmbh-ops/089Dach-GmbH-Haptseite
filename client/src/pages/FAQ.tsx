import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import LeadFunnel from "@/components/LeadFunnel";
import heroImage from "@assets/generated_images/roofer_tools_arranged_cleanly.png";
import SEO, { BreadcrumbSchema } from "@/components/SEO";

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
      question: "Bieten Sie Notdienst an?",
      answer: "Ja, wir sind bei Sturmschäden und akuten Wassereintritten kurzfristig erreichbar und handeln schnell.",
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
      <Navbar />
      
      <div className="relative w-full h-[35vh] min-h-[300px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="FAQ - Häufige Fragen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply" />
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
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Häufige Fragen & Antworten
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Wir lassen keine Fragen offen. Hier finden Sie Antworten auf die wichtigsten Themen rund um Ihr Dachprojekt.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Wissenswertes</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mt-2">
              20 Antworten auf Ihre Fragen
            </h2>
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
