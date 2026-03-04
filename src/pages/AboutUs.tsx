import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import DonationCTA from "@/components/DonationCTA";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Leaf, Users, Shield } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import founderImg from "@/assets/founder.jpg";
import missionImage from "@/assets/mission-image.jpg";
import projectUrban from "@/assets/project-urban.jpg";
import projectLake from "@/assets/project-lake.jpg";
import projectAgroforestry from "@/assets/project-agroforestry.jpg";
import projectWater from "@/assets/project-water.jpg";
import projectEnergy from "@/assets/project-energy.jpg";
import donateHero from "@/assets/donate-hero.jpg";
import corporateHero from "@/assets/corporate-hero.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const values = [
  { icon: Heart, title: "Compassion", titleHi: "करुणा", desc: "We care deeply for every community and ecosystem we serve.", descHi: "हम हर समुदाय और पारिस्थितिकी तंत्र की गहराई से देखभाल करते हैं।" },
  { icon: Leaf, title: "Sustainability", titleHi: "स्थिरता", desc: "Long-term ecological health drives every decision we make.", descHi: "दीर्घकालिक पारिस्थितिक स्वास्थ्य हमारे हर निर्णय को प्रेरित करता है।" },
  { icon: Users, title: "Community", titleHi: "समुदाय", desc: "We empower local communities as the stewards of their environment.", descHi: "हम स्थानीय समुदायों को उनके पर्यावरण के संरक्षक के रूप में सशक्त बनाते हैं।" },
  { icon: Shield, title: "Transparency", titleHi: "पारदर्शिता", desc: "Open governance, clear reporting, and honest communication.", descHi: "खुला शासन, स्पष्ट रिपोर्टिंग और ईमानदार संचार।" },
];

const timeline = [
  { year: "2009", text: "Founded in Bengaluru with a small group of passionate environmentalists.", textHi: "बेंगलुरु में पर्यावरणप्रेमियों के एक छोटे समूह के साथ स्थापित।" },
  { year: "2012", text: "Planted our 10,000th tree and launched the first lake restoration project.", textHi: "हमारा 10,000वां पेड़ लगाया और पहली झील पुनर्स्थापना परियोजना शुरू की।" },
  { year: "2015", text: "Expanded to 5 states with agroforestry and rural development programs.", textHi: "कृषि वानिकी और ग्रामीण विकास कार्यक्रमों के साथ 5 राज्यों में विस्तार।" },
  { year: "2018", text: "Crossed 1,00,000 trees planted. Partnered with 20+ corporates for CSR drives.", textHi: "1,00,000 पेड़ लगाने का आंकड़ा पार किया। CSR अभियानों के लिए 20+ कॉर्पोरेट्स के साथ साझेदारी।" },
  { year: "2021", text: "Restored 30 lakes, launched water conservation and clean energy initiatives.", textHi: "30 झीलों का पुनर्स्थापन, जल संरक्षण और स्वच्छ ऊर्जा पहल शुरू की।" },
  { year: "2025", text: "3,50,000+ trees, 45+ lakes, 50,000+ volunteers, and growing.", textHi: "3,50,000+ पेड़, 45+ झीलें, 50,000+ स्वयंसेवक, और बढ़ते जा रहे हैं।" },
];

const teamMembers = [
  { name: "Rajendra Hegde", role: "Founder & Chairman", image: founderImg },
  { name: "Arjun Menon", role: "Executive Director", image: missionImage },
  { name: "Lakshmi Prasad", role: "Head of Programs", image: projectUrban },
  { name: "Vikram Rao", role: "Director of Partnerships", image: projectLake },
  { name: "Meera Deshpande", role: "Head of Communications", image: projectAgroforestry },
  { name: "Suresh Kumar", role: "Field Operations Lead", image: projectWater },
];

