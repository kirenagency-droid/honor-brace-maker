interface GameCardProps {
  title: string;
  image: string;
  rating?: string;
}

const GameCard = ({ title, image, rating = "12+" }: GameCardProps) => {
  return (
    <div className="game-card group relative">
      {/* Epic Games Badge */}
      <div className="absolute top-2 left-2 z-10 bg-background/90 rounded px-1.5 py-0.5 flex items-center gap-1">
        <div className="w-4 h-4 bg-foreground rounded-sm flex items-center justify-center">
          <span className="text-background text-[6px] font-bold">EPIC</span>
        </div>
      </div>

      {/* Rating Badge */}
      <div className="absolute top-2 right-2 z-10 bg-background/90 rounded px-1.5 py-0.5">
        <span className="text-foreground text-xs font-semibold">{rating}</span>
      </div>

      {/* Game Image */}
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Game Title Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-3">
        <h3 className="font-fortnite text-lg text-foreground tracking-wide">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default GameCard;