import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

export const CallButton = () => {
  const location = useLocation();
  
  const getButtonColor = (path: string) => {
    if (path.includes('/thy')) return 'bg-thy hover:bg-thy-hover text-white';
    if (path.includes('/pegasus')) return 'bg-pegasus hover:bg-pegasus-hover text-white';
    if (path.includes('/sunexpress')) return 'bg-sunexpress hover:bg-sunexpress-hover text-white';
    if (path.includes('/ajet') || path.includes('/vf')) return 'bg-ajet hover:bg-ajet-hover text-white';
    return 'bg-primary hover:bg-primary/90 text-white';
  };

  const handleCall = () => {
    window.location.href = "tel:08502428117";
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