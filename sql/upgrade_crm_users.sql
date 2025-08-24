-- crm_users tablosu yoksa oluştur
create table if not exists public.crm_users (
  id uuid primary key,
  email text unique,
  first_name text,
  last_name text,
  phone text,
  is_admin boolean default false,
  is_active boolean default true,
  can_delete boolean default false,
  can_edit boolean default false,
  can_access_all boolean default false,
  created_at timestamp with time zone default now()
);

-- Eksik sütunları ekle
alter table public.crm_users add column if not exists phone text;
alter table public.crm_users add column if not exists is_active boolean default true;
alter table public.crm_users add column if not exists can_delete boolean default false;
alter table public.crm_users add column if not exists can_edit boolean default false;
alter table public.crm_users add column if not exists can_access_all boolean default false;


