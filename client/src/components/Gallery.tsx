import img1 from "@assets/generated_images/realistic_house_anthracite_roof.png";
import img2 from "@assets/generated_images/aged_red_roof_tiles_closeup.png";
import img3 from "@assets/generated_images/weathered_flat_roof_commercial.png";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function Gallery() {
  const projects = [
    {
      src: img1,
      title: "Einfamilienhaus Obermenzing",
      category: "Neubau / Steildach"
    },
    {
      src: img3,
      title: "Gewerbebau Schwabing",
      category: "Flachdachsanierung"
    },
    {
      src: img2,
      title: "Villa Bogenhausen",
      category: "Dachziegel Detail"
    }
  ];

  return (
    <section id="gallery" className="py-8 bg-secondary text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Unsere Referenzen</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">
              Ausgewählte Projekte
            </h2>
          </div>
          <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 hover:text-white rounded-xl" asChild>
            <a href="/referenzen">Alle Projekte ansehen</a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer bg-gray-800">
              <img 
                src={project.src} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-primary text-sm font-bold uppercase tracking-wider mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.category}
                </span>
                <h3 className="text-xl font-heading font-bold text-white flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.title}
                  <ArrowUpRight className="h-4 w-4" />
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
