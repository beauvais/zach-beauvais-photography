# Content & Asset Inventory
**Zach Beauvais Photography — zachbeauvais.com**
Audit date: April 2026

---

## Site overview

Astro static site. Source: `zach-beauvais-photography-astro/`. Public assets served from `portfolio/` directory (configured as `publicDir`). Target domain: `https://zachbeauvais.com`.

---

## Pages

| URL | Source file | Title tag | Meta description | Copydeck file | Status |
|---|---|---|---|---|---|
| `/` | `src/pages/index.astro` | Zach Beauvais — Portrait Photography, Lafayette Indiana | Portrait photography in Lafayette, IN and Urbana-Champaign, IL. Collaborative sessions shaped by nature, street, and abstract photography. Editing included. From $350. | `copydeck/index.md` | Live |
| `/about/` | `src/pages/about.astro` | About — Zach Beauvais Photography | Zach Beauvais is a portrait photographer based in Lafayette, IN and Urbana-Champaign, IL. A background in nature and abstract photography shapes an observational, collaborative approach. | `copydeck/about.md` | Live |
| `/sessions/` | `src/pages/sessions.astro` | Sessions & Pricing — Zach Beauvais Photography | Portrait sessions from $350. Essential Session or Exploration Session, with professional editing included. | `copydeck/sessions.md` | Live |
| `/how-i-work/` | `src/pages/how-i-work.astro` | How I Work — Zach Beauvais Photography | Portrait photography rooted in collaboration, not direction. Based in Lafayette, IN and Urbana-Champaign, IL. | `copydeck/how-i-work.md` | Live |
| `/contact/` | `src/pages/contact.astro` | Contact — Zach Beauvais Photography | Book a portrait session with Zach Beauvais. Get in touch to discuss your project, ask questions, or reserve your date. | `copydeck/contact.md` | Live |
| `/portfolio/` | `src/pages/portfolio/index.astro` | Portfolio — Zach Beauvais Photography | The complete portfolio of Zach Beauvais — collaborative portraits, landscape, and abstract photography from Lafayette, Indiana. | `copydeck/portfolio/index.md` | Live |
| `/portfolio/portraits/` | `src/pages/portfolio/portraits.astro` | Portraits — Zach Beauvais Photography | Collaborative portrait photography by Zach Beauvais — natural, authentic, and deeply personal. Lafayette, Indiana. | `copydeck/portfolio/portraits.md` | Live |
| `/portfolio/landscape/` | `src/pages/portfolio/landscape.astro` | Landscape & Art — Zach Beauvais Photography | Landscape and abstract photography by Zach Beauvais — the observational eye that informs the portrait work. Lafayette, Indiana. | `copydeck/portfolio/landscape.md` | Live |
| `/404` | `src/pages/404.astro` | Page not found — Zach Beauvais Photography | N/A | `copydeck/404.md` | Live (noindex) |

---

## Copydeck files

| File | Status | Notes |
|---|---|---|
| `copydeck/index.md` | Working draft — complete | Includes embedded SEO notes |
| `copydeck/about.md` | Working draft — complete | Includes embedded SEO notes |
| `copydeck/sessions.md` | Working draft — complete | Includes embedded SEO notes |
| `copydeck/how-i-work.md` | Working draft — complete | Includes embedded SEO notes |
| `copydeck/contact.md` | Working draft — complete | Includes embedded SEO notes |
| `copydeck/404.md` | Working draft | noindex — no SEO relevance |
| `copydeck/portfolio/index.md` | Working draft — complete | — |
| `copydeck/portfolio/portraits.md` | Working draft — complete | — |
| `copydeck/portfolio/landscape.md` | Working draft — complete | — |
| `copydeck/index-archive.md` | Archive | Historical — not authoritative |

---

## Components

| Component | Location | Purpose |
|---|---|---|
| `BaseLayout.astro` | `src/layouts/` | HTML shell; title, meta, OG tags, canonical |
| `Header.astro` | `src/components/` | Sticky nav; logo, links, mobile toggle |
| `Footer.astro` | `src/components/` | Site-wide footer |
| `CTABand.astro` | `src/components/sections/` | Reusable CTA; eyebrow, heading, body, primary/secondary CTA props |
| `Testimonials.astro` | `src/components/sections/` | Filler quotes; variants: homepage (4), sessions (2), about (2) |

---

## Templates

| File | Purpose |
|---|---|
| `src/templates/new-page.astro` | Scaffold for new pages |
| `src/templates/new-portfolio-page.astro` | Scaffold for new portfolio pages |

---

## Data

All dynamic content (pricing, images, site config) lives in `src/content/data.ts`.

### Pricing (current)

| Session | Name in data.ts | Price | Duration | Deliverables |
|---|---|---|---|---|
| Essential | Essential Session | $350 | 1 hour | 5 edited portraits |
| Extended | Exploration Session | $750 | 3 hours | 20 edited portraits |
| Travel — Indianapolis | — | +$100 | — | — |
| Travel — Chicago | — | +$200 | — | — |

