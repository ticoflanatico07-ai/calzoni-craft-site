const StickyOrderButton = () => {
  return (
    <a
      href="https://wa.me/5593992162374?text=Olá!+Gostaria+de+fazer+um+pedido"
      target="_blank"
      rel="noopener noreferrer"
      className="md:hidden fixed bottom-6 left-6 right-24 z-40 bg-primary text-primary-foreground px-6 py-4 rounded-sm font-body text-sm font-semibold tracking-widest uppercase text-center shadow-lg hover:bg-gold-light transition-colors"
    >
      Peça Agora
    </a>
  );
};

export default StickyOrderButton;
