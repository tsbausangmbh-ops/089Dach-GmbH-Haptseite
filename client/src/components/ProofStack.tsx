import { Star, Shield, Award, Users, CheckCircle2, Quote, MapPin, Calendar } from "lucide-react";

interface Review {
  name: string;
  location?: string;
  rating: number;
  text: string;
  project?: string;
  date?: string;
}

interface ProofStackProps {
  title?: string;
  reviews?: Review[];
  showStats?: boolean;
  showGuarantees?: boolean;
}

export default function ProofStack({
  title = "Warum 089Dach?",
  reviews,
  showStats = true,
  showGuarantees = true
}: ProofStackProps) {
  const defaultReviews: Review[] = [
    {
      name: "M. Schmidt",
      location: "München-Schwabing",
      rating: 5,
      text: "Professionelle Dachsanierung, pünktlich abgeschlossen. Faire Preise und top Beratung. Absolute Empfehlung!",
      project: "Komplettsanierung Steildach",
      date: "November 2025"
    },
    {
      name: "Familie Weber",
      location: "München-Pasing",
      rating: 5,
      text: "Sturmschaden um 22 Uhr gemeldet, um Mitternacht war das Dach gesichert. Danke für den schnellen Einsatz!",
      project: "Notdienst Sturmschaden",
      date: "Oktober 2025"
    },
    {
      name: "Dr. Bauer",
      location: "München-Bogenhausen",
      rating: 5,
      text: "Denkmalgerechte Schieferdeckung an historischer Villa. Handwerkskunst auf höchstem Niveau.",
      project: "Denkmalschutz-Sanierung",
      date: "September 2025"
    }
  ];

  const displayReviews = reviews || defaultReviews;

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary text-center mb-8">
            {title}
          </h2>

          {showStats && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              <div className="bg-stone-50 rounded-xl p-4 text-center">
                <div className="flex justify-center mb-2">
                  <Star className="h-6 w-6 text-amber-500 fill-amber-500" />
                </div>
                <p className="text-2xl font-bold text-secondary">4.9</p>
                <p className="text-sm text-gray-600">von 5 Sternen</p>
                <p className="text-xs text-gray-500 mt-1">127 Bewertungen</p>
              </div>

              <div className="bg-stone-50 rounded-xl p-4 text-center">
                <div className="flex justify-center mb-2">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <p className="text-2xl font-bold text-secondary">27+</p>
                <p className="text-sm text-gray-600">Jahre Erfahrung</p>
                <p className="text-xs text-gray-500 mt-1">Seit 1998</p>
              </div>

              <div className="bg-stone-50 rounded-xl p-4 text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <p className="text-2xl font-bold text-secondary">200+</p>
                <p className="text-sm text-gray-600">Projekte</p>
                <p className="text-xs text-gray-500 mt-1">Erfolgreich abgeschlossen</p>
              </div>

              <div className="bg-stone-50 rounded-xl p-4 text-center">
                <div className="flex justify-center mb-2">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <p className="text-2xl font-bold text-secondary">10</p>
                <p className="text-sm text-gray-600">Jahre Garantie</p>
                <p className="text-xs text-gray-500 mt-1">Auf alle Arbeiten</p>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {displayReviews.map((review, idx) => (
              <div key={idx} className="bg-stone-50 rounded-xl p-5 border border-gray-100">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                
                <div className="relative mb-4">
                  <Quote className="absolute -top-2 -left-2 h-6 w-6 text-primary/20" />
                  <p className="text-gray-700 text-sm leading-relaxed pl-4">
                    "{review.text}"
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-3">
                  <p className="font-semibold text-secondary">{review.name}</p>
                  {review.location && (
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {review.location}
                    </p>
                  )}
                  {review.project && (
                    <p className="text-xs text-primary mt-1">{review.project}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {showGuarantees && (
            <div className="bg-secondary/5 rounded-xl p-6">
              <h3 className="text-lg font-bold text-secondary mb-4 text-center">
                Unsere Garantien für Sie
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-secondary">Festpreisgarantie</p>
                    <p className="text-xs text-gray-600">Keine versteckten Kosten</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-secondary">10 Jahre Garantie</p>
                    <p className="text-xs text-gray-600">Auf Material & Arbeit</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-secondary">Meisterqualität</p>
                    <p className="text-xs text-gray-600">Innungsgeprüfter Betrieb</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-secondary">Förderberatung</p>
                    <p className="text-xs text-gray-600">KfW & BAFA inklusive</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
