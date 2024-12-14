import { Header } from "@/components/Header";
import { CallButton } from "@/components/CallButton";
import { Link } from "react-router-dom";

const CheckIn = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="text-primary hover:underline mb-8 inline-block">
          ← Ana Sayfaya Dön
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Check-in Hizmeti</h1>
          
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1537538086243-1c61db1b0e4d"
              alt="Check-in"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-8"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead mb-6">
              Check-in işlemlerinizi hızlı ve kolay bir şekilde gerçekleştirmenize yardımcı oluyoruz. 
              Çağrı merkezimizi arayarak check-in işlemleriniz hakkında detaylı bilgi alabilirsiniz.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Check-in Seçenekleri</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Online check-in</li>
              <li>Havalimanı check-in</li>
              <li>Mobil check-in</li>
              <li>Grup check-in</li>
              <li>Özel yardım gerektiren yolcu check-in</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Check-in Süreçleri</h2>
            <p>
              Check-in süreçleri ve gerekli belgeler hakkında detaylı bilgi almak için müşteri 
              temsilcilerimizle görüşebilirsiniz. Size en uygun check-in seçeneğini sunmak için 
              hazır bekliyoruz.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-4">Size Nasıl Yardımcı Olabiliriz?</h3>
              <p>
                Check-in işlemleri ile ilgili tüm sorularınız için 7/24 hizmet veren çağrı merkezimizi 
                arayabilirsiniz. Deneyimli ekibimiz size en uygun çözümü sunmak için hazır bekliyor.
              </p>
            </div>
          </div>
        </div>
      </div>
      <CallButton />
    </div>
  );
};

export default CheckIn;