**Note:** The extended session is named `"Exploration Session"` in `data.ts` but referred to as "Extended Session" throughout the copydeck. See issue log below.

### Site config

- **Domain:** `https://zachbeauvais.com` (in `astro.config.mjs`)
- **Email:** `zach@zachbeauvais.com`
- **Instagram:** `@zach_of_the`
- **Primary location:** Lafayette, Indiana
- **Location detail:** Lafayette, IN and Urbana-Champaign, IL (within 30 miles)
- **Default meta description (BaseLayout fallback):** "Collaborative portrait photography rooted in storytelling and art. Based in Lafayette, Indiana. Available in Indianapolis and Chicago."
- **Default meta description (data.ts):** "Portrait photography in Lafayette, IN and Urbana-Champaign, IL. Collaborative sessions for personal brands and individuals — shaped by street and abstract photography. From $350."

**Note:** These two default descriptions are different. The `BaseLayout.astro` hardcodes its own fallback and does not use `site.defaultDescription` from `data.ts`. See issue log.

---

## Portrait images (data.ts `portraitImages`)

21 images defined. Served from `/portrait/`.

| Index | Filename | Alt text | Notes |
|---|---|---|---|
| 0 | portrait-01.jpg | Portrait — woman with nose ring, direct gaze, natural light | Hero image (homepage) |
| 1 | portrait-02.jpg | Portrait — man with long hair and daisy cap, looking away | — |
| 2 | portrait-3.jpg | Portrait — woman at tall industrial window, looking out | Filename inconsistency: `portrait-3.jpg` not `portrait-03.jpg` |
| 3 | portrait-4.jpg | Portrait — young woman, soft window light, direct gaze | — |
| 4 | portrait-5.jpg | Portrait — woman leaning by window, smiling | — |
| 5 | portrait-6.jpg | Portrait — man in athletic gear, seated relaxed on stone floor | — |
| 6 | portrait-8.jpg | Portrait — man in athletic jacket, industrial window behind him | Skips portrait-7 (see below) |
| 7 | portrait-9.jpg | Portrait — man by window, laughing, looking down | — |
| 8 | portrait-10.jpg | Portrait — person bundled in winter layers, lying in snow | — |
| 9 | portrait-11.jpg | Portrait — woman seated on chair, studio, grey background | — |
| 10 | portrait-12.jpg | Portrait — two people in studio, one seated, one standing | — |
| 11 | portrait-13.jpg | Portrait — woman with purple hair, seated against rough wall | — |
| 12 | portrait-14.jpg | Portrait — woman at industrial window, looking out | — |
| 13 | portrait-15.jpg | Portrait — man in blue jacket, industrial space | — |
| 14 | portrait-16.jpg | Portrait — woman with curly hair, eyes closed, smiling at window | — |
| 15 | portrait-17.jpg | Portrait — two women seated on floor, laughing together | — |
| 16 | portrait-18.jpg | Portrait — woman leaning against concrete pillar, direct gaze | — |
| 17 | portrait-19.jpg | Portrait — man leaning on wooden post, laughing | — |
| 18 | portrait_dancing.jpg | Portrait — dancer with arms wide and one leg raised, dark stage | Used on how-i-work page |
| 19 | baby.jpg | Portrait — child's hands on a ukulele, close crop | — |
| 20 | couple.jpg | Portrait — couple standing together, colour | — |

**Portrait file in folder but NOT in data.ts:** `portrait-7.jpg`

---

## Landscape/abstract images (data.ts `landscapeImages`)

13 images defined.

| Index | Filename | Alt text | Notes |
|---|---|---|---|
| 0 | abstract/abstract-1.jpg | Abstract study — form and tone | Vague alt text |
| 1 | abstract/abstract-2.jpg | Abstract — colour and structure | Vague alt text |
| 2 | abstract/abstract-angles.jpg | Architectural abstraction — angles and light | — |
| 3 | abstract/abstract_close.jpg | Texture study — close abstraction | — |
| 4 | abstract/abstract_portrait.jpg | Abstract study — environment and figure | — |
| 5 | abstract/abstract_snow.jpg | Landscape — winter light | — |
| 6 | nature/flower.jpg | Botanical — nature study | Vague alt text |
| 7 | nature/fawn-lillies-several.jpg | Fawn lilies — nature study | — |
| 8 | nature/hills.jpg | Hills — landscape | Vague alt text |
| 9 | nature/tree-light-vignette.jpg | Tree in light — nature study | — |
| 10 | street/street-light-pool.jpg | Street photography — light and shadow | — |
| 11 | street/cafe-shot.jpg | Street photography — cafe scene | — |
| 12 | film/IMG_0990.JPG | Film photograph — Minolta 35mm | Uppercase extension; also used on about/landscape |

