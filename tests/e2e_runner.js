/**
 * THE BLUE ANTS — Master E2E Standalone Test Runner
 * 
 * Clean, zero-dependency Node.js test harness providing:
 * - High-fidelity DOM & Window Virtual Simulation Environment
 * - Pure Node.js headless runtime for catalog.js and video-scroll.js
 * - CSS AST & Token Parser
 * - Multi-tier Test Runner (Tiers 1-4) with filtering & detailed reporting
 * 
 * Usage:
 *   node tests/e2e_runner.js
 *   node tests/e2e_runner.js --tier=1
 *   node tests/e2e_runner.js --grep="WhatsApp"
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const PROJECT_ROOT = path.resolve(__dirname, '..');

// ANSI Color Codes
const COLORS = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  gold: '\x1b[38;2;212;175;55m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  gray: '\x1b[90m',
  white: '\x1b[37m'
};

// Assertion Library
class AssertionError extends Error {
  constructor(message, actual, expected) {
    super(message);
    this.name = 'AssertionError';
    this.actual = actual;
    this.expected = expected;
  }
}

const assert = (condition, message = 'Assertion failed') => {
  if (!condition) throw new AssertionError(message, condition, true);
};

const assertEqual = (actual, expected, message) => {
  if (actual !== expected) {
    throw new AssertionError(
      message || `Expected: ${JSON.stringify(expected)}, Actual: ${JSON.stringify(actual)}`,
      actual,
      expected
    );
  }
};

const assertNotEqual = (actual, expected, message) => {
  if (actual === expected) {
    throw new AssertionError(
      message || `Expected values not to equal: ${JSON.stringify(actual)}`,
      actual,
      expected
    );
  }
};

const assertDeepEqual = (actual, expected, message) => {
  const actualStr = JSON.stringify(actual);
  const expectedStr = JSON.stringify(expected);
  if (actualStr !== expectedStr) {
    throw new AssertionError(
      message || `Deep equality mismatch:\nExpected: ${expectedStr}\nActual:   ${actualStr}`,
      actual,
      expected
    );
  }
};

const assertTrue = (val, message) => {
  if (val !== true) throw new AssertionError(message || `Expected true, got ${val}`, val, true);
};

const assertFalse = (val, message) => {
  if (val !== false) throw new AssertionError(message || `Expected false, got ${val}`, val, false);
};

const assertMatch = (str, regex, message) => {
  if (!regex.test(String(str))) {
    throw new AssertionError(
      message || `Expected string to match ${regex}: "${str}"`,
      str,
      regex.toString()
    );
  }
};

const assertNotMatch = (str, regex, message) => {
  if (regex.test(String(str))) {
    throw new AssertionError(
      message || `Expected string NOT to match ${regex}: "${str}"`,
      str,
      `NOT ${regex}`
    );
  }
};

const assertIncludes = (container, item, message) => {
  if (typeof container === 'string') {
    if (!container.includes(item)) {
      throw new AssertionError(
        message || `Expected "${container}" to include "${item}"`,
        container,
        item
      );
    }
  } else if (Array.isArray(container)) {
    if (!container.includes(item)) {
      throw new AssertionError(
        message || `Expected array to include item: ${JSON.stringify(item)}`,
        container,
        item
      );
    }
  } else {
    throw new AssertionError('Container is neither string nor array', container, item);
  }
};

const assertNotIncludes = (container, item, message) => {
  if (typeof container === 'string') {
    if (container.includes(item)) {
      throw new AssertionError(
        message || `Expected "${container}" NOT to include "${item}"`,
        container,
        item
      );
    }
  } else if (Array.isArray(container)) {
    if (container.includes(item)) {
      throw new AssertionError(
        message || `Expected array NOT to include item: ${JSON.stringify(item)}`,
        container,
        item
      );
    }
  }
};

const assertGreaterThan = (actual, expected, message) => {
  if (!(actual > expected)) {
    throw new AssertionError(
      message || `Expected ${actual} > ${expected}`,
      actual,
      `> ${expected}`
    );
  }
};

const assertGreaterThanOrEqual = (actual, expected, message) => {
  if (!(actual >= expected)) {
    throw new AssertionError(
      message || `Expected ${actual} >= ${expected}`,
      actual,
      `>= ${expected}`
    );
  }
};

const assertLessThan = (actual, expected, message) => {
  if (!(actual < expected)) {
    throw new AssertionError(
      message || `Expected ${actual} < ${expected}`,
      actual,
      `< ${expected}`
    );
  }
};

const assertLessThanOrEqual = (actual, expected, message) => {
  if (!(actual <= expected)) {
    throw new AssertionError(
      message || `Expected ${actual} <= ${expected}`,
      actual,
      `<= ${expected}`
    );
  }
};

const assertThrows = (fn, expectedRegexOrMessage, message) => {
  let threw = false;
  let caughtErr = null;
  try {
    fn();
  } catch (err) {
    threw = true;
    caughtErr = err;
  }
  if (!threw) {
    throw new AssertionError(message || 'Expected function to throw an error, but it did not.');
  }
  if (expectedRegexOrMessage) {
    if (expectedRegexOrMessage instanceof RegExp) {
      if (!expectedRegexOrMessage.test(caughtErr.message)) {
        throw new AssertionError(
          message || `Error message "${caughtErr.message}" does not match ${expectedRegexOrMessage}`
        );
      }
    } else if (typeof expectedRegexOrMessage === 'string') {
      if (!caughtErr.message.includes(expectedRegexOrMessage)) {
        throw new AssertionError(
          message || `Error message "${caughtErr.message}" does not contain "${expectedRegexOrMessage}"`
        );
      }
    }
  }
};

// File loaders
function loadFile(relPath) {
  return fs.readFileSync(path.join(PROJECT_ROOT, relPath), 'utf8');
}

function loadHtml() {
  return loadFile('index.html');
}

function loadCss() {
  return loadFile('css/style.css');
}

function loadCatalogJs() {
  return loadFile('js/catalog.js');
}

function loadVideoScrollJs() {
  return loadFile('js/video-scroll.js');
}

function loadManifest() {
  return JSON.parse(loadFile('manifest.json'));
}

function loadVercelConfig() {
  return JSON.parse(loadFile('vercel.json'));
}

function loadPackageJson() {
  return JSON.parse(loadFile('package.json'));
}

// DOM ClassList implementation
class ClassList {
  constructor(el, initialClasses = []) {
    this.el = el;
    this.set = new Set(initialClasses.filter(Boolean));
  }

  add(...classes) {
    for (const c of classes) {
      if (c) this.set.add(c);
    }
    this.el.className = Array.from(this.set).join(' ');
  }

  remove(...classes) {
    for (const c of classes) {
      this.set.delete(c);
    }
    this.el.className = Array.from(this.set).join(' ');
  }

  contains(cls) {
    return this.set.has(cls);
  }

  toggle(cls, force) {
    if (force === true) this.add(cls);
    else if (force === false) this.remove(cls);
    else if (this.contains(cls)) this.remove(cls);
    else this.add(cls);
  }

  forEach(cb) {
    this.set.forEach(cb);
  }

  get length() {
    return this.set.size;
  }

  toString() {
    return Array.from(this.set).join(' ');
  }
}

// Lightweight DOM Node implementation for testing
class MockElement {
  constructor(tagName = 'div', id = '', classList = [], docRef = null) {
    this.tagName = tagName.toUpperCase();
    this.id = id;
    this.docRef = docRef;
    this.classList = new ClassList(this, classList);
    this.className = Array.from(this.classList.set).join(' ');
    this.attributes = {};
    this.style = {};
    this.children = [];
    this.parentNode = null;
    this._innerHTML = '';
    this.textContent = '';
    this.value = '';
    this.checked = false;
    this.type = '';
    this.name = '';
    this.dataset = {};
    this.eventListeners = {};
    this.offsetWidth = 1920;
    this.offsetHeight = 1080;
    this.width = 1920;
    this.height = 1080;
    this.top = 0;
    this.bottom = 0;
  }

  get innerHTML() {
    return this._innerHTML;
  }

  set innerHTML(html) {
    this._innerHTML = String(html);
    // Parse nested elements and register IDs into docRef
    if (this.docRef) {
      const tagRegex = /<([a-zA-Z0-9-]+)([^>]*)>/g;
      let match;
      while ((match = tagRegex.exec(html)) !== null) {
        const tag = match[1];
        const rawAttrs = match[2];
        const el = new MockElement(tag, '', [], this.docRef);

        const idMatch = rawAttrs.match(/id=["']([^"']+)["']/);
        if (idMatch) {
          el.id = idMatch[1];
          this.docRef._elementsById.set(el.id, el);
        }

        const classMatch = rawAttrs.match(/class=["']([^"']+)["']/);
        if (classMatch) {
          el.classList = new ClassList(el, classMatch[1].split(/\s+/));
          el.className = classMatch[1];
        }

        const nameMatch = rawAttrs.match(/name=["']([^"']+)["']/);
        if (nameMatch) el.name = nameMatch[1];

        const typeMatch = rawAttrs.match(/type=["']([^"']+)["']/);
        if (typeMatch) el.type = typeMatch[1];

        const valueMatch = rawAttrs.match(/value=["']([^"']+)["']/);
        if (valueMatch) el.value = valueMatch[1];

        this.docRef._allElements.push(el);
        this.children.push(el);
      }
    }
  }

  getAttribute(attr) {
    if (attr === 'id') return this.id;
    if (attr === 'class') return this.className;
    return this.attributes[attr] || null;
  }

  setAttribute(attr, val) {
    this.attributes[attr] = String(val);
    if (attr === 'id') {
      this.id = String(val);
      if (this.docRef) this.docRef._elementsById.set(this.id, this);
    }
    if (attr === 'class') {
      this.classList = new ClassList(this, String(val).split(/\s+/));
      this.className = String(val);
    }
  }

  removeAttribute(attr) {
    delete this.attributes[attr];
  }

  hasAttribute(attr) {
    return attr in this.attributes;
  }

  addEventListener(event, callback, options) {
    if (!this.eventListeners[event]) this.eventListeners[event] = [];
    this.eventListeners[event].push(callback);
  }

  removeEventListener(event, callback) {
    if (this.eventListeners[event]) {
      this.eventListeners[event] = this.eventListeners[event].filter(cb => cb !== callback);
    }
  }

  dispatchEvent(event) {
    const type = event.type || event;
    const handlers = this.eventListeners[type] || [];
    const evt = typeof event === 'object' ? event : { type, target: this, preventDefault: () => {} };
    for (const h of handlers) {
      h.call(this, evt);
    }
    return true;
  }

  click() {
    this.dispatchEvent({ type: 'click', target: this, preventDefault: () => {} });
  }

  appendChild(child) {
    if (child) {
      child.parentNode = this;
      this.children.push(child);
      if (this.docRef) this.docRef._allElements.push(child);
    }
    return child;
  }

  removeChild(child) {
    const idx = this.children.indexOf(child);
    if (idx !== -1) {
      this.children.splice(idx, 1);
      child.parentNode = null;
    }
    return child;
  }

  remove() {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  }

  querySelector(selector) {
    if (this.docRef) return this.docRef.querySelector(selector);
    return null;
  }

  querySelectorAll(selector) {
    if (this.docRef) return this.docRef.querySelectorAll(selector);
    return [];
  }

  getBoundingClientRect() {
    return {
      top: this.top || 0,
      left: 0,
      width: this.offsetWidth,
      height: this.offsetHeight,
      bottom: (this.top || 0) + this.offsetHeight,
      right: this.offsetWidth
    };
  }

  scrollIntoView() {}

  getContext(type) {
    return {
      imageSmoothingEnabled: true,
      imageSmoothingQuality: 'high',
      drawImage: () => {},
      clearRect: () => {},
      fillRect: () => {}
    };
  }
}

/**
 * Creates an isolated, sandboxed Virtual Environment simulating browser window & DOM
 */
