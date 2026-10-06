import { useState } from "react";
import { Sparkles, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { ANOTAAI_LINK } from "@/lib/constants";
import { trackOrderClick } from "@/lib/analytics";

const OPCOES = [
  "Vegetariano", "Sem lactose", "Sem carne de porco", "Sem frutos do mar",
  "Amo queijo", "Gosto de frango", "Doce", "Algo diferente",
];

type Rec = { sabor: string; formato: string; motivo: string; ingredientes: string };

const PizzaRecommender = () => {
  const [sel, setSel] = useState<string[]>([]);
  const [texto, setTexto] = useState("");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");
  const [msg, setMsg] = useState("");
  const [recs, setRecs] = useState<Rec[]>([]);

  const toggle = (o: string) => setSel((s) => (s.includes(o) ? s.filter((x) => x !== o) : [...s, o]));

  const recomendar = async () => {
    if (!sel.length && !texto.trim()) { setErro("Marque uma opção ou escreva o que você gosta."); return; }
    setLoading(true); setErro(""); setRecs([]); setMsg("");
    const { data, error } = await supabase.functions.invoke("recomendar-pizza", {
      body: { preferencias: sel, texto },
    });
    setLoading(false);
    if (error || data?.error) {
      let m = data?.error;
      try { m = m || (await (error as any)?.context?.json())?.error; } catch { /* ignore */ }
      setErro(m || "Não foi possível recomendar agora. Tente novamente.");
      return;
    }
    setMsg(data.mensagem || "");
    setRecs(data.recomendacoes || []);
  };

  return (
    <section id="recomendacao" className="py-20 px-6 bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-body text-primary text-sm tracking-widest uppercase mb-3">Feito para você</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Descubra sua pizza ideal</h2>
        <p className="font-body text-foreground/70 mb-8">
          Conte seus gostos e restrições e nossa inteligência artificial sugere as melhores pizzas e calzones do nosso cardápio.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {OPCOES.map((o) => (
            <button
              key={o}
              type="button"
              onClick={() => toggle(o)}
              aria-pressed={sel.includes(o)}
              className={`px-4 py-2 rounded-full border font-body text-sm transition-colors ${
                sel.includes(o)
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-primary/30 text-foreground/80 hover:border-primary"
              }`}
            >
              {o}
            </button>
          ))}
        </div>

        <textarea
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          maxLength={600}
          rows={3}
          placeholder="Ex: adoro catupiry, não gosto de cebola e sou alérgico a camarão..."
          className="w-full rounded-md bg-card border border-primary/20 p-4 font-body text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary mb-6"
        />

        <button
          onClick={recomendar}
          disabled={loading}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-sm font-body text-sm font-semibold tracking-widest uppercase hover:bg-gold-light transition-colors disabled:opacity-60"
        >
          {loading ? <Loader2 className="animate-spin" size={18} /> : <Sparkles size={18} />}
          {loading ? "Pensando..." : "Recomendar"}
        </button>

        {erro && <p className="mt-6 font-body text-destructive">{erro}</p>}
        {msg && <p className="mt-8 font-body text-foreground/80">{msg}</p>}

        {recs.length > 0 && (
          <div className="mt-6 grid gap-4 md:grid-cols-3 text-left">
            {recs.map((r) => (
              <div key={r.sabor + r.formato} className="rounded-lg border border-primary/20 bg-card p-5">
                <span className="font-body text-xs tracking-widest uppercase text-primary">{r.formato}</span>
                <h3 className="font-display text-xl font-bold text-foreground mt-1 mb-2">{r.sabor}</h3>
                <p className="font-body text-xs text-foreground/50 mb-3">{r.ingredientes}</p>
                <p className="font-body text-sm text-foreground/80">{r.motivo}</p>
              </div>
            ))}
          </div>
        )}
        {recs.length > 0 && (
          <a
            href={ANOTAAI_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackOrderClick("recomendacao")}
            className="inline-block mt-8 bg-primary text-primary-foreground px-8 py-4 rounded-sm font-body text-sm font-semibold tracking-widest uppercase hover:bg-gold-light transition-colors"
          >
            Peça Agora
          </a>
        )}
      </div>
    </section>
  );
};

export default PizzaRecommender;
