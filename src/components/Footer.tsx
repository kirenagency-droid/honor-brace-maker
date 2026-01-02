import { ChevronUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#121212] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Top Section - Logo & Social */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <h2 className="font-fortnite text-2xl md:text-3xl tracking-wider">FORTNITE</h2>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/></svg>
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.217-.937 1.407-5.965 1.407-5.965s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/></svg>
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-10 border-t border-white/10 pt-10">
          <div>
            <h3 className="font-semibold text-white mb-4">Principal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Accueil</a></li>
              <li><a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Passe de combat</a></li>
              <li><a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Regarder</a></li>
              <li><a href="https://www.fortnite.com/download?lang=fr" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-sm transition-colors">Obtenir Fortnite</a></li>
              <li><a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Actus</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">En savoir plus</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white text-sm transition-colors">FAQ</a></li>
              <li><a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Compétitif</a></li>
              <li><a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Carte de V-bucks</a></li>
              <li><a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Annuler ou rembourser l'achat</a></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-semibold text-white mb-4">Assistance</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Aide</a></li>
              <li><a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Charte communautaire de Fortnite</a></li>
              <li><a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Instructions relatives aux partenaires</a></li>
              <li><a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Cosplay</a></li>
            </ul>
          </div>
        </div>

        {/* Platforms & PEGI */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-wrap items-center gap-3 text-white/50">
            <span className="text-xs">PC</span>
            <span className="text-xs">PlayStation</span>
            <span className="text-xs">PS5</span>
            <span className="text-xs">PS4</span>
            <span className="text-xs">Xbox</span>
            <span className="text-xs">Switch</span>
            <span className="text-xs">Mobile</span>
            <span className="text-xs">Android</span>
            <span className="text-xs">iOS</span>
            <span className="text-xs">GeForce NOW</span>
          </div>
          <div className="flex items-center gap-3 bg-[#1a1a1a] rounded-lg px-4 py-2 border border-white/10">
            <div className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xl">!</span>
            </div>
            <span className="text-white/70 text-sm">Accord parental recommandé</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-white/40 text-xs mb-4 leading-relaxed">
            © 2025, Epic Games, Inc. Epic, Epic Games, le logo Epic Games, Fortnite, le logo Fortnite, Unreal, Unreal Engine 4 et UE4 sont des marques ou des marques déposées d'Epic Games, Inc. aux États-Unis d'Amérique et ailleurs. Tous droits réservés.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex flex-wrap gap-4">
              <a href="#" className="text-white/50 hover:text-white text-xs transition-colors">Conditions d'utilisation</a>
              <a href="#" className="text-white/50 hover:text-white text-xs transition-colors">Politique de confidentialité</a>
              <a href="#" className="text-white/50 hover:text-white text-xs transition-colors">Sécurité</a>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 text-white/70 hover:text-white text-sm border border-white/20 hover:border-white/40 rounded-full px-4 py-2 transition-all"
            >
              Retour en haut de la page
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;