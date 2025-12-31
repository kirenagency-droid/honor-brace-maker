import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Pause } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import heroImage from "@/assets/hero-ishowspeed.webp";
import kimImage from "@/assets/hero-kim-kardashian.webp";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(0);

  const slides = [
    {
      id: 1,
      image: heroImage,
      title: "FORTNITE",
      subtitle: "SÉRIE ICÔNES",
      brand: "ISHOWSPEED",
      description: "La série Icônes IShowSpeed est maintenant disponible dans la boutique d'objets !",
      cta: "ACCÉDER À LA BOUTIQUE D'OBJETS",
    },
    {
      id: 2,
      image: kimImage,
      title: "FORTNITE",
      subtitle: "",
      brand: "KIM KARDASHIAN",
      description: "L'icône ultime est arrivée dans Fortnite",
      cta: "OUVRIR LA BOUTIQUE D'OBJETS",
    },
  ];

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative h-[85vh] overflow-hidden">
      {/* Background Image */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
          }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="max-w-xl"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* Logo Title */}
            <motion.h1 
              variants={itemVariants}
              className="font-fortnite text-7xl md:text-8xl lg:text-9xl text-foreground leading-none mb-4"
            >
              {slides[currentSlide].title}
            </motion.h1>

            {/* Subtitle badges */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              {slides[currentSlide].subtitle && (
                <span className="bg-foreground text-background px-3 py-1 text-sm font-bold uppercase tracking-wider">
                  {slides[currentSlide].subtitle}
                </span>
              )}
              <span className="font-fortnite text-2xl tracking-wider italic">
                {slides[currentSlide].brand}
              </span>
            </motion.div>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-foreground/90 text-lg mb-8 font-medium">
              {slides[currentSlide].description}
            </motion.p>

            {/* CTA Button */}
            <motion.button 
              variants={itemVariants}
              className="btn-epic-primary text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {slides[currentSlide].cta}
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <motion.button
        onClick={prevSlide}
        className="carousel-arrow absolute left-4 top-1/2 -translate-y-1/2"
        aria-label="Previous slide"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft className="w-6 h-6" />
      </motion.button>

      <motion.button
        onClick={nextSlide}
        className="carousel-arrow absolute right-4 top-1/2 -translate-y-1/2"
        aria-label="Next slide"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight className="w-6 h-6" />
      </motion.button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`carousel-dot ${currentSlide === index ? "carousel-dot-active" : ""}`}
            aria-label={`Go to slide ${index + 1}`}
            whileHover={{ scale: 1.3 }}
            animate={currentSlide === index ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.3 }}
          />
        ))}
        
        {/* Additional dots for visual effect */}
        {[...Array(6)].map((_, i) => (
          <div key={`extra-${i}`} className="carousel-dot" />
        ))}

        {/* Pause Button */}
        <motion.button
          onClick={() => setIsPaused(!isPaused)}
          className="ml-2 p-1 hover:bg-secondary/50 rounded transition-colors"
          aria-label={isPaused ? "Play" : "Pause"}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Pause className={`w-4 h-4 ${isPaused ? "text-primary" : "text-foreground/60"}`} />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroCarousel;