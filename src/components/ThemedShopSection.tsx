import BundleCard from "./BundleCard";

interface ThemedItem {
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  bonus?: string;
  itemType?: string;
  size?: 'small' | 'medium' | 'large' | 'wide';
}

interface ThemedShopSectionProps {
  title: string;
  themeColor: string;
  items: ThemedItem[];
}

const ThemedShopSection = ({ title, themeColor, items }: ThemedShopSectionProps) => {
  return (
    <section className="mb-8">
      {/* Section Title */}
      <h2 className="font-fortnite text-2xl md:text-3xl text-foreground tracking-wider mb-4 italic">
        {title}
      </h2>

      {/* Items Grid with themed background */}
      <div 
        className="rounded-xl p-4 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${themeColor}40, ${themeColor}20)` }}
      >
        {/* Background decoration */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{ 
            backgroundImage: `radial-gradient(circle at 20% 80%, ${themeColor}, transparent 50%), radial-gradient(circle at 80% 20%, ${themeColor}, transparent 50%)` 
          }}
        />
        
        <div className="grid grid-cols-4 md:grid-cols-6 gap-3 auto-rows-[140px] relative z-10">
          {items.map((item, index) => (
            <BundleCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Pre-configured themed sections
export const HatsuneMikuSection = () => {
  const items = [
    {
      name: "Pack Snow Miku",
      image: "https://fortnite-api.com/images/cosmetics/br/character_snowmiku/icon.png",
      price: 2200,
      originalPrice: 3300,
      discount: "1100 V-BUCKS DE RÉDUC.",
      size: 'wide' as const,
    },
    {
      name: "Snow Miku",
      image: "https://fortnite-api.com/images/cosmetics/br/cid_a_272_athena_commando_f_intrepidmiku/icon.png",
      price: 1500,
      bonus: "ACCESSOIRE DE DOS BONUS !",
      size: 'medium' as const,
    },
    {
      name: "Rabbit Yukine",
      image: "https://fortnite-api.com/images/cosmetics/br/bid_756_intrepidmiku/icon.png",
      price: 400,
      size: 'medium' as const,
    },
    {
      name: "Snow Mix",
      image: "https://fortnite-api.com/images/cosmetics/br/eid_mikudance/icon.png",
      price: 500,
      size: 'small' as const,
    },
    {
      name: "Flonflon des flocons",
      image: "https://fortnite-api.com/images/cosmetics/br/pickaxe_id_669_intrepidmiku/icon.png",
      price: 800,
      size: 'small' as const,
    },
    {
      name: "SnowMix♪",
      image: "https://fortnite-api.com/images/cosmetics/br/musicpack_079_intrepidmiku/icon.png",
      price: 500,
      size: 'small' as const,
    },
  ];

  return <ThemedShopSection title="HATSUNE MIKU" themeColor="#4FC3F7" items={items} />;
};

export const TerminatorSection = () => {
  const items = [
    {
      name: "Pack Terminator",
      image: "https://fortnite-api.com/images/cosmetics/br/cid_762_athena_commando_m_intrepidterminator/icon.png",
      price: 2300,
      originalPrice: 3300,
      discount: "1000 V-BUCKS DE RÉDUC.",
      size: 'large' as const,
    },
    {
      name: "Pack Guerre du futur",
      image: "https://fortnite-api.com/images/cosmetics/br/cid_761_athena_commando_f_intrepidsarahconnor/icon.png",
      price: 2800,
      originalPrice: 4400,
      discount: "1600 V-BUCKS DE RÉDUC.",
      size: 'large' as const,
    },
    {
      name: "Terminator",
      image: "https://fortnite-api.com/images/cosmetics/br/cid_762_athena_commando_m_intrepidterminator/icon.png",
      price: 1500,
      size: 'medium' as const,
    },
    {
      name: "Sarah Connor",
      image: "https://fortnite-api.com/images/cosmetics/br/cid_761_athena_commando_f_intrepidsarahconnor/icon.png",
      price: 1800,
      bonus: "COMPREND UNE PIOCHE !",
      size: 'medium' as const,
    },
    {
      name: "T-800",
      image: "https://fortnite-api.com/images/cosmetics/br/glider_id_243_intrepidterminator/icon.png",
      price: 1500,
      size: 'small' as const,
    },
    {
      name: "Salut Cyberdyne",
      image: "https://fortnite-api.com/images/cosmetics/br/eid_intrepidterminator/icon.png",
      price: 300,
      size: 'small' as const,
    },
  ];

  return <ThemedShopSection title="TERMINATOR" themeColor="#78909C" items={items} />;
};

export const McLarenSection = () => {
  const items = [
    {
      name: "Pack McLaren 570S",
      image: "https://fortnite-api.com/images/cosmetics/br/wrap_356_intrepidmclaren/icon.png",
      price: 2500,
      size: 'wide' as const,
    },
  ];

  return <ThemedShopSection title="MCLAREN 570S" themeColor="#546E7A" items={items} />;
};

export default ThemedShopSection;
