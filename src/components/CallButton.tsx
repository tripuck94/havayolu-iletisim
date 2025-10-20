import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { usePhoneTracking } from "@/hooks/use-phone-tracking";

export const CallButton = () => {
  const location = useLocation();
  const { handlePhoneCall } = usePhoneTracking();
  
  const getButtonColor = (path: string) => {
    if (path.includes('/thy')) return 'bg-thy hover:bg-thy-hover text-white';
    if (path.includes('/pegasus')) return 'bg-pegasus hover:bg-pegasus-hover text-white';
    if (path.includes('/sunexpress')) return 'bg-sunexpress hover:bg-sunexpress-hover text-white';
    if (path.includes('/ajet') || path.includes('/vf')) return 'bg-ajet hover:bg-ajet-hover text-white';
    if (path.includes('/azal')) return 'bg-azal hover:bg-azal-hover text-white';
    if (path.includes('/qatar')) return 'bg-qatar hover:bg-qatar-hover text-white';
    if (path.includes('/aeroflot')) return 'bg-aeroflot hover:bg-aeroflot-hover text-white';
    if (path.includes('/emirates')) return 'bg-emirates hover:bg-emirates-hover text-white';
    if (path.includes('/airarabia')) return 'bg-airarabia hover:bg-airarabia-hover text-white';
    if (path.includes('/flydubai')) return 'bg-flydubai hover:bg-flydubai-hover text-white';
    return 'bg-primary hover:bg-primary/90 text-white';
  };

  const handleCall = () => {
    handlePhoneCall("08503089840", `floating_button_${location.pathname}`);
  };

  return (
    <Button
      className={`fixed bottom-4 right-4 ${getButtonColor(location.pathname)} shadow-lg rounded-full w-16 h-16 flex items-center justify-center`}
      size="icon"
      onClick={handleCall}
    >
      <Phone className="h-6 w-6" />
    </Button>
  );
};
