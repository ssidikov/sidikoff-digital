# Sidikoff Digital - SEO Action Plan
*Prioritized fixes based on the FULL-AUDIT-REPORT.md*

This action plan ranks the identified issues by SEO impact and implementation effort.

## 🔴 High Priority (Quick Wins)
*These items have a direct impact on E-E-A-T trust signals and should be addressed immediately.*

### 1. Fix Article Authorship Schema (E-E-A-T)
* **Location:** `src/app/(main)/blog/[slug]/page.tsx` (Line 81)
* **Action:** Update the `@type` of the author from `Organization` to `Person`.
* **Code Change:**
  ```json
  "author": {
    "@type": "Person",
    "name": "Sardorbek SIDIKOV",
    "url": "https://www.sidikoff.com",
    "sameAs": [
      "https://linkedin.com/in/sardorbeksidikov",
      "https://github.com/ssidikov"
    ]
  }
  ```

## ⚠️ Medium Priority
*These items clean up DOM bloat and align with recent Google Search deprecations.*

### 2. Remove FAQPage Schema from Commercial Pages
* **Location:** `src/sections/FAQ.tsx` and `src/lib/seo-utils.ts`
* **Action:** Since August 2023, FAQ rich results are restricted to healthcare and government sites. Remove the `generateFAQStructuredData` injection from the `FAQ.tsx` component to reduce DOM size and prevent schema warnings.

## 🟢 Low Priority (Technical Debt)
*These items are housekeeping tasks to keep the codebase clean.*

### 3. Remove Deprecated HowTo Schema
* **Location:** `src/lib/seo-utils.ts` (Line 753)
* **Action:** Delete the `generateHowToSchema()` function. HowTo rich results were deprecated in September 2023.

### 4. Consolidate Article Schema Helpers
* **Location:** `src/lib/seo-utils.ts`
* **Action:** Both `generateArticleStructuredData` and `generateArticleSchema` are defined but unused (the blog slug page hardcodes its schema). Delete the duplicate functions or refactor the blog page to use one of them.
