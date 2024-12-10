import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CallButton = () => {
  const handleCall = () => {
    window.location.href = "tel:+905555555555"; // Telefon numaranızı buraya ekleyin
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg z-50">
      <Button
        className="w-full bg-accent hover:bg-accent/90 text-lg gap-2"
        size="lg"
        onClick={handleCall}
      >
        <Phone className="h-5 w-5" />
        Hemen Ara
      </Button>
    </div>
  );
};