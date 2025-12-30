import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, Share2, Pause, Volume2, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PageTransition, StaggerContainer, StaggerItem, FadeIn } from "@/components/PageTransition";

const carVariants = [
  {
    name: "Phase deadmau5",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=400&fit=crop",
  },
  {
    name: "McLaren 570S Original",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop",
  },
  {
    name: "Neon Edition",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=400&fit=crop",
  },
  {
    name: "Carbon Black",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=400&fit=crop",
  },
  {
    name: "Racing Red",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&h=400&fit=crop",
  },
];

const packItems = [
  { name: "Argent", image: "https://fortnite-api.com/images/cosmetics/br/currency_mtxplatform/icon.png" },
  { name: "McLaren 570S", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=200&h=200&fit=crop" },
  { name: "Phase deadmau5", image: "https://fortnite-api.com/images/cosmetics/br/wrap_356_intrepidmclaren/icon.png" },
  { name: "Brasier deadmau5", image: "https://fortnite-api.com/images/cosmetics/br/wrap_356_intrepidmclaren/icon.png" },
  { name: "Flammes", image: "https://fortnite-api.com/images/cosmetics/br/wrap_356_intrepidmclaren/icon.png" },
  { name: "Éclair", image: "https://fortnite-api.com/images/cosmetics/br/wrap_356_intrepidmclaren/icon.png" },
  { name: "Pneus Sport", image: "https://fortnite-api.com/images/cosmetics/br/wrap_356_intrepidmclaren/icon.png" },
  { name: "Jantes Racing", image: "https://fortnite-api.com/images/cosmetics/br/wrap_356_intrepidmclaren/icon.png" },
  { name: "Jantes Carbon", image: "https://fortnite-api.com/images/cosmetics/br/wrap_356_intrepidmclaren/icon.png" },
  { name: "Pneus Slick", image: "https://fortnite-api.com/images/cosmetics/br/wrap_356_intrepidmclaren/icon.png" },
];

const McLarenPack = () => {
  const [currentVariant, setCurrentVariant] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextVariant = () => {
    setDirection(1);
    setCurrentVariant((prev) => (prev + 1) % carVariants.length);
  };

  const prevVariant = () => {
    setDirection(-1);
    setCurrentVariant((prev) => (prev - 1 + carVariants.length) % carVariants.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-[#1a1a3e] via-[#2d2d5a] to-[#1a1a3e]">
        {/* Header */}
        <motion.header 
          className="flex items-center justify-between px-4 md:px-8 py-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            to="/" 
            className="flex items-center gap-2 text-foreground hover:text-accent transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <div className="w-6 h-6 bg-foreground/20 rounded flex items-center justify-center">
              <span className="text-xs font-bold">FN</span>
            </div>
            <span className="font-fortnite text-sm tracking-wide">BOUTIQUE D'OBJETS</span>
          </Link>
          <motion.button 
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Share2 className="w-5 h-5 text-foreground" />
          </motion.button>
        </motion.header>

        {/* Main Content */}
        <main className="px-4 md:px-8 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Side - Info */}
            <div className="space-y-6">
              <FadeIn delay={0.1}>
                <div>
                  <h1 className="font-fortnite text-4xl md:text-5xl text-foreground tracking-wider italic leading-tight">
                    PACK MCLAREN<br />570S
                  </h1>
                  <p className="text-muted-foreground text-sm mt-2">Le prix des objets inclus est :</p>
                  <div className="flex items-center gap-2 mt-1">
                    <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z" />
                    </svg>
                    <span className="text-foreground font-bold text-xl">2 500</span>
                  </div>
                </div>
              </FadeIn>

              {/* Info Box */}
              <FadeIn delay={0.2}>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-4">
                  <p className="text-foreground text-sm leading-relaxed">
                    Comprend des stickers personnalisables ! Les stickers de ce pack ne fonctionnent que sur le châssis McLaren 570S. Cette voiture sera placée dans l'emplacement Voiture de sport des expériences de Fortnite concernées.
                  </p>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center flex-shrink-0">
                      <span className="text-xs">🚀</span>
                    </div>
                    <p className="text-foreground text-sm">
                      Acheter cet objet le rendra également disponible dans <span className="font-bold">Rocket League</span>.
                    </p>
                  </div>

                  <p className="text-muted-foreground text-xs">
                    Cet objet est disponible à l'achat jusqu'au 2 janv. 2026 à 07:00, heure locale (UTC+07:00).
                  </p>
                </div>
              </FadeIn>

              {/* Buy Button */}
              <FadeIn delay={0.3}>
                <motion.button 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-fortnite text-lg tracking-wider py-4 rounded-lg transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  SE CONNECTER POUR ACHETER
                </motion.button>
              </FadeIn>
            </div>

            {/* Right Side - Car Carousel */}
            <FadeIn delay={0.2} className="relative">
              <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.img
                    key={currentVariant}
                    src={carVariants[currentVariant].image}
                    alt={carVariants[currentVariant].name}
                    className="absolute inset-0 w-full h-full object-cover"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                      scale: { duration: 0.3 },
                    }}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center justify-between mt-4">
                <motion.button 
                  onClick={prevVariant}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-5 h-5 text-foreground" />
                </motion.button>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                    <Pause className="w-5 h-5 text-foreground" />
                    <Volume2 className="w-5 h-5 text-foreground" />
                  </div>
                </div>

                <motion.button 
                  onClick={nextVariant}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-5 h-5 text-foreground" />
                </motion.button>
              </div>

              {/* Variant Name */}
              <div className="text-center mt-4">
                <AnimatePresence mode="wait">
                  <motion.p 
                    key={currentVariant}
                    className="text-foreground font-medium"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {carVariants[currentVariant].name}
                  </motion.p>
                </AnimatePresence>
                <div className="flex items-center justify-center gap-1.5 mt-2">
                  {carVariants.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => {
                        setDirection(index > currentVariant ? 1 : -1);
                        setCurrentVariant(index);
                      }}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentVariant ? 'bg-accent' : 'bg-white/30'
                      }`}
                      whileHover={{ scale: 1.5 }}
                      animate={index === currentVariant ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 0.3 }}
                    />
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Included Items Section */}
          <section className="mt-12">
            <FadeIn delay={0.4}>
              <h2 className="font-fortnite text-2xl text-foreground tracking-wider italic mb-6">
                INCLUS DANS LE PACK
              </h2>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {packItems.map((item, index) => (
                <StaggerItem key={index}>
                  <motion.div 
                    className="group relative aspect-square rounded-lg overflow-hidden bg-gradient-to-b from-[#4a4a6a] to-[#3a3a5a] border border-white/10 hover:border-white/30 cursor-pointer transition-all"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <p className="text-foreground font-medium text-sm truncate">{item.name}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>
        </main>
      </div>
    </PageTransition>
  );
};

export default McLarenPack;
