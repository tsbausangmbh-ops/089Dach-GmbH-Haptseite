import { HelpCircle, ChevronDown, Home, Calendar, Euro } from "lucide-react";
import { useState } from "react";
import type { LocationContent } from "@shared/local-faqs";

interface LocalFAQSectionProps {
  content: LocationContent;
  stadtteil: string;
}

export function LocalFAQSection({ content, stadtteil }: LocalFAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!content?.faqs || content.faqs.length === 0) return null;

  return (
    <div className="bg-white rounded-xl p-4 md:p-6 border border-gray-100 mt-6">
      <h3 className="text-xl font-heading font-bold text-secondary mb-4 flex items-center gap-2">
        <HelpCircle className="h-5 w-5 text-primary" />
        Häufige Fragen zu Dacharbeiten in {stadtteil}
      </h3>
      
      {content.einwohner && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Home className="h-4 w-4 text-primary" />
            <span>{content.einwohner} Einwohner</span>
          </div>
          {content.bauperiode && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4 text-primary" />
              <span>Baujahre: {content.bauperiode}</span>
            </div>
          )}
          {content.foerderhinweis && (
            <div className="flex items-center gap-2 text-muted-foreground col-span-2 md:col-span-1">
              <Euro className="h-4 w-4 text-primary" />
              <span className="text-xs">{content.foerderhinweis}</span>
            </div>
          )}
        </div>
      )}

      {content.haustypen && content.haustypen.length > 0 && (
        <p className="text-sm text-muted-foreground mb-4">
          <strong>Typische Gebäude:</strong> {content.haustypen.join(", ")}
        </p>
      )}
      
      <div className="space-y-2">
        {content.faqs.map((faq, idx) => (
          <div key={idx} className="border border-gray-100 rounded-lg overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-secondary text-sm">{faq.question}</span>
              <ChevronDown className={`h-4 w-4 text-primary transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
            </button>
            {openIndex === idx && (
              <div className="px-3 pb-3 text-sm text-muted-foreground leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
