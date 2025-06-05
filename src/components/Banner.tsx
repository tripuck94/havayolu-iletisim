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
    link.href = 'https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,q_auto,w_1920,h_600,c_fill/v1749081995/images/call-center/content/unsplash-1436491865332-7a61a109cc05.jpg';
    link.fetchPriority = 'high';
    document.head.appendChild(link);

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {/* Critical LCP image with optimizations */}
      <img
        src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,q_auto,w_1920,h_600,c_fill/v1749081995/images/call-center/content/unsplash-1436491865332-7a61a109cc05.jpg"
        alt="Uçak Bileti Rezervasyonu"
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
        loading="eager"
        decoding="sync"
      />
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
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
