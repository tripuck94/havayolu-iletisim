import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Phone, Shield, AlertTriangle, Heart, Info, CheckCircle, Calendar, FileText, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { CallButton } from "@/components/CallButton";

const FlightDelay = () => {
  const handleCall = () => {
    window.location.href = "tel:08502428117";
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <Header />
      <div className="container py-12 md:py-16 space-y-16 mb-16">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <Clock className="h-10 w-10 text-orange-600" />
            Uçuş Gecikmesi Hizmetleri
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Uçuş gecikmeleri ile ilgili tüm haklarınız ve çözüm yolları hakkında bilgi alın. 
            Deneyimli ekibimiz, gecikme durumlarında size en iyi desteği sağlamak için 7/24 hizmetinizdedir.
          </p>
        </div>

        {/* Main Image Section */}
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <img
            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,q_auto,w_auto,dpr_auto/v1749081995/images/call-center/content/unsplash-1436491865332-7a61a109cc05.jpg"
            alt="Uçuş Gecikmesi"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Gecikme Haklarınızı Bilin</h2>
              <p className="text-lg">EU261 ve Türk mevzuatı kapsamında gecikme tazminatı haklarınız</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-orange-600" />
                Gecikme Bilgilendirme
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Uçuş gecikmeniz hakkında anında bilgi alın ve güncel durumu takip edin.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-6 w-6 text-blue-600" />
                Tazminat Talepleri
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                EU261 kapsamında gecikme tazminatı talebinizi profesyonel destek ile yapın.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-red-600" />
                Yolcu Hakları
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Gecikme durumunda sahip olduğunuz haklar ve bu hakları nasıl kullanacağınız.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Information */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Gecikme Tazminatı Hakları</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                <span>3 saat ve üzeri gecikmelerde 250-600€ tazminat hakkı</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                <span>Ücretsiz yemek ve konaklama hizmetleri</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                <span>İletişim masrafları karşılanması</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                <span>Alternatif uçuş düzenleme hakkı</span>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-6 w-6 text-blue-600" />
                  Tazminat Miktarları
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><strong>1500 km'ye kadar:</strong> 250€</p>
                  <p><strong>1500-3500 km arası:</strong> 400€</p>
                  <p><strong>3500 km üzeri:</strong> 600€</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center p-6">
            <Calendar className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Yeniden Rezervasyon</h3>
            <p className="text-gray-600 text-sm">Geciken uçuşunuz için yeni tarih ayarlama</p>
          </Card>
          
          <Card className="text-center p-6">
            <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Anlık Bilgilendirme</h3>
            <p className="text-gray-600 text-sm">SMS ve e-posta ile gecikme güncellemeleri</p>
          </Card>
          
          <Card className="text-center p-6">
            <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Hukuki Destek</h3>
            <p className="text-gray-600 text-sm">Tazminat sürecinde profesyonel destek</p>
          </Card>
          
          <Card className="text-center p-6">
            <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Yolcu Bakımı</h3>
            <p className="text-gray-600 text-sm">Gecikme süresince yeme-içme ve konaklama</p>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-orange-600 text-white p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Uçuş Gecikmeniz mi Var?</h3>
          <p className="mb-6">
            Haklarınızı öğrenmek ve tazminat sürecinizi başlatmak için hemen uzmanlarımızla iletişime geçin.
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

        {/* Fixed Bottom Button */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg">
          <Button onClick={handleCall} className="w-full bg-orange-600 hover:bg-orange-700 text-white text-xl py-6">
            <Phone className="h-5 w-5 mr-2" />
            Hemen Ara
          </Button>
        </div>
      </div>
      <CallButton />
    </div>
  );
};

export default FlightDelay; 
