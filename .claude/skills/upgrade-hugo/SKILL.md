---
name: upgrade-hugo
description: Upgrade the theme to the latest Hugo release - read release notes for deprecations, test with real binaries, fix templates/config, bump version pins, open a PR. Use when asked to upgrade, update or bump Hugo, or to check Hugo compatibility.
---

# Upgrade Hugo

Bring the theme up to the latest Hugo release without changing rendered output.

The theme has **no max version ceiling** (removed in #158) and CI already tests `latest`. A typical upgrade is therefore: fix deprecations, bump the Netlify pin, and raise the minimum only when a fix needs a newer API.

Use `$S` below for a scratch directory (the session scratchpad if one exists).

## 1. Find the versions

```sh
gh release view --repo gohugoio/hugo --json tagName -q .tagName   # latest, e.g. v0.170.0
grep HUGO_VERSION netlify.toml                                      # current pin
grep -A2 hugoVersion hugo.toml                                      # current floor
```

If the pin already equals the latest, say so and stop.

## 2. Read every release in between

```sh
gh release list --repo gohugoio/hugo --limit 50
gh release view vX.Y.Z --repo gohugoio/hugo
```

Read every release after the current pin, up to and including the latest. Note deprecations, removals, template-system changes and config-key renames. Grep `layouts/`, `hugo.toml` and `exampleSite/*.toml` for each affected API.

## 3. Get real binaries

Hugo is usually not installed. Download the extended builds for the current pin and the latest:

```sh
gh release download vX.Y.Z --repo gohugoio/hugo \
  --pattern 'hugo_extended_X.Y.Z_darwin-universal.pkg' -D "$S/hugo-X.Y.Z"
pkgutil --expand-full "$S/hugo-X.Y.Z/hugo_extended_X.Y.Z_darwin-universal.pkg" "$S/hugo-X.Y.Z/x"
"$S/hugo-X.Y.Z/x/Payload/hugo" version
```

macOS releases ship as a `.pkg`, not a tarball. Expanding it avoids a system-wide install. Invoke the binary by its full path (`.../x/Payload/hugo`). On Linux, use the `hugo_extended_X.Y.Z_linux-amd64.tar.gz` asset and `tar -xzf` instead. Releases before about v0.150 may use different asset names, so check them with `gh release view vX.Y.Z --repo gohugoio/hugo --json assets`.

## 4. Baseline vs new build

From `exampleSite/`:

```sh
"$S/hugo-OLD/x/Payload/hugo" --themesDir ../.. -d "$S/out-old"
"$S/hugo-NEW/x/Payload/hugo" --themesDir ../.. --logLevel info -d "$S/out-new" 2>&1 | tee "$S/new.log"
grep -Ei 'deprecat|WARN|ERROR' "$S/new.log"
```

Always pass `--logLevel info`. Hugo reports a deprecation at INFO level for several releases before it becomes WARN, then ERROR, so a default build hides it.

## 5. Fix

Fix each deprecation or break in `layouts/_partials/`, `layouts/*.html`, `hugo.toml` and `exampleSite/*.toml`, using the replacement Hugo names. Rebuild with the new binary until the log is clean. Then:

```sh
diff -r "$S/out-old" "$S/out-new"
```

The diff must be empty. Any difference has to be intended and explained in the commit message.

## 6. Decide the minimum version

If a fix uses an API newer than the current floor, raise the floor to the oldest release that has it. Prove it with real binaries: the new minimum builds clean, and the release just below it fails. `min_version` only produces a warning. The missing API is what actually breaks a consumer's build, so the number must be accurate.

Keep all of these in sync:

- `hugo.toml` → `module.hugoVersion.min`
- `theme.toml` → `min_version`
- `.github/workflows/e2e.yml` → the min matrix entry **and** its `hugo-label`
- `README.md` → the badge and the "Requires Hugo …" line

## 7. Bump the pin

Set `netlify.toml` `HUGO_VERSION` to the latest. Never add a max version.

## 8. Test

```sh
npm ci
PATH="$S/hugo-NEW/x/Payload:$PATH" npm run e2e:headless
```

If the floor moved, run the tests again with the min binary on `PATH`.

## 9. Changelog and version

- Only the Netlify pin changed → no `CHANGELOG.md` entry.
- Theme files changed → add a `CHANGELOG.md` entry and follow SemVer (see `CONTRIBUTING.md`):
  - **Major**: the floor is raised, or a file users override is renamed. Add it under "Breaking Changes" with migration notes.
  - **Minor or patch**: deprecation fixes with identical output.

## 10. Ship

1. Branch `upgrade-hugo-vX.Y.Z`.
2. Split commits by concern, in this order: templates, then version floor and config, then docs and changelog. Each message lists every API change and the Hugo version that deprecated it (`old` → `new`, deprecated vX.Y.Z).
3. Confirm with the user before pushing, then open a PR titled `Upgrade Hugo: vX.Y.Z`.

## Gotchas

- Hugo treats everything after the **first dot** in a template filename as an identifier. `htmlhead.custom.html` resolved to `htmlhead` and recursed infinitely. Use hyphens.
- Layouts follow the template system Hugo adopted in v0.146.0: `layouts/_partials/`, `home.html`, `page.html`. Don't reintroduce `partials/` or `_default/`.
- Embedded templates are plain partials (`partial "disqus.html"`), not `_internal/…`.
