# Rajkumar Portfolio

The personal developer portfolio of **Rajkumar J**, a Java Full Stack Developer. Built as a fast, dependency-free static site — plain HTML, CSS, and JavaScript, no build step required.

Live site: https://rajkumar-portfolio-one.vercel.app

## Features

- Dark/light theme toggle with saved preference (no flash on reload)
- Fully responsive, from 320px mobile up to large desktops
- Config-driven content — projects, skills, and social links are edited in one JS file, not scattered across the HTML
- Project case-study modals with problem/solution/architecture/lessons-learned
- Accessible: semantic HTML, keyboard-navigable, visible focus states, `prefers-reduced-motion` support
- Contact form with client-side validation, ready to connect to a Spring Boot backend (falls back to email if the backend isn't live)
- Resume download served directly from the site (no third-party redirect)

## Technologies used

- HTML5, CSS3 (custom properties for theming, no framework)
- Vanilla JavaScript (no build tooling, no dependencies)
- Deployed on Vercel

## Project structure

```
rajkumar-portfolio/
│
├── index.html          → page structure only
├── css/
│   └── style.css        → all styles (theme, layout, components, responsive rules)
├── js/
│   └── script.js         → all behavior (theme toggle, rendering, contact form, etc.)
├── assets/
│   ├── images/           → currently empty — see "Adding images" below
│   └── icons/            → currently empty — all icons are inline SVG in the HTML
├── resume.pdf            → downloadable resume (replace this file directly)
└── README.md
```

## How to run locally

No build step, no package manager needed.

1. Clone or download this repository.
2. Open `index.html` directly in a browser, **or** serve it locally so relative paths behave exactly as they will on Vercel:
   ```bash
   npx serve .
   # or
   python3 -m http.server 5500
   ```
3. Visit the printed local URL.

## How to update the resume

Replace `resume.pdf` in the project root with your real resume, **keeping the exact filename `resume.pdf`**. Every "Resume" / "Download Resume" link on the site already points at this file, so nothing else needs to change.

## How to add images

This build currently uses only inline SVG icons, so `assets/images/` and `assets/icons/` are empty placeholders.

- Put any photos, screenshots, or project images in `assets/images/` and reference them as:
  ```html
  <img src="assets/images/profile.jpg" alt="Rajkumar J" />
  ```
- Put any standalone icon files (`.svg`, `.png`) in `assets/icons/` and reference them the same way.

## How to update social links

Open `js/script.js` and edit the `CONFIG` object at the top of the file:

```js
const CONFIG = {
  githubUsername: 'rajkumar-work-in',
  linkedinUrl: 'https://www.linkedin.com/in/rajkumar-work-in',
  email: 'rajkumar.work.in@gmail.com',
  resumePath: 'resume.pdf',
  domain: 'https://rajkumar-portfolio-one.vercel.app'
};
```

Every GitHub, LinkedIn, email, and resume link on the page is populated from this one object at runtime — there's no need to hunt through the HTML.

Project data, skills, DSA stats, and the "currently exploring" lists are configured the same way, further down in `js/script.js` (`PROJECTS`, `SKILLS`, `DSA_STATS`, `LEARNING`, `AI_LEARNING`).

## How to connect the Spring Boot backend later

The contact form is already wired for this. Near the top of `js/script.js`:

```js
// ============================================================
// BACKEND API CONFIGURATION
// ============================================================
// Update this URL when the Spring Boot backend is deployed.
const API_BASE_URL = 'http://localhost:8080/api';
```

When the backend is deployed, replace that URL with the real one (e.g. `https://api.yourdomain.com/api`). The form already:

1. Validates name, email, and message on the client.
2. Sends a `POST` request to `${API_BASE_URL}/contact` with:
   ```json
   { "name": "...", "email": "...", "message": "..." }
   ```
3. Falls back to opening a pre-filled `mailto:` link automatically if that request fails — so the form keeps working even before the backend exists.

No HTML changes are needed on the frontend side once the backend is live — only the `API_BASE_URL` value.

## Deployment

Already deployed on Vercel. Because everything uses relative paths (`css/style.css`, `js/script.js`, `resume.pdf`), this project needs **no special Vercel configuration** — pushing to GitHub and importing the repo in Vercel is enough. A production build step is not required since there's no framework or bundler involved.

---

© Rajkumar J. Designed & developed with care.
