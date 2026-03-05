import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, TreePine, Droplets, Shield, Quote, ChevronDown, QrCode, Building2, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import donateHero from "@/assets/donate-hero.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const amounts = [500, 1000, 2500, 5000, 10000];

const impactMap: Record<number, string> = {
  500: "plants 5 native trees",
  1000: "plants 10 trees + maintenance for 1 year",
  2500: "restores 50 sqft of riverside habitat",
  5000: "supports 1 farmer's agroforestry transition",
  10000: "funds a micro-watershed structure",
};

const stories = [
  { quote: "My ₹5,000 donation helped plant 50 trees in my hometown. I visit them every year and they're growing beautifully.", name: "Meena K.", location: "Bengaluru" },
  { quote: "As a monthly donor, I love receiving updates about the trees planted with my contributions. It's deeply personal.", name: "Sunil P.", location: "Mumbai" },
];

const faqsLeft = [
  { q: "Is my donation tax-deductible?", a: "Yes! All donations are eligible for 50% tax deduction under Section 80G of the Income Tax Act." },
  { q: "How is my money used?", a: "100% of your donation goes towards sapling procurement, site preparation, planting, and 3-year maintenance and monitoring." },
  { q: "Can I donate for a specific project?", a: "Yes, you can choose to direct your donation to a specific program like River Restoration or Agroforestry." },
  { q: "Do I receive a receipt?", a: "Yes, we issue 80G receipts for all donations via email within 48 hours." },
  { q: "Can I donate in someone's name?", a: "Absolutely! We offer gift-a-tree certificates where you can dedicate trees in someone's name for birthdays, anniversaries, or memorials." },
];

const faqsRight = [
  { q: "Is there a minimum donation amount?", a: "No minimum! Every contribution matters. Even ₹100 helps us procure saplings and nurture them." },
  { q: "Can I set up a monthly donation?", a: "Yes, use our recurring donation toggle to set up automatic monthly contributions for sustained impact." },
  { q: "How do I know my donation made an impact?", a: "We send geo-tagged photos of planted trees, quarterly impact updates, and annual reports to all donors." },
  { q: "Can NRIs donate?", a: "Yes, we accept international donations. All donations are FCRA compliant and tax-deductible." },
  { q: "What payment methods do you accept?", a: "We accept UPI, bank transfers, credit/debit cards, and cheques. See our bank details section for direct transfers." },
];

