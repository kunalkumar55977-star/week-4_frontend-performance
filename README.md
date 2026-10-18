# Week 4 — Frontend Performance Optimization Challenge
SwiftSite is a responsive landing page with baseline and optimized builds.

## Run without Python
Use VS Code and the Live Server extension. Right-click `baseline/index.html` and choose **Open with Live Server**; repeat for `optimized/index.html`.

## Optimizations in `optimized/`
- Minified CSS and JavaScript; deferred script loading.
- Preloaded, high-priority hero illustration; lazy-loaded, async-decoded below-the-fold illustrations.
- Explicit image dimensions to reserve layout space.
- Responsive CSS, semantic compact markup, no third-party runtime dependencies.
- Accessible mobile menu, Escape handling, focus return, reduced-motion support.
- `_headers` for compatible static hosts and `.htaccess` for Apache to configure caching/compression.

## Code splitting
Not added because this is a small static page with one tiny behavior script and no route-specific or heavy optional modules. Splitting would add complexity without a clear benefit.

Check mobile navigation, Escape key, links, 375px/768px/desktop widths, console/network errors, then run Lighthouse on both builds with identical settings.
