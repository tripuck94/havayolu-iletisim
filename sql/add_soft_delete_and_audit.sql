-- Soft delete alanlarını crm_records tablosuna ekle
ALTER TABLE crm_records 
ADD COLUMN IF NOT EXISTS deleted_at TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS deleted_by TEXT;

-- Audit log tablosu oluştur
CREATE TABLE IF NOT EXISTS audit_logs (
  id BIGSERIAL PRIMARY KEY,
  table_name TEXT NOT NULL,
  record_id BIGINT NOT NULL,
  action TEXT NOT NULL, -- 'CREATE', 'UPDATE', 'DELETE'
  old_data JSONB,
  new_data JSONB,
  user_id TEXT NOT NULL,
  user_email TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index'ler ekle
CREATE INDEX IF NOT EXISTS idx_crm_records_deleted_at ON crm_records(deleted_at);
CREATE INDEX IF NOT EXISTS idx_audit_logs_table_record ON audit_logs(table_name, record_id);
CREATE INDEX IF NOT EXISTS idx_audit_logs_user ON audit_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_audit_logs_created_at ON audit_logs(created_at);

-- RLS (Row Level Security) policies
-- Audit logs için sadece admin erişimi
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

-- Admin kullanıcılar tüm audit logları görebilir
CREATE POLICY IF NOT EXISTS "Admin can view audit logs" ON audit_logs
  FOR SELECT USING (
    auth.jwt() ->> 'email' IN (
      SELECT email FROM auth.users 
      WHERE raw_user_meta_data ->> 'is_admin' = 'true'
    )
  );

-- Sadmin kullanıcılar audit log ekleyebilir (trigger'dan)
CREATE POLICY IF NOT EXISTS "System can insert audit logs" ON audit_logs
  FOR INSERT WITH CHECK (true);

-- View: Aktif kayıtlar (silinmemiş)
CREATE OR REPLACE VIEW active_crm_records AS
SELECT * FROM crm_records 
WHERE deleted_at IS NULL;

-- View: Silinen kayıtlar
CREATE OR REPLACE VIEW deleted_crm_records AS
SELECT * FROM crm_records 
WHERE deleted_at IS NOT NULL;
