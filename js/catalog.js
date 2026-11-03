/**
 * THE BLUE ANTS — THE PRINTED CATALOG
 * Corporate Product Catalog & Interactive Stamping Engine
 * Architecture: Zero heavy runtime dependencies, 60fps 3D transforms, Accessible State
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
    categoryLabel: 'Executive VIP',
    price: 95.00,
    moq: 25,
    rating: 4.9,
    reviews: 428,
    image: 'assets/products/blueants_exec_leather.webp',
    badge: "VIP Standard",
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
    description: 'Full-grain saddle leather notebook paired with a precision-balanced brass fountain pen and ultra-thin desk charger in rigid presentation box.',
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
    categoryLabel: 'Gourmet Pairings',
    price: 68.00,
    moq: 30,
    rating: 4.8,
    reviews: 312,
    image: 'assets/products/blueants_coffee_gourmet.webp',
    badge: 'Artisanal',
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
    description: 'Specialty roast single-origin Ethiopian coffee beans paired with Scandinavian ceramic V60 dripper and double-walled thermal tumbler.',
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
    categoryLabel: 'Onboarding & Tech',
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
    description: 'High-fidelity hybrid noise-cancelling headphones combined with 65W laptop-capable titanium power bank and leather cable keepers.',
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
    categoryLabel: 'Wellness & Team',
    price: 58.00,
    moq: 40,
    rating: 4.75,
    reviews: 245,
    image: 'assets/products/blueants_wellness_hamper.webp',
    badge: 'Mindful Team',
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
    description: 'Hand-poured cedar & fig soy candle, ceramic aroma diffuser stone, organic loose-leaf tea, and dot-grid mindfulness journal.',
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
    categoryLabel: 'Executive VIP',
    price: 120.00,
    moq: 20,
    rating: 4.92,
    reviews: 388,
    image: 'assets/products/blueants_whiskey_connoisseur.webp',
    badge: 'Milestone',
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
    description: 'Lead-free geometric crystal whiskey decanter with 2 heavy-base rocks tumblers and natural granite beverage chilling stones in walnut crate.',
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
    description: 'Double-walled bamboo insulated bottle, recycled cork hardcover notebook, biodegradable wheat pen, and raw cotton utility tote.',
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
    categoryLabel: 'Executive VIP',
    price: 185.00,
    moq: 10,
    rating: 4.98,
    reviews: 176,
    image: 'assets/products/blueants_milestone_watch.webp',
    badge: 'Board Award',
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
    description: 'Brushed gunmetal stainless steel desk clock anchored on solid Nero Marquina black marble with custom engraved brass inscription plaque.',
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
    categoryLabel: 'Gourmet Pairings',
    price: 78.00,
    moq: 25,
    rating: 4.89,
    reviews: 290,
    image: 'assets/products/blueants_gourmet_truffles.webp',
    badge: 'Confection',
    badgeType: 'bestseller',
    leadTime: 'express',
    leadTimeLabel: '48h Express Ready',
    brandingOptions: ['gold-foil', 'laser'],
    features: [
      'Artisanal Dark Chocolate Truffles with 24k Edible Gold Leaf',
      'Raw Wildflower Honey Jar from Himalayan Foothills (250g)',
      'Hand-Carved Olive Wood Honey Drizzler',
      'Slow-Roasted Vanilla Glazed Macadamia Nuts'
    ],
    description: 'Handmade dark chocolate truffles adorned with edible gold leaf, unfiltered Himalayan forest honey, and carved olive wood honey drizzler.',
    boxContents: [
      '1x 12-Piece Grand Cru Dark Chocolate Truffle Assortment with Edible Gold',
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

// Active State
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
  initHeroStamper();
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
 * =========================================================================
 * SIGNATURE MOMENT: "STAMP YOUR OWN BOX" ENGINE
 * Real-time metallic foil rendering, specular reflection, 3D tilt & lid reveal
 * =========================================================================
 */
