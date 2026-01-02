import ShopCard from "./ShopCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import ishowspeedSkin from "@/assets/shop/ishowspeed-skin.png";
import satoruGojo from "@/assets/shop/satoru-gojo.png";

const bestSellers = [
  {
    name: "SPEED",
    image: ishowspeedSkin,
    price: 1800,
    badge: "ICÔNE",
    badgeType: "new" as const,
  },
  {
    name: "SATORU GOJO",
    image: satoruGojo,
    price: 2000,
    badge: "ICÔNE",
    badgeType: "new" as const,
  },
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
  {
    name: "MIDAS",
    image: "https://fortnite-api.com/images/cosmetics/br/cid_694_athena_commando_m_catburglar/icon.png",
    price: 2000,
    badge: "LÉGENDAIRE",
    badgeType: "custom" as const,
  },
  {
    name: "FISHSTICK",
    image: "https://fortnite-api.com/images/cosmetics/br/cid_315_athena_commando_m_teriyakifish/icon.png",
    price: 1200,
  },
];

const featuredSkins = [
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
    name: "LYNX",
    image: "https://fortnite-api.com/images/cosmetics/br/cid_349_athena_commando_f_icelynx/icon.png",
    price: 1500,
  },
  {
    name: "OMEGA",
    image: "https://fortnite-api.com/images/cosmetics/br/cid_116_athena_commando_m_carbideblack/icon.png",
    price: 2000,
  },
  {
    name: "CATALYST",
    image: "https://fortnite-api.com/images/cosmetics/br/cid_478_athena_commando_f_riftfemale/icon.png",
    price: 1500,
  },
  {
    name: "SHADOW OPS",
    image: "https://fortnite-api.com/images/cosmetics/br/cid_086_athena_commando_f_assassin/icon.png",
    price: 1500,
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
          <h2 className="font-fortnite text-3xl md:text-4xl lg:text-5xl text-white tracking-wider">
            BOUTIQUE D'OBJETS
          </h2>
        </div>

        {/* Best Sellers Section - Carousel */}
        <div className="mb-10">
          <h3 className="font-fortnite text-xl md:text-2xl text-white mb-4 tracking-wide">
            MEILLEURES VENTES DU JOUR
          </h3>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-3 md:-ml-4">
              {bestSellers.map((skin, index) => (
                <CarouselItem key={index} className="pl-3 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <ShopCard 
                    name={skin.name}
                    image={skin.image}
                    price={skin.price}
                    originalPrice={skin.originalPrice}
                    badge={skin.badge}
                    badgeType={skin.badgeType}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom Navigation Arrows */}
            <CarouselPrevious className="hidden md:flex -left-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border-none text-white" />
            <CarouselNext className="hidden md:flex -right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border-none text-white" />
          </Carousel>
        </div>

        {/* Featured Items Section - Carousel */}
        <div className="mb-10">
          <h3 className="font-fortnite text-xl md:text-2xl text-white mb-4 tracking-wide">
            À LA UNE
          </h3>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-3 md:-ml-4">
              {featuredSkins.map((skin, index) => (
                <CarouselItem key={index} className="pl-3 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
                  <ShopCard 
                    name={skin.name}
                    image={skin.image}
                    price={skin.price}
                    badge={skin.badge}
                    badgeType={skin.badgeType}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom Navigation Arrows */}
            <CarouselPrevious className="hidden md:flex -left-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border-none text-white" />
            <CarouselNext className="hidden md:flex -right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border-none text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
