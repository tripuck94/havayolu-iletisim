import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { RefreshCw, Phone, AlertTriangle, Clock, CreditCard, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const IptalIadeSartlari = () => {
  const handleCall = () => {
    window.location.href = "tel:08502428117";
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <Header />
      <div className="container py-12 md:py-16 space-y-8 mb-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <RefreshCw className="h-10 w-10 text-red-600" />
            İptal İade Şartları
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Bilet iptal ve iade işlemleri hakkında detaylı bilgi ve şartlar. Hangi durumlarda iptal/iade yapılabileceğini öğrenin.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-6xl mx-auto">
          <div className="prose max-w-none space-y-8 text-sm leading-relaxed">
            
            <div className="mb-8">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="h-6 w-6 text-yellow-600" />
                  <h3 className="text-lg font-semibold text-yellow-800">Önemli Uyarı</h3>
                </div>
                <p className="text-gray-700">
                  İptal ve iade işlemleri tamamen <strong>havayolu şirketlerinin kendi kurallarına</strong> tabidir. 
                  Her havayolu için farklı şartlar geçerlidir. FLYEVA Turizm, aracı bir firma olarak havayolu 
                  kurallarını uygular ve bu konuda takdir yetkisi yoktur.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">🚫 Genel İptal Koşulları</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-red-800 mb-4">❌ İptal Edilemeyen Biletler</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Promosyon Biletleri:</strong> Özel kampanya ile alınan biletler</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Non-Refundable Biletler:</strong> İade edilemez olarak işaretli biletler</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Kullanılmış Biletler:</strong> Check-in yapılmış veya uçuşa geç kalınan biletler</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Süre Aşımı:</strong> İptal süresi geçmiş biletler</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-4">✅ İptal Edilebilen Biletler</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Flex Biletler:</strong> Esnek bilet türleri</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Refundable Biletler:</strong> İade edilebilir biletler</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>24 Saat Kuralı:</strong> Satın alma sonrası 24 saat içindeki biletler (havayoluna göre)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>İsteğe Bağlı İptal:</strong> İptal sigortası satın alınmış biletler</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">⏰ İptal Süreleri ve Ücretleri</h2>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">🕐 Havayolu Bazında İptal Süreleri</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-3">Türk Havayolları</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between p-2 bg-white rounded">
                        <span>Turkish Airlines</span>
                        <span className="text-blue-600 font-medium">24 saat önce</span>
                      </div>
                      <div className="flex justify-between p-2 bg-white rounded">
                        <span>Pegasus Airlines</span>
                        <span className="text-blue-600 font-medium">4 saat önce</span>
                      </div>
                      <div className="flex justify-between p-2 bg-white rounded">
                        <span>SunExpress</span>
                        <span className="text-blue-600 font-medium">24 saat önce</span>
                      </div>
                      <div className="flex justify-between p-2 bg-white rounded">
                        <span>AJet</span>
                        <span className="text-blue-600 font-medium">24 saat önce</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Uluslararası Havayolları</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between p-2 bg-white rounded">
                        <span>Qatar Airways</span>
                        <span className="text-blue-600 font-medium">24 saat önce</span>
                      </div>
                      <div className="flex justify-between p-2 bg-white rounded">
                        <span>Emirates</span>
                        <span className="text-blue-600 font-medium">24 saat önce</span>
                      </div>
                      <div className="flex justify-between p-2 bg-white rounded">
                        <span>AZAL</span>
                        <span className="text-blue-600 font-medium">24 saat önce</span>
                      </div>
                      <div className="flex justify-between p-2 bg-white rounded">
                        <span>Aeroflot</span>
                        <span className="text-blue-600 font-medium">24 saat önce</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">💳 İade İşlemleri</h2>
            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-4">💰 İade Süreci ve Süreleri</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="h-5 w-5 text-green-600" />
                      <h4 className="font-semibold">İade Süresi</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Kredi Kartı: 7-14 iş günü</li>
                      <li>• Banka Havalesi: 14-21 iş günü</li>
                      <li>• Nakit: Anında (ofiste)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <CreditCard className="h-5 w-5 text-green-600" />
                      <h4 className="font-semibold">İade Yöntemi</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Ödeme yapılan karta iade</li>
                      <li>• Banka hesabına transfer</li>
                      <li>• Nakit iade (şubede)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <FileText className="h-5 w-5 text-green-600" />
                      <h4 className="font-semibold">Gerekli Belgeler</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• E-bilet kopyası</li>
                      <li>• Kimlik fotokopisi</li>
                      <li>• İptal formu (imzalı)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-4">🚫 İade Edilemeyen Durumlar</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Check-in yapılmış biletler</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Uçuşa geç kalınan (No-show) biletler</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Kısmen kullanılmış gidiş-dönüş biletler</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Non-refundable promosyon biletleri</span>
                    </li>
                  </ul>
                  
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Grup biletlerinin bir kısmı</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>İptal süresi geçmiş biletler</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Award/mil ile alınmış biletler</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Üçüncü taraf ödeme ile alınan biletler</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">🔄 İptal İşlem Süreci</h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">İletişim</h4>
                  <p className="text-sm text-gray-600">0850 242 81 17 numaralı telefonu arayın veya e-posta gönderin</p>
                </div>
                
                <div className="text-center">
                  <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">Bilgi Kontrolü</h4>
                  <p className="text-sm text-gray-600">Biletinizi kontrol edip iptal koşullarını size bildiriyoruz</p>
                </div>
                
                <div className="text-center">
                  <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">Onay ve İşlem</h4>
                  <p className="text-sm text-gray-600">İptal şartlarını onayladığınızda işlemi başlatıyoruz</p>
                </div>
                
                <div className="text-center">
                  <div className="h-16 w-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-orange-600">4</span>
                  </div>
                  <h4 className="font-semibold mb-2">İade</h4>
                  <p className="text-sm text-gray-600">Havayolu onayından sonra iade süreci başlar</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">⚠️ Özel Durumlar</h2>
            <div className="space-y-4">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-800 mb-4">🏥 Sağlık Sorunu İptalleri</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Gerekli Belgeler:</strong></p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Doktor raporu (hastane mührü ve imzası ile)</li>
                    <li>Sağlık kurulu raporu (ciddi rahatsızlıklarda)</li>
                    <li>Ölüm belgesi (vefat durumunda)</li>
                    <li>Yakınlık belgesi (aile fertleri için)</li>
                  </ul>
                  <p className="text-sm mt-3 bg-purple-100 p-3 rounded">
                    <strong>Not:</strong> Sağlık sorunu iptalleri havayolu onayına tabidir ve %100 iade garantisi yoktur.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-800 mb-4">🛂 Vize/Pasaport Sorunları</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>İptal Edilebilen Durumlar:</strong></p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Vize başvurusunun reddedilmesi</li>
                    <li>Pasaport gecikmesi (resmi belge ile)</li>
                    <li>Konsolosluk randevu iptali</li>
                  </ul>
                  <p className="text-sm mt-3 bg-yellow-100 p-3 rounded">
                    <strong>Önemli:</strong> Bu durumlar için iade işlemi havayolu ve bilet türüne göre değişir.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">✈️ Havayolu İptali</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Havayolu tarafından iptal edilen uçuşlarda:</strong></p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>%100 ücretsiz iade veya yeniden rezervasyon hakkı</li>
                    <li>Alternatif uçuş seçenekleri</li>
                    <li>Konaklama ve yemek desteği (gerekli durumlarda)</li>
                    <li>Tazminat hakkı (AB 261/2004 Yönetmeliği kapsamında)</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">📞 İptal/İade İçin İletişim</h2>
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">🕐 7/24 İptal Hattı</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5" />
                      <span><strong>Telefon:</strong> 0850 242 81 17</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span><strong>E-posta:</strong> iptal@flyevaturizm.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5" />
                      <span><strong>Yanıt Süresi:</strong> En geç 2 saat</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">📋 Başvuru İçin Gerekli Bilgiler</h3>
                  <ul className="space-y-2 text-red-100">
                    <li>• PNR (Rezervasyon) kodu</li>
                    <li>• Yolcu adı soyadı</li>
                    <li>• Uçuş tarihi ve numarası</li>
                    <li>• İptal sebebi</li>
                    <li>• İletişim bilgileri</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="text-center bg-red-600 text-white p-8 rounded-lg max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">İptal/İade Desteği</h3>
          <p className="mb-6">
            Biletinizin iptal ve iade koşulları hakkında detaylı bilgi almak için uzmanlarımızla konuşun.
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
          <Button onClick={handleCall} className="w-full bg-red-600 hover:bg-red-700 text-white text-xl py-6">
            <Phone className="h-5 w-5 mr-2" />
            Hemen Ara
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default IptalIadeSartlari;
