/**
 * THE BLUE ANTS — Corporate Product Catalog & Direct WhatsApp Concierge Engine
 * Direct phone: +91 9916418879
 */

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
    image: 'assets/products/blueants_exec_leather.jpg',
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
    image: 'assets/products/blueants_coffee_gourmet.jpg',
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
    image: 'assets/products/blueants_tech_bundle.jpg',
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
    rating: 4.85,
    reviews: 246,
    image: 'assets/products/blueants_wellness_hamper.jpg',
    badge: 'Popular for HR',
    badgeType: 'choice',
    leadTime: 'express',
    leadTimeLabel: '48h Express Ready',
    brandingOptions: ['gold-foil', 'screen-print'],
    features: [
      'Pure Soy Wax Aromatherapy Candle (Lavender & Bergamot)',
      '100% Mulberry Silk Contoured Black Sleep Mask',
      'Organic Botanical Calming Pillow & Room Mist (50ml)',
      'Artisanal Organic Chamomile & Lavender Loose Leaf Tea'
    ],
    description: 'Demonstrate thoughtful care for employee well-being, mental balance, and anniversary celebrations with organic aromatherapy and silk indulgence.',
    boxContents: [
      '1x Hand-Poured Soy Wax Amber Jar Candle with Wood Wick',
      '1x 22-Momme Mulberry Silk Luxury Eye Mask with Travel Pouch',
      '1x Calming Botanical Facial & Pillow Mist in Frosted Amber Glass',
      '1x Gold Tin of Organic Hand-Picked Herbal Sleep Tea',
      '1x Guided Mindfulness & De-Stress Audio QR Card'
    ],
    bulkTiers: [
      { min: 40, max: 99, price: 58.00, discount: '0%' },
      { min: 100, max: 249, price: 51.00, discount: '12%' },
      { min: 250, max: 499, price: 44.00, discount: '24%' },
      { min: 500, max: 9999, price: 39.00, discount: '33%' }
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
    reviews: 375,
    image: 'assets/products/blueants_whiskey_connoisseur.jpg',
    badge: 'VIP Elite',
    badgeType: 'choice',
    leadTime: 'custom',
    leadTimeLabel: 'Custom 2 Weeks',
    brandingOptions: ['laser', 'debossed', 'gold-foil'],
    features: [
      'Geometric Hand-Cut Heavy Crystal Whiskey Decanter (750ml)',
      'Pair of Weighted Crystal Old-Fashioned Tumblers',
      'Set of 9 Polished Granite Chilling Stones with Gold Tongs',
      'Debossed Saddle-Leather Coasters with Velvet Backing'
    ],
    description: 'For momentous partnership milestones and VIP corporate accounts. Crafted with lead-free ultra-clear European crystal in a black lacquered keepsake box.',
    boxContents: [
      '1x 750ml Faceted Crystal Decanter with Precision Ground Stopper',
      '2x 320ml Hand-Cut Crystal Rocks Glasses',
      '9x Natural Basalt Chilling Cubes in Wooden Storage Tray',
      '1x Gold-Finished Precision Ice Tongs',
      '2x Debossed Full-Grain Leather Coasters',
      '1x Solid Wood Lockable Presentation Chest with Velvet Inlay'
    ],
    bulkTiers: [
      { min: 20, max: 49, price: 120.00, discount: '0%' },
      { min: 50, max: 99, price: 108.00, discount: '10%' },
      { min: 100, max: 249, price: 96.00, discount: '20%' },
      { min: 250, max: 9999, price: 85.00, discount: '29%' }
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
    reviews: 690,
    image: 'assets/products/blueants_eco_luxe.jpg',
    badge: 'Eco-Certified',
    badgeType: 'bestseller',
    leadTime: 'express',
    leadTimeLabel: '48h Express Ready',
    brandingOptions: ['laser', 'screen-print', 'gold-foil'],
    features: [
      'Natural Bamboo & Stainless Steel Insulated Flask (500ml)',
      'Recycled Kraft & Natural Cork Hardbound Journal',
      'Biodegradable Wheat-Straw Ballpoint Pen with German Ink',
      'Organic Heavy Canvas Tote Bag with Reinforced Handles'
    ],
    description: 'The preferred welcome kit for ESG-committed enterprises. 100% plastic-free packaging, FSC certified materials, and carbon-neutral distribution.',
    boxContents: [
      '1x 500ml Double-Wall Bamboo Vacuum Bottle (Hot 12h / Cold 24h)',
      '1x A5 Cork Texture Hardcover Notebook (100% Recycled Cotton Pages)',
      '1x Sustainable Bamboo & Wheat-Straw Pen',
      '1x 12oz GOTS-Certified Organic Canvas Tote Bag',
      '1x Plantable Wildflower Seed Welcome Greeting Card'
    ],
    bulkTiers: [
      { min: 50, max: 99, price: 48.00, discount: '0%' },
      { min: 100, max: 249, price: 41.00, discount: '14%' },
      { min: 250, max: 499, price: 35.00, discount: '27%' },
      { min: 500, max: 9999, price: 29.00, discount: '40%' }
    ]
  },
  {
    id: 'prod-7',
    name: 'Chronos: Milestone Executive Award Timepiece',
    category: 'executive',
    categoryLabel: 'Executive VIP Suites',
    price: 185.00,
    moq: 10,
    rating: 4.97,
    reviews: 184,
    image: 'assets/products/blueants_milestone_watch.jpg',
    badge: 'Prestige Award',
    badgeType: 'choice',
    leadTime: 'custom',
    leadTimeLabel: 'Custom 2 Weeks',
    brandingOptions: ['laser', 'gold-foil'],
    features: [
      'Minimalist Chronograph Watch with Sapphire Crystal Glass',
      'Dual Straps: Italian Alligator-Grain Leather & Black Milanese Mesh',
      'Custom Engraved Solid Brass Dedication Plaque',
      'Matte Black Piano Lacquer Wood Presentation Box'
    ],
    description: 'Celebrate 5, 10, and 20-year service milestones or exceptional leadership achievements with an heirloom chronograph with bespoke engraving.',
    boxContents: [
      '1x Japanese Quartz Chronograph Watch (316L Surgical Steel, 5ATM)',
      '1x Italian Full-Grain Leather Strap with Quick-Release Spring Bars',
      '1x Black IP Stainless Steel Milanese Mesh Strap',
      '1x Deeply Laser-Engraved Solid Brass Commemorative Plaque',
      '1x High-Gloss Black Piano Lacquer Display Box with Velvet Pillow'
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
    price: 52.00,
    moq: 35,
    rating: 4.89,
    reviews: 512,
    image: 'assets/products/blueants_gourmet_truffles.jpg',
    badge: 'Festive Favorite',
    badgeType: 'bestseller',
    leadTime: 'express',
    leadTimeLabel: '48h Express Ready',
    brandingOptions: ['gold-foil', 'screen-print'],
    features: [
      '12x Handcrafted Single-Origin Dark Chocolate 24k Gold Truffles',
      'Hexagon Jar of Pure Wildflower Honey (150g)',
      'Hand-Turned Olive Wood Honey Dipper',
      'Gold Tin of Slow-Roasted Salted Macadamia Nuts'
    ],
    description: 'An indulgent sweet celebration package for holidays, corporate victories, and partner appreciation. Features edible 24k gold leaf and artisan treats.',
    boxContents: [
      '12x Belgian Dark Ganache Truffles Topped with 24k Edible Gold Leaf',
      '1x 150g Organic Raw Cold-Extracted Wildflower Honey',
      '1x Hand-Crafted Olive Wood Honey Drizzler',
      '1x 100g Roasted & Salted Hawaiian Macadamia Nuts in Gold Tin',
      '1x Gold-Embossed Silk Ribbon Packaging with Satin Gift Bow'
    ],
    bulkTiers: [
      { min: 35, max: 74, price: 52.00, discount: '0%' },
      { min: 75, max: 149, price: 46.00, discount: '11%' },
      { min: 150, max: 299, price: 40.00, discount: '23%' },
      { min: 300, max: 9999, price: 34.00, discount: '35%' }
    ]
  }
];

let rfpCart = [];

let filterState = {
  searchQuery: '',
  category: 'all',
  selectedCategories: [],
  priceRanges: [],
  moqFilters: [],
  brandingFilters: [],
  leadTimeFilters: [],
  minRating: 0,
  sortBy: 'featured'
};

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  setupFilterListeners();
  setupSearchListeners();
  setupModalListeners();
  setupDrawerListeners();
  setupScrollReveal();
  setupMobileDockObserver();
});

