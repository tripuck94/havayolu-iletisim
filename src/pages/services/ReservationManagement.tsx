import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Phone, Shield, Search, Edit, Trash2, CheckCircle, Plane, User, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { CallButton } from "@/components/CallButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ReservationManagement = () => {
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
            <Calendar className="h-10 w-10 text-blue-600" />
            Rezervasyon Yönetimi
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Uçuş rezervasyonlarınızı kolayca yönetin. Rezervasyon sorgulama, değişiklik, iptal ve 
            yeniden düzenleme işlemlerinizi tek yerden gerçekleştirin.
          </p>
        </div>

        {/* Reservation Search Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-6">Rezervasyonunuzu Sorgulayın</h3>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="pnr">PNR Kodu / Rezervasyon Numarası</Label>
                <Input 
                  id="pnr" 
                  placeholder="Örn: ABC123" 
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="surname">Soyadı</Label>
                <Input 
                  id="surname" 
                  placeholder="Rezervasyon sahibinin soyadı" 
                  className="mt-1"
                />
              </div>
            </div>
            
            <div className="text-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                <Search className="h-4 w-4 mr-2" />
                Rezervasyonu Sorgula
              </Button>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Edit className="h-6 w-6 text-green-600" />
                Rezervasyon Değişikliği
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Uçuş tarihi, saati veya rotanızı değiştirmek için rezervasyon değişiklik işlemleri.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trash2 className="h-6 w-6 text-red-600" />
                Rezervasyon İptali
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Seyahat planlarınız değişti mi? Rezervasyonunuzu iptal edin ve iade sürecinizi başlatın.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-6 w-6 text-purple-600" />
                Yolcu Bilgileri
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Rezervasyondaki yolcu bilgilerini görüntüleyin ve gerekli düzenlemeleri yapın.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Sample Reservation */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Plane className="h-6 w-6 text-blue-600" />
            Örnek Rezervasyon Görünümü
          </h3>
          
          <div className="border rounded-lg p-6 bg-gray-50">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-lg font-semibold text-blue-600">PNR: ABC123</h4>
                <p className="text-gray-600">Rezervasyon Tarihi: 10 Haziran 2024</p>
              </div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Onaylandı
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold mb-2">Uçuş Bilgileri</h5>
                <div className="space-y-2 text-sm">
                  <p><strong>Rota:</strong> İstanbul (SAW) → Bakü (GYD)</p>
                  <p><strong>Tarih:</strong> 10 Haziran 2024, Salı</p>
                  <p><strong>Saat:</strong> 13:15 - 17:05</p>
                  <p><strong>Havayolu:</strong> AJet</p>
                  <p><strong>Uçuş No:</strong> VF 101</p>
                </div>
              </div>
              
              <div>
                <h5 className="font-semibold mb-2">Yolcu Bilgileri</h5>
                <div className="space-y-2 text-sm">
                  <p><strong>Yetişkin:</strong> 1 Kişi</p>
                  <p><strong>Çocuk:</strong> 2 Kişi</p>
                  <p><strong>Toplam Tutar:</strong> 17.740,03₺</p>
                  <p><strong>Ödeme Durumu:</strong> Tamamlandı</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 mt-6">
              <Button variant="outline" className="flex-1">
                <Edit className="h-4 w-4 mr-2" />
                Değiştir
              </Button>
              <Button variant="outline" className="flex-1">
                <Trash2 className="h-4 w-4 mr-2" />
                İptal Et
              </Button>
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                <CheckCircle className="h-4 w-4 mr-2" />
                Check-in Yap
              </Button>
            </div>
          </div>
        </div>

        {/* Management Options */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center p-6">
            <Search className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Rezervasyon Sorgula</h3>
            <p className="text-gray-600 text-sm">PNR kodu ile anlık rezervasyon durumu</p>
          </Card>
          
          <Card className="text-center p-6">
            <Edit className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Tarih Değiştir</h3>
            <p className="text-gray-600 text-sm">Uygun tarihlerde yeniden planlama</p>
          </Card>
          
          <Card className="text-center p-6">
            <CreditCard className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Ödeme Detayları</h3>
            <p className="text-gray-600 text-sm">Fatura ve ödeme bilgileri görüntüleme</p>
          </Card>
          
          <Card className="text-center p-6">
            <Shield className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Güvenli İşlemler</h3>
            <p className="text-gray-600 text-sm">SSL koruması ile güvenli rezervasyon yönetimi</p>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-blue-600 text-white p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Rezervasyon Konusunda Yardım mı Lazım?</h3>
          <p className="mb-6">
            Rezervasyon işlemlerinizde sorun yaşıyorsanız, uzman müşteri hizmetleri ekibimiz size yardımcı olmak için hazır.
          </p>
          <Button 
            onClick={handleCall} 
            variant="secondary"
            className="gap-2"
          >
            <Phone className="h-4 w-4" />
            Rezervasyon Destek Hattı
          </Button>
        </div>

        {/* Fixed Bottom Button */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg">
          <Button onClick={handleCall} className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xl py-6">
            <Phone className="h-5 w-5 mr-2" />
            Hemen Ara
          </Button>
        </div>
      </div>
      <CallButton />
    </div>
  );
};

export default ReservationManagement; 