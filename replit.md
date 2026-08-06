# Ignite Academy Website

A multi-page marketing/info website for **Ignite Academy** (Junior College & School), built with React + Vite + Tailwind CSS v4 + GSAP.

## Stack
- **Frontend:** React 19, Vite 8, Tailwind CSS v4, React Router v7, GSAP 3, Lucide React
- **Backend:** None (pure frontend SPA)

## Pages
- Home, About Us, Streams (Junior College, School, Test Prep), Gallery, Results, Contact Us

## How to run
```bash
cd frontend && npm run dev
```
Runs on port 5000. The workflow `Start application` handles this automatically.

## Project structure
```
frontend/
  src/
    pages/        # Top-level page components
    components/   # Shared + page-specific components
    router/       # Custom BrowserRouter wrapper
  public/         # Static assets (card art, favicons)
```

## Brand & Design System
- **Brand colors:** Orange (ember/`orange-500`) · Blue (`blue-500`) · Green (`green-700`) · Red (`red-500`) · Black · White
- **Logo:** `public/logo-light.png` (light mode) · `public/logo-dark.png` (dark mode)
- **Nav active state:** `bg-orange-500` (replaces previous violet)
- **Section backgrounds:** Alternate between white, `orange-50`, `blue-50`, `green-50`, `red-50` per page to distinguish sections
- **Contact form:** Two-column layout — left: contact info panel + admissions CTA; right: form fields

## User preferences
