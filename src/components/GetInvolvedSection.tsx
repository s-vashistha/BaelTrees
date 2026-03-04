import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, Calendar, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const GetInvolvedSection = () => {
  const { t } = useLanguage();

  const options = [
    { icon: Users, title: t("Volunteer", "स्वयंसेवक बनें"), desc: t("Join weekend plantation drives and lake cleaning campaigns near you.", "अपने पास वीकेंड वृक्षारोपण अभियानों में शामिल हों।"), cta: t("Sign Up", "साइन अप"), link: "/get-involved" },
    { icon: Calendar, title: t("Attend Events", "कार्यक्रमों में भाग लें"), desc: t("Participate in workshops, tree walks, and awareness programs.", "कार्यशालाओं, वृक्ष सैर और जागरूकता कार्यक्रमों में भाग लें।"), cta: t("View Events", "कार्यक्रम देखें"), link: "/events" },
    { icon: Heart, title: t("Donate", "दान करें"), desc: t("Fund a sapling, a lake, or an entire project. Every rupee counts.", "एक पौधा, एक झील, या पूरी परियोजना को फंड करें।"), cta: t("Donate Now", "अभी दान करें"), link: "/donate" },
  ];

  return (
    <section className="py-16 md:py-24 bg-primary" id="get-involved">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground">{t("Get Involved", "शामिल हों")}</h2>
          <p className="mt-3 text-primary-foreground/70 max-w-xl mx-auto">{t("There are many ways you can contribute to a greener future.", "आप हरे भविष्य में कई तरह से योगदान कर सकते हैं।")}</p>
        </motion.div>
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {options.map((o, i) => (
            <motion.div key={o.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 text-center border border-primary-foreground/10">
              <o.icon className="w-10 h-10 mx-auto mb-4 text-accent" />
              <h3 className="font-serif text-xl text-primary-foreground mb-2">{o.title}</h3>
              <p className="text-primary-foreground/70 text-sm mb-4 leading-relaxed">{o.desc}</p>
              <Button variant="secondary" size="sm" asChild><Link to={o.link}>{o.cta}</Link></Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
