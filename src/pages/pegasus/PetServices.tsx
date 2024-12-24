import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PawPrint, Shield, Clock, HeartHandshake, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { CallButton } from "@/components/CallButton";

const PegasusPetServices = () => {
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
            src="https://res.cloudinary.com/tripuck/image/upload/f_auto,fl_lossy,h_100,w_100,q_auto/images/airline/small/PC.webp"
            alt="Pegasus Logo" 
            className="h-16 mx-auto mb-6"
          />
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <PawPrint className="h-10 w-10 text-pegasus" />
            Pegasus Evcil Hayvan Taşıma
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Pegasus ile sevgili dostlarınızın güvenli ve konforlu seyahati için özel çözümler sunuyoruz. 
            Deneyimli ekibimiz, evcil hayvanınızın ihtiyaçlarına uygun en iyi hizmeti almanız için 
            7/24 yanınızda.
          </p>
        </div>

        {/* Main Image Section */}
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1450778869180-41d0601e046e"
            alt="Evcil Hayvan Taşıma"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Profesyonel Taşıma Hizmeti</h2>
              <p className="text-lg">Evcil hayvanınızın konforu bizim önceliğimiz</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-pegasus" />
                Güvenlik Standartları
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Uluslararası standartlara uygun taşıma kafesleri ve ekipmanlar kullanıyoruz. 
                Evcil hayvanınızın güvenliği için tüm önlemler titizlikle alınmaktadır.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-6 w-6 text-pegasus" />
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
                <HeartHandshake className="h-6 w-6 text-pegasus" />
                Özel Bakım
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Her evcil hayvanın özel ihtiyaçlarını dikkate alıyor, seyahat süresince 
                gerekli tüm bakım hizmetlerini sağlıyoruz.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Fixed Bottom Button */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg">
          <Button onClick={handleCall} className="w-full bg-pegasus hover:bg-pegasus-hover text-white text-lg">
            Hemen Ara
          </Button>
        </div>
      </div>
      <CallButton />
    </div>
  );
};

export default PegasusPetServices;