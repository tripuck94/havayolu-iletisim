// Test kullanıcı oluşturma scripti
// Kullanım: node scripts/create-test-user.mjs email@example.com Parola123!
import 'dotenv/config'
import { createClient } from '@supabase/supabase-js'

const [,, email, password] = process.argv
if (!email || !password) {
  console.error('Kullanım: node scripts/create-test-user.mjs <email> <password>')
  process.exit(1)
}

const url = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL || 'https://ozapgxdjeslvqgxmuftq.supabase.co'
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
if (!serviceKey) {
  console.error('SUPABASE_SERVICE_ROLE_KEY .env dosyanızda tanımlı olmalı')
  process.exit(1)
}

const supabase = createClient(url, serviceKey)

const { data, error } = await supabase.auth.admin.createUser({
  email,
  password,
  email_confirm: true,
})

if (error) {
  console.error('Hata:', error.message)
  process.exit(1)
}

console.log('Kullanıcı oluşturuldu:', data.user?.id)


