import SkinCard from "./SkinCard";
import { HatsuneMikuSection, TerminatorSection, McLarenSection } from "./ThemedShopSection";

const featuredSkins = [
  {
    name: "PEELY DORÉ",
    image: "https://fortnite-api.com/images/cosmetics/br/cid_701_athena_commando_m_bananagold/icon.png",
    price: 1500,
    rarity: "legendary" as const,
    isNew: true,
  },
  {
    name: "RAVEN",
    image: "https://fortnite-api.com/images/cosmetics/br/cid_083_athena_commando_m_hightower/icon.png",
    price: 2000,
    rarity: "legendary" as const,
  },
  {
    name: "DARK BOMBER",
    image: "https://fortnite-api.com/images/cosmetics/br/cid_269_athena_commando_f_darkbomber/icon.png",
    price: 1200,
    rarity: "epic" as const,
  },
  {
    name: "DRIFT",
    image: "https://fortnite-api.com/images/cosmetics/br/cid_161_athena_commando_m_drift/icon.png",
    price: 950,
    rarity: "epic" as const,
    isNew: true,
  },
];

const dailySkins = [
  {
    name: "FISHSTICK",
    image: "https://fortnite-api.com/images/cosmetics/br/cid_315_athena_commando_m_teriyakifish/icon.png",
    price: 1200,
    rarity: "rare" as const,
  },
  {
    name: "AURA",
    image: "https://fortnite-api.com/images/cosmetics/br/cid_550_athena_commando_f_starsandstripes/icon.png",
    price: 800,
    rarity: "uncommon" as const,
  },
  {
    name: "CRYSTAL",
    image: "https://fortnite-api.com/images/cosmetics/br/cid_517_athena_commando_f_frozenredshogun/icon.png",
    price: 800,
    rarity: "uncommon" as const,
  },
  {
    name: "DYNAMO",
    image: "https://fortnite-api.com/images/cosmetics/br/cid_243_athena_commando_f_luchamask/icon.png",
    price: 800,
    rarity: "uncommon" as const,
  },
  {
    name: "SIREN",
    image: "https://fortnite-api.com/images/cosmetics/br/cid_601_athena_commando_f_scubajonesy/icon.png",
    price: 1200,
    rarity: "rare" as const,
  },
  {
    name: "MIDAS",
    image: "https://fortnite-api.com/images/cosmetics/br/cid_694_athena_commando_m_catburglar/icon.png",
    price: 1500,
    rarity: "legendary" as const,
    isNew: true,
  },
];

const ShopSection = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-12 bg-background">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <h2 className="font-fortnite text-3xl md:text-4xl text-foreground tracking-wider">
            BOUTIQUE
          </h2>
          <div className="hidden md:flex items-center gap-2 text-muted-foreground text-sm">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12,6 12,12 16,14" />
            </svg>
            <span>Mise à jour dans 12:34:56</span>
          </div>
        </div>
        <button className="btn-secondary text-sm">
          Voir tout
        </button>
      </div>

      {/* Themed Sections */}
      <HatsuneMikuSection />
      <TerminatorSection />
      <McLarenSection />

      {/* Featured Items */}
      <div className="mb-10">
        <h3 className="font-fortnite text-xl text-accent mb-4 tracking-wide">À LA UNE</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuredSkins.map((skin, index) => (
            <SkinCard key={index} {...skin} />
          ))}
        </div>
      </div>

      {/* Daily Items */}
      <div>
        <h3 className="font-fortnite text-xl text-accent mb-4 tracking-wide">QUOTIDIEN</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {dailySkins.map((skin, index) => (
            <SkinCard key={index} {...skin} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
