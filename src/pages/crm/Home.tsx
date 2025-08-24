import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function CrmHome() {
  const [stats, setStats] = useState<{ total: number; today: number; activeUsers: number }>({ total: 0, today: 0, activeUsers: 0 });

  useEffect(() => {
    (async () => {
      try {
        // Kayıt toplamı
        const { count: total } = await supabase
          .from("crm_records")
          .select("id", { count: "exact", head: true });

        // Bugünkü kayıtlar
        const todayStr = new Date().toISOString().slice(0, 10);
        const { count: today } = await supabase
          .from("crm_records")
          .select("id", { count: "exact", head: true })
          .eq("date", todayStr);

        // Aktif kullanıcı sayısı (API üzerinden)
        const API_BASE = (import.meta.env.VITE_API_BASE as string) || "";
        const usersRes = await fetch(`${API_BASE}/api/users-list`);
        const usersData = await usersRes.json();
        const activeUsers = (usersData.users || []).filter((u: any) => u.is_active !== false).length;

        setStats({ total: total || 0, today: today || 0, activeUsers });
      } catch (error) {
        console.error('Stats yüklenemedi:', error);
      }
    })();
  }, []);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* İstatistik kutuları */}
      <div className="md:col-span-2 grid gap-4 sm:grid-cols-3">
        <Card className="border-slate-200/70">
          <CardHeader>
            <CardTitle>Toplam Kayıt</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-semibold">{stats.total.toLocaleString("tr-TR")}</CardContent>
        </Card>
        <Card className="border-slate-200/70">
          <CardHeader>
            <CardTitle>Bugün</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-semibold">{stats.today.toLocaleString("tr-TR")}</CardContent>
        </Card>
        <Card className="border-slate-200/70">
          <CardHeader>
            <CardTitle>Aktif Kullanıcı</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-semibold">{stats.activeUsers.toLocaleString("tr-TR")}</CardContent>
        </Card>
      </div>
      <Card className="border-slate-200/70">
        <CardHeader>
          <CardTitle>Hoş geldin</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600">CRM platformuna hoş geldin. Aşağıdaki hızlı bağlantılarla işlemlerine başlayabilirsin.</p>
          <div className="mt-4 flex gap-3">
            <Link to="/crm/records" className="px-4 py-2 bg-teal-700 text-white rounded">Kayıtlar</Link>
            <Link to="/crm/change-password" className="px-4 py-2 bg-slate-200 rounded">Şifre Değiştir</Link>
          </div>
        </CardContent>
      </Card>
      <Card className="border-slate-200/70">
        <CardHeader>
          <CardTitle>İpuçları</CardTitle>
        </CardHeader>
        <CardContent className="text-slate-600">
          <ul className="list-disc pl-5 space-y-1">
            <li>Yeni kayıt eklerken PNR ve tarih alanlarını doldurmayı unutma.</li>
            <li>Filtrelerle belirli tarih aralığındaki hareketleri kolayca listeleyebilirsin.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}


