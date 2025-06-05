export interface ServiceContent {
  id: string;
  title: string;
  description: string;
  mainImage: string;
  advantages: {
    title: string;
    description: string;
  }[];
  sections: {
    title: string;
    content: string;
    image?: string;
  }[];
  features: string[];
  callToAction: {
    title: string;
    description: string;
  };
}
