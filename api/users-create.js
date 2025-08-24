import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  
  try {
    const url = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!url || !serviceKey) {
      return res.status(500).json({ error: 'Server is missing Supabase env vars' });
    }
    
    const admin = createClient(url, serviceKey);
    const { email, password, first_name, last_name, is_admin, phone, is_active, permissions } = req.body;
    
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
    
    if (error) return res.status(400).json({ error: error.message });
    
    return res.status(200).json({ id: data.user?.id });
  } catch (e) {
    console.error('User create error:', e);
    return res.status(500).json({ error: e.message || 'Unknown error' });
  }
}
