import { MapPin, Clock, Phone, Facebook } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-4">
            Visite-nos
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contato
          </h2>
          <div className="divider-gold w-24 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Info */}
          <div className="space-y-6">
            <a
              href="https://www.google.com/maps/dir//Calzoni+Pizzaria+-4.2686747,-56.0205069"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-4 rounded-xl bg-card/40 border border-border/30 hover:border-primary/40 hover:bg-card/70 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <MapPin size={22} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">📍 Endereço</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  Rua das Flores, 737 — Cidade Nova<br />
                  Itaituba — PA
                </p>
              </div>
            </a>

            <div className="group flex items-start gap-4 p-4 rounded-xl bg-card/40 border border-border/30 hover:border-primary/40 hover:bg-card/70 transition-all duration-300 hover:-translate-y-1">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <Clock size={22} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">🕐 Horário</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  <span className="text-primary font-medium">19h às 23h</span><br />
                  <span className="text-red-400 font-medium">❌ Fechado às terças-feiras</span>
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/5593992162374?text=Olá!+Gostaria+de+fazer+um+pedido"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-4 rounded-xl bg-card/40 border border-border/30 hover:border-green-500/40 hover:bg-card/70 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:scale-110 group-hover:bg-green-500/20 transition-all duration-300">
                <Phone size={22} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">💬 WhatsApp</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed group-hover:text-green-400 transition-colors">
                  (93) 9 9216-2374
                </p>
              </div>
            </a>

            <a
              href="https://www.facebook.com/share/18dfy1H3J9/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-4 rounded-xl bg-card/40 border border-border/30 hover:border-blue-500/40 hover:bg-card/70 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                <Facebook size={22} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">📘 Facebook</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed group-hover:text-blue-400 transition-colors">
                  Calzoni Pizzaria
                </p>
              </div>
            </a>
          </div>

          {/* Google Maps */}
          <div className="rounded-sm overflow-hidden border border-border/50 min-h-[360px]">
            <iframe
              title="Localização Calzoni Pizzaria"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d830.0!2d-56.0205069!3d-4.2686747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x925fdb970ed9521d%3A0xfc807c8eb5a9374a!2sCalzoni%20Pizzaria!5e1!3m2!1spt-BR!2sbr!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "360px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
