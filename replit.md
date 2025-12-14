# 089Dach GmbH - Munich Roofing Company Website

## Overview

This is a professional website for 089Dach GmbH, a roofing company (Dachdecker) based in Munich, Germany. The site serves as a lead generation platform featuring service information, contact forms, FAQ sections, and reference galleries. The website is built as a full-stack TypeScript application with a React frontend and Express backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS v4 with CSS variables for theming
- **UI Components**: shadcn/ui component library (New York style) built on Radix UI primitives
- **State Management**: TanStack React Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite with custom plugins for Replit integration

The frontend follows a page-based architecture with reusable components. Pages are located in `client/src/pages/` and shared components in `client/src/components/`. The site is primarily in German language.

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with tsx for development
- **API Pattern**: RESTful endpoints under `/api/` prefix
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Validation**: Zod with drizzle-zod for type-safe schemas

The server uses a simple storage pattern (`server/storage.ts`) that abstracts database operations through a `DatabaseStorage` class implementing the `IStorage` interface.

### Data Storage
- **Database**: PostgreSQL (connection via `DATABASE_URL` environment variable)
- **Schema Location**: `shared/schema.ts` - contains all database table definitions
- **Tables**:
  - `users` - Basic user accounts with username/password
  - `contacts` - Contact form submissions (name, email, phone, message)
  - `leads` - Lead funnel submissions (problem, timing, details, contact info)

### Build System
- **Development**: Vite dev server with HMR, proxied through Express
- **Production**: Custom build script (`script/build.ts`) using esbuild for server bundling and Vite for client
- **Output**: Compiled to `dist/` directory with static files in `dist/public/`

### Key Design Decisions

1. **Shared Schema**: Database schemas are defined in `shared/schema.ts` and shared between frontend and backend, ensuring type safety across the stack.

2. **Path Aliases**: TypeScript path aliases (`@/` for client, `@shared/` for shared code) simplify imports.

3. **Static Serving**: In production, the Express server serves the built Vite frontend as static files with SPA fallback.

4. **Component Library**: Using shadcn/ui provides accessible, customizable components while maintaining full control over the source code.

## External Dependencies

### Database
- **PostgreSQL**: Primary data store, connected via `DATABASE_URL` environment variable
- **Drizzle Kit**: Database migrations stored in `./migrations` directory, push with `npm run db:push`

### Third-Party Services
- **Google Fonts**: Inter and Plus Jakarta Sans fonts loaded via CDN
- **OpenAI**: AI Chat Widget using GPT-4o-mini (via Replit AI Integration)
- **IONOS SMTP**: E-Mail-Benachrichtigungen bei Kontaktanfragen und Rückruf-Wünschen
  - Secrets: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
  - Empfänger: info@089dach.de
  - Verwendet Nodemailer

### Key NPM Packages
- `drizzle-orm` / `drizzle-zod`: Database ORM and schema validation
- `@tanstack/react-query`: Async state management
- `@radix-ui/*`: Accessible UI primitives
- `wouter`: Client-side routing
- `express`: HTTP server framework
- `pg`: PostgreSQL client