# BTCL Unified Dashboard – Layout Documentation

## 1. Overview

The **BTCL Unified Dashboard** is a responsive, enterprise-grade web application designed to present operational and business data for multiple BTCL services in a single, coherent interface. The layout follows modern dashboard design principles used in **OSS/BSS, NOC, and government systems**, ensuring clarity, scalability, and usability across devices.

---

## 2. High-Level Layout Structure

The application layout is composed of **five main regions**:

1. **Header (Full Width)**
2. **Sidebar (Left Navigation)**
3. **Breadcrumb (Context Indicator)**
4. **Main Content Area**
5. **Footer**

```
┌───────────────────────────────────────────────┐
│ Header (Full Width)                           │
├───────────────────────────────────────────────┤
│ Sidebar │  Breadcrumb                         │
│         │  ────────────────────────────────  │
│         │  Main Content                       │
│         │                                    │
└───────────────────────────────────────────────┘
│ Footer                                        │
└───────────────────────────────────────────────┘
```

---

## 3. Header

### Purpose

* Global branding and identity
* Global actions and utilities
* Mobile navigation control

### Characteristics

* Full width (`w-full`)
* Sticky at the top
* Height: `64px (h-16)`

### Contents

* **BTCL Logo (Green Brand)**
* Application Name: *BTCL Unified Dashboard*
* Theme Toggle (Light / Dark / System)
* Logout Button
* Mobile Sidebar Toggle (Hamburger Menu)

---

## 4. Sidebar (Left Navigation)

### Purpose

* Primary navigation for all BTCL services

### Characteristics

* Fixed on desktop
* Slide-in overlay on mobile
* Positioned **below header** to avoid overlap
* Width: `256px (w-64)`

### Navigation Items (Example)

* Dashboard
* IGW
* ICX
* Domain
* PSTN + GPON
* VPN
* LLI
* Transmission
* Tower Sharing
* NIX
* Cache Data Service
* Ship Voice Service

### Design Notes

* Supports future enhancements:

  * Active route highlighting
  * Icons per service
  * Role-based visibility

---

## 5. Breadcrumb

### Purpose

* Shows current navigation context
* Improves user orientation

### Placement

* Displayed **above the main content area**
* Inside content flow (not full width)

### Behavior

* Auto-generated from URL path

* Example:

  ```
  Dashboard > IGW > Outgoing
  ```

* Scrolls with page content

---

## 6. Main Content Area

### Purpose

* Displays service-specific dashboards

### Characteristics

* Responsive padding
* Background: `bg-muted/40`
* Adjusts width automatically based on sidebar

### Content Pattern (Per Service)

Each service page generally follows:

1. KPI Cards
2. Charts (Traffic, Trend, Utilization)
3. Tables (Operator, Carrier, Customer details)

---

## 7. Footer

### Purpose

* Legal and informational reference

### Characteristics

* Fixed at bottom of page
* Minimal height

### Content

* © Year – Bangladesh Telecommunications Company Limited (BTCL)

---

## 8. Responsiveness & Mobile Behavior

* Header remains visible at all times
* Sidebar overlays content on mobile
* Breadcrumb and content adapt to smaller screens
* Text and navigation collapse gracefully

---

## 9. Theming & Branding

* Uses **OKLCH color system** for accuracy
* Primary Brand Color: **BTCL Green**
* Supports:

  * Light mode
  * Dark mode
  * System theme

All UI components derive colors from global CSS variables to maintain consistency.

---

## 10. Extensibility

The layout is designed to be:

* ✅ Config-driven
* ✅ API-integrated
* ✅ Role-aware
* ✅ Service-scalable (12+ services)

Future additions can be made without structural changes.

---

## 11. Intended Users

* BTCL Management
* Network Operations (NOC)
* OSS / BSS Teams
* Regulatory & Reporting Units

---

## 11. Component-Level Diagram

### Component Hierarchy

```
<AppRoot>
 └─ <DashboardLayout>
     ├─ <Header>
     │   ├─ <BtclIcon />
     │   ├─ <ModeToggle />
     │   └─ <LogoutButton />
     │
     ├─ <Sidebar>
     │   ├─ <SidebarLogo />
     │   ├─ <NavItem /> (Dashboard)
     │   ├─ <NavItem /> (IGW)
     │   ├─ <NavItem /> (ICX)
     │   ├─ <NavItem /> (Domain)
     │   ├─ <NavItem /> (PSTN + GPON)
     │   ├─ <NavItem /> (VPN)
     │   ├─ <NavItem /> (LLI)
     │   ├─ <NavItem /> (Transmission)
     │   ├─ <NavItem /> (Tower Sharing)
     │   └─ <NavItem /> (NIX)
     │
     ├─ <MainContent>
     │   ├─ <Breadcrumbs />
     │   └─ <ServicePage>
     │       ├─ <ServiceDashboard>
     │       │   ├─ <KpiCard /> × N
     │       │   ├─ <ChartCard /> × N
     │       │   └─ <DataTable /> × N
     │       └─ <ServiceSpecificComponents />
     │
     └─ <Footer>

```

