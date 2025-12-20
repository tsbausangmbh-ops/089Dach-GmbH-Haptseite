import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { Shield, Phone, Mail, MapPin } from "lucide-react";
import SEO, { BreadcrumbSchema } from "@/components/SEO";
import heroImage from "@assets/generated_images/professional_office_legal_documents.png";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Impressum | 089Dach GmbH Dachdecker München"
        description="Impressum der 089Dach GmbH, Ihrem Dachdecker-Meisterbetrieb in München-Obermenzing. Angaben gemäß § 5 TMG."
        canonical="https://089dach.de/impressum"
        keywords="impressum 089dach gmbh, dachdecker münchen obermenzing kontakt adresse, falko blöckinger geschäftsführer handwerkskammer, hrb 305535 amtsgericht münchen, thuillestr 20 81247 münchen"
        aiSummary="089Dach GmbH Impressum: Geschäftsführer Falko Georg Blöckinger, Thuillestr. 20, 81247 München-Obermenzing. HRB 305535, Amtsgericht München. Telefon: 089 12621964, E-Mail: info@089dach.de. Dachdecker- und Spenglermeister."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Impressum", url: "/impressum" }]} />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-6 pb-8 md:pt-10 md:pb-12 relative overflow-hidden min-h-[50vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Impressum 089Dach GmbH München"
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
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Rechtliches</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mt-4 mb-4 md:mb-6">
              Impressum
            </h1>
            
            <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl border-l-4 border-primary mb-6 md:mb-8">
              <p className="text-base md:text-lg text-white font-medium mb-3">
                089Dach GmbH – Ihr Dachdecker-Meisterbetrieb
              </p>
              <p className="text-gray-200 leading-relaxed mb-4">
                Angaben gemäß § 5 TMG. <strong className="text-white">Transparent und rechtssicher.</strong>
              </p>
              <p className="text-gray-200 leading-relaxed">
                Geschäftsführer: Falko Georg Blöckinger | HRB 305535, Amtsgericht München
              </p>
            </div>
            
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6 md:mb-8">
              <strong className="text-white">Fragen?</strong> Wir sind persönlich für Sie da – 
              schnell und unkompliziert.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-xl" data-testid="button-hero-call">
                <a href="/rueckruf">
                  <Phone className="mr-2 h-5 w-5" />
                  Rückruf anfordern
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-secondary font-bold rounded-xl" data-testid="button-hero-content">
                <a href="/beratung">24h Beratungstermin</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <BackButton />

      <section className="pt-2 md:pt-4 pb-10 md:pb-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="max-w-5xl space-y-8 md:space-y-12">
            
            {/* Unternehmensdaten */}
            <div className="bg-gray-50 p-5 md:p-8 rounded-xl">
              <h2 className="text-xl md:text-2xl font-heading font-bold text-secondary mb-4 md:mb-6">089Dach GmbH</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-secondary">Anschrift</p>
                    <p className="text-muted-foreground">
                      Thuillestr. 20<br />
                      81247 München-Obermenzing
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-secondary">Telefon</p>
                    <p className="text-muted-foreground">089 12621964</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-secondary">E-Mail</p>
                    <p className="text-muted-foreground">info@089dach.de</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-secondary">Meisterbetrieb</p>
                    <p className="text-muted-foreground">Eingetragen bei der HWK München</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vertretungsberechtigter */}
            <div>
              <h2 className="text-lg md:text-xl font-heading font-bold text-secondary mb-3 md:mb-4">Vertretungsberechtigter Geschäftsführer</h2>
              <p className="text-muted-foreground">
                Falko Georg Blöckinger
              </p>
            </div>

            {/* Registereintrag */}
            <div>
              <h2 className="text-lg md:text-xl font-heading font-bold text-secondary mb-3 md:mb-4">Registereintrag</h2>
              <p className="text-muted-foreground">
                Eintragung im Handelsregister<br />
                Registergericht: Amtsgericht München<br />
                Registernummer: HRB 305535
              </p>
            </div>

            {/* Umsatzsteuer-ID */}
            <div>
              <h2 className="text-lg md:text-xl font-heading font-bold text-secondary mb-3 md:mb-4">Umsatzsteuer-Identifikationsnummer</h2>
              <p className="text-muted-foreground">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                DE [XXXXXXXXX]
              </p>
            </div>

            {/* Berufsbezeichnung */}
            <div>
              <h2 className="text-lg md:text-xl font-heading font-bold text-secondary mb-3 md:mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
              <p className="text-muted-foreground mb-3">
                Berufsbezeichnung: Dachdecker- und Spenglermeister<br />
                Zuständige Kammer: Handwerkskammer für München und Oberbayern
              </p>
              <p className="text-muted-foreground">
                Es gelten folgende berufsrechtliche Regelungen: Handwerksordnung (HwO)<br />
                Regelungen einsehbar unter: <a href="https://www.gesetze-im-internet.de/hwo/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.gesetze-im-internet.de/hwo/</a>
              </p>
            </div>

            {/* Streitschlichtung */}
            <div>
              <h2 className="text-lg md:text-xl font-heading font-bold text-secondary mb-3 md:mb-4">Streitschlichtung</h2>
              <p className="text-muted-foreground mb-3">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ec.europa.eu/consumers/odr/</a>
              </p>
              <p className="text-muted-foreground">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            {/* Haftung für Inhalte */}
            <div>
              <h2 className="text-lg md:text-xl font-heading font-bold text-secondary mb-3 md:mb-4">Haftung für Inhalte</h2>
              <p className="text-muted-foreground">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
            </div>

            {/* Haftung für Links */}
            <div>
              <h2 className="text-lg md:text-xl font-heading font-bold text-secondary mb-3 md:mb-4">Haftung für Links</h2>
              <p className="text-muted-foreground">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </div>

            {/* Urheberrecht */}
            <div>
              <h2 className="text-lg md:text-xl font-heading font-bold text-secondary mb-3 md:mb-4">Urheberrecht</h2>
              <p className="text-muted-foreground">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>

            {/* KI-Hinweis gemäß EU AI Act */}
            <div className="bg-blue-50 p-5 md:p-6 rounded-xl border border-blue-200">
              <h2 className="text-lg md:text-xl font-heading font-bold text-secondary mb-3 md:mb-4">KI-Hinweis gemäß EU AI Act (Art. 50)</h2>
              <p className="text-muted-foreground mb-3">
                <strong>Transparenzhinweis:</strong> 089Dach GmbH setzt zur Unterstützung der Geschäftsprozesse KI-basierte Systeme ein. Diese werden u.a. bei der Angebotserstellung, Kommunikation und Dokumentenverarbeitung genutzt.
              </p>
              <p className="text-muted-foreground mb-3">
                Alle endgültigen Entscheidungen werden von qualifizierten Mitarbeitern getroffen und verantwortet.
              </p>
              <p className="text-muted-foreground text-sm">
                <strong>Rechtsgrundlage:</strong> Verordnung (EU) 2024/1689 (EU AI Act), Art. 22 DSGVO
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
