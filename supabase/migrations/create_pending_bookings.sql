-- Create pending_bookings table to track Cal.com bookings awaiting payment
CREATE TABLE IF NOT EXISTS public.pending_bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  cal_booking_id TEXT UNIQUE NOT NULL,
  event_type TEXT NOT NULL,
  product_type TEXT NOT NULL,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  user_email TEXT NOT NULL,
  user_name TEXT,
  start_time TIMESTAMPTZ NOT NULL,
  end_time TIMESTAMPTZ NOT NULL,
  meeting_url TEXT,
  status TEXT DEFAULT 'awaiting_payment' CHECK (status IN ('awaiting_payment', 'paid', 'cancelled', 'expired')),
  stripe_session_id TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX idx_pending_bookings_cal_booking_id ON public.pending_bookings(cal_booking_id);
CREATE INDEX idx_pending_bookings_user_email ON public.pending_bookings(user_email);
CREATE INDEX idx_pending_bookings_status ON public.pending_bookings(status);

-- Enable RLS
ALTER TABLE public.pending_bookings ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own pending bookings" ON public.pending_bookings
  FOR SELECT USING (auth.email() = user_email OR auth.uid() = user_id);

CREATE POLICY "Service role can manage all pending bookings" ON public.pending_bookings
  FOR ALL USING (auth.jwt()->>'role' = 'service_role');