# PrevTechWeb — Static Site Package

This package contains a clean, responsive static site for PrevTech Group LLC.

## Contents
- `index.html`, `divisions.html`, `projects.html`, `about.html`, `contact.html`
- `assets/css/styles.css`
- `assets/images/*` (placeholders + a clean hexagon logo mark)
- `.nojekyll` (harmless for Azure; useful if later served via GitHub Pages)

## How to deploy with Azure Static Web Apps (current repo setup)
1. Copy all files to the repository root (same folder as your current `index.html`).
2. Commit to the same branch your Azure Static Web Apps workflow uses (currently `main`).
3. Ensure your workflow `azure-static-web-apps.yml` points to:
   - `app_location: "/"` (or the relative folder where `index.html` lives)
   - `api_location: ""` (empty if you have no API)
   - `output_location: ""` (empty for pure static content)
4. Push. The workflow will publish automatically.

## Logo
A clean hexagon SVG mark is included at `assets/images/logo-prevtech.svg`. Replace it with your official brand file using the same filename to keep pages intact.

## Images
All images included are placeholders. Replace with your production images keeping the same filenames to preserve layout.
