# PrevTechWeb (static)

Multilingual static site (EN default + ES) with a simple language switcher and JSON-based i18n.

## Structure
- `index.html` — Home
- `about/` — About
- `divisions/` — Overview + division detail pages
- `projects.html` — Projects & Clients
- `contact/` — Contact
- `assets/css/style.css` — Styles
- `assets/js/app.js` — Language switch + i18n loader
- `assets/i18n/en.json`, `assets/i18n/es.json` — Texts

## Run locally
Open any HTML file in a local server (for `fetch`). For example:

```bash
python -m http.server 8080
# then open http://localhost:8080/index.html
```

## Publish on GitHub Pages
1. Push this folder content to your repository root (branch `main`).
2. Go to **Settings → Pages**.
3. In **Source**, choose **Deploy from a branch**, select `main` and **/ (root)**.
4. Save. Your site will be available at: `https://<org>.github.io/<repo>/`.

> If your site appears under a subpath, links are relative and will work as-is.
