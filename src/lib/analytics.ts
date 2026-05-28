declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

export const trackOrderClick = (location: string) => {
  // Google Analytics 4 - evento personalizado
  if (window.gtag) {
    window.gtag("event", "click_peça_agora", {
      event_category: "conversion",
      event_label: location,
      value: 1,
    });
  }

  // Meta Pixel - evento personalizado
  if (window.fbq) {
    window.fbq("trackCustom", "ClickPeçaAgora", {
      location,
      content_name: "Peça Agora",
    });
  }
};
