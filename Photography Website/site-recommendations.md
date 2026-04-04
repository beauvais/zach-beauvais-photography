# Site recommendations — April 2026

A full read of every page, copydeck file, and component. Here's what's holding it back commercially, what's broken, what's missing, and what features would actually help rather than bloat.

---

## Fix immediately

These are either bugs, errors, or things that will actively undermine trust.

### 1. Pricing discrepancy

`src/content/data.ts` has the Extended session at **$550**. The copydeck (sessions.md), CLAUDE.md, and every reference document say **$750**. One of them is wrong and a potential client who spots the mismatch — or who contacts you based on $550 and hears $750 — is a problem. Fix data.ts to match the authoritative source (copydeck: $750).

### 2. Contact form is effectively broken on mobile

The form uses `mailto:` to compose an email in the user's default email client. This is a known conversion killer on mobile — most people don't have a configured email client on their phone, and iOS/Android will either do nothing or open something confusing. The form looks professional; it just doesn't work as expected.

**Fix:** Netlify Forms is zero-config if you're deploying to Netlify — add `netlify` attribute to the form, they handle the backend. Alternatively: Formspree, Web3Forms, or EmailJS. Any of these will submit to your inbox without leaving the browser.

### 3. 404 page says "View portfolio"

Standing rule: no "View" as a verb. The 404 uses it. Change to "See the portfolio" or "Browse the portfolio."

---

## What's missing for business conversion

The site has strong positioning and real voice. What it doesn't have is enough reason for a stranger to trust you with their face and money. These are the gaps.

### 4. No social proof anywhere

No testimonials. Not one. In a crowded local market, this is the biggest commercial gap on the site. People need to know someone like them hired you and came away not just satisfied but saying something specific.

The key: voice-consistent testimonials. Not "Zach is amazing, 5 stars!" but something that sounds like a real person describing a real experience. "We did the session in February in an empty parking structure and I was skeptical about the light. The photos are the best I've ever looked in." Something with a detail in it.

You need 3–5 of these. Where they appear matters: one on the homepage near the pricing section, one on the sessions page, one on about. They don't all need to be long.

### 5. No availability signal

The site reads as if sessions are always available with no friction. In reality, a good photographer books out weeks in advance — that scarcity is a feature, not a flaw. Even a simple note like *"Currently booking May and June sessions"* or *"Taking bookings from [date]"* does two things: it creates mild urgency and it signals that you're busy, which is exactly what a potential client wants to believe.

If you have a booking system or Calendly, link to it from the contact page or even the header CTA.

### 6. No "what to expect" content

The sessions page explains what you get. The how-I-work page explains your approach. Neither explains what actually happens: from first email to delivered photos, what does the experience look like? For people who've never done a portrait session — or had bad experiences with directive photographers — this is exactly the anxiety they need addressed.

This doesn't need a separate page. It could live on the sessions page after the pricing cards: a short, honest walkthrough. "Here's roughly how it goes: you email, we talk, we pick a location you know or want to know, I show up with one camera, we wander, I take maybe 200 frames, you get 5 of them edited."

The voice is there. It just needs writing.

### 7. Gift sessions are an untapped channel

The Essential session at $350 is a natural gift. People buy portrait sessions for partners, for milestone birthdays, for graduating kids, for parents. The site doesn't mention this once. A single line on the sessions page — or a small callout — would open up an acquisition channel that doesn't require the recipient to have thought of it themselves. Low effort, real upside.

---

## Copy that needs attention

### 8. Per-page SEO meta descriptions

There's one meta description defined in data.ts and it's the same on every page. Search engines will use it for every result, which means searchers see the same blurb regardless of what page they've landed on. Each page should have a unique `description` that reflects the content. The sessions page should be about sessions and pricing. The portrait portfolio should mention portraits. About should describe you. This is table-stakes SEO.

### 9. The abstract trio on the About page

Three landscape/abstract images appear on the about page to show visual sensibility — smart in principle. But the about page is where a business client is deciding whether to hire a portrait photographer. Showing landscapes and abstracts at that moment introduces doubt: *is this person primarily a landscape photographer?*

