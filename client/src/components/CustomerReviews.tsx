import { Star, Quote, ExternalLink } from "lucide-react";

interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
  location?: string;
  project?: string;
}

const reviews: Review[] = [
  {
    author: "M. Schmidt",
    rating: 5,
    text: "Professionelle Dachsanierung in Schwabing. Pünktlich, sauber, faire Preise. Absolute Empfehlung!",
    date: "November 2025",
    location: "Schwabing",
    project: "Dachsanierung"
  },
  {
    author: "Familie Weber",
    rating: 5,
    text: "Sturmschaden um 22 Uhr gemeldet, um Mitternacht war das Dach gesichert. Vielen Dank!",
    date: "Oktober 2025",
    location: "Sendling",
    project: "Notfall-Reparatur"
  },
  {
    author: "Dr. Bauer",
    rating: 5,
    text: "Denkmalgerechte Schieferdeckung an historischer Villa. Handwerkskunst auf höchstem Niveau.",
    date: "September 2025",
    location: "Bogenhausen",
    project: "Denkmalschutz"
  },
  {
    author: "H. Müller",
    rating: 5,
    text: "Flachdach-Sanierung perfekt umgesetzt. Endlich keine undichten Stellen mehr. Super Beratung!",
    date: "August 2025",
    location: "Moosach",
    project: "Flachdach"
  },
  {
    author: "Familie Lehner",
    rating: 5,
    text: "KfW-Förderung komplett für uns abgewickelt. 8.000€ gespart! Sehr empfehlenswert.",
    date: "Juli 2025",
    location: "Pasing",
    project: "Energetische Sanierung"
  },
  {
    author: "A. Kraus",
    rating: 5,
    text: "Dachfenster-Einbau in nur 2 Tagen. Saubere Arbeit, freundliches Team, fairer Preis.",
    date: "Juni 2025",
    location: "Laim",
    project: "Dachfenster"
  }
];

export default function CustomerReviews() {
  const averageRating = 4.9;
  const totalReviews = 127;

  return (
    <section className="py-4 md:py-6 bg-stone-50" data-testid="section-customer-reviews">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-6 w-6 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-secondary ml-2">{averageRating}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-2">
            Das sagen unsere Kunden
          </h2>
          <p className="text-muted-foreground">
            Basierend auf {totalReviews} Bewertungen
          </p>
          <a 
            href="https://www.google.com/maps/place/089Dach+GmbH"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline mt-2"
            data-testid="link-google-reviews"
          >
            Alle Bewertungen auf Google ansehen <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-5 border border-stone-200 shadow-sm hover:shadow-md transition-shadow"
              data-testid={`review-card-${index}`}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                  {review.author.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-secondary text-sm">{review.author}</span>
                    <div className="flex items-center gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{review.date}</span>
                    {review.location && (
                      <>
                        <span>•</span>
                        <span>{review.location}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <Quote className="absolute -top-1 -left-1 h-5 w-5 text-primary/20" />
                <p className="text-muted-foreground text-sm leading-relaxed pl-4">
                  {review.text}
                </p>
              </div>
              
              {review.project && (
                <div className="mt-3 pt-3 border-t border-stone-100">
                  <span className="text-xs text-muted-foreground">Projekt: </span>
                  <span className="text-xs font-medium text-primary">{review.project}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a 
            href="/beratung"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors"
            data-testid="button-reviews-cta"
          >
            Werden Sie unser nächster zufriedener Kunde
          </a>
        </div>
      </div>
    </section>
  );
}
