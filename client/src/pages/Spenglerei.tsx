import Navbar from "@/components/Navbar";
import AIBeraterSection from "@/components/AIBeraterSection";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, ShieldCheck, PenTool, CheckCircle2, Quote, Hammer, Award, Shield, Users } from "lucide-react";
import heroImage from "@assets/generated_images/copper_roof_gutter_detail.webp";
import detailImage from "@assets/generated_images/metal_standing_seam_roof_detail.webp";
import copperChimney from "@assets/generated_images/bogenhausen_chimney_new_copper.webp";
import oldChimney from "@assets/generated_images/bogenhausen_chimney_old_flashing.webp";
import newMetalRoof from "@assets/generated_images/new_metal_standing_seam_roof.webp";
import copperGutter from "@assets/generated_images/new_copper_chimney_flashing.webp";
import ImageGallery from "@/components/ImageGallery";
import LeadFunnel from "@/components/LeadFunnel";
import SEO, { BreadcrumbSchema, ServiceSchema, ProductServiceSchema, FAQPageSchema, LocalBusinessSchema } from "@/components/SEO";
import BackButton from "@/components/BackButton";
import { TextWithKeywordLinks } from "@/components/KeywordLink";
import { ServiceGeoLinks } from "@/components/GeoLinks";
import { SpenglereiMuenchenContent } from "@/components/SEOContent";
import { CostEscalationBanner, DecisionPressureBanner } from "@/components/UrgencyBanner";
import AIEnhancedFAQ from "@/components/AIEnhancedFAQ";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import CTACluster from "@/components/CTACluster";
import ProofStack from "@/components/ProofStack";
import ProcessSteps from "@/components/ProcessSteps";

