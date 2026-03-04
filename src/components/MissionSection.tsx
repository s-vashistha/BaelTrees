import { motion } from "framer-motion";
import missionImg from "@/assets/mission-image.jpg";
import corporateHero from "@/assets/corporate-hero.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const MissionSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-secondary" id="about-us">
      <div className="container">
        {/* Mission */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <img src={missionImg} alt="Volunteers planting trees together" className="rounded-lg shadow-lg w-full h-80 object-cover" loading="lazy" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <p className="text-primary font-medium uppercase tracking-widest text-sm mb-2">{t("Our Mission", "हमारा मिशन")}</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              {t("Building a Greener, More Equitable World", "एक हरा-भरा, अधिक न्यायसंगत विश्व बनाना")}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t("BaelTrees Environmental Trust is dedicated to restoring degraded ecosystems through large-scale afforestation, water conservation, and sustainable livelihood programs that benefit both people and planet.", "सेट्रीज़ पर्यावरण ट्रस्ट बड़े पैमाने पर वनीकरण, जल संरक्षण और सतत आजीविका कार्यक्रमों के माध्यम से क्षरित पारिस्थितिकी तंत्र को बहाल करने के लिए समर्पित है।")}
            </p>
          </motion.div>
        </div>
        {/* Vision */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="md:order-2">
            <img src={corporateHero} alt="Green future vision" className="rounded-lg shadow-lg w-full h-80 object-cover" loading="lazy" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="md:order-1">
            <p className="text-primary font-medium uppercase tracking-widest text-sm mb-2">{t("Our Vision", "हमारी दृष्टि")}</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              {t("A Thriving Planet for All", "सबके लिए एक समृद्ध ग्रह")}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t("A world where every community thrives in harmony with nature, breathing clean air, drinking pure water, and enjoying the shade of forests they helped grow.", "एक ऐसी दुनिया जहां हर समुदाय प्रकृति के साथ सामंजस्य में फले-फूले, स्वच्छ हवा में सांस ले, शुद्ध पानी पिए और उन जंगलों की छाया का आनंद ले।")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