const AboutUs = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16 md:pt-20">
        <PageHero
          title={t("About BaelTrees", "सेट्रीज़ के बारे में")}
          subtitle={t("A decade of restoring ecosystems, empowering communities, and planting hope across India.", "एक दशक से पारिस्थितिकी तंत्र की बहाली, समुदायों का सशक्तिकरण और पूरे भारत में आशा का रोपण।")}
          image={aboutHero}
        />

        {/* Vision & Mission with Images */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container max-w-6xl">
            {/* Mission - Image Left */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="grid md:grid-cols-2 gap-8 items-stretch mb-12">
              <div className="overflow-hidden rounded-xl">
                <img src={missionImage} alt="Our Mission" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="bg-secondary rounded-xl p-8 flex flex-col justify-center">
                <Target className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-serif text-2xl text-foreground mb-3">{t("Our Mission", "हमारा मिशन")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("To inspire and empower communities to restore degraded ecosystems through large-scale afforestation, water conservation, and sustainable livelihood programs.", "बड़े पैमाने पर वनीकरण, जल संरक्षण और सतत आजीविका कार्यक्रमों के माध्यम से समुदायों को क्षरित पारिस्थितिकी तंत्र को बहाल करने के लिए प्रेरित और सशक्त बनाना।")}</p>
              </div>
            </motion.div>
            {/* Vision - Image Right */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="grid md:grid-cols-2 gap-8 items-stretch">
              <div className="bg-secondary rounded-xl p-8 flex flex-col justify-center">
                <Eye className="w-10 h-10 text-leaf mb-4" />
                <h3 className="font-serif text-2xl text-foreground mb-3">{t("Our Vision", "हमारी दृष्टि")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("A world where every community thrives in harmony with nature, breathing clean air, drinking pure water, and enjoying the shade of forests they helped grow.", "एक ऐसी दुनिया जहां हर समुदाय प्रकृति के साथ सामंजस्य में फले-फूले, स्वच्छ हवा में सांस ले, शुद्ध पानी पिए और उन जंगलों की छाया का आनंद ले जिन्हें उन्होंने बड़ा करने में मदद की।")}</p>
              </div>
              <div className="overflow-hidden rounded-xl">
                <img src={corporateHero} alt="Our Vision" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Timeline - Fixed */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container max-w-3xl">
            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-serif text-3xl md:text-4xl text-foreground text-center mb-12">{t("Our Journey", "हमारी यात्रा")}</motion.h2>
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`relative pl-12 md:pl-0 mb-8 md:w-[calc(50%-20px)] ${i % 2 === 0 ? "md:pr-8 md:text-right md:mr-auto" : "md:ml-auto md:pl-8"}`}
                >
                  <div className={`absolute left-2.5 md:left-auto ${i % 2 === 0 ? "md:right-[-27px]" : "md:left-[-27px]"} top-1 w-3.5 h-3.5 rounded-full bg-primary border-2 border-card z-10`} />
                  <span className="text-primary font-bold text-sm">{item.year}</span>
                  <p className="text-foreground mt-1">{t(item.text, item.textHi)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder's Message */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container max-w-4xl">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="md:col-span-1">
                <img src={founderImg} alt="Founder" className="rounded-lg shadow-lg w-full aspect-square object-cover" loading="lazy" />
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:col-span-2">
                <p className="text-primary font-medium uppercase tracking-widest text-sm mb-2">{t("Founder's Message", "संस्थापक का संदेश")}</p>
                <blockquote className="font-serif text-2xl text-foreground italic leading-relaxed mb-4">
                  {t(
                    '"When I planted my first tree, I never imagined it would grow into a movement. Today, BaelTrees is a testament to what communities can achieve together."',
                    '"जब मैंने अपना पहला पेड़ लगाया, तो मैंने कभी नहीं सोचा था कि यह एक आंदोलन बन जाएगा। आज, सेट्रीज़ इस बात का प्रमाण है कि समुदाय मिलकर क्या हासिल कर सकते हैं।"'
                  )}
                </blockquote>
                <p className="font-semibold text-foreground">Rajendra Hegde</p>
                <p className="text-muted-foreground text-sm">{t("Founder, BaelTrees Environmental Trust", "संस्थापक, सेट्रीज़ पर्यावरण ट्रस्ट")}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container">
            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-serif text-3xl md:text-4xl text-foreground text-center mb-12">{t("Core Values", "मूल मूल्य")}</motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {values.map((v, i) => (
                <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="bg-card rounded-lg p-6 text-center shadow-sm">
                  <v.icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                  <h3 className="font-serif text-lg text-foreground mb-2">{t(v.title, v.titleHi)}</h3>
                  <p className="text-muted-foreground text-sm">{t(v.desc, v.descHi)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container">
            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-serif text-3xl md:text-4xl text-foreground text-center mb-12">{t("Our Team", "हमारी टीम")}</motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
              {teamMembers.map((m, i) => (
                <motion.div key={m.name} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }} className="text-center">
                  <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden border-2 border-primary/20">
                    <img src={m.image} alt={m.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <p className="font-semibold text-foreground text-sm">{m.name}</p>
                  <p className="text-muted-foreground text-xs">{m.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <DonationCTA />
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
