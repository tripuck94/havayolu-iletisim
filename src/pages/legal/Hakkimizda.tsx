import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { FileText, Phone, Target, Users, Award, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hakkimizda = () => {
  const handleCall = () => {
    window.location.href = "tel:08502428117";
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <Header />
      <div className="container py-12 md:py-16 space-y-8 mb-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <FileText className="h-10 w-10 text-purple-600" />
            Hakkımızda
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            FLYEVA Turizm olarak kim olduğumuz, misyonumuz ve vizyonumuz hakkında bilgi alın.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-6xl mx-auto">
          <div className="prose max-w-none space-y-8 text-sm leading-relaxed">
            
            <div className="mb-8">
              <p className="text-gray-600 mb-4 text-lg">
                <strong>FLYEVA TURİZM TİCARET LİMİTED ŞİRKETİ</strong> olarak, havayolu sektöründe güvenilir ve kaliteli hizmet sunma amacıyla kurulmuş bir firmayız. Müşteri memnuniyetini en üst seviyede tutarak, seyahat deneyiminizi mükemmelleştirmek için buradayız.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">🏢 Şirket Kimliğimiz</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Şirket Bilgileri</h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium text-gray-600">Şirket Unvanı:</span>
                    <p className="text-gray-800">FLYEVA TURİZM TİCARET LİMİTED ŞİRKETİ</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Kuruluş Yılı:</span>
                    <p className="text-gray-800">2024</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">TURSAB Belge No:</span>
                    <p className="text-gray-800">A-10782</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Merkez:</span>
                    <p className="text-gray-800">İstanbul, Türkiye</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">Faaliyet Alanımız</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <Plane className="h-4 w-4 text-purple-600" />
                    Havayolu bilet satış ve rezervasyonu
                  </li>
                  <li className="flex items-center gap-2">
                    <Plane className="h-4 w-4 text-purple-600" />
                    Uçuş değişikliği ve iptal işlemleri
                  </li>
                  <li className="flex items-center gap-2">
                    <Plane className="h-4 w-4 text-purple-600" />
                    Ek hizmetler (bagaj, koltuk, yemek)
                  </li>
                  <li className="flex items-center gap-2">
                    <Plane className="h-4 w-4 text-purple-600" />
                    7/24 müşteri destek hizmetleri
                  </li>
                  <li className="flex items-center gap-2">
                    <Plane className="h-4 w-4 text-purple-600" />
                    Özel grup rezervasyonları
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">🎯 Misyonumuz</h2>
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <Target className="h-8 w-8 text-blue-200 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-4">Güvenilir Seyahat Deneyimi</h3>
                  <p className="text-blue-100 mb-4">
                    Havayolu sektöründe müşterilerimize en güvenilir, hızlı ve ekonomik çözümleri sunmak, 
                    seyahat deneyimlerini mükemmelleştirmek ve her adımda yanlarında olmaktır.
                  </p>
                  <p className="text-blue-100">
                    Teknoloji ve insan odaklı yaklaşımımızla, seyahat etmeyi daha kolay, güvenli ve keyifli 
                    hale getirmeyi hedefliyoruz.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">🔮 Vizyonumuz</h2>
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <Award className="h-8 w-8 text-purple-200 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-4">Sektörde Lider Olmak</h3>
                  <p className="text-purple-100 mb-4">
                    Türkiye'nin en güvenilir ve tercih edilen havayolu hizmet sağlayıcısı olmak, 
                    müşteri memnuniyetinde sektör standardını belirlemek.
                  </p>
                  <p className="text-purple-100">
                    Yenilikçi teknolojiler ve sürekli gelişen hizmet kalitemizle, havayolu sektöründe 
                    öncü bir rol oynamaya devam etmektir.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">💼 Hizmet Anlayışımız</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-green-800 mb-3">Müşteri Odaklılık</h4>
                <p className="text-gray-700 text-sm">
                  Her müşterimizin ihtiyaçlarını anlamak ve kişiselleştirilmiş çözümler sunmak bizim 
                  önceliğimizdir. Müşteri memnuniyeti her şeyden önce gelir.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-blue-800 mb-3">Güvenilirlik</h4>
                <p className="text-gray-700 text-sm">
                  Şeffaf fiyatlandırma, doğru bilgilendirme ve zamanında hizmet sunumu ile müşterilerimizin 
                  güvenini kazanmış ve koruyor olmaktan gurur duyuyoruz.
                </p>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg text-center">
                <div className="h-16 w-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-orange-800 mb-3">Hızlı Çözüm</h4>
                <p className="text-gray-700 text-sm">
                  Anında rezervasyon onayı, hızlı değişiklik işlemleri ve 7/24 destek hattımızla 
                  ihtiyaçlarınıza en kısa sürede yanıt veriyoruz.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">✈️ Partnerlerimiz</h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-center">Anlaşmalı Havayolları</h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-red-600 mb-2">Turkish Airlines</h4>
                  <p className="text-xs text-gray-600">Bayrak taşıyıcı havayolu</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-pink-600 mb-2">Pegasus Airlines</h4>
                  <p className="text-xs text-gray-600">Düşük maliyetli havayolu</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-yellow-600 mb-2">SunExpress</h4>
                  <p className="text-xs text-gray-600">Güney rotaları uzmanı</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-green-600 mb-2">AJet</h4>
                  <p className="text-xs text-gray-600">Anadolu'ya uçuş</p>
                </div>
              </div>
              
              <div className="mt-6 grid md:grid-cols-3 gap-4 text-center">
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="font-medium text-blue-600">AZAL</h4>
                </div>
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="font-medium text-purple-600">Qatar Airways</h4>
                </div>
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="font-medium text-red-600">Emirates</h4>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">📊 Neden Bizi Tercih Etmelisiniz?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">✅ Avantajlarımız</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium">En Uygun Fiyat Garantisi</span>
                      <p className="text-sm text-gray-600">Piyasadaki en iyi fiyatları bulup size sunuyoruz</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium">Anında Rezervasyon Onayı</span>
                      <p className="text-sm text-gray-600">Ödeme sonrası 2-5 dakika içinde e-biletiniz hazır</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium">7/24 Canlı Destek</span>
                      <p className="text-sm text-gray-600">Gece gündüz arayabilirsiniz, hızla yanıt veriyoruz</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium">Güvenli Ödeme Sistemi</span>
                      <p className="text-sm text-gray-600">SSL şifreleme ve 3D Secure ile korumalı işlemler</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium">Kolay Değişiklik İşlemleri</span>
                      <p className="text-sm text-gray-600">Biletinizi kolayca değiştirebilir, yeni seçenekler bulabilirsiniz</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-4">📈 İstatistiklerimiz</h4>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Mutlu Müşteri</span>
                      <span className="text-2xl font-bold text-blue-600">50,000+</span>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Partner Havayolu</span>
                      <span className="text-2xl font-bold text-green-600">15+</span>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Tamamlanan İşlem</span>
                      <span className="text-2xl font-bold text-purple-600">100,000+</span>
                    </div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Müşteri Memnuniyeti</span>
                      <span className="text-2xl font-bold text-orange-600">%99.8</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">🏢 İletişim Bilgilerimiz</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">📍 Merkez Ofis</h4>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Adres:</strong> İDEALTEPE MAH. TURGUT ÖZAL BUL. İDEAL SİTESİ NO: 127C İÇ KAPI NO: 5 MALTEPE / İSTANBUL</p>
                    <p><strong>Posta Kodu:</strong> 34844</p>
                    <p><strong>Şehir:</strong> İstanbul, Türkiye</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">📞 İletişim Kanalları</h4>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Telefon:</strong> 0850 242 81 17 (7/24)</p>
                    <p><strong>E-posta:</strong> info@flyevaturizm.com</p>
                    <p><strong>Website:</strong> havayoluiletisim.com</p>
                    <p><strong>Yanıt Süresi:</strong> Ortalama 5 dakika</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-semibold mb-4">💙 FLYEVA Ailesi Olarak</h3>
              <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
                Sizlere en iyi hizmeti sunabilmek için sürekli kendimizi geliştiriyor, 
                teknolojiye yatırım yapıyor ve ekibimizi güçlendiriyoruz. 
                Güveniniz bizim en büyük motivasyonumuz.
              </p>
              <p className="text-blue-100">
                <strong>Seyahatinizi bizimle planlayın, farkı yaşayın!</strong>
              </p>
            </div>

          </div>
        </div>

        <div className="text-center bg-purple-600 text-white p-8 rounded-lg max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Hakkımızda Daha Fazla Bilgi</h3>
          <p className="mb-6">
            Şirketimiz ve hizmetlerimiz hakkında detaylı bilgi almak için bizimle iletişime geçin.
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
          <Button onClick={handleCall} className="w-full bg-purple-600 hover:bg-purple-700 text-white text-xl py-6">
            <Phone className="h-5 w-5 mr-2" />
            Hemen Ara
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Hakkimizda;
