/**
 * THE BLUE ANTS — 60FPS Frame-Sequence Dual-Canvas Scrubbing Engine
 * Features foreground crisp frame render & ambient mirror-blur canvas
 * to eliminate side pillarbox empty space on all viewport dimensions.
 */

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('scrollHeroContainer');
  const canvas = document.getElementById('heroCanvas');
  const blurCanvas = document.getElementById('heroBlurCanvas');
  if (!container || !canvas) return;

  const ctx = canvas.getContext('2d');
  const blurCtx = blurCanvas ? blurCanvas.getContext('2d') : null;

  const frameCount = 130;
  const frames = [];
  let loadedCount = 0;

  const heroIntroBox = document.getElementById('heroIntroBox');
  const unboxedCta = document.getElementById('unboxedCta');

  let currentFrameIdx = 0;
  let targetFrameIdx = 0;

  canvas.width = 1920;
  canvas.height = 1080;

  if (blurCanvas) {
    blurCanvas.width = 960;
    blurCanvas.height = 540;
  }

  // Preload all 130 frames
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    const padIndex = String(i).padStart(4, '0');
    img.src = `assets/frames/frame_${padIndex}.jpg`;
    img.onload = () => {
      loadedCount++;
      if (loadedCount === 1) {
        drawFrame(0);
      }
    };
    frames.push(img);
  }

  function drawFrame(index) {
    const frame = frames[index];
    if (frame && frame.complete && frame.naturalWidth > 0) {
      // Foreground crisp canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(frame, 0, 0, canvas.width, canvas.height);

      // Background ambient mirror-blur canvas
      if (blurCtx && blurCanvas) {
        blurCtx.clearRect(0, 0, blurCanvas.width, blurCanvas.height);
        blurCtx.drawImage(frame, 0, 0, blurCanvas.width, blurCanvas.height);
      }
    }
  }

  // Smooth lerp loop
  function render() {
    const diff = targetFrameIdx - currentFrameIdx;
    if (Math.abs(diff) > 0.05) {
      currentFrameIdx += diff * 0.22;
      const drawIdx = Math.min(Math.max(Math.round(currentFrameIdx), 0), frameCount - 1);
      drawFrame(drawIdx);
    }
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);

  // Scroll handler
  function onScroll() {
    const rect = container.getBoundingClientRect();
    const scrollableDistance = container.offsetHeight - window.innerHeight;
    if (scrollableDistance <= 0) return;

    const scrolled = -rect.top;
    let progress = scrolled / scrollableDistance;
    progress = Math.min(Math.max(progress, 0), 1);

    targetFrameIdx = progress * (frameCount - 1);

    // Hero intro text fades smoothly as scrolling begins
    if (heroIntroBox) {
      if (progress < 0.18) {
        heroIntroBox.style.opacity = '1';
        heroIntroBox.style.transform = 'translateY(0)';
      } else if (progress >= 0.18 && progress <= 0.45) {
        const factor = 1 - (progress - 0.18) / (0.45 - 0.18);
        heroIntroBox.style.opacity = Math.max(0, factor).toFixed(2);
        heroIntroBox.style.transform = `translateY(-${(1 - factor) * 30}px)`;
      } else {
        heroIntroBox.style.opacity = '0';
        heroIntroBox.style.transform = 'translateY(-40px)';
      }
    }

    // Show catalog prompt when unboxing is finished (> 72%)
    if (unboxedCta) {
      if (progress >= 0.72) {
        unboxedCta.classList.add('active');
      } else {
        unboxedCta.classList.remove('active');
      }
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();
});

