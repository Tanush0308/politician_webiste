# Component Architecture

## 1. Core Principles
- **Reusability**: Build small, focused components. Avoid duplicate markup.
- **Server vs Client**: Use React Server Components (RSC) by default for performance and SEO. Use Client Components (`"use client"`) only where interactivity, state, or Framer Motion animations are required.
- **Data Agnostic**: Components should accept typed props, not import local data files directly. This enables future CMS integration.

## 2. Directory Structure
```
/src/components
  /layout        # Header, Footer, Page Containers
  /navigation    # Desktop/Mobile Menus, Breadcrumbs
  /hero          # Hero variants (Home, Initiative, Generic)
  /typography    # SectionTitle, Eyebrow, QuoteBlock
  /sections      # Reusable page sections (e.g., ImpactNumbers, CallToAction)
  /initiatives   # InitiativeCard, InitiativeGrid, StoryBlock
  /journey       # Timeline, TimelineItem
  /gallery       # PhotoGrid, VideoGrid, Lightbox, MediaCard
  /assembly      # QuestionCard, AssemblyList
  /constituency  # MapVisual, VillageStats
  /forms         # ContactForm, Input, Textarea
  /ui            # Base UI: Button, Modal, LoadingState, EmptyState, Badge
```

## 3. Key UI Components
- **`Button`**: Variants for Primary, Secondary, Outline, Ghost, and Icon.
- **`SectionTitle`**: Standardized typography with an optional eyebrow and animated underline.
- **`Card`**: Base wrapper with hover states (subtle lift, shadow).
- **`ImageReveal`**: Wrapper using Framer Motion to reveal an image as it enters the viewport.
- **`AnimatedCounter`**: Uses Intersection Observer to count up numbers (e.g., "45+").

## 4. Motion Guidelines
- **Speed**: Fast and snappy. No slow, lingering animations.
- **Subtlety**: Small scale changes (`1.02`), slight Y-axis translations (`y: 20` to `0`), and opacity fades.
- **Accessibility**: Always respect `prefers-reduced-motion: reduce`.
