# Sessions & Pricing Page Copydeck — sessions.astro
> **Status:** Working draft

---

## META

**Page title:** `Sessions & Pricing`

**Meta description:**
```
Portrait sessions in Lafayette, IN from $350. Collaborative, edited, and delivered — two formats or something bespoke. No surprises.
```

> **Note:** This description is generated dynamically but hardcoded for voice control. The previous version surfaced session names ("Essential Session or Exploration Session") which nobody searches for — the new version leads with location, price, and outcome.

---

## PAGE HEADER

**Eyebrow:** `Sessions & Pricing`
**H1:** `Sessions, pricing, and what you get.`
**Lead:**
```
Two formats — editing and delivery both included. If neither fits what you
need, there's a bespoke option: tell me what you're after and we'll work it out.
```

> **Notes:** H1 is intentionally plain — it tells the visitor exactly what the page delivers without trying to be clever. The lead surfaces bespoke early so visitors with unusual briefs don't have to dig. "tell me what you're after" mirrors the bespoke card CTA for consistency.

---

## SECTION: PRICING CARDS

*All session names, prices, and feature lists come from `pricing` in `data.ts`. Edit there.*

**Session card CTAs:**

- Essential card: `Book the essential session`
- Extended card: `Book the exploration session`

> **Notes:** Button copy uses the session name from `data.ts` automatically. The pattern "Book the [name]" is better than "Book now" — it's specific and doesn't feel generic. If the session names change in `data.ts`, the buttons update automatically.

---

## BESPOKE CARD

**H6:** `Something more`

**Body:**
```
Multiple locations, a larger selection of edited images, ongoing brand work,
extended collaboration — if your brief is bigger or different, get in touch
and we'll figure out the right scope together.
```

**Tags:**
```
Multiple locations
Extended editing
Ongoing brand work
Custom scope
```

**Sidebar note:** `Scoped to your brief`

**CTA:** `Tell me what you need`

> **Notes:** "Tell me what you need" is better than "Enquire now" or "Get a quote" — it's an invitation, not a transaction. The tags give visual scannability without bulleting a list in prose. Don't convert these to a paragraph.

---

---

## GIFT NOTE

Appears below the bespoke card, left-bordered callout:

```
The Essential session makes a good gift — milestone birthdays, dissertation
defences, graduations, partners, parents. If you're booking for someone else, mention it when you
get in touch and we'll arrange the details to suit.
```

> **Notes:** Short, warm, practical. The specificity (birthdays, graduations, partners, parents) earns its place — it jogs people who hadn't thought of it. If you ever add gift vouchers or a formal gift booking flow, this is the natural place to link from.

---

---

## SECTION: TRAVEL

**Eyebrow:** `Travel`
**H2:** `Available beyond Lafayette`
**Lead:**
```
I work out of Lafayette and Urbana-Champaign, but I travel. Fees below cover
the extra time and distance.
```

**Travel cards:**

| Location | Fee text |
|---|---|
| Lafayette & Urbana-Champaign | `No additional fee` |
| Indianapolis | `+$[fee]` |
| Chicago | `+$[fee]` |

**Card body — Lafayette:**
```
Sessions within 30 miles of Lafayette and West Lafayette, Indiana or Urbana-Champaign, Illinois
are included in the standard rate.
```

**Card body — Indianapolis & Chicago:**
```
Either session, same approach.
```

**Below the grid:**
```
Somewhere not listed? Get in touch.
```

> **Notes:** "Either session, same approach" is doing real work — it reassures travellers that they're not getting a different product. The trailing line "Somewhere not listed?" is a good catch-all. Keep it.

---

## SECTION: WHAT’S INCLUDED

**Eyebrow:** `What to expect`
**H2:** `What you’re actually getting`

**Lead paragraph (below H2):**
```
Here’s roughly how it goes: you email, we talk. We figure out a location
that makes sense — somewhere you know, somewhere you’ve been meaning to go,
or somewhere I suggest. I show up with one camera. We wander, I take maybe
200 frames. You won’t get all of them. You’ll get the ones that work. A
week or two later, they’re in your inbox — edited, ready to use, no asterisks.
```

**Left column:**

**H5:** `A pre-session conversation`
```
Before we start, we talk. What are you looking for? What setting feels right?
What do you want these portraits to do for you? That conversation shapes everything.
```

**H5:** `Professional editing`
```
Every delivered image is colour-graded, retouched, and ready to use —
editing is included in the price.
```

**H5:** `Digital delivery`
```
Your final images are delivered via a private online gallery, available
to download at any time.
```

**Right column:**

**H5:** `Single-location focus`
```
Sessions are at one location — this isn’t a limitation, it’s a choice.
Staying in one place lets us go deeper, settle in, and find the images that
live there rather than rushing between spots.
```

**H5:** `For people & brands`
```
Personal portraits or brand work — the format doesn’t change much. You still
need images that look like the real thing, not a stock-photo version of it.
```

**H5:** `Usage rights`
```
Personal use is included with every session. For commercial or professional
use — press kits, book covers, advertising — see the licensing section below.
```

