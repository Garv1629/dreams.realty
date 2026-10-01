# Dreams Realty Redesign

Premium, modern 3D real-estate website for Dreams Realty, Bangalore.
Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, and React Three Fiber.

## Tech Stack
- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Experiences**: React Three Fiber / Three.js

## Local Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Variables**
   Copy `.env.example` to `.env.local` and fill in the required keys.
   ```bash
   cp .env.example .env.local
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure
- `src/app/`: Next.js App Router pages and layouts.
- `src/components/`: Reusable React components (UI, Navigation, Footer, 3D Hero, etc.).
- `src/data/`: Mock data or data-fetching utilities (e.g., `properties.ts`).

## Content Updates & Data Sources
- **Properties**: Currently mocked in `src/data/properties.ts`. Replace this with API calls to your actual backend (`backend.dreamsrealty.co.in`).
- **Contact Forms**: Enquiry forms are currently using `onSubmit={(e) => e.preventDefault()}`. Connect these to your CRM webhook or API endpoint.
- **Blogs**: The `src/app/blog/page.tsx` uses an empty array. Fetch articles from your CMS.

## Deployment Steps (Vercel)

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Import the project in [Vercel](https://vercel.com/new).
3. Vercel will automatically detect Next.js.
4. Add the required Environment Variables in the Vercel dashboard.
5. Click **Deploy**.

## Performance & SEO Notes
- `next/font/google` is used to locally host fonts, preventing layout shifts.
- Images are optimized via `next/image`.
- Sitemap (`sitemap.xml`) and `robots.txt` are automatically generated using Next.js Metadata routes (`src/app/sitemap.ts` and `src/app/robots.ts`).
- Semantic HTML and ARIA labels are utilized for WCAG 2.2 AA compliance where applicable.
