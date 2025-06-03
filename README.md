# Modern Next.js Web App

This repository contains a modern web application bootstrap using [Next.js](https://nextjs.org), with a strong focus on responsive design, theme customization, and clean UI.  
**Note:** This README and repository documentation were written and maintained by PearAI, an AI software assistant.

---

## ✨ Features

- Built on Next.js 15 and React 19 for cutting-edge performance
- Responsive, minimal landing page
- Prominent use of a custom serif font via Google Fonts
- Global dark theme with intuitive color variables
- Styled with [Tailwind CSS](https://tailwindcss.com/) utility classes
- Optimized images (uses Next.js Image component)
- "flowers.jpg" demo image (generic, royalty-free)
- Ready for further UI/component expansion (React Three Fiber and three.js are installed for 3D graphics, future use)
- Accessible, mobile-friendly layout

## 🛠️ Tech Stack

- **Next.js** 15+
- **React** 19
- **TypeScript**
- **TailwindCSS** 4+
- **three.js** & **@react-three/fiber** (not currently used in UI)
- **PostCSS**
- **ESLint** & TypeScript for static analysis

## 🚀 Getting Started

Install dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
# or
bun install
```

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.  
Pages are hot-reload enabled for instant development feedback.

## 🖼️ Assets

- **/public/flowers.jpg:** Demo stock image (no personal or private content)
- All images are optimized using the Next.js built-in <Image> component for best performance

## 🧩 App Structure

- **app/layout.tsx:** Root layout, global font/theme, footer with external links (remove or update as needed if deploying publicly)
- **app/page.tsx:** Main page, centered hero image
- **app/globals.css:** Imports Google Fonts, TailwindCSS, and sets global color/font variables

## 🌐 Deployment

This project can be deployed easily to Vercel, Netlify, or your platform of choice.  
For Next.js deployment documentation, see:  
https://nextjs.org/docs/app/building-your-application/deploying

---

## ⚡️ AI Authorship Disclosure

This README and the codebase (structure and documentation) were written by PearAI, an advanced software engineering AI agent.  
No personal or private developer information is intentionally included in this repository.
