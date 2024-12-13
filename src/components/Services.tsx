import { Plane, RefreshCw, XCircle, PawPrint, Phone, Users, ShoppingCart, Luggage, ArrowRightLeft, ArrowUp, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const mainServices = [
  {
    title: "Bilet Satın Alma",
    description: "Online bilet satın alma işlemlerinizi hızlı ve güvenli bir şekilde gerçekleştirin.",
    icon: ShoppingCart,
    link: "/",
    bgImage: "url('https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-4.0.3')"
  },
  {
    title: "Bilet Değişikliği",
    description: "Mevcut biletinizde tarih ve güzergah değişikliği yapabilirsiniz.",
    icon: RefreshCw,
    link: "/",
    bgImage: "url('https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?ixlib=rb-4.0.3')"
  },
  {
    title: "Bilet İptali",
    description: "İptal ve iade işlemleriniz için hızlı ve güvenilir destek.",
    icon: XCircle,
    link: "/",
    bgImage: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3')"
  },
  {
    title: "Koltuk Seçimi",
    description: "Uçuşunuz için istediğiniz koltuğu önceden seçin.",
    icon: ArrowRightLeft,
    link: "/",
    bgImage: "url('https://images.unsplash.com/photo-1540339832862-46d6239d0157?ixlib=rb-4.0.3')"
  },
  {
    title: "Bagaj Ekleme",
    description: "Ek bagaj hakkı satın alma ve bagaj işlemlerinizi yönetin.",
    icon: Luggage,
    link: "/",
    bgImage: "url('https://images.unsplash.com/photo-1583296599188-0da1c7f05f72?ixlib=rb-4.0.3')"
  },
  {
    title: "Evcil Hayvan",
    description: "Evcil hayvanınızla seyahat için özel hizmetler ve rezervasyon.",
    icon: PawPrint,
    link: "/pet-services",
    bgImage: "url('https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3')"
  },
  {
    title: "Refakatsiz Çocuk",
    description: "Yalnız seyahat eden çocuklar için özel refakat hizmeti.",
    icon: Users,
    link: "/",
    bgImage: "url('https://images.unsplash.com/photo-1566454544259-f4b94c3d758c?ixlib=rb-4.0.3')"
  },
  {
    title: "İlave Sınıf Yükseltme",
    description: "Seyahat konforunuzu artırmak için sınıf yükseltme seçenekleri.",
    icon: ArrowUp,
    link: "/",
    bgImage: "url('https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?ixlib=rb-4.0.3')"
  },
  {
    title: "Check-in",
    description: "Online check-in yaparak havalimanında zaman kazanın.",
    icon: CheckCircle,
    link: "/",
    bgImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3')"
  }
];

export const Services = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Hizmetlerimiz
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Seyahat kararlarınızı detaylı bilgilerle almanıza yardımcı oluyoruz.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary/80 to-accent/80">
            UÇUŞUNUZUN KONTROLÜNÜ ALIN!
          </h3>
          <p className="text-gray-600 text-center mb-8 max-w-4xl mx-auto">
            Farklı havayolları tarafından belirlenen politika ve prosedürler hakkında kapsamlı bilgilere ulaşabileceğiniz bir platform sunuyoruz. 
            Seyahat düzenlemelerinin zorlu bir görev olduğunu göz önünde bulundurarak, bagaj ücretleri, koltuk seçimi, evcil hayvanlarla seyahat, 
            iptal politikaları ve daha fazlası hakkında sizi bilgilendirerek yolculuğunuzu sorunsuz planlamanıza yardımcı oluyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {mainServices.map((service, index) => (
            <Link 
              to={service.link} 
              key={service.title}
              className={`${
                index === 0 || index === 4 || index === 8 ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''
              } ${
                index === 2 ? 'lg:col-span-2' : ''
              }`}
            >
              <Card className="group relative h-full overflow-hidden rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: service.bgImage }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                </div>
                <div className="relative h-full p-8 flex flex-col justify-end text-white">
                  <div className="mb-4 transform transition-transform duration-500 group-hover:-translate-y-2">
                    <service.icon className="h-12 w-12 mb-4 text-primary-foreground" />
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-white/90 text-sm">{service.description}</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};