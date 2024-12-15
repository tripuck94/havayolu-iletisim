import { Banner } from "@/components/Banner";
import { Services } from "@/components/Services";
import { Airlines } from "@/components/Airlines";
import { Contact } from "@/components/Contact";
import { CallButton } from "@/components/CallButton";
import { Header } from "@/components/Header";
import { ImageUploadTest } from "@/components/ImageUploadTest";

const Index = () => {
  return (
    <div className="min-h-screen pb-20">
      <Header />
      <ImageUploadTest />
      <Banner />
      <Services />
      <Airlines />
      <Contact />
      <CallButton />
    </div>
  );
};

export default Index;