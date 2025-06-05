import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PawPrint, Shield, Clock, HeartHandshake, Phone, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { CallButton } from "@/components/CallButton";
import { useLocation } from "react-router-dom";

const AirlinePetServices = () => {
  const location = useLocation();
  
  // URL'den airline bilgisini çıkar (örn: /thy-evcil-hayvan -> thy veya /thy/pet-services -> thy)
  const getAirlineFromPath = (pathname: string) => {
    // Hem /airline-evcil-hayvan hem de /airline/pet-services formatlarını destekle
    const match = pathname.match(/\/(\w+)[-/](evcil-hayvan|pet-services)/);
    return match ? match[1] : undefined;
  };
  
  const airline = getAirlineFromPath(location.pathname);
  
  const handleCall = () => {
    window.location.href = "tel:08502428117";
  };

  // Havayolu bilgilerini dinamik olarak ayarla
  const getAirlineInfo = (airlineCode: string | undefined) => {
    switch (airlineCode) {
      case 'thy':
        return {
          name: 'Türk Hava Yolları',
          logo: 'https://res.cloudinary.com/tripuck/image/upload/f_auto,fl_lossy,h_100,w_100,q_auto/images/airline/small/TK.webp',
          colorClass: 'text-thy',
          bgClass: 'bg-thy',
          hoverClass: 'hover:bg-thy-hover',
          iconColor: 'text-thy'
        };
      case 'pegasus':
        return {
          name: 'Pegasus',
          logo: 'https://res.cloudinary.com/tripuck/image/upload/f_auto,fl_lossy,h_100,w_100,q_auto/images/airline/small/PC.webp',
          colorClass: 'text-pegasus',
          bgClass: 'bg-pegasus',
          hoverClass: 'hover:bg-pegasus-hover',
          iconColor: 'text-pegasus'
        };
      case 'sunexpress':
        return {
          name: 'SunExpress',
          logo: 'https://res.cloudinary.com/tripuck/image/upload/f_auto,fl_lossy,h_100,w_100,q_auto/images/airline/small/XQ.webp',
          colorClass: 'text-sunexpress',
          bgClass: 'bg-sunexpress',
          hoverClass: 'hover:bg-sunexpress-hover',
          iconColor: 'text-sunexpress'
        };
      case 'ajet':
        return {
          name: 'AJet',
          logo: 'https://res.cloudinary.com/tripuck/image/upload/f_auto,fl_lossy,h_100,w_100,q_auto/images/airline/small/VF.webp',
          colorClass: 'text-ajet',
          bgClass: 'bg-ajet',
          hoverClass: 'hover:bg-ajet-hover',
          iconColor: 'text-ajet'
        };
      case 'azal':
        return {
          name: 'AZAL',
          logo: 'https://res.cloudinary.com/tripuck/image/upload/f_auto,fl_lossy,h_100,w_100,q_auto/images/airline/small/j2.webp',
          colorClass: 'text-azal',
          bgClass: 'bg-azal',
          hoverClass: 'hover:bg-azal-hover',
          iconColor: 'text-azal'
        };
      default:
        return {
          name: 'Havayolu',
          logo: '',
          colorClass: 'text-blue-600',
          bgClass: 'bg-blue-600',
          hoverClass: 'hover:bg-blue-700',
          iconColor: 'text-blue-600'
        };
    }
  };

  const airlineInfo = getAirlineInfo(airline);

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <Header />
      <div className="container py-12 md:py-16 space-y-16 mb-16">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <img 
            src={airlineInfo.logo}
            alt={`${airlineInfo.name} Logo`} 
            className="h-16 mx-auto mb-6"
          />
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <PawPrint className={`h-10 w-10 ${airlineInfo.iconColor}`} />
            {airlineInfo.name} Evcil Hayvan Taşıma
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {airlineInfo.name} ile sevgili dostlarınızın güvenli ve konforlu seyahati için özel çözümler sunuyoruz. 
            Deneyimli ekibimiz, evcil hayvanınızın ihtiyaçlarına uygun en iyi hizmeti almanız için 
            7/24 yanınızda.
          </p>
        </div>

        {/* Main Image Section */}
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <img
            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,q_auto,w_auto,dpr_auto/v1749081995/images/call-center/content/unsplash-1450778869180-41d0601e046e.jpg"
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
                <Shield className={`h-6 w-6 ${airlineInfo.iconColor}`} />
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
                <Clock className={`h-6 w-6 ${airlineInfo.iconColor}`} />
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
                <HeartHandshake className={`h-6 w-6 ${airlineInfo.iconColor}`} />
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

        {/* Advantages Section */}
        <div className="bg-gray-100 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Evcil Hayvan Taşıma Avantajları</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <BadgeCheck className={`h-6 w-6 ${airlineInfo.iconColor}`} />
              <span className="text-gray-700 font-medium">Kabin içi ve bagaj bölümü taşıma seçenekleri</span>
            </div>
            
            <div className="flex items-center gap-3">
              <BadgeCheck className={`h-6 w-6 ${airlineInfo.iconColor}`} />
              <span className="text-gray-700 font-medium">Veteriner hekim onaylı sağlık belgesi rehberliği</span>
            </div>
            
            <div className="flex items-center gap-3">
              <BadgeCheck className={`h-6 w-6 ${airlineInfo.iconColor}`} />
              <span className="text-gray-700 font-medium">Uygun taşıma kafesi boyut ve standart bilgilendirmesi</span>
            </div>
            
            <div className="flex items-center gap-3">
              <BadgeCheck className={`h-6 w-6 ${airlineInfo.iconColor}`} />
              <span className="text-gray-700 font-medium">Seyahat öncesi ve sonrası profesyonel destek</span>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className={`${airlineInfo.bgClass} text-white rounded-xl p-8 text-center`}>
          <h2 className="text-2xl font-bold mb-4">Size Nasıl Yardımcı Olabiliriz?</h2>
          <p className="text-lg mb-6 max-w-4xl mx-auto">
            Evcil hayvan taşıma ile ilgili tüm sorularınız için çağrı merkezimizi 7/24 arayabilirsiniz. 
            Uzman ekibimiz size en uygun taşıma seçeneklerini bulmanızda yardımcı olmak için hazır bekliyor.
          </p>
          <Button 
            onClick={handleCall} 
            className="bg-white text-gray-800 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-lg"
          >
            <Phone className="mr-2 h-5 w-5" />
            Hemen Arayın
          </Button>
        </div>

        {/* Fixed Bottom Button */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg">
          <Button onClick={handleCall} className={`w-full ${airlineInfo.bgClass} ${airlineInfo.hoverClass} text-white text-xl py-6`}>
            Hemen Ara
          </Button>
        </div>
      </div>
      <CallButton />
    </div>
  );
};

export default AirlinePetServices; 