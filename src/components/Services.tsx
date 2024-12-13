import { Plane, RefreshCw, XCircle, PawPrint, Phone, Users, ShoppingCart, Luggage, ArrowRightLeft } from "lucide-react";
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
    bgImage: "url('https://images.unsplash.com/photo-1521727857535-28d2047cf87c?ixlib=rb-4.0.3')"
  },
  {
    title: "Bilet İptali",
    description: "İptal ve iade işlemleriniz için hızlı ve güvenilir destek.",
    icon: XCircle,
    link: "/",
    bgImage: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3')"
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
  }
];

export const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gray-400">NELER</span>
            <br />
            SAĞLIYORUZ?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Seyahat kararlarınızı detaylı bilgilerle almanıza yardımcı oluyoruz.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8">UÇUŞUNUZUN KONTROLÜNÜ ALIN!</h3>
          <p className="text-gray-600 mb-8 max-w-4xl">
            Farklı havayolları tarafından belirlenen politika ve prosedürler hakkında kapsamlı bilgilere ulaşabileceğiniz bir platform sunuyoruz. 
            Seyahat düzenlemelerinin zorlu bir görev olduğunu göz önünde bulundurarak, bagaj ücretleri, koltuk seçimi, evcil hayvanlarla seyahat, 
            iptal politikaları ve daha fazlası hakkında sizi bilgilendirerek yolculuğunuzu sorunsuz planlamanıza yardımcı oluyoruz.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mainServices.map((service) => (
            <Link to={service.link} key={service.title}>
              <Card className="group relative h-[300px] overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: service.bgImage }}
                >
                  <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative h-full p-6 flex flex-col justify-end text-white">
                  <service.icon className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/90">{service.description}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};