interface BundleCardProps {
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  bonus?: string;
  itemType?: string;
  size?: 'small' | 'medium' | 'large' | 'wide';
  onClick?: () => void;
}

const BundleCard = ({ 
  name, 
  image, 
  price, 
  originalPrice, 
  discount, 
  bonus,
  itemType,
  size = 'medium',
  onClick
}: BundleCardProps) => {
  const sizeClasses = {
    small: 'col-span-1 row-span-1',
    medium: 'col-span-1 row-span-2',
    large: 'col-span-2 row-span-2',
    wide: 'col-span-2 row-span-1',
  };

  const mobileSizeClasses = {
    small: '',
    medium: '',
    large: 'sm:col-span-2 sm:row-span-2',
    wide: 'col-span-2',
  };

  return (
    <div 
      className={`bundle-card group relative overflow-hidden rounded-lg bg-white/5 border border-white/10 transition-all duration-300 hover:scale-[1.02] md:hover:scale-[1.03] hover:border-accent/50 hover:shadow-[0_0_25px_rgba(255,204,0,0.3)] ${sizeClasses[size]} ${mobileSizeClasses[size]} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); } : undefined}
    >
      {/* Discount Badge */}
      {discount && (
        <div className="absolute top-2 md:top-3 left-2 md:left-3 z-10 bg-accent text-accent-foreground text-[10px] md:text-xs font-bold px-1.5 md:px-2 py-0.5 md:py-1 rounded font-fortnite tracking-wide">
          {discount}
        </div>
      )}

      {/* Bonus Badge */}
      {bonus && (
        <div className="absolute top-2 md:top-3 left-2 md:left-3 z-10 bg-accent text-accent-foreground text-[10px] md:text-xs font-bold px-1.5 md:px-2 py-0.5 md:py-1 rounded font-fortnite tracking-wide">
          {bonus}
        </div>
      )}

      {/* Image */}
      <div className="absolute inset-0 overflow-hidden bg-muted/30">
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
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/70 group-hover:via-transparent transition-all duration-300" />
        {/* Glow overlay on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-accent/10 via-transparent to-transparent" />
      </div>

      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3 z-10">
        {itemType && (
          <span className="text-muted-foreground text-[10px] md:text-xs mb-0.5 md:mb-1 block">{itemType}</span>
        )}
        <h3 className="font-fortnite text-sm md:text-lg text-foreground tracking-wide truncate">
          {name}
        </h3>
        <div className="flex items-center gap-1.5 md:gap-2 mt-0.5 md:mt-1">
          <div className="flex items-center gap-0.5 md:gap-1">
            <svg className="w-3 h-3 md:w-4 md:h-4 text-accent" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z" />
            </svg>
            <span className="text-foreground font-semibold text-xs md:text-sm">{price.toLocaleString()}</span>
          </div>
          {originalPrice && (
            <span className="text-muted-foreground text-[10px] md:text-xs line-through">{originalPrice.toLocaleString()}</span>
          )}
        </div>
      </div>

      {/* Add Button */}
      <button className="absolute bottom-2 md:bottom-3 right-2 md:right-3 z-10 w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-foreground transition-colors">
        <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>
    </div>
  );
};

export default BundleCard;
