import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  try {
    const url = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!url || !serviceKey) {
      return res.status(500).json({ error: 'Server is missing Supabase env vars' });
    }
    
    const admin = createClient(url, serviceKey);
    const { data } = await admin.auth.admin.listUsers();
    
    const authUsers = (data?.users || []).map((u) => ({
      id: u.id,
      email: u.email,
      created_at: u.created_at,
      first_name: u.user_metadata?.first_name,
      last_name: u.user_metadata?.last_name,
      phone: u.user_metadata?.phone,
      is_admin: u.user_metadata?.is_admin === true,
      is_active: u.user_metadata?.is_active !== false,
      permissions: u.user_metadata?.permissions || {},
    }));

    return res.status(200).json({ users: authUsers });
  } catch (e) {
    console.error('Users list error:', e);
    return res.status(500).json({ error: e.message || 'Unknown error' });
  }
}
