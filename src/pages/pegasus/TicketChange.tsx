import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RefreshCw, Phone, Shield, Clock, HeartHandshake, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Link } from "react-router-dom";

const PegasusTicketChange = () => {
  const handleCall = () => {
    window.location.href = "tel:08502350235";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container py-8 space-y-12">
        <Link to="/" className="text-primary hover:underline mb-8 inline-block">
          ← Ana Sayfaya Dön
        </Link>
        
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <img 
            src="https://www.flypgs.com/assets/images/pegasus-logo.svg" 
            alt="Pegasus Logo" 
            className="h-16 mx-auto mb-6"
          />
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <RefreshCw className="h-10 w-10 text-pegasus" />
            Pegasus Bilet Değişikliği
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Pegasus biletinizde değişiklik yapmak hiç bu kadar kolay olmamıştı. 
            Uzman ekibimiz size yardımcı olmak için hazır.
          </p>
        </div>

        {/* Main Image Section */}
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <img
            src="/lovable-uploads/1f65f478-a215-44da-9727-ceb49f5e3b74.png"
            alt="Pegasus Bilet Değişikliği"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Pegasus Bilet Değişikliği</h2>
              <p className="text-lg">Seyahat planlarınızı kolayca güncelleyin</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-pegasus" />
                Güvenli İşlem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Pegasus bilet değişikliği işlemleriniz güvenli bir şekilde gerçekleştirilir. 
                Tüm işlemleriniz kayıt altına alınır.
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
                Pegasus bilet değişikliği sürecinin her aşamasında uzman ekibimiz size destek olmak için hazır.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HeartHandshake className="h-6 w-6 text-pegasus" />
                Uygun Fiyatlar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                En uygun Pegasus değişiklik ücretleri ve kampanyalar ile bilet değişikliği 
                işlemlerinizi ekonomik şekilde gerçekleştirin.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Information */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mb-6">Pegasus Bilet Değişikliği Hizmetlerimiz</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <img
              src="/lovable-uploads/0fe02586-04af-4d3d-842e-56c37907739b.png"
              alt="Pegasus Bilet Değişikliği İşlemleri"
              className="rounded-lg h-[300px] w-full object-cover"
            />
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Profesyonel Pegasus Değişiklik Hizmeti</h3>
              <p>
                Pegasus bilet değişikliği işlemlerinizi en uygun şartlarda ve hızlı bir şekilde 
                gerçekleştiriyoruz. Pegasus'un değişiklik politikalarını sizin için 
                değerlendiriyor ve en avantajlı seçeneği sunuyoruz.
              </p>
            </div>
          </div>

          <div className="bg-primary/5 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold mb-4">Pegasus Biletlerinde Değişiklik Yapılabilecek Durumlar</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-pegasus mt-1" />
                <span>Uçuş tarihi değişikliği</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-pegasus mt-1" />
                <span>Yolcu bilgileri düzeltme</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-pegasus mt-1" />
                <span>Rota değişikliği</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-pegasus mt-1" />
                <span>Sınıf yükseltme</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg">
        <Button onClick={handleCall} className="w-full bg-pegasus hover:bg-pegasus-hover text-white text-lg">
          <Phone className="h-5 w-5 mr-2" />
          Hemen Ara
        </Button>
      </div>
    </div>
  );
};

export default PegasusTicketChange;
