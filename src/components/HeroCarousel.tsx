import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Pause } from "lucide-react";
import heroImage from "@/assets/hero-ishowspeed.webp";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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
      image: heroImage,
      title: "FORTNITE",
      subtitle: "NOUVELLE SAISON",
      brand: "CHAPITRE 5",
      description: "Découvrez les nouveautés de la saison !",
      cta: "JOUER MAINTENANT",
    },
  ];

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[85vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          className="w-full h-full object-cover transition-opacity duration-700"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-xl animate-fade-in">
          {/* Logo Title */}
          <h1 className="font-fortnite text-7xl md:text-8xl lg:text-9xl text-foreground leading-none mb-4">
            {slides[currentSlide].title}
          </h1>

          {/* Subtitle badges */}
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-foreground text-background px-3 py-1 text-sm font-bold uppercase tracking-wider">
              {slides[currentSlide].subtitle}
            </span>
            <span className="font-fortnite text-2xl tracking-wider italic">
              {slides[currentSlide].brand}
            </span>
          </div>

          {/* Description */}
          <p className="text-foreground/90 text-lg mb-8 font-medium">
            {slides[currentSlide].description}
          </p>

          {/* CTA Button */}
          <button className="btn-epic-primary text-base">
            {slides[currentSlide].cta}
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="carousel-arrow absolute left-4 top-1/2 -translate-y-1/2"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="carousel-arrow absolute right-4 top-1/2 -translate-y-1/2"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`carousel-dot ${currentSlide === index ? "carousel-dot-active" : ""}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
        
        {/* Additional dots for visual effect */}
        {[...Array(6)].map((_, i) => (
          <div key={`extra-${i}`} className="carousel-dot" />
        ))}

        {/* Pause Button */}
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="ml-2 p-1 hover:bg-secondary/50 rounded transition-colors"
          aria-label={isPaused ? "Play" : "Pause"}
        >
          <Pause className={`w-4 h-4 ${isPaused ? "text-primary" : "text-foreground/60"}`} />
        </button>
      </div>
    </section>
  );
};

export default HeroCarousel;