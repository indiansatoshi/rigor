# Design System

This project implements a design system inspired by the **Atlassian Design System (ADS)**, built on top of `shadcn/ui` and Tailwind CSS.

## Core Principles

1.  **Clarity & Optimism**: Use clean layouts, distinct colors, and friendly typography.
2.  **Information Density**: Balance high-density data presentation with sufficient whitespace (`gap-6`, `p-6`).
3.  **Visual Hierarchy**: Use typography and color to guide the user's attention.
4.  **Consistency**: Standardize interaction states, spacing, and component usage.

## Color Palette

We use a semantic color system mapped to Atlassian's neutral and functional colors.

### Neutrals
- **Background**: `hsl(220 14% 96%)` (N20 - Light Gray) - Used for the main page background to create contrast with cards.
- **Surface**: `hsl(0 0% 100%)` (White) - Used for cards and content containers.
- **Foreground**: `hsl(218 20% 20%)` (N800) - Primary text color.
- **Muted Foreground**: `hsl(218 15% 45%)` (N500) - Secondary text color.
- **Border**: `hsl(220 13% 91%)` (N30) - Subtle borders.

### Brand & Functional
- **Primary**: `hsl(226 100% 60%)` (Blue 600) - Main brand color, active states, primary buttons.
- **Secondary**: `hsl(220 14% 96%)` (N20) - Secondary backgrounds, hover states.
- **Accent**: `hsl(226 100% 96%)` (Blue 50) - Selected states, subtle highlights.
- **Destructive**: `hsl(0 84% 60%)` (Red 600) - Errors, critical alerts.
- **Success (Chart-1)**: `hsl(142 76% 36%)` (Green 600) - Success states, positive trends.
- **Warning (Chart-2)**: `hsl(48 96% 53%)` (Yellow 400) - Warnings, at-risk items.
- **Info (Chart-3)**: `hsl(217 91% 60%)` (Blue 400) - Informational items.

## Typography

We use **Inter** as the primary font family for its readability and neutrality.

- **Headings**: Semi-bold (`font-semibold`), tight tracking (`tracking-tight`).
- **Body**: Regular (`font-normal`), standard tracking.
- **Labels/Badges**: Medium (`font-medium`), often uppercase or smaller size.

## Components

### Buttons
- **Primary**: Solid Blue 600 background, white text.
- **Secondary**: N20 background, N800 text.
- **Ghost**: Transparent background, hover effect.
- **Destructive**: Red 600 background, white text.

### Cards
- **Style**: White background, `border-border`, `shadow-sm` (optional but recommended for lift).
- **Spacing**: Standard padding `p-6` for content.

### Badges (Lozenges)
- **Default**: Rounded corners (`rounded-[3px]`), bold text (`font-bold`), uppercase (`uppercase`).
- **Variants**: Mapped to status colors (Success, Warning, Destructive, Info).

### Navigation
- **Top Nav**: Clean white bar, active items marked with `border-b-2 border-primary` and `text-primary`.
- **Side Nav**: Vertical list, active items highlighted with `bg-accent text-primary`.

## Layout & Spacing

- **Grid System**: Use CSS Grid with `gap-6` (24px) for dashboard layouts.
- **Page Wrapper**: Centralized wrapper with breadcrumbs and standard padding.
- **Dashboard Header**: Standardized header with title, description, and optional action button.

## Usage Guidelines

1.  **Imports**: Import reusable components from `@/components/dashboard/*` and `@/components/ui/*`.
2.  **Icons**: Use `lucide-react` icons.
3.  **Data**: Define types in `@/types/domain.ts` and use mock data from `@/lib/mock-data.ts` until API integration.
