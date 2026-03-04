import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const ContactPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <main className="pt-16 md:pt-20">
      <PageHero title="Contact Us" subtitle="Get in touch with our team. We'd love to hear from you." image={heroBanner} />

      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Contact Info - same height as form */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card rounded-lg border border-border p-6 flex flex-col">
              <h2 className="font-serif text-2xl text-foreground mb-6">Get In Touch</h2>
              <div className="space-y-5 flex-1">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0"><MapPin className="w-5 h-5 text-primary" /></div>
                  <div><p className="font-medium text-foreground text-sm">Address</p><p className="text-muted-foreground text-sm">BaelTrees Environmental Trust, Bengaluru, Karnataka, India</p></div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0"><Phone className="w-5 h-5 text-primary" /></div>
                  <div><p className="font-medium text-foreground text-sm">Phone</p><p className="text-muted-foreground text-sm">+91 80 1234 5678</p></div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0"><Mail className="w-5 h-5 text-primary" /></div>
                  <div><p className="font-medium text-foreground text-sm">Email</p><p className="text-muted-foreground text-sm">info@BaelTrees.org</p></div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0"><Clock className="w-5 h-5 text-primary" /></div>
                  <div><p className="font-medium text-foreground text-sm">Working Hours</p><p className="text-muted-foreground text-sm">Mon – Sat: 9:00 AM – 6:00 PM</p></div>
                </div>
              </div>
              {/* Map */}
              <div className="rounded-lg overflow-hidden border border-border h-48 mt-6">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539092!2d77.49085452149588!3d12.953847655498412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1709000000000!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="BaelTrees Location" />
              </div>
            </motion.div>

            {/* Contact Form - same height */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card rounded-lg border border-border p-6 flex flex-col">
              <h2 className="font-serif text-2xl text-foreground mb-6">Send Us a Message</h2>
              <div className="space-y-4 flex-1 flex flex-col">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input placeholder="Full Name" className="w-full px-3 py-2.5 bg-background border border-border rounded-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
                  <input placeholder="Email" className="w-full px-3 py-2.5 bg-background border border-border rounded-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
                <input placeholder="Phone Number" className="w-full px-3 py-2.5 bg-background border border-border rounded-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
                <input placeholder="Subject" className="w-full px-3 py-2.5 bg-background border border-border rounded-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
                <textarea placeholder="Your Message" rows={6} className="w-full px-3 py-2.5 bg-background border border-border rounded-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none flex-1" />
                <Button className="w-full">Send Message</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default ContactPage;