function initHeroStamper() {
  const stamperInput = document.getElementById('companyStamperInput');
  const stampBtn = document.getElementById('stampActionBtn');
  const boxStampedName = document.getElementById('boxStampedName');
  const requestStampedBtn = document.getElementById('requestStampedBoxBtn');
  const box3DWrapper = document.getElementById('box3DWrapper');
  const boxLid = document.getElementById('boxLid');
  const toggleLidBtn = document.getElementById('toggleLidBtn');
  const lidToggleText = document.getElementById('lidToggleText');
  const boxFoilSheen = document.getElementById('boxFoilSheen');
  const stage = document.getElementById('heroBoxStage');
  const rfpCompanyInput = document.getElementById('rfpCompanyName');

  if (!stamperInput || !boxStampedName) return;

  const updateStamping = () => {
    const rawVal = stamperInput.value.trim();
    const displayName = rawVal.length > 0 ? rawVal.toUpperCase() : 'YOUR COMPANY';
    boxStampedName.textContent = displayName;

    // Sync to Quote Drawer Company Field
    if (rfpCompanyInput && rawVal.length > 0) {
      rfpCompanyInput.value = rawVal;
    }

    // Update WhatsApp CTA Link with pre-filled company name
    if (requestStampedBtn) {
      const msg = `Hi The Blue Ants, I'd like a bulk quote for The Sovereign Suite customized with our branding for ${displayName}.`;
      requestStampedBtn.href = `https://wa.me/${CONFIG.PHONE}?text=${encodeURIComponent(msg)}`;
    }
  };

  stamperInput.addEventListener('input', updateStamping);
  stamperInput.addEventListener('change', updateStamping);

  if (stampBtn) {
    stampBtn.addEventListener('click', () => {
      updateStamping();
      boxStampedName.style.transform = 'scale(1.06)';
      setTimeout(() => {
        boxStampedName.style.transform = 'scale(1)';
      }, 300);
      showToast('Foil stamp updated on presentation lid');
    });
  }

  // Toggle Lid Open / Closed
  const toggleLid = (e) => {
    if (e) e.stopPropagation();
    if (!box3DWrapper) return;
    const isOpen = box3DWrapper.classList.toggle('lid-open');
    if (lidToggleText) {
      lidToggleText.textContent = isOpen ? 'Close Lid' : 'Open Lid to Inspect';
    }
  };

  if (toggleLidBtn) toggleLidBtn.addEventListener('click', toggleLid);
  if (boxLid) {
    boxLid.addEventListener('click', (e) => {
      // Don't toggle if clicking inspect button directly to avoid double toggle
      if (e.target.closest('#toggleLidBtn')) return;
      toggleLid();
    });
    boxLid.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleLid();
      }
    });
  }

  // Interactive Specular Sheen & 3D Tilt Tracking
  if (stage && box3DWrapper && boxFoilSheen) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      stage.addEventListener('mousemove', (e) => {
        const rect = stage.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        // Subtle 3D tilt
        const rotX = 16 - y * 10;
        const rotY = -12 + x * 12;
        box3DWrapper.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;

        // Specular foil gradient sheen angle
        const angle = 90 + Math.round(x * 60);
        const intensity = Math.min(0.45, 0.2 + Math.abs(x) * 0.3);
        boxFoilSheen.style.background = `linear-gradient(${angle}deg, transparent 20%, rgba(255, 235, 180, ${intensity}) 45%, transparent 65%)`;
      });

      stage.addEventListener('mouseleave', () => {
        box3DWrapper.style.transform = 'rotateX(16deg) rotateY(-12deg)';
        boxFoilSheen.style.background = 'linear-gradient(115deg, transparent 20%, rgba(255, 235, 180, 0.25) 45%, transparent 65%)';
      });
    }
  }

  // Initial call
  updateStamping();
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
        if (mf === 'low') return p.moq <= 25;
        if (mf === 'mid') return p.moq > 25 && p.moq <= 50;
        if (mf === 'bulk') return p.moq > 50;
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
    return 0; // 'featured'
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

  const activeCount = filterState.priceFilters.length + filterState.moqFilters.length + filterState.brandingFilters.length;
  if (activeCountBadge) {
    activeCountBadge.textContent = activeCount;
    activeCountBadge.style.display = activeCount > 0 ? 'inline-flex' : 'none';
  }

  if (clearBtn) {
    clearBtn.style.display = (activeCount > 0 || filterState.category !== 'all') ? 'inline-block' : 'none';
  }

  if (countDisplay) {
    countDisplay.textContent = `Showing ${filtered.length} suites`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 64px 24px; text-align: center; border: 1px dashed var(--border-strong); background: var(--color-paper-card);">
        <h3 style="font-family: var(--font-serif); font-size: 1.5rem; margin-bottom: 8px;">No matching suites found</h3>
        <p style="color: var(--color-ink-muted); font-size: 0.9375rem; max-width: 440px; margin: 0 auto 20px auto;">
          We frequently curate custom suites not listed in our standard catalogue.
        </p>
        <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
          <button onclick="resetFilters()" class="btn-card-details" style="height: 48px; padding: 0 20px;">
            Reset Filters
          </button>
          <a href="https://wa.me/${CONFIG.PHONE}?text=${encodeURIComponent('Hi Blue Ants, I am looking for custom corporate gift suites with specific requirements.')}" 
             target="_blank" rel="noopener" class="btn-wa-direct" style="height: 48px; padding: 0 20px;">
            <i class="fa-brands fa-whatsapp text-lg"></i> Inquire on WhatsApp
          </a>
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((p, idx) => {
    return `
      <article class="product-catalog-card" data-id="${p.id}">
        <div class="product-image-slot" onclick="openQuickView('${p.id}')">
          <img src="${p.image}" alt="${p.name}" loading="lazy" width="400" height="400">
        </div>
        
        <div class="product-body-specs">
          <div class="product-card-mono-row">
            <span class="mono-caption" style="font-size: 0.6875rem;">NO. 0${idx + 1} // ${p.categoryLabel.toUpperCase()}</span>
            <span class="mono-caption" style="color: var(--color-blue-ant); font-size: 0.6875rem;">${p.badge}</span>
          </div>

          <h3 class="product-title-serif" onclick="openQuickView('${p.id}')">${p.name}</h3>
          <p class="product-short-desc">${p.description}</p>

          <div class="product-price-moq-bar">
            <div>
              <span class="product-unit-price">${CONFIG.formatPrice(p.price)}</span>
              <span class="mono-caption" style="font-size: 0.6875rem; color: var(--color-ink-muted);"> / UNIT</span>
            </div>
            <div class="product-moq-spec">MOQ: ${p.moq} UNITS</div>
          </div>

          <div class="card-action-btns">
            <button class="btn-card-details" onclick="openQuickView('${p.id}')" aria-label="View Specs: ${p.name}">
              View Specs
            </button>
            <button class="btn-card-add" onclick="addToRfp('${p.id}')" aria-label="Add to Quote: ${p.name}">
              <i class="fas fa-plus text-xs"></i> Add to Quote
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
  
  const tabs = document.querySelectorAll('.catalog-tab');
  tabs.forEach(tab => {
    if (tab.dataset.category === cat) {
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
    } else {
      tab.classList.remove('active');
      tab.setAttribute('aria-selected', 'false');
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

  const tabs = document.querySelectorAll('.catalog-tab');
  tabs.forEach(t => {
    if (t.dataset.category === 'all') {
      t.classList.add('active');
      t.setAttribute('aria-selected', 'true');
    } else {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    }
  });

  const sortSelect = document.getElementById('sortBySelect');
  if (sortSelect) sortSelect.value = 'featured';

  renderProducts();
}

function setupFilterListeners() {
  // Category tabs
  const tabs = document.querySelectorAll('.catalog-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      filterState.category = tab.dataset.category || 'all';
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
}

function applyMobileFilters() {
  filterState.priceFilters = Array.from(document.querySelectorAll('input[name="priceFilter"]:checked')).map(c => c.value);
  filterState.moqFilters = Array.from(document.querySelectorAll('input[name="moqFilter"]:checked')).map(c => c.value);
  filterState.brandingFilters = Array.from(document.querySelectorAll('input[name="brandFilter"]:checked')).map(c => c.value);

  renderProducts();
  closeMobileFilters();
}

/**
 * Quick View Modal
 */
function openQuickView(prodId) {
  const product = PRODUCTS.find(p => p.id === prodId);
  if (!product) return;
  currentProduct = product;

  const modal = document.getElementById('quickViewModal');
  const title = document.getElementById('qvSuiteTitle');
  const content = document.getElementById('quickViewContent');
  if (!modal || !content) return;

  if (title) title.textContent = product.name;

  content.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 20px;">
      <div style="aspect-ratio: 16/10; background: var(--color-paper-subtle); border: 1px solid var(--border-hairline); overflow: hidden;">
        <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>

      <div>
        <div class="mono-caption" style="margin-bottom: 6px;">${product.categoryLabel.toUpperCase()} // ${product.badge}</div>
        <p style="font-size: 0.9375rem; color: var(--color-ink-secondary); line-height: 1.5; margin-bottom: 16px;">
          ${product.description}
        </p>

        <div style="background: var(--color-paper-card); padding: 16px; border: 1px solid var(--border-hairline); margin-bottom: 20px;">
          <div class="mono-caption" style="margin-bottom: 8px; color: var(--color-ink);">SUITE CONTENTS (BOX EMBEDDED)</div>
          <ul style="font-size: 0.875rem; color: var(--color-ink-secondary); padding-left: 18px; line-height: 1.6;">
            ${product.boxContents.map(c => `<li>${c}</li>`).join('')}
          </ul>
        </div>

        <div style="background: #FFFFFF; border: 1px solid var(--border-hairline); padding: 16px; margin-bottom: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span class="mono-caption">ORDER QUANTITY (MOQ: ${product.moq})</span>
            <span id="qvDiscountBadge" class="mono-caption" style="color: var(--color-blue-ant);">Base Rate</span>
          </div>

          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px;">
            <div class="qty-stepper-wrap">
              <button onclick="adjustQvQty(-10)" class="stepper-btn" aria-label="Decrease quantity">-</button>
              <input type="number" id="qvQtyInput" value="${product.moq}" min="${product.moq}" step="5" class="stepper-input">
              <button onclick="adjustQvQty(10)" class="stepper-btn" aria-label="Increase quantity">+</button>
            </div>
            <span class="mono-caption" style="color: var(--color-ink-muted);">UNITS</span>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: baseline; padding-top: 12px; border-top: 1px solid var(--border-hairline);">
            <div>
              <div class="mono-caption" style="font-size: 0.6875rem;">UNIT ESTIMATE:</div>
              <strong id="qvUnitPrice" style="font-family: var(--font-mono); font-size: 1.125rem;">${CONFIG.formatPrice(product.price)}</strong>
            </div>
            <div style="text-align: right;">
              <div class="mono-caption" style="font-size: 0.6875rem;">TOTAL ESTIMATE:</div>
              <strong id="qvTotalPrice" style="font-family: var(--font-mono); font-size: 1.25rem; color: var(--color-blue-ant);">${CONFIG.formatPrice(product.price * product.moq)}</strong>
            </div>
          </div>
        </div>

        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <button onclick="addCurrentQvToRfp()" class="btn-card-add" style="flex: 1; height: 50px; font-size: 0.75rem;">
            <i class="fas fa-plus"></i> Add to Quote Request
          </button>
          <button onclick="inquireProductWhatsapp('${product.id}')" class="btn-wa-direct" style="height: 50px;">
            <i class="fa-brands fa-whatsapp text-lg"></i> Direct WhatsApp
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
    discountBadge.textContent = appliedTier.discount !== '0%' ? `Volume Privilege: ${appliedTier.discount}` : 'Base Rate';
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
    `*Estimated Unit Price:* ${CONFIG.formatPrice(appliedTier.price)}\n` +
    `*Total Estimate:* ${CONFIG.formatPrice(total)}\n` +
    `━━━━━━━━━━━━━━━━━━━━\n` +
    `Hi Blue Ants team, please share corporate branding options (gold foil debossing / laser engraving), sample availability, and lead times.`;

  window.open(`https://wa.me/${CONFIG.PHONE}?text=${encodeURIComponent(msg)}`, '_blank');
}

/**
 * =========================================================================
 * RFP QUOTE DRAWER & MICRO-INTERACTION (Nav Cart Receive Bump)
 * =========================================================================
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

  // Supporting wow micro-moment 2: Nav quote button receives item with tactile bump
  const navQuoteBtn = document.getElementById('openRfpCartBtn');
  if (navQuoteBtn) {
    navQuoteBtn.classList.remove('cart-received');
    void navQuoteBtn.offsetWidth; // trigger reflow
    navQuoteBtn.classList.add('cart-received');
    setTimeout(() => navQuoteBtn.classList.remove('cart-received'), 500);
  }

  updateRfpBadges();
  renderRfpDrawer();
  openRfpDrawer();
  showToast(`Added ${product.name} to quotation list`);
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
  const itemCountHeader = document.getElementById('rfpItemCountHeader');

  if (headerBadge) {
    headerBadge.textContent = count;
    headerBadge.style.display = count > 0 ? 'inline-flex' : 'none';
  }

  if (dockBadge) {
    dockBadge.textContent = count;
    dockBadge.style.display = count > 0 ? 'inline-flex' : 'none';
  }

  if (itemCountHeader) {
    itemCountHeader.textContent = `${count} ${count === 1 ? 'Suite' : 'Suites'} Selected`;
  }
}

function renderRfpDrawer() {
  const container = document.getElementById('rfpCartItemsContainer');
  const totalDisplay = document.getElementById('rfpTotalAmount');
  const discountNotice = document.getElementById('rfpDiscountNotice');

  if (!container) return;

  if (rfpCart.length === 0) {
    container.innerHTML = `
      <div style="padding: 48px 16px; text-align: center; color: var(--color-ink-muted);">
        <i class="fas fa-boxes-stacked" style="font-size: 2rem; margin-bottom: 12px; display: block; opacity: 0.5;"></i>
        <h4 style="font-family: var(--font-serif); font-size: 1.25rem; color: var(--color-ink); margin-bottom: 4px;">Quote list is empty</h4>
        <p class="mono-caption">Select suites from the catalogue to build your quote.</p>
      </div>
    `;
    if (totalDisplay) totalDisplay.textContent = '$0.00';
    if (discountNotice) discountNotice.style.display = 'none';
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
      <div style="background: #FFFFFF; border: 1px solid var(--border-hairline); padding: 14px; margin-bottom: 12px; display: flex; gap: 14px; align-items: center;">
        <img src="${item.image}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; flex-shrink: 0; border: 1px solid var(--border-hairline);">
        <div style="flex: 1; min-width: 0;">
          <h4 style="font-family: var(--font-serif); font-size: 1.0625rem; line-height: 1.2; margin-bottom: 2px;">${item.name}</h4>
          <div class="mono-caption" style="font-size: 0.6875rem;">${CONFIG.formatPrice(appliedTier.price)} / unit &bull; MOQ ${item.moq}</div>
          
          <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 10px;">
            <div class="qty-stepper-wrap" style="height: 36px;">
              <button onclick="adjustRfpItemQty('${item.id}', -10)" class="stepper-btn" style="width: 36px; height: 36px;" aria-label="Decrease quantity">-</button>
              <span style="font-family: var(--font-mono); font-size: 0.8125rem; font-weight: 600; padding: 0 8px;">${item.qty}</span>
              <button onclick="adjustRfpItemQty('${item.id}', 10)" class="stepper-btn" style="width: 36px; height: 36px;" aria-label="Increase quantity">+</button>
            </div>

            <div style="font-family: var(--font-mono); font-weight: 600; font-size: 0.9375rem; color: var(--color-ink);">
              ${CONFIG.formatPrice(itemTotal)}
            </div>

            <button onclick="removeFromRfp('${item.id}')" style="color: var(--color-ink-muted); background: none; border: none; cursor: pointer; padding: 6px;" aria-label="Remove item">
              <i class="fas fa-trash-can text-xs"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (totalDisplay) totalDisplay.textContent = CONFIG.formatPrice(grandTotal);
  
  if (discountNotice) {
    const savings = standardGrandTotal - grandTotal;
    if (savings > 0) {
      discountNotice.textContent = `Volume privilege applied: Saved ${CONFIG.formatPrice(savings)}`;
      discountNotice.style.display = 'block';
    } else {
      discountNotice.style.display = 'none';
    }
  }
}

function openRfpDrawer() {
  const drawer = document.getElementById('rfpDrawer');
  if (drawer) drawer.classList.add('active');
  document.body.classList.add('scroll-locked');
  const dock = document.getElementById('mobileBottomDock');
  if (dock) dock.classList.add('is-hidden');
}

function closeRfpDrawer() {
  const drawer = document.getElementById('rfpDrawer');
  if (drawer) drawer.classList.remove('active');
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

  const rfpDrawer = document.getElementById('rfpDrawer');
  if (rfpDrawer) {
    rfpDrawer.addEventListener('click', (e) => {
      if (e.target === rfpDrawer) closeRfpDrawer();
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

      const sampleBox = document.getElementById('rfpOptSample')?.checked;
      const gstInvoice = document.getElementById('rfpOptGst')?.checked;
      const dropShip = document.getElementById('rfpOptDropShip')?.checked;

      const selectedOptions = [];
      if (sampleBox) selectedOptions.push('Physical Evaluation Sample Box to Office');
      if (gstInvoice) selectedOptions.push('GST / B2B Input Tax Credit Invoice');
      if (dropShip) selectedOptions.push('Multi-Address Individual Drop-Shipping');

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

        return `• *${item.name}* (${item.qty} units @ ${CONFIG.formatPrice(appliedTier.price)}) = ${CONFIG.formatPrice(itemTotal)}`;
      }).join('\n');

      const savings = standardTotal - grandTotal;
      let optionsText = selectedOptions.length > 0 
        ? `*Options:*\n${selectedOptions.map(o => `• ${o}`).join('\n')}\n━━━━━━━━━━━━━━━━━━━━\n`
        : '';

      const msg = 
        `*NEW CORPORATE QUOTE REQUEST — THE BLUE ANTS*\n` +
        `━━━━━━━━━━━━━━━━━━━━\n` +
        `*Company / Organization:* ${company}\n` +
        `*Delivery / Timeline Notes:* ${notes}\n` +
        `━━━━━━━━━━━━━━━━━━━━\n` +
        `*Requested Suites:*\n` +
        `${itemsText}\n` +
        `━━━━━━━━━━━━━━━━━━━━\n` +
        `*Estimated Quotation Total:* ${CONFIG.formatPrice(grandTotal)}\n` +
        `*Total Bulk Savings:* ${CONFIG.formatPrice(savings)}\n` +
        `━━━━━━━━━━━━━━━━━━━━\n` +
        `${optionsText}` +
        `Please share formal PDF quotation, branding mockups, and dispatch timelines.`;

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
    container.style.cssText = 'position: fixed; bottom: 80px; left: 50%; transform: translateX(-50%); z-index: 2000; pointer-events: none;';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.style.cssText = 'background: #101826; color: #F3EFE6; padding: 10px 18px; border-radius: 2px; font-family: var(--font-mono); font-size: 0.8125rem; letter-spacing: 0.05em; margin-top: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.25); text-align: center;';
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}
