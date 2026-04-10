import reviewSunny from "@/assets/review-sunny.png";
import reviewRiellen from "@/assets/review-riellen.png";
import reviewEshiley from "@/assets/review-eshiley.png";

const reviews = [
  { image: reviewSunny, alt: "Avaliação de Sunny Melo" },
  { image: reviewRiellen, alt: "Avaliação de Riellen Mota" },
  { image: reviewEshiley, alt: "Avaliação de Eshiley Fialho" },
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
          <div className="font-body text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed space-y-4">
            <p>
              A Calzoni nasceu de um sonho que começou em 2019, idealizado por três irmãos apaixonados por pizza e pelo desejo de empreender. Após anos de planejamento e dedicação, esse sonho finalmente saiu do papel, dando origem a uma pizzaria criada com carinho e propósito.
            </p>
            <p>
              Desde o início, nosso objetivo sempre foi oferecer aos nossos clientes a melhor pizza da cidade, unindo sabor, qualidade e uma experiência única a cada pedido. Trabalhamos com ingredientes selecionados e de alta qualidade, garantindo que cada pizza seja preparada com excelência.
            </p>
            <p>
              Mais do que servir pizzas, queremos construir momentos especiais. E esse é apenas o começo: em breve, pretendemos ampliar nosso espaço para oferecer ainda mais conforto e acolhimento aos nossos clientes, que para nós já são amigos.
            </p>
          </div>
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
