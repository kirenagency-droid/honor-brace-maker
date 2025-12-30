import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, Share2, Pause, Volume2, ChevronRight } from "lucide-react";

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

  const nextVariant = () => {
    setCurrentVariant((prev) => (prev + 1) % carVariants.length);
  };

  const prevVariant = () => {
    setCurrentVariant((prev) => (prev - 1 + carVariants.length) % carVariants.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a3e] via-[#2d2d5a] to-[#1a1a3e]">
      {/* Header */}
      <header className="flex items-center justify-between px-4 md:px-8 py-4">
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
        <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
          <Share2 className="w-5 h-5 text-foreground" />
        </button>
      </header>

      {/* Main Content */}
      <main className="px-4 md:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Side - Info */}
          <div className="space-y-6">
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

            {/* Info Box */}
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

            {/* Buy Button */}
            <button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-fortnite text-lg tracking-wider py-4 rounded-lg transition-colors">
              SE CONNECTER POUR ACHETER
            </button>
          </div>

          {/* Right Side - Car Carousel */}
          <div className="relative">
            <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
              <img
                src={carVariants[currentVariant].image}
                alt={carVariants[currentVariant].name}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-between mt-4">
              <button 
                onClick={prevVariant}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                  <Pause className="w-5 h-5 text-foreground" />
                  <Volume2 className="w-5 h-5 text-foreground" />
                </div>
              </div>

              <button 
                onClick={nextVariant}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>

            {/* Variant Name */}
            <div className="text-center mt-4">
              <p className="text-foreground font-medium">{carVariants[currentVariant].name}</p>
              <div className="flex items-center justify-center gap-1.5 mt-2">
                {carVariants.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentVariant(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentVariant ? 'bg-accent' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Included Items Section */}
        <section className="mt-12">
          <h2 className="font-fortnite text-2xl text-foreground tracking-wider italic mb-6">
            INCLUS DANS LE PACK
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {packItems.map((item, index) => (
              <div 
                key={index}
                className="group relative aspect-square rounded-lg overflow-hidden bg-gradient-to-b from-[#4a4a6a] to-[#3a3a5a] border border-white/10 hover:border-white/30 cursor-pointer transition-all"
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
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default McLarenPack;
