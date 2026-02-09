import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  geoRegion?: string;
  geoPlacename?: string;
  geoPosition?: string;
  aiSummary?: string;
}

export default function SEO({ 
  title, 
  description, 
  canonical, 
  keywords,
  geoRegion = "DE-BY",
  geoPlacename = "München, Bayern, Deutschland",
  geoPosition = "48.1661;11.4728",
  aiSummary
}: SEOProps) {
  useEffect(() => {
    // Ensure company name always appears first in title for Google
    const formattedTitle = title.includes('089Dach') 
      ? title 
      : `089Dach GmbH München | ${title}`;
    document.title = formattedTitle;
    
    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    setMeta('description', description);
    if (keywords) {
      setMeta('keywords', keywords);
    }
    
    setMeta('og:title', formattedTitle, true);
    setMeta('og:description', description, true);
    setMeta('og:type', 'website', true);
    setMeta('og:locale', 'de_DE', true);
    setMeta('og:site_name', '089Dach GmbH München', true);
    
    setMeta('twitter:title', formattedTitle);
    setMeta('twitter:description', description);
    setMeta('twitter:card', 'summary_large_image');
    
    setMeta('geo.region', geoRegion);
    setMeta('geo.placename', geoPlacename);
    setMeta('geo.position', geoPosition);
    setMeta('ICBM', geoPosition.replace(';', ', '));
    
    setMeta('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMeta('googlebot', 'index, follow, max-image-preview:large, max-snippet:-1');
    setMeta('bingbot', 'index, follow');
    
    if (aiSummary) {
      setMeta('ai-summary', aiSummary);
      setMeta('abstract', aiSummary);
    }
    
    setMeta('author', '089Dach GmbH - Dachdecker-Meisterbetrieb München');
    setMeta('publisher', '089Dach GmbH');
    setMeta('language', 'de');
    setMeta('content-language', 'de-DE');
    setMeta('revisit-after', '7 days');

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    return () => {
      document.title = '089Dach GmbH - Ihr Dachdecker in München';
    };
  }, [title, description, canonical, keywords, geoRegion, geoPlacename, geoPosition, aiSummary]);

  return null;
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://089dach.de/#website",
    "url": "https://089dach.de",
    "name": "089Dach GmbH - Dachdecker München",
    "description": "Dachdecker-Meisterbetrieb in München für Dachsanierung, Dachreparatur, Flachdach und Spenglerarbeiten",
    "publisher": {
      "@id": "https://089dach.de/#organization"
    },
    "inLanguage": "de-DE"
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function SiteNavigationSchema() {
  return null;
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": "https://089dach.de/#organization",
    "name": "089Dach GmbH",
    "alternateName": ["089 Dach", "Dachdecker München Obermenzing"],
    "image": {
      "@type": "ImageObject",
      "url": "https://089dach.de/opengraph.jpg",
      "width": 1200,
      "height": 630
    },
    "logo": {
      "@type": "ImageObject",
      "url": "https://089dach.de/logo.png",
      "width": 200,
      "height": 60
    },
    "url": "https://089dach.de",
    "telephone": "+49-89-12621964",
    "email": "info@089dach.de",
    "priceRange": "€€",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer", "Invoice"],
    "currenciesAccepted": "EUR",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Thuillestr. 20",
      "addressLocality": "München",
      "postalCode": "81247",
      "addressRegion": "BY",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.1661,
      "longitude": 11.4728
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "18:00"
      }
    ],
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "München und Landkreis München"
    },
    "sameAs": [
      "https://www.instagram.com/089dach",
      "https://www.facebook.com/089dach",
      "https://www.google.com/maps/place/089Dach+GmbH"
    ],
    "hasMap": "https://www.google.com/maps/place/089Dach+GmbH",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "62",
      "reviewCount": "62"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "M. Schmidt" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "reviewBody": "Professionelle Dachsanierung in Schwabing. Pünktlich, sauber, faire Preise.",
        "datePublished": "2025-11-15"
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Familie Weber" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "reviewBody": "Sturmschaden um 22 Uhr gemeldet, um Mitternacht war das Dach gesichert.",
        "datePublished": "2025-10-28"
      }
    ],
    "slogan": "Ihr Dach. Unsere Leidenschaft.",
    "foundingDate": "1998",
    "founder": {
      "@type": "Person",
      "name": "Falko Georg Blöckinger",
      "jobTitle": "Dachdecker- und Spenglermeister"
    },
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 10,
      "maxValue": 20
    },
    "knowsAbout": [
      "Dachsanierung",
      "Steildach",
      "Flachdach",
      "Spenglerarbeiten",
      "Dachfenster",
      "Gaubenbau",
      "Energetische Sanierung",
      "Dachreparatur"
    ],
    "hasCredential": [
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "Meisterbrief", "name": "Dachdecker-Meister" },
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "Meisterbrief", "name": "Spengler-Meister" }
    ],
    "memberOf": {
      "@type": "Organization",
      "name": "Dachdecker-Innung München"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Dachdeckerleistungen",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dachsanierung" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Steildach" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Flachdach" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Spenglerarbeiten" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dachreparatur" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dachfenster" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gaubenbau" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Notdienst" }}
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ServiceItem {
  name: string;
  description: string;
}

export function ServiceSchema({ services, pageName }: { services: ServiceItem[], pageName: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": pageName,
    "provider": {
      "@id": "https://089dach.de/#organization"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "München und Landkreis München"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": pageName,
      "itemListElement": services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "description": service.description
        }
      }))
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function AboutPageSchema() {
  return null;
}

