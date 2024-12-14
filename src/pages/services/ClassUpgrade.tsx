import { Header } from "@/components/Header";
import { CallButton } from "@/components/CallButton";
import { Link } from "react-router-dom";

const ClassUpgrade = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="text-primary hover:underline mb-8 inline-block">
          ← Ana Sayfaya Dön
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Sınıf Yükseltme Hizmeti</h1>
          
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad"
              alt="Sınıf Yükseltme"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-8"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead mb-6">
              Seyahat deneyiminizi daha konforlu hale getirmek için sınıf yükseltme hizmetimizden 
              yararlanabilirsiniz. Size özel fırsatlar ve avantajlar için çağrı merkezimizi arayabilirsiniz.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Sınıf Yükseltme Avantajları</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Daha geniş koltuk ve bacak mesafesi</li>
              <li>Özel ikram hizmetleri</li>
              <li>Özel check-in kontuarları</li>
              <li>Lounge erişimi</li>
              <li>Öncelikli bagaj teslimi</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Nasıl Sınıf Yükseltme Yapılır?</h2>
            <p>
              Sınıf yükseltme işleminizi çağrı merkezimizi arayarak kolayca gerçekleştirebilirsiniz. 
              Müşteri temsilcilerimiz size mevcut seçenekleri ve fiyatları detaylı olarak anlatacaktır.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-4">Size Nasıl Yardımcı Olabiliriz?</h3>
              <p>
                Sınıf yükseltme ile ilgili tüm sorularınız için 7/24 hizmet veren çağrı merkezimizi 
                arayabilirsiniz. Deneyimli ekibimiz size en uygun seçeneği sunmak için hazır bekliyor.
              </p>
            </div>
          </div>
        </div>
      </div>
      <CallButton />
    </div>
  );
};

export default ClassUpgrade;