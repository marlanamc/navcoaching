// Product definitions matching your pricing - client-safe
export const PRODUCTS = {
  'first-session': {
    name: 'First Session',
    description: 'Introductory session for new clients with personalized Notion dashboard setup',
    price: 2500, // $25.00 in cents
    sessions: 1,
    features: [
      '30-minute coaching session',
      'Goal assessment & planning',
      'Personal Notion dashboard setup',
      'Discord community access (1 month)'
    ]
  },
  'drop-in': {
    name: 'Drop-in Session',
    description: 'Single coaching session for existing clients with specific challenges',
    price: 6000, // $60.00 in cents
    sessions: 1,
    features: [
      '30-minute coaching session',
      'Focused problem-solving',
      'Dashboard optimization',
      'Ongoing support'
    ]
  },
  '4-session': {
    name: '4-Session Pack',
    description: '4 coaching sessions with text support and priority scheduling',
    price: 18000, // $180.00 in cents  
    sessions: 4,
    expiresInWeeks: 8,
    features: [
      '4 × 30-minute coaching sessions',
      'Personal Notion dashboard',
      'Text check-ins between sessions', 
      'Discord community access (3 months)',
      'Priority scheduling'
    ]
  },
  '8-session': {
    name: '8-Session Bundle', 
    description: '8 coaching sessions with extended support and priority access',
    price: 32000, // $320.00 in cents
    sessions: 8,
    expiresInWeeks: 16,
    features: [
      '8 × 30-minute coaching sessions',
      'Personal Notion dashboard',
      'Text check-ins between sessions',
      'Discord community access (5 months)', 
      'Priority scheduling'
    ]
  }
} as const;

export type ProductType = keyof typeof PRODUCTS;