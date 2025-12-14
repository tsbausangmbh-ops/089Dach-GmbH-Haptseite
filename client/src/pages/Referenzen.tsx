import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import LeadFunnel from "@/components/LeadFunnel";
import { ArrowUpRight } from "lucide-react";

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
      desc: "Komplette Neueindeckung mit hochwertigen anthrazitfarbenen Tondachziegeln."
    },
    {
      src: img5,
      title: "Altbau Sanierung Haidhausen",
      category: "Sanierung / Denkmalschutz",
      desc: "Fachgerechte Sanierung eines historischen Dachstuhls mit Biberschwanz-Ziegeln."
    },
    {
      src: img6,
      title: "Gewerbepark Nord",
      category: "Flachdach / Begrünung",
      desc: "Großflächige Flachdachabdichtung mit extensiver Dachbegrünung für besseres Klima."
    },
    {
      src: img4,
      title: "Dachausbau Schwabing",
      category: "Dachfenster / Ausbau",
      desc: "Einbau großflächiger Lichtlösungen und energetische Ertüchtigung des Dachgeschosses."
    },
    {
      src: img7,
      title: "Villa Grünwald",
      category: "Schiefer / Spenglerarbeiten",
      desc: "Exklusive Schieferdeckung in Altdeutscher Deckung mit Kupfer-Spenglerarbeiten."
    },
    {
      src: img3,
      title: "Bürogebäude Nymphenburg",
      category: "Flachdachsanierung",
      desc: "Thermische Sanierung und Neubelegung der Dachflächen inkl. Sicherheitsausstattung."
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

      {/* Gallery Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group flex flex-col bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.src} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-bold flex items-center gap-2 border border-white/50 px-4 py-2 rounded-sm backdrop-blur-sm">
                      Projekt ansehen <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-heading font-bold text-secondary mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.desc}
                  </p>
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
