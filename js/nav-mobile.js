/**
 * The Blue Ants — Mobile Navigation Drawer Controller (CorpKraft-Style Drawer)
 * Features off-canvas slide from left, multi-level accordions with +/- indicators,
 * backdrop dimming, body scroll locking, and Escape key dismissal.
 */

function toggleMobileDrawer() {
  const drawer = document.getElementById('mobileNavDrawer');
  if (!drawer) return;
  const isOpen = drawer.classList.contains('is-open');
  if (isOpen) {
    drawer.classList.remove('is-open');
    document.body.style.overflow = '';
  } else {
    drawer.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
}

function closeMobileDrawer() {
  const drawer = document.getElementById('mobileNavDrawer');
  if (drawer && drawer.classList.contains('is-open')) {
    drawer.classList.remove('is-open');
    document.body.style.overflow = '';
  }
}

function toggleMobileAccordion(sectionId) {
  const list = document.getElementById(sectionId);
  const icon = document.getElementById(sectionId + 'Icon');
  if (!list) return;

  const isExpanded = list.classList.contains('is-expanded');
  if (isExpanded) {
    list.classList.remove('is-expanded');
    if (icon) icon.textContent = '+';
  } else {
    list.classList.add('is-expanded');
    if (icon) icon.textContent = '−';
  }
}

if (typeof document !== 'undefined') {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileDrawer();
    }
  });
}

if (typeof window !== 'undefined') {
  window.toggleMobileDrawer = toggleMobileDrawer;
  window.closeMobileDrawer = closeMobileDrawer;
  window.toggleMobileAccordion = toggleMobileAccordion;
}
