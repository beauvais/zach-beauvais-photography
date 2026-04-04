# SEO Audit & Recommendations
**Zach Beauvais Photography — zachbeauvais.com**
Audit date: April 2026

A note on approach: every recommendation here is assessed against the voice reference first. SEO that turns the copy into keyword stuffing is worse than no SEO. Where there's tension, the voice wins — but most of the gaps below don't require any copy changes at all.

---

## Summary: what's working

Before the problems. The foundations are solid.

- Canonical URLs are generated correctly from `Astro.url.pathname`
- Open Graph tags are implemented (title, description, type, url, image) on every page
- `noindex` is correctly applied to the 404 page and nothing else
- Title tag pattern is consistent and readable: `[Page] — Zach Beauvais Photography`
- Homepage title breaks the pattern correctly: `Zach Beauvais — Portrait Photography, Lafayette Indiana` — location in the title tag is right
- Core keywords appear naturally and early in the copy — no stuffing, no contortion
- Location signals (Lafayette, Urbana-Champaign, Indianapolis, Chicago) are present across multiple pages
- Heading hierarchy is clean: one H1 per page, logical H2/H3/H4/H5/H6 descent
- Internal linking is present and purposeful
- Images have `loading="eager"` on the hero and `loading="lazy"` elsewhere
- `trailingSlash: 'ignore'` + canonical URLs prevents most duplicate content risk

---

## Critical issues (fix before launch)

### C-1 — No sitemap.xml

**What's missing:** There is no sitemap. Astro doesn't generate one automatically. Without `@astrojs/sitemap`, Google and other crawlers have to discover all pages through link crawl alone — which works, but slows indexing and gives you no control over crawl priority.

**Fix:** Add `@astrojs/sitemap` to the project and configure it in `astro.config.mjs`. This requires no copy changes.

```
npm install @astrojs/sitemap
```

Then in `astro.config.mjs`:
```js
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  integrations: [sitemap()],
  site: 'https://zachbeauvais.com',
  // ...
});
```

Exclude: nothing. All 8 indexed pages should be included.

---

### C-2 — Default OG image path is broken

**What's wrong:** `BaseLayout.astro` sets the fallback OG image to `/portrait-01.jpg`. The file is actually served at `/portrait/portrait-01.jpg` (because `publicDir: 'portfolio'` maps the `portfolio/portrait/` subdirectory to `/portrait/` at runtime). Any page that doesn't explicitly pass `ogImage` will generate a broken OG image tag — meaning social shares will have no preview image.

**Fix:** Change the default in `BaseLayout.astro`:
```js
// Change:
ogImage = '/portrait-01.jpg',
// To:
ogImage = '/portrait/portrait-01.jpg',
```

---

### C-3 — No Schema.org structured data

**What's missing:** There is no JSON-LD on any page. For a local photographer, the two most valuable schema types are `LocalBusiness` (or `ProfessionalService`) and `FAQPage`.

**Why it matters:** Structured data doesn't directly improve rankings but enables rich results — FAQ accordions in search results, knowledge panel data, and better entity recognition. For a local business, `LocalBusiness` schema gives Google clear NAP data (name, address/area, contact) which feeds into local pack rankings.

