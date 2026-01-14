# 📊 Dashboard App – Initial Setup Guide

This document describes the **initial setup** for the Dashboard Application using modern, production-ready tools.

---

## 🚀 Tech Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind CSS v4
- shadcn/ui
- Sonner (Toast notifications)
- Dark / Light Mode
- PostgreSQL
- Prisma ORM
- Zod (validation)
- Docker (later stage)

---

## 📁 Project Structure

dashboard-app/
├─ app/
│  ├─ layout.tsx
│  ├─ globals.css
│  └─ dashboard/
│     ├─ layout.tsx
│     └─ page.tsx
├─ components/
│  ├─ layout/
│  │  ├─ sidebar.tsx
│  │  ├─ header.tsx
│  │  └─ footer.tsx
│  ├─ ui/
│  │  └─ sonner.tsx
│  ├─ mode-toggle.tsx
│  └─ theme-provider.tsx
├─ lib/
│  └─ utils.ts
├─ prisma/
│  └─ schema.prisma
├─ tailwind.config.ts
├─ postcss.config.js
├─ package.json
└─ .env

---

## 🧩 Step 1: Create Next.js App

npx create-next-app@latest dashboard-app
cd dashboard-app
npm run dev

---

## 🎨 Step 2: Install Tailwind CSS v4

npm install -D tailwindcss@latest postcss autoprefixer

---

## 🎨 Step 3: Global Styles (globals.css)

Uses Tailwind v4 CSS-first configuration with theme tokens.

---

## 🧱 Step 4: Install shadcn/ui

npx shadcn@latest init
npx shadcn@latest add button card dropdown-menu

---

## 🔔 Step 5: Toast Notifications (Sonner)

npm install sonner

---

## 🌗 Step 6: Dark / Light Mode

npm install next-themes

---

## 🧭 Step 7: Dashboard Layout

Sidebar + Header + Footer layout using App Router.

---

## 🗄️ Step 8: Prisma Setup

npm install prisma @prisma/client
npx prisma init
npx prisma migrate dev --name init

---

## 🔐 Environment Variables

DATABASE_URL=postgresql://user:password@localhost:5432/dashboard

---

## ✅ Final Checklist

- Tailwind v4 working
- shadcn/ui installed
- Sonner toast active
- Dark / Light mode enabled
- Sidebar + Header + Footer layout
- Prisma connected

---

## 🔜 Next Steps

- RBAC with NextAuth
- Dashboard charts
- Prisma seed data
- Docker & deployment
