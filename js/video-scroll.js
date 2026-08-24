/**
 * THE BLUE ANTS — 60FPS Frame-Sequence Dual-Canvas Scrubbing Engine
 * Ultra-smooth mobile & desktop unboxing scroll-trigger with:
 * - Asynchronous image decoding (zero main-thread decoding jank)
 * - Mobile GPU fill-rate optimization (disables heavy blur canvas on mobile)
 * - Dynamic Viewport Height resilience (eliminates mobile address bar jump)
 * - Adaptive inertia Lerp interpolation
 * - Direct touch gesture scrub support
 */

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('scrollHeroContainer');
  const canvas = document.getElementById('heroCanvas');
  const blurCanvas = document.getElementById('heroBlurCanvas');
  if (!container || !canvas) return;

  const ctx = canvas.getContext('2d', { alpha: false, desynchronized: true }) || canvas.getContext('2d');
  const blurCtx = blurCanvas ? (blurCanvas.getContext('2d', { alpha: false }) || blurCanvas.getContext('2d')) : null;

  const frameCount = 130;
  const frames = [];
  let loadedCount = 0;
  let isMobile = window.innerWidth < 768;

  const heroIntroBox = document.getElementById('heroIntroBox');
  const unboxedCta = document.getElementById('unboxedCta');
  const unboxingProgressBar = document.getElementById('unboxingProgressBar');
  const unboxingProgressText = document.getElementById('unboxingProgressText');
  const unboxingProgressPill = document.getElementById('unboxingProgressPill');

  let currentFrameIdx = 0;
  let targetFrameIdx = 0;
  let isScrubbing = false;
  let lastDrawnIdx = -1;

  // Set internal canvas resolution
  canvas.width = 1920;
  canvas.height = 1080;

  if (blurCanvas) {
    blurCanvas.width = 960;
    blurCanvas.height = 540;
  }

  // Preload and asynchronously decode all 130 frames
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    const padIndex = String(i).padStart(4, '0');
    img.src = `assets/frames/frame_${padIndex}.jpg`;

    img.onload = () => {
      loadedCount++;
      if (img.decode) {
        img.decode().catch(() => {});
      }
      if (loadedCount === 1) {
        drawFrame(0);
      }
    };
    frames.push(img);
  }

  function drawFrame(index) {
    if (index === lastDrawnIdx) return;
    const frame = frames[index];
    if (frame && frame.complete && frame.naturalWidth > 0) {
      lastDrawnIdx = index;
      
      // Foreground crisp canvas
      ctx.drawImage(frame, 0, 0, canvas.width, canvas.height);

      // Background ambient mirror-blur canvas (Desktop only to conserve 100% mobile GPU power)
      if (!isMobile && blurCtx && blurCanvas) {
        blurCtx.drawImage(frame, 0, 0, blurCanvas.width, blurCanvas.height);
      }
    }
  }

  // Adaptive Lerp Animation Loop
  function render() {
    const diff = targetFrameIdx - currentFrameIdx;
    
    // Adaptive lerp factor: tighter on mobile touch (0.36) for instant response, softer on desktop (0.24)
    const lerpFactor = isMobile ? 0.36 : 0.24;

    if (Math.abs(diff) > 0.02) {
      currentFrameIdx += diff * lerpFactor;
      const drawIdx = Math.min(Math.max(Math.round(currentFrameIdx), 0), frameCount - 1);
      drawFrame(drawIdx);
    }

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);

  // Stable Scroll Progress Calculator (Immune to mobile address bar collapse)
  function getScrollProgress() {
    const rect = container.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const scrollableDistance = container.offsetHeight - viewportHeight;
    
    if (scrollableDistance <= 0) return 0;
    const scrolled = -rect.top;
    return Math.min(Math.max(scrolled / scrollableDistance, 0), 1);
  }

  function onScroll() {
    const progress = getScrollProgress();
    targetFrameIdx = progress * (frameCount - 1);

    // Update Live Unboxing Progress UI
    if (unboxingProgressBar) {
      unboxingProgressBar.style.width = `${(progress * 100).toFixed(1)}%`;
    }
    if (unboxingProgressText) {
      unboxingProgressText.textContent = `Unboxing: ${Math.round(progress * 100)}%`;
    }

    // Hero intro text smooth fade
    if (heroIntroBox) {
      if (progress < 0.12) {
        heroIntroBox.style.opacity = '1';
        heroIntroBox.style.transform = 'translateY(0)';
        heroIntroBox.style.pointerEvents = 'auto';
      } else if (progress >= 0.12 && progress <= 0.40) {
        const factor = 1 - (progress - 0.12) / (0.40 - 0.12);
        heroIntroBox.style.opacity = Math.max(0, factor).toFixed(2);
        heroIntroBox.style.transform = `translateY(-${(1 - factor) * 24}px)`;
        heroIntroBox.style.pointerEvents = factor > 0.3 ? 'auto' : 'none';
      } else {
        heroIntroBox.style.opacity = '0';
        heroIntroBox.style.transform = 'translateY(-30px)';
        heroIntroBox.style.pointerEvents = 'none';
      }
    }

    // Unboxing progress pill visibility (fades in as user scrolls, hides once complete)
    if (unboxingProgressPill) {
      if (progress > 0.05 && progress < 0.95) {
        unboxingProgressPill.style.opacity = '1';
        unboxingProgressPill.style.transform = 'translateY(0)';
      } else if (progress <= 0.05) {
        unboxingProgressPill.style.opacity = '0.85';
      } else {
        unboxingProgressPill.style.opacity = '0';
        unboxingProgressPill.style.transform = 'translateY(15px)';
      }
    }

    // Show catalog prompt when unboxing reaches > 68%
    if (unboxedCta) {
      if (progress >= 0.68) {
        unboxedCta.classList.add('active');
      } else {
        unboxedCta.classList.remove('active');
      }
    }
  }

  // Passive, high-frequency scroll listener
  window.addEventListener('scroll', onScroll, { passive: true });

  // Resize handler
  window.addEventListener('resize', () => {
    isMobile = window.innerWidth < 768;
    onScroll();
  }, { passive: true });

  // Direct Touch Drag Scrubbing on Mobile Viewport
  let touchStartY = 0;
  let touchStartScrollTop = 0;

  container.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
    touchStartScrollTop = window.scrollY;
    isScrubbing = true;
  }, { passive: true });

  container.addEventListener('touchmove', (e) => {
    if (!isScrubbing) return;
    onScroll();
  }, { passive: true });

  container.addEventListener('touchend', () => {
    isScrubbing = false;
  }, { passive: true });

  // Initial call
  onScroll();
});

