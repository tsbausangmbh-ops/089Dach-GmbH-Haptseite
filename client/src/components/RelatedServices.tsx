import { ArrowRight, Home, Warehouse, Wrench, Ruler, ShieldCheck, Lightbulb, FileText, Hammer, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

import imgDachsanierung from "@assets/generated_images/roofers_installing_battens_and_tiles.webp";
import imgReparatur from "@assets/generated_images/roofer_doing_quick_repairs.webp";
import imgReferenzen from "@assets/generated_images/realistic_row_house_roof_after.webp";
import imgStadtteile from "@assets/generated_images/munich_frauenkirche_landmark.webp";
import imgWartung from "@assets/generated_images/roofing_expert_with_checklist.webp";
import imgFAQ from "@assets/generated_images/faq_roofing_consultation.webp";
import imgEnergieberatung from "@assets/generated_images/energy_consulting_kfw_bafa.webp";

const allServices = [
  {
    id: "dachsanierung",
    icon: <Home className="h-6 w-6 text-primary" />,
    title: "Dachsanierung",
    href: "/leistungen/dachsanierung",
    description: "Energetische Sanierung mit bis zu 30% Heizkosten-Ersparnis",
    image: imgDachsanierung
  },
  {
    id: "bedachungen",
    icon: <Warehouse className="h-6 w-6 text-primary" />,
    title: "Steildach & Flachdach",
    href: "/leistungen/bedachungen",
    description: "Neueindeckung und Abdichtung für alle Dachtypen"
  },
  {
    id: "spenglerei",
    icon: <Wrench className="h-6 w-6 text-primary" />,
    title: "Spenglerei",
    href: "/leistungen/spenglerei",
    description: "Dachrinnen, Kamineinfassungen und Metallarbeiten"
  },
  {
    id: "dachfenster",
    icon: <Ruler className="h-6 w-6 text-primary" />,
    title: "Dachfenster",
    href: "/leistungen/dachfenster",
    description: "Velux & Roto Einbau und Austausch"
  },
  {
    id: "gaubenbau",
    icon: <Warehouse className="h-6 w-6 text-primary" />,
    title: "Gaubenbau",
    href: "/leistungen/gaubenbau",
    description: "Mehr Wohnraum und Licht unterm Dach"
  },
  {
    id: "wartung",
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    title: "Wartung",
    href: "/leistungen/wartung",
    description: "Jährliche Inspektion und vorbeugende Pflege",
    image: imgWartung
  },
  {
    id: "reparaturservice",
    icon: <Hammer className="h-6 w-6 text-primary" />,
    title: "Reparaturservice",
    href: "/leistungen/reparaturservice",
    description: "Schnelle Hilfe bei Sturmschäden und Lecks",
    image: imgReparatur
  },
  {
    id: "energieberatung",
    icon: <Lightbulb className="h-6 w-6 text-primary" />,
    title: "Energieberatung",
    href: "/leistungen/energieberatung",
    description: "KfW- und BAFA-Förderungen maximieren",
    image: imgEnergieberatung
  },
  {
    id: "architektenleistungen",
    icon: <FileText className="h-6 w-6 text-primary" />,
    title: "Architektenleistungen",
    href: "/leistungen/architektenleistungen",
    description: "Bauanträge und Genehmigungsplanung"
  },
  {
    id: "referenzen",
    icon: <Home className="h-6 w-6 text-primary" />,
    title: "Referenzen",
    href: "/referenzen",
    description: "Unsere abgeschlossenen Projekte in München",
    image: imgReferenzen
  },
  {
    id: "ratgeber",
    icon: <Lightbulb className="h-6 w-6 text-primary" />,
    title: "Ratgeber",
    href: "/ratgeber",
    description: "Tipps & Tricks rund ums Dach"
  },
  {
    id: "stadtteile",
    icon: <MapPin className="h-6 w-6 text-primary" />,
    title: "Einsatzgebiete",
    href: "/stadtteile",
    description: "Dachdecker in Ihrer Nähe",
    image: imgStadtteile
  },
  {
    id: "faq",
    icon: <Lightbulb className="h-6 w-6 text-primary" />,
    title: "FAQ",
    href: "/faq",
    description: "Häufige Fragen & Antworten",
    image: imgFAQ
  },
  {
    id: "ueber-uns",
    icon: <Home className="h-6 w-6 text-primary" />,
    title: "Über uns",
    href: "/ueber-uns",
    description: "Ihr Dachdecker-Meisterbetrieb seit 1998"
  }
];

interface RelatedServicesProps {
  currentPage: string;
  relatedIds?: string[];
  title?: string;
  maxItems?: number;
}

export default function RelatedServices({ 
  currentPage, 
  relatedIds,
  title = "Das könnte Sie auch interessieren",
  maxItems = 4
}: RelatedServicesProps) {
  let servicesToShow = relatedIds 
    ? allServices.filter(s => relatedIds.includes(s.id) && s.id !== currentPage)
    : allServices.filter(s => s.id !== currentPage);
  
  servicesToShow = servicesToShow.slice(0, maxItems);

  if (servicesToShow.length === 0) return null;

  return (
    <section className="py-4">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="bg-slate-800 rounded-2xl md:rounded-3xl p-6 md:p-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {servicesToShow.map((service) => (
            <a 
              key={service.id}
              href={service.href}
              className="group bg-white rounded-xl overflow-hidden border border-stone-200 hover:border-primary hover:shadow-md transition-all"
              data-testid={`link-related-${service.id}`}
            >
                            <div className="p-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-secondary group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-slate-800 rounded-xl">
            <a href="/leistungen">
              Alle Leistungen ansehen
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
        </div>
      </div>
    </section>
  );
}
