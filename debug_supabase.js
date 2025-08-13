const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  'https://bcppgghvmnjbueixigxx.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjcHBnZ2h2bW5qYnVlaXhpZ3h4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NzMzOTk5NywiZXhwIjoyMDYyOTE1OTk3fQ.vAzeoI59kgGLuWxZEZXB3DuJSwKABfXhctVmtaYlAuY'
)

async function checkDatabase() {
  console.log('Checking Supabase database...')
  
  // Check if pending_bookings table exists and has any records
  try {
    const { data, error } = await supabase
      .from('pending_bookings')
      .select('*')
    
    if (error) {
      console.error('Error querying pending_bookings:', error)
      
      // Try to create the table
      console.log('Attempting to create pending_bookings table...')
      const { error: createError } = await supabase.rpc('exec', {
        sql: `
          CREATE TABLE IF NOT EXISTS public.pending_bookings (
            id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
            cal_booking_id TEXT UNIQUE NOT NULL,
            event_type TEXT NOT NULL,
            product_type TEXT NOT NULL,
            user_id UUID,
            user_email TEXT NOT NULL,
            user_name TEXT,
            start_time TIMESTAMPTZ NOT NULL,
            end_time TIMESTAMPTZ NOT NULL,
            meeting_url TEXT,
            status TEXT DEFAULT 'awaiting_payment',
            stripe_session_id TEXT,
            created_at TIMESTAMPTZ DEFAULT NOW(),
            updated_at TIMESTAMPTZ DEFAULT NOW()
          );
        `
      })
      
      if (createError) {
        console.error('Failed to create table:', createError)
      } else {
        console.log('Table created successfully!')
      }
    } else {
      console.log('pending_bookings table exists!')
      console.log('Records found:', data.length)
      if (data.length > 0) {
        console.log('Sample records:')
        data.forEach((record, i) => {
          console.log(`${i + 1}. ${record.cal_booking_id} - ${record.event_type} - ${record.status}`)
        })
      }
    }
  } catch (err) {
    console.error('Database check failed:', err)
  }
}

checkDatabase()