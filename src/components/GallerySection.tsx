import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

// Use the same images as GalleryPage "All" section (first 6 images)
const allImages = [
  // Plantations (first 2)
  { src: "/selected plantation/IMG_20190603_094554 - Copy_result.webp", alt: "Plantation drive activity" },
  { src: "/selected plantation/IMG_20180614_082512_result.webp", alt: "Sapling plantation in progress" },
  // River Restoration (first 2)
  { src: "/selected plantation/IMG-20190427-WA0046_result.webp", alt: "River restoration project" },
  { src: "/selected plantation/IMG-20190505-WA0029_result.webp", alt: "Water body rejuvenation" },
  // Community (first 1)
  { src: "/selected plantation/IMG_20180618_095207_result.webp", alt: "Community gathering" },
  // Events (first 1)
  { src: "/selected plantation/IMG-20210805-WA0106_result.webp", alt: "Event celebration" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);
  
  // Show only 6 images
  const displayImages = allImages.slice(0, 6);

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <p className="text-primary font-medium uppercase tracking-widest text-sm mb-2">Our Impact in Pictures</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">Photo Gallery</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {displayImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="overflow-hidden rounded-lg cursor-pointer group aspect-[4/3]"
              onClick={() => setSelected(i)}
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
            </motion.div>
          ))}
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-8">
          <Link 
            to="/gallery" 
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            View More Photos
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <button className="absolute top-4 right-4 text-primary-foreground" onClick={() => setSelected(null)} aria-label="Close">
            <X className="w-8 h-8" />
          </button>
          <img src={displayImages[selected].src} alt={displayImages[selected].alt} className="max-w-full max-h-[85vh] rounded-lg object-contain" />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
