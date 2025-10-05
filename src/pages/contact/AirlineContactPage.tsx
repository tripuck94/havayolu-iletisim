import { Phone, Plane, MapPin, Briefcase, Users, Award, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FlightSearchWidget } from "@/components/FlightSearchWidget";
import { useLocation, Navigate } from "react-router-dom";
import { getAirlineData } from "@/data/airlineData";
import { MetaTags } from "@/components/MetaTags";

const AirlineContactPage = () => {
  const location = useLocation();
  
  // Extract airline ID from path like /thy-iletisim -> thy
  const airlineId = location.pathname.replace('/', '').replace('-iletisim', '');
  const airlineData = getAirlineData(airlineId);

  const handleCall = () => {
    window.location.href = "tel:08502428117";
  };

  // If it's general contact page (/iletisim), show general contact info
  if (location.pathname === '/iletisim') {
    return (
      <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
        <MetaTags 
          title="İletişim - Havayolu İletişim"
          description="7/24 müşteri hizmetleri ile sizlere yardımcı olmak için buradayız. Telefon: 0850 242 81 17"
          path="/iletisim"
          keywords="iletişim, müşteri hizmetleri, telefon, 7/24 destek, havayolu destek"
        />
        <Header />
        <div className="container py-12 md:py-16 space-y-16 mb-16">
          
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
              <Phone className="h-10 w-10 text-blue-600" />
              İletişim
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Size yardımcı olmaktan mutluluk duyarız. Aşağıdaki iletişim kanallarından bizimle iletişime geçebilirsiniz.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Telefon</h3>
              <p className="text-2xl font-bold text-blue-600 mb-2">0850 242 81 17</p>
              <p className="text-gray-600 mb-4">7/24 Müşteri Hizmetleri</p>
              <Button 
                onClick={handleCall}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                <Phone className="h-4 w-4 mr-2" />
                Hemen Ara
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">E-posta</h3>
              <p className="text-lg font-semibold mb-2">info@havayoluiletisim.com</p>
              <p className="text-gray-600 mb-4">24 saat içinde yanıt</p>
              <Button 
                onClick={() => window.location.href = "mailto:info@havayoluiletisim.com"}
                variant="outline"
                className="w-full border-green-600 text-green-600 hover:bg-green-50"
              >
                <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                E-posta Gönder
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Adres</h3>
              <p className="font-semibold mb-1">TRIPUCK TURİZM LİMİTED ŞİRKETİ</p>
              <p className="text-sm text-gray-600 mb-2">Güzeloluk Mah, Lavınya Sitesi</p>
              <p className="text-sm text-gray-600 mb-2">1830. Sk. E blok, 07200</p>
              <p className="font-semibold mb-2">Muratpaşa / ANTALYA</p>
              <Button 
                variant="outline"
                className="w-full border-purple-600 text-purple-600 hover:bg-purple-50"
              >
                <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                Haritada Gör
              </Button>
            </div>
          </div>

          {/* Working Hours */}
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="h-16 w-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Çalışma Saatleri</h3>
              <div className="space-y-2 text-lg">
                <p><span className="font-semibold">Telefon Desteği:</span> 7/24 Kesintisiz</p>
                <p><span className="font-semibold">E-posta Desteği:</span> 7/24 Kesintisiz</p>
                <p><span className="font-semibold">Yanıt Süresi:</span> Ortalama 5 dakika</p>
              </div>
            </div>
          </div>

          {/* Supported Airlines */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-6">Desteklenen Havayolları</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-xl">🇹🇷 Türk Havayolları</h4>
                <ul className="space-y-2 text-blue-100">
                  <li>• Turkish Airlines (THY)</li>
                  <li>• Pegasus Airlines</li>
                  <li>• SunExpress</li>
                  <li>• AJet (Anadolujet)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-xl">🌍 Uluslararası</h4>
                <ul className="space-y-2 text-blue-100">
                  <li>• AZAL (Azerbaijan Airlines)</li>
                  <li>• Qatar Airways</li>
                  <li>• Emirates</li>
                  <li>• Aeroflot</li>
                  <li>• Air Arabia</li>
                  <li>• FlyDubai</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-xl">🎯 Özel Hizmetler</h4>
                <ul className="space-y-2 text-blue-100">
                  <li>• Grup rezervasyonları</li>
                  <li>• Kurumsal anlaşmalar</li>
                  <li>• VIP hizmetler</li>
                  <li>• Engelli yolcu desteği</li>
                  <li>• Refakatsiz çocuk</li>
                  <li>• Pet seyahati</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Work */}
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-6">Nasıl Çalışıyoruz?</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="h-16 w-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">1</span>
                </div>
                <h4 className="font-semibold mb-2">İletişim</h4>
                <p className="text-sm text-gray-600">Telefon veya e-posta ile bizimle iletişime geçin</p>
              </div>
              
              <div className="text-center">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h4 className="font-semibold mb-2">Analiz</h4>
                <p className="text-sm text-gray-600">İhtiyacınızı analiz edip en uygun çözümü buluyoruz</p>
              </div>
              
              <div className="text-center">
                <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h4 className="font-semibold mb-2">İşlem</h4>
                <p className="text-sm text-gray-600">Rezervasyon veya değişikliklerinizi gerçekleştiriyoruz</p>
              </div>
              
              <div className="text-center">
                <div className="h-16 w-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <h4 className="font-semibold mb-2">Takip</h4>
                <p className="text-sm text-gray-600">Seyahatiniz boyunca size destek sağlıyoruz</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Bilet Sorgulama</h4>
              <p className="text-sm text-gray-600">E-biletinizi sorgulayın</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Sık Sorulan Sorular</h4>
              <p className="text-sm text-gray-600">Hızlı cevaplar bulun</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Uçuş Durumu</h4>
              <p className="text-sm text-gray-600">Gerçek zamanlı takip</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Kayıp Eşya</h4>
              <p className="text-sm text-gray-600">Eşya takip sistemi</p>
            </div>
          </div>

          {/* Company Information */}
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-6">Şirket Bilgileri</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-gray-800">📋 Yasal Bilgiler</h4>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium text-gray-600">Şirket Unvanı:</span>
                    <p className="text-gray-800">TRIPUCK TURİZM LİMİTED ŞİRKETİ</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Faaliyet Konusu:</span>
                    <p className="text-gray-800">Havayolu Bilet Satış ve Müşteri Hizmetleri</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Kuruluş Tarihi:</span>
                    <p className="text-gray-800">2019</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 text-gray-800">🏢 İletişim Detayları</h4>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium text-gray-600">Merkez Adres:</span>
                    <p className="text-gray-800">Güzeloluk Mah, Lavınya Sitesi, 1830. Sk. E blok, 07200 Muratpaşa/Antalya</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Website:</span>
                    <p className="text-gray-800">havayoluiletisim.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-6">Hizmet Alanlarımız</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-xl">🎫 Bilet İşlemleri</h4>
                <ul className="space-y-2 text-green-100">
                  <li>• Yeni bilet satışı</li>
                  <li>• Bilet değişikliği</li>
                  <li>• Bilet iptali</li>
                  <li>• İade işlemleri</li>
                  <li>• Bilet sorgulama</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-xl">✈️ Uçuş Hizmetleri</h4>
                <ul className="space-y-2 text-green-100">
                  <li>• Online check-in</li>
                  <li>• Koltuk seçimi</li>
                  <li>• Bagaj ekleme</li>
                  <li>• Özel yemek talebi</li>
                  <li>• Sınıf yükseltme</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-xl">🔧 Teknik Destek</h4>
                <ul className="space-y-2 text-green-100">
                  <li>• Website sorunları</li>
                  <li>• Ödeme problemleri</li>
                  <li>• Mobil uygulama</li>
                  <li>• E-bilet indirme</li>
                  <li>• Sistem güncellemeleri</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quality Assurance */}
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-6">Kalite Güvencemiz</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">%99.9 Güvenilirlik</h4>
                <p className="text-sm text-gray-600">Yüksek sistem güvenilirliği</p>
              </div>
              
              <div className="text-center">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">5 Dakika Yanıt</h4>
                <p className="text-sm text-gray-600">Ortalama yanıt süresi</p>
              </div>
              
              <div className="text-center">
                <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Uzman Ekip</h4>
                <p className="text-sm text-gray-600">Deneyimli müşteri temsilcileri</p>
              </div>
              
              <div className="text-center">
                <div className="h-16 w-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">SSL Güvenlik</h4>
                <p className="text-sm text-gray-600">256-bit şifreleme</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">Sık Sorulan Sorular</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">❓ Bilet rezervasyonu nasıl yapılır?</h4>
                  <p className="text-sm text-gray-600">0850 242 81 17 numaralı telefonumuzu arayarak uzman ekibimizden bilet rezervasyonu yapabilirsiniz. Size en uygun uçuş seçeneklerini sunuyoruz.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">💳 Hangi ödeme yöntemlerini kabul ediyorsunuz?</h4>
                  <p className="text-sm text-gray-600">Kredi kartı, havale/EFT ve kapıda ödeme seçeneklerini kabul ediyoruz. Tüm ödemeler güvenli SSL sertifikası ile korunmaktadır.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">📞 Müşteri hizmetleri kaç saat çalışıyor?</h4>
                  <p className="text-sm text-gray-600">7/24 kesintisiz hizmet vermekteyiz. Gece 3'te bile arayabilirsiniz, size yardımcı olacak bir temsilcimiz hazır.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">✈️ Hangi havayolları ile çalışıyorsunuz?</h4>
                  <p className="text-sm text-gray-600">THY, Pegasus, SunExpress, AJet, AZAL ve daha birçok ulusal ve uluslararası havayolu ile çalışıyoruz.</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">🔄 Bilet değişikliği mümkün mü?</h4>
                  <p className="text-sm text-gray-600">Evet, havayolu kurallarına göre bilet değişikliği yapabilirsiniz. Ekibimiz size en ekonomik değişiklik seçeneklerini sunar.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">🎒 Bagaj politikası nasıl?</h4>
                  <p className="text-sm text-gray-600">Her havayolunun kendine özgü bagaj politikası vardır. Size bilet alırken tüm detayları açıklıyoruz ve ek bagaj seçenekleri sunuyoruz.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">🏥 Sağlık sorunları durumunda ne yapmalıyım?</h4>
                  <p className="text-sm text-gray-600">Sağlık sorunu olan yolcular için özel destek hizmetleri bulunmaktadır. Medical clearance ve özel yardım koordinasyonu yapıyoruz.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">💰 İptal durumunda param iade edilir mi?</h4>
                  <p className="text-sm text-gray-600">Havayolu kurallarına göre iade işlemleri yapılmaktadır. Flex biletlerde iade oranı daha yüksektir. Detayları size açıklıyoruz.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Statistics */}
          <div className="bg-gray-800 text-white p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-6">İstatistikler</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">50,000+</div>
                <p className="text-gray-300">Mutlu Müşteri</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">15+</div>
                <p className="text-gray-300">Havayolu Partneri</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">100,000+</div>
                <p className="text-gray-300">İşlem Tamamlandı</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">%99.8</div>
                <p className="text-gray-300">Müşteri Memnuniyeti</p>
              </div>
            </div>
          </div>

          {/* Working Principles */}
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-6">Çalışma Prensplerimiz</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Güvenilirlik</h4>
                <p className="text-sm text-gray-600">Her zaman doğru bilgi, güvenli ödeme ve zamanında teslimat</p>
              </div>
              
              <div className="text-center">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Hız</h4>
                <p className="text-sm text-gray-600">Hızlı rezervasyon, anında onay ve ivedi çözümler</p>
              </div>
              
              <div className="text-center">
                <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Müşteri Odaklılık</h4>
                <p className="text-sm text-gray-600">Müşteri memnuniyeti bizim için en önemli değer</p>
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="text-center bg-red-600 text-white p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">🚨 Acil Durum Desteği</h3>
            <p className="mb-4">
              Acil durumlar için 7/24 ulaşabileceğiniz destek hattımız.
            </p>
            <p className="text-sm mb-6 text-red-100">
              Uçuş iptalleri, gecikmeleri, bagaj kayıpları ve diğer acil durumlar için anında destek alın.
            </p>
            <Button 
              onClick={handleCall} 
              variant="secondary"
              className="gap-2 bg-white text-red-600 hover:bg-gray-100"
            >
              <Phone className="h-4 w-4" />
              Acil Arama: 0850 242 81 17
            </Button>
          </div>

          <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg">
            <Button 
              onClick={handleCall} 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xl py-6"
            >
              <Phone className="h-5 w-5 mr-2" />
              Hemen Ara
            </Button>
          </div>
        </div>
        
        <Footer />
      </div>
    );
  }

  // If airline not found, redirect to home
  if (!airlineData) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <MetaTags 
        title={`${airlineData.name} İletişim - Havayolu İletişim`}
        description={`${airlineData.name} müşteri hizmetleri ve bilet işlemleri için 7/24 destek. ${airlineData.description}`}
        path={location.pathname}
        keywords={`${airlineData.name}, ${airlineData.name.toLowerCase()} iletişim, ${airlineData.name.toLowerCase()} telefon, havayolu iletişim`}
      />
      <Header />
       
       <div className="space-y-12">
         {/* Hero Section with Background */}
         <section className="relative -mx-0 -mt-6 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 pb-16 pt-24 text-white">
           <div className="absolute inset-0">
             <img
               src="https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,q_auto,w_2400,h_1200,c_fill/unsplash-1529070538774-1843cb3265df.webp"
               alt={`${airlineData.name} arka planı`}
               className="h-full w-full object-cover"
               loading="lazy"
             />
             <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-slate-900/85" />
             <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
           </div>

           <div className="container mx-auto px-4 md:px-8">
             <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
               <img
                 src={airlineData.logo}
                 alt={airlineData.name}
                 className="h-28 w-28 drop-shadow-[0_12px_40px_rgba(0,0,0,0.4)] bg-white/10 backdrop-blur-sm rounded-2xl p-4"
                 loading="lazy"
               />
               <div className="space-y-4">
                 <h1 className="text-4xl font-bold tracking-tight md:text-6xl drop-shadow-2xl">
                   {airlineData.name}
                 </h1>
                 <p className="mx-auto max-w-3xl text-lg text-white/90 md:text-xl drop-shadow-lg">
                   {airlineData.description}
                 </p>
               </div>

               <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-white">
                 <span className="flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 backdrop-blur ring-1 ring-white/30">
                   <Clock className="h-4 w-4" />
                   Kuruluş: {airlineData.founded}
                 </span>
                 <span className="flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 backdrop-blur ring-1 ring-white/30">
                   <MapPin className="h-4 w-4" />
                   {airlineData.headquarters}
                 </span>
               </div>

               <div className="relative w-full max-w-6xl overflow-hidden rounded-[2rem] bg-white/95 p-6 shadow-[0_32px_70px_rgba(15,23,42,0.35)] ring-1 ring-white/30 md:p-8">
                 <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/60" />
                 <FlightSearchWidget
                   loadingMessage="Uçuş araması hazırlanıyor..."
                   className="relative min-h-[120px]"
                 />
               </div>
             </div>
           </div>
         </section>

         <div className="container mx-auto px-4 space-y-12 md:px-8">
           
           {/* About Section */}
           <div className="bg-white rounded-lg shadow-lg p-8">
             <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
               <Plane className="h-6 w-6 text-blue-600" />
               Havayolu Hakkında
             </h2>
             <p className="text-gray-700 leading-relaxed text-lg">
               {airlineData.about}
             </p>
           </div>

           {/* Services Grid */}
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {/* Fleet */}
             <div className="bg-white rounded-lg shadow-lg p-6">
               <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                 <Plane className="h-5 w-5 text-blue-600" />
                 Filo
               </h3>
               <ul className="space-y-2 text-sm text-gray-700">
                 {airlineData.fleet.map((aircraft, index) => (
                   <li key={index} className="flex items-center gap-2">
                     <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                     {aircraft}
                   </li>
                 ))}
               </ul>
             </div>

             {/* Destinations */}
             <div className="bg-white rounded-lg shadow-lg p-6">
               <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                 <MapPin className="h-5 w-5 text-green-600" />
                 Destinasyonlar
               </h3>
               <ul className="space-y-2 text-sm text-gray-700">
                 {airlineData.destinations.map((destination, index) => (
                   <li key={index} className="flex items-center gap-2">
                     <div className="w-1 h-1 bg-green-600 rounded-full"></div>
                     {destination}
                   </li>
                 ))}
               </ul>
             </div>

             {/* Services */}
             <div className="bg-white rounded-lg shadow-lg p-6">
               <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                 <Users className="h-5 w-5 text-purple-600" />
                 Hizmetler
               </h3>
               <ul className="space-y-2 text-sm text-gray-700">
                 {airlineData.services.map((service, index) => (
                   <li key={index} className="flex items-center gap-2">
                     <div className="w-1 h-1 bg-purple-600 rounded-full"></div>
                     {service}
                   </li>
                 ))}
               </ul>
             </div>

             {/* Quick Contact */}
             <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-lg shadow-lg p-6">
               <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                 <Phone className="h-5 w-5" />
                 Hızlı İletişim
               </h3>
               <p className="text-2xl font-bold mb-2">0850 242 81 17</p>
               <p className="text-sm opacity-90 mb-4">7/24 Müşteri Hizmetleri</p>
               <Button 
                 onClick={handleCall} 
                 className="w-full bg-white text-blue-600 hover:bg-gray-100"
               >
                 <Phone className="h-4 w-4 mr-2" />
                 Hemen Ara
               </Button>
             </div>
           </div>

           {/* Policies Section */}
           <div className="bg-white rounded-lg shadow-lg p-8">
             <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
               <Shield className="h-6 w-6 text-blue-600" />
               Politikalar ve Kurallar
             </h2>
             <div className="grid md:grid-cols-3 gap-6">
               <div className="border-l-4 border-red-500 pl-4">
                 <h3 className="font-bold text-red-800 mb-2">İptal Koşulları</h3>
                 <p className="text-sm text-gray-700">{airlineData.policies.cancellation}</p>
               </div>
               <div className="border-l-4 border-yellow-500 pl-4">
                 <h3 className="font-bold text-yellow-800 mb-2">Değişiklik Koşulları</h3>
                 <p className="text-sm text-gray-700">{airlineData.policies.changes}</p>
               </div>
               <div className="border-l-4 border-green-500 pl-4">
                 <h3 className="font-bold text-green-800 mb-2">Bagaj Hakları</h3>
                 <p className="text-sm text-gray-700">{airlineData.policies.baggage}</p>
               </div>
             </div>
           </div>

           {/* Our Services */}
           <div className="bg-white rounded-lg shadow-lg p-8">
             <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
               <Briefcase className="h-6 w-6 text-blue-600" />
               Bizim Hizmetlerimiz
             </h2>
             <div className="grid md:grid-cols-2 gap-8">
               <div>
                 <h3 className="text-lg font-bold mb-4 text-blue-800">Bilet İşlemleri</h3>
                 <ul className="space-y-2 text-gray-700">
                   <li className="flex items-center gap-2">
                     <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                     Yeni bilet satışı ve rezervasyon
                   </li>
                   <li className="flex items-center gap-2">
                     <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                     Tarih ve saat değişiklikleri
                   </li>
                   <li className="flex items-center gap-2">
                     <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                     Rota değişiklikleri
                   </li>
                   <li className="flex items-center gap-2">
                     <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                     İptal işlemleri ve iade
                   </li>
                 </ul>
               </div>
               
               <div>
                 <h3 className="text-lg font-bold mb-4 text-green-800">Ek Hizmetler</h3>
                 <ul className="space-y-2 text-gray-700">
                   <li className="flex items-center gap-2">
                     <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                     Bagaj işlemleri ve bilgilendirme
                   </li>
                   <li className="flex items-center gap-2">
                     <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                     Koltuk seçimi ve upgrade
                   </li>
                   <li className="flex items-center gap-2">
                     <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                     Özel yolcu hizmetleri
                   </li>
                   <li className="flex items-center gap-2">
                     <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                     Check-in desteği
                   </li>
                 </ul>
               </div>
             </div>
           </div>

           {/* Contact CTA */}
           <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg shadow-lg">
             <h2 className="text-2xl font-bold mb-4">
               {airlineData.name} için her türlü işleminizde yanınızdayız
             </h2>
             <p className="text-lg opacity-90 mb-6">
               7/24 profesyonel müşteri hizmetleri ile size yardımcı olmaktan mutluluk duyarız
             </p>
             <Button 
               onClick={handleCall} 
               className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
             >
               <Phone className="h-5 w-5 mr-2" />
               0850 242 81 17 - Hemen Arayın
             </Button>
           </div>
         </div>
       </div>

      {/* Mobile Fixed Button */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg">
        <Button 
          onClick={handleCall} 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xl py-6"
        >
          <Phone className="h-5 w-5 mr-2" />
          Hemen Ara
        </Button>
      </div>
      
      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default AirlineContactPage; 
