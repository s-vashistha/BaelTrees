import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  MapPin, Phone, Mail, Clock, 
  ChevronDown, CheckCircle2, AlertCircle, 
  Users, Globe, Award, Leaf, MessageCircle
} from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import { useState } from "react";
import { submitContactForm, isValidEmail, isValidPhone } from "@/lib/formService";
import { CONFIG } from "@/lib/config";
import { useLanguage } from "@/contexts/LanguageContext";

// FAQ Data - Store as objects with both languages
const faqs = [
  { 
    q: { en: "What are your working hours?", hi: "आपके कार्यालय के किस घंटे हैं?" }, 
    a: { en: "Our office is open Monday through Saturday, from 9:00 AM to 6:00 PM. We're available for emergencies outside these hours.", hi: "हमारा कार्यालय सोमवार से शनिवार सुबह 9:00 बजे से शाम 6:00 बजे तक खुला रहता है। आपातकालीन स्थिति में इन घंटों के बाद भी हम उपलब्ध हैं।" } 
  },
  { 
    q: { en: "How quickly will I get a response?", hi: "मुझे कितनी जल्दी प्रतिक्रिया मिलेगी?" }, 
    a: { en: "We typically respond to all inquiries within 24-48 business hours.", hi: "हम आमतौर पर 24-48 कार्य घंटों के भीतर सभी पूछताछ का जवाब देते हैं।" } 
  },
  { 
    q: { en: "Can I volunteer at your office?", hi: "क्या मैं आपके कार्यालय में स्वयंसेवक बन सकता हूं?" }, 
    a: { en: "Absolutely! We welcome visitors at our Bengaluru office. Please schedule an appointment by calling us or filling out the contact form.", hi: "बिल्कुल! हम अपने बेंगलुरु कार्यालय में आगंतुकों का स्वागत करते हैं। कृपया हमें कॉल करके या संपर्क फॉर्म भरकर अपोइंटमेंट शेड्यूल करें।" } 
  },
  { 
    q: { en: "Do you offer site visits for potential donors?", hi: "क्या आप संभावित दाताओं के लिए साइट विजिट की पेशकश करते हैं?" }, 
    a: { en: "Yes, we organize regular field visits for donors and supporters to see our plantation sites and projects. Contact us to schedule one.", hi: "हां, हम दाताओं और समर्थकों के लिए नियमित फील्ड विजिट का आयोजन करते हैं ताकि वे हमारे वृक्षारोपण स्थलों और परियोजनाओं को देख सकें। शेड्यूल करने के लिए हमसे संपर्क करें।" } 
  },
  { 
    q: { en: "How can I partner with BaelTrees for corporate CSR?", hi: "मैं कॉरपोरेट CSR के लिए BaelTrees के साथ साझेदारी कैसे कर सकता हूं?" }, 
    a: { en: "We have dedicated CSR programs for corporate partners. Please reach out to discuss partnership opportunities.", hi: "हमारे पास कॉरपोरेट भागीदारों के लिए समर्पित CSR कार्यक्रम हैं। साझेदारी के अवसरों पर चर्चा के लिए कृपया संपर्क करें।" } 
  },
  { 
    q: { en: "Is my donation tax-deductible?", hi: "क्या मेरा दान कर कटौती योग्य है?" }, 
    a: { en: "Yes, all donations to BaelTrees Environmental Trust are eligible for tax benefits under Section 80G of the Indian Income Tax Act.", hi: "हां, भारतीय आयकर अधिनियम की धारा 80G के तहत BaelTrees पर्यावरण ट्रस्ट को सभी दान कर लाभ के लिए पात्र हैं।" } 
  },
];

// Stats data with both languages
const stats = [
  { icon: Users, value: "5000+", label: { en: "Happy Donors", hi: "खुश दाता" } },
  { icon: Globe, value: "50+", label: { en: "Partner NGOs", hi: "भागीदार एनजीओ" } },
  { icon: Award, value: "15+", label: { en: "Years Experience", hi: "वर्षों का अनुभव" } },
  { icon: MapPin, value: "100+", label: { en: "Projects Completed", hi: "पूरी की गई परियोजनाएं" } },
];

