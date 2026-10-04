# MIDORI MATCHA CLUB — Full Design & Implementation Readiness Audit

**Project**: MIDORI MATCHA CLUB — Modern Matcha & Contemporary Lifestyle Brand  
**Audit Scope**: All screens (`01 — Home`, `02 — Our Menu`, `03 — Cart & Checkout`, `04 — Our Story`, `05 — Locations`, `06 — Journal`, `07 — Contact`, plus `04A/04B/04C — Modal Payment Flows`)  
**Target Stack**: Next.js (App Router) + TypeScript + Tailwind CSS + Lucide Icons  
**Audit Date**: October 2024  

---

## OVERALL VERDICT

### **READY WITH MINOR FIXES**

The visual identity, brand tone, typography system, and wabi-sabi modern hospitality aesthetic of **MIDORI MATCHA CLUB** are remarkably cohesive, distinctive, and commercially believable. The brand avoids generic café SaaS tropes by using thoughtful Japanese editorial composition, tactile photography, and consistent warm palettes. 

Before handing off to engineering for component mapping and development in Next.js + Tailwind CSS, a small set of minor fixes and token standardizations must be resolved (detailed below).

---

## 1. CRITICAL ISSUES
*(Must be reconciled in component specifications before engineers write UI tokens)*

1. **Footer Sub-Branch Locations Discrepancy**:
   - In screens `04 — Our Story`, `05 — Locations`, and `06 — Journal`, the lower-left footer note still says: `Kyoto Flagship • Omotesando Salon • West Village NY`.
   - However, in sessions 2, 3, 14, and 15, the official established brand direction firmly localized all sanctuaries to Indonesia: **Jakarta Selatan (Senopati), BSD City (The Breeze), and Kota Serang (Royal Baroe)**.
   - *Fix requirement*: Standardize the footer café houses copy across every single page to: `Senopati Flagship • BSD City Lakefront • Royal Baroe Serang`.

2. **Active Navigation Pill Inconsistency & Route Synchrony**:
   - On screen `04 — Our Story`, early iterations had "Menu" highlighted instead of "Our Story", which was patched in subsequent turns.
   - In `07 — Contact` and `06 — Journal`, the navbar shows links `[Home, Menu, Our Story, Locations, Journal, Contact]` while in `01 — Home` through `03 — Cart`, the top links occasionally omit `Contact` or `Journal` from the direct desktop links bar.
   - *Fix requirement*: Create a single authoritative navigation array in Next.js `config/navigation.ts` with 6 standard routes: `Home (/), Menu (/menu), Our Story (/our-story), Locations (/locations), Journal (/journal), Contact (/contact)`.

---

## 2. MAJOR ISSUES
*(Inconsistencies that affect Design System tokenization or UX flow)*

1. **Dual Styling for Button Radii & Badges**:
   - Most buttons use full pill rounding (`rounded-full`), such as `Explore Our Menu`, `Order Now`, and navigation pills.
   - A few form inputs and secondary filter buttons (`07 — Contact` inputs, filter chips in `06 — Journal`) alternate between `rounded-xl` (12px), `rounded-2xl` (16px), and `rounded-full`.
   - *Fix requirement*: Codify standard radii in Tailwind:
     - Interactive Actions & Buttons: `rounded-full` (100% pill).
     - Form Inputs & Textareas: `rounded-2xl` (`1rem / 16px`).
     - Content Cards & Modals: `rounded-3xl` (`1.5rem / 24px` to `2rem / 32px`).

2. **Currency and Price Formatting Consistency**:
   - Following the Indonesian localization, menu items and checkout modals use `Rp` (Indonesian Rupiah). 
   - Need to enforce uniform formatting helper in TypeScript: `formatRupiah(value: number) => "Rp " + value.toLocaleString("id-ID")` (e.g., `Rp 48.000` instead of mixing `IDR 48K`, `Rp48.000`, or loose spacing).

