interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  title?: string;
  columns?: 2 | 3 | 4;
}

export default function ImageGallery({ images, title, columns = 2 }: ImageGalleryProps) {
  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
  };

  return (
    <section className="py-3 md:py-4 bg-stone-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        {title && (
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-8 text-center">
            {title}
          </h2>
        )}
        <div className={`grid ${gridCols[columns]} gap-4 md:gap-6`}>
          {images.map((image, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-xl shadow-md">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white text-sm font-medium">{image.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
