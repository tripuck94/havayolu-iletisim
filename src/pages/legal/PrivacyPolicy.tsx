import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-6xl mx-auto">
          <div className="prose max-w-none space-y-6 text-sm leading-relaxed">
            
            <div className="mb-8">
              <p className="text-gray-600 mb-4">
                FLYEVA TURİZM TİCARET LİMİTED ŞİRKETİ olarak, kişisel verilerinizin güvenliği bizim için önceliklidir. 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında sorumluluklarımızı yerine getiriyoruz.
              </p>
            </div>

            <h2 className="text-xl font-bold text-gray-800 border-b pb-2">1. Veri Sorumlusu</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p><strong>Şirket Unvanı:</strong> FLYEVA TURİZM TİCARET LİMİTED ŞİRKETİ</p>
              <p><strong>Adres:</strong> İDEALTEPE MAH. TURGUT ÖZAL BUL. İDEAL SİTESİ NO: 127C İÇ KAPI NO: 5 MALTEPE / İSTANBUL</p>
              <p><strong>Telefon:</strong> 0850 242 81 17</p>
              <p><strong>E-posta:</strong> info@flyevaturizm.com</p>
            </div>

            <h2 className="text-xl font-bold text-gray-800 border-b pb-2">2. Hangi Kişisel Veriler İşlenmektedir?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">📋 Kimlik Bilgileri</h4>
                <ul className="list-disc ml-6 space-y-1 text-gray-700">
                  <li>Ad, soyad</li>
                  <li>T.C. Kimlik numarası</li>
                  <li>Doğum tarihi</li>
                  <li>Cinsiyet</li>
                  <li>Pasaport bilgileri</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">📞 İletişim Bilgileri</h4>
                <ul className="list-disc ml-6 space-y-1 text-gray-700">
                  <li>Telefon numarası</li>
                  <li>E-posta adresi</li>
                  <li>Adres bilgileri</li>
                  <li>Acil durum iletişim bilgileri</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">💳 Finansal Bilgiler</h4>
                <ul className="list-disc ml-6 space-y-1 text-gray-700">
                  <li>Kredi kartı bilgileri</li>
                  <li>Ödeme geçmişi</li>
                  <li>Fatura adresi</li>
                  <li>İade bilgileri</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">✈️ Seyahat Bilgileri</h4>
                <ul className="list-disc ml-6 space-y-1 text-gray-700">
                  <li>Rezervasyon detayları</li>
                  <li>Uçuş tercihleri</li>
                  <li>Özel hizmet talepleri</li>
                  <li>Seyahat geçmişi</li>
                </ul>
              </div>
            </div>

            <h2 className="text-xl font-bold text-gray-800 border-b pb-2">3. Kişisel Verilerin İşlenme Amaçları</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">🎫 Hizmet Sunumu</h4>
                <p className="text-gray-700">Uçak bileti rezervasyonu, satışı, değişikliği ve iptali işlemlerinin gerçekleştirilmesi.</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">📋 Yasal Yükümlülükler</h4>
                <p className="text-gray-700">Turizm ve havacılık mevzuatından kaynaklanan yasal yükümlülüklerin yerine getirilmesi.</p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">🛡️ Güvenlik</h4>
                <p className="text-gray-700">Sistemlerimizin güvenliğinin sağlanması ve dolandırıcılık faaliyetlerinin önlenmesi.</p>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">📊 Müşteri Deneyimi</h4>
                <p className="text-gray-700">Hizmet kalitesinin iyileştirilmesi ve kişiselleştirilmiş hizmet sunumu.</p>
              </div>
            </div>

            <h2 className="text-xl font-bold text-gray-800 border-b pb-2">4. Veri Sahiplerinin Hakları</h2>
            <p className="mb-4">KVKK Kanunu'nun 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">📋 Bilgi Edinme Hakları</h4>
                <ul className="list-disc ml-4 space-y-1 text-sm">
                  <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                  <li>İşlenme amacını öğrenme</li>
                  <li>Üçüncü kişilere aktarım bilgisi</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🔧 Müdahale Hakları</h4>
                <ul className="list-disc ml-4 space-y-1 text-sm">
                  <li>Düzeltme talep etme</li>
                  <li>Silme talep etme</li>
                  <li>İşlemeyi durdurma</li>
                  <li>Zararın giderilmesini talep etme</li>
                </ul>
              </div>
            </div>

            <h2 className="text-xl font-bold text-gray-800 border-b pb-2">5. Başvuru Yöntemleri</h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="mb-4">KVKK haklarınızı kullanmak için aşağıdaki yöntemlerle başvurabilirsiniz:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">📧 E-posta</h4>
                  <p className="text-sm">info@flyevaturizm.com</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">📞 Telefon</h4>
                  <p className="text-sm">0850 242 81 17</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">📍 Fiziksel Başvuru</h4>
                  <p className="text-sm">İDEALTEPE MAH. TURGUT ÖZAL BUL. İDEAL SİTESİ NO: 127C İÇ KAPI NO: 5 MALTEPE / İSTANBUL</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">⏱️ Yanıt Süresi</h4>
                  <p className="text-sm">En geç 30 gün içinde</p>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-bold text-gray-800 border-b pb-2">6. Veri Güvenliği</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center bg-gray-50 p-4 rounded-lg">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">SSL Şifreleme</h4>
                <p className="text-sm text-gray-600">256-bit SSL sertifikası ile end-to-end şifreleme</p>
              </div>
              
              <div className="text-center bg-gray-50 p-4 rounded-lg">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Güvenli Sunucular</h4>
                <p className="text-sm text-gray-600">ISO 27001 sertifikalı veri merkezleri</p>
              </div>
              
              <div className="text-center bg-gray-50 p-4 rounded-lg">
                <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Erişim Kontrolü</h4>
                <p className="text-sm text-gray-600">Çok faktörlü kimlik doğrulama sistemi</p>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">📅 Son Güncelleme</h4>
              <p className="text-gray-700">Bu politika gerekli görüldüğünde güncellenebilir. Önemli değişiklikler e-posta veya SMS ile bildirilecektir.</p>
              <p className="text-sm text-gray-600 mt-2"><strong>Son Güncelleme:</strong> 22 Eylül 2025</p>
            </div>

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

      <Footer />
    </div>
  );
};

export default PrivacyPolicy; 
