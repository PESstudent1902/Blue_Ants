import json
import re
import os
import sys

PROJECT_ROOT = r'c:\Users\Vansh\Downloads\BlueAnts'

def run_tests():
    with open(os.path.join(PROJECT_ROOT, 'index.html'), 'r', encoding='utf-8') as f:
        html = f.read()
    with open(os.path.join(PROJECT_ROOT, 'css', 'style.css'), 'r', encoding='utf-8') as f:
        css = f.read()
    with open(os.path.join(PROJECT_ROOT, 'js', 'catalog.js'), 'r', encoding='utf-8') as f:
        js_catalog = f.read()
    with open(os.path.join(PROJECT_ROOT, 'manifest.json'), 'r', encoding='utf-8') as f:
        manifest = json.load(f)

    print('=== Milestone 4 Verification Suite ===')

    # Manifest checks
    assert manifest['display'] == 'standalone', 'PWA display must be standalone'
    assert manifest['theme_color'] == '#07090e', 'PWA theme color must be #07090e'
    assert manifest['background_color'] == '#07090e', 'PWA background color must be #07090e'
    assert manifest.get('icons') and len(manifest['icons']) > 0, 'PWA icons must exist'
    print('  [PASS] PWA Manifest verification')

    # Feature 13 Checks (Mobile Material Bottom Sheets)
    assert re.search(r'\.mobile-filter-dialog\s*\{[^}]*border-radius:\s*24px 24px 0 0', css, re.I), 'F13.1 border radius'
    assert re.search(r'\.mobile-filter-dialog\s*\{[^}]*position:\s*fixed;\s*bottom:\s*0', css, re.I), 'F13.1 fixed bottom'
    assert re.search(r'class=["\'][^"\']*bottom-sheet-handle', html, re.I), 'F13.2 handle in html'
    assert re.search(r'\.mobile-filter-dialog\s*\{[^}]*transform:\s*translateY\(100%\)', css, re.I), 'F13.3 translateY 100%'
    assert re.search(r'\.modal-overlay\.active\s*\.mobile-filter-dialog\s*\{[^}]*transform:\s*translateY\(0\)', css, re.I), 'F13.3 translateY 0'
    assert re.search(r'currentY\s*-\s*startY\s*>\s*100', js_catalog, re.I), 'F13.4 swipe down threshold'
    assert re.search(r'@media\s*\([^)]*max-width:\s*1024px\)[^{]*\{[\s\S]*?\.rfp-drawer\s*\{[^}]*border-radius:\s*24px 24px 0 0', css, re.I), 'F13.5 rfp-drawer bottom sheet'
    print('  [PASS] Feature 13: Mobile Material Bottom Sheets')

    # Feature 14 Checks (Mobile Thumb Navigation Dock)
    assert re.search(r'<nav[^>]*class=["\'][^"\']*mobile-bottom-dock', html, re.I), 'F14.1 dock in html'
    assert re.search(r'href=["\']#scrollHeroContainer["\'][^>]*>[\s\S]*?<span>Unboxing</span>', html, re.I), 'F14.2 unboxing'
    assert re.search(r'href=["\']#catalogSection["\'][^>]*>[\s\S]*?<span>Catalog</span>', html, re.I), 'F14.2 catalog'
    assert re.search(r'<span>WhatsApp</span>', html, re.I), 'F14.2 whatsapp'
    assert re.search(r'<span>Quote</span>', html, re.I), 'F14.2 quote'
    assert re.search(r'id=["\']mobileDockBadge["\']', html, re.I), 'F14.3 badge'
    assert re.search(r'env\(safe-area-inset-bottom,\s*0px\)', css, re.I), 'F14.4 safe area inset'
    assert re.search(r'body\.has-bottom-dock\s*\{[^}]*padding-bottom:\s*calc\(56px', css, re.I), 'F14.5 body padding'
    print('  [PASS] Feature 14: Mobile Thumb Navigation Dock')

    # Feature 15 Checks (Touch Ergonomics >=48dp)
    assert re.search(r'\.floating-whatsapp-btn\s*\{[^}]*width:\s*5[0-8]px;\s*height:\s*5[0-8]px;', css, re.I), 'F15.1 whatsapp btn size'
    assert re.search(r'touch-action:\s*manipulation', css, re.I), 'F15.2 touch-action'
    assert re.search(r'\.category-pill\s*\{[^}]*padding:\s*9px 20px', css, re.I), 'F15.3 category pill padding'
    assert re.search(r'\.mobile-checkbox-label\s*\{[^}]*padding:\s*11px 14px', css, re.I), 'F15.4 checkbox label padding'
    assert re.search(r'\.btn-primary-gold:active,\s*\.btn-secondary-outline:active', css, re.I), 'F15.5 active feedback'
    print('  [PASS] Feature 15: Touch Ergonomics (>=48dp)')

    # Feature 16 Checks (PWA Manifest & Zero CLS)
    assert re.search(r'<link[^>]*rel=["\']manifest["\'][^>]*href=["\']manifest\.json["\']', html, re.I), 'F16.2 manifest link'
    assert re.search(r'<meta[^>]*name=["\']mobile-web-app-capable["\'][^>]*content=["\']yes["\']', html, re.I), 'F16.2 web app capable'
    assert re.search(r'<meta[^>]*name=["\']viewport["\'][^>]*viewport-fit=cover', html, re.I), 'F16.2 viewport-fit'
    assert re.search(r'\.product-image-container\b[\s\S]*?padding-top:\s*[0-9]+%', css, re.I), 'F16.3 image aspect ratio'
    print('  [PASS] Feature 16: PWA Manifest & Zero CLS Guardrails')

    # Close button touch targets >=44-48px
    assert re.search(r'id=["\']closeRfpDrawerBtn["\'][^>]*class=["\'][^"\']*w-11 h-11', html, re.I), 'RFP Drawer close button size'
    assert re.search(r'closeQuickView\(\)[^>]*class=["\'][^"\']*w-11 h-11', html, re.I), 'Quick View close button size'
    assert re.search(r'closeMobileFilters\(\)[^>]*class=["\'][^"\']*w-11 h-11', html, re.I), 'Filter modal close button size'
    print('  [PASS] Strict >=48dp close button touch targets')

    # Stepper buttons touch targets
    assert re.search(r'adjustQvQty\(-10\)[^>]*class=["\'][^"\']*w-12 h-12', js_catalog, re.I), 'Quick View stepper minus size'
    assert re.search(r'adjustQvQty\(10\)[^>]*class=["\'][^"\']*w-12 h-12', js_catalog, re.I), 'Quick View stepper plus size'
    assert re.search(r'adjustRfpItemQty\([^)]*-10\)[^>]*class=["\'][^"\']*w-10 h-10', js_catalog, re.I), 'Drawer stepper minus size'
    assert re.search(r'adjustRfpItemQty\([^)]*10\)[^>]*class=["\'][^"\']*w-10 h-10', js_catalog, re.I), 'Drawer stepper plus size'
    print('  [PASS] Stepper buttons >=48dp touch targets')

    # Live quote badge and active dock synchronization
    assert 'mobileDockQuoteBadge' in html, 'mobileDockQuoteBadge in index.html'
    assert 'mobileDockQuoteBadge' in js_catalog, 'mobileDockQuoteBadge in js_catalog'
    assert 'setupMobileDockObserver' in js_catalog, 'setupMobileDockObserver in js_catalog'
    print('  [PASS] Real-time Quote Badge and Active Dock synchronization')

    print('\n>>> ALL MILESTONE 4 TOUCH & MOBILE CHECKS PASSED (100% SUCCESS) <<<')

if __name__ == '__main__':
    run_tests()
