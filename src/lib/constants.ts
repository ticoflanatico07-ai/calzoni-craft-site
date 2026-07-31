export const WHATSAPP_NUMBER = "5593992162374";
export const PHONE_DISPLAY = "(93) 99216-2374";
export const ANOTAAI_LINK =
  "https://wa.me/5593992162374?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido.";

export type WhatsAppSource =
  | "hero"
  | "navbar_desktop"
  | "navbar_mobile_scrolled"
  | "navbar_mobile_menu"
  | "contact_section"
  | "floating_button";

/**
 * Gera um link do WhatsApp com a origem embutida na mensagem pré-preenchida.
 */
export const getWhatsAppLink = (source: WhatsAppSource): string => {
  const baseText = `Olá! Gostaria de fazer um pedido. [origem: ${source}]`;
  const params = new URLSearchParams({
    text: baseText,
  });
  return `https://wa.me/${WHATSAPP_NUMBER}?${params.toString()}`;
};

// Fallback genérico (mantido para compatibilidade)
export const WHATSAPP_LINK = getWhatsAppLink("floating_button");
