import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

interface DonationCTAProps {
  title?: string;
  subtitle?: string;
}

const DonationCTA = ({
  title = "Every Tree Counts. Every Rupee Matters.",
  subtitle = "Your donation helps us plant trees, restore riverss, and empower rural communities. Join 50,000+ supporters making a difference.",
}: DonationCTAProps) => (
  <section className="py-16 md:py-20 bg-primary">
    <div className="container text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground mb-4">{title}</h2>
        <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">{subtitle}</p>
        <Button size="lg" variant="secondary" className="gap-2 text-base" asChild>
          <Link to="/donate"><Heart className="w-5 h-5" /> Donate Now</Link>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default DonationCTA;
