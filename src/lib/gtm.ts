// Google Tag Manager tracking utility
declare global {
  interface Window {
    dataLayer: any[];
  }
}

export const gtmEvents = {
  // Telefon numarası tıklama dönüşümü
  trackPhoneClick: (phoneNumber: string, source?: string) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      // Google Ads Dönüşümü için
      window.dataLayer.push({
        event: 'phone_call_conversion',
        conversion_type: 'phone_call',
        phone_number: phoneNumber,
        event_source: source || 'unknown',
        value: 50, // AdWords için değer (TL)
        currency: 'TRY'
      });
      
      // Google Analytics 4 için
      window.dataLayer.push({
        event: 'phone_call',
        event_category: 'engagement',
        event_label: phoneNumber,
        phone_number: phoneNumber,
        page_location: source || 'unknown',
        value: 50,
        currency: 'TRY'
      });
      
      // Debug için console log (production'da kaldırılabilir)
      console.log('GTM Phone Click Events:', {
        ads_event: 'phone_call_conversion',
        ga4_event: 'phone_call',
        phone_number: phoneNumber,
        source: source
      });
    }
  },

  // Genel conversion tracking
  trackConversion: (conversionType: string, value?: number, source?: string) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'conversion',
        conversion_type: conversionType,
        value: value || 1,
        currency: 'TRY',
        event_source: source || 'unknown'
      });
    }
  }
}; 