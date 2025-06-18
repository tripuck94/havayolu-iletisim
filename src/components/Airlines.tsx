import { Link } from "react-router-dom";
import { airlines } from "@/data/airlineData";

export const Airlines = () => {
  const getHoverClasses = (airlineId: string) => {
    const hoverClasses = {
      thy: "hover:border-thy group-hover:text-thy",
      pegasus: "hover:border-pegasus group-hover:text-pegasus", 
      sunexpress: "hover:border-sunexpress group-hover:text-sunexpress",
      ajet: "hover:border-ajet group-hover:text-ajet",
      azal: "hover:border-azal group-hover:text-azal",
      qatar: "hover:border-qatar group-hover:text-qatar",
      aeroflot: "hover:border-aeroflot group-hover:text-aeroflot",
      emirates: "hover:border-emirates group-hover:text-emirates",
      airarabia: "hover:border-airarabia group-hover:text-airarabia",
      flydubai: "hover:border-flydubai group-hover:text-flydubai"
    };
    return hoverClasses[airlineId as keyof typeof hoverClasses] || "hover:border-gray-400 group-hover:text-gray-800";
  };

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="text-center text-3xl font-bold mb-12">Çalıştığımız Havayolları</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {Object.values(airlines).map((airline) => (
            <Link
              key={airline.id}
              to={`/${airline.id}-iletisim`}
              className="group"
            >
              <div className={`flex flex-col items-center justify-center p-6 rounded-xl border-2 border-gray-200 ${getHoverClasses(airline.id)} transition-all duration-300 hover:shadow-lg hover:scale-105 bg-white`}>
              <img
                src={airline.logo}
                  alt={`${airline.name} Logo`}
                  className="h-12 w-auto object-contain mb-3 grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <span className="text-sm font-medium text-gray-600 transition-colors duration-300 text-center">
                  {airline.name.replace(' İletişim', '')}
                </span>
            </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-600 text-lg">
            Tüm havayolları için 7/24 profesyonel destek hizmeti
          </p>
        </div>
      </div>
    </section>
  );
};
