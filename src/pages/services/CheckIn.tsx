import { Header } from "@/components/Header";
import { CallButton } from "@/components/CallButton";
import { BadgeCheck, CheckCircle, Clock, HeartHandshake, Shield, Plane, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CheckIn = () => {
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
            <CheckCircle className="h-10 w-10 text-primary" />
            Check-in Hizmeti
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Seyahatinizi daha konforlu ve sorunsuz hale getirmek için tasarlanmış online check-in 
            hizmetimizle tanışın. Havalimanında bekleme sürenizi minimize ederek, yolculuğunuza 
            hızlı ve keyifli bir başlangıç yapın.
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
              <p className="text-lg">Seyahatinize sorunsuz başlayın</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-6 w-6 text-primary" />
                24 Saat Önceden Check-in
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Uçuşunuzdan 24 saat önce başlayan online check-in imkanı ile 
                havalimanında zaman kaybetmeyin. Mobil boarding pass ile 
                direkt güvenliğe geçebilirsiniz.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plane className="h-6 w-6 text-primary" />
                Hızlı Geçiş İmkanı
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Online check-in yapan yolcularımız için özel hızlı geçiş 
                kontuarları ile minimum bekleme süresi garantisi sunuyoruz.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-6 w-6 text-primary" />
                Özel Yardım Hizmeti
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Özel yardıma ihtiyacı olan yolcularımız için check-in 
                sürecinde öncelikli hizmet ve asistanlık sağlıyoruz.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Information */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mb-6">Check-in Hizmetlerimiz Hakkında</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <img
              src="/lovable-uploads/27efca33-969c-481d-b23b-39da51b5d24d.png"
              alt="Online Check-in"
              className="rounded-lg h-[300px] w-full object-cover"
            />
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Online Check-in Avantajları</h3>
              <p>
                Online check-in hizmeti, modern havayolu seyahatinin vazgeçilmez bir parçası haline gelmiştir. 
                Bu hizmet sayesinde, uçuşunuzdan 24 saat öncesinden başlayarak check-in işlemlerinizi 
                tamamlayabilir, koltuk seçiminizi yapabilir ve biniş kartınızı mobil cihazınıza 
                indirebilirsiniz.
              </p>
              <p>
                Mobil biniş kartı ile havalimanına geldiğinizde doğrudan güvenlik kontrolüne 
                geçebilir, check-in kuyruğunda bekleme sürenizi ortadan kaldırabilirsiniz. Bu sayede 
                hem zamandan tasarruf eder hem de daha az stresli bir seyahat deneyimi yaşarsınız.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Havalimanı Check-in Hizmetleri</h3>
              <p>
                Havalimanında check-in yapmayı tercih eden yolcularımız için geniş kontuar ağımız ve 
                deneyimli personelimiz ile hızlı ve kaliteli hizmet sunuyoruz. Business Class ve sadık 
                müşteri programı üyelerimiz için özel check-in kontuarları ile ayrıcalıklı hizmet sağlıyoruz.
              </p>
              <p>
                Özel yardıma ihtiyaç duyan yolcularımız, yaşlılar, hamileler ve çocuklu aileler için 
                öncelikli check-in hizmeti sunuyor, seyahat deneyimlerini kolaylaştırıyoruz. Deneyimli 
                personelimiz, tüm özel ihtiyaçlarınızda size yardımcı olmak için hazır bekliyor.
              </p>
            </div>
            <img
              src="/lovable-uploads/27efca33-969c-481d-b23b-39da51b5d24d.png"
              alt="Havalimanı Check-in"
              className="rounded-lg h-[300px] w-full object-cover"
            />
          </div>

          <div className="bg-primary/5 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold mb-4">Check-in Süreçlerimiz</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-primary mt-1" />
                <span>Online check-in ile zaman kazanın ve kuyruklarda beklemeyin</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-primary mt-1" />
                <span>Mobil biniş kartı ile kolay ve hızlı seyahat</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-primary mt-1" />
                <span>Özel yardım ve asistanlık hizmetleri</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-primary mt-1" />
                <span>Grup check-in imkanı ve özel destek</span>
              </li>
            </ul>
          </div>

          <div className="text-center bg-primary text-white p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Size Nasıl Yardımcı Olabiliriz?</h3>
            <p className="mb-6">
              Check-in işlemleri ile ilgili tüm sorularınız için çağrı merkezimizi 7/24 
              arayabilirsiniz. Uzman ekibimiz size en uygun çözümü sunmak için hazır bekliyor.
            </p>
            <Button 
              onClick={handleCall} 
              variant="secondary"
              className="gap-2"
            >
              Hemen Arayın
            </Button>
          </div>
        </div>
      </div>
      <CallButton />
    </div>
  );
};

export default CheckIn;