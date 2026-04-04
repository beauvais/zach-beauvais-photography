# Portraits Portfolio Copydeck — portfolio/portraits.astro
> **Status:** Working draft

---

## META

**Page title:** `Portraits`

**Meta description:**
```
Collaborative portrait photography by Zach Beauvais. Lafayette, Indiana and Urbana-Champaign, Illinois — personal, authentic, and shaped by a background in nature photography. Sessions from $350.
```

> **Note:** Updated to cover both markets (was Lafayette-only). Includes price signal. Hits "portrait photography," both locations, and price in under 160 characters.

---

## PAGE HEADER

**Breadcrumb:** `Portfolio / Portraits`
**H1:** `Portraits`
**Lead:**
```
Collaborative, creative portrait work. Each image shaped by a conversation,
a location, and a genuine moment.
```

**Navigation tabs:**
```
All work  |  Portraits (active)  |  Landscape & Art
```

> **Notes:** "A genuine moment" is the right note to end on — it distinguishes the work from directed studio sessions without having to say so explicitly. "Shaped by a conversation" reinforces the pre-session process. Don't over-qualify the lead; it's currently doing exactly enough.

---

## HERO IMAGE GRID

No editable copy — images are first three from `portraitImages` in `data.ts`.

> **Note:** The order of images in `data.ts` determines which portraits appear in the hero grid. Put the three strongest, most representative images at positions 0, 1, and 2 in `portraitImages`. They're shown in a 1.2:1 grid with the first image dominant.

---

## SECTION: APPROACH (intro text)

**H2:** `How I approach portrait work`

```
A portrait session with me starts with a conversation — about what you're looking for,
what setting feels right, what story we're telling. I don't direct sessions so much as
I facilitate them: creating the conditions for something authentic to emerge, then being
ready when it does.

My background in nature and abstract photography means I'm attentive to light and
atmosphere in a way that shapes how I work with people. I'm not looking to impose an
idea on you — I'm looking for the version of you that already exists.
```

**CTAs within section:**
- `Sessions from $350` (btn-outline → links to sessions page)
- `Get in touch` (btn-ghost → links to contact)

> **Notes:** "I'm looking for the version of you that already exists" is a strong close — it's the conceptual pitch in a single sentence. The two-paragraph structure works: first paragraph is process, second paragraph is philosophy. Don't collapse them or swap the order.
>
> **Price in the CTA:** `$350` is hardcoded here, not pulled from `data.ts`. If the essential session price changes, update this manually in the component.

---

## GALLERY

No editable copy — image alt text is pulled from `portraitImages` in `data.ts`.

---

## CTA BAND

**Eyebrow:** `Book a portrait session`
**Heading:** `Your portrait, your story`
**Body:**
```
Sessions from $350 in Lafayette and the surrounding area.
```

**Primary CTA:** `Get in touch`
**Secondary CTA:** `See all sessions`

> **Notes:** "Your portrait, your story" is the most personal CTA heading on the site. It works here because the visitor has just spent time in the portrait gallery — they're in the right headspace to respond to a personal invitation. The specificity ("Lafayette and the surrounding area") grounds the offer geographically without feeling limiting.

---

## SEO NOTES

**Terms appearing naturally:**

- `portrait photography` / `portraits` / `portrait session` — meta, lead, approach text, CTA
- `Lafayette` / `Lafayette, Indiana` — meta description and CTA
- `nature photography` / `abstract photography` — approach text
- `collaborative portrait` — meta description

**This is the highest-priority portfolio page for search.** "Portrait photographer Lafayette Indiana" and "portrait photographer Urbana-Champaign" are the terms most likely to drive bookings. The meta description currently hits Lafayette; consider adding a version test with Urbana-Champaign in the description to see which drives more traffic.
