# Performance Plan

## 1. Core Web Vitals Targets
- **LCP (Largest Contentful Paint)**: < 2.5s (Target: < 1.5s on desktop)
- **FID/INP (Interaction to Next Paint)**: < 200ms
- **CLS (Cumulative Layout Shift)**: < 0.1

## 2. Image & Video Optimization
- Use `next/image` for all images to automatically serve WebP/AVIF and handle responsive sizes.
- Use `priority` true ONLY for above-the-fold images (Hero).
- Use `placeholder="blur"` for smoother loading experiences.
- Videos: Compress MP4s heavily. Provide poster images. Do not autoplay videos on mobile if they are large; use a fallback poster image. Use `preload="none"` for videos below the fold.

## 3. Rendering Strategy
- Leverage Next.js Static Site Generation (SSG) / Server Components.
- The site is content-heavy but relatively static (until a CMS is attached), so pages should be pre-rendered at build time.
- Use dynamic imports (`next/dynamic`) for heavy interactive components (e.g., Lightbox, Interactive Maps) so they don't block the initial bundle.

## 4. Font Optimization
- Use `next/font/google` for Noto Sans Devanagari and Noto Serif Devanagari.
- This ensures fonts are downloaded at build time and self-hosted, preventing layout shifts and external network requests.

## 5. Third-Party Scripts
- Defer or lazy-load any analytics scripts (Google Analytics, Meta Pixel).
- Load them using Next.js `<Script>` component with `strategy="afterInteractive"` or `strategy="lazyOnload"`.

## 6. Bundle Size
- Avoid large monolithic libraries.
- Import specific icons from `lucide-react`.
- Monitor bundle size using `@next/bundle-analyzer` during development.
