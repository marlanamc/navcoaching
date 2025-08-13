# Cal.com Configuration Guide

## 🎯 **Event Types Setup**

### 1. **First Session** (`first-session`)
- **Price**: $25
- **Duration**: 30 minutes  
- **Slot Interval**: 15 minutes (shows 9:00, 9:15, 9:30, 9:45...)
- **Restriction**: Add booking question "Is this your first session with Marlie?"
  - Options: "Yes - First time" / "No - Existing client"  
  - Reject bookings if "No" is selected
- **Description**: "New clients only - Introductory session with dashboard setup"

### 2. **Drop-In Session** (`drop-in-session`)  
- **Price**: $60
- **Duration**: 30 minutes
- **Slot Interval**: 15 minutes
- **For**: Existing clients only
- **Description**: "For existing clients - Single coaching session"

### 3. **4-Session Pack** (`4-session-pack`)
- **Price**: $180 
- **Duration**: 30 minutes
- **Slot Interval**: 15 minutes
- **Note**: This books the FIRST session of their 4-pack

### 4. **8-Session Bundle** (`8-session-pack`)
- **Price**: $320
- **Duration**: 30 minutes  
- **Slot Interval**: 15 minutes
- **Note**: This books the FIRST session of their 8-bundle

## 🔄 **Redirect URLs**

All events should redirect to payment page after booking:
```
http://localhost:3002/booking/pay?id={BOOKING_ID}
```

## 🚫 **Preventing First Session Double Bookings**

**Option 1: Booking Question (Recommended)**
1. Go to Event Types → First Session → Questions
2. Add required question: "Is this your first session with Marlie?"
3. Add conditional logic to reject if "No"

**Option 2: Clear Description**
Add to First Session description:
"⚠️ NEW CLIENTS ONLY - If you've had a session before, please book a Drop-In Session instead"

## ⏰ **15-Minute Time Slots**

For ALL event types:
1. Go to Event Type → When tab
2. Change "Slot Interval" from 30 min → **15 minutes**
3. This gives options: 9:00, 9:15, 9:30, 9:45, 10:00, etc.

## 📧 **Webhook Setup**

All events should have webhook pointing to:
```
https://your-domain.com/api/cal/webhook
```

## 🎯 **Current Link Structure**

- **New clients**: `https://cal.com/navcoaching/first-session` 
- **Existing clients (dashboard)**: `https://cal.com/navcoaching/drop-in-session`
- **4-pack buyers**: `https://cal.com/navcoaching/4-session-pack`
- **8-bundle buyers**: `https://cal.com/navcoaching/8-session-pack`