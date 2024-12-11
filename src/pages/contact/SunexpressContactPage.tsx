import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SunexpressContactPage = () => {
  const handleCall = () => {
    window.location.href = "tel:+908502222363";
  };

  return (
    <div className="min-h-screen bg-[#FFCD00]">
      <div className="container py-8">
        <Link to="/" className="text-black hover:underline mb-8 inline-block">
          ← Ana Sayfaya Dön
        </Link>
        
        <div className="text-center mb-12">
          <img 
            src="https://www.sunexpress.com/static/assets/images/sunexpress-logo.svg" 
            alt="SunExpress Logo" 
            className="h-20 mx-auto mb-8"
          />
          <h1 className="text-4xl font-bold mb-4 text-black">
            SunExpress İletişim
          </h1>
          <p className="text-lg text-black/90">
            Size nasıl yardımcı olabiliriz?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-6 w-6 text-[#FFCD00]" />
                Telefon
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">0850 222 23 63</p>
              <Button onClick={handleCall} className="w-full bg-[#FFCD00] hover:bg-[#e6b800] text-black">
                Hemen Ara
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-6 w-6 text-[#FFCD00]" />
                E-posta
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">info@sunexpress.com</p>
              <Button asChild className="w-full bg-[#FFCD00] hover:bg-[#e6b800] text-black">
                <a href="mailto:info@sunexpress.com">E-posta Gönder</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-6 w-6 text-[#FFCD00]" />
                Adres
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Yenigün Mah. Boz Sk. No:4 Muratpaşa/Antalya</p>
              <Button asChild className="w-full bg-[#FFCD00] hover:bg-[#e6b800] text-black">
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                  Haritada Göster
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SunexpressContactPage;