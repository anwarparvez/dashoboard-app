# Authentication: Login & Logout Guide

This document describes how **Login** and **Logout** work in the application using **NextAuth**, **Prisma**, and **Next.js App Router**.

---

## 1. Authentication Overview

- **Auth Library**: NextAuth (v4)
- **Strategy**: JWT
- **Provider**: Credentials (email + password)
- **Database**: PostgreSQL (via Prisma)
- **Password Hashing**: bcryptjs
- **Session Storage**: Secure HTTP-only cookies

---

## 2. Login Flow (Step-by-Step)

```text
User enters email & password
↓
Login form submits credentials
↓
NextAuth Credentials Provider
↓
Prisma validates user from database
↓
Password hash comparison (bcryptjs)
↓
JWT session created
↓
Session stored in cookie
↓
User redirected to Dashboard
```

---

## 3. Login Implementation

### Client-side Login

```tsx
"use client";

import { signIn } from "next-auth/react";

await signIn("credentials", {
  email,
  password,
  redirect: true,
  callbackUrl: "/dashboard",
});
```

---

## 4. Session Handling

- Session strategy: **JWT**
- Session data includes:
  - `user.id`
  - `user.email`
  - `user.role`

Access session via:
- `getServerSession()` (server components)
- `useSession()` (client components)

---

## 5. Logout Flow

```text
User clicks Logout
↓
NextAuth clears session cookie
↓
JWT invalidated
↓
User redirected to /login
```

---

## 6. Logout Implementation

```tsx
"use client";

import { signOut } from "next-auth/react";

signOut({
  callbackUrl: "/login",
});
```

---

## 7. Route Protection

### Middleware

```ts
import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ token }) => !!token,
  },
});

export const config = {
  matcher: ["/dashboard/:path*", "/api/dashboard/:path*"],
};
```

---

## 8. Security Best Practices

- Always hash passwords
- Use HTTPS in production
- Protect dashboard routes
- Use strong secrets

---

## 9. Summary

| Feature | Status |
|------|------|
| Login | Implemented |
| Logout | Implemented |
| JWT Session | Enabled |
| RBAC | Supported |
| Middleware | Enabled |

---
