import { useState } from "react";
import { Menu, X } from "lucide-react";
import heroPizza from "@/assets/hero-pizza.jpg";
import { trackOrderClick } from "@/lib/analytics";
import { ANOTAAI_LINK } from "@/lib/constants";

const navItems = [
  { label: "01 Início", href: "#inicio" },
  { label: "02 Sobre", href: "#sobre" },
  { label: "03 Contato", href: "#contato" },
];

const HeroSection = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full overflow-hidden bg-background text-foreground flex items-center justify-center p-6 md:p-16"
    >
      {/* Background grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--primary)) 0.5px, transparent 0.5px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 max-w-7xl w-full min-h-screen grid grid-cols-12 grid-rows-6 gap-4">
        {/* Logo / brand mark */}
        <div className="col-span-6 row-span-1 flex items-start pt-6 md:pt-10">
          <div className="flex flex-col">
            <span className="text-primary font-bold text-2xl tracking-tighter font-display">
              CALZONI
            </span>
            <span className="text-[8px] tracking-[0.4em] opacity-40 uppercase font-body">
              Pizzaria Gourmet
            </span>
          </div>
        </div>

        {/* Desktop navigation — stacked, top right */}
        <nav className="hidden md:flex col-span-6 row-span-1 flex-col items-end gap-1 pt-10 text-[10px] tracking-[0.3em] font-medium text-foreground/60 font-body">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden col-span-6 row-span-1 justify-end items-start pt-6">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-foreground/60 hover:text-primary transition-colors duration-300"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-background/98 backdrop-blur-md flex flex-col items-center justify-center gap-8 animate-fade-in">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm tracking-[0.3em] font-medium text-foreground/60 hover:text-primary transition-colors duration-300 font-body uppercase"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-foreground/60 hover:text-primary transition-colors duration-300"
              aria-label="Fechar menu"
            >
              <X size={24} />
            </button>
          </div>
        )}

        {/* Main headline — left aligned */}
        <div className="col-span-12 md:col-span-9 row-start-2 row-span-3 flex flex-col justify-center">
          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-extrabold leading-[0.85] tracking-tighter uppercase">
            Pizza
            <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px hsl(var(--primary))" }}
            >
              Futura
            </span>
          </h1>
          <p className="mt-8 max-w-md text-sm md:text-base text-foreground/50 leading-relaxed font-light font-body">
            A fusão entre a tradição artesanal e a precisão tecnológica. Massa
            fermentada naturalmente e ingredientes selecionados.
          </p>
        </div>

        {/* Floating product image — right/center */}
        <div className="absolute right-[2%] md:right-[5%] top-[10%] sm:top-[14%] md:top-[18%] w-[35%] sm:w-[32%] md:w-[30%] pointer-events-none animate-float flex justify-center items-center">
          <div className="relative w-full">
            <img
              src={heroPizza}
              alt="Pizza artesanal Calzoni"
              className="w-full aspect-square object-cover rounded-full border-[6px] md:border-[10px] border-secondary/50 shadow-[0_50px_80px_rgba(0,0,0,0.8)]"
            />
            {/* Depth elements */}
            <div className="absolute -bottom-4 -left-4 md:-bottom-10 md:-left-10 w-12 h-12 md:w-24 md:h-24 border border-primary/20 rounded-full animate-pulse" />
            <div className="absolute top-0 -right-3 md:-right-4 w-8 h-8 md:w-12 md:h-12 bg-primary/10 blur-xl rounded-full" />
          </div>
        </div>

        {/* Minimal CTAs — bottom left */}
        <div className="col-span-12 md:col-span-6 row-start-5 md:row-start-6 flex flex-col items-start gap-4 self-end pb-6 md:pb-8 z-20">
          <a
            href={ANOTAAI_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackOrderClick("hero")}
            className="group flex items-center gap-3 md:gap-4 text-xs font-bold tracking-[0.2em] text-primary transition-all duration-300 font-body uppercase"
          >
            <span>Fazer Pedido</span>
            <div className="flex items-center">
              <div className="w-10 md:w-12 h-[1px] bg-primary transition-all duration-500 group-hover:w-16 md:group-hover:w-20" />
              <span className="-ml-2 transition-all duration-500 group-hover:-ml-1">
                →
              </span>
            </div>
          </a>
          <a
            href="#sobre"
            className="group flex items-center gap-3 md:gap-4 text-xs font-bold tracking-[0.2em] text-foreground/40 hover:text-foreground transition-all duration-300 font-body uppercase"
          >
            <span>Saiba Mais</span>
            <div className="flex items-center">
              <div className="w-6 md:w-8 h-[1px] bg-foreground/20 group-hover:bg-primary transition-all duration-500" />
              <span className="-ml-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                →
              </span>
            </div>
          </a>
        </div>

        {/* Loyalty campaign badge — bottom right */}
        <div className="col-span-12 md:col-span-6 row-start-6 hidden md:flex flex-col items-end self-end pb-8 text-right z-20">
          <div className="p-4 border border-primary/20 bg-secondary/50 backdrop-blur-md">
            <p className="text-[10px] text-primary font-bold tracking-widest font-body uppercase">
              Fidelidade
            </p>
            <p className="text-[9px] text-foreground/50 mt-1 uppercase font-body">
              Junte 10 cupons e ganhe uma pizza Grande
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
