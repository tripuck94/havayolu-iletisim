// Google Tag Manager - Basic Page Tracking Only
// NOT: Telefon tracking kaldırıldı (Google Ads policy compliance için)
declare global {
  interface Window {
    dataLayer: any[];
  }
}

export const gtmEvents = {
  // Sadece sayfa görüntüleme tracking'i
  trackPageView: (pageName: string) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_name: pageName
      });
    }
  }
}; 