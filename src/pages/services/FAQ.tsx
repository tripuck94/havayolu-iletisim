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
    window.location.href = "tel:08502428117";
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
      title: "Rezervasyon ve Bilet İşlemleri",
      icon: <CreditCard className="h-6 w-6 text-blue-600" />,
      questions: [
        {
          q: "Nasıl rezervasyon yapabilirim?",
          a: "Rezervasyon yapmak için web sitemizi ziyaret edebilir, müşteri hizmetlerimizi arayabilir veya yetkili acentelerimizden hizmet alabilirsiniz. Online rezervasyon 7/24 açıktır."
        },
        {
          q: "Rezervasyonumu nasıl iptal edebilirim?",
          a: "Rezervasyon iptal işlemlerini PNR kodunuz ile web sitemizden veya müşteri hizmetlerimizi arayarak gerçekleştirebilirsiniz. İptal koşulları bilet türüne göre değişiklik gösterir."
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
