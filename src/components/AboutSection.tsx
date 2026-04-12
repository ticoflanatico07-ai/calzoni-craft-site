import reviewSunny from "@/assets/review-sunny.png";
import reviewRiellen from "@/assets/review-riellen.png";
import reviewEshiley from "@/assets/review-eshiley.png";
import qrcodeAvaliacao from "@/assets/qrcode-avaliacao.png";

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

        <div className="text-center mb-8">
          <p className="font-display text-2xl md:text-3xl font-bold text-foreground">
            O que estão falando da gente no Google
          </p>
          <div className="divider-gold w-24 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto items-stretch">
          {reviews.map((review, i) => (
            <div
              key={review.alt}
              className="flex items-center justify-center p-4 rounded-sm bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.15}s`, opacity: 0 }}
            >
              <img
                src={review.image}
                alt={review.alt}
                className="w-full h-auto rounded-sm object-contain"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
          <p className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Nos avalie também ⭐⭐⭐⭐⭐
          </p>
          <a
            href="https://g.page/r/CUo3qbWOfID8EAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 rounded-sm p-4 inline-block"
          >
            <img
              src={qrcodeAvaliacao}
              alt="QR Code para avaliação no Google"
              className="w-48 h-48 object-contain"
            />
          </a>
          <a
            href="https://g.page/r/CUo3qbWOfID8EAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 font-display text-xl md:text-2xl font-bold text-primary hover:text-primary/80 transition-colors duration-300 inline-flex items-center gap-1"
          >
            <span className="animate-[point-right_1s_ease-in-out_infinite]">👉</span>
            <span className="underline">Avalie já</span>
            <span className="animate-[point-left_1s_ease-in-out_infinite]">👈</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
