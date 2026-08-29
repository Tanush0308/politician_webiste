# SEO Plan

## 1. Metadata Architecture
- Centralized default metadata in `site.config.ts`.
- Next.js Metadata API in `app/layout.tsx` for global defaults.
- Dynamic Metadata generation in pages (e.g., `app/initiatives/[slug]/page.tsx` using `generateMetadata`).

## 2. On-Page SEO Requirements
- **Title Tags**: Format: `[Page Name] | कैलास दादा पाटील (Kailas Dada Patil)`
- **Meta Descriptions**: Concise, accurate summaries in Marathi. No keyword stuffing.
- **Heading Hierarchy**: Exactly one `<h1>` per page. Logical flow of `<h2>` and `<h3>`.
- **Image Alt Text**: Mandatory descriptive alt text for every image. (e.g., "कैलास दादा पाटील शेतकऱ्यांशी संवाद साधताना").
- **Canonical URLs**: Define canonical URLs for all pages to prevent duplicate content issues.

## 3. Structured Data (Schema.org)
- Implemented via JSON-LD in Next.js.
- **WebSite**: Global schema on the homepage.
- **Person**: Schema detailing Kailas Dada Patil's political role, constituency, and social links.
- **Article/NewsArticle**: On specific detailed initiative pages or media news pages.
- **BreadcrumbList**: On deep pages (e.g., Home > Initiatives > Water Project).

## 4. Indexing and Crawling
- Generate dynamic `sitemap.xml` listing all static pages and dynamic initiative pages.
- Generate `robots.txt` allowing full indexing (once in production).
- Add `noindex` to any development, test, or purely administrative routes.

## 5. Social Sharing (Open Graph & Twitter Cards)
- Every page must have `og:title`, `og:description`, `og:image`.
- Design a standard fallback OG image (e.g., 1200x630 high-quality graphic with logo and portrait).
- Specific initiative pages should use their featured image as the `og:image`.
