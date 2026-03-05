import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import DonationCTA from "@/components/DonationCTA";
import { motion } from "framer-motion";
import { Users, HeartHandshake, Megaphone, ChevronDown, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import heroBanner from "@/assets/hero-banner.jpg";
import missionImage from "@/assets/mission-image.jpg";
import { submitVolunteerForm, isValidEmail } from "@/lib/formService";

const opportunities = [
  { icon: Users, title: "Volunteer Programs", desc: "Join weekend plantation drives, river cleanups, and nursery work. We welcome individuals, families, and groups.", cta: "Sign Up to Volunteer" },
  { icon: HeartHandshake, title: "Community Participation", desc: "Engage with local initiatives — from school green clubs to neighbourhood tree adoption programs.", cta: "Explore Programs" },
  { icon: Megaphone, title: "Fundraising Campaigns", desc: "Start or support a fundraising campaign to plant trees, restore a river, or sponsor a rural development project.", cta: "Start a Campaign" },
];

const volunteerTestimonials = [
  { quote: "Volunteering with BaelTrees on weekends has been the most fulfilling experience. Seeing saplings I planted grow into trees gives me immense joy.", name: "Deepa R.", role: "Weekend Volunteer" },
  { quote: "The community participation program helped our neighbourhood adopt 50 trees. Now our street is the greenest in the area!", name: "Karthik S.", role: "Community Volunteer" },
];

const faqsLeft = [
  { q: "How can I volunteer?", a: "Simply fill out our volunteer sign-up form and we'll match you with upcoming drives near your location. No prior experience needed." },
  { q: "Is there a minimum time commitment?", a: "No! You can join a single event or become a regular volunteer. We have opportunities for every schedule." },
  { q: "Can I volunteer as a family or group?", a: "Absolutely! We welcome families, college groups, and community teams. Contact us for group registrations." },
  { q: "Do I get a certificate?", a: "Yes, we provide digital certificates of participation for all volunteers after each event." },
  { q: "What should I bring to a plantation drive?", a: "We provide all tools and saplings. Just bring water, sunscreen, comfortable shoes, and a positive attitude!" },
];

const faqsRight = [
  { q: "Can I start a fundraising campaign?", a: "Yes! We support peer-to-peer fundraising. Reach out to us and we'll set up a dedicated campaign page for your cause." },
  { q: "Are events held only in Bengaluru?", a: "No, we operate across India — Bengaluru, Hyderabad, Mumbai, Pune, Delhi, and many more cities. Check our events page." },
  { q: "How is my donation used?", a: "Every rupee is tracked. ₹11 plants one tree. We publish annual impact reports and share project-wise breakdowns for full transparency." },
  { q: "Can schools participate?", a: "Yes! We have dedicated school programs including green clubs, environmental workshops, and campus plantation drives." },
  { q: "How do I stay updated about events?", a: "Subscribe to our newsletter or follow us on social media. We also send event alerts to registered volunteers via email and WhatsApp." },
];

const GetInvolvedPage = () => {
  const [openFaqLeft, setOpenFaqLeft] = useState<number | null>(null);
  const [openFaqRight, setOpenFaqRight] = useState<number | null>(null);
  
  // Volunteer form state
  const [volunteerData, setVolunteerData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interestArea: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: "" });

  const handleVolunteerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setVolunteerData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleVolunteerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!volunteerData.firstName.trim() || !volunteerData.lastName.trim() || !volunteerData.email.trim()) {
      setSubmitStatus({ type: 'error', message: "Please fill in all required fields." });
      return;
    }
    
    if (!isValidEmail(volunteerData.email)) {
      setSubmitStatus({ type: 'error', message: "Please enter a valid email address." });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const result = await submitVolunteerForm(volunteerData);
      if (result.success) {
        setSubmitStatus({ type: 'success', message: "Thank you for signing up! We'll be in touch soon." });
        setVolunteerData({ firstName: "", lastName: "", email: "", phone: "", interestArea: "" });
      } else {
        setSubmitStatus({ type: 'error', message: result.error || "Failed to submit application. Please try again." });
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
        <PageHero title="Be the Change" subtitle="There are countless ways to contribute to a greener, more sustainable world. Find your path." image={heroBanner} ctaText="Volunteer Now" ctaLink="#opportunities" />

        {/* Opportunities */}
        <section className="py-16 md:py-24 bg-card" id="opportunities">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <p className="text-primary font-medium uppercase tracking-widest text-sm mb-2">Ways to Help</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">Get Involved</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {opportunities.map((o, i) => (
                <motion.div key={o.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-secondary rounded-lg p-6 border border-border text-center">
                  <o.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
                  <h3 className="font-serif text-xl text-foreground mb-2">{o.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{o.desc}</p>
                  <Button size="sm">{o.cta}</Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Volunteer Testimonials */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container max-w-4xl">
            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-serif text-3xl text-foreground text-center mb-12">Volunteer Stories</motion.h2>
            <div className="grid md:grid-cols-2 gap-6">
              {volunteerTestimonials.map((t, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-lg p-6 border border-border">
                  <Quote className="w-8 h-8 text-primary/30 mb-3" />
                  <p className="text-foreground italic leading-relaxed mb-4">"{t.quote}"</p>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </motion.div>
              ))}
            </div>
           </div> 
        </section>

        {/* Sign Up Form - Single Card with Image left, Form right */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container">
            <h2 className="font-serif text-3xl text-foreground text-center mb-10">Volunteer Sign-Up</h2>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-5xl mx-auto bg-secondary rounded-xl border border-border overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Image - matches form height */}
                <div className="h-64 md:h-auto">
                  <img src={missionImage} alt="Happy volunteers planting trees together" className="w-full h-full object-cover" loading="lazy" />
                </div>
                {/* Form */}
                <div className="p-8 flex flex-col justify-center space-y-4">
                  <h3 className="font-serif text-xl text-foreground mb-2">Join Our Green Movement</h3>
                  {submitStatus.type && (
                    <div className={`p-3 rounded-md text-sm ${submitStatus.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                      {submitStatus.message}
                    </div>
                  )}
                  <form onSubmit={handleVolunteerSubmit}>
                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <input 
                        name="firstName"
                        placeholder="First Name *" 
                        value={volunteerData.firstName}
                        onChange={handleVolunteerChange}
                        className="w-full px-3 py-2.5 bg-background border border-border rounded-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" 
                      />
                      <input 
                        name="lastName"
                        placeholder="Last Name *" 
                        value={volunteerData.lastName}
                        onChange={handleVolunteerChange}
                        className="w-full px-3 py-2.5 bg-background border border-border rounded-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" 
                      />
                    </div>
                    <input 
                      name="email"
                      placeholder="Email Address *" 
                      type="email"
                      value={volunteerData.email}
                      onChange={handleVolunteerChange}
                      className="w-full px-3 py-2.5 bg-background border border-border rounded-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary mb-4" 
                    />
                    <input 
                      name="phone"
                      placeholder="Phone Number" 
                      type="tel"
                      value={volunteerData.phone}
                      onChange={handleVolunteerChange}
                      className="w-full px-3 py-2.5 bg-background border border-border rounded-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary mb-4" 
                    />
                    <select 
                      name="interestArea"
                      value={volunteerData.interestArea}
                      onChange={handleVolunteerChange}
                      className="w-full px-3 py-2.5 bg-background border border-border rounded-md text-sm text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary mb-4"
                    >
                      <option value="">Select Interest Area</option>
                      <option>Tree Plantation</option>
                      <option>River Cleanup</option>
                      <option>Community Programs</option>
                      <option>Fundraising</option>
                    </select>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </Button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQs - 2 Columns, 5 each */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container">
            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-serif text-3xl text-foreground text-center mb-10">Frequently Asked Questions</motion.h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="space-y-3">
                {faqsLeft.map((faq, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                    <button onClick={() => setOpenFaqLeft(openFaqLeft === i ? null : i)} className="w-full bg-card rounded-lg p-4 border border-border text-left flex items-center justify-between">
                      <span className="font-medium text-foreground text-sm">{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${openFaqLeft === i ? "rotate-180" : ""}`} />
                    </button>
                    {openFaqLeft === i && (
                      <div className="bg-card border border-t-0 border-border rounded-b-lg px-4 pb-4 pt-2">
                        <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
              <div className="space-y-3">
                {faqsRight.map((faq, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                    <button onClick={() => setOpenFaqRight(openFaqRight === i ? null : i)} className="w-full bg-card rounded-lg p-4 border border-border text-left flex items-center justify-between">
                      <span className="font-medium text-foreground text-sm">{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${openFaqRight === i ? "rotate-180" : ""}`} />
                    </button>
                    {openFaqRight === i && (
                      <div className="bg-card border border-t-0 border-border rounded-b-lg px-4 pb-4 pt-2">
                        <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <DonationCTA title="Ready to Take Action?" subtitle="Every volunteer, every sapling, every effort adds up to a movement." />
      </main>
      <Footer />
    </div>
  );
};

export default GetInvolvedPage;
