import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import LeadFunnel from "@/components/LeadFunnel";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2, AlertTriangle, ThermometerSun, Droplets, Leaf, ArrowRight, BookOpen, Quote, Shield, Users, Award, Phone, HelpCircle, Lightbulb } from "lucide-react";
import { Link } from "wouter";
import SEO, { BreadcrumbSchema, CollectionPageSchema, FAQPageSchema } from "@/components/SEO";
import RelatedServices from "@/components/RelatedServices";
import gegArticleImage from "@assets/generated_images/homeowner_roof_consultation_scene.png";
import ratgeberHeroImage from "@assets/generated_images/roofing_expert_with_checklist.png";

export default function Ratgeber() {
  const guides = [
    {
      icon: AlertTriangle,
      title: "Dachcheck: Wann ist eine Sanierung wirklich nötig?",
      problem: "Sie liegen nachts wach, wenn der Sturm ums Haus pfeift. Bei jedem Regen schauen Sie nervös zur Decke. Und die Angst vor einer teuren Überraschung wächst.",
      solution: "Erfahren Sie, wie Sie Schäden frühzeitig erkennen – bevor aus einem kleinen Problem ein großer Wasserschaden wird. Mit unserer Experten-Checkliste prüfen Sie Ihr Dach selbst.",
      story: "Herr Meier aus Pasing entdeckte einen kleinen Riss rechtzeitig. Das bewahrte ihn vor einem 15.000€ Wasserschaden. Heute sagt er: 'Hätte ich nur früher hingeschaut.'",
      takeaway: "15 Minuten Dachcheck können Ihnen 15.000€ sparen.",
      category: "Wartung",
      readTime: "5 Min",
      href: "/ratgeber/leckortung"
    },
    {
      icon: ThermometerSun,
      title: "Heizkosten explodieren? So stoppt Ihr Dach den Wärmeverlust",
      problem: "Sie heizen und heizen – aber richtig warm wird es nie. Die Heizrechnung wird jedes Jahr höher. Und Sie fragen sich: Wo geht die ganze Wärme eigentlich hin?",
      solution: "Bis zu 30% Ihrer Heizwärme entweicht durchs Dach. Mit moderner Dämmung stoppen Sie den Wärmeverlust – und der Staat bezahlt bis zu 40% der Kosten.",
      story: "Familie Schmidt aus Schwabing konnte es kaum glauben: 2.400€ weniger Heizkosten pro Jahr. Und 40% Förderung für die Dämmung gab's obendrauf.",
      takeaway: "Jeder Euro in Dämmung spart Ihnen 3 Euro Heizkosten.",
      category: "Energie sparen",
      readTime: "8 Min",
      href: "/ratgeber/daemmung"
    },
    {
      icon: Droplets,
      title: "Sturm, Hagel, Wasserschaden – Was tun, wenn's passiert ist?",
      problem: "Der Sturm hat Ziegel vom Dach gerissen. Wasser tropft von der Decke. Die Panik steigt. Was sollen Sie jetzt bloß tun? Wen rufen Sie an? Was zahlt die Versicherung?",
      solution: "Atmen Sie durch. Wir zeigen Ihnen Schritt für Schritt, was jetzt zu tun ist: Erste Sicherung, Versicherungsmeldung, Reparaturablauf. Alles verständlich erklärt.",
      story: "Nach Sturm Niklas: Familie Huber in Sendling rief um 22 Uhr an. Um Mitternacht war die Notsicherung fertig. 'Die haben uns in der schlimmsten Nacht nicht allein gelassen.'",
      takeaway: "Im Notfall sind wir in 2 Stunden bei Ihnen – auch nachts.",
      category: "Notfall",
      readTime: "3 Min",
      href: "/ratgeber/sturmschaden"
    },
    {
      icon: Leaf,
      title: "Gründach: Die Lösung für Hitze, Starkregen und steigende Kosten",
      problem: "Im Sommer wird's unterm Dach unerträglich heiß. Bei Starkregen läuft der Keller voll. Und die Stadtwerke erhöhen die Abwassergebühren. Gibt es überhaupt eine Lösung?",
      solution: "Ein Gründach kühlt Ihr Haus um bis zu 8°C, puffert Regenwasser und verdoppelt die Lebensdauer Ihrer Abdichtung. Plus: In vielen Gemeinden gibt's Förderung.",
      story: "Das Architekturbüro Maier in Bogenhausen: 'Wir haben keine Klimaanlage mehr. Das Gründach macht das alleine. Unsere Stromrechnung hat sich halbiert.'",
      takeaway: "Ein Gründach zahlt sich nach 7 Jahren von selbst zurück.",
      category: "Nachhaltigkeit",
      readTime: "6 Min",
      href: "/ratgeber/daemmung"
    },
    {
      icon: CheckCircle2,
      title: "Ziegel, Schiefer oder Metall? So finden Sie das richtige Material",
      problem: "Die Auswahl erschlägt Sie: Tonziegel, Betonstein, Schiefer, Metall... Jeder Dachdecker empfiehlt was anderes. Woher wissen Sie, was wirklich zu Ihrem Haus passt?",
      solution: "Wir erklären ehrlich die Vor- und Nachteile jedes Materials – Lebensdauer, Kosten, Optik. Ohne Verkaufsdruck. Damit Sie die richtige Entscheidung treffen.",
      story: "Dr. Bauer hatte eine denkmalgeschützte Villa. Drei Dachdecker sagten 'geht nicht'. Wir fanden die perfekte Lösung: Originalgetreue Schieferdeckung, die 80 Jahre hält.",
      takeaway: "Das richtige Material hält 50 Jahre. Das falsche macht nach 20 Jahren Probleme.",
      category: "Materialkunde",
      readTime: "7 Min",
      href: "/ratgeber/materialien"
    },
    {
      icon: HelpCircle,
      title: "Förderung beantragen ohne Stress – So klappt's garantiert",
      problem: "Sie haben gehört, dass es Förderung gibt. Aber die Anträge sind kompliziert, die Fristen kurz, und wenn Sie einen Fehler machen, bekommen Sie nichts. Frustrierend.",
      solution: "Wir führen Sie durch den Förderdschungel: Welche Programme für Sie passen, wie Sie den Antrag richtig stellen, und welche Fehler Sie unbedingt vermeiden müssen.",
      story: "Frau Weber aus Haidhausen dachte, sie bekommt keine Förderung. Wir haben 18.000€ für sie rausgeholt. 'Ohne 089Dach hätte ich das Geld auf dem Tisch liegen lassen.'",
      takeaway: "Im Schnitt holen wir 12.000€ Förderung für unsere Kunden.",
      category: "Förderung",
      readTime: "10 Min",
      href: "/ratgeber/foerderung"
    },
    {
      icon: Lightbulb,
      title: "Was kostet eine Dachsanierung 2025?",
      problem: "Sie haben keine Ahnung, was eine Dachsanierung kostet. Sie haben Angst vor versteckten Kosten und bösen Überraschungen.",
      solution: "Transparente Preisübersicht: Was kostet Steildach, Flachdach, Dämmung? Echte Beispiele aus München. Plus Spartipps.",
      story: "Familie Müller aus Pasing bekam drei Angebote – alle völlig unterschiedlich. Mit unserem Ratgeber konnten sie endlich vergleichen.",
      takeaway: "Mit Förderung sparen Sie bis zu 20% der Kosten.",
      category: "Kosten",
      readTime: "6 Min",
      href: "/ratgeber/kosten"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Dach Ratgeber München | Tipps Dämmung Förderung Kosten 2025"
        description="Wann lohnt sich Dachsanierung? Welche Förderung gibt es 2025? Wie viel spart Dämmung? Experten-Tipps vom Meisterbetrieb. Jetzt informieren!"
        canonical="https://089dach.de/ratgeber"
        keywords="wann lohnt sich dachsanierung, welche förderung dach 2025, wie viel spart dachdämmung, dach checkliste hausbesitzer, dach probleme erkennen, heizkosten sparen dach, gründach vorteile nachteile, dachmaterial vergleich"
        aiSummary="089Dach GmbH Ratgeber: Expertenwissen zu Dachsanierung, Dämmung, Leckortung und Förderungen. Tipps vom Meisterbetrieb aus 25 Jahren Erfahrung in München. Kostenlose Beratung. Telefon: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Tipps & Tricks", url: "/ratgeber" }]} />
      <CollectionPageSchema 
        title="Dachwissen München - Ratgeber für Eigentümer"
        description="Expertenwissen zu Dachsanierung, Wartung und Förderungen speziell für München und Oberbayern"
        items={guides.map(g => ({ title: g.title, description: g.solution, category: g.category }))}
      />
      <FAQPageSchema faqs={[
        { question: "Wann sollte ich mein Dach sanieren lassen?", answer: "Wenn Ziegel brüchig sind, Moos stark wächst, es reinregnet oder Ihr Dach älter als 40 Jahre ist. Eine kostenlose Inspektion schafft Klarheit." },
        { question: "Wie viel kann ich mit Dämmung sparen?", answer: "Eine gute Dachdämmung spart bis zu 30% Heizkosten. Bei durchschnittlichen Häusern sind das 500-1.500€ pro Jahr." },
        { question: "Welche Förderung gibt es 2025?", answer: "KfW und BAFA fördern energetische Dachsanierung mit bis zu 20% Zuschuss. Plus 5% Bonus mit Sanierungsfahrplan (iSFP)." }
      ]} />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-6 pb-8 md:pt-10 md:pb-12 relative overflow-hidden min-h-[50vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={ratgeberHeroImage}
            alt="Dachexperte mit Checkliste"
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
            <span className="text-primary font-bold tracking-wider uppercase text-sm">089Dach Expertenwissen</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mt-4 mb-4 md:mb-6">
              Endlich verstehen, was Ihr Dach wirklich braucht
            </h1>
            
            {/* Problem-Agitation */}
            <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl border-l-4 border-primary mb-6 md:mb-8">
              <p className="text-base md:text-lg text-white font-medium mb-3">
                Kennen Sie das Gefühl?
              </p>
              <p className="text-gray-200 leading-relaxed mb-4">
                Sie googeln „Dachsanierung München" und finden tausend widersprüchliche Meinungen. 
                Ein Dachdecker sagt teuer sanieren, der andere sagt abwarten. Im Forum schreiben 
                Leute Horror-Geschichten. Und am Ende wissen Sie weniger als vorher.
              </p>
              <p className="text-white font-medium">
                <strong>Wem können Sie noch vertrauen?</strong>
              </p>
            </div>
            
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6 md:mb-8">
              Uns. Weil wir Ihnen hier unser komplettes Wissen schenken – aus über 25 Jahren 
              Erfahrung auf Münchner Dächern. <strong className="text-white">Ehrlich. Verständlich. Ohne Verkaufsdruck.</strong> 
              Damit Sie die richtigen Entscheidungen treffen – egal ob mit uns oder jemand anderem.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-xl" data-testid="button-hero-call">
                <a href="/beratung">
                  <Phone className="mr-2 h-5 w-5" />
                  Rückruf anfordern
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-secondary font-bold rounded-xl" data-testid="button-hero-articles">
                <a href="#artikel">Alle Artikel durchstöbern</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <BackButton />
      
      {/* Trust Badges */}
      <section className="py-3 md:py-6 border-b border-border">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span><strong className="text-secondary">100+</strong> Hausbesitzer beraten</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              <span><strong className="text-secondary">Meister für Dach- und Spenglerei</strong> seit 1998</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span><strong className="text-secondary">100%</strong> unabhängige Beratung</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-4 md:py-6">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="bg-secondary text-white rounded-xl overflow-hidden shadow-xl grid md:grid-cols-2">
            <div className="p-6 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-primary font-medium mb-4">
                <Lightbulb className="h-4 w-4" />
                <span>Das beschäftigt gerade alle Hausbesitzer</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                GEG 2024: Was bedeutet das neue Gesetz für Ihr Dach?
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                „Muss ich jetzt dämmen?" „Wird mein Haus wertlos?" „Bekomme ich noch Förderung?" 
              </p>
              <p className="text-white mb-6 leading-relaxed">
                Die Verunsicherung ist riesig. Viele Hausbesitzer schieben die Entscheidung vor sich her – 
                aus Angst, etwas falsch zu machen. <strong>Dabei ist die Lage oft viel entspannter als gedacht.</strong>
              </p>
              <p className="text-gray-300 mb-8">
                Wir erklären einfach und ehrlich, was wirklich auf Sie zukommt – und was nicht.
              </p>
              <Button className="w-fit bg-primary hover:bg-primary/90 text-white font-bold rounded-xl" data-testid="button-read-geg-article">
                Jetzt Klarheit bekommen <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="bg-gray-800 min-h-[300px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-transparent z-10"></div>
              <img 
                src={gegArticleImage}
                alt="Hausbesitzer bei Dachberatung" 
                className="absolute inset-0 w-full h-full object-cover opacity-80"
                width={1792}
                height={1024}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expert Quote */}
      <section className="py-4 md:py-6 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto text-center">
            <Quote className="h-10 w-10 md:h-12 md:w-12 text-primary/30 mx-auto mb-4 md:mb-6" />
            <blockquote className="text-xl md:text-2xl font-heading text-secondary italic mb-4 md:mb-6 leading-relaxed">
              „Die meisten Hausbesitzer haben keine Ahnung, was ihr Dach braucht – und das ist 
              nicht ihre Schuld. Aber genau deshalb werden sie oft über den Tisch gezogen. 
              Wir wollen, dass Sie verstehen, wofür Sie bezahlen."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-lg">
                FB
              </div>
              <div className="text-left">
                <p className="font-bold text-secondary">Falko Georg Blöckinger</p>
                <p className="text-sm text-muted-foreground">Dachdecker- und Spenglermeister, Geschäftsführer 089Dach GmbH</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Guides */}
      <section id="artikel" className="py-4 md:py-8">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="max-w-4xl mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-4">
              Welches Problem beschäftigt Sie gerade?
            </h2>
            <p className="text-muted-foreground text-lg">
              Jeder Artikel basiert auf echten Fragen echter Hausbesitzer. Klicken Sie auf das Thema, 
              das Sie gerade am meisten beschäftigt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border flex flex-col overflow-hidden" data-testid={`card-guide-${index}`}>
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary">
                      <guide.icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground bg-gray-100 px-3 py-1 rounded-full">
                      {guide.readTime} Lesezeit
                    </span>
                  </div>
                  <div className="text-sm font-medium text-primary mb-2">{guide.category}</div>
                  <CardTitle className="text-xl font-heading font-bold text-secondary group-hover:text-primary transition-colors leading-tight">
                    {guide.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col pt-0">
                  {/* Das Problem */}
                  <div className="mb-4">
                    <p className="text-sm font-medium text-secondary mb-1">Das Problem:</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {guide.problem}
                    </p>
                  </div>
                  
                  {/* Die Lösung */}
                  <div className="mb-4">
                    <p className="text-sm font-medium text-secondary mb-1">Die Lösung:</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {guide.solution}
                    </p>
                  </div>
                  
                  {/* Erfolgsgeschichte */}
                  <div className="bg-gray-50 p-4 rounded-xl mb-4 border-l-3 border-primary">
                    <p className="text-sm text-secondary italic leading-relaxed">
                      „{guide.story}"
                    </p>
                  </div>
                  
                  {/* Takeaway */}
                  <div className="bg-primary/5 p-3 rounded-xl mb-6">
                    <p className="text-sm font-bold text-primary">
                      💡 {guide.takeaway}
                    </p>
                  </div>
                  
                  <div className="mt-auto">
                    <Button variant="default" className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold rounded-xl" asChild data-testid={`button-read-guide-${index}`}>
                      <Link href={guide.href}>
                        Artikel lesen <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-4 md:py-8 bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-4 md:mb-6">
            Ihre Frage ist hier nicht dabei?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-4 max-w-4xl mx-auto">
            Kein Problem. Rufen Sie uns einfach an. Wir nehmen uns Zeit für Ihre Fragen – 
            auch wenn Sie noch gar nicht wissen, ob Sie überhaupt etwas machen wollen.
          </p>
          <p className="text-gray-400 mb-6 md:mb-8 max-w-3xl mx-auto">
            Keine Verkaufsgespräche. Keine Überrumpelung. Nur ehrliche Antworten von echten Handwerkern.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-xl text-lg px-8" data-testid="button-cta-call">
              <a href="/beratung">
                <Phone className="mr-2 h-5 w-5" />
                Rückruf anfordern
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-secondary font-bold rounded-xl text-lg px-8" data-testid="button-cta-contact">
              <Link href="/#contact">Nachricht schreiben</Link>
            </Button>
          </div>
        </div>
      </section>

      <LeadFunnel />
      <RelatedServices 
        currentPage="ratgeber" 
        relatedIds={["faq", "referenzen", "dachsanierung", "wartung"]}
      />
      <Contact 
        title="Noch Fragen zu Ihrem Dachprojekt?"
        description="Unser Ratgeber-Team beantwortet Ihre Fragen rund um Dach, Dämmung und Förderung – kostenlos und unverbindlich."
      />
      <Footer />
    </div>
  );
}
