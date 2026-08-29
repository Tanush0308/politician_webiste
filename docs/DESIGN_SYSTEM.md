# Design System

## 1. Visual Philosophy
- Premium, Editorial, Cinematic, Modern, Marathi-first, Human, Documentary, Polished, Confident.
- Inspiration: High-end agency portfolios, premium digital documentaries.

## 2. Color Palette
- **Primary Background**: `#0A0A0A` (Deep dark, cinematic)
- **Secondary Dark**: `#151515` (Slightly lighter for cards/sections)
- **Light Background**: `#F5F1E8` (Warm editorial off-white)
- **Text (Light)**: `#F5F5F5` (Primary text on dark backgrounds)
- **Text (Dark)**: `#171717` (Primary text on light backgrounds)
- **Accent**: Warm muted gold/saffron - e.g., `#C9973E` or `#FF7722` (Use sparingly for buttons, highlights, numbers, active states)

## 3. Typography
- **Primary (Marathi)**: Noto Sans Devanagari / Noto Serif Devanagari.
- **Secondary (English Metadata)**: Inter or Roboto.
- **Hierarchy**: Large, dramatic, but readable headings. Minimalist, clean body text. Editorial use of serif for quotes or impact numbers.

## 4. Imagery & Media
- Authentic, documentary-style photography.
- Subtle grain, controlled contrast, editorial cropping.
- Video: Subtle, compressed, looping background videos where appropriate (e.g., Hero section).
- No stock photos. No AI-generated politician images.

## 5. UI Elements
- **Buttons**: Clean, subtle hover states (e.g., arrow shift, slight scale).
- **Icons**: Lucide React icons, elegant and minimal. No emojis in final UI.
- **Cards**: Minimal borders, slight elevation/shadow on hover (`hover:-translate-y-1`, `hover:shadow-lg`). Avoid excessive glassmorphism.
- **Timeline**: Vertical line with smooth drawing animation on scroll.

## 6. Motion & Interaction
- Powered by Framer Motion.
- Fade-ins and slide-ups on scroll (`initial={{ opacity: 0, y: 20 }}`).
- Image parallax on scroll.
- Staggered reveals for lists and gallery items.
- Impact numbers counting up when in view.

## 7. Layout & Spacing
- Ample whitespace (breathing room).
- Asymmetrical editorial layouts (e.g., Image on left, text on right, alternating).
- Responsive: Tailored experiences for mobile (390px) to ultra-wide (1920px).