3. **Map Section Implementability**:
   - The interactive stylized map on `05 — Locations` is an illustrative cartographic vector showing Java island nodes.
   - In Next.js, this should not attempt an expensive Mapbox/Google Maps raster style that breaks the editorial look.
   - *Fix requirement*: Implement as an interactive SVG component (`JavaSanctuaryMap.tsx`) with animated SVG pulsers and tooltip popups for the three locations, paired with a standard Google Maps external link (`target="_blank"`).

---

## 3. MINOR ISSUES
*(Polish-level improvements and developer ergonomics)*

1. **CTA Banner Headline Repetition**:
   - The dark forest-green closing banner uses variations of:
     - Home: *"Taste The Craft. See you over a matcha."*
     - Locations: *"Your next matcha moment starts here."*
     - Journal: *"Read a little. Sip a little."*
     - Contact: *"See you over a matcha."*
   - While harmonious, standardize the props of `<ClosingCtaBanner />` to accept `eyebrow`, `title`, `description`, `primaryCta`, and `secondaryCta`.
2. **Form Interaction States (Screen 07)**:
   - The contact form fields need clearly specified hover, focus-visible (`ring-2 ring-emerald-700/30`), and error states for React Hook Form / Zod validation.
3. **Cart Badge Count**:
   - The navigation bag icon shows a static badge `[4]` across all desktop screens. Ensure in Next.js this connects to a lightweight `useCartStore` (Zustand or React Context) defaulting to `0` when empty.

---

## 4. DESIGN SYSTEM FINDINGS

### A. Color Palette (`tailwind.config.ts` Tokens)

| Token Name | Hex Code | Semantic Role |
|---|---|---|
| `surface-cream` | `#FBF9F1` / `#F8F6EE` | Master page background, warm travertine canvas |
| `surface-card` | `#FFFFFF` | Card containers, modal sheets, elevated surfaces |
| `surface-muted` | `#F1EEDF` / `#EBE7DA` | Pill badges, subtle borders, input backgrounds |
| `midori-green` | `#6F8F52` | Primary brand accent, active nav indicator, badges |
| `midori-dark` | `#2D3E24` / `#23331C` | High-contrast CTA buttons, footer, dark banner sections |
| `midori-light` | `#EAF0E2` | Light green badge fills, subtle status tints |
| `text-primary` | `#1A2016` / `#1F241E` | High-contrast editorial titles, body copy |
| `text-muted` | `#667061` / `#73796E` | Supporting captions, metadata, address labels |
| `border-subtle` | `#E5E0D2` | Dividers, card borders, subtle grid outlines |

### B. Typography Scale (Epilogue / Plus Jakarta Sans)

- **Headings Font**: Epilogue (or Newsreader / Cormorant italic accents where serif flair is paired)
- **Body Font**: Plus Jakarta Sans / Inter / Epilogue sans
- **Type Scale**:
  - `Hero H1`: `text-5xl md:text-7xl font-light tracking-tight` (with *italicized* keyword accents)
  - `Section H2`: `text-3xl md:text-5xl font-medium tracking-tight`
  - `Card H3`: `text-xl md:text-2xl font-semibold`
  - `Eyebrow / Badge`: `text-xs font-semibold tracking-widest uppercase`
  - `Body Regular`: `text-base text-stone-700 leading-relaxed`
  - `Metadata / Small`: `text-xs md:text-sm text-stone-500`

### C. Spacing & Grid System
- **Max Content Width**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Section Vertical Rhythm**: `py-16 md:py-24 lg:py-32`
- **Card Gaps**: `gap-6 md:gap-8`

### D. Image Treatment
- **Aspect Ratios**: 
  - Featured Heroes: `16:10` or `4:3` with soft `rounded-3xl`
  - Menu Items: `1:1` square or `4:5` vertical portrait
  - Architectural Cards: `16:10` landscape with warm color temperature
- **Overlay**: Gentle warm vignette; no harsh contrast filters.

---

