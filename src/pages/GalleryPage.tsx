import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { useState } from "react";
import { X, Play, ChevronRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

// Image paths from public/selected plantation - Plantation section (7 images)
const plantationImages = [
  "/selected plantation/IMG_20190603_094554 - Copy_result.webp",
  "/selected plantation/IMG_20180614_082512_result.webp",
  "/selected plantation/IMG_20180614_082409_result.webp",
  "/selected plantation/IMG_20180614_082331_result.webp",
  "/selected plantation/IMG_20180214_140621_result.webp",
  "/selected plantation/IMG_20180214_132551_result.webp",
  "/selected plantation/IMG_20180120_143847_result.webp",
];

// River Restoration section (5 images)
const riverRestorationImages = [
  "/selected plantation/IMG-20190427-WA0046_result.webp",
  "/selected plantation/IMG-20190505-WA0029_result.webp",
  "/selected plantation/IMG-20190511-WA0030_result.webp",
  "/selected plantation/IMG-20190511-WA0043_result.webp",
  "/selected plantation/IMG-20190511-WA0070_result.webp",
];

// Community section (14 images)
const communityImages = [
  "/selected plantation/IMG_20180618_095207_result.webp",
  "/selected plantation/IMG_20190114_142403 - Copy_result.webp",
  "/selected plantation/IMG_20190124_124854 - Copy_result.webp",
  "/selected plantation/IMG_20181202_080602 - Copy_result.webp",
  "/selected plantation/IMG_20181119_121836 - Copy_result.webp",
  "/selected plantation/IMG_20181119_114353 - Copy_result.webp",
  "/selected plantation/IMG_20180930_201556 - Copy_result.webp",
  "/selected plantation/IMG_20180930_173349_result.webp",
  "/selected plantation/IMG_20180930_173308_result.webp",
  "/selected plantation/IMG_20180618_095210_result.webp",
  "/selected plantation/IMG_20180722_151547_result.webp",
  "/selected plantation/IMG_20180822_141642_result.webp",
  "/selected plantation/IMG_20180920_140545_result.webp",
  "/selected plantation/IMG_20180930_173126_result.webp",
];

// Events section - using user provided images (duplicates with other sections allowed)
const eventsImages = [
  "/selected plantation/IMG-20210805-WA0106_result.webp",
  "/selected plantation/IMG_20211015_161255_result.webp",
  "/selected plantation/IMG_20210829_154851_result.webp",
  "/selected plantation/IMG_20190731_134310_result.webp",
  "/selected plantation/IMG-20190511-WA0070_result.webp",
  "/selected plantation/IMG_20180618_095210_result.webp",
  "/selected plantation/IMG_20180614_082331_result.webp",
  "/selected plantation/IMG_20180522_111934_result.webp",
  "/selected plantation/IMG_20190731_134310_result.webp",
];

const galleryCategories = ["All", "Plantations", "River Restoration", "Events", "Community"];

// All images combined with categories
const allImages = [
  // Plantations (all 7 images)
  { src: plantationImages[0], alt: "Plantation drive activity", category: "Plantations" },
  { src: plantationImages[1], alt: "Sapling plantation in progress", category: "Plantations" },
  { src: plantationImages[2], alt: "Community plantation event", category: "Plantations" },
  { src: plantationImages[3], alt: "Tree planting initiative", category: "Plantations" },
  { src: plantationImages[4], alt: "Tree nursery activity", category: "Plantations" },
  { src: plantationImages[5], alt: "Young saplings growth", category: "Plantations" },
  { src: plantationImages[6], alt: "Community tree planting", category: "Plantations" },
  // River Restoration (all 5 images)
  { src: riverRestorationImages[0], alt: "River restoration project", category: "River Restoration" },
  { src: riverRestorationImages[1], alt: "Water body rejuvenation", category: "River Restoration" },
  { src: riverRestorationImages[2], alt: "River cleanup activity", category: "River Restoration" },
  { src: riverRestorationImages[3], alt: "River conservation work", category: "River Restoration" },
  { src: riverRestorationImages[4], alt: "River restoration efforts", category: "River Restoration" },
  // Community (all 14 images)
  { src: communityImages[0], alt: "Community gathering", category: "Community" },
  { src: communityImages[1], alt: "Local community event", category: "Community" },
  { src: communityImages[2], alt: "Village community activity", category: "Community" },
  { src: communityImages[3], alt: "Community participation", category: "Community" },
  { src: communityImages[4], alt: "Community meeting", category: "Community" },
  { src: communityImages[5], alt: "Village development", category: "Community" },
  { src: communityImages[6], alt: "Local initiative", category: "Community" },
  { src: communityImages[7], alt: "Community work", category: "Community" },
  { src: communityImages[8], alt: "Group activity", category: "Community" },
  { src: communityImages[9], alt: "Volunteer gathering", category: "Community" },
  { src: communityImages[10], alt: "Team collaboration", category: "Community" },
  { src: communityImages[11], alt: "Group discussion", category: "Community" },
  { src: communityImages[12], alt: "Community outreach", category: "Community" },
  { src: communityImages[13], alt: "Local engagement", category: "Community" },
  // Events (all 9 images)
  { src: eventsImages[0], alt: "Event celebration", category: "Events" },
  { src: eventsImages[1], alt: "Annual event activity", category: "Events" },
  { src: eventsImages[2], alt: "Special event moment", category: "Events" },
  { src: eventsImages[3], alt: "Event highlight", category: "Events" },
  { src: eventsImages[4], alt: "Event gathering", category: "Events" },
  { src: eventsImages[5], alt: "Volunteer event", category: "Events" },
  { src: eventsImages[6], alt: "Community event", category: "Events" },
  { src: eventsImages[7], alt: "Team event", category: "Events" },
  { src: eventsImages[8], alt: "Special celebration", category: "Events" },
];

const videos = [
  { id: "dQw4w9WgXcQ", title: "BaelTrees – Our Journey So Far", description: "Watch how BaelTrees has been transforming landscapes across India." },
  { id: "ScMzIvxBSi4", title: "Mega Plantation Drive 2025", description: "Highlights from our annual mega plantation event with 5,000 volunteers." },
  { id: "LXb3EKWsInQ", title: "River Restoration Success Story", description: "See how we revived a dying urban river back to its full ecological glory." },
  { id: "dQw4w9WgXcQ", title: "Corporate Volunteering Day", description: "How corporates are partnering with BaelTrees for impactful team events." },
  { id: "ScMzIvxBSi4", title: "Agroforestry With Farmers", description: "Integrating trees with agriculture to boost farmer incomes sustainably." },
  { id: "LXb3EKWsInQ", title: "World Environment Day 2025", description: "Highlights from our city-wide celebration across multiple locations." },
];

const GalleryPage = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(4);

  // For "All" filter, show 4 latest from each category (16 images)
  // For specific category, show only 4
  const getFilteredImages = () => {
    if (filter === "All") {
      // Get 4 latest from each category
      const categories = ["Plantations", "River Restoration", "Community", "Events"];
      let result: typeof allImages = [];
      categories.forEach((cat) => {
        const catImages = allImages.filter((img) => img.category === cat).slice(0, 4);
        result = [...result, ...catImages];
      });
      return result.slice(0, visibleCount);
    }
    return allImages.filter((img) => img.category === filter).slice(0, visibleCount);
  };

  const filteredImages = getFilteredImages();

  // Calculate total available for current filter
  const getTotalCount = () => {
    if (filter === "All") {
      // Total = 7 + 5 + 14 + 9 = 35 images
      return plantationImages.length + riverRestorationImages.length + communityImages.length + eventsImages.length;
    }
    if (filter === "Plantations") return plantationImages.length;
    if (filter === "River Restoration") return riverRestorationImages.length;
    if (filter === "Community") return communityImages.length;
    if (filter === "Events") return eventsImages.length;
    return 0;
  };

  const totalAvailable = getTotalCount();
  const showViewMore = visibleCount < totalAvailable;

  const handleFilterChange = (category: string) => {
    setFilter(category);
    setVisibleCount(4);
  };

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
                <button key={cat} onClick={() => handleFilterChange(cat)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === cat ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-primary/10"}`}>{cat}</button>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {filteredImages.map((img, i) => (
                <motion.div key={`${img.src}-${i}`} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="overflow-hidden rounded-lg cursor-pointer group aspect-[4/3] relative" onClick={() => setSelected(i)}>
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors flex items-end">
                    <p className="text-primary-foreground text-xs p-3 opacity-0 group-hover:opacity-100 transition-opacity">{img.alt}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View More Button */}
            {showViewMore && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 4)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                  View More <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
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
