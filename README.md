# ReadyUI

> **Production-ready Next.js templates. Ship faster. Build smarter.**

ReadyUI is an open-source template marketplace that provides professionally designed, fully functional Next.js templates — enabling developers and teams to launch products without spending weeks on boilerplate setup.

---

## Table of Contents

1. [Overview](#overview)
2. [Key Features](#key-features)
3. [Project Architecture](#project-architecture)
   - [Folder Structure](#folder-structure)
   - [Route Map](#route-map)
   - [API Reference](#api-reference)
4. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Environment Variables](#environment-variables)
   - [Running the Development Server](#running-the-development-server)
5. [Pages & Components](#pages--components)
   - [Public Pages](#public-pages)
   - [Shared Components](#shared-components)
   - [Hero Section](#hero-section)
6. [Templates](#templates)
   - [Browsing Templates](#browsing-templates)
   - [Template Detail Page](#template-detail-page)
7. [Database Configuration](#database-configuration)
8. [Helpers & Utilities](#helpers--utilities)
9. [Data Models](#data-models)
10. [Use Cases](#use-cases)
11. [Tech Stack](#tech-stack)
12. [Contributing](#contributing)
13. [License](#license)

---

## Overview

ReadyUI solves one of the most time-consuming problems in software development: building the same foundational layouts, routes, and UI patterns from scratch for every new project. Instead of reinventing the wheel, ReadyUI gives you a curated library of polished, production-ready Next.js templates you can download, customize, and deploy immediately.

Whether you're a solo developer building your next SaaS, a startup pushing an MVP to production, or a freelancer delivering client work on deadline — ReadyUI has a template for you.

---

## Key Features

- **Curated Template Library** — A growing collection of Next.js templates spanning landing pages, dashboards, SaaS starters, portfolios, and more.
- **Template Preview & Detail Pages** — Each template has its own dedicated detail page (`/templates/[id]`) with a live preview, tech stack breakdown, and download instructions.
- **Flexible Pricing Tiers** — Free and premium templates available. The `/pricing` page clearly outlines what's included in each plan.
- **REST API for Templates** — A built-in API route (`/api/templates`) to programmatically query the template catalog, enabling integrations and future features.
- **Persistent Data Models** — MongoDB-backed models for templates and users, enabling saved favorites, purchase history, and user-specific features.
- **Responsive Design** — Mobile-first, fully responsive layouts out of the box via Tailwind CSS.
- **Shared Layout System** — A consistent `Navbar` and `Footer` component shared across all pages via Next.js App Router layout nesting.
- **Extensible Architecture** — Clean separation between route groups, API handlers, shared components, models, and helpers for easy feature expansion.

---

## Project Architecture

### Folder Structure

```
📦 src
 ┣ 📂 app
 ┃ ┣ 📂 (app)                          # Route group: public-facing pages
 ┃ ┃ ┣ 📂 about                        # About page
 ┃ ┃ ┃ ┗ 📜 page.tsx
 ┃ ┃ ┣ 📂 contact                      # Contact page
 ┃ ┃ ┃ ┗ 📜 page.tsx
 ┃ ┃ ┣ 📂 pricing                      # Pricing plans page
 ┃ ┃ ┃ ┗ 📜 page.tsx
 ┃ ┃ ┗ 📂 templates                    # Template catalog
 ┃ ┃   ┣ 📂 [id]                       # Dynamic route: individual template detail
 ┃ ┃   ┃ ┗ 📜 page.tsx
 ┃ ┃   ┗ 📜 page.tsx                   # Templates listing / browse page
 ┃ ┣ 📂 api
 ┃ ┃ ┗ 📂 templates
 ┃ ┃   ┗ 📜 route.ts                   # REST API: GET/POST /api/templates
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 shared
 ┃ ┃ ┃ ┣ 📜 footer.tsx                 # Global footer
 ┃ ┃ ┃ ┗ 📜 navbar.tsx                 # Global navigation bar
 ┃ ┃ ┗ 📜 heroSection.tsx              # Homepage hero component
 ┃ ┣ 📜 globals.css                    # Global CSS / Tailwind directives
 ┃ ┣ 📜 layout.tsx                     # Root layout (wraps the entire app)
 ┃ ┗ 📜 page.tsx                       # Homepage (/)
 ┣ 📂 dbConfig                         # Database connection configuration
 ┣ 📂 helpers                          # Reusable utility functions
 ┗ 📂 models                           # Mongoose/database data models
```

### Route Map

| Path | Description |
|------|-------------|
| `/` | Homepage with hero section and featured templates |
| `/about` | About ReadyUI — mission, team, and story |
| `/contact` | Contact form for support and inquiries |
| `/pricing` | Subscription and one-time purchase plans |
| `/templates` | Browse all available templates |
| `/templates/[id]` | Individual template detail page (preview, download, info) |
| `/api/templates` | REST API endpoint for the templates catalog |

### API Reference

#### `GET /api/templates`

Returns a list of all available templates from the database.

**Response:**
```json
[
  {
    "_id": "64abc123def456",
    "name": "SaaS Starter",
    "description": "A complete Next.js SaaS boilerplate with auth and billing.",
    "category": "SaaS",
    "price": 0,
    "tags": ["nextjs", "tailwind", "typescript"],
    "previewUrl": "https://preview.readyui.com/saas-starter",
    "createdAt": "2024-01-15T10:00:00Z"
  }
]
```

#### `POST /api/templates`

Creates a new template entry (admin/authenticated use only).

**Request Body:**
```json
{
  "name": "Portfolio Pro",
  "description": "A beautiful portfolio template for developers.",
  "category": "Portfolio",
  "price": 19,
  "tags": ["nextjs", "framer-motion", "tailwind"]
}
```

---

## Getting Started

### Prerequisites

Ensure you have the following installed before setting up ReadyUI locally:

- [Node.js](https://nodejs.org/) `v18.0.0` or higher
- [npm](https://www.npmjs.com/) `v9+` or [yarn](https://yarnpkg.com/) `v1.22+`
- [MongoDB](https://www.mongodb.com/) — local instance or a [MongoDB Atlas](https://www.mongodb.com/atlas) cluster

### Installation

**1. Clone the repository:**
```bash
git clone https://github.com/your-org/readyui.git
cd readyui
```

**2. Install dependencies:**
```bash
npm install
# or
yarn install
```

### Environment Variables

Create a `.env.local` file in the root of the project and populate it with the following:

```env
# MongoDB Connection
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/readyui

# Application
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# (Optional) Authentication
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000
```

> ⚠️ Never commit your `.env.local` file. It is included in `.gitignore` by default.

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application running.

**Other available scripts:**

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Build the application for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint across the project |

---

## Pages & Components

### Public Pages

#### Homepage — `src/app/page.tsx`
The root landing page. Renders the `HeroSection` component and showcases featured templates. This is the primary entry point for new visitors.

#### About — `src/app/(app)/about/page.tsx`
Describes the ReadyUI project, its mission, and the team behind it. Useful for building trust with potential users and customers.

#### Contact — `src/app/(app)/contact/page.tsx`
A contact form for user inquiries, bug reports, and support requests. Integrates with the backend to route messages appropriately.

#### Pricing — `src/app/(app)/pricing/page.tsx`
Displays available subscription plans and one-time purchase options. Clearly communicates the value of each tier and what templates are included or unlocked.

#### Templates Listing — `src/app/(app)/templates/page.tsx`
The template catalog/browse page. Fetches and renders all available templates from the database via the `/api/templates` endpoint. Supports filtering, searching, and categorization.

#### Template Detail — `src/app/(app)/templates/[id]/page.tsx`
A dynamic page rendered for each individual template using its unique `id`. Displays:
- Full template description and feature list
- Live preview or screenshot gallery
- Tech stack used in the template
- Download / purchase call-to-action
- Related templates

### Shared Components

#### Navbar — `src/app/components/shared/navbar.tsx`
The global top navigation bar, rendered on every page via the root layout. Contains:
- ReadyUI brand logo
- Navigation links (Home, Templates, Pricing, About, Contact)
- Authentication state (Login / Dashboard buttons)
- Mobile-responsive hamburger menu

#### Footer — `src/app/components/shared/footer.tsx`
The global footer component. Contains:
- Site links and sitemap
- Social media links
- Copyright notice
- Newsletter signup (optional)

### Hero Section

#### `src/app/components/heroSection.tsx`
The main above-the-fold component on the homepage. Designed to immediately communicate ReadyUI's value proposition. Typically contains:
- Headline and subheadline copy
- Primary CTA button ("Browse Templates")
- Secondary CTA ("View Pricing")
- Hero illustration or animated background

---

## Templates

### Browsing Templates

Navigate to `/templates` to explore the full catalog. Templates are fetched from the database and rendered as cards with:
- Template name and description
- Category badge (e.g., SaaS, Portfolio, Landing Page)
- Price indicator (Free / Premium)
- Preview thumbnail
- Quick action button

### Template Detail Page

Each template at `/templates/[id]` is a fully server-rendered page that:
1. Fetches the template document from MongoDB by `id`.
2. Renders full metadata, preview images, and feature highlights.
3. Provides a download link (for free templates) or a purchase flow (for premium templates).

**URL Example:**
```
https://readyui.com/templates/saas-starter-nextjs
```

---

## Database Configuration

The `src/dbConfig/` directory contains the database connection logic. ReadyUI uses MongoDB as its primary data store, connected via [Mongoose](https://mongoosejs.com/).

**Connection Pattern:**
```typescript
// src/dbConfig/dbConfig.ts
import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};
```

The connection function is called within API route handlers to ensure the database is connected before any query is executed. Next.js caches the connection across hot reloads in development to prevent connection pool exhaustion.

---

## Helpers & Utilities

The `src/helpers/` directory houses reusable utility functions used across the application. These are pure functions or lightweight modules with no UI dependencies.

**Common helper categories include:**

- **Response helpers** — Standardized API response formatting (`sendSuccess`, `sendError`)
- **Validation helpers** — Input sanitization and schema validation utilities
- **Auth helpers** — Token extraction, session verification
- **Formatting helpers** — Date formatting, price formatting, slug generation

**Example usage:**
```typescript
import { sendSuccess, sendError } from "@/helpers/apiResponse";

// In a route handler:
return sendSuccess(res, { templates }, 200);
return sendError(res, "Template not found", 404);
```

---

## Data Models

The `src/models/` directory contains Mongoose schema definitions for all database entities.

### Template Model

Defines the shape of a template document in MongoDB.

```typescript
// src/models/Template.ts
import mongoose, { Schema, Document } from "mongoose";

export interface ITemplate extends Document {
  name: string;
  description: string;
  category: string;
  price: number;
  tags: string[];
  previewUrl: string;
  downloadUrl: string;
  isPremium: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const TemplateSchema = new Schema<ITemplate>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, default: 0 },
    tags: [{ type: String }],
    previewUrl: { type: String },
    downloadUrl: { type: String },
    isPremium: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.Template ||
  mongoose.model<ITemplate>("Template", TemplateSchema);
```

### User Model *(if applicable)*

Stores registered user information, purchased templates, and preferences.

```typescript
// src/models/User.ts
{
  email: String,          // Unique user email
  name: String,           // Display name
  passwordHash: String,   // Hashed password (bcrypt)
  plan: String,           // "free" | "pro" | "enterprise"
  purchasedTemplates: [ObjectId],  // Ref: Template
  createdAt: Date,
}
```

---

## Use Cases

ReadyUI is purpose-built for the following scenarios:

### 🚀 Solo Developers / Indie Hackers
You have an idea and need to ship fast. Instead of spending a weekend wiring up layouts, navigation, and routing — pick a ReadyUI template, customize the copy and colors, and deploy your MVP on day one.

### 🏢 Startups
Your team needs a polished marketing site or internal dashboard but design resources are stretched. ReadyUI's premium templates give you a professional baseline that can be handed directly to developers for customization.

### 🎨 Freelancers & Agencies
Delivering client projects faster means higher margins. Use ReadyUI templates as a starting point, white-label them, and customize to match your client's brand — reducing project timelines significantly.

### 🎓 Learners & Students
Studying Next.js and the App Router? ReadyUI's templates serve as real-world reference implementations. Study how routes are organized, how data fetching works, and how layouts are composed in production-grade codebases.

### 🔧 Prototyping & Demos
Need to demonstrate an idea to stakeholders or investors? Spin up a realistic-looking prototype in minutes using a ReadyUI template as the visual shell.

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js 14](https://nextjs.org/) | React framework with App Router |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe development |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [MongoDB](https://www.mongodb.com/) | NoSQL database |
| [Mongoose](https://mongoosejs.com/) | MongoDB ODM for schema modeling |
| [React](https://react.dev/) | UI component library |

---

## Contributing

Contributions are welcome and appreciated! Here's how to get involved:

**1. Fork the repository**

**2. Create a feature branch:**
```bash
git checkout -b feature/your-feature-name
```

**3. Commit your changes:**
```bash
git commit -m "feat: add your feature description"
```

**4. Push to your branch:**
```bash
git push origin feature/your-feature-name
```

**5. Open a Pull Request** against the `main` branch.

Please follow the existing code style (ESLint + Prettier) and include appropriate tests where applicable. For major changes, open an issue first to discuss your proposal.

---

## License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for full details.

---

<p align="center">
  Built with ❤️ by the ReadyUI team &nbsp;·&nbsp;
  <a href="https://readyui.com">readyui.com</a>
</p>