import logoCalzoni from "@/assets/logo-calzoni.png";

const Footer = () => {
  return (
    <footer className="py-10 bg-secondary border-t border-border/50">
      <div className="container mx-auto px-6 text-center">
        <div className="inline-block w-24 mb-3">
          <img src={logoCalzoni} alt="Calzoni Pizzaria" className="w-full drop-shadow-lg" />
        </div>
        <p className="font-body text-xs text-muted-foreground tracking-wider">
          © {new Date().getFullYear()} Calzoni Pizzaria. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
