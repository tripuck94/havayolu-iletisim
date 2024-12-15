import { Link, useLocation } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const location = useLocation();
  const handleCall = () => {
    window.location.href = "tel:08502428117";
  };

  const getHeaderColor = (path: string) => {
    if (path.includes('/thy')) return 'bg-thy';
    if (path.includes('/pegasus')) return 'bg-pegasus';
    if (path.includes('/sunexpress')) return 'bg-sunexpress';
    if (path.includes('/ajet')) return 'bg-ajet';
    return 'bg-accent';
  };

  const getButtonColor = (path: string) => {
    if (path.includes('/thy')) return 'bg-white text-thy hover:bg-white/90';
    if (path.includes('/pegasus')) return 'bg-white text-pegasus hover:bg-white/90';
    if (path.includes('/sunexpress')) return 'bg-white text-sunexpress hover:bg-white/90';
    if (path.includes('/ajet')) return 'bg-white text-ajet hover:bg-white/90';
    return 'bg-white text-primary hover:bg-white/90';
  };

  return (
    <header className={`${getHeaderColor(location.pathname)} text-white relative z-50`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/520d8ba8-17f4-4293-a58e-2783bd05931c.png" 
              alt="Call Center Icon" 
              className="h-8 w-8"
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <span className="hover:text-white/90 cursor-pointer">
                Havayolları
              </span>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/thy/contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Türk Hava Yolları
                </Link>
                <Link to="/pegasus/contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Pegasus
                </Link>
                <Link to="/sunexpress/contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  SunExpress
                </Link>
                <Link to="/ajet/contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  AJet
                </Link>
              </div>
            </div>
            <div className="relative group">
              <span className="hover:text-white/90 cursor-pointer">
                Bilet İşlemleri
              </span>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Değişiklik Politikası
                </Link>
                <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  İsim Değişikliği
                </Link>
                <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  İptal ve İade
                </Link>
              </div>
            </div>
            <div className="relative group">
              <span className="hover:text-white/90 cursor-pointer">
                Özel Hizmetler
              </span>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/pet-services" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Evcil Hayvan Politikası
                </Link>
                <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Refakatsiz Çocuk
                </Link>
                <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Sınıf Yükseltme
                </Link>
              </div>
            </div>
            <div className="relative group">
              <span className="hover:text-white/90 cursor-pointer">
                Yolcu Hizmetleri
              </span>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Bagaj Politikası
                </Link>
                <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Check-In İşlemleri
                </Link>
                <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Uçuş Gecikmesi
                </Link>
                <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Kayıp Eşya
                </Link>
                <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Rezervasyon Yönetimi
                </Link>
                <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Rezervasyonlar
                </Link>
                <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Özel Yardım
                </Link>
                <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Sık Sorulan Sorular
                </Link>
              </div>
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className={`flex items-center gap-2 ${getButtonColor(location.pathname)} rounded-lg px-4 py-2 shadow-md border-2 border-white/20`}
            onClick={handleCall}
          >
            <Phone className="h-4 w-4" />
            <span className="font-semibold">0850 242 81 17</span>
          </Button>
        </div>
      </nav>
    </header>
  );
};