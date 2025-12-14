import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
}

export default function SEO({ title, description, canonical, keywords }: SEOProps) {
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
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);

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
  }, [title, description, canonical, keywords]);

  return null;
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": "089Dach GmbH",
    "image": "https://089dach.de/opengraph.jpg",
    "@id": "https://089dach.de",
    "url": "https://089dach.de",
    "telephone": "+49-89-12621964",
    "priceRange": "€€",
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
    "areaServed": [
      "München",
      "Obermenzing", 
      "Schwabing",
      "Pasing",
      "Sendling",
      "Gräfelfing",
      "Laim",
      "Neuhausen",
      "Nymphenburg"
    ],
    "sameAs": [
      "https://www.instagram.com/089dach",
      "https://www.facebook.com/089dach"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Dachdeckerleistungen",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dachsanierung"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Steildach"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Flachdach"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Spenglerarbeiten"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dachreparatur"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dachfenster"
          }
        }
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
      "@type": "RoofingContractor",
      "name": "089Dach GmbH",
      "telephone": "+49-89-12621964",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Thuillestr. 20",
        "addressLocality": "München",
        "postalCode": "81247",
        "addressCountry": "DE"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "München"
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
      "@type": "Organization",
      "name": "089Dach GmbH",
      "description": "Familiengeführter Dachdecker-Meisterbetrieb aus München-Obermenzing mit über 25 Jahren Erfahrung",
      "founder": {
        "@type": "Person",
        "name": "Falko Georg Blöckinger",
        "jobTitle": "Geschäftsführer und Dachdecker- & Spenglermeister",
        "knowsAbout": ["Dachsanierung", "Steildach", "Flachdach", "Spenglerarbeiten", "Energetische Sanierung"]
      },
      "foundingDate": "1998",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "value": 10
      },
      "slogan": "Wir machen das aus Leidenschaft",
      "award": "Meisterbetrieb seit 1998"
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
      "@type": "Organization",
      "name": "089Dach GmbH"
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

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQPageSchema({ faqs }: { faqs: FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
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

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://089dach.de${item.url}`
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
