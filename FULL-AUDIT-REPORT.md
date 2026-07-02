# SEO Audit Report: sidikoff.com

Generated: 2026-07-02  
Primary source: Semrush Site Audit campaign `26429719`, updated 2026-07-01  
Secondary source: live crawl of `https://www.sidikoff.com/sitemap.xml` on 2026-07-02

## Executive Summary

Semrush reports strong base health: **Site Health 91%**, **AI Search Health 95%**, **100 pages crawled**, **0 broken pages**, **5 redirects**, **2 blocked pages**, **90 pages with issues**.

Main SEO loss now comes from template-level hygiene, not crawl breakage:

- **30 invalid structured data items** across service pages.
- **66 pages with low text-HTML ratio**.
- **15 pages with too-long title tags** in Semrush; live sitemap crawl found **49 titles over 65 chars**.
- **13 pages with low word count** in Semrush; live sitemap crawl found **27 pages under 500 words**, mostly project/legal/contact/core-service pages.
- **9 pages with duplicate H1 and title tags** in Semrush; live crawl found broader near-duplicate pattern on **44 URLs**.
- **3 broken external links** in Semrush; live crawl confirmed `https://www.malt.fr/profile/sardorbeksidikov` returns `403` and `https://sidikov.tech/` fails fetch.
- **15 pages with only one incoming internal link**.
- **7 pages require content optimization**.
- **1 page has more than one H1**: `https://www.sidikoff.com/services/agence-web-villeurbanne`.

Ranking/market signal is weak but fixable:

- Domain Overview FR: **Authority Score 7**, **Organic Traffic 42**, **Organic Keywords 70**, **Referring Domains 28**, **Backlinks 66**.
- Position Tracking, Villeurbanne desktop FR, 2026-06-25 to 2026-07-02: **Visibility 2.38%**, down **9.17%**; average position **67.80**; tracked keywords **10**; 1 keyword improved, 2 declined.
- Main lost keyword shown by Semrush: `création de site internet paris 16`, down 8 positions.

## SEO Health Index

Overall score: **76 / 100**  
Health status: **Good**

| Category | Score | Weight | Weighted contribution |
| --- | ---: | ---: | ---: |
| Crawlability & Indexation | 88 | 30 | 26.4 |
| Technical Foundations | 78 | 25 | 19.5 |
| On-Page Optimization | 64 | 20 | 12.8 |
| Content Quality & E-E-A-T | 72 | 15 | 10.8 |
| Authority & Trust Signals | 65 | 10 | 6.5 |

Score limit: crawl/index base is healthy, but invalid schema, weak metadata, thin project pages, low internal linking, and low authority cap growth.

## Findings

### 1. Invalid Structured Data

- Category: Crawlability & Indexation
- Severity: Critical
- Confidence: High
- Evidence: Semrush reports **30 structured data items are invalid**. Detail page shows affected type mostly **Local Business**, plus one **Organization** issue, across pages such as:
  - `/services/agence-web-bron`
  - `/services/agence-web-caluire-et-cuire`
  - `/services/agence-web-france`
  - `/services/agence-web-paris-17`
  - `/services/agence-web-paris-19`
  - `/services/agence-web-vaulx-en-velin`
  - `/services/creation-site-internet-dentiste`
  - `/services/developpeur-web-lyon`
  - `/services/ecommerce-lyon`
  - `/services/nextjs-paris`
  - `/services/seo-lyon`
  - `/services/site-vitrine-villeurbanne`
- Local evidence: affected pages emit repeated `ProfessionalService`, `LocalBusiness`, `Organization`, `BreadcrumbList`, and FAQ graph scripts.
- Why it matters: invalid schema can remove rich-result eligibility and weakens entity clarity for Google and AI systems.
- Score impact: -18 to Crawlability & Indexation.
- Recommendation: replace page-level `LocalBusiness` misuse with one canonical business entity plus valid page-specific `Service`, `WebPage`, `BreadcrumbList`, and `FAQPage` schemas.

### 2. Low Text-HTML Ratio

- Category: Technical Foundations
- Severity: Medium
- Confidence: High
- Evidence: Semrush reports **66 pages have low text-HTML ratio**. Live crawl found **77 sitemap URLs below 10% ratio**.
- Sample live pages:
  - `/` ratio 5.0%, 2398 words
  - `/services/agence-web-paris` ratio 7.0%, 1939 words
  - `/services/agence-web-lyon` ratio 4.9%, 901 words
  - `/projects` ratio 1.5%, 286 words
  - `/blog` ratio 4.3%, 752 words
- Why it matters: not direct ranking factor alone, but indicates heavy markup/JS vs crawlable content. Can reduce crawl efficiency and make Semrush flag pages.
- Score impact: -8 to Technical Foundations.
- Recommendation: reduce duplicated markup, simplify repeated components, trim inline JSON-LD duplication, avoid excessive decorative DOM, and add server-rendered concise copy where page is thin.

### 3. Long Title Tags

- Category: On-Page Optimization
- Severity: Medium
- Confidence: High
- Evidence: Semrush reports **15 pages have too much text within title tags**. Live crawl found **49 titles over 65 characters**.
- Sample live titles:
  - `/services/developpeur-web-lyon` length 93
  - `/services/creation-site-internet-avocat` length 82
  - `/services/agence-web-caluire-et-cuire` length 78
  - `/services/nextjs-paris` length 78
  - `/services/site-vitrine-villeurbanne` length 77
