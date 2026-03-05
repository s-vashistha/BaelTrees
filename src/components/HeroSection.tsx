import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, HandHelping, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";
import missionImage from "@/assets/mission-image.jpg";
import aboutHero from "@/assets/about-hero.jpg";
import donateHero from "@/assets/donate-hero.jpg";

const slides = [
  { image: heroBanner, headline: "Planting Trees. Restoring Earth.", accent: "Empowering Communities." },
  { image: missionImage, headline: "Reviving Rivers. Saving Water.", accent: "Sustaining Life." },
  { image: aboutHero, headline: "Growing Forests. Healing the Planet.", accent: "One Tree at a Time." },
  { image: donateHero, headline: "Your Support Matters.", accent: "Join the Green Revolution." },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-foreground/60" />

      {/* Arrows */}
      <button onClick={prev} className="absolute left-4 z-20 p-2 rounded-full bg-background/20 hover:bg-background/40 text-primary-foreground transition-colors" aria-label="Previous slide">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button onClick={next} className="absolute right-4 z-20 p-2 rounded-full bg-background/20 hover:bg-background/40 text-primary-foreground transition-colors" aria-label="Next slide">
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="relative z-10 container text-center px-4">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-primary-foreground/80 font-medium tracking-widest uppercase text-sm mb-4">
          BaelTrees Environmental Trust
        </motion.p>
        <AnimatePresence mode="wait">
          <motion.h1 key={current} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.6 }} className="font-serif text-4xl sm:text-5xl md:text-7xl text-primary-foreground leading-tight max-w-5xl mx-auto">
            {slide.headline}{" "}
            <span className="text-accent">{slide.accent}</span>
          </motion.h1>
        </AnimatePresence>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} className="mt-6 text-primary-foreground/80 text-lg max-w-2xl mx-auto">
          Join us in restoring ecosystems, conserving water, and building sustainable communities across India.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="gap-2 text-base" asChild>
            <Link to="/donate"><Heart className="w-5 h-5" /> Donate Now</Link>
          </Button>
          <Button size="lg" variant="outline" className="gap-2 text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
            <Link to="/get-involved"><HandHelping className="w-5 h-5" /> Volunteer With Us</Link>
          </Button>
        </motion.div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 z-20 flex gap-2 left-1/2 -translate-x-1/2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-primary-foreground/40"}`} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
