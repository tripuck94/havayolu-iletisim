import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogTrigger, DialogContent, DialogHeader as ModalHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Pencil, Trash2, KeyRound, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Row = {
  id: string;
  email: string;
  created_at?: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  is_admin?: boolean;
  is_active?: boolean;
  permissions?: { can_delete?: boolean; can_edit?: boolean; can_access_all?: boolean };
};

export default function Users() {
  const API_BASE = (import.meta.env.VITE_API_BASE as string) || ""; // dev: http://localhost:3000 (vercel dev)
  const [rows, setRows] = useState<Row[]>([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [permDelete, setPermDelete] = useState(false);
  const [permEdit, setPermEdit] = useState(false);
  const [permAll, setPermAll] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [editOpenModal, setEditOpenModal] = useState(false);
  const [pwdOpen, setPwdOpen] = useState(false);
  const [editingUserId, setEditingUserId] = useState<string | null>(null);
  const [newPassword, setNewPassword] = useState("");
  const [updatingUsers, setUpdatingUsers] = useState<Set<string>>(new Set());

  // Tarih formatı fonksiyonu
  const formatDate = (dateString: string) => {
    if (!dateString) return '-';
    try {
      const date = new Date(dateString);
      const today = new Date();
      const diffTime = today.getTime() - date.getTime();
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays === 0) return 'Bugün';
      if (diffDays === 1) return 'Dün';
      if (diffDays < 7) return `${diffDays} gün önce`;
      
      return date.toLocaleDateString('tr-TR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      });
    } catch {
      return dateString.slice(0, 10);
    }
  };

  // Telefon formatı fonksiyonları
  const formatPhone = (phone: string) => {
    if (!phone) return '';
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 10) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)} ${cleaned.slice(6, 8)} ${cleaned.slice(8)}`;
    }
    if (cleaned.length === 11 && cleaned.startsWith('0')) {
      return `(${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)} ${cleaned.slice(7, 9)} ${cleaned.slice(9)}`;
    }
    return phone;
  };

  const handlePhoneChange = (value: string, setter: (val: string) => void) => {
    const cleaned = value.replace(/\D/g, '');
    let formatted = '';
    if (cleaned.length <= 3) {
      formatted = cleaned;
    } else if (cleaned.length <= 6) {
      formatted = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
    } else if (cleaned.length <= 8) {
      formatted = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)} ${cleaned.slice(6)}`;
    } else if (cleaned.length <= 10) {
      formatted = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)} ${cleaned.slice(6, 8)} ${cleaned.slice(8)}`;
    } else {
      formatted = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)} ${cleaned.slice(6, 8)} ${cleaned.slice(8, 10)}`;
    }
    setter(formatted);
  };

  const toggleUserStatus = async (row: Row) => {
    const newStatus = !row.is_active;
    
    // Optimistic update - önce UI'yi güncelle
    setUpdatingUsers(prev => new Set(prev).add(row.id));
    setRows(prevRows => 
      prevRows.map(r => 
        r.id === row.id ? { ...r, is_active: newStatus } : r
      )
    );

    try {
      const resp = await fetch(`${API_BASE}/api/users-update`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: row.id,
          first_name: row.first_name,
          last_name: row.last_name,
          phone: row.phone,
          is_admin: row.is_admin,
          is_active: newStatus,
          permissions: row.permissions || {},
        }),
      });
      const text = await resp.text();
      let json: any = {}; try { json = JSON.parse(text || '{}'); } catch {}
      if (!resp.ok) {
        // Hata durumunda eski haline döndür
        setRows(prevRows => 
          prevRows.map(r => 
            r.id === row.id ? { ...r, is_active: row.is_active } : r
          )
        );
        throw new Error(json.error || text || 'Durum güncellenemedi');
      }
    } catch (err) {
      alert((err as any).message);
    } finally {
      setUpdatingUsers(prev => {
        const newSet = new Set(prev);
        newSet.delete(row.id);
        return newSet;
      });
    }
  };

  const load = async () => {
    const res = await fetch(`${API_BASE}/api/users-list`);
    const json = await res.json();
    const sortedUsers = (json.users || []).sort((a, b) => {
      // En eski kullanıcı üstte (created_at'a göre artan sıralama)
      const dateA = new Date(a.created_at || '').getTime();
      const dateB = new Date(b.created_at || '').getTime();
      return dateA - dateB;
    });
    setRows(sortedUsers);
  };

  useEffect(() => { load(); }, []);

  const createUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const resp = await fetch(`${API_BASE}/api/users-create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          password,
          first_name: firstName,
          last_name: lastName,
          is_admin: isAdmin,
          phone,
          is_active: isActive,
          permissions: { can_delete: permDelete, can_edit: permEdit, can_access_all: permAll },
        }),
      });
      const text = await resp.text();
      let json: any = {};
      try { json = JSON.parse(text || '{}'); } catch {}
      if (!resp.ok) throw new Error(json.error || text || 'Kullanıcı eklenemedi');
      setEmail("");
      setPassword("");
      setFirstName("");
      setLastName("");
      setIsAdmin(false);
      setPhone("");
      setIsActive(true);
      setPermDelete(false);
      setPermEdit(false);
      setPermAll(false);
      setCreateOpen(false);
      await load();
    } catch (err) {
      alert((err as any).message);
    } finally {
      setLoading(false);
    }
  };

  const openEdit = (row: Row) => {
    setEditingUserId(row.id);
    setFirstName(row.first_name || "");
    setLastName(row.last_name || "");
    setEmail(row.email || "");
    setPhone(row.phone || "");
    setIsAdmin(Boolean(row.is_admin));
    setIsActive(row.is_active !== false);
    setPermDelete(Boolean(row.permissions?.can_delete));
    setPermEdit(Boolean(row.permissions?.can_edit));
    setPermAll(Boolean(row.permissions?.can_access_all));
    setEditOpenModal(true);
  };

  const saveEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingUserId) return;
    setLoading(true);
    try {
      const resp = await fetch(`${API_BASE}/api/users-update`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: editingUserId,
          first_name: firstName,
          last_name: lastName,
          phone,
          is_admin: isAdmin,
          is_active: isActive,
          permissions: { can_delete: permDelete, can_edit: permEdit, can_access_all: permAll },
        }),
      });
      const text = await resp.text();
      let json: any = {}; try { json = JSON.parse(text || '{}'); } catch {}
      if (!resp.ok) throw new Error(json.error || text || 'Güncellenemedi');
      setEditOpenModal(false);
      setEditingUserId(null);
      await load();
    } catch (err) {
      alert((err as any).message);
    } finally {
      setLoading(false);
    }
  };

  const openPassword = (row: Row) => {
    setEditingUserId(row.id);
    setNewPassword("");
    setPwdOpen(true);
  };

  const submitPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingUserId || !newPassword) return;
    setLoading(true);
    try {
      const resp = await fetch(`${API_BASE}/api/users-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: editingUserId, password: newPassword }),
      });
      const text = await resp.text();
      let json: any = {}; try { json = JSON.parse(text || '{}'); } catch {}
      if (!resp.ok) throw new Error(json.error || text || 'Şifre güncellenemedi');
      setPwdOpen(false);
      setEditingUserId(null);
    } catch (err) {
      alert((err as any).message);
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (row: Row) => {
    if (!confirm('Bu kullanıcı silinsin mi?')) return;
    setLoading(true);
    try {
      const resp = await fetch(`${API_BASE}/api/users-delete`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: row.id }),
      });
      const text = await resp.text();
      let json: any = {}; try { json = JSON.parse(text || '{}'); } catch {}
      if (!resp.ok) throw new Error(json.error || text || 'Silinemedi');
      await load();
    } catch (err) {
      alert((err as any).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 space-y-4">
      <Card>
        <CardHeader className="border-b pb-3">
          <div className="flex items-center justify-between w-full">
            <CardTitle className="m-0">Kullanıcılar</CardTitle>
                      <Dialog open={createOpen} onOpenChange={setCreateOpen}>
            <DialogTrigger asChild>
              <Button>Yeni Kullanıcı Ekle</Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <ModalHeader>
                <DialogTitle>Yeni Kullanıcı Ekle</DialogTitle>
              </ModalHeader>
              <form onSubmit={createUser} className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-3">
                  <label className="text-sm">Ad</label>
                  <Input value={firstName} onChange={e=>setFirstName(e.target.value)} required />
                </div>
                <div className="md:col-span-3">
                  <label className="text-sm">Soyad</label>
                  <Input value={lastName} onChange={e=>setLastName(e.target.value)} required />
                </div>
                <div className="md:col-span-4">
                  <label className="text-sm">E‑posta</label>
                  <Input value={email} onChange={e=>setEmail(e.target.value)} type="email" required />
                </div>
                <div className="md:col-span-3">
                  <label className="text-sm">Şifre</label>
                  <Input value={password} onChange={e=>setPassword(e.target.value)} type="password" required />
                </div>
                <div className="md:col-span-3">
                  <label className="text-sm">Telefon</label>
                  <Input value={phone} onChange={e=>handlePhoneChange(e.target.value, setPhone)} placeholder="(5xx) xxx xx xx" />
                </div>
                <div className="flex items-center gap-2 md:col-span-2">
                  <Checkbox checked={isAdmin} onCheckedChange={(v)=>setIsAdmin(Boolean(v))} />
                  <span className="text-sm">Admin</span>
                </div>
                <div className="flex items-center flex-wrap gap-4 md:col-span-12">
                  <div className="flex items-center gap-2">
                    <Checkbox checked={isActive} onCheckedChange={(v)=>setIsActive(Boolean(v))} />
                    <span className="text-sm">Aktif</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox checked={permDelete} onCheckedChange={(v)=>setPermDelete(Boolean(v))} />
                    <span className="text-sm">Kayıt Silebilir</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox checked={permEdit} onCheckedChange={(v)=>setPermEdit(Boolean(v))} />
                    <span className="text-sm">Kayıt Düzenleyebilir</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox checked={permAll} onCheckedChange={(v)=>setPermAll(Boolean(v))} />
                    <span className="text-sm">Tüm Kayıtlara Giriş</span>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" disabled={loading}>Kaydet</Button>
                </DialogFooter>
              </form>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="overflow-auto rounded border">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left bg-slate-50">
                  <th className="p-2">#</th>
                  <th className="p-2">Adı Soyadı</th>
                  <th className="p-2">E‑posta</th>
                  <th className="p-2">Telefon</th>
                  <th className="p-2">Oluşturma</th>
                  <th className="p-2">Yetki</th>
                  <th className="p-2">Durum</th>
                  <th className="p-2">Yetkiler</th>
                  <th className="p-2 text-right">İşlem</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, index) => (
                  <tr key={r.id} className="border-t">
                    <td className="p-2">{index + 1}</td>
                    <td className="p-2">{[(r.first_name||""),(r.last_name||"")].filter(Boolean).join(" ") || "-"}</td>
                    <td className="p-2">{r.email}</td>
                    <td className="p-2">{r.phone ? formatPhone(r.phone) : "-"}</td>
                    <td className="p-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span className="font-medium">{formatDate(r.created_at || '')}</span>
                      </div>
                    </td>
                    <td className="p-2">{r.is_admin ? "Yönetici" : "Kullanıcı"}</td>
                    <td className="p-2">
                      <Badge 
                        variant={r.is_active === false ? "destructive" : "default"}
                        className={`cursor-pointer transition-all duration-200 ${
                          updatingUsers.has(r.id) 
                            ? "opacity-50 animate-pulse" 
                            : r.is_active === false 
                              ? "bg-red-100 text-red-800 hover:bg-red-200" 
                              : "bg-green-100 text-green-800 hover:bg-green-200"
                        }`}
                        onClick={() => !updatingUsers.has(r.id) && toggleUserStatus(r)}
                      >
                        {r.is_active === false ? "Pasif" : "Aktif"}
                      </Badge>
                    </td>
                    <td className="p-2">
                      <div className="flex flex-wrap gap-1">
                        {r.permissions?.can_delete && (
                          <Badge variant="outline" className="text-xs bg-red-50 text-red-700 border-red-200">
                            Silme
                          </Badge>
                        )}
                        {r.permissions?.can_edit && (
                          <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                            Düzenleme
                          </Badge>
                        )}
                        {r.permissions?.can_access_all && (
                          <Badge variant="outline" className="text-xs bg-purple-50 text-purple-700 border-purple-200">
                            Tüm Kayıtlar
                          </Badge>
                        )}
                        {!r.permissions?.can_delete && !r.permissions?.can_edit && !r.permissions?.can_access_all && (
                          <span className="text-gray-400 text-xs">Yetki yok</span>
                        )}
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="flex items-center justify-end gap-2">
                        <Button size="sm" variant="secondary" onClick={() => openEdit(r)}>
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="secondary" onClick={() => openPassword(r)}>
                          <KeyRound className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="destructive" onClick={() => deleteUser(r)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Düzenleme Modal */}
          <Dialog open={editOpenModal} onOpenChange={setEditOpenModal}>
            <DialogContent className="max-w-4xl">
              <ModalHeader>
                <DialogTitle>Kullanıcıyı Düzenle</DialogTitle>
              </ModalHeader>
              <form onSubmit={saveEdit} className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-3">
                  <label className="text-sm">Ad</label>
                  <Input value={firstName} onChange={e=>setFirstName(e.target.value)} required />
                </div>
                <div className="md:col-span-3">
                  <label className="text-sm">Soyad</label>
                  <Input value={lastName} onChange={e=>setLastName(e.target.value)} required />
                </div>
                <div className="md:col-span-4">
                  <label className="text-sm">E‑posta</label>
                  <Input value={email} disabled />
                </div>
                <div className="md:col-span-3">
                  <label className="text-sm">Telefon</label>
                  <Input value={phone} onChange={e=>handlePhoneChange(e.target.value, setPhone)} placeholder="(5xx) xxx xx xx" />
                </div>
                <div className="flex items-center gap-2 md:col-span-2">
                  <Checkbox checked={isAdmin} onCheckedChange={(v)=>setIsAdmin(Boolean(v))} />
                  <span className="text-sm">Admin</span>
                </div>
                <div className="flex items-center flex-wrap gap-4 md:col-span-12">
                  <div className="flex items-center gap-2">
                    <Checkbox checked={isActive} onCheckedChange={(v)=>setIsActive(Boolean(v))} />
                    <span className="text-sm">Aktif</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox checked={permDelete} onCheckedChange={(v)=>setPermDelete(Boolean(v))} />
                    <span className="text-sm">Kayıt Silebilir</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox checked={permEdit} onCheckedChange={(v)=>setPermEdit(Boolean(v))} />
                    <span className="text-sm">Kayıt Düzenleyebilir</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox checked={permAll} onCheckedChange={(v)=>setPermAll(Boolean(v))} />
                    <span className="text-sm">Tüm Kayıtlara Giriş</span>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" disabled={loading}>Kaydet</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>

          {/* Şifre Modal */}
          <Dialog open={pwdOpen} onOpenChange={setPwdOpen}>
            <DialogContent className="max-w-md">
              <ModalHeader>
                <DialogTitle>Şifre Sıfırla</DialogTitle>
              </ModalHeader>
              <form onSubmit={submitPassword} className="grid gap-3">
                <div>
                  <label className="text-sm">Yeni Şifre</label>
                  <Input value={newPassword} onChange={e=>setNewPassword(e.target.value)} type="password" required />
                </div>
                <DialogFooter>
                  <Button type="submit" disabled={loading}>Güncelle</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  );
}


