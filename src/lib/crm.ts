import { supabase } from "./supabase";
import type { CrmRecord, CrmRecordInsert } from "@/types/crm";

const TABLE = "crm_records";

function mapFromDb(row: any): CrmRecord {
  return {
    id: row.id,
    fullName: row.fullname,
    phone: row.phone,
    citizenId: row.citizenid,
    pnr: row.pnr,
    depart: row.depart,
    arrive: row.arrive,
    company: row.company,
    saleType: row.saletype,
    direction: row.direction,
    shift: row.shift,
    currentAccountPayment: row.currentaccountpayment,
    bdload: row.bdload,
    virtualPos: row.virtualpos,
    card: row.card,
    commission: row.commission,
    transfer: row.transfer,
    note: row.note,
    date: row.date,
    userId: row.userid,
    userEmail: row.useremail,
    createdAt: row.createdat,
    deletedAt: row.deleted_at,
    deletedBy: row.deleted_by,
  } as CrmRecord;
}

function mapToDb(payload: Partial<CrmRecordInsert>) {
  return {
    fullname: payload.fullName,
    phone: payload.phone,
    citizenid: payload.citizenId,
    pnr: payload.pnr,
    depart: payload.depart,
    arrive: payload.arrive,
    company: payload.company,
    saletype: payload.saleType,
    direction: payload.direction,
    shift: payload.shift,
    currentaccountpayment: payload.currentAccountPayment,
    bdload: (payload as any).bdload ?? (payload as any).bdLoad ?? null,
    virtualpos: payload.virtualPos,
    card: payload.card,
    commission: payload.commission,
    transfer: payload.transfer,
    note: payload.note,
    date: payload.date,
    userid: payload.userId,
    useremail: (payload as any).userEmail,
    createdat: (payload as any).createdAt,
  };
}

// Audit log fonksiyonu
async function createAuditLog(
  tableName: string,
  recordId: number,
  action: 'CREATE' | 'UPDATE' | 'DELETE',
  oldData?: any,
  newData?: any
) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    await supabase.from('audit_logs').insert({
      table_name: tableName,
      record_id: recordId,
      action,
      old_data: oldData,
      new_data: newData,
      user_id: user?.id || 'system',
      user_email: user?.email,
    });
  } catch (error) {
    console.error('Audit log oluşturulamadı:', error);
  }
}

export async function listRecords(params: {
  start?: string; // yyyy-MM-dd
  end?: string; // yyyy-MM-dd
  search?: string;
  includeDeleted?: boolean;
}) {
  let query = supabase.from(TABLE).select("*").order("id", { ascending: false });
  
  // Soft delete kontrolü - varsayılan olarak silinmiş kayıtları gösterme
  if (!params.includeDeleted) {
    query = query.is("deleted_at", null);
  }
  
  if (params.start) query = query.gte("date", params.start);
  if (params.end) query = query.lte("date", params.end);
  if (params.search) {
    query = query.ilike("fullname", `%${params.search}%`);
  }
  const { data, error } = await query;
  if (error) throw error;
  return (data ?? []).map(mapFromDb);
}

export async function createRecord(payload: CrmRecordInsert) {
  const toInsert = mapToDb(payload);
  const { data, error } = await supabase.from(TABLE).insert(toInsert).select().single();
  if (error) throw error;
  
  // Audit log oluştur
  await createAuditLog(TABLE, data.id, 'CREATE', null, data);
  
  return mapFromDb(data);
}

export async function deleteRecord(id: number) {
  // Önce mevcut kaydı al (audit log için)
  const { data: existingRecord } = await supabase
    .from(TABLE)
    .select("*")
    .eq("id", id)
    .single();

  if (!existingRecord) throw new Error("Kayıt bulunamadı");

  // Soft delete yap
  const { data: { user } } = await supabase.auth.getUser();
  const { error } = await supabase
    .from(TABLE)
    .update({
      deleted_at: new Date().toISOString(),
      deleted_by: user?.id || 'system'
    })
    .eq("id", id);

  if (error) throw error;

  // Audit log oluştur
  await createAuditLog(TABLE, id, 'DELETE', existingRecord, null);
}

export async function updateRecord(id: number, payload: Partial<CrmRecordInsert>) {
  // Önce mevcut kaydı al (audit log için)
  const { data: existingRecord } = await supabase
    .from(TABLE)
    .select("*")
    .eq("id", id)
    .single();

  const toUpdate = mapToDb(payload);
  const { data, error } = await supabase.from(TABLE).update(toUpdate).eq("id", id).select().single();
  if (error) throw error;

  // Audit log oluştur
  await createAuditLog(TABLE, id, 'UPDATE', existingRecord, data);

  return mapFromDb(data);
}

export async function countRecords(params?: { start?: string; end?: string; includeDeleted?: boolean }) {
  let query = supabase.from(TABLE).select("id", { count: "exact", head: true });
  
  // Soft delete kontrolü
  if (!params?.includeDeleted) {
    query = query.is("deleted_at", null);
  }
  
  if (params?.start) query = query.gte("date", params.start);
  if (params?.end) query = query.lte("date", params.end);
  const { count, error } = await query;
  if (error) throw error;
  return count ?? 0;
}

// Silinen kayıtları listele (sadmin kullanıcılar için)
export async function listDeletedRecords(params: {
  start?: string;
  end?: string;
  search?: string;
}) {
  let query = supabase.from(TABLE).select("*").order("deleted_at", { ascending: false });
  
  // Sadece silinmiş kayıtları getir
  query = query.not("deleted_at", "is", null);
  
  if (params.start) query = query.gte("date", params.start);
  if (params.end) query = query.lte("date", params.end);
  if (params.search) {
    query = query.ilike("fullname", `%${params.search}%`);
  }
  const { data, error } = await query;
  if (error) throw error;
  return (data ?? []).map(mapFromDb);
}

// Audit logları listele (admin kullanıcılar için)
export async function listAuditLogs(params: {
  recordId?: number;
  tableName?: string;
  action?: string;
  limit?: number;
}) {
  let query = supabase.from('audit_logs').select("*").order("created_at", { ascending: false });
  
  if (params.recordId) query = query.eq("record_id", params.recordId);
  if (params.tableName) query = query.eq("table_name", params.tableName);
  if (params.action) query = query.eq("action", params.action);
  if (params.limit) query = query.limit(params.limit);
  
  const { data, error } = await query;
  if (error) throw error;
  return data ?? [];
}


