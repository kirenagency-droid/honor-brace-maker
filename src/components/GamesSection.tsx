import GameCard from "./GameCard";
const GamesSection = () => {
  const games = [{
    id: 1,
    title: "BATTLE ROYALE",
    image: "https://cdn2.unrealengine.com/fortnite-chapter-5-season-4-key-art-1920x1080-0fe7a116f7f3.jpg",
    rating: "12+"
  }, {
    id: 2,
    title: "RECHARGE",
    image: "https://cdn2.unrealengine.com/reload-keyart-1920x1080-1920x1080-56ba4e44891a.jpg",
    rating: "12+"
  }, {
    id: 3,
    title: "FESTIVAL",
    image: "https://cdn2.unrealengine.com/fortnite-festival-season-4-key-art-1920x1080-0c6e6d3c7b4e.jpg",
    rating: "12+"
  }, {
    id: 4,
    title: "ZÉRO CONSTRUCTION",
    image: "https://cdn2.unrealengine.com/zero-build-1920x1080-1920x1080-47d8c5d8ff14.jpg",
    rating: "12+"
  }, {
    id: 5,
    title: "RECHARGE",
    image: "https://cdn2.unrealengine.com/reload-keyart-1920x1080-1920x1080-56ba4e44891a.jpg",
    rating: "12+"
  }, {
    id: 6,
    title: "OG",
    image: "https://cdn2.unrealengine.com/fortnite-og-key-art-1920x1080-1920x1080-e8b5f5e5d3b4.jpg",
    rating: "12+"
  }];
  return (
    <section className="py-8 md:py-12 px-4 md:px-8 lg:px-12 bg-background">
      <h2 className="font-fortnite text-3xl md:text-4xl lg:text-5xl text-foreground tracking-wider mb-8">
        MODES DE JEU
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {games.map((game) => (
          <GameCard key={game.id} title={game.title} image={game.image} rating={game.rating} />
        ))}
      </div>
    </section>
  );
};
export default GamesSection;