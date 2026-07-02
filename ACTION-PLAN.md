# SEO Action Plan: sidikoff.com

Generated: 2026-07-02  
Based on Semrush crawl updated 2026-07-01 plus live sitemap crawl.

## Priority 0: Fix Critical Structured Data

Expected recovery: **+10 to +18 crawl/index score points**

Actions:

1. Create one schema utility for page-level SEO:
   - `WebPage`
   - `Service`
   - `BreadcrumbList`
   - `FAQPage`
   - one canonical `Organization` / `ProfessionalService` entity
2. Stop declaring local landing pages as separate `LocalBusiness` entities unless Sidikoff has a real branch/NAP in that city.
3. Convert service pages from `LocalBusiness`/`ProfessionalService` misuse to `Service` with:
   - `provider`
   - `areaServed`
   - `serviceType`
   - `offers`
   - `mainEntityOfPage`
4. Fix FAQ schema shape: use `FAQPage` with `mainEntity`, not loose `@graph` of `Question` objects.
5. Validate affected sample URLs in Rich Results Test:
   - `/services/agence-web-bron`
   - `/services/agence-web-caluire-et-cuire`
   - `/services/agence-web-france`
   - `/services/creation-site-internet-dentiste`
   - `/services/developpeur-web-lyon`
   - `/services/site-vitrine-villeurbanne`

## Priority 1: Normalize Titles and H1s

Expected recovery: **+7 to +12 on-page score points**

Actions:

1. Enforce title length target: **45-60 chars**.
2. Use one title pattern:
   - `Agence Web Lyon | Création Site Internet`
   - `SEO Lyon | Référencement Naturel`
   - `Site Vitrine Villeurbanne | Agence Web`
3. Remove repeated suffix `| Sidikoff Digital` where Next root template already appends brand.
4. Fix duplicate brand bugs on project pages:
   - current example: `Bahor Voyage | Sidikoff Digital- Projets | Sidikoff Digital`
5. Rewrite H1s to differ from title:
   - Title: `Agence Web Lyon | Création Site Internet`
   - H1: `Sites rapides pour PME lyonnaises prêtes à vendre`
6. Fix `/services/agence-web-villeurbanne`: only one H1; demote second H1 to H2.

## Priority 2: Improve Thin Pages

Expected recovery: **+8 to +14 content score points**

Actions:

1. Project pages `/projects/1` to `/projects/21`:
   - add project goal
   - client/business context
   - problem
   - solution
   - stack
   - SEO/performance outcome
   - screenshots with descriptive alt
   - links to matching service page
2. Strengthen low-word service pages:
   - `/services/creation-sites-web`
   - `/services/refonte-sites-web`
   - `/services/maintenance-support`
3. Strengthen hub pages:
   - `/projects`
   - `/contact`
   - `/blog`
4. Target minimums:
   - money service page: **900-1400 words**
   - project page: **600-900 words**
   - hub page: **700+ words**

## Priority 3: Internal Linking

Expected recovery: **+5 to +9 crawl/index score points**

Actions:

1. Build service hub blocks:
   - Lyon cluster
   - Paris cluster
   - Villeurbanne/nearby cities cluster
   - industry vertical cluster
   - tech stack cluster
2. Add contextual links from blog articles to money pages.
3. Add related-services block to every service page.
4. Add project-to-service links:
   - restaurant projects -> restaurant/site vitrine/SEO local pages
   - travel project -> agency travel page
   - barbershop project -> barbershop pages
5. Ensure each money page has at least **5 meaningful internal links**.

## Priority 4: Broken External Links

Expected recovery: **+2 to +5 trust score points**

Actions:

1. Replace or remove:
   - `https://www.malt.fr/profile/sardorbeksidikov`
   - `https://sidikov.tech/`
2. Recheck outbound links after deploy.
3. Use `rel="noopener noreferrer"` on external links.

## Priority 5: Reduce Low Text-HTML Ratio

Expected recovery: **+4 to +8 technical score points**

Actions:

1. Remove duplicate JSON-LD scripts per page.
2. Move repeated schema generation into shared utilities.
3. Reduce oversized decorative markup in templates.
4. Keep server-rendered copy visible in HTML.
5. Audit heavy pages first:
   - `/`
   - `/services/agence-web-lyon`
   - `/services/agence-web-paris`
   - `/services/agence-web-villeurbanne`
   - `/projects`
   - `/blog`

## Priority 6: Authority Growth

Expected recovery: **ranking upside, not immediate audit score**

Actions:

1. Build citations:
   - Google Business Profile
   - Pages Jaunes
   - Sortlist
   - Malt, if profile live
   - LinkedIn company/founder profile
   - local Lyon/Villeurbanne directories
2. Publish case studies and request client links.
3. Create comparison/content assets:
   - `Agence web Lyon prix`
   - `Next.js vs WordPress pour PME`
   - `Refonte SEO sans perte de trafic`
4. Track competitor `saberweb.ovh`, flagged by Semrush as visibility gainer.

## Verification Checklist

After fixes:

1. Run `pnpm type-check`.
2. Run `pnpm lint`.
3. Run `pnpm build`.
4. Crawl sitemap and compare:
   - invalid schema: 30 -> 0
   - long titles: 15 Semrush / 49 live -> under 5
   - low word count: 13 Semrush / 27 live -> under 5
   - multi-H1: 1 -> 0
   - broken external links: 3 -> 0
5. Rerun Semrush Site Audit with JS rendering enabled if plan allows.
6. Add GSC exports to `gsc-exports/`, then run `pnpm seo:gsc`.

## First Implementation Sprint

Best first batch:

1. Fix schema utility and replace affected service-page JSON-LD.
2. Fix `/services/agence-web-villeurbanne` H1.
3. Fix broken external links.
4. Normalize titles for top money pages:
   - `/services/agence-web-lyon`
   - `/services/agence-web-paris`
   - `/services/agence-web-villeurbanne`
   - `/services/creation-site-internet-paris-16`
   - `/services/seo-lyon`
5. Add internal links into these same pages from homepage, services hub, blog, and footer.
