import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import LeadFunnel from "@/components/LeadFunnel";
import SEO, { BreadcrumbSchema } from "@/components/SEO";

const stadtteile = [
  { name: "Obermenzing", entfernung: "0 km", link: "/", highlight: true },
  { name: "Pasing", entfernung: "2 km", link: "/dachdecker-pasing" },
  { name: "Laim", entfernung: "3 km", link: "/dachdecker-laim" },
  { name: "Nymphenburg", entfernung: "2 km", link: "/dachdecker-nymphenburg" },
  { name: "Neuhausen", entfernung: "4 km", link: "/dachdecker-neuhausen" },
  { name: "Moosach", entfernung: "3 km", link: "/dachdecker-moosach" },
  { name: "Allach", entfernung: "3 km", link: "/dachdecker-allach" },
  { name: "Aubing", entfernung: "4 km", link: "/dachdecker-aubing" },
  { name: "Schwabing", entfernung: "8 km", link: "/dachdecker-schwabing" },
  { name: "Sendling", entfernung: "7 km", link: "/dachdecker-sendling" },
  { name: "Bogenhausen", entfernung: "10 km", link: "/dachdecker-bogenhausen" },
  { name: "Hadern", entfernung: "5 km", link: "/dachdecker-hadern" },
  { name: "Trudering", entfernung: "14 km", link: "/dachdecker-trudering" },
  { name: "Haidhausen", entfernung: "9 km", link: "/dachdecker-haidhausen" },
  { name: "Maxvorstadt", entfernung: "7 km", link: "/dachdecker-maxvorstadt" }
];

const umlandOrte = [
  { name: "Gräfelfing", entfernung: "5 km", link: "/dachdecker-graefelfing" },
  { name: "Planegg", entfernung: "7 km", link: "/dachdecker-planegg" },
  { name: "Germering", entfernung: "8 km", link: "/dachdecker-germering" },
  { name: "Puchheim", entfernung: "9 km", link: "/dachdecker-puchheim" },
  { name: "Gröbenzell", entfernung: "8 km", link: "/dachdecker-groebenzell" },
  { name: "Olching", entfernung: "11 km", link: "/dachdecker-olching" },
  { name: "Karlsfeld", entfernung: "7 km", link: "/dachdecker-karlsfeld" },
  { name: "Dachau", entfernung: "10 km", link: "/dachdecker-dachau" },
  { name: "Unterschleißheim", entfernung: "13 km", link: "/dachdecker-unterschleissheim" },
  { name: "Starnberg", entfernung: "18 km", link: "/dachdecker-starnberg" },
  { name: "Fürstenfeldbruck", entfernung: "16 km", link: "/dachdecker-fuerstenfeldbruck" },
  { name: "Gauting", entfernung: "11 km", link: "/dachdecker-gauting" },
  { name: "Krailling", entfernung: "8 km", link: "/dachdecker-krailling" },
  { name: "Grünwald", entfernung: "13 km", link: "/dachdecker-gruenwald" },
  { name: "Pullach", entfernung: "12 km", link: "/dachdecker-pullach" }
];

function ServiceAreaListSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Dachdecker Servicegebiet München und Umgebung",
    "description": "089Dach GmbH bietet Dachdeckerleistungen in allen Münchner Stadtteilen und im Umland im Radius von 20 km.",
    "numberOfItems": stadtteile.length + umlandOrte.length,
    "itemListElement": [...stadtteile, ...umlandOrte].map((ort, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Place",
        "name": ort.name,
        "description": `Dachdecker-Service in ${ort.name}, Entfernung: ${ort.entfernung}`
      }
    }))
  };
  return (<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />);
}

export default function Stadtteile() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title="Dachdecker München Stadtteile | Alle Bezirke - 089Dach"
        description="Ihr Dachdecker für alle Münchner Stadtteile: Pasing, Laim, Schwabing, Sendling, Bogenhausen und mehr. Plus Umland bis 20 km. Tel: 089 12621964"
        canonical="https://089dach.de/stadtteile"
        keywords="dachdecker münchen stadtteile, dachdecker pasing, dachdecker laim, dachdecker schwabing, dachdecker sendling, dachdecker bogenhausen, dachdecker neuhausen, dachdecker moosach, dachdecker obermenzing, dachdecker in meiner nähe münchen, dachdecker landkreis münchen, dachdecker münchen umland"
        aiSummary="089Dach GmbH bietet Dachdeckerleistungen in allen Münchner Stadtteilen und im Umkreis von 20 km. Standort: München-Obermenzing. Telefon: 089 12621964."
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Stadtteile", url: "/stadtteile" }]} />
      <ServiceAreaListSchema />
      <Navbar />
      
      <section className="pt-10 pb-12 bg-secondary relative overflow-hidden min-h-[30vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/80"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl text-white">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Servicegebiet</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Dachdecker in Ihrer Nähe
            </h1>
            <p className="text-xl text-gray-200 max-w-xl mb-6">
              Von unserem Standort in München-Obermenzing erreichen wir alle Stadtteile und das Umland in kürzester Zeit.
            </p>
            <a href="tel:08912621964">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" data-testid="button-anrufen-hero">
                <Phone className="h-5 w-5 mr-2" /> 089 12621964
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-heading font-bold text-secondary mb-8">Münchner Stadtteile</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {stadtteile.map((stadtteil, idx) => (
              <a 
                key={idx} 
                href={stadtteil.link}
                className={`block p-4 rounded-xl border transition-all hover:shadow-md ${stadtteil.highlight ? 'bg-primary text-white border-primary' : 'bg-white border-gray-200 hover:border-primary'}`}
                data-testid={`link-stadtteil-${stadtteil.name.toLowerCase()}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className={`h-4 w-4 ${stadtteil.highlight ? 'text-white' : 'text-primary'}`} />
                  <span className="font-bold">{stadtteil.name}</span>
                </div>
                <p className={`text-sm ${stadtteil.highlight ? 'text-white/80' : 'text-muted-foreground'}`}>
                  {stadtteil.highlight ? 'Unser Standort' : stadtteil.entfernung}
                </p>
              </a>
            ))}
          </div>

          <h2 className="text-3xl font-heading font-bold text-secondary mb-8">Umland (20 km Radius)</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {umlandOrte.map((ort, idx) => (
              <a 
                key={idx} 
                href={ort.link}
                className="block p-4 rounded-xl border border-gray-200 bg-white hover:border-primary hover:shadow-md transition-all"
                data-testid={`link-umland-${ort.name.toLowerCase()}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="font-bold text-secondary">{ort.name}</span>
                </div>
                <p className="text-sm text-muted-foreground">{ort.entfernung}</p>
              </a>
            ))}
          </div>

          <div className="bg-primary/5 rounded-xl p-8 border border-primary/20">
            <h3 className="text-2xl font-heading font-bold text-secondary mb-4">Warum 089Dach für Ihr Viertel?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Meisterbetrieb seit 1998",
                "Kurze Anfahrtswege",
                "Schnelle Reaktionszeiten",
                "Lokale Referenzen vorhanden",
                "Kenntnis der Bausubstanz",
                "10 Jahre Garantie"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-secondary">{item}</span>
                </div>
              ))}
            </div>
            <a href="/rueckruf" className="inline-block mt-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" data-testid="button-beratung-cta">
                Kostenlose Beratung anfordern <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <LeadFunnel />
      <Contact />
      <Footer />
    </div>
  );
}
