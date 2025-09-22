import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

// Development için varsayılan değerler (gerçek projede bu değerleri .env dosyasında tanımlayın)
const defaultUrl = 'https://your-project.supabase.co';
const defaultKey = 'your-anon-key-here';

const finalUrl = supabaseUrl || defaultUrl;
const finalKey = supabaseAnonKey || defaultKey;

export const supabase = createClient(finalUrl, finalKey);

export async function getServiceContent(serviceName: string) {
  try {
    let { data, error } = await supabase
      .from('service_contents')
      .select('*')
      .eq('service_name', serviceName)
      .single();

    if (error) {
      console.error('Error fetching service content:', error);
      throw error;
    }

    if (!data) {
      throw new Error('No content found for service: ' + serviceName);
    }

    return data;
  } catch (error) {
    console.error('Error in getServiceContent:', error);
    throw error;
  }
}
