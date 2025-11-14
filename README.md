# PrevTechWeb — Bilingual (EN/ES) with Separate Division Pages

**Structure**
- Root (EN):
  - `index.html`, `divisions.html`, `about.html`, `contact.html`
  - `/divisions/` → `main.html`, `steril.html`, `marine.html`, `ecopower.html`
- Spanish `/es/`:
  - `index.html`, `divisiones.html`, `nosotros.html`, `contacto.html`
  - `/es/divisiones/` → `main.html`, `steril.html`, `marine.html`, `ecopower.html`
- Shared assets: `/assets/css/styles.css`, `/assets/images/*`

**Deploy (Azure Static Web Apps)**
- Keep workflow with `app_location: "/"`, `api_location: ""`, `output_location: ""`.
- Push to `main` and the site will publish.

**Language switch**
- EN pages link to `/es/` counterparts; ES pages link back to EN.

**Images & Logo**
- Placeholders included. Replace with production images keeping filenames.
- `assets/images/logo-prevtech.svg` uses the hexagon with internal diagonal bar.
