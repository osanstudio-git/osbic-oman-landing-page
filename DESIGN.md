---
name: Sovereign Corporate
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#3f4850'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#707881'
  outline-variant: '#bfc7d1'
  surface-tint: '#006496'
  primary: '#006192'
  on-primary: '#ffffff'
  primary-container: '#007bb7'
  on-primary-container: '#fcfcff'
  inverse-primary: '#90cdff'
  secondary: '#096494'
  on-secondary: '#ffffff'
  secondary-container: '#85c8fe'
  on-secondary-container: '#00537e'
  tertiary: '#006947'
  on-tertiary: '#ffffff'
  tertiary-container: '#00855b'
  on-tertiary-container: '#f5fff6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cbe6ff'
  primary-fixed-dim: '#90cdff'
  on-primary-fixed: '#001e31'
  on-primary-fixed-variant: '#004b72'
  secondary-fixed: '#cbe6ff'
  secondary-fixed-dim: '#90cdff'
  on-secondary-fixed: '#001e31'
  on-secondary-fixed-variant: '#004b72'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
  surface-warm: '#FAF9F6'
  slate-muted: '#475569'
  accent-gold: '#F59E0B'
  border-subtle: '#E2E8F0'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 44px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  section-gap: 4rem
  card-padding: 1.5rem
  gutter: 1.5rem
  margin-mobile: 1rem
  margin-desktop: 2rem
---

## Brand & Style

This design system is engineered for a high-end B2B consultancy, evoking a sense of institutional reliability and modern efficiency. The aesthetic is **Corporate / Modern**, characterized by structured information hierarchy, generous white space, and high-contrast typography that mirrors the professional standards of Oman's business landscape.

The visual narrative focuses on "frictionless growth." By utilizing a palette of deep blues and vibrant greens, the interface communicates both the seriousness of legal and business services and the accessibility of digital-first consultation. The style avoids unnecessary decoration, favoring functional clarity and a sense of "premium transparency."

- **Emotional Response:** Trusted, efficient, authoritative, and approachable.
- **Visual Strategy:** Precise grid alignment, soft depth cues to highlight interactive lead captures, and a strong emphasis on legible, geometric typography.

## Colors

The color strategy is anchored by **OSBIC Cerulean Blue**, which provides a refreshing, professional identity distinct from standard dark corporate navy. 

- **Primary & Secondary:** Used for core brand touchpoints and interactive states. The Secondary Deep Steel Blue is reserved for hover states and high-contrast structural elements.
- **Tertiary (Emerald Green):** This is a high-utility color specifically designated for trust signals—such as verification badges—and the primary WhatsApp CTA, leveraging the universal association between the color green and secure communication.
- **Neutral & Surface:** A hierarchy of Slates provides legibility. Headings use the near-black Slate 900 for maximum impact, while surfaces alternate between Pure White for high-priority cards and Warm Off-White for background sections to reduce eye strain and define page rhythm.

## Typography

The design system utilizes **Plus Jakarta Sans** across all levels. Its geometric clarity and modern proportions reflect the uppercase, clean letterforms of the brand logo, ensuring a cohesive identity from brandmark to body text.

### Scaling & Usage
- **Headlines:** Use tight letter-spacing for large displays to maintain a compact, authoritative feel.
- **Readability:** Body text is set with a generous line height (1.6x) to ensure complex business information remains digestible.
- **Hierarchy:** High-contrast weights (700 for headings vs 400 for body) are used to guide the eye through the conversion funnel, with Medium (500/600) weights reserved for UI labels and button text.

## Layout & Spacing

This design system uses a **Fluid Grid** model to accommodate high-density information while maintaining a breathable, premium feel.

- **Desktop (1240px Max Width):** A 12-column grid. Hero sections prioritize a 2-column split (6:6 or 7:5) to balance value propositions with lead capture forms.
- **Mobile:** A single-column reflow. Critical actions, such as the WhatsApp and "Call Now" buttons, are pinned to a **sticky bottom action bar** within the "thumb zone" for immediate accessibility.
- **Spacing Rhythm:** An 8px base unit is used. Sections are separated by a consistent `4rem` (64px) gap to create clear mental breaks between different service offerings and social proof modules.

## Elevation & Depth

Visual hierarchy is established through **Tonal Layers** and **Ambient Shadows**, avoiding harsh borders in favor of soft, atmospheric depth.

- **Surface Tiers:** Backgrounds alternate between `#FFFFFF` and `#FAF9F6`. High-priority interactive elements (like the lead form) always sit on the purest white surface to "pop" against warmer backgrounds.
- **Shadow Character:** Shadows are extremely diffused and tinted with the primary blue to maintain brand harmony. A typical elevation for a card would be: `0 4px 20px -2px rgba(51, 147, 209, 0.08)`.
- **Interactions:** Buttons use a slight vertical lift on hover, while form inputs utilize a 2px outer glow in Primary Blue when focused to provide clear feedback.

## Shapes

The shape language is defined as **Rounded**, striking a balance between the precision of the business world and a modern, user-friendly digital experience.

- **Core Elements:** Cards and primary containers use a 12px (`md`) radius. 
- **Buttons & Inputs:** Use a slightly tighter 8px-10px radius to appear more structured and professional.
- **Trust Chips:** Badges and category tags use a `Full` (pill-shaped) radius to differentiate them from functional UI components and highlight them as decorative/informative "bubbles."

## Components

### Buttons
- **Primary:** Filled `#3393D1` with white text. Minimum height `48px`. 
- **WhatsApp CTA:** Filled `#10B981` with a white WhatsApp icon and bold label. Used exclusively for direct consultation.
- **Secondary/Ghost:** 1.5px border of Primary Blue with Primary Blue text for less urgent actions.

### Cards
- **Lead Capture Card:** Pure white background, 12px rounded corners, and a soft primary-tinted shadow. Includes a 1px `#E2E8F0` border for definition on light backgrounds.
- **Service/Metric Tiles:** Minimalist design with top-aligned Primary Blue icons and bolded H3 headings.

### Form Inputs
- **Standard:** 48px height, 1px `#CBD5E1` border. On focus, the border transitions to Primary Blue with a subtle 3px glow.
- **Labels:** Small, Semi-bold (600) labels placed above the input field for maximum legibility.

### Badges & Chips
- **Trust Badges:** Emerald Green background at 10% opacity with 100% opacity Emerald Green text and a "check" icon.
- **Highlight Chips:** Amber `#F59E0B` background at 10% opacity with Amber text for star ratings or "New" labels.

### Navigation
- **Header:** Sticky with a slight backdrop blur and a bottom border of `#E2E8F0`. 
- **Mobile Action Bar:** A high-visibility sticky footer containing two equal-width buttons (WhatsApp and Phone) for conversion-on-the-go.