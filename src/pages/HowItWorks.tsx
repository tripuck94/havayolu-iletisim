import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Search, GitCompare, MousePointerClick, PhoneCall, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const handleCall = () => {
    window.location.href = "tel:08503089840";
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <Header />
      
      <div className="container py-12 md:py-16 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            🔍 Nasıl Çalışır?
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Uçuş arama ve karşılaştırma platformumuz ile en uygun uçuşu bulmak çok kolay!
          </p>
        </div>

        {/* Info Banner */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <AlertCircle className="h-6 w-6 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2">İş Modelimiz: Metasearch Platformu</h3>
              <p className="text-blue-100">
                Biz bir <strong>metasearch (meta arama) platformuyuz</strong>. Havayollarının tüm uçuşlarını 
                tek bir yerde toplayıp karşılaştırma imkanı sunuyoruz. Rezervasyon işlemleri için sizi 
                havayolları veya yetkili acenteleriyle buluşturuyoruz.
              </p>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">5 Adımda Uçuş Rezervasyonu</h2>
          
          <div className="grid md:grid-cols-5 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-blue-600" />
                </div>
                <div className="h-12 w-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto -mt-20 mb-4 font-bold text-xl shadow-lg">
                  1
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">Arama Yapın</h3>
                <p className="text-sm text-gray-600">
                  İstediğiniz rotayı, tarih ve yolcu sayısını girin
                </p>
              </div>
              {/* Arrow */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <svg className="w-8 h-8 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GitCompare className="h-8 w-8 text-purple-600" />
                </div>
                <div className="h-12 w-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto -mt-20 mb-4 font-bold text-xl shadow-lg">
                  2
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">Karşılaştırın</h3>
                <p className="text-sm text-gray-600">
                  Tüm havayollarının fiyat ve seçeneklerini görün
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <svg className="w-8 h-8 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MousePointerClick className="h-8 w-8 text-green-600" />
                </div>
                <div className="h-12 w-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto -mt-20 mb-4 font-bold text-xl shadow-lg">
                  3
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">Seçin</h3>
                <p className="text-sm text-gray-600">
                  Size en uygun uçuş seçeneğini belirleyin
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <svg className="w-8 h-8 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="h-16 w-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PhoneCall className="h-8 w-8 text-orange-600" />
                </div>
                <div className="h-12 w-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto -mt-20 mb-4 font-bold text-xl shadow-lg">
                  4
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">Bize Ulaşın</h3>
                <p className="text-sm text-gray-600">
                  Danışmanlarımız size yardımcı olsun
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <svg className="w-8 h-8 text-orange-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Step 5 */}
            <div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-red-600" />
                </div>
                <div className="h-12 w-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto -mt-20 mb-4 font-bold text-xl shadow-lg">
                  5
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">Rezervasyon</h3>
                <p className="text-sm text-gray-600">
                  Havayolu/acente ile güvenle işlemi tamamlayın
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What We Do / Don't Do */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* What We Do */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-green-600 mb-6 flex items-center gap-3">
              <CheckCircle className="h-8 w-8" />
              Bizim Yaptıklarımız
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Uçuş Arama</p>
                  <p className="text-sm text-gray-600">Tüm havayollarının uçuşlarını topluyoruz</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Fiyat Karşılaştırma</p>
                  <p className="text-sm text-gray-600">En uygun seçeneği bulmanızı sağlıyoruz</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Danışmanlık Hizmeti</p>
                  <p className="text-sm text-gray-600">7/24 size yardımcı oluyoruz</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Müşteri-Havayolu Bağlantısı</p>
                  <p className="text-sm text-gray-600">Sizi doğru yerle buluşturuyoruz</p>
                </div>
              </li>
            </ul>
          </div>

          {/* What We Don't Do */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-orange-600 mb-6 flex items-center gap-3">
              <AlertCircle className="h-8 w-8" />
              Bizim Yapmadıklarımız
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="h-4 w-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Direkt Bilet Satışı</p>
                  <p className="text-sm text-gray-600">Rezervasyon havayolu/acente üzerinden</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="h-4 w-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Ödeme Toplama</p>
                  <p className="text-sm text-gray-600">Ödemeler havayoluna/acenteye yapılır</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="h-4 w-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Bilet Kesme</p>
                  <p className="text-sm text-gray-600">E-biletler havayolu tarafından kesilir</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="h-4 w-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Resmi Havayolu Değiliz</p>
                  <p className="text-sm text-gray-600">Bağımsız arama platformuyuz</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">🌟 Neden Bizi Tercih Etmelisiniz?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="font-bold mb-2">Hızlı Arama</h4>
              <p className="text-sm text-blue-100">Tüm uçuşları saniyeler içinde karşılaştırın</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💰</div>
              <h4 className="font-bold mb-2">En İyi Fiyat</h4>
              <p className="text-sm text-blue-100">Tek platformda tüm seçenekleri görün</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="font-bold mb-2">Ücretsiz Hizmet</h4>
              <p className="text-sm text-blue-100">Arama ve karşılaştırma tamamen ücretsiz</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Hemen Uçuş Aramaya Başlayın!</h3>
          <p className="mb-6 text-gray-600">
            Veya danışmanlarımızdan yardım alın
          </p>
          <Button 
            onClick={handleCall} 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6"
          >
            <PhoneCall className="h-5 w-5 mr-2" />
            0850 308 98 40
          </Button>
        </div>

        {/* Mobile CTA */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg">
          <Button onClick={handleCall} className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xl py-6">
            <PhoneCall className="h-5 w-5 mr-2" />
            Hemen Ara
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;

