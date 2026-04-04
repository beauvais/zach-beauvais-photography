# Sessions & Pricing Page Copydeck — sessions.astro
> **Status:** Working draft

---

## META

**Page title:** `Sessions & Pricing`

**Meta description:**
```
Portrait sessions from $350. Essential or Extended, with professional editing included.
```

> **Note:** Prices in the meta description come from `data.ts` dynamically. If you change pricing there, this description will update automatically.

---

## PAGE HEADER

**Eyebrow:** `Sessions & Pricing`
**H1:** `Two sessions, or something else entirely.`
**Lead:**
```
Two formats with editing included — good for most briefs. If yours is bigger
or different, there's a third option: get in touch and we'll scope it together.
```

> **Notes:** The H1 period after "entirely" is intentional — it's a full stop that reads confident, not precious. The lead sets up the bespoke option early so visitors with unusual briefs don't have to dig. Keep this structure.

---

## SECTION: PRICING CARDS

*All session names, prices, and feature lists come from `pricing` in `data.ts`. Edit there.*

**Session card CTAs:**

- Essential card: `Book the essential session`
- Extended card: `Book the extended session`

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
Sessions within 30 miles of Lafayette, Indiana or Urbana-Champaign, Illinois
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

## SECTION: WHAT'S INCLUDED

**Eyebrow:** `What to expect`
**H2:** `What you're actually getting`

**Left column:**

**H5:** `A pre-session conversation`
```
Before we shoot, we talk. What are you looking for? What setting feels right?
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
Sessions are at one location — this isn't a limitation, it's a choice.
Staying in one place lets us go deeper, settle in, and find the images that
live there rather than rushing between spots.
```

**H5:** `For people & brands`
```
Personal portraits or brand work — the format doesn't change much. You still
need images that look like the real thing, not a stock-photo version of it.
```

**H5:** `Usage rights`
```
All delivered images are yours — personal use, commercial use, print, web,
whatever you need.
```

> **Notes:** "This isn't a limitation, it's a choice" is the strongest copy in this section. It preemptively defuses the objection before the visitor forms it. "Not a stock-photo version of it" is good for brands — it names what they're trying to avoid. Keep both.

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

## CTA BAND

**Eyebrow:** `Book a session`
**Heading:** `Not sure which session?`
**Body:**
```
Get in touch and we'll figure out what fits.
```

**Primary CTA:** `Get in touch`

---

## SEO NOTES

**Terms appearing naturally:**

- `portrait sessions` — header, what's included section
- `professional editing` — what's included
- `digital delivery` / `online gallery` — what's included
- `brand photography` / `brand imagery` — FAQ
- `Lafayette` / `Urbana-Champaign` — travel section
- `Indianapolis` / `Chicago` — travel section
- `engagements` / `birthdays` / `graduations` — FAQ

**The pricing page is one of the highest-intent pages on the site** — visitors here are already considering a booking. The copy should stay practical and confident rather than trying to re-sell the approach. The "What you're actually getting" section does the most conversion work.
