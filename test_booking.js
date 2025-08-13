const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  'https://bcppgghvmnjbueixigxx.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjcHBnZ2h2bW5qYnVlaXhpZ3h4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NzMzOTk5NywiZXhwIjoyMDYyOTE1OTk3fQ.vAzeoI59kgGLuWxZEZXB3DuJSwKABfXhctVmtaYlAuY'
)

async function createTestBooking() {
  console.log('Creating test booking record...')
  
  const testBooking = {
    cal_booking_id: 'TEST_BOOKING_123',
    event_type: 'first-session',
    product_type: 'first-session',
    user_email: 'test@example.com',
    user_name: 'Test User',
    start_time: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // Tomorrow
    end_time: new Date(Date.now() + 24 * 60 * 60 * 1000 + 30 * 60 * 1000).toISOString(), // 30 min later
    meeting_url: 'https://cal.com/meeting/test-123',
    status: 'awaiting_payment'
  }
  
  const { data, error } = await supabase
    .from('pending_bookings')
    .insert([testBooking])
    .select()
  
  if (error) {
    console.error('Failed to create test booking:', error)
  } else {
    console.log('Test booking created successfully!')
    console.log('Test payment URL: http://localhost:3002/booking/pay?id=TEST_BOOKING_123')
  }
}

createTestBooking()