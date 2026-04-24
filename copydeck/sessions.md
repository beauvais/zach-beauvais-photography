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

## SECTION: WHAT'S INCLUDED

**Eyebrow:** `What to expect`
**H2:** `What you're actually getting`

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
The Three-Tiered Licensing Structure

1. Personal Use (Included)

Included with every session.

These are for you. Use them for your home, your personal social media, and gifts for family. This covers the life of the images as personal keepsakes and private memories.

2. The Creative & Professional Add-on

For authors, artists, musicians, and independent professionals.

_For your work._

If these portraits are meant to represent you in your professional life—on a book jacket, an album cover, a press kit, or a creative portfolio—this add-on extends the license to cover professional self-promotion. It’s for the makers and thinkers who need their image to live where their work does.

Investment: +$[200]

3. Commercial & Editorial Licensing

For larger organizations or high-volume distribution.

    "For the broader market."
    For images intended for large-scale advertising, retail products, or national editorial use. Because the reach and impact of these images are wider, we’ll sit down and draft a custom license that reflects the scale of the project.
    
    Investment: [Custom Quote]

A Note on Creative Collaboration

 I believe in the exchange of art. If you are a professional model looking to expand your portfolio, or a creative looking to collaborate on a specific vision that pushes both of our boundaries, please reach out. For true collaborative projects where we both share the creative risk and the reward, I often waive licensing fees or offer 'time-for-print' arrangements. If the project moves us both forward, let’s talk.
```

> **Notes:** "All delivered images are yours" was wrong — it implied copyright transfer. This is a licence. The framing leads with what they *can* do (everything practical they'd want), then names the one restriction plainly. Don't soften "I retain copyright" — it's accurate and clients who understand how photography works will expect it.

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
