import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { XCircle, Phone, Shield, Clock, HeartHandshake, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Link, useParams, useLocation } from "react-router-dom";

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

const CancelRefund = () => {
  const { airline } = useParams<{ airline: string }>();
  const location = useLocation();
  
  // URL'den havayolu adını çıkar
  let airlineKey = airline;
  if (!airlineKey) {
    const pathname = location.pathname;
    if (pathname.includes('thy')) airlineKey = 'thy';
    else if (pathname.includes('pegasus')) airlineKey = 'pegasus';
    else if (pathname.includes('sunexpress')) airlineKey = 'sunexpress';
    else if (pathname.includes('ajet')) airlineKey = 'ajet';
    else if (pathname.includes('azal')) airlineKey = 'azal';
  }

  const airlineInfo = airlineKey ? airlineData[airlineKey as keyof typeof airlineData] : null;

  if (!airlineInfo) {
    return (
      <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
        <Header />
        <div className="container py-8">
          <p className="text-center text-gray-600">Havayolu bulunamadı.</p>
        </div>
      </div>
    );
  }

  const handleCall = () => {
    window.location.href = `tel:${airlineInfo.phone}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <Header />
      <div className="container py-8 space-y-12">
        <Link to="/" className="text-primary hover:underline mb-8 inline-block">
          ← Ana Sayfaya Dön
        </Link>
        
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <img 
            src={airlineInfo.logo}
            alt={`${airlineInfo.name} Logo`} 
            className="h-16 mx-auto mb-6"
          />
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <XCircle className={`h-10 w-10 text-${airlineInfo.color}`} />
            {airlineInfo.name} Bilet İptal ve İade
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {airlineInfo.name} biletinizi iptal etmek veya iade almak için uzman ekibimizle iletişime geçin. 
            Hak ettiğiniz iade tutarını en kısa sürede alın.
          </p>
        </div>

        {/* Main Image Section */}
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <img
            src="/lovable-uploads/1f65f478-a215-44da-9727-ceb49f5e3b74.png"
            alt={`${airlineInfo.name} İptal ve İade`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">{airlineInfo.name} İptal ve İade</h2>
              <p className="text-lg">Biletinizi iptal edin, paranızı geri alın</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className={`h-6 w-6 text-${airlineInfo.color}`} />
                Güvenli İade
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                {airlineInfo.name} bilet iptal ve iade işlemleriniz güvenli bir şekilde gerçekleştirilir. 
                Paranız aynı ödeme yönteminize iade edilir.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className={`h-6 w-6 text-${airlineInfo.color}`} />
                Hızlı İşlem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                {airlineInfo.name} iptal ve iade işlemlerinizi hızlı bir şekilde tamamlıyor, 
                bekleme sürelerinizi minimize ediyoruz.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HeartHandshake className={`h-6 w-6 text-${airlineInfo.color}`} />
                Maksimum İade
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                {airlineInfo.name} politikalarına göre alabileceğiniz maksimum iade tutarını 
                hesaplıyor ve size en avantajlı seçeneği sunuyoruz.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Information */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mb-6">{airlineInfo.name} İptal ve İade Hizmetlerimiz</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <img
              src="/lovable-uploads/0fe02586-04af-4d3d-842e-56c37907739b.png"
              alt={`${airlineInfo.name} İptal ve İade İşlemleri`}
              className="rounded-lg h-[300px] w-full object-cover"
            />
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Profesyonel {airlineInfo.name} İptal ve İade</h3>
              <p>
                {airlineInfo.name} biletlerinizin iptal ve iade işlemlerini {airlineInfo.name}'ın güncel politikalarına göre 
                gerçekleştiriyoruz. Hak ettiğiniz iade tutarını en kısa sürede almanızı sağlıyoruz.
              </p>
            </div>
          </div>

          <div className="bg-primary/5 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold mb-4">{airlineInfo.name} İptal ve İade Durumları</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <BadgeCheck className={`h-6 w-6 text-${airlineInfo.color} mt-1`} />
                <span>Gönüllü bilet iptali</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className={`h-6 w-6 text-${airlineInfo.color} mt-1`} />
                <span>Uçuş iptal/gecikme iadeleri</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className={`h-6 w-6 text-${airlineInfo.color} mt-1`} />
                <span>Sağlık durumu nedeniyle iptal</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className={`h-6 w-6 text-${airlineInfo.color} mt-1`} />
                <span>Kısmi bilet iadesi</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Fixed Bottom Button */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg">
        <Button onClick={handleCall} className={`w-full bg-${airlineInfo.color} hover:bg-${airlineInfo.color}-hover text-white text-xl py-6`}>
          <Phone className="h-5 w-5 mr-2" />
          Hemen Ara
        </Button>
      </div>
    </div>
  );
};

export default CancelRefund; 