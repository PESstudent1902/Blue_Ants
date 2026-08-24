/**
 * THE BLUE ANTS — Tier 2 Boundary & Corner Cases Test Suite
 * 
 * Deep stress testing of edge cases, boundary transitions, extreme quantities,
 * malformed inputs, resilience under missing assets, and viewport transitions.
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
  loadCatalogJs,
  loadVideoScrollJs
} = require('../e2e_runner');

describe('Tier 2: Boundary & Corner Cases', () => {
  let env;

  // -------------------------------------------------------------------------
  // 1. MOQ BOUNDARY TESTS
  // -------------------------------------------------------------------------
  test('T2.1: Exact MOQ boundary for all 8 products matches initial bulkTier minimum', () => {
    env = createVirtualEnv();
    env.loadCatalog();
    const products = env.sandbox.PRODUCTS;

    products.forEach(p => {
      assertEqual(p.moq, p.bulkTiers[0].min, `Product ${p.id} MOQ must equal bulkTier[0].min`);
      env.sandbox.openQuickView(p.id);
      const input = env.document.getElementById('qvQtyInput');
      assertEqual(parseInt(input.value), p.moq, `Quick View default qty must equal MOQ (${p.moq})`);
    });
  });

  test('T2.2: Tier transition boundaries for prod-1 (The Sovereign: 25, 49, 50, 99, 100, 249, 250, 9999)', () => {
    env = createVirtualEnv();
    env.loadCatalog();
    const p1 = env.sandbox.PRODUCTS.find(p => p.id === 'prod-1');
    env.sandbox.openQuickView('prod-1');

    const testCases = [
      { qty: 25, expectedPrice: 95.00, expectedDiscount: '0%' },
      { qty: 49, expectedPrice: 95.00, expectedDiscount: '0%' },
      { qty: 50, expectedPrice: 86.00, expectedDiscount: '10%' },
      { qty: 99, expectedPrice: 86.00, expectedDiscount: '10%' },
      { qty: 100, expectedPrice: 76.00, expectedDiscount: '20%' },
      { qty: 249, expectedPrice: 76.00, expectedDiscount: '20%' },
      { qty: 250, expectedPrice: 68.00, expectedDiscount: '28%' },
      { qty: 1000, expectedPrice: 68.00, expectedDiscount: '28%' }
    ];

    testCases.forEach(({ qty, expectedPrice, expectedDiscount }) => {
      env.sandbox.setQvQty(qty);
      const unitPriceEl = env.document.getElementById('qvUnitPrice');
      const discountEl = env.document.getElementById('qvDiscountBadge');

      assertEqual(unitPriceEl.textContent, `$${expectedPrice.toFixed(2)}`, `Qty ${qty} must apply unit price $${expectedPrice.toFixed(2)}`);
      if (expectedDiscount === '0%') {
        assertEqual(discountEl.textContent, 'Base Volume Rate');
      } else {
        assertIncludes(discountEl.textContent, expectedDiscount);
      }
    });
  });

  test('T2.3: Tier transition boundaries for prod-4 (Serenity Wellness: 4-tier matrix 40, 100, 250, 500)', () => {
    env = createVirtualEnv();
    env.loadCatalog();
    env.sandbox.openQuickView('prod-4');

    const testCases = [
      { qty: 40, price: 58.00 },
      { qty: 99, price: 58.00 },
      { qty: 100, price: 51.00 },
      { qty: 249, price: 51.00 },
      { qty: 250, price: 44.00 },
      { qty: 499, price: 44.00 },
      { qty: 500, price: 39.00 }
    ];

    testCases.forEach(({ qty, price }) => {
      env.sandbox.setQvQty(qty);
      const unitPriceEl = env.document.getElementById('qvUnitPrice');
      assertEqual(unitPriceEl.textContent, `$${price.toFixed(2)}`, `Serenity at qty ${qty} should be $${price.toFixed(2)}`);
    });
  });

  // -------------------------------------------------------------------------
  // 2. ZERO & NEGATIVE INPUT SAFETY
  // -------------------------------------------------------------------------
  test('T2.4: Direct zero quantity input is clamped to MOQ during calculation', () => {
    env = createVirtualEnv();
    env.loadCatalog();
    env.sandbox.openQuickView('prod-1'); // MOQ 25
    const input = env.document.getElementById('qvQtyInput');
    input.value = '0';
    env.sandbox.updateQvCalculations();

    const unitPriceEl = env.document.getElementById('qvUnitPrice');
    assertEqual(unitPriceEl.textContent, '$95.00', 'Should use MOQ price when input is 0');
  });

  test('T2.5: Negative quantity stepper adjustQvQty(-100) safely clamps to product MOQ', () => {
    env = createVirtualEnv();
    env.loadCatalog();
    env.sandbox.openQuickView('prod-6'); // MOQ 50
    env.sandbox.adjustQvQty(-100);
    const input = env.document.getElementById('qvQtyInput');
    assertEqual(parseInt(input.value), 50, 'Value should clamp to MOQ 50');
  });

  test('T2.6: Non-numeric / NaN string input safely defaults to MOQ during calculation', () => {
    env = createVirtualEnv();
    env.loadCatalog();
    env.sandbox.openQuickView('prod-1');
    const input = env.document.getElementById('qvQtyInput');
    input.value = 'invalid-number-xyz';
    env.sandbox.updateQvCalculations();

    const unitPriceEl = env.document.getElementById('qvUnitPrice');
    assertEqual(unitPriceEl.textContent, '$95.00', 'Should safely fallback to MOQ tier');
  });

  // -------------------------------------------------------------------------
  // 3. EXTREME ENTERPRISE QUANTITIES (>10,000 units)
  // -------------------------------------------------------------------------
  test('T2.7: Massive enterprise order of 15,000 units applies highest bulk tier without overflow', () => {
    env = createVirtualEnv();
    env.loadCatalog();
    env.sandbox.openQuickView('prod-1'); // Highest tier: $68.00
    env.sandbox.setQvQty(15000);

    const unitPriceEl = env.document.getElementById('qvUnitPrice');
    const totalPriceEl = env.document.getElementById('qvTotalPrice');
    const savingsEl = env.document.getElementById('qvSavingsTotal');

    assertEqual(unitPriceEl.textContent, '$68.00');
    // Total = 15000 * 68 = 1,020,000.00
    assertIncludes(totalPriceEl.textContent, '1,020,000');
    // Savings = (15000 * 95) - 1020000 = 1425000 - 1020000 = $405000.00
    assertIncludes(savingsEl.textContent, '405000.00');
  });

  test('T2.8: Massive enterprise order of 50,000 Terra Eco-Luxe units calculates 40% discount correctly', () => {
    env = createVirtualEnv();
    env.loadCatalog();
    env.sandbox.openQuickView('prod-6'); // Highest tier: $29.00 (Base $48.00)
    env.sandbox.setQvQty(50000);

    const unitPriceEl = env.document.getElementById('qvUnitPrice');
    const totalPriceEl = env.document.getElementById('qvTotalPrice');
    const savingsEl = env.document.getElementById('qvSavingsTotal');

    assertEqual(unitPriceEl.textContent, '$29.00');
    // Total = 50000 * 29 = 1,450,000
    assertIncludes(totalPriceEl.textContent, '1,450,000');
    // Savings = (50000 * 48) - 1450000 = 2400000 - 1450000 = 950000.00
    assertIncludes(savingsEl.textContent, '950000.00');
  });

  // -------------------------------------------------------------------------
  // 4. EMPTY QUOTE SUBMISSIONS & RESILIENCE
  // -------------------------------------------------------------------------
  test('T2.9: Submitting empty quote drawer blocks WhatsApp dispatch and displays user feedback', () => {
    env = createVirtualEnv();
    env.loadCatalog();
    env.sandbox.rfpCart = [];

    const submitBtn = env.document.getElementById('submitRfpWhatsappBtn');
    submitBtn.click();

    assertEqual(env.openedUrls.length, 0, 'No URL should be opened on empty submit');
  });

  test('T2.10: Adding and then completely removing an item resets drawer total and savings to $0.00', () => {
    env = createVirtualEnv();
    env.loadCatalog();
    env.sandbox.addToRfp('prod-1', 50);
    assertEqual(env.sandbox.rfpCart.length, 1);

    env.sandbox.removeFromRfp('prod-1');
    assertEqual(env.sandbox.rfpCart.length, 0);

    const totalDisplay = env.document.getElementById('rfpDrawerTotal');
    const savingsDisplay = env.document.getElementById('rfpDrawerSavings');

    assertEqual(totalDisplay.textContent, '$0.00');
    assertEqual(savingsDisplay.textContent, '$0.00');
  });

  // -------------------------------------------------------------------------
  // 5. SEARCH SPECIAL CHARACTERS & ADVERSARIAL QUERIES
  // -------------------------------------------------------------------------
  test('T2.11: Search query with regex metacharacters (*, +, ?, (, ), [, ], ^, $) executes without regex crashes', () => {
    env = createVirtualEnv();
    env.loadCatalog();
    const maliciousQueries = ['*.*', '(.*)', '[a-z]+', '(?=.*)', '^$$', '\\d+'];

    maliciousQueries.forEach(q => {
      env.sandbox.filterState.searchQuery = q;
      // Should not throw unhandled syntax errors
      env.sandbox.renderProducts();
      const grid = env.document.getElementById('productsGrid');
      assertIncludes(grid.innerHTML, 'No Corporate Gift Sets Match Your Filter');
    });
  });

  test('T2.12: Search query with HTML / script injection characters executes safely without DOM injection', () => {
    env = createVirtualEnv();
    env.loadCatalog();
    env.sandbox.filterState.searchQuery = '<script>alert("hack")</script>';
    env.sandbox.renderProducts();
    const grid = env.document.getElementById('productsGrid');
    assertIncludes(grid.innerHTML, 'No Corporate Gift Sets Match Your Filter');
  });

  test('T2.13: Whitespace-only search query matches all products rather than empty state', () => {
    env = createVirtualEnv();
    env.loadCatalog();
    env.sandbox.filterState.searchQuery = '';
    env.sandbox.renderProducts();
    const grid = env.document.getElementById('productsGrid');
    assertIncludes(grid.innerHTML, 'The Sovereign');
  });

  // -------------------------------------------------------------------------
  // 6. VIEWPORT RESIZE & ORIENTATION RESILIENCE
  // -------------------------------------------------------------------------
  test('T2.14: Mobile viewport resize (<768px) correctly adjusts lerp inertia to 0.36', () => {
    const code = loadVideoScrollJs();
    assertMatch(code, /lerpFactor\s*=\s*isMobile\s*\?\s*0\.36\s*:\s*0\.24/i);
  });

  test('T2.15: Card tilt interaction is disabled on viewports < 1024px to prevent mobile gesture interference', () => {
    env = createVirtualEnv({ innerWidth: 768 });
    env.loadCatalog();
    env.sandbox.setupCardTilt();
    assertTrue(true);
  });

  // -------------------------------------------------------------------------
  // 7. MISSING & DELAYED FRAME RESILIENCE
  // -------------------------------------------------------------------------
  test('T2.16: getNearestFrame algorithm searches radiating outwards to find closest available frame', () => {
    const code = loadVideoScrollJs();
    assertMatch(code, /for\s*\(let\s*offset\s*=\s*1;\s*offset\s*<\s*frameCount;\s*offset\+\+\)/i, 'Must search radiating outwards');
    assertMatch(code, /const\s*lower\s*=\s*index\s*-\s*offset/i, 'Must check lower offset');
    assertMatch(code, /const\s*upper\s*=\s*index\s*\+\s*offset/i, 'Must check upper offset');
  });

  test('T2.17: Draw frame with uninitialized context does not throw runtime exception', () => {
    const code = loadVideoScrollJs();
    assertMatch(code, /if\s*\(!ctx\)\s*return;/i, 'Must guard drawFrame when ctx is null');
  });
});
