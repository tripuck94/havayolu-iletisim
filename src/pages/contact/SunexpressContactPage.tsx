import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SunexpressContactPage = () => {
  const handleCall = () => {
    window.location.href = "tel:08503089840";
  };

  return (
    <div className="min-h-screen bg-secondary">
      <div className="container py-8">
        <Link to="/" className="text-primary hover:underline mb-8 inline-block">
          ← Ana Sayfaya Dön
        </Link>
        
        <div className="text-center mb-12">
          <img 
            src="https://www.sunexpress.com/static/assets/images/sunexpress-logo.svg" 
            alt="SunExpress Logo" 
            className="h-20 mx-auto mb-8"
          />
          <h1 className="text-4xl font-bold mb-4 text-primary">
            SunExpress İletişim
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
          <Card className="mb-20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-6 w-6 text-[#FFCD00]" />
                Müşteri Hizmetleri
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-center mb-4">0850 308 98 40</p>
              <Button onClick={handleCall} className="w-full bg-[#FFCD00] hover:bg-[#e6b800] text-black">
                <Phone className="h-4 w-4 mr-2" />
                Hemen Ara
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg">
          <Button onClick={handleCall} className="w-full bg-[#FFCD00] hover:bg-[#e6b800] text-black">
            <Phone className="h-5 w-5 mr-2" />
            Hemen Ara
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SunexpressContactPage;