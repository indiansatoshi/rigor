# StratAlign - Unified Strategy Platform

StratAlign is a comprehensive platform designed to connect high-level company strategy directly to day-to-day execution. It bridges the gap between the "Why" and the "How" through a unified interface with four distinct levels of granularity.

## The 4-Level Hierarchy

### 1. Company Level (The "North Star")
**Focus**: Strategy, Mission, and Viability.
- **Tools**: Strategy Hub, Lean Canvas, Strategic OKRs.
- **Goal**: Define the business model and annual targets (e.g., "Hit $100M ARR").

### 2. Portfolio Level (The "Investment")
**Focus**: Allocating resources to "Big Bets".
- **Tools**: Portfolio Roadmap, Investment Kanban.
- **Goal**: Visualize Initiatives across multiple teams and align them with Company Goals.

### 3. Product Level (The "Discovery Engine")
**Focus**: Figuring out what to build.
- **Tools**: Opportunity Solution Tree (OST).
- **Goal**: Map Customer Opportunities (Problems) to Solutions (Ideas) based on Portfolio Initiatives.

### 4. Project Level (The "Delivery")
**Focus**: Validating and building solutions.
- **Tools**: Delivery Board (Kanban/Scrum).
- **Goal**: Execute on validated Ideas through Epics and Stories.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

First, install dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/`: Next.js App Router pages.
    - `strategy/`: Company Level pages.
    - `portfolio/`: Portfolio Level pages.
    - `product/`: Product Level pages.
    - `delivery/`: Project Level pages.
- `components/`: Reusable UI components.
    - `ui/`: shadcn/ui primitives.
    - `strategy/`, `portfolio/`, `product/`, `delivery/`: Domain-specific components.
- `lib/`: Utility functions and mock data.
- `types/`: TypeScript definitions for the domain model.
