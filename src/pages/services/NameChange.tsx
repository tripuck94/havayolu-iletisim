import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit, Phone, Shield, Clock, HeartHandshake, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { useEffect } from "react";

const NameChange = () => {
  const handleCall = () => {
    window.location.href = "tel:08502428117";
  };

  // Preload critical LCP image
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = 'https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,q_auto,w_1200,h_400/images/call-center/name-change.webp';
    link.fetchPriority = 'high';
    document.head.appendChild(link);

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <Header />
      <div className="container py-8 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <Edit className="h-10 w-10 text-primary" />
            İsim Değişikliği
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Biletinizdeki isim bilgilerinde hata mı var? Endişelenmeyin! İsim değişikliği 
            hizmetimiz ile tüm düzeltme işlemlerinizi hızlı ve güvenli bir şekilde 
            gerçekleştirmenize yardımcı oluyoruz.
          </p>
        </div>

        {/* Main Image Section - LCP Critical */}
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <img
            src="https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,q_auto,w_1200,h_400/images/call-center/name-change.webp"
            alt="İsim Değişikliği"
            className="w-full h-full object-cover"
            fetchPriority="high"
            loading="eager"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Hızlı İsim Düzeltme</h2>
              <p className="text-lg">Biletinizdeki isim bilgilerini kolayca düzeltin</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Güvenli İşlem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                İsim değişikliği işlemleriniz güvenli bir şekilde gerçekleştirilir. 
                Tüm işlemleriniz kayıt altına alınır ve takip edilir.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-6 w-6 text-primary" />
                Hızlı Çözüm
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                İsim düzeltme sürecini hızlı bir şekilde tamamlıyor ve size zaman 
                kazandırıyoruz. Çağrı merkezimiz 7/24 hizmetinizdedir.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HeartHandshake className="h-6 w-6 text-primary" />
                Uygun Fiyatlar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                En uygun isim değişikliği ücretleri ile işlemlerinizi ekonomik 
                şekilde gerçekleştirin. Şeffaf fiyatlandırma garantisi.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Information */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mb-6">Kapsamlı İsim Değişikliği Hizmetlerimiz</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <img
              src="https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,q_auto,w_auto,dpr_auto/images/call-center/professional-name-change.webp"
              alt="İsim Değişikliği İşlemleri"
              className="rounded-lg h-[300px] w-full object-cover"
            />
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Profesyonel İsim Düzeltme Hizmeti</h3>
              <p>
                Biletlerinizdeki isim değişikliği işlemlerini en uygun şartlarda 
                gerçekleştiriyoruz. Havayollarının politikalarına uygun şekilde 
                isim düzeltmelerinizi yapıyoruz.
              </p>
              <p>
                Evlilik, boşanma veya resmi isim değişikliği durumlarında da 
                size destek sağlıyoruz.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">İsim Değişikliği Politikaları</h3>
              <p>
                Her havayolunun farklı isim değişikliği politikaları konusunda 
                sizi bilgilendiriyor, en uygun seçeneği bulmanıza yardımcı oluyoruz.
              </p>
              <p>
                Pasaport ve kimlik belgesi güncellemeleri için de rehberlik 
                sağlıyoruz.
              </p>
            </div>
            <img
              src="https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,q_auto,w_auto,dpr_auto/images/call-center/airlines-name-change-policy.webp"
              alt="İsim Değişikliği Politikaları"
              className="rounded-lg h-[300px] w-full object-cover"
            />
          </div>

          <div className="bg-primary/5 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold mb-4">İsim Değişikliği Yapılabilecek Durumlar</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-primary mt-1" />
                <span>Yazım hatası düzeltmeleri</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-primary mt-1" />
                <span>Ad ve soyad sıra değişiklikleri</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-primary mt-1" />
                <span>Evlilik sonrası soyad değişiklikleri</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-primary mt-1" />
                <span>Pasaport bilgisi güncellemeleri</span>
              </li>
            </ul>
          </div>

          <div className="text-center bg-primary text-white p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-white">Size Nasıl Yardımcı Olabiliriz?</h3>
            <p className="mb-6 text-white">
              İsim değişikliği ile ilgili tüm sorularınız için çağrı merkezimizi 
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

export default NameChange; 