## 5. REUSABLE NEXT.JS COMPONENTS LIST

```
components/
├── layout/
│   ├── Navbar.tsx             # Sticky glassmorphism header, brand mark, routes, cart pill
│   ├── Footer.tsx             # Newsletter subscription, directory links, Indonesian locations
│   └── MobileMenu.tsx         # Slide-over drawer navigation for mobile
├── ui/
│   ├── Button.tsx             # Primary (Dark Forest), Secondary (Outline), Ghost
│   ├── Badge.tsx              # Eyebrow status pills (e.g., "COME FIND YOUR GREEN")
│   ├── Input.tsx              # Travertine-tinted input fields with focus ring
│   ├── Select.tsx             # Inquiry dropdowns
│   └── Modal.tsx              # Accessible dialog overlay (Radix UI / Headless UI)
├── modules/
│   ├── ClosingCtaBanner.tsx   # Full-width dark forest green CTA with two action buttons
│   ├── SanctuaryMap.tsx       # Stylized interactive SVG map of Java
│   ├── LocationCard.tsx       # Teahouse card (Photo, hours, address, directions link)
│   ├── ArticleCard.tsx        # Journal card (Category, photo, title, read time)
│   ├── MenuItemCard.tsx       # Drink & dessert card with price, tags, and Add to Bag
│   ├── CartDrawer.tsx         # Slide-out cart with subtotal calculation
│   └── InstagramFeedGrid.tsx  # 4-column aesthetic social community image grid
```

---

## 6. RESPONSIVE DESIGN AUDIT & RISKS

1. **Navigation Bar (Mobile Breakpoint < 768px)**:
   - *Observation*: Desktop displays 6 text links + Cart button + "Order Now" button.
   - *Mobile Strategy*: Collapse text links into a refined slide-over sheet (hamburger menu). The cart icon and mini logo remain sticky in the top bar.
2. **Editorial Hero Split Sections (Screens 01, 04, 05, 06)**:
   - *Observation*: 50/50 desktop split (headline left, vertical architecture photo right).
   - *Mobile Strategy*: Flex-column-reverse or text-first, photo-second with `aspect-[4/3]` to prevent excessive vertical pushing on mobile screens.
3. **Interactive Java Map (`05 — Locations`)**:
   - *Observation*: Horizontal map layout is wide.
   - *Mobile Strategy*: Allow horizontal pan or convert to a vertical sequence of location cards with miniature static pin markers on mobile.
4. **Checkout & Payment Modals (Screens 04A/04B/04C)**:
   - *Mobile Strategy*: Display as bottom sheets (`drawer` pattern) on mobile viewports rather than centered floating dialogs, ensuring thumb reachability.

---

## 7. UX & CONTENT READINESS

- **User Journey Clarity**: Clear and intuitive navigation paths:
  - `Home` → `Menu` → `Cart & Checkout` → `Payment (QRIS / VA / CC)`
  - `Locations` → Store details + directions
  - `Journal` → Cultural story deep dive → CTA back to Menu
  - `Contact` → Inquiry submission + direct WhatsApp channel
- **Language & Copy Audit**: 
  - 100% verified English primary copy throughout.
  - Zero traces of inadvertent French, Italian, or generic lorem ipsum.
  - Proper cultural terms used with intentionality: *Chanoyu*, *Chasen*, *Chawan*, *Ichiban-cha*, *Okumidori*, *Wabi-sabi*.
  - Addresses properly localized to Indonesia (`Jl. Senopati No. 45, Jakarta Selatan`, `The Breeze BSD City`, `Jl. Veteran, Royal Baroe, Kota Serang`).

---

## FINAL RECOMMENDATION

### **Proceed directly to Component Mapping & Next.js Implementation.**

The design system and layout foundations are complete, visually aligned, and thoroughly documented. By building the reusable component library defined above and applying the footer and navigation prop standardizations, the frontend engineering team has everything required to build a pixel-perfect, high-performance web experience.
