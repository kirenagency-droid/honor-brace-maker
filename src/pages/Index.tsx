import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import GamesSection from "@/components/GamesSection";
import ShopSection from "@/components/ShopSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <HeroCarousel />
        <ShopSection />
        <GamesSection />
      </main>
    </div>
  );
};

export default Index;