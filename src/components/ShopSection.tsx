import SkinCard from "./SkinCard";
import { 
  HatsuneMikuSection, 
  TerminatorSection, 
  McLarenSection,
  StrangerThingsSection,
  IShowSpeedSection,
  PulpFictionSection,
  JohnWickSection
} from "./ThemedShopSection";

const featuredSkins = [
  {
    name: "PEELY DORÉ",
    image: "https://fortnite-api.com/images/cosmetics/br/cid_701_athena_commando_m_bananagold/icon.png",
    price: 2,
    rarity: "legendary" as const,
    isNew: true,
  },
  {
    name: "RAVEN",
    image: "https://fortnite-api.com/images/cosmetics/br/cid_083_athena_commando_m_hightower/icon.png",
    price: 2,
    rarity: "legendary" as const,
  },
  {
    name: "DARK BOMBER",
    image: "https://fortnite-api.com/images/cosmetics/br/cid_269_athena_commando_f_darkbomber/icon.png",
    price: 2,
    rarity: "epic" as const,
  },
  {
    name: "DRIFT",
    image: "https://fortnite-api.com/images/cosmetics/br/cid_161_athena_commando_m_drift/icon.png",
    price: 2,
    rarity: "epic" as const,
    isNew: true,
  },
];

const dailySkins = [
  {
    name: "FISHSTICK",
    image: "https://fortnite-api.com/images/cosmetics/br/cid_315_athena_commando_m_teriyakifish/icon.png",
    price: 2,
    rarity: "rare" as const,
  },
  {
    name: "AURA",
    image: "https://fortnite-api.com/images/cosmetics/br/cid_550_athena_commando_f_starsandstripes/icon.png",
    price: 2,
    rarity: "uncommon" as const,
  },
  {
    name: "CRYSTAL",
    image: "https://fortnite-api.com/images/cosmetics/br/cid_517_athena_commando_f_frozenredshogun/icon.png",
    price: 2,
    rarity: "uncommon" as const,
  },
  {
    name: "DYNAMO",
    image: "https://fortnite-api.com/images/cosmetics/br/cid_243_athena_commando_f_luchamask/icon.png",
    price: 2,
    rarity: "uncommon" as const,
  },
  {
    name: "SIREN",
    image: "https://fortnite-api.com/images/cosmetics/br/cid_601_athena_commando_f_scubajonesy/icon.png",
    price: 2,
    rarity: "rare" as const,
  },
  {
    name: "MIDAS",
    image: "https://fortnite-api.com/images/cosmetics/br/cid_694_athena_commando_m_catburglar/icon.png",
    price: 2,
    rarity: "legendary" as const,
    isNew: true,
  },
];

const ShopSection = () => {
  return (
    <section className="py-8 md:py-12 px-4 md:px-8 lg:px-12 bg-background">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <div className="flex items-center gap-2 md:gap-4">
          <h2 className="font-fortnite text-2xl md:text-3xl lg:text-4xl text-foreground tracking-wider">
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
        <button className="btn-secondary text-xs md:text-sm px-3 md:px-4">
          Voir tout
        </button>
      </div>

      {/* Themed Sections */}
      <StrangerThingsSection />
      <IShowSpeedSection />
      <PulpFictionSection />
      <JohnWickSection />
      <HatsuneMikuSection />
      <TerminatorSection />
      <McLarenSection />

      {/* Featured Items */}
      <div className="mb-8 md:mb-10">
        <h3 className="font-fortnite text-lg md:text-xl text-accent mb-3 md:mb-4 tracking-wide">À LA UNE</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          {featuredSkins.map((skin, index) => (
            <SkinCard key={index} {...skin} />
          ))}
        </div>
      </div>

      {/* Daily Items */}
      <div>
        <h3 className="font-fortnite text-lg md:text-xl text-accent mb-3 md:mb-4 tracking-wide">QUOTIDIEN</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
          {dailySkins.map((skin, index) => (
            <SkinCard key={index} {...skin} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
