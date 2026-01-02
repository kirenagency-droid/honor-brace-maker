import vbucks1000 from "@/assets/shop/vbucks-1000.jpg";
import vbucks2800 from "@/assets/shop/vbucks-2800.jpg";
import vbucks5000 from "@/assets/shop/vbucks-5000.jpg";
import vbucks13500 from "@/assets/shop/vbucks-13500.jpg";

const vbucksOptions = [
  { amount: 1000, price: 2.00, image: vbucks1000 },
  { amount: 2800, price: 2.00, image: vbucks2800 },
  { amount: 5000, price: 2.00, image: vbucks5000 },
  { amount: 13500, price: 2.00, image: vbucks13500 },
];

const VBucksSection = () => {
  return (
    <section className="py-8 md:py-12 px-4 md:px-8 lg:px-12 bg-background">
      {/* Section Header */}
      <div className="mb-4 md:mb-6">
        <h2 className="font-fortnite text-2xl md:text-3xl lg:text-4xl text-foreground tracking-wider mb-1 md:mb-2">
          ACHETER DES V-BUCKS
        </h2>
        <p className="text-accent text-xs md:text-sm font-semibold mb-1 md:mb-2">
          Gérée par l'Epic Games Store
        </p>
        <p className="text-muted-foreground text-xs md:text-sm max-w-3xl leading-relaxed">
          Choisissez la quantité de V-bucks que vous voulez ajouter à votre compte. 
          <span className="hidden sm:inline"> Cela vous redirigera vers l'Epic Games Store. Pour connaître votre solde 
          détaillé de monnaie virtuelle, <a href="#" className="text-accent hover:underline">consultez votre solde de V-bucks de Fortnite</a>.</span>
        </p>
      </div>

      {/* V-Bucks Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
        {vbucksOptions.map((option, index) => (
          <div
            key={index}
            className="group relative bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-lg md:rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:border-primary hover:shadow-[0_0_25px_rgba(255,204,0,0.3)]"
          >
            {/* V-Bucks Amount Badge */}
            <div className="absolute top-2 md:top-3 left-1/2 -translate-x-1/2 z-10">
              <span className="bg-background/80 backdrop-blur-sm text-primary font-bold px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs md:text-sm whitespace-nowrap border border-primary/50">
                {option.amount.toLocaleString()} V-Bucks
              </span>
            </div>

            {/* V-Bucks Image */}
            <img 
              src={option.image} 
              alt={`${option.amount} V-Bucks`}
              className="w-full aspect-[3/4] object-cover object-top"
            />

            {/* Price Badge */}
            <div className="absolute bottom-2 md:bottom-3 left-1/2 -translate-x-1/2">
              <span className="bg-primary/90 text-background font-bold px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs md:text-sm whitespace-nowrap">
                {option.price.toFixed(2)} €
              </span>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default VBucksSection;