import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Phone, Shield, Clock, HeartHandshake, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { CallButton } from "@/components/CallButton";

const AjetTicketPurchase = () => {
  const handleCall = () => {
    window.location.href = "tel:08502428117";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container py-8 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <ShoppingCart className="h-10 w-10 text-ajet" />
            AJet Bilet Satın Alma
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            AJet'in ekonomik fiyatları ve kaliteli hizmetiyle seyahatinizi planlayın. 
            Size en uygun bilet seçeneklerini sunmak için uzman ekibimiz 7/24 hizmetinizdedir.
          </p>
        </div>

        {/* Main Image Section */}
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1559628129-67cf63b72248"
            alt="AJet Bilet Satın Alma"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">AJet Biletleme Hizmeti</h2>
              <p className="text-lg">En uygun fiyatlarla güvenli bilet satın alma</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-ajet" />
                AJet Avantajları
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                AJet ile bilet alımlarınızda ekonomik fiyatlar ve kaliteli hizmet 
                avantajlarından yararlanın.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-6 w-6 text-ajet" />
                7/24 Destek
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Bilet satın alma sürecinin her aşamasında uzman ekibimiz size destek olmak için hazır. 
                Çağrı merkezimiz 7/24 hizmetinizdedir.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HeartHandshake className="h-6 w-6 text-ajet" />
                Özel Kampanyalar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                AJet'in özel kampanyaları ve indirimli biletleri hakkında bilgi alın. 
                Size en uygun fırsatları sunuyoruz.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Information */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mb-6">AJet Bilet Satın Alma Avantajları</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <img
              src="https://images.unsplash.com/photo-1556388158-158ea5ccacbd"
              alt="AJet Uçuş Deneyimi"
              className="rounded-lg h-[300px] w-full object-cover"
            />
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">AJet ile Seyahat</h3>
              <p>
                AJet, Türkiye'nin yeni nesil düşük maliyetli havayolu şirketidir. 
                Ekonomik fiyatları ve kaliteli hizmet anlayışıyla yolcularına 
                uygun fiyatlı seyahat imkanı sunar.
              </p>
              <p>
                Özel kampanyalar ve avantajlı fiyatlarla bilet alabilir, 
                seyahatinizi daha ekonomik hale getirebilirsiniz.
              </p>
            </div>
          </div>

          <div className="bg-primary/5 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold mb-4">AJet Bilet Satın Alma Seçenekleri</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-ajet mt-1" />
                <span>Ekonomik yurt içi uçuşlar</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-ajet mt-1" />
                <span>Esnek tarih değişikliği imkanı</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-ajet mt-1" />
                <span>Online check-in ve koltuk seçimi</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-ajet mt-1" />
                <span>Uygun fiyat garantisi</span>
              </li>
            </ul>
          </div>

          <div className="text-center bg-ajet text-white p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Size Nasıl Yardımcı Olabiliriz?</h3>
            <p className="mb-6">
              AJet bilet satın alma işleminiz ile ilgili tüm sorularınız için çağrı merkezimizi 
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

        {/* Fixed Bottom Button */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg">
          <Button onClick={handleCall} className="w-full bg-ajet hover:bg-ajet-hover text-white text-lg">
            <Phone className="h-5 w-5 mr-2" />
            Hemen Ara
          </Button>
        </div>
      </div>
      <CallButton />
    </div>
  );
};

export default AjetTicketPurchase;