**Fix — LocalBusiness on homepage:**
Add a `<script type="application/ld+json">` block to `index.astro` (or to `BaseLayout.astro` conditionally). Suggested schema:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Zach Beauvais Photography",
  "description": "Collaborative portrait photography in Lafayette, IN and Urbana-Champaign, IL. Sessions from $350.",
  "url": "https://zachbeauvais.com",
  "email": "zach@zachbeauvais.com",
  "image": "https://zachbeauvais.com/portrait/portrait-01.jpg",
  "areaServed": [
    { "@type": "City", "name": "Lafayette", "containedInPlace": { "@type": "State", "name": "Indiana" } },
    { "@type": "City", "name": "West Lafayette", "containedInPlace": { "@type": "State", "name": "Indiana" } },
    { "@type": "City", "name": "Urbana-Champaign", "containedInPlace": { "@type": "State", "name": "Illinois" } },
    { "@type": "City", "name": "Indianapolis", "containedInPlace": { "@type": "State", "name": "Indiana" } },
    { "@type": "City", "name": "Chicago", "containedInPlace": { "@type": "State", "name": "Illinois" } }
  ],
  "priceRange": "$350–$750",
  "sameAs": ["https://instagram.com/zach_of_the"]
}
```

**Fix — FAQPage on sessions page:**
The existing FAQ is implemented as `<details>`/`<summary>` — good for UX, but Google can't extract FAQ rich results from it without schema. Add a `FAQPage` JSON-LD block to `sessions.astro` using the exact Q&A text already in the page. Seven questions are already there; this is copy-paste work.

---

### C-4 — No robots.txt

**What's missing:** There's no `robots.txt`. Most crawlers default to allowing everything if the file is absent, so this isn't blocking anything. But it's a gap, and some crawlers are aggressive.

**Fix:** Add a `robots.txt` to the `portfolio/` directory (the `publicDir`) so it's served at the root:

```
User-agent: *
Allow: /
Sitemap: https://zachbeauvais.com/sitemap-index.xml
```

---

## High priority issues

### H-1 — BaseLayout fallback description is weaker than data.ts version

**What's wrong:** Two different default descriptions exist. `BaseLayout.astro` hardcodes: "Collaborative portrait photography rooted in storytelling and art. Based in Lafayette, Indiana. Available in Indianapolis and Chicago." — this is the one that renders on any page that doesn't pass an explicit description.

`data.ts` `site.defaultDescription` is: "Portrait photography in Lafayette, IN and Urbana-Champaign, IL. Collaborative sessions for personal brands and individuals — shaped by street and abstract photography. From $350."

The data.ts version is better: shorter, includes pricing signal, covers both locations, is less vague. The BaseLayout version is also never used — every page in the site passes its own description, so this fallback only matters for future pages that forget to set one. But it should be fixed before those pages exist.

**Fix:** In `BaseLayout.astro`, import `site` from `data.ts` and use `site.defaultDescription` as the fallback. This keeps description management in one place.

---

### H-2 — Portrait portfolio meta description omits Urbana-Champaign

**What's wrong:** The highest-priority page for bookings (`/portfolio/portraits/`) has: "Collaborative portrait photography by Zach Beauvais — natural, authentic, and deeply personal. Lafayette, Indiana."

It doesn't mention Urbana-Champaign. "Portrait photographer Urbana-Champaign" is as commercially valuable as the Lafayette version. The copydeck itself notes this.

**Recommended fix (respects voice — doesn't change any on-page copy):**
```
Collaborative portrait photography by Zach Beauvais. Lafayette, Indiana and Urbana-Champaign, Illinois — collaborative, personal, and shaped by a background in nature photography. Sessions from $350.
```

This hits both cities, adds price signal, and nothing in it would feel unnatural in Zach's voice.

---

### H-3 — Contact page meta description has no location

**What's wrong:** "Book a portrait session with Zach Beauvais. Get in touch to discuss your project, ask questions, or reserve your date."

This page is not a primary search landing page, but location in the description adds local relevance signals. Someone who searches "portrait photographer Lafayette" and sees the contact page listed should see the location confirmed.

**Recommended fix:**
```
Book a portrait session with Zach Beauvais — Lafayette, IN and Urbana-Champaign, IL. Get in touch to discuss your brief, ask questions, or reserve a date.
```

---

### H-4 — Sessions meta description surfaces the session name, not the outcome

**What's wrong:** Meta is generated as: "Portrait sessions from $350. Essential Session or Exploration Session, with professional editing included."

"Exploration Session" is a brand name that nobody searches for. The price and the editing inclusion are the high-value signals. The description should lead with what it does for the visitor, not the internal name.

**Recommended fix (would require a hardcoded description or a change to how it's generated):**
```
Portrait sessions in Lafayette, IN from $350. Collaborative, edited, and delivered — two formats or something bespoke. No surprises.
```

The voice is close enough. "No surprises" echoes the homepage pricing section ("Two options. No surprises.") and does real work in a meta description where anxiety about hidden costs is common.

---

### H-5 — No Twitter/X Card meta tags

**What's wrong:** Open Graph is implemented but there are no `twitter:card`, `twitter:title`, or `twitter:description` tags. Without these, Twitter/X will either not show a card or show a degraded one.

**Fix:** Add to `BaseLayout.astro` head:
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={fullTitle} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={new URL(ogImage, Astro.site)} />
```

