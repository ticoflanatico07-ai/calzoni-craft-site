import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoCalzoni from "@/assets/logo-calzoni.png";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-gold/20 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <a href="#inicio" className="flex items-center">
          <img src={logoCalzoni} alt="Calzoni Pizzaria" className="h-12 rounded-md" />
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-body text-sm font-medium tracking-widest uppercase text-foreground/70 hover:text-primary transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/5593992162374?text=Olá!+Gostaria+de+fazer+um+pedido"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-sm font-body text-sm font-semibold tracking-wider uppercase hover:bg-gold-light transition-colors"
        >
          Peça Agora
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden text-foreground"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-gold/10 animate-fade-in">
          <ul className="flex flex-col items-center gap-6 py-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="font-body text-sm font-medium tracking-widest uppercase text-foreground/70 hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/5593992162374?text=Olá!+Gostaria+de+fazer+um+pedido"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-sm font-body text-sm font-semibold tracking-wider uppercase"
              >
                Peça Agora
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
