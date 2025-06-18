import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { format, quality } from '@cloudinary/url-gen/actions/delivery';

// Cloudinary instance'ı oluştur
const cld = new Cloudinary({
  cloud: {
    cloudName: 'destek'
  }
});

interface CloudinaryImageProps {
  publicId: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export const CloudinaryImage = ({ 
  publicId, 
  alt, 
  width = 24, 
  height = 24, 
  className = "" 
}: CloudinaryImageProps) => {
  // Cloudinary URL'sini oluştur
  const img = cld
    .image(publicId)
    .resize(auto().width(width).height(height))
    .delivery(format('auto'))
    .delivery(quality('auto'));

  return (
    <AdvancedImage 
      cldImg={img} 
      alt={alt}
      className={className}
    />
  );
}; 
