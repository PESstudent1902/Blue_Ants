/**
 * THE BLUE ANTS — Tier 3 Cross-Feature & Pairwise Workflows Test Suite
 * 
 * Tests complex pairwise and multi-feature compounding interactions:
 * - Filtering + Search + Sorting combinations
 * - Filter -> Quick View -> Stepper calculation -> RFP Cart dispatch
 * - Multi-item quotation state with dynamic tier recalculation
 * - Desktop & Mobile filter state two-way synchronization
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
  createVirtualEnv
} = require('../e2e_runner');

describe('Tier 3: Cross-Feature Interactions & Pairwise Workflows', () => {
  let env;

  // -------------------------------------------------------------------------
  // 1. COMPOUND FILTERING + SEARCH + SORTING
  // -------------------------------------------------------------------------
  test('T3.1: Category filter + Search query intersection', () => {
    env = createVirtualEnv();
    env.loadCatalog();

    // Category gourmet + search 'truffles' -> only Grand Cru
    env.sandbox.filterState.category = 'gourmet';
    env.sandbox.filterState.searchQuery = 'truffles';
    env.sandbox.renderProducts();

    const grid = env.document.getElementById('productsGrid');
    assertIncludes(grid.innerHTML, 'Grand Cru: 24k Gold Truffles');
    assertNotIncludes(grid.innerHTML, 'The Barista Reserve');
  });

  test('T3.2: Category filter + Unmatched search query yields clean empty state', () => {
    env = createVirtualEnv();
    env.loadCatalog();

    // Category executive + search 'coffee' -> 0 matches
    env.sandbox.filterState.category = 'executive';
    env.sandbox.filterState.searchQuery = 'coffee';
    env.sandbox.renderProducts();

    const grid = env.document.getElementById('productsGrid');
    assertIncludes(grid.innerHTML, 'No Corporate Gift Sets Match Your Filter');
  });

  test('T3.3: Price range filter + Category filter + Sorting by price-high', () => {
    env = createVirtualEnv();
    env.loadCatalog();

    // Executive category has Sovereign ($95) and Chronos ($185)
    env.sandbox.filterState.category = 'executive';
    env.sandbox.filterState.priceRanges = ['over150'];
    env.sandbox.filterState.sortBy = 'price-high';
    env.sandbox.renderProducts();

    const grid = env.document.getElementById('productsGrid');
    assertIncludes(grid.innerHTML, 'Chronos: Milestone Executive Award Timepiece');
    assertNotIncludes(grid.innerHTML, 'The Sovereign: Executive Leather Suite');
  });

  test('T3.4: Sorting by lowest MOQ orders catalog ascending by MOQ', () => {
    env = createVirtualEnv();
    env.loadCatalog();

    env.sandbox.filterState.sortBy = 'moq';
    env.sandbox.renderProducts();

    const grid = env.document.getElementById('productsGrid');
    // Lowest MOQ in catalog is Chronos (10 units)
    // First card rendered should be Chronos
    const firstCardTitle = grid.innerHTML.indexOf('Chronos: Milestone Executive Award Timepiece');
    const higherMoqCard = grid.innerHTML.indexOf('Terra: Eco-Luxe Sustainable Onboarding Set'); // MOQ 50

    assertGreaterThan(higherMoqCard, firstCardTitle, 'Chronos (MOQ 10) must appear before Terra (MOQ 50)');
  });

  // -------------------------------------------------------------------------
  // 2. QUICK VIEW -> VOLUME STEPPER -> ADD TO QUOTE WORKFLOW
  // -------------------------------------------------------------------------
  test('T3.5: User opens Quick View for Tech Nomad, selects 100 pk preset, adds to Quote', () => {
    env = createVirtualEnv();
    env.loadCatalog();

    env.sandbox.openQuickView('prod-3'); // Tech Nomad: Base $145, 100pk tier = $118
    env.sandbox.setQvQty(100);
    env.sandbox.addCurrentQvToRfp();

    assertEqual(env.sandbox.rfpCart.length, 1);
    const item = env.sandbox.rfpCart[0];
    assertEqual(item.id, 'prod-3');
    assertEqual(item.qty, 100);

    const totalDisplay = env.document.getElementById('rfpDrawerTotal');
    // 100 * 118 = 11,800.00
    assertIncludes(totalDisplay.textContent, '11,800.00');
  });

  // -------------------------------------------------------------------------
  // 3. MULTI-ITEM RFP CART VOLUME RECALCULATIONS
  // -------------------------------------------------------------------------
  test('T3.6: Multi-item cart calculates accurate aggregate totals and bulk savings', () => {
    env = createVirtualEnv();
    env.loadCatalog();

    // 1. Sovereign Leather: 100 units @ $76.00 = $7,600 (Standard: 100 * $95 = $9,500)
    env.sandbox.addToRfp('prod-1', 100);
    // 2. Barista Reserve: 100 units @ $54.00 = $5,400 (Standard: 100 * $68 = $6,800)
    env.sandbox.addToRfp('prod-2', 100);
    // 3. Terra Eco-Luxe: 250 units @ $35.00 = $8,750 (Standard: 250 * $48 = $12,000)
    env.sandbox.addToRfp('prod-6', 250);

    assertEqual(env.sandbox.rfpCart.length, 3);

    // Aggregate discounted total: 7,600 + 5,400 + 8,750 = $21,750.00
    const totalDisplay = env.document.getElementById('rfpDrawerTotal');
    assertIncludes(totalDisplay.textContent, '21,750.00');

    // Aggregate standard total: 9,500 + 6,800 + 12,000 = $28,300.00
    // Total savings: 28,300 - 21,750 = $6,550.00
    const savingsDisplay = env.document.getElementById('rfpDrawerSavings');
    assertIncludes(savingsDisplay.textContent, '6550.00');
  });

  test('T3.7: Adjusting line item quantity inside drawer recalculates applied bulk tier and global totals', () => {
    env = createVirtualEnv();
    env.loadCatalog();

    env.sandbox.addToRfp('prod-1', 50); // 50 * 86 = $4,300
    env.sandbox.addToRfp('prod-2', 50); // 50 * 61 = $3,050
    // Initial total = 4,300 + 3,050 = $7,350.00

    let totalDisplay = env.document.getElementById('rfpDrawerTotal');
    assertIncludes(totalDisplay.textContent, '7,350.00');

    // Increase Barista from 50 to 250 (tier drops to $48.00/unit)
    // New Barista line total = 250 * 48 = $12,000.00
    // New drawer total = 4,300 + 12,000 = $16,300.00
    env.sandbox.adjustRfpItemQty('prod-2', 200);

    totalDisplay = env.document.getElementById('rfpDrawerTotal');
    assertIncludes(totalDisplay.textContent, '16,300.00');
  });

  // -------------------------------------------------------------------------
  // 4. END-TO-END RFP DISPATCH WORKFLOW
  // -------------------------------------------------------------------------
  test('T3.8: Complete quote submission with multi-item cart, company info, and notes', () => {
    env = createVirtualEnv();
    env.loadCatalog();

    env.sandbox.addToRfp('prod-1', 100);
    env.sandbox.addToRfp('prod-5', 50);

    const compInput = env.document.getElementById('rfpCompanyName');
    const notesInput = env.document.getElementById('rfpCustomNotes');
    if (compInput) compInput.value = 'Quantum Financial Partners';
    if (notesInput) notesInput.value = 'Need debossed logo on leather and laser engraved coasters. Target dispatch Dec 1.';

    const submitBtn = env.document.getElementById('submitRfpWhatsappBtn');
    submitBtn.click();

    assertEqual(env.openedUrls.length, 1);
    const { url } = env.openedUrls[0];
    assertIncludes(url, 'wa.me/919916418879');

    const decoded = decodeURIComponent(url);
    assertIncludes(decoded, 'Quantum Financial Partners');
    assertIncludes(decoded, 'Need debossed logo on leather');
    assertIncludes(decoded, 'The Sovereign: Executive Leather Suite');
    assertIncludes(decoded, 'The Highland Connoisseur: Decanter & Chilling Stones');
  });
});