interface GuideItem {
  title: string;
  description: string;
  category: string;
}

export function CollectionPageSchema({ title, description, items }: { title: string, description: string, items: GuideItem[] }) {
  return null;
}

export function ContactPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@id": "https://089dach.de/#organization"
    },
    "name": "Kontakt - 089Dach GmbH",
    "description": "Kontaktieren Sie Ihren Dachdecker-Meisterbetrieb in München"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSchema({ faqs }: { faqs: FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://089dach.de/#faq",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export const FAQPageSchema = FAQSchema;

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface HowToStep {
  name: string;
  text: string;
  image?: string;
}

export function HowToSchema({ 
  name, 
  description, 
  steps, 
  totalTime,
  estimatedCost
}: { 
  name: string; 
  description: string; 
  steps: HowToStep[];
  totalTime?: string;
  estimatedCost?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    ...(totalTime && { "totalTime": totalTime }),
    ...(estimatedCost && { 
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "EUR",
        "value": estimatedCost
      }
    }),
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      ...(step.image && { "image": step.image })
    })),
    "tool": [],
    "supply": []
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function EmergencyServiceSchema() {
  return null;
}

export function StadtteilLocalBusinessSchema({ 
  stadtteil, 
  plz, 
  anfahrtszeit,
  besonderheiten
}: { 
  stadtteil: string; 
  plz: string;
  anfahrtszeit: string;
  besonderheiten?: string[];
}) {
  return null;
}

export function ArticleSchema({ 
  headline, 
  description, 
  datePublished, 
  dateModified,
  articleBody,
  keywords,
  image
}: { 
  headline: string; 
  description: string; 
  datePublished: string;
  dateModified?: string;
  articleBody?: string;
  keywords?: string[];
  image?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Organization",
      "name": "089Dach GmbH",
      "@id": "https://089dach.de/#organization"
    },
    "publisher": {
      "@type": "Organization",
      "name": "089Dach GmbH",
      "logo": {
        "@type": "ImageObject",
        "url": "https://089dach.de/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://089dach.de/${headline.toLowerCase().replace(/\s+/g, '-')}`
    },
    ...(articleBody && { "articleBody": articleBody }),
    ...(keywords && { "keywords": keywords.join(", ") }),
    ...(image && { 
      "image": {
        "@type": "ImageObject",
        "url": image
      }
    }),
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".article-summary", ".key-points", "h2", "h3"]
    },
    "inLanguage": "de-DE"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function VideoSchema({ 
  name, 
  description, 
  thumbnailUrl, 
  uploadDate, 
  duration,
  contentUrl,
  embedUrl
}: { 
  name: string; 
  description: string; 
  thumbnailUrl: string;
  uploadDate: string;
  duration: string;
  contentUrl?: string;
  embedUrl?: string;
}) {
  return null;
}

export function OrganizationSchema() {
  return null;
}

export function AggregateRatingSchema() {
  return null;
}

