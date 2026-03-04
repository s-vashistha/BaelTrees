import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";
import urbanImg from "@/assets/project-urban.jpg";
import lakeImg from "@/assets/project-lake.jpg";
import agroImg from "@/assets/project-agroforestry.jpg";
import waterImg from "@/assets/project-water.jpg";
import energyImg from "@/assets/project-energy.jpg";
import missionImg from "@/assets/mission-image.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const pastEvents = [
  { date: "Jan 26, 2026", title: "Republic Day Plantation Drive", location: "Bengaluru", attendees: "800", trees: "3,000", description: "A massive plantation drive on Republic Day where volunteers planted 3,000 native saplings across Bengaluru's outskirts.", img: missionImg },
  { date: "Nov 1, 2025", title: "Green Diwali Drive", location: "Delhi", attendees: "1,200", trees: "5,000", description: "An eco-friendly Diwali celebration that replaced crackers with tree planting across 12 locations in Delhi NCR.", img: waterImg },
  { date: "Aug 15, 2025", title: "Independence Day Forest Walk", location: "Mysuru", attendees: "2,000", trees: "8,000", description: "A forest restoration event combined with guided nature walks, bird watching, and environmental education workshops.", img: energyImg },
  { date: "Jun 5, 2025", title: "World Environment Day 2025", location: "Mumbai", attendees: "3,500", trees: "12,000", description: "Our largest event of 2025 — a city-wide movement planting 12,000 trees with corporate partners and citizen volunteers.", img: urbanImg },
  { date: "Apr 22, 2025", title: "Earth Day Lake Cleanup", location: "Hyderabad", attendees: "600", trees: "1,500", description: "Community-driven lake cleanup and afforestation drive that restored 2 km of lake shoreline.", img: lakeImg },
  { date: "Mar 21, 2025", title: "International Day of Forests", location: "Bengaluru", attendees: "1,800", trees: "6,000", description: "A collaborative drive with schools and colleges planting 6,000 native species across degraded forest patches.", img: agroImg },
];

const EventsPage = () => {
  const { t } = useLanguage();

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

        {/* Past Events with Images */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <p className="text-primary font-medium uppercase tracking-widest text-sm mb-2">{t("Our Track Record", "हमारा ट्रैक रिकॉर्ड")}</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">{t("Past Events & Impact", "पिछले कार्यक्रम और प्रभाव")}</h2>
              <p className="mt-3 text-muted-foreground max-w-xl mx-auto">{t("Every event we host creates lasting environmental impact. Here's what we've accomplished.", "हमारे द्वारा आयोजित प्रत्येक कार्यक्रम स्थायी पर्यावरणीय प्रभाव बनाता है।")}</p>
            </motion.div>
            <div className="space-y-8">
              {pastEvents.map((e, i) => (
                <motion.div key={e.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-card rounded-xl border border-border overflow-hidden">
                  <div className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="md:w-2/5 overflow-hidden">
                      <img src={e.img} alt={e.title} className="w-full h-60 md:h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
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
