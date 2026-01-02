import ShopCard from "./ShopCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const bestSellers = [
  {
    name: "PEELY DORÉ",
    image: "https://fortnite-api.com/images/cosmetics/br/cid_701_athena_commando_m_bananagold/icon.png",
    price: 1500,
    badge: "NOUVEAU",
    badgeType: "new" as const,
  },
  {
    name: "RAVEN",
    image: "https://fortnite-api.com/images/cosmetics/br/cid_083_athena_commando_m_hightower/icon.png",
    price: 2000,
    badge: "À PERSONNALISER !",
    badgeType: "custom" as const,
  },
  {
    name: "DARK BOMBER",
    image: "https://fortnite-api.com/images/cosmetics/br/cid_269_athena_commando_f_darkbomber/icon.png",
    price: 1200,
    originalPrice: 1500,
    badge: "300 V-BUCKS DE RÉDUC.",
    badgeType: "discount" as const,
  },
  {
    name: "DRIFT",
    image: "https://fortnite-api.com/images/cosmetics/br/cid_161_athena_commando_m_drift/icon.png",
    price: 1500,
  },
];

const featuredSkins = [
  {
    name: "FISHSTICK",
    image: "https://fortnite-api.com/images/cosmetics/br/cid_315_athena_commando_m_teriyakifish/icon.png",
    price: 1200,
  },
  {
    name: "AURA",
    image: "https://fortnite-api.com/images/cosmetics/br/cid_550_athena_commando_f_starsandstripes/icon.png",
    price: 800,
  },
  {
    name: "CRYSTAL",
    image: "https://fortnite-api.com/images/cosmetics/br/cid_517_athena_commando_f_frozenredshogun/icon.png",
    price: 800,
  },
  {
    name: "DYNAMO",
    image: "https://fortnite-api.com/images/cosmetics/br/cid_243_athena_commando_f_luchamask/icon.png",
    price: 800,
  },
  {
    name: "SIREN",
    image: "https://fortnite-api.com/images/cosmetics/br/cid_601_athena_commando_f_scubajonesy/icon.png",
    price: 1200,
    badge: "NOUVEAU",
    badgeType: "new" as const,
  },
  {
    name: "MIDAS",
    image: "https://fortnite-api.com/images/cosmetics/br/cid_694_athena_commando_m_catburglar/icon.png",
    price: 2000,
  },
];

const ShopSection = () => {
  return (
    <section className="relative py-8 md:py-12 overflow-hidden">
      {/* Premium Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210_70%_50%)] via-[hsl(215_60%_40%)] to-[hsl(220_50%_30%)]" />
      
      {/* Decorative light effects */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-white/10 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-radial from-blue-300/10 to-transparent blur-3xl" />
      
      {/* Content */}
      <div className="relative z-10 px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
            <span className="text-white text-lg">≡</span>
          </div>
          <div>
            <h2 className="font-fortnite text-3xl md:text-4xl lg:text-5xl text-white tracking-wider">
              BOUTIQUE D'OBJETS
            </h2>
            <p className="text-white/60 text-sm">Gérée par l'Epic Games Store</p>
          </div>
        </div>

        {/* Best Sellers Section */}
        <div className="mb-10">
          <h3 className="font-fortnite text-xl md:text-2xl text-white mb-4 tracking-wide">
            MEILLEURES VENTES DU JOUR
          </h3>
          
          <div className="relative">
            {/* Navigation dots on the left */}
            <div className="hidden lg:flex absolute -left-8 top-1/2 -translate-y-1/2 flex-col gap-2 z-20">
              {bestSellers.map((_, index) => (
                <div 
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${index === 0 ? 'bg-white h-4' : 'bg-white/40'}`}
                />
              ))}
            </div>
            
            {/* Arrow navigation */}
            <button className="hidden lg:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 items-center justify-center text-white transition-all">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 items-center justify-center text-white transition-all">
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Cards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {bestSellers.map((skin, index) => (
                <ShopCard 
                  key={index} 
                  name={skin.name}
                  image={skin.image}
                  price={skin.price}
                  originalPrice={skin.originalPrice}
                  badge={skin.badge}
                  badgeType={skin.badgeType}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Featured Items Section */}
        <div className="mb-10">
          <h3 className="font-fortnite text-xl md:text-2xl text-white mb-4 tracking-wide">
            À LA UNE
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
            {featuredSkins.map((skin, index) => (
              <ShopCard 
                key={index} 
                name={skin.name}
                image={skin.image}
                price={skin.price}
                badge={skin.badge}
                badgeType={skin.badgeType}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
