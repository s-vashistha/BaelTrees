import { motion } from "framer-motion";
import missionImg from "@/assets/mission-image.jpg";
import corporateHero from "@/assets/corporate-hero.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { Target, Eye } from "lucide-react";

const MissionSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-secondary" id="about-us">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="text-center mb-12"
        >
          <p className="text-primary font-medium uppercase tracking-widest text-sm mb-2">What Drives Us</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">Our Mission & Vision</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mission Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5 }}
            className="bg-card rounded-xl overflow-hidden shadow-lg border border-border"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={missionImg} 
                alt="Volunteers planting trees together" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                loading="lazy" 
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <p className="text-primary font-medium uppercase tracking-widest text-sm">{t("Our Mission", "हमारा मिशन")}</p>
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">
                {t("Building a Greener, More Equitable World", "एक हरा-भरा, अधिक न्यायसंगत विश्व बनाना")}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t("BaelTrees Environmental Trust is dedicated to restoring degraded ecosystems through large-scale afforestation, water conservation, and sustainable livelihood programs that benefit both people and planet.", "सेट्रीज़ पर्यावरण ट्रस्ट बड़े पैमाने पर वनीकरण, जल संरक्षण और सतत आजीविका कार्यक्रमों के माध्यम से क्षरित पारिस्थितिकी तंत्र को बहाल करने के लिए समर्पित है।")}
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-xl overflow-hidden shadow-lg border border-border"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={corporateHero} 
                alt="Green future vision" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                loading="lazy" 
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <p className="text-primary font-medium uppercase tracking-widest text-sm">{t("Our Vision", "हमारी दृष्टि")}</p>
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">
                {t("A Thriving Planet for All", "सबके लिए एक समृद्ध ग्रह")}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t("A world where every community thrives in harmony with nature, breathing clean air, drinking pure water, and enjoying the shade of forests they helped grow.", "एक ऐसी दुनिया जहां हर समुदाय प्रकृति के साथ सामंजस्य में फले-फूले, स्वच्छ हवा में सांस ले, शुद्ध पानी पिए और उन जंगलों की छाया का आनंद ले।")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
