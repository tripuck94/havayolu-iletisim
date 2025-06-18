import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ticket, Phone, Shield, Search, Download, QrCode, CheckCircle, Plane, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const TicketInquiry = () => {
  const [ticketNumber, setTicketNumber] = useState("");
  const [surname, setSurname] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const { toast } = useToast();

  const handleCall = () => {
    window.location.href = "tel:08502428117";
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!ticketNumber.trim() || !surname.trim()) {
      toast({
        title: "⚠️ Eksik Bilgi",
        description: "Lütfen bilet numarası ve soyadınızı giriniz.",
        className: "bg-amber-50 border-amber-200 text-amber-800",
      });
      return;
    }

    setIsSearching(true);
    
    // Gerçek arama simülasyonu
    setTimeout(() => {
      setIsSearching(false);
      toast({
        title: "🔍 Bilet Bulunamadı",
        description: "Girdiğiniz bilgilerle eşleşen bilet bulunamadı. Destek hattımızı arayarak yardım alabilirsiniz.",
        className: "bg-blue-50 border-blue-200 text-blue-800 max-w-md",
        action: (
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleCall}
            className="bg-blue-600 hover:bg-blue-700 text-white border-blue-600"
          >
            <Phone className="h-4 w-4 mr-2" />
            Hemen Ara
          </Button>
        ),
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <Header />
      <div className="container py-12 md:py-16 space-y-16 mb-16">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <Ticket className="h-10 w-10 text-indigo-600" />
            Bilet Sorgulama
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Bilet bilgilerinizi sorgulayın, boarding pass indirin ve uçuş detaylarınızı görüntüleyin. 
            E-biletinize anında erişim sağlayın ve seyahat bilgilerinizi kontrol edin.
          </p>
        </div>

        {/* Ticket Search Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-6">Biletinizi Sorgulayın</h3>
          <form onSubmit={handleSearch} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="ticket-number">Bilet Numarası / E-Bilet Kodu</Label>
                <Input 
                  id="ticket-number" 
                  placeholder="Örn: 2351234567890" 
                  className="mt-1"
                  value={ticketNumber}
                  onChange={(e) => setTicketNumber(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="surname">Yolcu Soyadı</Label>
                <Input 
                  id="surname" 
                  placeholder="Bilette yazan soyadı" 
                  className="mt-1"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
              </div>
            </div>
            
            <div className="text-center">
              <Button 
                type="submit"
                disabled={isSearching}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3"
              >
                {isSearching ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Aranıyor...
                  </>
                ) : (
                  <>
                    <Search className="h-4 w-4 mr-2" />
                    Bileti Sorgula
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="h-6 w-6 text-blue-600" />
                E-Bilet İndirme
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                E-biletinizi PDF formatında indirin ve seyahatiniz için yanınızda bulundurun.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <QrCode className="h-6 w-6 text-green-600" />
                Mobil Boarding Pass
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                QR kodlu mobil boarding pass alın ve havalimanında kolay check-in yapın.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plane className="h-6 w-6 text-purple-600" />
                Uçuş Detayları
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Uçuş saatleri, terminal bilgisi ve bagaj hakları gibi detaylı bilgilere erişin.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center p-6">
            <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Uçuş Durumu</h3>
            <p className="text-gray-600 text-sm">Gerçek zamanlı uçuş durumu takibi</p>
          </Card>
          
          <Card className="text-center p-6">
            <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Terminal Bilgisi</h3>
            <p className="text-gray-600 text-sm">Check-in kontuarı ve gate bilgileri</p>
          </Card>
          
          <Card className="text-center p-6">
            <Download className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Bilet İndirme</h3>
            <p className="text-gray-600 text-sm">PDF ve mobil boarding pass seçenekleri</p>
          </Card>
          
          <Card className="text-center p-6">
            <Shield className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Güvenli Erişim</h3>
            <p className="text-gray-600 text-sm">SSL koruması ile güvenli bilet sorgulama</p>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-indigo-600 text-white p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Biletinizi Bulamıyor musunuz?</h3>
          <p className="mb-6">
            Bilet sorgulama konusunda sorun yaşıyorsanız, müşteri hizmetleri ekibimiz size yardımcı olmak için hazır.
          </p>
          <Button 
            onClick={handleCall} 
            variant="secondary"
            className="gap-2"
          >
            <Phone className="h-4 w-4" />
            Bilet Destek Hattı
          </Button>
        </div>

        {/* Fixed Bottom Button */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg">
          <Button onClick={handleCall} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-xl py-6">
            <Phone className="h-5 w-5 mr-2" />
            Hemen Ara
          </Button>
        </div>
      </div>

    </div>
  );
};

export default TicketInquiry; 