> **Notes:** "This isn’t a limitation, it’s a choice" is the strongest copy in this section. It preemptively defuses the objection before the visitor forms it. "Not a stock-photo version of it" is good for brands — it names what they’re trying to avoid. Keep both.

---

## SECTION: LICENSING

**Eyebrow:** `Licensing`
**H2:** `Using your images.`

**Lead:**
```
I retain copyright — standard for any photographer. Personal use is included
with every session. If the images are going somewhere more public or
commercial, here’s how that works.
```

**Card 1 — Included:**
- Tier label: `Included`
- H5: `Personal use`
- Body: `Home, personal social media, prints, gifts. Anything for you personally — this covers it for the life of the images.`

**Card 2 — +$200 (featured):**
- Tier label: `+$200`
- H5: `Creative & professional`
- Body: `If the portraits are representing you professionally — a book cover, an album, a press kit, a portfolio — this extends the licence to cover professional self-promotion. For authors, musicians, artists, and independent creatives who need their image to live where their work does.`
- Footnote: `Mention it when you book and it’ll be added to your invoice.`

**Card 3 — Custom quote:**
- Tier label: `Custom quote`
- H5: `Commercial & editorial`
- Body: `For large-scale advertising, retail products, or wide editorial distribution. Because the reach is wider, we’ll put together a licence that fits the actual scope.`
- CTA: `Get in touch` → `/contact/?session_type=commercial`

**Below the cards (left-bordered callout):**
```
If you’re a working model building a portfolio, or you have a creative project
where we’d both be bringing something — get in touch. For genuine collaborations
where the work goes both ways, I’m happy to talk time-for-print or waived licensing.
```

> **Notes:** I retain copyright — don’t soften this. The framing leads with what clients *can* do, then covers the exceptions. The collaboration note at the bottom is warm without overpromising.

---

## SECTION: FAQ

**Eyebrow:** `Questions`
**H2:** `Common questions`

**Q: Do I need to have photography experience?**
```
Not at all. Most people feel a little awkward in front of a camera — that's completely
normal, and part of my job is helping you get past it. We'll take our time, and by the
end of the session you'll have forgotten the camera is there.
```

**Q: How do I choose a location?**
```
We figure this out together in our pre-session conversation. It might be somewhere
meaningful to you, somewhere that reflects your aesthetic, or simply a well-lit space
that suits the mood you're going for. I'll make suggestions if you'd like them.
```

**Q: How long does editing take?**
```
Typically 1–2 weeks after the session. You'll receive a link to a private
online gallery when your images are ready.
```

**Q: Can I book for a special event or celebration?**
```
Yes. I'm happy to work around events — engagements, birthdays, graduations.
Mention it when you get in touch and we'll plan from there.
```

**Q: What if the weather doesn't cooperate for an outdoor session?**
```
We'll reschedule at no additional cost. Weather happens — I'd rather get the
session right than push through conditions that don't serve the work.
```

**Q: I'm a researcher, academic, or faculty member — is this right for me?**
```
Yes. I'm in university towns, and I know the brief: something for your faculty page
or research profile that doesn't look like it was taken at a school photo day. We'll
make something that actually looks like you work there on purpose.
```

**Q: Can I book for my small business or brand?**
```
Yes. I work with small businesses on brand imagery — the kind that looks like you
made it, not like you bought it from a template site. Tell me what you're building
and we'll figure out the right approach.
```

**Q: What if neither session is quite what I need?**
```
Get in touch and describe what you're after. The two formats work well for most
things, but not everything — if you need multiple locations, a bigger edit, ongoing
work, or something I haven't listed, I'd rather figure out the right scope in
conversation than have you pick a box that doesn't fit.
```

> **Notes:** FAQ is in good shape. Answers are genuinely useful, not defensive or filler. "I'd rather figure out the right scope in conversation than have you pick a box that doesn't fit" is a good closer for the last question — it reinforces the bespoke option naturally.
>
> **To add a question:** Copy a `<details class="faq-item">` block in the component.
> **To remove a question:** Delete its `<details>` block.

---

## SECTION: TESTIMONIALS

`<Testimonials variant="sessions" />` — same filler quotes as homepage. Edit in `src/components/sections/Testimonials.astro`.

---

---

## CTA BAND

**Eyebrow:** `Book a session`
**Heading:** `Let's work out what fits.`
**Body:**
```
Tell me what you're after — we'll go from there.
```

**Primary CTA:** `Get in touch`

---

## SEO NOTES

**Structured data:** `FAQPage` JSON-LD is embedded in `sessions.astro`, generated from the FAQ Q&A pairs. If you add, remove, or edit a FAQ item, update the `faqSchema` object in the frontmatter to match.

**Terms appearing naturally:**

- `portrait sessions` — header, what's included section
- `professional editing` — what's included
- `digital delivery` / `online gallery` — what's included
- `brand photography` / `brand imagery` — FAQ
- `Lafayette` / `Urbana-Champaign` — travel section
- `Indianapolis` / `Chicago` — travel section
- `engagements` / `birthdays` / `graduations` — FAQ

**The pricing page is one of the highest-intent pages on the site** — visitors here are already considering a booking. The copy should stay practical and confident rather than trying to re-sell the approach. The "What you're actually getting" section does the most conversion work.
