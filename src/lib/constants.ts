export const WHATSAPP_NUMBER = "5593992079482";
export const PHONE_DISPLAY = "(93) 99207-9482";


/** Cardápio digital (Anota Aí) usado nos botões "Peça Agora" */
export const ANOTAAI_LINK = "https://pedido.anota.ai/loja/anotaai-calzoni-pizzaria?f=msa";

export type WhatsAppSource =
  | "hero"
  | "navbar_desktop"
  | "navbar_mobile_scrolled"
  | "navbar_mobile_menu"
  | "contact_section"
  | "floating_button";

/**
 * Gera um link do WhatsApp com mensagem pré-preenchida limpa.
 * O rastreamento da origem é feito via eventos de analytics (GA4 / Meta Pixel),
 * não pelo texto da mensagem.
 */
export const getWhatsAppLink = (_source?: WhatsAppSource): string => {
  const params = new URLSearchParams({
    text: "Olá! Gostaria de fazer um pedido.",
  });
  return `https://wa.me/${WHATSAPP_NUMBER}?${params.toString()}`;
};

// Fallback genérico (mantido para compatibilidade)
export const WHATSAPP_LINK = getWhatsAppLink("floating_button");
