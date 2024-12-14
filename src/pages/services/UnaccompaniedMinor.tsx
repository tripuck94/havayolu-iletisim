import { Header } from "@/components/Header";
import { CallButton } from "@/components/CallButton";
import { Link } from "react-router-dom";

const UnaccompaniedMinor = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="text-primary hover:underline mb-8 inline-block">
          ← Ana Sayfaya Dön
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Refakatsiz Çocuk Hizmeti</h1>
          
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1566454544259-f4b94c3d758c"
              alt="Refakatsiz Çocuk"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-8"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead mb-6">
              Çocuğunuzun güvenli ve konforlu bir şekilde seyahat etmesi için özel refakatsiz çocuk hizmetimiz 
              bulunmaktadır. Deneyimli ekibimiz, çocuğunuzun tüm seyahati boyunca güvende olmasını sağlar.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Refakatsiz Çocuk Hizmeti Nasıl Çalışır?</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Check-in'den varış noktasına kadar tam destek</li>
              <li>Özel refakatçi eşliğinde seyahat</li>
              <li>Güvenli transfer hizmeti</li>
              <li>Sürekli iletişim ve takip</li>
              <li>Varış noktasında belirlenen kişiye teslim</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Gerekli Belgeler ve Prosedürler</h2>
            <p>
              Refakatsiz çocuk hizmetinden yararlanmak için gerekli belgeler ve prosedürler hakkında 
              detaylı bilgi almak için müşteri temsilcilerimizle görüşebilirsiniz.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-4">Size Nasıl Yardımcı Olabiliriz?</h3>
              <p>
                Refakatsiz çocuk hizmeti ile ilgili tüm sorularınız için 7/24 hizmet veren çağrı merkezimizi 
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

export default UnaccompaniedMinor;