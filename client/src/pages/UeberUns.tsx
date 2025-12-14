import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { CheckCircle2, Award, Users, Heart } from "lucide-react";
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
              Gemeinsam stärker für Ihr Dach
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Als sich ein erfahrener Dachdecker- und Spenglermeister mit einem kaufmännischen Experten zusammentat, 
              entstand mehr als nur ein Unternehmen. Es entstand eine Partnerschaft, die auf einer gemeinsamen 
              Vision basiert: <strong className="text-secondary">Kunden mit Qualität, Zuverlässigkeit und Fairness zu helfen.</strong>
            </p>
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
                <p className="text-muted-foreground leading-relaxed">
                  Mit über 30 Jahren Erfahrung auf dem Dach kennt er jedes Material, jede Technik und jede 
                  Herausforderung. Als gelernter Dachdecker und Spenglermeister verbindet er traditionelles 
                  Handwerk mit modernsten Methoden. Sein Credo: <em>"Ein Dach muss nicht nur dicht sein – 
                  es muss für Generationen halten."</em>
                </p>
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
                <p className="text-muted-foreground leading-relaxed">
                  Mit über 30 Jahren kaufmännischer Erfahrung sorgt er dafür, dass Projekte reibungslos laufen, 
                  Angebote fair kalkuliert sind und Kunden transparent informiert werden. Seine Stärke liegt 
                  in der Organisation und im Kundenservice. Sein Motto: <em>"Der Kunde soll sich um nichts 
                  kümmern müssen – außer sich auf sein neues Dach zu freuen."</em>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 rounded-sm p-8 md:p-12 border border-primary/10 text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Award className="h-8 w-8 text-primary" />
              <span className="text-5xl font-heading font-bold text-primary">60+</span>
            </div>
            <h3 className="text-2xl font-heading font-bold text-secondary mb-4">
              Jahre gemeinsame Erfahrung
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Zusammen bringen wir über 60 Jahre Berufserfahrung mit – die perfekte Kombination aus 
              handwerklicher Expertise und kaufmännischem Know-how.
            </p>
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
