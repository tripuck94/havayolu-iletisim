import { Header } from "@/components/Header";
import { CallButton } from "@/components/CallButton";
import { Link } from "react-router-dom";
import { BadgeCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { unaccompaniedMinorContent } from "@/data/unaccompaniedMinorContent";

const UnaccompaniedMinor = () => {
  const content = unaccompaniedMinorContent;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="text-primary hover:underline mb-8 inline-block">
          ← Ana Sayfaya Dön
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">{content.title}</h1>
          
          <div className="mb-12">
            <img
              src={content.mainImage}
              alt="Refakatsiz Çocuk"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-8"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead mb-6">
              {content.description}
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">{content.sections[0].title}</h2>
            <p>{content.sections[0].content}</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Güvenlik ve Konfor</h2>
            <p>{content.sections[1].content}</p>

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
