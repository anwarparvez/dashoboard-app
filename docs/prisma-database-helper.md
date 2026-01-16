# Prisma Database Helper Guide

This document explains how Prisma is used in this project, including:
- Database configuration
- Prisma Client setup
- Seeding
- Migrations
- Common commands
- Best practices & warnings

This guide is written for **Prisma v7**, **PostgreSQL**, and **Next.js App Router**.

---

## 1. Prisma Overview

- **ORM**: Prisma
- **Version**: 7.x
- **Database**: PostgreSQL (Neon compatible)
- **Framework**: Next.js (App Router)
- **Auth**: NextAuth
- **Seed Tool**: `tsx`

---

## 2. Environment Variables

Create a `.env` file in the project root:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST/DATABASE?sslmode=verify-full"
NEXTAUTH_SECRET="your-secret"
NEXTAUTH_URL="http://localhost:3000"
NODE_ENV="development"
```

---

## 3. Prisma Schema

```prisma
datasource db {
  provider = "postgresql"
}

generator client {
  provider = "prisma-client-js"
}
```

---

## 4. Prisma Client Helper

```ts
import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ??
  new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}
```

---

## 5. Seeding

Run:

```bash
npm run seed
```

Rules:
- Never instantiate PrismaClient inside seed
- Always import from `lib/prisma`

---

## 6. Migrations

Create migration:
```bash
npx prisma migrate dev --name init_schema
```

Deploy:
```bash
npx prisma migrate deploy
```

Reset (dangerous):
```bash
npx prisma migrate reset
```

---

## 7. Common Mistakes

- Mixing adapter mode and migrate mode
- Using Prisma in client components
- Seeding production database

---

## 8. Status

- Prisma configured
- Seeding works
- Auth compatible
