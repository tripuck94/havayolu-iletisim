import { useEffect, useId, useState } from "react";

const WIDGET_SRC =
  "https://tpwidg.com/content?trs=27165&shmarker=144371&locale=tr&curr=TRY&powered_by=false&border_radius=0&plain=true&color_button=%232681ff&color_button_text=%23ffffff&color_border=%232681ff&promo_id=4132&campaign_id=121";

type FlightSearchWidgetProps = {
  containerId?: string;
  className?: string;
  loadingMessage?: string;
};

export const FlightSearchWidget = ({
  containerId,
  className,
  loadingMessage = "Uçuş arama aracı yükleniyor...",
}: FlightSearchWidgetProps) => {
  const generatedId = useId().replace(/:/g, "-");
  const resolvedId = containerId ?? `tpwidg-container-${generatedId}`;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const widgetContainer = document.getElementById(resolvedId);
    if (!widgetContainer) {
      return;
    }

    const existingScript = widgetContainer.querySelector<HTMLScriptElement>(
      "script[data-flight-widget='tpwidg']"
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.async = true;
      script.defer = true; // Defer ekledik
      script.src = WIDGET_SRC;
      script.charset = "utf-8";
      script.dataset.flightWidget = "tpwidg";

      // Script yüklendiğinde loading'i kaldır
      script.onload = () => {
        setTimeout(() => setIsLoading(false), 1000); // 1 saniye bekle widget render olsun
      };

      script.onerror = () => {
        setIsLoading(false);
      };

      // DNS prefetch için head'e link ekle
      const prefetchLink = document.createElement("link");
      prefetchLink.rel = "dns-prefetch";
      prefetchLink.href = "https://tpwidg.com";
      document.head.appendChild(prefetchLink);

      widgetContainer.appendChild(script);

      return () => {
        if (widgetContainer.contains(script)) {
          widgetContainer.removeChild(script);
        }
        if (document.head.contains(prefetchLink)) {
          document.head.removeChild(prefetchLink);
        }
      };
    } else {
      // Script zaten varsa loading'i kaldır
      setIsLoading(false);
    }

    return undefined;
  }, [resolvedId]);

  return (
    <div className="w-full">
      <div
        id={resolvedId}
        className={`w-full overflow-hidden ${className ? className : ""}`}
      >
      </div>
      {/* Widget Disclaimer */}
      <div className="mt-3 text-center">
        <p className="text-xs text-gray-500 leading-relaxed">
          * Fiyatlar anlık değişebilir. Uçuş arama widget'ı partner platformlar tarafından sağlanmaktadır.
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Gösterilen fiyatlar tahminidir ve rezervasyon sırasında farklılık gösterebilir.
        </p>
      </div>
    </div>
  );
};


