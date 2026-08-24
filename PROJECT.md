# Project: The Blue Ants Luxury Platform Overhaul

## Architecture Overview
The Blue Ants platform is a high-performance, single-page corporate gifting web application built on pure modern vanilla web standards (HTML5, Modern CSS3 with Tailwind CSS utility injection, and modular ES6+ JavaScript), ensuring instant 100% static edge deployment compatibility on Vercel with zero build step errors.

### System Components:
1. **Unboxing Canvas Engine (`js/video-scroll.js`)**: 60FPS scroll-synchronized dual-canvas frame scrubbing engine rendering 130 high-resolution photographic frames (`assets/frames/frame_0000.jpg` to `frame_0129.jpg`) with asynchronous JPEG pre-decoding (`img.decode()`), adaptive lerp inertia (0.24 desktop, 0.36 mobile), mirrored ambient background blur on desktop, and GPU fill-rate protection on mobile.
2. **Catalog & B2B Quotation Engine (`js/catalog.js`)**: Core enterprise catalog managing 8 bespoke corporate gift suites, 4-tier Hick's Law categorization, live search & multi-faceted attribute filtering, dynamic bulk pricing & loss-aversion calculator, Quick View modal / bottom sheet, multi-item RFP Quote Drawer, and formatted WhatsApp quotation dispatch to `+91 9916418879`.
3. **Design System & Global Styling (`css/style.css` & `index.html`)**: High-end editorial luxury aesthetic (Obsidian Noir `#07090e`, Warm Charcoal `#10141d`, Champagne Gold `#d4af37`/`#e6ca65`), classical typography (Cormorant Garamond/Cinzel + Inter/Plus Jakarta Sans), hairline borders (`rgba(255, 255, 255, 0.06)`), mobile Material bottom sheets with touch drag dismissal, and fixed thumb navigation dock.
4. **Static Edge Infrastructure (`vercel.json`, `manifest.json`, `package.json`)**: Immutable asset caching for 130 unboxing frames and product photography, PWA standalone configuration, and clean URLs.

---

## Feature Inventory

Every feature identified in the comprehensive survey is mapped to a distinct milestone below. No feature is left unassigned.

| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | Editorial Luxury Design Tokens | Obsidian Noir (`#07090e`, `#090c13`), Warm Charcoal (`#10141d`, `#141924`), Champagne Gold (`#d4af37`, `#e6ca65`), hairline borders (`rgba(255,255,255,0.06)`), and soft diffuse shadows. | M1 | Survey |
| 2 | Anti-AI Polish & Cliché Purge | Complete elimination of generic AI glow orbs (`.ambient-glow` with 120px blur), glowing box-shadow halos, harsh saturated gradients (orange Bestseller tags), robotic copy, and gimmicky 3D card tilt transforms. | M1 | Survey |
| 3 | Classical Typography & Editorial Copy | Classical luxury serif display (Cormorant Garamond / Cinzel) paired with precision-spaced sans (Inter / Plus Jakarta Sans), Major Third (1.250) modular scale, body line lengths bounded to 65–75ch, and refined luxury copy. | M1 | Survey |
| 4 | 4-Pillar Hick's Law Catalog Taxonomy | Streamline fragmented categories into 4 enterprise buying pillars: Executive VIP, Welcome Kits, Sustainable Eco-Luxe, and Gourmet Connoisseur. | M2 | Survey |
| 5 | Behavioral Pricing & Loss Aversion Calculator | Dynamic volume discount calculator highlighting absolute dollar savings (e.g., *"Save $1,250 on 250 units"*), default selection to popular enterprise MOQ tiers, and real-time total investment updates. | M2 | Survey |
| 6 | Frictionless B2B RFP Quote Drawer | Slide-in drawer on desktop and bottom sheet on mobile for multi-item quotation, live line-item stepper adjustments, empty state validation, and corporate request notes. | M2 | Survey |
| 7 | Direct WhatsApp Concierge Dispatch | Pre-formatted structured markdown quotation payload dispatched directly to `+91 9916418879`, with sample box request, GST invoice, and multi-address shipping flags. | M2 | Survey |
| 8 | Search Engine & Runtime Bug Fix | Implement missing `setupSearchListeners()` function to resolve uncaught ReferenceError on `DOMContentLoaded`, enabling real-time search across titles, descriptions, and categories with empty state resets. | M2 | Survey |
| 9 | 60FPS Dual-Canvas Scrubbing Engine | 130-frame sequence rendered with `requestAnimationFrame`, asynchronous image pre-decoding (`img.decode()`), and adaptive lerp inertia for fluid 60FPS response. | M3 | Survey |
| 10 | Mirrored Background Blur & Fill-Rate Protection | Ultra-wide desktop pillarbox elimination via background blur canvas, automatically suppressed on mobile (`<768px`) to conserve 100% GPU fill-rate and battery. | M3 | Survey |
| 11 | Floating Unboxing Progress Pill & Jump | Bottom floating pill with real-time percentage feedback (0–100%) and instant "Explore Catalog" smooth scroll jump link. | M3 | Survey |
| 12 | Hero RAF Idle Optimization | Pause `requestAnimationFrame` loop when `#scrollHeroContainer` is out of viewport using IntersectionObserver to prevent idle CPU/GPU consumption. | M3 | Survey |
| 13 | Mobile Material Bottom Sheets | Quick View and Faceted Filter dialogs automatically render as native bottom sheets on mobile/tablet viewports (`<=1024px`) with touch drag-to-dismiss gesture (>100px). | M4 | Survey |
| 14 | Mobile Thumb Navigation Dock | Fixed bottom dock with live quotation badge count, safe-area inset padding, and active navigation section indicators. | M4 | Survey |
| 15 | Touch Ergonomics (>=48dp) | Enforce 48dp minimum bounding touch targets across all steppers (`+`/`-`), modal close buttons (`w-11 h-11`), filter pills, and WhatsApp triggers. | M4 | Survey |
| 16 | PWA Manifest & Zero CLS Guardrails | PWA standalone manifest configuration, theme color `#07090e`, aspect-ratio image containers, font-display swap, and zero cumulative layout shift. | M4 | Survey |
| 17 | E2E Test Suite & Test Runner (Tiers 1-4) | Comprehensive automated test harness validating all visual tokens, Hick's law taxonomy, volume pricing, WhatsApp formatting, canvas engine, and mobile responsiveness. | M5 | Track B |
| 18 | Adversarial Coverage Hardening (Tier 5) | White-box adversarial testing covering boundary quantities, zero/negative inputs, search edge cases, rapid unboxing scrubs, and DOM stress testing. | M5 | Track B |

