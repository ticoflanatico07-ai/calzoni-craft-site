import { MapPin, Clock, Phone, Instagram } from "lucide-react";

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
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <MapPin size={22} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Endereço</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  Rua das Flores, 737 — Cidade Nova<br />
                  Itaituba — PA
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Clock size={22} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Horário</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  Todos os dias<br />
                  18h às 00h
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Phone size={22} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Telefone / WhatsApp</h3>
                <a href="https://wa.me/5593991956965" target="_blank" rel="noopener noreferrer" className="font-body text-muted-foreground text-sm leading-relaxed hover:text-primary transition-colors">
                  (93) 9 9195-6965
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Instagram size={22} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Instagram</h3>
                <a href="https://instagram.com/calzonidelivery" target="_blank" rel="noopener noreferrer" className="font-body text-muted-foreground text-sm leading-relaxed hover:text-primary transition-colors">
                  @calzonidelivery
                </a>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="rounded-sm overflow-hidden border border-border/50 min-h-[360px]">
            <iframe
              title="Localização Calzoni Pizzaria"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d830.0!2d-56.0205069!3d-4.2686747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x925fdb970ed9521d%3A0xfc807c8eb5a9374a!2sCalzoni%20Pizzaria!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
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
