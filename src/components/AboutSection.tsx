import { Flame, Wheat, Heart } from "lucide-react";

const features = [
  {
    icon: Flame,
    title: "Forno Industrial Esteira a Gás",
    description: "Nossas pizzas são assadas em forno industrial esteira a gás, garantindo assamento uniforme, crocância perfeita e agilidade na entrega.",
  },
  {
    icon: Wheat,
    title: "Massa Artesanal",
    description: "Preparamos nossa massa artesanal com fermentação curta, resultando em uma textura leve, macia e saborosa.",
  },
  {
    icon: Heart,
    title: "Ingredientes Selecionados",
    description: "Selecionamos os melhores ingredientes para garantir qualidade e sabor em cada fatia.",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-4">
            Nossa História
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sobre a Calzoni
          </h2>
          <div className="divider-gold w-24 mx-auto mb-8" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Nascida da paixão pela autêntica pizza italiana, a Calzoni Pizzaria traz para sua mesa
            o melhor da tradição napolitana com um toque contemporâneo. Cada pizza é uma obra de arte
            preparada com dedicação e ingredientes cuidadosamente selecionados.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="text-center p-8 rounded-sm bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 group animate-fade-in-up"
              style={{ animationDelay: `${i * 0.15}s`, opacity: 0 }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
