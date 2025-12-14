import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12 max-w-4xl">
        <h1 className="text-4xl font-heading font-bold mb-8 text-secondary">Datenschutzerklärung</h1>

        <div className="prose prose-lg text-muted-foreground">
          <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">1. Datenschutz auf einen Blick</h2>
          <h3 className="text-xl font-bold text-secondary mt-6 mb-2">Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
            wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
            werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text 
            aufgeführten Datenschutzerklärung.
          </p>

          <h3 className="text-xl font-bold text-secondary mt-6 mb-2">Datenerfassung auf dieser Website</h3>
          <p><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie 
            dem Impressum dieser Website entnehmen.
          </p>
          <p><strong>Wie erfassen wir Ihre Daten?</strong></p>
          <p>
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten 
            handeln, die Sie in ein Kontaktformular eingeben.
          </p>
          <p>
            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme 
            erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des 
            Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">2. Hosting</h2>
          <p>
            Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
          </p>
          <p>
            Replit, Inc.<br />
            Die Serverstandorte sind geografisch verteilt.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
          <h3 className="text-xl font-bold text-secondary mt-6 mb-2">Datenschutz</h3>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
            personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser 
            Datenschutzerklärung.
          </p>

          <h3 className="text-xl font-bold text-secondary mt-6 mb-2">Hinweis zur verantwortlichen Stelle</h3>
          <p>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p>
            089Dach GmbH<br />
            Thuillestr. 20<br />
            81247 München-Obermenzing
          </p>
          <p>
            Telefon: 089 12621964<br />
            E-Mail: info@089dach.de
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">4. Datenerfassung auf dieser Website</h2>
          <h3 className="text-xl font-bold text-secondary mt-6 mb-2">Kontaktformular</h3>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
            inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von 
            Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
          <p>
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage 
            mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. 
            In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung 
            der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) 
            sofern diese abgefragt wurde.
          </p>

          <h3 className="text-xl font-bold text-secondary mt-6 mb-2">Anfrage per E-Mail, Telefon oder Telefax</h3>
          <p>
            Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus 
            hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns 
            gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
