import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <Link 
            to="/hakkimizda" 
            className="text-gray-300 hover:text-white transition-colors text-sm"
          >
            Hakkımızda
          </Link>
          <Link 
            to="/nasil-calisir" 
            className="text-gray-300 hover:text-white transition-colors text-sm font-semibold"
          >
            Nasıl Çalışır?
          </Link>
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

        {/* Company Info */}
        <div className="text-center text-sm text-gray-300 space-y-2 mb-6">
          <p className="font-semibold text-white text-base">
            TRIPUCK TURİZM TİCARET LİMİTED ŞİRKETİ
          </p>
          <div className="grid md:grid-cols-2 gap-3 max-w-4xl mx-auto text-left md:text-center">
            <div className="space-y-1">
              <p><span className="font-medium text-white">Vergi Dairesi:</span> Antalya Kurumlar</p>
              <p><span className="font-medium text-white">Vergi No:</span> 8591101691</p>
              <p><span className="font-medium text-white">Ticaret Sicil No:</span> 859110</p>
            </div>
            <div className="space-y-1">
              <p><span className="font-medium text-white">Mersis No:</span> 8591101691000017</p>
              <p><span className="font-medium text-white">Telefon:</span> 0850 308 98 40</p>
              <p><span className="font-medium text-white">E-posta:</span> info@havayoluiletisim.com</p>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-600">
            <p className="text-xs leading-relaxed">
              <span className="font-medium text-white">Adres:</span> Güzeloluk Mahallesi 1830 Sokak<br className="md:hidden" />
              Özpınarlar Lavinya Evleri E Blok No: 175 İç Kapı No: 7<br className="md:hidden" />
              Muratpaşa/Antalya
            </p>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-600">
            <p className="text-xs mb-2">
              <span className="font-medium text-white">İş Modelimiz:</span> Uçuş arama ve karşılaştırma platformu. Havayollarının uçuşlarını karşılaştırıp en uygun seçeneği bulmanıza yardımcı oluyoruz.
            </p>
            <p className="text-xs">
              <span className="font-medium text-white">Faaliyet Kodu:</span> Web Arama Portalı Faaliyetleri (639102)
            </p>
          </div>
          <div className="mt-4 p-3 bg-amber-600 rounded-lg">
            <p className="text-white text-xs font-semibold">
              ⚠️ Bağımsız bir seyahat acentesi olarak hizmet vermekteyiz. Resmi havayolu web sitesi değildir.
            </p>
          </div>
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
