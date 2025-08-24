import { ReactNode, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";

type AuthGateProps = {
  children: ReactNode;
};

export function AuthGate({ children }: AuthGateProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    let mounted = true;
    supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return;
      const hasSession = Boolean(data.session);
      if (!hasSession) {
        navigate("/crm/login", { replace: true, state: { from: location } });
      } else {
        // Kullanıcının aktif olup olmadığını kontrol et
        const user = data.session?.user;
        const isActive = user?.user_metadata?.is_active !== false;
        if (!isActive) {
          supabase.auth.signOut();
          alert("Hesabınız pasif durumda. Lütfen yönetici ile iletişime geçin.");
          navigate("/crm/login", { replace: true });
          return;
        }
        setChecked(true);
      }
    });
    return () => {
      mounted = false;
    };
  }, [navigate, location]);

  if (!checked) {
    return null;
  }

  return <>{children}</>;
}



