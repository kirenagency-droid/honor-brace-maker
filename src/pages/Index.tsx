import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import ShopSection from "@/components/ShopSection";
import VBucksSection from "@/components/VBucksSection";
import Footer from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-16">
          <HeroCarousel />
          <VBucksSection />
          <ShopSection />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;