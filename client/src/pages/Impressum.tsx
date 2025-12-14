import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-heading font-bold text-secondary mb-8">Impressum</h1>
          
          <div className="prose prose-lg text-muted-foreground space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-secondary mb-4">Angaben gemäß § 5 TMG</h2>
              <p>
                089Dach GmbH<br />
                Thuillestr. 20<br />
                81247 München-Obermenzing
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary mb-4">Vertreten durch</h2>
              <p>
                Geschäftsführer: [Vorname Nachname]<br />
                (Bitte tragen Sie hier den Namen des Geschäftsführers ein)
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary mb-4">Kontakt</h2>
              <p>
                Telefon: 089 12621964<br />
                E-Mail: info@089dach.de
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary mb-4">Registereintrag</h2>
              <p>
                Eintragung im Handelsregister.<br />
                Registergericht: Amtsgericht München<br />
                Registernummer: HRB [Nummer]
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary mb-4">Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                DE [Nummer]
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
              <p>
                Berufsbezeichnung: Dachdeckermeister<br />
                Zuständige Kammer: Handwerkskammer für München und Oberbayern<br />
                Verliehen in: Deutschland
              </p>
              <p className="mt-2">
                Es gelten folgende berufsrechtliche Regelungen:<br />
                Handwerksordnung (HwO)<br />
                (einsehbar unter: <a href="http://www.gesetze-im-internet.de/hwo/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">http://www.gesetze-im-internet.de/hwo/</a>)
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary mb-4">EU-Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ec.europa.eu/consumers/odr/</a>.<br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
            
            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-secondary mb-4">Haftung für Inhalte</h3>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
