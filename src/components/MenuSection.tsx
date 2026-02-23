import { useState } from "react";

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
      { name: "Margherita", description: "Molho de tomate, mussarela de búfala, manjericão fresco e azeite extra virgem", price: "R$ 45,00" },
      { name: "Calabresa", description: "Calabresa artesanal, cebola roxa caramelizada, azeitonas pretas e orégano", price: "R$ 42,00" },
      { name: "Portuguesa", description: "Presunto, ovos, cebola, azeitonas, ervilha e mussarela", price: "R$ 48,00" },
      { name: "Quatro Queijos", description: "Mussarela, gorgonzola, provolone e parmesão gratinado", price: "R$ 52,00" },
      { name: "Pepperoni", description: "Pepperoni importado, mussarela e molho de tomate San Marzano", price: "R$ 50,00" },
    ],
  },
  {
    id: "especiais",
    label: "Especiais",
    items: [
      { name: "Parma com Rúcula", description: "Presunto de Parma, rúcula selvagem, lascas de parmesão e redução de balsâmico", price: "R$ 62,00" },
      { name: "Funghi", description: "Mix de cogumelos frescos, trufas negras, mussarela e azeite trufado", price: "R$ 68,00" },
      { name: "Salmão Premium", description: "Salmão defumado, cream cheese, alcaparras, dill e limão siciliano", price: "R$ 72,00" },
      { name: "Calzoni Especial", description: "Nosso calzone assinatura: recheio de mussarela, ricota, presunto e molho especial", price: "R$ 58,00" },
    ],
  },
  {
    id: "doces",
    label: "Doces",
    items: [
      { name: "Nutella com Morango", description: "Creme de avelã, morangos frescos fatiados e açúcar de confeiteiro", price: "R$ 48,00" },
      { name: "Romeu e Julieta", description: "Goiabada cremosa e queijo minas derretido", price: "R$ 42,00" },
      { name: "Banana Caramelizada", description: "Banana, doce de leite, canela e sorvete de creme", price: "R$ 46,00" },
    ],
  },
];

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("tradicionais");
  const currentCategory = menuData.find((c) => c.id === activeCategory)!;

  return (
    <section id="cardapio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-4">
            Nossos Sabores
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Cardápio
          </h2>
          <div className="divider-gold w-24 mx-auto" />
        </div>

        {/* Category tabs */}
        <div className="flex justify-center gap-2 mb-16">
          {menuData.map((cat) => (
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
                <div className="flex-1 border-b border-dotted border-muted-foreground/30 min-w-[40px] translate-y-[-4px]" />
                <span className="font-display text-xl font-semibold text-primary whitespace-nowrap">
                  {item.price}
                </span>
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
