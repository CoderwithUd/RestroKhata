# RestroKhata Landing Page

> Next.js 14 · TypeScript · Tailwind CSS · App Router · SEO Optimized

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Copy your icons into public/icons/
cp -r /your/icon/folder/* public/icons/

# Start development server
npm run dev
# → http://localhost:3000

# Build for production
npm run build
npm start
```

## 📁 Project Structure

```
restrokhata/
├── public/
│   ├── icons/          ← Paste ALL icons from RestroKhata-RK-Complete-Icons.zip here
│   │   ├── favicon.ico
│   │   ├── favicon-16x16.png
│   │   ├── favicon-32x32.png
│   │   ├── apple-touch-icon-*.png
│   │   ├── icon-circle-192x192.png   ← Used in Navbar + Footer
│   │   ├── og-image-1200x630.png     ← Used for social sharing
│   │   └── ... (all other icons)
│   └── manifest.json   ← Copy from your zip
│
├── src/app/
│   ├── layout.tsx      ← SEO metadata, fonts
│   ├── page.tsx        ← Full landing page
│   └── globals.css     ← Theme, animations, design system
│
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## 🎨 Theme & Colors

| Variable         | Value     | Usage                  |
|------------------|-----------|------------------------|
| `--orange`       | `#FF6B00` | Primary brand color    |
| `--orange-light` | `#FF8C2F` | Hover states           |
| `--yellow`       | `#FFD700` | Accents, highlights    |
| `--dark`         | `#0A0A0A` | Page background        |
| `--dark-2`       | `#111111` | Section backgrounds    |

## 📦 Icon Setup

1. Extract `RestroKhata-RK-Complete-Icons.zip`
2. Copy **all files** to `public/icons/`
3. Copy `manifest.json` from zip to `public/manifest.json`

## 🔧 Customization

### Update Contact Info
In `src/app/page.tsx`, search and replace:
- `9131695767` → your WhatsApp number
- `udaydeangan17012000@gmail.com` → your email

### Add Your Domain
In `src/app/layout.tsx`, update:
```ts
url: "https://restrokhata.com",  // ← your actual domain
```

### Update OG Image
Replace `public/icons/og-image-1200x630.png` with your custom social share image.

## ✅ SEO Checklist

- [x] Title & meta description
- [x] Open Graph tags (Facebook, LinkedIn)
- [x] Twitter Card tags
- [x] Canonical URL
- [x] Keywords meta
- [x] Favicon (all sizes)
- [x] Apple Touch Icons
- [x] PWA manifest
- [x] Theme color
- [x] Semantic HTML (h1, h2, section, nav, footer)
- [x] Alt text on images
- [x] next/font for zero layout shift
- [x] next/image for optimized images
- [x] Compressed output

## 📱 Sections

1. **Navbar** — Fixed, blur backdrop, mobile responsive
2. **Hero** — Floating 3D cards, animated headline, CTA buttons
3. **Stats Bar** — 4 key social proof numbers
4. **Features** — 9-feature grid with icons
5. **Role Showcase** — Waiter / Kitchen / Manager roles
6. **How It Works** — 4-step timeline
7. **Pricing** — 3 plans (Free · ₹799 · ₹999)
8. **Testimonials** — 3 customer reviews
9. **Careers** — 3 open positions
10. **Contact** — WhatsApp + Email cards
11. **CTA Banner** — Final conversion section
12. **Footer** — Links, contact, legal

## 🚢 Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
# Follow prompts → live in 60 seconds
```
