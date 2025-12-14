import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import LeadFunnel from "@/components/LeadFunnel";
import { ArrowUpRight, Clock, Euro, CheckCircle2, Phone, Shield, Users, Award } from "lucide-react";
import SEO, { BreadcrumbSchema } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

import img1 from "@assets/generated_images/realistic_anthracite_roof_tiles_with_slight_weathering.png";
import img3 from "@assets/generated_images/flat_roof_bitumen_detail_with_texture.png";
import img4 from "@assets/generated_images/roof_window_installation_with_realistic_roof_texture.png";
import img5 from "@assets/generated_images/historic_biberschwanz_roof_with_patina.png";
import img6 from "@assets/generated_images/flat_green_roof_with_natural_variations.png";
import img7 from "@assets/generated_images/slate_roof_with_copper_details_and_patina.png";
import heroImage from "@assets/generated_images/completed_roof_showcase_reference.png";

import before1 from "@assets/generated_images/damaged_old_roof_before_renovation.png";
import before2 from "@assets/generated_images/historic_roof_needing_restoration.png";
import before3 from "@assets/generated_images/damaged_commercial_flat_roof.png";
import before4 from "@assets/generated_images/dark_attic_before_window_installation.png";
import before5 from "@assets/generated_images/villa_slate_roof_before_renovation.png";
import before6 from "@assets/generated_images/office_flat_roof_with_leaks.png";

import before7 from "@assets/generated_images/damaged_metal_roof_before_renovation.png";
import img8 from "@assets/generated_images/new_metal_standing_seam_roof.png";
import before8 from "@assets/generated_images/damaged_red_tile_roof_before.png";
import img9 from "@assets/generated_images/restored_red_tile_roof_after.png";
import before9 from "@assets/generated_images/damaged_dormer_window_before.png";
import img10 from "@assets/generated_images/renovated_dormer_window_after.png";
import before10 from "@assets/generated_images/damaged_garage_flat_roof.png";
import img11 from "@assets/generated_images/new_epdm_flat_roof_garage.png";
import before11 from "@assets/generated_images/damaged_chimney_flashing_before.png";
import img12 from "@assets/generated_images/new_copper_chimney_flashing.png";
import before12 from "@assets/generated_images/old_solar_panel_mounting_damage.png";
import img13 from "@assets/generated_images/new_solar_panel_installation.png";

