import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star, Sparkles } from "lucide-react";
import founderImg from "@/assets/founder.jpg";
import missionImage from "@/assets/mission-image.jpg";
import projectUrban from "@/assets/project-urban.jpg";

const testimonials = [
  {
    quote: "BaelTrees has transformed barren land near our village into a thriving green belt. The impact on our water table has been remarkable.",
    name: "Rajesh Kumar",
    role: "Farmer, Karnataka",
    image: founderImg,
    rating: 5,
    location: "Karnataka",
  },
  {
    quote: "Our team's experience volunteering with BaelTrees was unforgettable. It brought purpose and connection to our goals.",
    name: "Priya Sharma",
    role: "Volunteer Coordinator",
    image: missionImage,
    rating: 5,
    location: "Bengaluru",
  },
  {
    quote: "Watching our neighbourhood river come back to life was deeply moving. BaelTrees showed us that change is possible when communities unite.",
    name: "Amit Desai",
    role: "Resident, Bengaluru",
    image: projectUrban,
    rating: 5,
    location: "Bengaluru",
  },
];

const TestimonialsSection = () => {
  const [idx, setIdx] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const prev = () => {
    setDirection(-1);
    setIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1));
    setIsAutoPlaying(false);
  };

  const next = () => {
    setDirection(1);
    setIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1));
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setDirection(index > idx ? 1 : -1);
    setIdx(index);
    setIsAutoPlaying(false);
  };

  // Fixed variants with proper typing
  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-secondary to-card relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-leaf rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating Quotes Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ 
              opacity: [0.1, 0.2, 0.1],
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              delay: i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute text-primary/5"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            <Quote className="w-24 h-24" />
          </motion.div>
        ))}
      </div>

      <div className="container max-w-4xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Testimonials
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            What People Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real stories from the communities we've touched and the lives we've transformed together
          </p>
        </motion.div>

        {/* Main Testimonial Card */}
        <div className="relative min-h-[350px] md:min-h-[300px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={idx}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 flex flex-col items-center"
            >
              <div className="bg-card rounded-2xl p-8 md:p-10 shadow-xl border border-primary/5 w-full max-w-2xl mx-auto">
                {/* Decorative Quote Mark */}
                <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Quote className="w-6 h-6 md:w-8 md:h-8 text-primary/40" />
                  </div>
                </div>

                {/* Profile Image with Ring Animation */}
                <div className="relative mb-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="relative"
                  >
                    <div className="w-24 h-24 mx-auto relative">
                      <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping"></div>
                      <div className="absolute inset-0 rounded-full border-4 border-primary/30 animate-pulse"></div>
                      <img
                        src={testimonials[idx].image}
                        alt={testimonials[idx].name}
                        className="relative z-10 w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Rating Stars */}
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-primary text-primary" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote Text */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg md:text-xl text-foreground leading-relaxed italic text-center mb-6"
                >
                  "{testimonials[idx].quote}"
                </motion.p>

                {/* Author Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-center"
                >
                  <p className="font-serif text-xl text-foreground">{testimonials[idx].name}</p>
                  <p className="text-primary text-sm">{testimonials[idx].role}</p>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center justify-center gap-1">
                    <span className="w-1 h-1 bg-muted-foreground rounded-full"></span>
                    {testimonials[idx].location}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-10 max-w-xs mx-auto">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prev}
            className="w-12 h-12 rounded-full bg-card border-2 border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-primary/25"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>

          {/* Dots with Animation */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => goToSlide(i)}
                className="relative"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to testimonial ${i + 1}`}
              >
                <motion.div
                  animate={{
                    scale: i === idx ? 1.2 : 1,
                    backgroundColor: i === idx ? "rgb(var(--primary))" : "rgb(var(--border))",
                  }}
                  transition={{ type: "spring" }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i === idx ? "bg-primary" : "bg-border"
                  }`}
                />
                {i === idx && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute inset-0 rounded-full bg-primary/30"
                    initial={{ scale: 1.5 }}
                    animate={{ scale: 1.8 }}
                    exit={{ scale: 1.5 }}
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={next}
            className="w-12 h-12 rounded-full bg-card border-2 border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-primary/25"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Auto-play Indicator */}
        {isAutoPlaying && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 5,
              ease: "linear",
              repeat: Infinity,
            }}
            className="h-1 bg-gradient-to-r from-primary to-leaf rounded-full mt-8 mx-auto max-w-xs"
          />
        )}

        {/* Progress Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-4 text-sm text-muted-foreground"
        >
          <span className="font-semibold text-primary">{idx + 1}</span>
          <span> / {testimonials.length}</span>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;