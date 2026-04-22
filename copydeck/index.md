# Homepage Copydeck — index.astro
> **Status:** Working draft
> Full version history in `index-archive.md`

---

## EYEBROW
```
Lafayette, IN · Urbana-Champaign, IL
```

---

## HERO HEADLINE
```
Portrait photography
made with you, not for you.
```

---

## HERO SUBHEAD
```
I work with you to make something genuinely yours. My portrait photography
is informed by nature, street, and abstract photography — it's more about creating
than recording. Personality over presentation.

Lafayette, IN · Urbana-Champaign, IL · Sessions from $350.
```

---

## HERO CTAs
```
Primary:  See how it works
Secondary: See some work
```

> **Standing rule — no "view" as a verb in buttons or links, anywhere on the site.** Use see, browse, explore, find, read.

---

## SECTION: PHOTO STRIP

No editable copy — 5 portrait images in an asymmetric grid. Configured via `stripImages` in the page frontmatter:

```
Indices used: 9, 10, 14, 12, 13 from portraitImages (data.ts)
Centre slot (index 2 in strip) uses strip-featured class — renders slightly wider.
```

> **Notes:** To change which images appear, update the `stripImages` array indices at the top of `index.astro`. No copy to maintain here — just image selection.

---

## SECTION: APPROACH
**Eyebrow:** `How I work`
**Heading:** `Collaboration over direction`

```
Traditional portrait sessions are directed. You're told where to stand,
how to angle your chin, when to smile. And?

The results look like portrait sessions.

I come from nature, street, and abstract photography — work built through
patience and attention rather than control. In a session, we're co-creating;
I'm not directing. We talk before the camera comes out. We find a
location that means something. We're making art shaped by your personality,
not shaping your image to match a portrait ideal.

I also bring twenty years in marketing and brand content strategy — so when
a portrait needs to do a job, I think about what it needs to say, not just
whether it looks nice.
```

---

## SECTION: PORTRAIT GALLERY

No editable copy — 9 portrait images in a 3-column masonry layout. Configured via `galleryImages` (slice 1–10 from `portraitImages`).

Below the gallery, two navigation links:
```
All portrait work →  (btn-outline → /portfolio/portraits/)
Landscape & abstract work  (btn-ghost → /portfolio/landscape/)
```

> **Notes:** No heading over this section — images lead. To swap which portraits appear, reorder `portraitImages` in `data.ts`.

---

## SECTION: PRICING
**Eyebrow:** `Sessions & pricing`
**Heading:** `Two options. No surprises.`

```
Editing is included. Delivery is included. The price you see is what you pay.
```

**Session cards:** *(populated from data.ts)*

**Travel note:**
```
Available in Indianapolis (+$100) and Chicago (+$200).
```

---

## SECTION: TESTIMONIALS
**Eyebrow:** `From clients`
**Heading:** `What people say.`

> **Status:** Filler — replace with real client quotes when available.
> Edit quotes directly in `src/components/sections/Testimonials.astro`.

```
"I had such a great time shooting with Zach. He provided a comfortable environment and we were able to collaborate on the creative process of the photos. Super happy with how the pictures came out!"
— Lydia, Personal session

"Zach really helped me shine. It was comfortable, casual, and professional. He's the kind of photographer I'd want to work with over and over."
— Alex, Non-profit branding session

"Working with Zach was fun and easy. I generally hate photos of myself but i did actually really like a couple of the ones he took of me! And he did help make it a bit less scary by being so nice!!"
— Kitty, Artistic exploration

"Had an awesome experience shooting with Zach and the photos came out amazing!"
— Elle, Personal session
```

**Voice notes for real testimonials:** Ask clients for something specific — what surprised them, what they expected vs. got, what the image does that others haven't. Avoid quotes that could apply to any photographer.

---

## SECTION: CTA BAND
**Eyebrow:** `Get in touch`
**Heading:** `Let's start a conversation`

```
Tell me what you're thinking — the ideas you have, what you want to
explore, what you want to make. Then we can talk.
```

**Primary CTA:** `Get in touch`
**Secondary CTA:** `See sessions & pricing`

---

## SEO NOTES

**Structured data:** `LocalBusiness` JSON-LD is embedded in `index.astro`. Covers Lafayette, West Lafayette, Urbana-Champaign, Indianapolis, and Chicago as served areas. Price range is $350–$750. If pricing or served areas change, update the `localBusinessSchema` object in the frontmatter.

**Terms appearing naturally in this draft:**

- `portrait photography` — hero headline and hero subhead
- `Lafayette, IN` / `Urbana-Champaign, IL` — eyebrow and hero subhead
- `Indianapolis` / `Chicago` — pricing travel note
- `street photography` / `abstract photography` — hero subhead and approach section
- `portrait sessions` — approach section (×2)

> **Note:** Terms like `personal brand`, `professional profiles`, `social media`, `modeling portfolio`, `queer families`, and `blended families` previously appeared in sections that were removed from the homepage. They now live on `how-i-work.astro`. The homepage relies on the approach section and the meta description for keyword coverage.

**Homepage meta description (hardcoded in index.astro):**
```
Portrait photography in Lafayette, IN and Urbana-Champaign, IL.
Collaborative sessions shaped by nature, street, and abstract photography.
Editing included. From $350.
```

**Site-wide fallback (from `site.defaultDescription` in data.ts):**
```
Portrait photography in Lafayette, IN and Urbana-Champaign, IL.
Collaborative sessions for personal brands and individuals —
shaped by street and abstract photography. From $350.
```

> **Note:** The homepage uses a slightly different description from the site default. The homepage version includes "Editing included" (a strong commercial signal) and leads with "nature" alongside street and abstract. Both are valid. The site default is only used as a fallback for pages that don't set their own description.

**No headshots** — confirmed out of scope, not mentioned anywhere.
