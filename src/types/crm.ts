export type CrmRecord = {
  id: number;
  fullName: string;
  phone?: string | null;
  citizenId?: string | null;
  pnr?: string | null;
  depart?: string | null;
  arrive?: string | null;
  company?: string | null;
  saleType?: string | null; // YENI BILET, DEĞIŞIM vs
  direction?: string | null; // YURT ICI, YURT DISI
  shift?: string | null; // SABAH, AKSAM
  currentAccountPayment?: string | null;
  bdload?: string | null; // BD. Para Yükleme
  virtualPos?: string | null;
  card?: string | null; // K. Kartı
  commission?: string | null;
  transfer?: string | null; // Havale
  note?: string | null;
  date: string; // ISO date (yyyy-MM-dd)
  userId: string; // supabase auth user id
  userEmail?: string | null;
  createdAt: string;
  deletedAt?: string | null; // Soft delete timestamp
  deletedBy?: string | null; // Silen kullanıcının ID'si
};

export type CrmRecordInsert = Omit<CrmRecord, "id" | "createdAt" | "deletedAt" | "deletedBy">;

export type AuditLog = {
  id: number;
  tableName: string;
  recordId: number;
  action: 'CREATE' | 'UPDATE' | 'DELETE';
  oldData?: any;
  newData?: any;
  userId: string;
  userEmail?: string | null;
  createdAt: string;
};


