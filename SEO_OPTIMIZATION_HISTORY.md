# Sidikoff Digital - SEO Optimization History & Architecture Log

**Date of Execution:** April 27, 2026
**Objective:** Finalize comprehensive technical SEO audit, structure correction, and content expansion across 50+ pages without relying on Sanity CMS for blog content.

This document serves as the project's persistent memory regarding all SEO modifications applied to the codebase. It should be consulted when diagnosing future crawlability issues, adding new service pages, or extending the blog architecture.

---

## 1. Technical Fixes & Architecture Changes (Sprint 1)

*   **Sitemap Synchronization (`src/app/sitemap.ts`)**: 
    *   Identified and removed "ghost" route entries that triggered 404 errors.
    *   Added previously orphaned P1/P2 pages (e.g., `/services/agence-nextjs-react`, `/services/developpeur-web-lyon`, `/services/nextjs-paris`).
    *   Modified sitemap priority scoring, heavily boosting high-intent money pages to `0.9` priority for faster indexing.
*   **Client to Server Schema Migration**: 
    *   **Problem:** Some pages (e.g., `AgenceVilleurbanneClient.tsx`) were generating JSON-LD schemas entirely client-side, risking poor Googlebot indexing due to Javascript hydration delays.
    *   **Solution:** Extracted `Service`, `FAQ`, and `BreadcrumbList` generation into the server-side `page.tsx` files. *Future Rule: All schema generation MUST happen on the server.*
*   **Entity Corrections**: 
    *   Replaced invalid `MedicalOrganization` schemas on medical/freelance pages with properly structured `Service` schemas that align with Sidikoff's identity as a web agency.

## 2. Schema Standardization (Sprint 2)

*   **Global BreadcrumbList Injection**: 
    *   Bulk-injected structured `BreadcrumbList` schemas across **all 44+** service and local landing pages.
    *   Used standard schema definition patterns to ensure proper rich-snippet rendering in Google search results.
*   **`areaServed` Strict Formatting (`src/lib/seo-utils.ts`)**: 
    *   **Problem:** Some schemas passed plain strings (e.g., `["Villeurbanne", "Métropole de Lyon"]`), which Google Search Console often flags as unoptimized.
    *   **Solution:** Updated the `generateServiceSchema` utility to automatically map string inputs into strongly-typed `Place` objects (e.g., `{ "@type": "Place", "name": "Villeurbanne" }`), fully compliant with schema.org.

## 3. Crawlability & SEO Polish (Sprint 3)

*   **Title Tag Standardization**: 
    *   Standardized hardcoded `<title>` and `generatePageMetadata()` tags across the repository to adhere strictly to the formula: `Primary Keyword [+ Location] | Sidikoff`.
    *   Ensured all title tags are under the 60-character limit to prevent SERP truncation and keyword cannibalization.
*   **Robots.txt Unblocking (`src/app/robots.txt/route.ts`)**: 
    *   Removed `Disallow: /` directives for `SemrushBot` and `AhrefsBot`.
    *   *Note for future:* These bots are now explicitly allowed to crawl the site to facilitate ongoing domain health audits and keyword tracking.

## 4. Blog Infrastructure Decoupling (Sprint 4)

*   **Static Data Migration**: 
    *   **Context:** The initial roadmap assumed blog articles would be deployed via Sanity CMS. The user requested to bypass Sanity and manage blog content statically directly in the codebase.
    *   **Execution:** Fully decoupled all frontend blog components (`BlogPageContent.tsx`, `BlogCard.tsx`, `Actualite.tsx`, `HomePage.tsx`) and dynamic routes (`blog/[slug]/page.tsx`) from `@/lib/sanity.ts`.
*   **Type Safety**: 
    *   Resolved ~20 cascading TypeScript errors resulting from the data model shift (migrating from Sanity's `_id` and image builder to the static `slug` properties and `allBlogPosts` arrays).
    *   The 10 new high-value SEO blog articles (e.g., pricing guides, localized SEO guides, Next.js vs WordPress) are now actively served statically.

---

## ⚠️ Important Rules for Future Development

1.  **Server-Side Schemas:** Never place `<script type="application/ld+json">` inside a `"use client"` component. Always inject it in `page.tsx` or `layout.tsx`.
2.  **Blog Content Updates:** New blog articles must be added to `src/lib/blog-data.ts` (or its split parts) following the `BlogPost` TypeScript interface. The Sanity integration remains in the codebase but is functionally disconnected from the frontend blog views.
3.  **Title Tags:** Any new service page must use the `generatePageMetadata()` helper from `seo-utils.ts` and adhere to the `[Keyword] | Sidikoff` naming convention.
4.  **Sitemap Maintenance:** When adding a new static route, you must manually append it to the `routes` array in `src/app/sitemap.ts` to ensure indexing.
