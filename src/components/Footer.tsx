const Footer = () => {
  return (
    <footer className="py-10 bg-secondary border-t border-border/50">
      <div className="container mx-auto px-6 text-center">
        <p className="font-display text-xl font-bold text-gradient-gold mb-2">Calzoni Pizzaria</p>
        <p className="font-body text-xs text-muted-foreground tracking-wider">
          © {new Date().getFullYear()} Calzoni Pizzaria. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
