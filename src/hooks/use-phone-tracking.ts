import { gtmEvents } from "@/lib/gtm";

export const usePhoneTracking = () => {
  const handlePhoneCall = (phoneNumber: string, source: string) => {
    // GTM tracking gönder
    gtmEvents.trackPhoneClick(phoneNumber, source);
    
    // Telefon numarasını ara
    window.location.href = `tel:${phoneNumber}`;
  };

  return { handlePhoneCall };
}; 