function renderProducts() {
  const container = document.getElementById('productsGrid');
  const countDisplay = document.getElementById('productResultsCount');
  if (!container) return;

  const filtered = PRODUCTS.filter(p => {
    if (filterState.searchQuery) {
      const q = filterState.searchQuery.toLowerCase();
      const matchTitle = p.name.toLowerCase().includes(q);
      const matchDesc = p.description.toLowerCase().includes(q);
      const matchCat = p.categoryLabel.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
      if (!matchTitle && !matchDesc && !matchCat) return false;
    }

    if (filterState.category !== 'all' && p.category !== filterState.category) {
      return false;
    }

    if (filterState.selectedCategories.length > 0 && !filterState.selectedCategories.includes(p.category)) {
      return false;
    }

    if (filterState.priceRanges.length > 0) {
      const matchesPrice = filterState.priceRanges.some(range => {
        if (range === 'under50') return p.price < 50;
        if (range === '50to100') return p.price >= 50 && p.price <= 100;
        if (range === '100to150') return p.price > 100 && p.price <= 150;
        if (range === 'over150') return p.price > 150;
        return true;
      });
      if (!matchesPrice) return false;
    }

    if (filterState.moqFilters.length > 0) {
      const matchesMoq = filterState.moqFilters.some(m => {
        if (m === 'under25') return p.moq <= 25;
        if (m === '25to50') return p.moq >= 25 && p.moq <= 50;
        if (m === '50plus') return p.moq >= 50;
        return true;
      });
      if (!matchesMoq) return false;
    }

    if (filterState.brandingFilters.length > 0) {
      const hasBranding = filterState.brandingFilters.some(b => p.brandingOptions.includes(b));
      if (!hasBranding) return false;
    }

    if (filterState.leadTimeFilters.length > 0) {
      if (!filterState.leadTimeFilters.includes(p.leadTime)) return false;
    }

    if (filterState.minRating > 0 && p.rating < filterState.minRating) {
      return false;
    }

    return true;
  });

  filtered.sort((a, b) => {
    if (filterState.sortBy === 'price-low') return a.price - b.price;
    if (filterState.sortBy === 'price-high') return b.price - a.price;
    if (filterState.sortBy === 'rating') return b.rating - a.rating;
    if (filterState.sortBy === 'moq') return a.moq - b.moq;
    return 0;
  });

  if (countDisplay) {
    countDisplay.textContent = `Showing 1–${filtered.length} of ${filtered.length} corporate gift sets`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <i class="fas fa-search text-4xl text-gray-600 mb-3"></i>
        <h3 class="text-lg font-bold text-gray-200">No Corporate Gift Sets Match Your Filter</h3>
        <p class="text-gray-400 text-xs mt-1">Try resetting your filters or search terms.</p>
        <button onclick="resetFilters()" class="btn-primary-gold mx-auto mt-4 text-xs">Reset Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((p, idx) => {
    const lowestTier = p.bulkTiers[p.bulkTiers.length - 1];
    const badgeHtml = p.badgeType === 'choice' 
      ? `<span class="card-badge-choice"><i class="fas fa-certificate text-amber-400 mr-1.5"></i> ${p.badge}</span>`
      : `<span class="card-badge-bestseller"><i class="fas fa-fire mr-1.5"></i> ${p.badge}</span>`;

    return `
      <div class="product-card reveal-on-scroll is-revealed" data-id="${p.id}" style="transition-delay: ${idx * 50}ms;">
        <div class="product-image-container" onclick="openQuickView('${p.id}')">
          ${badgeHtml}
          <span class="card-moq-pill">MOQ ${p.moq} units</span>
          <img src="${p.image}" alt="${p.name}" loading="lazy">
        </div>
        
        <div class="product-info-wrap">
          <div class="flex items-center justify-between text-xs mb-1">
            <span class="product-cat-label">${p.categoryLabel}</span>
            <span class="text-[#8c8c8c] flex items-center gap-1"><i class="fas fa-truck-fast text-[#7fa894] text-[11px]"></i> ${p.leadTimeLabel}</span>
          </div>

          <h3 class="product-card-title" onclick="openQuickView('${p.id}')">${p.name}</h3>
          
          <div class="flex items-center gap-2 text-xs mb-3">
            <span class="text-[#7fa894] inline-flex gap-0.5 text-[11px]">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </span>
            <span class="font-bold text-[#1a1a1a]">${p.rating}</span>
            <span class="text-[#8c8c8c] font-normal">(${p.reviews} reviews)</span>
          </div>

          <div class="price-section mb-5">
            <div class="flex items-baseline gap-1.5">
              <span class="text-2xl font-bold text-[#1a1a1a] font-serif">$${p.price.toFixed(2)}</span>
              <span class="text-xs text-[#8c8c8c]">/ unit</span>
            </div>
            <div class="text-[12px] text-[#7fa894] font-medium mt-1.5 flex items-center gap-1.5">
              <i class="fas fa-tags text-[11px] text-[#7fa894]"></i>
              <span>From <strong>$${lowestTier.price.toFixed(2)}</strong> for ${lowestTier.min}+ units (Save ${lowestTier.discount})</span>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3 mt-auto pt-3 border-t border-[#dcdcdc]">
            <button class="btn-secondary-outline" onclick="openQuickView('${p.id}')">
              Quick View
            </button>
            <button class="btn-primary-gold" onclick="addToRfp('${p.id}')">
              <i class="fas fa-plus mr-1"></i> Add to Quote
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  setupCardTilt();
}

function setupFilterListeners() {
  const pills = document.querySelectorAll('.category-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      filterState.category = pill.dataset.category || 'all';
      const searchDept = document.getElementById('searchDeptSelect');
      if (searchDept) {
        searchDept.value = filterState.category;
      }
      renderProducts();
    });
  });

  const sortSelect = document.getElementById('sortBySelect');
  const mobileSortSelect = document.getElementById('mobileSortBySelect');

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      filterState.sortBy = e.target.value;
      if (mobileSortSelect) mobileSortSelect.value = e.target.value;
      renderProducts();
    });
  }

  if (mobileSortSelect) {
    mobileSortSelect.addEventListener('change', (e) => {
      filterState.sortBy = e.target.value;
      if (sortSelect) sortSelect.value = e.target.value;
      renderProducts();
    });
  }

  // Desktop + Mobile Checkbox Syncing
  const syncCheckboxes = (nameDesktop, nameMobile, stateKey) => {
    const handler = (sourceName, targetName) => {
      const checked = Array.from(document.querySelectorAll(`input[name="${sourceName}"]:checked`)).map(c => c.value);
      filterState[stateKey] = checked;
      
      // Mirror to the other checkboxes
      document.querySelectorAll(`input[name="${targetName}"]`).forEach(cb => {
        cb.checked = checked.includes(cb.value);
      });

      updateMobileFilterBadge();
      renderProducts();
    };

    document.querySelectorAll(`input[name="${nameDesktop}"]`).forEach(cb => {
      cb.addEventListener('change', () => handler(nameDesktop, nameMobile));
    });

    document.querySelectorAll(`input[name="${nameMobile}"]`).forEach(cb => {
      cb.addEventListener('change', () => handler(nameMobile, nameDesktop));
    });
  };

  syncCheckboxes('catFilter', 'catFilterMobile', 'selectedCategories');
  syncCheckboxes('priceFilter', 'priceFilterMobile', 'priceRanges');
  syncCheckboxes('moqFilter', 'moqFilterMobile', 'moqFilters');
  syncCheckboxes('brandingFilter', 'brandingFilterMobile', 'brandingFilters');
  syncCheckboxes('leadTimeFilter', 'leadTimeFilterMobile', 'leadTimeFilters');

  document.querySelectorAll('input[name="ratingFilter"]').forEach(cb => {
    cb.addEventListener('change', () => {
      const checked = document.querySelector('input[name="ratingFilter"]:checked');
      filterState.minRating = checked ? parseFloat(checked.value) : 0;
      updateMobileFilterBadge();
      renderProducts();
    });
  });
}

function setupSearchListeners() {
  const searchInput = document.getElementById('amazonSearchInput');
  const searchBtn = document.getElementById('amazonSearchBtn');
  const searchDept = document.getElementById('searchDeptSelect');

  const executeSearch = () => {
    if (searchInput) {
      filterState.searchQuery = searchInput.value.trim();
    }
    renderProducts();
  };

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      executeSearch();
    });
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        executeSearch();
      }
    });
  }

  if (searchBtn) {
    searchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      executeSearch();
    });
  }

  if (searchDept) {
    searchDept.addEventListener('change', (e) => {
      const selectedDept = e.target.value;
      filterState.category = selectedDept;
      
      // Synchronize category pills
      const pills = document.querySelectorAll('.category-pill');
      pills.forEach(pill => {
        const cat = pill.dataset.category || 'all';
        if (cat === selectedDept) {
          pill.classList.add('active');
        } else {
          pill.classList.remove('active');
        }
      });

      renderProducts();
    });
  }
}

function openMobileFilters() {
  const modal = document.getElementById('mobileFilterModal');
  if (modal) modal.classList.add('active');
}

function closeMobileFilters() {
  const modal = document.getElementById('mobileFilterModal');
  if (modal) modal.classList.remove('active');
}

function updateMobileFilterBadge() {
  const badge = document.getElementById('mobileFilterBadge');
  if (!badge) return;

  const totalActive = (filterState.selectedCategories?.length || 0) +
                      (filterState.priceRanges?.length || 0) +
                      (filterState.moqFilters?.length || 0) +
                      (filterState.brandingFilters?.length || 0) +
                      (filterState.leadTimeFilters?.length || 0) +
                      (filterState.minRating > 0 ? 1 : 0);

  if (totalActive > 0) {
    badge.textContent = totalActive;
    badge.style.display = 'inline-flex';
  } else {
    badge.style.display = 'none';
  }
}

function resetFilters() {
  filterState = {
    searchQuery: '',
    category: 'all',
    selectedCategories: [],
    priceRanges: [],
    moqFilters: [],
    brandingFilters: [],
    leadTimeFilters: [],
    minRating: 0,
    sortBy: 'featured'
  };

  const searchInput = document.getElementById('amazonSearchInput');
  if (searchInput) searchInput.value = '';

  const searchDept = document.getElementById('searchDeptSelect');
  if (searchDept) searchDept.value = 'all';

  const sortSelect = document.getElementById('sortBySelect');
  if (sortSelect) sortSelect.value = 'featured';

  const mobileSortSelect = document.getElementById('mobileSortBySelect');
  if (mobileSortSelect) mobileSortSelect.value = 'featured';

  document.querySelectorAll('input[type="checkbox"]').forEach(c => c.checked = false);
  document.querySelectorAll('input[name="ratingFilter"]').forEach(c => c.checked = false);
  document.querySelectorAll('.category-pill').forEach((p, idx) => {
    if (idx === 0) p.classList.add('active');
    else p.classList.remove('active');
  });

  updateMobileFilterBadge();
  renderProducts();
  showToast('Filters cleared.');
}

// Quick View Modal
let currentProduct = null;

function openQuickView(prodId) {
  const product = PRODUCTS.find(p => p.id === prodId);
  if (!product) return;

  currentProduct = product;
  const modal = document.getElementById('quickViewModal');
  const content = document.getElementById('quickViewContent');
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8">
      <div>
        <div class="rounded-xl overflow-hidden border border-gray-700 bg-gray-900 relative shadow-2xl">
          <img src="${product.image}" alt="${product.name}" class="w-full h-auto object-cover">
          <span class="card-moq-pill top-4 right-4">Min. MOQ: ${product.moq} units</span>
        </div>
        
        <div class="mt-4 p-4 rounded-xl bg-gray-900/90 border border-amber-500/30 text-xs">
          <div class="text-amber-300 font-bold mb-1"><i class="fas fa-stamp mr-1 text-amber-400"></i> Corporate Logo Customization Included</div>
          <div class="text-gray-400">Laser engraving, gold foil embossing, and custom box packaging available for your enterprise brand.</div>
        </div>

        <div class="mt-3 p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between text-xs">
          <div class="flex items-center gap-2 text-emerald-300">
            <i class="fas fa-phone-volume text-emerald-400"></i>
            <span>Concierge: +91 9916418879</span>
          </div>
          <a href="tel:+919916418879" class="text-emerald-300 underline font-semibold">Direct Call</a>
        </div>
      </div>

      <div class="flex flex-col">
        <div class="flex items-center justify-between">
          <span class="product-cat-label">${product.categoryLabel}</span>
          <span class="text-xs text-emerald-400 font-semibold bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-700/50">
            <i class="fas fa-shield-halved mr-1"></i> Corporate Gifting
          </span>
        </div>

        <h2 class="text-2xl font-bold text-[#1a1a1a] mt-2 font-serif">${product.name}</h2>

        <div class="flex items-center gap-2 text-xs my-2">
          <span class="text-[#7fa894] text-xs inline-flex gap-0.5">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </span>
          <span class="font-bold text-[#1a1a1a]">${product.rating}</span>
          <span class="text-[#8c8c8c]">(${product.reviews} reviews)</span>
        </div>

        <p class="text-[#6b6b6b] text-xs leading-relaxed my-3">${product.description}</p>

        <div class="mb-4 bg-[#f5f2ed] p-4 rounded-xl border border-[#dcdcdc]">
          <h4 class="text-xs font-bold uppercase tracking-wider text-[#7fa894] mb-2">
            <i class="fas fa-gift text-[#7fa894] mr-1"></i> Included in Box:
          </h4>
          <ul class="text-xs text-[#6b6b6b] space-y-1 list-disc list-inside">
            ${product.boxContents.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>

        <!-- Volume Pricing & Loss Aversion Calculator -->
        <div class="bg-white p-4 rounded-xl border border-[#c8dcc8] mb-6 shadow-sm">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold text-[#1a1a1a] uppercase flex items-center gap-1.5">
              <i class="fas fa-calculator text-[#7fa894]"></i> Volume Pricing Calculator:
            </span>
            <span class="text-xs text-[#7fa894] font-semibold" id="qvDiscountBadge">Base Rate</span>
          </div>

          <div class="flex flex-wrap items-center gap-3 my-3">
            <div class="flex items-center border border-[#dcdcdc] rounded-lg overflow-hidden">
              <button onclick="adjustQvQty(-10)" class="w-12 h-12 min-w-[48px] min-h-[48px] flex items-center justify-center text-lg bg-[#f5f2ed] text-[#1a1a1a] hover:bg-[#eceae5] transition-colors touch-manipulation" aria-label="Decrease quantity">-</button>
              <input type="number" id="qvQtyInput" value="${product.moq}" min="${product.moq}" step="5"
                     class="w-20 h-12 bg-white text-center text-[#1a1a1a] font-bold text-sm outline-none border-x border-[#dcdcdc]">
              <button onclick="adjustQvQty(10)" class="w-12 h-12 min-w-[48px] min-h-[48px] flex items-center justify-center text-lg bg-[#f5f2ed] text-[#1a1a1a] hover:bg-[#eceae5] transition-colors touch-manipulation" aria-label="Increase quantity">+</button>
            </div>
            
            <div class="flex flex-wrap gap-1.5 ml-auto">
              <button onclick="setQvQty(${product.moq})" class="text-xs px-2.5 py-1.5 rounded-lg bg-[#f5f2ed] border border-[#dcdcdc] text-[#2c2c2c] hover:border-[#7fa894] transition-colors font-medium">MOQ (${product.moq})</button>
              <button onclick="setQvQty(${product.moq * 2})" class="text-xs px-2.5 py-1.5 rounded-lg bg-[#f5f2ed] border border-[#dcdcdc] text-[#2c2c2c] hover:border-[#7fa894] transition-colors font-medium">2x MOQ (${product.moq * 2})</button>
              <button onclick="setQvQty(${product.moq * 5})" class="text-xs px-2.5 py-1.5 rounded-lg bg-[#f5f2ed] border border-[#dcdcdc] text-[#2c2c2c] hover:border-[#7fa894] transition-colors font-medium">5x MOQ (${product.moq * 5})</button>
              <button onclick="setQvQty(50)" class="text-xs px-2.5 py-1.5 rounded-lg bg-[#f5f2ed] border border-[#dcdcdc] text-[#2c2c2c] hover:border-[#7fa894] transition-colors font-medium">50 pk</button>
              <button onclick="setQvQty(100)" class="text-xs px-2.5 py-1.5 rounded-lg bg-[#f5f2ed] border border-[#dcdcdc] text-[#2c2c2c] hover:border-[#7fa894] transition-colors font-medium">100 pk</button>
              <button onclick="setQvQty(250)" class="text-xs px-2.5 py-1.5 rounded-lg bg-[#f5f2ed] border border-[#dcdcdc] text-[#2c2c2c] hover:border-[#7fa894] transition-colors font-medium">250 pk</button>
            </div>
          </div>

          <div class="pt-3 border-t border-[#dcdcdc] flex items-center justify-between text-xs">
            <div>
              <div class="text-[#8c8c8c]">Unit Price: <strong class="text-[#1a1a1a] font-serif" id="qvUnitPrice">$${product.price.toFixed(2)}</strong></div>
              <div class="text-[#7fa894] font-bold tracking-wide mt-0.5" id="qvSavingsTotal">Base Tier</div>
            </div>
            <div class="text-right">
              <div class="text-[#8c8c8c]">Estimated Total:</div>
              <div class="text-2xl font-bold text-[#1a1a1a] font-serif" id="qvTotalPrice">$${(product.price * product.moq).toFixed(2)}</div>
            </div>
          </div>
        </div>

        <div class="mt-auto flex flex-col sm:flex-row gap-3">
          <button class="btn-whatsapp flex-1 py-3 text-xs font-bold" onclick="inquireProductWhatsapp('${product.id}')">
            <i class="fa-brands fa-whatsapp text-base"></i> Instant WhatsApp Quote
          </button>
          <button class="btn-primary-gold px-4 py-3 text-xs" onclick="addCurrentQvToRfp()">
            <i class="fas fa-plus mr-1"></i> Add to Quote Cart
          </button>
          <button class="btn-secondary-outline px-4" onclick="closeQuickView()">
            Close
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  updateQvCalculations();
}

function adjustQvQty(delta) {
  const input = document.getElementById('qvQtyInput');
  if (!input || !currentProduct) return;
  let val = parseInt(input.value);
  if (isNaN(val) || val <= 0) val = currentProduct.moq;
  val = Math.max(currentProduct.moq, val + delta);
  input.value = val;
  updateQvCalculations();
}

function setQvQty(qty) {
  const input = document.getElementById('qvQtyInput');
  if (!input || !currentProduct) return;
  input.value = Math.max(currentProduct.moq, qty);
  updateQvCalculations();
}

function updateQvCalculations() {
  if (!currentProduct) return;
  const input = document.getElementById('qvQtyInput');
  const unitPriceEl = document.getElementById('qvUnitPrice');
  const totalPriceEl = document.getElementById('qvTotalPrice');
  const discountBadgeEl = document.getElementById('qvDiscountBadge');
  const savingsEl = document.getElementById('qvSavingsTotal');
  if (!input || !unitPriceEl || !totalPriceEl) return;

  const rawVal = parseInt(input.value);
  const qty = (!isNaN(rawVal) && rawVal > 0) ? Math.max(currentProduct.moq, rawVal) : currentProduct.moq;
  
  let appliedTier = currentProduct.bulkTiers[0];
  for (let t of currentProduct.bulkTiers) {
    if (qty >= t.min) appliedTier = t;
  }

  const unitPrice = appliedTier.price;
  const total = unitPrice * qty;
  const standardTotal = currentProduct.price * qty;
  const saved = standardTotal - total;

  unitPriceEl.textContent = `$${unitPrice.toFixed(2)}`;
  totalPriceEl.textContent = `$${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  if (discountBadgeEl) discountBadgeEl.textContent = appliedTier.discount === '0%' ? 'Base Volume Rate' : `Volume Discount: ${appliedTier.discount}`;
  if (savingsEl) {
    savingsEl.textContent = saved > 0 
      ? `Save $${saved.toFixed(2)} on this order with Bulk Tiering` 
      : 'Base MOQ Tier';
  }
}

function inquireProductWhatsapp(prodId) {
  const product = PRODUCTS.find(p => p.id === prodId);
  if (!product) return;

  const input = document.getElementById('qvQtyInput');
  const rawVal = parseInt(input?.value);
  const qty = (!isNaN(rawVal) && rawVal > 0) ? Math.max(product.moq, rawVal) : product.moq;

  let appliedTier = product.bulkTiers[0];
  for (let t of product.bulkTiers) {
    if (qty >= t.min) appliedTier = t;
  }

  const unitPrice = appliedTier.price;
  const total = unitPrice * qty;

  const message = 
    `*THE BLUE ANTS — CORPORATE GIFT INQUIRY*\n` +
    `━━━━━━━━━━━━━━━━━━━━\n` +
    `*Item:* ${product.name}\n` +
    `*Category:* ${product.categoryLabel}\n` +
    `*Quantity:* ${qty} units\n` +
    `*Bulk Unit Price:* $${unitPrice.toFixed(2)} / unit\n` +
    `*Estimated Total:* $${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n` +
    `*Tier Status:* ${appliedTier.discount !== '0%' ? `Save ${appliedTier.discount}` : 'Base MOQ Tier'}\n` +
    `━━━━━━━━━━━━━━━━━━━━\n` +
    `Hi Blue Ants team, please share corporate branding options (gold foil / engraving), physical sample availability, and delivery timelines for this package.`;

  const waUrl = `https://wa.me/919916418879?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank');
  showToast('Opening WhatsApp with product inquiry...');
}

function addCurrentQvToRfp() {
  if (!currentProduct) return;
  const input = document.getElementById('qvQtyInput');
  const qty = parseInt(input?.value) || currentProduct.moq;
  addToRfp(currentProduct.id, qty);
  closeQuickView();
}

function closeQuickView() {
  const modal = document.getElementById('quickViewModal');
  if (modal) modal.classList.remove('active');
}

function setupModalListeners() {
  const modal = document.getElementById('quickViewModal');
  const filterModal = document.getElementById('mobileFilterModal');
  const rfpBackdrop = document.getElementById('rfpBackdrop');

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeQuickView();
    });
  }

  if (filterModal) {
    filterModal.addEventListener('click', (e) => {
      if (e.target === filterModal) closeMobileFilters();
    });
  }

  if (rfpBackdrop) {
    rfpBackdrop.addEventListener('click', () => {
      closeRfpDrawer();
    });
  }

  document.addEventListener('input', (e) => {
    if (e.target && e.target.id === 'qvQtyInput') {
      updateQvCalculations();
    }
  });

  // Mobile Material Bottom Sheet touch-drag gesture listeners
  const addSwipeDownToClose = (el, closeFn) => {
    if (!el) return;
    let startY = 0;
    let currentY = 0;
    let isDragging = false;

    el.addEventListener('touchstart', (e) => {
      if (el.scrollTop > 5) return;
      startY = e.touches[0].clientY;
      currentY = startY;
      isDragging = true;
      el.style.transition = 'none';
    }, { passive: true });

    el.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      currentY = e.touches[0].clientY;
      const delta = currentY - startY;
      if (delta > 0 && el.scrollTop <= 0) {
        el.style.transform = `translateY(${delta}px)`;
      }
    }, { passive: true });

    el.addEventListener('touchend', () => {
      if (!isDragging) return;
      isDragging = false;
      if (currentY - startY > 100) {
        el.style.transition = 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
        el.style.transform = 'translateY(100%)';
        setTimeout(() => {
          closeFn();
          el.style.transform = '';
          el.style.transition = '';
        }, 280);
      } else {
        // Fluid spring reset on canceled drag
        el.style.transition = 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
        el.style.transform = 'translateY(0)';
        setTimeout(() => {
          el.style.transform = '';
          el.style.transition = '';
        }, 300);
      }
    }, { passive: true });
  };

  addSwipeDownToClose(document.querySelector('#quickViewModal .modal-dialog'), closeQuickView);
  addSwipeDownToClose(document.querySelector('#mobileFilterModal .mobile-filter-dialog'), closeMobileFilters);
  addSwipeDownToClose(document.getElementById('rfpDrawer'), closeRfpDrawer);
}

// RFP Cart & Drawer
function addToRfp(prodId, customQty = null) {
  const product = PRODUCTS.find(p => p.id === prodId);
  if (!product) return;

  const qty = customQty || product.moq;
  const existing = rfpCart.find(item => item.id === prodId);

  if (existing) {
    existing.qty += qty;
  } else {
    rfpCart.push({
      id: product.id,
      name: product.name,
      categoryLabel: product.categoryLabel,
      image: product.image,
      basePrice: product.price,
      moq: product.moq,
      bulkTiers: product.bulkTiers,
      qty: qty
    });
  }

  updateRfpBadge();
  renderRfpDrawer();
  openRfpDrawer();
  showToast(`Added ${qty}x ${product.name} to Quote`);
}

function removeFromRfp(prodId) {
  rfpCart = rfpCart.filter(item => item.id !== prodId);
  updateRfpBadge();
  renderRfpDrawer();
  showToast('Item removed.');
}

function adjustRfpItemQty(prodId, delta) {
  const item = rfpCart.find(i => i.id === prodId);
  if (!item) return;
  item.qty = Math.max(item.moq, item.qty + delta);
  updateRfpBadge();
  renderRfpDrawer();
}

function updateRfpBadge() {
  const badge = document.getElementById('rfpCartCount');
  const dockBadge = document.getElementById('mobileDockBadge');
  const dockQuoteBadge = document.getElementById('mobileDockQuoteBadge');
  const count = rfpCart.length;

  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }

  if (dockBadge) {
    dockBadge.textContent = count;
    dockBadge.style.display = count > 0 ? 'flex' : 'none';
  }

  if (dockQuoteBadge && dockQuoteBadge !== dockBadge) {
    dockQuoteBadge.textContent = count;
    dockQuoteBadge.style.display = count > 0 ? 'flex' : 'none';
  }
}

function renderRfpDrawer() {
  const container = document.getElementById('rfpDrawerItems');
  const totalDisplay = document.getElementById('rfpDrawerTotal');
  const savingsDisplay = document.getElementById('rfpDrawerSavings');
  if (!container) return;

  if (rfpCart.length === 0) {
    container.innerHTML = `
      <div class="py-16 text-center text-[#8c8c8c] text-xs">
        <i class="fas fa-box-open text-4xl text-[#7fa894]/50 mb-3"></i>
        <h4 class="text-sm font-bold text-[#1a1a1a]">Your Quote Request is Empty</h4>
        <p class="text-[#8c8c8c] mt-1">Select corporate gift sets from the catalog to build a quotation.</p>
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
      <div class="p-3 rounded-xl bg-white border border-[#dcdcdc] flex gap-3 items-center shadow-sm">
        <img src="${item.image}" alt="${item.name}" class="w-14 h-14 rounded-lg object-cover border border-[#dcdcdc]">
        <div class="flex-1 min-w-0">
          <h4 class="text-xs font-bold text-[#1a1a1a] truncate">${item.name}</h4>
          <div class="text-[11px] text-[#7fa894] mt-0.5">$${appliedTier.price.toFixed(2)}/unit • ${appliedTier.discount !== '0%' ? `Save ${appliedTier.discount}` : 'Base rate'}</div>
          
          <div class="flex items-center gap-2 mt-2">
            <div class="flex items-center border border-[#dcdcdc] rounded-lg bg-[#f5f2ed]">
              <button onclick="adjustRfpItemQty('${item.id}', -10)" class="w-10 h-10 min-w-[40px] min-h-[40px] flex items-center justify-center text-xs text-[#2c2c2c] hover:bg-[#eceae5] touch-manipulation" aria-label="Decrease quantity">-</button>
              <span class="px-2.5 text-xs font-bold text-[#1a1a1a] font-serif">${item.qty}</span>
              <button onclick="adjustRfpItemQty('${item.id}', 10)" class="w-10 h-10 min-w-[40px] min-h-[40px] flex items-center justify-center text-xs text-[#2c2c2c] hover:bg-[#eceae5] touch-manipulation" aria-label="Increase quantity">+</button>
            </div>
            <span class="text-xs text-[#1a1a1a] font-serif font-semibold ml-auto">$${itemTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            <button onclick="removeFromRfp('${item.id}')" class="text-[#8c8c8c] hover:text-rose-600 w-10 h-10 min-w-[40px] min-h-[40px] flex items-center justify-center text-xs touch-manipulation" aria-label="Remove item">
              <i class="fas fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (totalDisplay) totalDisplay.textContent = `$${grandTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  if (savingsDisplay) {
    const savings = standardGrandTotal - grandTotal;
    savingsDisplay.textContent = savings > 0 ? `Saved $${savings.toFixed(2)} with Bulk Tiering` : 'Base Tier Pricing';
  }
}

function openRfpDrawer() {
  const drawer = document.getElementById('rfpDrawer');
  const backdrop = document.getElementById('rfpBackdrop');
  if (drawer) drawer.classList.add('active');
  if (backdrop) backdrop.classList.add('active');
}

function closeRfpDrawer() {
  const drawer = document.getElementById('rfpDrawer');
  const backdrop = document.getElementById('rfpBackdrop');
  if (drawer) drawer.classList.remove('active');
  if (backdrop) backdrop.classList.remove('active');
}

function setupDrawerListeners() {
  const openBtn = document.getElementById('openRfpCartBtn');
  const closeBtn = document.getElementById('closeRfpDrawerBtn');
  const backdrop = document.getElementById('rfpBackdrop');
  const submitWhatsappBtn = document.getElementById('submitRfpWhatsappBtn');

  if (openBtn) openBtn.addEventListener('click', openRfpDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeRfpDrawer);
  if (backdrop) backdrop.addEventListener('click', closeRfpDrawer);

  if (submitWhatsappBtn) {
    submitWhatsappBtn.addEventListener('click', () => {
      if (rfpCart.length === 0) {
        showToast('Please add items to your quote request first.');
        return;
      }

      const company = document.getElementById('rfpCompanyName')?.value.trim() || 'Corporate Client';
      const notes = document.getElementById('rfpCustomNotes')?.value.trim() || 'Standard corporate dispatch';

      // Check corporate options
      const sampleBox = document.getElementById('rfpOptionSampleBox')?.checked;
      const gstInvoice = document.getElementById('rfpOptionGstInvoice')?.checked;
      const multiAddress = document.getElementById('rfpOptionMultiAddress')?.checked;

      const selectedOptions = [];
      if (sampleBox) selectedOptions.push('Physical Pre-Production Sample Box Requested');
      if (gstInvoice) selectedOptions.push('GST / Tax Invoice Required');
      if (multiAddress) selectedOptions.push('Multi-Address Employee Drop-Shipping');

      let grandTotal = 0;
      let standardGrandTotal = 0;

      const itemsText = rfpCart.map(item => {
        let appliedTier = item.bulkTiers[0];
        for (let t of item.bulkTiers) {
          if (item.qty >= t.min) appliedTier = t;
        }
        const itemTotal = appliedTier.price * item.qty;
        grandTotal += itemTotal;
        standardGrandTotal += item.basePrice * item.qty;

        return `• *${item.name}* (Qty: ${item.qty} units @ $${appliedTier.price.toFixed(2)}) = $${itemTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      }).join('\n');

      const savings = standardGrandTotal - grandTotal;

      let optionsSection = '';
      if (selectedOptions.length > 0) {
        optionsSection = `*Corporate Options:*\n${selectedOptions.map(opt => `• ${opt}`).join('\n')}\n━━━━━━━━━━━━━━━━━━━━\n`;
      }

      const message = 
        `*NEW CORPORATE QUOTE REQUEST — THE BLUE ANTS*\n` +
        `━━━━━━━━━━━━━━━━━━━━\n` +
        `*Company / Organization:* ${company}\n` +
        `*Special Requirements / Notes:* ${notes}\n` +
        `━━━━━━━━━━━━━━━━━━━━\n` +
        `*Requested Packages:*\n` +
        `${itemsText}\n` +
        `━━━━━━━━━━━━━━━━━━━━\n` +
        `*Estimated Quotation Total:* $${grandTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n` +
        `*Total Bulk Savings:* $${savings > 0 ? savings.toFixed(2) : '0.00'}\n` +
        `━━━━━━━━━━━━━━━━━━━━\n` +
        `${optionsSection}` +
        `Please share formal PDF quote, branding mockups, and bulk delivery schedule.`;

      const waUrl = `https://wa.me/919916418879?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank');
      closeRfpDrawer();
      showToast('Opening WhatsApp with your corporate quote...');
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
  toast.innerHTML = `
    <i class="fas fa-circle-check text-amber-400"></i>
    <span class="text-xs font-semibold text-gray-200">${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(40px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Scroll Reveal Animations
function setupScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
}

// 3D Card Tilt Micro-Interaction
function setupCardTilt() {
  if (window.innerWidth < 1024) return;

  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
}

// Mobile Thumb Navigation Dock Active State Synchronization
function setupMobileDockObserver() {
  const dockItems = document.querySelectorAll('.mobile-dock-item[data-dock-target]');
  if (!dockItems || dockItems.length === 0) return;

  const sections = [
    { id: 'scrollHeroContainer', el: document.getElementById('scrollHeroContainer') },
    { id: 'catalogSection', el: document.getElementById('catalogSection') },
    { id: 'aboutSection', el: document.getElementById('aboutSection') }
  ];

  const updateActiveDock = (activeId) => {
    dockItems.forEach(item => {
      const target = item.getAttribute('data-dock-target');
      if (target === activeId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  };

  if ('IntersectionObserver' in window) {
    try {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            updateActiveDock(entry.target.id);
          }
        });
      }, {
        threshold: 0.2,
        rootMargin: '-10% 0px -40% 0px'
      });

      sections.forEach(s => {
        if (s.el) observer.observe(s.el);
      });
    } catch (e) {
      // Fallback
    }
  }

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 220;
    let currentSecId = 'scrollHeroContainer';
    for (const s of sections) {
      if (s.el && s.el.offsetTop <= scrollPos) {
        currentSecId = s.id;
      }
    }
    updateActiveDock(currentSecId);
  }, { passive: true });
}


