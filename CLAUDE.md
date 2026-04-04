# CLAUDE.md — Zach Beauvais Photography Site

Read this at the start of every session. It replaces the need to re-read large files or ask clarifying questions.

---

## Project brief

Portrait photography business. Zach Beauvais, based in Lafayette, IN and Urbana-Champaign, IL. Specialism: collaborative, creative portraits shaped by a background in nature, street, and abstract photography. Not traditional/directed portraiture. Serves individuals (personal brand, milestone, self-exploration), families (including queer and blended), and small businesses.

**Pricing:**
- Essential session: 1 hour, 1 location, 5 edited portraits — $350
- Extended session: 3 hours, 1 location, 20 edited portraits — $750
- Travel: +$100 Indianapolis, +$200 Chicago. Within 30 miles of Lafayette or Urbana-Champaign is included.
- Bespoke: scoped on request (multiple locations, ongoing brand work, larger edits)

Editing and delivery always included. No headshots — out of scope, don't mention them.

---

## Voice

**Short version:** Specific, wry, honest, sensory. First-person and immediate. Anti-bullshit. Sensory detail grounds abstract ideas. Associative logic. Self-aware about craft. Wry British-American humour. Occasional precise profanity. Nostalgic without sentiment. Vulnerable but stoic.

**Avoid:** corporate register, overclaiming, vagueness, sentimentality, flattery, lists-where-prose-works, throat-clearing intros.

**For photography copy specifically:** Write like someone interested in what a subject does to him, not what it looks like on a spec sheet. Leads with the thing itself, not the service it provides.

**Full reference:** `Photography Website/voice-and-tone.md` — read this only when writing substantial new copy from scratch. The short version above covers edits.

---

## Site architecture

Astro site. Source in `zach-beauvais-photography-astro/`.

```
src/
  pages/          — one .astro file per route
  components/     — reusable UI; sections/ for page sections
  content/        — data.ts (pricing, site config), page copy
  lib/            — paths.ts (asset/route helpers)
  styles/         — global CSS
  templates/      — new-page.astro, new-portfolio-page.astro (scaffold new pages from these)
copydeck/         — authoritative copy for every page (see below)
```

**Key file:** `src/content/data.ts` — pricing, session data, travel fees, site metadata. Change prices here, not in copy.

---

## Copydeck

`copydeck/` is the authoritative source for all page copy. Build pages from these files — don't rewrite from scratch.

| File | Status |
|---|---|
| `index.md` | Working draft — complete |
| `sessions.md` | Working draft — complete |
| `about.md` | Working draft — complete |
| `how-i-work.md` | Working draft — complete |
| `contact.md` | Working draft — check before building |
| `404.md` | Working draft |
| `cv.md` | Working draft — verbatim from zachbeauvais.com/cv/; not in nav |
| `copydeck/portfolio/` | Check on session |

**Workflow:** Read the copydeck file → implement the page → never edit copy in `.astro` files directly (always update the copydeck first so it stays authoritative).

---

## Standing decisions — don't relitigate these

- **No "view" as a verb in CTAs or links.** Use: see, browse, explore, find, read, discover.
- **No headshots.** Out of scope. Don't suggest or add.
- **Design system is a guideline, not a rulebook.** Clean typography, the Figma colour scheme. Don't over-engineer.
- **Copydeck notes are binding.** When a copydeck file says "keep this" or "don't change X," that's a standing decision.
- **Single-location sessions only.** Don't suggest multi-location as a standard option (bespoke only).
- **Editing always included.** Always. Don't make it sound optional.
- **Period after H1s is intentional** (e.g., "Two sessions, or something else entirely.") — it reads confident, not precious. Keep it.

---

## Component patterns

- `CTABand.astro` — reusable CTA section; takes eyebrow, heading, body, primary/secondary CTA props
- `Header.astro` / `Footer.astro` — site-wide, already built
- `sections/` — page-level section components
- New pages: scaffold from `src/templates/new-page.astro`

When adding a section to a page, check `src/components/sections/` before building a new component.

---

## Session startup — what to do

1. Check which page or task the user wants to work on.
2. Read the relevant copydeck file.
3. Check the relevant `.astro` page if editing an existing page.
4. Do the work. One page or component per session — don't scope-creep.

**Don't** re-read voice-and-tone.md, CLAUDE.md is enough.
**Don't** ask what the project is about — it's above.
**Don't** suggest redesigning things that are already decided.
