import { Search, Globe, ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left section - Logos and Nav */}
        <div className="flex items-center gap-8">
          {/* Epic Games Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-foreground rounded flex items-center justify-center">
              <span className="text-background text-xs font-bold">EPIC</span>
            </div>
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </div>

          {/* Fortnite Logo */}
          <div className="font-fortnite text-2xl tracking-wider">
            FORTNITE
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#" className="nav-link">Découvrir</a>
            <a href="#" className="nav-link">Ma bibliothèque</a>
            <a href="#" className="nav-link">Communautés</a>
            <a href="#" className="nav-link flex items-center gap-1">
              En savoir plus
              <ChevronDown className="w-4 h-4" />
            </a>
          </nav>
        </div>

        {/* Right section - Search and Actions */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="hidden md:flex items-center relative">
            <Search className="absolute left-3 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Recherche"
              className="search-input pl-10 w-64"
            />
          </div>

          {/* Globe Icon */}
          <button className="p-2 hover:bg-secondary rounded-full transition-colors">
            <Globe className="w-5 h-5 text-foreground/80" />
          </button>

          {/* Login Button */}
          <button className="btn-epic-secondary text-sm">
            Se connecter
          </button>

          {/* Download Button */}
          <button className="btn-epic-primary text-sm">
            Télécharger
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;