const ContactPage = () => {
  const { t } = useLanguage(); // t expects two arguments: (en: string, hi: string)
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: "" });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const validateField = (name: string, value: string) => {
    const newErrors = { ...errors };
    
    switch (name) {
      case "fullName":
        if (!value.trim()) newErrors.fullName = t("Full name is required", "पूरा नाम आवश्यक है");
        else delete newErrors.fullName;
        break;
      case "email":
        if (!value.trim()) newErrors.email = t("Email is required", "ईमेल आवश्यक है");
        else if (!isValidEmail(value)) newErrors.email = t("Please enter a valid email", "कृपया एक मान्य ईमेल दर्ज करें");
        else delete newErrors.email;
        break;
      case "phone":
        if (value && !isValidPhone(value)) newErrors.phone = t("Please enter a valid phone number", "कृपया एक मान्य फोन नंबर दर्ज करें");
        else delete newErrors.phone;
        break;
      case "message":
        if (!value.trim()) newErrors.message = t("Message is required", "संदेश आवश्यक है");
        else if (value.trim().length < 10) newErrors.message = t("Message should be at least 10 characters", "संदेश कम से कम 10 अक्षरों का होना चाहिए");
        else delete newErrors.message;
        break;
    }
    
    setErrors(newErrors);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
      validateField(name, value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = t("Full name is required", "पूरा नाम आवश्यक है");
    if (!formData.email.trim()) newErrors.email = t("Email is required", "ईमेल आवश्यक है");
    else if (!isValidEmail(formData.email)) newErrors.email = t("Please enter a valid email", "कृपया एक मान्य ईमेल दर्ज करें");
    if (formData.phone && !isValidPhone(formData.phone)) newErrors.phone = t("Please enter a valid phone number", "कृपया एक मान्य फोन नंबर दर्ज करें");
    if (!formData.message.trim()) newErrors.message = t("Message is required", "संदेश आवश्यक है");
    else if (formData.message.trim().length < 10) newErrors.message = t("Message should be at least 10 characters", "संदेश कम से कम 10 अक्षरों का होना चाहिए");
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        setSubmitStatus({ 
          type: 'success', 
          message: t("Thank you! Your message has been sent successfully.", "धन्यवाद! आपका संदेश सफलतापूर्वक भेज दिया गया है।") 
        });
        setFormData({ fullName: "", email: "", phone: "", subject: "", message: "" });
        setErrors({});
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: result.error || t("Failed to send message. Please try again.", "संदेश भेजने में विफल। कृपया पुनः प्रयास करें।") 
        });
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: t("An error occurred. Please try again later.", "एक त्रुटि हुई। कृपया बाद में पुनः प्रयास करें।") 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16 md:pt-20">
        <PageHero 
          title={t("Contact Us", "संपर्क करें")}
          subtitle={t("Get in touch with our team. We'd love to hear from you.", "हमारी टीम से संपर्क करें। हम आपसे सुनना पसंद करेंगे।")}
          image={heroBanner} 
        />

        {/* Stats Section */}
        <section className="py-12 md:py-16 bg-secondary/30">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="font-bold text-2xl text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">
                    {t(stat.label.en, stat.label.hi)}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {/* Contact Info */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }} 
                className="bg-card rounded-lg border border-border p-6 flex flex-col h-full"
              >
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full mb-4 w-fit">
                  <Leaf className="w-4 h-4" />
                  <span className="text-xs font-medium">{t("Get in Touch", "संपर्क करें")}</span>
                </div>
                
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">{t("Contact Information", "संपर्क जानकारी")}</h2>
                
                <div className="space-y-5 flex-1">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">{t("Address", "पता")}</p>
                      <p className="text-muted-foreground text-sm">BaelTrees Environmental Trust<br />Bengaluru, Karnataka, India</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">{t("Phone", "फोन")}</p>
                      <p className="text-muted-foreground text-sm">{CONFIG.CONTACT.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">{t("Email", "ईमेल")}</p>
                      <p className="text-muted-foreground text-sm">{CONFIG.CONTACT.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">{t("Working Hours", "कार्य के घंटे")}</p>
                      <p className="text-muted-foreground text-sm">{t("Mon – Sat: 9:00 AM – 6:00 PM", "सोम – शनि: सुबह 9:00 – शाम 6:00")}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }} 
                className="bg-card rounded-lg border border-border p-6 flex flex-col h-full"
              >
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">{t("Send Us a Message", "हमें संदेश भेजें")}</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
                  {submitStatus.type && (
                    <div className={`p-3 rounded-md text-sm flex items-start gap-2 ${
                      submitStatus.type === 'success' 
                        ? 'bg-green-50 text-green-700 border border-green-200' 
                        : 'bg-red-50 text-red-700 border border-red-200'
                    }`}>
                      {submitStatus.type === 'success' ? (
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      )}
                      <span>{submitStatus.message}</span>
                    </div>
                  )}
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <input 
                        name="fullName"
                        placeholder={t("Full Name *", "पूरा नाम *")}
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`w-full px-3 py-2.5 bg-background border rounded-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary ${
                          errors.fullName ? 'border-red-500' : 'border-border'
                        }`}
                      />
                      {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                    </div>
                    
                    <div>
                      <input 
                        name="email"
                        placeholder={t("Email *", "ईमेल *")}
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-3 py-2.5 bg-background border rounded-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary ${
                          errors.email ? 'border-red-500' : 'border-border'
                        }`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <input 
                        name="phone"
                        placeholder={t("Phone Number", "फोन नंबर")}
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-3 py-2.5 bg-background border rounded-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary ${
                          errors.phone ? 'border-red-500' : 'border-border'
                        }`}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                    
                    <div>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 bg-background border border-border rounded-md text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary appearance-none cursor-pointer"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 0.75rem center',
                          backgroundSize: '1rem'
                        }}
                      >
                        <option value="">{t("Subject", "विषय")}</option>
                        <option>{t("General Inquiry", "सामान्य पूछताछ")}</option>
                        <option>{t("Volunteering", "स्वयंसेवा")}</option>
                        <option>{t("Donation", "दान")}</option>
                        <option>{t("Partnership", "साझेदारी")}</option>
                        <option>{t("Other", "अन्य")}</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <textarea 
                      name="message"
                      placeholder={t("Your Message *", "आपका संदेश *")}
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-3 py-2.5 bg-background border rounded-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none ${
                        errors.message ? 'border-red-500' : 'border-border'
                      }`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? t("Sending...", "भेजा जा रहा है...") : t("Send Message", "संदेश भेजें")}
                  </Button>
                </form>
              </motion.div>
            </div>

            {/* Map Section */}
            <section className="py-12 md:py-20 bg-gradient-to-b from-secondary/20 to-background">
              <div className="container">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  className="text-center mb-10"
                >
                  <p className="text-primary font-medium uppercase tracking-widest text-sm mb-2">{t("Visit Us", "हमसे मिलें")}</p>
                  <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">{t("Find Us on the Map", "मानचित्र पर हमें ढूंढें")}</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    {t("We're located in the heart of Bengaluru's green district, easily accessible by public transport.", "हम बेंगलुरु के हरित जिले के केंद्र में स्थित हैं, सार्वजनिक परिवहन द्वारा आसानी से पहुंचा जा सकता है।")}
                  </p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }}
                  className="rounded-2xl overflow-hidden border border-border/50 shadow-xl max-w-5xl mx-auto"
                >
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539092!2d77.49085452149588!3d12.953847655498412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1709000000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade" 
                    title="BaelTrees Location"
                    className="w-full hover:opacity-95 transition-opacity"
                  />
                </motion.div>
              </div>
            </section>

            {/* FAQ Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="mt-12 max-w-3xl mx-auto"
            >
              <div className="text-center mb-8">
                <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4">{t("Frequently Asked Questions", "अक्सर पूछे जाने वाले प्रश्न")}</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">{t("Find quick answers to common questions", "सामान्य प्रश्नों के त्वरित उत्तर खोजें")}</p>
              </div>
              
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ delay: i * 0.05 }}
                    className="bg-card rounded-lg border border-border overflow-hidden"
                  >
                    <button 
                      onClick={() => setOpenFaq(openFaq === i ? null : i)} 
                      className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-muted/30 transition-colors"
                    >
                      <span className="font-medium text-foreground text-sm">
                        {t(faq.q.en, faq.q.hi)}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} />
                    </button>
                    
                    {openFaq === i && (
                      <div className="px-4 pb-4">
                        <p className="text-muted-foreground text-sm leading-relaxed border-t border-border pt-3">
                          {t(faq.a.en, faq.a.hi)}
                        </p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;