import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Phone, Shield, Accessibility, Baby, Stethoscope, CheckCircle, Users, Clock, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { CallButton } from "@/components/CallButton";

const SpecialAssistance = () => {
  const handleCall = () => {
    window.location.href = "tel:08502428117";
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <Header />
      <div className="container py-12 md:py-16 space-y-16 mb-16">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <Heart className="h-10 w-10 text-pink-600" />
            Özel Yardım Hizmetleri
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Özel ihtiyaçları olan yolcularımız için tasarlanmış kapsamlı destek hizmetleri. 
            Konforlu ve güvenli bir seyahat deneyimi için sizin yanınızdayız.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Accessibility className="h-6 w-6 text-blue-600" />
                Mobilite Desteği
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Tekerlekli sandalye hizmeti, havalimanı transferi ve uçağa binme desteği.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Stethoscope className="h-6 w-6 text-red-600" />
                Tıbbi Destek
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Oksijen desteği, tıbbi cihaz taşıma ve özel tıbbi ihtiyaçlar için destek.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Headphones className="h-6 w-6 text-purple-600" />
                Görme/İşitme Desteği
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Görme ve işitme engelli yolcular için özel asistans ve rehberlik hizmetleri.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-pink-600 text-white p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Özel Yardım Talebiniz mi Var?</h3>
          <p className="mb-6">
            Özel ihtiyaçlarınız için destek almak istiyorsanız, uzman ekibimiz size yardımcı olmak için hazır.
          </p>
          <Button 
            onClick={handleCall} 
            variant="secondary"
            className="gap-2"
          >
            <Phone className="h-4 w-4" />
            Özel Yardım Hattı
          </Button>
        </div>

        {/* Fixed Bottom Button */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg">
          <Button onClick={handleCall} className="w-full bg-pink-600 hover:bg-pink-700 text-white text-xl py-6">
            <Phone className="h-5 w-5 mr-2" />
            Hemen Ara
          </Button>
        </div>
      </div>
      <CallButton />
    </div>
  );
};

export default SpecialAssistance; 