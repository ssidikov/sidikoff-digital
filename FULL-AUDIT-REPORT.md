# Sidikoff Digital - Full SEO Audit Report
*Generated via Agentic-SEO-Skill (LLM-First Analysis)*

## Overview
This audit evaluates the codebase and technical SEO foundations of `sidikoff-digital` (https://www.sidikoff.com) against modern search guidelines, including Core Web Vitals, Schema.org specifications, and Generative Engine Optimization (GEO).

**Score: 85/100 (Good)**
The project exhibits excellent foundational technical SEO, strong security headers, explicit AI crawler management, and well-prioritized sitemaps. However, there are significant schema violations regarding recent Google Rich Results deprecations and E-E-A-T authorship signaling.

---

## 1. Schema & Structured Data (Score: 60/100)
The site extensively uses structured data (`ProfessionalService`, `WebSite`, `Review`, `Article`, `FAQPage`), which is excellent. However, some types violate current Google guidelines.

### ⚠️ Finding 1: FAQPage Schema on Commercial Pages
* **Severity:** Warning
* **Confidence:** Confirmed
* **Evidence:** `src/sections/FAQ.tsx` (Line 125) uses `generateFAQStructuredData()`, which is rendered across the homepage and multiple commercial landing pages (`/services/*`).
* **Impact:** In August 2023, Google restricted FAQ rich results exclusively to well-known government and healthcare authority websites. While not an active penalty, generating `FAQPage` schema on commercial sites bloats the DOM with unused JSON-LD and wastes crawl budget.
* **Fix:** Remove the `FAQPage` structured data generation from the `FAQ.tsx` component and its usage in commercial landing pages.

### ⚠️ Finding 2: Organization used as Author in Article Schema
* **Severity:** Warning
* **Confidence:** Confirmed
* **Evidence:** `src/app/(main)/blog/[slug]/page.tsx` (Line 81) injects an inline `Article` schema where the author is declared as: `{"@type": "Organization", "name": post.author}`.
* **Impact:** Google's E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) framework places heavy emphasis on human authorship. Associating articles with a generic `Organization` instead of a real `Person` diminishes the perceived expertise and trust of the content.
* **Fix:** Change the author `@type` to `Person`. Update the schema to include `sameAs` links pointing to the author's LinkedIn or dedicated author profile (e.g., Sardorbek SIDIKOV).

### ℹ️ Finding 3: Deprecated HowTo Schema in Utils
* **Severity:** Info
* **Confidence:** Confirmed
* **Evidence:** `src/lib/seo-utils.ts` (Line 753) defines `generateHowToSchema()`.
* **Impact:** Google fully removed HowTo rich results in September 2023.
* **Fix:** Remove the dead code function to maintain a clean codebase and prevent future accidental usage.

### ℹ️ Finding 4: Unused Article Schema Utilities
* **Severity:** Info
* **Confidence:** Confirmed
* **Evidence:** `src/lib/seo-utils.ts` defines both `generateArticleStructuredData` (Line 504) and `generateArticleSchema` (Line 603). Neither is used, as `blog/[slug]/page.tsx` uses inline JSON-LD.
* **Fix:** Consolidate the blog schema logic by utilizing one of these helper functions in the blog template, and delete the duplicate.

---

## 2. Technical SEO & Security (Score: 100/100)
The repository demonstrates best-in-class technical implementations.

### ✅ Finding 5: Robust Security & Anti-Cache Headers
* **Severity:** Pass
* **Confidence:** Confirmed
* **Evidence:** `next.config.ts` defines comprehensive security headers including `Strict-Transport-Security`, `Content-Security-Policy`, and strict anti-cache parameters for development environments.
* **Impact:** Enhances security and ensures fresh content delivery, indirectly boosting SEO trust signals.

### ✅ Finding 6: Legacy Locale Redirects
* **Severity:** Pass
* **Confidence:** Confirmed
* **Evidence:** `next.config.ts` rewrites `/en/*` and `/ru/*` permanently (301) to the clean French URLs.
* **Impact:** Preserves link equity from legacy multilinguistic setups and prevents 404 errors for inbound traffic.

### ✅ Finding 7: Hreflang Configuration
* **Severity:** Pass
* **Confidence:** Confirmed
* **Evidence:** `layout.tsx` (Line 115) and `seo-utils.ts` correctly configure `fr` and `x-default` alternate URLs.
* **Impact:** Ensures search engines serve the correct localized version without throwing hreflang mismatch errors.

---

## 3. Generative Engine Optimization (GEO) (Score: 100/100)
The site is highly optimized for modern AI Search capabilities.

### ✅ Finding 8: AI Crawler Allowlist
* **Severity:** Pass
* **Confidence:** Confirmed
* **Evidence:** `src/app/robots.txt/route.ts` explicitly allows `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, and `OAI-SearchBot`.
* **Impact:** Ensures maximum discoverability in AI-driven answer engines (ChatGPT, Claude, Perplexity), preventing the site from being omitted from LLM citations.

### ✅ Finding 9: llms.txt Implementation
* **Severity:** Pass
* **Confidence:** Confirmed
* **Evidence:** `public/llms.txt` is present and referenced in the HTTP Link headers in `next.config.ts`.
* **Impact:** Provides a standardized entry point for AI crawlers to parse the site structure and core offerings quickly.

---

## 4. Performance & Core Web Vitals (Score: 95/100)

### ✅ Finding 10: Critical Resource Hints
* **Severity:** Pass
* **Confidence:** Confirmed
* **Evidence:** `src/app/layout.tsx` uses `preconnect` for Google Fonts, and `dns-prefetch` for Sanity, Unsplash, and Vercel Insights. Images use AVIF/WebP formats defined in `next.config.ts`.
* **Impact:** Pre-resolving DNS and utilizing modern image formats drastically reduces LCP (Largest Contentful Paint) and ensures fast loading times.

### ✅ Finding 11: Priority-Driven Sitemap
* **Severity:** Pass
* **Confidence:** Confirmed
* **Evidence:** `src/app/sitemap.ts` programmatically adjusts priority based on commercial intent and GSC performance (e.g., high priority for `/services/agence-web-lyon`).
* **Impact:** Directs Googlebot's crawl budget toward the most valuable conversion pages.
