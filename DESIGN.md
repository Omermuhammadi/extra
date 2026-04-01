# Design System Specification

## Overview
**Project:** PRESERVE Infrastructure - Landing Page
**Theme Mode:** LIGHT
**Corner Roundness:** ROUND_FOUR

## Typography
- **Headline / Display Font:** Plus Jakarta Sans
- **Body Font:** Inter
- **Label Font:** Inter

## Color Palette

### Core Colors
- **Primary:** `#051125`
- **Primary Container:** `#1b263b`
- **Secondary:** `#47607e`
- **Secondary Container:** `#c2dcff`
- **Tertiary:** `#00102d`
- **Tertiary Container:** `#002455`
- **Background / Surface:** `#f8f9fa`
- **Error:** `#ba1a1a`

### Full Named Color Scheme
- `background`: `#f8f9fa`
- `on_background`: `#191c1d`
- `surface`: `#f8f9fa`
- `on_surface`: `#191c1d`
- `surface_variant`: `#e1e3e4`
- `on_surface_variant`: `#45474d`
- `surface_container_lowest`: `#ffffff`
- `surface_container_low`: `#f3f4f5`
- `surface_container`: `#edeeef`
- `surface_container_high`: `#e7e8e9`
- `surface_container_highest`: `#e1e3e4`
- `primary`: `#051125`
- `on_primary`: `#ffffff`
- `primary_container`: `#1b263b`
- `on_primary_container`: `#828da7`
- `secondary`: `#47607e`
- `on_secondary`: `#ffffff`
- `secondary_container`: `#c2dcff`
- `on_secondary_container`: `#48617e`
- `tertiary`: `#00102d`
- `on_tertiary`: `#ffffff`
- `tertiary_container`: `#002455`
- `on_tertiary_container`: `#428aff`
- `outline`: `#75777d`

## Design Strategy: Industrial Precision & Cinematic Scale

**The Architectural Custodian**
This design system moves away from the "service provider" aesthetic and toward "infrastructure authority." We treat commercial spaces not as rooms to be mopped, but as high-value assets to be engineered and preserved. To break the "template" look, we utilize **Intentional Asymmetry** and **Scale Shock**. By pairing massive, cinematic headers with generous whitespace, we evoke the feeling of a wide-angle lens moving through a pristine, high-tech facility. The layout should feel like a blueprint—precise, layered, and authoritative—rejecting the clutter of traditional B2B SaaS in favor of a high-end editorial experience.

### Surface Logic & The "No-Line" Rule
Traditional UI relies on borders to separate ideas. In this system, 1px solid borders are prohibited for sectioning. Boundaries must be defined solely through background color shifts:
- Use `surface_container_low` (`#f3f4f5`) to transition between white surface sections.
- Use `surface_container_highest` (`#e1e3e4`) for internal structural blocks within a page.

**Surface Hierarchy & Nesting**
Treat the UI as a physical environment with depth:
- **Base Level:** `surface` (`#f8f9fa`).
- **In-set Content:** `surface_container` (`#edeeef`).
- **Elevated Elements:** `surface_container_lowest` (`#ffffff`) cards sitting on a `surface_container_low` base. This "reverse-lift" creates a crisp, premium feel.

### Typography: The Voice of Authority
We pair Plus Jakarta Sans (Display/Headline) with Inter (Body/Label) to balance "Industrial Modern" with "Functional Precision."
- **Display LG (3.5rem):** Set with `-0.04em` letter spacing and Bold weight. Used for hero statements to create a "Cinematic Scale."
- **Headline MD (1.75rem):** The workhorse for section headers. High contrast against body text is required to maintain the editorial look.
- **Label SM (0.6875rem):** Always Uppercase with 0.1em letter spacing. Use secondary (`#47607e`) color. This mimics technical labels found on high-end machinery.
**Rule:** Never center-align large blocks of text. Stick to a rigorous left-aligned grid to imply engineering discipline.

### Elevation & Depth: Tonal Layering
We do not use heavy shadows. We use light.
- **The Layering Principle:** Avoid `elevation-1` tropes. Instead, place a white card on top of a `surface_container_high` (`#e7e8e9`) background. The delta in hex codes provides enough "visual friction" to define the edge.
- **Ambient Shadows:** If an element must float (e.g., a modal), use a shadow tinted with `on_surface` (`#191c1d`) at 4% opacity with a `48px` blur and `12px` Y-offset. It should feel like a soft glow, not a dark smudge.
- **The Ghost Border Fallback:** If accessibility requires a stroke, use `outline_variant` (`#c5c6cd`) at 20% opacity. It should be barely perceptible.

### Component Guidelines

**Buttons: The "Engineered" Action**
- **Primary:** `primary` (`#051125`) background with `on_primary` (`#ffffff`) text. Use `md` (0.375rem) roundedness.
- **Secondary (High-Vis):** Use `on_tertiary_container` (`#428aff`) for the text color on a `tertiary_container` (`#002455`) background. This provides the "Electric Blue" accent for high-priority facility alerts or CTAs.
- **Tertiary:** No background. Use `label-md` uppercase styling with a subtle `secondary` (`#47607e`) underline that expands on hover.

**Cards & Lists: The "No-Divider" Mandate**
- **Cards:** Never use borders. Use `spacing-8` (2.75rem) padding to create internal breathing room.
- **Lists:** Forbid the use of divider lines. Separate list items using `spacing-2` (0.7rem) of vertical white space and a subtle background hover state using `surface_container_low`.

**Input Fields: Technical Precision**
- **Styling:** Use `surface_container_highest` (`#e1e3e4`) as a subtle fill.
- **Interaction:** On focus, the field should not gain a heavy border. Instead, the label should shift to `on_tertiary_container` (Electric Blue) and the background should shift to `surface_container_lowest` (`#ffffff`).

### Do's and Don'ts

**Do:**
- Use extreme vertical padding (e.g., `spacing-20` or `7rem`) between major sections to emphasize scale.
- Use asymmetrical layouts (e.g., a 2-column grid where the left column is 4 units and the right is 8 units).
- Use "Pristine White" (`surface_container_lowest`) for primary data containers to symbolize cleanliness.

**Don't:**
- Don't use icons with rounded, "bubbly" corners. Use sharp, geometric, "Industrial" icons with a 1.5pt or 2pt stroke weight.
- Don't use generic cleaning imagery. If photography is used, it should be architectural: wide shots of empty, gleaming lobbies or macro shots of high-tech filtration systems.
- Don't use standard 16px gutters. Use `spacing-8` (2.75rem) to ensure the UI feels "Expensive."
