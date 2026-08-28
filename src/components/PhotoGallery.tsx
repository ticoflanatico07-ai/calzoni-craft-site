import p1 from "@/assets/pizza-new-1.jpeg";
import p2 from "@/assets/pizza-new-2.jpeg";
import p3 from "@/assets/pizza-new-3.jpeg";
import p4 from "@/assets/pizza-new-4.jpeg";
import p5 from "@/assets/pizza-new-5.jpeg";
import p6 from "@/assets/pizza1.jpeg";
import p7 from "@/assets/pizza2.jpeg";
import p8 from "@/assets/pizza3.jpeg";
import p9 from "@/assets/pizza4.jpeg";
import p10Asset from "@/assets/pizza-new-6.jpeg.asset.json";

const photos = [
  { src: p10Asset.url, alt: "Pizza meio quatro queijos meio presunto Calzoni" },
  { src: p1, alt: "Pizza meio calabresa meio chocolate Calzoni" },
  { src: p2, alt: "Pizza artesanal Calzoni saindo do forno" },
  { src: p3, alt: "Pizza margherita Calzoni" },
  { src: p4, alt: "Pizza portuguesa Calzoni" },
  { src: p5, alt: "Pizza calabresa meio queijo Calzoni" },
  { src: p6, alt: "Pizza Calzoni sabor especial" },
  { src: p7, alt: "Pizza Calzoni tradicional" },
  { src: p8, alt: "Pizza Calzoni recheada" },
  { src: p9, alt: "Pizza Calzoni doce" },
];

const PhotoGallery = () => {
  return (
    <section id="fotos" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <p className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Nossas Pizzas
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
            {[...photos, ...photos].map((photo, i) => (
              <div
                key={`${photo.alt}-${i}`}
                className="shrink-0 w-[260px] md:w-[320px] aspect-square rounded-sm overflow-hidden border border-border/50 hover:border-primary/50 transition-colors duration-300 group"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;