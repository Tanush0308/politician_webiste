# Media Import Strategy

## 1. Instagram Content Policy
- **Primary Use**: Visual research and reference only.
- **Extraction Policy**: DO NOT attempt to bypass Instagram's anti-bot protections, login walls, or rate limits. Do not use unauthorized scraping APIs.
- **Public Embedding**: If a specific Instagram post/reel needs to be shown, use the official Instagram embed iframe or react-instagram-embed library, but ensure the site does not break if the embed fails to load.

## 2. Media Asset Requirements
As defined in `CLIENT_ASSETS_REQUIRED.md`, all core website media (Hero video, Hero images, profile portraits, initiative before/after photos, timeline photos) must be provided by the client as original high-resolution files.

## 3. Fallback Strategy
If client assets are delayed during development:
- Use local blurred/abstract placeholder images (`/public/images/placeholders/`).
- Add a clear visual watermark or overlay: `[CLIENT ASSET REQUIRED]`.
- Do not use generic stock photos of politicians or fake AI images.
- A placeholder should maintain the correct aspect ratio and layout structure so the UI can be built and tested.

## 4. Import Workflow
Once assets are received from the client:
1. Review quality and format.
2. Compress and optimize (convert to WebP/AVIF, create responsive sizes).
3. Name according to the semantic naming convention (e.g., `hero-kailas-dada-public-meeting.webp`).
4. Place in the appropriate `/public/images/` or `/public/videos/` directory.
5. Update `site.config.ts` or the respective data files (`initiatives.ts`, `gallery.ts`) with the correct file path.
