import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const url = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const apiBase = process.env.VITE_API_BASE;
    
    return res.status(200).json({
      message: 'API Test Successful',
      env_check: {
        has_supabase_url: !!url,
        has_service_key: !!serviceKey,
        api_base: apiBase,
        url_first_chars: url ? url.substring(0, 10) : 'NOT_SET',
        key_first_chars: serviceKey ? serviceKey.substring(0, 10) : 'NOT_SET'
      },
      timestamp: new Date().toISOString()
    });
  } catch (error: any) {
    return res.status(500).json({ 
      error: error.message || 'Unknown error',
      timestamp: new Date().toISOString() 
    });
  }
}
