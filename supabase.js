const SUPABASE_URL = 'https://iytzsilqbbgoqokjsmal.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5dHpzaWxxYmJnb3Fva2pzbWFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk0MjgzMjgsImV4cCI6MjA3NTAwNDMyOH0.0kKGiyJFyBwzDpwTC45CDezDzCOW5m5a7wdKNKGRNJI';

// Usar el global provisto por el bundle UMD cargado en el HTML (window.supabase)
// Si prefieres ESM desde CDN, podría cambiarse a una importación ESM. Aquí optamos por la forma UMD
const supabase = (typeof window !== 'undefined' && window.supabase)
	? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
	: null;

console.log('Conexion a supabase:', supabase);

export {supabase};