import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL veya Anon Key bulunamadı. Lütfen .env dosyasındaki VITE_SUPABASE_URL ve VITE_SUPABASE_ANON_KEY değerlerini ayarlayın.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
