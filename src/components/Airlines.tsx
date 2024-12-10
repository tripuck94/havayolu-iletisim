export const Airlines = () => {
  const airlines = [
    { name: "Türk Hava Yolları", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/THY_Turkish_Airlines_Logo_2.svg/2560px-THY_Turkish_Airlines_Logo_2.svg.png" },
    { name: "Pegasus", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Pegasus_Airlines_logo.svg/2560px-Pegasus_Airlines_logo.svg.png" },
    { name: "SunExpress", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/SunExpress_logo.svg/2560px-SunExpress_logo.svg.png" },
    { name: "AnadoluJet", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/AnadoluJet_logo.svg/2560px-AnadoluJet_logo.svg.png" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="text-center text-3xl font-bold mb-12">Çalıştığımız Havayolları</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {airlines.map((airline) => (
            <div
              key={airline.name}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all"
            >
              <img
                src={airline.logo}
                alt={airline.name}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};