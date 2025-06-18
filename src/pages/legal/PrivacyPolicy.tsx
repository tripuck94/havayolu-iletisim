import { Header } from "@/components/Header";

import { Shield, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  const handleCall = () => {
    window.location.href = "tel:08502428117";
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <Header />
      <div className="container py-12 md:py-16 space-y-8 mb-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <Shield className="h-10 w-10 text-blue-600" />
            Kişisel Verilerin Korunması
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kişisel verilerinizin gizliliği bizim için çok önemlidir. Verilerinizi nasıl koruduğumuz hakkında bilgi alın.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <div className="prose max-w-none">
            <h2>Kişisel Verilerin Korunması Politikası</h2>
            <p>
              Bu politika, kişisel verilerinizin nasıl toplandığı, işlendiği ve korunduğu hakkında bilgi vermektedir.
            </p>

            <h3>Veri Toplama</h3>
            <p>
              Hizmetlerimizi kullanırken bazı kişisel bilgilerinizi toplarız. Bu bilgiler sadece hizmet kalitesini artırmak amacıyla kullanılır.
            </p>

            <h3>Veri Güvenliği</h3>
            <p>
              Tüm verileriniz SSL şifreleme ile korunur ve güvenli sunucularda saklanır.
            </p>

            <h3>İletişim</h3>
            <p>
              Kişisel verileriniz hakkında sorularınız varsa, bizimle iletişime geçebilirsiniz.
            </p>
          </div>
        </div>

        <div className="text-center bg-blue-600 text-white p-8 rounded-lg max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Sorularınız mı Var?</h3>
          <p className="mb-6">
            Kişisel verileriniz hakkında daha fazla bilgi almak için bizimle iletişime geçin.
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
          <Button onClick={handleCall} className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xl py-6">
            <Phone className="h-5 w-5 mr-2" />
            Hemen Ara
          </Button>
        </div>
      </div>

    </div>
  );
};

export default PrivacyPolicy; 
