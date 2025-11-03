//import { createClient } from '@supabase/supabase-js'

const supabaseClient = supabase.createClient('https://qswexfdefjxkpcrxcyos.supabase.co', 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzd2V4ZmRlZmp4a3BjcnhjeW9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEyNzc3MzYsImV4cCI6MjA3Njg1MzczNn0.SYBCzJ8no3C-nCP5tCqbMdDl05C_OdHe6ARXmcT574M')

console.log(supabaseClient)