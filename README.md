# Navigating the Storm Website

A Next.js website for Navigating the Storm, an ADHD accountability and productivity coaching service with Marlie.

## Features

- Modern, responsive design
- User authentication with Supabase
- Members-only area
- Contact form
- Service information
- About page

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Supabase (Authentication & Database)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory with your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `/src/app` - Next.js app router pages
- `/src/components` - Reusable React components
- `/src/lib` - Utility functions and configurations
- `/public` - Static assets

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

The site can be deployed to any platform that supports Next.js applications, such as Vercel or Netlify.

## License

All rights reserved. 