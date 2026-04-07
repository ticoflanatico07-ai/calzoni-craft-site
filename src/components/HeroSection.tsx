import heroPizza from "@/assets/hero-pizza.jpg";
import logoCalzoni from "@/assets/logo-calzoni.png";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroPizza}
          alt="Pizza artesanal Calzoni"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <div className="relative w-48 sm:w-56 md:w-64 mx-auto mb-8">
          {/* Steam effect */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[130%] h-32 pointer-events-none z-20 animate-steam-fade">
            <div className="absolute left-[15%] bottom-0 w-5 h-20 rounded-full bg-white/40 blur-md animate-steam-rise" style={{ animationDelay: '0s' }} />
            <div className="absolute left-[28%] bottom-0 w-6 h-24 rounded-full bg-white/35 blur-lg animate-steam-rise" style={{ animationDelay: '0.4s' }} />
            <div className="absolute left-[42%] bottom-0 w-5 h-22 rounded-full bg-white/40 blur-md animate-steam-rise" style={{ animationDelay: '0.2s' }} />
            <div className="absolute left-[55%] bottom-0 w-7 h-26 rounded-full bg-white/35 blur-lg animate-steam-rise" style={{ animationDelay: '0.6s' }} />
            <div className="absolute left-[68%] bottom-0 w-5 h-20 rounded-full bg-white/40 blur-md animate-steam-rise" style={{ animationDelay: '0.1s' }} />
            <div className="absolute left-[80%] bottom-0 w-6 h-22 rounded-full bg-white/35 blur-lg animate-steam-rise" style={{ animationDelay: '0.45s' }} />
            <div className="absolute left-[35%] bottom-0 w-4 h-18 rounded-full bg-white/30 blur-xl animate-steam-rise" style={{ animationDelay: '0.7s' }} />
            <div className="absolute left-[60%] bottom-0 w-4 h-18 rounded-full bg-white/30 blur-xl animate-steam-rise" style={{ animationDelay: '0.35s' }} />
          </div>
          <div className="animate-logo-3d rounded-2xl overflow-hidden border border-primary/20">
            <img
              src={logoCalzoni}
              alt="Calzoni Pizzaria"
              className="w-full"
            />
          </div>
        </div>
        <p
          className="font-body text-foreground/70 text-lg md:text-xl max-w-xl mx-auto mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          Sabores autênticos, massa artesanal e ingredientes selecionados.
          Uma experiência gastronômica única.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.8s", opacity: 0 }}
        >
          <a
            href="https://wa.me/5593992162374?text=Olá!+Gostaria+de+fazer+um+pedido"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-sm font-body text-sm font-semibold tracking-widest uppercase hover:bg-gold-light transition-colors"
          >
            Peça Agora
          </a>
          <a
            href="https://wa.me/5593992162374?text=Olá!+Gostaria+de+fazer+um+pedido"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary/40 text-primary px-8 py-4 rounded-sm font-body text-sm font-semibold tracking-widest uppercase hover:bg-primary/10 transition-colors"
          >
            Fale Conosco
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
