import 'dotenv/config'
import { createClient } from '@supabase/supabase-js'

const url = process.env.VITE_SUPABASE_URL
const anonKey = process.env.VITE_SUPABASE_ANON_KEY

const supabase = createClient(url, anonKey)

// Tablo yapısını kontrol et
console.log('Tablo yapısını kontrol ediyoruz...')

try {
  // Boş bir test sorgusu çalıştır
  const { data, error } = await supabase
    .from('crm_records')
    .select('*')
    .limit(1)
  
  if (error) {
    console.error('Hata:', error.message)
    console.error('Detay:', error.details)
    console.error('Hint:', error.hint)
  } else {
    console.log('Tablo erişilebilir:', data !== null)
    console.log('Örnek veri yapısı:', data)
  }
} catch (err) {
  console.error('Beklenmeyen hata:', err)
}
