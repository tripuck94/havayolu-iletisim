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
    const { user_id, first_name, last_name, phone, is_admin, is_active, permissions } = req.body;
    
    if (!user_id) return res.status(400).json({ error: 'user_id required' });

    const { error } = await admin.auth.admin.updateUserById(user_id, {
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
        },
      },
    });
    
    if (error) return res.status(400).json({ error: error.message });
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error('User update error:', e);
    return res.status(500).json({ error: e.message || 'Unknown error' });
  }
}
