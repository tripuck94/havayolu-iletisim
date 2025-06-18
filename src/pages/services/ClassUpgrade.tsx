import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpCircle, Phone, Shield, Clock, HeartHandshake, BadgeCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";

import { classUpgradeContent } from "@/data/classUpgradeContent";
import { useLocation } from "react-router-dom";

const ClassUpgrade = () => {
  const location = useLocation();
  
  // Extract airline from URL path
  const getAirlineFromPath = (path: string) => {
    if (path.includes('/thy-sinif-yukseltme') || path.includes('/thy/class-upgrade')) return 'thy';
    if (path.includes('/pegasus-sinif-yukseltme') || path.includes('/pegasus/class-upgrade')) return 'pegasus';
    if (path.includes('/sunexpress-sinif-yukseltme') || path.includes('/sunexpress/class-upgrade')) return 'sunexpress';
    if (path.includes('/ajet-sinif-yukseltme') || path.includes('/ajet/class-upgrade')) return 'ajet';
    if (path.includes('/azal-sinif-yukseltme') || path.includes('/azal/class-upgrade')) return 'azal';
    return null;
  };

  const airline = getAirlineFromPath(location.pathname);

  const getAirlineInfo = (airline: string | null) => {
    switch (airline) {
      case 'thy':
        return {
          name: 'Türk Hava Yolları',
          logo: 'https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,h_64,w_64,q_auto/images/airline/small/TK.webp',
          color: 'thy',
          loyalty: 'Miles&Smiles',
          phone: 'tel:08502600849'
        };
      case 'pegasus':
        return {
          name: 'Pegasus',
          logo: 'https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,h_64,w_64,q_auto/images/airline/small/PC.webp',
          color: 'pegasus',
          loyalty: 'BolBol',
          phone: 'tel:08502428117'
        };
      case 'sunexpress':
        return {
          name: 'SunExpress',
          logo: 'https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,h_64,w_64,q_auto/images/airline/small/XQ.webp',
          color: 'sunexpress',
          loyalty: 'SunExpress Club',
          phone: 'tel:08502428117'
        };
      case 'ajet':
        return {
          name: 'AJet',
          logo: 'https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,h_64,w_64,q_auto/images/airline/small/VF.webp',
          color: 'ajet',
          loyalty: 'AJet Club',
          phone: 'tel:08502428117'
        };
      case 'azal':
        return {
          name: 'AZAL',
          logo: 'https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,h_64,w_64,q_auto/images/airline/small/j2.webp',
          color: 'azal',
          loyalty: 'AZAL Miles',
          phone: 'tel:08502428117'
        };
      default:
        return {
          name: 'Havayolu',
          logo: '',
          color: 'primary',
          loyalty: 'Sadakat Programı',
          phone: 'tel:08502428117'
        };
    }
  };

  const airlineInfo = getAirlineInfo(airline);

  const handleCall = () => {
    window.location.href = airlineInfo.phone;
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <Header />
      <div className="container py-12 md:py-16 space-y-16 mb-16">
        <div className="text-center space-y-4">
          {airlineInfo.logo && (
            <img 
              src={airlineInfo.logo}
              alt={`${airlineInfo.name} Logo`}
              className="h-16 mx-auto mb-6"
            />
          )}
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <ArrowUpCircle className={`h-10 w-10 text-${airlineInfo.color}`} />
            {airline ? `${airlineInfo.name} Sınıf Yükseltme` : 'Sınıf Yükseltme'}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {airline 
              ? `${airlineInfo.name} ile seyahat deneyiminizi daha konforlu hale getirmek için sınıf yükseltme seçeneklerimizden yararlanabilirsiniz.`
              : 'Seyahat deneyiminizi daha konforlu hale getirmek için sınıf yükseltme seçeneklerimizden yararlanabilirsiniz. Size özel fırsatlar ve avantajlar sunuyoruz.'
            }
          </p>
        </div>

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
                <Shield className={`h-6 w-6 text-${airlineInfo.color}`} />
                Özel Hizmetler
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Business Class ve First Class deneyimi ile özel check-in, lounge erişimi 
                ve daha fazla ayrıcalıktan yararlanın.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className={`h-6 w-6 text-${airlineInfo.color}`} />
                7/24 Destek
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Sınıf yükseltme sürecinin her aşamasında uzman ekibimiz size destek olmak için hazır. 
                Çağrı merkezimiz 7/24 hizmetinizdedir.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HeartHandshake className={`h-6 w-6 text-${airlineInfo.color}`} />
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
                  <BadgeCheck className={`h-5 w-5 text-${airlineInfo.color}`} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className={`h-6 w-6 text-${airlineInfo.color}`} />
                  {airlineInfo.loyalty} Avantajları
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {airline 
                    ? `${airlineInfo.loyalty} üyeleri, mil puanlarını kullanarak sınıf yükseltme yapabilir ve özel ayrıcalıklardan yararlanabilir.`
                    : 'Sadakat programı üyeleri özel avantajlardan yararlanarak sınıf yükseltme yapabilir.'
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="prose prose-lg max-w-none space-y-12">
          <h2 className="text-3xl font-bold mb-6">{airline ? `${airlineInfo.name} ` : ''}Kapsamlı Sınıf Yükseltme Avantajları</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <img
              src="https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,q_auto,w_auto,dpr_auto/images/call-center/premium-seat.webp"
              alt={`${airlineInfo.name} Sınıf Yükseltme`}
              className="rounded-lg h-[300px] w-full object-cover"
            />
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Premium Seyahat Deneyimi</h3>
              <p>
                {airline 
                  ? `${airlineInfo.name} sınıf yükseltme hizmetimiz ile premium deneyim yaşayın. Geniş koltuklar, özel ikramlar ve daha fazlası için bizimle iletişime geçin.`
                  : 'Sınıf yükseltme ile daha geniş koltuklar, özel ikram hizmetleri ve öncelikli check-in gibi ayrıcalıklardan yararlanabilirsiniz. Size özel hizmetlerimiz ile seyahatinizi unutulmaz kılın.'
                }
              </p>
              <p>
                Lounge erişimi ve özel transfer hizmetleri ile seyahatinizin her anında 
                konfor sizinle.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Yükseltme Seçenekleri</h3>
              <p>
                Economy Class'tan Business Class'a veya Business Class'tan First Class'a 
                yükseltme seçenekleri sunuyoruz. Size en uygun seçeneği birlikte 
                belirleyelim.
              </p>
              <p>
                Mil puanlarınızı kullanarak da sınıf yükseltme yapabilirsiniz. 
                Avantajlı fırsatlar için bizi arayın.
              </p>
            </div>
            <img
              src="https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,q_auto,w_auto,dpr_auto/images/call-center/buy-flight-ticket.webp"
              alt="Sınıf Yükseltme Seçenekleri"
              className="rounded-lg h-[300px] w-full object-cover"
            />
          </div>

          <div className={`bg-${airlineInfo.color}/5 p-8 rounded-lg mb-8`}>
            <h3 className="text-2xl font-semibold mb-4">Sınıf Yükseltme Avantajları</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <BadgeCheck className={`h-6 w-6 text-${airlineInfo.color} mt-1`} />
                <span>Daha geniş koltuk ve bacak mesafesi</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className={`h-6 w-6 text-${airlineInfo.color} mt-1`} />
                <span>Özel ikram hizmetleri</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className={`h-6 w-6 text-${airlineInfo.color} mt-1`} />
                <span>Özel check-in kontuarları</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className={`h-6 w-6 text-${airlineInfo.color} mt-1`} />
                <span>Lounge erişimi</span>
              </li>
            </ul>
          </div>

          <div className={`text-center bg-${airlineInfo.color} text-white p-8 rounded-lg`}>
            <h3 className="text-2xl font-semibold mb-4 text-white">Size Nasıl Yardımcı Olabiliriz?</h3>
            <p className="mb-6 text-white">
              {airline 
                ? `${airlineInfo.name} sınıf yükseltme hizmetleri ile ilgili tüm sorularınız için çağrı merkezimizi 7/24 arayabilirsiniz.`
                : 'Sınıf yükseltme ile ilgili tüm sorularınız için çağrı merkezimizi 7/24 arayabilirsiniz.'
              } 
              Uzman ekibimiz size en uygun çözümü sunmak için hazır bekliyor.
            </p>
            <Button 
              onClick={handleCall} 
              variant="secondary"
              className="gap-2"
            >
              <Phone className="h-4 w-4" />
              Hemen Arayın
            </Button>
          </div>
        </div>
      </div>
      
      {/* Fixed Bottom Button */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg">
        <Button onClick={handleCall} className={`w-full bg-${airlineInfo.color} hover:bg-${airlineInfo.color}/90 text-white text-xl py-6`}>
          <Phone className="h-5 w-5 mr-2" />
          Hemen Ara
        </Button>
      </div>

    </div>
  );
};

export default ClassUpgrade;
