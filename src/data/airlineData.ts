export interface AirlineData {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  primaryColor: string;
  hoverColor: string;
  bgColor: string;
  textColor: string;
  description: string;
}

export const airlines: Record<string, AirlineData> = {
  thy: {
    id: "thy",
    name: "Türk Hava Yolları",
    shortName: "THY",
    logo: "https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_48,w_48,q_auto/images/airline/small/TK.webp",
    primaryColor: "thy",
    hoverColor: "thy-dark",
    bgColor: "bg-thy",
    textColor: "text-thy",
    description: "Türkiye'nin bayrak taşıyıcısı THY ile dünya geneline uçuş imkanı."
  },
  sunexpress: {
    id: "sunexpress",
    name: "SunExpress",
    shortName: "SXS",
    logo: "https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_48,w_48,q_auto/images/airline/small/XQ.webp",
    primaryColor: "sunexpress",
    hoverColor: "sunexpress-dark",
    bgColor: "bg-sunexpress",
    textColor: "text-sunexpress",
    description: "Güneşin rehberliğinde konforlu yolculuklar."
  },
  pegasus: {
    id: "pegasus",
    name: "Pegasus Hava Yolları",
    shortName: "Pegasus",
    logo: "https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_48,w_48,q_auto/images/airline/small/PC.webp",
    primaryColor: "pegasus",
    hoverColor: "pegasus-dark",
    bgColor: "bg-pegasus",
    textColor: "text-pegasus",
    description: "Uygun fiyatlı biletlerle hayallerinizdeki destinasyonlara uçun."
  },
  ajet: {
    id: "ajet",
    name: "AJet",
    shortName: "AJet",
    logo: "https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_48,w_48,q_auto/images/airline/small/VF.webp",
    primaryColor: "ajet",
    hoverColor: "ajet-dark",
    bgColor: "bg-ajet",
    textColor: "text-ajet",
    description: "Türkiye'nin genç ve dinamik havayolu şirketi."
  },
  azal: {
    id: "azal",
    name: "AZAL",
    shortName: "AZAL",
    logo: "https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,h_48,w_48,q_auto/images/airline/small/J2.webp",
    primaryColor: "azal",
    hoverColor: "azal-dark",
    bgColor: "bg-azal",
    textColor: "text-azal",
    description: "Azerbaycan Hava Yolları ile Kafkasya'ya güvenli yolculuk."
  }
};

export const getAirlineData = (airlineId: string): AirlineData | null => {
  return airlines[airlineId] || null;
}; 