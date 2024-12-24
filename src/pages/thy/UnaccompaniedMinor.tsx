import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Shield, Clock, HeartHandshake, BadgeCheck, CheckCircle2, Plane, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { CallButton } from "@/components/CallButton";
import { unaccompaniedMinorContent } from "@/data/unaccompaniedMinorContent";

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

        {/* Main Image Section */}
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <img
            src={unaccompaniedMinorContent.mainImage}
            alt="Refakatsiz Çocuk Hizmeti"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Profesyonel Refakat Hizmeti</h2>
              <p className="text-lg">Çocuğunuzun güvenliği bizim önceliğimiz</p>
            </div>
          </div>
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

        {/* Additional Features */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Hizmet Detayları</h3>
            <ul className="space-y-4">
              {unaccompaniedMinorContent.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-thy" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plane className="h-6 w-6 text-thy" />
                  Seyahat Süreci
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Check-in'den varış noktasına kadar özel refakatçi eşliğinde seyahat eden çocuğunuz için
                  sürekli iletişim ve takip hizmeti sunuyoruz.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="h-6 w-6 text-thy" />
                  Deneyimli Personel
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Özel eğitimli personelimiz, çocuğunuzun konforu ve güvenliği için
                  tüm seyahat boyunca yanında olacaktır.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gray-50 p-8 rounded-xl text-center space-y-4">
          <h3 className="text-2xl font-bold">{unaccompaniedMinorContent.callToAction.title}</h3>
          <p className="text-gray-600">{unaccompaniedMinorContent.callToAction.description}</p>
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