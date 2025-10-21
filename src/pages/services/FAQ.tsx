import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, Phone, Search, ChevronDown, Clock, Users, CreditCard, Luggage } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";

import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const FAQ = () => {
  const handleCall = () => {
    window.location.href = "tel:08503089840";
  };

  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: "Platform ve İş Modelimiz",
      icon: <HelpCircle className="h-6 w-6 text-purple-600" />,
      questions: [
        {
          q: "Resmi havayolu web sitesi misiniz?",
          a: "Hayır, resmi bir havayolu web sitesi değiliz. Biz bir metasearch (uçuş karşılaştırma) platformuyuz. Havayollarının uçuşlarını karşılaştırıp en uygun seçeneği bulmanıza yardımcı oluyoruz."
        },
        {
          q: "Nasıl para kazanıyorsunuz?",
          a: "Karşılaştırma platformu olarak bazı rezervasyonlardan komisyon alabiliriz. Bu sizin için ekstra ücret anlamına gelmez. Hizmetimiz tamamen ücretsizdir ve sizin lehinizdedir."
        },
        {
          q: "TURSAB belgeniz var mı?",
          a: "Metasearch platformu (web arama portalı) olarak TURSAB belgesi gerekmemektedir. NACE faaliyet kodumuz: 639102 - Web Arama Portalı Faaliyetleri. Direkt bilet satışı yapmadığımız için A grubu seyahat acentesi belgesi zorunlu değildir."
        },
        {
          q: "Fiyatlar neden farklı olabiliyor?",
          a: "Fiyatlar havayollarından ve partnerlerimizden anlık olarak çekilmektedir. Talebe, mevsime ve havayolu kampanyalarına göre değişiklik gösterebilir. En güncel fiyat için lütfen bizimle iletişime geçin."
        }
      ]
    },
    {
      title: "Rezervasyon ve Bilet İşlemleri",
      icon: <CreditCard className="h-6 w-6 text-blue-600" />,
      questions: [
        {
          q: "Nasıl rezervasyon yapabilirim?",
          a: "Size en uygun uçuşu bulduktan sonra, rezervasyon işlemi için sizi havayolu veya yetkili acenteyle buluşturuyoruz. 7/24 danışmanlık desteğimiz ile tüm süreçte yanınızdayız."
        },
        {
          q: "Rezervasyonumu nasıl iptal edebilirim?",
          a: "İptal işlemleri rezervasyonu yaptığınız havayolu veya acente üzerinden gerçekleştirilir. Biz size süreçte yardımcı olur ve yönlendirme yaparız. İptal koşulları bilet türüne göre değişir."
        },
        {
          q: "Ödemeyi size mi yapacağım?",
          a: "Hayır. Ödeme işlemleri direkt olarak havayolu veya yetkili acente üzerinden yapılır. Biz sadece karşılaştırma ve danışmanlık hizmeti sunuyoruz."
        }
      ]
    },
    {
      title: "Destek ve İletişim",
      icon: <Phone className="h-6 w-6 text-green-600" />,
      questions: [
        {
          q: "Müşteri hizmetlerinize nasıl ulaşabilirim?",
          a: "0850 308 98 40 numaralı telefonumuzdan 7/24 bize ulaşabilirsiniz. Ayrıca info@havayoluiletisim.com e-posta adresimizden de iletişime geçebilirsiniz."
        },
        {
          q: "Havayolunun resmi telefonunu nereden bulabilirim?",
          a: "Her havayolunun resmi iletişim bilgilerini ilgili havayolu sayfalarımızda küçük gri yazı ile belirtiyoruz. Bu numaralar direkt havayolu ile iletişim kurmak istemeniz durumunda paylaşılmaktadır."
        },
        {
          q: "Yanıt süresi ne kadar?",
          a: "Telefon desteğimizde anında yanıt, e-posta desteğinde ortalama 2-4 saat içinde yanıt veriyoruz. Acil durumlar için telefon desteğimizi kullanmanızı öneririz."
        }
      ]
    },
    {
      title: "Güvenlik ve Gizlilik",
      icon: <Users className="h-6 w-6 text-red-600" />,
      questions: [
        {
          q: "Kişisel bilgilerim güvende mi?",
          a: "Evet. KVKK (Kişisel Verilerin Korunması Kanunu) kapsamında tüm verileriniz güvenle saklanır ve 3. kişilerle paylaşılmaz. Detaylar için Kişisel Verilerin Korunması sayfamızı inceleyebilirsiniz."
        },
        {
          q: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
          a: "Ödeme işlemleri direkt havayolu veya acente üzerinden yapıldığı için, ilgili kurumun kabul ettiği tüm ödeme yöntemlerini kullanabilirsiniz (Kredi kartı, banka kartı, havale vb.)."
        },
        {
          q: "SSL sertifikanız var mı?",
          a: "Evet, sitemiz 256-bit SSL şifreleme ile korunmaktadır. Tüm veri iletişimi güvenli kanallar üzerinden gerçekleşir."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <Header />
      <div className="container py-12 md:py-16 space-y-16 mb-16">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <HelpCircle className="h-10 w-10 text-indigo-600" />
            Sık Sorulan Sorular
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Size en sık sorulan sorular ve cevaplarını derledik. 
            Aradığınız cevabı bulamazsanız, müşteri hizmetlerimizle iletişime geçebilirsiniz.
          </p>
        </div>

        {/* Search Box */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Soru arayın..."
              className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100">
                <CardTitle className="flex items-center gap-3">
                  {category.icon}
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {category.questions.map((faq, index) => {
                  const globalIndex = categoryIndex * 100 + index;
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <Collapsible key={index} open={isOpen} onOpenChange={() => toggleItem(globalIndex)}>
                      <CollapsibleTrigger className="w-full p-6 text-left hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-gray-800 pr-4">{faq.q}</h3>
                          <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                      </CollapsibleContent>
                    </Collapsible>
                  );
                })}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Help */}
        <div className="text-center bg-indigo-600 text-white p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Aradığınız Cevabı Bulamadınız mı?</h3>
          <p className="mb-6">
            Diğer sorularınız için müşteri hizmetleri ekibimiz size yardımcı olmaya hazır. 
            7/24 destek hattımızdan bize ulaşabilirsiniz.
          </p>
          <Button 
            onClick={handleCall} 
            variant="secondary"
            className="gap-2"
          >
            <Phone className="h-4 w-4" />
            Canlı Destek Hattı
          </Button>
        </div>

        {/* Fixed Bottom Button */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg">
          <Button onClick={handleCall} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-xl py-6">
            <Phone className="h-5 w-5 mr-2" />
            Hemen Ara
          </Button>
        </div>
      </div>

    </div>
  );
};

export default FAQ; 
