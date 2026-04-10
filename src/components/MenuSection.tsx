import { useState, useEffect } from "react";
import pizza1 from "@/assets/pizza1.jpeg";
import pizza2 from "@/assets/pizza2.jpeg";
import pizza3 from "@/assets/pizza3.jpeg";
import pizza4 from "@/assets/pizza4.jpeg";

const pizzaImages = [pizza1, pizza2, pizza3, pizza4];

type MenuItem = {
  name: string;
  description: string;
  price: string;
};

type Category = {
  id: string;
  label: string;
  items: MenuItem[];
};

const menuData: Category[] = [
  {
    id: "tradicionais",
    label: "Tradicionais",
    items: [
      { name: "Calabresa", description: "Molho de tomate, mussarela, calabresa fatiada e cebola", price: "" },
      { name: "Strogonoff", description: "Molho de tomate, strogonoff de filé e mussarela", price: "" },
      { name: "Portuguesa", description: "Molho de tomate, mussarela, presunto, ovo e cebola", price: "" },
      { name: "Frango com Catupiry", description: "Molho de tomate, mussarela, frango, milho e catupiry", price: "" },
      { name: "Bacon com Catupiry", description: "Molho de tomate, mussarela, tomate, catupiry e bacon", price: "" },
      { name: "4 Queijos", description: "Molho de tomate, mussarela, queijo parmesão, queijo provolone e catupiry", price: "" },
      { name: "Palmito com Catupiry", description: "Molho de tomate, mussarela, palmito e catupiry", price: "" },
      { name: "Mussarela", description: "Molho de tomate, mussarela", price: "" },
      { name: "Mista", description: "Molho de tomate, mussarela e presunto", price: "" },
      { name: "Toscana", description: "Molho de tomate, mussarela, presunto, calabresa e bacon", price: "" },
    ],
  },
  {
    id: "especiais",
    label: "Especiais",
    items: [
      { name: "Carne Seca com Catupiry", description: "Molho de tomate, mussarela, carne seca, pimentão, tomate, cebola e catupiry", price: "" },
      { name: "Picanha ao Molho Barbecue", description: "Molho de tomate, mussarela, picanha assada, cebola e molho barbecue", price: "" },
      { name: "Camarão com Catupiry", description: "Molho de tomate, mussarela, catupiry e camarão", price: "" },
      { name: "Peito de Peru", description: "Molho de tomate, mussarela, peito de peru e catupiry", price: "" },
      { name: "Havaiana", description: "Molho de tomate, mussarela, lombo canadense, abacaxi e bacon", price: "" },
      { name: "Fricassê de Frango", description: "Molho de tomate, fricassê de frango, mussarela e batata palha", price: "" },
      { name: "Filé Mignon", description: "Molho de tomate, filé mignon, mussarela", price: "" },
      { name: "Marguerita", description: "Molho de tomate, mussarela, tomate, queijo parmesão e manjericão", price: "" },
      { name: "Atum", description: "Molho de tomate, mussarela, atum sólido e cebola", price: "" },
      { name: "Rúcula com Tomate Seco", description: "Molho de tomate, mussarela, rúcula e tomate seco", price: "" },
    ],
  },
  {
    id: "doces",
    label: "Doces",
    items: [
      { name: "Banana", description: "Mussarela, banana, canela em pó e doce de leite", price: "" },
      { name: "Brigadeiro", description: "Leite condensado, mussarela, chocolate ao leite e chocolate granulado", price: "" },
      { name: "Romeu & Julieta", description: "Leite condensado, mussarela, goiabada e queijo coalho", price: "" },
      { name: "Beijinho", description: "Leite condensado, mussarela, chocolate branco e coco ralado", price: "" },
    ],
  },
  {
    id: "bordas",
    label: "Bordas",
    items: [
      { name: "Borda de Catupiry", description: "Borda recheada com catupiry cremoso", price: "" },
      { name: "Borda de Cheddar", description: "Borda recheada com cheddar derretido", price: "" },
      { name: "Borda de Mussarela", description: "Borda recheada com mussarela gratinada", price: "" },
      { name: "Borda de Chocolate", description: "Borda recheada com chocolate ao leite", price: "" },
    ],
  },
];

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("tradicionais");
  const [currentImage, setCurrentImage] = useState(0);
  const currentCategory = menuData.find((c) => c.id === activeCategory)!;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % pizzaImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="cardapio" className="pt-8 pb-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Image Carousel */}
        <div id="fotos" className="relative w-full max-w-3xl mx-auto h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden mb-12 scroll-mt-20">
          {pizzaImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Pizza ${i + 1}`}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
              style={{ opacity: currentImage === i ? 1 : 0 }}
            />
          ))}
        </div>
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-4">
            Nossos Sabores
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Cardápio
          </h2>
          <div className="divider-gold w-24 mx-auto mb-8" />

          {/* Pizza sizes */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              { size: "35cm", label: "Pizza G" },
              { size: "30cm", label: "Pizza M" },
              { size: "25cm", label: "Pizza P" },
              { size: "18cm", label: "Mini Pizza" },
            ].map((item) => (
              <div
                key={item.size}
                className="flex flex-col items-center gap-1 px-5 py-3 rounded-sm bg-secondary border border-border/50"
              >
                <span className="font-display text-lg font-bold text-primary">{item.size}</span>
                <span className="font-body text-xs tracking-wider uppercase text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex flex-col items-center gap-2 mb-16">
          <div className="flex justify-center gap-2">
            {menuData.filter((cat) => cat.id !== "bordas").map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 rounded-sm font-body text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          {menuData.filter((cat) => cat.id === "bordas").map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-sm font-body text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu items */}
        <div className="max-w-3xl mx-auto space-y-0">
          {currentCategory.items.map((item, i) => (
            <div
              key={item.name}
              className="group py-6 border-b border-border/50 last:border-b-0 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
            >
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                {item.price && (
                  <>
                    <div className="flex-1 border-b border-dotted border-muted-foreground/30 min-w-[40px] translate-y-[-4px]" />
                    <span className="font-display text-xl font-semibold text-primary whitespace-nowrap">
                      {item.price}
                    </span>
                  </>
                )}
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
