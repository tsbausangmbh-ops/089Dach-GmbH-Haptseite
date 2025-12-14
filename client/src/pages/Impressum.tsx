import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Phone, Mail, MapPin } from "lucide-react";
import SEO from "@/components/SEO";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Impressum | 089Dach GmbH Dachdecker München"
        description="Impressum der 089Dach GmbH, Ihrem Dachdecker-Meisterbetrieb in München-Obermenzing. Angaben gemäß § 5 TMG."
        canonical="https://089dach.de/impressum"
      />
      <Navbar />
      
      <section className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Rechtliches</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary mt-4 mb-6">
              Impressum
            </h1>
            <p className="text-muted-foreground">
              Angaben gemäß § 5 TMG
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl space-y-12">
            
            {/* Unternehmensdaten */}
            <div className="bg-gray-50 p-8 rounded-sm">
              <h2 className="text-2xl font-heading font-bold text-secondary mb-6">089Dach GmbH</h2>
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
              <h2 className="text-xl font-heading font-bold text-secondary mb-4">Vertretungsberechtigter Geschäftsführer</h2>
              <p className="text-muted-foreground">
                Michael Haslbeck, Dachdeckermeister
              </p>
            </div>

            {/* Registereintrag */}
            <div>
              <h2 className="text-xl font-heading font-bold text-secondary mb-4">Registereintrag</h2>
              <p className="text-muted-foreground">
                Eintragung im Handelsregister<br />
                Registergericht: Amtsgericht München<br />
                Registernummer: HRB [XXXXX]
              </p>
            </div>

            {/* Umsatzsteuer-ID */}
            <div>
              <h2 className="text-xl font-heading font-bold text-secondary mb-4">Umsatzsteuer-Identifikationsnummer</h2>
              <p className="text-muted-foreground">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                DE [XXXXXXXXX]
              </p>
            </div>

            {/* Berufsbezeichnung */}
            <div>
              <h2 className="text-xl font-heading font-bold text-secondary mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
              <p className="text-muted-foreground mb-3">
                Berufsbezeichnung: Dachdeckermeister<br />
                Zuständige Kammer: Handwerkskammer für München und Oberbayern
              </p>
              <p className="text-muted-foreground">
                Es gelten folgende berufsrechtliche Regelungen: Handwerksordnung (HwO)<br />
                Regelungen einsehbar unter: <a href="https://www.gesetze-im-internet.de/hwo/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.gesetze-im-internet.de/hwo/</a>
              </p>
            </div>

            {/* Streitschlichtung */}
            <div>
              <h2 className="text-xl font-heading font-bold text-secondary mb-4">Streitschlichtung</h2>
              <p className="text-muted-foreground mb-3">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ec.europa.eu/consumers/odr/</a>
              </p>
              <p className="text-muted-foreground">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            {/* Haftung für Inhalte */}
            <div>
              <h2 className="text-xl font-heading font-bold text-secondary mb-4">Haftung für Inhalte</h2>
              <p className="text-muted-foreground">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
            </div>

            {/* Haftung für Links */}
            <div>
              <h2 className="text-xl font-heading font-bold text-secondary mb-4">Haftung für Links</h2>
              <p className="text-muted-foreground">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </div>

            {/* Urheberrecht */}
            <div>
              <h2 className="text-xl font-heading font-bold text-secondary mb-4">Urheberrecht</h2>
              <p className="text-muted-foreground">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
