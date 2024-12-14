import { Header } from "@/components/Header";
import { CallButton } from "@/components/CallButton";
import { Link } from "react-router-dom";

const TicketPurchase = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="text-primary hover:underline mb-8 inline-block">
          ← Ana Sayfaya Dön
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Bilet Satın Alma Hizmeti</h1>
          
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1605281317010-fe5ffe798166"
              alt="Bilet Satın Alma"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-8"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead mb-6">
              Seyahat planlarınızı kolaylaştırmak ve size en uygun uçuş biletlerini bulmanıza yardımcı olmak için buradayız. 
              Çağrı merkezimiz aracılığıyla, tüm havayollarının biletlerini tek bir noktadan, en uygun fiyatlarla satın almanıza yardımcı oluyoruz.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Neden Bizi Tercih Etmelisiniz?</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>En uygun fiyat garantisi</li>
              <li>Tüm havayolları için tek noktadan hizmet</li>
              <li>Deneyimli müşteri temsilcileri</li>
              <li>7/24 destek hizmeti</li>
              <li>Güvenli ödeme seçenekleri</li>
              <li>Hızlı biletleme işlemi</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Bilet Satın Alma Sürecimiz</h2>
            <p>
              Bilet satın alma sürecimiz oldukça basit ve hızlıdır. Müşteri temsilcilerimiz size en uygun uçuşları bulma konusunda yardımcı olacaktır. 
              Tercih ettiğiniz tarih ve destinasyon için mevcut tüm seçenekleri sizinle paylaşır ve size en uygun bileti seçmenizde yardımcı oluruz.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Bilet Satın Alırken Dikkat Edilmesi Gerekenler</h3>
            <ol className="list-decimal pl-6 mb-6">
              <li>Seyahat tarihlerinizi kesinleştirin</li>
              <li>Pasaport ve vize gerekliliklerini kontrol edin</li>
              <li>Bagaj kurallarını öğrenin</li>
              <li>Check-in süreçleri hakkında bilgi alın</li>
              <li>Özel hizmet taleplerinizi belirtin (özel yemek, tekerlekli sandalye vb.)</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Ödeme Seçenekleri</h2>
            <p>
              Güvenli ödeme sistemimiz sayesinde, kredi kartı, banka kartı veya havale/EFT ile ödemenizi gerçekleştirebilirsiniz. 
              Taksit imkanları ve kampanyalar hakkında detaylı bilgi için müşteri temsilcilerimizle görüşebilirsiniz.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Bilet İptali ve Değişiklik</h2>
            <p>
              Satın aldığınız biletle ilgili herhangi bir değişiklik veya iptal durumunda da yanınızdayız. 
              Havayollarının değişiklik ve iptal politikaları hakkında sizi bilgilendirir ve en uygun çözümü bulmanıza yardımcı oluruz.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-4">Nasıl Yardımcı Olabiliriz?</h3>
              <p>
                Bilet satın alma sürecinde herhangi bir sorunuz veya yardıma ihtiyacınız olduğunda, 
                7/24 hizmet veren çağrı merkezimizi arayabilirsiniz. Deneyimli müşteri temsilcilerimiz, 
                size en uygun uçuş seçeneklerini sunmak ve tüm sorularınızı yanıtlamak için hazır bekliyor.
              </p>
            </div>
          </div>
        </div>
      </div>
      <CallButton />
    </div>
  );
};

export default TicketPurchase;