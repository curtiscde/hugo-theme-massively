# Change Log

---
## `7.0.0`
### Breaking Changes
 - **Minimum Hugo version is now `0.158.0`** (was `0.54.0`). Older versions fail to
   build rather than degrading gracefully — the theme uses `hugo.Data` (Hugo 0.156.0)
   and `.Language.Label` (Hugo 0.158.0). Stay on `6.x` if you cannot upgrade Hugo.
 - **Custom `<head>` partial renamed**: `layouts/partials/htmlhead.custom.html` →
   `layouts/_partials/htmlhead-custom.html`. Hugo's template system parses everything
   after the first dot in a filename as an identifier, so the old name resolved to the
   `htmlhead` partial itself and recursed infinitely. If you override this file, rename
   your copy.
 - Theme layouts migrated to Hugo's new template system (Hugo 0.146.0):
   `layouts/partials/` → `layouts/_partials/`, `layouts/index.html` →
   `layouts/home.html`, `layouts/_default/single.html` → `layouts/page.html`.
   Site-level overrides continue to work from both `layouts/_partials/` and the legacy
   `layouts/partials/`.
 - Configuration files renamed to Hugo's preferred name: `config.toml` → `hugo.toml`,
   and in the example site `config-prod.toml` → `hugo-prod.toml`.

### Minor Changes
 - Replaced removed `_internal/*` template calls with the equivalent embedded partials.
   `disqus.html` and `google_analytics.html` are now overridable by consumers.
 - Replaced deprecated Hugo APIs: `.Site.Data` → `hugo.Data`, `.Language.LanguageName`
   → `.Language.Label`, `.Scratch` → `.Store`, `.Data.Pages` → `.Site.RegularPages`.
 - Example site config: `languageCode` → `locale`, `languageName` → `label`, and
   `disableKinds` now uses the `term` kind instead of the removed `taxonomyTerm`.
 - Rendered HTML output is unchanged — verified byte-for-byte against `6.x`.

### Tooling
 - Cypress `9` → `16`, including the Cypress 10 layout (`cypress.config.ts`,
   `cypress/e2e/*.cy.ts`). Specs now use `beforeEach` for Cypress 12 test isolation.
 - `start-server-and-test` `2` → `3`; TypeScript `4` → `5`. Dropped unused `toml` and
   now-redundant `ts-node`. Resolves all 17 npm advisories (2 critical, 10 high).
 - CI: Node 16 → 24, `actions/checkout` v2 → v7, `actions/setup-node` v2 → v7,
   `peaceiris/actions-hugo` v2 → v3. The upper Hugo job now tracks `latest`.
 - Added Dependabot for npm and GitHub Actions.

---
## `6.0.0`
### Breaking Changes
 - Add asset handling using Hugo Pipes ([#80](https://github.com/curtistimson/hugo-theme-massively/pull/80))
   - Asset folders affected - files moved from `/static/assets/*` to `/assets/*`

---
## `5.3.0`
### Patches
- Fix preloading animation ([#75](https://github.com/curtistimson/hugo-theme-massively/issues/75))

---
## `5.3.0`
### Minor Changes
 - Add npm script for running Hugo `exampleSite`
 - Update config logic for featured post to use booleans (Fixes [#59](https://github.com/curtistimson/hugo-theme-massively/issues/59))
   - Backwards compatibility support for string values - "true" and "false"
 - Example Site - Update post content

### Patches
 - Fix homepage issues with Hugo 0.57.0 ([#71](https://github.com/curtistimson/hugo-theme-massively/issues/71))

---
## `5.2.0`
### Minor Changes
 - Japanese content translations added ([#64](https://github.com/curtistimson/hugo-theme-massively/pull/64))
 - Update assets to latest from HTML5UP ([#65](https://github.com/curtistimson/hugo-theme-massively/pull/65))

---
## `5.1.1`
### Patches
 - Fixes [#28](https://github.com/curtistimson/hugo-theme-massively/issues/28) - Feature post with only one post
