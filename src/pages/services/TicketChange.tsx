import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RefreshCw, Phone, Shield, Clock, HeartHandshake, BadgeCheck, CalendarCheck, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { CallButton } from "@/components/CallButton";

const TicketChange = () => {
  const handleCall = () => {
    window.location.href = "tel:+905555555555";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container py-8 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <RefreshCw className="h-10 w-10 text-primary" />
            Bilet Değişikliği Hizmetleri
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Seyahat planlarınızda değişiklik mi gerekiyor? Endişelenmeyin! Bilet değişikliği 
            hizmetimiz ile tüm değişiklik işlemlerinizi hızlı ve kolay bir şekilde 
            gerçekleştirmenize yardımcı oluyoruz.
          </p>
        </div>

        {/* Main Image Section */}
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
            alt="Bilet Değişikliği"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Esnek Değişiklik İmkanı</h2>
              <p className="text-lg">Seyahat planlarınızı kolayca güncelleyin</p>
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
                Bilet değişikliği işlemleriniz güvenli bir şekilde gerçekleştirilir. 
                Tüm işlemleriniz kayıt altına alınır ve takip edilir.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-6 w-6 text-primary" />
                7/24 Destek
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Değişiklik sürecinin her aşamasında uzman ekibimiz size destek olmak için hazır. 
                Çağrı merkezimiz 7/24 hizmetinizdedir.
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
                En uygun değişiklik ücretleri ve kampanyalar ile bilet değişikliği 
                işlemlerinizi ekonomik şekilde gerçekleştirin.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Information */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mb-6">Kapsamlı Bilet Değişikliği Hizmetlerimiz</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <img
              src="https://images.unsplash.com/photo-1483058712412-4245e9b90334"
              alt="Bilet Değişikliği İşlemleri"
              className="rounded-lg h-[300px] w-full object-cover"
            />
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Profesyonel Değişiklik Hizmeti</h3>
              <p>
                Bilet değişikliği işlemlerinizi en uygun şartlarda ve hızlı bir şekilde 
                gerçekleştiriyoruz. Havayollarının değişiklik politikalarını sizin için 
                değerlendiriyor ve en avantajlı seçeneği sunuyoruz.
              </p>
              <p>
                Değişiklik sürecinde kullanılan tüm sistemler güvenli ve güncel, 
                işlemleriniz anında gerçekleşiyor.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Değişiklik Politikaları</h3>
              <p>
                Her havayolunun farklı değişiklik politikaları ve ücretlendirmeleri 
                konusunda sizi bilgilendiriyor, en uygun seçeneği bulmanıza 
                yardımcı oluyoruz.
              </p>
              <p>
                Acil durumlar için öncelikli değişiklik hizmeti ve özel destek 
                sağlıyoruz.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
              alt="Bilet Değişikliği Politikaları"
              className="rounded-lg h-[300px] w-full object-cover"
            />
          </div>

          <div className="bg-primary/5 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold mb-4">Değişiklik Yapılabilecek Durumlar</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-primary mt-1" />
                <span>Uçuş tarihi değişikliği</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-primary mt-1" />
                <span>Yolcu bilgileri düzeltme</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-primary mt-1" />
                <span>Rota değişikliği</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-primary mt-1" />
                <span>Sınıf yükseltme</span>
              </li>
            </ul>
          </div>

          <div className="text-center bg-primary text-white p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Size Nasıl Yardımcı Olabiliriz?</h3>
            <p className="mb-6">
              Bilet değişikliği ile ilgili tüm sorularınız için çağrı merkezimizi 
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
      <CallButton />
    </div>
  );
};

export default TicketChange;