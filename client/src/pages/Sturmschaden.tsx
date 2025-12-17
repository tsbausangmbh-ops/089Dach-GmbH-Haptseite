import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, Shield, Clock, AlertTriangle, ArrowRight, CloudRain, Wind, Zap, FileText } from "lucide-react";
import LeadFunnel from "@/components/LeadFunnel";
import SEO, { BreadcrumbSchema } from "@/components/SEO";
import RelatedServices from "@/components/RelatedServices";

export default function Sturmschaden() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title={`Sturmschaden Dach München | Soforthilfe 24/7 ⭐ 4.9/5`}
        description={`Sturmschaden am Dach? Soforthilfe in München ✓ 24/7 Notdienst ✓ Versicherungsabwicklung ✓ Schnelle Reparatur. Tel: 089 12621964`}
        canonical={`https://089dach.de/leistungen/sturmschaden`}
        keywords={`sturmschaden dach münchen, dach sturmschaden reparatur, notdienst dachdecker münchen, hagelschaden dach, unwetterschaden dach`}
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Leistungen", url: "/leistungen" }, { name: "Sturmschaden", url: "/leistungen/sturmschaden" }]} />
      <Navbar />
      
      <section className="pt-6 pb-8 md:pt-10 md:pb-12 bg-secondary relative overflow-hidden min-h-[35vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/80"></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl text-white">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <AlertTriangle className="h-5 w-5 text-primary" />
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Soforthilfe bei Sturmschäden</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 md:mb-6">
              Sturmschaden Dach München
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-xl mb-4 md:mb-6">
              Schnelle Hilfe nach Sturm, Hagel oder Unwetter – 24/7 für Sie erreichbar.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/rueckruf">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" data-testid="button-anrufen-hero">
                  <Phone className="h-5 w-5 mr-2" /> Sofort-Rückruf
                </Button>
              </a>
              <a href="https://wa.me/498912621964" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary" data-testid="button-whatsapp-hero">
                  WhatsApp Notfall
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-red-50 py-3 border-b border-red-200">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-xs md:text-sm text-red-800">
            <span className="flex items-center gap-2"><Clock className="h-4 w-4" />24/7 Notdienst</span>
            <span className="flex items-center gap-2"><Zap className="h-4 w-4" />Schnelle Reaktion</span>
            <span className="flex items-center gap-2"><FileText className="h-4 w-4" />Versicherungsabwicklung</span>
          </div>
        </div>
      </div>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-4">Soforthilfe bei Sturmschäden</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Ein Sturm hat Ihr Dach beschädigt? Handeln Sie schnell! Unser Notdienst ist rund um die Uhr 
                  erreichbar. Wir sichern Ihr Dach sofort ab, verhindern Folgeschäden und kümmern uns um 
                  die professionelle Reparatur.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Wir unterstützen Sie auch bei der Versicherungsabwicklung – von der Schadensdokumentation 
                  bis zur Kommunikation mit Ihrer Versicherung.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: Wind, title: "Sturmschaden", desc: "Abgedeckte Ziegel, lose Dachteile" },
                  { icon: CloudRain, title: "Wasserschaden", desc: "Undichtes Dach, Wassereinbruch" },
                  { icon: Zap, title: "Blitzschaden", desc: "Beschädigte Dachkonstruktion" },
                  { icon: AlertTriangle, title: "Hagelschaden", desc: "Beschädigte Eindeckung" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                    <item.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-secondary mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                <h3 className="text-xl font-heading font-bold text-secondary mb-4">Unser Vorgehen bei Sturmschäden</h3>
                <ol className="space-y-4">
                  {[
                    { schritt: "1", titel: "Sofort-Absicherung", desc: "Wir sichern Ihr Dach mit Planen ab, um weitere Schäden zu verhindern." },
                    { schritt: "2", titel: "Schadensdokumentation", desc: "Professionelle Dokumentation für Ihre Versicherung mit Fotos und Bericht." },
                    { schritt: "3", titel: "Kostenvoranschlag", desc: "Detaillierter Kostenvoranschlag für die Versicherung." },
                    { schritt: "4", titel: "Reparatur", desc: "Fachgerechte Reparatur durch unsere Meister-Dachdecker." },
                    { schritt: "5", titel: "Abrechnung", desc: "Direkte Abrechnung mit Ihrer Versicherung möglich." }
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                        {item.schritt}
                      </span>
                      <div>
                        <h4 className="font-bold text-secondary">{item.titel}</h4>
                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-secondary/5 rounded-xl p-6">
                <h3 className="text-xl font-heading font-bold text-secondary mb-4">Typische Sturmschäden</h3>
                <ul className="space-y-3">
                  {[
                    "Abgedeckte oder verschobene Dachziegel",
                    "Beschädigte Dachrinnen und Fallrohre",
                    "Undichte Stellen und Wassereinbruch",
                    "Beschädigte Dachfenster und Lichtkuppeln",
                    "Herabgefallene Schornsteinabdeckungen",
                    "Beschädigte Dachgauben"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-red-600 text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Notfall? Jetzt handeln!</h3>
                <p className="text-white/90 mb-6">Wir sind 24/7 für Sie erreichbar. Schnelle Hilfe bei Sturmschäden.</p>
                <a href="/rueckruf" className="block">
                  <Button size="lg" variant="secondary" className="w-full" data-testid="button-notfall-sidebar">
                    Sofort-Rückruf <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </a>
                <a href="https://wa.me/498912621964" className="block mt-3" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="w-full border-white text-white hover:bg-white hover:text-red-600" data-testid="button-whatsapp-sidebar">
                    <Phone className="h-4 w-4 mr-2" /> WhatsApp Notfall
                  </Button>
                </a>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-bold text-secondary mb-4">Versicherungsabwicklung</h4>
                <ul className="space-y-3">
                  {[
                    "Schadensdokumentation",
                    "Kostenvoranschlag für Versicherung",
                    "Kommunikation mit Sachverständigen",
                    "Direkte Abrechnung möglich"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" />{item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h4 className="font-bold text-secondary mb-4">Warum 089Dach?</h4>
                <ul className="space-y-3">
                  {["24/7 Notdienst", "Schnelle Reaktionszeit", "10 Jahre Garantie", "Versicherungs-Experten", "Meisterbetrieb"].map((item, idx) => (
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

      <LeadFunnel />
      <RelatedServices currentPage="sturmschaden" relatedIds={["reparaturservice", "dachsanierung", "notdienst", "wartung"]} />
      <Contact />
      <Footer />
    </div>
  );
}
