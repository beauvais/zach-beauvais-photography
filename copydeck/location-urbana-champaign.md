# Location Landing Page — Urbana-Champaign, Illinois
> **Status:** Draft — for review before building

---

## META

**Page title:** `Portrait Photographer in Urbana-Champaign, Illinois`

**Meta description:**
```
Portrait photography in Urbana-Champaign — from $350. Collaborative sessions for UIUC faculty, students, families, and small businesses. Not the cornfield-at-dusk kind.
```

**Slug:** `/urbana-champaign/` (or `/locations/urbana-champaign/`)

**Primary keywords (appear naturally in copy):**
Urbana, Champaign, Urbana-Champaign, Illinois, UIUC, Illini, Eastern Illinois, Midwest, portrait photographer, portrait photography, photography service

---

## PAGE HEADER

**Eyebrow:** `Portrait photographer`
**H1:** `Urbana-Champaign, Illinois.`
**Lead:**
```
Portrait photography for the Urbana-Champaign area — UIUC faculty and students,
families, small businesses, and anyone who wants something more considered than
the usual Illinois photography fare.
```

> **Notes:** H1 period intentional. "More considered than the usual Illinois photography fare" does a light version of the cornfield differentiator without spelling it out — the page doesn't need to repeat how-i-work.astro verbatim, just echo the positioning. Adjust if it feels too vague.

---

## SECTION: THE APPROACH

**No eyebrow — runs directly under the header.**

```
I'm based across both Urbana-Champaign and Lafayette, Indiana, so I know what
"portrait photographer in the Midwest" can mean: open fields, golden light,
soft focus. It's a perfectly good genre. It's just not what I do.

What I do starts before the camera comes out. A portrait should have a reason —
not a brief necessarily, but a sense of what it's for and who it's of. We work
that out together, then work with location and light to explore it.
```

> **Notes:** "Champaign-Urbana" (the informal reversed form) gets a natural appearance in the last paragraph. "I'm based across both Urbana-Champaign and Lafayette" establishes dual-location legitimacy — important for SEO and for users who want a local photographer. The middle paragraph echoes the faculty-page FAQ answer, which is strong territory for this audience.

---

## SECTION: WHO THIS IS FOR

**Eyebrow:** `Good for`
**H2:** `UIUC faculty, Illini, and the rest of Urbana-Champaign`

```
University towns produce a particular kind of portrait need: researchers who need
something for their academic profile, students with a portfolio to build or a
milestone to mark, faculty who've put off getting a proper portrait for years.

Outside the university: Urbana and Champaign have families, small businesses, and
individuals who want portraits made with some care. Same work, same approach.
```

> **Notes:** H2 hits UIUC, Illini, Urbana, and Champaign in one shot. The last paragraph ensures non-university visitors don't feel like an afterthought. "Same work, same approach" mirrors the Lafayette page — fine, they're for different audiences.

---

## SECTION: SESSIONS

**Eyebrow:** `Sessions & Pricing`
**H2:** `Two sessions. Editing always included.`
**Lead (short):**
```
Sessions in Urbana-Champaign and within 30 miles are at standard rates.
No travel fee.
```

> **Notes:** Mirrors the Lafayette page structure. "No travel fee" is a practical local hook.

### Card: Essential Session

**Name:** `Essential Session`
**Price:** `$350`
**Details:**
- One hour at a single location
- 5 professionally edited portraits
- High-resolution digital delivery
- All editing included

**Description:**
```
One hour, one location, five properly edited portraits. Right for professional profiles,
personal brand work, milestones, or gifts.
```

**CTA:** `Book the essential session`

---

### Card: Exploration Session

**Name:** `Exploration Session`
**Price:** `$750`
**Details:**
- Three hours at a single location
- 20 professionally edited portraits
- High-resolution digital delivery
- All editing included

**Description:**
```
Three hours, one location, twenty edited portraits. More time means the session
can find what it needs to — right for couples, families, or anything that
needs to be worked out rather than executed.
```

**CTA:** `Book the exploration session`

---

### Bespoke note (below cards)

```
Need something bigger — multiple locations, ongoing brand work, a larger selection?
Get in touch and we'll figure out the right scope.
```

---

## SECTION: CTA

**Eyebrow:** `Based in Urbana-Champaign`
**H2:** `Get in touch`
**Body:**
```
Tell me what you're after — what the portraits are for, what kind of images you want,
what you're unsure about. We'll figure out the rest.
```

**Primary CTA:** `Get in touch`
**Secondary CTA:** `See sessions & pricing`

> **Notes:** "Based in Urbana-Champaign" in the eyebrow is the local SEO anchor. Body tone matches contact page — invitation not transaction.

---

## SEO NOTES

**Target keywords appearing naturally:**

- `portrait photographer Urbana-Champaign` — header, meta, eyebrow
- `portrait photography Urbana Illinois` — lead
- `UIUC portrait photographer` — "who this is for"
- `Illini` — H2
- `Champaign photographer` — approach section (Champaign-Urbana named in first paragraph)
- `Eastern Illinois photographer` — not explicit; approach section's geographic framing covers it
- `Midwest photography service` — approach section ("portrait photographer in the Midwest")
- `academic portrait photography` — "who this is for" (faculty profile, academic profile)

**Consider adding:**
One explicit mention of "Eastern Illinois" if geographic search coverage is a priority — something like "...across Eastern Illinois" in the approach section. Currently it's implied but not verbatim.

**Structured data to add when building:**
`LocalBusiness` JSON-LD with:
- `addressLocality: "Urbana-Champaign"`
- `addressRegion: "IL"`
- `areaServed: ["Urbana", "Champaign", "Urbana-Champaign", "Eastern Illinois"]`
- `priceRange: "$350–$750"`

---

## COMPONENT NOTES (for build phase)

- Use `CTABand.astro` for the CTA section
- Session cards: reuse sessions page card markup or build a stripped-down version
- No testimonials needed — keeps the page focused
- Page header matches `how-i-work.astro` pattern (eyebrow + H1 + lead)
- If adding a photo: `portraitImages[9]` (woman-chair-studio) or `portraitImages[10]` (two-people-studio) — both work well for the academic/professional register this audience skews toward
