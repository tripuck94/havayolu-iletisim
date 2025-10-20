import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FlightSearchWidget } from "@/components/FlightSearchWidget";
import { useEffect } from "react";

export const Banner = () => {
  const handleCall = () => {
    window.location.href = "tel:08503089840";
  };

  // Preload critical LCP image
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = 'https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,q_auto,w_1920,h_600,c_fill/unsplash-1436491865332-7a61a109cc05.webp';
    link.fetchPriority = 'high';
    document.head.appendChild(link);

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  return (
    <div className="relative h-[800px] md:h-[600px] w-full overflow-hidden">
      {/* Critical LCP image with optimizations */}
      <img
        src="https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,q_auto,w_1920,h_600,c_fill/unsplash-1436491865332-7a61a109cc05.webp"
        alt="Uçak Bileti Rezervasyonu"
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
        loading="eager"
        decoding="sync"
      />
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative flex h-full flex-col items-center justify-center px-4 text-center pt-8">
        <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl drop-shadow-2xl">
          Uçak Bileti Karşılaştırma
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-white/90 drop-shadow-lg">
          THY, Pegasus, SunExpress ve AJet uçuşlarını karşılaştırın, en uygun seçeneği bulun, danışmanlık desteğimizle rezervasyon yapın.
        </p>
        
        <div className="relative w-full max-w-6xl overflow-hidden rounded-[2rem] bg-white/95 p-6 shadow-[0_32px_70px_rgba(15,23,42,0.35)] ring-1 ring-white/30 md:p-8 mb-8">
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/60" />
          <FlightSearchWidget 
            loadingMessage="Uçuş arama aracı yükleniyor..." 
            className="relative min-h-[120px]"
          />
        </div>
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white text-lg font-bold shadow-xl border-2 border-white/20 px-8 py-6 transition-all duration-300 hover:shadow-2xl"
          onClick={handleCall}
        >
          <Phone className="mr-2 h-5 w-5" />
          Hemen Bizi Arayın
        </Button>
      </div>
    </div>
  );
};