---

## Orphaned & unregistered assets in `portfolio/`

These files exist in the public directory but are not referenced in `data.ts` or any page.

### Unregistered images

| File | Notes |
|---|---|
| `Zach_beauvais_snow.jpg` | Root-level; self-portrait or personal image? |
| `portrait/portrait-7.jpg` | Portrait — exists in folder, absent from data.ts |
| `abstract/abstract-3.jpg` | Not in landscapeImages |
| `abstract/abstract-4.jpg` | Not in landscapeImages |
| `abstract/abstract-5.jpg` | Not in landscapeImages |
| `abstract/abstract-6.jpg` | Not in landscapeImages |
| `nature/autumn-leaves.jpg` | Not registered |
| `nature/beaver.jpg` | Not registered |
| `nature/beech.jpg` | Not registered |
| `nature/boulder-mist.jpg` | Not registered |
| `nature/butterfly.jpg` | Not registered |
| `nature/catterpillar.jpg` | Filename typo (caterpillar); not registered |
| `nature/framed-boughs.jpg` | Not registered |
| `nature/frozen-thistle.jpg` | Not registered |
| `nature/fungus.jpg` | Not registered |
| `nature/leaf-drops.jpg` | Not registered |
| `nature/path-mist.jpg` | Not registered |
| `nature/poppy.jpg` | Not registered |
| `nature/red-tail.jpg` | Not registered |
| `nature/squirrel-tree.jpg` | Not registered |
| `nature/squirrel.jpg` | Not registered |
| `nature/sunflower.jpg` | Not registered |
| `nature/sunset-purple.jpg` | Not registered |
| `nature/sycamore_up.jpg` | Not registered |
| `nature/tree-reflection.jpg` | Not registered |
| `street/street-1.jpg` | Not registered |
| `street/street-2.jpg` | Not registered |
| `street/street-2 copy.jpg` | Duplicate with space in filename |
| `street/street-3.jpg` | Not registered |
| `street/street-3 copy.jpg` | Duplicate with space in filename |
| `street/street-4.jpg` | Not registered |
| `street/street-4 copy.jpg` | Duplicate with space in filename |
| `street/street-5.jpg` | Not registered |
| `street/street-5 copy.jpg` | Duplicate with space in filename |
| `street/street-6.jpg` | Not registered |
| `street/street-6 copy.jpg` | Duplicate with space in filename |
| `street/street-7.jpg` | Not registered |

### Orphaned non-image files

| File | Notes |
|---|---|
| `portrait_2.txt` | Lightroom export warning; should be deleted |
| `artistic/` | Empty directory (only .DS_Store); should be removed |

---

## Navigation structure

```
/ (Home)
├── /portfolio/
│   ├── /portfolio/portraits/
│   └── /portfolio/landscape/
├── /how-i-work/
├── /sessions/
├── /about/
└── /contact/
```

Header CTA: "Book a session" → `/contact/`

---

## Testimonials status

All testimonials on all pages are **filler copy** — no real client quotes exist yet.

| Page | Variant | Quotes shown |
|---|---|---|
| Homepage | homepage | 4 filler quotes |
| Sessions | sessions | 2 filler quotes |
| About | about | 2 filler quotes |

Real quotes needed before launch. Brief: ask clients for something specific — what surprised them, what they expected vs. got.

---

## Issue log

Quick-reference for content inconsistencies found during inventory.

| # | Issue | Location | Priority |
|---|---|---|---|
| I-1 | Extended session named "Exploration Session" in data.ts but "Extended Session" in copydeck. Button renders as "Book the exploration session" on sessions page. | `data.ts` / `copydeck/sessions.md` | Medium |
| I-2 | BaseLayout fallback description doesn't match `data.ts` `site.defaultDescription` | `BaseLayout.astro` L16 | Medium |
| I-3 | OG default image path is `/portrait-01.jpg` — file is actually at `/portrait/portrait-01.jpg` | `BaseLayout.astro` L10 | High |
| I-4 | `portrait-7.jpg` exists in folder, absent from data.ts | `portfolio/portrait/` | Low |
| I-5 | `portrait_2.txt` (Lightroom export artefact) in production public directory | `portfolio/portrait_2.txt` | Low |
| I-6 | Street folder contains `*copy.jpg` duplicates and 5 unregistered numbered files | `portfolio/street/` | Low |
| I-7 | Portrait filename convention is inconsistent: portrait-01, portrait-02, then portrait-3 onward | `portfolio/portrait/` | Low |
| I-8 | All testimonials are filler | `Testimonials.astro` | High |
| I-9 | Contact page availability hardcoded: "Currently booking May & June sessions" — needs manual update monthly | `contact.astro` L118 | Medium |
| I-10 | 4 contact page portrait images have alt text "Portrait session" — generic placeholders | `contact.astro` L177-180 | Low |
