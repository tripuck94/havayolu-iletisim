import { Header } from "@/components/Header";
import { CallButton } from "@/components/CallButton";
import { Link } from "react-router-dom";
import { BadgeCheck, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CheckIn = () => {
  const handleCall = () => {
    window.location.href = "tel:+905555555555";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container py-8 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <CheckCircle className="h-10 w-10 text-primary" />
            Check-in Hizmeti
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Check-in işlemlerinizi hızlı ve kolay bir şekilde gerçekleştirmenize yardımcı 
            oluyoruz. Çağrı merkezimizi arayarak check-in işlemleriniz hakkında detaylı 
            bilgi alabilirsiniz.
          </p>
        </div>

        {/* Main Image Section */}
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <img
            src="/lovable-uploads/7398e5b3-2469-4357-9789-94408bad853b.png"
            alt="Check-in"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Hızlı ve Kolay Check-in</h2>
              <p className="text-lg">Seyahatinize sorunsuz başlayın</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="bg-primary/5 p-8 rounded-lg mb-8">
          <h3 className="text-2xl font-semibold mb-4">Check-in Seçenekleri</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-2">
              <BadgeCheck className="h-6 w-6 text-primary mt-1" />
              <span>Online check-in</span>
            </li>
            <li className="flex items-start gap-2">
              <BadgeCheck className="h-6 w-6 text-primary mt-1" />
              <span>Havalimanı check-in</span>
            </li>
            <li className="flex items-start gap-2">
              <BadgeCheck className="h-6 w-6 text-primary mt-1" />
              <span>Mobil check-in</span>
            </li>
            <li className="flex items-start gap-2">
              <BadgeCheck className="h-6 w-6 text-primary mt-1" />
              <span>Grup check-in</span>
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-primary text-white p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Size Nasıl Yardımcı Olabiliriz?</h3>
          <p className="mb-6">
            Check-in işlemleri ile ilgili tüm sorularınız için çağrı merkezimizi 7/24 
            arayabilirsiniz. Uzman ekibimiz size en uygun çözümü sunmak için hazır bekliyor.
          </p>
          <Button 
            onClick={handleCall} 
            variant="secondary"
            className="gap-2"
          >
            Hemen Arayın
          </Button>
        </div>
      </div>
      <CallButton />
    </div>
  );
};

export default CheckIn;