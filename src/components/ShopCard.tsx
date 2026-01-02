import { Plus } from "lucide-react";

interface ShopCardProps {
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  badgeType?: 'discount' | 'custom' | 'new';
  size?: 'normal' | 'large';
  onClick?: () => void;
}

const ShopCard = ({ 
  name, 
  image, 
  price, 
  originalPrice,
  badge,
  badgeType = 'custom',
  size = 'normal',
  onClick
}: ShopCardProps) => {
  const getBadgeStyles = () => {
    switch (badgeType) {
      case 'discount':
        return 'bg-foreground text-background';
      case 'new':
        return 'bg-green-500 text-white';
      default:
        return 'bg-[hsl(var(--shop-badge-bg))] text-[hsl(var(--shop-badge-text))]';
    }
  };

  return (
    <div 
      className={`shop-card group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${
        size === 'large' ? 'col-span-2 row-span-2' : ''
      }`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); } : undefined}
    >
      {/* Card Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(215_50%_60%)] to-[hsl(215_45%_50%)] rounded-2xl" />
      
      {/* Inner border effect */}
      <div className="absolute inset-[2px] rounded-[14px] border border-white/20" />

      {/* Badge */}
      {badge && (
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20">
          <span className={`${getBadgeStyles()} text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap shadow-lg`}>
            {badge}
          </span>
        </div>
      )}

      {/* Character Image */}
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-muted/30">
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
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Subtle gradient overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[hsl(215_50%_45%/0.8)] to-transparent" />
      </div>

      {/* Info Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 z-10">
        <div className="flex items-end justify-between">
          <div className="flex-1 min-w-0">
            {/* Name */}
            <h3 className="font-fortnite text-base md:text-lg text-white tracking-wide truncate leading-tight">
              {name}
            </h3>
            
            {/* Price */}
            <div className="flex items-center gap-2 mt-1.5">
              <span className="bg-white/20 backdrop-blur-sm text-white font-bold text-sm md:text-base px-3 py-1 rounded-full border border-white/30 shadow-lg">
                {price.toFixed(2)} €
              </span>
              {originalPrice && (
                <span className="text-white/40 text-xs line-through">{originalPrice.toFixed(2)} €</span>
              )}
            </div>
          </div>

          {/* Add Button */}
          <button 
            className="flex-shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-all duration-200 hover:scale-110 ml-2"
            onClick={(e) => e.stopPropagation()}
          >
            <Plus className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
