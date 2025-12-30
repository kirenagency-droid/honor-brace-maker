import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import GamesSection from "@/components/GamesSection";
import ShopSection from "@/components/ShopSection";
import { PageTransition } from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-16">
          <HeroCarousel />
          <ShopSection />
          <GamesSection />
        </main>
      </div>
    </PageTransition>
  );
};

export default Index;