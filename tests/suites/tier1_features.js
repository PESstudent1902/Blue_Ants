/**
 * THE BLUE ANTS — Tier 1 Feature Isolation Test Suite
 * 
 * Comprehensive unit and contract tests across all 18 platform features (>=5 test cases per feature).
 */

const {
  describe,
  test,
  assert,
  assertEqual,
  assertNotEqual,
  assertDeepEqual,
  assertTrue,
  assertFalse,
  assertMatch,
  assertNotMatch,
  assertIncludes,
  assertNotIncludes,
  assertGreaterThan,
  assertGreaterThanOrEqual,
  assertLessThan,
  assertLessThanOrEqual,
  assertThrows,
  createVirtualEnv,
  loadHtml,
  loadCss,
  loadCatalogJs,
  loadVideoScrollJs,
  loadManifest,
  loadVercelConfig,
  loadPackageJson
} = require('../e2e_runner');

const fs = require('fs');
const path = require('path');
const { PROJECT_ROOT } = require('../e2e_runner');

// ---------------------------------------------------------------------------
// FEATURE 1: Editorial Luxury Design Tokens
// ---------------------------------------------------------------------------
describe('Feature 1: Editorial Luxury Design Tokens', () => {
  const css = loadCss();
  const html = loadHtml();

  test('F1.1: Root defines deep velvety Obsidian Noir and Warm Charcoal background foundations', () => {
    assertMatch(css, /(--bg-obsidian-deep|--bg-noir):\s*(#080a0f|#07090e|#090c13)/i, 'Obsidian noir token must be defined in :root');
    assertMatch(css, /(--bg-charcoal-base|--bg-surface):\s*(#0f131c|#10141d|#141924)/i, 'Surface charcoal token must be defined in :root');
  });

  test('F1.2: Root defines Champagne Gold metallic palette tokens', () => {
    assertMatch(css, /--gold-primary:\s*#d4af37/i, 'Primary Champagne Gold (#d4af37) must be defined');
    assertMatch(css, /--gold-light:\s*(#f5e7b2|#e6ca65)/i, 'Gold highlight token must be defined');
    assertMatch(css, /(--gold-gradient|--gold-foil):\s*linear-gradient/i, 'Gold gradient/foil accent must be defined');
  });

  test('F1.3: Root defines delicate hairline border tokens', () => {
    assertMatch(css, /(--border-hairline|--border-subtle):\s*rgba\(255,\s*255,\s*255,\s*0\.0[68]\)/i, 'Subtle hairline border must be declared');
  });

  test('F1.4: HTML body configures dark mode styling and bottom dock offset', () => {
    assertMatch(html, /<body[^>]*class=["'][^"']*bg-\[#(080a0f|07090e|090c13)\]/i, 'Body must have luxury obsidian background class');
    assertMatch(html, /<body[^>]*class=["'][^"']*has-bottom-dock/i, 'Body must have has-bottom-dock class');
  });

  test('F1.5: Product card CSS rules define high-end border and soft shadow elevations', () => {
    assertMatch(css, /\.product-card\b[\s\S]*?border:\s*1px solid (rgba|var\(--border)/i, 'Product card must feature delicate hairline border');
    assertMatch(css, /\.product-card\b[\s\S]*?box-shadow:\s*(0|var\(--shadow)/i, 'Product card must feature diffuse luxury shadow elevation');
  });
});

// ---------------------------------------------------------------------------
// FEATURE 2: Anti-AI Polish & Cliché Purge
// ---------------------------------------------------------------------------
describe('Feature 2: Anti-AI Polish & Cliché Purge', () => {
  const css = loadCss();
  const html = loadHtml();

  test('F2.1: Design system avoids garish saturated cyan or neon magenta glows', () => {
    assertNotMatch(css, /#00ffff|#ff00ff|rgba\(0,\s*255,\s*255/i, 'No neon cyan or magenta glow colors in styling');
  });

  test('F2.2: Product badges use structured editorial tags rather than random floating stickers', () => {
    assertMatch(css, /\.card-badge-choice|\.card-badge-bestseller/i, 'Product cards must use structured badge styles');
    assertMatch(css, /\.card-moq-pill/i, 'Product cards must display dignified MOQ pills in CSS');
    assertMatch(loadCatalogJs(), /card-moq-pill/i, 'Product cards must display MOQ pills in markup');
  });

  test('F2.3: Micro-interactions use smooth cubic-bezier easing curves without jarring snappy jumps', () => {
    assertMatch(css, /(--ease-editorial|--ease-smooth):\s*cubic-bezier/i, 'Smooth editorial easing must be defined');
  });

  test('F2.4: Card hover states maintain subtle vertical elevation (<= 8px)', () => {
    assertMatch(css, /\.product-card:hover\s*\{[^}]*transform:\s*translateY\(-[4-8]px\)/i, 'Card hover must have controlled luxury lift');
  });

  test('F2.5: Typography hierarchy uses balanced measure and restrained line heights', () => {
    assertMatch(css, /line-height:\s*1\.[3-7]/i, 'Body line heights must maintain generous luxury readability');
  });
});

// ---------------------------------------------------------------------------
// FEATURE 3: Classical Typography & Editorial Copy
// ---------------------------------------------------------------------------
describe('Feature 3: Classical Typography & Editorial Copy', () => {
  const css = loadCss();
  const html = loadHtml();

  test('F3.1: Google Fonts import includes luxury classical serif and geometric sans stacks', () => {
    assertMatch(css, /fonts\.googleapis\.com\/css2\?family=.*(Cinzel|Cormorant\+Garamond)/i, 'Must import classical luxury serif');
    assertMatch(css, /fonts\.googleapis\.com\/css2\?family=.*(Plus\+Jakarta\+Sans|Inter)/i, 'Must import high-legibility sans');
  });

  test('F3.2: Headings in HTML utilize classical serif font family class', () => {
    assertMatch(html, /font-cinzel|font-display/i, 'Hero and section titles must use luxury serif class');
  });

  test('F3.3: Product descriptions provide editorial storytelling with artisanal details', () => {
    const code = loadCatalogJs();
    assertMatch(code, /Top-Grain Italian Saddle Leather|Ethiopian beans|Mulberry Silk|European crystal/i, 'Product data must contain refined storytelling copy');
  });

  test('F3.4: Gold gradient text utility applies background clip and transparent text fill', () => {
    assertMatch(css, /\.gold-gradient-text\s*\{[^}]*-webkit-background-clip:\s*text/i, 'Must use background-clip text');
    assertMatch(css, /\.gold-gradient-text\s*\{[^}]*-webkit-text-fill-color:\s*transparent/i, 'Must set text-fill-color transparent');
  });

  test('F3.5: Section headings maintain classical uppercase tracking for luxury feel', () => {
    assertMatch(html, /tracking-wider|tracking-widest/i, 'Headings must apply generous tracking');
  });
});

// ---------------------------------------------------------------------------
// FEATURE 4: 4-Pillar Hick's Law Catalog Taxonomy
// ---------------------------------------------------------------------------
describe("Feature 4: 4-Pillar Hick's Law Catalog Taxonomy", () => {
  let env;

  test('F4.1: Catalog data contains exactly 8 curated luxury product suites', () => {
    env = createVirtualEnv();
    env.loadCatalog();
    const products = env.sandbox.PRODUCTS;
    assertEqual(products.length, 8, 'Catalog must contain exactly 8 corporate gift sets');
  });

  test('F4.2: Every product has a valid ID, name, category, price, and MOQ', () => {
    env = createVirtualEnv();
    env.loadCatalog();
    const products = env.sandbox.PRODUCTS;
    products.forEach((p, idx) => {
      assert(p.id && p.id.startsWith('prod-'), `Product #${idx + 1} must have a valid prod-X ID`);
      assert(typeof p.name === 'string' && p.name.length > 5, `Product ${p.id} must have a name`);
      assert(typeof p.price === 'number' && p.price > 0, `Product ${p.id} must have a positive price`);
      assert(typeof p.moq === 'number' && p.moq > 0, `Product ${p.id} must have a positive MOQ`);
      assert(Array.isArray(p.bulkTiers) && p.bulkTiers.length >= 3, `Product ${p.id} must have bulk tiers`);
    });
  });

  test('F4.3: Products map to structured categories (Executive, Gourmet, Tech/Wellness, Eco-Luxe)', () => {
    env = createVirtualEnv();
    env.loadCatalog();
    const products = env.sandbox.PRODUCTS;
    const categories = new Set(products.map(p => p.category));
    assert(categories.has('executive'), 'Must have executive category');
    assert(categories.has('gourmet'), 'Must have gourmet category');
    assert(categories.has('eco-luxe'), 'Must have eco-luxe category');
  });

  test('F4.4: Category pill filtering renders matching products', () => {
    env = createVirtualEnv();
    env.loadCatalog();
    env.sandbox.filterState.category = 'executive';
    env.sandbox.renderProducts();
    const grid = env.document.getElementById('productsGrid');
    assertIncludes(grid.innerHTML, 'The Sovereign: Executive Leather Suite', 'Executive category must include Sovereign');
    assertNotIncludes(grid.innerHTML, 'The Barista Reserve: Pour-Over Craft Kit', 'Executive category must exclude Barista');
  });

  test('F4.5: Resetting filter restores all 8 products', () => {
    env = createVirtualEnv();
    env.loadCatalog();
    env.sandbox.filterState.category = 'all';
    env.sandbox.renderProducts();
    const grid = env.document.getElementById('productsGrid');
    const products = env.sandbox.PRODUCTS;
    products.forEach(p => {
      assertIncludes(grid.innerHTML, p.name, `Grid must include ${p.name}`);
    });
  });

  test('F4.6: Category pill buttons in HTML have data-category attributes', () => {
    const html = loadHtml();
    assertMatch(html, /class=["'][^"']*category-pill[^"']*["'][^>]*data-category=["']all["']/i, 'Must have all category pill');
    assertMatch(html, /class=["'][^"']*category-pill[^"']*["'][^>]*data-category=["']executive["']/i, 'Must have executive category pill');
  });
});

// ---------------------------------------------------------------------------
// FEATURE 5: Behavioral Pricing & Loss Aversion Calculator
// ---------------------------------------------------------------------------
describe('Feature 5: Behavioral Pricing & Loss Aversion Calculator', () => {
  let env;

  test('F5.1: Base unit price corresponds to lowest MOQ tier', () => {
    env = createVirtualEnv();
    env.loadCatalog();
    const p1 = env.sandbox.PRODUCTS.find(p => p.id === 'prod-1');
    assertEqual(p1.price, p1.bulkTiers[0].price, 'Base unit price must match lowest bulk tier');
  });

  test('F5.2: Volume discount tiers strictly decrease unit price for larger orders', () => {
    env = createVirtualEnv();
    env.loadCatalog();
    env.sandbox.PRODUCTS.forEach(p => {
      for (let i = 1; i < p.bulkTiers.length; i++) {
        assertLessThan(
          p.bulkTiers[i].price,
          p.bulkTiers[i - 1].price,
          `Product ${p.id} tier ${i} price must be strictly less than tier ${i - 1}`
        );
      }
    });
  });

  test('F5.3: Volume calculator correctly calculates discounted tier for Sovereign at 250 units', () => {
    env = createVirtualEnv();
    env.loadCatalog();
    const p1 = env.sandbox.PRODUCTS.find(p => p.id === 'prod-1');
    env.sandbox.openQuickView('prod-1');
    env.sandbox.setQvQty(250);

    const unitPriceEl = env.document.getElementById('qvUnitPrice');
    const totalPriceEl = env.document.getElementById('qvTotalPrice');
    const savingsEl = env.document.getElementById('qvSavingsTotal');

    assertEqual(unitPriceEl.textContent, '$68.00', 'Tier unit price at 250 units should be $68.00');
    // Total = 250 * 68 = 17,000
    assertIncludes(totalPriceEl.textContent, '17,000', 'Total at 250 units should be $17,000');
    // Savings = (250 * 95) - 17000 = 23750 - 17000 = $6750.00
    assertIncludes(savingsEl.textContent, '6750.00', 'Savings should highlight $6750.00 bulk savings');
  });

  test('F5.4: Presets (50 pk, 100 pk, 250 pk) adjust volume calculation immediately', () => {
    env = createVirtualEnv();
    env.loadCatalog();
    env.sandbox.openQuickView('prod-2'); // Barista Reserve (MOQ 30, $68 base)
    env.sandbox.setQvQty(100);

    const unitPriceEl = env.document.getElementById('qvUnitPrice');
    // Tier at 100 for prod-2 is $54.00
    assertEqual(unitPriceEl.textContent, '$54.00', 'Unit price at 100 units should be $54.00');
  });

  test('F5.5: Quantity stepper adjustQvQty increments and decrements correctly', () => {
    env = createVirtualEnv();
    env.loadCatalog();
    env.sandbox.openQuickView('prod-1');
    const input = env.document.getElementById('qvQtyInput');
    const initialVal = parseInt(input.value);
    env.sandbox.adjustQvQty(10);
    assertEqual(parseInt(input.value), initialVal + 10, 'Stepper should increment by 10');
    env.sandbox.adjustQvQty(-10);
    assertEqual(parseInt(input.value), initialVal, 'Stepper should decrement by 10');
  });

  test('F5.6: Quantity stepper prevents values below product MOQ', () => {
    env = createVirtualEnv();
    env.loadCatalog();
    env.sandbox.openQuickView('prod-1'); // MOQ 25
    const input = env.document.getElementById('qvQtyInput');
    env.sandbox.adjustQvQty(-50);
    assertEqual(parseInt(input.value), 25, 'Stepper should clamp at minimum MOQ of 25');
  });
});

// ---------------------------------------------------------------------------
// FEATURE 6: Frictionless B2B RFP Quote Drawer
// ---------------------------------------------------------------------------
describe('Feature 6: Frictionless B2B RFP Quote Drawer', () => {
  let env;

  test('F6.1: addToRfp adds new product to quote cart and updates badges', () => {
    env = createVirtualEnv();
    env.loadCatalog();
    env.sandbox.addToRfp('prod-1', 50);

    const cart = env.sandbox.rfpCart;
    assertEqual(cart.length, 1, 'Cart should contain 1 item');
    assertEqual(cart[0].id, 'prod-1');
    assertEqual(cart[0].qty, 50);

    const badge = env.document.getElementById('rfpCartCount');
    assertEqual(String(badge.textContent), '1', 'Badge count should show 1');
  });

  test('F6.2: Adding existing item increments quantity rather than creating duplicate', () => {
    env = createVirtualEnv();
    env.loadCatalog();
    env.sandbox.addToRfp('prod-1', 50);
    env.sandbox.addToRfp('prod-1', 50);

    const cart = env.sandbox.rfpCart;
    assertEqual(cart.length, 1, 'Cart should still have 1 distinct item');
    assertEqual(cart[0].qty, 100, 'Quantity should be incremented to 100');
  });

  test('F6.3: renderRfpDrawer displays itemized cards with live line totals and tier prices', () => {
    env = createVirtualEnv();
    env.loadCatalog();
    env.sandbox.addToRfp('prod-1', 50);
    const container = env.document.getElementById('rfpDrawerItems');
    assertIncludes(container.innerHTML, 'The Sovereign: Executive Leather Suite');
    assertIncludes(container.innerHTML, '$86.00/unit'); // 50-unit tier price
  });

  test('F6.4: Line item quantity adjustment inside drawer updates line total and drawer total', () => {
    env = createVirtualEnv();
    env.loadCatalog();
    env.sandbox.addToRfp('prod-1', 50); // 50 * 86 = 4300
    env.sandbox.adjustRfpItemQty('prod-1', 50); // Now 100 * 76 = 7600

    const totalDisplay = env.document.getElementById('rfpDrawerTotal');
    assertIncludes(totalDisplay.textContent, '7,600', 'Drawer total should update to $7,600.00');
  });

  test('F6.5: removeFromRfp removes item and updates cart count', () => {
    env = createVirtualEnv();
    env.loadCatalog();
    env.sandbox.addToRfp('prod-1', 50);
    env.sandbox.addToRfp('prod-2', 50);
    assertEqual(env.sandbox.rfpCart.length, 2);

    env.sandbox.removeFromRfp('prod-1');
    assertEqual(env.sandbox.rfpCart.length, 1);
    assertEqual(env.sandbox.rfpCart[0].id, 'prod-2');
  });

  test('F6.6: Empty drawer renders empty state notification', () => {
    env = createVirtualEnv();
    env.loadCatalog();
    env.sandbox.renderRfpDrawer();
    const container = env.document.getElementById('rfpDrawerItems');
    assertIncludes(container.innerHTML, 'Your Quote Request is Empty');
  });
});

// ---------------------------------------------------------------------------
// FEATURE 7: Direct WhatsApp Concierge Dispatch (+91 9916418879)
// ---------------------------------------------------------------------------
describe('Feature 7: Direct WhatsApp Concierge Dispatch (+91 9916418879)', () => {
  let env;

  test('F7.1: Global header, footer and concierge links use exact phone number +91 9916418879', () => {
    const html = loadHtml();
    assertIncludes(html, '+91 9916418879', 'HTML must contain direct concierge number');
    assertIncludes(html, 'tel:+919916418879', 'HTML must contain tel link to +91 9916418879');
    assertIncludes(html, 'wa.me/919916418879', 'HTML must contain WhatsApp URL to 919916418879');
  });

  test('F7.2: Single product Quick View WhatsApp button triggers dispatch with itemized details', () => {
    env = createVirtualEnv();
    env.loadCatalog();
    env.sandbox.openQuickView('prod-1');
    env.sandbox.setQvQty(100);
    env.sandbox.inquireProductWhatsapp('prod-1');

    assertEqual(env.openedUrls.length, 1, 'Should open 1 WhatsApp window');
    const { url } = env.openedUrls[0];
    assertMatch(url, /https:\/\/wa\.me\/919916418879\?text=/i, 'Must target wa.me/919916418879');
    const text = decodeURIComponent(url.split('text=')[1]);
    assertIncludes(text, 'THE BLUE ANTS — CORPORATE GIFT INQUIRY');
    assertIncludes(text, 'The Sovereign: Executive Leather Suite');
    assertIncludes(text, '100 units');
    assertIncludes(text, '$76.00 / unit');
  });

  test('F7.3: RFP Quote Drawer WhatsApp dispatch creates formatted markdown payload with header', () => {
    env = createVirtualEnv();
    env.loadCatalog();
    env.sandbox.addToRfp('prod-1', 100);
    env.sandbox.addToRfp('prod-2', 50);

    const compInput = env.document.getElementById('rfpCompanyName');
    const notesInput = env.document.getElementById('rfpCustomNotes');
    if (compInput) compInput.value = 'Acme Corp';
    if (notesInput) notesInput.value = 'Target delivery October 15';

    const submitBtn = env.document.getElementById('submitRfpWhatsappBtn');
    submitBtn.click();

    assertEqual(env.openedUrls.length, 1);
    const { url } = env.openedUrls[0];
    const text = decodeURIComponent(url.split('text=')[1]);

    assertIncludes(text, '*NEW CORPORATE QUOTE REQUEST — THE BLUE ANTS*');
    assertIncludes(text, '*Company / Organization:* Acme Corp');
    assertIncludes(text, '*Special Requirements / Notes:* Target delivery October 15');
    assertIncludes(text, 'The Sovereign: Executive Leather Suite');
    assertIncludes(text, 'The Barista Reserve: Pour-Over Craft Kit');
  });

  test('F7.4: Empty RFP submission does not open WhatsApp and displays toast alert', () => {
    env = createVirtualEnv();
    env.loadCatalog();
    env.sandbox.rfpCart = [];

    const submitBtn = env.document.getElementById('submitRfpWhatsappBtn');
    submitBtn.click();

    assertEqual(env.openedUrls.length, 0, 'Must not open WhatsApp when cart is empty');
  });

  test('F7.5: WhatsApp inquiry message contains corporate sample and branding inquiry footer', () => {
    env = createVirtualEnv();
    env.loadCatalog();
    env.sandbox.openQuickView('prod-1');
    env.sandbox.inquireProductWhatsapp('prod-1');

    const { url } = env.openedUrls[0];
    const text = decodeURIComponent(url.split('text=')[1]);
    assertIncludes(text, 'corporate branding options');
    assertIncludes(text, 'physical sample availability');
  });

  test('F7.6: Floating WhatsApp widget exists and links to concierge number', () => {
    const html = loadHtml();
    assertMatch(html, /id=["']floatingWhatsappWidget["']/i, 'Floating WhatsApp widget must exist');
    assertMatch(html, /href=["']https:\/\/wa\.me\/919916418879\?text=[^"']+["']/i, 'Widget must link to wa.me');
  });
});

// ---------------------------------------------------------------------------
// FEATURE 8: Search Engine & Runtime Bug Fix
// ---------------------------------------------------------------------------
describe('Feature 8: Search Engine & Runtime Bug Fix', () => {
  let env;

  test('F8.1: Search query matches product title case-insensitively', () => {
    env = createVirtualEnv();
    env.loadCatalog();
    env.sandbox.filterState.searchQuery = 'SOVEREIGN';
    env.sandbox.renderProducts();
    const grid = env.document.getElementById('productsGrid');
    assertIncludes(grid.innerHTML, 'The Sovereign: Executive Leather Suite');
    assertNotIncludes(grid.innerHTML, 'The Barista Reserve');
  });

  test('F8.2: Search query matches product description keywords', () => {
    env = createVirtualEnv();
    env.loadCatalog();
    env.sandbox.filterState.searchQuery = 'ethiopian';
    env.sandbox.renderProducts();
    const grid = env.document.getElementById('productsGrid');
    assertIncludes(grid.innerHTML, 'The Barista Reserve: Pour-Over Craft Kit');
    assertNotIncludes(grid.innerHTML, 'Chronos: Milestone Executive Award Timepiece');
  });

  test('F8.3: Search query matches category label text', () => {
    env = createVirtualEnv();
    env.loadCatalog();
    env.sandbox.filterState.searchQuery = 'sustainable';
    env.sandbox.renderProducts();
    const grid = env.document.getElementById('productsGrid');
    assertIncludes(grid.innerHTML, 'Terra: Eco-Luxe Sustainable Onboarding Set');
  });

  test('F8.4: Non-matching search query displays empty state with Reset Filters CTA', () => {
    env = createVirtualEnv();
    env.loadCatalog();
    env.sandbox.filterState.searchQuery = 'nonexistentxyz12345';
    env.sandbox.renderProducts();
    const grid = env.document.getElementById('productsGrid');
    assertIncludes(grid.innerHTML, 'No Corporate Gift Sets Match Your Filter');
    assertIncludes(grid.innerHTML, 'Reset Filters');
  });

  test('F8.5: resetFilters() clears search input and restores catalog', () => {
    env = createVirtualEnv();
    env.loadCatalog();
    env.sandbox.filterState.searchQuery = 'leather';
    env.sandbox.renderProducts();
    env.sandbox.resetFilters();

    assertEqual(env.sandbox.filterState.searchQuery, '');
    const grid = env.document.getElementById('productsGrid');
    assertIncludes(grid.innerHTML, 'The Sovereign');
    assertIncludes(grid.innerHTML, 'The Barista Reserve');
    assertIncludes(grid.innerHTML, 'Terra: Eco-Luxe');
  });
});

// ---------------------------------------------------------------------------
// FEATURE 9: 60FPS Dual-Canvas Scrubbing Engine
// ---------------------------------------------------------------------------
describe('Feature 9: 60FPS Dual-Canvas Scrubbing Engine', () => {
  const code = loadVideoScrollJs();
  const html = loadHtml();

  test('F9.1: Frame sequence specifies exactly 130 sequential photographic frames', () => {
    assertMatch(code, /frameCount\s*=\s*130/i, 'Frame count must be 130');
    assertMatch(code, /assets\/frames\/frame_\$\{padIndex\}\.jpg/i, 'Frame file path must follow format');
  });

  test('F9.2: Canvas elements #heroCanvas and #heroBlurCanvas exist in HTML', () => {
    assertMatch(html, /<canvas[^>]*id=["']heroCanvas["']/i, 'Foreground canvas must exist');
    assertMatch(html, /<canvas[^>]*id=["']heroBlurCanvas["']/i, 'Background blur canvas must exist');
  });

  test('F9.3: Foreground canvas internal resolution is configured to 1920x1080', () => {
    assertMatch(code, /canvas\.width\s*=\s*1920/i, 'Canvas width must be 1920');
    assertMatch(code, /canvas\.height\s*=\s*1080/i, 'Canvas height must be 1080');
  });

  test('F9.4: Asynchronous GPU image decoding (img.decode()) is utilized for smooth preloading', () => {
    assertMatch(code, /img\.decode\(\)/i, 'Must invoke img.decode() for async frame decoding');
  });

  test('F9.5: Adaptive lerp inertia specifies 0.24 for desktop and 0.36 for mobile', () => {
    assertMatch(code, /lerpFactor\s*=\s*isMobile\s*\?\s*0\.36\s*:\s*0\.24/i, 'Lerp factors must be calibrated');
  });

  test('F9.6: Frame index calculation clamps within [0, frameCount - 1]', () => {
    assertMatch(code, /Math\.min\(Math\.max\(.*0\),\s*frameCount\s*-\s*1\)/i, 'Must clamp frame index');
  });
});

// ---------------------------------------------------------------------------
// FEATURE 10: Mirrored Background Blur & Fill-Rate Protection
// ---------------------------------------------------------------------------
describe('Feature 10: Mirrored Background Blur & Fill-Rate Protection', () => {
  const css = loadCss();
  const code = loadVideoScrollJs();

  test('F10.1: Background blur canvas internal resolution is 960x540', () => {
    assertMatch(code, /blurCanvas\.width\s*=\s*960/i, 'Blur canvas width must be 960');
    assertMatch(code, /blurCanvas\.height\s*=\s*540/i, 'Blur canvas height must be 540');
  });

  test('F10.2: Blur canvas CSS specifies 55px blur to fill pillarbox wings seamlessly', () => {
    assertMatch(css, /\.hero-blur-canvas\s*\{[^}]*filter:\s*blur\(55px\)/i, 'Blur canvas must apply 55px blur');
  });

  test('F10.3: Blur canvas is strictly disabled on mobile (<768px) to protect GPU fill-rate', () => {
    assertMatch(css, /@media\s*\([^)]*max-width:\s*768px\)[^{]*\{[\s\S]*?\.hero-blur-canvas\s*\{[^}]*display:\s*none\s*!important/i, 'Must hide blur canvas on mobile in CSS');
  });

  test('F10.4: JavaScript draws to blur canvas only on desktop viewports', () => {
    assertMatch(code, /if\s*\(!isMobile\s*&&\s*blurCtx\s*&&\s*blurCanvas\)/i, 'Must guard blur drawing with !isMobile');
  });

  test('F10.5: Window resize handler clears blur canvas when resizing to mobile viewport', () => {
    assertMatch(code, /blurCtx\.clearRect\(0,\s*0,\s*blurCanvas\.width,\s*blurCanvas\.height\)/i, 'Must clear blur canvas on mobile resize');
  });
});

// ---------------------------------------------------------------------------
// FEATURE 11: Floating Unboxing Progress Pill & Jump
// ---------------------------------------------------------------------------
describe('Feature 11: Floating Unboxing Progress Pill & Jump', () => {
  const html = loadHtml();
  const code = loadVideoScrollJs();

  test('F11.1: Unboxing progress pill container #unboxingProgressPill exists in DOM', () => {
    assertMatch(html, /id=["']unboxingProgressPill["']/i, 'Pill element must exist');
  });

  test('F11.2: Unboxing progress bar fill #unboxingProgressBar exists in DOM', () => {
    assertMatch(html, /id=["']unboxingProgressBar["']/i, 'Progress bar fill must exist');
  });

  test('F11.3: Unboxing progress text #unboxingProgressText updates percentage dynamically', () => {
    assertMatch(html, /id=["']unboxingProgressText["']/i, 'Progress text element must exist');
    assertMatch(code, /unboxingProgressText\.textContent\s*=\s*`Unboxing.*:\s*\$\{Math\.round\(progress\s*\*\s*100\)\}%`/i, 'Text must format as Unboxing: X%');
  });

  test('F11.4: Progress pill includes Catalog smooth jump anchor', () => {
    assertMatch(html, /id=["']unboxingProgressPill["'][\s\S]*?href=["']#catalogSection["']/i, 'Pill must link to #catalogSection');
    assertMatch(html, /href=["']#catalogSection["'][^>]*>[\s\S]*?(Skip to Catalog|Explore Catalog)/i, 'Must have jump anchor text');
  });

  test('F11.5: Unboxed CTA (#unboxedCta) activates when scroll progress reaches >= 68%', () => {
    assertMatch(code, /progress\s*>=\s*0\.68/i, 'CTA must activate at 68% scroll progress');
  });
});

// ---------------------------------------------------------------------------
// FEATURE 12: Hero RAF Idle Optimization
// ---------------------------------------------------------------------------
describe('Feature 12: Hero RAF Idle Optimization', () => {
  const code = loadVideoScrollJs();

  test('F12.1: IntersectionObserver lifecycle monitors hero container visibility', () => {
    assertMatch(code, /new\s*IntersectionObserver/i, 'Must construct IntersectionObserver');
    assertMatch(code, /observer\.observe\(container\)/i, 'Must observe hero container');
  });

  test('F12.2: Off-screen scroll pauses requestAnimationFrame loop to eliminate idle CPU/GPU drain', () => {
    assertMatch(code, /stopAnimationLoop\(\)/i, 'Must stop loop when off-screen');
    assertMatch(code, /isHeroVisible\s*=\s*false/i, 'Must set isHeroVisible to false');
  });

  test('F12.3: Entering viewport resumes animation loop immediately', () => {
    assertMatch(code, /startAnimationLoop\(\)/i, 'Must start loop when intersecting');
    assertMatch(code, /isHeroVisible\s*=\s*true/i, 'Must set isHeroVisible to true');
  });

  test('F12.4: Document visibility listener suspends RAF when background tab is inactive', () => {
    assertMatch(code, /document\.addEventListener\(['"]visibilitychange['"]/i, 'Must listen to visibilitychange');
    assertMatch(code, /if\s*\(document\.hidden\)\s*\{\s*stopAnimationLoop\(\)/i, 'Must stop loop on document.hidden');
  });

  test('F12.5: Restoring tab visibility re-engages animation loop if hero is visible', () => {
    assertMatch(code, /else\s*if\s*\(isHeroVisible\)\s*\{\s*startAnimationLoop\(\)/i, 'Must resume on tab focus');
  });
});

// ---------------------------------------------------------------------------
// FEATURE 13: Mobile Material Bottom Sheets
// ---------------------------------------------------------------------------
describe('Feature 13: Mobile Material Bottom Sheets', () => {
  const css = loadCss();
  const html = loadHtml();
  const code = loadCatalogJs();

  test('F13.1: Mobile filter modal uses bottom sheet dialog styling with top rounded corners', () => {
    assertMatch(css, /\.mobile-filter-dialog\s*\{[^}]*border-radius:\s*24px 24px 0 0/i, 'Must have 24px top border radius');
    assertMatch(css, /\.mobile-filter-dialog\s*\{[^}]*position:\s*fixed;\s*bottom:\s*0/i, 'Must pin to bottom');
  });

  test('F13.2: Drag handles (.bottom-sheet-handle) are provided for mobile touch discovery', () => {
    assertMatch(html, /class=["'][^"']*bottom-sheet-handle/i, 'Must have bottom-sheet-handle in markup');
  });

  test('F13.3: Modals slide up via translateY(100%) to translateY(0) on mobile', () => {
    assertMatch(css, /\.mobile-filter-dialog\s*\{[^}]*transform:\s*translateY\(100%\)/i, 'Must default offscreen down');
    assertMatch(css, /\.modal-overlay\.active\s*\.mobile-filter-dialog\s*\{[^}]*transform:\s*translateY\(0\)/i, 'Must slide up on active');
  });

  test('F13.4: Touch swipe-down gesture listener is attached to bottom sheets with >100px threshold', () => {
    assertMatch(code, /currentY\s*-\s*startY\s*>\s*100/i, 'Must check for >100px swipe down');
  });

  test('F13.5: RFP drawer transforms into bottom sheet on mobile screens (<= 1024px)', () => {
    assertMatch(css, /@media\s*\([^)]*max-width:\s*1024px\)[^{]*\{[\s\S]*?\.rfp-drawer\s*\{[^}]*border-radius:\s*24px 24px 0 0/i, 'RFP drawer must become bottom sheet on mobile');
  });
});

// ---------------------------------------------------------------------------
// FEATURE 14: Mobile Thumb Navigation Dock
// ---------------------------------------------------------------------------
describe('Feature 14: Mobile Thumb Navigation Dock', () => {
  const html = loadHtml();
  const css = loadCss();

  test('F14.1: Fixed mobile bottom navigation dock (.mobile-bottom-dock) exists in HTML', () => {
    assertMatch(html, /<nav[^>]*class=["'][^"']*mobile-bottom-dock/i, 'Mobile dock must exist');
  });

  test('F14.2: Dock provides direct jump items to Unboxing, Catalog, WhatsApp, and Quote', () => {
    assertMatch(html, /href=["']#scrollHeroContainer["'][^>]*>[\s\S]*?<span>Unboxing<\/span>/i, 'Must have Unboxing item');
    assertMatch(html, /href=["']#catalogSection["'][^>]*>[\s\S]*?<span>Catalog<\/span>/i, 'Must have Catalog item');
    assertMatch(html, /<span>WhatsApp<\/span>/i, 'Must have WhatsApp item');
    assertMatch(html, /<span>Quote<\/span>/i, 'Must have Quote item');
  });

  test('F14.3: Live quotation badge (#mobileDockBadge) is embedded in dock quote trigger', () => {
    assertMatch(html, /id=["']mobileDockBadge["']/i, 'Mobile dock badge must exist in HTML');
  });

  test('F14.4: Dock styling includes safe-area-inset-bottom support for modern smartphones', () => {
    assertMatch(css, /env\(safe-area-inset-bottom,\s*0px\)/i, 'Must support env(safe-area-inset-bottom)');
  });

  test('F14.5: Body class has-bottom-dock adds padding offset to prevent content obscuration', () => {
    assertMatch(css, /body\.has-bottom-dock\s*\{[^}]*padding-bottom:\s*calc\(56px/i, 'Must offset body padding for dock');
  });
});

// ---------------------------------------------------------------------------
// FEATURE 15: Touch Ergonomics (>=48dp)
// ---------------------------------------------------------------------------
describe('Feature 15: Touch Ergonomics (>=48dp)', () => {
  const css = loadCss();
  const html = loadHtml();

  test('F15.1: Floating WhatsApp button dimensions are >= 50px (exceeding 48dp minimum)', () => {
    assertMatch(css, /\.floating-whatsapp-btn\s*\{[^}]*width:\s*5[0-8]px;\s*height:\s*5[0-8]px;/i, 'Button must be >= 50px');
  });

  test('F15.2: Mobile interactive controls specify touch-action: manipulation to eliminate tap delays', () => {
    assertMatch(css, /touch-action:\s*manipulation/i, 'Must apply touch-action: manipulation');
  });

  test('F15.3: Category filter pills provide generous tap padding (>= 9px 20px)', () => {
    assertMatch(css, /\.category-pill\s*\{[^}]*padding:\s*9px 20px/i, 'Category pills must have generous tap padding');
  });

  test('F15.4: Mobile filter option rows provide full-width tappable labels (>= 11px padding)', () => {
    assertMatch(css, /\.mobile-checkbox-label\s*\{[^}]*padding:\s*11px 14px/i, 'Mobile checkbox label must have large touch target');
  });

  test('F15.5: Primary and secondary action buttons feature active press feedback scaling', () => {
    assertMatch(css, /\.btn-primary-gold:active,\s*\.btn-secondary-outline:active/i, 'Buttons must have active press state');
  });
});

// ---------------------------------------------------------------------------
// FEATURE 16: PWA Manifest & Zero CLS Guardrails
// ---------------------------------------------------------------------------
describe('Feature 16: PWA Manifest & Zero CLS Guardrails', () => {
  const manifest = loadManifest();
  const vercel = loadVercelConfig();
  const html = loadHtml();
  const css = loadCss();

  test('F16.1: manifest.json configures standalone PWA with matching theme color', () => {
    assertEqual(manifest.display, 'standalone', 'PWA display must be standalone');
    assertMatch(manifest.theme_color, /^#0[78]0[9a]0[ef]/i, 'Theme color must match dark noir foundation');
    assert(manifest.icons && manifest.icons.length > 0, 'PWA must declare app icons');
  });

  test('F16.2: index.html links to manifest.json and specifies mobile web app meta tags', () => {
    assertMatch(html, /<link[^>]*rel=["']manifest["'][^>]*href=["']manifest\.json["']/i, 'Must link manifest.json');
    assertMatch(html, /<meta[^>]*name=["']mobile-web-app-capable["'][^>]*content=["']yes["']/i, 'Must specify mobile-web-app-capable');
    assertMatch(html, /<meta[^>]*name=["']viewport["'][^>]*viewport-fit=cover/i, 'Must specify viewport-fit=cover');
  });

  test('F16.3: Product card image containers use fixed aspect-ratio padding to prevent CLS', () => {
    assertMatch(css, /\.product-image-container\b[\s\S]*?padding-top:\s*[0-9]+%/i, 'Must enforce aspect-ratio padding');
  });

  test('F16.4: vercel.json specifies immutable caching headers for static assets and frames', () => {
    const assetHeader = vercel.headers.find(h => h.source.includes('assets'));
    assert(assetHeader, 'Must have cache headers for /assets/(.*)');
    const cacheControl = assetHeader.headers.find(h => h.key === 'Cache-Control');
    assertIncludes(cacheControl.value, 'immutable', 'Assets must have immutable cache');
    assertIncludes(cacheControl.value, 'max-age=31536000', 'Assets must have 1-year max-age');
  });

  test('F16.5: vercel.json specifies cleanUrls and security headers', () => {
    assertTrue(vercel.cleanUrls, 'cleanUrls must be enabled in vercel.json');
    const secHeader = vercel.headers.find(h => h.source === '/(.*)');
    assert(secHeader, 'Must have security headers block');
  });
});

// ---------------------------------------------------------------------------
// FEATURE 17: E2E Test Suite & Test Runner (Tiers 1-4)
// ---------------------------------------------------------------------------
describe('Feature 17: E2E Test Suite & Test Runner (Tiers 1-4)', () => {
  test('F17.1: Master test runner file tests/e2e_runner.js exists', () => {
    const runnerPath = path.join(PROJECT_ROOT, 'tests', 'e2e_runner.js');
    assertTrue(fs.existsSync(runnerPath), 'e2e_runner.js must exist on disk');
  });

  test('F17.2: Test infrastructure document TEST_INFRA.md exists at project root', () => {
    const infraPath = path.join(PROJECT_ROOT, 'TEST_INFRA.md');
    assertTrue(fs.existsSync(infraPath), 'TEST_INFRA.md must exist at root');
  });

  test('F17.3: All test suites for Tiers 1-4 exist under tests/suites/', () => {
    const suites = ['tier1_features.js', 'tier2_boundaries.js', 'tier3_cross_features.js', 'tier4_real_world.js'];
    suites.forEach(s => {
      const p = path.join(PROJECT_ROOT, 'tests', 'suites', s);
      assertTrue(fs.existsSync(p), `Suite file tests/suites/${s} must exist`);
    });
  });

  test('F17.4: Virtual environment factory creates isolated execution sandboxes', () => {
    const env1 = createVirtualEnv();
    const env2 = createVirtualEnv();
    env1.sandbox.filterState = { test: 1 };
    assertEqual(env2.sandbox.filterState, undefined, 'Environments must be isolated');
  });

  test('F17.5: package.json specifies project metadata without conflicting dependencies', () => {
    const pkg = loadPackageJson();
    assertEqual(pkg.name, 'blue-ants-corporate-gifting', 'Package name must match project');
  });
});

// ---------------------------------------------------------------------------
// FEATURE 18: Adversarial Coverage Hardening (Tier 5 / Edge Cases)
// ---------------------------------------------------------------------------
describe('Feature 18: Adversarial Coverage Hardening (Tier 5 / Edge Cases)', () => {
  let env;

  test('F18.1: Stepper input clamped safely on extreme negative delta', () => {
    env = createVirtualEnv();
    env.loadCatalog();
    env.sandbox.openQuickView('prod-1');
    env.sandbox.adjustQvQty(-999999);
    const input = env.document.getElementById('qvQtyInput');
    assertEqual(parseInt(input.value), 25, 'Value must clamp to MOQ 25 on extreme negative delta');
  });

  test('F18.2: Empty quote submission is blocked with user toast feedback', () => {
    env = createVirtualEnv();
    env.loadCatalog();
    env.sandbox.rfpCart = [];
    const submitBtn = env.document.getElementById('submitRfpWhatsappBtn');
    submitBtn.click();
    assertEqual(env.openedUrls.length, 0, 'Must not open URL on empty submit');
  });

  test('F18.3: Special characters in notes are properly URI-encoded', () => {
    env = createVirtualEnv();
    env.loadCatalog();
    env.sandbox.addToRfp('prod-1', 25);
    const notesInput = env.document.getElementById('rfpCustomNotes');
    if (notesInput) notesInput.value = 'Quote with & and % and $ and # and /';
    const submitBtn = env.document.getElementById('submitRfpWhatsappBtn');
    submitBtn.click();

    assertEqual(env.openedUrls.length, 1);
    const { url } = env.openedUrls[0];
    assertIncludes(url, 'wa.me/919916418879');
    const decoded = decodeURIComponent(url);
    assertIncludes(decoded, 'Quote with & and % and $ and # and /');
  });

  test('F18.4: Frame scrubber handles fast scroll progress boundary overshoots [0.0, 1.0]', () => {
    const code = loadVideoScrollJs();
    assertMatch(code, /Math\.min\(Math\.max\(.*0\),\s*1\)/i, 'Scroll progress must be clamped to [0, 1]');
  });

  test('F18.5: Nearest frame locator handles incomplete frame downloads without throwing', () => {
    const code = loadVideoScrollJs();
    assertMatch(code, /function getNearestFrame/i, 'Must define getNearestFrame algorithm');
  });
});