Consider replacing one of the three with a behind-the-scenes or process image, or with a portrait taken in an unusual context that demonstrates range without drifting from the subject matter. Or cut the section entirely and let the portfolio link do that work.

### 10. "What's included" reads like a spec sheet

The 6-item included list on the sessions page is fine, but it currently sounds like features rather than reassurances. "Editing included" and "Digital delivery" are good to say explicitly, but the framing could do more work. The copydeck voice is wry and direct — the included section should reflect that rather than reading like a SaaS comparison table.

---

## Features worth building

These are not "add this because photography sites have it." They're things that would do specific work for this specific business.

### 11. Session stories / a sparse journal

This is the one feature that could genuinely separate the site from every other portrait photographer in Lafayette and Urbana. Not a blog in the content-marketing sense — no "5 tips for your headshot session" nonsense. Short (300–600 word) pieces about specific sessions: what happened, what surprised you, what the location did to the light, what the subject taught you.

Two or three of these a year would: demonstrate craft without claiming it, improve SEO for specific location searches ("portrait photographer warehouse Lafayette"), and give potential clients something to read that tells them more about working with you than any marketing copy can. Your voice is genuinely good. Use it.

### 12. Availability indicator (low-effort, high-signal)

A single line in the header or on the contact page: "Currently booking [month]." Could be as simple as a manually updated text field. Signals demand, creates mild urgency, sets expectations before someone emails.

### 13. Instagram integration that isn't embarrassing

Most photography site Instagram embeds are clunky, misaligned, or don't load. If you're going to show the Instagram feed, it needs to look intentional. Options: Elfsight or Behold.so both have Astro-compatible embeds that actually look decent. Alternatively, manually curate a 4–6 image panel from recent Instagram posts, updated quarterly — more control, less API dependency.

Only worth doing if the Instagram account is active. A stale feed is worse than none.

### 14. Better portfolio structure for business clients

The portfolio tabs (All | Portraits | Landscape & Art) work, but the "All" default mixes everything together. A business client looking for a portrait photographer lands on the portfolio and sees landscapes first, depending on how the images sort. Consider defaulting to Portraits, or restructuring so portraits are always at the top of the "All" view. The landscape work is good to have as evidence of range; it shouldn't be the first thing a paying client sees.

### 15. A "before you book" FAQ surfaced higher

The FAQ on the sessions page is well-written. But it's buried at the bottom of a page most people reach only after they've already decided to explore pricing. Moving one or two key questions (particularly: "Do I need experience in front of a camera?" and "What if the weather's bad?") to the homepage or contact page would reduce the most common pre-booking anxiety without requiring anyone to seek them out.

---

## What's working — don't touch it

- The hero line. "Portrait photography made with you, not for you." is specific and earns the distinction it claims.
- The period after H1s. Keep it.
- The sessions page H1. "Two sessions, or something else entirely." is confident and honest.
- The approach on how-i-work. "I'm not one of those" is the right register.
- The FAQ content itself. Just needs visibility.
- The design system. Warm, clean, not trying too hard. The terracotta accent doesn't scream "photography template."
- The bespoke option. Having a third, un-priced option signals seriousness for larger clients.
- The lightbox. Works, unobtrusive, no unnecessary flourish.

---

## Priority order if you're doing this in stages

1. Fix the pricing error in data.ts (10 minutes)
2. Fix the contact form → Netlify Forms or similar (1–2 hours)
3. Fix the 404 "View" → "See" (2 minutes)
4. Add 3 testimonials — homepage, sessions, about (content work, no dev)
5. Add availability signal to contact page (small)
6. Write a "what to expect" walkthrough on sessions page (copy work)
7. Add gift sessions mention (1 paragraph)
8. Fix per-page meta descriptions in each .astro file
9. Write one session story, publish it (start small)
10. Reconsider abstract trio on about page

The first three are bugs. Items 4–8 are business-critical. Items 9–10 are what would make this site genuinely good rather than just solid.
