/**
 * THE BLUE ANTS — Corporate Product Catalog & Direct WhatsApp Concierge Engine
 * Centralized Configuration & Quiet Luxury State Architecture
 */

const CONFIG = {
  PHONE: '919916418879',
  PHONE_DISPLAY: '+91 9916418879',
  CURRENCY_SYMBOL: '$',
  formatPrice: (amount) => `$${Number(amount).toFixed(2)}`
};

const PRODUCTS = [
  {
    id: 'prod-1',
    name: 'The Sovereign: Executive Leather Suite',
    category: 'executive',
    categoryLabel: 'Executive VIP Suites',
    price: 95.00,
    moq: 25,
    rating: 4.9,
    reviews: 428,
    image: 'assets/products/blueants_exec_leather.webp',
    badge: "Enterprise Choice",
    badgeType: 'choice',
    leadTime: 'standard',
    leadTimeLabel: '5-7 Days Standard',
    brandingOptions: ['debossed', 'gold-foil', 'laser'],
    features: [
      'Top-Grain Italian Saddle Leather Journal (A5)',
      'Weighted Solid Brass Executive Fountain Pen',
      'Fast Qi Wireless Minimalist Matte Charging Pad',
      'Custom Blind-Debossed Company Monogram'
    ],
    description: 'A benchmark in C-suite corporate appreciation. Hand-stitched full-grain leather notebook paired with a precision-balanced brass fountain pen and ultra-thin desk charger.',
    boxContents: [
      '1x Italian Full-Grain Leather Notebook with Refillable 120gsm Paper',
      '1x Solid Brass Fountain Pen with German Iridium Nib & Velvet Pouch',
      '1x 15W Fast Wireless Charger in Aluminum & Soft Matte Finish',
      '1x Braided USB-C Cable with Brass Connectors',
      '1x Custom Foil-Stamped Corporate Presentation Case'
    ],
    bulkTiers: [
      { min: 25, max: 49, price: 95.00, discount: '0%' },
      { min: 50, max: 99, price: 86.00, discount: '10%' },
      { min: 100, max: 249, price: 76.00, discount: '20%' },
      { min: 250, max: 9999, price: 68.00, discount: '28%' }
    ]
  },
  {
    id: 'prod-2',
    name: 'The Barista Reserve: Pour-Over Craft Kit',
    category: 'gourmet',
    categoryLabel: 'Gourmet Connoisseur Hampers',
    price: 68.00,
    moq: 30,
    rating: 4.8,
    reviews: 312,
    image: 'assets/products/blueants_coffee_gourmet.webp',
    badge: 'Best Seller',
    badgeType: 'bestseller',
    leadTime: 'express',
    leadTimeLabel: '48h Express Ready',
    brandingOptions: ['laser', 'screen-print'],
    features: [
      'Ceramic Matte Pour-Over Dripper with Walnut Base',
      'Vacuum Insulated Stainless Tumbler with Gold Ring',
      'Artisanal Guji Single-Origin Whole Bean Coffee (250g)',
      'Brushed Brass Measuring Spoon & Sealing Clip'
    ],
    description: 'Elevate morning routines for remote teams and valued partners. Features specialty roast Ethiopian beans and minimalist Scandinavian brewing hardware.',
    boxContents: [
      '1x V60 Ceramic Matte Black Dripper with Walnut Stand',
      '1x Double-Walled Thermal Tumbler (16oz, 8h hot / 16h cold)',
      '1x 250g Guji Grade-1 Specialty Single-Origin Coffee Beans',
      '1x Heavy Brushed Brass Coffee Scoop with Integrated Bag Clip',
      '1x Brew Master Tasting Notes & Recipe Guide'
    ],
    bulkTiers: [
      { min: 30, max: 49, price: 68.00, discount: '0%' },
      { min: 50, max: 99, price: 61.00, discount: '10%' },
      { min: 100, max: 249, price: 54.00, discount: '20%' },
      { min: 250, max: 9999, price: 48.00, discount: '29%' }
    ]
  },
  {
    id: 'prod-3',
    name: 'The Tech Nomad: ANC & Titanium Power Suite',
    category: 'welcome',
    categoryLabel: 'Welcome & Onboarding Kits',
    price: 145.00,
    moq: 15,
    rating: 4.95,
    reviews: 589,
    image: 'assets/products/blueants_tech_bundle.webp',
    badge: 'Enterprise Choice',
    badgeType: 'choice',
    leadTime: 'standard',
    leadTimeLabel: '5-7 Days Standard',
    brandingOptions: ['laser', 'screen-print'],
    features: [
      'Studio ANC Hybrid Noise-Cancelling Headphones',
      '20,000mAh Brushed Titanium Power Bank with PD 65W',
      'Braided Fast-Charge Cables with Brass Endcaps',
      'Top-Grain Leather Cable Organizer Snaps'
    ],
    description: 'The ultimate kit for high-performing modern executives and frequent business travelers. High-fidelity audio combined with ultra-dense multi-device power.',
    boxContents: [
      '1x Over-Ear Hybrid Active Noise Cancelling Studio Headphones',
      '1x 20,000mAh 65W Laptop & Phone Power Delivery Battery',
      '2x 100W Reinforced Braided USB-C & Lightning Fast Cables',
      '2x Genuine Leather Cable Keepers with Brass Snap Fasteners',
      '1x Hard EVA Travel Protection Case with Corporate Logo Stamp'
    ],
    bulkTiers: [
      { min: 15, max: 49, price: 145.00, discount: '0%' },
      { min: 50, max: 99, price: 130.00, discount: '10%' },
      { min: 100, max: 249, price: 118.00, discount: '18%' },
      { min: 250, max: 9999, price: 105.00, discount: '28%' }
    ]
  },
  {
    id: 'prod-4',
    name: 'Serenity: Botanical Corporate Wellness Box',
    category: 'welcome',
    categoryLabel: 'Welcome & Onboarding Kits',
    price: 58.00,
    moq: 40,
    rating: 4.75,
    reviews: 245,
    image: 'assets/products/blueants_wellness_hamper.webp',
    badge: 'Popular',
    badgeType: 'bestseller',
    leadTime: 'express',
    leadTimeLabel: '48h Express Ready',
    brandingOptions: ['gold-foil', 'laser'],
    features: [
      'Hand-Poured Amber Glass Soy Candle (Cedar & Fig)',
      'Ceramic Minimalist Essential Oil Diffuser with Amber Oils',
      'Organic Chamomile & Lavender Night Tea Infusion',
      'A5 Soft-Touch Wellness Reflection Journal'
    ],
    description: 'Promote mindfulness, work-life balance, and mental rejuvenation across your organization. Ideal for team appreciation days and retreat welcome packages.',
    boxContents: [
      '1x 8oz Natural Soy Wax Candle with Clean Crackling Wood Wick',
      '1x 100ml Pure Essential Oil Blend with Ceramic Diffuser Stone',
      '1x 50g Organic Loose-Leaf Calming Tea in Matte Black Tin',
      '1x Gold-Plated Fine Mesh Tea Infuser Spoon',
      '1x 160-Page Soft-Touch Dot Grid Wellness Journal with Ribbon'
    ],
    bulkTiers: [
      { min: 40, max: 74, price: 58.00, discount: '0%' },
      { min: 75, max: 149, price: 52.00, discount: '10%' },
      { min: 150, max: 299, price: 46.00, discount: '20%' },
      { min: 300, max: 9999, price: 40.00, discount: '31%' }
    ]
  },
  {
    id: 'prod-5',
    name: 'The Highland Connoisseur: Decanter & Chilling Stones',
    category: 'executive',
    categoryLabel: 'Executive VIP Suites',
    price: 120.00,
    moq: 20,
    rating: 4.92,
    reviews: 388,
    image: 'assets/products/blueants_whiskey_connoisseur.webp',
    badge: 'Enterprise Choice',
    badgeType: 'choice',
    leadTime: 'standard',
    leadTimeLabel: '5-7 Days Standard',
    brandingOptions: ['laser', 'gold-foil'],
    features: [
      'Hand-Blown Lead-Free Crystal Decanter (750ml)',
      'Set of 2 Heavy Base Geometric Tumbler Glasses',
      'Granite Chilling Stones in Velvet Keepsake Pouch',
      'Brushed Brass Tongs with Silicone Grip Tips'
    ],
    description: 'A timeless gift for sealing landmark deals and honoring C-suite milestones. Exceptional geometric crystal glassware paired with natural volcanic granite stones.',
    boxContents: [
      '1x 750ml Hand-Cut Crystal Whiskey Decanter with Solid Stopper',
      '2x 320ml Weighted Old Fashioned Geometric Rocks Glasses',
      '6x Hand-Polished Natural Granite Reusable Beverage Chilling Stones',
      '1x Velvet Travel Pouch with Drawstring & Brass Beads',
      '1x Solid Walnut Wood Presentation Crate with Laser-Etched Emblem'
    ],
    bulkTiers: [
      { min: 20, max: 49, price: 120.00, discount: '0%' },
      { min: 50, max: 99, price: 108.00, discount: '10%' },
      { min: 100, max: 249, price: 96.00, discount: '20%' },
      { min: 250, max: 9999, price: 84.00, discount: '30%' }
    ]
  },
  {
    id: 'prod-6',
    name: 'Terra: Eco-Luxe Sustainable Onboarding Set',
    category: 'eco-luxe',
    categoryLabel: 'Sustainable Eco-Luxe',
    price: 48.00,
    moq: 50,
    rating: 4.88,
    reviews: 410,
    image: 'assets/products/blueants_eco_luxe.webp',
    badge: 'Eco Verified',
    badgeType: 'choice',
    leadTime: 'express',
    leadTimeLabel: '48h Express Ready',
    brandingOptions: ['laser', 'screen-print'],
    features: [
      'FSC-Certified Bamboo Thermal Water Bottle (500ml)',
      'Cork & Wheat Straw Hardcover Notebook (100% Recycled)',
      'Biodegradable Wheat Straw Retractable Rollerball Pen',
      'Organic Heavy Canvas Tote with Reinforced Handles'
    ],
    description: 'Reinforce your organization’s ESG commitments with organic, zero-waste, sustainably sourced daily essentials for incoming employees and summit delegates.',
    boxContents: [
      '1x Double-Walled 500ml Insulated Bottle with Natural Bamboo Outer Shell',
      '1x A5 Cork Hardcover Journal with Recycled Post-Consumer Paper',
      '1x Eco Wheat-Straw Blue-Ink Ballpoint Pen',
      '1x 12oz Heavyweight 100% Organic Cotton Canvas Utility Tote',
      '1x Plantable Seed Paper Welcome Card with Wildflower Seeds'
    ],
    bulkTiers: [
      { min: 50, max: 99, price: 48.00, discount: '0%' },
      { min: 100, max: 249, price: 43.00, discount: '10%' },
      { min: 250, max: 499, price: 38.00, discount: '20%' },
      { min: 500, max: 9999, price: 33.00, discount: '31%' }
    ]
  },
  {
    id: 'prod-7',
    name: 'Chronos: Milestone Executive Award Timepiece',
    category: 'executive',
    categoryLabel: 'Executive VIP Suites',
    price: 185.00,
    moq: 10,
    rating: 4.98,
    reviews: 176,
    image: 'assets/products/blueants_milestone_watch.webp',
    badge: 'VIP Milestone',
    badgeType: 'choice',
    leadTime: 'standard',
    leadTimeLabel: '5-7 Days Standard',
    brandingOptions: ['laser'],
    features: [
      'Brushed Gunmetal Solid Stainless Steel Desk Clock',
      'Precision Silent Japanese Quartz Movement',
      'Solid Black Marble Base with Felt Underlay',
      'Custom Laser-Engraved Milestone Commemoration Plate'
    ],
    description: 'Commemorate decades of dedication, IPO celebrations, and exceptional leadership achievements with a substantial marble-anchored desk timepiece.',
    boxContents: [
      '1x Solid Gunmetal Desk Clock with Mineral Glass Face',
      '1x Natural Veined Nero Marquina Marble Display Plinth',
      '1x Diamond-Drag Custom Engraved Brushed Brass Inscription Plaque',
      '1x Microfiber Polishing Cloth & Velvet Protective Sleeve',
      '1x Magnetic Clasp Luxury Padded Gift Case'
    ],
    bulkTiers: [
      { min: 10, max: 24, price: 185.00, discount: '0%' },
      { min: 25, max: 49, price: 168.00, discount: '9%' },
      { min: 50, max: 99, price: 152.00, discount: '18%' },
      { min: 100, max: 9999, price: 135.00, discount: '27%' }
    ]
  },
  {
    id: 'prod-8',
    name: 'Grand Cru: 24k Gold Truffles & Raw Honey',
    category: 'gourmet',
    categoryLabel: 'Gourmet Connoisseur Hampers',
    price: 78.00,
    moq: 25,
    rating: 4.89,
    reviews: 290,
    image: 'assets/products/blueants_gourmet_truffles.webp',
    badge: 'Best Seller',
    badgeType: 'bestseller',
    leadTime: 'express',
    leadTimeLabel: '48h Express Ready',
    brandingOptions: ['gold-foil', 'laser'],
    features: [
      'Handcrafted Single-Origin Belgian Dark Truffles (16pc)',
      'Pure Artisanal Wildflower Forest Honey with Wooden Dipper',
      'Raw Macadamia Nuts Glazed with Madagascar Vanilla',
      'Custom Gold Foil Embossed Satin Keepsake Box'
    ],
    description: 'A decadent culinary indulgence designed for high-value client thank-yous, festive holidays, and year-end celebrations. Premium sweets from master chocolatiers.',
    boxContents: [
      '1x Box of 16 Artisanal Valrhona Dark Ganache Truffles with Edible Gold Flakes',
      '1x 250g Jar of Unfiltered Raw Forest Honey from Himalayan Foothills',
      '1x Hand-Turned Olive Wood Honey Drizzler',
      '1x 150g Roasted Macadamias with Vanilla Bean Dusting',
      '1x Rigid Gold-Embossed Presentation Box with Double-Faced Satin Ribbon'
    ],
    bulkTiers: [
      { min: 25, max: 49, price: 78.00, discount: '0%' },
      { min: 50, max: 99, price: 70.00, discount: '10%' },
      { min: 100, max: 249, price: 62.00, discount: '20%' },
      { min: 250, max: 9999, price: 54.00, discount: '31%' }
    ]
  }
];

