import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Phone, Shield, MapPin, Clock, FileText, CheckCircle, Package, AlertCircle, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";


const LostBaggage = () => {
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
            <Search className="h-10 w-10 text-red-600" />
            Kayıp Eşya Hizmetleri
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kayıp ya da hasarlı bagajınız için hızlı çözüm ve tazminat hizmetleri. 
            Uzman ekibimiz bagajınızı bulmak ve haklarınızı korumak için 7/24 çalışıyor.
          </p>
        </div>

        {/* Main Image Section */}
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <img
            src="https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,q_auto,w_auto,dpr_auto/unsplash-1488646953014-85cb44e25828.webp"
            alt="Kayıp Bagaj"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Bagajınızı Hızla Buluyoruz</h2>
              <p className="text-lg">Gelişmiş takip sistemi ile kayıp bagajları 24 saat içinde tespit ediyoruz</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-6 w-6 text-blue-600" />
                Bagaj Takibi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                WorldTracer sistemi ile bagajınızın anlık konumunu takip edin ve güncellemeleri alın.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="h-6 w-6 text-green-600" />
                Hızlı Teslimat
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Bulunan bagajınızı adresinize ücretsiz kurye ile en kısa sürede teslim ediyoruz.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-purple-600" />
                Tazminat Desteği
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Montreal Sözleşmesi kapsamında tazminat haklarınızı koruyoruz ve süreçte yanınızdayız.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Information */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Kayıp Bagaj Süreçleri</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                <span>Havalimanında anında kayıp bagaj raporu (PIR) düzenleme</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                <span>24/7 online bagaj takip sistemi</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                <span>Acil durum kiti ve ihtiyaç giderleri karşılanması</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                <span>Ücretsiz bagaj teslimat hizmeti</span>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-6 w-6 text-blue-600" />
                  Tazminat Bilgileri
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><strong>Gecikme Tazminatı:</strong> Günlük gider karşılığı</p>
                  <p><strong>Kayıp Bagaj:</strong> 1000-1700€'ya kadar</p>
                  <p><strong>Hasarlı Bagaj:</strong> Onarım veya değer karşılığı</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Step by Step Process */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-8">Kayıp Bagaj Süreç Adımları</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="h-8 w-8 text-red-600" />
              </div>
              <h4 className="font-semibold mb-2">1. Bildiri</h4>
              <p className="text-gray-600 text-sm">Havalimanında kayıp bagaj raporu (PIR) düzenleyin</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold mb-2">2. Arama</h4>
              <p className="text-gray-600 text-sm">WorldTracer sistemi ile global arama başlatılır</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold mb-2">3. Tespit</h4>
              <p className="text-gray-600 text-sm">Bagaj bulunur ve konumu tespit edilir</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold mb-2">4. Teslimat</h4>
              <p className="text-gray-600 text-sm">Ücretsiz kurye ile adresinize teslim</p>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="text-center p-6">
            <Clock className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">24 Saat Takip</h3>
            <p className="text-gray-600 text-sm">Bagajınızın durumunu anlık olarak takip edin</p>
          </Card>
          
          <Card className="text-center p-6">
            <Truck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Hızlı Teslimat</h3>
            <p className="text-gray-600 text-sm">Bulunan bagajlar 24 saat içinde teslim edilir</p>
          </Card>
          
          <Card className="text-center p-6">
            <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Tam Güvence</h3>
            <p className="text-gray-600 text-sm">Uluslararası standartlarda tazminat güvencesi</p>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-red-600 text-white p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Bagajınız Kayıp mı?</h3>
          <p className="mb-6">
            Hemen bizimle iletişime geçin. Uzman ekibimiz bagajınızı bulmak için derhal harekete geçecek.
          </p>
          <Button 
            onClick={handleCall} 
            variant="secondary"
            className="gap-2"
          >
            <Phone className="h-4 w-4" />
            Acil Destek Hattı
          </Button>
        </div>

        {/* Fixed Bottom Button */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg">
          <Button onClick={handleCall} className="w-full bg-red-600 hover:bg-red-700 text-white text-xl py-6">
            <Phone className="h-5 w-5 mr-2" />
            Hemen Ara
          </Button>
        </div>
      </div>

    </div>
  );
};

export default LostBaggage; 
