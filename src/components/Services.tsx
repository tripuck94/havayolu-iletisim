import { Plane, RefreshCw, XCircle, PawPrint, Phone, Users, CreditCard, Luggage } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const services = [
  {
    title: "THY İletişim",
    description: "Türk Hava Yolları müşteri hizmetleri ve destek. 7/24 hizmetinizdeyiz.",
    icon: Phone,
    link: "/contact/thy",
    color: "text-[#E81932]"
  },
  {
    title: "Pegasus İletişim",
    description: "Pegasus Hava Yolları iletişim merkezi ve yolcu destek hizmetleri.",
    icon: Phone,
    link: "/contact/pegasus",
    color: "text-[#FF9200]"
  },
  {
    title: "SunExpress İletişim",
    description: "SunExpress müşteri hizmetleri ve rezervasyon destek hattı.",
    icon: Phone,
    link: "/contact/sunexpress",
    color: "text-[#FFCD00]"
  },
  {
    title: "AJet İletişim",
    description: "AJet yolcu hizmetleri ve bilet işlemleri için destek.",
    icon: Phone,
    link: "/contact/ajet",
    color: "text-[#1B365D]"
  },
  {
    title: "Bilet Satış",
    description: "En uygun fiyatlı uçak biletleri ve özel kampanyalar için hemen arayın.",
    icon: Plane,
    link: "/",
    color: "text-primary"
  },
  {
    title: "Bilet Değişikliği",
    description: "Mevcut biletinizde tarih ve güzergah değişikliği yapabilirsiniz.",
    icon: RefreshCw,
    link: "/",
    color: "text-primary"
  },
  {
    title: "Bilet İptali",
    description: "İptal ve iade işlemleriniz için hızlı ve güvenilir destek.",
    icon: XCircle,
    link: "/",
    color: "text-primary"
  },
  {
    title: "Evcil Hayvan",
    description: "Evcil hayvanınızla seyahat için özel hizmetler ve rezervasyon.",
    icon: PawPrint,
    link: "/pet-services",
    color: "text-primary"
  },
  {
    title: "Refakatsiz Çocuk",
    description: "Yalnız seyahat eden çocuklar için özel refakat hizmeti.",
    icon: Users,
    link: "/",
    color: "text-primary"
  },
  {
    title: "Sınıf Yükseltme",
    description: "Uçuş sınıfınızı yükselterek daha konforlu seyahat edin.",
    icon: CreditCard,
    link: "/",
    color: "text-primary"
  },
  {
    title: "Bagaj Hizmetleri",
    description: "Bagaj politikaları ve ekstra bagaj satın alma işlemleri.",
    icon: Luggage,
    link: "/",
    color: "text-primary"
  }
];

export const Services = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container">
        <h2 className="text-center text-3xl font-bold mb-4">Hizmetlerimiz</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Tüm havayolları için bilet satış, değişiklik, iptal ve özel hizmetler için 7/24 yanınızdayız.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link to={service.link} key={service.title}>
              <Card className="transition-all hover:-translate-y-1 hover:shadow-lg h-full">
                <CardHeader>
                  <service.icon className={`h-12 w-12 mb-4 ${service.color}`} />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};