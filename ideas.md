# Design Brainstorm — Raiford Rogers Modern Ballet

The current Loveable site has a clean but somewhat generic feel — a sticky navbar, large hero image, photo grid, simple press cards, and a footer. The migration is a 1:1 replica first, so we should preserve the **structure** (Home + Biography pages, same content, same imagery), but we have an opportunity to elevate the design within that structure.

Below are three distinct directions, each preserving the existing layout intent while raising the craft level.

---

<response>
<text>

## Idea 1 — Editorial Performance Programme

**Design Movement:** Inspired by printed performance programmes for major dance companies (NYCB, Royal Ballet, Sadler's Wells) and editorial publications like *Cereal* and *The Gentlewoman*. Think gallery-catalogue meets ballet libretto.

**Core Principles:**
1. Reverence for the photograph — images dominate, chrome recedes.
2. Editorial typographic hierarchy — large serif display headings with refined sans-serif body.
3. Asymmetric, off-grid placements that feel curated rather than templated.
4. Generous whitespace as breath between movements.

**Color Philosophy:** A warm off-white parchment (#F7F4ED) as the primary canvas with deep ink-black (#1A1A1A) for type. A single accent of dusty rose (#C9A5A0) used only for hover states and decorative rules. Reasoning: the dancer photographs are already vivid and chromatic; the page should act like a museum wall — neutral, warm, and confident.

**Layout Paradigm:** Asymmetric two-column grid where the hero image breaks slightly out of its column, captions sit in narrow side margins like a programme note, and the photo strip below is staggered (not perfectly aligned), echoing the way dancers stagger in a corps formation.

**Signature Elements:**
- Hairline horizontal rules that span the full width between sections, with a small ornamental motif at center (a thin diamond ◇ or em-dash).
- Side-margin captions in small caps (e.g., "PHOTO — A. TRELEASE") set at 10pt with letter-spacing.
- Section labels like "I. PRESS" / "II. ABOUT" in roman numerals, mirroring a programme's act structure.

**Interaction Philosophy:** Quiet, slow, deliberate. Hovering an image dims everything else slightly (subtle vignette) so the focus shifts. No flashy motion — interactions should feel like turning the page of a programme.

**Animation:** Fade-in on scroll at 600ms with a custom ease-out curve. Press quotes reveal one-by-one with 80ms stagger. Carousel transitions are slow cross-fades (700ms), not slides. No hover scaling on images — instead, a 1px hairline border appears at 200ms.

**Typography System:**
- Display: **Cormorant Garamond** (a delicate, high-contrast serif) for h1/h2 — sets a balletic, classical tone.
- Body: **Inter Tight** at 16/26 for paragraphs — modern, readable counterpoint.
- Accents: **Inter** small-caps with 0.12em tracking for captions and labels.

**Probability:** 0.07

</text>
</response>

---

<response>
<text>

## Idea 2 — Watercolor & Movement (Painterly)

**Design Movement:** Draws directly from Mike Nava's watercolor stage backdrops — the colorful painted progressions already present in the show photography. The site becomes an extension of the company's visual world: painterly, expressive, fluid.

**Core Principles:**
1. The website itself feels painted, not engineered.
2. Color is emotional, not decorative — saturated washes that echo the stage art.
3. Movement (subtle blur, soft drift) suggests dance in stillness.
4. Type is grounded and quiet so the imagery can sing.

**Color Philosophy:** A pale watercolor wash background (a barely-there blend of cream, blush, and pale teal — like washed paper). Body text in deep charcoal (#2A2A2A). Section transitions use soft gradient blends (sage → ochre → indigo) lifted from the actual ballet backdrops. The intent is to make the site feel continuous with the stage.

**Layout Paradigm:** Magazine-spread layout. Hero takes 80vh with the dancer photo bleeding to the edges and the title overlaid in a transparent panel. The photo strip below becomes a "diptych/triptych" — three frames with painted-paper textures separating them. The Biography page uses a true two-column editorial spread.

**Signature Elements:**
- A subtle paper-grain noise texture overlay (~3% opacity) on the entire background — gives the site a tactile, hand-made feel.
- Watercolor "splash" SVG accents in section dividers (one corner of each section has a faint painted blot).
- Press quotes set inside soft-edged cards that look like torn paper.

**Interaction Philosophy:** Tactile, organic. Hovering an image causes a gentle saturation lift (1.05x) over 400ms. The image carousel drifts slowly with parallax. The whole site feels like flipping through an artist's sketchbook.

**Animation:** Gentle parallax on hero image (subtle 5–8px drift). Press cards rise 12px on scroll-reveal at 500ms. Carousel uses Ken Burns style slow zoom-and-pan (8s per slide) — references how Nava's paintings progress during a performance.

**Typography System:**
- Display: **Playfair Display** italic for h1 (a romantic, hand-rendered feel) paired with regular weight for subheads.
- Body: **Lora** for paragraphs — a calligraphic serif that pairs warmly with watercolor.
- Accents: **Playfair Display** small italic for photo credits, set lowercase.

**Probability:** 0.06

</text>
</response>

---

<response>
<text>

## Idea 3 — Contemporary Stage Minimalism

**Design Movement:** Stage-inspired minimalism — drawing from how modern dance is presented in spaces like the Joyce Theater, BAM, or the Luckman. Black box theater meets contemporary design (Wim Crouwel, Massimo Vignelli). High contrast, confident typography, cinematic imagery.

**Core Principles:**
1. The page is a stage — content enters and exits with intention.
2. High contrast (deep blacks against luminous photographs) creates drama.
3. Tight grid discipline anchored by one or two "breaks" for emphasis.
4. Typography carries weight and authority — the company's reputation deserves a bold voice.

**Color Philosophy:** Default to a **dark theatrical mode** — near-black background (#0B0B0C) with warm off-white type (#F2EFE9). The dancer photographs glow against this dark canvas the way they would on a darkened stage. A single accent of stage-light amber (#E8A24A) marks hover and active states. Light mode is preserved as a switchable alternative (warm white background, near-black type).

**Layout Paradigm:** Cinematic full-bleed hero (100vh) with the title positioned bottom-left over the image, treated like a film title card. Below it, content sits in a tight 12-column grid with deliberate breaks: the photo strip occupies columns 2–11 with generous side margins (acting like a proscenium frame). Press section presents quotes in a horizontal scroll-track rather than a 3-column card layout — encouraging the user to read across, like reading a billboard.

**Signature Elements:**
- A persistent, fixed left-side vertical "tag" showing the section name in tracked uppercase (e.g., "HOME / 01" or "ABOUT / 02") — references playbill numbering.
- An animated underline on nav links that draws left-to-right on hover (180ms ease-out).
- The footer's company name set in a large, confident wordmark treatment rather than small body text.

**Interaction Philosophy:** Confident, sharp, theatrical. Interactions feel like spotlight cues — quick, intentional, with clear before/after states. Image hovers reveal photo credit overlays from the bottom edge (slide-up).

**Animation:** Hero image scales 1.05 → 1.0 on initial load over 1.2s (theatrical "curtain rise" effect). Press quotes enter on horizontal scroll with 100ms stagger. Nav underline draws in 180ms ease-out. Theme toggle uses a 400ms crossfade.

**Typography System:**
- Display: **Fraunces** at 700 weight for h1 (a contemporary serif with optical sizing — feels modern yet classical) — chosen because it carries gravitas without feeling stuffy.
- Body: **Inter Tight** at 16/24 for body — clean, neutral, doesn't compete.
- Accents: **JetBrains Mono** for the section tags and small UI labels — adds a contemporary, almost technical counterpoint that grounds the design in 2026.

**Probability:** 0.08

</text>
</response>

---

## Selected Direction

**Idea 1 — Editorial Performance Programme** is the strongest match for a ballet company of Raiford Rogers' caliber. The site needs to feel like a museum-grade publication, where the photographs (which are already gorgeous) are framed with reverence rather than competing with bold UI. It elevates the existing structure without changing it, makes the press quotes feel weightier, and gives the biography page room to breathe like a printed essay. It also respects the existing dark/light theme toggle and is fully achievable inside a static React build.

**Commitment statement:**
- Warm off-white parchment background (#F7F4ED), deep ink-black type (#1A1A1A), dusty rose accent (#C9A5A0).
- Cormorant Garamond display + Inter Tight body + Inter small-caps captions.
- Asymmetric layout with side-margin captions, roman numeral section labels, hairline rules with center ornament.
- Slow, quiet, deliberate interactions — never flashy.
