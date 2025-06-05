import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit, Phone, Shield, Clock, HeartHandshake, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Link, useParams, useLocation } from "react-router-dom";

const airlineData = {
  thy: {
    name: "Türk Hava Yolları",
    logo: "https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_64,w_64,q_auto/images/airline/small/TK.webp",
    phone: "08502600849",
    color: "thy",
    title: "THY"
  },
  pegasus: {
    name: "Pegasus",
    logo: "https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_64,w_64,q_auto/images/airline/small/PC.webp",
    phone: "08502428117",
    color: "pegasus",
    title: "Pegasus"
  },
  sunexpress: {
    name: "SunExpress",
    logo: "https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_64,w_64,q_auto/images/airline/small/XQ.webp",
    phone: "08502428117",
    color: "sunexpress",
    title: "SunExpress"
  },
  ajet: {
    name: "AJet",
    logo: "https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_64,w_64,q_auto/images/airline/small/VF.webp",
    phone: "08502428117",
    color: "ajet",
    title: "AJet"
  },
  azal: {
    name: "AZAL",
    logo: "https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_64,w_64,q_auto/images/airline/small/j2.webp",
    phone: "08502428117",
    color: "azal",
    title: "AZAL"
  }
};

const NameChange = () => {
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
            <Edit className={`h-10 w-10 text-${airlineInfo.color}`} />
            {airlineInfo.name} İsim Değişikliği
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {airlineInfo.name} biletinizdeki isim değişikliği işlemlerinizi güvenle gerçekleştirin. 
            Uzman ekibimiz size yardımcı olmak için hazır.
          </p>
        </div>

        {/* Main Image Section */}
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <img
            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,q_auto/v1749081583/images/call-center/static/public/lovable-uploads/1f65f478-a215-44da-9727-ceb49f5e3b74"
            alt={`${airlineInfo.name} İsim Değişikliği`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">{airlineInfo.name} İsim Değişikliği</h2>
              <p className="text-lg">Biletinizdeki isim bilgilerini kolayca düzeltin</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className={`h-6 w-6 text-${airlineInfo.color}`} />
                Güvenli İşlem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                {airlineInfo.name} isim değişikliği işlemleriniz güvenli bir şekilde gerçekleştirilir. 
                Tüm işlemleriniz kayıt altına alınır.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className={`h-6 w-6 text-${airlineInfo.color}`} />
                Hızlı Çözüm
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                {airlineInfo.name} isim değişikliği sürecini hızlı bir şekilde tamamlıyor ve size zaman kazandırıyoruz.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HeartHandshake className={`h-6 w-6 text-${airlineInfo.color}`} />
                Uygun Fiyatlar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                En uygun {airlineInfo.name} isim değişikliği ücretleri ile işlemlerinizi 
                ekonomik şekilde gerçekleştirin.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Information */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mb-6">{airlineInfo.name} İsim Değişikliği Hizmetlerimiz</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <img
              src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,q_auto/v1749081582/images/call-center/static/public/lovable-uploads/0fe02586-04af-4d3d-842e-56c37907739b"
              alt={`${airlineInfo.name} İsim Değişikliği İşlemleri`}
              className="rounded-lg h-[300px] w-full object-cover"
            />
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Profesyonel {airlineInfo.name} İsim Değişikliği</h3>
              <p>
                {airlineInfo.name} biletlerinizdeki isim değişikliği işlemlerini en uygun şartlarda gerçekleştiriyoruz. 
                {airlineInfo.name}'ın politikalarına uygun şekilde isim düzeltmelerinizi yapıyoruz.
              </p>
            </div>
          </div>

          <div className="bg-primary/5 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold mb-4">{airlineInfo.name} Biletlerinde İsim Değişikliği Durumları</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <BadgeCheck className={`h-6 w-6 text-${airlineInfo.color} mt-1`} />
                <span>Yazım hatası düzeltmeleri</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className={`h-6 w-6 text-${airlineInfo.color} mt-1`} />
                <span>Ad ve soyad sıra değişiklikleri</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className={`h-6 w-6 text-${airlineInfo.color} mt-1`} />
                <span>Evlilik sonrası soyad değişiklikleri</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className={`h-6 w-6 text-${airlineInfo.color} mt-1`} />
                <span>Pasaport bilgisi güncellemeleri</span>
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

export default NameChange; 
