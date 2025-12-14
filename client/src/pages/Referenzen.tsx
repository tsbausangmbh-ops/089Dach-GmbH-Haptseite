import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import LeadFunnel from "@/components/LeadFunnel";
import { ArrowUpRight, Clock, Euro, CheckCircle2 } from "lucide-react";

import img1 from "@assets/generated_images/realistic_anthracite_roof_tiles_with_slight_weathering.png";
import img3 from "@assets/generated_images/flat_roof_bitumen_detail_with_texture.png";
import img4 from "@assets/generated_images/roof_window_installation_with_realistic_roof_texture.png";
import img5 from "@assets/generated_images/historic_biberschwanz_roof_with_patina.png";
import img6 from "@assets/generated_images/flat_green_roof_with_natural_variations.png";
import img7 from "@assets/generated_images/slate_roof_with_copper_details_and_patina.png";
import heroImage from "@assets/generated_images/historic_building_roof_renovation.png";

export default function Referenzen() {
  const projects = [
    {
      src: img1,
      title: "Einfamilienhaus Obermenzing",
      category: "Neubau / Steildach",
      problem: "Das 40 Jahre alte Dach war undicht, die Ziegel brüchig, die Dämmung veraltet.",
      solution: "Komplette Neueindeckung mit Anthrazit-Tondachziegeln und Aufsparrendämmung.",
      result: "Modernes Aussehen, 35% weniger Heizkosten, 10 Jahre Garantie auf die Ausführung.",
      duration: "12 Arbeitstage",
      quote: "Unsere Nachbarn fragen, ob wir ein neues Haus gebaut haben!"
    },
    {
      src: img5,
      title: "Altbau Sanierung Haidhausen",
      category: "Sanierung / Denkmalschutz",
      problem: "Historisches Gebäude unter Denkmalschutz mit maroder Dachsubstanz.",
      solution: "Behutsame Sanierung mit originalen Biberschwanz-Ziegeln, Abstimmung mit Denkmalamt.",
      result: "Erhalt des historischen Charakters bei modernem Wetterschutz.",
      duration: "18 Arbeitstage",
      quote: "Der Charme des Hauses wurde bewahrt – nur jetzt ohne Wasserflecken."
    },
    {
      src: img6,
      title: "Gewerbepark Nord",
      category: "Flachdach / Begrünung",
      problem: "Undichte Flachdächer, hohe Hitzeentwicklung im Sommer, schlechtes Mikroklima.",
      solution: "Neue Abdichtung mit extensiver Dachbegrünung auf 2.500m².",
      result: "Regenwasserrückhaltung, 5°C kühlere Räume im Sommer, CO2-Einsparung.",
      duration: "21 Arbeitstage",
      quote: "Unsere Mitarbeiter lieben die neuen Pausenbereiche mit Blick aufs Gründach."
    },
    {
      src: img4,
      title: "Dachausbau Schwabing",
      category: "Dachfenster / Ausbau",
      problem: "Dunkles, ungemütliches Dachgeschoss, das als Wohnraum genutzt werden sollte.",
      solution: "Einbau von 6 großflächigen Velux-Fenstern plus energetische Ertüchtigung.",
      result: "Helles Wohnzimmer mit Panoramablick, 45m² zusätzlicher Wohnfläche.",
      duration: "8 Arbeitstage",
      quote: "Aus dem Abstellraum wurde unser Lieblingsraum im Haus."
    },
    {
      src: img7,
      title: "Villa Grünwald",
      category: "Schiefer / Spenglerarbeiten",
      problem: "Repräsentative Villa benötigte eine hochwertige Dachsanierung.",
      solution: "Schieferdeckung in Altdeutscher Deckung, handgefertigte Kupfer-Spenglerarbeiten.",
      result: "Zeitlos elegantes Erscheinungsbild, das den Wert der Immobilie steigert.",
      duration: "24 Arbeitstage",
      quote: "Die Handwerkskunst sieht man auf den ersten Blick – wunderschön."
    },
    {
      src: img3,
      title: "Bürogebäude Nymphenburg",
      category: "Flachdachsanierung",
      problem: "Wiederkehrende Undichtigkeiten, hohe Energiekosten, mangelnde Sicherheitsausstattung.",
      solution: "Thermische Sanierung, neue Abdichtung, Absturzsicherung und Blitzschutz.",
      result: "Garantiert dicht, TÜV-geprüfte Sicherheit, 20% weniger Energieverbrauch.",
      duration: "15 Arbeitstage",
      quote: "Endlich können wir uns auf unser Kerngeschäft konzentrieren statt aufs Dach."
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative w-full h-[35vh] min-h-[300px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Unsere Referenzen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply" />

        {/* Hero Logo Overlay */}
        <div className="absolute right-0 bottom-0 h-full w-1/2 opacity-10 pointer-events-none hidden md:flex items-center justify-center overflow-hidden">
             <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 800 800" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full max-w-none transform rotate-12 scale-150"
          >
            <g fill="currentColor" className="text-white">
              <rect x="100" y="200" width="200" height="200" rx="20" fill="currentColor" />
              <text x="200" y="340" fontSize="120" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" fill="black">089</text>
              <text x="340" y="340" fontSize="120" fontWeight="bold" fontFamily="sans-serif" fill="currentColor">DACH</text>
              <text x="345" y="390" fontSize="30" fontWeight="medium" fontFamily="sans-serif" letterSpacing="5" fill="currentColor">GMBH MÜNCHEN</text>
            </g>
          </svg>
        </div>

        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Unsere Referenzen
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Bilder sagen mehr als Worte. Überzeugen Sie sich von unserer Handwerksqualität anhand ausgewählter Projekte aus München und Umgebung.
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Jedes Projekt erzählt eine Geschichte. Von Problemen, die gelöst wurden. Von Kunden, 
              die wieder ruhig schlafen können. Hier zeigen wir Ihnen nicht nur Bilder – sondern 
              die <strong className="text-secondary">Transformationen</strong>, die dahinterstehen.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group flex flex-col bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300" data-testid={`card-project-${index}`}>
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img 
                    src={project.src} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-sm flex items-center gap-2">
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
