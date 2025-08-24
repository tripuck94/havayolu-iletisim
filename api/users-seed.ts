import { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

// Tek seferlik örnek kullanıcı eklemek için yardımcı endpoint
// Güvenlik: ?token=SEED_TOKEN query paramı ile korunur

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const url = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string;
    const seedToken = process.env.SEED_TOKEN as string | undefined;
    if (!url || !serviceKey) {
      return res.status(500).json({ error: 'Server is missing Supabase env vars' });
    }
    if (seedToken) {
      if ((req.query.token as string | undefined) !== seedToken) {
        return res.status(403).json({ error: 'Forbidden' });
      }
    }

    const admin = createClient(url, serviceKey);

    const email = 'demo@havayoluiletisim.com';
    const password = 'Demo1234!';
    const metadata = {
      first_name: 'Demo',
      last_name: 'Kullanıcı',
      phone: '555 111 22 33',
      is_admin: false,
      is_active: true,
      permissions: { can_delete: false, can_edit: true, can_access_all: false },
    } as const;

    // Kullanıcı zaten varsa oluşturmayı atla
    const existing = await admin.auth.admin.listUsers();
    const exists = (existing.data?.users || []).find(u => (u.email || '').toLowerCase() === email.toLowerCase());
    let userId = exists?.id;

    if (!userId) {
      const created = await admin.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
        user_metadata: metadata as any,
      });
      if (created.error) return res.status(400).json({ error: created.error.message });
      userId = created.data.user?.id;
    }

    // Artık crm_users'a yazmıyoruz; bütün bilgiler user_metadata içinde

    return res.status(200).json({ ok: true, email, password, id: userId });
  } catch (e: any) {
    return res.status(500).json({ error: e.message || 'Unknown error' });
  }
}


