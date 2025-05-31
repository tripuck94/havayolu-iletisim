export interface AirlineData {
  id: string;
  name: string;
  logo: string;
  primaryColor: string;
  hoverColor: string;
  description: string;
}

export const airlines: Record<string, AirlineData> = {
  thy: {
    id: "thy",
    name: "Türk Hava Yolları İletişim",
    logo: "https://res.cloudinary.com/tripuck/image/upload/f_auto,fl_lossy,h_100,w_100,q_auto/images/airline/small/TK.webp",
    primaryColor: "thy",
    hoverColor: "thy-hover",
    description: "7/24 hizmetinizdeyiz. Size nasıl yardımcı olabiliriz?"
  },
  sunexpress: {
    id: "sunexpress",
    name: "SunExpress İletişim",
    logo: "https://res.cloudinary.com/tripuck/image/upload/f_auto,fl_lossy,h_100,w_100,q_auto/images/airline/small/XQ.webp",
    primaryColor: "sunexpress",
    hoverColor: "sunexpress-hover",
    description: "7/24 hizmetinizdeyiz. Size nasıl yardımcı olabiliriz?"
  },
  pegasus: {
    id: "pegasus",
    name: "Pegasus İletişim",
    logo: "https://res.cloudinary.com/tripuck/image/upload/f_auto,fl_lossy,h_100,w_100,q_auto/images/airline/small/PC.webp",
    primaryColor: "pegasus",
    hoverColor: "pegasus-hover",
    description: "7/24 hizmetinizdeyiz. Size nasıl yardımcı olabiliriz?"
  },
  ajet: {
    id: "ajet",
    name: "AJet İletişim",
    logo: "https://res.cloudinary.com/tripuck/image/upload/f_auto,fl_lossy,h_100,w_100,q_auto/images/airline/small/VF.webp",
    primaryColor: "ajet",
    hoverColor: "ajet-hover",
    description: "7/24 hizmetinizdeyiz. Size nasıl yardımcı olabiliriz?"
  },
  azal: {
    id: "azal",
    name: "AZAL İletişim",
    logo: "https://res.cloudinary.com/tripuck/image/upload/f_auto,fl_lossy,h_100,w_100,q_auto/images/airline/small/j2.webp",
    primaryColor: "azal",
    hoverColor: "azal-hover",
    description: "Size yardımcı olmak için buradayız. Bize ulaşın."
  }
};

export const getAirlineData = (airlineId: string): AirlineData | null => {
  return airlines[airlineId] || null;
}; 