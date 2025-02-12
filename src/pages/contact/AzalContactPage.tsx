
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { CallButton } from "@/components/CallButton";

const AzalContactPage = () => {
  const handleCall = () => {
    window.location.href = "tel:08502428117";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container py-12">
        <div className="text-center mb-12">
          <img 
            src="https://www.azal.az/media/2021/01/azal-logo.png"
            alt="AZAL Logo" 
            className="h-16 mx-auto mb-6"
          />
          <h1 className="text-4xl font-bold mb-4">AZAL İletişim</h1>
          <p className="text-lg text-gray-600">
            Size yardımcı olmak için buradayız. Bize ulaşın.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="p-6 text-center">
            <Phone className="h-10 w-10 mx-auto mb-4 text-azal" />
            <h3 className="text-xl font-semibold mb-2">Telefon</h3>
            <p className="mb-4">0850 242 81 17</p>
            <Button
              onClick={handleCall}
              className="w-full bg-azal hover:bg-azal/90"
            >
              Hemen Ara
            </Button>
          </Card>

          <Card className="p-6 text-center">
            <Mail className="h-10 w-10 mx-auto mb-4 text-azal" />
            <h3 className="text-xl font-semibold mb-2">E-posta</h3>
            <p>info@azal.com</p>
          </Card>

          <Card className="p-6 text-center">
            <MapPin className="h-10 w-10 mx-auto mb-4 text-azal" />
            <h3 className="text-xl font-semibold mb-2">Adres</h3>
            <p>Bakü, Azerbaycan</p>
          </Card>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Sık Sorulan Sorular</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Bilet değişikliği nasıl yapılır?</h3>
                <p className="text-gray-600">
                  Bilet değişikliği için müşteri hizmetlerimizi arayabilirsiniz.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Bagaj hakkı nedir?</h3>
                <p className="text-gray-600">
                  Yolcu sınıfına göre bagaj hakları değişiklik göstermektedir.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <CallButton />
    </div>
  );
};

export default AzalContactPage;
