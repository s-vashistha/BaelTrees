import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import DonationCTA from "@/components/DonationCTA";
import { motion } from "framer-motion";
import { TreePine, Droplets, Building, Sprout, Sun, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";
import agroImg from "@/assets/project-agroforestry.jpg";
import lakeImg from "@/assets/project-lake.jpg";
import urbanImg from "@/assets/project-urban.jpg";
import waterImg from "@/assets/project-water.jpg";
import energyImg from "@/assets/project-energy.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const programs = [
  { icon: Sprout, title: "Agroforestry", desc: "Integrating trees with agriculture to enhance biodiversity, improve soil health, and boost farmer incomes across drought-prone regions.", impact: "50,000+ trees on farmland", img: agroImg },
  { icon: Droplets, title: "Lake Restoration", desc: "Reviving urban and rural water bodies through desilting, bunding, native plantations, and community-led maintenance programs.", impact: "45+ lakes restored", img: lakeImg },
  { icon: Building, title: "Urban Forestry", desc: "Creating green corridors, pocket forests, and tree-lined avenues that bring nature back into concrete-heavy city landscapes.", impact: "80+ urban sites greened", img: urbanImg },
  { icon: Droplets, title: "Water Conservation", desc: "Constructing check dams, recharge wells, and rainwater harvesting systems to address water scarcity in rural communities.", impact: "200+ water structures built", img: waterImg },
  { icon: Sun, title: "Clean Energy & Climate Action", desc: "Promoting solar energy adoption in rural areas and implementing carbon sequestration through strategic afforestation.", impact: "1,500+ tonnes CO₂ offset", img: energyImg },
  { icon: BookOpen, title: "Climate Education", desc: "Running workshops, school programs, and awareness campaigns that educate youth about climate change and sustainable living.", impact: "10,000+ students reached", img: agroImg },
];

const OurWork = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16 md:pt-20">
        <PageHero
          title={t("Our Work", "हमारा कार्य")}
          subtitle={t("From planting forests to restoring lakes — discover how we're building a sustainable future across India.", "जंगल लगाने से लेकर झीलों को पुनर्स्थापित करने तक — जानिए कैसे हम पूरे भारत में एक सतत भविष्य बना रहे हैं।")}
          image={heroBanner}
        />

        {/* Impact Numbers */}
        <section className="py-12 bg-card">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { val: "3,50,000+", label: t("Trees Planted", "पेड़ लगाए") },
                { val: "45+", label: t("Lakes Restored", "झीलें पुनर्स्थापित") },
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
