const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  'https://bcppgghvmnjbueixigxx.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjcHBnZ2h2bW5qYnVlaXhpZ3h4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NzMzOTk5NywiZXhwIjoyMDYyOTE1OTk3fQ.vAzeoI59kgGLuWxZEZXB3DuJSwKABfXhctVmtaYlAuY'
)

async function checkRealBooking() {
  const realBookingId = 'hnHZRkwmE61q4gV3gyUFzo'
  
  console.log('Checking for booking:', realBookingId)
  
  // Check if this booking exists
  const { data: existing, error } = await supabase
    .from('pending_bookings')
    .select('*')
    .eq('cal_booking_id', realBookingId)
  
  if (error) {
    console.error('Error checking booking:', error)
    return
  }
  
  if (existing.length > 0) {
    console.log('Booking found:', existing[0])
  } else {
    console.log('Booking not found, creating from URL parameters...')
    
    // Create booking record from URL parameters
    const bookingData = {
      cal_booking_id: realBookingId,
      event_type: 'first-session',
      product_type: 'first-session',
      user_email: 'marlana.creed@gmail.com',
      user_name: 'Marlie Creed',
      start_time: '2025-08-14T12:30:00.000Z',
      end_time: '2025-08-14T13:00:00.000Z',
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
      console.log('Payment URL: http://localhost:3002/booking/pay?id=' + realBookingId)
    }
  }
}

checkRealBooking()