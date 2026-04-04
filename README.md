# Zach Beauvais Photography

Portfolio site built with [Astro](https://astro.build). Deployed automatically to GitHub Pages on every push to `main`.

**Live site:** https://beauvais.github.io/zach-beauvais-photography/

---

## Quick reference

| I want to… | File to edit |
|---|---|
| Edit copy on any page | `copydeck/[page].md` — then ask Claude to apply it |
| Add or remove a photo | `src/content/data.ts` |
| Change a price | `src/content/data.ts` |
| Update my email or Instagram | `src/content/data.ts` |
| Build a page from its copydeck | Ask Claude: "build `[page].astro` from its copydeck" |
| Add a page to the navigation | `src/components/Header.astro` |
| Create a new page | Copy `src/templates/new-page.astro` → `src/pages/` |
| Create a new portfolio gallery | Copy `src/templates/new-portfolio-page.astro` → `src/pages/portfolio/` |

---

## Working with Claude

This site is built to work with Claude (Cowork mode) for content editing and page building. The `CLAUDE.md` file in the repo root loads automatically at the start of every Claude session — it contains the business brief, voice reference, component patterns, and standing decisions, so you don't need to re-explain the project each time.

### Recommended session workflow

**For copy edits:**
1. Edit the relevant file in `copydeck/` (plain markdown, no code)
2. Open a Claude session and say: *"Apply the updated `[page].md` copydeck to `[page].astro`"*
3. Claude reads both files, diffs them, and makes targeted edits — it doesn't rewrite the page

**For building a new page:**
1. Write the copydeck first in `copydeck/[page].md`
2. Open a Claude session and say: *"Build `[page].astro` from `copydeck/[page].md`"*
3. Claude scaffolds from the template, implements the copy, and wires up components

**For adding or swapping photos:**
- Say which slot you want to change and describe the image by its label (see photo index below)
- e.g. *"Replace the approach section photo with the couple shot"*

**For code and component work:**
- One task per session — scope it specifically: *"Add a testimonial section to `about.astro`"*, not *"work on the site"*
- Claude reads `CLAUDE.md` at session start, which covers voice, decisions, and patterns already made

### What Claude doesn't need to be told each session

- What the project is (it's in `CLAUDE.md`)
- The voice and tone (short version is in `CLAUDE.md`; full version at `Photography Website/voice-and-tone.md` is only needed for substantial new copy)
- Which decisions are final (standing decisions are in `CLAUDE.md`)

---

## Copydeck

All page copy lives in `copydeck/` as plain markdown files. These are the authoritative source — if copy in a `.astro` file disagrees with the copydeck, the copydeck wins.

| File | Page |
|---|---|
| `copydeck/index.md` | Homepage |
| `copydeck/sessions.md` | Sessions & Pricing |
| `copydeck/about.md` | About |
| `copydeck/how-i-work.md` | How I Work |
| `copydeck/contact.md` | Contact |
| `copydeck/404.md` | 404 page |
| `copydeck/portfolio/` | Portfolio pages |

### How to edit copy

Open the relevant `copydeck/` file in any text editor. The files are plain markdown — no build tools, no syntax to learn. Each section has a heading that matches the section name on the page, with the copy in a code block beneath it.

Notes in `>` blockquotes are editorial guidance — things like *"this line is doing real work, don't cut it"* or *"the period is intentional."* These are standing decisions; don't change what they describe without a good reason.

**After editing**, ask Claude to apply the changes to the `.astro` file. Never edit copy directly in `.astro` files — the copydeck won't stay in sync.

### Copydeck note conventions

- `> **Notes:**` — editorial guidance, binding decisions about why copy is the way it is
- `> **Standing rule:**` — a decision that applies across the whole site (e.g. no "view" as a verb)
- `*Content from data.ts*` — means this section's content is generated from `src/content/data.ts`, not hardcoded

---

## Updating content

### Photo index

`src/content/data.ts` contains a comment block at the top of `portraitImages` that maps every array index to a short label and description. Use this when asking Claude to swap or add photos — refer to images by label rather than index number.

Example: *"Use `woman-curly-window` [14] in the approach section instead of the dancer"*

The index block looks like this:

```
//  [0]  woman-closeup       — B&W close portrait, woman with nose ring, direct gaze
//  [14] woman-curly-window  — B&W, woman with curly hair, eyes closed, smiling at window
//  [18] dancer-dark-main    — B&W, dancer mid-pose, arms wide, one leg raised, dark bg
```

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
