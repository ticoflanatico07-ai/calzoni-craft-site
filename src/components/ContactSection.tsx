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
                <a href="https://wa.me/5593999195696" target="_blank" rel="noopener noreferrer" className="font-body text-muted-foreground text-sm leading-relaxed hover:text-primary transition-colors">
                  (93) 9 9919-5696
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

          {/* Map placeholder */}
          <div className="rounded-sm overflow-hidden border border-border/50 bg-card flex items-center justify-center min-h-[360px]">
            <div className="text-center p-8">
              <MapPin size={48} className="text-primary/40 mx-auto mb-4" strokeWidth={1} />
              <p className="font-body text-muted-foreground text-sm">
                Adicione o Google Maps aqui<br />
                com a localização da pizzaria
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
