import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import GamesSection from "@/components/GamesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <HeroCarousel />
        <GamesSection />
      </main>
    </div>
  );
};

export default Index;