---

### Data Flow (Simplified)

```
API (/api/dashboard/*)
        │
        ▼
<ServiceDashboard>
        │
        ├─ KPIs → <KpiCard />
        ├─ Charts → <ChartCard /> (Recharts)
        └─ Tables → <DataTable />
```

---

### Interaction Flow

* **Header**

  * Controls theme (Light/Dark/System)
  * Toggles sidebar on mobile

* **Sidebar**

  * Controls route navigation
  * Updates breadcrumb and main content

* **Breadcrumbs**

  * Reflect current route automatically

* **ServiceDashboard**

  * Fetches data from service-specific APIs
  * Renders UI via reusable components

---

## 11. Authentication Flow Explained

This section describes how authentication works in the application at a high level. The goal is to ensure secure access while minimizing unnecessary database queries.

### Step-by-Step Flow

* Users log in using **email** and **password**.
* The submitted credentials are validated against the database using **Prisma**.
* If the credentials are valid, the server generates a **JWT (JSON Web Token)**.
* The JWT contains essential user information such as:

  * User ID
  * Email
  * Role / permissions
* The JWT is **signed and encrypted** on the server.
* The encrypted JWT is stored in a **secure HTTP-only session cookie**.
* On every subsequent request, the browser automatically sends this cookie to the server.
* The server verifies the JWT and reconstructs the **user session** from it.
* The session provides quick access to user details (ID, name, email, role) without querying the database again.
* Both the **JWT and session** have an expiration time (for example, **30 days**).
* Once expired, the user must authenticate again.

### Key Benefits

* ✅ Secure, stateless authentication
* ✅ Reduced database load after login
* ✅ Role-based access control support
* ✅ Scales well for multi-service dashboards

### Notes

* Sensitive information (such as passwords) is **never stored in the JWT**.
* Passwords are always stored in the database using **secure hashing**.
* Token expiration and rotation policies can be tightened for higher-security environments.

---

## 11. Authorization & Role-Based Access Control (RBAC)

This section explains how **authorization** is enforced in the application after authentication, ensuring users can only access resources permitted by their role.

---

### 1. Core Concepts

* **Authentication** verifies *who* the user is (handled via JWT + session).
* **Authorization** determines *what* the user is allowed to do.
* **RBAC (Role-Based Access Control)** assigns permissions based on predefined roles.

---

### 2. Roles Definition

The application supports role-based access aligned with BTCL operational structure. Example roles:

* **ADMIN** – Full system access (users, services, configurations)
* **MANAGER** – View all dashboards, reports, and summaries
* **OPERATOR** – Access assigned services (IGW, ICX, etc.)
* **VIEWER** – Read-only access to dashboards

Roles are stored in the database and embedded in the JWT at login.

---

### 3. Role Storage & Propagation

* User role is stored in the database (via Prisma).
* Upon successful login:

  * Role is included in the JWT payload.
  * JWT is stored securely in an HTTP-only cookie.
* On each request:

  * JWT is verified.
  * User role is extracted and attached to the session context.

This avoids repeated database lookups.

---

### 4. Backend Authorization (API Level)

Authorization is enforced at the **API route / service layer**.

Example policy:

* `/api/dashboard/igw` → ADMIN, MANAGER, OPERATOR
* `/api/dashboard/domain` → ADMIN, MANAGER
* `/api/admin/*` → ADMIN only

Before executing business logic:

* The API checks the user role from the session.
* If the role is not permitted, the request is rejected with `403 Forbidden`.

---

### 5. Frontend Authorization (UI Level)

RBAC is also applied at the UI layer to improve user experience:

* Sidebar menu items are conditionally rendered based on role.
* Pages and components are hidden if the user lacks permission.
* Read-only users see dashboards without edit or action buttons.

This prevents accidental access attempts, though backend checks remain authoritative.

---

### 6. Route Protection & Middleware

* Protected routes use middleware to:

  * Verify authentication
  * Validate role permissions
* Unauthorized users are redirected to:

  * Login page (if unauthenticated)
  * Access denied page (if unauthorized)

Middleware ensures security is enforced **before page rendering**.

---

### 7. Permission Granularity (Optional Extension)

Beyond roles, the system can support **fine-grained permissions**, such as:

* `igw.view`
* `igw.export`
* `domain.manage`
* `vpn.configure`

These permissions can be mapped to roles for flexible policy management.

---

### 8. Security Best Practices

* Never trust frontend-only checks
* Always enforce authorization at API level
* Log unauthorized access attempts
* Regularly review role definitions

---

## 12. Summary

This layout provides a **robust, maintainable, and professional foundation** for the BTCL Unified Dashboard, ensuring long-term scalability and a consistent user experience across all services and devices.
