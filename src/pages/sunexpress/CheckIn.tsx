import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Phone, Shield, Clock, HeartHandshake, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { CallButton } from "@/components/CallButton";

const SunExpressCheckIn = () => {
  const handleCall = () => {
    window.location.href = "tel:08502428117";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container py-12 md:py-16 space-y-16 mb-16">
        <div className="text-center space-y-4">
          <img 
            src="https://res.cloudinary.com/tripuck/image/upload/f_auto,fl_lossy,h_100,w_100,q_auto/images/airline/small/XQ.webp"
            alt="SunExpress Logo" 
            className="h-16 mx-auto mb-6"
          />
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <CheckCircle className="h-10 w-10 text-sunexpress" />
            SunExpress Check-in
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            SunExpress uçuşunuz için online check-in yaparak havaalanında zaman kazanın.
            Seyahatiniz öncesinde hızlı ve kolay check-in işleminizi tamamlayın.
          </p>
        </div>

        {/* Main Image Section */}
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <img
            src="/lovable-uploads/27efca33-969c-481d-b23b-39da51b5d24d.png"
            alt="Check-in"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Hızlı ve Kolay Check-in</h2>
              <p className="text-lg">Havalimanında sıra beklemeden, istediğiniz yerden check-in yapın</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-sunexpress" />
                Güvenli İşlem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Check-in işlemleriniz güvenli bir şekilde gerçekleştirilir. 
                Tüm işlemleriniz kayıt altına alınır.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-6 w-6 text-sunexpress" />
                7/24 Destek
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Check-in sürecinin her aşamasında uzman ekibimiz size destek olmak için hazır.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HeartHandshake className="h-6 w-6 text-sunexpress" />
                Özel Hizmet
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                SunExpress üyeleri için özel check-in kontuarları ve öncelikli hizmet.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Check-in Seçenekleri</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <BadgeCheck className="h-5 w-5 text-sunexpress" />
                <span>Online check-in</span>
              </li>
              <li className="flex items-center gap-2">
                <BadgeCheck className="h-5 w-5 text-sunexpress" />
                <span>Mobil check-in</span>
              </li>
              <li className="flex items-center gap-2">
                <BadgeCheck className="h-5 w-5 text-sunexpress" />
                <span>Havalimanı kiosk check-in</span>
              </li>
              <li className="flex items-center gap-2">
                <BadgeCheck className="h-5 w-5 text-sunexpress" />
                <span>Kontur check-in</span>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-sunexpress" />
                  Online Check-in Avantajları
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Uçuşunuzdan 24 saat önce başlayan online check-in ile 
                  koltuk seçimi yapabilir ve boarding pass'inizi alabilirsiniz.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Fixed Bottom Button */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg">
          <Button onClick={handleCall} className="w-full bg-sunexpress hover:bg-sunexpress-hover text-white text-lg">
            <Phone className="h-5 w-5 mr-2" />
            Hemen Ara
          </Button>
        </div>
      </div>
      <CallButton />
    </div>
  );
};

export default SunExpressCheckIn;