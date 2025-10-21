import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { FileText, Phone, Target, Users, Award, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hakkimizda = () => {
  const handleCall = () => {
    window.location.href = "tel:08503089840";
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
            Kim olduğumuz, misyonumuz ve vizyonumuz hakkında bilgi alın.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-6xl mx-auto">
          <div className="prose max-w-none space-y-8 text-sm leading-relaxed">
            
            <div className="mb-8">
              <p className="text-gray-600 mb-4 text-lg">
                <strong>TRIPUCK TURİZM TİCARET LİMİTED ŞİRKETİ</strong> olarak, havayolu sektöründe metasearch (meta arama) platformu hizmeti sunuyoruz. Müşterilerimizin en uygun uçuş seçeneklerini bulmalarına yardımcı olan bir teknoloji platformuyuz.
              </p>
              <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-blue-800 font-semibold">
                  💡 İş Modelimiz: Metasearch (meta arama) platformuyuz. Havayollarının uçuşlarını topluca gösterip karşılaştırma imkanı sunuyoruz. Rezervasyon işlemleri için müşterilerimizi havayolları veya yetkili acenteleriyle buluşturuyoruz.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">💼 Yasal Bilgilerimiz</h2>
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <p className="text-sm"><span className="font-semibold text-gray-700">Şirket Unvanı:</span> TRIPUCK TURİZM TİCARET LİMİTED ŞİRKETİ</p>
                  <p className="text-sm"><span className="font-semibold text-gray-700">Vergi Dairesi:</span> Antalya Kurumlar</p>
                  <p className="text-sm"><span className="font-semibold text-gray-700">Vergi No:</span> 8591101691</p>
                  <p className="text-sm"><span className="font-semibold text-gray-700">Ticaret Sicil No:</span> 859110</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm"><span className="font-semibold text-gray-700">Mersis No:</span> 8591101691000017</p>
                  <p className="text-sm"><span className="font-semibold text-gray-700">NACE Kodu:</span> 639102 - Web Arama Portalı Faaliyetleri</p>
                  <p className="text-sm"><span className="font-semibold text-gray-700">Kuruluş:</span> 2019</p>
                  <p className="text-sm"><span className="font-semibold text-gray-700">Merkez:</span> Antalya, Türkiye</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-300">
                <p className="text-xs text-gray-600">
                  <span className="font-semibold">Adres:</span> Güzeloluk Mahallesi 1830 Sokak Özpınarlar Lavinya Evleri E Blok No: 175 İç Kapı No: 7, Muratpaşa/Antalya
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">❓ Neden TURSAB Belgesi Yok?</h2>
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <p className="text-gray-700 mb-4">
                <strong>Metasearch platformları için TURSAB belgesi yasal zorunluluk DEĞİLDİR.</strong> İşte nedenleri:
              </p>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold">1.</span>
                  <div>
                    <strong>Faaliyet Alanımız:</strong> NACE kodu 639102 - Web Arama Portalı Faaliyetleri. Bu, turizm işletme belgesi gerektirmeyen bir kategoridir.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold">2.</span>
                  <div>
                    <strong>Direkt Satış Yapmıyoruz:</strong> Bilet satışı veya ödeme toplamıyoruz. Sadece karşılaştırma ve yönlendirme hizmeti sunuyoruz.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold">3.</span>
                  <div>
                    <strong>TURSAB A Grubu Belgesi:</strong> Sadece direkt paket tur ve bilet satışı yapan acenteler için zorunludur. Biz bu kategoride değiliz.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold">4.</span>
                  <div>
                    <strong>Yasal Dayanak:</strong> 1618 sayılı Seyahat Acentaları ve Seyahat Acentaları Birliği Kanunu kapsamı dışındayız.
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-yellow-100 rounded">
                <p className="text-xs text-gray-700">
                  💡 <strong>Benzer Örnekler:</strong> Skyscanner, Kayak, Google Flights gibi global metasearch platformları da TURSAB belgesi olmadan Türkiye'de hizmet vermektedir.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">🏢 Şirket Kimliğimiz</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Şirket Bilgileri</h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium text-gray-600">Şirket Unvanı:</span>
                    <p className="text-gray-800">TRIPUCK TURİZM LİMİTED ŞİRKETİ</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Kuruluş Yılı:</span>
                    <p className="text-gray-800">2019</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Merkez:</span>
                    <p className="text-gray-800">Antalya, Türkiye</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">Faaliyet Alanımız</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <Plane className="h-4 w-4 text-purple-600" />
                    Uçuş arama ve karşılaştırma platformu
                  </li>
                  <li className="flex items-center gap-2">
                    <Plane className="h-4 w-4 text-purple-600" />
                    En uygun uçuş seçeneklerini bulma
                  </li>
                  <li className="flex items-center gap-2">
                    <Plane className="h-4 w-4 text-purple-600" />
                    Havayolu firmaları ile müşteri buluşturma
                  </li>
                  <li className="flex items-center gap-2">
                    <Plane className="h-4 w-4 text-purple-600" />
                    Uçuş danışmanlığı ve bilgilendirme
                  </li>
                  <li className="flex items-center gap-2">
                    <Plane className="h-4 w-4 text-purple-600" />
                    7/24 müşteri destek hizmetleri
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

            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">🛡️ Güvenlik ve Sertifikalarımız</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-blue-800 mb-2">SSL Sertifikası</h4>
                <p className="text-sm text-gray-700">256-bit SSL şifreleme ile tüm verileriniz güvende</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-green-800 mb-2">KVKK Uyumlu</h4>
                <p className="text-sm text-gray-700">6698 sayılı Kişisel Verilerin Korunması Kanunu'na tam uyum</p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-purple-800 mb-2">Google Ads Uyumlu</h4>
                <p className="text-sm text-gray-700">Tüm Google reklam politikalarına uygun işletme</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">🤝 İş Modelimiz ve Gelir Kaynağımız</h2>
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg border-l-4 border-indigo-500">
              <h3 className="text-lg font-semibold text-indigo-800 mb-4">Nasıl Para Kazanıyoruz?</h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Komisyon Modeli:</strong> Metasearch platformu olarak bazı rezervasyonlardan komisyon alabiliriz. 
                  Bu sizin için ekstra ücret anlamına gelmez - fiyatlar havayolu veya acente fiyatlarıyla aynıdır.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h4 className="font-semibold text-indigo-700 mb-2">✅ Size Maliyeti</h4>
                    <p className="text-sm">Karşılaştırma hizmetimiz tamamen <strong>ÜCRETSİZ</strong>. Hiçbir ek ücret ödemezsiniz.</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h4 className="font-semibold text-indigo-700 mb-2">💰 Gelir Kaynağımız</h4>
                    <p className="text-sm">Havayolu/acente bize küçük bir <strong>referans komisyonu</strong> öder (sizden değil!).</p>
                  </div>
                </div>
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
                  <h4 className="font-semibold text-gray-800 mb-3">📞 İletişim Kanalları</h4>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Telefon:</strong> 0850 308 98 40 (7/24)</p>
                    <p><strong>E-posta:</strong> info@havayoluiletisim.com</p>
                    <p><strong>Website:</strong> havayoluiletisim.com</p>
                    <p><strong>Yanıt Süresi:</strong> Ortalama 5 dakika</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-semibold mb-4">💙 Ekibimiz Olarak</h3>
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
