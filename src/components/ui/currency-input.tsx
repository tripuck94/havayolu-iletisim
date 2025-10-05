import { forwardRef, useMemo } from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  value: string | number | undefined;
  onValueChange?: (v: string) => void;
};

export const CurrencyInput = forwardRef<HTMLInputElement, Props>(
  ({ value, onValueChange, onChange, ...rest }, ref) => {
    const formatted = useMemo(() => {
      if (value === undefined || value === null || value === "") return "";
      const num = String(value).replace(/[^0-9]/g, "");
      if (!num) return "";
      return new Intl.NumberFormat("tr-TR").format(Number(num));
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value.replace(/[^0-9]/g, "");
      onValueChange?.(raw);
      onChange?.(e);
    };

    return (
      <input ref={ref} value={formatted} onChange={handleChange} {...rest} />
    );
  }
);

CurrencyInput.displayName = "CurrencyInput";















