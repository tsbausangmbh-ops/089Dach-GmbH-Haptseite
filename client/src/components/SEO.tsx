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
    document.title = title;
    
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
    
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:type', 'website', true);
    setMeta('og:locale', 'de_DE', true);
    setMeta('og:site_name', '089Dach GmbH München', true);
    
    setMeta('twitter:title', title);
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
    "inLanguage": "de-DE",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://089dach.de/suche?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function SiteNavigationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": "Hauptnavigation",
    "hasPart": [
      { "@type": "WebPage", "name": "Dachsanierung", "url": "https://089dach.de/leistungen/dachsanierung" },
      { "@type": "WebPage", "name": "Dachreparatur", "url": "https://089dach.de/dachreparatur" },
      { "@type": "WebPage", "name": "Flachdach", "url": "https://089dach.de/leistungen/flachdach" },
      { "@type": "WebPage", "name": "Spengler", "url": "https://089dach.de/dachdecker-spengler-muenchen" },
      { "@type": "WebPage", "name": "Kosten", "url": "https://089dach.de/dachdecker-muenchen-kosten" },
      { "@type": "WebPage", "name": "Notdienst", "url": "https://089dach.de/dachdecker-notdienst-muenchen" },
      { "@type": "WebPage", "name": "Beratung", "url": "https://089dach.de/beratung" },
      { "@type": "WebPage", "name": "Kontakt", "url": "https://089dach.de/kontakt" }
    ]
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": "https://089dach.de/#organization",
    "name": "089Dach GmbH",
    "alternateName": ["089 Dach", "Dachdecker München Obermenzing"],
    "image": "https://089dach.de/opengraph.jpg",
    "logo": "https://089dach.de/logo.png",
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
      "ratingValue": 4.9,
      "bestRating": 5,
      "worstRating": 1,
      "ratingCount": 62,
      "reviewCount": 62
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "M. Schmidt" },
        "reviewRating": { "@type": "Rating", "ratingValue": 5 },
        "reviewBody": "Professionelle Dachsanierung in Schwabing. Pünktlich, sauber, faire Preise.",
        "datePublished": "2025-11-15"
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Familie Weber" },
        "reviewRating": { "@type": "Rating", "ratingValue": 5 },
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
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@id": "https://089dach.de/#organization"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface GuideItem {
  title: string;
  description: string;
  category: string;
}

export function CollectionPageSchema({ title, description, items }: { title: string, description: string, items: GuideItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": title,
    "description": description,
    "publisher": {
      "@id": "https://089dach.de/#organization"
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": "Ratgeber-Artikel",
      "numberOfItems": items.length,
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.title,
        "description": item.description
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
  totalTime
}: { 
  name: string; 
  description: string; 
  steps: HowToStep[];
  totalTime?: string;
}) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      ...(step.image && { "image": step.image })
    }))
  };

  if (totalTime) {
    schema.totalTime = totalTime;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function EmergencyServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://089dach.de/#notdienst",
    "name": "Dachdecker Notdienst München - 24/7",
    "description": "Sofortige Hilfe bei Sturmschäden, Wasserschäden und Dachnotfällen in München und Umgebung. 24 Stunden am Tag, 7 Tage die Woche erreichbar.",
    "provider": {
      "@id": "https://089dach.de/#organization"
    },
    "serviceType": "Notdienst",
    "availableChannel": {
      "@type": "ServiceChannel",
      "servicePhone": "+49-89-12621964",
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "München und Landkreis München"
    },
    "termsOfService": "Schnelle Hilfe bei Dachschäden - auch nachts und am Wochenende"
  };

  return (<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />);
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
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://089dach.de/dachdecker-${stadtteil.toLowerCase().replace(/[äöüß]/g, m => ({ä:'ae',ö:'oe',ü:'ue',ß:'ss'})[m] || m).replace(/\s+/g, '-')}#local`,
    "name": `Dachdecker ${stadtteil}`,
    "description": `Ihr Dachdecker-Meisterbetrieb für ${stadtteil} (${plz}). Nur ${anfahrtszeit} Anfahrt. ${besonderheiten ? besonderheiten.join(', ') : 'Dachsanierung, Reparatur, Notdienst.'}`,
    "provider": {
      "@id": "https://089dach.de/#organization"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": stadtteil
    },
    "serviceType": ["Dachsanierung", "Dachreparatur", "Notdienst"]
  };

  return (<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />);
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
    "image": image || "https://089dach.de/opengraph.jpg",
    "author": {
      "@type": "Person",
      "name": "Falko Georg Blöckinger",
      "jobTitle": "Dachdecker- und Spenglermeister",
      "worksFor": {
        "@id": "https://089dach.de/#organization"
      }
    },
    "publisher": {
      "@id": "https://089dach.de/#organization"
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://089dach.de"
    },
    ...(articleBody && { "articleBody": articleBody }),
    ...(keywords && { "keywords": keywords.join(", ") }),
    "inLanguage": "de-DE",
    "isAccessibleForFree": true
  };

  return (<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />);
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
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": name,
    "description": description,
    "thumbnailUrl": thumbnailUrl,
    "uploadDate": uploadDate,
    "duration": duration,
    ...(contentUrl && { "contentUrl": contentUrl }),
    ...(embedUrl && { "embedUrl": embedUrl }),
    "publisher": {
      "@id": "https://089dach.de/#organization"
    }
  };

  return (<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />);
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
  return null;
}

export function AIKnowledgeSchema() {
  return null;
}

export function VoiceSearchFAQSchema() {
  return null;
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
  return null;
}
