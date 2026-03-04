import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import founderImg from "@/assets/founder.jpg";
import missionImage from "@/assets/mission-image.jpg";
import projectUrban from "@/assets/project-urban.jpg";

const testimonials = [
  {
    quote: "BaelTrees has transformed barren land near our village into a thriving green belt. The impact on our water table has been remarkable.",
    name: "Rajesh Kumar",
    role: "Farmer, Karnataka",
    image: founderImg,
  },
  {
    quote: "Our team's experience volunteering with BaelTrees was unforgettable. It brought purpose and connection to our goals.",
    name: "Priya Sharma",
    role: "Volunteer Coordinator",
    image: missionImage,
  },
  {
    quote: "Watching our neighbourhood lake come back to life was deeply moving. BaelTrees showed us that change is possible when communities unite.",
    name: "Amit Desai",
    role: "Resident, Bengaluru",
    image: projectUrban,
  },
];

const TestimonialsSection = () => {
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container max-w-3xl text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12">What People Say</h2>
        <div className="relative min-h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-primary mb-4">
                <img src={testimonials[idx].image} alt={testimonials[idx].name} className="w-full h-full object-cover" />
              </div>
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              <p className="text-lg md:text-xl text-foreground leading-relaxed italic">
                "{testimonials[idx].quote}"
              </p>
              <p className="mt-6 font-semibold text-foreground">{testimonials[idx].name}</p>
              <p className="text-sm text-muted-foreground">{testimonials[idx].role}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex items-center justify-center gap-4 mt-8">
          <button onClick={prev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors" aria-label="Previous testimonial">
            <ChevronLeft className="w-5 h-5" />
          </button>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} className={`w-2.5 h-2.5 rounded-full transition-colors ${i === idx ? "bg-primary" : "bg-border"}`} aria-label={`Go to testimonial ${i + 1}`} />
          ))}
          <button onClick={next} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors" aria-label="Next testimonial">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
