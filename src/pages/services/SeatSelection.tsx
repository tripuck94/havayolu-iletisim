import { Header } from "@/components/Header";
import { CallButton } from "@/components/CallButton";
import { Link } from "react-router-dom";

const SeatSelection = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="text-primary hover:underline mb-8 inline-block">
          ← Ana Sayfaya Dön
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Koltuk Seçimi Hizmeti</h1>
          
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1540339832862-46d6239d0157"
              alt="Koltuk Seçimi"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-8"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead mb-6">
              Uçuş deneyiminizi kişiselleştirmek ve daha konforlu hale getirmek için koltuk seçimi hizmetimizden 
              yararlanabilirsiniz. Size en uygun koltuğu seçmenize yardımcı olmak için buradayız.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Koltuk Seçimi Neden Önemli?</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Daha fazla bacak mesafesi için ön sıra koltukları</li>
              <li>Hızlı iniş için koridor koltukları</li>
              <li>Manzara için pencere kenarı koltukları</li>
              <li>Ailece seyahat için yan yana koltuklar</li>
              <li>Özel ihtiyaçlar için acil çıkış koltukları</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Koltuk Seçimi Nasıl Yapılır?</h2>
            <p>
              Koltuk seçimi işleminizi çağrı merkezimizi arayarak kolayca gerçekleştirebilirsiniz. 
              Müşteri temsilcilerimiz size mevcut koltukları gösterecek ve tercihlerinize en uygun 
              koltuğu seçmenize yardımcı olacaktır.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-4">Size Nasıl Yardımcı Olabiliriz?</h3>
              <p>
                Koltuk seçimi ile ilgili tüm sorularınız için 7/24 hizmet veren çağrı merkezimizi 
                arayabilirsiniz. Deneyimli ekibimiz size en uygun koltuğu bulmanızda yardımcı olmak 
                için hazır bekliyor.
              </p>
            </div>
          </div>
        </div>
      </div>
      <CallButton />
    </div>
  );
};

export default SeatSelection;