function createVirtualEnv(options = {}) {
  const htmlContent = loadHtml();
  const elementsById = new Map();
  const allElements = [];

  const openedUrls = [];
  const toasts = [];

  const documentMock = {
    _elementsById: elementsById,
    _allElements: allElements,
    body: null,
    documentElement: null,
    addEventListener: (evt, cb) => {
      if (!documentMock.eventListeners) documentMock.eventListeners = {};
      if (!documentMock.eventListeners[evt]) documentMock.eventListeners[evt] = [];
      documentMock.eventListeners[evt].push(cb);
    },
    removeEventListener: (evt, cb) => {
      if (documentMock.eventListeners && documentMock.eventListeners[evt]) {
        documentMock.eventListeners[evt] = documentMock.eventListeners[evt].filter(c => c !== cb);
      }
    },
    getElementById: (id) => {
      if (elementsById.has(id)) return elementsById.get(id);
      const el = new MockElement('div', id, [], documentMock);
      elementsById.set(id, el);
      allElements.push(el);
      return el;
    },
    querySelector: (selector) => {
      if (selector.startsWith('#')) {
        const id = selector.slice(1).split(' ')[0].split('.')[0];
        return documentMock.getElementById(id);
      }
      if (selector.startsWith('.')) {
        const cls = selector.slice(1).split(' ')[0];
        return allElements.find(el => el.classList && el.classList.contains(cls)) || null;
      }
      if (selector.includes('input[name="')) {
        const match = selector.match(/input\[name="([^"]+)"\]/);
        if (match) {
          return allElements.find(el => el.name === match[1]) || null;
        }
      }
      return allElements.find(el => el.tagName.toLowerCase() === selector.toLowerCase()) || null;
    },
    querySelectorAll: (selector) => {
      if (selector.startsWith('.')) {
        const cls = selector.slice(1).split(' ')[0];
        return allElements.filter(el => el.classList && el.classList.contains(cls));
      }
      if (selector.includes('input[name="')) {
        const match = selector.match(/input\[name="([^"]+)"\]/);
        if (match) {
          return allElements.filter(el => el.name === match[1]);
        }
      }
      if (selector.includes('input[type="checkbox"]')) {
        return allElements.filter(el => el.type === 'checkbox');
      }
      if (selector.includes('a[href^="#"]')) {
        return allElements.filter(el => el.tagName === 'A');
      }
      return allElements.filter(el => el.tagName.toLowerCase() === selector.toLowerCase());
    },
    createElement: (tag) => {
      const el = new MockElement(tag, '', [], documentMock);
      allElements.push(el);
      return el;
    }
  };

  // Populate from HTML
  const tagRegex = /<([a-zA-Z0-9-]+)([^>]*)>/g;
  let match;
  while ((match = tagRegex.exec(htmlContent)) !== null) {
    const tagName = match[1];
    const rawAttrs = match[2];
    const el = new MockElement(tagName, '', [], documentMock);

    const idMatch = rawAttrs.match(/id=["']([^"']+)["']/);
    if (idMatch) {
      el.id = idMatch[1];
      elementsById.set(el.id, el);
    }

    const classMatch = rawAttrs.match(/class=["']([^"']+)["']/);
    if (classMatch) {
      el.classList = new ClassList(el, classMatch[1].split(/\s+/));
      el.className = classMatch[1];
    }

    const nameMatch = rawAttrs.match(/name=["']([^"']+)["']/);
    if (nameMatch) el.name = nameMatch[1];

    const typeMatch = rawAttrs.match(/type=["']([^"']+)["']/);
    if (typeMatch) el.type = typeMatch[1];

    const valueMatch = rawAttrs.match(/value=["']([^"']+)["']/);
    if (valueMatch) el.value = valueMatch[1];

    const dataCatMatch = rawAttrs.match(/data-category=["']([^"']+)["']/);
    if (dataCatMatch) el.dataset.category = dataCatMatch[1];

    allElements.push(el);
  }

  documentMock.body = documentMock.getElementById('body') || new MockElement('body', '', ['dark', 'has-bottom-dock'], documentMock);
  documentMock.documentElement = new MockElement('html', '', ['dark'], documentMock);

  const windowMock = {
    innerWidth: options.innerWidth || 1920,
    innerHeight: options.innerHeight || 1080,
    addEventListener: (evt, cb) => {},
    removeEventListener: (evt, cb) => {},
    matchMedia: (query) => ({
      matches: query.includes('max-width: 767px') ? (options.innerWidth || 1920) < 768 : false
    }),
    open: (url, target) => {
      openedUrls.push({ url, target });
    },
    requestAnimationFrame: (cb) => setTimeout(cb, 16),
    cancelAnimationFrame: (id) => clearTimeout(id),
    setTimeout: setTimeout,
    clearTimeout: clearTimeout,
    document: documentMock
  };

  // Mock Image
  class MockImage {
    constructor() {
      this.src = '';
      this.complete = true;
      this.naturalWidth = 1920;
      this.naturalHeight = 1080;
      this.onload = null;
    }
    decode() {
      return Promise.resolve();
    }
  }

  // Mock IntersectionObserver
  class MockIntersectionObserver {
    constructor(callback) {
      this.callback = callback;
    }
    observe() {}
    unobserve() {}
    disconnect() {}
  }

  const sandbox = {
    window: windowMock,
    document: documentMock,
    Image: MockImage,
    IntersectionObserver: MockIntersectionObserver,
    setTimeout: setTimeout,
    clearTimeout: clearTimeout,
    console: console,
    Math: Math,
    parseInt: parseInt,
    parseFloat: parseFloat,
    Array: Array,
    Object: Object,
    String: String,
    Number: Number,
    JSON: JSON,
    encodeURIComponent: encodeURIComponent,
    decodeURIComponent: decodeURIComponent,
    openedUrls,
    toasts
  };

  vm.createContext(sandbox);

  return {
    sandbox,
    window: windowMock,
    document: documentMock,
    elementsById,
    allElements,
    openedUrls,
    evalJs: (code) => vm.runInContext(code, sandbox),
    loadCatalog: () => {
      const code = loadCatalogJs();
      const exposure = `
        globalThis.PRODUCTS = PRODUCTS;
        globalThis.rfpCart = rfpCart;
        globalThis.filterState = filterState;
        globalThis.currentProduct = currentProduct;
        globalThis.renderProducts = renderProducts;
        globalThis.setupFilterListeners = setupFilterListeners;
        if (typeof setupSearchListeners !== 'undefined') globalThis.setupSearchListeners = setupSearchListeners;
        globalThis.setupModalListeners = setupModalListeners;
        globalThis.setupDrawerListeners = setupDrawerListeners;
        globalThis.setupScrollReveal = setupScrollReveal;
        globalThis.openMobileFilters = openMobileFilters;
        globalThis.closeMobileFilters = closeMobileFilters;
        globalThis.updateMobileFilterBadge = updateMobileFilterBadge;
        globalThis.resetFilters = resetFilters;
        globalThis.openQuickView = openQuickView;
        globalThis.adjustQvQty = adjustQvQty;
        globalThis.setQvQty = setQvQty;
        globalThis.updateQvCalculations = updateQvCalculations;
        globalThis.inquireProductWhatsapp = inquireProductWhatsapp;
        globalThis.addCurrentQvToRfp = addCurrentQvToRfp;
        globalThis.closeQuickView = closeQuickView;
        globalThis.addToRfp = addToRfp;
        globalThis.removeFromRfp = removeFromRfp;
        globalThis.adjustRfpItemQty = adjustRfpItemQty;
        globalThis.updateRfpBadge = updateRfpBadge;
        globalThis.renderRfpDrawer = renderRfpDrawer;
        globalThis.openRfpDrawer = openRfpDrawer;
        globalThis.closeRfpDrawer = closeRfpDrawer;
        globalThis.showToast = showToast;
        globalThis.setupCardTilt = setupCardTilt;

        Object.defineProperty(globalThis, 'rfpCart', {
          get: () => rfpCart,
          set: (v) => { rfpCart = v; },
          configurable: true
        });
        Object.defineProperty(globalThis, 'filterState', {
          get: () => filterState,
          set: (v) => { filterState = v; },
          configurable: true
        });
        Object.defineProperty(globalThis, 'currentProduct', {
          get: () => currentProduct,
          set: (v) => { currentProduct = v; },
          configurable: true
        });
      `;
      vm.runInContext(code + '\n' + exposure, sandbox);
      // Run DOMContentLoaded setup manually
      if (typeof sandbox.setupDrawerListeners === 'function') sandbox.setupDrawerListeners();
    },
    loadVideoScroll: () => {
      const code = loadVideoScrollJs();
      vm.runInContext(code, sandbox);
    }
  };
}

