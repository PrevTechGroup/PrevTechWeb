# PrevTechWeb — Bilingual Static Site (EN/ES) with EcoPower

**Structure**
- EN (root): `index.html`, `divisions.html`, `projects.html`, `about.html`, `contact.html`
- ES (`/es/`): `index.html`, `divisiones.html`, `proyectos.html`, `nosotros.html`, `contacto.html`
- Shared assets: `/assets/css/styles.css`, `/assets/images/*`

**Azure Static Web Apps**
- Keep `app_location: "/"`, `api_location: ""`, `output_location: ""` in your workflow.
- After pushing to `main`, the site is published automatically.

**Language switch**
- EN navbar links to `/es/`.
- ES navbar links back to `/`.

**Logo**
- `assets/images/logo-prevtech.svg` contains the hexagon with internal diagonal bar.

**Images**
- Placeholders included. Replace with production images keeping filenames.
