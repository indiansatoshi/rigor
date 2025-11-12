# Design System Guide

This document outlines the design system and styling conventions for the Rigor project.

## Creating New Pages

All pages should follow this structure:

```tsx
import { PageWrapper } from "@/components/page-wrapper";

export default function MyPage() {
  return (
    <PageWrapper
      breadcrumbs={[{ label: "Default Workspace", href: "#" }]}
      currentPage="My Page Title"
    >
      {/* Your page content here */}
    </PageWrapper>
  );
}
```

### What You Get Automatically

- ✅ **Sidebar** - Shared across all pages via root layout
- ✅ **Header** - With sidebar toggle and breadcrumbs
- ✅ **Consistent spacing** - Standard padding and gaps
- ✅ **Responsive design** - Mobile-friendly layout

## Color System

Always use CSS variables from `globals.css` instead of hardcoded colors. This ensures:
- Consistent theming across light/dark modes
- Easy maintenance and updates
- Proper color contrast

### Available Color Variables

#### Semantic Colors
```css
--background          /* Page background */
--foreground          /* Primary text color */
--muted               /* Muted backgrounds */
--muted-foreground    /* Muted text */
--card                /* Card backgrounds */
--card-foreground     /* Card text */
```

#### Brand Colors
```css
--primary             /* Primary brand color (green) */
--primary-foreground  /* Text on primary */
--secondary           /* Secondary brand color (purple) */
--secondary-foreground /* Text on secondary */
--accent              /* Accent color (blue) */
--accent-foreground   /* Text on accent */
```

#### Chart Colors
```css
--chart-1             /* Green - for success/positive */
--chart-2             /* Purple - for in-progress/neutral */
--chart-3             /* Blue - for info */
--chart-4             /* Additional chart color */
--chart-5             /* Additional chart color */
```

#### UI Elements
```css
--border              /* Border color */
--input               /* Input border color */
--ring                /* Focus ring color */
--destructive         /* Error/danger color */
```

### Usage Examples

#### Using Colors in Tailwind Classes
```tsx
<div className="bg-muted/50 text-foreground border border-border rounded-xl">
  Content
</div>
```

#### Using Colors in Inline Styles
```tsx
<div style={{ backgroundColor: "hsl(var(--chart-1))" }}>
  Content
</div>
```

## Typography

The project uses three font families:
- **Sans-serif**: Plus Jakarta Sans (default)
- **Serif**: Source Serif 4
- **Mono**: JetBrains Mono

## Spacing & Layout

### Standard Spacing
- Use `gap-4` for general spacing between elements
- Use `p-4` for padding in content areas
- Use `pt-0` to remove top padding after headers

### Rounded Corners
```css
--radius-sm: calc(var(--radius) - 4px)  /* 0.125rem */
--radius-md: calc(var(--radius) - 2px)  /* 0.25rem */
--radius-lg: var(--radius)              /* 0.5rem */
--radius-xl: calc(var(--radius) + 4px)  /* 0.75rem */
```

Use `rounded-xl` for cards and major UI elements.

## Component Patterns

### Cards
```tsx
<div className="bg-muted/50 rounded-xl p-4">
  {/* Card content */}
</div>
```

### Grid Layouts
```tsx
<div className="grid auto-rows-min gap-4 md:grid-cols-3">
  {/* Grid items */}
</div>
```

## Best Practices

1. **Never hardcode colors** - Always use CSS variables
2. **Use semantic color names** - Choose colors based on meaning, not appearance
3. **Maintain consistency** - Follow existing patterns in the codebase
4. **Test both themes** - Ensure your UI works in light and dark modes
5. **Use PageWrapper** - Wrap all pages for consistent layout
6. **Leverage Tailwind** - Use utility classes for styling when possible

## Examples from Existing Pages

### Dashboard Page
- Uses `bg-muted/50` for placeholder cards
- Uses `aspect-video` for consistent card proportions
- Uses `rounded-xl` for rounded corners

### Strategy Page
- Uses design system colors for Kanban columns
- Uses `text-muted-foreground` for secondary text
- Uses Avatar components from the UI library

## Dark Mode

All colors automatically adapt to dark mode. The design system handles this through CSS variables that change based on the `.dark` class on the root element.
