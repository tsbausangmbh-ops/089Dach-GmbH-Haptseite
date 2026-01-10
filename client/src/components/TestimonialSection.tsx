import { Star, Quote } from "lucide-react";
import type { Testimonial } from "@shared/testimonials";

interface TestimonialSectionProps {
  testimonials: Testimonial[];
  stadtteil: string;
}

export function TestimonialSection({ testimonials, stadtteil }: TestimonialSectionProps) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <div className="bg-stone-50 rounded-xl p-4 md:p-6 border border-stone-200">
      <h3 className="text-xl font-heading font-bold text-secondary mb-4 flex items-center gap-2">
        <Quote className="h-5 w-5 text-primary" />
        Kundenstimmen aus {stadtteil}
      </h3>
      <div className="space-y-4">
        {testimonials.map((testimonial, idx) => (
          <div key={idx} className="bg-white rounded-lg p-4 border border-stone-100">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground italic mb-3">"{testimonial.text}"</p>
            <div className="flex justify-between items-end text-sm">
              <div>
                <p className="font-semibold text-secondary">{testimonial.name}</p>
                <p className="text-muted-foreground">{testimonial.location} • {testimonial.project}</p>
              </div>
              <span className="text-muted-foreground">{testimonial.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
