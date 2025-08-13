const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  'https://bcppgghvmnjbueixigxx.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjcHBnZ2h2bW5qYnVlaXhpZ3h4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NzMzOTk5NywiZXhwIjoyMDYyOTE1OTk3fQ.vAzeoI59kgGLuWxZEZXB3DuJSwKABfXhctVmtaYlAuY'
)

async function createNewBooking() {
  const newBookingId = '9hAS96tvS74hPSSax6kbeJ'
  
  console.log('Creating booking:', newBookingId)
  
  // Create booking record from URL parameters
  const bookingData = {
    cal_booking_id: newBookingId,
    event_type: 'first-session',
    product_type: 'first-session',
    user_email: 'marlana.creed@gmail.com',
    user_name: 'Marlie Creed',
    start_time: '2025-08-14T13:30:00.000Z',
    end_time: '2025-08-14T14:00:00.000Z',
    meeting_url: 'integrations:daily',
    status: 'awaiting_payment'
  }
  
  const { data: created, error: createError } = await supabase
    .from('pending_bookings')
    .insert([bookingData])
    .select()
  
  if (createError) {
    console.error('Failed to create booking:', createError)
  } else {
    console.log('Booking created successfully!')
    console.log('Payment URL: http://localhost:3002/booking/pay?id=' + newBookingId)
  }
}

createNewBooking()