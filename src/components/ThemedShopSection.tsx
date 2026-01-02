import { useNavigate } from "react-router-dom";
import BundleCard from "./BundleCard";

import strangerDustinCard from "@/assets/shop/stranger-dustin.png";
import strangerLucasCard from "@/assets/shop/stranger-lucas.png";
import strangerVecnaCard from "@/assets/shop/stranger-vecna.png";
import strangerElevenCard from "@/assets/shop/stranger-eleven.png";
import strangerHopperCard from "@/assets/shop/stranger-hopper.png";
import ishowspeedCard from "@/assets/shop/ishowspeed-card.png";
import johnWickCard from "@/assets/shop/john-wick.png";
import hatsuneMikuCard from "@/assets/shop/hatsune-miku.png";

interface ThemedItem {
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  bonus?: string;
  itemType?: string;
  size?: 'small' | 'medium' | 'large' | 'wide';
  link?: string;
}

interface ThemedShopSectionProps {
  title: string;
  themeColor: string;
  items: ThemedItem[];
}

const ThemedShopSection = ({ title, themeColor, items }: ThemedShopSectionProps) => {
  const navigate = useNavigate();

  const handleItemClick = (item: ThemedItem) => {
    if (item.link) {
      navigate(item.link);
    }
  };

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
            <BundleCard 
              key={index} 
              {...item} 
              onClick={item.link ? () => handleItemClick(item) : undefined}
            />
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
      name: "Hatsune Miku",
      image: hatsuneMikuCard,
      price: 1500,
      bonus: "ACCESSOIRE DE DOS BONUS !",
      size: 'large' as const,
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
      link: '/mclaren',
    },
  ];

  return <ThemedShopSection title="MCLAREN 570S" themeColor="#546E7A" items={items} />;
};

export const StrangerThingsSection = () => {
  const items = [
    {
      name: "Pack Vecna",
      image: strangerVecnaCard,
      price: 2500,
      originalPrice: 3100,
      discount: "600 V-BUCKS DE RÉDUC.",
      size: 'large' as const,
    },
    {
      name: "Onze",
      image: strangerElevenCard,
      price: 1800,
      bonus: "ACCESSOIRE DE DOS BONUS !",
      size: 'medium' as const,
    },
    {
      name: "Dustin Henderson",
      image: strangerDustinCard,
      price: 1500,
      size: 'medium' as const,
    },
    {
      name: "Lucas Sinclair",
      image: strangerLucasCard,
      price: 1500,
      size: 'medium' as const,
    },
    {
      name: "Hopper chef",
      image: strangerHopperCard,
      price: 1500,
      size: 'small' as const,
    },
    {
      name: "Demogorgon",
      image: "https://fortnite-api.com/images/cosmetics/br/cid_a_355_athena_commando_m_intrepiddemogorgon/icon.png",
      price: 1200,
      size: 'small' as const,
    },
  ];

  return <ThemedShopSection title="STRANGER THINGS" themeColor="#1A3A4A" items={items} />;
};

export const IShowSpeedSection = () => {
  const items = [
    {
      name: "Pack Série Icône Speed",
      image: ishowspeedCard,
      price: 2800,
      originalPrice: 4000,
      discount: "1200 V-BUCKS DE RÉDUC.",
      size: 'wide' as const,
    },
    {
      name: "Danse Speed",
      image: "https://fortnite-api.com/images/cosmetics/br/eid_intrepidspeed/icon.png",
      price: 500,
      size: 'small' as const,
    },
    {
      name: "Revêtement Speed",
      image: "https://fortnite-api.com/images/cosmetics/br/wrap_424_intrepidspeed/icon.png",
      price: 600,
      size: 'small' as const,
    },
  ];

  return <ThemedShopSection title="SÉRIE ICÔNE" themeColor="#B71C1C" items={items} />;
};

export const PulpFictionSection = () => {
  const items = [
    {
      name: "Pack Pulp Fiction",
      image: "https://fortnite-api.com/images/cosmetics/br/cid_a_330_athena_commando_m_intrepidjules/icon.png",
      price: 2800,
      originalPrice: 4200,
      discount: "1400 V-BUCKS DE RÉDUC.",
      size: 'wide' as const,
    },
    {
      name: "Vincent Vega",
      image: "https://fortnite-api.com/images/cosmetics/br/cid_a_331_athena_commando_m_intrepidvincent/icon.png",
      price: 1800,
      bonus: "ACCESSOIRE DE DOS BONUS !",
      size: 'medium' as const,
    },
    {
      name: "Mia Wallace",
      image: "https://fortnite-api.com/images/cosmetics/br/cid_a_332_athena_commando_f_intrepidmia/icon.png",
      price: 1500,
      size: 'medium' as const,
    },
  ];

  return <ThemedShopSection title="PULP FICTION" themeColor="#C5A600" items={items} />;
};

export const JohnWickSection = () => {
  const items = [
    {
      name: "Pack John Wick",
      image: johnWickCard,
      price: 2600,
      originalPrice: 3800,
      discount: "1200 V-BUCKS DE RÉDUC.",
      size: 'large' as const,
    },
  ];

  return <ThemedShopSection title="JOHN WICK" themeColor="#1A1A2E" items={items} />;
};

export default ThemedShopSection;