// Test Runner Framework
const suites = [];
let currentSuite = null;

function describe(name, fn) {
  const suite = {
    name,
    tests: [],
    beforeEachFns: [],
    afterEachFns: []
  };
  currentSuite = suite;
  suites.push(suite);
  fn();
  currentSuite = null;
}

function test(name, fn) {
  if (!currentSuite) throw new Error(`Test "${name}" must be inside a describe block`);
  currentSuite.tests.push({ name, fn });
}

function beforeEach(fn) {
  if (currentSuite) currentSuite.beforeEachFns.push(fn);
}

function afterEach(fn) {
  if (currentSuite) currentSuite.afterEachFns.push(fn);
}

// CLI Argument parsing
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    tier: null,
    grep: null,
    bail: false,
    verbose: true
  };

  for (const arg of args) {
    if (arg.startsWith('--tier=')) {
      options.tier = parseInt(arg.split('=')[1]);
    } else if (arg.startsWith('--grep=')) {
      options.grep = arg.split('=')[1];
    } else if (arg === '--bail') {
      options.bail = true;
    }
  }

  return options;
}

// Master execution entry point
async function runAll() {
  const options = parseArgs();

  console.log(`${COLORS.gold}${COLORS.bright}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${COLORS.reset}`);
  console.log(`${COLORS.gold}${COLORS.bright}   THE BLUE ANTS — AUTOMATED END-TO-END VERIFICATION & AUDIT SUITE           ${COLORS.reset}`);
  console.log(`${COLORS.gold}${COLORS.bright}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${COLORS.reset}`);
  console.log(`${COLORS.gray}Target Project Root: ${PROJECT_ROOT}${COLORS.reset}`);
  if (options.tier) console.log(`${COLORS.cyan}Filtering by Tier: ${options.tier}${COLORS.reset}`);
  if (options.grep) console.log(`${COLORS.cyan}Filtering by Grep: "${options.grep}"${COLORS.reset}`);
  console.log('');

  // Load Test Suites
  const suiteFiles = [
    { tier: 1, file: 'suites/tier1_features.js' },
    { tier: 2, file: 'suites/tier2_boundaries.js' },
    { tier: 3, file: 'suites/tier3_cross_features.js' },
    { tier: 4, file: 'suites/tier4_real_world.js' },
    { tier: 5, file: 'suites/tier5_adversarial.js' }
  ];

  for (const { tier, file } of suiteFiles) {
    if (options.tier && options.tier !== tier) continue;
    const fullPath = path.join(__dirname, file);
    if (fs.existsSync(fullPath)) {
      require(fullPath);
    }
  }

  let totalTests = 0;
  let passedTests = 0;
  let failedTests = 0;
  let skippedTests = 0;
  const failures = [];

  const startTime = Date.now();

  for (const suite of suites) {
    const matchingTests = suite.tests.filter(t => {
      if (options.grep) {
        return suite.name.includes(options.grep) || t.name.includes(options.grep);
      }
      return true;
    });

    if (matchingTests.length === 0) continue;

    console.log(`${COLORS.gold}● ${suite.name}${COLORS.reset}`);

    for (const t of matchingTests) {
      totalTests++;
      const testStart = Date.now();
      try {
        // Run beforeEach
        for (const bf of suite.beforeEachFns) await bf();

        // Run test
        await t.fn();

        // Run afterEach
        for (const af of suite.afterEachFns) await af();

        const duration = Date.now() - testStart;
        passedTests++;
        console.log(`  ${COLORS.green}✓${COLORS.reset} ${COLORS.white}${t.name}${COLORS.reset} ${COLORS.gray}(${duration}ms)${COLORS.reset}`);
      } catch (err) {
        failedTests++;
        const duration = Date.now() - testStart;
        console.log(`  ${COLORS.red}✗${COLORS.reset} ${COLORS.red}${t.name}${COLORS.reset} ${COLORS.gray}(${duration}ms)${COLORS.reset}`);
        failures.push({
          suite: suite.name,
          test: t.name,
          error: err
        });

        if (options.bail) {
          console.log(`\n${COLORS.red}Bailing out on first failure...${COLORS.reset}`);
          break;
        }
      }
    }
    console.log('');
    if (options.bail && failedTests > 0) break;
  }

  const totalDuration = Date.now() - startTime;

  // Print Summary Table
  console.log(`${COLORS.gold}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${COLORS.reset}`);
  console.log(`${COLORS.bright}EXECUTION SUMMARY & VERIFICATION METRICS${COLORS.reset}`);
  console.log(`${COLORS.gold}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${COLORS.reset}`);
  console.log(`Total Test Cases   : ${COLORS.bright}${totalTests}${COLORS.reset}`);
  console.log(`Passed Assertions  : ${COLORS.green}${passedTests}${COLORS.reset}`);
  console.log(`Failed Assertions  : ${failedTests > 0 ? COLORS.red : COLORS.gray}${failedTests}${COLORS.reset}`);
  console.log(`Skipped / Filtered : ${skippedTests > 0 ? COLORS.yellow : COLORS.gray}${skippedTests}${COLORS.reset}`);
  console.log(`Execution Duration : ${totalDuration}ms`);
  console.log(`${COLORS.gold}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${COLORS.reset}`);

  if (failures.length > 0) {
    console.log(`\n${COLORS.red}${COLORS.bright}FAILED TEST DETAILS (${failures.length}):${COLORS.reset}\n`);
    failures.forEach((f, idx) => {
      console.log(`${COLORS.red}[${idx + 1}] ${f.suite} → ${f.test}${COLORS.reset}`);
      console.log(`${COLORS.dim}${f.error.stack || f.error.message}${COLORS.reset}\n`);
    });
    process.exit(1);
  } else {
    console.log(`\n${COLORS.green}${COLORS.bright}✨ ALL TESTS PASSED SUCCESSFULLY (100% PASS RATE)${COLORS.reset}\n`);
    process.exit(0);
  }
}

// Module Exports
module.exports = {
  PROJECT_ROOT,
  // Assertions
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
  // File loaders
  loadFile,
  loadHtml,
  loadCss,
  loadCatalogJs,
  loadVideoScrollJs,
  loadManifest,
  loadVercelConfig,
  loadPackageJson,
  // Sandbox & Environment
  createVirtualEnv,
  // Test framework
  describe,
  test,
  beforeEach,
  afterEach,
  // Runner
  runAll
};

// Execute if run directly from CLI
if (require.main === module) {
  runAll();
}
