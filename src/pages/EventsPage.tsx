import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { MapPin, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

// Drive event images from public folder (proof of past drive events)
const driveEventImages = [
  "/paper_cutting_img/500091900205_287517_result.webp",
  "/paper_cutting_img/500142000796_70865_result.webp",
  "/paper_cutting_img/500153400920_207043_result.webp",
  "/paper_cutting_img/IMG_20190712_124233_result.webp",
  "/paper_cutting_img/IMG_20190712_124233_result_result.webp",
  "/paper_cutting_img/IMG_20190715_111509_result.webp",
  "/paper_cutting_img/IMG_20190718_074730_result.webp",
  "/paper_cutting_img/IMG_20190722_205138_result.webp",
  "/paper_cutting_img/IMG_20201023_083416_result.webp",
  "/paper_cutting_img/IMG_20201023_083427_result.webp",
  "/paper_cutting_img/IMG_20210308_153851_result.webp",
  "/paper_cutting_img/IMG_20210308_154038_result.webp",
  "/paper_cutting_img/IMG_20210308_154236_result.webp",
  "/paper_cutting_img/IMG_20210412_125931_result.webp",
  "/paper_cutting_img/IMG_20210414_072743_result.webp",
  "/paper_cutting_img/IMG_20210613_121702_result.webp",
  "/paper_cutting_img/IMG_20210618_075108_result.webp",
  "/paper_cutting_img/IMG_20211017_085854_result.webp",
  "/paper_cutting_img/IMG_20220621_164235_result.webp",
  "/paper_cutting_img/IMG_20220801_224907_result.webp",
];

// Event data with drive event images (proof of past drives)
const driveEvents = driveEventImages.map((img, index) => ({
  date: `201${Math.floor(index / 6)}-${String((index % 12) + 1).padStart(2, '0')}-${String((index % 28) + 1).padStart(2, '0')}`,
  title: [
    "Bael Tree Plantation Drive",
    "Bael Sapling Distribution",
    "Bael Green Belt Development",
    "Bael for Schools Program",
    "Bael Lake Area Greening",
    "Urban Bael Initiative",
    "Village Bael Afforestation",
    "Corporate Bael Drive",
    "Neighborhood Bael Planting",
    "Bael Riverbank Restoration",
    "Bael Park Development",
    "Bael Botanical Setup",
    "Bael Wildlife Corridor",
    "Bael Herbal Garden",
    "Bael Roadside Planting",
    "Residential Bael Greening",
    "Campus Bael Program",
    "Temple Bael Plantation",
    "Public Bael Space",
    "Seasonal Bael Plantation"
  ][index % 20],
  location: ["Bengaluru", "Mysuru", "Chennai", "Hyderabad", "Delhi", "Pune", "Mumbai", "Coimbatore"][index % 8],
  attendees: String(Math.floor(Math.random() * 150) + 20),
  trees: String(Math.floor(Math.random() * 500) + 100),
  img,
}));

const pastEvents = [
  { date: "Jan 26, 2019", title: "Bael Tree Plantation Drive", location: "Bengaluru", attendees: "800", trees: "3,000", description: "A massive Bael tree plantation drive on Republic Day where volunteers planted 3,000 native Bael saplings across Bengaluru's outskirts.", img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800" },
  { date: "Nov 1, 2019", title: "Bael Sapling Distribution Campaign", location: "Delhi", attendees: "1,200", trees: "5,000", description: "An awareness campaign distributing Bael saplings to households across 12 locations in Delhi NCR to promote environmental responsibility.", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800" },
  { date: "Aug 15, 2019", title: "Bael Trees for Independence", location: "Mysuru", attendees: "2,000", trees: "8,000", description: "A Bael tree restoration event combined with guided nature walks, spiritual significance awareness, and environmental education workshops.", img: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800" },
  { date: "Jun 5, 2019", title: "World Environment Day - Bael Plantation", location: "Mumbai", attendees: "3,500", trees: "12,000", description: "Our largest event of 2019 — a city-wide movement planting 12,000 Bael trees with corporate partners and citizen volunteers.", img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800" },
  { date: "Apr 22, 2019", title: "Bael Tree Memorial Plantation", location: "Hyderabad", attendees: "600", trees: "1,500", description: "Community-driven plantation drive honoring loved ones through memorial Bael tree planting, restoring ecological balance.", img: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800" },
  { date: "Mar 21, 2019", title: "Bael Plantation Awareness Drive", location: "Bengaluru", attendees: "1,800", trees: "6,000", description: "A collaborative drive with schools and colleges planting 6,000 Bael saplings, educating youth about the spiritual and medicinal importance of Bael trees.", img: "https://images.unsplash.com/photo-1511497584788-876760111969?w=800" },
];

const ITEMS_PER_PAGE = 8;

const EventsPage = () => {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(driveEvents.length / ITEMS_PER_PAGE);

  const displayedEvents = driveEvents.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16 md:pt-20">
        <PageHero
          title={t("Our Green Movement", "हमारा हरित आंदोलन")}
          subtitle={t("See the impact of our past plantation drives, cleanups, workshops, and more.", "हमारे पिछले वृक्षारोपण अभियानों, सफाई, कार्यशालाओं का प्रभाव देखें।")}
          image={heroBanner}
          ctaText={t("Get Involved", "शामिल हों")}
          ctaLink="/get-involved"
        />

        {/* Past Drive Events Gallery with Pagination */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <p className="text-primary font-medium uppercase tracking-widest text-sm mb-2">{t("Our Track Record", "हमारा ट्रैक रिकॉर्ड")}</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">{t("Past Drive Events", "पिछले ड्राइव कार्यक्रम")}</h2>
              <p className="mt-3 text-muted-foreground max-w-xl mx-auto">{t("Explore our past plantation drives and environmental initiatives.", "हमारे पिछले वृक्षारोपण अभियानों और पर्यावरण पहलों का अन्वेषण करें।")}</p>
            </motion.div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayedEvents.map((e, i) => (
                <motion.div 
                  key={`${e.title}-${i}`}
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ delay: i * 0.05 }}
                  className="bg-secondary/50 rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="aspect-square overflow-hidden group relative">
                    <a href={e.img} target="_blank" rel="noopener noreferrer">
                      <img 
                        src={e.img} 
                        alt={e.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" 
                        loading="lazy" 
                      />
                    </a>
                    <a 
                      href={e.img} 
                      download={e.title + ".webp"}
                      className="absolute bottom-2 right-2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      title="Download"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    </a>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>{e.date}</span>
                    </div>
                    <h3 className="font-serif text-lg text-foreground mb-2 line-clamp-1">{e.title}</h3>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{e.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs">
                      <span className="text-primary font-medium">{e.attendees} {t("volunteers", "स्वयंसेवक")}</span>
                      <span className="text-accent font-medium">{e.trees} {t("trees", "पेड़")}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-4 mt-10">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="icon"
                      onClick={() => setCurrentPage(page)}
                      className="w-10 h-10"
                    >
                      {page}
                    </Button>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Past Events with Images */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <p className="text-primary font-medium uppercase tracking-widest text-sm mb-2">{t("Our Impact", "हमारा प्रभाव")}</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">{t("Major Events & Impact", "प्रमुख कार्यक्रम और प्रभाव")}</h2>
              <p className="mt-3 text-muted-foreground max-w-xl mx-auto">{t("Every event we host creates lasting environmental impact. Here's what we've accomplished.", "हमारे द्वारा आयोजित प्रत्येक कार्यक्रम स्थायी पर्यावरणीय प्रभाव बनाता है।")}</p>
            </motion.div>
            <div className="space-y-8">
              {pastEvents.map((e, i) => (
                <motion.div key={e.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-card rounded-xl border border-border overflow-hidden">
                  <div className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="md:w-2/5 overflow-hidden group relative">
                      <a href={e.img} target="_blank" rel="noopener noreferrer">
                        <img src={e.img} alt={e.title} className="w-full h-60 md:h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" loading="lazy" />
                      </a>
                      <a 
                        href={e.img} 
                        download={e.title + ".webp"}
                        className="absolute bottom-2 right-2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Download"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                      </a>
                    </div>
                    <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>{e.date}</span>
                        <span className="mx-1">•</span>
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{e.location}</span>
                      </div>
                      <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">{e.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-5">{e.description}</p>
                      <div className="flex gap-6">
                        <div>
                          <p className="text-2xl font-bold text-primary">{e.attendees}</p>
                          <p className="text-xs text-muted-foreground">{t("Volunteers", "स्वयंसेवक")}</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-leaf">{e.trees}</p>
                          <p className="text-xs text-muted-foreground">{t("Trees Planted", "पेड़ लगाए")}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Volunteer CTA */}
        <section className="py-16 md:py-20 bg-primary">
          <div className="container text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground mb-4">{t("Want to Volunteer?", "स्वयंसेवा करना चाहते हैं?")}</h2>
              <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">{t("Join our volunteer community and be part of events that create real, lasting environmental impact.", "हमारे स्वयंसेवक समुदाय से जुड़ें।")}</p>
              <Button size="lg" variant="secondary">{t("Sign Up as Volunteer", "स्वयंसेवक बनें")}</Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EventsPage;