- Why it matters: titles truncate in SERPs, repeat brand text too often, and dilute primary keyword.
- Score impact: -7 to On-Page Optimization.
- Recommendation: standardize titles to 45-60 chars. Use one brand suffix only. Prefer `Primary Keyword + Location | Sidikoff`.

### 4. Duplicate/Near-Duplicate H1 and Title

- Category: On-Page Optimization
- Severity: Medium
- Confidence: Medium
- Evidence: Semrush reports **9 pages have duplicate H1 and title tags**. Live crawl found **44 near-duplicates** where H1 repeats title core.
- Sample pages:
  - `/blog/prix-site-internet-lyon`
  - `/blog/prix-site-internet-paris`
  - `/services/agence-web-paris`
  - `/services/agence-web-lyon`
  - `/services`
  - `/faq`
- Why it matters: title should target SERP click; H1 should clarify page promise. Duplicates reduce semantic differentiation.
- Score impact: -5 to On-Page Optimization.
- Recommendation: keep title keyword-focused; rewrite H1 as user-facing value proposition.

### 5. Low Word Count / Thin Pages

- Category: Content Quality & E-E-A-T
- Severity: Medium
- Confidence: High
- Evidence: Semrush reports **13 pages have low word count**. Live crawl found **27 sitemap URLs under 500 words**.
- Main clusters:
  - `/projects/*` pages: 259-415 words
  - `/contact`: 208 words
  - `/projects`: 286 words
  - `/mentions-legales`: 360 words
  - `/services/creation-sites-web`: 487 words
  - `/services/refonte-sites-web`: 475 words
  - `/services/maintenance-support`: 467 words
- Why it matters: thin project/service pages do not prove expertise, outcomes, process, stack, or local relevance.
- Score impact: -9 to Content Quality & E-E-A-T.
- Recommendation: enrich project pages with context, challenge, solution, stack, measurable result, screenshots/alt text, and internal links to related services.

### 6. Broken External Links

- Category: Authority & Trust Signals
- Severity: Medium
- Confidence: High
- Evidence: Semrush reports **3 external links are broken**. Live crawl found:
  - `https://www.malt.fr/profile/sardorbeksidikov` returns `403`, appears 3 times.
  - `https://sidikov.tech/` fetch fails, appears 1 time.
- Why it matters: broken outbound links weaken trust and waste crawl paths.
- Score impact: -5 to Authority & Trust Signals.
- Recommendation: replace with live profile URLs or remove links. Use `rel="noopener noreferrer"` for external links.

### 7. Weak Internal Linking

- Category: Crawlability & Indexation
- Severity: Medium
- Confidence: High
- Evidence: Semrush reports **15 pages have only one incoming internal link**.
- Why it matters: pages with few internal links get weaker crawl priority and weaker topical authority transfer.
- Score impact: -7 to Crawlability & Indexation.
- Recommendation: add contextual links from hub pages, footer, related-service blocks, and blog articles into money pages.

### 8. Content Optimization Needed

- Category: Content Quality & E-E-A-T
- Severity: Medium
- Confidence: Medium
- Evidence: Semrush reports **7 pages require content optimization**.
- Why it matters: ranking weakness likely tied to incomplete topical coverage and weak keyword-to-page intent match.
- Score impact: -5 to Content Quality & E-E-A-T.
- Recommendation: map each target keyword to one canonical URL. Add missing sections: pricing, deliverables, location proof, FAQ, comparison, process, and proof.

### 9. Blocked Pages

- Category: Crawlability & Indexation
- Severity: Low
- Confidence: Medium
- Evidence: Semrush reports **2 pages are blocked from crawling**. `robots.txt` intentionally blocks `/api/`, `/_next/static/media/`, `/admin/`, `/private/`, `/studio/`, `/tmp/`, `/_vercel/`, `/404`, `/500`, `/fonts/`, `/favicon.ico`.
- Why it matters: safe if blocked URLs are assets/private/system pages; bad if money pages enter blocked paths.
- Score impact: -2 to Crawlability & Indexation.
- Recommendation: confirm blocked URLs in Semrush are non-indexable utility paths. If they are real pages, remove matching disallow.

### 10. More Than One H1

- Category: On-Page Optimization
- Severity: Low
- Confidence: High
- Evidence: Semrush reports **1 page has more than one H1**. Live crawl confirms `/services/agence-web-villeurbanne` has **2 H1 tags**.
- Why it matters: not fatal, but weakens heading hierarchy.
- Score impact: -2 to On-Page Optimization.
- Recommendation: keep one H1; demote secondary hero/section H1 to H2.

### 11. Low Authority

- Category: Authority & Trust Signals
- Severity: Medium
- Confidence: High
- Evidence: Semrush Domain Overview FR: Authority Score **7**, Referring Domains **28**, Backlinks **66**.
- Why it matters: technical fixes can improve eligibility, but low authority limits competitive local rankings.
- Score impact: -12 to Authority & Trust Signals.
- Recommendation: build local citations, partner links, portfolio/case-study links, guest posts, directory profiles, and digital PR around Lyon/Villeurbanne/Paris web-agency topics.

## Limitations

- Semrush crawl had **JS rendering disabled**, so client-only content may be undercounted.
- No Google Search Console CSV exports found in `gsc-exports/`; query/page validation is incomplete.
- Semrush access was read-only through existing browser session.
- Score measures SEO readiness, not guaranteed rankings.
