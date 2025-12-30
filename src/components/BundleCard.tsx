interface BundleCardProps {
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  bonus?: string;
  itemType?: string;
  size?: 'small' | 'medium' | 'large' | 'wide';
}

const BundleCard = ({ 
  name, 
  image, 
  price, 
  originalPrice, 
  discount, 
  bonus,
  itemType,
  size = 'medium' 
}: BundleCardProps) => {
  const sizeClasses = {
    small: 'col-span-1 row-span-1',
    medium: 'col-span-1 row-span-2',
    large: 'col-span-2 row-span-2',
    wide: 'col-span-2 row-span-1',
  };

  return (
    <div className={`bundle-card group relative overflow-hidden rounded-lg bg-white/5 border border-white/10 cursor-pointer hover:border-white/30 transition-all duration-300 ${sizeClasses[size]}`}>
      {/* Discount Badge */}
      {discount && (
        <div className="absolute top-3 left-3 z-10 bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded font-fortnite tracking-wide">
          {discount}
        </div>
      )}

      {/* Bonus Badge */}
      {bonus && (
        <div className="absolute top-3 left-3 z-10 bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded font-fortnite tracking-wide">
          {bonus}
        </div>
      )}

      {/* Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
        {itemType && (
          <span className="text-muted-foreground text-xs mb-1 block">{itemType}</span>
        )}
        <h3 className="font-fortnite text-lg text-foreground tracking-wide">
          {name}
        </h3>
        <div className="flex items-center gap-2 mt-1">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z" />
            </svg>
            <span className="text-foreground font-semibold text-sm">{price.toLocaleString()}</span>
          </div>
          {originalPrice && (
            <span className="text-muted-foreground text-xs line-through">{originalPrice.toLocaleString()}</span>
          )}
        </div>
      </div>

      {/* Add Button */}
      <button className="absolute bottom-3 right-3 z-10 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-foreground transition-colors">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>
    </div>
  );
};

export default BundleCard;
