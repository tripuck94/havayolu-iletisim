import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Shield, Clock, HeartHandshake, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { CallButton } from "@/components/CallButton";

const ThyUnaccompaniedMinor = () => {
  const handleCall = () => {
    window.location.href = "tel:08502428117";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container py-12 md:py-16 space-y-16 mb-16">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <img 
            src="https://res.cloudinary.com/tripuck/image/upload/f_auto,fl_lossy,h_100,w_100,q_auto/images/airline/small/TK.webp"
            alt="Türk Hava Yolları Logo" 
            className="h-16 mx-auto mb-6"
          />
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <Users className="h-10 w-10 text-thy" />
            Türk Hava Yolları Refakatsiz Çocuk Hizmeti
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Türk Hava Yolları ile çocuğunuzun güvenli ve konforlu seyahati için özel refakat hizmetimiz ile
            yanınızdayız. Deneyimli ekibimiz, çocuğunuzun tüm seyahati boyunca güvende olmasını sağlar.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-thy" />
                Güvenlik Standartları
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Uluslararası standartlara uygun refakat hizmeti sunuyoruz. 
                Çocuğunuzun güvenliği için tüm önlemler titizlikle alınmaktadır.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-6 w-6 text-thy" />
                7/24 Destek
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Seyahat sürecinin her aşamasında uzman ekibimiz size destek olmak için hazır. 
                Çağrı merkezimiz 7/24 hizmetinizdedir.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HeartHandshake className="h-6 w-6 text-thy" />
                Özel İlgi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Her çocuğun özel ihtiyaçlarını dikkate alıyor, seyahat süresince 
                gerekli tüm ilgi ve bakımı sağlıyoruz.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Fixed Bottom Button */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg">
          <Button onClick={handleCall} className="w-full bg-thy hover:bg-thy-hover text-white text-lg">
            Hemen Ara
          </Button>
        </div>
      </div>
      <CallButton />
    </div>
  );
};

export default ThyUnaccompaniedMinor;