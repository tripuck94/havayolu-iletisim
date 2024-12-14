import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xjrhfxwjisjkkknofcjl.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL ve API Key environment variables eksik. Lütfen .env dosyasını kontrol edin.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function getServiceContent(serviceName: string) {
  const { data, error } = await supabase
    .from('service_contents')
    .select('*')
    .eq('service_name', serviceName)
    .single();

  if (error) {
    console.error('Error fetching service content:', error);
    return null;
  }

  return data;
}