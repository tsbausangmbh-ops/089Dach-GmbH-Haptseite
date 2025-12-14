import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Datenschutz | 089Dach GmbH München"
        description="Datenschutzerklärung der 089Dach GmbH. Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemäß DSGVO."
        canonical="https://089dach.de/datenschutz"
      />
      <Navbar />
      
      <section className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Rechtliches</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary mt-4 mb-6">
              Datenschutzerklärung
            </h1>
            <p className="text-muted-foreground">
              Informationen zur Verarbeitung Ihrer personenbezogenen Daten
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl prose prose-gray">
            
            <h2 className="text-xl font-heading font-bold text-secondary mb-4">1. Datenschutz auf einen Blick</h2>
            
            <h3 className="text-lg font-bold text-secondary mt-6 mb-3">Allgemeine Hinweise</h3>
            <p className="text-muted-foreground mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>

            <h3 className="text-lg font-bold text-secondary mt-6 mb-3">Datenerfassung auf dieser Website</h3>
            <p className="text-muted-foreground mb-4">
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>

            <h2 className="text-xl font-heading font-bold text-secondary mt-8 mb-4">2. Verantwortliche Stelle</h2>
            <div className="bg-gray-50 p-6 rounded-sm mb-6">
              <p className="text-muted-foreground">
                089Dach GmbH<br />
                Thuillestr. 20<br />
                81247 München-Obermenzing<br /><br />
                Telefon: 089 12621964<br />
                E-Mail: info@089dach.de
              </p>
            </div>

            <h2 className="text-xl font-heading font-bold text-secondary mt-8 mb-4">3. Erhebung und Speicherung personenbezogener Daten</h2>
            
            <h3 className="text-lg font-bold text-secondary mt-6 mb-3">Beim Besuch der Website</h3>
            <p className="text-muted-foreground mb-4">
              Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sog. Logfile gespeichert.
            </p>
            <p className="text-muted-foreground mb-4">
              Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
              <li>IP-Adresse des anfragenden Rechners</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
              <li>Verwendeter Browser und ggf. das Betriebssystem</li>
            </ul>

            <h3 className="text-lg font-bold text-secondary mt-6 mb-3">Bei Nutzung unseres Kontaktformulars</h3>
            <p className="text-muted-foreground mb-4">
              Bei Fragen jeglicher Art bieten wir Ihnen die Möglichkeit, mit uns über ein auf der Website bereitgestelltes Formular Kontakt aufzunehmen. Dabei ist die Angabe einer gültigen E-Mail-Adresse erforderlich, damit wir wissen, von wem die Anfrage stammt und um diese beantworten zu können.
            </p>
            <p className="text-muted-foreground mb-4">
              Die von Ihnen eingegebenen Daten verarbeiten wir ausschließlich zur Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1 lit. b DSGVO). Nach abschließender Bearbeitung werden die Daten gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>

            <h2 className="text-xl font-heading font-bold text-secondary mt-8 mb-4">4. Ihre Rechte</h2>
            <p className="text-muted-foreground mb-4">
              Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.
            </p>

            <h2 className="text-xl font-heading font-bold text-secondary mt-8 mb-4">5. Cookies</h2>
            <p className="text-muted-foreground mb-4">
              Wir setzen auf unserer Website Cookies ein. Hierbei handelt es sich um kleine Dateien, die Ihr Browser automatisch erstellt und die auf Ihrem Endgerät gespeichert werden, wenn Sie unsere Seite besuchen.
            </p>
            <p className="text-muted-foreground mb-4">
              Die durch technisch notwendige Cookies erhobenen Nutzerdaten werden nicht zur Erstellung von Nutzerprofilen verwendet. Dadurch wird Ihr Interesse am Schutz Ihrer personenbezogenen Daten gewahrt.
            </p>

            <h2 className="text-xl font-heading font-bold text-secondary mt-8 mb-4">6. SSL-Verschlüsselung</h2>
            <p className="text-muted-foreground mb-4">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>

            <h2 className="text-xl font-heading font-bold text-secondary mt-8 mb-4">7. Aktualität und Änderung dieser Datenschutzerklärung</h2>
            <p className="text-muted-foreground mb-4">
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Dezember 2024.
            </p>
            <p className="text-muted-foreground">
              Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
            </p>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
