import logoCalzoni from "@/assets/logo-calzoni.png";

const Footer = () => {
  return (
    <footer className="py-10 bg-secondary border-t border-border/50">
      <div className="container mx-auto px-6 text-center">
        <div className="inline-block w-20 mb-3 rounded-lg overflow-hidden">
          <img src={logoCalzoni} alt="Calzoni Pizzaria" className="w-full" />
        </div>
        <p className="font-body text-xs text-muted-foreground tracking-wider">
          © {new Date().getFullYear()} Calzoni Pizzaria. Todos os direitos reservados.
        </p>
        <p className="font-body text-xs text-muted-foreground tracking-wider mt-2">
          EMESILDO OLIVEIRA PEREIRA · CNPJ: <span className="font-display tracking-wide">48.175.063/0001-05</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