export default function Spenglerei() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title="Dachrinne erneuern München | Kosten Kupfer & Zink 2025"
        description="Was kostet neue Dachrinne? Kupfer ab 45€/m, Zink ab 25€/m. ✓ Meister-Handwerk ✓ Eigene Werkstatt ✓ Maßanfertigung. Kostenlose Beratung ☎ 089 12621964"
        canonical="https://089dach.de/leistungen/spenglerei"
        keywords="was kostet dachrinne erneuern münchen, dachrinne kupfer oder zink was ist besser, dachrinne tropft was tun reparatur, spengler in meiner nähe münchen empfehlung, kamineinfassung undicht kosten, fallrohr verstopft reinigen lassen, dachrinne laubschutz nachrüsten, stehfalzdach kosten pro qm erfahrungen, metalldach lebensdauer vorteile, spengler obermenzing pasing laim schwabing, gaubenverkleidung blech kosten, dachrinne fachgerecht montieren lassen, dachrinne halbrund oder kastenform, aluminium dachrinne vorteile nachteile, dachrinne löten oder kleben, rinneneisen erneuern kosten, fallrohr an kanal anschließen, regenwasserableitung grundstück, schornsteinverkleidung edelstahl preis, dachrandabschluss blech kosten, wandanschluss dach abdichten blech, kehle dach blech erneuern, schneefanggitter montieren kosten, traufblech erneuern preis"
        aiSummary="089Dach GmbH Spenglerei in München-Obermenzing. Dachrinnen aus Kupfer (ab 45€/m), Zink (ab 25€/m) und Aluminium. Stehfalzdächer, Kamineinfassungen und Gaubenverkleidungen. Handgefertigt in eigener Werkstatt. Telefon: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Spenglerei", url: "/leistungen/spenglerei" }]} />
      <ServiceSchema 
        pageName="Spenglerarbeiten München"
        services={[
          { name: "Dachrinnen & Fallrohre", description: "Kupfer, Zink und Aluminium - handgefertigt in eigener Werkstatt" },
          { name: "Kamineinfassungen", description: "Maßgefertigte Verkleidungen für Schornsteine" },
          { name: "Stehfalzdach", description: "Hochwertige Metalldächer mit langer Lebensdauer" }
        ]}
      />
      <ProductServiceSchema 
        name="Spenglerarbeiten München"
        description="Dachrinnen aus Kupfer, Zink und Aluminium. Kamineinfassungen, Stehfalzdächer. Handgefertigt in eigener Werkstatt."
        priceFrom={25}
        priceTo={120}
        priceUnit="pro Laufmeter"
        category="Spenglerei"
      />
      <FAQPageSchema faqs={[
        { question: "Was kostet eine neue Dachrinne in München?", answer: "Zink-Dachrinne ab 25€/m, Kupfer ab 45€/m, Aluminium ab 20€/m jeweils inkl. Montage. Für ein Einfamilienhaus (ca. 30m Rinne) rechnen Sie mit 750-1.500€ je nach Material." },
        { question: "Kupfer oder Zink - welches Material ist besser für Dachrinnen?", answer: "Kupfer hält 80-100 Jahre, entwickelt edle Patina, kostet aber mehr. Zink hält 30-50 Jahre, ist günstiger und zeitlos. Beide sind wartungsfrei. Für Münchner Altbauten empfehlen wir oft Kupfer wegen der Optik." },
        { question: "Wie lange dauert ein Dachrinnen-Austausch?", answer: "Für ein Einfamilienhaus 1-2 Tage. Bei Kupfer-Sonderanfertigungen planen wir 3-5 Tage ein. Wir fertigen in unserer Werkstatt in München-Obermenzing maßgenau vor." },
        { question: "Kann man eine tropfende Dachrinne reparieren?", answer: "Kleine Löcher können wir mit Spezialkleber oder Löten reparieren (ab 80€). Bei durchgerosteten Rinnen oder undichten Verbindungen lohnt sich oft der Austausch. Wir prüfen kostenlos vor Ort." },
        { question: "Was kostet eine Kamineinfassung aus Kupfer?", answer: "Eine maßgefertigte Kupfer-Kamineinfassung kostet 800-2.000€ je nach Schornsteingröße. Die Investition lohnt sich: Kupfer hält 80+ Jahre und verhindert Wasserschäden zuverlässig." },
        { question: "Bieten Sie auch Stehfalzdächer in München an?", answer: "Ja! Stehfalzdächer aus Titanzink oder Kupfer kosten ab 120€/m² inkl. Montage. Sie sind ideal für flache Dachneigungen und moderne Architektur. Lebensdauer: 50-100 Jahre." },
        { question: "Wann sollte ich Dachrinnen erneuern lassen?", answer: "Bei sichtbarem Rost, häufigen Undichtigkeiten, durchhängenden Rinnen oder wenn das Wasser nicht mehr richtig abläuft. Nach 30-40 Jahren (Zink) bzw. 60-80 Jahren (Kupfer) ist ein Austausch sinnvoll." }
      ]} />
      <LocalBusinessSchema />
      <Navbar />
      <main id="main-content" role="main" tabIndex={-1}>
      <AIBeraterSection 
        pageName="Spenglerei"
        description="Fragen zu Dachrinnen, Kupferarbeiten oder Kamineinfassungen? Unser KI-Berater beantwortet Ihre Spenglerei-Fragen."
      />
      
      {/* Hero Section */}
      <section className="pt-6 pb-8 md:pt-10 md:pb-12 bg-secondary relative overflow-hidden min-h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Kupfer-Dachrinne Detail Spenglerarbeit - handgefertigte Rinnen München"
            className="w-full h-full object-cover"
            width={1792}
            height={1024}
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/50"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-6xl text-white">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Spenglerarbeiten München</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mt-4 mb-6">
              <strong>Spenglerei München</strong> – Dachrinnen & Blecharbeiten
            </h1>
            <p className="text-xl text-gray-200 max-w-xl mb-4">
              Wenn Metall auf Meisterhand trifft, entstehen Bauteile, die Generationen überdauern. Maßgefertigt in unserer eigenen Werkstatt.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <div className="bg-stone-100 py-2 border-b border-stone-200">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-2 md:gap-4 text-xs">
            <span className="flex items-center gap-1.5">
              <Award className="h-4 w-4 text-primary" />
              <span>Meister für Dach- und Spenglerei seit 1998</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-primary" />
              <span>10 Jahre Garantie</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="h-4 w-4 text-primary" />
              <span>100+ zufriedene Kunden</span>
            </span>
          </div>
        </div>
      </div>

      {/* Craftmanship Story */}
      <section className="py-4 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <Hammer className="h-10 w-10 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-heading font-bold text-center text-secondary mb-4">
                    <strong>Dachrinne Kupfer, Zink & Aluminium</strong> – 089Dach GmbH Qualität
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    In einer Zeit, in der vieles von der Stange kommt, halten wir an der Tradition fest: 
                    <strong className="text-secondary"> Jedes Bauteil wird von Hand gefertigt</strong> – genau 
                    passend für Ihr Objekt.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Unser Meister arbeitet seit über 30 Jahren mit Kupfer, Zink und Aluminium. Er kennt 
                    die Eigenschaften jedes Materials, weiß wie es sich im Laufe der Jahre verändert, 
                    und fertigt Bauteile, die nicht nur funktionieren – sondern auch schön altern.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BackButton />

      {/* Main Content */}
      <section className="py-4">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
            
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Spenglerhandwerk München</span>
              <h2 className="text-3xl font-heading font-bold text-secondary text-center mt-2 mb-6">
                <strong>Spengler München</strong> – 089Dach GmbH: Dachrinnen, Kamineinfassungen & Stehfalzdächer
              </h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Eine undichte Dachrinne sieht man nicht – bis der Schaden an der Fassade sichtbar wird. 
                  Dann ist es oft zu spät, und die Reparaturkosten vervielfachen sich. Gute Spenglerarbeit 
                  verhindert genau das.
                </p>
                <p className="mt-4">
                  Wir bei 089Dach verbinden <strong>traditionelles Handwerk mit modernster Technik</strong>. 
                  Jede Rinne, jede Kamineinfassung, jede Gaubenverkleidung wird millimetergenau gefertigt – 
                  damit das Wasser immer dorthin fließt, wo es hin soll: weg von Ihrem Haus.
                </p>
              </div>

              <div className="mt-10 space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl h-fit">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">Dachrinnen & Entwässerung</h3>
                    <p className="text-muted-foreground">
                      <TextWithKeywordLinks currentPath="/leistungen/spenglerei">
                        Die unsichtbaren Helden Ihres Hauses. Eine gut geplante Dachentwässerung schützt Fassade, Fundament und Keller. Wir bieten Kupfer, Titanzink und Aluminium – mit optionalem Laubschutz.
                      </TextWithKeywordLinks>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl h-fit">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">Kamin- & Gaubenverkleidung</h3>
                    <p className="text-muted-foreground">
                      <TextWithKeywordLinks currentPath="/leistungen/spenglerei">
                        Hier zeigt sich wahre Handwerkskunst. Komplexe Formen, präzise Anschlüsse – und eine Optik, die Ihr Haus aufwertet. Einmal gut gemacht, hält es ein Leben lang.
                      </TextWithKeywordLinks>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl h-fit">
                    <PenTool className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">Metalldächer (Stehfalz)</h3>
                    <p className="text-muted-foreground">
                      <TextWithKeywordLinks currentPath="/leistungen/spenglerei">
                        Die Königsklasse für architektonisch anspruchsvolle Projekte. Extrem langlebig, sturmsicher und absolut regenfest – auch bei flachen Neigungen.
                      </TextWithKeywordLinks>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={detailImage} 
                alt="Stehfalzdach Detail" 
                className="rounded-xl shadow-xl w-full object-cover aspect-[4/5]"
                width={1024}
                height={1280}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-xl shadow-lg max-w-sm hidden md:block">
                <h4 className="font-bold text-secondary text-lg mb-4">Unsere Materialien</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Kupfer – patiniert zeitlos schön</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Titanzink – modern & wartungsfrei</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Aluminium – leicht & farbvielfältig</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Customer Story */}
      <section className="py-4 bg-secondary/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-start gap-4">
              <Quote className="h-12 w-12 text-primary flex-shrink-0" />
              <div>
                <p className="text-xl text-secondary leading-relaxed italic mb-6">
                  "Unser Altbau in Bogenhausen hat einen wunderschönen Erker mit komplizierter Dachform. 
                  Drei Betriebe hatten abgesagt – zu aufwändig, zu schwierig. Der Meister von 089Dach 
                  hat sich die Sache angeschaut, Maß genommen und gesagt: 'Das kriegen wir hin.' 
                  Heute glänzt dort eine handgefertigte Kupferverkleidung, die jeder Besucher bewundert. 
                  Das ist kein Blech von der Stange – das ist Kunst."
                </p>
                <p className="font-bold text-secondary">Dr. Friedrich Weber, München-Bogenhausen</p>
                <p className="text-muted-foreground text-sm">Kupfer-Erkerverkleidung, handgefertigt 2021</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImageGallery
        title="Unsere Spenglerarbeiten"
        images={[
          { src: oldChimney, alt: "Alter Kamin mit undichter Einfassung", caption: "Vorher: Undichte Kamineinfassung" },
          { src: copperChimney, alt: "Neuer Kamin mit Kupfereinfassung", caption: "Nachher: Neue Kupfereinfassung" },
          { src: newMetalRoof, alt: "Neues Stehfalzdach aus Metall", caption: "Stehfalzdach aus Titanzink" },
          { src: copperGutter, alt: "Kupfer-Kaminanschluss", caption: "Handgefertigter Kaminanschluss" }
        ]}
        columns={2}
      />

      <SpenglereiMuenchenContent />

      <ProblemSolutionSection
        sectionTitle="Erkennen Sie Ihr Problem?"
        problemTitle="Warnsignale bei Spenglerarbeiten"
        solutionTitle="Unsere Lösung für Sie"
        problems={[
          { symptom: "Dachrinne tropft oder läuft über", risk: "Wasser schädigt Fassade, Fundament und kann in den Keller eindringen" },
          { symptom: "Rost an Fallrohren oder Rinnen", risk: "Durchrostung führt zu komplettem Versagen der Entwässerung" },
          { symptom: "Undichte Kamineinfassung", risk: "Wasserschäden im Mauerwerk und teure Folgereparaturen" },
          { symptom: "Veraltete Blechverkleidungen", risk: "Optische Beeinträchtigung und mangelnder Schutz vor Witterung" }
        ]}
        solutions={[
          { title: "Kostenlose Vor-Ort-Prüfung", description: "Wir begutachten Rinnen, Fallrohre und Anschlüsse vor Ort" },
          { title: "Handgefertigt in eigener Werkstatt", description: "Maßgenaue Bauteile aus Kupfer, Zink oder Aluminium" },
          { title: "Materialgarantie bis 80 Jahre", description: "Kupfer und Zink halten Jahrzehnte – wir geben Garantie" },
          { title: "Alles aus einer Hand", description: "Dachdecker und Spengler in einem Betrieb – kurze Wege" }
        ]}
        urgencyMessage="Eine undichte Rinne kostet wenig zu reparieren – die Folgeschäden an der Fassade aber Tausende Euro!"
      />

      <CTACluster 
        variant="primary" 
        title="Handwerkskunst für Ihr Dach" 
        subtitle="Eigene Werkstatt · Maßanfertigung · Jahrzehnte Haltbarkeit"
      />

      <AIEnhancedFAQ
        title="Häufige Fragen zu Spenglerarbeiten"
        faqs={[
          {
            question: "Was kostet eine neue Dachrinne in München?",
            shortAnswer: "Zink ab 25€/m, Kupfer ab 45€/m inklusive Montage.",
            details: "Zink-Dachrinne ab 25€/m, Kupfer ab 45€/m, Aluminium ab 20€/m jeweils inkl. Montage. Für ein Einfamilienhaus (ca. 30m Rinne) rechnen Sie mit 750-1.500€ je nach Material. Kupfer ist teurer, hält aber 80+ Jahre.",
            priceRange: "750–1.500€ für Einfamilienhaus",
            localReference: "In München-Obermenzing fertigen wir alle Rinnen in unserer eigenen Werkstatt.",
            nextStep: "Kostenloses Angebot anfordern →"
          },
          {
            question: "Kupfer oder Zink – welches Material ist besser für Dachrinnen?",
            shortAnswer: "Kupfer hält 80-100 Jahre, Zink 30-50 Jahre.",
            details: "Kupfer hält 80-100 Jahre, entwickelt edle Patina, kostet aber mehr. Zink hält 30-50 Jahre, ist günstiger und zeitlos. Beide sind wartungsfrei. Für Münchner Altbauten empfehlen wir oft Kupfer wegen der Optik und Langlebigkeit.",
            localReference: "Bei historischen Villen in Bogenhausen und Grünwald ist Kupfer erste Wahl.",
            nextStep: "Material-Beratung anfordern →"
          },
          {
            question: "Kann man eine tropfende Dachrinne reparieren?",
            shortAnswer: "Kleine Löcher ab 80€, bei Durchrostung lohnt Austausch.",
            details: "Kleine Löcher können wir mit Spezialkleber oder Löten reparieren (ab 80€). Bei durchgerosteten Rinnen oder undichten Verbindungen lohnt sich oft der Austausch. Wir prüfen kostenlos vor Ort und beraten Sie ehrlich.",
            priceRange: "Reparatur ab 80€, Austausch ab 25€/m",
            localReference: "In ganz München und Umgebung bieten wir kostenlose Rinnen-Checks an.",
            nextStep: "Kostenlose Prüfung anfordern →"
          },
          {
            question: "Was kostet eine Kamineinfassung aus Kupfer?",
            shortAnswer: "Maßgefertigt 800-2.000€ je nach Schornsteingröße.",
            details: "Eine maßgefertigte Kupfer-Kamineinfassung kostet 800-2.000€ je nach Schornsteingröße. Die Investition lohnt sich: Kupfer hält 80+ Jahre und verhindert Wasserschäden zuverlässig. Zink-Einfassungen sind günstiger (ab 400€).",
            priceRange: "400–2.000€",
            localReference: "In Münchner Altbauvierteln wie Haidhausen fertigen wir regelmäßig Kamineinfassungen.",
            nextStep: "Angebot für Kamineinfassung →"
          }
        ]}
      />

      <ProofStack title="Warum 089Dach für Ihre Spenglerarbeiten?" />

      <ProcessSteps 
        title="Ablauf Spenglerarbeiten: In 6 Schritten zur perfekten Rinne"
        subtitle="Planbar, transparent und stressfrei – von der ersten Beratung bis zur Garantie."
      />

      <ServiceGeoLinks currentService="Spenglerei" />
      
      <CostEscalationBanner />
      
      <LeadFunnel 
        headline="Spenglerei München gesucht?"
        subheadline="Präzise Metallarbeit für Ihr Dach."
        description="Ihre Spenglerei in München – Dachrinnen, Kamineinfassungen und Blechverkleidungen vom Meisterbetrieb. Handgefertigt in eigener Werkstatt."
      />
      
      <DecisionPressureBanner />
      
      <Contact 
        title="Dachrinne, Kamineinfassung oder Blecharbeiten?"
        description="Unser Spenglermeister berät Sie zu allen Metallarbeiten am Dach. Fordern Sie Ihr individuelles Angebot für Spenglerarbeiten an."
      />
      </main>
      <Footer />
    </div>
  );
}
