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

  // tpwidg Widget Script - Geliştirilmiş method
  useEffect(() => {
    let widgetCheckInterval: NodeJS.Timeout;
    
    const loadWidget = () => {
      console.log('Widget yükleme başlatılıyor...');
      
      // Script'i dinamik olarak yükle
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://tpwidg.com/content?trs=27165&shmarker=144371&locale=tr&curr=TRY&powered_by=false&border_radius=0&plain=true&color_button=%232681ff&color_button_text=%23ffffff&color_border=%232681ff&promo_id=4132&campaign_id=121';
      script.charset = 'utf-8';
      script.id = 'tpwidg-script-dynamic';
      
      // Widget container'ı kontrol et
      const container = document.getElementById('tpwidg-container');
      const fallback = document.getElementById('fallback-search');
      
      if (container && !document.getElementById('tpwidg-script-dynamic')) {
        document.head.appendChild(script);
        
        // Script yüklendikten sonra
        script.onload = () => {
          console.log('tpwidg script başarıyla yüklendi');
          
          // Widget'ın container'da görünüp görünmediğini kontrol et
          let checkCount = 0;
          widgetCheckInterval = setInterval(() => {
            checkCount++;
            
            // Widget content kontrol et (iframe veya div içeriği var mı?)
            const widgetContent = container.querySelector('iframe, div[class*="tpwidg"], div[id*="tpwidg"]');
            
            if (widgetContent) {
              console.log('Widget başarıyla yüklendi ve render oldu');
              if (fallback) fallback.style.display = 'none';
              clearInterval(widgetCheckInterval);
            } else if (checkCount > 10) {
              // 10 saniye sonra hala widget yoksa fallback göster
              console.log('Widget yüklenemedi, fallback gösteriliyor');
              if (fallback) {
                fallback.style.display = 'block';
                const loadingText = fallback.querySelector('.text-white\\/80');
                if (loadingText) {
                  loadingText.textContent = '⚠️ Widget yüklenemedi, manuel arama kullanın:';
                }
              }
              clearInterval(widgetCheckInterval);
            }
          }, 1000);
        };
        
        script.onerror = () => {
          console.error('tpwidg script yüklenemedi');
          if (fallback) {
            const loadingText = fallback.querySelector('.text-white\\/80');
            if (loadingText) {
              loadingText.textContent = '❌ Bağlantı hatası, manuel arama kullanın:';
            }
          }
        };
      }
    };

    // DOM tamamen yüklendikten sonra widget'ı yükle
    const timer = setTimeout(loadWidget, 1000);

    return () => {
      clearTimeout(timer);
      if (widgetCheckInterval) clearInterval(widgetCheckInterval);
      const existingScript = document.getElementById('tpwidg-script-dynamic');
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
          {/* Fallback content while widget loads */}
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
