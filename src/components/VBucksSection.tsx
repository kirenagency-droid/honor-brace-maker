import vbucks1000 from "@/assets/shop/vbucks-1000.jpg";
import vbucks2800 from "@/assets/shop/vbucks-2800.jpg";

const vbucksOptions = [
  { amount: 1000, price: 7.99, image: vbucks1000 },
  { amount: 2800, price: 19.99, image: vbucks2800 },
  { amount: 5000, price: 31.99, image: null },
  { amount: 13500, price: 79.99, image: null },
];

const VBucksSection = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-12 bg-background">
      {/* Section Header */}
      <div className="mb-6">
        <h2 className="font-fortnite text-3xl md:text-4xl text-foreground tracking-wider mb-2">
          ACHETER DES V-BUCKS
        </h2>
        <p className="text-accent text-sm font-semibold mb-2">
          Gérée par l'Epic Games Store
        </p>
        <p className="text-muted-foreground text-sm max-w-3xl">
          Choisissez la quantité de V-bucks que vous voulez ajouter à votre compte. 
          Cela vous redirigera vers l'Epic Games Store. Pour connaître votre solde 
          détaillé de monnaie virtuelle, <a href="#" className="text-accent hover:underline">consultez votre solde de V-bucks de Fortnite</a>.
        </p>
      </div>

      {/* V-Bucks Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {vbucksOptions.map((option, index) => (
          <div
            key={index}
            className="group relative bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:border-primary hover:shadow-[0_0_25px_rgba(255,204,0,0.3)]"
          >
            {/* V-Bucks Image or Placeholder */}
            {option.image ? (
              <img 
                src={option.image} 
                alt={`${option.amount} V-Bucks`}
                className="w-full aspect-square object-cover"
              />
            ) : (
              <div className="flex items-center justify-center aspect-square">
                <div className="relative">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg group-hover:shadow-primary/50 transition-shadow duration-300">
                    <span className="font-fortnite text-background text-lg md:text-xl">V</span>
                  </div>
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            )}

            {/* Price Badge */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
              <span className="bg-primary/90 text-background font-bold px-4 py-1.5 rounded-full text-sm">
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