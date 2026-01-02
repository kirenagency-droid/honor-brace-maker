import ShopCard from "./ShopCard";
import { ChevronLeft, ChevronRight, Hand } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SwipeIndicator = () => (
  <div className="flex md:hidden items-center justify-center gap-2 mt-3 text-white/60 text-sm animate-pulse">
    <Hand className="w-4 h-4 rotate-[-20deg]" />
    <span>Glissez pour voir plus</span>
    <ChevronRight className="w-4 h-4" />
  </div>
);

import ishowspeedSkin from "@/assets/shop/ishowspeed-skin.png";
import satoruGojo from "@/assets/shop/satoru-gojo.png";
import nekoRx1 from "@/assets/shop/neko-rx1.png";
import kimKardashian from "@/assets/shop/kim-kardashian.webp";
import vincentVega from "@/assets/shop/vincent-vega.png";
import iceSpice from "@/assets/shop/ice-spice.webp";
import lisa from "@/assets/shop/lisa.png";

const bestSellers = [
  {
    name: "LISA",
    image: lisa,
    price: 1800,
    badge: "ICÔNE",
    badgeType: "new" as const,
  },
  {
    name: "ICE SPICE",
    image: iceSpice,
    price: 1800,
    badge: "ICÔNE",
    badgeType: "new" as const,
  },
  {
    name: "VINCENT VEGA",
    image: vincentVega,
    price: 1800,
    badge: "ICÔNE",
    badgeType: "new" as const,
  },
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
    name: "KIM KARDASHIAN",
    image: kimKardashian,
    price: 2000,
    badge: "ICÔNE",
    badgeType: "new" as const,
  },
  {
    name: "NEKO-RX1",
    image: nekoRx1,
    price: 1500,
    badge: "NOUVEAU",
    badgeType: "new" as const,
  },
  {
    name: "PEELY DORÉ",
    image: "https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_701_Athena_Commando_M_BananaGold/MI_CID_701_Athena_Commando_M_BananaGold.png",
    price: 1500,
    badge: "NOUVEAU",
    badgeType: "new" as const,
  },
  {
    name: "RAVEN",
    image: "https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_083_Athena_Commando_M_HighTower/MI_CID_083_Athena_Commando_M_HighTower.png",
    price: 2000,
    badge: "À PERSONNALISER !",
    badgeType: "custom" as const,
  },
  {
    name: "DARK BOMBER",
    image: "https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_269_Athena_Commando_F_DarkBomber/MI_CID_269_Athena_Commando_F_DarkBomber.png",
    price: 1200,
    originalPrice: 1500,
    badge: "300 V-BUCKS DE RÉDUC.",
    badgeType: "discount" as const,
  },
  {
    name: "DRIFT",
    image: "https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_161_Athena_Commando_M_Drift/MI_CID_161_Athena_Commando_M_Drift.png",
    price: 1500,
  },
  {
    name: "MIDAS",
    image: "https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_694_Athena_Commando_M_CatBurglar/MI_CID_694_Athena_Commando_M_CatBurglar.png",
    price: 2000,
    badge: "LÉGENDAIRE",
    badgeType: "custom" as const,
  },
  {
    name: "FISHSTICK",
    image: "https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_315_Athena_Commando_M_TeriyakiFish/MI_CID_315_Athena_Commando_M_TeriyakiFish.png",
    price: 1200,
  },
  {
    name: "AURA",
    image: "https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_580_Athena_Commando_F_Goddess/MI_CID_580_Athena_Commando_F_Goddess.png",
    price: 800,
    badge: "POPULAIRE",
    badgeType: "new" as const,
  },
  {
    name: "CRYSTAL",
    image: "https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_581_Athena_Commando_M_Wizard/MI_CID_581_Athena_Commando_M_Wizard.png",
    price: 800,
  },
  {
    name: "LYNX",
    image: "https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_349_Athena_Commando_F_IceLynx/MI_CID_349_Athena_Commando_F_IceLynx.png",
    price: 1500,
    badge: "LÉGENDAIRE",
    badgeType: "custom" as const,
  },
  {
    name: "OMEGA",
    image: "https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_116_Athena_Commando_M_CarbideBlack/MI_CID_116_Athena_Commando_M_CarbideBlack.png",
    price: 2000,
    badge: "LÉGENDAIRE",
    badgeType: "custom" as const,
  },
  {
    name: "CATALYST",
    image: "https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_478_Athena_Commando_F_RiftFemale/MI_CID_478_Athena_Commando_F_RiftFemale.png",
    price: 1500,
  },
  {
    name: "SHADOW OPS",
    image: "https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_086_Athena_Commando_F_Assassin/MI_CID_086_Athena_Commando_F_Assassin.png",
    price: 1500,
  },
  {
    name: "SKULL TROOPER",
    image: "https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_030_Athena_Commando_M_Halloween/MI_CID_030_Athena_Commando_M_Halloween.png",
    price: 1500,
    badge: "RARE",
    badgeType: "custom" as const,
  },
  {
    name: "TRAVIS SCOTT",
    image: "https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_434_Athena_Commando_M_Stormfighter/MI_CID_434_Athena_Commando_M_Stormfighter.png",
    price: 1500,
    badge: "ICÔNE",
    badgeType: "new" as const,
  },
  {
    name: "THE REAPER",
    image: "https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_084_Athena_Commando_M_Assassin/MI_CID_084_Athena_Commando_M_Assassin.png",
    price: 2000,
    badge: "OG",
    badgeType: "custom" as const,
  },
];

const featuredSkins = [
  {
    name: "KIM KARDASHIAN",
    image: kimKardashian,
    price: 2000,
    badge: "ICÔNE",
    badgeType: "new" as const,
  },
  {
    name: "ICE SPICE",
    image: iceSpice,
    price: 1800,
    badge: "ICÔNE",
    badgeType: "new" as const,
  },
  {
    name: "SPEED",
    image: ishowspeedSkin,
    price: 1800,
    badge: "ICÔNE",
    badgeType: "new" as const,
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
          <SwipeIndicator />
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
          <SwipeIndicator />
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
