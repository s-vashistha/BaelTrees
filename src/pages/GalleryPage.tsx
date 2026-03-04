import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { useState } from "react";
import { X, Play } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import projectUrban from "@/assets/project-urban.jpg";
import projectLake from "@/assets/project-lake.jpg";
import projectAgroforestry from "@/assets/project-agroforestry.jpg";
import projectWater from "@/assets/project-water.jpg";
import projectEnergy from "@/assets/project-energy.jpg";
import missionImage from "@/assets/mission-image.jpg";
import aboutHero from "@/assets/about-hero.jpg";
import corporateHero from "@/assets/corporate-hero.jpg";
import donateHero from "@/assets/donate-hero.jpg";
import founderImg from "@/assets/founder.jpg";

const galleryCategories = ["All", "Plantations", "Lake Restoration", "Events", "Corporate", "Community"];

const images = [
  { src: projectUrban, alt: "Urban forestry plantation drive in Bengaluru", category: "Plantations" },
  { src: projectLake, alt: "Jakkur Lake restoration project", category: "Lake Restoration" },
  { src: projectAgroforestry, alt: "Agroforestry project with farmers in Karnataka", category: "Community" },
  { src: projectWater, alt: "Water conservation initiative", category: "Lake Restoration" },
  { src: projectEnergy, alt: "Clean energy awareness program", category: "Events" },
  { src: missionImage, alt: "Community volunteering event", category: "Community" },
  { src: aboutHero, alt: "BaelTrees team at annual planning meet", category: "Events" },
  { src: corporateHero, alt: "Corporate partnership plantation drive", category: "Corporate" },
  { src: donateHero, alt: "Impact of donations — nursery growth", category: "Plantations" },
  { src: founderImg, alt: "Founder addressing volunteers", category: "Events" },
  { src: projectUrban, alt: "Sapling distribution drive", category: "Plantations" },
  { src: projectLake, alt: "Lake cleanup with citizen volunteers", category: "Lake Restoration" },
];

const videos = [
  { id: "dQw4w9WgXcQ", title: "BaelTrees – Our Journey So Far", description: "Watch how BaelTrees has been transforming landscapes across India." },
  { id: "ScMzIvxBSi4", title: "Mega Plantation Drive 2025", description: "Highlights from our annual mega plantation event with 5,000 volunteers." },
  { id: "LXb3EKWsInQ", title: "Lake Restoration Success Story", description: "See how we revived a dying urban lake back to its full ecological glory." },
  { id: "dQw4w9WgXcQ", title: "Corporate Volunteering Day", description: "How corporates are partnering with BaelTrees for impactful team events." },
  { id: "ScMzIvxBSi4", title: "Agroforestry With Farmers", description: "Integrating trees with agriculture to boost farmer incomes sustainably." },
  { id: "LXb3EKWsInQ", title: "World Environment Day 2025", description: "Highlights from our city-wide celebration across multiple locations." },
];

const GalleryPage = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const filteredImages = filter === "All" ? images : images.filter((img) => img.category === filter);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16 md:pt-20">
        <PageHero title="Gallery" subtitle="Explore our impact through photos and videos from the field." image={heroBanner} />

        {/* Photo Gallery */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
              <p className="text-primary font-medium uppercase tracking-widest text-sm mb-2">Our Impact in Pictures</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">Photo Gallery</h2>
            </motion.div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2 justify-center mb-10">
              {galleryCategories.map((cat) => (
                <button key={cat} onClick={() => setFilter(cat)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === cat ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-primary/10"}`}>{cat}</button>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {filteredImages.map((img, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="overflow-hidden rounded-lg cursor-pointer group aspect-[4/3] relative" onClick={() => setSelected(i)}>
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors flex items-end">
                    <p className="text-primary-foreground text-xs p-3 opacity-0 group-hover:opacity-100 transition-opacity">{img.alt}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Gallery */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <p className="text-primary font-medium uppercase tracking-widest text-sm mb-2">Watch & Learn</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">Videos & Documentaries</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((v, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-lg overflow-hidden border border-border bg-background">
                  <div className="relative aspect-video bg-muted cursor-pointer group" onClick={() => setPlayingVideo(playingVideo === i ? null : i)}>
                    {playingVideo === i ? (
                      <iframe src={`https://www.youtube.com/embed/${v.id}?autoplay=1`} className="w-full h-full" allow="autoplay; encrypted-media" allowFullScreen title={v.title} />
                    ) : (
                      <>
                        <img src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`} alt={v.title} className="w-full h-full object-cover" loading="lazy" />
                        <div className="absolute inset-0 flex items-center justify-center bg-foreground/30 group-hover:bg-foreground/40 transition-colors">
                          <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg">
                            <Play className="w-6 h-6 text-primary-foreground ml-0.5" />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-base text-foreground mb-1">{v.title}</h3>
                    <p className="text-muted-foreground text-sm">{v.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {selected !== null && (
          <div className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
            <button className="absolute top-4 right-4 text-primary-foreground" onClick={() => setSelected(null)} aria-label="Close"><X className="w-8 h-8" /></button>
            <img src={filteredImages[selected].src} alt={filteredImages[selected].alt} className="max-w-full max-h-[85vh] rounded-lg object-contain" />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
