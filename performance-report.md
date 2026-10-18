# Week 4 Report — Frontend Performance Optimization Challenge

**Project:** SwiftSite landing page  
**Course/Department:** B.Tech Software Engineering  
**Submission date:** 18/10/2026  
**Repository:** https://github.com/kunalkumar55977-star/week4-frontend-performance

## 1. Objective
Identify frontend bottlenecks, implement suitable optimizations, and compare a baseline page with an optimized version under identical test conditions.

## 2. Technologies Used
HTML5, CSS3, vanilla JavaScript, Chrome DevTools Lighthouse, and static-host/Apache server configuration examples.

## 3. Project Structure
- `baseline/`: readable CSS/JS comparison build.
- `optimized/`: minified assets, resource hints, lazy loading, caching/compression config.
- `README.md`: run and validation steps.

## 4. Optimization Techniques Implemented

| Technique | Implementation | Benefit |
|---|---|---|
| Minification | `styles.min.css`, `script.min.js` | Reduces production asset source size. |
| Deferred JavaScript | `defer` attribute | Allows HTML parsing to continue during script download. |
| Critical image priority | Hero preload and `fetchpriority="high"` | Prioritizes the above-the-fold illustration. |
| Lazy loading | Below-the-fold images use `loading="lazy"` and `decoding="async"` | Defers non-critical image work. |
| Layout stability | Explicit image width/height | Reserves image space and helps prevent layout shifts. |
| Responsive layout | Grid/flex and mobile breakpoint | Adapts to phone, tablet, and desktop. |
| Lightweight code | No framework or third-party runtime | Avoids unnecessary dependency bytes. |
| DOM/interaction | Semantic markup and small menu handlers | Keeps structure and behavior simple. |
| Accessibility | ARIA state, Escape-to-close, focus return, reduced-motion support | Improves keyboard and motion accessibility. |
| Caching/compression | `_headers` and `.htaccess` | Configures caching and compression on compatible hosts. |

**Code splitting:** Not added because this small static page has one tiny behavior script and no route-specific or heavy optional modules. Splitting would add complexity without a clear rationale. This is an applicability decision, not a claim that it was implemented.

**Server configuration:** Caching/compression headers only take effect on a compatible deployed host. `_headers` is for compatible static hosts such as Netlify/Cloudflare Pages; `.htaccess` is for Apache with relevant modules enabled.

## 5. Testing and Performance Measurement
No scores are fabricated. Run Lighthouse for baseline and optimized versions in the same browser/environment, then enter actual results.

Browser/version: ____________________  
Test date/time: ____________________  
Viewport: ____________________  
Lighthouse mode: ____________________  
Network/CPU throttling: ____________________  
Runs per version: ____________________

| Metric | Baseline | Optimized | Change |
|---|---|---|---|
| Performance score | Not measured yet | Not measured yet | Pending |
| First Contentful Paint (FCP) | Not measured yet | Not measured yet | Pending |
| Largest Contentful Paint (LCP) | Not measured yet | Not measured yet | Pending |
| Total Blocking Time (TBT) | Not measured yet | Not measured yet | Pending |
| Cumulative Layout Shift (CLS) | Not measured yet | Not measured yet | Pending |
| Transferred bytes, if available | Not measured yet | Not measured yet | Pending |

## 6. Functional Test Checklist

| Test | Expected result | Status |
|---|---|---|
| Page/assets | CSS, JS, and images load without 404s | To verify in browser |
| Mobile menu | Visibility and `aria-expanded` stay in sync | To verify in browser |
| Escape key | Closes menu and returns focus to toggle | To verify in browser |
| Navigation link | Closes mobile menu after selection | To verify in browser |
| Responsive layout | No horizontal overflow at 375px, 768px, desktop | To verify in browser |
| Reduced motion | Smooth scrolling reduced when requested | To verify in browser |
| Console/network | No JS errors or missing assets | To verify in browser |

## 7. Challenges and Limitations
The earlier repository did not contain the documented baseline/optimized folders and used an inconsistent hero-image path. This package corrects the paths and includes both builds. Actual Lighthouse metrics still need to be captured in a browser. Server-level caching/compression depends on deployment to a compatible server.

## 8. Learning Outcomes
The project demonstrates resource prioritization, lazy loading, minification, deferred JavaScript, layout stability, responsive design, accessibility, and server caching configuration. Performance claims should be supported by repeatable measurements.

## 9. Deliverables
Baseline implementation, optimized implementation, caching/compression configuration examples, README, and this report.
