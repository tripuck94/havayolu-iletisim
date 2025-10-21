// Basit telefon arama hook'u - Tracking kaldırıldı
export const usePhoneTracking = () => {
  const handlePhoneCall = (phoneNumber: string, source?: string) => {
    // Direkt telefon araması - tracking YOK
    window.location.href = `tel:${phoneNumber}`;
  };

  return { handlePhoneCall };
}; 