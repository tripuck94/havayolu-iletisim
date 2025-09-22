import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export const Banner = () => {
  const handleCall = () => {
    window.location.href = "tel:08502428117";
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

  // tpwidg Widget Script
  useEffect(() => {
    // Script'i head'e ekle
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://tpwidg.com/content?trs=27165&shmarker=144371&locale=tr&curr=TRY&powered_by=false&border_radius=0&plain=true&color_button=%232681ff&color_button_text=%23ffffff&color_border=%232681ff&promo_id=4132&campaign_id=121';
    script.charset = 'utf-8';
    script.id = 'tpwidg-script';
    
    // Eğer script zaten yoksa head'e ekle
    if (!document.getElementById('tpwidg-script')) {
      document.head.appendChild(script);
    }

    return () => {
      const existingScript = document.getElementById('tpwidg-script');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
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
      
      <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
        {/* tpwidg Widget Container */}
        <div id="tpwidg-container" className="mb-8 w-full max-w-7xl">
          {/* Widget script will be injected here */}
        </div>
        
        <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
          Uçak Bileti Rezervasyonu
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-white/90">
          THY, Pegasus, SunExpress ve AJet için bilet satış, değişiklik ve iptal işlemleriniz için hizmetinizdeyiz.
        </p>
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
