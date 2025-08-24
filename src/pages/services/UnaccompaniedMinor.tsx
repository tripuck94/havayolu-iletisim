import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Plane, Shield, Clock, HeartHandshake, BadgeCheck, Baby, CheckCircle2, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { MetaTags } from "@/components/MetaTags";
import { useLocation } from "react-router-dom";
import { unaccompaniedMinorContent } from "@/data/unaccompaniedMinorContent";

const UnaccompaniedMinor = () => {
  const location = useLocation();
  
  // URL'den airline bilgisini extract et
  const getAirlineFromUrl = () => {
    const path = location.pathname;
    
    // Yeni format: /thy-refakatsiz-cocuk, /pegasus-refakatsiz-cocuk vb.
    const newFormatMatch = path.match(/^\/(\w+)-refakatsiz-cocuk$/);
    if (newFormatMatch) {
      return newFormatMatch[1];
    }
    
    // Eski format: /thy/unaccompanied-minor, /pegasus/unaccompanied-minor vb.
    const oldFormatMatch = path.match(/^\/(\w+)\/unaccompanied-minor$/);
    if (oldFormatMatch) {
      return oldFormatMatch[1];
    }
    
    // Genel sayfa
    return null;
  };

  const airline = getAirlineFromUrl();

  // Airline bilgilerini tanımla
  const getAirlineInfo = (airline: string | null) => {
    switch (airline) {
      case 'thy':
        return {
          name: 'Türk Hava Yolları',
          logo: 'https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,h_64,w_64,q_auto/images/airline/small/TK.webp',
          colorClass: 'text-thy',
          bgColorClass: 'bg-thy',
          hoverColorClass: 'hover:bg-thy-hover'
        };
      case 'pegasus':
        return {
          name: 'Pegasus',
          logo: 'https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,h_64,w_64,q_auto/images/airline/small/PC.webp',
          colorClass: 'text-pegasus',
          bgColorClass: 'bg-pegasus',
          hoverColorClass: 'hover:bg-pegasus-hover'
        };
      case 'sunexpress':
        return {
          name: 'SunExpress',
          logo: 'https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,h_64,w_64,q_auto/images/airline/small/XQ.webp',
          colorClass: 'text-sunexpress',
          bgColorClass: 'bg-sunexpress',
          hoverColorClass: 'hover:bg-sunexpress-hover'
        };
      case 'ajet':
        return {
          name: 'AJet',
          logo: 'https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,h_64,w_64,q_auto/images/airline/small/VF.webp',
          colorClass: 'text-ajet',
          bgColorClass: 'bg-ajet',
          hoverColorClass: 'hover:bg-ajet-hover'
        };
      case 'azal':
        return {
          name: 'AZAL',
          logo: 'https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,h_64,w_64,q_auto/images/airline/small/j2.webp',
          colorClass: 'text-azal',
          bgColorClass: 'bg-azal',
          hoverColorClass: 'hover:bg-azal/90'
        };
      case 'qatar':
        return {
          name: 'Qatar Airways',
          logo: 'https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,h_64,w_64,q_auto/images/airline/small/QR.webp',
          colorClass: 'text-qatar',
          bgColorClass: 'bg-qatar',
          hoverColorClass: 'hover:bg-qatar-hover'
        };
      case 'aeroflot':
        return {
          name: 'Aeroflot',
          logo: 'https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,h_64,w_64,q_auto/images/airline/small/SU.webp',
          colorClass: 'text-aeroflot',
          bgColorClass: 'bg-aeroflot',
          hoverColorClass: 'hover:bg-aeroflot-hover'
        };
      case 'emirates':
        return {
          name: 'Emirates',
          logo: 'https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,h_64,w_64,q_auto/images/airline/small/EK.webp',
          colorClass: 'text-emirates',
          bgColorClass: 'bg-emirates',
          hoverColorClass: 'hover:bg-emirates-hover'
        };
      case 'airarabia':
        return {
          name: 'Air Arabia',
          logo: 'https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,h_64,w_64,q_auto/images/airline/small/G9.webp',
          colorClass: 'text-airarabia',
          bgColorClass: 'bg-airarabia',
          hoverColorClass: 'hover:bg-airarabia-hover'
        };
      case 'flydubai':
        return {
          name: 'Flydubai',
          logo: 'https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,h_64,w_64,q_auto/images/airline/small/FZ.webp',
          colorClass: 'text-flydubai',
          bgColorClass: 'bg-flydubai',
          hoverColorClass: 'hover:bg-flydubai-hover'
        };
      default:
        return {
          name: '',
          logo: '',
          colorClass: 'text-blue-600',
          bgColorClass: 'bg-blue-600',
          hoverColorClass: 'hover:bg-blue-700'
        };
    }
  };

  const airlineInfo = getAirlineInfo(airline);
  
  const handleCall = () => {
    window.location.href = "tel:08502428117";
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <MetaTags 
        title={airline ? `${airlineInfo.name} Refakatsiz Çocuk Hizmeti - Havayolu İletişim` : 'Refakatsiz Çocuk Hizmeti - Havayolu İletişim'}
        description={airline 
          ? `${airlineInfo.name} ile çocuğunuzun güvenli ve konforlu seyahati için özel refakat hizmetimiz ile yanınızdayız.`
          : 'Çocuğunuzun güvenli ve konforlu seyahati için özel refakat hizmetimiz ile yanınızdayız. Deneyimli ekibimiz, çocuğunuzun tüm seyahati boyunca güvende olmasını sağlar.'
        }
        path={location.pathname}
        keywords={airline 
          ? `${airlineInfo.name.toLowerCase()} refakatsiz çocuk, ${airlineInfo.name.toLowerCase()} çocuk seyahat, unaccompanied minor, çocuk havayolu`
          : 'refakatsiz çocuk, unaccompanied minor, çocuk seyahat, havayolu çocuk hizmeti'
        }
      />
      <Header />
      <div className="container py-12 md:py-16 space-y-16 mb-16">
      {/* Hero Section */}
      <div className="text-center space-y-4">
          {airline && (
            <img 
              src={airlineInfo.logo}
              alt={`${airlineInfo.name} Logo`} 
              className="h-16 mx-auto mb-6"
            />
          )}
        <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            {airline ? (
              <Users className={`h-10 w-10 ${airlineInfo.colorClass}`} />
            ) : (
              <Baby className="h-10 w-10 text-blue-600" />
            )}
            {airline ? `${airlineInfo.name} Refakatsiz Çocuk Hizmeti` : 'Refakatsiz Çocuk Hizmeti'}
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {airline ? `${airlineInfo.name} ile` : ''} Çocuğunuzun güvenli ve konforlu seyahati için özel refakat hizmetimiz ile
          yanınızdayız. Deneyimli ekibimiz, çocuğunuzun tüm seyahati boyunca
          güvende olmasını sağlar.
        </p>
      </div>

      {/* Main Image Section */}
      <div className="relative h-[400px] rounded-xl overflow-hidden">
        <img
            src={airline ? unaccompaniedMinorContent.mainImage : "https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,q_auto,w_auto,dpr_auto/images/call-center/unaccompanied-minor.webp"}
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
                <Shield className={`h-6 w-6 ${airlineInfo.colorClass}`} />
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
                <Clock className={`h-6 w-6 ${airlineInfo.colorClass}`} />
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
                <HeartHandshake className={`h-6 w-6 ${airlineInfo.colorClass}`} />
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

        {airline && unaccompaniedMinorContent.features && (
          /* Additional Features for airline-specific pages */
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Hizmet Detayları</h3>
              <ul className="space-y-4">
                {unaccompaniedMinorContent.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle2 className={`h-5 w-5 ${airlineInfo.colorClass}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Plane className={`h-6 w-6 ${airlineInfo.colorClass}`} />
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
                    <UserCheck className={`h-6 w-6 ${airlineInfo.colorClass}`} />
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
        )}

        {!airline && (
          /* Advantages Section for general page */
          <div className="bg-gray-100 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Refakatsiz Çocuk Hizmeti Avantajları</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <BadgeCheck className="h-6 w-6 text-blue-600" />
                <span className="text-gray-700 font-medium">Deneyimli ve özel eğitimli refakatçi ekibi</span>
        </div>

              <div className="flex items-center gap-3">
                <BadgeCheck className="h-6 w-6 text-blue-600" />
                <span className="text-gray-700 font-medium">7/24 aile iletişim desteği ve bilgilendirme</span>
        </div>

              <div className="flex items-center gap-3">
                <BadgeCheck className="h-6 w-6 text-blue-600" />
                <span className="text-gray-700 font-medium">Güvenli ve konforlu seyahat garantisi</span>
        </div>

              <div className="flex items-center gap-3">
                <BadgeCheck className="h-6 w-6 text-blue-600" />
                <span className="text-gray-700 font-medium">Özel ihtiyaçlar için kişiselleştirilmiş bakım</span>
              </div>
            </div>
          </div>
        )}

        {airline && unaccompaniedMinorContent.callToAction && (
          /* Call to Action Section for airline-specific pages */
          <div className="bg-gray-50 p-8 rounded-xl text-center space-y-4">
            <h3 className="text-2xl font-bold">{unaccompaniedMinorContent.callToAction.title}</h3>
            <p className="text-gray-600">{unaccompaniedMinorContent.callToAction.description}</p>
          </div>
        )}

        {/* Help Section */}
        <div className={`${airlineInfo.bgColorClass} text-white rounded-xl p-8 text-center`}>
          <h2 className="text-2xl font-bold mb-4 text-white">Size Nasıl Yardımcı Olabiliriz?</h2>
          <p className="text-lg mb-6 max-w-4xl mx-auto text-white">
            Refakatsiz çocuk hizmeti ile ilgili tüm sorularınız için çağrı merkezimizi 7/24 arayabilirsiniz. 
            Uzman ekibimiz size en uygun refakat seçeneklerini sunmak için hazır bekliyor.
          </p>
          <Button 
            onClick={handleCall} 
            className="bg-white text-gray-800 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-lg"
          >
            <Users className="mr-2 h-5 w-5" />
            Hemen Arayın
          </Button>
        </div>
      </div>
      
      {/* Fixed Bottom Button - moved outside container */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg">
        <Button onClick={handleCall} className={`w-full ${airlineInfo.bgColorClass} ${airlineInfo.hoverColorClass} text-white text-xl py-6`}>
          Hemen Ara
        </Button>
      </div>
      

    </div>
  );
};

export default UnaccompaniedMinor;
