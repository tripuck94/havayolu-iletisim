import { Link, useLocation } from "react-router-dom";
import { Phone, RefreshCw, Edit, XCircle, PawPrint, Users, ArrowUp, Luggage, CheckCircle, Clock, Search, Calendar, BookOpen, Heart, HelpCircle, CreditCard, ArrowLeft, Armchair } from "lucide-react";
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
    if (path.includes('/ajet') || path.includes('/vf')) return 'bg-ajet'; // VF is AJet's flight code
    if (path.includes('/azal')) return 'bg-azal';
    return 'bg-gray-800'; // Ana sayfa için koyu gri arka plan
  };

  const getButtonColor = (path: string) => {
    if (path.includes('/thy')) return 'bg-white text-thy hover:bg-white/90';
    if (path.includes('/pegasus')) return 'bg-white text-pegasus hover:bg-white/90';
    if (path.includes('/sunexpress')) return 'bg-white text-sunexpress hover:bg-white/90';
    if (path.includes('/ajet') || path.includes('/vf')) return 'bg-white text-ajet hover:bg-white/90';
    if (path.includes('/azal')) return 'bg-white text-azal hover:bg-white/90';
    return 'bg-white text-gray-800 hover:bg-white/90';
  };

  return (
    <header className={`${getHeaderColor(location.pathname)} text-white relative z-50 shadow-lg`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_32,w_32,q_auto/images/call-center/static/public/lovable-uploads/520d8ba8-17f4-4293-a58e-2783bd05931c" 
              alt="Call Center Icon" 
              className="h-8 w-8"
              fetchPriority="high"
              loading="eager"
              decoding="sync"
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <span className="hover:text-white/90 cursor-pointer font-medium text-white">
                Havayolları
              </span>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-1 border border-gray-100">
                <div className="p-2">
                  <Link to="/thy-iletisim" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-red-50 hover:text-thy rounded-lg transition-all duration-200 group/item">
                    <img 
                      src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/TK.webp"
                      alt="THY Logo" 
                      className="h-6 w-6 rounded-full"
                    />
                    <span className="font-medium">Türk Hava Yolları</span>
                  </Link>
                  <Link to="/pegasus-iletisim" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-yellow-50 hover:text-pegasus rounded-lg transition-all duration-200 group/item">
                    <img 
                      src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/PC.webp"
                      alt="Pegasus Logo" 
                      className="h-6 w-6 rounded-full"
                    />
                    <span className="font-medium">Pegasus</span>
                </Link>
                  <Link to="/sunexpress-iletisim" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-orange-50 hover:text-sunexpress rounded-lg transition-all duration-200 group/item">
                    <img 
                      src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/XQ.webp"
                      alt="SunExpress Logo" 
                      className="h-6 w-6 rounded-full"
                    />
                    <span className="font-medium">SunExpress</span>
                </Link>
                  <Link to="/ajet-iletisim" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-ajet rounded-lg transition-all duration-200 group/item">
                    <img 
                      src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/VF.webp"
                      alt="AJet Logo" 
                      className="h-6 w-6 rounded-full"
                    />
                    <span className="font-medium">AJet</span>
                </Link>
                  <Link to="/azal-iletisim" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-purple-50 hover:text-azal rounded-lg transition-all duration-200 group/item">
                    <img 
                      src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/J2.webp"
                      alt="AZAL Logo" 
                      className="h-6 w-6 rounded-full"
                    />
                    <span className="font-medium">AZAL</span>
                </Link>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <span className="hover:text-white/90 cursor-pointer font-medium text-white">
                Bilet İşlemleri
              </span>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-1 border border-gray-100">
                <div className="p-2">
                  <div className="relative group/submenu">
                    <Link to="/hizmetler/bilet-satin-alma" className="flex items-center justify-between gap-3 px-4 py-3 text-gray-800 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-all duration-200 group/item">
                      <div className="flex items-center gap-3">
                        <div className="h-6 w-6 bg-purple-100 rounded-full flex items-center justify-center">
                          <CreditCard className="h-3 w-3 text-purple-600" />
                        </div>
                        <span className="font-medium">Bilet Satın Alma</span>
                      </div>
                      <ArrowLeft className="h-4 w-4 rotate-180 text-gray-400" />
                    </Link>
                    
                    {/* Right-side submenu for airline-specific ticket purchase */}
                    <div className="absolute left-full top-0 ml-1 w-72 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-300 border border-gray-100">
                      <div className="p-2">
                        <Link to="/thy-bilet-satin-alma" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-red-50 hover:text-thy rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/TK.webp"
                            alt="THY" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">THY Bilet Satın Alma</span>
                        </Link>
                        <Link to="/pegasus-bilet-satin-alma" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-yellow-50 hover:text-pegasus rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/PC.webp"
                            alt="Pegasus" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">Pegasus Bilet Satın Alma</span>
                        </Link>
                        <Link to="/sunexpress-bilet-satin-alma" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-orange-50 hover:text-sunexpress rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/XQ.webp"
                            alt="SunExpress" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">SunExpress Bilet Satın Alma</span>
                        </Link>
                        <Link to="/ajet-bilet-satin-alma" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-ajet rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/VF.webp"
                            alt="AJet" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">AJet Bilet Satın Alma</span>
                        </Link>
                        <Link to="/azal-bilet-satin-alma" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-purple-50 hover:text-azal rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/J2.webp"
                            alt="AZAL" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">AZAL Bilet Satın Alma</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative group/submenu">
                    <Link to="/hizmetler/bilet-degisikligi" className="flex items-center justify-between gap-3 px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 group/item">
                      <div className="flex items-center gap-3">
                        <div className="h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center">
                          <RefreshCw className="h-3 w-3 text-blue-600" />
                        </div>
                        <span className="font-medium">Bilet Değişiklik</span>
                      </div>
                      <ArrowLeft className="h-4 w-4 rotate-180 text-gray-400" />
                    </Link>
                    
                    {/* Right-side submenu for airline-specific ticket change */}
                    <div className="absolute left-full top-0 ml-1 w-72 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-300 border border-gray-100">
                      <div className="p-2">
                        <Link to="/thy-bilet-degisikligi" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-red-50 hover:text-thy rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/TK.webp"
                            alt="THY" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">THY Bilet Değişikliği</span>
                        </Link>
                        <Link to="/pegasus-bilet-degisikligi" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-yellow-50 hover:text-pegasus rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/PC.webp"
                            alt="Pegasus" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">Pegasus Bilet Değişikliği</span>
                        </Link>
                        <Link to="/sunexpress-bilet-degisikligi" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-orange-50 hover:text-sunexpress rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/XQ.webp"
                            alt="SunExpress" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">SunExpress Bilet Değişikliği</span>
                        </Link>
                        <Link to="/ajet-bilet-degisikligi" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-ajet rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/VF.webp"
                            alt="AJet" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">AJet Bilet Değişikliği</span>
                        </Link>
                        <Link to="/azal-bilet-degisikligi" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-purple-50 hover:text-azal rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/J2.webp"
                            alt="AZAL" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">AZAL Bilet Değişikliği</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative group/submenu">
                    <Link to="/hizmetler/isim-degisikligi" className="flex items-center justify-between gap-3 px-4 py-3 text-gray-800 hover:bg-green-50 hover:text-green-600 rounded-lg transition-all duration-200 group/item">
                      <div className="flex items-center gap-3">
                        <div className="h-6 w-6 bg-green-100 rounded-full flex items-center justify-center">
                          <Edit className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="font-medium">İsim Değişikliği</span>
                      </div>
                      <ArrowLeft className="h-4 w-4 rotate-180 text-gray-400" />
                    </Link>
                    
                    {/* Right-side submenu for airline-specific name change */}
                    <div className="absolute left-full top-0 ml-1 w-72 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-300 border border-gray-100">
                      <div className="p-2">
                        <Link to="/thy-isim-degisikligi" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-red-50 hover:text-thy rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/TK.webp"
                            alt="THY" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">THY İsim Değişikliği</span>
                        </Link>
                        <Link to="/pegasus-isim-degisikligi" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-yellow-50 hover:text-pegasus rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/PC.webp"
                            alt="Pegasus" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">Pegasus İsim Değişikliği</span>
                        </Link>
                        <Link to="/sunexpress-isim-degisikligi" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-orange-50 hover:text-sunexpress rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/XQ.webp"
                            alt="SunExpress" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">SunExpress İsim Değişikliği</span>
                        </Link>
                        <Link to="/ajet-isim-degisikligi" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-ajet rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/VF.webp"
                            alt="AJet" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">AJet İsim Değişikliği</span>
                        </Link>
                        <Link to="/azal-isim-degisikligi" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-purple-50 hover:text-azal rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/J2.webp"
                            alt="AZAL" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">AZAL İsim Değişikliği</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative group/submenu">
                    <Link to="/hizmetler/iptal-iade" className="flex items-center justify-between gap-3 px-4 py-3 text-gray-800 hover:bg-red-50 hover:text-red-600 rounded-lg transition-all duration-200 group/item">
                      <div className="flex items-center gap-3">
                        <div className="h-6 w-6 bg-red-100 rounded-full flex items-center justify-center">
                          <XCircle className="h-3 w-3 text-red-600" />
                        </div>
                        <span className="font-medium">İptal ve İade</span>
                      </div>
                      <ArrowLeft className="h-4 w-4 rotate-180 text-gray-400" />
                    </Link>
                    
                    {/* Right-side submenu for airline-specific cancel/refund */}
                    <div className="absolute left-full top-0 ml-1 w-72 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-300 border border-gray-100">
                      <div className="p-2">
                        <Link to="/thy-iptal-iade" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-red-50 hover:text-thy rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/TK.webp"
                            alt="THY" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">THY İptal ve İade</span>
                        </Link>
                        <Link to="/pegasus-iptal-iade" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-yellow-50 hover:text-pegasus rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/PC.webp"
                            alt="Pegasus" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">Pegasus İptal ve İade</span>
                        </Link>
                        <Link to="/sunexpress-iptal-iade" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-orange-50 hover:text-sunexpress rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/XQ.webp"
                            alt="SunExpress" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">SunExpress İptal ve İade</span>
                        </Link>
                        <Link to="/ajet-iptal-iade" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-ajet rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/VF.webp"
                            alt="AJet" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">AJet İptal ve İade</span>
                        </Link>
                        <Link to="/azal-iptal-iade" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-purple-50 hover:text-azal rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/J2.webp"
                            alt="AZAL" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">AZAL İptal ve İade</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative group/submenu">
                    <Link to="/hizmetler/sinif-yukseltme" className="flex items-center justify-between gap-3 px-4 py-3 text-gray-800 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-all duration-200 group/item">
                      <div className="flex items-center gap-3">
                        <div className="h-6 w-6 bg-indigo-100 rounded-full flex items-center justify-center">
                          <ArrowUp className="h-3 w-3 text-indigo-600" />
                        </div>
                        <span className="font-medium">Sınıf Yükseltme</span>
                      </div>
                      <ArrowLeft className="h-4 w-4 rotate-180 text-gray-400" />
                    </Link>
                    
                    {/* Right-side submenu for airline-specific class upgrade */}
                    <div className="absolute left-full top-0 ml-1 w-72 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-300 border border-gray-100">
                      <div className="p-2">
                        <Link to="/thy-sinif-yukseltme" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-red-50 hover:text-thy rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/TK.webp"
                            alt="THY" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">THY Sınıf Yükseltme</span>
                        </Link>
                        <Link to="/pegasus-sinif-yukseltme" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-yellow-50 hover:text-pegasus rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/PC.webp"
                            alt="Pegasus" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">Pegasus Sınıf Yükseltme</span>
                        </Link>
                        <Link to="/sunexpress-sinif-yukseltme" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-orange-50 hover:text-sunexpress rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/XQ.webp"
                            alt="SunExpress" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">SunExpress Sınıf Yükseltme</span>
                </Link>
                        <Link to="/ajet-sinif-yukseltme" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-ajet rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/VF.webp"
                            alt="AJet" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">AJet Sınıf Yükseltme</span>
                </Link>
                        <Link to="/azal-sinif-yukseltme" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-purple-50 hover:text-azal rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/J2.webp"
                            alt="AZAL" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">AZAL Sınıf Yükseltme</span>
                </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <span className="hover:text-white/90 cursor-pointer font-medium text-white">
                Özel Hizmetler
              </span>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-1 border border-gray-100">
                <div className="p-2">
                  <div className="relative group/submenu">
                    <Link to="/hizmetler/evcil-hayvan" className="flex items-center justify-between gap-3 px-4 py-3 text-gray-800 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-all duration-200 group/item">
                      <div className="flex items-center gap-3">
                        <div className="h-6 w-6 bg-orange-100 rounded-full flex items-center justify-center">
                          <PawPrint className="h-3 w-3 text-orange-600" />
                        </div>
                        <span className="font-medium">Evcil Hayvan</span>
                      </div>
                      <ArrowLeft className="h-4 w-4 rotate-180 text-gray-400" />
                    </Link>
                    
                    {/* Right-side submenu for airline-specific pet services */}
                    <div className="absolute left-full top-0 ml-1 w-72 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-300 border border-gray-100">
                      <div className="p-2">
                        <Link to="/thy-evcil-hayvan" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-red-50 hover:text-thy rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/TK.webp"
                            alt="THY" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">THY Evcil Hayvan</span>
                        </Link>
                        <Link to="/pegasus-evcil-hayvan" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-yellow-50 hover:text-pegasus rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/PC.webp"
                            alt="Pegasus" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">Pegasus Evcil Hayvan</span>
                        </Link>
                        <Link to="/sunexpress-evcil-hayvan" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-orange-50 hover:text-sunexpress rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/XQ.webp"
                            alt="SunExpress" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">SunExpress Evcil Hayvan</span>
                        </Link>
                        <Link to="/ajet-evcil-hayvan" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-ajet rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/VF.webp"
                            alt="AJet" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">AJet Evcil Hayvan</span>
                        </Link>
                        <Link to="/azal-evcil-hayvan" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-purple-50 hover:text-azal rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/J2.webp"
                            alt="AZAL" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">AZAL Evcil Hayvan</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative group/submenu">
                    <Link to="/hizmetler/refakatsiz-cocuk" className="flex items-center justify-between gap-3 px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 group/item">
                      <div className="flex items-center gap-3">
                        <div className="h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center">
                          <Users className="h-3 w-3 text-blue-600" />
                        </div>
                        <span className="font-medium">Refakatsiz Çocuk</span>
                      </div>
                      <ArrowLeft className="h-4 w-4 rotate-180 text-gray-400" />
                    </Link>
                    
                    {/* Right-side submenu for airline-specific unaccompanied minor */}
                    <div className="absolute left-full top-0 ml-1 w-72 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-300 border border-gray-100">
                      <div className="p-2">
                        <Link to="/thy-refakatsiz-cocuk" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-red-50 hover:text-thy rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/TK.webp"
                            alt="THY" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">THY Refakatsiz Çocuk</span>
                        </Link>
                        <Link to="/pegasus-refakatsiz-cocuk" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-yellow-50 hover:text-pegasus rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/PC.webp"
                            alt="Pegasus" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">Pegasus Refakatsiz Çocuk</span>
                        </Link>
                        <Link to="/sunexpress-refakatsiz-cocuk" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-orange-50 hover:text-sunexpress rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/XQ.webp"
                            alt="SunExpress" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">SunExpress Refakatsiz Çocuk</span>
                </Link>
                        <Link to="/ajet-refakatsiz-cocuk" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-ajet rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/VF.webp"
                            alt="AJet" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">AJet Refakatsiz Çocuk</span>
                </Link>
                        <Link to="/azal-refakatsiz-cocuk" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-purple-50 hover:text-azal rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/J2.webp"
                            alt="AZAL" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">AZAL Refakatsiz Çocuk</span>
                </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <span className="hover:text-white/90 cursor-pointer font-medium text-white">
                Yolcu Hizmetleri
              </span>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-1 border border-gray-100">
                <div className="p-2">
                  <div className="relative group/submenu">
                    <Link to="/hizmetler/koltuk-secimi" className="flex items-center justify-between gap-3 px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 group/item">
                      <div className="flex items-center gap-3">
                        <div className="h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center">
                          <Armchair className="h-3 w-3 text-blue-600" />
                        </div>
                        <span className="font-medium">Koltuk Seçimi</span>
                      </div>
                      <ArrowLeft className="h-4 w-4 rotate-180 text-gray-400" />
                    </Link>
                    
                    {/* Right-side submenu for airline-specific seat selection */}
                    <div className="absolute left-full top-0 ml-1 w-72 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-300 border border-gray-100">
                      <div className="p-2">
                        <Link to="/thy-koltuk-secimi" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-red-50 hover:text-thy rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/TK.webp"
                            alt="THY" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">THY Koltuk Seçimi</span>
                        </Link>
                        <Link to="/pegasus-koltuk-secimi" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-yellow-50 hover:text-pegasus rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/PC.webp"
                            alt="Pegasus" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">Pegasus Koltuk Seçimi</span>
                        </Link>
                        <Link to="/sunexpress-koltuk-secimi" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-orange-50 hover:text-sunexpress rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/XQ.webp"
                            alt="SunExpress" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">SunExpress Koltuk Seçimi</span>
                        </Link>
                        <Link to="/ajet-koltuk-secimi" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-ajet rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/VF.webp"
                            alt="AJet" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">AJet Koltuk Seçimi</span>
                        </Link>
                        <Link to="/azal-koltuk-secimi" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-purple-50 hover:text-azal rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/J2.webp"
                            alt="AZAL" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">AZAL Koltuk Seçimi</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative group/submenu">
                    <Link to="/hizmetler/bagaj-ekleme" className="flex items-center justify-between gap-3 px-4 py-3 text-gray-800 hover:bg-amber-50 hover:text-amber-600 rounded-lg transition-all duration-200 group/item">
                      <div className="flex items-center gap-3">
                        <div className="h-6 w-6 bg-amber-100 rounded-full flex items-center justify-center">
                          <Luggage className="h-3 w-3 text-amber-600" />
                        </div>
                        <span className="font-medium">Bagaj Ekleme</span>
                      </div>
                      <ArrowLeft className="h-4 w-4 rotate-180 text-gray-400" />
                    </Link>
                    
                    {/* Right-side submenu for airline-specific baggage */}
                    <div className="absolute left-full top-0 ml-1 w-72 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-300 border border-gray-100">
                      <div className="p-2">
                        <Link to="/thy-bagaj-ekleme" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-red-50 hover:text-thy rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/TK.webp"
                            alt="THY" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">THY Bagaj Ekleme</span>
                        </Link>
                        <Link to="/pegasus-bagaj-ekleme" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-yellow-50 hover:text-pegasus rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/PC.webp"
                            alt="Pegasus" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">Pegasus Bagaj Ekleme</span>
                        </Link>
                        <Link to="/sunexpress-bagaj-ekleme" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-orange-50 hover:text-sunexpress rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/XQ.webp"
                            alt="SunExpress" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">SunExpress Bagaj Ekleme</span>
                        </Link>
                        <Link to="/ajet-bagaj-ekleme" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-ajet rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/VF.webp"
                            alt="AJet" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">AJet Bagaj Ekleme</span>
                        </Link>
                        <Link to="/azal-bagaj-ekleme" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-purple-50 hover:text-azal rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/J2.webp"
                            alt="AZAL" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">AZAL Bagaj Ekleme</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative group/submenu">
                    <Link to="/hizmetler/check-in" className="flex items-center justify-between gap-3 px-4 py-3 text-gray-800 hover:bg-green-50 hover:text-green-600 rounded-lg transition-all duration-200 group/item">
                      <div className="flex items-center gap-3">
                        <div className="h-6 w-6 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="font-medium">Check-in</span>
                      </div>
                      <ArrowLeft className="h-4 w-4 rotate-180 text-gray-400" />
                    </Link>
                    
                    {/* Right-side submenu for airline-specific check-in */}
                    <div className="absolute left-full top-0 ml-1 w-72 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-300 border border-gray-100">
                      <div className="p-2">
                        <Link to="/thy-check-in" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-red-50 hover:text-thy rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/TK.webp"
                            alt="THY" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">THY Check-in</span>
                        </Link>
                        <Link to="/pegasus-check-in" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-yellow-50 hover:text-pegasus rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/PC.webp"
                            alt="Pegasus" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">Pegasus Check-in</span>
                        </Link>
                        <Link to="/sunexpress-check-in" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-orange-50 hover:text-sunexpress rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/XQ.webp"
                            alt="SunExpress" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">SunExpress Check-in</span>
                        </Link>
                        <Link to="/ajet-check-in" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-ajet rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/VF.webp"
                            alt="AJet" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">AJet Check-in</span>
                </Link>
                        <Link to="/azal-check-in" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-purple-50 hover:text-azal rounded-lg transition-all duration-200 whitespace-nowrap">
                          <img 
                            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_24,w_24,q_auto/images/airline/small/J2.webp"
                            alt="AZAL" 
                            className="h-6 w-6 rounded-full flex-shrink-0"
                          />
                          <span className="font-medium">AZAL Check-in</span>
                </Link>
                      </div>
                    </div>
                  </div>
                  
                  <Link to="/hizmetler/ucus-gecikmesi" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-all duration-200 group/item">
                    <div className="h-6 w-6 bg-orange-100 rounded-full flex items-center justify-center">
                      <Clock className="h-3 w-3 text-orange-600" />
                    </div>
                    <span className="font-medium">Uçuş Gecikmesi</span>
                </Link>
                  <Link to="/hizmetler/kayip-esya" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-red-50 hover:text-red-600 rounded-lg transition-all duration-200 group/item">
                    <div className="h-6 w-6 bg-red-100 rounded-full flex items-center justify-center">
                      <Search className="h-3 w-3 text-red-600" />
                    </div>
                    <span className="font-medium">Kayıp Eşya</span>
                </Link>
                  <Link to="/hizmetler/rezervasyon-yonetimi" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 group/item">
                    <div className="h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <Calendar className="h-3 w-3 text-blue-600" />
                    </div>
                    <span className="font-medium">Rezervasyon Yönetimi</span>
                </Link>
                  <Link to="/hizmetler/bilet-sorgulama" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-all duration-200 group/item">
                    <div className="h-6 w-6 bg-indigo-100 rounded-full flex items-center justify-center">
                      <BookOpen className="h-3 w-3 text-indigo-600" />
                    </div>
                    <span className="font-medium">Bilet Sorgulama</span>
                </Link>
                  <Link to="/hizmetler/ozel-yardim" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-pink-50 hover:text-pink-600 rounded-lg transition-all duration-200 group/item">
                    <div className="h-6 w-6 bg-pink-100 rounded-full flex items-center justify-center">
                      <Heart className="h-3 w-3 text-pink-600" />
                    </div>
                    <span className="font-medium">Özel Yardım</span>
                </Link>
                  <Link to="/hizmetler/sik-sorulan-sorular" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-gray-50 hover:text-gray-600 rounded-lg transition-all duration-200 group/item">
                    <div className="h-6 w-6 bg-gray-100 rounded-full flex items-center justify-center">
                      <HelpCircle className="h-3 w-3 text-gray-600" />
                    </div>
                    <span className="font-medium">Sık Sorulan Sorular</span>
                </Link>
                </div>
              </div>
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className={`flex items-center gap-2 ${getButtonColor(location.pathname)} rounded-lg px-4 py-2 shadow-md border-2 border-white/20 font-bold`}
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
