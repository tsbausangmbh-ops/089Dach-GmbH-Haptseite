import { ChevronDown, Phone, ArrowRight, CheckCircle2, MapPin, Calculator } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TextWithKeywordLinks } from "@/components/KeywordLink";

interface FAQItem {
  question: string;
  shortAnswer: string;
  details: string;
  localReference?: string;
  nextStep?: string;
  priceRange?: string;
}

interface AIEnhancedFAQProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
  showCTA?: boolean;
}

export default function AIEnhancedFAQ({ 
  title = "Häufig gestellte Fragen", 
  subtitle = "Klare Antworten auf Ihre Fragen – optimiert für schnelle Entscheidungen",
  faqs,
  showCTA = true
}: AIEnhancedFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-4 md:py-6 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-3">
              {title}
            </h2>
            <p className="text-gray-600">{subtitle}</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="border border-gray-200 rounded-xl overflow-hidden bg-stone-50 hover:border-primary/30 transition-colors"
                itemScope
                itemType="https://schema.org/Question"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left"
                  data-testid={`faq-toggle-${idx}`}
                >
                  <h3 
                    className="text-lg font-semibold text-secondary pr-4"
                    itemProp="name"
                  >
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`h-5 w-5 text-primary flex-shrink-0 transition-transform duration-200 ${
                      openIndex === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openIndex === idx && (
                  <div 
                    className="px-5 pb-5 space-y-4"
                    itemScope
                    itemType="https://schema.org/Answer"
                    itemProp="acceptedAnswer"
                  >
                    <div 
                      className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg"
                      itemProp="text"
                    >
                      <p className="font-medium text-secondary">
                        <CheckCircle2 className="h-4 w-4 inline mr-2 text-primary" />
                        {faq.shortAnswer}
                      </p>
                    </div>

                    <div className="text-gray-700 leading-relaxed">
                      <TextWithKeywordLinks>{faq.details}</TextWithKeywordLinks>
                    </div>

                    {faq.priceRange && (
                      <div className="flex items-center gap-2 text-sm bg-amber-50 text-amber-800 p-3 rounded-lg">
                        <Calculator className="h-4 w-4" />
                        <span className="font-medium">Kostenrahmen:</span> {faq.priceRange}
                      </div>
                    )}

                    {faq.localReference && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{faq.localReference}</span>
                      </div>
                    )}

                    {faq.nextStep && (
                      <div className="flex items-center gap-2 pt-2">
                        <ArrowRight className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-primary">{faq.nextStep}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {showCTA && (
            <div className="mt-8 text-center bg-secondary/5 rounded-xl p-6">
              <p className="text-secondary font-medium mb-4">
                Ihre Frage nicht dabei? Wir beraten Sie persönlich!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="/rueckruf/">
                  <Button className="bg-primary hover:bg-primary/90" data-testid="faq-cta-callback">
                    <Phone className="h-4 w-4 mr-2" /> Rückruf anfordern
                  </Button>
                </a>
                <a href="/beratung">
                  <Button variant="outline" className="border-secondary text-secondary" data-testid="faq-cta-consultation">
                    Kostenlose Beratung
                  </Button>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
