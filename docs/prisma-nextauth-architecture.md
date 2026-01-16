# Prisma + NextAuth Architecture Diagrams

This document contains architecture diagrams explaining how Prisma and NextAuth work together in this project.

---

## 1. High-Level Authentication Flow

```mermaid
flowchart LR
  U[User Browser]
  L[Login Page]
  NA[NextAuth]
  C[Credentials Provider]
  P[Prisma Client]
  DB[(PostgreSQL)]

  U --> L
  L -->|email + password| NA
  NA --> C
  C -->|verify user| P
  P --> DB
  DB --> P
  P --> C
  C -->|valid / invalid| NA
  NA -->|JWT Session Cookie| U
```

---

## 2. Server Component + Prisma Data Flow

```mermaid
sequenceDiagram
  participant Page as Dashboard Page (Server Component)
  participant Auth as getServerSession()
  participant Prisma as Prisma Client
  participant DB as PostgreSQL

  Page->>Auth: Read session from cookies
  Auth-->>Page: Session (user + role)

  alt Not Authenticated
    Page-->>Page: redirect(/login)
  else Authenticated
    Page->>Prisma: Query dashboard data
    Prisma->>DB: SQL queries
    DB-->>Prisma: Results
    Prisma-->>Page: Aggregated data
  end
```

---

## 3. Role-Based Access Control (RBAC)

```mermaid
flowchart TD
  S[Session Loaded]
  R{User Role?}

  A[ADMIN]
  M[MANAGER]
  O[OPERATOR]
  V[VIEWER]

  D[Dashboard Access]
  L[Limited View]
  X[Access Denied]

  S --> R
  R -->|ADMIN| D
  R -->|MANAGER| D
  R -->|OPERATOR| L
  R -->|VIEWER| X
```

---

## 4. Prisma Dashboard Data Sources

```mermaid
flowchart LR
  Page[Dashboard Page]
  Prisma[Prisma Client]

  U[(User)]
  C[(Customer)]
  B[(Bill)]
  BW[(Bandwidth)]
  V[(VPN Client)]

  Page --> Prisma
  Prisma --> U
  Prisma --> C
  Prisma --> B
  Prisma --> BW
  Prisma --> V
```

---

## 5. Seed → Login → Session Lifecycle

```mermaid
sequenceDiagram
  participant Seed as Seed Script
  participant DB as PostgreSQL
  participant Login as Login Page
  participant Auth as NextAuth

  Seed->>DB: Insert users (hashed passwords)
  Login->>Auth: email + password
  Auth->>DB: Validate credentials
  DB-->>Auth: User record
  Auth-->>Login: Session cookie
```

---

## Notes

- Diagrams are written in Mermaid
- GitHub and GitLab render them automatically
- Use in README or docs folder
