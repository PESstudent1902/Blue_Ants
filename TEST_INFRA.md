# The Blue Ants — E2E Testing Infrastructure & Specification
**Document Version**: 1.0.0  
**Target Environment**: Node.js v16+ (Zero external npm binary dependencies required)  
**Test Suite Path**: `tests/`  
**Execution Command**: `node tests/e2e_runner.js`  

---

## 1. Test Architecture Overview

The Blue Ants automated End-to-End (E2E) testing framework provides full-stack automated verification of the luxury corporate gifting platform across visual tokens, typography, Hick's law taxonomy, volume loss-aversion calculations, quotation workflows, WhatsApp concierge dispatch (`+91 9916418879`), canvas unboxing engine, responsive bottom sheets, and static edge deployment configurations.

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                        BLUE ANTS TEST SUITE HARNESS                             │
│                           (tests/e2e_runner.js)                                 │
├─────────────────────────────────────────────────────────────────────────────────┤
│  • Headless Browser & DOM Simulation Sandbox (Window, Document, Canvas, Touch)  │
│  • CSS Token & Ast Style Parser (Obsidian Noir, Champagne Gold, Hairline rules) │
│  • Asset Integrity Inspector (130 Unboxing Frames, Product Photography)        │
│  • Formatter & WhatsApp URI Protocol Validator (+91 9916418879)                 │
└──────────────────────────────────────┬──────────────────────────────────────────┘
                                       │
        ┌──────────────────────────────┼──────────────────────────────┐
        │                              │                              │
        ▼                              ▼                              ▼
┌───────────────────┐        ┌───────────────────┐        ┌───────────────────┐
│      TIER 1       │        │      TIER 2       │        │      TIER 3       │
│ Feature Isolation │        │ Boundary & Corner │        │ Cross-Feature     │
│ (>=5 tests/feat)  │        │ Cases (MOQ, Qty)  │        │ Workflows         │
│ (>=90 test cases) │        │ (25+ test cases)  │        │ (15+ test cases)  │
└───────────────────┘        └───────────────────┘        └───────────────────┘
                                       │
                                       ▼
                             ┌───────────────────┐
                             │      TIER 4       │
                             │ Real-World B2B    │
                             │ Procurement Flows │
                             │ (10+ test cases)  │
                             └───────────────────┘
