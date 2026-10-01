# Dreams Realty CMS Setup & Management Guide

## Architectural Decision: Sanity CMS
To provide a secure, practical, and heavily integrated content management system for Dreams Realty, we have selected **Sanity CMS**.

### Why Sanity?
1. **Next.js App Router Integration**: Sanity natively embeds its admin dashboard ("Sanity Studio") directly into Next.js via the `/studio` route. This means you do not need to host a separate admin server (unlike Strapi).
2. **High-Performance Image Pipeline**: Sanity automatically processes, resizes, and optimizes property images (WebP/AVIF) on the fly, which is critical for a high-end real estate site to maintain fast load times.
3. **Structured Content**: It treats content as data, meaning you can easily re-use "Locations" or "Developers" across hundreds of properties without duplicating data.
4. **Lead Management**: We have configured a "Leads" schema inside Sanity. While a dedicated CRM is ideal long-term, this allows the sales team to view all enquiries directly in the same dashboard securely, without exposing API keys on the frontend.
5. **Role-Based Access**: Sanity natively supports Admin and Editor roles, ensuring content editors can't break the schema.

---

## 🚀 Setup Instructions for the Owner

### 1. Initialize the Sanity Project
1. Go to [Sanity.io](https://www.sanity.io) and create an account.
2. In your terminal, run `npx sanity init` (if setting up fresh) or simply create a project in the Sanity dashboard.
3. Obtain your `Project ID` and `Dataset` (usually `production`).

### 2. Configure Environment Variables
In your deployment environment (e.g., Vercel) and your local `.env.local` file, add:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
# Keep this secret - used for API routes to submit leads
SANITY_API_WRITE_TOKEN=your_secret_write_token
```

### 3. Accessing the Admin Dashboard
Navigate to `https://www.dreamsrealty.co.in/studio` (or `http://localhost:3000/studio` locally).
You will be prompted to log in using your Sanity credentials.

---

## 📝 How to Manage Content

### Adding a New Property
1. Go to the **Properties** tab in the Studio.
2. Click the **+** icon to create a new property.
3. Fill in the mandatory fields (Title, Slug, Purpose, Type, Location).
4. **Status**: Use the "Listing Status" dropdown to mark properties as Available, Sold, or Rented.
5. **Images**: Upload high-resolution images. Drag and drop to reorder them. The first image will be the primary thumbnail.
6. Click **Publish**. The website will automatically revalidate and show the new listing.

### Managing Leads
1. Go to the **Leads & Enquiries** tab.
2. You will see a list of all incoming leads from the website forms.
3. Open a lead to view the user's details, the property they enquired about, and their contact information.
4. Update the **Lead Status** (e.g., New -> Contacted -> Closed) to keep track of your pipeline.

### Modifying Site Settings
1. Go to **Site Settings**.
2. You can update the main phone numbers, email, and social media links here. This ensures that if a phone number changes, you only update it in one place and the entire website (footer, contact page) updates automatically.

---

## 🔄 Content Migration Checklist

Before switching the live domain to this new Next.js application, ensure the following content is migrated from the old Dreams Realty site into Sanity:

- [ ] **Taxonomies**:
  - [ ] Add all existing Developers.
  - [ ] Add all existing Locations.
  - [ ] Add all Property Types (Villa, Apartment, Plot).
- [ ] **Properties**:
  - [ ] Migrate all "Properties for Sale". Ensure images are downloaded and re-uploaded to Sanity.
  - [ ] Migrate all "Properties for Rent".
  - [ ] Map the correct Developer and Location references to each property.
- [ ] **Content Pages**:
  - [ ] Migrate all active Blog Posts.
  - [ ] Ensure Site Settings (Phone, Email, Address, Socials) match the current live site exactly.
- [ ] **Testing**:
  - [ ] Submit a test lead via the Contact Us form and verify it appears in the Sanity "Leads & Enquiries" tab.
  - [ ] Test the property filters on the live site to ensure the newly migrated properties filter correctly by Location, Type, and Status.
