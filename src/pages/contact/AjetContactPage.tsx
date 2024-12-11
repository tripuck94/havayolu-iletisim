import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AjetContactPage = () => {
  const handleCall = () => {
    window.location.href = "tel:+908502222538";
  };

  return (
    <div className="min-h-screen bg-[#1B365D]">
      <div className="container py-8">
        <Link to="/" className="text-white hover:underline mb-8 inline-block">
          ← Ana Sayfaya Dön
        </Link>
        
        <div className="text-center mb-12">
          <img 
            src="https://www.ajet.com.tr/assets/images/ajet-logo.svg" 
            alt="AJet Logo" 
            className="h-20 mx-auto mb-8"
          />
          <h1 className="text-4xl font-bold mb-4 text-white">
            AJet İletişim
          </h1>
          <p className="text-lg text-white/90">
            Size nasıl yardımcı olabiliriz?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-6 w-6 text-[#1B365D]" />
                Telefon
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">0850 222 25 38</p>
              <Button onClick={handleCall} className="w-full bg-[#1B365D] hover:bg-[#152a4a]">
                Hemen Ara
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-6 w-6 text-[#1B365D]" />
                E-posta
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">info@ajet.com.tr</p>
              <Button asChild className="w-full bg-[#1B365D] hover:bg-[#152a4a]">
                <a href="mailto:info@ajet.com.tr">E-posta Gönder</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-6 w-6 text-[#1B365D]" />
                Adres
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Yeşilköy Mah. Havaalanı Cad. No:3/1 Bakırköy/İstanbul</p>
              <Button asChild className="w-full bg-[#1B365D] hover:bg-[#152a4a]">
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

export default AjetContactPage;