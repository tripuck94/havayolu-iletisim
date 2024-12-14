import { Header } from "@/components/Header";
import { CallButton } from "@/components/CallButton";
import { Link } from "react-router-dom";

const BaggageService = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="text-primary hover:underline mb-8 inline-block">
          ← Ana Sayfaya Dön
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Bagaj Hizmeti</h1>
          
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6"
              alt="Bagaj Hizmeti"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-8"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead mb-6">
              Seyahatiniz için ihtiyacınız olan ek bagaj hakkı ve bagaj hizmetleri konusunda size yardımcı olmaktan 
              memnuniyet duyarız. Bagaj politikaları ve ücretleri hakkında detaylı bilgi için çağrı merkezimizi 
              arayabilirsiniz.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Bagaj Hizmetlerimiz</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Ek bagaj hakkı satın alma</li>
              <li>Spor ekipmanları için özel bagaj hizmeti</li>
              <li>Değerli eşya taşıma prosedürleri</li>
              <li>Bagaj kayıp ve hasar süreçleri</li>
              <li>Özel boyutlu bagaj taşıma</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Bagaj Kuralları ve Kısıtlamalar</h2>
            <p>
              Her uçuşta geçerli olan bagaj kuralları ve kısıtlamalar hakkında detaylı bilgi almak için 
              müşteri temsilcilerimizle görüşebilirsiniz. Size en uygun bagaj seçeneğini sunmak için 
              hazır bekliyoruz.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-4">Size Nasıl Yardımcı Olabiliriz?</h3>
              <p>
                Bagaj hizmetleri ile ilgili tüm sorularınız için 7/24 hizmet veren çağrı merkezimizi 
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

export default BaggageService;