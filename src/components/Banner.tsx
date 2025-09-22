import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

// tpwidg için window type declaration
declare global {
  interface Window {
    tpwidg?: {
      init?: () => void;
    };
  }
}

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

  // tpwidg Widget - Basit implementation, script index.html'de
  useEffect(() => {
    // Widget'ı 5 saniye sonra kontrol et, fallback'i gizle
    const timer = setTimeout(() => {
      const container = document.getElementById('tpwidg-container');
      const fallback = document.getElementById('fallback-search');
      
      if (container && fallback) {
        // Widget içeriği var mı kontrol et
        const widgetContent = container.querySelector('iframe, div[class*="tpwidg"], div[id*="widget"], script + div, script + iframe');
        
        if (widgetContent) {
          console.log('Widget başarıyla yüklendi');
          fallback.style.display = 'none';
        } else {
          console.log('Widget bulunamadı, fallback gösteriliyor');
          // Fallback'te loading mesajını güncelle
          const loadingText = fallback.querySelector('.text-white\\/80');
          if (loadingText) {
            loadingText.textContent = 'ℹ️ Manuel arama kullanın:';
          }
        }
      }
    }, 5000);

    return () => {
      clearTimeout(timer);
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
        <div className="mb-8 w-full max-w-7xl">
          {/* tpwidg widget buraya otomatik yüklenecek */}
          <div id="tpwidg-container" className="min-h-[200px]">
            {/* Widget content will be injected here by tpwidg script */}
          </div>
          
          {/* Fallback content if widget doesn't load */}
          <div id="fallback-search" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-center text-white/80 text-sm mb-4">
              🔍 Uçak bileti arama widget'ı yükleniyor...
            </div>
            
            {/* Simple search form as backup */}
            <div className="grid md:grid-cols-4 gap-4 text-black">
              <div>
                <input 
                  type="text" 
                  placeholder="Nereden?" 
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Nereye?" 
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input 
                  type="date" 
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <Button 
                  onClick={handleCall}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded"
                >
                  Ara & Rezervasyon
                </Button>
              </div>
            </div>
          </div>
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
