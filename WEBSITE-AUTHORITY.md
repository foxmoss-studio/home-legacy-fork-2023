# Foxmoss Website Authority Map

This is the repository-side map connecting the public site source to the Google Drive website authority system. It is paired with the Drive root router rather than duplicating every product document in Git.

## Start here

**Drive root router — mandatory first read for substantive website work**  
https://docs.google.com/document/d/13Tl_Drg-jjCB6U0d7gu7GSnW-ESKFcU00Deqb4WoldM/edit

**Drive Website Working Queue — ACTIVE / QUEUED routing**  
https://docs.google.com/document/d/1TsfOy_EkQIcsYBgJ_Nj-Mxj8_n8KzvfDfuldcSiOLvY/edit

**Current Website Working at this reconciliation — WEB-001**  
https://docs.google.com/document/d/19ZI0AnWwuCHmBLuNpv9ZSvGr1TBW05xVbIy1UDeHydc/edit

Fresh queue state wins whenever the active Working changes. [`AGENTS.md`](AGENTS.md) owns repository execution/read rules.

Repository: https://github.com/FoxandMoss/home  
Publishing branch: `gh-pages`

Always fresh-read the current branch/head before implementation or audit work. Commit hashes in Workings are receipts, not permanent selectors.

## Drive owners and read triggers

