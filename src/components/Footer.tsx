import logoCalzoni from "@/assets/logo-calzoni.png";

const Footer = () => {
  return (
    <footer className="py-10 bg-secondary border-t border-border/50">
      <div className="container mx-auto px-6 text-center">
        <img src={logoCalzoni} alt="Calzoni Pizzaria" className="h-16 mx-auto mb-3" />
        <p className="font-body text-xs text-muted-foreground tracking-wider">
          © {new Date().getFullYear()} Calzoni Pizzaria. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