export default function Referenzen() {
  const projects = [
    {
      before: before1,
      after: img1,
      title: "Einfamilienhaus Obermenzing",
      category: "Neubau / Steildach",
      problem: "Das 40 Jahre alte Dach war undicht, die Ziegel brüchig, die Dämmung veraltet.",
      solution: "Komplette Neueindeckung mit Anthrazit-Tondachziegeln und Aufsparrendämmung.",
      result: "Modernes Aussehen, 35% weniger Heizkosten, 10 Jahre Garantie auf die Ausführung.",
      duration: "12 Arbeitstage",
      quote: "Unsere Nachbarn fragen, ob wir ein neues Haus gebaut haben!"
    },
    {
      before: before2,
      after: img5,
      title: "Altbau Sanierung Haidhausen",
      category: "Sanierung / Denkmalschutz",
      problem: "Historisches Gebäude unter Denkmalschutz mit maroder Dachsubstanz.",
      solution: "Behutsame Sanierung mit originalen Biberschwanz-Ziegeln, Abstimmung mit Denkmalamt.",
      result: "Erhalt des historischen Charakters bei modernem Wetterschutz.",
      duration: "18 Arbeitstage",
      quote: "Der Charme des Hauses wurde bewahrt – nur jetzt ohne Wasserflecken."
    },
    {
      before: before3,
      after: img6,
      title: "Gewerbepark Nord",
      category: "Flachdach / Begrünung",
      problem: "Undichte Flachdächer, hohe Hitzeentwicklung im Sommer, schlechtes Mikroklima.",
      solution: "Neue Abdichtung mit extensiver Dachbegrünung auf 2.500m².",
      result: "Regenwasserrückhaltung, 5°C kühlere Räume im Sommer, CO2-Einsparung.",
      duration: "21 Arbeitstage",
      quote: "Unsere Mitarbeiter lieben die neuen Pausenbereiche mit Blick aufs Gründach."
    },
    {
      before: before4,
      after: img4,
      title: "Dachausbau Schwabing",
      category: "Dachfenster / Ausbau",
      problem: "Dunkles, ungemütliches Dachgeschoss, das als Wohnraum genutzt werden sollte.",
      solution: "Einbau von 6 großflächigen Velux-Fenstern plus energetische Ertüchtigung.",
      result: "Helles Wohnzimmer mit Panoramablick, 45m² zusätzlicher Wohnfläche.",
      duration: "8 Arbeitstage",
      quote: "Aus dem Abstellraum wurde unser Lieblingsraum im Haus."
    },
    {
      before: before5,
      after: img7,
      title: "Villa Grünwald",
      category: "Schiefer / Spenglerarbeiten",
      problem: "Repräsentative Villa benötigte eine hochwertige Dachsanierung.",
      solution: "Schieferdeckung in Altdeutscher Deckung, handgefertigte Kupfer-Spenglerarbeiten.",
      result: "Zeitlos elegantes Erscheinungsbild, das den Wert der Immobilie steigert.",
      duration: "24 Arbeitstage",
      quote: "Die Handwerkskunst sieht man auf den ersten Blick – wunderschön."
    },
    {
      before: before6,
      after: img3,
      title: "Bürogebäude Nymphenburg",
      category: "Flachdachsanierung",
      problem: "Wiederkehrende Undichtigkeiten, hohe Energiekosten, mangelnde Sicherheitsausstattung.",
      solution: "Thermische Sanierung, neue Abdichtung, Absturzsicherung und Blitzschutz.",
      result: "Garantiert dicht, TÜV-geprüfte Sicherheit, 20% weniger Energieverbrauch.",
      duration: "15 Arbeitstage",
      quote: "Endlich können wir uns auf unser Kerngeschäft konzentrieren statt aufs Dach."
    },
    {
      before: before7,
      after: img8,
      title: "Lagerhalle Feldmoching",
      category: "Metalldach / Industrie",
      problem: "Durchgerostetes Trapezblech, undichte Nähte, Wärmeverlust im Winter.",
      solution: "Komplett neues Stehfalzdach aus verzinktem Stahl mit Wärmedämmung.",
      result: "Rostfreie Optik, 30% Energieeinsparung, 25 Jahre Herstellergarantie.",
      duration: "16 Arbeitstage",
      quote: "Das neue Dach sieht aus wie ein Neubau – dabei ist die Halle 30 Jahre alt."
    },
    {
      before: before8,
      after: img9,
      title: "Reihenhaus Pasing",
      category: "Steildach / Ziegel",
      problem: "Brüchige Ziegel, verstopfte Rinnen, Moos und Flechten überall.",
      solution: "Neueindeckung mit hochwertigen Tondachziegeln in Naturrot, neue Kupferrinnen.",
      result: "Klassisch schönes Erscheinungsbild, dauerhaft dicht, pflegeleicht.",
      duration: "10 Arbeitstage",
      quote: "Die neuen Ziegel glänzen wie am ersten Tag – unsere Nachbarn sind neidisch!"
    },
    {
      before: before9,
      after: img10,
      title: "Altbau Sendling",
      category: "Gauben / Spenglerarbeiten",
      problem: "Undichte Dachgauben mit Wassereinbruch bei Starkregen, marode Verblendungen.",
      solution: "Komplette Gaubensanierung mit neuer Zinkverkleidung und Dämmung.",
      result: "Trockene Räume, modernes Design, verbesserte Energieeffizienz.",
      duration: "14 Arbeitstage",
      quote: "Keine Angst mehr bei Gewitter – das ist unbezahlbar."
    },
    {
      before: before10,
      after: img11,
      title: "Garage Trudering",
      category: "Flachdach / EPDM",
      problem: "Stehendes Wasser, gerissene Bitumenbahnen, Schimmelbildung an der Decke.",
      solution: "Neue EPDM-Abdichtung mit Gefälledämmung für optimalen Wasserablauf.",
      result: "Dauerhaft wasserdicht, keine Pfützen mehr, 20 Jahre Garantie.",
      duration: "4 Arbeitstage",
      quote: "Endlich kann ich mein Auto wieder sorgenfrei in der Garage parken."
    },
    {
      before: before11,
      after: img12,
      title: "Einfamilienhaus Bogenhausen",
      category: "Schornstein / Spenglerei",
      problem: "Undichte Schornsteinanschlüsse, Rostflecken auf dem Dach, Wasserschäden im Haus.",
      solution: "Neue Kupfer-Schornsteineinfassung mit professioneller Lötarbeit.",
      result: "Handwerklich perfekte Arbeit, garantiert wasserdicht, zeitlose Optik.",
      duration: "3 Arbeitstage",
      quote: "Die Kupferarbeit ist ein Kunstwerk – so präzise habe ich das selten gesehen."
    },
    {
      before: before12,
      after: img13,
      title: "Doppelhaus Unterhaching",
      category: "Photovoltaik / Dacharbeiten",
      problem: "Veraltete Solaranlage mit beschädigter Unterkonstruktion, undichte Durchführungen.",
      solution: "Dachsanierung mit Integration einer neuen 12kWp Photovoltaikanlage.",
      result: "Saubere Installation, optimale Stromausbeute, perfekt abgedichtete Dachdurchführungen.",
      duration: "9 Arbeitstage",
      quote: "Das Dach ist jetzt nicht nur dicht, sondern produziert auch unseren Strom."
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title="Dachreferenzen München | Vorher-Nachher Projekte 089Dach"
        description="Entdecken Sie reale Dachprojekte aus München: Sanierungen, Neueindeckungen, Spengler-Highlights mit Vorher-Nachher-Galerie."
        canonical="https://089dach.de/referenzen"
        keywords="dach referenzen münchen, dachsanierung vorher nachher, kundenstimmen dachdecker, dachprojekte münchen"
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Referenzen", url: "/referenzen" }]} />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden min-h-[70vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Fertiggestelltes Dachprojekt"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">089Dach Referenzen</span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-secondary mt-4 mb-6">
              So sieht zufrieden aus
            </h1>
            
            {/* Problem-Agitation */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-sm shadow-sm border-l-4 border-primary mb-8">
              <p className="text-lg text-secondary font-medium mb-3">
                Kennen Sie die Angst?
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                „Kann ich dem Dachdecker vertrauen? Wird das Ergebnis wirklich gut? Oder stehe ich 
                am Ende mit einem halbfertigen Dach und leerer Brieftasche da?"
              </p>
              <p className="text-secondary font-medium">
                <strong>Diese Sorge verstehen wir. Deshalb zeigen wir Ihnen echte Projekte – mit allem, was dazugehört.</strong>
              </p>
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Vorher. Nachher. Das Problem. Die Lösung. <strong>Und was die Kunden selbst sagen.</strong> 
              Urteilen Sie selbst, ob wir halten, was wir versprechen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-sm" data-testid="button-hero-call">
                <a href="tel:08912621964">
                  <Phone className="mr-2 h-5 w-5" />
                  Ihr Projekt besprechen
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary hover:text-white font-bold rounded-sm" data-testid="button-hero-projects">
                <a href="#projekte">Alle Projekte ansehen</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trust Badges */}
      <section className="py-8 border-b border-border bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span><strong className="text-secondary">500+</strong> Projekte abgeschlossen</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              <span><strong className="text-secondary">Meisterbetrieb</strong> seit 1998</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span><strong className="text-secondary">10 Jahre</strong> Garantie</span>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section id="projekte" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group flex flex-col bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300" data-testid={`card-project-${index}`}>
                <div className="relative aspect-[16/9] overflow-hidden">
                  <div className="grid grid-cols-2 h-full">
                    <div className="relative">
                      <img 
                        src={project.before} 
                        alt={`${project.title} - Vorher`} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-sm">
                        VORHER
                      </div>
                    </div>
                    <div className="relative">
                      <img 
                        src={project.after} 
                        alt={`${project.title} - Nachher`} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-2 right-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-sm">
                        NACHHER
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-1/2 translate-x-1/2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-sm flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-secondary">{project.duration}</span>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-heading font-bold text-secondary mb-4">
                    {project.title}
                  </h3>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-2">
                      <span className="text-primary font-bold text-sm whitespace-nowrap">Problem:</span>
                      <p className="text-muted-foreground text-sm">{project.problem}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold text-sm whitespace-nowrap">Lösung:</span>
                      <p className="text-muted-foreground text-sm">{project.solution}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-600 font-bold text-sm whitespace-nowrap">Ergebnis:</span>
                      <p className="text-muted-foreground text-sm">{project.result}</p>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-border">
                    <p className="text-secondary italic text-sm">
                      "{project.quote}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadFunnel />
      <Contact />
      <Footer />
    </div>
  );
}
