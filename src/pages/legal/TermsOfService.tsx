import { Header } from "@/components/Header";

import { FileText, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const TermsOfService = () => {
  const handleCall = () => {
    window.location.href = "tel:08502428117";
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <Header />
      <div className="container py-12 md:py-16 space-y-8 mb-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <FileText className="h-10 w-10 text-green-600" />
            Kullanım Koşulları
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hizmetlerimizi kullanım koşulları ve şartlarımız hakkında bilgi alın.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <div className="prose max-w-none">
            <h2>Kullanım Koşulları</h2>
            <p>
              Bu sayfa, web sitemizi ve hizmetlerimizi kullanırken uymanız gereken koşulları açıklamaktadır.
            </p>

            <h3>Hizmet Kullanımı</h3>
            <p>
              Hizmetlerimizi yasal amaçlar için kullanmanız gerekmektedir. Sistem güvenliğini tehlikeye atacak işlemler yasaktır.
            </p>

            <h3>Sorumluluk</h3>
            <p>
              Verdiğiniz bilgilerin doğruluğundan siz sorumlusunuz. Yanlış bilgi verilmesi durumunda sorumluluk kabul etmeyiz.
            </p>

            <h3>Değişiklikler</h3>
            <p>
              Bu koşulları zaman zaman güncelleyebiliriz. Güncellemeler web sitemizde yayınlanacaktır.
            </p>
          </div>
        </div>

        <div className="text-center bg-green-600 text-white p-8 rounded-lg max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Daha Fazla Bilgi</h3>
          <p className="mb-6">
            Kullanım koşulları hakkında detaylı bilgi almak için bizimle iletişime geçin.
          </p>
          <Button 
            onClick={handleCall} 
            variant="secondary"
            className="gap-2"
          >
            <Phone className="h-4 w-4" />
            Hemen Ara
          </Button>
        </div>

        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg">
          <Button onClick={handleCall} className="w-full bg-green-600 hover:bg-green-700 text-white text-xl py-6">
            <Phone className="h-5 w-5 mr-2" />
            Hemen Ara
          </Button>
        </div>
      </div>

    </div>
  );
};

export default TermsOfService; 