const DonatePage = () => {
  const [selected, setSelected] = useState(1000);
  const [custom, setCustom] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [openFaqLeft, setOpenFaqLeft] = useState<number | null>(null);
  const [openFaqRight, setOpenFaqRight] = useState<number | null>(null);
  const { t } = useLanguage();

  const activeAmount = isCustom ? Number(custom) || 0 : selected;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${donateHero})` }} />
          <div className="absolute inset-0 bg-foreground/60" />
          <div className="relative z-10 container text-center px-4 py-20">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="font-serif text-4xl sm:text-5xl md:text-6xl text-primary-foreground leading-tight max-w-3xl mx-auto">
              {t("Your Contribution", "आपका योगदान")} <span className="text-accent">{t("Plants Hope", "आशा रोपता है")}</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-4 text-primary-foreground/80 text-lg max-w-xl mx-auto">
              {t("Every rupee goes directly towards planting trees, restoring rivers, and empowering communities.", "हर रुपया सीधे पेड़ लगाने, झीलों को बहाल करने और समुदायों को सशक्त बनाने में जाता है।")}
            </motion.p>
          </div>
        </section>

        {/* Donation Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-background rounded-lg border border-border p-8">
              <h2 className="font-serif text-2xl text-foreground text-center mb-6">{t("Choose Your Impact", "अपना प्रभाव चुनें")}</h2>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-4">
                {amounts.map((amt) => (
                  <button key={amt} onClick={() => { setSelected(amt); setIsCustom(false); }} className={`py-3 rounded-lg text-sm font-semibold transition-colors border ${!isCustom && selected === amt ? "bg-primary text-primary-foreground border-primary" : "bg-card text-foreground border-border hover:border-primary"}`}>
                    ₹{amt.toLocaleString()}
                  </button>
                ))}
              </div>
              <div className="mb-6">
                <input type="number" placeholder={t("Custom Amount (₹)", "कस्टम राशि (₹)")} value={custom} onChange={(e) => { setCustom(e.target.value); setIsCustom(true); }} onFocus={() => setIsCustom(true)} className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary text-sm" />
              </div>
              {activeAmount > 0 && (
                <div className="bg-secondary rounded-lg p-4 mb-6 text-center">
                  <p className="text-sm text-foreground"><span className="font-semibold text-primary">₹{activeAmount.toLocaleString()}</span> {impactMap[activeAmount] || `plants approximately ${Math.floor(activeAmount / 100)} trees`}</p>
                </div>
              )}
              <Button size="lg" className="w-full text-base gap-2"><Heart className="w-5 h-5" /> {t("Donate", "दान करें")} ₹{activeAmount.toLocaleString()}</Button>
            </motion.div>
          </div>
        </section>

        {/* QR Code & Bank Details */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container max-w-4xl">
            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-serif text-3xl text-foreground text-center mb-10">{t("Other Ways to Donate", "दान करने के अन्य तरीके")}</motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card rounded-lg border border-border p-8 text-center">
                <QrCode className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-xl text-foreground mb-3">{t("Scan & Pay via UPI", "UPI से स्कैन और भुगतान करें")}</h3>
                <div className="w-48 h-48 mx-auto bg-secondary rounded-lg border-2 border-dashed border-border flex items-center justify-center mb-4">
                  <div className="text-center">
                    <QrCode className="w-20 h-20 text-muted-foreground mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">UPI QR Code</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">UPI ID: <span className="font-semibold text-foreground">BaelTrees@upi</span></p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card rounded-lg border border-border p-8">
                <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-xl text-foreground mb-4 text-center">{t("Bank Transfer Details", "बैंक ट्रांसफर विवरण")}</h3>
                <div className="space-y-3">
                  {[
                    { label: "Account Name", value: "BaelTrees Environmental Trust" },
                    { label: "Account Number", value: "1234 5678 9012 3456" },
                    { label: "Bank Name", value: "State Bank of India" },
                    { label: "Branch", value: "Bengaluru Main Branch" },
                    { label: "IFSC Code", value: "SBIN0001234" },
                    { label: "Account Type", value: "Current Account" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center border-b border-border pb-2 last:border-0">
                      <span className="text-sm text-muted-foreground">{item.label}</span>
                      <span className="text-sm font-medium text-foreground">{item.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-secondary rounded-md p-3 flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-primary shrink-0" />
                  <p className="text-xs text-muted-foreground">{t("Please share transaction details at", "कृपया लेनदेन विवरण साझा करें")} <span className="text-foreground">donate@BaelTrees.org</span></p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Transparency */}
        <section className="py-12 bg-card">
          <div className="container max-w-3xl text-center">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h3 className="font-serif text-2xl text-foreground mb-4">{t("Where Your Money Goes", "आपका पैसा कहां जाता है")}</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-secondary rounded-lg p-4 border border-border"><TreePine className="w-8 h-8 mx-auto mb-2 text-primary" /><p className="font-bold text-foreground">70%</p><p className="text-xs text-muted-foreground">{t("Planting & Maintenance", "रोपण और रखरखाव")}</p></div>
                <div className="bg-secondary rounded-lg p-4 border border-border"><Droplets className="w-8 h-8 mx-auto mb-2 text-sky" /><p className="font-bold text-foreground">20%</p><p className="text-xs text-muted-foreground">{t("Water & Community", "जल और समुदाय")}</p></div>
                <div className="bg-secondary rounded-lg p-4 border border-border"><Shield className="w-8 h-8 mx-auto mb-2 text-earth" /><p className="font-bold text-foreground">10%</p><p className="text-xs text-muted-foreground">{t("Admin & Operations", "प्रशासन और संचालन")}</p></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Donor Stories */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container max-w-4xl">
            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-serif text-3xl text-foreground text-center mb-12">{t("Donor Stories", "दानदाता कहानियां")}</motion.h2>
            <div className="grid md:grid-cols-2 gap-6">
              {stories.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-lg p-6 border border-border">
                  <Quote className="w-8 h-8 text-primary/30 mb-3" />
                  <p className="text-foreground italic leading-relaxed mb-4">"{s.quote}"</p>
                  <p className="font-semibold text-foreground text-sm">{s.name}</p>
                  <p className="text-muted-foreground text-xs">{s.location}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ - 2 Columns */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container">
            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-serif text-3xl text-foreground text-center mb-10">{t("Donation FAQs", "दान संबंधी प्रश्न")}</motion.h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="space-y-3">
                {faqsLeft.map((faq, i) => (
                  <div key={i}>
                    <button onClick={() => setOpenFaqLeft(openFaqLeft === i ? null : i)} className="w-full bg-card rounded-lg p-4 border border-border text-left flex items-center justify-between">
                      <span className="font-medium text-foreground text-sm">{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${openFaqLeft === i ? "rotate-180" : ""}`} />
                    </button>
                    {openFaqLeft === i && (
                      <div className="bg-card border border-t-0 border-border rounded-b-lg px-4 pb-4 pt-2">
                        <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {faqsRight.map((faq, i) => (
                  <div key={i}>
                    <button onClick={() => setOpenFaqRight(openFaqRight === i ? null : i)} className="w-full bg-card rounded-lg p-4 border border-border text-left flex items-center justify-between">
                      <span className="font-medium text-foreground text-sm">{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${openFaqRight === i ? "rotate-180" : ""}`} />
                    </button>
                    {openFaqRight === i && (
                      <div className="bg-card border border-t-0 border-border rounded-b-lg px-4 pb-4 pt-2">
                        <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DonatePage;
