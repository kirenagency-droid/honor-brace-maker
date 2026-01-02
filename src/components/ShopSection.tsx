import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "./ShopCard";
import { ChevronRight, Hand } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
import raven from "@/assets/shop/raven.png";
import darkBomber from "@/assets/shop/dark-bomber.png";
import aura from "@/assets/shop/aura.png";

import lynx from "@/assets/shop/lynx.png";
import drift from "@/assets/shop/drift.png";
import midas from "@/assets/shop/midas.png";
import fishstick from "@/assets/shop/fishstick.png";
import omega from "@/assets/shop/omega.png";
import skullTrooper from "@/assets/shop/skull-trooper.png";
import theReaper from "@/assets/shop/the-reaper.png";
import yujiItadori from "@/assets/shop/yuji-itadori.png";

const bestSellers = [
  {
    name: "YUJI ITADORI",
    image: yujiItadori,
    price: 2,
    badge: "ICÔNE",
    badgeType: "new" as const,
  },
  {
    name: "LISA",
    image: lisa,
    price: 2,
    badge: "ICÔNE",
    badgeType: "new" as const,
  },
  {
    name: "ICE SPICE",
    image: iceSpice,
    price: 2,
    badge: "ICÔNE",
    badgeType: "new" as const,
  },
  {
    name: "VINCENT VEGA",
    image: vincentVega,
    price: 2,
    badge: "ICÔNE",
    badgeType: "new" as const,
  },
  {
    name: "SPEED",
    image: ishowspeedSkin,
    price: 2,
    badge: "ICÔNE",
    badgeType: "new" as const,
  },
  {
    name: "SATORU GOJO",
    image: satoruGojo,
    price: 2,
    badge: "ICÔNE",
    badgeType: "new" as const,
  },
  {
    name: "KIM KARDASHIAN",
    image: kimKardashian,
    price: 2,
    badge: "ICÔNE",
    badgeType: "new" as const,
  },
  {
    name: "NEKO-RX1",
    image: nekoRx1,
    price: 2,
    badge: "NOUVEAU",
    badgeType: "new" as const,
  },
  {
    name: "RAVEN",
    image: raven,
    price: 2,
    badge: "LÉGENDAIRE",
    badgeType: "custom" as const,
  },
  {
    name: "DARK BOMBER",
    image: darkBomber,
    price: 2,
    badge: "PROMO",
    badgeType: "discount" as const,
  },
  {
    name: "DRIFT",
    image: drift,
    price: 2,
  },
  {
    name: "MIDAS",
    image: midas,
    price: 2,
    badge: "LÉGENDAIRE",
    badgeType: "custom" as const,
  },
  {
    name: "FISHSTICK",
    image: fishstick,
    price: 2,
  },
  {
    name: "AURA",
    image: aura,
    price: 2,
    badge: "POPULAIRE",
    badgeType: "new" as const,
  },
  {
    name: "LYNX",
    image: lynx,
    price: 2,
    badge: "LÉGENDAIRE",
    badgeType: "custom" as const,
  },
  {
    name: "OMEGA",
    image: omega,
    price: 2,
    badge: "LÉGENDAIRE",
    badgeType: "custom" as const,
  },
  {
    name: "SKULL TROOPER",
    image: skullTrooper,
    price: 2,
    badge: "RARE",
    badgeType: "custom" as const,
  },
  {
    name: "THE REAPER",
    image: theReaper,
    price: 2,
    badge: "OG",
    badgeType: "custom" as const,
  },
];

const featuredSkins = [
  {
    name: "KIM KARDASHIAN",
    image: kimKardashian,
    price: 2,
    badge: "ICÔNE",
    badgeType: "new" as const,
  },
  {
    name: "ICE SPICE",
    image: iceSpice,
    price: 2,
    badge: "ICÔNE",
    badgeType: "new" as const,
  },
  {
    name: "SPEED",
    image: ishowspeedSkin,
    price: 2,
    badge: "ICÔNE",
    badgeType: "new" as const,
  },
];

const ShopSection = () => {
  const navigate = useNavigate();
  
  const autoplayPlugin1 = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  
  const autoplayPlugin2 = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const handleSkinClick = (skin: { name: string; image: string; price: number }) => {
    navigate("/checkout", { state: { skin } });
  };

  return (
    <section id="shop-section" className="relative py-8 md:py-12 overflow-hidden">
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
            plugins={[autoplayPlugin1.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-3 md:-ml-4">
              {bestSellers.map((skin, index) => (
                <CarouselItem key={index} className="pl-3 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <ShopCard 
                    name={skin.name}
                    image={skin.image}
                    price={skin.price}
                    originalPrice={'originalPrice' in skin ? (skin as { originalPrice?: number }).originalPrice : undefined}
                    badge={skin.badge}
                    badgeType={skin.badgeType}
                    onClick={() => handleSkinClick(skin)}
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
            plugins={[autoplayPlugin2.current]}
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
                    onClick={() => handleSkinClick(skin)}
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