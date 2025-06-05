import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Luggage, Phone, Shield, Clock, HeartHandshake, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { CallButton } from "@/components/CallButton";
import { useLocation } from "react-router-dom";

const airlineData = {
  thy: {
    name: "Türk Hava Yolları",
    logo: "https://res.cloudinary.com/tripuck/image/upload/f_auto,fl_lossy,h_100,w_100,q_auto/images/airline/small/TK.webp",
    phone: "08502600849",
    color: "thy",
    title: "THY"
  },
  pegasus: {
    name: "Pegasus",
    logo: "https://res.cloudinary.com/tripuck/image/upload/f_auto,fl_lossy,h_100,w_100,q_auto/images/airline/small/PC.webp",
    phone: "08502428117",
    color: "pegasus",
    title: "Pegasus"
  },
  sunexpress: {
    name: "SunExpress",
    logo: "https://res.cloudinary.com/tripuck/image/upload/f_auto,fl_lossy,h_100,w_100,q_auto/images/airline/small/XQ.webp",
    phone: "08502428117",
    color: "sunexpress",
    title: "SunExpress"
  },
  ajet: {
    name: "AJet",
    logo: "https://res.cloudinary.com/tripuck/image/upload/f_auto,fl_lossy,h_100,w_100,q_auto/images/airline/small/VF.webp",
    phone: "08502428117",
    color: "ajet",
    title: "AJet"
  },
  azal: {
    name: "AZAL",
    logo: "https://res.cloudinary.com/tripuck/image/upload/f_auto,fl_lossy,h_100,w_100,q_auto/images/airline/small/j2.webp",
    phone: "08502428117",
    color: "azal",
    title: "AZAL"
  }
};

const BaggageService = () => {
  const location = useLocation();
  
  // URL'den havayolu bilgisini çıkar
  const getAirlineFromPath = () => {
    const path = location.pathname;
    if (path.includes('thy')) return 'thy';
    if (path.includes('pegasus')) return 'pegasus';
    if (path.includes('sunexpress')) return 'sunexpress';
    if (path.includes('ajet')) return 'ajet';
    if (path.includes('azal')) return 'azal';
    return null;
  };

  const airlineKey = getAirlineFromPath();
  const airline = airlineKey ? airlineData[airlineKey] : null;

  const handleCall = () => {
    const phoneNumber = airline ? airline.phone : "08502428117";
    window.location.href = `tel:${phoneNumber}`;
  };

  // Havayolu spesifik renkler
  const getColorClass = (colorType: 'text' | 'bg' | 'hover') => {
    if (!airline) return colorType === 'text' ? 'text-primary' : colorType === 'bg' ? 'bg-primary' : 'hover:bg-primary/90';
    
    const colorMap = {
      thy: { text: 'text-thy', bg: 'bg-thy', hover: 'hover:bg-thy/90' },
      pegasus: { text: 'text-pegasus', bg: 'bg-pegasus', hover: 'hover:bg-pegasus/90' },
      sunexpress: { text: 'text-sunexpress', bg: 'bg-sunexpress', hover: 'hover:bg-sunexpress/90' },
      ajet: { text: 'text-ajet', bg: 'bg-ajet', hover: 'hover:bg-ajet/90' },
      azal: { text: 'text-azal', bg: 'bg-azal', hover: 'hover:bg-azal/90' }
    };
    
    return colorMap[airlineKey][colorType];
  };

  const pageTitle = airline ? `${airline.name} Bagaj Ekleme` : 'Bagaj Ekleme';

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <Header />
      <div className="container py-8 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          {airline && (
            <img 
              src={airline.logo}
              alt={`${airline.name} Logo`} 
              className="h-16 mx-auto mb-6"
            />
          )}
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <Luggage className={`h-10 w-10 ${getColorClass('text')}`} />
            {pageTitle}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {airline 
              ? `${airline.name} uçuşlarınız için bagaj hizmetlerimizden faydalanın. Ek bagaj hakkı ve özel bagaj hizmetleri için bizimle iletişime geçin.`
              : 'Seyahatiniz için ihtiyacınız olan ek bagaj hakkı ve bagaj işlemlerinizi kolayca gerçekleştirebilirsiniz. Bagaj politikaları ve ücretleri hakkında detaylı bilgi için çağrı merkezimizi arayabilirsiniz.'
            }
          </p>
        </div>

        {/* Main Image Section */}
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <img
            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,q_auto/v1749081589/images/call-center/static/public/lovable-uploads/7398e5b3-2469-4357-9789-94408bad853b"
            alt={`${airline ? airline.name : ''} Bagaj Hizmeti`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">
                {airline ? `${airline.name} Bagaj Hizmetleri` : 'Özel Bagaj Çözümleri'}
              </h2>
              <p className="text-lg">Konforlu bir seyahat için bagaj çözümleri</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className={`h-6 w-6 ${getColorClass('text')}`} />
                Güvenli İşlem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                {airline ? airline.name : ''} Bagaj işlemleriniz güvenli bir şekilde gerçekleştirilir. 
                Tüm işlemleriniz kayıt altına alınır.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className={`h-6 w-6 ${getColorClass('text')}`} />
                7/24 Destek
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Bagaj hizmetleri sürecinin her aşamasında uzman ekibimiz size destek olmak için hazır.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HeartHandshake className={`h-6 w-6 ${getColorClass('text')}`} />
                Özel Hizmet
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Spor ekipmanları, müzik aletleri ve özel eşyalarınız için özel bagaj hizmetleri sunuyoruz.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Information */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mb-6">
            {airline ? `${airline.name} Bagaj Hizmetleri` : 'Bagaj Ekleme Avantajları'}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <img
              src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,q_auto/v1749081580/images/call-center/static/public/lovable-uploads/04790e9a-9300-402d-92ec-824ca1c5a0db"
              alt={`${airline ? airline.name : ''} Bagaj İşlemleri`}
              className="rounded-lg h-[300px] w-full object-cover"
            />
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">
                Profesyonel {airline ? airline.name : ''} Bagaj Hizmeti
              </h3>
              <p>
                {airline ? airline.name : ''} Bagaj hizmetlerinizi en uygun şartlarda ve hızlı bir şekilde 
                gerçekleştiriyoruz. Size en uygun bagaj seçeneklerini sunuyoruz.
              </p>
            </div>
          </div>

          <div className="bg-primary/5 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold mb-4">
              {airline ? `${airline.name} Bagaj Hizmetleri` : 'Bagaj Ekleme'} Avantajları
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <BadgeCheck className={`h-6 w-6 ${getColorClass('text')} mt-1`} />
                <span>Ek bagaj hakkı</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className={`h-6 w-6 ${getColorClass('text')} mt-1`} />
                <span>Spor ekipmanları taşıma</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className={`h-6 w-6 ${getColorClass('text')} mt-1`} />
                <span>Özel eşya taşıma</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className={`h-6 w-6 ${getColorClass('text')} mt-1`} />
                <span>Online bagaj takibi</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Fixed Bottom Button */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg">
        <Button onClick={handleCall} className={`w-full ${getColorClass('bg')} ${getColorClass('hover')} text-white text-xl py-6`}>
          Hemen Ara
        </Button>
      </div>
      <CallButton />
    </div>
  );
};

export default BaggageService; 