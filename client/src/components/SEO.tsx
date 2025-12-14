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
