import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Banner = () => {
  const handleCall = () => {
    window.location.href = "tel:08502428117";
  };

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
          Uçak Bileti Rezervasyonu
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-white/90">
          THY, Pegasus, SunExpress ve AJet için bilet satış, değişiklik ve iptal işlemleriniz için hizmetinizdeyiz.
        </p>
        <Button
          size="lg"
          className="animate-float bg-accent hover:bg-accent/90 text-lg"
          onClick={handleCall}
        >
          <Phone className="mr-2 h-5 w-5" />
          Hemen Bizi Arayın
        </Button>
      </div>
    </div>
  );
};