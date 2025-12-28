import React from 'react';
import { Briefcase } from 'lucide-react';

interface AirlineServicesGridProps {
  airlineId: string;
  airlineName: string;
  airlineShortName: string;
}

const AirlineServicesGrid: React.FC<AirlineServicesGridProps> = ({ 
  airlineId, 
  airlineName,
  airlineShortName 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Briefcase className="h-6 w-6 text-blue-600" />
        {airlineName} Hizmetleri
      </h2>
      <p className="text-gray-600 mb-6">
        {airlineName} ile ilgili tüm işlemleriniz için size yardımcı oluyoruz. Aşağıdaki hizmetlerimizden faydalanabilirsiniz:
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Bilet Satın Alma */}
        <a href={`/${airlineId}-bilet-satin-alma`} className="group block">
          <div className="border-2 border-gray-200 rounded-lg p-5 hover:shadow-lg hover:border-blue-300 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{airlineShortName} Bilet Satın Alma</h3>
            </div>
            <p className="text-sm text-gray-600">Yeni bilet rezervasyonu ve satın alma işlemleri</p>
          </div>
        </a>

        {/* Bilet İptal ve İade */}
        <a href={`/${airlineId}-iptal-iade`} className="group block">
          <div className="border-2 border-gray-200 rounded-lg p-5 hover:shadow-lg hover:border-blue-300 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{airlineShortName} Bilet İptal ve İade</h3>
            </div>
            <p className="text-sm text-gray-600">Bilet iptal işlemleri ve iade süreçleri</p>
          </div>
        </a>

        {/* Bilet Değişikliği */}
        <a href={`/${airlineId}-bilet-degisikligi`} className="group block">
          <div className="border-2 border-gray-200 rounded-lg p-5 hover:shadow-lg hover:border-blue-300 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{airlineShortName} Bilet Değişikliği</h3>
            </div>
            <p className="text-sm text-gray-600">Tarih, saat ve rota değişiklik işlemleri</p>
          </div>
        </a>

        {/* Online Check-in */}
        <a href={`/${airlineId}-check-in`} className="group block">
          <div className="border-2 border-gray-200 rounded-lg p-5 hover:shadow-lg hover:border-blue-300 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{airlineShortName} Online Check-in</h3>
            </div>
            <p className="text-sm text-gray-600">Hızlı ve kolay online check-in işlemleri</p>
          </div>
        </a>

        {/* Bagaj Ekleme */}
        <a href={`/${airlineId}-bagaj-ekleme`} className="group block">
          <div className="border-2 border-gray-200 rounded-lg p-5 hover:shadow-lg hover:border-blue-300 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="h-6 w-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{airlineShortName} Bagaj Ekleme</h3>
            </div>
            <p className="text-sm text-gray-600">Ek bagaj satın alma ve bagaj bilgileri</p>
          </div>
        </a>

        {/* Koltuk Seçimi */}
        <a href={`/${airlineId}-koltuk-secimi`} className="group block">
          <div className="border-2 border-gray-200 rounded-lg p-5 hover:shadow-lg hover:border-blue-300 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{airlineShortName} Koltuk Seçimi</h3>
            </div>
            <p className="text-sm text-gray-600">Özel koltuk seçimi ve yerleştirme hizmetleri</p>
          </div>
        </a>

        {/* Refakatsiz Çocuk */}
        <a href={`/${airlineId}-refakatsiz-cocuk`} className="group block">
          <div className="border-2 border-gray-200 rounded-lg p-5 hover:shadow-lg hover:border-blue-300 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="h-6 w-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{airlineShortName} Refakatsiz Çocuk</h3>
            </div>
            <p className="text-sm text-gray-600">Refakatsiz çocuk hizmeti ve özel yardım</p>
          </div>
        </a>

        {/* Evcil Hayvan */}
        <a href={`/${airlineId}-evcil-hayvan`} className="group block">
          <div className="border-2 border-gray-200 rounded-lg p-5 hover:shadow-lg hover:border-blue-300 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="h-6 w-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{airlineShortName} Evcil Hayvan</h3>
            </div>
            <p className="text-sm text-gray-600">Evcil hayvan taşıma kuralları ve işlemleri</p>
          </div>
        </a>

        {/* Sınıf Yükseltme */}
        <a href={`/${airlineId}-sinif-yukseltme`} className="group block">
          <div className="border-2 border-gray-200 rounded-lg p-5 hover:shadow-lg hover:border-blue-300 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{airlineShortName} Sınıf Yükseltme</h3>
            </div>
            <p className="text-sm text-gray-600">Business ve First Class yükseltme işlemleri</p>
          </div>
        </a>

        {/* İsim Değişikliği */}
        <a href={`/${airlineId}-isim-degisikligi`} className="group block">
          <div className="border-2 border-gray-200 rounded-lg p-5 hover:shadow-lg hover:border-blue-300 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="h-6 w-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{airlineShortName} İsim Değişikliği</h3>
            </div>
            <p className="text-sm text-gray-600">Bilet üzerinde isim düzeltme işlemleri</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default AirlineServicesGrid;

