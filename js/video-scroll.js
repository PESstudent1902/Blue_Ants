/**
 * THE BLUE ANTS — 60FPS Frame-Sequence Dual-Canvas Scrubbing Engine
 * Milestone 3: Tactile 60FPS Unboxing Canvas Experience
 * 
 * Technical Highlights:
 * - 130 sequential photographic frames (frame_0000.jpg to frame_0129.jpg)
 * - Asynchronous GPU image decoding (img.decode()) to eliminate main-thread jank
 * - Adaptive Lerp inertia: 0.24 on desktop (velvety luxury glide), 0.36 on mobile (tighter touch tracking)
 * - Dual-Canvas Architecture: Sharp foreground (#heroCanvas 1920x1080) + Ambient 55px blur background (#heroBlurCanvas 960x540)
 * - Mobile GPU fill-rate protection: Background blur canvas strictly deactivated on viewports < 768px
 * - Dynamic viewport height resilience & zero CLS
 * - IntersectionObserver lifecycle management: Automatically pauses requestAnimationFrame when off-screen
 * - Document visibility listener for background tab battery conservation
 * - Floating Unboxing Progress Pill with real-time percentage feedback (0% to 100%) and catalog jump anchor
 */

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('scrollHeroContainer');
  const canvas = document.getElementById('heroCanvas');
  const blurCanvas = document.getElementById('heroBlurCanvas');

  if (!container || !canvas) {
    return;
  }

  // Foreground Sharp Canvas Context (alpha: false and desynchronized for zero-overhead compositing)
  const ctx = canvas.getContext('2d', { alpha: false, desynchronized: true }) || canvas.getContext('2d');
  
  // Background Ambient Blur Canvas Context (Desktop only)
  const blurCtx = blurCanvas 
    ? (blurCanvas.getContext('2d', { alpha: false }) || blurCanvas.getContext('2d'))
    : null;

  if (ctx) {
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
  }
  if (blurCtx) {
    blurCtx.imageSmoothingEnabled = true;
    blurCtx.imageSmoothingQuality = 'low'; // Low quality is optimal for 55px CSS blur background
  }

  const frameCount = 130;
  const frames = new Array(frameCount);
  let loadedCount = 0;
  let isMobile = window.innerWidth < 768 || (window.matchMedia && window.matchMedia('(max-width: 767px)').matches);

  // UI Elements
  const heroIntroBox = document.getElementById('heroIntroBox');
  const unboxedCta = document.getElementById('unboxedCta');
  const unboxingProgressBar = document.getElementById('unboxingProgressBar');
  const unboxingProgressText = document.getElementById('unboxingProgressText');
  const unboxingProgressPill = document.getElementById('unboxingProgressPill');

  // Motion & Lerp State
  let currentFrameIdx = 0;
  let targetFrameIdx = 0;
  let isScrubbing = false;
  let lastDrawnIdx = -1;
  let rafId = null;
  let isHeroVisible = true;

  // Set internal canvas resolutions (16:9 native frame aspect ratio)
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

    const handleFrameReady = () => {
      loadedCount++;
      frames[i] = img;

      // Draw initial frame immediately on first frame load or if target frame matches
      if (i === 0 || loadedCount === 1) {
        drawFrame(0, true);
      } else if (Math.round(currentFrameIdx) === i) {
        drawFrame(i, true);
      }
    };

    if (typeof img.decode === 'function') {
      img.decode()
        .then(() => {
          handleFrameReady();
        })
        .catch(() => {
          // Fallback if decode promise rejects (e.g. cached or aborted)
          if (img.complete && img.naturalWidth > 0) {
            handleFrameReady();
          } else {
            img.onload = handleFrameReady;
          }
        });
    } else {
      img.onload = handleFrameReady;
    }
  }

  /**
   * Finds the nearest available decoded frame if the requested frame is still downloading.
   */
  function getNearestFrame(index) {
    if (frames[index] && frames[index].complete && frames[index].naturalWidth > 0) {
      return { frame: frames[index], actualIdx: index };
    }
    
    // Search radiating outwards for the closest decoded frame
    for (let offset = 1; offset < frameCount; offset++) {
      const lower = index - offset;
      if (lower >= 0 && frames[lower] && frames[lower].complete && frames[lower].naturalWidth > 0) {
        return { frame: frames[lower], actualIdx: lower };
      }
      const upper = index + offset;
      if (upper < frameCount && frames[upper] && frames[upper].complete && frames[upper].naturalWidth > 0) {
        return { frame: frames[upper], actualIdx: upper };
      }
    }
    return { frame: null, actualIdx: -1 };
  }

  /**
   * Draws the frame to the sharp canvas and desktop blur canvas.
   */
  function drawFrame(index, forceRedraw = false) {
    if (!ctx) return;
    if (index === lastDrawnIdx && !forceRedraw) return;

    const { frame, actualIdx } = getNearestFrame(index);
    if (!frame) return;

    lastDrawnIdx = index;

    // Draw crisp foreground canvas
    ctx.drawImage(frame, 0, 0, canvas.width, canvas.height);

    // Draw background ambient mirror-blur canvas (Strictly Desktop only to protect 100% mobile GPU fill-rate)
    if (!isMobile && blurCtx && blurCanvas) {
      blurCtx.drawImage(frame, 0, 0, blurCanvas.width, blurCanvas.height);
    }
  }

  /**
   * Adaptive Lerp 60FPS Animation Loop
   * Desktop Lerp Factor: 0.24 (Velvety editorial glide)
   * Mobile Lerp Factor:  0.36 (Tactile, tight touch response)
   */
  function render() {
    if (!isHeroVisible) {
      rafId = null;
      return;
    }

    const diff = targetFrameIdx - currentFrameIdx;
    const lerpFactor = isMobile ? 0.36 : 0.24;

    if (Math.abs(diff) > 0.005) {
      currentFrameIdx += diff * lerpFactor;

      // Snap to target if within epsilon threshold to eliminate micro-jitter
      if (Math.abs(targetFrameIdx - currentFrameIdx) < 0.005) {
        currentFrameIdx = targetFrameIdx;
      }

      const drawIdx = Math.min(Math.max(Math.round(currentFrameIdx), 0), frameCount - 1);
      drawFrame(drawIdx);
    }

    rafId = requestAnimationFrame(render);
  }

  function startAnimationLoop() {
    if (!rafId && isHeroVisible) {
      rafId = requestAnimationFrame(render);
    }
  }

  function stopAnimationLoop() {
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  }

  /**
   * Stable Scroll Progress Calculator (Immune to mobile address bar collapse)
   * Returns normalized progress [0.0, 1.0]
   */
  function getScrollProgress() {
    const rect = container.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 1;
    const scrollableDistance = container.offsetHeight - viewportHeight;

    if (scrollableDistance <= 0) return 0;
    const scrolled = -rect.top;
    return Math.min(Math.max(scrolled / scrollableDistance, 0), 1);
  }

  /**
   * High-Frequency Scroll Handler
   */
  function onScroll() {
    const progress = getScrollProgress();
    targetFrameIdx = progress * (frameCount - 1);

    // If animation loop is paused but hero is visible, restart it
    if (!rafId && isHeroVisible) {
      startAnimationLoop();
    }

    // Update Live Unboxing Progress Meter UI
    if (unboxingProgressBar) {
      unboxingProgressBar.style.width = `${(progress * 100).toFixed(1)}%`;
    }
    if (unboxingProgressText) {
      unboxingProgressText.textContent = `Unboxing: ${Math.round(progress * 100)}%`;
    }

    // Hero Intro Box smooth fade & lift
    if (heroIntroBox) {
      if (progress < 0.10) {
        heroIntroBox.style.opacity = '1';
        heroIntroBox.style.transform = 'translateY(0)';
        heroIntroBox.style.pointerEvents = 'auto';
      } else if (progress >= 0.10 && progress <= 0.38) {
        const factor = 1 - (progress - 0.10) / (0.38 - 0.10);
        heroIntroBox.style.opacity = Math.max(0, factor).toFixed(2);
        heroIntroBox.style.transform = `translateY(-${((1 - factor) * 25).toFixed(1)}px)`;
        heroIntroBox.style.pointerEvents = factor > 0.25 ? 'auto' : 'none';
      } else {
        heroIntroBox.style.opacity = '0';
        heroIntroBox.style.transform = 'translateY(-30px)';
        heroIntroBox.style.pointerEvents = 'none';
      }
    }

    // Unboxing Progress Pill visibility (maintains translateX(-50%) centering)
    if (unboxingProgressPill) {
      if (progress > 0.02 && progress < 0.96) {
        unboxingProgressPill.style.opacity = '1';
        unboxingProgressPill.style.transform = 'translate(-50%, 0)';
        unboxingProgressPill.style.pointerEvents = 'auto';
      } else if (progress <= 0.02) {
        unboxingProgressPill.style.opacity = '0.85';
        unboxingProgressPill.style.transform = 'translate(-50%, 0)';
        unboxingProgressPill.style.pointerEvents = 'auto';
      } else {
        unboxingProgressPill.style.opacity = '0';
        unboxingProgressPill.style.transform = 'translate(-50%, 15px)';
        unboxingProgressPill.style.pointerEvents = 'none';
      }
    }

    // Unboxed CTA visibility (fades in when unboxing reaches >= 68%)
    if (unboxedCta) {
      if (progress >= 0.68) {
        unboxedCta.classList.add('active');
      } else {
        unboxedCta.classList.remove('active');
      }
    }
  }

  // Smooth jump anchor listener for catalog links inside hero
  const jumpLinks = container.querySelectorAll('a[href^="#"]');
  jumpLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Passive, high-frequency scroll listener
  window.addEventListener('scroll', onScroll, { passive: true });

  // Responsive Viewport & Orientation Change Handler
  function handleResize() {
    const wasMobile = isMobile;
    isMobile = window.innerWidth < 768 || (window.matchMedia && window.matchMedia('(max-width: 767px)').matches);

    // If transitioning from desktop to mobile, clear blur canvas to free GPU memory
    if (!wasMobile && isMobile && blurCtx && blurCanvas) {
      blurCtx.clearRect(0, 0, blurCanvas.width, blurCanvas.height);
    }
    // If transitioning from mobile to desktop, redraw current frame to blur canvas
    if (wasMobile && !isMobile) {
      drawFrame(Math.round(currentFrameIdx), true);
    }

    onScroll();
  }

  window.addEventListener('resize', handleResize, { passive: true });
  window.addEventListener('orientationchange', handleResize, { passive: true });

  // Direct Touch Drag Scrubbing on Mobile Viewport
  container.addEventListener('touchstart', () => {
    isScrubbing = true;
  }, { passive: true });

  container.addEventListener('touchmove', () => {
    if (!isScrubbing) return;
    onScroll();
  }, { passive: true });

  container.addEventListener('touchend', () => {
    isScrubbing = false;
  }, { passive: true });

  // IntersectionObserver: Pause RAF loop when hero is off-screen to eliminate idle GPU/CPU cycles
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isHeroVisible = true;
            startAnimationLoop();
          } else {
            isHeroVisible = false;
            stopAnimationLoop();
          }
        });
      },
      {
        root: null,
        rootMargin: '50px 0px', // Pre-warm slightly before entering viewport
        threshold: [0, 0.05, 0.5, 1.0]
      }
    );
    observer.observe(container);
  } else {
    // Fallback if IntersectionObserver is unsupported
    isHeroVisible = true;
    startAnimationLoop();
  }

  // Document Visibility API: Suspend RAF when tab is hidden to conserve battery
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopAnimationLoop();
    } else if (isHeroVisible) {
      startAnimationLoop();
    }
  });

  // Initial render and calculation
  onScroll();
  startAnimationLoop();
});