| Owner | Role | Read when |
| --- | --- | --- |
| [Website START HERE](https://docs.google.com/document/d/13Tl_Drg-jjCB6U0d7gu7GSnW-ESKFcU00Deqb4WoldM/edit) | Root router / authority map | Every substantive website task |
| [Website Working Queue](https://docs.google.com/document/d/1TsfOy_EkQIcsYBgJ_Nj-Mxj8_n8KzvfDfuldcSiOLvY/edit) | ACTIVE/QUEUED/CLOSED routing | Every substantive website task and status change |
| [Website Master Plan](https://docs.google.com/document/d/1jsGnDlELDxsVRj6FTS-kmLN1VB4iPu4MPc8Dc7_n2UM/edit) | Architecture, accessibility, domain, roadmap | Shared shell, accessibility, privacy routing, domain, structure, metadata strategy |
| [Global Programming Audit Contract](https://docs.google.com/document/d/1xJcG6bOwBlc6LogJ38SiqF5v0icpIfcGlB_l5Tqv8yQ/edit) | Cross-project programming audit contract | Audit/repair/validation/repository correctness work |
| [Emira public-facing copy](https://docs.google.com/document/d/1ZpqgKcR8Qkkw09MmFK3uzTQySL6V9CJ9Kp5fIW80HcY/edit) | Emira outward-facing language | Emira description, feature claims, website/App Store wording |
| [Emira publication/subscription Working](https://docs.google.com/document/d/1rJZmaRFyl8A2Gvygy_v3idWKjQhZf7GPoXoggyuH6pw/edit) | Commerce/privacy/publication evidence | Trial, entitlement, privacy, publication/App Store status claims |
| [Wordleaf Development Handoff](https://docs.google.com/document/d/11Ynxmnrq-XCc40H-npjRIqcb9JWwUa8-DOZ2-EdzVM0/edit) | Wordleaf product handoff | Restoring/editing Wordleaf public presence or claims |
| [Nalia Development Handoff](https://docs.google.com/document/d/1TceC8Rhw0dW8E15GBJZK36S-oNSsqltWm8hL_KP_syQ/edit) | Nalia product handoff | Restoring/editing Nalia public presence or claims |

Do not read every owner on every task. START HERE + the ACTIVE Working select the complete relevant subset.

## Current identity and public direction

- Visible studio mark/name: **Foxmoss / FOXMOSS**.
- Formal umbrella descriptor: **Foxmoss Studio**.
- Intended future canonical domain: **foxmoss.studio**.
- The custom domain/DNS/HTTPS cutover is **not** claimed complete. Current canonical URLs remain on `foxandmoss.github.io/home` until the domain is actually owned/configured/verified.
- Current public product set: **Emira only**.
- Wordleaf, Nalia, and Storage Guard remain preserved but unpublished until explicitly restored.
- `Things made with care.` and the handmade botanical/Alice identity remain part of the site.

Older hidden product source and asset filenames can still contain `Fox & Moss`. That is preserved migration/history, not public naming authority.

## Current public architecture — 2026-10-31

The public shell was rebuilt under direct user instruction. It is now static-first and Foxmoss-first rather than a large hash-routed product manual.

### Canonical public routes

- `/home/` — Foxmoss studio homepage. Studio-first front door with Emira as the current featured project.
- `/home/emira/` — canonical Emira product page.
- `/home/privacy/` — Foxmoss website privacy hub + website-specific policy.
- `/home/privacy/emira/` — dedicated Emira Privacy Policy.
- `/home/404.html` — Foxmoss-styled not-found page.

Privacy routing rule: the root `/privacy/` namespace owns privacy navigation. The website policy lives at `/privacy/`; product policies live below it, e.g. `/privacy/emira/`, with future `/privacy/wordleaf/`, `/privacy/nalia/`, etc. created only when those products are actually public/relevant. Do not merge product data-handling disclosures back into the website policy.

### Shared public shell

- `site.css` — current public Foxmoss visual/accessibility shell. Preserves botanical artwork, Alice typography, warm brown/cream surfaces, responsive layouts, visible focus, comfortable targets, and reduced-motion behavior.
- `site.js` — lightweight public behavior. It controls botanical scroll position, **actually stops scroll-linked movement for `prefers-reduced-motion`**, and reads release labels from `downloads/apps.json` where a page opts in with `data-download-label`.
- `favicon.svg` — current small Foxmoss browser icon using the shared public palette; it is linked from every canonical public page and the 404 page.
- Canonical public pages use the same Home → Emira → Privacy primary navigation contract and shared footer destinations.
- Public pages use a visible-on-focus skip link and `main#main-content`.
- Public pages use page-specific `h1` headings and `aria-current` navigation.
- The public homepage no longer depends on jQuery or the old hash router.

### Preserved legacy/hidden source

- `style.css`, `script.js`, and `page.js` remain because preserved unpublished pages may still use them. They are not the canonical new public shell.
- `wordleaf/index.html` and `nalia/index.html` remain preserved and directly addressable if someone already knows the route, but the current public studio navigation and sitemap do not advertise them.
- Hiding/unpublishing is **not deletion**. Restore a product only after reading its current owner/release truth.
- Release availability in `downloads/apps.json` does not itself authorize public studio visibility.

## Public discovery / crawler truth

- `sitemap.xml` currently advertises exactly: root, Emira, `/privacy/`, and `/privacy/emira/`.
- `robots.txt` allows normal crawling and points to the sitemap. Hidden products are **unlinked/unlisted**, not crawler-blocked merely because they are unpublished from navigation.
- `404.html` is `noindex, follow` and gives routes back to Home/Emira/Privacy.
- Canonical and Open Graph URLs remain the current GitHub Pages host until custom-domain cutover is actually verified.
- The homepage and Emira product page include Open Graph and Twitter sharing image metadata using the existing botanical artwork. All canonical public pages carry the shared favicon and theme color.

## Release/status truth

- `downloads/apps.json` is the shared platform availability/status manifest.
- Both the homepage and canonical Emira page use `data-download-label="emira:ios"`; `site.js` reads the current label from the manifest with a truthful static fallback.
- `downloads/release-policy.json` remains the desktop release sync policy.
- `.github/workflows/sync-downloads.yml` can update `downloads/apps.json` from release sources.
- `.github/workflows/verify-downloads.yml` validates manifest structure, available endpoints, Emira status wiring on both public surfaces, and rejects unpublished-product discovery markers on the homepage.

## Public-site validation

`.github/workflows/verify-site.yml` is the public shell regression check. It validates the canonical source routes for:

- `lang`, viewport, exactly one `h1`, skip-to-main, `main#main-content`, and favicon linkage;
- expected canonical URLs on indexable canonical pages;
- absence of Wordleaf/Nalia/Storage Guard text from canonical public pages;
- absence of the legacy jQuery/hash-router shell on the homepage;
- shared `site.css` / `site.js` use;
- website-vs-Emira privacy routing;
- Emira shared release-status wiring;
- homepage/Emira social-sharing image metadata;
- `404.html` remaining `noindex, follow`;
- exact current sitemap routes;
- the current hidden-link policy not regressing into crawler bans.

A workflow file existing is not proof that a specific run passed. Read the actual run/status for validation evidence. If no check run is attached yet, report validation as unobserved rather than PASS.

## Source surfaces

### Governance / routing

- `AGENTS.md` — repository execution/read rules.
- `WEBSITE-AUTHORITY.md` — this Git ↔ Drive map.
- `README.md` — repository orientation/template history, not top authority.
- `WEBSITE-TODO.md` — older review backlog/history.
- `INSTALLER-CONTRACT.md` — Windows installer/download contract.

### Canonical public source

- `index.html`
- `emira/index.html`
- `privacy/index.html`
- `privacy/emira/index.html`
- `404.html`
- `favicon.svg`
- `site.css`
- `site.js`
- `sitemap.xml`
- `robots.txt`
- `downloads/apps.json`
- `.github/workflows/verify-downloads.yml`
- `.github/workflows/verify-site.yml`

### Preserved/non-canonical public-tree source

- `wordleaf/index.html`
- `nalia/index.html`
- legacy `style.css`, `script.js`, `page.js` where still consumed by preserved pages
- `testfile.html` — stale test artifact with no current canonical purpose; keep routed for later cleanup rather than treating it as a real page
- Storage Guard release artifacts under `downloads/`

## Read triggers by change class

### Brand / domain
Read START HERE, Queue, ACTIVE Working, Website Master Plan, `AGENTS.md`, current public metadata/header/footer/structured data, and current official GitHub Pages docs before external DNS/Pages changes. Do not add a guessed `CNAME`.

### Navigation / product visibility
Read START HERE, Queue, ACTIVE Working, canonical public pages, sitemap, shared shell, validation workflows, and the product owner for any product being restored. Visibility changes must preserve hidden source unless deletion is explicitly requested.

### Privacy
Read START HERE + Queue + ACTIVE Working + Website Master Plan privacy architecture. For a product policy, also read that product's current privacy/publication authority. Keep website privacy and product privacy separate. New public product privacy policies belong under `/privacy/<product>/`.

### Emira marketing / trial / entitlement / publication
Read the Emira public-copy owner. Add the current Emira publication/subscription authority for trial, entitlement, privacy, publication, or App Store claims. Do not infer public App Store availability from a build or manifest state.

### Accessibility / responsive / motion
Read Website Master Plan accessibility owner + current `site.css`/`site.js` + canonical HTML + ACTIVE Working + actual validation. Reduced-motion must reduce actual motion, not only an optimization hint.

### Downloads / installers
Read `INSTALLER-CONTRACT.md`, `downloads/apps.json`, `downloads/release-policy.json`, download workflows, current product release truth, and the relevant product handoff.

### Metadata / crawler visibility
Read canonical public pages, `sitemap.xml`, `robots.txt`, current domain state, ACTIVE Working, and Website Master Plan. Hidden UI alone is not metadata/crawler cleanup.

### Audit
Read `AGENTS.md`, Global Programming Audit Contract, ACTIVE Working, fresh head, affected source, and relevant owners. Execute repair + re-validation; unavailable/not-run checks are not PASS.

## Cross-reference maintenance

When a new website Google authority, Website Working, Git governance file, or canonical source owner is created/replaced:

1. update Drive START HERE if future read routing changes;
2. update the Drive Queue when Working status/order changes;
3. update the ACTIVE Working for source baseline/requirements/evidence changes;
4. add a backlink from a new authority to START HERE when practical;
5. update this file when Drive/Git ownership changes;
6. preserve superseded history rather than silently deleting provenance;
7. read back the changed authority/source after writes.

## Supersession rule

Direct current user instruction beats stored project docs. Current routing beats older current-status text. Current source beats historical implementation descriptions. Current topic owners decide what should be true; current Git shows what is actually implemented. When those differ, reconcile the difference explicitly.
