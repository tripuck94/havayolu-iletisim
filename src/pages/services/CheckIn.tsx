import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Phone, Shield, Clock, HeartHandshake, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { CallButton } from "@/components/CallButton";

const CheckIn = () => {
  const handleCall = () => {
    window.location.href = "tel:+905555555555";
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <Header />
      <div className="container py-12 md:py-16 space-y-16 mb-16">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <CheckCircle className="h-10 w-10 text-primary" />
            Check-in
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Seyahatiniz öncesinde online check-in yaparak havaalanında zaman kazanın. 
            Deneyimli ekibimiz, check-in işlemlerinizi hızlı ve kolay bir şekilde 
            gerçekleştirmeniz için 7/24 yanınızda.
          </p>
        </div>

        {/* Main Image Section */}
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <img
            src="/lovable-uploads/27efca33-969c-481d-b23b-39da51b5d24d.png"
            alt="Check-in"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Hızlı ve Kolay Check-in</h2>
              <p className="text-lg">Havalimanında sıra beklemeden, istediğiniz yerden check-in yapın</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Güvenli İşlem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Check-in işlemleriniz güvenli bir şekilde gerçekleştirilir. 
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
                Check-in işlemlerinizin her aşamasında uzman ekibimiz size destek olmak için hazır. 
                Çağrı merkezimiz 7/24 hizmetinizdedir.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HeartHandshake className="h-6 w-6 text-primary" />
                Özel Hizmet
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Özel ihtiyaçlarınıza uygun check-in seçenekleri sunuyoruz. 
                Grup check-in, özel yardım ve daha fazlası.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Information */}
        <div className="prose prose-lg max-w-none space-y-12">
          <h2 className="text-3xl font-bold mb-6">Online Check-in Avantajları</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <img
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
              alt="Online Check-in"
              className="rounded-lg h-[300px] w-full object-cover"
            />
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Online Check-in İşlemleri</h3>
              <p>
                Seyahatinizden 24-36 saat önce online check-in yapabilir, 
                boarding pass'inizi alabilir ve havalimanında zaman kazanabilirsiniz. 
                Web sitemiz üzerinden kolayca check-in işlemlerinizi gerçekleştirebilirsiniz.
              </p>
              <p>
                Tüm check-in işlemleri anında onaylanır ve boarding pass'iniz 
                e-posta adresinize gönderilir.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Check-in Seçenekleri</h3>
              <p>
                Web sitesi üzerinden check-in, mobil uygulama üzerinden check-in veya 
                havalimanı kiosklarından check-in seçeneklerinden size en uygun olanı 
                tercih edebilirsiniz.
              </p>
              <p>
                Grup seyahatlerinde toplu check-in imkanı ve özel yardıma ihtiyacı olan 
                yolcular için özel düzenlemeler yapabiliyoruz.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="Check-in Seçenekleri"
              className="rounded-lg h-[300px] w-full object-cover"
            />
          </div>

          <div className="bg-primary/5 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold mb-4">Check-in Avantajları</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-primary mt-1" />
                <span>Havalimanında sıra beklemeden hızlı check-in</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-primary mt-1" />
                <span>Mobil boarding pass seçeneği</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-primary mt-1" />
                <span>Koltuk seçimi imkanı</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-primary mt-1" />
                <span>Bagaj etiketleme hizmeti</span>
              </li>
            </ul>
          </div>

          <div className="text-center bg-primary text-white p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Size Nasıl Yardımcı Olabiliriz?</h3>
            <p className="mb-6">
              Check-in işleminiz ile ilgili tüm sorularınız için çağrı merkezimizi 
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

export default CheckIn;