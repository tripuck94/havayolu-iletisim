import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { listRecords, createRecord, deleteRecord, updateRecord } from "@/lib/crm";
import type { CrmRecordInsert, CrmRecord } from "@/types/crm";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CurrencyInput } from "@/components/ui/currency-input";
import { AIRPORTS } from "@/data/airports";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { tr } from "date-fns/locale";

type FormState = Partial<CrmRecordInsert>;

export default function Records() {
  const { toast } = useToast();
  const [rows, setRows] = useState<CrmRecord[]>([]);
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [users, setUsers] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [editing, setEditing] = useState<CrmRecord | null>(null);
  const getInitialForm = (): FormState => ({ date: new Date().toISOString().slice(0, 10) });
  const [form, setForm] = useState<FormState>(getInitialForm());
  const COLS_KEY = "crm_visible_cols";
  const [visibleCols, setVisibleCols] = useState<Record<string, boolean>>(() => {
    const defaults = {
      id: true,
      fullName: true,
      date: true,
      pnr: true,
      virtualPos: true,
      commission: true,
      card: true,
      transfer: true,
      bdCari: true,
      bdYukleme: true,
      route: true,
      noteDirection: true,
      user: true,
    } as Record<string, boolean>;
    try {
      const raw = localStorage.getItem(COLS_KEY);
      if (raw) return { ...defaults, ...JSON.parse(raw) };
    } catch {}
    return defaults;
  });
  const PREF_KEY = "crm_form_pref";
  useEffect(() => {
    try { localStorage.setItem(COLS_KEY, JSON.stringify(visibleCols)); } catch {}
  }, [visibleCols]);

  const userId = useMemo(() => supabase.auth.getUser().then(r => r.data.user?.id ?? ""), []);

  // Kullanıcı bilgilerini yükle
  const loadUsers = async () => {
    try {
      const API_BASE = (import.meta.env.VITE_API_BASE as string) || "";
      const usersRes = await fetch(`${API_BASE}/api/users-list`);
      const usersData = await usersRes.json();
      const userMap: Record<string, string> = {};
      (usersData.users || []).forEach((user: any) => {
        const fullName = [user.first_name, user.last_name].filter(Boolean).join(" ") || user.email;
        userMap[user.id] = fullName;
      });
      setUsers(userMap);
    } catch (error) {
      console.error('Kullanıcılar yüklenemedi:', error);
    }
  };

  const load = async () => {
    setLoading(true);
    try {
      const start = format(startDate, "yyyy-MM-dd");
      const end = format(endDate, "yyyy-MM-dd");
      const data = await listRecords({ start, end, search });
      setRows(data);
    } catch (err: any) {
      toast({ title: "Kayıtlar yüklenemedi", description: err.message });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    loadUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const uid = await userId;
      const payload: CrmRecordInsert = {
        id: 0 as unknown as never,
        ...({} as any),
        fullName: form.fullName?.trim() ?? "",
        phone: form.phone ?? null,
        citizenId: form.citizenId ?? null,
        pnr: form.pnr ?? null,
        depart: form.depart ?? null,
        arrive: form.arrive ?? null,
        company: form.company ?? null,
        saleType: form.saleType ?? null,
        direction: form.direction ?? null,
        shift: form.shift ?? null,
        currentAccountPayment: form.currentAccountPayment ?? null,
        bdload: form.bdload ?? null,
        virtualPos: form.virtualPos ?? null,
        card: form.card ?? null,
        commission: form.commission ?? null,
        transfer: form.transfer ?? null,
        note: form.note ?? null,
        date: form.date ?? new Date().toISOString().slice(0, 10),
        userId: uid,
        createdAt: new Date().toISOString(),
      } as unknown as CrmRecordInsert;

      await createRecord(payload);
      toast({ title: "Kayıt eklendi" });
      try {
        const toSave = { company: form.company, saleType: form.saleType, direction: form.direction, shift: form.shift };
        localStorage.setItem(PREF_KEY, JSON.stringify(toSave));
      } catch {}
      setOpen(false);
      setForm({ date: new Date().toISOString().slice(0, 10) });
      await load();
    } catch (err: any) {
      toast({ title: "Hata", description: err.message });
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Silmek istediğinize emin misiniz?")) return;
    try {
      await deleteRecord(id);
      await load();
    } catch (err: any) {
      toast({ title: "Silinemedi", description: err.message });
    }
  };

  const startEdit = (row: CrmRecord) => {
    setEditing(row);
    setForm({
      fullName: row.fullName,
      phone: row.phone ?? undefined,
      citizenId: row.citizenId ?? undefined,
      pnr: row.pnr ?? undefined,
      depart: row.depart ?? undefined,
      arrive: row.arrive ?? undefined,
      company: row.company ?? undefined,
      saleType: row.saleType ?? undefined,
      direction: row.direction ?? undefined,
      shift: row.shift ?? undefined,
      currentAccountPayment: row.currentAccountPayment ?? undefined,
      bdload: (row as any).bdload ?? undefined,
      virtualPos: row.virtualPos ?? undefined,
      card: row.card ?? undefined,
      commission: row.commission ?? undefined,
      transfer: row.transfer ?? undefined,
      note: row.note ?? undefined,
      date: row.date,
      userEmail: row.userEmail ?? undefined,
    });
    setEditOpen(true);
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editing) return;
    try {
      await updateRecord(editing.id, form as CrmRecordInsert);
      toast({ title: "Kayıt güncellendi" });
      setEditOpen(false);
      setEditing(null);
      await load();
    } catch (err: any) {
      toast({ title: "Hata", description: err.message });
    }
  };

  return (
    <div className="p-4 space-y-4">
      {/* Üst Filtreler */}
      <Card className="border-slate-200 shadow-sm">
        <CardHeader className="border-b pb-3">
          <CardTitle className="text-slate-800">Kayıtlar</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div>
              <Label>Başlangıç Tarihi</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {startDate ? format(startDate, "dd MMM yyyy", { locale: tr }) : "Tarih seçin"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={(date) => date && setStartDate(date)}
                    initialFocus
                    locale={tr}
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <Label>Bitiş Tarihi</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endDate ? format(endDate, "dd MMM yyyy", { locale: tr }) : "Tarih seçin"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={(date) => date && setEndDate(date)}
                    initialFocus
                    locale={tr}
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <Label htmlFor="search">Ara</Label>
              <Input
                id="search"
                placeholder="Ad soyad veya PNR ara..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex items-end gap-2">
              <Button onClick={load} disabled={loading} className="bg-slate-900 hover:bg-slate-800">
                Filtrele
              </Button>
              <Dialog open={open} onOpenChange={(v)=>{ setOpen(v); if(v){ setForm(getInitialForm()); } }}>
                <DialogTrigger asChild>
                  <Button variant="secondary">Yeni Kayıt</Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <DialogHeader>
                    <DialogTitle>Yeni Kayıt Ekle</DialogTitle>
                  </DialogHeader>
                  <form className="grid grid-cols-1 md:grid-cols-3 gap-3" onSubmit={handleCreate}>
                    <div className="md:col-span-3">
                      <p className="text-xs text-slate-500">Yolcu Bilgisi</p>
                      <Separator className="my-1" />
                      <Label>Adı Soyadı</Label>
                      <Input value={form.fullName ?? ""} onChange={(e) => setForm({ ...form, fullName: e.target.value })} required />
                    </div>
                    <div>
                      <Label>Telefon</Label>
                      <Input value={form.phone ?? ""} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                    </div>
                    <div>
                      <Label>T.C. Kimlik No</Label>
                      <Input value={form.citizenId ?? ""} onChange={(e) => setForm({ ...form, citizenId: e.target.value })} />
                    </div>
                    <div>
                      <Label>PNR</Label>
                      <Input value={form.pnr ?? ""} onChange={(e) => setForm({ ...form, pnr: e.target.value })} />
                    </div>
                    <div className="md:col-span-3 mt-2">
                      <p className="text-xs text-slate-500">Uçuş Bilgisi</p>
                      <Separator className="my-1" />
                    </div>
                    <div>
                      <Label>Kalkış</Label>
                      <Input list="airportCodes" placeholder="IST" value={form.depart ?? ""} onChange={(e) => setForm({ ...form, depart: e.target.value.toUpperCase() })} />
                    </div>
                    <div>
                      <Label>Varış</Label>
                      <Input list="airportCodes" placeholder="AYT" value={form.arrive ?? ""} onChange={(e) => setForm({ ...form, arrive: e.target.value.toUpperCase() })} />
                    </div>
                    <div>
                      <Label>Firma</Label>
                      <Select value={form.company ?? ""} onValueChange={(v) => setForm({ ...form, company: v })}>
                        <SelectTrigger><SelectValue placeholder="Seçiniz" /></SelectTrigger>
                        <SelectContent>
                          {["THY","PEGASUS","SUNEXPRESS","AJET","QATAR","EMIRATES","AZAL","AEROFLOT","AIR ARABIA","FLYDUBAI"].map(o => (
                            <SelectItem key={o} value={o}>{o}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Satış Türü</Label>
                      <Select value={form.saleType ?? ""} onValueChange={(v) => setForm({ ...form, saleType: v })}>
                        <SelectTrigger><SelectValue placeholder="Seçiniz" /></SelectTrigger>
                        <SelectContent>
                          {["YENI BILET","DEGISIM","IPTAL/IADE","EK HIZMET","REZERVASYON"].map(o => (
                            <SelectItem key={o} value={o}>{o}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Yön</Label>
                      <Select value={form.direction ?? ""} onValueChange={(v) => setForm({ ...form, direction: v })}>
                        <SelectTrigger><SelectValue placeholder="Seçiniz" /></SelectTrigger>
                        <SelectContent>
                          {["YURT ICI","YURT DISI"].map(o => (
                            <SelectItem key={o} value={o}>{o}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Vardiya</Label>
                      <Select value={form.shift ?? ""} onValueChange={(v) => setForm({ ...form, shift: v })}>
                        <SelectTrigger><SelectValue placeholder="Seçiniz" /></SelectTrigger>
                        <SelectContent>
                          {["SABAH","AKSAM","GECE"].map(o => (
                            <SelectItem key={o} value={o}>{o}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="md:col-span-3 mt-2">
                      <p className="text-xs text-slate-500">Ödeme Bilgisi</p>
                      <Separator className="my-1" />
                    </div>
                    <div>
                      <Label>Cari Hesap Ödeme</Label>
                      <CurrencyInput className="h-10 w-full rounded-md border border-input px-3 py-2 text-sm" value={form.currentAccountPayment ?? ""} onValueChange={(v) => setForm({ ...form, currentAccountPayment: v })} />
                    </div>
                    <div>
                      <Label>BD. Para Yükleme</Label>
                      <CurrencyInput className="h-10 w-full rounded-md border border-input px-3 py-2 text-sm" value={form.bdload ?? ""} onValueChange={(v) => setForm({ ...form, bdload: v })} />
                    </div>
                    <div>
                      <Label>Sanal Pos</Label>
                      <CurrencyInput className="h-10 w-full rounded-md border border-input px-3 py-2 text-sm" value={form.virtualPos ?? ""} onValueChange={(v) => setForm({ ...form, virtualPos: v })} />
                    </div>
                    <div>
                      <Label>K. Kartı</Label>
                      <CurrencyInput className="h-10 w-full rounded-md border border-input px-3 py-2 text-sm" value={form.card ?? ""} onValueChange={(v) => setForm({ ...form, card: v })} />
                    </div>
                    <div>
                      <Label>Komisyon</Label>
                      <CurrencyInput className="h-10 w-full rounded-md border border-input px-3 py-2 text-sm" value={form.commission ?? ""} onValueChange={(v) => setForm({ ...form, commission: v })} />
                    </div>
                    <div>
                      <Label>Havale</Label>
                      <CurrencyInput className="h-10 w-full rounded-md border border-input px-3 py-2 text-sm" value={form.transfer ?? ""} onValueChange={(v) => setForm({ ...form, transfer: v })} />
                    </div>
                    <div className="md:col-span-3 mt-2">
                      <p className="text-xs text-slate-500">Diğer</p>
                      <Separator className="my-1" />
                      <Label>İşlem Tipi / Not</Label>
                      <Input value={form.note ?? ""} onChange={(e) => setForm({ ...form, note: e.target.value })} />
                    </div>
                    <div>
                      <Label>Tarih</Label>
                      <Input type="date" value={form.date ?? new Date().toISOString().slice(0, 10)} onChange={(e) => setForm({ ...form, date: e.target.value })} />
                    </div>
                    <div className="md:col-span-3 flex justify-end gap-2 mt-2">
                      <Button type="button" variant="secondary" onClick={() => setOpen(false)}>Vazgeç</Button>
                      <Button type="submit" className="bg-teal-700 hover:bg-teal-800">Yeni Kayıt Ekle</Button>
                    </div>
                  </form>
                  <datalist id="airportCodes">
                    {AIRPORTS.map((a) => (
                      <option key={a.code} value={a.code}>{a.name}</option>
                    ))}
                  </datalist>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          
          {/* Tablo */}
          <div className="flex justify-end mb-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Kontrol Paneli</Button>
              </SheetTrigger>
                  <SheetContent side="right" className="w-80">
                    <SheetHeader>
                      <SheetTitle>Tablo Sütunları</SheetTitle>
                    </SheetHeader>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      {[
                        ["id","#ID"],
                        ["fullName","Adı Soyadı"],
                        ["date","Tarih"],
                        ["pnr","PNR"],
                        ["virtualPos","S.POS"],
                        ["commission","Komisyon"],
                        ["card","Kart"],
                        ["transfer","Havale"],
                        ["bdCari","BD. Cari"],
                        ["bdYukleme","BD. Yükleme"],
                        ["route","Kalkış/Varış"],
                        ["noteDirection","Notlar"],
                        ["user","Kullanıcı"],
                      ].map(([key,label]) => (
                        <label key={key} className="flex items-center gap-2 text-sm">
                          <Checkbox checked={visibleCols[key]} onCheckedChange={(v) => setVisibleCols((s) => ({ ...s, [key]: Boolean(v) }))} />
                          {label as string}
                        </label>
                      ))}
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
              <div className="overflow-auto rounded-lg border border-slate-200">
                <table className="w-full text-[15px]">
                  <thead>
                    <tr className="text-left bg-slate-50/60">
                      {visibleCols.id && <th className="p-3 font-medium text-slate-600">#ID</th>}
                      {visibleCols.fullName && <th className="p-3 font-medium text-slate-600">Adı Soyadı</th>}
                      {visibleCols.date && <th className="p-3 font-medium text-slate-600">Tarih</th>}
                      {visibleCols.pnr && <th className="p-3 font-medium text-slate-600">PNR</th>}
                      {visibleCols.virtualPos && <th className="p-3 font-medium text-slate-600 text-right">S.POS</th>}
                      {visibleCols.commission && <th className="p-3 font-medium text-slate-600 text-right">Komisyon</th>}
                      {visibleCols.card && <th className="p-3 font-medium text-slate-600 text-right">Kart</th>}
                      {visibleCols.transfer && <th className="p-3 font-medium text-slate-600 text-right">Havale</th>}
                      {visibleCols.bdCari && <th className="p-3 font-medium text-slate-600 text-right">BD. Cari</th>}
                      {visibleCols.bdYukleme && <th className="p-3 font-medium text-slate-600 text-right">BD. Yükleme</th>}
                      {visibleCols.route && <th className="p-3 font-medium text-slate-600">Kalkış / Varış</th>}
                      {visibleCols.noteDirection && <th className="p-2 font-medium text-slate-600 w-24 max-w-24">Notlar</th>}
                      {visibleCols.user && <th className="p-3 font-medium text-slate-600">Kullanıcı</th>}
                      <th className="p-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((r) => (
                      <tr key={r.id} className="border-t hover:bg-slate-50">
                        {visibleCols.id && <td className="p-3">#{r.id}</td>}
                        {visibleCols.fullName && <td className="p-3">
                          <div className="font-medium text-green-600">{r.fullName}</div>
                          {r.citizenId && <div className="text-sm text-red-600 font-medium">{r.citizenId}</div>}
                          {r.company && <div className="text-sm text-purple-600 font-medium">Firma: {r.company}</div>}
                        </td>}
                        {visibleCols.date && <td className="p-3">{new Date(r.date).toLocaleDateString('tr-TR')}</td>}
                        {visibleCols.pnr && <td className="p-3">{r.pnr}</td>}
                        {visibleCols.virtualPos && <td className="p-3 text-right">{r.virtualPos ? `₺${parseFloat(r.virtualPos).toLocaleString('tr-TR')}` : ''}</td>}
                        {visibleCols.commission && <td className="p-3 text-right">{r.commission ? `₺${parseFloat(r.commission).toLocaleString('tr-TR')}` : ''}</td>}
                        {visibleCols.card && <td className="p-3 text-right">{r.card ? `₺${parseFloat(r.card).toLocaleString('tr-TR')}` : ''}</td>}
                        {visibleCols.transfer && <td className="p-3 text-right">{r.transfer ? `₺${parseFloat(r.transfer).toLocaleString('tr-TR')}` : ''}</td>}
                        {visibleCols.bdCari && <td className="p-3 text-right">{r.currentAccountPayment ? `₺${parseFloat(r.currentAccountPayment).toLocaleString('tr-TR')}` : ''}</td>}
                        {visibleCols.bdYukleme && <td className="p-3 text-right">{r.bdload ? `₺${parseFloat(r.bdload).toLocaleString('tr-TR')}` : ''}</td>}
                        {visibleCols.route && <td className="p-3">{r.depart} / {r.arrive}{r.direction ? <br /> : ""}{r.direction && <span className="text-sm text-gray-600">{r.direction}</span>}</td>}
                        {visibleCols.noteDirection && <td className="p-1 w-24 max-w-24 text-xs leading-relaxed"><div className="break-words whitespace-normal" title={r.note}>{r.note}</div></td>}
                        {visibleCols.user && <td className="p-3">{users[r.userId] || r.userEmail || r.userId}</td>}
                        <td className="p-3 text-right flex gap-2 justify-end">
                          <Button size="sm" variant="secondary" onClick={() => startEdit(r)}>Düzenle</Button>
                          <Button size="sm" variant="destructive" onClick={() => handleDelete(r.id)}>Sil</Button>
                        </td>
                      </tr>
                    ))}
                    {/* Toplam Satırı */}
                    <tr className="border-t-2 border-slate-300 bg-slate-50 font-semibold">
                      {visibleCols.id && <td className="p-3">-</td>}
                      {visibleCols.fullName && <td className="p-3">TOPLAM</td>}
                      {visibleCols.date && <td className="p-3">-</td>}
                      {visibleCols.pnr && <td className="p-3">-</td>}
                      {visibleCols.virtualPos && <td className="p-3 text-right">
                        {(() => {
                          const total = Math.round(rows.reduce((sum, r) => sum + (parseFloat(r.virtualPos || '0') || 0), 0));
                          return total > 0 ? `₺${total.toLocaleString('tr-TR')}` : '';
                        })()}
                      </td>}
                      {visibleCols.commission && <td className="p-3 text-right">
                        {(() => {
                          const total = Math.round(rows.reduce((sum, r) => sum + (parseFloat(r.commission || '0') || 0), 0));
                          return total > 0 ? `₺${total.toLocaleString('tr-TR')}` : '';
                        })()}
                      </td>}
                      {visibleCols.card && <td className="p-3 text-right">
                        {(() => {
                          const total = Math.round(rows.reduce((sum, r) => sum + (parseFloat(r.card || '0') || 0), 0));
                          return total > 0 ? `₺${total.toLocaleString('tr-TR')}` : '';
                        })()}
                      </td>}
                      {visibleCols.transfer && <td className="p-3 text-right">
                        {(() => {
                          const total = Math.round(rows.reduce((sum, r) => sum + (parseFloat(r.transfer || '0') || 0), 0));
                          return total > 0 ? `₺${total.toLocaleString('tr-TR')}` : '';
                        })()}
                      </td>}
                      {visibleCols.bdCari && <td className="p-3 text-right">
                        {(() => {
                          const total = Math.round(rows.reduce((sum, r) => sum + (parseFloat(r.currentAccountPayment || '0') || 0), 0));
                          return total > 0 ? `₺${total.toLocaleString('tr-TR')}` : '';
                        })()}
                      </td>}
                      {visibleCols.bdYukleme && <td className="p-3 text-right">
                        {(() => {
                          const total = Math.round(rows.reduce((sum, r) => sum + (parseFloat(r.bdload || '0') || 0), 0));
                          return total > 0 ? `₺${total.toLocaleString('tr-TR')}` : '';
                        })()}
                      </td>}
                      {visibleCols.route && <td className="p-3">-</td>}
                      {visibleCols.noteDirection && <td className="p-1 w-24 max-w-24 text-xs">-</td>}
                      {visibleCols.user && <td className="p-3">-</td>}
                      <td className="p-3">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
        </CardContent>
      </Card>

          
          {/* Edit dialog */}
          <Dialog open={editOpen} onOpenChange={setEditOpen}>
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle>Kayıt Düzenle</DialogTitle>
              </DialogHeader>
              <form className="grid grid-cols-1 md:grid-cols-3 gap-3" onSubmit={handleUpdate}>
                <div className="md:col-span-3">
                  <Label>Adı Soyadı</Label>
                  <Input value={form.fullName ?? ""} onChange={(e) => setForm({ ...form, fullName: e.target.value })} required />
                </div>
                <div>
                  <Label>Telefon</Label>
                  <Input value={form.phone ?? ""} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </div>
                <div>
                  <Label>T.C. Kimlik No</Label>
                  <Input value={form.citizenId ?? ""} onChange={(e) => setForm({ ...form, citizenId: e.target.value })} />
                </div>
                <div>
                  <Label>PNR</Label>
                  <Input value={form.pnr ?? ""} onChange={(e) => setForm({ ...form, pnr: e.target.value })} />
                </div>
                <div>
                  <Label>Kalkış</Label>
                  <Input list="airportCodes" value={form.depart ?? ""} onChange={(e) => setForm({ ...form, depart: e.target.value.toUpperCase() })} />
                </div>
                <div>
                  <Label>Varış</Label>
                  <Input list="airportCodes" value={form.arrive ?? ""} onChange={(e) => setForm({ ...form, arrive: e.target.value.toUpperCase() })} />
                </div>
                <div>
                  <Label>Firma</Label>
                  <Select value={form.company ?? ""} onValueChange={(v) => setForm({ ...form, company: v })}>
                    <SelectTrigger><SelectValue placeholder="Seçiniz" /></SelectTrigger>
                    <SelectContent>
                      {["THY","PEGASUS","SUNEXPRESS","AJET","QATAR","EMIRATES","AZAL","AEROFLOT","AIR ARABIA","FLYDUBAI"].map(o => (
                        <SelectItem key={o} value={o}>{o}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Satış Türü</Label>
                  <Select value={form.saleType ?? ""} onValueChange={(v) => setForm({ ...form, saleType: v })}>
                    <SelectTrigger><SelectValue placeholder="Seçiniz" /></SelectTrigger>
                    <SelectContent>
                      {["YENI BILET","DEGISIM","IPTAL/IADE","EK HIZMET","REZERVASYON"].map(o => (
                        <SelectItem key={o} value={o}>{o}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Yön</Label>
                  <Select value={form.direction ?? ""} onValueChange={(v) => setForm({ ...form, direction: v })}>
                    <SelectTrigger><SelectValue placeholder="Seçiniz" /></SelectTrigger>
                    <SelectContent>
                      {["YURT ICI","YURT DISI"].map(o => (
                        <SelectItem key={o} value={o}>{o}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Vardiya</Label>
                  <Select value={form.shift ?? ""} onValueChange={(v) => setForm({ ...form, shift: v })}>
                    <SelectTrigger><SelectValue placeholder="Seçiniz" /></SelectTrigger>
                    <SelectContent>
                      {["SABAH","AKSAM","GECE"].map(o => (
                        <SelectItem key={o} value={o}>{o}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Cari Hesap Ödeme</Label>
                  <CurrencyInput className="h-10 w-full rounded-md border border-input px-3 py-2 text-sm" value={form.currentAccountPayment ?? ""} onValueChange={(v) => setForm({ ...form, currentAccountPayment: v })} />
                </div>
                <div>
                  <Label>BD. Para Yükleme</Label>
                  <CurrencyInput className="h-10 w-full rounded-md border border-input px-3 py-2 text-sm" value={form.bdload ?? ""} onValueChange={(v) => setForm({ ...form, bdload: v })} />
                </div>
                <div>
                  <Label>Sanal Pos</Label>
                  <CurrencyInput className="h-10 w-full rounded-md border border-input px-3 py-2 text-sm" value={form.virtualPos ?? ""} onValueChange={(v) => setForm({ ...form, virtualPos: v })} />
                </div>
                <div>
                  <Label>K. Kartı</Label>
                  <CurrencyInput className="h-10 w-full rounded-md border border-input px-3 py-2 text-sm" value={form.card ?? ""} onValueChange={(v) => setForm({ ...form, card: v })} />
                </div>
                <div>
                  <Label>Komisyon</Label>
                  <CurrencyInput className="h-10 w-full rounded-md border border-input px-3 py-2 text-sm" value={form.commission ?? ""} onValueChange={(v) => setForm({ ...form, commission: v })} />
                </div>
                <div>
                  <Label>Havale</Label>
                  <CurrencyInput className="h-10 w-full rounded-md border border-input px-3 py-2 text-sm" value={form.transfer ?? ""} onValueChange={(v) => setForm({ ...form, transfer: v })} />
                </div>
                <div className="md:col-span-3">
                  <Label>İşlem Tipi / Not</Label>
                  <Input value={form.note ?? ""} onChange={(e) => setForm({ ...form, note: e.target.value })} />
                </div>
                <div>
                  <Label>Tarih</Label>
                  <Input type="date" value={form.date ?? new Date().toISOString().slice(0, 10)} onChange={(e) => setForm({ ...form, date: e.target.value })} />
                </div>
                <div className="md:col-span-3 flex justify-end gap-2 mt-2">
                  <Button type="button" variant="secondary" onClick={() => setEditOpen(false)}>Vazgeç</Button>
                  <Button type="submit" className="bg-teal-700 hover:bg-teal-800">Güncelle</Button>
                </div>
              </form>
              <datalist id="airportCodes">
                {AIRPORTS.map((a) => (
                  <option key={a.code} value={a.code}>{a.name}</option>
                ))}
              </datalist>
            </DialogContent>
          </Dialog>
    </div>
  );
}


