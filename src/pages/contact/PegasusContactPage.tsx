import { Phone, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";

const PegasusContactPage = () => {
  const handleCall = () => {
    window.location.href = "tel:08502428117";
  };

  return (
    <div className="min-h-screen bg-secondary">
      <Header />
      <div className="container py-8">
        
        <div className="text-center mb-12">
          <img 
            src="https://res.cloudinary.com/tripuck/image/upload/f_auto,fl_lossy,h_100,w_100,q_auto/images/airline/small/PC.webp"
            alt="Pegasus Logo"
            className="h-20 mx-auto mb-8"
          />
          <h1 className="text-4xl font-bold mb-4 text-primary">
            Pegasus İletişim
          </h1>
          <p className="text-lg text-gray-600">
            7/24 hizmetinizdeyiz. Size nasıl yardımcı olabiliriz?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05"
              alt="Uçak"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a"
              alt="Call Center"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-20">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Phone className="h-8 w-8 text-pegasus" />
              <h2 className="text-2xl font-bold">Müşteri Hizmetleri</h2>
            </div>
            <p className="text-3xl font-bold text-center mb-6">0850 242 81 17</p>
            <Button onClick={handleCall} className="w-full bg-pegasus hover:bg-pegasus-hover text-white text-lg">
              <Phone className="h-5 w-5 mr-2" />
              Hemen Ara
            </Button>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg">
          <Button onClick={handleCall} className="w-full bg-pegasus hover:bg-pegasus-hover text-white text-lg">
            <Phone className="h-5 w-5 mr-2" />
            Hemen Ara
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PegasusContactPage;