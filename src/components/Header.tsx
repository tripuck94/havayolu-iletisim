import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const handleCall = () => {
    window.location.href = "tel:08503089840";
  };

  return (
    <header className="bg-accent text-accent-foreground">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/520d8ba8-17f4-4293-a58e-2783bd05931c.png" 
              alt="Call Center Icon" 
              className="h-8 w-8"
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <span className="hover:text-white/90 cursor-pointer">
                Airlines
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
            <div className="relative group">
              <span className="hover:text-white/90 cursor-pointer">
                Ticket Services
              </span>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Change Policy
                </Link>
                <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Name Change
                </Link>
                <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Cancellation
                </Link>
              </div>
            </div>
            <div className="relative group">
              <span className="hover:text-white/90 cursor-pointer">
                Special Services
              </span>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/pet-services" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Pet Policy
                </Link>
                <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Minor
                </Link>
                <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Upgrade Class
                </Link>
              </div>
            </div>
            <div className="relative group">
              <span className="hover:text-white/90 cursor-pointer">
                More Policy
              </span>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Baggage Policy
                </Link>
                <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Check-In
                </Link>
                <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Flight Delay
                </Link>
                <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Lost and Found
                </Link>
                <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Manage Booking
                </Link>
                <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Reservations
                </Link>
                <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Special Assistance
                </Link>
                <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  FAQs
                </Link>
              </div>
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-2 bg-white text-primary hover:bg-white/90 rounded-lg px-4 py-2 shadow-md border-2 border-primary/20"
            onClick={handleCall}
          >
            <Phone className="h-4 w-4" />
            <span className="font-semibold">0850 308 98 40</span>
          </Button>
        </div>
      </nav>
    </header>
  );
};