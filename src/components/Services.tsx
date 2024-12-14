import { ServiceCard } from "./services/ServiceCard";
import { ServiceHeader } from "./services/ServiceHeader";
import { mainServices } from "./services/ServiceData";

export const Services = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 mx-auto">
        <ServiceHeader 
          title="Hizmetlerimiz"
          description="Seyahat kararlarınızı detaylı bilgilerle almanıza yardımcı oluyoruz."
        />

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

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mainServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};