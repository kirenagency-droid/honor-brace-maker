import { Search, Globe, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4 h-14 md:h-16 flex items-center justify-between">
        {/* Left section - Logos and Nav */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Epic Games Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-7 h-7 md:w-8 md:h-8 bg-foreground rounded flex items-center justify-center">
              <span className="text-background text-[10px] md:text-xs font-bold">EPIC</span>
            </div>
            <ChevronDown className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground hidden sm:block" />
          </div>

          {/* Fortnite Logo */}
          <div className="font-fortnite text-lg md:text-2xl tracking-wider">
            FORTNITE
          </div>

          {/* Navigation - Desktop */}
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
        <div className="flex items-center gap-2 md:gap-4">
          {/* Search Bar - Desktop only */}
          <div className="hidden md:flex items-center relative">
            <Search className="absolute left-3 w-4 h-4 text-muted-foreground" />
            <input type="text" placeholder="Recherche" className="search-input pl-10 w-64" />
          </div>

          {/* Globe Icon - Hidden on very small screens */}
          <button className="hidden sm:flex p-2 hover:bg-secondary rounded-full transition-colors">
            <Globe className="w-5 h-5 text-foreground/80" />
          </button>

          {/* Login Button - Smaller on mobile */}
          

          {/* Download Button - Hidden on mobile */}
          <button className="hidden sm:block btn-epic-primary text-sm">
            Télécharger
          </button>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 hover:bg-secondary rounded-full transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-5 h-5 text-foreground" /> : <Menu className="w-5 h-5 text-foreground" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && <div className="lg:hidden bg-background border-t border-border/50 py-4 px-4">
          <nav className="flex flex-col gap-3">
            <a href="#" className="nav-link py-2">Découvrir</a>
            <a href="#" className="nav-link py-2">Ma bibliothèque</a>
            <a href="#" className="nav-link py-2">Communautés</a>
            <a href="#" className="nav-link py-2">En savoir plus</a>
          </nav>
          <div className="mt-4 flex items-center relative">
            <Search className="absolute left-3 w-4 h-4 text-muted-foreground" />
            <input type="text" placeholder="Recherche" className="search-input pl-10 w-full" />
          </div>
        </div>}
    </header>;
};
export default Header;