---

## Milestones

| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| **M1** | Bespoke Editorial Luxury Visual Identity & Anti-AI Polish | Design tokens (`#07090e`, `#10141d`, `#d4af37`), hairline borders, soft shadows, typography modular scale (Cormorant/Cinzel + Inter), copy rewriting, purge AI glows/orbs/3D card tilt. | None | **DONE** |
| **M2** | Cognitive Psychology & B2B Conversion Architecture | 4-tier Hick's law taxonomy, fix `setupSearchListeners` ReferenceError, volume pricing calculator with loss aversion dollar savings, RFP quote drawer, WhatsApp dispatch to `+91 9916418879`. | M1 | **DONE** |
| **M3** | Tactile 60FPS Unboxing Canvas Experience | 130-frame sequence scrubbing, asynchronous decoding, adaptive lerp inertia, mobile GPU fill-rate protection, unboxing progress pill, IntersectionObserver RAF optimization. | None | **DONE** |
| **M4** | Responsive Perfection & Mobile Touch Ergonomics | Mobile Material bottom sheets with drag-to-dismiss, bottom thumb dock with quote badge, >=48dp touch targets, PWA manifest, and zero CLS. | M1, M2 | **DONE** |
| **M5** | Final Milestone: 100% E2E Verification & Adversarial Hardening | Phase 1: Pass 100% E2E test suite (Tiers 1-4). Phase 2: White-box adversarial testing (Tier 5) and coverage hardening. | M1, M2, M3, M4 | **DONE** |

---

## Interface Contracts & Shared Data

### 1. Catalog Product Schema (`js/catalog.js`)
```typescript
interface BulkTier {
  min: number;
  max: number;
  price: number;
  discount: string;
}

interface Product {
  id: string;                      // 'prod-1' to 'prod-8'
  name: string;                    // e.g. 'The Sovereign: Executive Leather Suite'
  category: 'executive' | 'welcome' | 'eco-luxe' | 'gourmet'; // 4 Hick's Law Pillars
  categoryLabel: string;           // 'Executive VIP', 'Welcome Kits', etc.
  price: number;                   // Base unit price
  moq: number;                     // Minimum Order Quantity
  rating: number;                  // e.g. 4.9
  reviews: number;                 // e.g. 428
  image: string;                   // 'assets/products/...'
  badge: string;                   // 'Enterprise Choice', 'Bestseller', etc.
  badgeType: 'choice' | 'bestseller';
  leadTime: 'express' | 'standard' | 'custom';
  leadTimeLabel: string;           // '48h Express Ready', '5-7 Days Standard'
  brandingOptions: string[];       // ['gold-foil', 'laser', 'debossed', 'screen-print']
  features: string[];              // 4 key specifications
  description: string;             // Editorial luxury storytelling
  boxContents: string[];           // Itemized unboxing list
  bulkTiers: BulkTier[];           // Tiered volume discount matrix
}
```

### 2. WhatsApp Concierge Interface
- **Concierge Destination**: `https://wa.me/919916418879?text=...`
- **Phone Number Format**: `+91 9916418879`
- **Inquiry Payload Structure**:
  - Header: `*NEW CORPORATE QUOTE REQUEST — THE BLUE ANTS*`
  - Organization & Notes
  - Itemized Packages (Name, Quantity, Tier Unit Price, Line Total)
  - Estimated Quotation Total & Total Bulk Savings
  - Corporate Toggles (Physical Sample Box, GST Invoice, Multi-Address Shipping)
  - Footer Call to Action

### 3. Canvas Unboxing Engine Interface (`js/video-scroll.js`)
- **Canvas Elements**: `#heroCanvas` (Foreground 1920x1080), `#heroBlurCanvas` (Background 960x540)
- **Frame Sequence**: `assets/frames/frame_0000.jpg` to `assets/frames/frame_0129.jpg` (Total 130 frames)
- **Progress Metrics**: Real-time normalized scroll progress $[0.0, 1.0]$ driving frame index $[0, 129]$
- **Inertia Factors**: `lerpFactor = 0.24` (Desktop), `0.36` (Mobile)
