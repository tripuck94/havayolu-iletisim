import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRightLeft, Phone, Shield, Clock, HeartHandshake, BadgeCheck, Armchair } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { CallButton } from "@/components/CallButton";

const SeatSelection = () => {
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
            <Armchair className="h-10 w-10 text-primary" />
            Koltuk Seçimi Hizmetleri
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Seyahatinizi daha konforlu hale getirmek için koltuk seçimi hizmetimizden 
            yararlanabilirsiniz. Size en uygun koltuğu seçmenize yardımcı olmak için buradayız.
          </p>
        </div>

        {/* Main Image Section */}
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <img
            src="/lovable-uploads/5bc51257-584d-4039-b174-07ba6c2b1766.png"
            alt="Koltuk Seçimi"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Konforlu Seyahat</h2>
              <p className="text-lg">Size özel koltuk seçimi imkanı</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Garanti
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Seçtiğiniz koltuk garantili olarak size tahsis edilir. 
                Herhangi bir değişiklik durumunda anında bilgilendirilirsiniz.
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
                Koltuk seçimi sürecinin her aşamasında uzman ekibimiz size destek olmak için hazır. 
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
                Özel ihtiyaçlarınıza uygun koltuk seçenekleri sunuyoruz. 
                Extra leg room, acil çıkış, bebek koltuğu yanı gibi özel seçenekler.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Information */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mb-6">Koltuk Seçimi Avantajları</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Online Koltuk Seçimi"
              className="rounded-lg h-[300px] w-full object-cover"
            />
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Online Koltuk Seçimi</h3>
              <p>
                Seyahatinizden önce online olarak koltuğunuzu seçebilir, 
                uçak içi yerleşim planını inceleyebilir ve size en uygun 
                koltuğu rezerve edebilirsiniz.
              </p>
              <p>
                Tüm koltuk seçimleri anında onaylanır ve biletinize işlenir. 
                Check-in sırasında ekstra işlem yapmanıza gerek kalmaz.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Özel Koltuk Seçenekleri</h3>
              <p>
                Extra leg room, acil çıkış, bebek koltuğu yanı gibi özel koltuk 
                seçeneklerinden faydalanabilirsiniz. Her yolcunun ihtiyacına 
                uygun koltuk seçenekleri sunuyoruz.
              </p>
              <p>
                Grup seyahatlerinde yan yana koltuk seçimi imkanı ve aile 
                seyahatlerinde özel düzenlemeler yapabiliyoruz.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="Özel Koltuk Seçenekleri"
              className="rounded-lg h-[300px] w-full object-cover"
            />
          </div>

          <div className="bg-primary/5 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold mb-4">Koltuk Seçimi Avantajları</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-primary mt-1" />
                <span>Daha fazla bacak mesafesi için ön sıra koltukları</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-primary mt-1" />
                <span>Hızlı iniş için koridor koltukları</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-primary mt-1" />
                <span>Manzara için pencere kenarı koltukları</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-primary mt-1" />
                <span>Ailece seyahat için yan yana koltuklar</span>
              </li>
            </ul>
          </div>

          <div className="text-center bg-primary text-white p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Size Nasıl Yardımcı Olabiliriz?</h3>
            <p className="mb-6">
              Koltuk seçimi ile ilgili tüm sorularınız için çağrı merkezimizi 7/24 
              arayabilirsiniz. Uzman ekibimiz size en uygun koltuğu bulmanızda yardımcı 
              olmak için hazır bekliyor.
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

export default SeatSelection;