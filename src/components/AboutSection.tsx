import qrcodeAvaliacao from "@/assets/qrcode-avaliacao.png";
import r1 from "@/assets/reviews/r1.jpeg";
import r2 from "@/assets/reviews/r2.jpeg";
import r3 from "@/assets/reviews/r3.jpeg";
import r4 from "@/assets/reviews/r4.jpeg";
import r5 from "@/assets/reviews/r5.jpeg";
import r6 from "@/assets/reviews/r6.jpeg";
import r7 from "@/assets/reviews/r7.jpeg";
import r8 from "@/assets/reviews/r8.jpeg";
import r9 from "@/assets/reviews/r9.jpeg";
import r10 from "@/assets/reviews/r10.jpeg";

const reviews = [
  { image: r1, alt: "Avaliação de Dheimeson Alves Feitosa" },
  { image: r2, alt: "Avaliação de Ellen Moreno Pereira" },
  { image: r3, alt: "Avaliação de Marta Martyns" },
  { image: r4, alt: "Avaliação de Cleidiane Ribeiro Santos Baima" },
  { image: r5, alt: "Avaliação de Pedroso Sousa" },
  { image: r6, alt: "Avaliação de Julia Pedroso" },
  { image: r7, alt: "Avaliação de Willian Silva" },
  { image: r8, alt: "Avaliação de manu123" },
  { image: r9, alt: "Avaliação de Edmilson Junior" },
  { image: r10, alt: "Avaliação de Katiane Araujo" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <p className="font-display text-2xl md:text-3xl font-bold text-foreground">
            O que estão falando da gente no Google
          </p>
          <div className="divider-gold w-24 mx-auto mt-4" />
        </div>

        <div
          className="relative overflow-hidden w-full"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%)",
          }}
        >
          <div className="flex w-max gap-6 animate-marquee-rtl hover:[animation-play-state:paused]">
            {[...reviews, ...reviews].map((review, i) => (
              <a
                key={`${review.alt}-${i}`}
                href="https://g.page/r/CUo3qbWOfID8EAE/review"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 w-[280px] md:w-[340px] flex items-center justify-center p-3 rounded-sm bg-card border border-border/50 hover:border-primary/50 transition-colors duration-300 group"
              >
                <img
                  src={review.image}
                  alt={review.alt}
                  loading="lazy"
                  className="w-full h-auto rounded-sm object-contain group-hover:scale-[1.02] transition-transform duration-500"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
          <p className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2 text-center">
            Nos avalie também
          </p>
          <p className="text-2xl md:text-3xl mb-4 text-center">
            ⭐⭐⭐⭐⭐
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
