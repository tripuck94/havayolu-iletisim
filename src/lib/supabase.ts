import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xjrhfxwjisjkkknofcjl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqcmhmeHdqaXNqa2trbm9mY2psIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxODY3MzAsImV4cCI6MjA0OTc2MjczMH0.cLnWzna5-x5lVG7sKCI3SrzmhkWl6DHe3eb9kGxkokI';

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL ve API Key environment variables eksik. Lütfen .env dosyasını kontrol edin.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function getServiceContent(serviceName: string) {
  try {
    const { data, error } = await supabase
      .from('servis_icerik')
      .select('*')
      .eq('service_name', serviceName)
      .single();

    if (error) {
      console.error('Error fetching service content:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error in getServiceContent:', error);
    throw error;
  }
}