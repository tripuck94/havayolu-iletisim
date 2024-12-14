import { Header } from "@/components/Header";
import { CallButton } from "@/components/CallButton";
import { BadgeCheck, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { checkInContent } from "@/data/checkInContent";

const CheckIn = () => {
  const content = checkInContent;

  const handleCall = () => {
    window.location.href = "tel:+905555555555";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container py-8 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <CheckCircle className="h-10 w-10 text-primary" />
            {content.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {content.description}
          </p>
        </div>

        {/* Main Image Section */}
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <img
            src={content.mainImage}
            alt={content.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">{content.advantages[0].title}</h2>
              <p className="text-lg">{content.advantages[0].description}</p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        {content.sections.map((section, index) => (
          <div key={index} className="grid md:grid-cols-2 gap-8 mb-8">
            {index % 2 === 0 ? (
              <>
                <img
                  src={section.image}
                  alt={section.title}
                  className="rounded-lg h-[300px] w-full object-cover"
                />
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">{section.title}</h3>
                  <p>{section.content}</p>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">{section.title}</h3>
                  <p>{section.content}</p>
                </div>
                <img
                  src={section.image}
                  alt={section.title}
                  className="rounded-lg h-[300px] w-full object-cover"
                />
              </>
            )}
          </div>
        ))}

        {/* Features List */}
        <div className="bg-primary/5 p-8 rounded-lg mb-8">
          <h3 className="text-2xl font-semibold mb-4">Check-in Süreçlerimiz</h3>
          <ul className="space-y-4">
            {content.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-primary mt-1" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-primary text-white p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">{content.callToAction.title}</h3>
          <p className="mb-6">{content.callToAction.description}</p>
          <Button 
            onClick={handleCall} 
            variant="secondary"
            className="gap-2"
          >
            Hemen Arayın
          </Button>
        </div>
      </div>
      <CallButton />
    </div>
  );
};

export default CheckIn;