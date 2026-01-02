interface SkinCardProps {
  name: string;
  image: string;
  price: number;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  isNew?: boolean;
}

const rarityColors = {
  common: 'from-gray-500 to-gray-600',
  uncommon: 'from-green-500 to-green-600',
  rare: 'from-blue-500 to-blue-600',
  epic: 'from-purple-500 to-purple-600',
  legendary: 'from-orange-400 to-orange-500',
};

const rarityBorders = {
  common: 'border-gray-500',
  uncommon: 'border-green-500',
  rare: 'border-blue-500',
  epic: 'border-purple-500',
  legendary: 'border-orange-400',
};

const SkinCard = ({ name, image, price, rarity, isNew = false }: SkinCardProps) => {
  return (
    <div className={`skin-card group relative overflow-hidden rounded-lg border-2 ${rarityBorders[rarity]} bg-gradient-to-b ${rarityColors[rarity]} cursor-pointer`}>
      {/* New Badge */}
      {isNew && (
        <div className="absolute top-1.5 md:top-2 left-1.5 md:left-2 z-10 bg-accent text-accent-foreground text-[10px] md:text-xs font-bold px-1.5 md:px-2 py-0.5 rounded">
          NOUVEAU
        </div>
      )}

      {/* Skin Image */}
      <div className="aspect-[3/4] overflow-hidden relative bg-muted">
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-[1]" />
        <img
          src={image}
          alt={name}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          onError={(e) => {
            const img = e.currentTarget;
            if (img.dataset.fallback) return;
            img.dataset.fallback = "1";
            img.src = "/placeholder.svg";
          }}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Skin Info */}
      <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3 z-10">
        <h3 className="font-fortnite text-sm md:text-lg text-foreground tracking-wide truncate">
          {name}
        </h3>
        <div className="flex items-center gap-1 md:gap-1.5 mt-0.5 md:mt-1">
          <svg className="w-3 h-3 md:w-4 md:h-4 text-accent" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
          <span className="text-foreground font-semibold text-xs md:text-sm">{price.toLocaleString()}</span>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300" />
    </div>
  );
};

export default SkinCard;
