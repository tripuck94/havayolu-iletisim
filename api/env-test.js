export default function handler(req, res) {
  try {
    const envVars = {
      VITE_SUPABASE_URL: process.env.VITE_SUPABASE_URL || 'NOT_SET',
      SUPABASE_URL: process.env.SUPABASE_URL || 'NOT_SET', 
      SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY ? 'SET' : 'NOT_SET',
      VITE_SUPABASE_ANON_KEY: process.env.VITE_SUPABASE_ANON_KEY ? 'SET' : 'NOT_SET',
      VITE_API_BASE: process.env.VITE_API_BASE || 'NOT_SET'
    };
    
    return res.status(200).json({
      message: 'Environment Test Successful',
      environment_variables: envVars,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message || 'Unknown error',
      timestamp: new Date().toISOString()
    });
  }
}
