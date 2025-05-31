import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpCircle, Phone, Shield, Clock, HeartHandshake, BadgeCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { CallButton } from "@/components/CallButton";
import { classUpgradeContent } from "@/data/classUpgradeContent";

const SunExpressClassUpgrade = () => {
  const handleCall = () => {
    window.location.href = "tel:08502428117";
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <Header />
      <div className="container py-12 md:py-16 space-y-16 mb-16">
        <div className="text-center space-y-4">
          <img 
            src="https://res.cloudinary.com/tripuck/image/upload/f_auto,fl_lossy,h_100,w_100,q_auto/images/airline/small/XQ.webp"
            alt="SunExpress Logo" 
            className="h-16 mx-auto mb-6"
          />
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <ArrowUpCircle className="h-10 w-10 text-sunexpress" />
            SunExpress Sınıf Yükseltme
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            SunExpress ile seyahat deneyiminizi daha konforlu hale getirmek için 
            sınıf yükseltme seçeneklerimizden yararlanabilirsiniz.
          </p>
        </div>

        {/* Main Image Section */}
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <img
            src={classUpgradeContent.mainImage}
            alt="Sınıf Yükseltme"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Premium Seyahat Deneyimi</h2>
              <p className="text-lg">Daha fazla konfor için sınıf yükseltme avantajları</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-sunexpress" />
                Özel Hizmetler
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Business Class deneyimi ile özel check-in, lounge erişimi 
                ve daha fazla ayrıcalıktan yararlanın.
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
                Sınıf yükseltme sürecinin her aşamasında uzman ekibimiz size destek olmak için hazır.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HeartHandshake className="h-6 w-6 text-sunexpress" />
                Özel Fırsatlar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Size özel kampanyalar ve indirimlerle sınıf yükseltme avantajlarından 
                faydalanın.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Hizmet Detayları</h3>
            <ul className="space-y-4">
              {classUpgradeContent.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <BadgeCheck className="h-5 w-5 text-sunexpress" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-6 w-6 text-sunexpress" />
                  SunExpress Avantajları
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  SunExpress üyeleri özel fırsatlardan yararlanarak sınıf yükseltme 
                  yapabilir ve ayrıcalıklı hizmetlerden faydalanabilir.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Fixed Bottom Button */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg">
          <Button onClick={handleCall} className="w-full bg-sunexpress hover:bg-sunexpress-hover text-white text-xl py-6">
            <Phone className="h-5 w-5 mr-2" />
            Hemen Ara
          </Button>
        </div>
      </div>
      <CallButton />
    </div>
  );
};

export default SunExpressClassUpgrade;