import Navbar from "@/components/Navbar";
import AIBeraterSection from "@/components/AIBeraterSection";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, Shield, Clock, Award, ArrowRight, Droplets, Leaf, Wrench, Calendar } from "lucide-react";
import LeadFunnel from "@/components/LeadFunnel";
import SEO, { BreadcrumbSchema, ProductServiceSchema, FAQPageSchema, LocalBusinessSchema } from "@/components/SEO";
import RelatedServices from "@/components/RelatedServices";
import ImageGallery from "@/components/ImageGallery";
import rinnenImg1 from "@assets/generated_images/copper_roof_gutter_detail.png";
import rinnenImg2 from "@assets/generated_images/bogenhausen_chimney_old_flashing.png";
import rinnenImg3 from "@assets/generated_images/bogenhausen_chimney_new_copper.png";
import rinnenImg4 from "@assets/generated_images/new_copper_chimney_flashing.png";

export default function Dachrinnenreinigung() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title="Dachrinne reinigen München | Festpreis ab 150€"
        description="Dachrinne verstopft? Profi-Reinigung zum Festpreis ab 150€. ✓ Laub entfernen ✓ Fallrohre spülen ✓ Meisterbetrieb. Jetzt Termin ☎ 089 12621964"
        canonical="https://089dach.de/leistungen/dachrinnenreinigung"
        keywords="dachrinne reinigen lassen kosten münchen, dachrinne verstopft fallrohr, dachrinnenreinigung preis einfamilienhaus, laub aus dachrinne entfernen, dachrinnenschutz nachrüsten, dachrinne läuft über was tun, fallrohr verstopft münchen, dachrinne reinigen herbst, moos in dachrinne entfernen, dachrinne stinkt ursache, vogelnest in dachrinne entfernen, dachrinne mit hochdruckreiniger, dachrinnenreinigung wie oft nötig, dachrinne winterfest machen, eiszapfen dachrinne gefährlich, laubfanggitter dachrinne preis, dachrinnenreinigung gerüst notwendig"
        aiSummary="089Dach GmbH reinigt Dachrinnen in München zum Festpreis ab 150€. Laub entfernen, Fallrohre spülen, Verstopfungen lösen. Schneller Service vom Meisterbetrieb. Telefon: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Leistungen", url: "/leistungen" }, { name: "Dachrinnenreinigung", url: "/leistungen/dachrinnenreinigung" }]} />
      <ProductServiceSchema 
        name="Dachrinnenreinigung München"
        description="Professionelle Dachrinnenreinigung zum Festpreis. Laub entfernen, Fallrohre spülen, Verstopfungen lösen."
        priceFrom={150}
        priceTo={350}
        category="Dachrinnenreinigung"
      />
      <FAQPageSchema faqs={[
        { question: "Was kostet Dachrinne reinigen lassen?", answer: "Unsere Dachrinnenreinigung kostet zum Festpreis ab 150€ für ein Einfamilienhaus. Der Preis hängt von der Rinnenmeterlänge und Verschmutzungsgrad ab." },
        { question: "Wie oft sollte man Dachrinnen reinigen lassen?", answer: "Wir empfehlen 1-2x jährlich: im Spätherbst nach dem Laubfall und im Frühjahr. Bei vielen Bäumen in der Nähe öfter." },
        { question: "Kann ich Dachrinne selbst reinigen?", answer: "Vom Boden aus mit Teleskopstange ja. Arbeiten auf der Leiter sind gefährlich und sollten Profis überlassen werden. Wir haben die Ausrüstung und Versicherung." },
        { question: "Was tun wenn die Dachrinne überläuft?", answer: "Meist ist eine Verstopfung im Fallrohr die Ursache. Wir spülen Fallrohre mit Hochdruck frei (ab 80€). Bei regelmäßigem Überlauf prüfen wir, ob die Rinne zu klein dimensioniert ist oder das Gefälle stimmt." },
        { question: "Helfen Laubschutzgitter für Dachrinnen?", answer: "Ja! Laubschutzgitter reduzieren die Reinigung auf 1x jährlich. Wir montieren Edelstahl-Gitter ab 15€/m - lohnt sich besonders bei Häusern mit vielen Bäumen in München-Bogenhausen, Grünwald oder Solln." },
        { question: "Was kostet ein Wartungsvertrag für Dachrinnen?", answer: "Unser Dachrinnen-Wartungsvertrag kostet ab 130€/Jahr für 1x jährliche Reinigung, ab 220€/Jahr für 2x jährliche Reinigung. Sie sparen 15% gegenüber Einzelaufträgen und bekommen bevorzugte Termine." },
        { question: "Reparieren Sie auch defekte Dachrinnen?", answer: "Ja! Kleine Löcher dichten wir ab 50€ ab. Undichte Verbindungen ab 80€. Kompletter Rinnentausch ab 25€/m (Zink) bzw. 45€/m (Kupfer). Wir prüfen bei der Reinigung kostenlos den Zustand." }
      ]} />
      <LocalBusinessSchema />
      <Navbar />
      <AIBeraterSection />
      
      <section className="pt-6 pb-8 md:pt-10 md:pb-12 bg-secondary relative overflow-hidden min-h-[35vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/80"></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl text-white">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <Droplets className="h-5 w-5 text-primary" />
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Profi-Reinigung</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 md:mb-6">
              Dachrinnenreinigung München
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-xl mb-4 md:mb-6">
              Professionelle Reinigung von Dachrinnen und Fallrohren – schnell, sauber, zum Festpreis.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/rueckruf">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" data-testid="button-anrufen-hero">
                  <Phone className="h-5 w-5 mr-2" /> Rückruf anfordern
                </Button>
              </a>
              <a href="/kontakt">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary" data-testid="button-contact-hero">
                  Kontakt aufnehmen
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-stone-100 py-2 md:py-3 border-b border-stone-200">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-xs md:text-sm">
            <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-primary" />Festpreis</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" />Schneller Service</span>
            <span className="flex items-center gap-2"><Award className="h-4 w-4 text-primary" />Meisterbetrieb</span>
          </div>
        </div>
      </div>

      <section className="py-3 md:py-4">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-4">Warum Dachrinnenreinigung wichtig ist</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Verstopfte Dachrinnen sind mehr als nur ein optisches Problem. Wenn Laub, Moos und Schmutz 
                  den Wasserabfluss blockieren, kann Regenwasser überlaufen und an der Fassade hinunterlaufen. 
                  Die Folge: Feuchtigkeitsschäden, Schimmel und im Winter Frostschäden.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Wir empfehlen eine Reinigung mindestens einmal jährlich – bei Bäumen in der Nähe auch zweimal 
                  (Frühjahr und Herbst).
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: Leaf, title: "Laub entfernen", desc: "Gründliche Entfernung von Laub und Ästen" },
                  { icon: Droplets, title: "Verstopfungen lösen", desc: "Fallrohre und Abläufe freimachen" },
                  { icon: Wrench, title: "Reparaturen", desc: "Kleine Schäden sofort beheben" },
                  { icon: Calendar, title: "Wartungsvertrag", desc: "Regelmäßige Reinigung zum Festpreis" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                    <item.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-secondary mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                <h3 className="text-xl font-heading font-bold text-secondary mb-4">Unsere Leistungen</h3>
                <ul className="space-y-3">
                  {[
                    "Reinigung aller Dachrinnen von Hand",
                    "Spülung der Fallrohre mit Wasserdruck",
                    "Entfernung von Laub, Moos und Schmutz",
                    "Sichtkontrolle auf Schäden",
                    "Kleine Reparaturen (Verbindungen, Dichtungen)",
                    "Laubschutzgitter auf Wunsch",
                    "Entsorgung des Reinigungsmaterials"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-secondary/5 rounded-xl p-6">
                <h3 className="text-xl font-heading font-bold text-secondary mb-4">Preise (Festpreis)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { leistung: "Einfamilienhaus (bis 150m²)", preis: "ab 149 €" },
                    { leistung: "Doppelhaushälfte", preis: "ab 99 €" },
                    { leistung: "Reihenhaus", preis: "ab 79 €" },
                    { leistung: "Laubschutzgitter (pro Meter)", preis: "ab 15 €" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-white rounded-lg p-3">
                      <span className="text-muted-foreground">{item.leistung}</span>
                      <span className="font-bold text-primary">{item.preis}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">* Preise inkl. Anfahrt im Münchner Raum</p>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-xl font-heading font-bold text-secondary mb-4 flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-green-600" />Wartungsvertrag
                </h3>
                <p className="text-muted-foreground mb-4">
                  Mit unserem Wartungsvertrag kümmern wir uns automatisch um Ihre Dachrinnen – 
                  Sie müssen an nichts denken und sparen 15% gegenüber Einzelaufträgen.
                </p>
                <ul className="space-y-2">
                  {["1x oder 2x jährliche Reinigung", "15% Rabatt", "Erinnerung und Terminplanung", "Bevorzugte Behandlung"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-primary text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Jetzt Termin buchen</h3>
                <p className="text-white/90 mb-6">Schnelle Reinigung zum Festpreis – ohne versteckte Kosten.</p>
                <a href="/beratung" className="block">
                  <Button size="lg" variant="secondary" className="w-full" data-testid="button-beratung-sidebar">
                    Termin vereinbaren <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </a>
                <a href="/rueckruf" className="block mt-3">
                  <Button size="lg" variant="outline" className="w-full border-white text-white hover:bg-white hover:text-primary" data-testid="button-anrufen-sidebar">
                    <Phone className="h-4 w-4 mr-2" /> Rückruf anfordern
                  </Button>
                </a>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-bold text-secondary mb-4">Warum 089Dach?</h4>
                <ul className="space-y-3">
                  {["Festpreis-Garantie", "Schnelle Termine", "Professionelle Ausrüstung", "Entsorgung inklusive", "Meisterbetrieb"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImageGallery 
        title="Dachrinnen & Spenglerarbeiten"
        columns={2}
        images={[
          { src: rinnenImg1, alt: "Kupferdachrinne professionell gereinigt", caption: "Saubere Kupferdachrinne" },
          { src: rinnenImg2, alt: "Alte Dachanschlüsse vor Reinigung", caption: "Vorher: Verschmutzte Anschlüsse" },
          { src: rinnenImg3, alt: "Neue Kupferanschlüsse nach Reinigung", caption: "Nachher: Gepflegte Kupferarbeiten" },
          { src: rinnenImg4, alt: "Professionelle Kupferanschlüsse am Schornstein", caption: "Hochwertige Spenglerarbeit" }
        ]}
      />
      <LeadFunnel />
      <RelatedServices currentPage="dachrinnenreinigung" relatedIds={["wartung", "spenglerei", "reparaturservice", "dachsanierung"]} />
      <Contact />
      <Footer />
    </div>
  );
}
