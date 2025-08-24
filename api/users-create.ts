import { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const url = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string;
    if (!url || !serviceKey) {
      return res.status(500).json({ error: 'Server is missing Supabase env vars' });
    }
    const admin = createClient(url, serviceKey);
    const { email, password, first_name, last_name, is_admin, phone, is_active, permissions } = req.body as any;
    const { error, data } = await admin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: {
        first_name,
        last_name,
        phone,
        is_admin: Boolean(is_admin),
        is_active: is_active !== false,
        permissions: {
          can_delete: Boolean(permissions?.can_delete),
          can_edit: Boolean(permissions?.can_edit),
          can_access_all: Boolean(permissions?.can_access_all),
        }
      },
    });
    if (error) return res.status(400).send(JSON.stringify({ error: error.message }));
    // opsiyonel: uygulama db'nize kullanıcıyı ekleyin (ör. public.crm_users)
    // Not: crm_users tablosuna artık yazmıyoruz; tek kaynak Auth user_metadata
    return res.status(200).send(JSON.stringify({ id: data.user?.id }));
  } catch (e: any) {
    return res.status(500).json({ error: e.message || 'Unknown error' });
  }
}


