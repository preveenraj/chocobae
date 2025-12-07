# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview
This is a [Next.js](https://nextjs.org/) project (version 16) using the App Router, written in TypeScript. It uses [Tailwind CSS](https://tailwindcss.com/) for styling and [shadcn/ui](https://ui.shadcn.com/) for UI components.

## Development Commands

- **Start Development Server**: `npm run dev`
- **Build for Production**: `npm run build`
- **Start Production Server**: `npm run start`
- **Lint Code**: `npm run lint`

## Architecture

### Directory Structure
- `src/app/`: Contains the App Router routes, layouts, and pages.
  - `layout.tsx`: Root layout for the application.
  - `page.tsx`: Home page.
  - `globals.css`: Global CSS styles, including Tailwind directives and CSS variables for theming.
- `src/components/`: React components.
  - Reusable UI components (likely from shadcn/ui) should be placed here.
- `src/lib/`: Utility functions.
  - `utils.ts`: Contains the `cn` utility for class name merging (clsx + tailwind-merge).
- `src/icons/`: Directory for custom icon components.

### Styling & UI
- **Tailwind CSS**: Configured in `tailwind.config.ts`.
- **shadcn/ui**: Components are installed in `src/components`.
  - Configuration can be found in `components.json`.
  - The project uses CSS variables for theming (defined in `src/app/globals.css` and referenced in `tailwind.config.ts`).
- **Icons**: Uses `lucide-react` for icons.

### Key Configuration Files
- `next.config.mjs`: Next.js configuration.
- `tailwind.config.ts`: Tailwind CSS configuration (includes theming and plugins like `tailwindcss-animate`).
- `tsconfig.json`: TypeScript configuration.
- `components.json`: shadcn/ui configuration.