---

## Medium priority issues

### M-1 — "West Lafayette, IN" is underrepresented

**What's wrong:** West Lafayette (Purdue University) is a distinct city from Lafayette, with distinct search behaviour. A graduating student, a faculty member, a Purdue-affiliated brand looking for a photographer will more often search "portrait photographer West Lafayette" than "portrait photographer Lafayette."

The contact form location dropdown includes "Lafayette / West Lafayette, IN" — good. But no page body copy mentions West Lafayette, and none of the meta descriptions or H1s include it.

**What not to do:** Don't add it to the hero or H1s — the copy is clean and cramming in "West Lafayette" would break it.

**What to consider:**
- Adding "West Lafayette" alongside Lafayette in the sessions page travel section where location is already listed
- A single mention in the about page bio: "I'm based in Lafayette and West Lafayette, Indiana, and Urbana-Champaign, Illinois." (or a brief note in the location card on the about page)
- Ensuring the LocalBusiness schema (C-3) includes West Lafayette as a served city

These are copy decisions, not just technical ones. The voice can carry a brief mention without it reading as an SEO insert.

---

### M-2 — University audiences are not addressed

**What's wrong:** Purdue (West Lafayette) and U of I (Urbana-Champaign) are two large universities nearby. Graduation portraits, milestone photography, faculty professional portraits — these are recurring, high-intent searches around commencement season.

None of the current copy explicitly addresses students or graduation contexts. The sessions FAQ has one mention ("Yes. I'm happy to work around events — engagements, birthdays, graduations") and the gift note mentions "milestone birthdays, graduations" — but these are asides.

**What not to do:** Don't add a "Graduation Portraits" section or page that sounds like every other photographer's graduation page. That's the opposite of the voice.

**What to consider:**
- If seasonal demand is real, a targeted landing page for spring might earn its keep — something like `/portraits/graduation/` or `/portraits/milestone/`. The voice can handle this without sounding like a graduation-photo factory — in fact, the "I'm not one of those" framing from how-i-work.astro applies directly.
- At minimum, "graduations" could be mentioned once in the sessions page "what's included" section where milestones are already relevant.

This is an opportunity, not a critical gap. Worth evaluating based on actual enquiry patterns.

---

### M-3 — No FAQ schema (rich results opportunity)

**What's present:** Seven well-written FAQ items in `sessions.astro`, implemented as `<details>`/`<summary>`.

**What's missing:** `FAQPage` JSON-LD. Without it, Google can't surface these as expandable rich results in SERPs.

**Why this matters:** FAQ rich results take up significantly more screen real estate than a standard listing — a real advantage for a lower-authority site competing against established photographers and directories like Thumbtack or Bark.

**Fix:** Add a `FAQPage` JSON-LD block to `sessions.astro`. The questions and answers are already there — it's copy-paste into schema format. Estimated effort: 30 minutes.