```

---

## 2. Feature Inventory & Test Coverage Matrix

Every feature from `PROJECT.md` is tested across multiple test tiers:

| # | Feature Key | Feature Name | Tier 1 Tests | Tier 2 Boundaries | Tier 3 Pairwise | Tier 4 Real-World |
|---|-------------|--------------|:------------:|:-----------------:|:---------------:|:-----------------:|
| 1 | `M1-TOKENS` | Editorial Luxury Design Tokens | 5 | Yes | Yes | Yes |
| 2 | `M1-PURGE` | Anti-AI Polish & Cliché Purge | 5 | Yes | N/A | N/A |
| 3 | `M1-TYPO` | Classical Typography & Editorial Copy | 5 | Yes | N/A | Yes |
| 4 | `M2-TAXONOMY` | 4-Pillar Hick's Law Catalog Taxonomy | 6 | Yes | Yes | Yes |
| 5 | `M2-CALC` | Behavioral Pricing & Loss Aversion Calculator | 6 | Yes | Yes | Yes |
| 6 | `M2-DRAWER` | Frictionless B2B RFP Quote Drawer | 6 | Yes | Yes | Yes |
| 7 | `M2-WHATSAPP`| Direct WhatsApp Concierge Dispatch (`+91 9916418879`) | 6 | Yes | Yes | Yes |
| 8 | `M2-SEARCH` | Search Engine & Runtime Bug Fix | 5 | Yes | Yes | Yes |
| 9 | `M3-CANVAS` | 60FPS Dual-Canvas Scrubbing Engine (130 Frames) | 6 | Yes | Yes | N/A |
| 10| `M3-BLUR` | Mirrored Background Blur & Mobile GPU Protection | 5 | Yes | N/A | N/A |
| 11| `M3-PILL` | Floating Unboxing Progress Pill & Jump Anchor | 5 | Yes | N/A | N/A |
| 12| `M3-RAF` | Hero RAF Idle & Visibility Optimization | 5 | Yes | N/A | N/A |
| 13| `M4-SHEETS` | Mobile Material Bottom Sheets (Drag Dismiss) | 5 | Yes | Yes | Yes |
| 14| `M4-DOCK` | Mobile Thumb Navigation Dock & Live Cart Badge | 5 | Yes | Yes | Yes |
| 15| `M4-TOUCH` | Touch Ergonomics (>=48dp Touch Targets) | 5 | Yes | N/A | N/A |
| 16| `M4-PWA` | PWA Manifest, Zero CLS & Edge Config | 5 | Yes | N/A | N/A |
| 17| `M5-RUNNER` | Automated Standalone Test Runner & Reporter | 5 | Yes | Yes | Yes |
| 18| `M5-STRESS` | Adversarial Stress & Input Hardening | 5 | Yes | Yes | Yes |

**Total Test Suite Volume**: >140 distinct, verifiable test cases.

---

## 3. Test Suites Structure & Methodology

### Tier 1: Feature Isolation Tests (`tests/suites/tier1_features.js`)
Validates individual component interfaces, DOM element presence, CSS variable declarations, data schemas, calculation formulas, and event listeners. Every feature has >=5 explicit test cases verifying both positive expectations and negative invariant checks.

### Tier 2: Boundary & Corner Cases (`tests/suites/tier2_boundaries.js`)
Stress tests boundary conditions:
- **MOQ Thresholds**: Testing exact MOQ, MOQ - 1 (clamped to MOQ), and boundary transitions between bulk tiers.
- **Zero & Negative Quantities**: Stepper decrements below MOQ, direct zero inputs, and negative delta safety.
- **Extreme Enterprise Orders**: Orders exceeding 10,000 units, floating-point precision in currency calculations, and formatting commas.
- **Empty Quote Submission Prevention**: Attempting to submit empty cart prompts toast warning and prevents WhatsApp navigation.
- **Search Edge Cases**: Queries with special characters (`#$%^&*()_+`), regex metacharacters, and unmatched strings.
- **Viewport Resilience**: Dynamic resize handling between desktop (>=1024px) and mobile (<768px).
- **Missing Frame Fallback**: Canvas engine radiates outwards to locate nearest decoded frame if intermediate frames are pending.

### Tier 3: Cross-Feature & Pairwise Workflows (`tests/suites/tier3_cross_features.js`)
Validates interactive compounding states:
- Filtering by category + search query + price sorting.
- Opening Quick View from filtered catalog + adjusting quantity + adding to RFP quote cart.
- Desktop and Mobile filter checkbox two-way synchronization.
- Multi-item cart volume recalculation and aggregate savings math.
- Complete RFP drawer submission generating structured WhatsApp markdown payload.

### Tier 4: Real-World B2B Procurement Scenarios (`tests/suites/tier4_real_world.js`)
Simulates full corporate procurement personas:
1. **C-Suite VIP Milestone Gifting**: 250 units of Sovereign Leather Suites + 100 units of Highland Whiskey Decanters for Apex Global Technologies.
2. **250-Pack ESG New Hire Onboarding**: 250 Terra Eco-Luxe kits with physical pre-production sample request and GST tax invoice.
3. **Annual Corporate Summit Gourmet Hampers**: 300 Grand Cru Gold Truffles + 50 Barista Reserve Coffee Sets with multi-address logistics.

---

## 4. Test Execution Instructions

### Running the Full Test Suite
From the project root:
```bash
node tests/e2e_runner.js
```

### Running Specific Test Tiers
```bash
node tests/e2e_runner.js --tier=1
node tests/e2e_runner.js --tier=2
node tests/e2e_runner.js --tier=3
node tests/e2e_runner.js --tier=4
```

### Filtering by Feature Name
```bash
node tests/e2e_runner.js --grep="WhatsApp"
node tests/e2e_runner.js --grep="Calculator"
```

---

## 5. Coverage & Quality Thresholds

- **Total Assertion Count**: >= 140 assertions.
- **Tier 1 Feature Density**: >= 5 test cases per feature (18 features = >= 90 tests).
- **Test Pass Rate Threshold**: 100% (Zero unhandled rejections or assertion failures).
- **Runtime Execution Budget**: < 5,000ms for the full suite execution.
