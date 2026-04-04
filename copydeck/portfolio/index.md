# Portfolio Index Copydeck — portfolio/index.astro
> **Status:** Working draft

---

## META

**Page title:** `Portfolio`

**Meta description:**
```
The complete portfolio of Zach Beauvais — collaborative portraits, landscape,
and abstract photography from Lafayette, Indiana.
```

---

## PAGE HEADER

**Eyebrow:** `Portfolio`
**H1:** `All work`
**Lead:**
```
Portraits, landscape, and abstract — everything in one place.
```

**Navigation tabs:**
```
All  |  Portraits  |  Landscape & Art
```

> **Notes:** The H1 and lead are deliberately spare — the images do the talking on this page. Don't add explanatory copy here that competes with the gallery. The tab navigation uses `btn-primary` styling for the active state — no copy change needed, it's a component choice.

---

## GALLERY

No editable copy — image alt text is pulled from `allImages` in `data.ts`.

> **Note on alt text:** Worth reviewing the image alt text in `data.ts` periodically. Good alt text for portrait images should be descriptive without being sentimental: "Outdoor portrait session, Lafayette IN — natural light" is more useful than "Beautiful portrait of a woman." For landscape work: "Abstract close-up — water texture, Illinois" beats "Nature photo."

---

## CTA BAND

**Eyebrow:** `Work together`
**Heading:** `Like what you see?`
**Body:**
```
Sessions from $350. Let's discuss your portrait.
```

**Primary CTA:** `Book a session`
**Secondary CTA:** `See pricing`

> **Notes:** "Like what you see?" is the most direct CTA heading on the site — appropriate here because the visitor has just looked through the work and made a judgment. It respects that judgment. Don't replace it with something softer like "Ready to work together?" The directness is right for this moment.

---

## SEO NOTES

**Terms appearing naturally:**

- `portrait photography` / `portraits` — meta description and navigation
- `landscape photography` / `abstract photography` — meta description and navigation
- `Lafayette, Indiana` — meta description

**Portfolio index pages are primarily internal navigation hubs.** The SEO value here is secondary to the experience of browsing the work. The subpages (portraits, landscape) carry more specific keyword weight. Don't over-optimise the index page — it will read as stuffed.
