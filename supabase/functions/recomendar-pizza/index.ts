import { createOpenAI } from "npm:@ai-sdk/openai@^3";
import { streamText } from "npm:ai@^6";
import { createLovableAiGatewayRunIdFetch, getLovableAiGatewayRunId } from "../_shared/run-id.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-lovable-aig-run-id",
};

const MENU = [
  ["Calabresa Especial", "molho de tomate, muçarela, calabresa fatiada, parmesão, provolone e catupiry"],
  ["Calabresa com Catupiry", "molho de tomate, muçarela, calabresa fatiada e catupiry"],
  ["Cinco Queijos", "molho de tomate, muçarela, parmesão, provolone, catupiry e gorgonzola"],
  ["Atum", "molho de tomate, muçarela, atum sólido e catupiry"],
  ["Bacon", "molho de tomate, muçarela, tomate, catupiry e bacon"],
  ["Banana com Chocolate Branco (doce)", "muçarela, banana e chocolate branco"],
  ["Camarão", "molho de tomate, muçarela, camarão e catupiry"],
  ["Brigadeiro (doce)", "leite condensado, muçarela, chocolate ao leite e chocolate granulado"],
  ["Banana com Canela e Doce de Leite (doce)", "muçarela, banana, canela em pó e doce de leite"],
  ["Filé Mignon", "molho de tomate, filé mignon e muçarela"],
  ["Frango com Milho e Catupiry", "molho de tomate, muçarela, frango, milho e catupiry"],
  ["Lombo com Abacaxi", "molho de tomate, muçarela, lombo canadense, abacaxi e bacon"],
  ["Marguerita", "molho de tomate, muçarela, tomate e parmesão"],
  ["Mista (Presunto)", "molho de tomate, muçarela e presunto"],
  ["Moda da Casa", "molho de tomate, muçarela, presunto, calabresa e bacon"],
  ["Salame", "molho de tomate, salame e muçarela"],
  ["Palmito", "molho de tomate, muçarela, palmito e catupiry"],
  ["Peito de Peru", "molho de tomate, muçarela, peito de peru e catupiry"],
  ["Pepperoni", "molho de tomate, muçarela e pepperoni"],
  ["Portuguesa", "molho de tomate, muçarela, presunto, ovo e cebola"],
  ["Strogonoff de Filé", "molho de tomate, strogonoff de filé e muçarela"],
];

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  try {
    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) return json({ error: "Serviço indisponível no momento." }, 500);

    const { preferencias = [], texto = "" } = await req.json().catch(() => ({}));
    const prefs = (Array.isArray(preferencias) ? preferencias : []).slice(0, 20).map(String).join(", ");
    const livre = String(texto).slice(0, 600);
    if (!prefs && !livre.trim()) return json({ error: "Conte um pouco sobre seus gostos." }, 400);

    const runId = createLovableAiGatewayRunIdFetch(getLovableAiGatewayRunId(req));
    const provider = createOpenAI({
      baseURL: "https://ai.gateway.lovable.dev/v1",
      apiKey,
      headers: { "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
      fetch: runId.fetch,
    });

    const menuText = MENU.map(([n, i]) => `- ${n}: ${i}`).join("\n");
    const result = streamText({
      model: provider.responses("openai/gpt-6-astra"),
      system:
        `Você é o atendente da Calzoni Pizzaria (Itaituba/PA). Recomende sabores APENAS deste cardápio. Todo sabor pode ser pedido como pizza ou calzone.\n${menuText}\n\n` +
        `Regras: respeite rigorosamente restrições alimentares (ex.: sem lactose exclui qualquer sabor com queijo/muçarela/catupiry/leite; vegetariano exclui carnes, frango, peixe, frutos do mar, embutidos e bacon). Se nenhum sabor atender, diga isso com gentileza e sugira falar com a pizzaria. Nunca mencione preços. ` +
        `Responda somente JSON no formato {"mensagem": string curta, "recomendacoes": [{"sabor": string, "formato": "Pizza" ou "Calzone", "motivo": string curta}]} com no máximo 3 recomendações, em português.`,
      prompt: `Preferências marcadas: ${prefs || "nenhuma"}\nO cliente escreveu: ${livre || "nada"}`,
      abortSignal: req.signal,
      providerOptions: {
        openai: {
          store: false,
          forceReasoning: true,
          reasoningEffort: "low",
          reasoningSummary: "auto",
          include: ["reasoning.encrypted_content"],
        },
      },
    });

    let text: string;
    try {
      text = await result.text;
    } catch (e) {
      const status = (e as { statusCode?: number })?.statusCode ?? 500;
      const msg =
        status === 429 ? "Muitos pedidos agora, tente novamente em instantes."
        : status === 402 ? "Recomendações temporariamente indisponíveis."
        : "Não foi possível gerar recomendações agora.";
      console.error("AI error", status, e);
      return json({ error: msg }, status);
    }

    const match = text.match(/\{[\s\S]*\}/);
    let data: { mensagem?: string; recomendacoes?: unknown[] } = {};
    try { data = JSON.parse(match?.[0] ?? "{}"); } catch { /* fallthrough */ }
    const names = new Set(MENU.map(([n]) => n));
    const recs = (Array.isArray(data.recomendacoes) ? data.recomendacoes : [])
      .filter((r: any) => r && names.has(r.sabor))
      .slice(0, 3)
      .map((r: any) => ({
        sabor: r.sabor,
        formato: r.formato === "Calzone" ? "Calzone" : "Pizza",
        motivo: String(r.motivo ?? ""),
        ingredientes: MENU.find(([n]) => n === r.sabor)![1],
      }));
    return json({ mensagem: String(data.mensagem ?? ""), recomendacoes: recs });
  } catch (e) {
    console.error(e);
    return json({ error: "Erro inesperado." }, 500);
  }
});
