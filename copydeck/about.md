# About Page Copydeck — about.astro
> **Status:** Working draft

---

## META

**Page title:** `About`

**Meta description:**
```
Zach Beauvais is a portrait photographer based in Lafayette, IN and Urbana-Champaign, IL. A background in nature and abstract photography shapes an observational, collaborative approach to portrait work.
```

---

## PAGE HEADER

**Eyebrow:** `About`
**H1:** `Zach Beauvais`
**Lead:**
```
Portrait photographer. Based in Lafayette, IN and Urbana-Champaign, IL.
```

---

## SECTION: BIO

**H2:** `From the outdoors in`

```
I learned to shoot on my dad's Minolta — a 35mm film SLR he'd had since before I was born.
I photographed mountains, desert, flowers, wildlife. Things that are entirely themselves
and don't perform for the camera.

I kept taking photos, grateful that I'd learned on film but excited by the flexibility of
digital. I made photos of nature, then explored street photography by finding 
interesting frames and pools of light. At some point, I realised I'd been making
portraits all along – portraits of flowers and hills, trees and occasionally sheep.

Working with people followed naturally. And I bring a background in marketing,
UX, and brand along with the camera — so I can think about what an image
needs to do, not just how it looks.

I'm based in the Lafayette and West Lafayette area of Indiana, and Urbana-Champaign, Illinois.
```

> **Notes:** The four-paragraph bio is doing real work — each paragraph earns its place. Resist the urge to collapse into a single block or add a fifth paragraph about "passion for photography." If it ever needs to grow, grow it from specificity, not generality.

---

## PULL QUOTE

```
"My job isn't to be the chap with a camera, but to make art with and about you"
```

> **Notes:** Strong and attributable to Zach. Keep it. Don't italicise it in the component — the type treatment handles emphasis.

---

## SECTION: ABSTRACT TRIO (image captions)

These appear as alt text / muted caption beneath the three abstract images.

**Caption:**
```
A selection of landscape and abstract work that informs the portraits I make.
```

> **Notes:** The caption does exactly enough. It makes the connection without over-explaining it. Leave it alone unless the images change dramatically.

---

## SECTION: LOCATION & AVAILABILITY

**Eyebrow:** `Location & availability`
**H2:** `Based in Lafayette, IN · Urbana-Champaign, IL`

**Card 1 — Lafayette & Urbana-Champaign:**
```
Sessions within 30 miles at standard pricing — $[essential price] ([hours] hr) or $[extended price] ([hours] hrs).
```

> **Note:** Prices and hours are pulled from `data.ts` — the actual rendered text is e.g. "Sessions within 30 miles at standard pricing — $350 (1 hr) or $750 (3 hrs)."

**Card 2 — Indianapolis:**
```
All sessions available with an additional travel fee per session.
```

**Card 3 — Chicago:**
```
All sessions available with an additional travel fee per session.
```

> **Notes:** Prices are pulled from `data.ts` — don't hardcode them here. The card copy is minimal by design; the pricing detail lives on the sessions page.

---

## SECTION: TESTIMONIALS

`<Testimonials variant="about" />` — same filler quotes as homepage. Edit in `src/components/sections/Testimonials.astro`.

> **Note:** The `variant="about"` prop is passed but the Testimonials component may not currently differentiate by variant — confirm behaviour if you want a different quote subset on the about page vs the homepage.

---

---

## CTA BAND

**Eyebrow:** `Work together`
**Heading:** `Let's start a conversation`
**Body:**
```
Get in touch and we'll figure out what feels right.
```

**Primary CTA:** `Get in touch`
**Secondary CTA:** `See sessions & pricing`

---

## SEO NOTES

**Terms appearing naturally in this draft:**

- `portrait photographer` — lead
- `Lafayette, IN` / `Urbana-Champaign, IL` — lead and location section
- `nature photography` / `abstract photography` / `street photography` — bio
- `marketing` / `brand` — bio (secondary signal, positions business-facing work)
- `Indianapolis` / `Chicago` — location cards

**Pull quote:** not indexed as a header — fine. It's there for conversion, not crawling.
