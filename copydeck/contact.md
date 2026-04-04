# Contact Page Copydeck — contact.astro
> **Status:** Working draft

---

## META

**Page title:** `Contact`

**Meta description:**
```
Book a portrait session with Zach Beauvais. Get in touch to discuss your project, ask questions, or reserve your date.
```

---

## PAGE HEADER

**Eyebrow:** `Contact`
**H1:** `Let's talk`
**Lead:**
```
Tell me what you have in mind and I'll get back to you within a day or two.
```

> **Notes:** "Let's talk" is the right call — not "Book now," not "Get a quote." It invites rather than funnels. The lead sets a real expectation (1–2 days). Don't change the response-time promise unless you can actually back it.

---

## FORM SECTION

**H3:** `Send a message`

**Field labels and placeholders:**

| Field | Label | Placeholder |
|---|---|---|
| Name | `Name` | `Your name` |
| Email | `Email` | `your@email.com` |
| Session | `Session` | `What are you thinking?` |
| Location | `Location` | `Where are you?` |
| Message | `Tell me about your project` | `What are you looking for? Any specific ideas, occasions, or things you'd like me to know?` |

**Session dropdown options:**
```
What are you thinking? (default)
Essential Session ($350)
Extended Session ($750)
Business / Brand Photography
Something else
```

> **Note:** Session prices in the dropdown are pulled from `pricing` in `data.ts` dynamically — the copydeck shows current values for reference only.

**Location dropdown options:**
```
Where are you? (default)
Lafayette / West Lafayette, IN
Urbana-Champaign, IL
Indianapolis, IN (+$100)
Chicago, IL (+$200)
Other — let's discuss
```

**Submit button:** `Send message`

**Below-form note:**
```
This form opens your email client. You can also email directly: [email address]
```

> **Notes:** The mailto approach is functional but low-friction — no backend, no data handling. The placeholder on the message field ("occasions") is useful; it signals what level of detail is welcome. Don't reduce it to just "Your message."

---

## SIDEBAR

**H5:** `Direct contact`

```
✉  [email address]
◎  @[instagram handle]
```

**H5:** `Based in`

```
Lafayette, IN · Urbana-Champaign, IL
```

```
Available within 30 miles of Lafayette and Urbana-Champaign at standard rates.
Indianapolis +$100 · Chicago +$200
```

**Availability signal** (between "Based in" and "Good to know"):
```
● Currently booking May & June sessions
```

> **Update this manually each month.** Examples: "Currently booking May and June", "Booking from September onwards", "A few dates open this month." The green dot (`.availability-dot`) renders in the component — just update the text string in `contact.astro`.

---

**H5:** `Good to know`

```
– I reply within 1–2 business days
– I'm happy to answer questions before you commit
– Rescheduling is always possible
```

> **Notes:** Three items only — the fourth ("Availability varies") was replaced by the dedicated availability signal widget above. "Happy to answer questions before you commit" does the most work. Keep it. The em-dash list style matches the site's typographic voice.

---

## PHOTO STRIP (bottom)

No editable copy — portrait images only. Alt text for the four images:

```
Portrait session
Portrait session
Portrait session
Portrait session
```

> **Note:** These alt texts are generic placeholders. Worth updating them to be more descriptive once there are specific images chosen (e.g., "Outdoor portrait session, Lafayette" or "Studio portrait — natural light").

---

## SEO NOTES

**Terms appearing naturally:**

- `portrait session` — form dropdown and sidebar
- `Lafayette` / `West Lafayette` / `Urbana-Champaign` — location dropdown and sidebar
- `Indianapolis` / `Chicago` — sidebar and dropdown
- `brand photography` / `business photography` — session dropdown option

**The page title is just "Contact"** — that's fine. The meta description carries the SEO load here. If local search matters, consider updating the description to include "Lafayette portrait photographer" more explicitly.