Example (first item only):
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do I need to have photography experience?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not at all. Most people feel a little awkward in front of a camera — that's completely normal, and part of my job is helping you get past it. We'll take our time, and by the end of the session you'll have forgotten the camera is there."
      }
    }
  ]
}
```

---

### M-4 — Image `width` and `height` attributes are missing

**What's wrong:** Almost no `<img>` tags specify explicit `width` and `height`. This causes Cumulative Layout Shift (CLS) — the browser doesn't know how much space to reserve for the image before it loads, so the layout jumps. CLS is a Core Web Vitals metric and a direct ranking factor.

The CSS handles aspect ratios via `aspect-ratio:` on containers, which partially mitigates this — but it's not equivalent to specifying dimensions on the `<img>` itself.

**Fix:** For each image, add `width` and `height` attributes matching the source file's intrinsic dimensions. This doesn't mean the image displays at those dimensions — CSS still controls layout — but it gives the browser the information to calculate space before load. Estimated effort: medium; requires knowing image dimensions.

---

### M-5 — No image format optimization (WebP/AVIF)

**What's wrong:** All portfolio images are served as JPEG. Modern formats (WebP, AVIF) offer 25–50% smaller file sizes at equivalent quality, which improves page load speed — another ranking factor.

**Fix options:**
- Use Astro's built-in `<Image>` component from `astro:assets` for optimized image delivery with format conversion, resizing, and automatic `srcset`
- Or convert source images to WebP and update `data.ts` references

Note: switching to `astro:assets` would require moving images from `portfolio/` (the publicDir) into `src/assets/` or another assets directory, which is a structural change.

---

### M-6 — The `how-i-work/` URL slug has some keyword tradeoff

**Already noted in the copydeck.** `/how-i-work/` is a navigation-clarity choice; `/approach/` or `/my-approach/` would carry marginally more keyword weight. This is genuinely low-stakes and the copydeck is right to call it "not urgent." Flagged here for completeness.

---

### M-7 — Session name inconsistency

**What's wrong:** The extended session is called "Exploration Session" in `data.ts` but "Extended Session" in the copydeck and in some CTA text. On the sessions page, the book button renders dynamically as "Book the exploration session" — which is an unusual phrase that nobody will search for.

This is a brand consistency issue as much as an SEO one. Pick one name and use it everywhere.

**Recommendation:** "Exploration Session" is more interesting and distinct — but it needs to be consistent across copydeck, button text, and any future references. If you keep "Exploration Session," update the copydeck. If you change to "Extended Session," update data.ts.

---

## Lower priority / ongoing

### L-1 — Alt text quality is uneven

Good alt text is specific, descriptive, and occasionally includes location where honest. Current quality varies.

**Examples of acceptable current alt text:**
- `Portrait — woman with nose ring, direct gaze, natural light` — specific
- `Portrait — dancer with arms wide and one leg raised, dark stage` — vivid

**Examples that could be improved:**
- `Abstract study — form and tone` — no detail
- `Botanical — nature study` — generic
- `Hills — landscape` — barely descriptive
- `Portrait session` (×4, on contact page) — meaningless placeholder

**Priority order for improvement:**
1. Contact page portrait images — replace "Portrait session" with something real
2. Landscape alt texts — add location or subject where known
3. Portrait alt texts — optionally add location for key images (e.g., "Portrait session, Lafayette IN — natural light")

**Note:** Alt text matters for accessibility first, SEO second. Improving it helps both. But don't overload — "Portrait of woman with nose ring in Lafayette Indiana during collaborative session" is worse than "Portrait — woman with nose ring, direct gaze."

---

### L-2 — Emoji favicon is a placeholder

The current favicon is an inline SVG emoji (📷). It works but: renders poorly at small sizes, looks unprofessional at 16×16 in a browser tab, and won't generate proper PWA icons or Apple touch icons.

**Recommendation:** Replace with a proper SVG or PNG favicon before any significant traffic arrives. Even a simple ZB monogram (which already exists in the header as the logo) would be a step up.

---

### L-3 — No blog or editorial content

**What's missing:** There's no journal, blog, or any long-form editorial content. This means the site can't capture long-tail searches like:
- "what to wear for a portrait session"
- "best locations for portraits in Lafayette Indiana"
- "collaborative portrait photography vs traditional"
- "how long does a portrait session take"

These are searches people do before they know who they're hiring. A photographer with good editorial content captures that audience; one without it doesn't.

**This is a strategic choice, not just a gap.** Editorial content takes significant ongoing investment. If Zach's enquiry volume is healthy through direct referral and social, this may not be the right use of time. But if organic search traffic is a priority growth channel, a journal is the lever.

**If pursued:** The voice in the voice-and-tone reference is already perfect for this. The posts don't need to be "10 tips for your portrait session" listicles — they can be short, specific, anecdotal essays about what actually happens in a session. That would be both authentic and distinctive.

---

### L-4 — No conversion tracking

**What's wrong:** The contact form uses `mailto:` — it opens the user's email client rather than submitting to a server. This means there's no way to track form submissions or tie sessions booked to traffic sources.

**Consequence:** You can't tell whether any SEO improvement leads to more enquiries. The data exists nowhere.

**Options:**
- Add a backend form handler (Netlify Forms, Formspree, etc.) with a redirect to a `/thank-you/` page — that page load becomes the trackable conversion event
- Or add a click event listener on the submit button that fires a GA4 event before the mailto opens

Either way, some kind of analytics (Google Analytics 4 or a privacy-friendly alternative like Plausible) needs to be on the site first.

---

### L-5 — Orphaned files in production public directory

**What's wrong:** Several files and directories in `portfolio/` (the publicDir, served at root) are unintentional production assets:

- `portrait_2.txt` — contains a Lightroom export warning. Not linked from anywhere, but publicly accessible at `/portrait_2.txt`.
- `artistic/` — empty directory.
- `street/street-*copy.jpg` — duplicate files from a Lightroom export, publicly accessible.
- `Zach_beauvais_snow.jpg` — appears to be a personal image. Not linked from anywhere.

None of these affect rankings, but they're unintended exposure and build noise.

---

## Keyword map

Primary targets and where they currently appear on the site.

| Keyword | Priority | Current coverage | Gap |
|---|---|---|---|
| portrait photographer Lafayette Indiana | High | Title, meta, body (index, about, sessions, portraits) | Strong — no gap |
| portrait photographer Lafayette IN | High | Meta (index, sessions), body | Good |
| portrait photographer Urbana-Champaign | High | Meta (index, about, how-i-work), body | Present but thinner than Lafayette |
| portrait photographer West Lafayette | Medium | Contact form dropdown only | Missing from meta and body |
| portrait photographer Indianapolis | Medium | Travel section, meta (sessions) | Adequate for secondary market |
| portrait photographer Chicago | Medium | Travel section, meta | Adequate for secondary market |
| collaborative portrait photography | Medium | Index meta, body (portraits, how-i-work) | Good — distinctive term |
| brand photography Lafayette | Low-medium | FAQ, session dropdown | Present; not a primary pitch |
| family photographer Lafayette | Low-medium | How-i-work body ("families") | Light; not a primary term |
| graduation portrait Lafayette | Low | FAQ mention only | Opportunity if seasonal demand exists |
| personal brand photography | Low-medium | Hero subhead, how-i-work | Present |
| portrait session cost Lafayette | Low | Pricing on homepage and sessions | Indirect — price is there, not the phrase |

---

## Prioritised action list

Roughly in order of impact vs effort.

| # | Action | Effort | Impact |
|---|---|---|---|
| 1 | Add `@astrojs/sitemap` and generate `sitemap.xml` | Low | High |
| 2 | Fix broken OG image default path in `BaseLayout.astro` | Low | High (social shares) |
| 3 | Add `robots.txt` to `portfolio/` | Low | Low-medium |
| 4 | Add Twitter/X card meta tags to `BaseLayout.astro` | Low | Medium |
| 5 | Reconcile BaseLayout fallback description with `data.ts` | Low | Low-medium |
| 6 | Update portraits portfolio meta description to include Urbana-Champaign | Low | High |
| 7 | Update contact page meta description to include location | Low | Low-medium |
| 8 | Update sessions meta description to remove session name, add location | Low | Medium |
| 9 | Add `LocalBusiness` JSON-LD to homepage | Medium | High (local search) |
| 10 | Add `FAQPage` JSON-LD to sessions page | Medium | Medium (rich results) |
| 11 | Resolve session name inconsistency (Exploration vs Extended) | Low | Medium (brand clarity) |
| 12 | Replace emoji favicon with SVG/PNG | Low-medium | Low-medium |
| 13 | Add `width` and `height` to all `<img>` tags | Medium | Medium (CWV/CLS) |
| 14 | Add "West Lafayette" to about or sessions page body | Low | Medium (local) |
| 15 | Improve contact page portrait alt texts | Low | Low |
| 16 | Clean up orphaned files in `portfolio/` | Low | Low |
| 17 | Decide on editorial content strategy | Strategic | High (if pursued) |
| 18 | Add conversion tracking (analytics + form handler or GA4 events) | Medium-high | High (measurement) |
| 19 | Migrate images to `astro:assets` for WebP/format optimization | High | Medium |
| 20 | Consider seasonal landing page for graduation/milestone portraits | Medium | Medium (seasonal) |
