import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import projectUrban from "@/assets/project-urban.jpg";
import projectLake from "@/assets/project-lake.jpg";
import projectAgroforestry from "@/assets/project-agroforestry.jpg";
import projectWater from "@/assets/project-water.jpg";
import projectEnergy from "@/assets/project-energy.jpg";
import missionImage from "@/assets/mission-image.jpg";

const images = [
  { src: projectUrban, alt: "Urban forestry plantation drive" },
  { src: projectLake, alt: "Lake restoration work" },
  { src: projectAgroforestry, alt: "Agroforestry project with farmers" },
  { src: projectWater, alt: "Water conservation initiative" },
  { src: projectEnergy, alt: "Clean energy awareness program" },
  { src: missionImage, alt: "Community volunteering event" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <p className="text-primary font-medium uppercase tracking-widest text-sm mb-2">Our Impact in Pictures</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">Photo Gallery</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
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
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <button className="absolute top-4 right-4 text-primary-foreground" onClick={() => setSelected(null)} aria-label="Close">
            <X className="w-8 h-8" />
          </button>
          <img src={images[selected].src} alt={images[selected].alt} className="max-w-full max-h-[85vh] rounded-lg object-contain" />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
