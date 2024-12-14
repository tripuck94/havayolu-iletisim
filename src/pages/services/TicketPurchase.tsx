import { Header } from "@/components/Header";
import { CallButton } from "@/components/CallButton";
import { Link } from "react-router-dom";
import { BadgeCheck, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";

const TicketPurchase = () => {
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
            <Ticket className="h-10 w-10 text-primary" />
            Bilet Satın Alma Hizmeti
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Seyahat planlarınızı kolaylaştırmak ve size en uygun uçuş biletlerini bulmanıza 
            yardımcı olmak için buradayız. Çağrı merkezimiz aracılığıyla, tüm havayollarının 
            biletlerini tek bir noktadan, en uygun fiyatlarla satın almanıza yardımcı oluyoruz.
          </p>
        </div>

        {/* Main Image Section */}
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <img
            src="/lovable-uploads/27efca33-969c-481d-b23b-39da51b5d24d.png"
            alt="Bilet Satın Alma"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">En Uygun Fiyat Garantisi</h2>
              <p className="text-lg">Tüm havayolları için tek noktadan bilet satın alma</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="bg-primary/5 p-8 rounded-lg mb-8">
          <h3 className="text-2xl font-semibold mb-4">Neden Bizi Tercih Etmelisiniz?</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-2">
              <BadgeCheck className="h-6 w-6 text-primary mt-1" />
              <span>En uygun fiyat garantisi</span>
            </li>
            <li className="flex items-start gap-2">
              <BadgeCheck className="h-6 w-6 text-primary mt-1" />
              <span>Tüm havayolları için tek noktadan hizmet</span>
            </li>
            <li className="flex items-start gap-2">
              <BadgeCheck className="h-6 w-6 text-primary mt-1" />
              <span>7/24 müşteri desteği</span>
            </li>
            <li className="flex items-start gap-2">
              <BadgeCheck className="h-6 w-6 text-primary mt-1" />
              <span>Güvenli ödeme seçenekleri</span>
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-primary text-white p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Size Nasıl Yardımcı Olabiliriz?</h3>
          <p className="mb-6">
            Bilet satın alma işleminiz için çağrı merkezimizi 7/24 arayabilirsiniz. 
            Uzman ekibimiz size en uygun uçuş seçeneklerini sunmak için hazır bekliyor.
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

export default TicketPurchase;