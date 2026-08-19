# Aquor Water Systems — Design System

Aquor Water Systems makes an integrated ecosystem of outdoor water-access hardware for lawn, garden, and home — built around a single **patented quick-connect valve** originally engineered in 1999 for marine/boat use. The company is based in Port Townsend, WA. Its mission: durable, innovative solutions for homeowners, adventurers, and professionals, delivered through two product lines:

- **Water line** — house/wall hydrants, quick-connect valves, hose-reel hardware (primary blue palette).
- **Garden line** — planting and greenery-adjacent accessories (secondary green palette).

Aquor is an **approachable, expert** brand: products are simple but benefit from a little guidance, so copy should teach confidently rather than assume expertise.

**Sources provided for this design system** (all under `uploads/` in this project — re-attach if a future reader needs the originals):
- `Aquor Logo.png`, `Aquor-SecondaryLogo-{blue,black,white}.png`, `Aquor-Logomark{,-blue,-black,-white}.png` — official logo lockups and marks.
- `Screen Shot 2022-11-02 at 5.44.38 PM.png` — a curated grid of "good" lifestyle install photography (the brand's own photo-selection guide).
- `Screenshot 2024-03-11 at 3.13.00 PM.png` — a product-card UI spec sheet (states, exact colors, type styles, badge rules) for the "House Hydrant V1+" product tile, desktop + mobile.
- Written brand brief: company description, hex codes, brand-defining words, tone notes (pasted directly into this design system's founding brief — no external link).

No codebase, Figma file, or slide deck was attached — colors/type/tone come from the written brief; layout and component conventions for the product-card were reverse-engineered from the spec screenshot; everything else (button styles, forms, other primitives) is an **original, from-scratch execution** built to fit the brand, since no source defined a wider component inventory.

## Content Fundamentals

- **Voice:** confident but approachable — the brand words are Durable, Effortless, Innovative, Reliable, Versatile, Bold. Copy should sound like a knowledgeable neighbor, not a corporate spec sheet.
- **Address:** speaks directly to the reader in second person ("your home", "your yard") — never distant third person.
- **Casing:** sentence case for body copy and UI labels; Title Case reserved for headlines and nav labels. Product names are Title Case ("House Hydrant V1+").
- **Emoji:** not used in brand copy. (Prototype code in this system uses a couple of plain glyphs — 🔍 🛒 — as functional icon placeholders only; see Iconography.)
- **Tone examples from source material:** photo captions are plainspoken and specific — *"Here the V1+ Wall Hydrant shines plugged in and installed correctly,"* *"You can really see the detail and quality of the product in this photo,"* *"Aquor loves pets!"* This is the house tone: warm, plain, a little proud of the engineering, never salesy or hyperbolic.
- **Precision matters:** copy calls out real material and engineering details (brushed stainless, quick-connect, since 1999) rather than vague superlatives.
- **Structure:** short paragraphs, benefit-led headlines, a features/benefits framing that compares favorably to "traditional" outdoor spigots without disparaging them directly.

## Visual Foundations

- **Color:** Two brand families — Water (`#008CC7` blue, `#252D37` ink) for hardware/CTAs, Garden (`#243B26` green, `#DCE7CF` sage) for planting contexts. Neutrals run `#62686F → #CCCCCC → #F0F0F0 → #FFFFFF`. Status colors are spec-exact from the product UI: Out of Stock `#E40000`, New `#008CC7`.
- **Type:** Brand typeface is **Neue Haas Grotesk Text Pro** (not supplied as files — see Font Substitution below). A clean, confident grotesque; used at fairly large sizes for headlines, generous line-height for body.
- **Backgrounds:** predominantly flat white or ink surfaces; the garden sage tint (`#DCE7CF`) is used as a full-bleed section background for trust/values strips, not as a card fill. No gradients except a single dark scrim over hero photography for text legibility. No hand-drawn illustration, no repeating pattern/texture.
- **Imagery:** real installation/lifestyle photography — warm, candid, natural light, shot on actual homes (wood siding, brick, decks), often including the customers' pets. Product studio shots are brushed-stainless hardware on plain/transparent backgrounds. No stock-photo gloss, no black-and-white, no heavy grain.
- **Animation:** minimal and functional — the one documented interaction is a **product image crossfade on hover** (studio shot → lifestyle photo), ~200ms ease. No bounce, no parallax, no decorative looping animation. This system's tokens (`--duration-fast/base/slow`, `--ease-standard`) codify that restraint.
- **Hover states:** primary buttons darken slightly; secondary/ghost buttons fill with a light neutral; the product card swaps its photo (desktop only — spec explicitly notes no hover state on mobile).
- **Press/active states:** no scale/shrink bounce observed or specified; treat as a further, slightly darker fill (kept subtle, consistent with the brand's "confident, not playful" motion stance).
- **Borders:** thin (1px), light neutral (`#CCCCCC` or `#F0F0F0`), used sparingly — mostly on form fields and outlined "secondary" buttons, not as a decorative card treatment.
- **Shadows:** soft and low-contrast, single soft layer for resting cards, a slightly larger soft shadow for raised/floating surfaces (dialogs, toasts). No inner shadows, no neumorphism, no colored glows.
- **Corner radii:** small and consistent — 4–6px for buttons/inputs/badges (the product-UI spec calls out exactly 6px for badges), 10px for larger cards/dialogs, true pill (999px) reserved for toggles and filter chips only.
- **Layout:** centered content with a ~1280px max width; sticky header; grid-based product listings. No fixed/floating decorative elements beyond a sticky nav.
- **Transparency & blur:** used only for the hero scrim (a translucent dark overlay for text legibility over photography) — no frosted-glass/blur panels elsewhere.
- **Cards:** white surface, soft shadow, 10px radius, thin/no border — never a colored left-border accent.

### Font Substitution — please read

Neue Haas Grotesk Text Pro is a licensed commercial font and **no font files were provided**. This system currently loads **Archivo** from Google Fonts as the closest free structural match (similar x-height, grotesque proportions, comparable weight range). **If you have licensed Neue Haas Grotesk Text Pro font files, please supply them** — swap the `@font-face`/`font-family` in `tokens/typography.css` and the visual system will be materially closer to brand.

## Iconography

No icon system, icon font, or icon SVGs were supplied with the brand materials. The prototype UI kit in this system uses a small number of plain Unicode glyphs (🔍 search, 🛒 cart) purely as functional placeholders for click-through purposes — **these are not a brand decision**, just stand-ins. **Recommendation:** adopt a neutral, medium-stroke icon set (e.g. Lucide, via CDN) for production use, matching the brand's clean/confident-not-playful tone; avoid duotone or heavily rounded icon styles that would read as more playful than the hardware-forward brand voice.

## Components

Standard primitive set (no component-library source was provided, so this is an original, brand-fit set — not a copy of any existing library):

- **Core:** Button, IconButton, Card
- **Forms:** Input, Select, Checkbox, Radio, Switch
- **Feedback:** Badge *(spec-exact: Out of Stock / New product overlay)*, Tag, Tooltip, Toast
- **Overlay:** Tabs, Dialog
- **Commerce:** ProductCard *(spec-exact: hover-to-lifestyle-photo crossfade, per the provided UI spec sheet)*

## Index

- `styles.css` — root stylesheet, imports everything in `tokens/`.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css` (spacing/radius/shadow/motion), `base.css` (element resets).
- `assets/logos/` — primary lockup, secondary lockup (blue/black/white), logomark (blue/black/white/default).
- `assets/imagery/` — the brand's lifestyle-photo selection guide, the product-card UI spec sheet.
- `components/core/` — Button, IconButton, Card.
- `components/forms/` — Input, Select, Checkbox, Radio, Switch.
- `components/feedback/` — Badge, Tag, Tooltip, Toast.
- `components/overlay/` — Tabs, Dialog.
- `components/commerce/` — ProductCard.
- `guidelines/` — foundation specimen cards (colors, type, spacing/radius/shadow, brand marks, photography).
- `ui_kits/shop/` — interactive shop-homepage recreation (header, hero, filterable product grid with add-to-cart, footer).
- `SKILL.md` — portable skill definition for use in Claude Code.

## Intentional additions

- `Card` (generic container), `Tag`, `Tooltip`, `Toast`, `Tabs`, `Dialog`, `Select`, `Checkbox`, `Radio`, `Switch` — no source defined these; added as a standard, brand-fit primitive set since brand guidelines alone don't specify a component inventory.
