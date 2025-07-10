// Enhanced Critical CSS for Performance Optimization
export const enhancedCriticalCSS = `
/* Critical CSS for above-the-fold content - Enhanced */
.hero-title {
  font-size: clamp(1.875rem, 8vw, 4.5rem);
  line-height: 1.1;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #111827;
  font-display: swap;
}

@media (prefers-color-scheme: dark) {
  .hero-title {
    color: #ffffff;
  }
}

/* Optimized loading skeleton */
.loading-skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 0.5rem;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Critical layout styles */
.hero-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

/* Critical button styles */
.cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  color: white;
  border-radius: 0.75rem;
  font-weight: 600;
  transition: transform 0.2s ease-in-out;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  text-decoration: none;
}

.cta-button:hover {
  transform: scale(1.02);
}

/* Critical navigation styles */
.nav-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 50;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  .nav-header {
    background: rgba(0, 0, 0, 0.95);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
}

// /* Critical font loading */
// @font-face {
//   font-family: 'Inter';
//   font-style: normal;
//   font-weight: 400 700;
//   font-display: swap;
//   src: url('/fonts/inter-var.woff2') format('woff2');
// }

/* Performance optimizations */
.smooth-animation {
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
}

/* Eco-friendly optimizations */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  
  .loading-skeleton {
    animation: none;
    background: #f0f0f0;
  }
}

/* Energy-saving dark mode optimizations */
@media (prefers-color-scheme: dark) {
  * {
    color-scheme: dark;
  }
}

/* Critical responsive styles */
@media (max-width: 768px) {
  .hero-title {
    font-size: clamp(1.5rem, 6vw, 3rem);
  }
  
  .cta-button {
    padding: 0.875rem 1.5rem;
    font-size: 0.875rem;
  }
}

/* Performance-focused hover states */
@media (hover: hover) {
  .cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(79, 70, 229, 0.3);
  }
}

/* Critical layout utilities */
// .container {
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 1rem;
// }

.section-padding {
  padding: 4rem 0;
}

@media (max-width: 768px) {
  .section-padding {
    padding: 2rem 0;
  }
}

/* Critical typography */
.text-gradient {
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Critical visibility utilities */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
`
