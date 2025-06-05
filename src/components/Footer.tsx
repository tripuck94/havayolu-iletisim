import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <Link 
            to="/kisisel-verilerin-korunmasi" 
            className="text-gray-300 hover:text-white transition-colors text-sm"
          >
            Kişisel Verilerin Korunması
          </Link>
          <Link 
            to="/mesafeli-satis-sozlesmesi" 
            className="text-gray-300 hover:text-white transition-colors text-sm"
          >
            Mesafeli Satış Sözleşmesi
          </Link>
          <Link 
            to="/hakkimizda" 
            className="text-gray-300 hover:text-white transition-colors text-sm"
          >
            Hakkımızda
          </Link>
          <Link 
            to="/kullanim-kosullari" 
            className="text-gray-300 hover:text-white transition-colors text-sm"
          >
            Kullanım Koşulları
          </Link>
          <Link 
            to="/iptal-iade-sartlari" 
            className="text-gray-300 hover:text-white transition-colors text-sm"
          >
            İptal İade Şartları
          </Link>
          <Link 
            to="/gizlilik-ve-guvenlik" 
            className="text-gray-300 hover:text-white transition-colors text-sm"
          >
            Gizlilik ve Güvenlik
          </Link>
          <Link 
            to="/iletisim" 
            className="text-gray-300 hover:text-white transition-colors text-sm"
          >
            İletişim
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-gray-700 pt-6">
          <p className="text-gray-400 text-sm">
            ©2024 Tüm Hakkı Saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}; 
