import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { FileText, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const TermsOfService = () => {
  const handleCall = () => {
    window.location.href = "tel:08502428117";
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <Header />
      <div className="container py-12 md:py-16 space-y-8 mb-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <FileText className="h-10 w-10 text-green-600" />
            Kullanım Koşulları
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hizmetlerimizi kullanım koşulları ve şartlarımız hakkında bilgi alın.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-6xl mx-auto">
          <div className="prose max-w-none space-y-6 text-sm leading-relaxed">
            <div className="mb-8">
              <p className="text-gray-600 mb-4">
                Hizmet Şartlarımız hakkında daha fazla bilgiye ihtiyaç duymanız veya sorularınız varsa, lütfen bizimle e-posta yoluyla bizimle iletişime geçmekten çekinmeyin.
              </p>
            </div>

            <h2 className="text-xl font-bold text-gray-800 border-b pb-2">Giriş</h2>
            <p>
              Bu web sitesinin kullanım ve şartları; Bu web sitesini kullanarak, bu kayıt ve şartları tam ve eksiksiz olarak kabul etmiş oluyorsunuz. Bu hüküm ve koşullara veya bu hükümlerin herhangi bir bölümüne katılmıyorsanız, bu web sitesini kullanmamalısınız.
            </p>
            <p>
              Bu web sitesini kullanabilmek için en az 18 [on sekiz] yaşta olmalısınız. Bu web sitesini kullanarak ve bu hüküm ve koşulları kabul ederek, en az 18 yaşında olduğunuzu garanti ve beyan edersiniz.
            </p>

            <h2 className="text-xl font-bold text-gray-800 border-b pb-2">Web sitesini kullanma lisansı</h2>
            <p>
              Aksi belirtilmediği sürece havayoluiletisim.com ve / veya lisans verenleri, bu sitede yayınlanan fikri mülkiyet haklarına ve havayoluiletisim.com sitesinde kullanılan materyallere sahiptir. Aşağıdaki lisansa tabi olarak, tüm bu fikri mülkiyet hakları saklıdır.
            </p>
            <p>
              Aşağıda ve diğer hüküm ve koşullarda belirtilen kısıtlamalara tabi olarak kişisel kullanımınız için web sitesinden sayfalar, dosyalar veya diğer içerikleri görüntüleyebilir, yalnızca önbelleğe alma amacıyla indirebilir ve yazdırabilirsiniz.
            </p>

            <h3 className="text-lg font-semibold text-gray-700">Yapmamalısınız:</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>bu web sitesindeki materyalleri ne basılmış ne de dijital ortamda veya belgelerde (başka bir web sitesinde yayınlama da dahil olmak üzere) yeniden yayınlamak;</li>
              <li>web sitesinden malzeme satmak, kiralamak veya alt lisans vermek;</li>
              <li>Web sitesindeki herhangi bir materyali halka göstermek;</li>
              <li>ticari amaçla bu web sitesinde yer alan materyalleri çoğaltmayın, kopyalamayın;</li>
              <li>web sitesindeki herhangi bir materyali düzenlemek veya başka türlü değiştirerek yayınlamak;</li>
              <li>Bu web sitesinden materyali yeniden dağıtma - özellikle yeniden dağıtılması için açıkça sunulan içerik hariç olmak üzere;</li>
              <li>iframe'lerin veya ekran tasarımcılarının kullanımıyla bu web sitesinin herhangi bir bölümünü yeniden yayınlamayın veya çoğaltmayın.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-800 border-b pb-2">Kabul edilebilir kullanım</h2>
            <p>
              Bu web sitesini, web sitesine zarar vermesine veya sebep olabileceği herhangi bir şekilde kullanmamalısınız veya havayoluiletisim.com'un erişilebilirliğinin veya erişilebilirliğinin bozulmamalıdır. Yasadışı illegal, hileli veya zararlı veya herhangi yasa dışı, hileli veya zararlı amaç veya aktivite ile bağlantılı olarak herhangi bir şekilde kullanamazsınız.
            </p>

            <h2 className="text-xl font-bold text-gray-800 border-b pb-2">Kısıtlı erişim</h2>
            <p>
              Bu web sitesinin belirli alanlarına erişim kısıtlıdır. havayoluiletisim.com, bu web sitesinin belirli alanlarına veya bizim takdirimize bağlı olarak, tüm web sitesine erişimi kısıtlama hakkını saklı tutar.
            </p>

            <h2 className="text-xl font-bold text-gray-800 border-b pb-2">Kullanıcı içeriği</h2>
            <p>
              Bu kayıt ve koşullarda, "kullanıcı içeriğiniz", bu web sitesine gönderdiğiniz herhangi bir amaç için (sınırlama olmaksızın metin, resim, ses materyali, video materyali ve görsel-işitsel materyali kapsar) anlamına gelir.
            </p>

            <h2 className="text-xl font-bold text-gray-800 border-b pb-2">Garanti kapsamı dışı</h2>
            <p>
              Bu web sitesi, herhangi bir beyan veya garanti olmaksızın "olduğu haliyle" açık veya zımni olarak verilmektedir. havayoluiletisim.com, bu web sitesi veya bu web sitesinde verilen bilgi ve materyallerle ilgili hiçbir beyan veya garanti vermemektedir.
            </p>

            <h2 className="text-xl font-bold text-gray-800 border-b pb-2">Kısıtlı Sorumluluk</h2>
            <p>
              havayoluiletisim.com, bu web sitesinin içeriği veya bu web sitesiyle bağlantılı olarak veya sizinle bağlantılı olmak üzere (temas yasası olsun, haksız fiiller veya başka türlü olursa olsun) sorumlu olmayacaktır.
            </p>

            <h2 className="text-xl font-bold text-gray-800 border-b pb-2">Tazminat</h2>
            <p>
              havayoluiletisim.com'u tazmin etmektesiniz ve havayoluiletisim.com'u herhangi bir kayıp, hasar, masraf, yükümlülük ve masrafa karşı tazmin etmeyi taahhüt ediyorsunuz.
            </p>

            <h2 className="text-xl font-bold text-gray-800 border-b pb-2">Kanun ve yargı</h2>
            <p>
              Bu hüküm ve koşullar İstanbul'un yasalarıyla düzenlenecek ve bu yasalar uyarınca yorumlanacak ve bu hüküm ve koşullarla ilgili herhangi bir anlaşmazlık, İstanbul'daki mahkemelerin münhasır yargı yetkisine tabi olacaktır.
            </p>

            <h2 className="text-xl font-bold text-gray-800 border-b pb-2">Şirket Bilgileri</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-800">TRIPUCK TURİZM LİMİTED ŞİRKETİ</p>
              <p className="text-gray-600 mt-2">
                <strong>Adres:</strong> Güzeloluk Mah, Lavınya Sitesi, 1830. Sk. E blok, 07200 Muratpaşa/Antalya
              </p>
              <p className="text-gray-600 mt-1">
                <strong>Web sitesi:</strong> havayoluiletisim.com
              </p>
            </div>
          </div>
        </div>

        <div className="text-center bg-green-600 text-white p-8 rounded-lg max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Daha Fazla Bilgi</h3>
          <p className="mb-6">
            Kullanım koşulları hakkında detaylı bilgi almak için bizimle iletişime geçin.
          </p>
          <Button 
            onClick={handleCall} 
            variant="secondary"
            className="gap-2"
          >
            <Phone className="h-4 w-4" />
            Hemen Ara
          </Button>
        </div>

        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg">
          <Button onClick={handleCall} className="w-full bg-green-600 hover:bg-green-700 text-white text-xl py-6">
            <Phone className="h-5 w-5 mr-2" />
            Hemen Ara
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfService; 
