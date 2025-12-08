# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Clamby.id is an AI-powered digital wardrobe assistant landing page built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS 4. It uses shadcn/ui components (New York style) and Motion for animations.

## Commands

```bash
npm run dev           # Start development server (localhost:3000)
npm run build         # Build for production
npm run lint          # Run ESLint
npm run lint:fix      # Auto-fix linting issues
npm run format        # Format with Prettier
npm run format:check  # Check formatting
```

## Architecture

### Directory Structure

```
src/
  app/                 # Next.js App Router pages, layouts, API routes
    api/contact/       # POST endpoint using Resend for emails
  components/
    ui/                # shadcn/ui components (use CLI to add, never copy-paste)
    sections/          # Page section components (About, Milestones, etc.)
  lib/
    constants.ts       # App-wide constants (links, routes, assets)
    utils.ts           # Helper functions (cn() for className merging)
```

### Path Aliases

Use `@/` prefix for all imports (maps to `src/`):
- `@/components/ui/button`
- `@/lib/utils`

### Component Patterns

- **Server Components by default** - only add `"use client"` when needed for interactivity
- **Page composition**: Home page is composed of horizontal sections (Hero → About → Milestones → Reviews → Contact → Waitlist)
- **shadcn/ui**: Add components via CLI (`npx shadcn@latest add <component>`), extend by wrapping

### Color Usage

Always use semantic color classes from the theme. Never use Tailwind's default color palette.

```tsx
// Correct - semantic colors
<p className="text-foreground">Main text</p>
<p className="text-muted-foreground">Secondary text</p>
<p className="text-destructive">Error text</p>
<button className="bg-primary text-primary-foreground">Button</button>
<div className="bg-card text-card-foreground">Card</div>
<div className="border-border">Bordered element</div>

// Wrong - never use default Tailwind colors
<p className="text-red-500">Error</p>
<p className="text-gray-500">Muted</p>
<button className="bg-blue-600">Button</button>
```

Available semantic colors: `background`, `foreground`, `card`, `card-foreground`, `popover`, `popover-foreground`, `primary`, `primary-foreground`, `secondary`, `secondary-foreground`, `muted`, `muted-foreground`, `accent`, `accent-foreground`, `destructive`, `destructive-foreground`, `border`, `input`, `ring`

### API Routes

Single API route exists at `/api/contact` (POST) using Resend for email delivery.

## Environment Variables

Required in `.env.local`:
- `RESEND_API_KEY` - Resend API key for contact form emails

## Key Conventions

- TypeScript strict mode enabled
- Mobile-first responsive design with Tailwind
- Dark mode support via `dark:` prefix
- Next.js Image component for all images
- Keep components under ~200 lines
- ESLint + Prettier enforced (formatting errors = linting errors)
