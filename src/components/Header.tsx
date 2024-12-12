import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-accent text-accent-foreground">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            TRAVOMODO
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-white/90">
              Ana Sayfa
            </Link>
            <Link to="/pet-services" className="hover:text-white/90">
              Evcil Hayvan
            </Link>
            <div className="relative group">
              <span className="hover:text-white/90 cursor-pointer">
                Havayolları
              </span>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/contact/thy" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Türk Hava Yolları
                </Link>
                <Link to="/contact/pegasus" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Pegasus
                </Link>
                <Link to="/contact/sunexpress" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  SunExpress
                </Link>
                <Link to="/contact/ajet" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  AJet
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};