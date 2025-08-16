# 🚀 Stripe & Cal.com Setup Checklist

## ✅ Completed Today
- [x] Harbor Access Stripe payment link working
- [x] All success pages secured with token protection
- [x] FAQ updated with proration info
- [x] Mobile schedule layout fixed on membership page

## 📋 Tomorrow's Tasks

### 1. Create Remaining Stripe Payment Links

#### Crew Essentials ($85/month)
- **Founding price**: $65 first month
- **Product name**: `Crew Essentials Membership`
- **Description**: `Community membership plus 1 monthly 1-on-1 coaching call, text nudges, and personal dashboard`
- **Success URL**: `http://localhost:3000/success/crew` (test) / `https://yourdomain.com/success/crew` (live)

#### First Mate ($125/month) 
- **Founding price**: $105 first month
- **Product name**: `First Mate Membership`
- **Description**: `Enhanced membership with 2 monthly 1-on-1 coaching calls, priority support, and increased text nudges`
- **Success URL**: `http://localhost:3000/success/first-mate` (test) / `https://yourdomain.com/success/first-mate` (live)

#### Captain's Concierge ($185/month)
- **Founding price**: $165 first month
- **Product name**: `Captain's Concierge Membership`
- **Description**: `Premium membership with 4 monthly 1-on-1 calls, unlimited text support, and custom dashboard`
- **Success URL**: `http://localhost:3000/success/concierge` (test) / `https://yourdomain.com/success/concierge` (live)

**Update these in code:**
```javascript
// In /src/app/membership/page.tsx, replace placeholder URLs:
stripeUrl: 'https://buy.stripe.com/your-crew-essentials-link',
stripeUrl: 'https://buy.stripe.com/your-first-mate-link', 
stripeUrl: 'https://buy.stripe.com/your-concierge-link',
```

### 2. Set Up Cal.com Event Types

#### Create These Event Types:
1. **Crew Essentials Onboarding**
   - Duration: 30 minutes
   - Booking limit: 1 per month
   - URL: `https://cal.com/navcoaching/crew-essentials`

2. **First Mate Coaching Call**
   - Duration: 30 minutes  
   - Booking limit: 2 per month
   - URL: `https://cal.com/navcoaching/first-mate`

3. **Concierge VIP Call**
   - Duration: 30 minutes
   - Booking limit: 4 per month
   - URL: `https://cal.com/navcoaching/concierge`

#### Cal.com Settings for Each:
- ✅ Require confirmation
- ✅ Collect email address
- ✅ Send calendar invites
- ✅ Add buffer time (15 min before/after)
- ✅ Set availability hours
- ✅ Add intake questions:
  - "What's your biggest challenge right now?"
  - "What would success look like for you this month?"

### 3. Test Complete Payment Flow

**For each tier:**
1. Click tier button on membership page → generates access token
2. Complete Stripe test payment → redirects to success page with valid params
3. Success page shows → Discord invite + Cal.com booking info
4. Try direct URL access → should be blocked and redirect to membership

### 4. Future Email Automation (Phase 2)

**When ready:**
- Set up Stripe webhooks
- Create email templates with Discord invite + Cal.com links
- Test automated onboarding flow

## 📝 Notes
- All success pages are now protected with time-limited tokens ✅
- Harbor Access working perfectly ✅  
- Mobile schedule layout improved ✅
- FAQ includes proration billing info ✅

## 🔗 Important Links
- **Test Harbor Access**: https://buy.stripe.com/test_00waEW1T7cPj2Jkcap1ck00
- **Local dev server**: `npm run dev` → http://localhost:3000
- **Membership page**: http://localhost:3000/membership

---

*Good luck tomorrow! The foundation is solid - just need to add the remaining payment links and Cal.com setup.* 🌟