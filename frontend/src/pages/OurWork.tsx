import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import DonationCTA from "@/components/DonationCTA";
import { motion } from "framer-motion";
import { TreePine, Droplets, Building, Sprout, Sun, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

// Real plantation images from public/selected plantation
const agroImg = "/selected plantation/IMG_20180614_082512_result.webp";
const riverImg = "/selected plantation/IMG-20190427-WA0046_result.webp";
const urbanImg = "/selected plantation/IMG_20180618_095207_result.webp";
const waterImg = "/selected plantation/IMG-20190505-WA0029_result.webp";
const energyImg = "/selected plantation/IMG_20190603_094554 - Copy_result.webp";

const programs = [
  { 
    icon: Sprout, 
    title: "Agroforestry", 
    desc: "Integrating trees with agriculture to enhance biodiversity, improve soil health, and boost farmer incomes across drought-prone regions.", 
    impact: "50,000+ trees on farmland", 
    img: agroImg,
    imageDesc: "Community members planting saplings during our mega plantation drive in rural farmland."
  },
  { 
    icon: Droplets, 
    title: "River Restoration", 
    desc: "Reviving urban and rural water bodies through desilting, bunding, native plantations, and community-led maintenance programs.", 
    impact: "45+ rivers restored", 
    img: riverImg,
    imageDesc: "River restoration project - reviving water bodies with native plantations and community participation."
  },
  { 
    icon: Building, 
    title: "Urban Forestry", 
    desc: "Creating green corridors, pocket forests, and tree-lined avenues that bring nature back into concrete-heavy city landscapes.", 
    impact: "80+ urban sites greened", 
    img: urbanImg,
    imageDesc: "Urban greening initiative - transforming city spaces with trees and green cover."
  },
  { 
    icon: Droplets, 
    title: "Water Conservation", 
    desc: "Constructing check dams, recharge wells, and rainwater harvesting systems to address water scarcity in rural communities.", 
    impact: "200+ water structures built", 
    img: waterImg,
    imageDesc: "Water body rejuvenation - restoring ponds and water bodies for sustainable groundwater recharge."
  },
  { 
    icon: Sun, 
    title: "Clean Energy & Climate Action", 
    desc: "Promoting solar energy adoption in rural areas and implementing carbon sequestration through strategic afforestation.", 
    impact: "1,500+ tonnes CO₂ offset", 
    img: energyImg,
    imageDesc: "Strategic afforestation for carbon sequestration and environmental sustainability."
  },
  { 
    icon: BookOpen, 
    title: "Climate Education", 
    desc: "Running workshops, school programs, and awareness campaigns that educate youth about climate change and sustainable living.", 
    impact: "10,000+ students reached", 
    img: "/selected plantation/IMG-20190717-WA0056_result.webp",
    imageDesc: "Climate awareness sessions engaging communities and schools about environmental conservation."
  },
];

const OurWork = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16 md:pt-20">
        <PageHero
          title={t("Our Work", "हमारा कार्य")}
          subtitle={t("From planting forests to restoring rivers — discover how we're building a sustainable future across India.", "जंगल लगाने से लेकर झीलों को पुनर्स्थापित करने तक — जानिए कैसे हम पूरे भारत में एक सतत भविष्य बना रहे हैं।")}
          image={heroBanner}
        />

        {/* Impact Numbers */}
        <section className="py-12 bg-card">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { val: "3,50,000+", label: t("Trees Planted", "पेड़ लगाए") },
                { val: "45+", label: t("Rivers Restored", "झीलें पुनर्स्थापित") },
                { val: "120+", label: t("Project Sites", "परियोजना स्थल") },
                { val: "7", label: t("Program Areas", "कार्यक्रम क्षेत्र") },
              ].map((s, i) => (
                <motion.div key={s.label} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <p className="font-serif text-3xl text-primary">{s.val}</p>
                  <p className="text-muted-foreground text-sm">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <p className="text-primary font-medium uppercase tracking-widest text-sm mb-2">{t("Our Programs", "हमारे कार्यक्रम")}</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">{t("Environmental Initiatives", "पर्यावरणीय पहल")}</h2>
            </motion.div>
            <div className="space-y-12">
              {programs.map((p, i) => (
                <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="grid md:grid-cols-2 gap-8 items-center">
                  <div className={i % 2 === 1 ? "md:order-2" : ""}>
                    <img src={p.img} alt={p.title} className="rounded-lg shadow-md w-full h-64 object-cover" loading="lazy" />
                    {p.imageDesc && (
                      <p className="text-muted-foreground text-sm mt-2 italic">{p.imageDesc}</p>
                    )}
                  </div>
                  <div className={i % 2 === 1 ? "md:order-1" : ""}>
                    <p.icon className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-serif text-2xl text-foreground mb-2">{p.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">{p.desc}</p>
                    <p className="text-primary font-medium text-sm mb-4">📊 {p.impact}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <DonationCTA title={t("Be Part of the Change", "बदलाव का हिस्सा बनें")} subtitle={t("Volunteer on the ground. Every action counts.", "जमीन पर स्वयंसेवा करें। हर कार्य मायने रखता है।")} />
      </main>
      <Footer />
    </div>
  );
};

export default OurWork;
