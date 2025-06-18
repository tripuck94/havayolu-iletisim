import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { useLocation, Navigate } from "react-router-dom";
import { getAirlineData } from "@/data/airlineData";

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
              <p className="text-lg font-semibold mb-2">info@flyevaturizm.com</p>
              <p className="text-gray-600 mb-4">24 saat içinde yanıt</p>
              <Button 
                onClick={() => window.location.href = "mailto:info@flyevaturizm.com"}
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
              <p className="font-semibold mb-2">İstanbul, Türkiye</p>
              <p className="text-gray-600 mb-4">Merkez Ofis</p>
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

          {/* Services */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-6">Hizmetlerimiz</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-xl">✈️ Havayolu Hizmetleri</h4>
                <ul className="space-y-1 text-blue-100">
                  <li>• THY, Pegasus, SunExpress</li>
                  <li>• AJet, AZAL</li>
                  <li>• Bilet Satın Alma</li>
                  <li>• Bilet Değişiklikleri</li>
                  <li>• İptal ve İade İşlemleri</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-xl">🎯 Özel Hizmetler</h4>
                <ul className="space-y-1 text-blue-100">
                  <li>• Koltuk Seçimi</li>
                  <li>• Bagaj Ekleme</li>
                  <li>• Sınıf Yükseltme</li>
                  <li>• Check-in İşlemleri</li>
                  <li>• Özel Yardım Hizmetleri</li>
                </ul>
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

          {/* Emergency Contact */}
          <div className="text-center bg-red-600 text-white p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">🚨 Acil Durum</h3>
            <p className="mb-6">
              Acil durumlar için 7/24 ulaşabileceğiniz destek hattımız.
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
      </div>
    );
  }

  // If airline not found, redirect to home
  if (!airlineData) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <Header />
      <div className="container py-8">
        
        <div className="text-center mb-12">
          <img 
            src={airlineData.logo}
            alt={`${airlineData.name} Logo`}
            className="h-20 mx-auto mb-8"
          />
          <h1 className="text-4xl font-bold mb-4 text-primary">
            {airlineData.name}
          </h1>
          <p className="text-lg text-gray-600">
            {airlineData.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,q_auto,w_auto,dpr_auto/unsplash-1436491865332-7a61a109cc05.webp"
              alt="Uçak"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,q_auto,w_auto,dpr_auto/images/call-center/call-center-airline.webp"
              alt="Call Center"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-20">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Phone className={`h-8 w-8 text-${airlineData.primaryColor}`} />
              <h2 className="text-2xl font-bold">Müşteri Hizmetleri</h2>
            </div>
            <p className="text-3xl font-bold text-center mb-6">0850 242 81 17</p>
            <Button 
              onClick={handleCall} 
              className={`w-full bg-${airlineData.primaryColor} hover:bg-${airlineData.hoverColor} text-white text-lg`}
            >
              <Phone className="h-5 w-5 mr-2" />
              Hemen Ara
            </Button>
          </div>
        </div>

        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg">
          <Button 
            onClick={handleCall} 
            className={`w-full bg-${airlineData.primaryColor} hover:bg-${airlineData.hoverColor} text-white text-xl py-6`}
          >
            <Phone className="h-5 w-5 mr-2" />
            Hemen Ara
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AirlineContactPage; 
