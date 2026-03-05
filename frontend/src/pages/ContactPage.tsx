import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  MapPin, Phone, Mail, Clock, 
  ChevronDown, CheckCircle2, AlertCircle, 
  Users, Globe, Award, Leaf
} from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import { useState } from "react";
import { submitContactForm, isValidEmail, isValidPhone } from "@/lib/formService";

// FAQ Data
const faqs = [
  { q: "What are your working hours?", a: "Our office is open Monday through Saturday, from 9:00 AM to 6:00 PM. We're available for emergencies outside these hours." },
  { q: "How quickly will I get a response?", a: "We typically respond to all inquiries within 24-48 business hours." },
  { q: "Can I volunteer at your office?", a: "Absolutely! We welcome visitors at our Bengaluru office. Please schedule an appointment by calling us or filling out the contact form." },
  { q: "Do you offer site visits for potential donors?", a: "Yes, we organize regular field visits for donors and supporters to see our plantation sites and projects. Contact us to schedule one." },
  { q: "How can I partner with BaelTrees for corporate CSR?", a: "We have dedicated CSR programs for corporate partners. Please reach out to discuss partnership opportunities." },
  { q: "Is my donation tax-deductible?", a: "Yes, all donations to BaelTrees Environmental Trust are eligible for tax benefits under Section 80G of the Indian Income Tax Act." },
];

const stats = [
  { icon: Users, value: "5000+", label: "Happy Donors" },
  { icon: Globe, value: "50+", label: "Partner NGOs" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: MapPin, value: "100+", label: "Projects Completed" },
];

const ContactPage = () => {
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
        if (!value.trim()) newErrors.fullName = "Full name is required";
        else delete newErrors.fullName;
        break;
      case "email":
        if (!value.trim()) newErrors.email = "Email is required";
        else if (!isValidEmail(value)) newErrors.email = "Please enter a valid email";
        else delete newErrors.email;
        break;
      case "phone":
        if (value && !isValidPhone(value)) newErrors.phone = "Please enter a valid phone number";
        else delete newErrors.phone;
        break;
      case "message":
        if (!value.trim()) newErrors.message = "Message is required";
        else if (value.trim().length < 10) newErrors.message = "Message should be at least 10 characters";
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
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!isValidEmail(formData.email)) newErrors.email = "Please enter a valid email";
    if (formData.phone && !isValidPhone(formData.phone)) newErrors.phone = "Please enter a valid phone number";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10) newErrors.message = "Message should be at least 10 characters";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        setSubmitStatus({ type: 'success', message: "Thank you! Your message has been sent successfully." });
        setFormData({ fullName: "", email: "", phone: "", subject: "", message: "" });
        setErrors({});
      } else {
        setSubmitStatus({ type: 'error', message: result.error || "Failed to send message. Please try again." });
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
        <PageHero 
          title="Contact Us" 
          subtitle="Get in touch with our team. We'd love to hear from you." 
          image={heroBanner} 
        />

        {/* Stats Section - Matching original color scheme */}
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
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {/* Contact Info - Matching original styling with equal height */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }} 
                className="bg-card rounded-lg border border-border p-6 flex flex-col h-full"
              >
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full mb-4 w-fit">
                  <Leaf className="w-4 h-4" />
                  <span className="text-xs font-medium">Get in Touch</span>
                </div>
                
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Contact Information</h2>
                
                <div className="space-y-5 flex-1">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">Address</p>
                      <p className="text-muted-foreground text-sm">BaelTrees Environmental Trust<br />Bengaluru, Karnataka, India</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">Phone</p>
                      <p className="text-muted-foreground text-sm">+91 80 1234 5678</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">Email</p>
                      <p className="text-muted-foreground text-sm">info@BaelTrees.org</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">Working Hours</p>
                      <p className="text-muted-foreground text-sm">Mon – Sat: 9:00 AM – 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form - Matching original styling with equal height */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }} 
                className="bg-card rounded-lg border border-border p-6 flex flex-col h-full"
              >
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Send Us a Message</h2>
                
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
                        placeholder="Full Name *" 
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
                        placeholder="Email *" 
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
                        placeholder="Phone Number" 
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
                        <option value="">Subject</option>
                        <option>General Inquiry</option>
                        <option>Volunteering</option>
                        <option>Donation</option>
                        <option>Partnership</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <textarea 
                      name="message"
                      placeholder="Your Message *" 
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
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </motion.div>
            </div>

        {/* Map Section - Preserved size */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-secondary/20 to-background">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              className="text-center mb-10"
            >
              <p className="text-primary font-medium uppercase tracking-widest text-sm mb-2">Visit Us</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Find Us on the Map</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're located in the heart of Bengaluru's green district, easily accessible by public transport.
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

            {/* FAQ Section - Matching original styling */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="mt-12 max-w-3xl mx-auto"
            >
              <div className="text-center mb-8">
                <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Frequently Asked Questions</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">Find quick answers to common questions</p>
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
                      <span className="font-medium text-foreground text-sm">{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} />
                    </button>
                    
                    {openFaq === i && (
                      <div className="px-4 pb-4">
                        <p className="text-muted-foreground text-sm leading-relaxed border-t border-border pt-3">
                          {faq.a}
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