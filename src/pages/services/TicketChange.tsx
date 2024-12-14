import { Header } from "@/components/Header";
import { CallButton } from "@/components/CallButton";
import { Link } from "react-router-dom";

const TicketChange = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="text-primary hover:underline mb-8 inline-block">
          ← Ana Sayfaya Dön
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Bilet Değişikliği Hizmeti</h1>
          
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05"
              alt="Bilet Değişikliği"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-8"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead mb-6">
              Seyahat planlarınızda değişiklik mi gerekiyor? Endişelenmeyin! Bilet değişikliği hizmetimiz ile 
              tüm değişiklik işlemlerinizi hızlı ve kolay bir şekilde gerçekleştirmenize yardımcı oluyoruz.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Bilet Değişikliği Nasıl Yapılır?</h2>
            <p>
              Bilet değişikliği sürecimiz, müşterilerimizin ihtiyaçlarını karşılamak üzere tasarlanmıştır. 
              Çağrı merkezimizi arayarak, deneyimli müşteri temsilcilerimizden yardım alabilir ve değişiklik 
              işlemlerinizi kolayca gerçekleştirebilirsiniz.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Değişiklik Yapılabilecek Durumlar</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Uçuş tarihi değişikliği</li>
              <li>Yolcu bilgileri düzeltme</li>
              <li>Rota değişikliği</li>
              <li>Ek hizmet ekleme veya çıkarma</li>
              <li>Sınıf yükseltme</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Değişiklik Sürecinde Dikkat Edilmesi Gerekenler</h2>
            <p>
              Bilet değişikliği yaparken bazı önemli noktalara dikkat etmek gerekir. Müşteri temsilcilerimiz 
              bu konularda sizi detaylı şekilde bilgilendirecektir:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Değişiklik ücretleri ve kuralları</li>
              <li>Yeni uçuş için fiyat farkı</li>
              <li>Değişiklik yapılabilecek son tarih</li>
              <li>Değişiklik sonrası yeni kurallar ve kısıtlamalar</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Acil Durum Değişiklikleri</h2>
            <p>
              Acil durumlarda bilet değişikliği gerektiğinde, öncelikli olarak işleminizi gerçekleştiriyoruz. 
              7/24 hizmet veren çağrı merkezimiz, acil durumlarınızda size hızlı çözümler sunmak için hazır.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Değişiklik Maliyetleri</h2>
            <p>
              Bilet değişikliği maliyetleri, değişiklik türüne ve havayolu kurallarına göre farklılık gösterebilir. 
              Müşteri temsilcilerimiz, değişiklik öncesinde tüm maliyetleri şeffaf bir şekilde sizinle paylaşacaktır.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-4">Size Nasıl Yardımcı Olabiliriz?</h3>
              <p>
                Bilet değişikliği ile ilgili tüm sorularınız için çağrı merkezimizi arayabilirsiniz. 
                Deneyimli ekibimiz, size en uygun çözümü sunmak için hazır bekliyor. Değişiklik işlemlerinizi 
                minimum stres ve maksimum memnuniyetle gerçekleştirmeniz için yanınızdayız.
              </p>
            </div>
          </div>
        </div>
      </div>
      <CallButton />
    </div>
  );
};

export default TicketChange;