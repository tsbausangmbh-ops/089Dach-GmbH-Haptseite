import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { Phone, Accessibility, Eye, Ear, Hand, Monitor } from "lucide-react";
import SEO, { BreadcrumbSchema } from "@/components/SEO";
import heroImage from "@assets/generated_images/professional_office_legal_documents.webp";

export default function Barrierefreiheit() {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Barrierefreiheit | 089Dach GmbH Dachdecker München"
        description="Erklärung zur Barrierefreiheit der 089Dach GmbH Website. Wir setzen uns für eine barrierefreie Nutzung unserer Website ein."
        canonical="https://089dach.de/barrierefreiheit"
        keywords="barrierefreiheit 089dach, accessibility dachdecker münchen, wcag konformität, barrierefreie website"
        aiSummary="089Dach GmbH Barrierefreiheitserklärung: Website-Zugänglichkeit für alle Nutzer, WCAG 2.1 Richtlinien, Kontaktmöglichkeiten für Feedback."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Barrierefreiheit", url: "/barrierefreiheit" }]} />
      <Navbar />
      <main id="main-content" role="main" tabIndex={-1}>
      
      <section className="pt-6 pb-8 md:pt-10 md:pb-12 relative overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Barrierefreiheit 089Dach GmbH München"
            className="w-full h-full object-cover"
            width={1792}
            height={1024}
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/70"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl text-white">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Zugänglichkeit</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mt-4 mb-4 md:mb-6">
              Barrierefreiheit
            </h1>
            
            <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl border-l-4 border-primary mb-6 md:mb-8">
              <p className="text-base md:text-lg text-white font-medium mb-3">
                Unser Ziel: Eine Website für alle
              </p>
              <p className="text-gray-200 leading-relaxed">
                Wir setzen uns dafür ein, dass unsere Website für alle Menschen zugänglich ist – 
                unabhängig von körperlichen oder technischen Einschränkungen.
              </p>
            </div>
            
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6 md:mb-8">
              <strong className="text-white">Feedback erwünscht!</strong> Helfen Sie uns, 
              unsere Barrierefreiheit weiter zu verbessern.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-xl" data-testid="button-hero-call">
                <a href="/rueckruf/">
                  <Phone className="mr-2 h-5 w-5" />
                  Rückruf anfordern
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-secondary font-bold rounded-xl" data-testid="button-hero-contact">
                <a href="/kontakt/">Kontakt aufnehmen</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <BackButton />

      <section className="pt-2 md:pt-4 pb-10 md:pb-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
              <div className="flex items-start gap-4">
                <Accessibility className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold text-blue-900 mb-2">Erklärung zur Barrierefreiheit</h2>
                  <p className="text-blue-800">
                    Die 089Dach GmbH ist bemüht, ihre Website im Einklang mit den nationalen Rechtsvorschriften 
                    zur Umsetzung der Richtlinie (EU) 2016/2102 des Europäischen Parlaments und des Rates barrierefrei 
                    zugänglich zu machen.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              
              <h2 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-3">
                <Monitor className="h-6 w-6 text-primary" />
                Stand der Vereinbarkeit mit den Anforderungen
              </h2>
              <p className="text-gray-700 mb-6">
                Diese Website ist weitgehend mit den Web Content Accessibility Guidelines (WCAG) 2.1 Level AA vereinbar. 
                Wir arbeiten kontinuierlich daran, die Zugänglichkeit weiter zu verbessern.
              </p>

              <h2 className="text-2xl font-bold text-secondary mb-4 mt-8 flex items-center gap-3">
                <Eye className="h-6 w-6 text-primary" />
                Maßnahmen für Barrierefreiheit
              </h2>
              <p className="text-gray-700 mb-4">Wir haben folgende Maßnahmen zur Barrierefreiheit umgesetzt:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li><strong>Kontrastreiche Darstellung:</strong> Ausreichender Farbkontrast zwischen Text und Hintergrund</li>
                <li><strong>Skalierbare Schriften:</strong> Texte lassen sich über Browser-Einstellungen vergrößern</li>
                <li><strong>Tastaturnavigation:</strong> Alle Funktionen sind per Tastatur erreichbar</li>
                <li><strong>Alt-Texte:</strong> Bilder sind mit beschreibenden Alternativtexten versehen</li>
                <li><strong>Klare Struktur:</strong> Überschriften und Absätze sind logisch gegliedert</li>
                <li><strong>Responsive Design:</strong> Optimale Darstellung auf allen Geräten</li>
                <li><strong>Fokus-Indikatoren:</strong> Sichtbare Markierung des aktuell fokussierten Elements</li>
              </ul>

              <h2 className="text-2xl font-bold text-secondary mb-4 mt-8 flex items-center gap-3">
                <Ear className="h-6 w-6 text-primary" />
                Bekannte Einschränkungen
              </h2>
              <p className="text-gray-700 mb-4">
                Trotz unserer Bemühungen können einige Inhalte noch nicht vollständig barrierefrei sein:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Einige ältere PDF-Dokumente sind möglicherweise nicht vollständig barrierefrei</li>
                <li>Externe Inhalte und Drittanbieter-Dienste unterliegen deren eigenen Barrierefreiheitsstandards</li>
              </ul>
              <p className="text-gray-700 mb-6">
                Wir arbeiten kontinuierlich daran, diese Einschränkungen zu beheben.
              </p>

              <h2 className="text-2xl font-bold text-secondary mb-4 mt-8 flex items-center gap-3">
                <Hand className="h-6 w-6 text-primary" />
                Feedback und Kontakt
              </h2>
              <p className="text-gray-700 mb-4">
                Wenn Sie Barrieren auf unserer Website feststellen oder Verbesserungsvorschläge haben, 
                kontaktieren Sie uns bitte:
              </p>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-6">
                <p className="text-gray-700 mb-2"><strong>089Dach GmbH</strong></p>
                <p className="text-gray-700 mb-2">Thuillestr. 20, 81247 München</p>
                <p className="text-gray-700 mb-2">
                  Telefon: <a href="tel:08912621964" className="text-primary hover:underline">089 12621964</a>
                </p>
                <p className="text-gray-700 mb-2">
                  E-Mail: <a href="mailto:info@089dach.de" className="text-primary hover:underline">info@089dach.de</a>
                </p>
              </div>

              <p className="text-gray-700 mb-6">
                Wir werden Ihr Anliegen prüfen und uns bemühen, festgestellte Probleme so schnell wie möglich zu beheben.
              </p>

              <h2 className="text-2xl font-bold text-secondary mb-4 mt-8">Durchsetzungsverfahren</h2>
              <p className="text-gray-700 mb-4">
                Sollten Sie mit unseren Antworten nicht zufrieden sein, können Sie sich an die zuständige 
                Durchsetzungsstelle wenden:
              </p>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-6">
                <p className="text-gray-700 mb-2"><strong>Landesamt für Digitalisierung, Breitband und Vermessung</strong></p>
                <p className="text-gray-700 mb-2">IT-Dienstleistungszentrum des Freistaats Bayern</p>
                <p className="text-gray-700 mb-2">Alexandrastraße 4, 80539 München</p>
                <p className="text-gray-700">
                  Website: <a href="https://www.ldbv.bayern.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.ldbv.bayern.de</a>
                </p>
              </div>

              <h2 className="text-2xl font-bold text-secondary mb-4 mt-8">Diese Erklärung wurde erstellt am</h2>
              <p className="text-gray-700 mb-6">
                1. Februar 2026
              </p>
              <p className="text-gray-500 text-sm">
                Diese Erklärung wurde zuletzt am 1. Februar 2026 überprüft.
              </p>

            </div>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
}
