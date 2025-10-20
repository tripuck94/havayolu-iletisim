import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield, Lock, Eye, UserCheck, AlertTriangle, CheckCircle, Key, Globe } from "lucide-react";

const GizlilikGuvenlik = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <Header />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Shield className="h-12 w-12" />
            <div>
              <h1 className="text-3xl font-bold">Gizlilik ve Güvenlik</h1>
              <p className="text-blue-100 mt-2">Verilerinizin güvenliği bizim önceliğimiz</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Güvenlik Önlemleri */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 flex items-center gap-2">
              <Lock className="h-6 w-6 text-blue-600" />
              🔒 Güvenlik Önlemlerimiz
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
                  <Key className="h-5 w-5" />
                  SSL Şifreleme
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>256-bit SSL sertifikası ile veri şifreleme</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Tüm veri transferleri güvenli kanallardan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>HTTPS protokolü zorunlu kullanım</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Veri Koruması
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Güvenli sunucularda veri saklama</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Düzenli güvenlik güncellemeleri</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Yetkisiz erişim koruması</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Gizlilik Politikası */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 flex items-center gap-2">
              <Eye className="h-6 w-6 text-green-600" />
              👁️ Gizlilik Politikamız
            </h2>
            <div className="bg-green-50 p-6 rounded-lg mt-6">
              <h3 className="text-lg font-semibold text-green-800 mb-4">🛡️ Veri Toplama ve Kullanım</h3>
              <div className="space-y-4 text-gray-700">
                <div className="bg-white p-4 rounded border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-800 mb-2">Topladığımız Bilgiler:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• <strong>Kişisel Bilgiler:</strong> Ad, soyad, telefon, e-posta</li>
                    <li>• <strong>Rezervasyon Bilgileri:</strong> Uçuş tercihleri, yolcu sayısı</li>
                    <li>• <strong>İletişim Geçmişi:</strong> Müşteri hizmetleri kayıtları</li>
                    <li>• <strong>Teknik Bilgiler:</strong> IP adresi, tarayıcı bilgileri (anonim)</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                  <h4 className="font-semibold text-blue-800 mb-2">Kullanım Amacı:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Havayolu rezervasyonlarınızı gerçekleştirmek</li>
                    <li>• Size en uygun uçak biletini bulmak</li>
                    <li>• Müşteri hizmetleri desteği sağlamak</li>
                    <li>• Yasal yükümlülükleri yerine getirmek</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Veri Paylaşımı */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 flex items-center gap-2">
              <UserCheck className="h-6 w-6 text-orange-600" />
              🤝 Veri Paylaşımı
            </h2>
            <div className="bg-orange-50 p-6 rounded-lg mt-6">
              <h3 className="text-lg font-semibold text-orange-800 mb-4">📋 Kiminle Paylaşıyoruz?</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded">
                  <h4 className="font-semibold text-orange-800 mb-2 flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    Havayolu Şirketleri
                  </h4>
                  <p className="text-sm text-gray-700">
                    Rezervasyon yapmak için sadece gerekli bilgilerinizi havayolu şirketleri ile paylaşırız.
                  </p>
                </div>

                <div className="bg-white p-4 rounded">
                  <h4 className="font-semibold text-orange-800 mb-2 flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    Güvenlik Şirketleri
                  </h4>
                  <p className="text-sm text-gray-700">
                    Web sitesi güvenliği için güvenilir teknoloji partnerleri ile sınırlı bilgi paylaşımı.
                  </p>
                </div>
              </div>

              <div className="bg-red-100 p-4 rounded-lg mt-4 border border-red-300">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-red-800">⚠️ Paylaşmadığımız Durumlar</h4>
                    <ul className="text-sm text-red-700 mt-2 space-y-1">
                      <li>• Verilerinizi hiçbir şekilde satmayız</li>
                      <li>• Pazarlama amaçlı üçüncü taraflarla paylaşmayız</li>
                      <li>• Rızanız olmadan reklam şirketlerine vermeyiz</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Haklarınız */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">⚖️ Haklarınız</h2>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <Eye className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-blue-800 mb-2">Görme Hakkı</h3>
                <p className="text-sm text-gray-700">Hangi verilerinizin tutulduğunu öğrenebilirsiniz</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg text-center">
                <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold text-green-800 mb-2">Düzeltme Hakkı</h3>
                <p className="text-sm text-gray-700">Yanlış bilgilerin düzeltilmesini isteyebilirsiniz</p>
              </div>

              <div className="bg-red-50 p-4 rounded-lg text-center">
                <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <h3 className="font-semibold text-red-800 mb-2">Silme Hakkı</h3>
                <p className="text-sm text-gray-700">Verilerinizin silinmesini talep edebilirsiniz</p>
              </div>
            </div>
          </section>

          {/* Güvenlik İpuçları */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">💡 Güvenlik İpuçları</h2>
            <div className="bg-yellow-50 p-6 rounded-lg mt-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-4">🔐 Kendinizi Nasıl Koruyabilirsiniz?</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Lock className="h-4 w-4 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-yellow-800">Güçlü Şifreler</h4>
                      <p className="text-sm text-gray-700">En az 8 karakter, harf ve rakam karışımı kullanın</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Shield className="h-4 w-4 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-yellow-800">Güvenli Ağlar</h4>
                      <p className="text-sm text-gray-700">Halka açık Wi-Fi'lerde önemli işlemler yapmayın</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Eye className="h-4 w-4 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-yellow-800">URL Kontrolü</h4>
                      <p className="text-sm text-gray-700">Daima "https://" ile başlayan siteleri kullanın</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-yellow-800">Şüpheli Bağlantılar</h4>
                      <p className="text-sm text-gray-700">E-posta ve SMS'lerdeki şüpheli linklere tıklamayın</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* İletişim */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">📞 Gizlilik ile İlgili Sorularınız</h2>
            <div className="bg-gray-100 p-6 rounded-lg mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">📧 Bizimle İletişime Geçin</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">TRIPUCK TURİZM LİMİTED ŞİRKETİ</h4>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">İletişim Bilgileri</h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>Telefon:</strong> 0850 308 98 40</p>
                    <p><strong>E-posta:</strong> info@havayoluiletisim.com</p>
                    <p><strong>Gizlilik:</strong> privacy@havayoluiletisim.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg mt-6 border border-blue-300">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-800">✅ Gizlilik Talepleriniz</h4>
                    <p className="text-sm text-blue-700 mt-1">
                      Verilerinizle ilgili her türlü taleplerinizi yukarıdaki iletişim bilgileri üzerinden 
                      7/24 iletebilirsiniz. En geç 30 gün içinde yanıt veriyoruz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Son Güncelleme */}
          <section className="text-center">
            <div className="bg-gray-50 p-4 rounded-lg border">
              <p className="text-sm text-gray-600">
                <strong>Son Güncelleme:</strong> 22 Eylül 2025
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Bu gizlilik ve güvenlik politikası düzenli olarak gözden geçirilir ve güncellenebilir.
              </p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GizlilikGuvenlik;
