import { CheckCircle2, MapPin, Phone, Clock, Shield, Award, Users, Star, Wrench, Home, Sun, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DachdeckerKomplettContent() {
  const stadtteile = ["Obermenzing", "Pasing", "Laim", "Schwabing", "Sendling", "Bogenhausen", "Moosach", "Nymphenburg", "Gräfelfing", "Planegg", "Germering", "Starnberg"];
  
  const bewertungen = [
    { name: "Thomas M.", ort: "München-Pasing", text: "Professionell, sauber und zu fairen Preisen. Klare Empfehlung!", sterne: 5 },
    { name: "Elisabeth K.", ort: "München-Schwabing", text: "Perfekte Dachsanierung unseres 1920er Altbaus.", sterne: 5 },
    { name: "Familie Huber", ort: "Germering", text: "Pünktlich, sauber – das neue Dach ist wunderschön.", sterne: 5 }
  ];

  return (
    <section className="py-16 bg-stone-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-secondary mb-8 text-center">
            Dachdecker München – Dacharbeiten vom Meisterbetrieb
          </h2>
          
          <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
            <p className="text-lg mb-6">
              <strong className="text-secondary">Dachdecker in München</strong> gesucht? Die 089Dach GmbH ist Ihr zuverlässiger Partner für alle <strong>Dacharbeiten</strong> in München und Umgebung. 
              Als inhabergeführter <strong>Dachdecker-Meisterbetrieb</strong> mit über 25 Jahren Erfahrung bieten wir Ihnen professionelle <strong>Dachsanierung</strong>, 
              <strong> Dachreparatur</strong>, <strong>Flachdach</strong>-Abdichtung und <strong>Spenglerarbeiten</strong> aus einer Hand.
            </p>
            
            <p className="mb-6">
              Ob <strong>Steildach</strong> oder <strong>Flachdach</strong>, ob <strong>Dachziegel austauschen</strong> oder komplette <strong>Dacheindeckung</strong> – 
              unsere erfahrenen <strong>Dachdecker</strong> arbeiten schnell, sauber und zu transparenten Festpreisen. 
              Bei <strong>Dachschäden</strong> und <strong>undichtem Dach</strong> sind wir oft innerhalb von 24 Stunden bei Ihnen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl border border-stone-200">
              <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Warum 089Dach wählen?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Dachdecker-Meister</strong> seit 1998 – Qualität garantiert</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>500+ <strong>Dachprojekte</strong> erfolgreich abgeschlossen</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>10 Jahre Garantie auf alle <strong>Dacharbeiten</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Festpreisgarantie – keine versteckten Kosten</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>KfW/BAFA-<strong>Förderberatung</strong> für Dachsanierung 2025</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-stone-200">
              <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                <Wrench className="h-5 w-5 text-primary" />
                Unsere Dachdecker-Leistungen
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Dachsanierung</strong> & Dacherneuerung</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Dachreparatur</strong> & Sturmschaden-Behebung</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Flachdach</strong>-Abdichtung & Begrünung</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Dachfenster</strong> & Gauben einbauen</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Dachrinnen</strong>, Spenglerei & Blecharbeiten</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-secondary text-white p-8 rounded-xl mb-12">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Kundenbewertungen</h3>
              <div className="flex items-center justify-center gap-2 mb-1">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 text-sm">4.9/5 Sterne – 120+ zufriedene Kunden in München</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {bewertungen.map((b, i) => (
                <div key={i} className="bg-white/10 p-4 rounded-xl" data-testid={`review-${i}`}>
                  <div className="flex gap-1 mb-2">
                    {[...Array(b.sterne)].map((_, j) => (
                      <Star key={j} className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-200 text-sm italic mb-2">"{b.text}"</p>
                  <p className="text-xs text-gray-400">{b.name}, {b.ort}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-stone-200">
            <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Dachdecker für ganz München & Umland
            </h3>
            <p className="text-muted-foreground mb-4">
              Von unserem Standort in <strong>München-Obermenzing</strong> aus sind wir als <strong>Dachdecker</strong> in allen Stadtteilen für Sie da:
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {stadtteile.map((s) => (
                <span key={s} className="bg-stone-50 px-3 py-1 rounded-full text-sm border border-stone-200">
                  Dachdecker {s}
                </span>
              ))}
            </div>
            <div className="text-center mt-6">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-xl" data-testid="button-request-callback">
                <a href="/beratung">Kostenlose Beratung anfragen</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function DachdeckerMuenchenContent() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-secondary mb-6 text-center">
            Dachdecker München – Ihr Meisterbetrieb für alle Dacharbeiten
          </h2>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="lead text-lg mb-6">
              Als <strong className="text-secondary">Dachdecker in München</strong> sind wir seit über 25 Jahren Ihr zuverlässiger Partner für alle Arbeiten rund ums Dach. 
              Die 089Dach GmbH ist ein inhabergeführter Meisterbetrieb mit Sitz in München-Obermenzing und betreut Kunden in ganz München und dem Münchner Umland.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div className="bg-stone-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Warum 089Dach?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Dachdecker- und Spenglermeister seit 1998</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Über 500 erfolgreich abgeschlossene Projekte</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>10 Jahre Garantie auf alle Arbeiten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Festpreisgarantie ohne versteckte Kosten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>KfW- und BAFA-Förderberatung inklusive</span>
                  </li>
                </ul>
              </div>

              <div className="bg-stone-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Unser Einzugsgebiet
                </h3>
                <p className="mb-4">
                  Als Dachdecker in München sind wir in allen Stadtteilen für Sie da:
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Obermenzing", "Pasing", "Laim", "Schwabing", "Sendling", "Bogenhausen", "Moosach", "Neuhausen", "Nymphenburg", "Gräfelfing", "Planegg", "Germering"].map((stadtteil) => (
                    <span key={stadtteil} className="bg-white px-3 py-1 rounded-full text-sm border border-stone-200">
                      {stadtteil}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-secondary mt-10 mb-4">
              Unsere Leistungen als Dachdecker in München
            </h3>
            
            <p className="mb-4">
              Die 089Dach GmbH bietet Ihnen das komplette Spektrum an Dachdeckerleistungen aus einer Hand. 
              Von der <strong>Dachsanierung</strong> über <strong>Steildach</strong> und <strong>Flachdach</strong> bis hin zu 
              <strong> Spenglerarbeiten</strong>, <strong>Dachfenstern</strong> und <strong>Gaubenbau</strong> – 
              wir sind Ihr Ansprechpartner für alle Arbeiten rund ums Dach in München.
            </p>

            <div className="grid md:grid-cols-3 gap-4 my-8">
              <div className="text-center p-4 bg-primary/5 rounded-xl" data-testid="stat-experience">
                <div className="text-3xl font-bold text-primary mb-1">25+</div>
                <div className="text-sm text-muted-foreground">Jahre Erfahrung</div>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-xl" data-testid="stat-projects">
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Projekte abgeschlossen</div>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-xl" data-testid="stat-rating">
                <div className="text-3xl font-bold text-primary mb-1">4.9/5</div>
                <div className="text-sm text-muted-foreground">Kundenbewertung</div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-secondary mt-10 mb-4">
              Wann Sie einen Dachdecker in München brauchen
            </h3>
            
            <p className="mb-4">
              Ein Dachschaden kommt oft unerwartet – aber es gibt Warnsignale, die Sie nicht ignorieren sollten:
            </p>
            
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Wasserflecken</strong> an der Decke oder im Dachboden</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Verrutschte oder gebrochene Ziegel</strong> auf dem Dach</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Starker Moos- und Flechtenbewuchs</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Steigende Heizkosten</strong> durch mangelnde Dämmung</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Dach älter als 30 Jahre</strong> ohne größere Wartung</span>
              </li>
            </ul>

            <div className="bg-secondary text-white p-8 rounded-xl my-8">
              <h3 className="text-2xl font-bold mb-4">Kostenlose Erstberatung vom Dachdecker-Meister</h3>
              <p className="mb-6 text-gray-200">
                Rufen Sie uns an oder nutzen Sie unser Kontaktformular. Wir melden uns innerhalb von 24 Stunden 
                und vereinbaren einen kostenlosen Vor-Ort-Termin mit Ihnen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-xl" data-testid="button-phone-seo">
                  <a href="/rueckruf" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Rückruf anfordern
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-xl" data-testid="button-contact-seo">
                  <a href="/kontakt">Kontaktformular</a>
                </Button>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-secondary mt-10 mb-4">
              Das sagen unsere Kunden
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-stone-50 p-6 rounded-xl">
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="italic mb-4">
                  "Endlich ein Dachdecker in München, der hält was er verspricht. Pünktlich, sauber, fairer Preis. 
                  Die Dachsanierung wurde perfekt durchgeführt."
                </p>
                <p className="font-bold text-secondary">– Familie Müller, München-Pasing</p>
              </div>
              <div className="bg-stone-50 p-6 rounded-xl">
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="italic mb-4">
                  "Nach dem Sturm hatten wir ein Leck im Dach. 089Dach war noch am selben Tag da 
                  und hat das Problem schnell behoben. Sehr zu empfehlen!"
                </p>
                <p className="font-bold text-secondary">– Herr Schmidt, München-Schwabing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function DachsanierungMuenchenContent() {
  return (
    <section className="py-12 bg-stone-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-secondary mb-6 text-center">
            Dachsanierung München – Komplettsanierung vom Meisterbetrieb
          </h2>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="lead text-lg mb-6">
              Eine <strong className="text-secondary">Dachsanierung in München</strong> ist eine Investition in die Zukunft Ihres Hauses. 
              Mit der 089Dach GmbH haben Sie einen erfahrenen Partner an Ihrer Seite, der Sie von der Planung bis zur Fertigstellung begleitet.
            </p>

            <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">
              Was kostet eine Dachsanierung in München?
            </h3>
            
            <p className="mb-4">
              Die Kosten für eine Dachsanierung in München hängen von verschiedenen Faktoren ab:
            </p>

            <div className="bg-white p-6 rounded-xl border border-stone-200 my-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-stone-200">
                    <th className="text-left py-3 text-secondary">Leistung</th>
                    <th className="text-right py-3 text-secondary">Kosten pro m²</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-100">
                    <td className="py-3">Neueindeckung mit Tonziegeln</td>
                    <td className="text-right py-3 font-bold">ab 80 €</td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="py-3">Komplettsanierung inkl. Lattung</td>
                    <td className="text-right py-3 font-bold">ab 120 €</td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="py-3">Energetische Sanierung mit Dämmung</td>
                    <td className="text-right py-3 font-bold">ab 180 €</td>
                  </tr>
                  <tr>
                    <td className="py-3">Aufsparrendämmung Premium</td>
                    <td className="text-right py-3 font-bold">ab 250 €</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-sm text-muted-foreground mt-4">
                * Richtpreise für München, individuelle Angebote nach Vor-Ort-Besichtigung
              </p>
            </div>

            <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">
              Förderung für Dachsanierung in München 2025
            </h3>
            
            <p className="mb-4">
              Bei einer energetischen Dachsanierung können Sie von attraktiven Förderprogrammen profitieren:
            </p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 bg-white p-4 rounded-xl border border-stone-200">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <strong className="text-secondary">KfW-Förderung:</strong> Bis zu 20% Zuschuss für energetische Sanierungsmaßnahmen
                </div>
              </li>
              <li className="flex items-start gap-3 bg-white p-4 rounded-xl border border-stone-200">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <strong className="text-secondary">BAFA-Förderung:</strong> Zuschüsse für Einzelmaßnahmen an der Gebäudehülle
                </div>
              </li>
              <li className="flex items-start gap-3 bg-white p-4 rounded-xl border border-stone-200">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <strong className="text-secondary">Steuerbonus:</strong> 20% der Handwerkerkosten absetzbar (max. 1.200 €/Jahr)
                </div>
              </li>
            </ul>

            <div className="bg-primary/10 p-6 rounded-xl my-8">
              <h4 className="text-xl font-bold text-secondary mb-2">Unser Förder-Service</h4>
              <p className="mb-0">
                Wir beraten Sie kostenlos zu allen Fördermöglichkeiten und vermitteln Sie an zertifizierte 
                Energieberater aus unserem Partnernetzwerk. So sichern Sie sich die maximale Förderung für Ihre Dachsanierung.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">
              Der Ablauf Ihrer Dachsanierung
            </h3>

            <div className="space-y-4 my-6">
              {[
                { step: 1, title: "Kostenlose Erstberatung", desc: "Wir besichtigen Ihr Dach, dokumentieren den Zustand und besprechen Ihre Wünsche." },
                { step: 2, title: "Angebot mit Festpreis", desc: "Sie erhalten ein detailliertes Angebot – transparent und ohne versteckte Kosten." },
                { step: 3, title: "Förderantrag stellen", desc: "Wir unterstützen Sie bei der Beantragung aller Fördermittel." },
                { step: 4, title: "Professionelle Ausführung", desc: "Unser Meisterbetrieb führt die Arbeiten termingerecht und sauber durch." },
                { step: 5, title: "Abnahme und Garantie", desc: "Nach der Abnahme erhalten Sie 10 Jahre Garantie auf unsere Arbeit." }
              ].map((item) => (
                <div key={item.step} className="flex gap-4 bg-white p-4 rounded-xl border border-stone-200">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SpenglereiMuenchenContent() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-secondary mb-6 text-center">
            Spenglerei München – Meisterhandwerk in Kupfer, Zink & Aluminium
          </h2>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="lead text-lg mb-6">
              Als <strong className="text-secondary">Spengler in München</strong> fertigen wir alle Bauteile in unserer eigenen Werkstatt. 
              Von der Dachrinne bis zur Kamineinfassung – jedes Stück wird passgenau für Ihr Objekt hergestellt.
            </p>

            <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">
              Dachrinne erneuern – Was kostet das in München?
            </h3>

            <div className="bg-stone-50 p-6 rounded-xl my-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-stone-200">
                    <th className="text-left py-3 text-secondary">Material</th>
                    <th className="text-right py-3 text-secondary">Kosten pro Meter</th>
                    <th className="text-right py-3 text-secondary">Lebensdauer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-100">
                    <td className="py-3">Zink (Titanzink)</td>
                    <td className="text-right py-3 font-bold">ab 25 €</td>
                    <td className="text-right py-3">40-50 Jahre</td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="py-3">Aluminium</td>
                    <td className="text-right py-3 font-bold">ab 20 €</td>
                    <td className="text-right py-3">30-40 Jahre</td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="py-3">Kupfer</td>
                    <td className="text-right py-3 font-bold">ab 45 €</td>
                    <td className="text-right py-3">80-100 Jahre</td>
                  </tr>
                  <tr>
                    <td className="py-3">Edelstahl</td>
                    <td className="text-right py-3 font-bold">ab 55 €</td>
                    <td className="text-right py-3">50+ Jahre</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-sm text-muted-foreground mt-4">
                * Preise inkl. Montage, exkl. Gerüst. Individuelle Angebote nach Besichtigung.
              </p>
            </div>

            <div className="bg-secondary text-white p-6 rounded-xl my-8">
              <h4 className="text-xl font-bold mb-3">Eigene Werkstatt = Faire Preise</h4>
              <p className="text-gray-200">
                Da wir alle Bauteile selbst fertigen, sparen Sie die Zwischenhändler-Marge. 
                Und wir können flexibel auf Ihre Wünsche eingehen – auch bei Sondermaßen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function DachfensterMuenchenContent() {
  return (
    <section className="py-12 bg-stone-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-secondary mb-6 text-center">
            Dachfenster München – Mehr Licht für Ihr Zuhause
          </h2>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="lead text-lg mb-6">
              Ein <strong className="text-secondary">Dachfenster in München</strong> einbauen zu lassen ist eine Investition, die sich täglich auszahlt. 
              Mehr Tageslicht, bessere Belüftung und höherer Wohnkomfort – oft schon nach einem Tag Arbeit.
            </p>

            <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">
              Was kostet ein Dachfenster mit Einbau?
            </h3>

            <div className="bg-white p-6 rounded-xl border border-stone-200 my-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-stone-200">
                    <th className="text-left py-3 text-secondary">Fenstertyp</th>
                    <th className="text-right py-3 text-secondary">Preis inkl. Einbau</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-100">
                    <td className="py-3">Schwingfenster Standard (78x98cm)</td>
                    <td className="text-right py-3 font-bold">ab 1.200 €</td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="py-3">Schwingfenster Komfort (78x118cm)</td>
                    <td className="text-right py-3 font-bold">ab 1.500 €</td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="py-3">Klapp-Schwingfenster</td>
                    <td className="text-right py-3 font-bold">ab 1.800 €</td>
                  </tr>
                  <tr>
                    <td className="py-3">Velux Cabrio Dachbalkon</td>
                    <td className="text-right py-3 font-bold">ab 4.500 €</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-primary/10 p-6 rounded-xl my-8">
              <h4 className="text-xl font-bold text-secondary mb-2">Einbau in 1-2 Tagen</h4>
              <p className="mb-0">
                Als zertifizierter VELUX- und Roto-Partner bauen wir Ihr neues Dachfenster schnell und sauber ein. 
                Wir arbeiten von außen – Ihr Wohnraum bleibt sauber.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function DachreparaturMuenchenContent() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-secondary mb-6 text-center">
            Dachreparatur München – Schnelle Hilfe bei Dachschäden
          </h2>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="lead text-lg mb-6">
              Wenn das <strong className="text-secondary">Dach undicht</strong> ist, zählt jede Stunde. 
              Als Dachdecker in München sind wir in der Regel innerhalb von 24 Stunden bei Ihnen und sichern den Schaden ab.
            </p>

            <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">
              Was kostet eine Dachreparatur?
            </h3>

            <div className="bg-stone-50 p-6 rounded-xl my-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-stone-200">
                    <th className="text-left py-3 text-secondary">Reparatur</th>
                    <th className="text-right py-3 text-secondary">Kosten ca.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-100">
                    <td className="py-3">Einzelne Ziegel austauschen</td>
                    <td className="text-right py-3 font-bold">ab 150 €</td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="py-3">Notsicherung bei Sturmschaden</td>
                    <td className="text-right py-3 font-bold">ab 200 €</td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="py-3">Undichte Stelle abdichten</td>
                    <td className="text-right py-3 font-bold">ab 250 €</td>
                  </tr>
                  <tr>
                    <td className="py-3">Dachrinne reparieren</td>
                    <td className="text-right py-3 font-bold">ab 100 €</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-secondary text-white p-6 rounded-xl my-8">
              <h4 className="text-xl font-bold mb-3">Versicherungsfall? Wir helfen!</h4>
              <p className="text-gray-200 mb-4">
                Bei Sturmschäden übernimmt oft die Gebäudeversicherung die Kosten. 
                Wir dokumentieren den Schaden fachgerecht für Ihre Versicherung.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-xl" data-testid="button-emergency-call">
                <a href="/rueckruf" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Notfall-Rückruf anfordern
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FlachdachMuenchenContent() {
  return (
    <section className="py-12 bg-stone-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-secondary mb-6 text-center">
            Flachdach München – Abdichtung & Sanierung vom Meister
          </h2>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="lead text-lg mb-6">
              Ein <strong className="text-secondary">Flachdach in München</strong> muss besonderen Anforderungen standhalten: 
              Starkregen, Hagel, Schneelast und UV-Strahlung. Wir sorgen dafür, dass Ihr Flachdach 100% dicht bleibt.
            </p>

            <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">
              Flachdach-Abdichtung – Materialien im Vergleich
            </h3>

            <div className="bg-white p-6 rounded-xl border border-stone-200 my-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-stone-200">
                    <th className="text-left py-3 text-secondary">Material</th>
                    <th className="text-right py-3 text-secondary">Kosten/m²</th>
                    <th className="text-right py-3 text-secondary">Lebensdauer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-100">
                    <td className="py-3">Bitumenbahnen</td>
                    <td className="text-right py-3 font-bold">ab 35 €</td>
                    <td className="text-right py-3">20-25 Jahre</td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="py-3">EPDM-Folie</td>
                    <td className="text-right py-3 font-bold">ab 45 €</td>
                    <td className="text-right py-3">40+ Jahre</td>
                  </tr>
                  <tr>
                    <td className="py-3">Dachbegrünung (extensiv)</td>
                    <td className="text-right py-3 font-bold">ab 80 €</td>
                    <td className="text-right py-3">50+ Jahre</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-stone-200">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Verdoppelt die Lebensdauer der Abdichtung</span>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-stone-200">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Kühlt im Sommer um bis zu 8°C</span>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-stone-200">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Regenwasser-Retention bei Starkregen</span>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-stone-200">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Förderung in vielen Münchner Stadtteilen</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
