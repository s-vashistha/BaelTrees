import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import DonationCTA from "@/components/DonationCTA";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Leaf, Users, Shield, Award, ArrowRight, Clock, MapPin, TreePine, Droplets, Wind } from "lucide-react";
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
  { year: "2012", text: "Planted our 10,000th tree and launched the first river restoration project.", textHi: "हमारा 10,000वां पेड़ लगाया और पहली झील पुनर्स्थापना परियोजना शुरू की।" },
  { year: "2015", text: "Expanded to 5 states with agroforestry and rural development programs.", textHi: "कृषि वानिकी और ग्रामीण विकास कार्यक्रमों के साथ 5 राज्यों में विस्तार।" },
  { year: "2018", text: "Crossed 1,00,000 trees planted. Partnered with 20+ corporates for CSR drives.", textHi: "1,00,000 पेड़ लगाने का आंकड़ा पार किया। CSR अभियानों के लिए 20+ कॉर्पोरेट्स के साथ साझेदारी।" },
  { year: "2021", text: "Restored 30 rivers, launched water conservation and clean energy initiatives.", textHi: "30 झीलों का पुनर्स्थापन, जल संरक्षण और स्वच्छ ऊर्जा पहल शुरू की।" },
  { year: "2025", text: "3,50,000+ trees, 45+ rivers, 50,000+ volunteers, and growing.", textHi: "3,50,000+ पेड़, 45+ झीलें, 50,000+ स्वयंसेवक, और बढ़ते जा रहे हैं।" },
];

const teamMembers = [
  { name: "Rajendra Hegde", role: "Founder & Chairman", image: founderImg },
  { name: "Arjun Menon", role: "Executive Director", image: missionImage },
  { name: "Lakshmi Prasad", role: "Head of Programs", image: projectUrban },
  { name: "Vikram Rao", role: "Director of Partnerships", image: projectLake },
  { name: "Meera Deshpande", role: "Head of Communications", image: projectAgroforestry },
  { name: "Suresh Kumar", role: "Field Operations Lead", image: projectWater },
];

const impactStats = [
  { icon: TreePine, value: "3,50,000+", label: "Trees Planted", labelHi: "पेड़ लगाए", color: "text-primary" },
  { icon: Droplets, value: "45+", label: "Rivers Restored", labelHi: "झीलें पुनर्स्थापित", color: "text-blue-500" },
  { icon: Users, value: "50,000+", label: "Volunteers", labelHi: "स्वयंसेवक", color: "text-leaf" },
  { icon: Award, value: "20+", label: "Corporate Partners", labelHi: "कॉर्पोरेट भागीदार", color: "text-amber-600" },
];

