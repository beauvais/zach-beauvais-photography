# Zach Beauvais Photography

Portfolio site built with [Astro](https://astro.build). Deployed automatically to GitHub Pages on every push to `main`.

**Live site:** https://beauvais.github.io/zach-beauvais-photography/

---

## Quick reference

| I want to… | File to edit |
|---|---|
| Add or remove a photo | `src/content/data.ts` |
| Change a price | `src/content/data.ts` |
| Update my email or Instagram | `src/content/data.ts` |
| Edit homepage copy | `src/pages/index.astro` |
| Edit the about page | `src/pages/about.astro` |
| Edit the sessions page | `src/pages/sessions.astro` |
| Edit the contact page | `src/pages/contact.astro` |
| Add a page to the navigation | `src/components/Header.astro` |
| Create a new page | Copy `src/templates/new-page.astro` → `src/pages/` |
| Create a new portfolio gallery | Copy `src/templates/new-portfolio-page.astro` → `src/pages/portfolio/` |

---

## Updating content

### Adding a new photo

1. Drop the image file into the `/portfolio/` folder
2. Open `src/content/data.ts`
3. Add a line to the relevant array:

```ts
export const portraitImages = [
  // existing images...
  { src: 'your-new-photo.jpg', alt: 'A brief description of the photo' },
];
```

The photo appears in the gallery on the next build. The `alt` text is shown to screen readers and if the image fails to load — keep it descriptive.

To **remove** a photo, delete its line from the array. The file in `/portfolio/` can stay; it just won't be shown.

To **reorder** photos, rearrange the lines in the array.

### Changing prices

All prices are in `src/content/data.ts` under `export const pricing`. Change a number once and it updates everywhere — the homepage, sessions page, and contact form all pull from the same source.

```ts
export const pricing = {
  essential: {
    price: 350,   // ← change this
    ...
  },
  extended: {
    price: 750,   // ← and this
    ...
  },
  travel: {
    indianapolis: { label: 'Indianapolis', fee: 100 },  // ← and these
    chicago:      { label: 'Chicago',      fee: 200 },
  },
};
```

### Updating contact details

In `src/content/data.ts`, under `export const site`:

```ts
export const site = {
  email:        'zach@zachbeauvais.com',   // ← update here
  instagram:    'zach_of_the',             // ← handle only, no @
  instagramUrl: 'https://instagram.com/zach_of_the',
  ...
};
```

---

## Page structure and sections

Each page file lives in `src/pages/`. Inside each file, sections are separated by clear comment banners:

```astro
{/* ══ HERO ══════════════════════════════════════════════════════════ */}
<section class="hero">
  ...
</section>

{/* ══ APPROACH ══════════════════════════════════════════════════════ */}
<section class="section bg-soft">
  ...
</section>
```

These comments exist only in the source — they don't appear in the built HTML.

### Hiding a section temporarily

Wrap any section in `{/* ... */}` to remove it from the built site:

```astro
{/*
<section class="section bg-soft">
  <div class="container">
    ...
  </div>
</section>
*/}
```

> **Note:** `{/* */}` is a JavaScript/JSX comment. It completely removes the block — it won't appear in the HTML source at all. This is different from an HTML comment `<!-- -->`, which removes the content visually but leaves a trace in the source. Use `{/* */}` for hiding sections.

### Moving a section

Each section is self-contained between its comment banners. Cut the whole block (from one `{/* ══ SECTION */}` to the next) and paste it in a new position. The page will render in the new order.

### Changing a section background

Add a class to the `<section>` tag:

| Class | Effect |
|---|---|
| `class="section"` | White background, standard padding |
| `class="section bg-soft"` | Warm off-white |
| `class="section bg-strong"` | Slightly darker warm grey |
| `class="section-sm ..."` | Less vertical padding |
| `class="section-md ..."` | Medium vertical padding |

---

## Adding a new page

1. Copy `src/templates/new-page.astro` into `src/pages/`:

   ```
   src/pages/events.astro       → becomes /events/
   src/pages/blog/index.astro   → becomes /blog/
   ```

2. Update the `title` and `description` in `<BaseLayout>` at the top of the file.

3. Replace the placeholder sections with your content.

4. Add it to the navigation in `src/components/Header.astro`:

   ```ts
   const nav = [
     { href: route('portfolio/'),  label: 'Portfolio' },
     { href: route('events/'),     label: 'Events' },   // ← add this line
     { href: route('sessions/'),   label: 'Sessions' },
     ...
   ];
   ```

### Adding a new portfolio gallery

1. Copy `src/templates/new-portfolio-page.astro` into `src/pages/portfolio/`.

2. Add your images to `src/content/data.ts`:

   ```ts
   export const eventImages = [
     { src: 'event-01.jpg', alt: 'Description' },
     { src: 'event-02.jpg', alt: 'Description' },
   ];
   ```

3. In the new page file, update the import at the top:

   ```ts
   import { eventImages as myImages } from '../../content/data';
   ```

The gallery and lightbox are already wired up — no further changes needed.

---

## Deploying

The site deploys automatically. The workflow is:

```
edit files → commit → push to main → GitHub Actions builds → live in ~1 minute
```

### Deploying from the command line

```bash
git add .
git commit -m "describe what you changed"
git push
```

### Deploying from GitHub.com

1. Navigate to the file you want to edit on github.com
2. Click the pencil icon (Edit this file)
3. Make your changes
4. Click **Commit changes** with a short description
5. The site rebuilds automatically

You can track the build progress under the **Actions** tab in the repository.

---

## Running locally

To preview changes before pushing:

```bash
npm install        # first time only
npm run dev        # starts at http://localhost:4321
```

The dev server updates in real time as you save files. Images load from the `/portfolio/` folder exactly as they will on the live site.

To do a full production build locally (matches exactly what GitHub deploys):

```bash
npm run build
npm run preview
```

---

## File map

```
/
├── portfolio/               ← image files go here
│   ├── portrait-01.jpg
│   └── ...
│
├── src/
│   ├── content/
│   │   └── data.ts          ← edit images, pricing, and site info here
│   │
│   ├── pages/               ← one file = one URL
│   │   ├── index.astro      → /
│   │   ├── about.astro      → /about/
│   │   ├── sessions.astro   → /sessions/
│   │   ├── contact.astro    → /contact/
│   │   ├── 404.astro        → shown for broken links
│   │   └── portfolio/
│   │       ├── index.astro  → /portfolio/
│   │       ├── portraits.astro   → /portfolio/portraits/
│   │       └── landscape.astro   → /portfolio/landscape/
│   │
│   ├── components/
│   │   ├── Header.astro     ← navigation links
│   │   ├── Footer.astro     ← footer links and contact info
│   │   └── sections/
│   │       └── CTABand.astro  ← reusable call-to-action section
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro ← wraps every page (head, header, footer)
│   │
│   ├── styles/
│   │   └── global.css       ← all styles, colours, typography
│   │
│   ├── lib/
│   │   └── paths.ts         ← asset() and route() helpers (don't edit)
│   │
│   └── templates/           ← copy these to create new pages
│       ├── new-page.astro
│       └── new-portfolio-page.astro
│
├── astro.config.mjs         ← Astro configuration
└── README.md                ← this file
```

---

## Design tokens

Colours, typography, and spacing are defined as CSS variables in `src/styles/global.css`. The main values:

| Token | Value | Used for |
|---|---|---|
| `--color-bg` | `#FDFCFB` | Page background |
| `--color-fg` | `#1C1410` | Body text |
| `--color-primary` | `#2D2621` | Headings, dark buttons |
| `--color-accent` | `#E89B6D` | Eyebrow labels, highlights |
| `--color-muted` | `#6E6860` | Secondary text |
| `--font-sans` | Gill Sans | Headings, labels, UI |
| `--font-serif` | Lora | Body text |
