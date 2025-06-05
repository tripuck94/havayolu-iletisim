import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  bgImage: string;
  bgSize?: string;
  bgPosition?: string;
}

export const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  link, 
  bgImage,
  bgSize = "cover",
  bgPosition = "center"
}: ServiceCardProps) => {
  return (
    <Link to={link}>
      <Card className="group relative h-[300px] overflow-hidden rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ 
            backgroundImage: bgImage,
            backgroundSize: bgSize,
            backgroundPosition: bgPosition,
            backgroundRepeat: "no-repeat"
          }}
        />
        <div className="relative h-full p-8 flex flex-col justify-end text-white">
          <div className="mb-4 transform transition-transform duration-500 group-hover:-translate-y-2">
            <Icon className="h-12 w-12 mb-4 text-primary-foreground" />
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-white/90 text-sm">{description}</p>
          </div>
        </div>
      </Card>
    </Link>
  );
};