const AboutUs = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16 md:pt-20">
        <PageHero
          title={t("About BaelTrees", "सेट्रीज़ के बारे में")}
          subtitle={t("A decade of restoring ecosystems, empowering communities, and planting hope across India.", "एक दशक से पारिस्थितिकी तंत्र की बहाली, समुदायों का सशक्तिकरण और पूरे भारत में आशा का रोपण।")}
          image={aboutHero}
        />

        {/* Impact Stats Section */}
        <section className="py-12 bg-gradient-to-b from-card to-secondary">
          <div className="container max-w-5xl">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {impactStats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                  <div className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{t(stat.label, stat.labelHi)}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Vision & Mission - Enhanced Single Card Design */}
        <section className="py-16 md:py-24 bg-card relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-leaf rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="container max-w-6xl relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-primary font-medium uppercase tracking-widest text-sm mb-2">What Drives Us</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">Our Mission & Vision</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission Card - Single Parent Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5 }}
                className="bg-secondary rounded-xl overflow-hidden shadow-lg border border-border"
              >
                <div className="h-56 overflow-hidden">
                  <img 
                    src={missionImage} 
                    alt="Our Mission" 
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
                    {t("To inspire and empower communities to restore degraded ecosystems through large-scale afforestation, water conservation, and sustainable livelihood programs.", "बड़े पैमाने पर वनीकरण, जल संरक्षण और सतत आजीविका कार्यक्रमों के माध्यम से समुदायों को क्षरित पारिस्थितिकी तंत्र को बहाल करने के लिए प्रेरित और सशक्त बनाना।")}
                  </p>
                </div>
              </motion.div>

              {/* Vision Card - Single Parent Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-secondary rounded-xl overflow-hidden shadow-lg border border-border"
              >
                <div className="h-56 overflow-hidden">
                  <img 
                    src={corporateHero} 
                    alt="Our Vision" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    loading="lazy" 
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-leaf/10 flex items-center justify-center">
                      <Eye className="w-5 h-5 text-leaf" />
                    </div>
                    <p className="text-primary font-medium uppercase tracking-widest text-sm">{t("Our Vision", "हमारी दृष्टि")}</p>
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">
                    {t("A Thriving Planet for All", "सबके लिए एक समृद्ध ग्रह")}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t("A world where every community thrives in harmony with nature, breathing clean air, drinking pure water, and enjoying the shade of forests they helped grow.", "एक ऐसी दुनिया जहां हर समुदाय प्रकृति के साथ सामंजस्य में फले-फूले, स्वच्छ हवा में सांस ले, शुद्ध पानी पिए और उन जंगलों की छाया का आनंद ले जिन्हें उन्होंने बड़ा करने में मदद की।")}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 md:py-24 bg-secondary relative">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
          
          <div className="container max-w-4xl relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-4xl text-foreground text-center mb-16"
            >
              {t("Our Journey", "हमारी यात्रा")}
            </motion.h2>
            
            <div className="relative">
              {/* Animated timeline line */}
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute left-6 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-primary via-leaf to-primary md:-translate-x-0.5"
              />
              
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative flex mb-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline dot with pulse animation */}
                  <div className="absolute left-6 md:left-1/2 top-0 transform -translate-x-1/2 z-20">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.3, type: "spring" }}
                      className="relative"
                    >
                      <div className="w-4 h-4 rounded-full bg-primary border-4 border-card animate-pulse" />
                      <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
                    </motion.div>
                  </div>

                  {/* Content card */}
                  <div className={`w-full md:w-[calc(50%-2rem)] ml-12 md:ml-0 ${i % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
                    >
                      <div className="inline-block px-4 py-1 bg-primary/10 rounded-full mb-3">
                        <span className="text-primary font-bold">{item.year}</span>
                      </div>
                      <p className="text-foreground leading-relaxed">{t(item.text, item.textHi)}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder's Message */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8 md:gap-12 items-center"
            >
              <div className="md:col-span-1 relative">
                <div className="relative">
                  <img 
                    src={founderImg} 
                    alt="Founder" 
                    className="rounded-2xl shadow-2xl w-full aspect-square object-cover"
                    loading="lazy" 
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-primary/20 rounded-full"></div>
                <div className="absolute -bottom-2 -right-2 w-16 h-16 border-2 border-leaf/20 rounded-full"></div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="md:col-span-2"
              >
                <div className="inline-flex items-center gap-2 text-primary mb-4">
                  <Award className="w-5 h-5" />
                  <p className="font-medium uppercase tracking-widest text-sm">{t("Founder's Message", "संस्थापक का संदेश")}</p>
                </div>
                
                <blockquote className="relative">
                  <div className="absolute -top-4 -left-4 text-6xl text-primary/10 font-serif">"</div>
                  <p className="font-serif text-xl md:text-2xl text-foreground italic leading-relaxed mb-6 pl-4">
                    {t(
                      '"When I planted my first tree, I never imagined it would grow into a movement. Today, BaelTrees is a testament to what communities can achieve together."',
                      '"जब मैंने अपना पहला पेड़ लगाया, तो मैंने कभी नहीं सोचा था कि यह एक आंदोलन बन जाएगा। आज, सेट्रीज़ इस बात का प्रमाण है कि समुदाय मिलकर क्या हासिल कर सकते हैं।"'
                    )}
                  </p>
                </blockquote>
                
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold text-lg text-foreground">Rajendra Hegde</p>
                  <p className="text-muted-foreground">{t("Founder, BaelTrees Environmental Trust", "संस्थापक, सेट्रीज़ पर्यावरण ट्रस्ट")}</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-4xl text-foreground text-center mb-4"
            >
              {t("Core Values", "मूल मूल्य")}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-center max-w-2xl mx-auto mb-12"
            >
              {t("The principles that guide everything we do", "वे सिद्धांत जो हमारे हर काम का मार्गदर्शन करते हैं")}
            </motion.p>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
            >
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group bg-card rounded-xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                    <v.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg text-foreground mb-2">{t(v.title, v.titleHi)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t(v.desc, v.descHi)}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-4xl text-foreground text-center mb-4"
            >
              {t("Our Team", "हमारी टीम")}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-center max-w-2xl mx-auto mb-12"
            >
              {t("Meet the dedicated people behind our mission", "हमारे मिशन के पीछे समर्पित लोगों से मिलें")}
            </motion.p>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto"
            >
              {teamMembers.map((m, i) => (
                <motion.div
                  key={m.name}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="text-center group"
                >
                  <div className="relative mb-3">
                    <div className="w-24 h-24 rounded-full mx-auto overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors">
                      <img 
                        src={m.image} 
                        alt={m.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                        loading="lazy" 
                      />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{m.name}</p>
                  <p className="text-muted-foreground text-xs">{m.role}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-leaf/5">
          <div className="container max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                {t("Join Us in Making a Difference", "बदलाव लाने में हमसे जुड़ें")}
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                {t("Whether you're an individual, a corporate partner, or a volunteer, there's a place for you in our mission.", "चाहे आप एक व्यक्ति हों, कॉर्पोरेट भागीदार हों, या स्वयंसेवक हों, हमारे मिशन में आपके लिए एक जगह है।")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group">
                  {t("Become a Volunteer", "स्वयंसेवक बनें")}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary/10 transition-colors">
                  {t("Partner With Us", "हमारे साथ साझेदारी करें")}
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        <DonationCTA />
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;

