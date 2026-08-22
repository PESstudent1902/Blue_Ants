/**
 * THE BLUE ANTS — Corporate Product Catalog & Direct WhatsApp Concierge Engine
 * Direct phone: +91 9916418879
 */

const PRODUCTS = [
  {
    id: 'prod-1',
    name: 'The Sovereign: Executive Leather Suite',
    category: 'executive',
    categoryLabel: 'Executive & VIP',
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
    categoryLabel: 'Gourmet & Coffee',
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
    category: 'tech',
    categoryLabel: 'Tech & Gadgets',
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
    category: 'wellness',
    categoryLabel: 'Wellness & Spa',
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
    category: 'connoisseur',
    categoryLabel: 'Spirits & Barware',
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
    categoryLabel: 'Sustainable & Onboarding',
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
    categoryLabel: 'Executive & VIP',
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
    categoryLabel: 'Gourmet & Treats',
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
      const matchCat = p.categoryLabel.toLowerCase().includes(q);
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
      ? `<span class="card-badge-choice"><i class="fas fa-certificate text-amber-400 mr-1"></i> ${p.badge}</span>`
      : `<span class="card-badge-bestseller"><i class="fas fa-fire mr-1"></i> ${p.badge}</span>`;

    return `
      <div class="product-card reveal-on-scroll is-revealed" data-id="${p.id}" style="transition-delay: ${idx * 60}ms;">
        <div class="product-image-container" onclick="openQuickView('${p.id}')">
          ${badgeHtml}
          <span class="card-moq-pill">MOQ ${p.moq} units</span>
          <img src="${p.image}" alt="${p.name}" loading="lazy">
        </div>
        <div class="product-info-wrap">
          <div class="flex items-center justify-between">
            <span class="product-cat-label">${p.categoryLabel}</span>
            <span class="text-xs text-gray-400"><i class="fas fa-truck-fast text-emerald-400 mr-1"></i>${p.leadTimeLabel}</span>
          </div>
          <h3 class="product-card-title" onclick="openQuickView('${p.id}')">${p.name}</h3>
          
          <div class="flex items-center gap-1.5 text-xs">
            <span class="text-amber-400 text-[11px] inline-flex gap-0.5">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </span>
            <span class="font-bold text-white">${p.rating}</span>
            <span class="text-gray-400">(${p.reviews})</span>
          </div>

          <div class="price-card-box">
            <div class="flex items-baseline gap-1">
              <span class="text-sm text-amber-300 font-bold">$</span>
              <span class="text-2xl font-extrabold text-white">${p.price.toFixed(2)}</span>
              <span class="text-xs text-gray-400">/ unit</span>
            </div>
            <div class="text-[11px] text-sky-400 mt-1 flex items-center gap-1">
              <i class="fas fa-layer-group text-[10px]"></i>
              <span>Bulk from <strong>$${lowestTier.price.toFixed(2)}</strong> for ${lowestTier.min}+ units (Save ${lowestTier.discount})</span>
            </div>
          </div>

          <ul class="text-xs text-gray-400 space-y-1 my-1">
            <li class="flex items-center gap-1.5"><i class="fas fa-check text-emerald-400 text-[10px]"></i> ${p.features[0]}</li>
            <li class="flex items-center gap-1.5"><i class="fas fa-check text-emerald-400 text-[10px]"></i> ${p.features[1]}</li>
          </ul>

          <div class="grid grid-cols-2 gap-2 mt-auto pt-2">
            <button class="btn-secondary-outline text-xs" onclick="openQuickView('${p.id}')">
              Quick View
            </button>
            <button class="btn-primary-gold text-xs" onclick="addToRfp('${p.id}')">
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
      renderProducts();
    });
  });

  const sortSelect = document.getElementById('sortBySelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      filterState.sortBy = e.target.value;
      renderProducts();
    });
  }

  document.querySelectorAll('input[name="catFilter"]').forEach(cb => {
    cb.addEventListener('change', () => {
      filterState.selectedCategories = Array.from(document.querySelectorAll('input[name="catFilter"]:checked')).map(c => c.value);
      renderProducts();
    });
  });

  document.querySelectorAll('input[name="priceFilter"]').forEach(cb => {
    cb.addEventListener('change', () => {
      filterState.priceRanges = Array.from(document.querySelectorAll('input[name="priceFilter"]:checked')).map(c => c.value);
      renderProducts();
    });
  });

  document.querySelectorAll('input[name="moqFilter"]').forEach(cb => {
    cb.addEventListener('change', () => {
      filterState.moqFilters = Array.from(document.querySelectorAll('input[name="moqFilter"]:checked')).map(c => c.value);
      renderProducts();
    });
  });

  document.querySelectorAll('input[name="brandingFilter"]').forEach(cb => {
    cb.addEventListener('change', () => {
      filterState.brandingFilters = Array.from(document.querySelectorAll('input[name="brandingFilter"]:checked')).map(c => c.value);
      renderProducts();
    });
  });

  document.querySelectorAll('input[name="leadTimeFilter"]').forEach(cb => {
    cb.addEventListener('change', () => {
      filterState.leadTimeFilters = Array.from(document.querySelectorAll('input[name="leadTimeFilter"]:checked')).map(c => c.value);
      renderProducts();
    });
  });

  document.querySelectorAll('input[name="ratingFilter"]').forEach(cb => {
    cb.addEventListener('change', () => {
      const checked = document.querySelector('input[name="ratingFilter"]:checked');
      filterState.minRating = checked ? parseFloat(checked.value) : 0;
      renderProducts();
    });
  });
}

function setupSearchListeners() {
  const searchInput = document.getElementById('amazonSearchInput');
  const searchBtn = document.getElementById('amazonSearchBtn');
  const deptSelect = document.getElementById('searchDeptSelect');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      filterState.searchQuery = e.target.value.trim();
      renderProducts();
    });
  }

  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      if (searchInput) filterState.searchQuery = searchInput.value.trim();
      renderProducts();
    });
  }

  if (deptSelect) {
    deptSelect.addEventListener('change', (e) => {
      filterState.category = e.target.value;
      document.querySelectorAll('.category-pill').forEach(p => {
        if (p.dataset.category === e.target.value) {
          p.classList.add('active');
        } else {
          p.classList.remove('active');
        }
      });
      renderProducts();
    });
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

  document.querySelectorAll('input[type="checkbox"]').forEach(c => c.checked = false);
  document.querySelectorAll('input[name="ratingFilter"]').forEach(c => c.checked = false);
  document.querySelectorAll('.category-pill').forEach((p, idx) => {
    if (idx === 0) p.classList.add('active');
    else p.classList.remove('active');
  });

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

        <h2 class="text-2xl font-bold text-white mt-2">${product.name}</h2>

        <div class="flex items-center gap-2 text-xs my-2">
          <span class="text-amber-400 text-xs inline-flex gap-0.5">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </span>
          <span class="font-bold text-white">${product.rating}</span>
          <span class="text-gray-400">(${product.reviews} reviews)</span>
        </div>

        <p class="text-gray-300 text-xs leading-relaxed my-3">${product.description}</p>

        <div class="mb-4 bg-gray-900/60 p-4 rounded-xl border border-gray-800">
          <h4 class="text-xs font-bold uppercase tracking-wider text-amber-300 mb-2">
            <i class="fas fa-gift text-amber-400 mr-1"></i> Included in Box:
          </h4>
          <ul class="text-xs text-gray-300 space-y-1 list-disc list-inside">
            ${product.boxContents.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>

        <!-- Volume Calculator -->
        <div class="bg-gray-950 p-4 rounded-xl border border-amber-500/30 mb-6">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold text-amber-300 uppercase">
              <i class="fas fa-calculator mr-1"></i> Volume Pricing Calculator:
            </span>
            <span class="text-xs text-blue-400 font-semibold" id="qvDiscountBadge">Base Rate</span>
          </div>

          <div class="flex items-center gap-3 my-3">
            <button onclick="adjustQvQty(-10)" class="px-3 py-1.5 bg-gray-900 border border-gray-700 text-white rounded hover:bg-gray-800">-</button>
            <input type="number" id="qvQtyInput" value="${product.moq}" min="${product.moq}" step="5"
                   class="w-20 bg-gray-900 border border-gray-700 text-center text-white font-bold text-sm py-1.5 rounded outline-none">
            <button onclick="adjustQvQty(10)" class="px-3 py-1.5 bg-gray-900 border border-gray-700 text-white rounded hover:bg-gray-800">+</button>
            
            <div class="flex gap-1.5 ml-auto">
              <button onclick="setQvQty(50)" class="text-xs px-2.5 py-1 rounded bg-gray-800 text-gray-300 hover:text-white">50 pk</button>
              <button onclick="setQvQty(100)" class="text-xs px-2.5 py-1 rounded bg-gray-800 text-gray-300 hover:text-white">100 pk</button>
              <button onclick="setQvQty(250)" class="text-xs px-2.5 py-1 rounded bg-gray-800 text-gray-300 hover:text-white">250 pk</button>
            </div>
          </div>

          <div class="pt-3 border-t border-gray-800 flex items-center justify-between text-xs">
            <div>
              <div class="text-gray-400">Unit Price: <strong class="text-white" id="qvUnitPrice">$${product.price.toFixed(2)}</strong></div>
              <div class="text-emerald-400 font-semibold" id="qvSavingsTotal">Base Tier</div>
            </div>
            <div class="text-right">
              <div class="text-gray-400">Estimated Total:</div>
              <div class="text-2xl font-bold text-amber-300 font-mono" id="qvTotalPrice">$${(product.price * product.moq).toFixed(2)}</div>
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
  let val = parseInt(input.value) || currentProduct.moq;
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

  const qty = parseInt(input.value) || currentProduct.moq;
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
  if (savingsEl) savingsEl.textContent = saved > 0 ? `Total Bulk Savings: $${saved.toFixed(2)}` : 'Base MOQ Tier';
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
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeQuickView();
    });
  }

  document.addEventListener('input', (e) => {
    if (e.target && e.target.id === 'qvQtyInput') {
      updateQvCalculations();
    }
  });
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
  const count = rfpCart.length;
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
}

function renderRfpDrawer() {
  const container = document.getElementById('rfpDrawerItems');
  const totalDisplay = document.getElementById('rfpDrawerTotal');
  const savingsDisplay = document.getElementById('rfpDrawerSavings');
  if (!container) return;

  if (rfpCart.length === 0) {
    container.innerHTML = `
      <div class="py-16 text-center text-gray-400 text-xs">
        <i class="fas fa-box-open text-4xl text-gray-600 mb-3"></i>
        <h4 class="text-sm font-bold text-gray-200">Your Quote Request is Empty</h4>
        <p class="text-gray-500 mt-1">Select corporate gift sets from the catalog to build a quotation.</p>
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
      <div class="p-3 rounded-xl bg-gray-900 border border-gray-800 flex gap-3 items-center">
        <img src="${item.image}" alt="${item.name}" class="w-14 h-14 rounded-lg object-cover border border-gray-700">
        <div class="flex-1 min-w-0">
          <h4 class="text-xs font-bold text-white truncate">${item.name}</h4>
          <div class="text-[11px] text-amber-300 mt-0.5">$${appliedTier.price.toFixed(2)}/unit • ${appliedTier.discount !== '0%' ? `Save ${appliedTier.discount}` : 'Base rate'}</div>
          
          <div class="flex items-center gap-2 mt-2">
            <div class="flex items-center border border-gray-700 rounded bg-gray-950">
              <button onclick="adjustRfpItemQty('${item.id}', -10)" class="px-2 py-0.5 text-xs text-gray-400 hover:text-white">-</button>
              <span class="px-2 text-xs font-bold text-white font-mono">${item.qty}</span>
              <button onclick="adjustRfpItemQty('${item.id}', 10)" class="px-2 py-0.5 text-xs text-gray-400 hover:text-white">+</button>
            </div>
            <span class="text-xs text-gray-400 font-mono font-semibold ml-auto">$${itemTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            <button onclick="removeFromRfp('${item.id}')" class="text-gray-500 hover:text-rose-400 p-1 text-xs">
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

