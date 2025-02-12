
export const Airlines = () => {
  const airlines = [
    { 
      name: "Türk Hava Yolları", 
      logo: "https://www.turkishairlines.com/theme/img/thy_logo.png"
    },
    { 
      name: "Pegasus", 
      logo: "https://www.flypgs.com/assets/images/pegasus-logo.svg"
    },
    { 
      name: "SunExpress", 
      logo: "https://www.sunexpress.com/static/assets/images/sunexpress-logo.svg"
    },
    { 
      name: "AJet", 
      logo: "https://www.ajet.com.tr/assets/images/ajet-logo.svg"
    },
    {
      name: "AZAL",
      logo: "https://www.azal.az/media/2021/01/azal-logo.png"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="text-center text-3xl font-bold mb-12">Çalıştığımız Havayolları</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {airlines.map((airline) => (
            <div
              key={airline.name}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all"
            >
              <img
                src={airline.logo}
                alt={airline.name}
                className="max-h-12 w-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://placehold.co/200x80?text=" + airline.name;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
