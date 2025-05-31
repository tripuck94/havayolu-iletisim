import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { XCircle, Phone, Shield, Clock, HeartHandshake, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";

const CancelRefund = () => {
  const handleCall = () => {
    window.location.href = "tel:08502428117";
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <Header />
      <div className="container py-8 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <XCircle className="h-10 w-10 text-primary" />
            Bilet İptal ve İade
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Seyahat planlarınızda beklenmedik değişiklikler mi oldu? Biletinizi iptal etmek 
            veya iade almak için uzman ekibimizle iletişime geçin. Hak ettiğiniz iade tutarını 
            en kısa sürede alın.
          </p>
        </div>

        {/* Main Image Section */}
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
            alt="Bilet İptal ve İade"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Hızlı İptal ve İade</h2>
              <p className="text-lg">Biletinizi iptal edin, paranızı geri alın</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Güvenli İade
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Bilet iptal ve iade işlemleriniz güvenli bir şekilde gerçekleştirilir. 
                Paranız aynı ödeme yönteminize iade edilir.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-6 w-6 text-primary" />
                Hızlı İşlem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                İptal ve iade işlemlerinizi hızlı bir şekilde tamamlıyor, bekleme 
                sürelerinizi minimize ediyoruz. 7/24 destek hizmeti.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HeartHandshake className="h-6 w-6 text-primary" />
                Maksimum İade
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Havayolu politikalarına göre alabileceğiniz maksimum iade tutarını 
                hesaplıyor ve size en avantajlı seçeneği sunuyoruz.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Information */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mb-6">Kapsamlı İptal ve İade Hizmetlerimiz</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <img
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3"
              alt="İptal ve İade İşlemleri"
              className="rounded-lg h-[300px] w-full object-cover"
            />
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Profesyonel İptal ve İade Hizmeti</h3>
              <p>
                Biletlerinizin iptal ve iade işlemlerini havayollarının güncel 
                politikalarına göre gerçekleştiriyoruz. Hak ettiğiniz iade tutarını 
                en kısa sürede almanızı sağlıyoruz.
              </p>
              <p>
                Acil durumlar ve sağlık sorunları için özel iptal prosedürleri 
                konusunda da size rehberlik ediyoruz.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">İptal ve İade Politikaları</h3>
              <p>
                Her havayolunun farklı iptal ve iade politikaları konusunda 
                sizi bilgilendiriyor, en uygun seçeneği bulmanıza yardımcı oluyoruz.
              </p>
              <p>
                Bilet türü, satın alma tarihi ve iptal zamanına göre iade 
                tutarlarını hesaplayıp size sunuyoruz.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44"
              alt="İptal ve İade Politikaları"
              className="rounded-lg h-[300px] w-full object-cover"
            />
          </div>

          <div className="bg-primary/5 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold mb-4">İptal ve İade Durumları</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-primary mt-1" />
                <span>Gönüllü bilet iptali</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-primary mt-1" />
                <span>Uçuş iptal/gecikme iadeleri</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-primary mt-1" />
                <span>Sağlık durumu nedeniyle iptal</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-primary mt-1" />
                <span>Kısmi bilet iadesi</span>
              </li>
            </ul>
          </div>

          <div className="text-center bg-primary text-white p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Size Nasıl Yardımcı Olabiliriz?</h3>
            <p className="mb-6">
              Bilet iptal ve iade ile ilgili tüm sorularınız için çağrı merkezimizi 
              7/24 arayabilirsiniz. Uzman ekibimiz size en uygun çözümü sunmak için hazır bekliyor.
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
        <Button onClick={handleCall} className="w-full bg-primary hover:bg-primary/90 text-white text-xl py-6">
          <Phone className="h-5 w-5 mr-2" />
          Hemen Ara
        </Button>
      </div>
    </div>
  );
};

export default CancelRefund; 