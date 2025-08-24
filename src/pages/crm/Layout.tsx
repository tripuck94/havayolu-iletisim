import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import { Home, Table2, Users, ShieldCheck, Menu, Plane, BarChart3 } from "lucide-react";
// Basit sol menü (shadcn sidebar yerine sade aside)

export default function CrmLayout() {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const contentMaxWidthClass = collapsed ? "max-w-[1920px]" : "max-w-[1600px]";
  const sidebarWidth = collapsed ? "w-16" : "w-60";
  const contentMarginLeft = collapsed ? "ml-16" : "ml-60";
  const [userEmail, setUserEmail] = useState("");
  const location = useLocation();
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      const email = data.user?.email ?? "";
      setUserEmail(email);
      const meta = (data.user?.user_metadata as any) || {};
      const fromMeta = meta.is_admin === true;
      const envAdmin = (import.meta.env.VITE_ADMIN_EMAIL as string | undefined)?.toLowerCase();
      const fromEnv = Boolean(envAdmin && email && email.toLowerCase() === envAdmin);
      setIsAdmin(Boolean(fromMeta || fromEnv));
    });
  }, []);
  const doLogout = async () => {
    await signOut();
    navigate("/crm/login", { replace: true });
  };
  return (
    <div className="min-h-screen bg-slate-100">
        {/* Sol sabit sidebar */}
        <aside className={`${sidebarWidth} fixed inset-y-0 left-0 bg-gradient-to-b from-slate-950 to-slate-950 text-slate-100 p-3 transition-all duration-200 z-40`}> 
          {/* Logo + Marka */}
          <div className="flex items-center gap-2 px-2 py-2 border-b border-slate-700/70">
            <div className="h-6 w-6 rounded bg-white/10 flex items-center justify-center">
              <Plane className="h-3.5 w-3.5" />
            </div>
            {!collapsed && <span className="font-semibold tracking-tight">Havayolu İletişim</span>}
          </div>
          <div className="flex items-center gap-3 px-2 py-3 border-b border-slate-800 mb-3">
            <div className="h-8 w-8 rounded-full bg-emerald-600 flex items-center justify-center text-xs font-medium">
              {(userEmail || "K").slice(0,1).toUpperCase()}
            </div>
            {!collapsed && (
              <div className="text-sm leading-tight">
                <div className="font-medium truncate max-w-[10rem]">{userEmail || "Kullanıcı"}</div>
                {isAdmin && (
                  <div className="flex items-center gap-1 text-emerald-300 text-[11px]">
                    <ShieldCheck className="h-3 w-3" /> Mod
                  </div>
                )}
              </div>
            )}
          </div>
          <nav className="flex flex-col gap-1 text-sm">
            <Link to="/crm" className={`flex items-center gap-2 px-3 py-2 rounded ${location.pathname === "/crm" ? "bg-slate-800" : "hover:bg-slate-800/60"}`}>
              <Home className="h-4 w-4" /> {!collapsed && <span>Anasayfa</span>}
            </Link>
            <Link to="/crm/records" className={`flex items-center gap-2 px-3 py-2 rounded ${location.pathname === "/crm/records" ? "bg-slate-800" : "hover:bg-slate-800/60"}`}>
              <Table2 className="h-4 w-4" /> {!collapsed && <span>Kayıtlar</span>}
            </Link>
            {isAdmin && (
              <>
                <Link to="/crm/users" className={`flex items-center gap-2 px-3 py-2 rounded ${location.pathname === "/crm/users" ? "bg-slate-800" : "hover:bg-slate-800/60"}`}>
                  <Users className="h-4 w-4" /> {!collapsed && <span>Kullanıcılar</span>}
                </Link>
                <Link to="/crm/reports" className={`flex items-center gap-2 px-3 py-2 rounded ${location.pathname === "/crm/reports" ? "bg-slate-800" : "hover:bg-slate-800/60"}`}>
                  <BarChart3 className="h-4 w-4" /> {!collapsed && <span>Raporlar</span>}
                </Link>
              </>
            )}
          </nav>
        </aside>

        {/* Sağ içerik alanı (sidebar genişliğine göre offset) */}
        <div className={`transition-all duration-200 ${contentMarginLeft}`}>
        <header className="sticky top-0 z-30 border-b border-slate-700 bg-slate-800 text-white shadow-sm">
          <div className="mx-auto max-w-screen-2xl pr-3 pl-1 h-10 flex items-center">
            {/* Sol grupta hamburger + marka */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setCollapsed((v) => !v)}
                className="-ml-1 p-2 rounded hover:bg-white/10"
                aria-label="Menüyü Aç/Kapat"
                aria-expanded={!collapsed}
              >
                <Menu className="h-5 w-5" />
              </button>
              {/* Marka kaldırıldı */}
            </div>
            {/* Sağ aksiyonlar */}
            <div className="flex-1 flex items-center justify-end gap-4 text-sm">
              <span className="hidden md:inline text-white/70">{userEmail}</span>
              <Link to="/crm/change-password" className="px-3 py-1.5 rounded border border-white/20 hover:bg-white/10">Şifre Değiştir</Link>
              <Button className="bg-white/10 hover:bg-white/20 text-white" onClick={doLogout}>Çıkış</Button>
            </div>
          </div>
        </header>
          <div className="min-h-screen">
            <div className={`mx-auto ${contentMaxWidthClass} px-3 py-6 transition-all duration-200`}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
  );
}


