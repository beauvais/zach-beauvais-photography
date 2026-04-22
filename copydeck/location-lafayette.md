# Location Landing Page — Lafayette & West Lafayette, Indiana
> **Status:** Draft — for review before building

---

## META

**Page title:** `Portrait Photographer in Lafayette & West Lafayette, Indiana`

**Meta description:**
```
Portrait photography in Lafayette and West Lafayette, Central Indiana — from $350. Collaborative sessions for Purdue students, faculty, families, and anyone not interested into cornfield-at-sunset photos.
```

**Slug:** `/lafayette/` (or `/locations/lafayette/`)

**Primary keywords (appear naturally in copy):**
Lafayette, West Lafayette, Indiana, Midwest, Purdue, Boilermaker, Hoosier, portrait photographer, portrait photography, photography service, Central Indiana, Northern Indiana

---

## PAGE HEADER

**Eyebrow:** `Portrait photographer`
**H1:** `Lafayette & West Lafayette, Indiana.`
**Lead:**
```
Collaborative portrait photography for people in Lafayette, West Lafayette, and the wider
Purdue community — from personal brand work to family portraits to sessions that are just
for you.
```

> **Notes:** H1 period is intentional. Lead hits the primary location keywords immediately without straining for them. "Wider Purdue community" does useful work — captures students, faculty, staff, and locals without listing them all.

---

## SECTION: THE APPROACH

**No eyebrow needed here — runs directly under the header.**

```
Indiana has a particular kind of portrait photographer. Golden hour, open fields,
soft focus — beautiful work, and a lot of people do it well. I'm not that photographer.

A session with me starts with a conversation
about what you're actually after — what the photos are for, what you want them to say,
what kind of person you want to look like in them. Then we find a location that fits,
and we work from there.

The Midwest has good light and nature. It also has concrete, brick, and industrial space
that nobody thinks to photograph in. I like both.
```

> **Notes:** The cornfield line fits here — it's not lifted verbatim from how-i-work.astro, it's a location-specific riff on the same idea. The third paragraph grounds it locally ("The Midwest has good light") and differentiates without being precious about it.
>
> Don't italicise or call out "I'm not that photographer" — it reads better plain. It's already punchy.

---

## SECTION: WHO THIS IS FOR

**Eyebrow:** `Good for`
**H2:** `Boilermakers, Hoosiers, and everyone else`

```
I work with people building a brand or
professional presence (think social media, linkedin, personal website), families or couples who want portraits that feel like them rather
than like a template, and people who just want to see what a proper portrait session
produces when there's no agenda.

If you're at Purdue — student, faculty, researcher, or staff — I've made a lot of
portraits for people who need something better than a faculty page headshot.

Outside the university: Lafayette and West Lafayette have families, small businesses,
and individuals who want portraits made with some care.
```

> **Notes:** "Boilermakers, Hoosiers" in the H2 hits two strong regional keywords without it reading like a keywords list. The Purdue-specific paragraph mirrors the FAQ answer about academics but gives it location weight.

---

## SECTION: SESSIONS

**Eyebrow:** `Sessions & Pricing`
**H2:** `Two sessions. Editing always included.`
**Lead (short):**
```
Standard rates apply for Lafayette, West Lafayette, and anywhere within 30 miles.
No travel fee.
```

> **Notes:** "No travel fee" is a local-page-specific thing that earns its place — it answers a question people have before they ask it.

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
One hour, one location, five edited portraits. Good for professional images, personal
brand work, milestones, or a gift.
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
can find what it needs to — good for couples, families, or anything that
needs to be worked out rather than executed.
```

**CTA:** `Book the exploration session`

---

### Bespoke note (below cards)

```
Need something bigger or different — multiple locations, ongoing brand work, a larger
selection? Get in touch and we'll scope it together.
```

---

## SECTION: FAQ

**Eyebrow:** `Questions`
**H2:** `A few things people ask`

**Q1:** Where do Lafayette and West Lafayette sessions take place?
**A1:** Wherever fits the portrait — the Wabash Heritage Trail, downtown Lafayette, industrial areas near the river, spots around the Purdue campus. We talk it through first, then I'll suggest locations based on what you're after.

**Q2:** Is parking straightforward in Lafayette and West Lafayette?
**A2:** Generally yes. Street parking in both downtown Lafayette and the West Lafayette/Purdue area is usually easy to manage. I'll suggest locations with that in mind.

**Q3:** I'm at Purdue — can we do the session on campus?
**A3:** Yes. Purdue has some good architecture and interesting light. I'd suggest working around peak busy periods, but we can sort that out when we're planning.

> FAQ section renders as static question/answer pairs (`.faq-list` / `.faq-item` / `.faq-q` / `.faq-a`). Also drives `FAQPage` JSON-LD schema (combined with LocalBusiness in a JSON array on the `schema` prop).

---

## SECTION: CTA

**Eyebrow:** `Based in Lafayette`
**H2:** `Get in touch`
**Body:**
```
Let's talk about what you're thinking — what the photos are for, what you want them to do,
what you're unsure about. We'll figure out the rest from there.
```

**Primary CTA:** `Get in touch`
**Secondary CTA:** `See sessions & pricing`

> **Notes:** "Based in Lafayette" in the eyebrow is a small local SEO nudge. CTA body mirrors the contact page tone — invitation, not pitch.

---

## SEO NOTES

**Target keywords appearing naturally:**

- `portrait photographer Lafayette Indiana` — header, meta
- `portrait photography West Lafayette` — lead, approach section
- `Purdue portrait photographer` — "who this is for" section
- `Boilermaker` / `Hoosier` — H2
- `Central Indiana` / `Northern Indiana` — not explicitly in body, consider adding one line in approach or CTA
- `Midwest photographer` — approach section ("The Midwest has good light")
- `photography service Indiana` — sessions section via "Standard rates apply"

**To add Central/Northern Indiana coverage:**
Consider adding one line to the approach section, e.g.: "I'm based in Lafayette — Central Indiana — and work regularly across the area." Clean, geographic, not forced.

**Structured data to add when building:**
`LocalBusiness` JSON-LD with:
- `addressLocality: "Lafayette"`
- `addressRegion: "IN"`
- `areaServed: ["Lafayette", "West Lafayette", "Central Indiana"]`
- `priceRange: "$350–$750"`

---

## COMPONENT NOTES (for build phase)

- Use `CTABand.astro` for the CTA section
- Session cards: reuse sessions page card markup or build a stripped-down version
- No testimonials section needed on this page — keeps it focused
- Page header matches pattern in `how-i-work.astro` (eyebrow + H1 + lead)
- If adding a photo: `portraitImages[3]` (woman-softlight) or `portraitImages[14]` (woman-curly-window) — both work well as ambient portrait examples at natural light