// State Architecture
let filterState = {
  category: 'all',
  priceFilters: [],
  moqFilters: [],
  brandingFilters: [],
  sortBy: 'featured'
};

let rfpCart = [];
let currentProduct = null;

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  setupFilterListeners();
  setupModalListeners();
  setupDrawerListeners();
  setupHeaderScroll();
});

function setupHeaderScroll() {
  const header = document.getElementById('brandHeader');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/**
 * Filter & Sort Logic
 */
function getFilteredProducts() {
  let list = PRODUCTS.filter(p => {
    if (filterState.category !== 'all' && p.category !== filterState.category) {
      return false;
    }

    if (filterState.priceFilters.length > 0) {
      const match = filterState.priceFilters.some(pf => {
        if (pf === 'under50') return p.price < 50;
        if (pf === '50to100') return p.price >= 50 && p.price <= 100;
        if (pf === '100to150') return p.price > 100 && p.price <= 150;
        if (pf === 'over150') return p.price > 150;
        return true;
      });
      if (!match) return false;
    }

    if (filterState.moqFilters.length > 0) {
      const match = filterState.moqFilters.some(mf => {
        if (mf === 'under25') return p.moq <= 25;
        if (mf === '25to50') return p.moq >= 25 && p.moq <= 50;
        if (mf === '50plus') return p.moq >= 50;
        return true;
      });
      if (!match) return false;
    }

    if (filterState.brandingFilters.length > 0) {
      const match = filterState.brandingFilters.some(bf => p.brandingOptions.includes(bf));
      if (!match) return false;
    }

    return true;
  });

  list.sort((a, b) => {
    if (filterState.sortBy === 'price-low') return a.price - b.price;
    if (filterState.sortBy === 'price-high') return b.price - a.price;
    if (filterState.sortBy === 'moq') return a.moq - b.moq;
    return 0; // 'featured' keeps original curated order
  });

  return list;
}

/**
 * Render Product Grid
 */
function renderProducts() {
  const container = document.getElementById('productsGrid');
  const countDisplay = document.getElementById('productResultsCount');
  const clearBtn = document.getElementById('clearAllFiltersBtn');
  const activeCountBadge = document.getElementById('activeFilterCount');

  if (!container) return;

  const filtered = getFilteredProducts();

  // Active filter count
  const activeCount = filterState.priceFilters.length + filterState.moqFilters.length + filterState.brandingFilters.length;
  if (activeCountBadge) {
    activeCountBadge.textContent = activeCount;
    activeCountBadge.style.display = activeCount > 0 ? 'inline-flex' : 'none';
  }

  if (clearBtn) {
    clearBtn.style.display = (activeCount > 0 || filterState.category !== 'all') ? 'inline-block' : 'none';
  }

  if (countDisplay) {
    countDisplay.textContent = `Showing ${filtered.length} bespoke corporate suites`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 64px 24px; text-align: center;">
        <i class="fas fa-boxes-stacked" style="font-size: 2.5rem; color: var(--text-muted); margin-bottom: 16px;"></i>
        <h3 style="font-family: var(--font-serif); font-size: 1.25rem; margin-bottom: 8px;">No matching corporate suites found</h3>
        <p style="color: var(--text-secondary); font-size: 0.875rem; max-width: 420px; margin: 0 auto 20px auto;">
          We frequently curate custom suites not listed in our standard collection.
        </p>
        <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
          <button onclick="resetFilters()" class="btn-secondary" style="min-height: 44px; padding: 10px 20px;">
            Reset Filters
          </button>
          <a href="https://wa.me/${CONFIG.PHONE}?text=${encodeURIComponent('Hi Blue Ants, I am looking for custom gift suites with specific requirements.')}" 
             target="_blank" rel="noopener" class="btn-wa-solid" style="min-height: 44px; padding: 10px 20px;">
            <i class="fa-brands fa-whatsapp text-lg"></i> Inquire on WhatsApp
          </a>
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((p) => {
    const lowestTier = p.bulkTiers[p.bulkTiers.length - 1];

    return `
      <article class="product-card" data-id="${p.id}">
        <div class="product-image-container" onclick="openQuickView('${p.id}')">
          <span class="card-badge-choice">${p.badge}</span>
          <span class="card-moq-pill">MOQ ${p.moq}</span>
          <img src="${p.image}" alt="${p.name}" loading="lazy" width="400" height="400">
        </div>
        
        <div class="product-info-wrap">
          <div class="product-cat-label">${p.categoryLabel}</div>
          <h3 class="product-card-title" onclick="openQuickView('${p.id}')">${p.name}</h3>
          <p class="product-card-desc">${p.description}</p>

          <div class="price-section">
            <div class="price-row">
              <span class="price-main">${CONFIG.formatPrice(p.price)}</span>
              <span class="price-unit">/ unit</span>
            </div>
            <div class="price-tier-hint">
              Tier pricing from <strong>${CONFIG.formatPrice(lowestTier.price)}</strong> (Save ${lowestTier.discount})
            </div>
          </div>

          <div class="card-actions-grid">
            <button class="btn-secondary-outline" onclick="openQuickView('${p.id}')" aria-label="View Details for ${p.name}">
              View Details
            </button>
            <button class="btn-primary-gold" onclick="addToRfp('${p.id}')" aria-label="Add to Quote: ${p.name}">
              <i class="fas fa-plus mr-1"></i> Add to Quote
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/**
 * Filter Chip Selection & Occasion Jump
 */
function selectOccasionCategory(cat) {
  filterState.category = cat;
  
  const chips = document.querySelectorAll('.category-chip');
  chips.forEach(chip => {
    if (chip.dataset.category === cat) {
      chip.classList.add('active');
      chip.setAttribute('aria-selected', 'true');
    } else {
      chip.classList.remove('active');
      chip.setAttribute('aria-selected', 'false');
    }
  });

  renderProducts();

  const catalog = document.getElementById('catalogSection');
  if (catalog) {
    catalog.scrollIntoView({ behavior: 'smooth' });
  }
}

function resetFilters() {
  filterState = {
    category: 'all',
    priceFilters: [],
    moqFilters: [],
    brandingFilters: [],
    sortBy: 'featured'
  };

  document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);

  const chips = document.querySelectorAll('.category-chip');
  chips.forEach(c => {
    if (c.dataset.category === 'all') {
      c.classList.add('active');
      c.setAttribute('aria-selected', 'true');
    } else {
      c.classList.remove('active');
      c.setAttribute('aria-selected', 'false');
    }
  });

  const sortSelect = document.getElementById('sortBySelect');
  if (sortSelect) sortSelect.value = 'featured';

  renderProducts();
}

function setupFilterListeners() {
  // Category chips
  const chips = document.querySelectorAll('.category-chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => {
        c.classList.remove('active');
        c.setAttribute('aria-selected', 'false');
      });
      chip.classList.add('active');
      chip.setAttribute('aria-selected', 'true');
      filterState.category = chip.dataset.category || 'all';
      renderProducts();
    });
  });

  // Sort dropdown
  const sortSelect = document.getElementById('sortBySelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      filterState.sortBy = e.target.value;
      renderProducts();
    });
  }

  // Checkbox listeners in filter sheet
  const syncGroup = (inputName, stateKey) => {
    document.querySelectorAll(`input[name="${inputName}"]`).forEach(cb => {
      cb.addEventListener('change', () => {
        filterState[stateKey] = Array.from(document.querySelectorAll(`input[name="${inputName}"]:checked`)).map(c => c.value);
        renderProducts();
      });
    });
  };

  syncGroup('priceFilter', 'priceFilters');
  syncGroup('moqFilter', 'moqFilters');
  syncGroup('brandingFilter', 'brandingFilters');
}

/**
 * Quick View Modal
 */
function openQuickView(prodId) {
  const product = PRODUCTS.find(p => p.id === prodId);
  if (!product) return;
  currentProduct = product;

  const modal = document.getElementById('quickViewModal');
  const content = document.getElementById('quickViewContent');
  if (!modal || !content) return;

  content.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr; gap: 24px;">
      <div style="aspect-ratio: 16/9; background: var(--bg-subtle); border-radius: 8px; overflow: hidden;">
        <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>

      <div>
        <div class="eyebrow-tag">${product.categoryLabel}</div>
        <h2 id="qvModalTitle" style="font-family: var(--font-serif); font-size: 1.5rem; margin-bottom: 8px;">${product.name}</h2>
        <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 16px;">${product.description}</p>

        <div style="background: var(--bg-primary); padding: 16px; border-radius: 8px; border: 1px solid var(--border-hairline); margin-bottom: 20px;">
          <div style="font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent-gold); margin-bottom: 8px;">
            Included in Gift Suite:
          </div>
          <ul style="font-size: 0.8125rem; color: var(--text-secondary); padding-left: 18px; line-height: 1.6;">
            ${product.boxContents.map(c => `<li>${c}</li>`).join('')}
          </ul>
        </div>

        <div style="background: #FFFFFF; border: 1px solid var(--border-medium); border-radius: 8px; padding: 16px; margin-bottom: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-size: 0.8125rem; font-weight: 600; color: var(--text-primary);">Order Quantity (MOQ: ${product.moq})</span>
            <span id="qvDiscountBadge" style="font-size: 0.75rem; color: var(--brand-navy); font-weight: 600;">Base Rate</span>
          </div>

          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px;">
            <button onclick="adjustQvQty(-10)" class="stepper-btn" aria-label="Decrease quantity">-</button>
            <input type="number" id="qvQtyInput" value="${product.moq}" min="${product.moq}" step="5"
                   style="width: 80px; height: 44px; text-align: center; border: 1px solid var(--border-medium); border-radius: 4px; font-weight: 600; outline: none;">
            <button onclick="adjustQvQty(10)" class="stepper-btn" aria-label="Increase quantity">+</button>
            
            <span style="font-size: 0.8125rem; color: var(--text-muted); margin-left: 8px;">Units</span>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: baseline; padding-top: 12px; border-top: 1px solid var(--border-hairline);">
            <div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">Estimated Unit Price:</div>
              <strong id="qvUnitPrice" style="font-size: 1.125rem; color: var(--text-primary); font-family: var(--font-serif);">${CONFIG.formatPrice(product.price)}</strong>
            </div>
            <div style="text-align: right;">
              <div style="font-size: 0.75rem; color: var(--text-muted);">Total Estimate:</div>
              <strong id="qvTotalPrice" style="font-size: 1.25rem; color: var(--brand-navy); font-family: var(--font-serif);">${CONFIG.formatPrice(product.price * product.moq)}</strong>
            </div>
          </div>
        </div>

        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <button onclick="addCurrentQvToRfp()" class="btn-primary" style="flex: 1; min-height: 48px;">
            <i class="fas fa-plus"></i> Add to Quote Request
          </button>
          <button onclick="inquireProductWhatsapp('${product.id}')" class="btn-wa-solid" style="min-height: 48px;">
            <i class="fa-brands fa-whatsapp text-lg"></i> Instant WhatsApp
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.classList.add('scroll-locked');
  const dock = document.getElementById('mobileBottomDock');
  if (dock) dock.classList.add('is-hidden');

  updateQvCalculations();
}

function closeQuickView() {
  const modal = document.getElementById('quickViewModal');
  if (modal) modal.classList.remove('active');
  document.body.classList.remove('scroll-locked');
  const dock = document.getElementById('mobileBottomDock');
  if (dock) dock.classList.remove('is-hidden');
}

function adjustQvQty(delta) {
  const input = document.getElementById('qvQtyInput');
  if (!input || !currentProduct) return;
  let val = parseInt(input.value) || currentProduct.moq;
  val = Math.max(currentProduct.moq, val + delta);
  input.value = val;
  updateQvCalculations();
}

function updateQvCalculations() {
  if (!currentProduct) return;
  const input = document.getElementById('qvQtyInput');
  const unitPriceEl = document.getElementById('qvUnitPrice');
  const totalPriceEl = document.getElementById('qvTotalPrice');
  const discountBadge = document.getElementById('qvDiscountBadge');

  const qty = parseInt(input?.value) || currentProduct.moq;

  let appliedTier = currentProduct.bulkTiers[0];
  for (let t of currentProduct.bulkTiers) {
    if (qty >= t.min) appliedTier = t;
  }

  if (unitPriceEl) unitPriceEl.textContent = `${CONFIG.formatPrice(appliedTier.price)} / unit`;
  if (totalPriceEl) totalPriceEl.textContent = CONFIG.formatPrice(appliedTier.price * qty);
  if (discountBadge) {
    discountBadge.textContent = appliedTier.discount !== '0%' ? `Tier Savings: ${appliedTier.discount}` : 'Base Rate';
  }
}

function addCurrentQvToRfp() {
  if (!currentProduct) return;
  const input = document.getElementById('qvQtyInput');
  const qty = parseInt(input?.value) || currentProduct.moq;
  addToRfp(currentProduct.id, qty);
  closeQuickView();
}

function inquireProductWhatsapp(prodId) {
  const product = PRODUCTS.find(p => p.id === prodId);
  if (!product) return;

  const input = document.getElementById('qvQtyInput');
  const qty = parseInt(input?.value) || product.moq;

  let appliedTier = product.bulkTiers[0];
  for (let t of product.bulkTiers) {
    if (qty >= t.min) appliedTier = t;
  }

  const total = appliedTier.price * qty;

  const msg = 
    `*THE BLUE ANTS — CORPORATE GIFT INQUIRY*\n` +
    `━━━━━━━━━━━━━━━━━━━━\n` +
    `*Suite:* ${product.name}\n` +
    `*Category:* ${product.categoryLabel}\n` +
    `*Quantity:* ${qty} units\n` +
    `*Price Tier:* ${CONFIG.formatPrice(appliedTier.price)} / unit\n` +
    `*Total Estimate:* ${CONFIG.formatPrice(total)}\n` +
    `━━━━━━━━━━━━━━━━━━━━\n` +
    `Hi Blue Ants team, please share corporate branding options (gold foil debossing / laser engraving), sample availability, and lead times.`;

  window.open(`https://wa.me/${CONFIG.PHONE}?text=${encodeURIComponent(msg)}`, '_blank');
}

/**
 * RFP Quote Drawer Management
 */
function addToRfp(prodId, qty) {
  const product = PRODUCTS.find(p => p.id === prodId);
  if (!product) return;

  const finalQty = qty || product.moq;
  const existing = rfpCart.find(i => i.id === prodId);

  if (existing) {
    existing.qty += finalQty;
  } else {
    rfpCart.push({
      id: product.id,
      name: product.name,
      image: product.image,
      basePrice: product.price,
      moq: product.moq,
      bulkTiers: product.bulkTiers,
      qty: finalQty
    });
  }

  updateRfpBadges();
  renderRfpDrawer();
  openRfpDrawer();
  showToast(`Added ${product.name} to quote`);
}

function removeFromRfp(prodId) {
  rfpCart = rfpCart.filter(i => i.id !== prodId);
  updateRfpBadges();
  renderRfpDrawer();
}

function adjustRfpItemQty(prodId, delta) {
  const item = rfpCart.find(i => i.id === prodId);
  if (!item) return;
  item.qty = Math.max(item.moq, item.qty + delta);
  updateRfpBadges();
  renderRfpDrawer();
}

function updateRfpBadges() {
  const count = rfpCart.length;
  const headerBadge = document.getElementById('rfpCartCount');
  const dockBadge = document.getElementById('mobileDockBadge');

  if (headerBadge) {
    headerBadge.textContent = count;
    headerBadge.style.display = count > 0 ? 'inline-flex' : 'none';
  }

  if (dockBadge) {
    dockBadge.textContent = count;
    dockBadge.style.display = count > 0 ? 'inline-flex' : 'none';
  }
}

function renderRfpDrawer() {
  const container = document.getElementById('rfpDrawerItems');
  const totalDisplay = document.getElementById('rfpDrawerTotal');
  const savingsDisplay = document.getElementById('rfpDrawerSavings');

  if (!container) return;

  if (rfpCart.length === 0) {
    container.innerHTML = `
      <div style="padding: 48px 16px; text-align: center; color: var(--text-muted);">
        <i class="fas fa-boxes-stacked" style="font-size: 2rem; margin-bottom: 12px; display: block;"></i>
        <h4 style="font-family: var(--font-serif); font-size: 1.125rem; color: var(--text-primary); margin-bottom: 4px;">Quote list is empty</h4>
        <p style="font-size: 0.8125rem;">Select suites from the collection to build your quotation.</p>
      </div>
    `;
    if (totalDisplay) totalDisplay.textContent = '$0.00';
    if (savingsDisplay) savingsDisplay.textContent = '$0.00';
    return;
  }

  let grandTotal = 0;
  let standardGrandTotal = 0;

  container.innerHTML = rfpCart.map(item => {
    let appliedTier = item.bulkTiers[0];
    for (let t of item.bulkTiers) {
      if (item.qty >= t.min) appliedTier = t;
    }

    const itemTotal = appliedTier.price * item.qty;
    grandTotal += itemTotal;
    standardGrandTotal += item.basePrice * item.qty;

    return `
      <div style="background: #FFFFFF; border: 1px solid var(--border-hairline); border-radius: 8px; padding: 12px; display: flex; gap: 12px; align-items: center;">
        <img src="${item.image}" alt="${item.name}" style="width: 56px; height: 56px; object-fit: cover; border-radius: 6px; flex-shrink: 0;">
        <div style="flex: 1; min-width: 0;">
          <h4 style="font-size: 0.8125rem; font-weight: 600; color: var(--text-primary); margin-bottom: 2px;" class="truncate">${item.name}</h4>
          <div style="font-size: 0.75rem; color: var(--text-secondary);">${CONFIG.formatPrice(appliedTier.price)} / unit</div>
          
          <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 8px;">
            <div style="display: flex; align-items: center; border: 1px solid var(--border-medium); border-radius: 4px; overflow: hidden;">
              <button onclick="adjustRfpItemQty('${item.id}', -10)" style="width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; background: var(--bg-subtle); font-weight: 600;">-</button>
              <span style="padding: 0 8px; font-size: 0.8125rem; font-weight: 600;">${item.qty}</span>
              <button onclick="adjustRfpItemQty('${item.id}', 10)" style="width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; background: var(--bg-subtle); font-weight: 600;">+</button>
            </div>

            <div style="font-family: var(--font-serif); font-weight: 600; font-size: 0.9375rem; color: var(--text-primary);">
              ${CONFIG.formatPrice(itemTotal)}
            </div>

            <button onclick="removeFromRfp('${item.id}')" style="color: var(--text-muted); padding: 4px;" aria-label="Remove item">
              <i class="fas fa-trash-can text-xs"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (totalDisplay) totalDisplay.textContent = CONFIG.formatPrice(grandTotal);
  if (savingsDisplay) {
    const savings = standardGrandTotal - grandTotal;
    savingsDisplay.textContent = savings > 0 ? `Saved ${CONFIG.formatPrice(savings)} with Tier Privileges` : 'Base Tier Rate';
  }
}

function openRfpDrawer() {
  const drawer = document.getElementById('rfpDrawer');
  const backdrop = document.getElementById('rfpBackdrop');
  if (drawer) drawer.classList.add('active');
  if (backdrop) backdrop.classList.add('active');
  document.body.classList.add('scroll-locked');
  const dock = document.getElementById('mobileBottomDock');
  if (dock) dock.classList.add('is-hidden');
}

function closeRfpDrawer() {
  const drawer = document.getElementById('rfpDrawer');
  const backdrop = document.getElementById('rfpBackdrop');
  if (drawer) drawer.classList.remove('active');
  if (backdrop) backdrop.classList.remove('active');
  document.body.classList.remove('scroll-locked');
  const dock = document.getElementById('mobileBottomDock');
  if (dock) dock.classList.remove('is-hidden');
}

function openMobileFilters() {
  const modal = document.getElementById('mobileFilterModal');
  if (modal) modal.classList.add('active');
  document.body.classList.add('scroll-locked');
  const dock = document.getElementById('mobileBottomDock');
  if (dock) dock.classList.add('is-hidden');
}

function closeMobileFilters() {
  const modal = document.getElementById('mobileFilterModal');
  if (modal) modal.classList.remove('active');
  document.body.classList.remove('scroll-locked');
  const dock = document.getElementById('mobileBottomDock');
  if (dock) dock.classList.remove('is-hidden');
}

function setupModalListeners() {
  const qvModal = document.getElementById('quickViewModal');
  if (qvModal) {
    qvModal.addEventListener('click', (e) => {
      if (e.target === qvModal) closeQuickView();
    });
  }

  const filterModal = document.getElementById('mobileFilterModal');
  if (filterModal) {
    filterModal.addEventListener('click', (e) => {
      if (e.target === filterModal) closeMobileFilters();
    });
  }

  // Escape key global listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeQuickView();
      closeMobileFilters();
      closeRfpDrawer();
    }
  });
}

function setupDrawerListeners() {
  const openBtn = document.getElementById('openRfpCartBtn');
  if (openBtn) openBtn.addEventListener('click', openRfpDrawer);

  const submitBtn = document.getElementById('submitRfpWhatsappBtn');
  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      if (rfpCart.length === 0) {
        showToast('Please add items to quote request first');
        return;
      }

      const company = document.getElementById('rfpCompanyName')?.value.trim() || 'Corporate Client';
      const notes = document.getElementById('rfpCustomNotes')?.value.trim() || 'Standard corporate dispatch';

      const sampleBox = document.getElementById('rfpOptionSampleBox')?.checked;
      const gstInvoice = document.getElementById('rfpOptionGstInvoice')?.checked;
      const multiAddress = document.getElementById('rfpOptionMultiAddress')?.checked;

      const selectedOptions = [];
      if (sampleBox) selectedOptions.push('Physical Pre-Production Sample Box Requested');
      if (gstInvoice) selectedOptions.push('GST / Tax Invoice Required');
      if (multiAddress) selectedOptions.push('Multi-Address Employee Drop-Shipping');

      let grandTotal = 0;
      let standardTotal = 0;

      const itemsText = rfpCart.map(item => {
        let appliedTier = item.bulkTiers[0];
        for (let t of item.bulkTiers) {
          if (item.qty >= t.min) appliedTier = t;
        }
        const itemTotal = appliedTier.price * item.qty;
        grandTotal += itemTotal;
        standardTotal += item.basePrice * item.qty;

        return `• *${item.name}* (Qty: ${item.qty} units @ ${CONFIG.formatPrice(appliedTier.price)}) = ${CONFIG.formatPrice(itemTotal)}`;
      }).join('\n');

      const savings = standardTotal - grandTotal;
      let optionsText = selectedOptions.length > 0 
        ? `*Options:*\n${selectedOptions.map(o => `• ${o}`).join('\n')}\n━━━━━━━━━━━━━━━━━━━━\n`
        : '';

      const msg = 
        `*NEW CORPORATE QUOTE REQUEST — THE BLUE ANTS*\n` +
        `━━━━━━━━━━━━━━━━━━━━\n` +
        `*Company / Organization:* ${company}\n` +
        `*Special Requirements / Notes:* ${notes}\n` +
        `━━━━━━━━━━━━━━━━━━━━\n` +
        `*Requested Packages:*\n` +
        `${itemsText}\n` +
        `━━━━━━━━━━━━━━━━━━━━\n` +
        `*Estimated Quotation Total:* ${CONFIG.formatPrice(grandTotal)}\n` +
        `*Total Bulk Savings:* ${CONFIG.formatPrice(savings)}\n` +
        `━━━━━━━━━━━━━━━━━━━━\n` +
        `${optionsText}` +
        `Please share formal PDF quotation, branding mockups, and delivery timelines.`;

      window.open(`https://wa.me/${CONFIG.PHONE}?text=${encodeURIComponent(msg)}`, '_blank');
      closeRfpDrawer();
      showToast('Opening WhatsApp with your quote request...');
    });
  }
}

function showToast(message) {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}
