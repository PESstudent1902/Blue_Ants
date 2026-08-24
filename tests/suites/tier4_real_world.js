/**
 * THE BLUE ANTS — Tier 4 Real-World B2B Procurement Scenarios Test Suite
 * 
 * End-to-end simulations of actual enterprise corporate procurement workflows:
 * 1. C-Suite VIP Milestone Gifting (Apex Global Technologies)
 * 2. 250-Pack ESG New Hire Onboarding with GST & Sample Request (GreenTech Innovations)
 * 3. Annual Corporate Holiday Summit Gourmet Hampers (Horizon Media Global)
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

describe('Tier 4: Real-World B2B Procurement Scenarios', () => {
  let env;

  // -------------------------------------------------------------------------
  // SCENARIO 1: C-Suite VIP Milestone Gifting
  // -------------------------------------------------------------------------
  test('T4.1: Scenario 1 — Enterprise Procurement: C-Suite VIP Milestone Package', () => {
    env = createVirtualEnv();
    env.loadCatalog();

    // 1. Buyer opens Sovereign Suite and orders 250 units (Tier 4: $68.00/unit)
    env.sandbox.openQuickView('prod-1');
    env.sandbox.setQvQty(250);
    env.sandbox.addCurrentQvToRfp();

    // 2. Buyer opens Highland Connoisseur and orders 100 units (Tier 3: $96.00/unit)
    env.sandbox.openQuickView('prod-5');
    env.sandbox.setQvQty(100);
    env.sandbox.addCurrentQvToRfp();

    // Verify Cart items
    assertEqual(env.sandbox.rfpCart.length, 2);
    assertEqual(env.sandbox.rfpCart[0].qty, 250);
    assertEqual(env.sandbox.rfpCart[1].qty, 100);

    // Verify Financial Math:
    // Sovereign: 250 * 68 = $17,000.00 (Standard: 250 * 95 = $23,750.00, Savings = $6,750.00)
    // Highland:  100 * 96 = $9,600.00  (Standard: 100 * 120 = $12,000.00, Savings = $2,400.00)
    // Total = $17,000 + $9,600 = $26,600.00
    // Total Savings = $6,750 + $2,400 = $9,150.00
    const totalDisplay = env.document.getElementById('rfpDrawerTotal');
    const savingsDisplay = env.document.getElementById('rfpDrawerSavings');

    assertIncludes(totalDisplay.textContent, '26,600.00', 'Drawer total must equal $26,600.00');
    assertIncludes(savingsDisplay.textContent, '9150.00', 'Bulk savings must equal $9150.00');

    // 3. Fill Enterprise Details and Submit WhatsApp RFP
    const compInput = env.document.getElementById('rfpCompanyName');
    const notesInput = env.document.getElementById('rfpCustomNotes');
    if (compInput) compInput.value = 'Apex Global Technologies Pvt. Ltd.';
    if (notesInput) notesInput.value = 'Milestone awards. Deboss corporate crest in antique gold foil on leather journals. Laser engrave crystal decanters with executive names.';

    const submitBtn = env.document.getElementById('submitRfpWhatsappBtn');
    submitBtn.click();

    // 4. Validate Dispatched Payload
    assertEqual(env.openedUrls.length, 1);
    const { url } = env.openedUrls[0];
    assertIncludes(url, 'wa.me/919916418879');

    const decoded = decodeURIComponent(url);
    assertIncludes(decoded, '*NEW CORPORATE QUOTE REQUEST — THE BLUE ANTS*');
    assertIncludes(decoded, 'Apex Global Technologies Pvt. Ltd.');
    assertIncludes(decoded, '• *The Sovereign: Executive Leather Suite* (Qty: 250 units @ $68.00) = $17,000.00');
    assertIncludes(decoded, '• *The Highland Connoisseur: Decanter & Chilling Stones* (Qty: 100 units @ $96.00) = $9,600.00');
    assertIncludes(decoded, '*Estimated Quotation Total:* $26,600.00');
    assertIncludes(decoded, '*Total Bulk Savings:* $9150.00');
    assertIncludes(decoded, 'Deboss corporate crest in antique gold foil');
  });

  // -------------------------------------------------------------------------
  // SCENARIO 2: 250-Pack ESG New Hire Onboarding
  // -------------------------------------------------------------------------
  test('T4.2: Scenario 2 — HR Onboarding: 250 Terra Eco-Luxe Sets with Sample & GST', () => {
    env = createVirtualEnv();
    env.loadCatalog();

    // 1. HR searches 'sustainable'
    env.sandbox.filterState.searchQuery = 'sustainable';
    env.sandbox.renderProducts();

    // 2. Opens Quick View for Terra Eco-Luxe (prod-6)
    env.sandbox.openQuickView('prod-6');
    env.sandbox.setQvQty(250);

    // Verify 250-unit volume tier pricing: $35.00/unit (Base: $48.00, discount 27%)
    const unitPriceEl = env.document.getElementById('qvUnitPrice');
    const totalPriceEl = env.document.getElementById('qvTotalPrice');
    const savingsEl = env.document.getElementById('qvSavingsTotal');

    assertEqual(unitPriceEl.textContent, '$35.00');
    // Total = 250 * 35 = $8,750.00
    assertIncludes(totalPriceEl.textContent, '8,750.00');
    // Savings = (250 * 48) - 8750 = 12000 - 8750 = $3250.00
    assertIncludes(savingsEl.textContent, '3250.00');

    // 3. Add to Quote Cart
    env.sandbox.addCurrentQvToRfp();
    assertEqual(env.sandbox.rfpCart.length, 1);

    // 4. Fill Corporate Request
    const compInput = env.document.getElementById('rfpCompanyName');
    const notesInput = env.document.getElementById('rfpCustomNotes');
    if (compInput) compInput.value = 'GreenTech Innovations India';
    if (notesInput) notesInput.value = 'Q4 new hire batch. Please dispatch 1x physical pre-production sample box for executive signoff. GST invoice required for Indian tax filing. Target dispatch in 10 business days.';

    const submitBtn = env.document.getElementById('submitRfpWhatsappBtn');
    submitBtn.click();

    // 5. Verify Dispatched Payload
    assertEqual(env.openedUrls.length, 1);
    const { url } = env.openedUrls[0];
    const decoded = decodeURIComponent(url);

    assertIncludes(decoded, 'GreenTech Innovations India');
    assertIncludes(decoded, '• *Terra: Eco-Luxe Sustainable Onboarding Set* (Qty: 250 units @ $35.00) = $8,750.00');
    assertIncludes(decoded, '*Estimated Quotation Total:* $8,750.00');
    assertIncludes(decoded, '*Total Bulk Savings:* $3250.00');
    assertIncludes(decoded, 'physical pre-production sample box');
    assertIncludes(decoded, 'GST invoice required');
  });

  // -------------------------------------------------------------------------
  // SCENARIO 3: Annual Corporate Holiday Summit Gourmet Hampers
  // -------------------------------------------------------------------------
  test('T4.3: Scenario 3 — Corporate Events: Holiday Summit Gourmet Hampers & Multi-City Logistics', () => {
    env = createVirtualEnv();
    env.loadCatalog();

    // 1. Search 'truffles', open Quick View, select 300 units (Tier 4: $34.00/unit, Base $52.00)
    env.sandbox.openQuickView('prod-8');
    env.sandbox.setQvQty(300);
    env.sandbox.addCurrentQvToRfp();

    // 2. Open Barista Reserve (prod-2), select 50 units (Tier 2: $61.00/unit, Base $68.00)
    env.sandbox.openQuickView('prod-2');
    env.sandbox.setQvQty(50);
    env.sandbox.addCurrentQvToRfp();

    // Verify Financial Math:
    // Truffles: 300 * 34 = $10,200.00 (Standard: 300 * 52 = $15,600.00, Savings = $5,400.00)
    // Coffee:    50 * 61 =  $3,050.00 (Standard:  50 * 68 =  $3,400.00, Savings =   $350.00)
    // Grand Total = $10,200 + $3,050 = $13,250.00
    // Total Savings = $5,400 + $350 = $5,750.00
    const totalDisplay = env.document.getElementById('rfpDrawerTotal');
    const savingsDisplay = env.document.getElementById('rfpDrawerSavings');

    assertIncludes(totalDisplay.textContent, '13,250.00');
    assertIncludes(savingsDisplay.textContent, '5750.00');

    // 3. Fill Details and Submit
    const compInput = env.document.getElementById('rfpCompanyName');
    const notesInput = env.document.getElementById('rfpCustomNotes');
    if (compInput) compInput.value = 'Horizon Media Global';
    if (notesInput) notesInput.value = 'Annual Global Summit Hampers. Require direct multi-address courier dispatch to 350 individual remote employee addresses across 12 cities.';

    const submitBtn = env.document.getElementById('submitRfpWhatsappBtn');
    submitBtn.click();

    // 4. Validate Dispatched Payload
    assertEqual(env.openedUrls.length, 1);
    const { url } = env.openedUrls[0];
    const decoded = decodeURIComponent(url);

    assertIncludes(decoded, 'Horizon Media Global');
    assertIncludes(decoded, '• *Grand Cru: 24k Gold Truffles & Raw Honey* (Qty: 300 units @ $34.00) = $10,200.00');
    assertIncludes(decoded, '• *The Barista Reserve: Pour-Over Craft Kit* (Qty: 50 units @ $61.00) = $3,050.00');
    assertIncludes(decoded, '*Estimated Quotation Total:* $13,250.00');
    assertIncludes(decoded, '*Total Bulk Savings:* $5750.00');
    assertIncludes(decoded, 'direct multi-address courier dispatch to 350 individual remote employee addresses');
  });
});
