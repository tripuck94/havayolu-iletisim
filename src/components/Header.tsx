import { Link } from "react-router-dom";
import { Phone, Plane, Headphones, Luggage, Users, CreditCard, HelpCircle } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-accent text-accent-foreground">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="relative">
                <Phone className="h-6 w-6" />
                <Plane className="h-6 w-6 absolute -right-3 -bottom-2" />
              </div>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-white/90">
              Ana Sayfa
            </Link>
            <div className="relative group">
              <span className="hover:text-white/90 cursor-pointer">
                Havayolları
              </span>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/contact/thy" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Türk Hava Yolları
                </Link>
                <Link to="/contact/pegasus" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Pegasus
                </Link>
                <Link to="/contact/sunexpress" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  SunExpress
                </Link>
                <Link to="/contact/ajet" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
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
                  Özel Yardım
                </Link>
                <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Sık Sorulan Sorular
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};