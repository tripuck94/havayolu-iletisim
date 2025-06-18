import { Link } from "react-router-dom";
import { Phone, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";

const NotFound = () => {
  const handleCall = () => {
    window.location.href = "tel:08502428117";
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <Header />
      <div className="container py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Sayısı */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-gray-200 mb-4">404</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-thy via-pegasus to-sunexpress mx-auto rounded-full"></div>
          </div>

          {/* Ana Mesaj */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Sayfa Bulunamadı
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Aradığınız sayfa mevcut değil veya taşınmış olabilir.
            </p>
            <p className="text-gray-500">
              Yardıma mı ihtiyacınız var? Müşteri hizmetlerimiz 7/24 hizmetinizde!
            </p>
          </div>

          {/* Uçak İkonu */}
          <div className="mb-12">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,q_auto,w_auto,dpr_auto/unsplash-1436491865332-7a61a109cc05.webp"
                alt="Uçak"
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 rounded-xl flex items-center justify-center">
                <div className="text-white text-center">
                  <Phone className="h-12 w-12 mx-auto mb-2 animate-pulse" />
                  <p className="font-semibold">7/24 Destek</p>
                </div>
              </div>
            </div>
          </div>

          {/* Aksiyonlar */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 text-lg w-full sm:w-auto">
                  <Home className="h-5 w-5 mr-2" />
                  Ana Sayfaya Dön
                </Button>
              </Link>
              
              <Button 
                onClick={handleCall}
                className="bg-thy hover:bg-thy-hover text-white px-8 py-3 text-lg w-full sm:w-auto"
              >
                <Phone className="h-5 w-5 mr-2" />
                Hemen Ara
              </Button>
            </div>

            {/* Telefon Numarası */}
            <div className="bg-white rounded-lg shadow-md p-6 mt-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Phone className="h-6 w-6 text-thy" />
                <h3 className="text-xl font-bold text-gray-800">Müşteri Hizmetleri</h3>
              </div>
              <p className="text-3xl font-bold text-thy mb-2">0850 242 81 17</p>
              <p className="text-gray-600">7/24 Kesintisiz Hizmet</p>
            </div>

            {/* Hızlı Linkler */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <Link 
                to="/thy-iletisim"
                className="bg-white hover:bg-red-50 border border-gray-200 hover:border-thy rounded-lg p-4 transition-all duration-200"
              >
                <img 
                  src="https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,h_64,w_64,q_auto/images/airline/small/TK.webp"
                  alt="THY" 
                  className="h-8 w-8 mx-auto mb-2"
                />
                <p className="text-sm font-medium text-gray-700">THY İletişim</p>
              </Link>
              
              <Link 
                to="/pegasus-iletisim"
                className="bg-white hover:bg-yellow-50 border border-gray-200 hover:border-pegasus rounded-lg p-4 transition-all duration-200"
              >
                <img 
                  src="https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,h_64,w_64,q_auto/images/airline/small/PC.webp"
                  alt="Pegasus" 
                  className="h-8 w-8 mx-auto mb-2"
                />
                <p className="text-sm font-medium text-gray-700">Pegasus İletişim</p>
              </Link>
              
              <Link 
                to="/sunexpress-iletisim"
                className="bg-white hover:bg-orange-50 border border-gray-200 hover:border-sunexpress rounded-lg p-4 transition-all duration-200"
              >
                <img 
                  src="https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,h_64,w_64,q_auto/images/airline/small/XQ.webp"
                  alt="SunExpress" 
                  className="h-8 w-8 mx-auto mb-2"
                />
                <p className="text-sm font-medium text-gray-700">SunExpress İletişim</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Fixed Bottom Button */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg">
        <div className="flex gap-3">
          <Link to="/" className="flex-1">
            <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white text-xl py-6">
              <Home className="h-5 w-5 mr-2" />
              Ana Sayfa
            </Button>
          </Link>
          <Button 
            onClick={handleCall}
            className="flex-1 bg-thy hover:bg-thy-hover text-white text-xl py-6"
          >
            <Phone className="h-5 w-5 mr-2" />
            Hemen Ara
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 
