import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import GamesSection from "@/components/GamesSection";
import ShopSection from "@/components/ShopSection";
import VBucksSection from "@/components/VBucksSection";
import { PageTransition } from "@/components/PageTransition";
import { IceSpiceSection } from "@/components/ThemedShopSection";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-16">
          <HeroCarousel />
          <VBucksSection />
          <div className="px-4 md:px-8 lg:px-12">
            <IceSpiceSection />
          </div>
          <ShopSection />
          <GamesSection />
        </main>
      </div>
    </PageTransition>
  );
};

export default Index;