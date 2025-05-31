import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpCircle, Phone, Shield, Clock, HeartHandshake, BadgeCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { CallButton } from "@/components/CallButton";
import { classUpgradeContent } from "@/data/classUpgradeContent";

const ClassUpgrade = () => {
  const handleCall = () => {
    window.location.href = "tel:+905555555555";
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <Header />
      <div className="container py-12 md:py-16 space-y-16 mb-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <ArrowUpCircle className="h-10 w-10 text-primary" />
            Sınıf Yükseltme
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Seyahat deneyiminizi daha konforlu hale getirmek için sınıf yükseltme 
            seçeneklerimizden yararlanabilirsiniz. Size özel fırsatlar ve avantajlar sunuyoruz.
          </p>
        </div>

        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <img
            src={classUpgradeContent.mainImage}
            alt="Sınıf Yükseltme"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Premium Seyahat Deneyimi</h2>
              <p className="text-lg">Daha fazla konfor için sınıf yükseltme avantajları</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Özel Hizmetler
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Business Class ve First Class deneyimi ile özel check-in, lounge erişimi 
                ve daha fazla ayrıcalıktan yararlanın.
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
                Sınıf yükseltme sürecinin her aşamasında uzman ekibimiz size destek olmak için hazır. 
                Çağrı merkezimiz 7/24 hizmetinizdedir.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HeartHandshake className="h-6 w-6 text-primary" />
                Özel Fırsatlar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Size özel kampanyalar ve indirimlerle sınıf yükseltme avantajlarından 
                faydalanın.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Information */}
        <div className="prose prose-lg max-w-none space-y-12">
          <h2 className="text-3xl font-bold mb-6">Kapsamlı Sınıf Yükseltme Avantajları</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Premium Seyahat"
              className="rounded-lg h-[300px] w-full object-cover"
            />
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Premium Seyahat Deneyimi</h3>
              <p>
                Sınıf yükseltme ile daha geniş koltuklar, özel ikram hizmetleri ve 
                öncelikli check-in gibi ayrıcalıklardan yararlanabilirsiniz. Size özel 
                hizmetlerimiz ile seyahatinizi unutulmaz kılın.
              </p>
              <p>
                Lounge erişimi ve özel transfer hizmetleri ile seyahatinizin her anında 
                konfor sizinle.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Yükseltme Seçenekleri</h3>
              <p>
                Economy Class'tan Business Class'a veya Business Class'tan First Class'a 
                yükseltme seçenekleri sunuyoruz. Size en uygun seçeneği birlikte 
                belirleyelim.
              </p>
              <p>
                Mil puanlarınızı kullanarak da sınıf yükseltme yapabilirsiniz. 
                Avantajlı fırsatlar için bizi arayın.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Sınıf Yükseltme Seçenekleri"
              className="rounded-lg h-[300px] w-full object-cover"
            />
          </div>

          <div className="bg-primary/5 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold mb-4">Sınıf Yükseltme Avantajları</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-primary mt-1" />
                <span>Daha geniş koltuk ve bacak mesafesi</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-primary mt-1" />
                <span>Özel ikram hizmetleri</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-primary mt-1" />
                <span>Özel check-in kontuarları</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-primary mt-1" />
                <span>Lounge erişimi</span>
              </li>
            </ul>
          </div>

          <div className="text-center bg-primary text-white p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Size Nasıl Yardımcı Olabiliriz?</h3>
            <p className="mb-6">
              Sınıf yükseltme ile ilgili tüm sorularınız için çağrı merkezimizi 
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

export default ClassUpgrade;