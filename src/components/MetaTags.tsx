import { Helmet } from 'react-helmet-async';

interface MetaTagsProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string;
}

export const MetaTags = ({ title, description, path, image = "https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,w_1200,h_630,c_fill,q_auto/images/call-center/static/public/og-imagenew.png", keywords }: MetaTagsProps) => {
  const baseUrl = "https://havayoluiletisim.com";
  const fullUrl = `${baseUrl}${path}`;
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="Havayolu İletişim" />
      <meta property="og:locale" content="tr_TR" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
}; 