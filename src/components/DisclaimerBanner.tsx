import { AlertTriangle } from "lucide-react";

export const DisclaimerBanner = () => {
  return (
    <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 text-white py-3 px-4 shadow-lg border-b-4 border-amber-600">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-3 text-center">
          <AlertTriangle className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0 animate-pulse" />
          <p className="text-sm md:text-base font-bold">
            ⚠️ BU SİTE RESMİ HAVAYOLU WEB SİTESİ DEĞİLDİR
          </p>
          <AlertTriangle className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0 animate-pulse" />
        </div>
        <p className="text-center text-xs md:text-sm mt-1 font-medium">
          Bağımsız bir seyahat acentesi olarak hizmet vermekteyiz.
        </p>
      </div>
    </div>
  );
};

