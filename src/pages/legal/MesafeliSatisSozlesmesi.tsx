import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { ShoppingCart, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const MesafeliSatisSozlesmesi = () => {
  const handleCall = () => {
    window.location.href = "tel:08502428117";
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <Header />
      <div className="container py-12 md:py-16 space-y-8 mb-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <ShoppingCart className="h-10 w-10 text-green-600" />
            Mesafeli Satış Sözleşmesi
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            6502 sayılı Tüketicinin Korunması Hakkında Kanun kapsamında mesafeli satış sözleşmesi bilgileri.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-6xl mx-auto">
          <div className="prose max-w-none space-y-6 text-sm leading-relaxed">
            
            <div className="mb-8">
              <p className="text-gray-600 mb-4">
                Bu mesafeli satış sözleşmesi, 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği uyarınca düzenlenmiştir.
              </p>
            </div>

            <h2 className="text-xl font-bold text-gray-800 border-b pb-2">1. Satıcı Bilgileri</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p><strong>Şirket Unvanı:</strong> FLYEVA TURİZM TİCARET LİMİTED ŞİRKETİ</p>
              <p><strong>Adres:</strong> İDEALTEPE MAH. TURGUT ÖZAL BUL. İDEAL SİTESİ NO: 127C İÇ KAPI NO: 5 MALTEPE / İSTANBUL</p>
              <p><strong>Telefon:</strong> 0850 242 81 17</p>
              <p><strong>E-posta:</strong> info@flyevaturizm.com</p>
              <p><strong>TURSAB Belge No:</strong> A-10782</p>
            </div>

            <h2 className="text-xl font-bold text-gray-800 border-b pb-2">2. Mal/Hizmet Bilgileri</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">✈️ Havayolu Bilet Satışı</h4>
                <p className="text-gray-700">Yurt içi ve yurt dışı uçak bileti rezervasyonu ve satışı hizmetleri. THY, Pegasus, SunExpress, AJet ve diğer havayolları ile işbirliği.</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">🔄 Değişiklik İşlemleri</h4>
                <p className="text-gray-700">Bilet değişikliği, tarih değişikliği, rota değişikliği ve yolcu bilgileri güncelleme hizmetleri.</p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">🎯 Ek Hizmetler</h4>
                <p className="text-gray-700">Bagaj ekleme, koltuk seçimi, özel yemek talepleri, sınıf yükseltme ve havalimanı transfer hizmetleri.</p>
              </div>
            </div>

            <h2 className="text-xl font-bold text-gray-800 border-b pb-2">3. Ödeme Bilgileri</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">💳 Kabul Edilen Ödeme Yöntemleri</h4>
                <ul className="list-disc ml-4 space-y-1">
                  <li>Kredi Kartı (Visa, MasterCard, American Express)</li>
                  <li>Banka Kartı (Debit Card)</li>
                  <li>Havale/EFT (Banka transferi)</li>
                  <li>Taksitli ödeme seçenekleri</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🔒 Güvenli Ödeme</h4>
                <ul className="list-disc ml-4 space-y-1">
                  <li>256-bit SSL şifreleme teknolojisi</li>
                  <li>3D Secure doğrulama sistemi</li>
                  <li>PCI DSS uyumlu güvenlik standardı</li>
                  <li>Fraud koruma ve risk analizi</li>
                  <li>Tokenizasyon ile kart bilgisi koruması</li>
                </ul>
              </div>
            </div>

            <h2 className="text-xl font-bold text-gray-800 border-b pb-2">4. Cayma Hakkı</h2>
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
              <h4 className="font-semibold text-yellow-800 mb-3">⚠️ Önemli Yasal Bilgilendirme</h4>
              <p className="text-gray-700 mb-4">
                6502 sayılı Tüketicinin Korunması Hakkında Kanun'un 15. maddesinin (h) fıkrası gereğince, 
                <strong className="text-red-600"> konaklama, eşya taşımacılığı, araç kiralama, yiyecek-içecek temini ve eğlence veya dinlenme amacıyla yapılan boş zamanın değerlendirilmesine ilişkin sözleşmeler</strong> 
                cayma hakkı kapsamı dışında tutulmuştur.
              </p>
              <p className="text-gray-700 mb-4">
                Bu nedenle, <strong className="text-red-600">uçak bileti satışlarında 14 günlük cayma hakkı bulunmamaktadır</strong>. 
              </p>
              <p className="text-gray-700">
                Ancak havayolu şirketlerinin kendi iptal ve değişiklik koşulları geçerlidir. Her havayolu için farklı kurallar uygulanabilir.
              </p>
            </div>

            <h2 className="text-xl font-bold text-gray-800 border-b pb-2">5. İptal ve İade Koşulları</h2>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">❌ İptal Koşulları</h4>
                <ul className="list-disc ml-4 space-y-1 text-gray-700">
                  <li>İptal işlemleri tamamen havayolu şirketlerinin kendi kurallarına tabidir</li>
                  <li>Flex (esnek) biletlerde ücretsiz iptal süreleri vardır</li>
                  <li>Eco (ekonomi) biletlerde genellikle iptal ücreti uygulanır</li>
                  <li>Promosyon biletlerinde iptal hakkı bulunmayabilir</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">💰 İade Süreci</h4>
                <ul className="list-disc ml-4 space-y-1 text-gray-700">
                  <li>İade işlemleri havayolu şirketinin onayından sonra başlatılır</li>
                  <li>İade süreci 7-21 iş günü arasında tamamlanır</li>
                  <li>İade tutarı havayolu kurallarına ve bilet tipine göre belirlenir</li>
                  <li>İade ücreti varsa bilet fiyatından düşülerek ödeme yapılır</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">🔄 Değişiklik Koşulları</h4>
                <ul className="list-disc ml-4 space-y-1 text-gray-700">
                  <li>Tarih değişikliği havayolu kurallarına göre ücretlidir</li>
                  <li>Rota değişikliği için fark ücreti alınabilir</li>
                  <li>Yolcu ismi değişikliği çoğu havayolunda mümkün değildir</li>
                  <li>Same-day değişiklik seçenekleri mevcuttur</li>
                </ul>
              </div>
            </div>

            <h2 className="text-xl font-bold text-gray-800 border-b pb-2">6. Teslimat ve E-Bilet</h2>
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-3">📧 E-Bilet Teslimat Süreci</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold mb-2">⚡ Anında Teslimat</h5>
                  <ul className="list-disc ml-4 space-y-1 text-sm text-gray-700">
                    <li>Ödeme onayından sonra 2-5 dakika içinde</li>
                    <li>Kayıtlı e-posta adresine gönderim</li>
                    <li>SMS ile bilgilendirme</li>
                    <li>Check-in linki dahil</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">📱 Kullanım Bilgileri</h5>
                  <ul className="list-disc ml-4 space-y-1 text-sm text-gray-700">
                    <li>E-bilet check-in için geçerlidir</li>
                    <li>Havalimanı giriş ve güvenlik kontrolleri</li>
                    <li>Yazdırma zorunluluğu yoktur</li>
                    <li>Mobil cihazdan gösterilebilir</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-bold text-gray-800 border-b pb-2">7. Müşteri Hakları ve Sorumluluklar</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">✅ Müşteri Hakları</h4>
                <ul className="list-disc ml-4 space-y-1 text-sm text-gray-700">
                  <li>Doğru ve eksiksiz bilgi alma hakkı</li>
                  <li>Güvenli ödeme sistemi kullanım hakkı</li>
                  <li>Kişisel verilerin korunması hakkı</li>
                  <li>Şikayet ve öneri bildirim hakkı</li>
                  <li>Tüketici mahkemelerine başvuru hakkı</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">📋 Müşteri Sorumlulukları</h4>
                <ul className="list-disc ml-4 space-y-1 text-sm text-gray-700">
                  <li>Doğru kişisel bilgi verme zorunluluğu</li>
                  <li>Pasaport ve vize gerekliliklerini kontrol etme</li>
                  <li>Check-in ve boarding sürelerine uyma</li>
                  <li>Havayolu kurallarını okuma ve uygulama</li>
                  <li>Ödeme bilgilerinin güvenliğini sağlama</li>
                </ul>
              </div>
            </div>

            <h2 className="text-xl font-bold text-gray-800 border-b pb-2">8. Müşteri Hizmetleri</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-3">📞 İletişim Kanalları</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-blue-600" />
                    <span><strong>Telefon:</strong> 0850 242 81 17</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span><strong>E-posta:</strong> info@flyevaturizm.com</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">⏰ Hizmet Saatleri ve Yanıt Süreleri</h4>
                <div className="space-y-2">
                  <div className="bg-gray-50 p-2 rounded">
                    <span className="font-medium">Telefon Desteği:</span> 7/24 Kesintisiz
                  </div>
                  <div className="bg-gray-50 p-2 rounded">
                    <span className="font-medium">E-posta Yanıtı:</span> 2 saat içinde
                  </div>
                  <div className="bg-gray-50 p-2 rounded">
                    <span className="font-medium">Acil Durum:</span> Anında müdahale
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-bold text-gray-800 border-b pb-2">9. Uygulanacak Hukuk ve Yargı</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-3">⚖️ Hukuki Düzenlemeler</h4>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Ana Mevzuat:</strong> Bu sözleşme 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve 
                  Mesafeli Sözleşmeler Yönetmeliği hükümlerine tabidir.
                </p>
                <p>
                  <strong>Uyuşmazlık Çözümü:</strong> Bu sözleşmeden doğabilecek uyuşmazlıklarda Türkiye Cumhuriyeti 
                  yasaları uygulanır. Uyuşmazlıkların çözümünde İstanbul mahkemeleri ve icra müdürlükleri yetkilidir.
                </p>
                <p>
                  <strong>Tüketici Hakları:</strong> Tüketiciler uyuşmazlıklarını Tüketici Sorunları Hakem Heyetleri 
                  ve Tüketici Mahkemelerine taşıyabilirler.
                </p>
              </div>
            </div>

            <h2 className="text-xl font-bold text-gray-800 border-b pb-2">10. Sözleşme Bilgileri</h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">📅 Yürürlük ve Güncellemeler</h4>
                  <p className="text-gray-700">
                    Bu mesafeli satış sözleşmesi sipariş onayı ile birlikte yürürlüğe girer ve taraflar arasında 
                    hukuki bağlayıcılık oluşturur.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">🔄 Sözleşme Değişiklikleri</h4>
                  <p className="text-gray-700">
                    Şirketimiz bu sözleşmeyi gerekli gördüğünde güncelleyebilir. Önemli değişiklikler 
                    e-posta veya SMS ile müşterilere bildirilir.
                  </p>
                </div>
                
                <div className="border-t pt-3">
                  <p className="text-sm text-gray-600">
                    <strong>Sözleşme Tarihi:</strong> 22 Eylül 2025<br/>
                    <strong>Son Güncelleme:</strong> 22 Eylül 2025<br/>
                    <strong>Versiyon:</strong> v1.0
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="text-center bg-green-600 text-white p-8 rounded-lg max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Sözleşme Hakkında Sorularınız mı Var?</h3>
          <p className="mb-6">
            Mesafeli satış sözleşmesi ve bilet işlemleri hakkında detaylı bilgi almak için bizimle iletişime geçin.
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
      
      <Footer />
    </div>
  );
};

export default MesafeliSatisSozlesmesi;
