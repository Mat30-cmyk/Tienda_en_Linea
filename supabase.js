const SUPABASE_URL = 'https://oopkfylyojtyhvjxpicl.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vcGtmeWx5b2p0eWh2anhwaWNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgyMjAyMjgsImV4cCI6MjA3Mzc5NjIyOH0.zpxwNszonPuzBEjdSV8X9PRq_OkxVWT9VF3ZOS5wpUo';

// Usar el global provisto por el bundle UMD cargado en el HTML (window.supabase)
// Si prefieres ESM desde CDN, podría cambiarse a una importación ESM. Aquí optamos por la forma UMD
const supabase = (typeof window !== 'undefined' && window.supabase)
	? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
	: null;

console.log('Conexion a supabase:', supabase);

export {supabase};