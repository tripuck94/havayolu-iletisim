import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Download, FileText, Table } from "lucide-react";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import { useToast } from "@/hooks/use-toast";
import { listRecords } from "@/lib/crm";
import type { CrmRecord } from "@/types/crm";
import { supabase } from "@/lib/supabase";
import { useNavigate } from "react-router-dom";
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';

interface ReportStats {
  userStats: { userId: string; userName: string; commission: number; count: number }[];
  paymentStats: { type: string; amount: number }[];
  companyStats: { company: string; commission: number; count: number }[];
  shiftStats: { shift: string; commission: number; count: number }[];
  directionStats: { direction: string; commission: number; count: number }[];
  saleTypeStats: { saleType: string; commission: number; count: number }[];
}

export default function Reports() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [records, setRecords] = useState<CrmRecord[]>([]);
  const [stats, setStats] = useState<ReportStats>({
    userStats: [],
    paymentStats: [],
    companyStats: [],
    shiftStats: [],
    directionStats: [],
    saleTypeStats: []
  });
  const [users, setUsers] = useState<Record<string, string>>({});

  // Admin kontrolü
  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        const isUserAdmin = user?.user_metadata?.is_admin === true;
        
        if (!isUserAdmin) {
          toast({
            title: "Yetkisiz Erişim",
            description: "Bu sayfaya erişim için admin yetkisi gereklidir.",
            variant: "destructive"
          });
          navigate("/crm");
          return;
        }
        
        setIsAdmin(true);
      } catch (error) {
        console.error("Admin kontrolü hatası:", error);
        navigate("/crm");
      } finally {
        setLoading(false);
      }
    };

    checkAdmin();
  }, [navigate, toast]);

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

  // Verileri yükle
  const loadData = async () => {
    setLoading(true);
    try {
      const start = format(startDate, "yyyy-MM-dd");
      const end = format(endDate, "yyyy-MM-dd");
      const data = await listRecords({ start, end, search: "" });
      setRecords(data);
      calculateStats(data);
    } catch (err: any) {
      toast({ title: "Veriler yüklenemedi", description: err.message });
    } finally {
      setLoading(false);
    }
  };

  // İstatistikleri hesapla
  const calculateStats = (data: CrmRecord[]) => {
    const userStats: Record<string, { commission: number; count: number }> = {};
    const paymentStats: Record<string, number> = {};
    const companyStats: Record<string, { commission: number; count: number }> = {};
    const shiftStats: Record<string, { commission: number; count: number }> = {};
    const directionStats: Record<string, { commission: number; count: number }> = {};
    const saleTypeStats: Record<string, { commission: number; count: number }> = {};

    data.forEach(record => {
      const commission = parseFloat(record.commission || '0') || 0;
      
      // Kullanıcı bazlı
      const userId = record.userId;
      if (!userStats[userId]) userStats[userId] = { commission: 0, count: 0 };
      userStats[userId].commission += commission;
      userStats[userId].count += 1;

      // Ödeme türü bazlı
      const spos = parseFloat(record.virtualPos || '0') || 0;
      const card = parseFloat(record.card || '0') || 0;
      const transfer = parseFloat(record.transfer || '0') || 0;
      const bdCari = parseFloat(record.currentAccountPayment || '0') || 0;
      const bdLoad = parseFloat(record.bdload || '0') || 0;

      if (spos > 0) paymentStats['S.POS'] = (paymentStats['S.POS'] || 0) + spos;
      if (card > 0) paymentStats['Kart'] = (paymentStats['Kart'] || 0) + card;
      if (transfer > 0) paymentStats['Havale'] = (paymentStats['Havale'] || 0) + transfer;
      if (bdCari > 0) paymentStats['BD. Cari'] = (paymentStats['BD. Cari'] || 0) + bdCari;
      if (bdLoad > 0) paymentStats['BD. Yükleme'] = (paymentStats['BD. Yükleme'] || 0) + bdLoad;

      // Firma bazlı
      if (record.company) {
        if (!companyStats[record.company]) companyStats[record.company] = { commission: 0, count: 0 };
        companyStats[record.company].commission += commission;
        companyStats[record.company].count += 1;
      }

      // Vardiya bazlı
      if (record.shift) {
        if (!shiftStats[record.shift]) shiftStats[record.shift] = { commission: 0, count: 0 };
        shiftStats[record.shift].commission += commission;
        shiftStats[record.shift].count += 1;
      }

      // Yön bazlı
      if (record.direction) {
        if (!directionStats[record.direction]) directionStats[record.direction] = { commission: 0, count: 0 };
        directionStats[record.direction].commission += commission;
        directionStats[record.direction].count += 1;
      }

      // Satış türü bazlı
      if (record.saleType) {
        if (!saleTypeStats[record.saleType]) saleTypeStats[record.saleType] = { commission: 0, count: 0 };
        saleTypeStats[record.saleType].commission += commission;
        saleTypeStats[record.saleType].count += 1;
      }
    });

    setStats({
      userStats: Object.entries(userStats).map(([userId, stats]) => ({
        userId,
        userName: users[userId] || userId,
        ...stats
      })),
      paymentStats: Object.entries(paymentStats).map(([type, amount]) => ({ type, amount })),
      companyStats: Object.entries(companyStats).map(([company, stats]) => ({ company, ...stats })),
      shiftStats: Object.entries(shiftStats).map(([shift, stats]) => ({ shift, ...stats })),
      directionStats: Object.entries(directionStats).map(([direction, stats]) => ({ direction, ...stats })),
      saleTypeStats: Object.entries(saleTypeStats).map(([saleType, stats]) => ({ saleType, ...stats }))
    });
  };

  useEffect(() => {
    if (isAdmin) {
      loadUsers();
    }
  }, [isAdmin]);

  useEffect(() => {
    if (isAdmin && Object.keys(users).length > 0) {
      loadData();
    }
  }, [startDate, endDate, isAdmin, users]);

  const exportToExcel = (reportType: string, data: any[]) => {
    try {
      let worksheetData: any[][] = [];
      let filename = `${reportType}_Raporu_${format(startDate, 'yyyy-MM-dd')}_${format(endDate, 'yyyy-MM-dd')}.xlsx`;

      // Rapor türüne göre veri formatla ve yüzde hesapla
      switch (reportType) {
        case "Kullanıcı":
          const totalCommissionUser = data.reduce((sum, item) => sum + item.commission, 0);
          const totalCountUser = data.reduce((sum, item) => sum + item.count, 0);
          worksheetData = [
            ["Kullanıcı", "Komisyon", "İşlem Sayısı", "Yüzde (%)"],
            ...data.map((item: any) => {
              const percentage = totalCommissionUser > 0 ? ((item.commission / totalCommissionUser) * 100).toFixed(1) : "0.0";
              return [item.userName, item.commission, item.count, percentage + "%"];
            }),
            [], // Boş satır
            ["TOPLAM", totalCommissionUser, totalCountUser, "100.0%"]
          ];
          break;
        case "Ödeme Türü":
          const totalAmountPayment = data.reduce((sum, item) => sum + item.amount, 0);
          worksheetData = [
            ["Ödeme Türü", "Tutar", "Yüzde (%)"],
            ...data.map((item: any) => {
              const percentage = totalAmountPayment > 0 ? ((item.amount / totalAmountPayment) * 100).toFixed(1) : "0.0";
              return [item.type, item.amount, percentage + "%"];
            }),
            [], // Boş satır
            ["TOPLAM", totalAmountPayment, "100.0%"]
          ];
          break;
        case "Firma":
          const totalCommissionCompany = data.reduce((sum, item) => sum + item.commission, 0);
          const totalCountCompany = data.reduce((sum, item) => sum + item.count, 0);
          worksheetData = [
            ["Firma", "Komisyon", "İşlem Sayısı", "Yüzde (%)"],
            ...data.map((item: any) => {
              const percentage = totalCommissionCompany > 0 ? ((item.commission / totalCommissionCompany) * 100).toFixed(1) : "0.0";
              return [item.company, item.commission, item.count, percentage + "%"];
            }),
            [], // Boş satır
            ["TOPLAM", totalCommissionCompany, totalCountCompany, "100.0%"]
          ];
          break;
        case "Vardiya":
          const totalCommissionShift = data.reduce((sum, item) => sum + item.commission, 0);
          const totalCountShift = data.reduce((sum, item) => sum + item.count, 0);
          worksheetData = [
            ["Vardiya", "Komisyon", "İşlem Sayısı", "Yüzde (%)"],
            ...data.map((item: any) => {
              const percentage = totalCommissionShift > 0 ? ((item.commission / totalCommissionShift) * 100).toFixed(1) : "0.0";
              return [item.shift, item.commission, item.count, percentage + "%"];
            }),
            [], // Boş satır
            ["TOPLAM", totalCommissionShift, totalCountShift, "100.0%"]
          ];
          break;
        case "Yön":
          const totalCommissionDirection = data.reduce((sum, item) => sum + item.commission, 0);
          const totalCountDirection = data.reduce((sum, item) => sum + item.count, 0);
          worksheetData = [
            ["Yön", "Komisyon", "İşlem Sayısı", "Yüzde (%)"],
            ...data.map((item: any) => {
              const percentage = totalCommissionDirection > 0 ? ((item.commission / totalCommissionDirection) * 100).toFixed(1) : "0.0";
              return [item.direction, item.commission, item.count, percentage + "%"];
            }),
            [], // Boş satır
            ["TOPLAM", totalCommissionDirection, totalCountDirection, "100.0%"]
          ];
          break;
        case "Satış Türü":
          const totalCommissionSale = data.reduce((sum, item) => sum + item.commission, 0);
          const totalCountSale = data.reduce((sum, item) => sum + item.count, 0);
          worksheetData = [
            ["Satış Türü", "Komisyon", "İşlem Sayısı", "Yüzde (%)"],
            ...data.map((item: any) => {
              const percentage = totalCommissionSale > 0 ? ((item.commission / totalCommissionSale) * 100).toFixed(1) : "0.0";
              return [item.saleType, item.commission, item.count, percentage + "%"];
            }),
            [], // Boş satır
            ["TOPLAM", totalCommissionSale, totalCountSale, "100.0%"]
          ];
          break;
      }

      const ws = XLSX.utils.aoa_to_sheet(worksheetData);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, reportType);
      XLSX.writeFile(wb, filename);

      toast({ title: "Excel Export", description: `${reportType} raporu başarıyla indirildi!` });
    } catch (error) {
      toast({ title: "Export Hatası", description: "Excel dosyası oluşturulurken hata oluştu.", variant: "destructive" });
    }
  };

  const exportToPDF = (reportType: string, data: any[]) => {
    try {
      const doc = new jsPDF();
      
      // Türkçe karakterleri temizleyen fonksiyon
      const cleanText = (text: string) => {
        if (!text) return '';
        return String(text).replace(/ş/g, 's').replace(/Ş/g, 'S')
                  .replace(/ğ/g, 'g').replace(/Ğ/g, 'G')
                  .replace(/ü/g, 'u').replace(/Ü/g, 'U')
                  .replace(/ı/g, 'i').replace(/İ/g, 'I')
                  .replace(/ö/g, 'o').replace(/Ö/g, 'O')
                  .replace(/ç/g, 'c').replace(/Ç/g, 'C')
                  .replace(/₺/g, 'TL');
      };

      const cleanTitle = cleanText(reportType);
      
      // PDF başlığı
      doc.setFontSize(18);
      doc.text(`${cleanTitle} Raporu`, 20, 20);
      
      doc.setFontSize(12);
      doc.text(`Tarih: ${format(startDate, 'dd.MM.yyyy')} - ${format(endDate, 'dd.MM.yyyy')}`, 20, 35);

      // Tablo formatında rapor
      let yPos = 55;
      
      // Tablo başlıkları
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      
      // Sütun pozisyonları
      const col1 = 20;  // No
      const col2 = 35;  // İsim/Tür 
      const col3 = 110; // Tutar
      const col4 = 150; // İşlem sayısı
      const col5 = 175; // Yüzde
      
      // Başlık çizgisi
      doc.line(15, yPos - 5, 190, yPos - 5);
      
      if (reportType === "Ödeme Türü") {
        doc.text('No', col1, yPos);
        doc.text('Odeme Turu', col2, yPos);
        doc.text('Tutar', col3, yPos);
        doc.text('%', col5, yPos);
      } else {
        doc.text('No', col1, yPos);
        doc.text('Ad/Turu', col2, yPos);
        doc.text('Komisyon', col3, yPos);
        doc.text('Islem', col4, yPos);
        doc.text('%', col5, yPos);
      }
      
      yPos += 5;
      doc.line(15, yPos, 190, yPos);
      yPos += 10;
      
      // Toplam hesapla (yüzde için)
      const totalAmount = reportType === "Ödeme Türü" 
        ? data.reduce((sum: number, item: any) => sum + (item.amount || 0), 0)
        : data.reduce((sum: number, item: any) => sum + (item.commission || 0), 0);
      
      // Veri satırları
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      
      data.forEach((item: any, index: number) => {
        if (yPos > 250) {
          doc.addPage();
          yPos = 30;
          
          // Yeni sayfada başlık tekrarla
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(12);
          if (reportType === "Ödeme Türü") {
            doc.text('No', col1, yPos);
            doc.text('Odeme Turu', col2, yPos);
            doc.text('Tutar', col3, yPos);
            doc.text('%', col5, yPos);
          } else {
            doc.text('No', col1, yPos);
            doc.text('Ad/Turu', col2, yPos);
            doc.text('Komisyon', col3, yPos);
            doc.text('Islem', col4, yPos);
            doc.text('%', col5, yPos);
          }
          yPos += 5;
          doc.line(15, yPos, 190, yPos);
          yPos += 10;
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(10);
        }

        // Satır numarası
        doc.text(String(index + 1), col1, yPos);
        
        // Dikey çizgiler (sütun ayırıcı)
        doc.line(30, yPos - 4, 30, yPos + 2);
        doc.line(105, yPos - 4, 105, yPos + 2);
        if (reportType !== "Ödeme Türü") {
          doc.line(145, yPos - 4, 145, yPos + 2);
        }
        doc.line(170, yPos - 4, 170, yPos + 2);
        
        let percentage = 0;
        
        switch (reportType) {
          case "Kullanıcı":
            percentage = totalAmount > 0 ? (item.commission / totalAmount) * 100 : 0;
            doc.text(cleanText(item.userName).substring(0, 20), col2, yPos);
            doc.text(`TL${item.commission.toLocaleString('en-US')}`, col3, yPos);
            doc.text(String(item.count), col4, yPos);
            doc.text(`${percentage.toFixed(1)}%`, col5, yPos);
            break;
          case "Ödeme Türü":
            percentage = totalAmount > 0 ? (item.amount / totalAmount) * 100 : 0;
            doc.text(cleanText(item.type), col2, yPos);
            doc.text(`TL${item.amount.toLocaleString('en-US')}`, col3, yPos);
            doc.text(`${percentage.toFixed(1)}%`, col5, yPos);
            break;
          case "Firma":
            percentage = totalAmount > 0 ? (item.commission / totalAmount) * 100 : 0;
            doc.text(cleanText(item.company), col2, yPos);
            doc.text(`TL${item.commission.toLocaleString('en-US')}`, col3, yPos);
            doc.text(String(item.count), col4, yPos);
            doc.text(`${percentage.toFixed(1)}%`, col5, yPos);
            break;
          case "Vardiya":
            percentage = totalAmount > 0 ? (item.commission / totalAmount) * 100 : 0;
            doc.text(cleanText(item.shift), col2, yPos);
            doc.text(`TL${item.commission.toLocaleString('en-US')}`, col3, yPos);
            doc.text(String(item.count), col4, yPos);
            doc.text(`${percentage.toFixed(1)}%`, col5, yPos);
            break;
          case "Yön":
            percentage = totalAmount > 0 ? (item.commission / totalAmount) * 100 : 0;
            doc.text(cleanText(item.direction), col2, yPos);
            doc.text(`TL${item.commission.toLocaleString('en-US')}`, col3, yPos);
            doc.text(String(item.count), col4, yPos);
            doc.text(`${percentage.toFixed(1)}%`, col5, yPos);
            break;
          case "Satış Türü":
            percentage = totalAmount > 0 ? (item.commission / totalAmount) * 100 : 0;
            doc.text(cleanText(item.saleType).substring(0, 20), col2, yPos);
            doc.text(`TL${item.commission.toLocaleString('en-US')}`, col3, yPos);
            doc.text(String(item.count), col4, yPos);
            doc.text(`${percentage.toFixed(1)}%`, col5, yPos);
            break;
        }

        yPos += 8;
        
        // Alt çizgi (hafif)
        if (index % 2 === 1) {
          doc.setDrawColor(230, 230, 230);
          doc.line(15, yPos - 4, 190, yPos - 4);
          doc.setDrawColor(0, 0, 0);
        }
      });

      // Toplam satırı - tablo formatında
      if (data.length > 0) {
        yPos += 10;
        
        // Toplam için kalın çizgi
        doc.setLineWidth(2);
        doc.line(15, yPos, 190, yPos);
        doc.setLineWidth(1);
        yPos += 8;
        
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11);
        
        // Toplam satır verisi
        doc.text('TOPLAM', col2, yPos);
        
        // Dikey çizgiler
        doc.line(30, yPos - 4, 30, yPos + 2);
        doc.line(105, yPos - 4, 105, yPos + 2);
        if (reportType !== "Ödeme Türü") {
          doc.line(145, yPos - 4, 145, yPos + 2);
        }
        doc.line(170, yPos - 4, 170, yPos + 2);

        if (reportType === "Ödeme Türü") {
          const total = data.reduce((sum: number, item: any) => sum + (item.amount || 0), 0);
          doc.text(`TL${total.toLocaleString('en-US')}`, col3, yPos);
          doc.text('100.0%', col5, yPos);
        } else {
          const totalCommission = data.reduce((sum: number, item: any) => sum + (item.commission || 0), 0);
          const totalCount = data.reduce((sum: number, item: any) => sum + (item.count || 0), 0);
          doc.text(`TL${totalCommission.toLocaleString('en-US')}`, col3, yPos);
          doc.text(String(totalCount), col4, yPos);
          doc.text('100.0%', col5, yPos);
        }
        
        yPos += 5;
        doc.line(15, yPos, 190, yPos);
      }

      const filename = `${cleanTitle}_Raporu_${format(new Date(), 'yyyy-MM-dd-HHmm')}.pdf`;
      doc.save(filename);

      toast({ 
        title: "PDF Basarili", 
        description: `${reportType} raporu indirildi!`,
        variant: "default"
      });

    } catch (error) {
      console.error('PDF Export Error:', error);
      toast({ 
        title: "PDF Hatasi", 
        description: "PDF olusturulamadi. Tekrar deneyin.",
        variant: "destructive" 
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px] p-6">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 font-medium">Raporlar yükleniyor...</p>
          <p className="text-sm text-gray-500 mt-1">Bu işlem birkaç saniye sürebilir</p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="border-b pb-3">
          <CardTitle className="flex items-center justify-between">
            <span>Raporlar</span>
            <div className="flex gap-3">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {startDate ? format(startDate, "PPP", { locale: tr }) : "Başlangıç tarihi"}
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
              
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endDate ? format(endDate, "PPP", { locale: tr }) : "Bitiş tarihi"}
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
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Kullanıcı Bazlı Rapor */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg">Kullanıcı Bazlı Komisyon & İşlem</CardTitle>
                <div className="flex gap-1">
                  <Button size="sm" variant="outline" onClick={() => exportToExcel("Kullanıcı", stats.userStats)}>
                    <Table className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => exportToPDF("Kullanıcı", stats.userStats)}>
                    <FileText className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {(() => {
                    const totalCommission = stats.userStats.reduce((sum, item) => sum + item.commission, 0);
                    return stats.userStats.map((item, i) => {
                      const percentage = totalCommission > 0 ? (item.commission / totalCommission) * 100 : 0;
                      return (
                        <div key={i} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                          <div className="flex flex-col">
                            <span className="font-medium">{item.userName}</span>
                            <span className="text-xs text-slate-500 font-medium">{percentage.toFixed(1)}%</span>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium">₺{item.commission.toLocaleString('tr-TR')}</div>
                            <div className="text-xs text-gray-500">{item.count} işlem</div>
                          </div>
                        </div>
                      );
                    });
                  })()}
                  {stats.userStats.length > 0 && (
                    <div className="flex justify-between items-center p-2 bg-gray-200 rounded border-t-2 border-gray-300 font-bold">
                      <div className="flex flex-col">
                        <span>TOPLAM</span>
                        <span className="text-xs text-slate-500 font-bold">100.0%</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold">₺{stats.userStats.reduce((sum, item) => sum + item.commission, 0).toLocaleString('tr-TR')}</div>
                        <div className="text-xs text-gray-600">{stats.userStats.reduce((sum, item) => sum + item.count, 0)} işlem</div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Ödeme Türü Bazlı Rapor */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg">Ödeme Türü Bazında Ciro</CardTitle>
                <div className="flex gap-1">
                  <Button size="sm" variant="outline" onClick={() => exportToExcel("Ödeme Türü", stats.paymentStats)}>
                    <Table className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => exportToPDF("Ödeme Türü", stats.paymentStats)}>
                    <FileText className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {(() => {
                    const totalAmount = stats.paymentStats.reduce((sum, item) => sum + item.amount, 0);
                    return stats.paymentStats.map((item, i) => {
                      const percentage = totalAmount > 0 ? (item.amount / totalAmount) * 100 : 0;
                      return (
                        <div key={i} className="flex justify-between items-center p-2 bg-blue-50 rounded">
                          <div className="flex flex-col">
                            <span className="font-medium">{item.type}</span>
                            <span className="text-xs text-slate-500 font-medium">{percentage.toFixed(1)}%</span>
                          </div>
                          <span className="font-medium">₺{item.amount.toLocaleString('tr-TR')}</span>
                        </div>
                      );
                    });
                  })()}
                  {stats.paymentStats.length > 0 && (
                    <div className="flex justify-between items-center p-2 bg-blue-200 rounded border-t-2 border-blue-300 font-bold">
                      <div className="flex flex-col">
                        <span>TOPLAM</span>
                        <span className="text-xs text-slate-500 font-bold">100.0%</span>
                      </div>
                      <span className="font-bold">₺{stats.paymentStats.reduce((sum, item) => sum + item.amount, 0).toLocaleString('tr-TR')}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Firma Bazlı Rapor */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg">Firma Bazında Komisyon & İşlem</CardTitle>
                <div className="flex gap-1">
                  <Button size="sm" variant="outline" onClick={() => exportToExcel("Firma", stats.companyStats)}>
                    <Table className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => exportToPDF("Firma", stats.companyStats)}>
                    <FileText className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {(() => {
                    const totalCommission = stats.companyStats.reduce((sum, item) => sum + item.commission, 0);
                    return stats.companyStats.map((item, i) => {
                      const percentage = totalCommission > 0 ? (item.commission / totalCommission) * 100 : 0;
                      return (
                        <div key={i} className="flex justify-between items-center p-2 bg-purple-50 rounded">
                          <div className="flex flex-col">
                            <span className="font-medium">{item.company}</span>
                            <span className="text-xs text-slate-500 font-medium">{percentage.toFixed(1)}%</span>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium">₺{item.commission.toLocaleString('tr-TR')}</div>
                            <div className="text-xs text-gray-500">{item.count} işlem</div>
                          </div>
                        </div>
                      );
                    });
                  })()}
                  {stats.companyStats.length > 0 && (
                    <div className="flex justify-between items-center p-2 bg-purple-200 rounded border-t-2 border-purple-300 font-bold">
                      <div className="flex flex-col">
                        <span>TOPLAM</span>
                        <span className="text-xs text-slate-500 font-bold">100.0%</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold">₺{stats.companyStats.reduce((sum, item) => sum + item.commission, 0).toLocaleString('tr-TR')}</div>
                        <div className="text-xs text-gray-600">{stats.companyStats.reduce((sum, item) => sum + item.count, 0)} işlem</div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Vardiya Bazlı Rapor */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg">Vardiya Bazında Komisyon & İşlem</CardTitle>
                <div className="flex gap-1">
                  <Button size="sm" variant="outline" onClick={() => exportToExcel("Vardiya", stats.shiftStats)}>
                    <Table className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => exportToPDF("Vardiya", stats.shiftStats)}>
                    <FileText className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {(() => {
                    const totalCommission = stats.shiftStats.reduce((sum, item) => sum + item.commission, 0);
                    return stats.shiftStats.map((item, i) => {
                      const percentage = totalCommission > 0 ? (item.commission / totalCommission) * 100 : 0;
                      return (
                        <div key={i} className="flex justify-between items-center p-2 bg-green-50 rounded">
                          <div className="flex flex-col">
                            <span className="font-medium">{item.shift}</span>
                            <span className="text-xs text-slate-500 font-medium">{percentage.toFixed(1)}%</span>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium">₺{item.commission.toLocaleString('tr-TR')}</div>
                            <div className="text-xs text-gray-500">{item.count} işlem</div>
                          </div>
                        </div>
                      );
                    });
                  })()}
                  {stats.shiftStats.length > 0 && (
                    <div className="flex justify-between items-center p-2 bg-green-200 rounded border-t-2 border-green-300 font-bold">
                      <div className="flex flex-col">
                        <span>TOPLAM</span>
                        <span className="text-xs text-slate-500 font-bold">100.0%</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold">₺{stats.shiftStats.reduce((sum, item) => sum + item.commission, 0).toLocaleString('tr-TR')}</div>
                        <div className="text-xs text-gray-600">{stats.shiftStats.reduce((sum, item) => sum + item.count, 0)} işlem</div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Yön Bazlı Rapor */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg">Yön Bazında Komisyon & İşlem</CardTitle>
                <div className="flex gap-1">
                  <Button size="sm" variant="outline" onClick={() => exportToExcel("Yön", stats.directionStats)}>
                    <Table className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => exportToPDF("Yön", stats.directionStats)}>
                    <FileText className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {(() => {
                    const totalCommission = stats.directionStats.reduce((sum, item) => sum + item.commission, 0);
                    return stats.directionStats.map((item, i) => {
                      const percentage = totalCommission > 0 ? (item.commission / totalCommission) * 100 : 0;
                      return (
                        <div key={i} className="flex justify-between items-center p-2 bg-orange-50 rounded">
                          <div className="flex flex-col">
                            <span className="font-medium">{item.direction}</span>
                            <span className="text-xs text-slate-500 font-medium">{percentage.toFixed(1)}%</span>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium">₺{item.commission.toLocaleString('tr-TR')}</div>
                            <div className="text-xs text-gray-500">{item.count} işlem</div>
                          </div>
                        </div>
                      );
                    });
                  })()}
                  {stats.directionStats.length > 0 && (
                    <div className="flex justify-between items-center p-2 bg-orange-200 rounded border-t-2 border-orange-300 font-bold">
                      <div className="flex flex-col">
                        <span>TOPLAM</span>
                        <span className="text-xs text-slate-500 font-bold">100.0%</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold">₺{stats.directionStats.reduce((sum, item) => sum + item.commission, 0).toLocaleString('tr-TR')}</div>
                        <div className="text-xs text-gray-600">{stats.directionStats.reduce((sum, item) => sum + item.count, 0)} işlem</div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Satış Türü Bazlı Rapor */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg">Satış Türü Bazında Komisyon & İşlem</CardTitle>
                <div className="flex gap-1">
                  <Button size="sm" variant="outline" onClick={() => exportToExcel("Satış Türü", stats.saleTypeStats)}>
                    <Table className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => exportToPDF("Satış Türü", stats.saleTypeStats)}>
                    <FileText className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {(() => {
                    const totalCommission = stats.saleTypeStats.reduce((sum, item) => sum + item.commission, 0);
                    return stats.saleTypeStats.map((item, i) => {
                      const percentage = totalCommission > 0 ? (item.commission / totalCommission) * 100 : 0;
                      return (
                        <div key={i} className="flex justify-between items-center p-2 bg-red-50 rounded">
                          <div className="flex flex-col">
                            <span className="font-medium">{item.saleType}</span>
                            <span className="text-xs text-slate-500 font-medium">{percentage.toFixed(1)}%</span>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium">₺{item.commission.toLocaleString('tr-TR')}</div>
                            <div className="text-xs text-gray-500">{item.count} işlem</div>
                          </div>
                        </div>
                      );
                    });
                  })()}
                  {stats.saleTypeStats.length > 0 && (
                    <div className="flex justify-between items-center p-2 bg-red-200 rounded border-t-2 border-red-300 font-bold">
                      <div className="flex flex-col">
                        <span>TOPLAM</span>
                        <span className="text-xs text-slate-500 font-bold">100.0%</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold">₺{stats.saleTypeStats.reduce((sum, item) => sum + item.commission, 0).toLocaleString('tr-TR')}</div>
                        <div className="text-xs text-gray-600">{stats.saleTypeStats.reduce((sum, item) => sum + item.count, 0)} işlem</div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

          </div>
        </CardContent>
      </Card>
    </div>
  );
}
