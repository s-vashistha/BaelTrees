import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { useState } from "react";
import { Search, Newspaper, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";
import projectUrban from "@/assets/project-urban.jpg";
import projectLake from "@/assets/project-lake.jpg";
import projectAgroforestry from "@/assets/project-agroforestry.jpg";
import projectWater from "@/assets/project-water.jpg";
import projectEnergy from "@/assets/project-energy.jpg";
import missionImage from "@/assets/mission-image.jpg";
import corporateHero from "@/assets/corporate-hero.jpg";
import donateHero from "@/assets/donate-hero.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { submitNewsletter, isValidEmail } from "@/lib/formService";

const resources = [
  { title: "BaelTrees in The Hindu: River Revival Success", date: "Nov 5, 2025", excerpt: "Media coverage of our successful Jakkur River restoration project.", image: projectWater },
  { title: "BaelTrees Wins National Green Award", date: "Sep 2025", excerpt: "Recognition for best NGO in afforestation at the National Environment Awards.", image: donateHero },
  { title: "Times of India: Mega Plantation Drive in Bengaluru", date: "Aug 2025", excerpt: "Front-page coverage of our record-breaking 10,000 tree plantation in a single day.", image: projectUrban },
  { title: "Deccan Herald: Community River Restoration", date: "Jul 2025", excerpt: "Feature article on how local communities partnered with BaelTrees for river revival.", image: projectLake },
  { title: "Indian Express: Agroforestry Impact on Rural Karnataka", date: "Jun 2025", excerpt: "In-depth reporting on farmer livelihood improvements through our agroforestry program.", image: projectAgroforestry },
  { title: "Bangalore Mirror: Urban Greening Initiative", date: "May 2025", excerpt: "Photo essay showcasing the transformation of urban spaces into green corridors.", image: missionImage },
  { title: "The New Indian Express: Water Conservation Success", date: "Apr 2025", excerpt: "Coverage of our check dam project reviving dry streams in drought-prone regions.", image: projectEnergy },
  { title: "Vijaya Karnataka: World Environment Day Feature", date: "Mar 2025", excerpt: "Kannada newspaper feature highlighting BaelTrees' decade-long environmental journey.", image: corporateHero },
];

const ResourcesPage = () => {
  const [search, setSearch] = useState("");
  const { t } = useLanguage();
  
  // Newsletter form state
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: "" });

  const filtered = resources.filter((r) =>
    r.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setSubmitStatus({ type: 'error', message: "Please enter your email address." });
      return;
    }
    
    if (!isValidEmail(email)) {
      setSubmitStatus({ type: 'error', message: "Please enter a valid email address." });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const result = await submitNewsletter({ email });
      if (result.success) {
        setSubmitStatus({ type: 'success', message: "Thank you for subscribing!" });
        setEmail("");
      } else {
        setSubmitStatus({ type: 'error', message: result.error || "Failed to subscribe. Please try again." });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: "An error occurred. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16 md:pt-20">
        <PageHero title={t("Media Coverage", "αñ«αÑÇαñíαñ┐αñ»αñ╛ αñòαñ╡αñ░αÑçαñ£")} subtitle={t("Paper cuttings, news features, and media recognition of our environmental work.", "αñ╣αñ«αñ╛αñ░αÑç αñ¬αñ░αÑìαñ»αñ╛αñ╡αñ░αñúαÑÇαñ» αñòαñ╛αñ░αÑìαñ» αñòαÑÇ αñàαñûαñ¼αñ╛αñ░ αñòαƒαñ┐αñéαñù, αñ╕αñ«αñ╛αñÜαñ╛αñ░ αñ½αÑÇαñÜαñ░ αñöαñ░ αñ«αÑÇαñíαñ┐αñ»αñ╛ αñ«αñ╛α¿αÑìαñ»αññαñ╛αÑñ")} image={heroBanner} />

        {/* Search */}
        <section className="py-8 bg-card border-b border-border">
          <div className="container">
            <div className="flex items-center justify-center">
              <div className="relative w-full sm:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder={t("Search media coverage...", "αñ«αÑÇαñíαñ┐αñ»αñ╛ αñòαñ╡αñ░αÑçαñ£ αñûαÑïαñ£αÑçαñé...")} className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
              </div>
            </div>
          </div>
        </section>

        {/* Paper Cuttings Grid - Hover Overlay */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((r, i) => (
                <motion.div key={r.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: i * 0.05 }} className="rounded-lg overflow-hidden group relative aspect-[3/4] cursor-pointer">
                  <img src={r.image} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  {/* Hover overlay with details */}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/75 transition-all duration-300 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"> 
                      <div className="flex items-center gap-2 mb-2">
                        <Newspaper className="w-4 h-4 text-accent" />
                        <span className="text-xs text-primary-foreground/70">{r.date}</span>
                      </div>
                      <h3 className="font-serif text-base text-primary-foreground mb-2 leading-snug">{r.title}</h3>       
                      <p className="text-primary-foreground/70 text-sm leading-relaxed">{r.excerpt}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="text-center py-12 text-muted-foreground"><p>{t("No articles found. Try a different search.", "αñòαÑïαñê αñ▓αÑçαñû αñ¿αñ╣αÑÇαñé αñ«αñ┐αñ▓αñ╛αÑñ αñàαñ▓αñù αñûαÑïαñ£ αñåαñ£αñ╝αñ«αñ╛αñÅαñéαÑñ")}</p></div>
            )}
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 md:py-20 bg-primary">
          <div className="container text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>     
              <h2 className="font-serif text-3xl text-primary-foreground mb-4">{t("Stay Informed", "αñ£αñ╛αñ¿αñòαñ╛αñ░αÑÇ αñ░αñûαÑçαñé")}</h2>
              <p className="text-primary-foreground/70 max-w-md mx-auto mb-6">{t("Subscribe to our newsletter for the latest news and updates.", "αñ¿αñ╡αÑÇαñ¿αññαñ« αñ╕αñ«αñ╛αñÜαñ╛αñ░ αñöαñ░ αñàαñ¬αñíαÑçαñƒ αñòαÑç αñ▓αñ┐αñÅ αñ╣αñ«αñ╛αñ░αÑç αñ¿αÑìαñ»αÑéαñ£αñ╝αñ▓αÑçαñƒαñ░ αñòαÑÇ αñ╕αñªαñ╕αÑìαñ»αññαñ╛ αñ▓αÑçαñéαÑñ")}</p>
              {submitStatus.type && (
                <div className={`mb-4 p-3 rounded-md text-sm max-w-md mx-auto ${submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {submitStatus.message}
                </div>
              )}
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder={t("Enter your email", "αñàαñ¬α¿αñ╛ αñêαñ«αÑçαñ▓ αñªαñ░αÑìαñ£ αñòαñ░αÑçαñé")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2.5 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary-foreground/30" 
                />
                <Button variant="secondary" type="submit" disabled={isSubmitting} className="gap-2">
                  <Send className="w-4 h-4" /> 
                  {isSubmitting ? t("Subscribing...", "αñ╕αñªαñ╕αÑìαñ»αññαñ╛ αñ▓αÑçαñéαñ¢...") : t("Subscribe", "αñ╕αñªαñ╕αÑìαñ»αññαñ╛ αñ▓αÑçαñé")}
                </Button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ResourcesPage;
