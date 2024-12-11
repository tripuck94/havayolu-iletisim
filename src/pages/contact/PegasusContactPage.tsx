import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PegasusContactPage = () => {
  const handleCall = () => {
    window.location.href = "tel:+908502506702";
  };

  return (
    <div className="min-h-screen bg-[#FF9200]">
      <div className="container py-8">
        <Link to="/" className="text-white hover:underline mb-8 inline-block">
          ← Ana Sayfaya Dön
        </Link>
        
        <div className="text-center mb-12">
          <img 
            src="https://www.flypgs.com/assets/images/pegasus-logo.svg" 
            alt="Pegasus Logo" 
            className="h-20 mx-auto mb-8"
          />
          <h1 className="text-4xl font-bold mb-4 text-white">
            Pegasus İletişim
          </h1>
          <p className="text-lg text-white/90">
            Size nasıl yardımcı olabiliriz?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-6 w-6 text-[#FF9200]" />
                Telefon
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">0850 250 67 02</p>
              <Button onClick={handleCall} className="w-full bg-[#FF9200] hover:bg-[#e68200]">
                Hemen Ara
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-6 w-6 text-[#FF9200]" />
                E-posta
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">info@flypgs.com</p>
              <Button asChild className="w-full bg-[#FF9200] hover:bg-[#e68200]">
                <a href="mailto:info@flypgs.com">E-posta Gönder</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-6 w-6 text-[#FF9200]" />
                Adres
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">AEROPARK Yenişehir Mah. Osmanlı Bul. No: 11/A Kurtköy Pendik/İstanbul</p>
              <Button asChild className="w-full bg-[#FF9200] hover:bg-[#e68200]">
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

export default PegasusContactPage;