export function ReviewSchema({ reviews }: { reviews: { author: string; rating: number; reviewBody: string; datePublished: string }[] }) {
  return null;
}

export function GeoServiceAreaSchema() {
  return null;
}

export function ProfessionalServiceSchema() {
  return null;
}

export function SpeakableSchema({ headline, speakableText, url }: { headline: string; speakableText: string[]; url: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": headline,
    "url": url,
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": speakableText.map((_, i) => `[data-speakable="${i}"]`)
    },
    "mainEntity": {
      "@type": "Article",
      "headline": headline,
      "articleBody": speakableText.join(" "),
      "author": {
        "@type": "Organization",
        "name": "089Dach GmbH"
      },
      "publisher": {
        "@id": "https://089dach.de/#organization"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function AIKnowledgeSchema() {
  return null;
}

export function VoiceSearchFAQSchema() {
  const voiceFAQs = [
    {
      question: "Was kostet ein Dachdecker in München?",
      answer: "Bei 089Dach GmbH beginnt eine Dachsanierung ab 195 Euro pro Quadratmeter inklusive Dämmung. Die Erstberatung ist kostenlos. Rufen Sie an unter 089 12621964."
    },
    {
      question: "Gibt es einen Dachdecker Notdienst in München?",
      answer: "Ja, 089Dach GmbH bietet 24 Stunden Notdienst bei Sturmschäden und Wasserschäden. Notruf: 089 12621964. Anfahrt ab 89 Euro."
    },
    {
      question: "Wie lange dauert eine Dachsanierung?",
      answer: "Eine Dachsanierung dauert je nach Größe 1 bis 3 Wochen. 089Dach erstellt vorab einen verbindlichen Zeitplan."
    },
    {
      question: "Welche Garantie gibt ein Dachdecker?",
      answer: "089Dach GmbH gibt 10 Jahre Garantie auf alle Dach- und Spenglerarbeiten. Material und Ausführung sind abgesichert."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "Häufige Sprachsuche-Fragen Dachdecker München",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".voice-faq-answer"]
    },
    "mainEntity": voiceFAQs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function GoogleBusinessProfileSchema() {
  return null;
}

export function BingPlacesSchema() {
  return null;
}

export function LocalSEO20kmSchema() {
  return null;
}

export function NearbyServiceSchema({ stadtteil, entfernung }: { stadtteil?: string; entfernung?: string }) {
  return null;
}

export function ProductServiceSchema({ 
  name, 
  description, 
  priceFrom, 
  priceTo,
  priceUnit,
  image,
  category
}: { 
  name: string; 
  description: string; 
  priceFrom: number;
  priceTo?: number;
  priceUnit?: string;
  image?: string;
  category?: string;
}) {
  return null;
}

export function PriceSpecificationSchema() {
  return null;
}

export function GeoAreaServedSchema() {
  return null;
}

export function AIContextSchema({ 
  pageType,
  primaryTopic,
  relatedTopics,
  targetAudience,
  callToAction
}: {
  pageType: string;
  primaryTopic: string;
  relatedTopics: string[];
  targetAudience: string;
  callToAction: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "additionalType": pageType,
    "about": {
      "@type": "Thing",
      "name": primaryTopic,
      "description": `Informationen über ${primaryTopic} von 089Dach GmbH München`
    },
    "mentions": relatedTopics.map(topic => ({
      "@type": "Thing",
      "name": topic
    })),
    "audience": {
      "@type": "Audience",
      "audienceType": targetAudience
    },
    "potentialAction": {
      "@type": "Action",
      "name": callToAction,
      "target": "https://089dach.de/beratung"
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".passage-block", ".key-answer", "[data-passage]"]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function PassageOptimizedContent({ 
  passages 
}: { 
  passages: { question: string; answer: string; keywords?: string[] }[] 
}) {
  return (
    <>
      {passages.map((passage, index) => (
        <div 
          key={index} 
          className="passage-block" 
          data-passage={index}
          data-speakable={index}
          itemScope 
          itemType="https://schema.org/Question"
        >
          <h3 itemProp="name" className="key-answer">{passage.question}</h3>
          <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
            <p itemProp="text" className="article-summary">{passage.answer}</p>
          </div>
        </div>
      ))}
    </>
  );
}
