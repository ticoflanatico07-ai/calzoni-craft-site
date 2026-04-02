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
        <div
          className="w-48 sm:w-56 md:w-64 mx-auto mb-8 animate-fade-in rounded-2xl overflow-hidden shadow-2xl border border-primary/20"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          <img
            src={logoCalzoni}
            alt="Calzoni Pizzaria"
            className="w-full"
          />
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
